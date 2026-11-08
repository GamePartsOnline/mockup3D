import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, authorizeAdmin } from './security.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const productsFile = path.join(root, 'server', 'data', 'products-config.json');

async function readProducts() {
  try {
    const raw = await fs.readFile(productsFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
  } catch {}
  return [];
}

export async function getProducts(req, res) {
  try {
    const list = await readProducts();
    return json(res, 200, list);
  } catch {
    return json(res, 500, { error: 'Erreur lors du chargement des produits.' });
  }
}

export async function updateProducts(req, res) {
  if (!authorizeAdmin(req, res)) return;
  const chunks = [];
  try {
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!Array.isArray(body)) return json(res, 400, { error: 'Format invalide.' });

    // Validate structure
    const updated = body.map(item => ({
      id: String(item.id || item.key),
      key: String(item.key || item.id),
      name: String(item.name || ''),
      category: String(item.category || 'deco'),
      costPrice: String(item.costPrice || ''),
      price: String(item.price || ''),
      priceNumber: typeof item.priceNumber === 'number' ? item.priceNumber : Number.parseFloat(String(item.price || '').replace(',', '.')) || 0,
      stockQuantity: typeof item.stockQuantity === 'number' ? item.stockQuantity : (Number.parseInt(item.stockQuantity) || 0),
      dim: String(item.dim || ''),
      active: item.active !== false,
      badge: String(item.badge || ''),
      desc: String(item.desc || '')
    }));

    // Backup previous config
    try {
      const backupDir = path.join(root, 'backups', 'products');
      await fs.mkdir(backupDir, { recursive: true });
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      await fs.copyFile(productsFile, path.join(backupDir, `products_${timestamp}.json`));
    } catch {}

    await fs.writeFile(productsFile, JSON.stringify(updated, null, 2), 'utf8');
    return json(res, 200, { success: true, products: updated });
  } catch (err) {
    return json(res, 400, { error: 'Erreur lors de la mise à jour des produits: ' + err.message });
  }
}

export async function toggleProductStatus(req, res) {
  if (!authorizeAdmin(req, res)) return;
  const chunks = [];
  try {
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const { key, active } = body;
    if (!key) return json(res, 400, { error: 'Identifiant produit requis.' });

    const list = await readProducts();
    const item = list.find(p => p.key === key || p.id === key);
    if (!item) return json(res, 404, { error: 'Produit introuvable.' });

    item.active = typeof active === 'boolean' ? active : !item.active;
    await fs.writeFile(productsFile, JSON.stringify(list, null, 2), 'utf8');
    return json(res, 200, { success: true, key: item.key, active: item.active, product: item });
  } catch (err) {
    return json(res, 400, { error: err.message });
  }
}
