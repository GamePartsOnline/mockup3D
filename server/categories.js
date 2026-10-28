import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, authorizeAdmin, readJson } from './security.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const visuelsDir = path.join(root, 'public', 'visuels');
const distVisuelsDir = path.join(root, 'dist', 'visuels');
const categoriesPath = path.join(visuelsDir, 'categories.json');
const distCategoriesPath = path.join(distVisuelsDir, 'categories.json');

export const DEFAULT_CATEGORIES = [
  { name: 'Nouveau', subs: [] },
  { name: 'Animaux', subs: ['Chats', 'Chiens', 'Girafe', 'Licorne'] },
  { name: 'Fleurs', subs: [] },
  { name: 'Illustrations', subs: [] },
  { name: 'Motifs', subs: [] },
  { name: 'Logos', subs: [] }
];

export function inferCategory(name) {
  const n = String(name || '').toLowerCase();
  if (/nouveau|new|recent|nouveaut/i.test(n)) return 'Nouveau';
  if (/flower|fleur|rose|floral|plante|feuille/i.test(n)) return 'Fleurs';
  if (/unicorn|licorne|chat|cat|chien|dog|girafe|giraffe|pig|cochon|cerf|deer|animal|baleine|requin|lemur|panda/i.test(n)) return 'Animaux';
  if (/motif|pattern|wrap|trame/i.test(n)) return 'Motifs';
  if (/logo|marque|brand|badge/i.test(n)) return 'Logos';
  return 'Illustrations';
}

export function inferSubcategory(name) {
  const n = String(name || '').toLowerCase();
  if (/chat|cat|kitten/i.test(n)) return 'Chats';
  if (/chien|dog|puppy/i.test(n)) return 'Chiens';
  if (/girafe|giraffe/i.test(n)) return 'Girafe';
  if (/unicorn|licorne/i.test(n)) return 'Licorne';
  return '';
}

export function normalizeCategories(rawList) {
  if (!Array.isArray(rawList)) return DEFAULT_CATEGORIES;
  const map = new Map();
  for (const it of rawList) {
    if (!it) continue;
    let name = typeof it === 'string' ? it.trim() : String(it.name || '').trim();
    if (!name) continue;
    if (name === 'Licornes' || name === 'Animaux & Art') name = 'Animaux';
    let subs = typeof it === 'object' && Array.isArray(it.subs) ? it.subs.map(s => String(s).trim()).filter(Boolean) : [];
    if (name === 'Animaux' && !subs.length) subs = ['Chats', 'Chiens', 'Girafe', 'Licorne'];
    if (!map.has(name)) {
      map.set(name, { name, subs: Array.from(new Set(subs)) });
    } else {
      const cur = map.get(name);
      cur.subs = Array.from(new Set([...cur.subs, ...subs]));
    }
  }
  return Array.from(map.values());
}

export async function loadCategoriesList() {
  await fs.mkdir(visuelsDir, { recursive: true });
  await fs.mkdir(distVisuelsDir, { recursive: true });
  try {
    const raw = await fs.readFile(categoriesPath, 'utf8');
    const list = JSON.parse(raw);
    if (Array.isArray(list) && list.length > 0) return normalizeCategories(list);
  } catch {}
  await fs.writeFile(categoriesPath, JSON.stringify(DEFAULT_CATEGORIES, null, 2), 'utf8');
  try { await fs.writeFile(distCategoriesPath, JSON.stringify(DEFAULT_CATEGORIES, null, 2), 'utf8'); } catch {}
  return DEFAULT_CATEGORIES;
}

export async function getCategories(req, res) {
  try { return json(res, 200, await loadCategoriesList()); }
  catch { return json(res, 200, DEFAULT_CATEGORIES); }
}

export async function saveCategories(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const cleanList = normalizeCategories(body);
    if (!cleanList.length) return json(res, 400, { error: 'La liste ne peut pas être vide.' });
    await fs.mkdir(visuelsDir, { recursive: true });
    await fs.mkdir(distVisuelsDir, { recursive: true });
    await fs.writeFile(categoriesPath, JSON.stringify(cleanList, null, 2), 'utf8');
    try { await fs.writeFile(distCategoriesPath, JSON.stringify(cleanList, null, 2), 'utf8'); } catch {}
    return json(res, 200, { success: true, categories: cleanList });
  } catch {
    return json(res, 400, { error: 'Impossible de sauvegarder les catégories.' });
  }
}
