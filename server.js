import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import nodemailer from 'nodemailer';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
if (fs.existsSync(path.join(root, '.env'))) process.loadEnvFile(path.join(root, '.env'));
const recipient = process.env.SUBMISSION_TO || 'callisto.gfx@gmail.com';
const maxBody = 28 * 1024 * 1024;
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.avif': 'image/avif', '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm', '.obj': 'text/plain; charset=utf-8',
  '.mtl': 'text/plain; charset=utf-8'
};
const recent = new Map();

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBody) throw Object.assign(new Error('Fichiers trop volumineux'), { status: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function submit(req, res) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return json(res, 503, { error: "L'envoi mail doit être configuré sur le serveur." });
  }
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;
  const now = Date.now();
  if (now - (recent.get(ip) || 0) < 60_000) return json(res, 429, { error: 'Attendez une minute avant un nouvel envoi.' });
  try {
    const body = await readJson(req);
    if (!body || typeof body.product !== 'string' || !Array.isArray(body.files) || body.files.length < 2 || body.files.length > 8) {
      return json(res, 400, { error: 'Dossier incomplet.' });
    }
    const attachments = [];
    let total = 0;
    for (const file of body.files) {
      if (typeof file.name !== 'string' || !/^[a-zA-Z0-9._-]+\.(png|mp4)$/.test(file.name) ||
          !['image/png', 'video/mp4'].includes(file.type) || typeof file.data !== 'string') {
        return json(res, 400, { error: 'Format de fichier invalide.' });
      }
      const prefix = file.type === 'image/png' ? 'data:image/png;base64,' : 'data:video/mp4;base64,';
      if (!file.data.startsWith(prefix)) return json(res, 400, { error: 'Contenu de fichier invalide.' });
      const content = Buffer.from(file.data.slice(prefix.length), 'base64');
      total += content.length;
      if (total > 19 * 1024 * 1024) return json(res, 413, { error: 'Dossier trop volumineux pour un courriel.' });
      attachments.push({ filename: file.name, content, contentType: file.type });
    }
    if (!attachments.some(a => a.filename.startsWith('wrap-')) || !attachments.some(a => a.filename.startsWith('mockup-'))) {
      return json(res, 400, { error: 'Le wrap et le rendu PNG sont requis.' });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      disableFileAccess: true,
      disableUrlAccess: true
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      subject: 'MockUp3D - nouvelle création client',
      text: 'Produit : ' + body.product.slice(0, 120) + '\nFichiers joints : ' + attachments.map(a => a.filename).join(', '),
      attachments
    });
    recent.set(ip, now);
    json(res, 200, { ok: true });
  } catch (error) {
    console.error('Submission failed:', error);
    json(res, error.status || 500, { error: error.status ? error.message : "L'envoi a échoué. Réessayez plus tard." });
  }
}

const server = http.createServer((req, res) => {
  if (req.url?.split('?')[0] === '/api/submissions/status' && req.method === 'GET') {
    return json(res, 200, { configured: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) });
  }
  if (req.url?.split('?')[0] === '/api/submissions') {
    if (req.method !== 'POST') return json(res, 405, { error: 'Méthode non autorisée.' });
    submit(req, res);
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Méthode non autorisée.' });
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { return json(res, 400, { error: 'Adresse invalide.' }); }
  const isAdminPath = pathname === '/admin' || pathname === '/admin/';
  if (isAdminPath) {
    {
      if (!process.env.ADMIN_USER || !process.env.ADMIN_PASSWORD) {
        return json(res, 503, { error: "L'atelier doit être configuré sur le serveur." });
      }
      const expected = Buffer.from(process.env.ADMIN_USER + ':' + process.env.ADMIN_PASSWORD);
      const supplied = req.headers.authorization?.startsWith('Basic ')
        ? Buffer.from(req.headers.authorization.slice(6), 'base64')
        : Buffer.alloc(0);
      if (expected.length !== supplied.length || !crypto.timingSafeEqual(expected, supplied)) {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="MockUp3D Atelier"', 'Cache-Control': 'no-store' });
        return res.end('Accès réservé');
      }
    }
  }
  const relative = isAdminPath || pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(dist, relative);
  if (!filePath.startsWith(dist + path.sep) && filePath !== path.join(dist, 'index.html')) return json(res, 403, { error: 'Accès refusé.' });
  fs.stat(filePath, (error, stat) => {
    const target = !error && stat.isFile() ? filePath : path.join(dist, 'index.html');
    fs.readFile(target, (readError, data) => {
      if (readError) return json(res, 404, { error: 'Fichier introuvable.' });
      const payload = isAdminPath && target === path.join(dist, 'index.html')
        ? Buffer.from(data.toString('utf8').replace('<html lang="fr">', '<html lang="fr" data-mode="admin">'))
        : data;
      res.writeHead(200, {
        'Content-Type': mime[path.extname(target)] || 'application/octet-stream',
        'Cache-Control': target === path.join(dist, 'index.html') ? 'no-store' : 'public, max-age=3600'
      });
      res.end(req.method === 'HEAD' ? undefined : payload);
    });
  });
});

server.listen(Number(process.env.PORT || 4173), process.env.HOST || '0.0.0.0', () => {
  console.log('MockUp3D prêt sur le port ' + (process.env.PORT || 4173));
});
