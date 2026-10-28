import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, secureHeaders } from './server/security.js';
import { mailConfigured, submit } from './server/submissions.js';
import { getCatalog, saveCatalog, proposeCatalogItem } from './server/catalog.js';
import { getCategories, saveCategories } from './server/categories.js';
import { serveStatic } from './server/static.js';

const root = path.dirname(fileURLToPath(import.meta.url));
if (fs.existsSync(path.join(root, '.env'))) process.loadEnvFile(path.join(root, '.env'));
const dist = path.join(root, 'dist');
const server = http.createServer(async (req, res) => {
  secureHeaders(req, res);
  try {
    const route = req.url?.split('?')[0];
    if (route === '/api/catalog-images' && req.method === 'GET') {
      return await getCatalog(req, res);
    }
    if (route === '/api/catalog-images' && req.method === 'POST') {
      return await saveCatalog(req, res);
    }
    if (route === '/api/catalog-images/propose' && req.method === 'POST') {
      return await proposeCatalogItem(req, res);
    }
    if (route === '/api/catalog-categories' && req.method === 'GET') {
      return await getCategories(req, res);
    }
    if (route === '/api/catalog-categories' && req.method === 'POST') {
      return await saveCategories(req, res);
    }
    if (route === '/api/submissions/status' && req.method === 'GET') {
      return json(res, 200, { configured: true, mailConfigured: mailConfigured(), mode: mailConfigured() ? 'smtp' : 'local' });
    }
    if (route === '/api/submissions') {
      if (req.method !== 'POST') return json(res, 405, { error: 'Méthode non autorisée.' });
      return await submit(req, res);
    }
    await serveStatic(req, res, dist);
  } catch (error) {
    console.error('Request failed:', error.code || 'unknown');
    if (!res.headersSent) json(res, 500, { error: 'Erreur du serveur.' });
    else res.end();
  }
});
server.requestTimeout = 60_000;
server.headersTimeout = 15_000;
server.listen(Number(process.env.PORT || 4173), process.env.HOST || '0.0.0.0', () => {
  console.log('MockUp3D prêt sur le port ' + server.address().port);
});
