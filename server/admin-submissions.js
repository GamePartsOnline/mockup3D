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
  const hasCart = Array.isArray(d.cart) && d.cart.length > 0;
  const isRejected = d.status === 'non_conforme' || d.status === 'refuse';

  const cartHtml = hasCart ? `
    <div class="section-title">Détail du panier multi-produits (${d.cart.length} articles)</div>
    <table style="width:100%; border-collapse:collapse; margin-bottom:16px; font-size:13px;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:2px solid #cbd5e1;">
          <th style="padding:8px 10px;">Article</th>
          <th style="padding:8px 10px;">Visuel associé</th>
          <th style="padding:8px 10px; text-align:center;">Qté</th>
          <th style="padding:8px 10px; text-align:right;">P.U.</th>
          <th style="padding:8px 10px; text-align:right;">Sous-total</th>
        </tr>
      </thead>
      <tbody>
        ${d.cart.map((item, idx) => `
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:8px 10px; font-weight:700; color:#1e1b4b;">${item.productName || item.productKey || 'Produit'}</td>
            <td style="padding:8px 10px; color:#475569;">${item.visualName || 'Visuel personnalisé'}</td>
            <td style="padding:8px 10px; text-align:center; font-weight:800; color:#4f46e5;">${item.quantity || 1}</td>
            <td style="padding:8px 10px; text-align:right;">${item.unitPrice || '—'}</td>
            <td style="padding:8px 10px; text-align:right; font-weight:700;">${item.totalItemPrice || '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  ` : '';

  const discountHtml = d.discount ? `
    <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:6px; padding:10px 14px; margin-bottom:16px; font-size:13px; color:#065f46;">
      Remise code cadeau appliquée : <strong>${d.discount.code || 'CODE'}</strong> (${d.discount.label || ''}) : <strong>-${d.discount.amount || 0} €</strong>
    </div>
  ` : '';

  const rejectBannerHtml = isRejected ? `
    <div style="background:#fef2f2; border:2px solid #ef4444; border-radius:8px; padding:12px 16px; margin-bottom:18px; color:#991b1b; font-size:13.5px;">
      <strong>✕ COMMANDE NON CONFORME / REFUSÉE PAR L’ATELIER</strong><br>
      Motif : ${d.rejectionReason || 'Visuel non conforme aux critères d’impression.'}
    </div>
  ` : '';

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

    ${rejectBannerHtml}

    <div class="section-title">Synthèse de la commande</div>
    <div class="product-box">
      <div>
        <div style="font-size:16px; font-weight:800; color:#1e1b4b;">${d.product || d.productKey || 'Produit personnalisé'}</div>
        <div style="font-size:12.5px; color:#475569;">Prix unitaire : <strong>${unitP}</strong></div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:12px; color:#64748b;">Quantité totale</div>
        <div style="font-size:22px; font-weight:900; color:#4f46e5;">${qty} ex.</div>
        <div style="font-size:12.5px; font-weight:700; color:#0f172a;">Total TTC : ${totalP}</div>
      </div>
    </div>

    ${discountHtml}
    ${cartHtml}

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
  const hasCart = Array.isArray(d.cart) && d.cart.length > 0;

  let cartTxt = '';
  if (hasCart) {
    cartTxt = '\r\nARTICLES DU PANIER MULTI-PRODUITS :\r\n' +
      d.cart.map((item, idx) => `  ${idx + 1}. ${item.productName || item.productKey || 'Produit'} x${item.quantity || 1} - P.U: ${item.unitPrice || '—'} - Total: ${item.totalItemPrice || '—'} (Visuel: ${item.visualName || 'défaut'})`).join('\r\n') + '\r\n';
  }

  let promoTxt = '';
  if (d.discount) {
    promoTxt = `\r\nREMISE CODE CADEAU :\r\n- Code : ${d.discount.code} (-${d.discount.amount || 0} €) - ${d.discount.label || ''}\r\n`;
  }

  let rejectTxt = '';
  if (d.status === 'non_conforme' || d.status === 'refuse') {
    rejectTxt = `\r\nATTENTION : COMMANDE REFUSÉE / NON CONFORME\r\nMotif : ${d.rejectionReason || 'Visuel non conforme'}\r\n`;
  }

  return `=====================================================
GPO SARL • GRAPH2PRINT - FICHE DE COMMANDE ATELIER
=====================================================
Référence : ${ref}
Date      : ${dateStr}
Statut    : ${d.status || 'nouveau'}${rejectTxt}

ARTICLE COMMANDÉ :
- Produit  : ${d.product || d.productKey || 'Produit personnalisé'}
- Quantité : ${qty} exemplaire(s)
- Prix unitaire : ${unitP}
- Total TTC     : ${totalP}${promoTxt}${cartTxt}
CLIENT :
- Nom       : ${clientName}
- Courriel  : ${d.client?.email || '—'}
- Téléphone : ${d.client?.telephone || '—'}
- Adresse   : ${d.client?.adresse || '—'}
- Ville     : ${d.client?.codePostal || ''} ${d.client?.ville || ''}
${d.client?.note ? `- Note client : ${d.client.note}\r\n` : ''}
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

// Creation d'une proposition de commande / BAT prepare par l'atelier pour un client
export async function adminCreateProposition(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const email = String(body.clientEmail || '').trim().toLowerCase();
    const nom = String(body.clientNom || 'Client').trim();
    const prenom = String(body.clientPrenom || '').trim();
    const productKey = String(body.productKey || 'mug11oz').trim();
    const productName = String(body.productName || 'Objet personnalisé').trim();
    const quantity = Math.max(1, parseInt(body.quantity || '1', 10));
    const unitPrice = String(body.price || '15,00 €').trim();
    const totalPrice = String(body.totalPrice || unitPrice).trim();
    const customMessage = String(body.message || 'Voici la maquette préparée sur mesure par l’atelier Graph2Print. Merci de valider votre BAT électronique pour lancer la fabrication.').trim();

    if (!email || !email.includes('@')) {
      return json(res, 400, { error: 'Adresse courriel valide du client requise.' });
    }

    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timePrefix = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
    const cleanNom = nom.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase().slice(0, 12);
    const folderName = `${timePrefix}-BAT-PROPO-${cleanNom}`;
    const targetDir = path.join(submissionsDir, folderName);

    await fs.mkdir(targetDir, { recursive: true });

    // Enregistrer bat_mockup.png si fourni
    if (body.batImage && body.batImage.includes('base64,')) {
      const base64Data = body.batImage.split('base64,')[1];
      await fs.writeFile(path.join(targetDir, 'bat_mockup.png'), Buffer.from(base64Data, 'base64'));
    } else {
      const transparentPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
      await fs.writeFile(path.join(targetDir, 'bat_mockup.png'), transparentPng);
    }

    // Enregistrer visuel_client.png si fourni
    if (body.visualImage && body.visualImage.includes('base64,')) {
      const base64Data = body.visualImage.split('base64,')[1];
      await fs.writeFile(path.join(targetDir, 'visuel_client.png'), Buffer.from(base64Data, 'base64'));
    } else {
      const transparentPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
      await fs.writeFile(path.join(targetDir, 'visuel_client.png'), transparentPng);
    }

    const submissionData = {
      id: `BAT-${now.getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
      folder: folderName,
      date: now.toISOString(),
      product: productName,
      productKey,
      quantity,
      unitPrice,
      totalPrice,
      status: 'bat_a_valider',
      isWorkshopProposition: true,
      checks: {
        batConforme: false,
        imprime: false,
        presse: false,
        expedie: false
      },
      client: {
        nom,
        prenom,
        email,
        telephone: String(body.clientTelephone || '').trim(),
        adresse: String(body.clientAdresse || '').trim(),
        codePostal: String(body.clientCp || '').trim(),
        ville: String(body.clientVille || '').trim(),
        note: 'Proposition de BAT préparée par l’atelier Graph2Print.'
      },
      messages: [
        {
          id: `msg-${Date.now()}-init`,
          sender: 'atelier',
          author: 'Atelier Graph2Print',
          date: now.toISOString(),
          text: customMessage
        }
      ]
    };

    await fs.writeFile(path.join(targetDir, 'submission.json'), JSON.stringify(submissionData, null, 2), 'utf8');

    return json(res, 201, {
      ok: true,
      message: 'Proposition de BAT créée et transmise au client !',
      folder: folderName,
      submission: submissionData
    });
  } catch (err) {
    console.error('adminCreateProposition error:', err);
    return json(res, 500, { error: 'Erreur lors de la création de la proposition.' });
  }
}

// Validation directe du BAT par le client depuis son espace
export async function clientApproveBat(req, res) {
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    if (!folder) return json(res, 400, { error: 'Dossier de commande requis.' });

    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Commande introuvable.' });

    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));
    data.status = 'bat_valide_client';
    if (!data.checks) data.checks = {};
    data.checks.batConforme = true;

    if (!Array.isArray(data.messages)) data.messages = [];
    data.messages.push({
      id: `msg-${Date.now()}-approved`,
      sender: 'client',
      author: data.client?.prenom ? `${data.client.prenom} ${data.client.nom}` : 'Client',
      date: new Date().toISOString(),
      text: '✓ Bon à Tirer (BAT) électronique validé sans réserve. Commande confirmée pour impression !'
    });

    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');

    return json(res, 200, {
      ok: true,
      message: 'BAT validé avec succès ! Votre commande passe immédiatement en cours de fabrication à l’atelier.',
      submission: data
    });
  } catch (err) {
    console.error('clientApproveBat error:', err);
    return json(res, 500, { error: 'Erreur lors de la validation du BAT.' });
  }
}

export async function rejectSubmission(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    const reason = String(body.reason || 'Visuel non conforme aux contraintes d’impression.').trim();
    if (!folder) return json(res, 400, { error: 'Dossier de commande requis.' });

    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Commande introuvable.' });

    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));
    data.status = 'non_conforme';
    if (!data.checks) data.checks = {};
    data.checks.batConforme = false;
    data.rejectionReason = reason;
    data.rejectedAt = new Date().toISOString();

    if (!Array.isArray(data.messages)) data.messages = [];
    data.messages.push({
      id: `msg-${Date.now()}-rejected`,
      sender: 'atelier',
      author: 'Atelier Graph2Print',
      date: new Date().toISOString(),
      text: `✕ Votre création a été vérifiée par l'équipe technique de l'Atelier mais ne peut pas être mise en production en l'état. Motif : "${reason}". Merci de charger un nouveau fichier ou de nous contacter dans cette messagerie.`
    });

    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');

    // Régénérer les fiches atelier à jour
    try {
      const allFiles = await fs.readdir(path.join(submissionsDir, folder));
      await fs.writeFile(path.join(submissionsDir, folder, 'FICHE_ATELIER.html'), generateWorkshopHtml(data, allFiles, folder), 'utf8');
      await fs.writeFile(path.join(submissionsDir, folder, 'RECAPITULATIF_COMMANDE.txt'), generateWorkshopTxt(data, allFiles), 'utf8');
    } catch (e) {}

    return json(res, 200, {
      ok: true,
      message: 'La commande a été marquée comme non conforme. Le client a été notifié par message.',
      status: 'non_conforme',
      reason
    });
  } catch (err) {
    console.error('rejectSubmission error:', err);
    return json(res, 500, { error: 'Erreur lors du refus de la commande.' });
  }
}

export async function updateSubmissionDetails(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const folder = path.basename(body.folder || '');
    if (!folder) return json(res, 400, { error: 'Dossier de commande requis.' });

    const metaPath = path.join(submissionsDir, folder, 'submission.json');
    if (!fsSync.existsSync(metaPath)) return json(res, 404, { error: 'Commande introuvable.' });

    const data = JSON.parse(await fs.readFile(metaPath, 'utf8'));

    // Mise à jour des informations modifiables
    if (typeof body.product === 'string' && body.product.trim()) data.product = body.product.trim();
    if (typeof body.productKey === 'string' && body.productKey.trim()) data.productKey = body.productKey.trim();
    if (body.quantity !== undefined) data.quantity = Math.max(1, parseInt(body.quantity, 10) || 1);
    if (typeof body.unitPrice === 'string') data.unitPrice = body.unitPrice.trim();
    if (typeof body.totalPrice === 'string') data.totalPrice = body.totalPrice.trim();
    if (typeof body.customText === 'string') data.customText = body.customText.trim();

    if (body.client && typeof body.client === 'object') {
      if (!data.client) data.client = {};
      if (body.client.nom !== undefined) data.client.nom = String(body.client.nom).trim();
      if (body.client.prenom !== undefined) data.client.prenom = String(body.client.prenom).trim();
      if (body.client.email !== undefined) data.client.email = String(body.client.email).trim().toLowerCase();
      if (body.client.telephone !== undefined) data.client.telephone = String(body.client.telephone).trim();
      if (body.client.adresse !== undefined) data.client.adresse = String(body.client.adresse).trim();
      if (body.client.codePostal !== undefined) data.client.codePostal = String(body.client.codePostal).trim();
      if (body.client.ville !== undefined) data.client.ville = String(body.client.ville).trim();
      if (body.client.note !== undefined) data.client.note = String(body.client.note).trim();
    }

    data.lastModifiedAt = new Date().toISOString();

    await fs.writeFile(metaPath, JSON.stringify(data, null, 2), 'utf8');

    // Régénérer les fiches atelier
    try {
      const allFiles = await fs.readdir(path.join(submissionsDir, folder));
      await fs.writeFile(path.join(submissionsDir, folder, 'FICHE_ATELIER.html'), generateWorkshopHtml(data, allFiles, folder), 'utf8');
      await fs.writeFile(path.join(submissionsDir, folder, 'RECAPITULATIF_COMMANDE.txt'), generateWorkshopTxt(data, allFiles), 'utf8');
    } catch (e) {}

    return json(res, 200, {
      ok: true,
      message: 'Commande modifiée et mise à jour avec succès.',
      submission: data
    });
  } catch (err) {
    console.error('updateSubmissionDetails error:', err);
    return json(res, 500, { error: 'Erreur lors de la mise à jour de la commande.' });
  }
}
