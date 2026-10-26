import fs from 'node:fs/promises';
import path from 'node:path';
import { authorizeAdmin, json } from './security.js';

const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.avif': 'image/avif', '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm', '.obj': 'text/plain; charset=utf-8',
  '.mtl': 'text/plain; charset=utf-8'
};

export async function serveStatic(req, res, dist) {
  if (!['GET', 'HEAD'].includes(req.method)) return json(res, 405, { error: 'Méthode non autorisée.' });
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { return json(res, 400, { error: 'Adresse invalide.' }); }
  if (pathname.includes('\0')) return json(res, 400, { error: 'Adresse invalide.' });
  const admin = pathname === '/admin' || pathname === '/admin/';
  if (admin && !authorizeAdmin(req, res)) return;
  const relative = admin || pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  let target = path.resolve(dist, relative);
  if (!target.startsWith(dist + path.sep)) return json(res, 403, { error: 'Accès refusé.' });
  try {
    const stat = await fs.stat(target);
    if (!stat.isFile()) throw new Error('not a file');
  } catch {
    if (path.extname(pathname) || pathname.startsWith('/api/')) {
      return json(res, 404, { error: 'Fichier introuvable.' });
    }
    target = path.join(dist, 'index.html');
  }
  const real = await fs.realpath(target);
  if (!real.startsWith(dist + path.sep)) return json(res, 403, { error: 'Accès refusé.' });
  const data = await fs.readFile(real);
  const html = path.extname(target) === '.html';
  const payload = admin && html
    ? Buffer.from(data.toString('utf8').replace('<html lang="fr">', '<html lang="fr" data-mode="admin">'))
    : data;
  res.writeHead(200, {
    'Content-Type': mime[path.extname(target)] || 'application/octet-stream',
    'Cache-Control': html ? 'no-store' : 'public, max-age=3600'
  });
  res.end(req.method === 'HEAD' ? undefined : payload);
}
