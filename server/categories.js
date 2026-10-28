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
  { name: 'Animaux', subs: ['Cerf', 'Chats', 'Chiens', 'Girafe', 'Licorne'] },
  { name: 'Arcades', subs: [] },
  { name: 'Callisto Arts', subs: [] },
  { name: 'Dessins animés', subs: [] },
  { name: 'Fantaisie', subs: ['Fées'] },
  { name: 'Films', subs: [] },
  { name: 'Fleurs', subs: [] },
  { name: 'Humour', subs: [] },
  { name: 'Illustrations', subs: [] },
  { name: 'Logos', subs: [] },
  { name: 'Motifs', subs: [] },
  { name: 'Noël', subs: [] },
  { name: 'Nouveau', subs: [] }
];

export function inferCategory(name) {
  const n = String(name || '').toLowerCase();
  if (/nouveau|new|recent|nouveaut/i.test(n)) return 'Nouveau';
  if (/flower|fleur|rose|floral|plante|feuille/i.test(n)) return 'Fleurs';
  if (/unicorn|licorne|chat|cat|chien|dog|girafe|giraffe|pig|cochon|cerf|deer|animal|baleine|requin|lemur|panda|elephant/i.test(n)) return 'Animaux';
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
  if (/cerf|deer/i.test(n)) return 'Cerf';
  return '';
}

export function normalizeCategories(rawList) {
  if (!Array.isArray(rawList)) return DEFAULT_CATEGORIES;
  const list = [];
  const seen = new Set();
  for (const it of rawList) {
    if (!it) continue;
    let name = typeof it === 'string' ? it.trim() : String(it.name || '').trim();
    if (!name || seen.has(name.toLowerCase())) continue;
    seen.add(name.toLowerCase());
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let subs = typeof it === 'object' && Array.isArray(it.subs)
      ? it.subs.map(s => String(s).trim()).filter(Boolean)
      : [];
    if (name === 'Animaux' && !subs.length) subs = ['Cerf', 'Chats', 'Chiens', 'Girafe', 'Licorne'];
    subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    list.push({ name, subs: Array.from(new Set(subs)) });
  }
  list.sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));
  return list;
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
