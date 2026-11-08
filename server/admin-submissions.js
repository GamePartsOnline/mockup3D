import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { authorizeAdmin, json, readJson } from './security.js';
import { createZipBuffer } from './tiny-zip.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export const submissionsDir = path.join(root, 'submissions');

export async function getSubmissions(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    await fs.mkdir(submissionsDir, { recursive: true });
    const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
    const list = [];
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const subDir = path.join(submissionsDir, ent.name);
      const metaPath = path.join(subDir, 'submission.json');
      try {
        const raw = await fs.readFile(metaPath, 'utf8');
        const data = JSON.parse(raw);
        data.id = data.id || ent.name;
        data.folder = ent.name;
        list.push(data);
      } catch {}
    }
    list.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return json(res, 200, { ok: true, submissions: list });
  } catch (error) {
    console.error('Failed to load submissions:', error);
    return json(res, 500, { error: 'Impossible de charger les soumissions.' });
  }
}

export async function serveSubmissionFile(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const url = new URL(req.url, 'http://localhost');
    const folder = path.basename(url.searchParams.get('folder') || '');
    const file = path.basename(url.searchParams.get('file') || '');
    if (!folder || !file) return json(res, 400, { error: 'Paramètres manquants.' });
    const targetDir = path.join(submissionsDir, folder);
    const filePath = path.join(targetDir, file);

    // Si la fiche atelier HTML ou TXT est demandée et n'existe pas encore sur disque, on la génère à la volée
    if (!fsSync.existsSync(filePath) && (file === 'FICHE_ATELIER.html' || file === 'RECAPITULATIF_COMMANDE.txt')) {
      const metaPath = path.join(targetDir, 'submission.json');
      if (fsSync.existsSync(metaPath)) {
        const raw = await fs.readFile(metaPath, 'utf8');
        const d = JSON.parse(raw);
        const entries = await fs.readdir(targetDir);
        if (file === 'FICHE_ATELIER.html') {
          await fs.writeFile(filePath, generateWorkshopHtml(d, entries, folder), 'utf8');
        } else {
          await fs.writeFile(filePath, generateWorkshopTxt(d, entries), 'utf8');
        }
      }
    }

    if (!fsSync.existsSync(filePath)) return json(res, 404, { error: 'Fichier non trouvé.' });
    const ext = path.extname(file).toLowerCase();
    const mime = ext === '.png' ? 'image/png'
      : ext === '.mp4' ? 'video/mp4'
      : ext === '.html' ? 'text/html; charset=utf-8'
      : ext === '.txt' ? 'text/plain; charset=utf-8'
      : ext === '.json' ? 'application/json'
      : 'application/octet-stream';
    const stat = await fs.stat(filePath);
    res.writeHead(200, {
      'Content-Type': mime,
      'Content-Length': stat.size,
      'Cache-Control': 'no-store'
    });
    fsSync.createReadStream(filePath).pipe(res);
  } catch (error) {
    console.error('Serve file failed:', error);
    return json(res, 500, { error: 'Erreur lors de la lecture du fichier.' });
  }
}

export async function updateSubmissionStatus(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    const status = String(body.status || 'nouveau').trim();
    if (!folder) return json(res, 400, { error: 'Dossier manquant.' });
    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Soumission introuvable.' });
    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));
    data.status = status;
    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');
    return json(res, 200, { ok: true, status });
  } catch (error) {
    return json(res, 500, { error: 'Impossible de mettre à jour le statut.' });
  }
}

export async function updateSubmissionChecks(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    if (!folder) return json(res, 400, { error: 'Dossier manquant.' });
    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Soumission introuvable.' });
    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));
    if (!data.checks) data.checks = {};
    const chk = (body.checks && typeof body.checks === 'object') ? body.checks : body;
    if (typeof chk.batPreview === 'boolean') data.checks.batPreview = chk.batPreview;
    if (typeof chk.batConforme === 'boolean') data.checks.batConforme = chk.batConforme;
    if (typeof chk.clientVisual === 'boolean') data.checks.clientVisual = chk.clientVisual;
    if (typeof chk.sourceFile === 'boolean') data.checks.sourceFile = chk.sourceFile;
    if (typeof chk.imprime === 'boolean') data.checks.imprime = chk.imprime;
    if (typeof chk.presse === 'boolean') data.checks.presse = chk.presse;
    if (typeof chk.expedie === 'boolean') data.checks.expedie = chk.expedie;
    if (typeof chk.atelierAutre === 'string') data.checks.atelierAutre = chk.atelierAutre;
    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');
    return json(res, 200, { ok: true, checks: data.checks });
  } catch (error) {
    return json(res, 500, { error: 'Impossible d\'enregistrer les vérifications du dossier.' });
  }
}

export async function deleteSubmission(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    if (!folder) return json(res, 400, { error: 'Dossier manquant.' });
    const targetDir = path.join(submissionsDir, folder);
    if (!fsSync.existsSync(targetDir)) return json(res, 404, { error: 'Dossier introuvable.' });
    await fs.rm(targetDir, { recursive: true, force: true });
    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, { error: 'Suppression impossible.' });
  }
}

export async function downloadSubmissionZip(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const url = new URL(req.url, 'http://localhost');
    const folder = path.basename(url.searchParams.get('folder') || '');
    if (!folder) return json(res, 400, { error: 'Dossier manquant.' });
    const targetDir = path.join(submissionsDir, folder);
    if (!fsSync.existsSync(targetDir)) return json(res, 404, { error: 'Dossier introuvable.' });

    // S'assurer que la fiche atelier imprimable et le texte récapitulatif sont présents
    const metaPath = path.join(targetDir, 'submission.json');
    if (fsSync.existsSync(metaPath)) {
      try {
        const raw = await fs.readFile(metaPath, 'utf8');
        const d = JSON.parse(raw);
        const entriesBefore = await fs.readdir(targetDir);
        const htmlPath = path.join(targetDir, 'FICHE_ATELIER.html');
        const txtPath = path.join(targetDir, 'RECAPITULATIF_COMMANDE.txt');
        await fs.writeFile(htmlPath, generateWorkshopHtml(d, entriesBefore, folder), 'utf8');
        await fs.writeFile(txtPath, generateWorkshopTxt(d, entriesBefore), 'utf8');
      } catch (err) {
        console.warn('Erreur génération documents atelier:', err);
      }
    }

    const entries = await fs.readdir(targetDir);
    const filesToZip = [];
    for (const file of entries) {
      const filePath = path.join(targetDir, file);
      const stat = await fs.stat(filePath);
      if (stat.isFile()) {
        const buf = await fs.readFile(filePath);
        filesToZip.push({ name: file, buffer: buf });
      }
    }

    const zipBuffer = createZipBuffer(filesToZip);
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="atelier-${folder}.zip"`,
      'Content-Length': zipBuffer.length,
      'Cache-Control': 'no-store'
    });
    res.end(zipBuffer);
  } catch (error) {
    console.error('Download zip failed:', error);
    return json(res, 500, { error: 'Erreur lors de la création du zip.' });
  }
}

export function generateWorkshopHtml(d, filenames, folder = '') {
  const batFile = filenames.find(f => f.startsWith('mockup-') || f.startsWith('bat_') || f.includes('mockup')) || '';
  const visuelFile = filenames.find(f => f.startsWith('wrap-') || f.startsWith('visuel_') || f.includes('visuel')) || '';
  const clientName = `${d.client?.nom || ''} ${d.client?.prenom || ''}`.trim() || 'Client';
  const qty = d.quantity || 1;
  const unitP = d.unitPrice || '—';
  const totalP = d.totalPrice || '—';
  const dateStr = d.date ? new Date(d.date).toLocaleString('fr-FR') : '—';
  const ref = d.id || d.folder || 'CMD';
  const folderName = folder || d.folder || '';
  const batUrl = folderName && batFile ? `/api/admin/submissions/file?folder=${encodeURIComponent(folderName)}&file=${encodeURIComponent(batFile)}` : (batFile ? `./${batFile}` : '');
  const visuelUrl = folderName && visuelFile ? `/api/admin/submissions/file?folder=${encodeURIComponent(folderName)}&file=${encodeURIComponent(visuelFile)}` : (visuelFile ? `./${visuelFile}` : '');

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Fiche Fabrication Atelier - ${ref}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; margin: 24px; color: #1e293b; background: #f8fafc; }
    .card { max-width: 820px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 28px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #4f46e5; padding-bottom: 16px; margin-bottom: 20px; }
    .title { font-size: 20px; font-weight: 800; color: #1e1b4b; }
    .ref-badge { font-size: 14px; font-weight: 700; background: #e0e7ff; color: #4338ca; padding: 6px 12px; border-radius: 6px; }
    .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 18px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .item { font-size: 13.5px; line-height: 1.5; }
    .item strong { color: #0f172a; }
    .product-box { background: #f1f5f9; border-radius: 8px; padding: 14px 18px; margin: 12px 0; display: flex; justify-content: space-between; align-items: center; }
    .previews { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0; }
    .preview-box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; text-align: center; background: #ffffff; }
    .preview-box img { max-width: 100%; max-height: 240px; object-fit: contain; }
    .preview-box small { display: block; font-size: 11px; font-weight: 700; color: #64748b; margin-top: 6px; }
    .checklist { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 8px; padding: 12px 18px; font-size: 12.5px; line-height: 1.8; margin-top: 18px; }
    @media print { body { background: #fff; margin: 0; } .card { border: none; box-shadow: none; padding: 0; } button { display: none; } }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div>
        <div class="title">GPO SARL • GRAPH2PRINT</div>
        <div style="font-size:12px; color:#64748b;">Fiche de Fabrication Atelier & Bon de Commande</div>
      </div>
      <div>
        <div class="ref-badge">${ref}</div>
        <div style="font-size:11px; color:#64748b; text-align:right; margin-top:4px;">${dateStr}</div>
      </div>
    </div>

    <div class="section-title">Article à fabriquer</div>
    <div class="product-box">
      <div>
        <div style="font-size:16px; font-weight:800; color:#1e1b4b;">${d.product || d.productKey || 'Produit personnalisé'}</div>
        <div style="font-size:12.5px; color:#475569;">Prix unitaire : <strong>${unitP}</strong></div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:12px; color:#64748b;">Quantité commandée</div>
        <div style="font-size:22px; font-weight:900; color:#4f46e5;">${qty} ex.</div>
        <div style="font-size:12.5px; font-weight:700; color:#0f172a;">Total : ${totalP}</div>
      </div>
    </div>

    <div class="section-title">Coordonnées Client & Livraison</div>
    <div class="grid">
      <div class="item">
        <strong>Client :</strong> ${clientName}<br>
        <strong>Courriel :</strong> ${d.client?.email || '—'}<br>
        <strong>Téléphone :</strong> ${d.client?.telephone || '—'}
      </div>
      <div class="item">
        <strong>Adresse de livraison :</strong><br>
        ${d.client?.adresse || '—'}<br>
        ${d.client?.codePostal || ''} ${d.client?.ville || ''}
      </div>
    </div>

    ${d.client?.note ? `
    <div class="section-title">Note / Instruction Client</div>
    <div style="padding:10px 14px; background:#fffbeb; border:1px solid #fef3c7; border-radius:6px; font-size:12.5px; color:#92400e;">
      ${d.client.note}
    </div>` : ''}

    <div class="section-title">Aperçus de Production (BAT & Fichier Source)</div>
    <div class="previews">
      ${batFile ? `<div class="preview-box"><img src="${batUrl}" onerror="if(this.src!=='./${batFile}')this.src='./${batFile}'" alt="Aperçu BAT 3D"><small>Aperçu BAT 3D Conforme</small></div>` : ''}
      ${visuelFile ? `<div class="preview-box"><img src="${visuelUrl}" onerror="if(this.src!=='./${visuelFile}')this.src='./${visuelFile}'" alt="Visuel Client"><small>Fichier Graphique Source</small></div>` : ''}
    </div>

    <div class="checklist">
      <strong>Contrôle qualité atelier :</strong><br>
      [ ] Impression réalisée &nbsp;&nbsp;|&nbsp;&nbsp;
      [ ] Contrôle repérage / couleurs &nbsp;&nbsp;|&nbsp;&nbsp;
      [ ] Emballage protégé &nbsp;&nbsp;|&nbsp;&nbsp;
      [ ] Expédition effectuée
    </div>

    <div style="margin-top:20px; text-align:center;">
      <button onclick="window.print()" style="padding:8px 18px; font-weight:700; background:#4f46e5; color:#fff; border:none; border-radius:6px; cursor:pointer; font-size:13px;">Imprimer cette fiche atelier</button>
    </div>
  </div>
</body>
</html>`;
}

export function generateWorkshopTxt(d, filenames) {
  const clientName = `${d.client?.nom || ''} ${d.client?.prenom || ''}`.trim() || 'Client';
  const qty = d.quantity || 1;
  const unitP = d.unitPrice || '—';
  const totalP = d.totalPrice || '—';
  const dateStr = d.date ? new Date(d.date).toLocaleString('fr-FR') : '—';
  const ref = d.id || d.folder || 'CMD';

  return `=====================================================
GPO SARL • GRAPH2PRINT - FICHE DE COMMANDE ATELIER
=====================================================
Référence : ${ref}
Date      : ${dateStr}
Statut    : ${d.status || 'nouveau'}

ARTICLE COMMANDÉ :
- Produit  : ${d.product || d.productKey || 'Produit personnalisé'}
- Quantité : ${qty} exemplaire(s)
- Prix unitaire : ${unitP}
- Total TTC     : ${totalP}

CLIENT :
- Nom       : ${clientName}
- Courriel  : ${d.client?.email || '—'}
- Téléphone : ${d.client?.telephone || '—'}
- Adresse   : ${d.client?.adresse || '—'}
- Ville     : ${d.client?.codePostal || ''} ${d.client?.ville || ''}
${d.client?.note ? `- Note client : ${d.client.note}\n` : ''}
FICHIERS INCLUS DANS CETTE ARCHIVE :
${filenames.map(f => '- ' + f).join('\r\n')}

Pour imprimer le bon avec les visuels graphiques, double-cliquez sur "FICHE_ATELIER.html".
=====================================================`;
}

export async function exportSubmissionsCsv(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
    const rows = [
      ['ID', 'Date', 'Nom Client', 'Courriel', 'Telephone', 'Ville', 'Produit', 'Statut', 'Dossier'].join(';')
    ];
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const metaPath = path.join(submissionsDir, ent.name, 'submission.json');
      try {
        const raw = await fs.readFile(metaPath, 'utf8');
        const d = JSON.parse(raw);
        const sanitize = (s) => String(s || '').replace(/[\r\n;"]/g, ' ').trim();
        rows.push([
          sanitize(d.id || ent.name),
          sanitize(d.date),
          sanitize(`${d.client?.nom || ''} ${d.client?.prenom || ''}`),
          sanitize(d.client?.email),
          sanitize(d.client?.telephone),
          sanitize(d.client?.ville),
          sanitize(d.productKey || d.product?.name),
          sanitize(d.status || 'nouveau'),
          sanitize(ent.name)
        ].join(';'));
      } catch {}
    }
    const csvContent = '\uFEFF' + rows.join('\r\n');
    res.writeHead(200, {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="commandes-mockup3d.csv"',
      'Cache-Control': 'no-store'
    });
    res.end(csvContent);
  } catch (err) {
    return json(res, 500, { error: 'Erreur lors de la génération du CSV.' });
  }
}

export async function getClientOrders(req, res) {
  try {
    const url = new URL(req.url, 'http://localhost');
    const email = (url.searchParams.get('email') || '').trim().toLowerCase();
    const ref = (url.searchParams.get('ref') || '').trim();
    if (!email && !ref) return json(res, 400, { error: 'Courriel ou référence requise.' });

    const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
    const orders = [];
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const metaPath = path.join(submissionsDir, ent.name, 'submission.json');
      try {
        const raw = await fs.readFile(metaPath, 'utf8');
        const d = JSON.parse(raw);
        const matchEmail = email && d.client?.email?.toLowerCase() === email;
        const matchRef = ref && (d.folder === ref || d.id === ref);
        if (matchEmail || matchRef) {
          orders.push({
            id: d.id || ent.name,
            folder: ent.name,
            date: d.date,
            product: d.product || d.productKey,
            productKey: d.productKey,
            quantity: d.quantity || 1,
            unitPrice: d.unitPrice || '',
            totalPrice: d.totalPrice || '',
            status: d.status || 'nouveau',
            client: {
              nom: d.client?.nom || '',
              prenom: d.client?.prenom || '',
              email: d.client?.email || ''
            },
            checks: d.checks || {},
            messages: Array.isArray(d.messages) ? d.messages : [],
            files: (d.files || []).map(f => ({
              name: f.name || f,
              url: `/api/admin/submissions/file?folder=${encodeURIComponent(ent.name)}&file=${encodeURIComponent(f.name || f)}`
            }))
          });
        }
      } catch {}
    }
    orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return json(res, 200, { ok: true, orders });
  } catch (err) {
    console.error('getClientOrders error:', err);
    return json(res, 500, { error: 'Erreur lors du chargement des commandes.' });
  }
}

export async function addSubmissionMessage(req, res) {
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    const text = String(body.text || '').trim();
    const sender = body.sender === 'admin' ? 'atelier' : 'client';
    if (!folder || !text) return json(res, 400, { error: 'Dossier et message requis.' });

    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Commande introuvable.' });

    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));
    if (!Array.isArray(data.messages)) data.messages = [];

    const author = sender === 'atelier'
      ? 'Atelier Graph2Print'
      : (data.client?.prenom ? `${data.client.prenom} ${data.client.nom}` : 'Client');

    const newMsg = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      sender,
      author,
      date: new Date().toISOString(),
      text: text.slice(0, 2000)
    };
    data.messages.push(newMsg);
    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');
    return json(res, 200, { ok: true, message: newMsg, messages: data.messages });
  } catch (err) {
    console.error('addSubmissionMessage error:', err);
    return json(res, 500, { error: 'Impossible d\'envoyer le message.' });
  }
}
