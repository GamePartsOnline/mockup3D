import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { authorizeAdmin, json, readJson } from './security.js';

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
    const filePath = path.join(submissionsDir, folder, file);
    if (!fsSync.existsSync(filePath)) return json(res, 404, { error: 'Fichier non trouvé.' });
    const ext = path.extname(file).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.mp4' ? 'video/mp4' : 'application/octet-stream';
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
