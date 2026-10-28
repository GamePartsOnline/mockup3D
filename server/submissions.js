import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';
import { acceptSubmission, json, readJson } from './security.js';

let active = 0;
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const submissionsDir = path.join(root, 'submissions');
export const mailConfigured = () => !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

function validateAttachments(files) {
  if (!Array.isArray(files) || files.length < 2 || files.length > 8) throw new Error('Dossier incomplet.');
  const attachments = [];
  let total = 0;
  for (const file of files) {
    const isPng = file?.type === 'image/png';
    const extension = isPng ? 'png' : file?.type === 'video/mp4' ? 'mp4' : null;
    if (!extension || typeof file.name !== 'string' || file.name.length > 120 ||
        !/^[a-zA-Z0-9._-]+$/.test(file.name) || !file.name.endsWith('.' + extension)) {
      throw new Error('Format de fichier invalide.');
    }
    const prefix = 'data:' + file.type + ';base64,';
    if (typeof file.data !== 'string' || !file.data.startsWith(prefix)) throw new Error('Contenu invalide.');
    const encoded = file.data.slice(prefix.length);
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(encoded) || encoded.length % 4) throw new Error('Encodage invalide.');
    const content = Buffer.from(encoded, 'base64');
    const valid = isPng
      ? content.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
      : content.subarray(4, 8).toString('ascii') === 'ftyp';
    if (!valid) throw new Error('Le contenu ne correspond pas au fichier.');
    total += content.length;
    if (total > 25 * 1024 * 1024) {
      throw Object.assign(new Error('Dossier trop volumineux pour transmission.'), { status: 413 });
    }
    attachments.push({ filename: file.name, content, contentType: file.type });
  }
  if (!attachments.some(a => a.filename.startsWith('wrap-')) ||
      !attachments.some(a => a.filename.startsWith('mockup-'))) throw new Error('Le wrap et le rendu PNG sont requis.');
  return attachments;
}

function validateClient(client) {
  if (!client || typeof client !== 'object') throw new Error('Les coordonnées sont obligatoires.');
  const nom = String(client.nom || '').trim();
  const prenom = String(client.prenom || '').trim();
  const adresse = String(client.adresse || '').trim();
  const codePostal = String(client.codePostal || '').trim();
  const ville = String(client.ville || '').trim();
  const email = String(client.email || '').trim().toLowerCase();
  const telephone = String(client.telephone || '').trim();
  const note = String(client.note || '').trim();

  if (!nom) throw new Error('Le nom est requis.');
  if (!prenom) throw new Error('Le prénom est requis.');
  if (!adresse) throw new Error("L'adresse postale est requise.");
  if (!codePostal) throw new Error('Le code postal est requis.');
  if (!ville) throw new Error('La ville est requise.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Une adresse email valide est requise.');
  if (!telephone || telephone.length < 6) throw new Error('Un numéro de téléphone valide est requis.');

  return { nom, prenom, adresse, codePostal, ville, email, telephone, note: note.slice(0, 1000) };
}

async function sendMailNotification(client, product, attachments) {
  if (!mailConfigured()) return { sent: false, reason: 'smtp_not_configured' };
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 30_000,
    disableFileAccess: true, disableUrlAccess: true
  });
  try {
    const textBody = [
      `NOUVELLE CRÉATION CLIENT - MOCKUP3D`,
      `------------------------------------`,
      `Date : ${new Date().toLocaleString('fr-FR')}`,
      `Produit : ${product}`,
      ``,
      `COORDONNÉES DU CLIENT :`,
      `Nom : ${client.nom}`,
      `Prénom : ${client.prenom}`,
      `Adresse : ${client.adresse}`,
      `Code Postal : ${client.codePostal}`,
      `Ville : ${client.ville}`,
      `Email : ${client.email}`,
      `Téléphone : ${client.telephone}`,
      client.note ? `Note du client : ${client.note}` : '',
      ``,
      `Fichiers joints (${attachments.length}) :`,
      attachments.map(a => '- ' + a.filename).join('\n')
    ].filter(Boolean).join('\n');

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SUBMISSION_TO || 'callisto.gfx@gmail.com',
      replyTo: client.email,
      subject: `[MockUp3D] Création de ${client.nom} ${client.prenom} - ${product}`,
      text: textBody,
      attachments
    });
    return { sent: true };
  } catch (err) {
    console.error('SMTP sendMail error:', err?.message || err);
    return { sent: false, reason: err?.message || 'smtp_error' };
  } finally {
    transporter?.close();
  }
}

export async function submit(req, res) {
  if (!acceptSubmission(req, res)) return;
  if (active >= 4) return json(res, 503, { error: 'Le service est occupé. Réessayez plus tard.' });
  active++;
  try {
    const body = await readJson(req);
    if (typeof body?.product !== 'string' || body.product.length > 120) {
      return json(res, 400, { error: 'Produit invalide.' });
    }
    let attachments;
    try { attachments = validateAttachments(body.files); }
    catch (error) { return json(res, error.status || 400, { error: error.message }); }

    let client;
    try { client = validateClient(body.client); }
    catch (error) { return json(res, 400, { error: error.message }); }

    const dateStr = new Date().toISOString().replace(/[:.]/g, '-');
    const safeNom = client.nom.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30);
    const safeProduct = body.product.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 30);
    const folderName = `${dateStr}_${safeNom}_${safeProduct}`;
    const targetDir = path.join(submissionsDir, folderName);
    fs.mkdirSync(targetDir, { recursive: true });

    const savedFiles = [];
    for (const file of attachments) {
      fs.writeFileSync(path.join(targetDir, file.filename), file.content);
      savedFiles.push({ name: file.filename, size: file.content.length, type: file.contentType });
    }

    const mailResult = await sendMailNotification(client, body.product, attachments);

    const submissionData = {
      id: folderName,
      folder: folderName,
      date: new Date().toISOString(),
      status: 'nouveau',
      product: body.product,
      client,
      files: savedFiles,
      emailStatus: mailResult.sent ? 'sent' : (mailResult.reason || 'not_sent')
    };
    fs.writeFileSync(path.join(targetDir, 'submission.json'), JSON.stringify(submissionData, null, 2), 'utf8');

    return json(res, 200, {
      ok: true,
      id: folderName,
      emailSent: mailResult.sent,
      message: mailResult.sent
        ? 'Création et coordonnées transmises avec succès par courriel et enregistrées à l’atelier.'
        : 'Création et coordonnées enregistrées avec succès à l’atelier.'
    });
  } catch (error) {
    console.error('Submission failed:', error.code || error.status || error);
    json(res, error.status || 500, { error: error.message || "L'envoi a échoué. Réessayez plus tard." });
  } finally {
    active--;
  }
}
