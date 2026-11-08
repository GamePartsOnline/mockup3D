import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { authorizeAdmin, json, readJson } from './security.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataFile = path.join(root, 'server', 'data', 'consignment.json');

export async function getConsignment(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    if (!fsSync.existsSync(dataFile)) {
      return json(res, 200, { stores: [] });
    }
    const raw = await fs.readFile(dataFile, 'utf8');
    const data = JSON.parse(raw);
    return json(res, 200, data);
  } catch (error) {
    console.error('Failed to get consignment data:', error);
    return json(res, 500, { error: 'Impossible de charger les données de dépôt-vente.' });
  }
}

export async function saveConsignment(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const data = await readJson(req);
    if (!data || !Array.isArray(data.stores)) {
      return json(res, 400, { error: 'Format de données invalide.' });
    }
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(data, null, 2), 'utf8');
    return json(res, 200, { ok: true, stores: data.stores });
  } catch (error) {
    console.error('Failed to save consignment data:', error);
    return json(res, 500, { error: 'Impossible d\'enregistrer les données de dépôt-vente.' });
  }
}
