import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, authorizeAdmin } from './security.js';
import { inferCategory } from './categories.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const visuelsDir = path.join(root, 'public', 'visuels');
const distVisuelsDir = path.join(root, 'dist', 'visuels');
const catalogPath = path.join(visuelsDir, 'catalog.json');
const distCatalogPath = path.join(distVisuelsDir, 'catalog.json');
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.avif', '.webp']);

function sanitizeFileName(name, ext) {
  const base = String(name || 'visuel')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'visuel';
  return `${base}-${Date.now().toString(36)}${ext}`;
}

function extFromDataUrl(dataUrl, fallbackName = '') {
  const m = /^data:image\/([a-zA-Z0-9+.-]+);base64,/.exec(dataUrl);
  if (m) {
    const sub = m[1].toLowerCase();
    if (sub.includes('svg')) return '.svg';
    if (sub.includes('jpeg') || sub.includes('jpg')) return '.jpg';
    if (sub.includes('webp')) return '.webp';
    if (sub.includes('avif')) return '.avif';
    return '.png';
  }
  const ext = path.extname(fallbackName).toLowerCase();
  return IMAGE_EXTS.has(ext) ? ext : '.png';
}

async function syncCatalogWithDisk() {
  await fs.mkdir(visuelsDir, { recursive: true });
  await fs.mkdir(distVisuelsDir, { recursive: true });

  let savedList = [];
  try {
    const raw = await fs.readFile(catalogPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      savedList = parsed.filter(item =>
        item && item.url && !['/ryu-vs-ryu.avif', '/street_fighter.png', '/logo-graph2print.png'].includes(item.url)
      );
    }
  } catch {}

  const entries = await fs.readdir(visuelsDir, { withFileTypes: true });
  const diskFiles = entries
    .filter(e => e.isFile() && IMAGE_EXTS.has(path.extname(e.name).toLowerCase()))
    .map(e => e.name);

  for (const fileName of diskFiles) {
    const srcFile = path.join(visuelsDir, fileName);
    const dstFile = path.join(distVisuelsDir, fileName);
    try { await fs.stat(dstFile); } catch { try { await fs.copyFile(srcFile, dstFile); } catch {} }
  }

  const diskUrlSet = new Set(diskFiles.map(f => `/visuels/${f}`));
  const validList = savedList.filter(item => diskUrlSet.has(item.url)).map(item => {
    const autoCat = inferCategory(item.name);
    const cat = (!item.category || (item.category === 'Illustrations' && autoCat !== 'Illustrations')) ? autoCat : item.category;
    return { ...item, name: item.name === 'JPG' ? 'Cerf Polygonal (Art)' : item.name, category: cat, status: item.status === 'pending' ? 'pending' : 'approved' };
  });
  const knownUrls = new Set(validList.map(item => item.url));

  for (const fileName of diskFiles) {
    const url = `/visuels/${fileName}`;
    if (!knownUrls.has(url)) {
      const cleanName = fileName.replace(/\.[^/.]+$/, '');
      validList.push({ id: `visuel-${fileName}`, name: cleanName, url, category: inferCategory(cleanName), repeatPattern: /motif|pattern|wrap/i.test(cleanName), status: 'approved' });
    }
  }

  const sortItems = list => list.sort((a, b) => {
    if ((a.status === 'pending') !== (b.status === 'pending')) return a.status === 'pending' ? -1 : 1;
    const catCmp = String(a.category || '').localeCompare(String(b.category || ''), 'fr');
    return catCmp !== 0 ? catCmp : String(a.name || '').localeCompare(String(b.name || ''), 'fr', { numeric: true });
  });
  sortItems(validList);

  await fs.writeFile(catalogPath, JSON.stringify(validList, null, 2), 'utf8');
  try { await fs.writeFile(distCatalogPath, JSON.stringify(validList, null, 2), 'utf8'); } catch {}
  return validList;
}

export async function getCatalog(req, res) {
  try { return json(res, 200, await syncCatalogWithDisk()); }
  catch { return json(res, 200, []); }
}

export async function proposeCatalogItem(req, res) {
  const limit = 25 * 1024 * 1024;
  let size = 0;
  const chunks = [];
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) return json(res, 413, { error: 'Image trop volumineuse.' });
      chunks.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const dataUrl = String(body?.url || '');
    if (!dataUrl.startsWith('data:image/')) return json(res, 400, { error: 'Image invalide.' });
    const commaIdx = dataUrl.indexOf(',');
    if (commaIdx === -1) return json(res, 400, { error: 'Image invalide.' });

    const list = await syncCatalogWithDisk();
    const cleanName = String(body.name || 'Visuel client').replace(/\.[^/.]+$/, '');
    const ext = extFromDataUrl(dataUrl, body.name);
    const fileName = sanitizeFileName(cleanName, ext);
    const buf = Buffer.from(dataUrl.slice(commaIdx + 1), 'base64');
    await fs.writeFile(path.join(visuelsDir, fileName), buf);
    try { await fs.writeFile(path.join(distVisuelsDir, fileName), buf); } catch {}

    list.unshift({
      id: `pending-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: cleanName,
      url: `/visuels/${fileName}`,
      category: inferCategory(cleanName),
      repeatPattern: false,
      status: 'pending'
    });
    await fs.writeFile(catalogPath, JSON.stringify(list, null, 2), 'utf8');
    try { await fs.writeFile(distCatalogPath, JSON.stringify(list, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true });
  } catch {
    return json(res, 400, { error: 'Impossible de soumettre le visuel.' });
  }
}

export async function saveCatalog(req, res) {
  if (!authorizeAdmin(req, res)) return;
  const limit = 60 * 1024 * 1024;
  let size = 0;
  const chunks = [];
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) return json(res, 413, { error: 'Catalogue trop volumineux (max 60 Mo).' });
      chunks.push(chunk);
    }
    const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!Array.isArray(parsed)) return json(res, 400, { error: 'Format invalide.' });

    await fs.mkdir(visuelsDir, { recursive: true });
    await fs.mkdir(distVisuelsDir, { recursive: true });
    const finalItems = [], keptFiles = new Set();

    for (const item of parsed) {
      if (!item || typeof item !== 'object') continue;
      let url = String(item.url || '');
      if (url.startsWith('data:image/')) {
        const commaIdx = url.indexOf(',');
        if (commaIdx === -1) continue;
        const ext = extFromDataUrl(url, item.name);
        const fileName = sanitizeFileName(item.name, ext);
        const buf = Buffer.from(url.slice(commaIdx + 1), 'base64');
        await fs.writeFile(path.join(visuelsDir, fileName), buf);
        try { await fs.writeFile(path.join(distVisuelsDir, fileName), buf); } catch {}
        url = `/visuels/${fileName}`;
      }
      if (url.startsWith('/visuels/')) {
        const fileName = path.basename(url);
        keptFiles.add(fileName);
        const cleanName = String(item.name || fileName.replace(/\.[^/.]+$/, ''));
        finalItems.push({
          id: String(item.id || `visuel-${fileName}`), name: cleanName, url: `/visuels/${fileName}`,
          category: String(item.category || inferCategory(cleanName)),
          repeatPattern: Boolean(item.repeatPattern), status: item.status === 'pending' ? 'pending' : 'approved'
        });
      }
    }

    const entries = await fs.readdir(visuelsDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && IMAGE_EXTS.has(path.extname(entry.name).toLowerCase()) && !keptFiles.has(entry.name)) {
        try { await fs.unlink(path.join(visuelsDir, entry.name)); } catch {}
        try { await fs.unlink(path.join(distVisuelsDir, entry.name)); } catch {}
      }
    }

    finalItems.sort((a, b) => {
      if ((a.status === 'pending') !== (b.status === 'pending')) return a.status === 'pending' ? -1 : 1;
      const catCmp = String(a.category || '').localeCompare(String(b.category || ''), 'fr');
      return catCmp !== 0 ? catCmp : String(a.name || '').localeCompare(String(b.name || ''), 'fr', { numeric: true });
    });

    await fs.writeFile(catalogPath, JSON.stringify(finalItems, null, 2), 'utf8');
    try { await fs.writeFile(distCatalogPath, JSON.stringify(finalItems, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true, items: finalItems });
  } catch {
    return json(res, 400, { error: 'Erreur lors de la sauvegarde du catalogue.' });
  }
}
