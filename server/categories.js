import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, authorizeAdmin, readJson } from './security.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const visuelsDir = path.join(root, 'public', 'visuels');
const distVisuelsDir = path.join(root, 'dist', 'visuels');
const categoriesPath = path.join(visuelsDir, 'categories.json');
const distCategoriesPath = path.join(distVisuelsDir, 'categories.json');
const catalogPath = path.join(visuelsDir, 'catalog.json');

export const DEFAULT_CATEGORIES = ['Nouveau', 'Fleurs', 'Licornes', 'Animaux & Art', 'Illustrations', 'Motifs', 'Logos'];

export function inferCategory(name) {
  const n = String(name || '').toLowerCase();
  if (/nouveau|new|recent|nouveaut/i.test(n)) return 'Nouveau';
  if (/flower|fleur|rose|floral|plante|feuille/i.test(n)) return 'Fleurs';
  if (/unicorn|licorne|enfant|kids|magic/i.test(n)) return 'Licornes';
  if (/pig|cochon|cerf|deer|animal|valentine|art|jpg/i.test(n)) return 'Animaux & Art';
  if (/motif|pattern|wrap|trame/i.test(n)) return 'Motifs';
  if (/logo|marque|brand|badge/i.test(n)) return 'Logos';
  return 'Illustrations';
}

export async function loadCategoriesList() {
  await fs.mkdir(visuelsDir, { recursive: true });
  await fs.mkdir(distVisuelsDir, { recursive: true });
  try {
    const raw = await fs.readFile(categoriesPath, 'utf8');
    const list = JSON.parse(raw);
    if (Array.isArray(list) && list.length > 0) return list;
  } catch {}

  const set = new Set(DEFAULT_CATEGORIES);
  try {
    const catalogRaw = await fs.readFile(catalogPath, 'utf8');
    const items = JSON.parse(catalogRaw);
    if (Array.isArray(items)) {
      items.forEach(it => { if (it.category && typeof it.category === 'string') set.add(it.category.trim()); });
    }
  } catch {}

  const initial = Array.from(set);
  await fs.writeFile(categoriesPath, JSON.stringify(initial, null, 2), 'utf8');
  try { await fs.writeFile(distCategoriesPath, JSON.stringify(initial, null, 2), 'utf8'); } catch {}
  return initial;
}

export async function getCategories(req, res) {
  try {
    const list = await loadCategoriesList();
    return json(res, 200, list);
  } catch {
    return json(res, 200, DEFAULT_CATEGORIES);
  }
}

export async function saveCategories(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    if (!Array.isArray(body)) return json(res, 400, { error: 'Format de catégories invalide.' });
    const cleanList = Array.from(new Set(body.map(c => String(c).trim()).filter(Boolean)));
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
