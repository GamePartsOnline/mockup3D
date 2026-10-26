import nodemailer from 'nodemailer';
import { acceptSubmission, json, readJson } from './security.js';

let active = 0;
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
    if (total > 19 * 1024 * 1024) {
      throw Object.assign(new Error('Dossier trop volumineux pour un courriel.'), { status: 413 });
    }
    attachments.push({ filename: file.name, content, contentType: file.type });
  }
  if (!attachments.some(a => a.filename.startsWith('wrap-')) ||
      !attachments.some(a => a.filename.startsWith('mockup-'))) throw new Error('Le wrap et le rendu PNG sont requis.');
  return attachments;
}

export async function submit(req, res) {
  if (!mailConfigured()) return json(res, 503, { error: "L'envoi mail doit être configuré sur le serveur." });
  if (!acceptSubmission(req, res)) return;
  if (active >= 4) return json(res, 503, { error: 'Le service est occupé. Réessayez plus tard.' });
  active++;
  let transporter;
  try {
    const body = await readJson(req);
    if (typeof body?.product !== 'string' || body.product.length > 120) {
      return json(res, 400, { error: 'Produit invalide.' });
    }
    let attachments;
    try { attachments = validateAttachments(body.files); }
    catch (error) { return json(res, error.status || 400, { error: error.message }); }
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 30_000,
      disableFileAccess: true, disableUrlAccess: true
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SUBMISSION_TO || 'callisto.gfx@gmail.com',
      subject: 'MockUp3D - nouvelle création client',
      text: 'Produit : ' + body.product.replace(/[\r\n]/g, ' ') +
        '\nFichiers joints : ' + attachments.map(a => a.filename).join(', '),
      attachments
    });
    json(res, 200, { ok: true });
  } catch (error) {
    console.error('Submission failed:', error.code || error.status || 'unknown');
    json(res, error.status || 502, { error: error.status ? error.message : "L'envoi a échoué. Réessayez plus tard." });
  } finally {
    active--;
    transporter?.close();
  }
}
