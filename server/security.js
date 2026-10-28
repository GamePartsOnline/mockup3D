import crypto from 'node:crypto';
import { isIP } from 'node:net';

const failures = new Map();
const attempts = new Map();
const interval = setInterval(() => {
  const threshold = Date.now() - 120_000;
  for (const map of [failures, attempts]) for (const [key, value] of map) {
    if (value.time < threshold) map.delete(key);
  }
}, 60_000);
interval.unref();

export function clientAddress(req) {
  const forwarded = String(req.headers['x-forwarded-for'] || '').split(',').at(-1).trim();
  return isIP(forwarded) ? forwarded : req.socket.remoteAddress;
}

export function secureHeaders(req, res) {
  const ancestors = process.env.FRAME_ANCESTORS || "'self'";
  res.setHeader('Content-Security-Policy', [
    "default-src 'self'", "script-src 'self' 'wasm-unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob:", "connect-src 'self' blob:",
    "worker-src 'self' blob:", "media-src 'self' blob:",
    "object-src 'none'", "base-uri 'self'", "form-action 'self'",
    'frame-ancestors ' + ancestors
  ].join('; '));
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  }
}

export function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

export function authorizeAdmin(req, res) {
  const ip = clientAddress(req);
  if (!process.env.ADMIN_USER || !process.env.ADMIN_PASSWORD) {
    if (['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(ip)) return true;
    json(res, 503, { error: "L'atelier doit être configuré sur le serveur." });
    return false;
  }
  const record = failures.get(ip);
  if (record && record.count >= 10 && Date.now() - record.time < 60_000) {
    json(res, 429, { error: 'Trop de tentatives. Réessayez dans une minute.' });
    return false;
  }
  const header = String(req.headers.authorization || '');
  const supplied = header.startsWith('Basic ') && header.length < 4096
    ? Buffer.from(header.slice(6), 'base64') : Buffer.alloc(0);
  const expected = Buffer.from(process.env.ADMIN_USER + ':' + process.env.ADMIN_PASSWORD);
  if (supplied.length === expected.length && crypto.timingSafeEqual(supplied, expected)) {
    failures.delete(ip);
    return true;
  }
  failures.set(ip, { time: Date.now(), count: (record?.count || 0) + 1 });
  res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="MockUp3D Atelier"', 'Cache-Control': 'no-store' });
  res.end('Accès réservé');
  return false;
}

export function acceptSubmission(req, res) {
  let origin;
  try { origin = new URL(req.headers.origin); } catch { origin = null; }
  if (!origin || origin.host !== req.headers.host || req.headers['sec-fetch-site'] === 'cross-site') {
    json(res, 403, { error: 'Origine non autorisée.' });
    return false;
  }
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    json(res, 415, { error: 'Format de requête non autorisé.' });
    return false;
  }
  const ip = clientAddress(req);
  const previous = attempts.get(ip);
  if (previous && Date.now() - previous.time < 10_000) {
    json(res, 429, { error: 'Veuillez patienter quelques secondes avant un nouvel envoi.' });
    return false;
  }
  attempts.set(ip, { time: Date.now() });
  return true;
}

export async function readJson(req) {
  const limit = 28 * 1024 * 1024;
  if (Number(req.headers['content-length']) > limit) {
    throw Object.assign(new Error('Fichiers trop volumineux'), { status: 413 });
  }
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > limit) throw Object.assign(new Error('Fichiers trop volumineux'), { status: 413 });
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('Requête invalide'), { status: 400 }); }
}
