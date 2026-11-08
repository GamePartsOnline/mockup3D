import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, authorizeAdmin } from './security.js';
import { inferCategory, inferSubcategory } from './categories.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const visuelsDir = path.join(root, 'public', 'visuels');
const distVisuelsDir = path.join(root, 'dist', 'visuels');
const catalogPath = path.join(visuelsDir, 'catalog.json');
const distCatalogPath = path.join(distVisuelsDir, 'catalog.json');
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.avif', '.webp']);

async function backupCatalogFile() {
  try {
    const backupDir = path.join(root, 'backups', 'catalog');
    await fs.mkdir(backupDir, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const dest = path.join(backupDir, `catalog_${timestamp}.json`);
    try {
      await fs.copyFile(catalogPath, dest);
    } catch {}
    // Rotation: conserver au maximum les 30 dernières sauvegardes
    const files = await fs.readdir(backupDir);
    const catalogBackups = files.filter(f => f.startsWith('catalog_') && f.endsWith('.json')).sort();
    while (catalogBackups.length > 30) {
      const oldest = catalogBackups.shift();
      try { await fs.unlink(path.join(backupDir, oldest)); } catch {}
    }
  } catch (err) {
    console.error('Erreur backup catalog:', err.message);
  }
}

function sanitizeFileName(name, ext) {
  const base = String(name || 'visuel').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'visuel';
  return `${base}-${Date.now().toString(36)}${ext}`;
}

function extFromDataUrl(dataUrl, fallbackName = '') {
  const m = /^data:image\/([a-zA-Z0-9+.-]+);base64,/.exec(dataUrl);
  if (m) {
    const s = m[1].toLowerCase();
    if (s.includes('svg')) return '.svg';
    if (s.includes('jpeg') || s.includes('jpg')) return '.jpg';
    if (s.includes('webp')) return '.webp';
    if (s.includes('avif')) return '.avif';
    return '.png';
  }
  const ext = path.extname(fallbackName).toLowerCase();
  return IMAGE_EXTS.has(ext) ? ext : '.png';
}

function sortCatalogItems(list) {
  return list.sort((a, b) => {
    if ((a.status === 'trash') !== (b.status === 'trash')) return a.status === 'trash' ? 1 : -1;
    if ((a.status === 'pending') !== (b.status === 'pending')) return a.status === 'pending' ? -1 : 1;
    const catCmp = String(a.category || '').localeCompare(String(b.category || ''), 'fr');
    if (catCmp !== 0) return catCmp;
    const subCmp = String(a.subcategory || '').localeCompare(String(b.subcategory || ''), 'fr');
    return subCmp !== 0 ? subCmp : String(a.name || '').localeCompare(String(b.name || ''), 'fr', { numeric: true });
  });
}

async function syncCatalogWithDisk() {
  await fs.mkdir(visuelsDir, { recursive: true });
  await fs.mkdir(distVisuelsDir, { recursive: true });

  let savedList = [];
  try {
    const raw = await fs.readFile(catalogPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      savedList = parsed.filter(item => item?.url && !['/ryu-vs-ryu.avif', '/street_fighter.png', '/logo-graph2print.png'].includes(item.url));
    }
  } catch {}

  const entries = await fs.readdir(visuelsDir, { withFileTypes: true });
  const diskFiles = entries.filter(e => e.isFile() && IMAGE_EXTS.has(path.extname(e.name).toLowerCase())).map(e => e.name);

  for (const fileName of diskFiles) {
    const src = path.join(visuelsDir, fileName), dst = path.join(distVisuelsDir, fileName);
    try { await fs.stat(dst); } catch { try { await fs.copyFile(src, dst); } catch {} }
  }

  const diskUrlSet = new Set(diskFiles.map(f => `/visuels/${f}`));
  const validList = savedList.filter(item => diskUrlSet.has(item.url)).map(item => {
    const autoCat = inferCategory(item.name);
    let cat = (!item.category || (item.category === 'Illustrations' && autoCat !== 'Illustrations')) ? autoCat : item.category;
    if (cat === 'Licornes' || cat === 'Animaux & Art') cat = 'Animaux';
    let sub = String(item.subcategory || '').trim() || inferSubcategory(item.name);
    if (!sub && cat === 'Animaux' && /licorne/i.test(item.name)) sub = 'Licorne';
    let targets = Array.isArray(item.compatibleProducts) && item.compatibleProducts.length ? item.compatibleProducts : ['all'];
    if (targets.length === 1 && targets[0] === 'all' && /sous-verre|coaster/i.test(item.name || '')) {
      targets = ['coaster', 'coasterRound'];
    }
    const st = item.status === 'trash' ? 'trash' : (item.status === 'pending' ? 'pending' : 'approved');
    const cat2 = String(item.category2 || '').trim();
    const cats = Array.isArray(item.categories) && item.categories.length ? item.categories : (cat2 ? [cat, cat2] : [cat]);
    return { ...item, name: item.name === 'JPG' ? 'Cerf Polygonal (Art)' : item.name, category: cat, category2: cat2 || undefined, categories: cats, subcategory: sub, status: st, compatibleProducts: targets };
  });
  const knownUrls = new Set(validList.map(item => item.url));

  for (const fileName of diskFiles) {
    const url = `/visuels/${fileName}`;
    if (!knownUrls.has(url)) {
      const clean = fileName.replace(/\.[^/.]+$/, '');
      validList.push({ id: `visuel-${fileName}`, name: clean, url, category: 'Nouveau', subcategory: '', repeatPattern: /motif|pattern|wrap/i.test(clean), status: 'pending', compatibleProducts: ['all'] });
    }
  }

  sortCatalogItems(validList);
  await fs.writeFile(catalogPath, JSON.stringify(validList, null, 2), 'utf8');
  try { await fs.writeFile(distCatalogPath, JSON.stringify(validList, null, 2), 'utf8'); } catch {}
  return validList;
}

export async function getCatalog(req, res) {
  try { return json(res, 200, await syncCatalogWithDisk()); } catch { return json(res, 200, []); }
}

export async function proposeCatalogItem(req, res) {
  const limit = 25 * 1024 * 1024; let size = 0; const chunks = [];
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) return json(res, 413, { error: 'Image trop volumineuse.' });
      chunks.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const dataUrl = String(body?.url || '');
    const commaIdx = dataUrl.indexOf(',');
    if (!dataUrl.startsWith('data:image/') || commaIdx === -1) return json(res, 400, { error: 'Image invalide.' });

    const list = await syncCatalogWithDisk();
    const clean = String(body.name || 'Visuel client').replace(/\.[^/.]+$/, '');
    const fileName = sanitizeFileName(clean, extFromDataUrl(dataUrl, body.name));
    const buf = Buffer.from(dataUrl.slice(commaIdx + 1), 'base64');
    await fs.writeFile(path.join(visuelsDir, fileName), buf);
    try { await fs.writeFile(path.join(distVisuelsDir, fileName), buf); } catch {}

    list.unshift({
      id: `pending-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: clean, url: `/visuels/${fileName}`,
      category: 'Nouveau', subcategory: '',
      repeatPattern: false, status: 'pending'
    });
    await fs.writeFile(catalogPath, JSON.stringify(list, null, 2), 'utf8');
    try { await fs.writeFile(distCatalogPath, JSON.stringify(list, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true });
  } catch { return json(res, 400, { error: 'Impossible de soumettre le visuel.' }); }
}

export async function saveCatalog(req, res) {
  if (!authorizeAdmin(req, res)) return;
  let size = 0; const limit = 60 * 1024 * 1024, chunks = [];
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) return json(res, 413, { error: 'Catalogue trop volumineux (max 60 Mo).' });
      chunks.push(chunk);
    }
    const parsed = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!Array.isArray(parsed)) return json(res, 400, { error: 'Format invalide.' });
    await fs.mkdir(visuelsDir, { recursive: true }); await fs.mkdir(distVisuelsDir, { recursive: true });
    const finalItems = [], keptFiles = new Set();

    for (const item of parsed) {
      if (!item || typeof item !== 'object') continue;
      let url = String(item.url || '');
      if (url.startsWith('data:image/')) {
        const commaIdx = url.indexOf(',');
        if (commaIdx === -1) continue;
        const fileName = sanitizeFileName(item.name, extFromDataUrl(url, item.name));
        const buf = Buffer.from(url.slice(commaIdx + 1), 'base64');
        await fs.writeFile(path.join(visuelsDir, fileName), buf);
        try { await fs.writeFile(path.join(distVisuelsDir, fileName), buf); } catch {}
        url = `/visuels/${fileName}`;
      }
      if (url.startsWith('/visuels/')) {
        const fileName = path.basename(url); keptFiles.add(fileName);
        const clean = String(item.name || fileName.replace(/\.[^/.]+$/, ''));
        let targets = Array.isArray(item.compatibleProducts) && item.compatibleProducts.length ? item.compatibleProducts : ['all'];
    if (targets.length === 1 && targets[0] === 'all' && /sous-verre|coaster/i.test(item.name || '')) {
      targets = ['coaster', 'coasterRound'];
    }
        const st = item.status === 'trash' ? 'trash' : (item.status === 'pending' ? 'pending' : (item.status === 'private' ? 'private' : 'approved'));
        const cat = String(item.category || inferCategory(clean));
        const cat2 = String(item.category2 || '').trim();
        const cats = Array.isArray(item.categories) && item.categories.length ? item.categories : (cat2 ? [cat, cat2] : [cat]);

        finalItems.push({
          id: String(item.id || `visuel-${fileName}`), name: clean, url: `/visuels/${fileName}`,
          category: cat,
          category2: cat2 || undefined,
          categories: cats,
          subcategory: String(item.subcategory || '').trim(),
          repeatPattern: Boolean(item.repeatPattern), status: st,
          isNew: Boolean(item.isNew), dateAdded: item.dateAdded || null,
          compatibleProducts: targets
        });
      }
    }

    // Sauvegarde preventive automatique hordatee
    await backupCatalogFile();
    // Neutralisation de la suppression automatique : les fichiers physiques sont strictement preserves

    sortCatalogItems(finalItems);
    await fs.writeFile(catalogPath, JSON.stringify(finalItems, null, 2), 'utf8');
    try { await fs.writeFile(distCatalogPath, JSON.stringify(finalItems, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true, items: finalItems });
  } catch { return json(res, 400, { error: 'Erreur lors de la sauvegarde du catalogue.' }); }
}

export async function emptyCatalogTrash(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    let list = [];
    try {
      const raw = await fs.readFile(catalogPath, 'utf8');
      list = JSON.parse(raw);
    } catch {}

    const remaining = [];
    let purgedCount = 0;
    for (const item of list) {
      if (item.status === 'trash') {
        const fileName = path.basename(item.url || '');
        if (fileName) {
          try { await fs.unlink(path.join(visuelsDir, fileName)); } catch {}
          try { await fs.unlink(path.join(distVisuelsDir, fileName)); } catch {}
          purgedCount++;
        }
      } else {
        remaining.push(item);
      }
    }

    await backupCatalogFile();
    await fs.writeFile(catalogPath, JSON.stringify(remaining, null, 2), 'utf8');
    try { await fs.writeFile(distCatalogPath, JSON.stringify(remaining, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true, purgedCount, items: remaining });
  } catch (err) {
    console.error('Empty trash failed:', err);
    return json(res, 500, { error: 'Erreur lors du vidage de la corbeille.' });
  }
}
