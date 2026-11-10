import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, secureHeaders } from './server/security.js';
import { mailConfigured, submit } from './server/submissions.js';
import { getCatalog, saveCatalog, proposeCatalogItem, emptyCatalogTrash } from './server/catalog.js';
import { getCategories, saveCategories } from './server/categories.js';
import { getSubmissions, serveSubmissionFile, updateSubmissionStatus, updateSubmissionChecks, deleteSubmission, downloadSubmissionZip, exportSubmissionsCsv, getClientOrders, addSubmissionMessage, adminCreateProposition, clientApproveBat, rejectSubmission, updateSubmissionDetails } from './server/admin-submissions.js';
import { getProducts, updateProducts, toggleProductStatus } from './server/products-manager.js';
import { getConsignment, saveConsignment } from './server/consignment-manager.js';
import { adminGetClients, adminDeleteClient, adminPurgeTestClients, adminSaveClient, adminRestoreClients, adminGetClientsTrash, adminRestoreLastClient, adminRestoreSpecificClient, clientRegister, clientLogin, clientGetProfile, clientUpdateProfile, clientSendMessage, initClientsData } from './server/clients-manager.js';
import { getDiscounts, adminGetDiscounts, adminUpdateGlobalDiscount, adminSaveCoupon, adminDeleteCoupon, applyDiscountCheck } from './server/discounts.js';
import { serveStatic } from './server/static.js';

const root = path.dirname(fileURLToPath(import.meta.url));
if (fs.existsSync(path.join(root, '.env'))) process.loadEnvFile(path.join(root, '.env'));
initClientsData().catch(() => {});
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
    if (route === '/api/catalog-images/empty-trash' && req.method === 'POST') {
      return await emptyCatalogTrash(req, res);
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
    if (route === '/api/admin/submissions' && req.method === 'GET') {
      return await getSubmissions(req, res);
    }
    if (route === '/api/admin/submissions/file' && req.method === 'GET') {
      return await serveSubmissionFile(req, res);
    }
    if (route === '/api/admin/submissions/status' && req.method === 'POST') {
      return await updateSubmissionStatus(req, res);
    }
    if (route === '/api/admin/submissions/checks' && req.method === 'POST') {
      return await updateSubmissionChecks(req, res);
    }
    if (route === '/api/admin/consignment' && req.method === 'GET') {
      return await getConsignment(req, res);
    }
    if (route === '/api/admin/consignment' && req.method === 'POST') {
      return await saveConsignment(req, res);
    }
    if (route === '/api/admin/submissions/delete' && req.method === 'POST') {
      return await deleteSubmission(req, res);
    }
    if (route === '/api/admin/submissions/reject' && req.method === 'POST') {
      return await rejectSubmission(req, res);
    }
    if (route === '/api/admin/submissions/update-details' && req.method === 'POST') {
      return await updateSubmissionDetails(req, res);
    }
    if (route === '/api/admin/submissions/download-zip' && req.method === 'GET') {
      return await downloadSubmissionZip(req, res);
    }
    if (route === '/api/admin/submissions/export-csv' && req.method === 'GET') {
      return await exportSubmissionsCsv(req, res);
    }
    if (route === '/api/client/orders' && req.method === 'GET') {
      return await getClientOrders(req, res);
    }
    if (route === '/api/admin/clients' && req.method === 'GET') {
      return await adminGetClients(req, res);
    }
    if (route === '/api/admin/clients/delete' && req.method === 'POST') {
      return await adminDeleteClient(req, res);
    }
    if (route === '/api/admin/clients/purge-tests' && req.method === 'POST') {
      return await adminPurgeTestClients(req, res);
    }
    if (route === '/api/admin/clients/restore' && req.method === 'POST') {
      return await adminRestoreClients(req, res);
    }
    if (route === '/api/admin/clients/trash' && req.method === 'GET') {
      return await adminGetClientsTrash(req, res);
    }
    if (route === '/api/admin/clients/restore-last' && req.method === 'POST') {
      return await adminRestoreLastClient(req, res);
    }
    if (route === '/api/admin/clients/restore-one' && req.method === 'POST') {
      return await adminRestoreSpecificClient(req, res);
    }
    if (route === '/api/admin/clients/save' && req.method === 'POST') {
      return await adminSaveClient(req, res);
    }
    if (route === '/api/discounts' && req.method === 'GET') {
      return await getDiscounts(req, res);
    }
    if (route === '/api/discounts/apply' && req.method === 'POST') {
      return await applyDiscountCheck(req, res);
    }
    if (route === '/api/admin/discounts' && req.method === 'GET') {
      return await adminGetDiscounts(req, res);
    }
    if (route === '/api/admin/discounts/global' && req.method === 'POST') {
      return await adminUpdateGlobalDiscount(req, res);
    }
    if (route === '/api/admin/discounts/coupon' && req.method === 'POST') {
      return await adminSaveCoupon(req, res);
    }
    if (route === '/api/admin/discounts/coupon/delete' && req.method === 'POST') {
      return await adminDeleteCoupon(req, res);
    }
    if (route === '/api/client/register' && req.method === 'POST') {
      return await clientRegister(req, res);
    }
    if (route === '/api/client/login' && req.method === 'POST') {
      return await clientLogin(req, res);
    }
    if (route === '/api/client/profile' && req.method === 'GET') {
      return await clientGetProfile(req, res);
    }
    if (route === '/api/client/profile/update' && req.method === 'POST') {
      return await clientUpdateProfile(req, res);
    }
    if (route === '/api/client/message' && req.method === 'POST') {
      return await clientSendMessage(req, res);
    }
    if (route === '/api/client/bat/approve' && req.method === 'POST') {
      return await clientApproveBat(req, res);
    }
    if (route === '/api/admin/submissions/proposition' && req.method === 'POST') {
      return await adminCreateProposition(req, res);
    }
    if (route === '/api/submissions/message' && req.method === 'POST') {
      return await addSubmissionMessage(req, res);
    }
    if (route === '/api/products' && req.method === 'GET') {
      return await getProducts(req, res);
    }
    if (route === '/api/admin/products' && req.method === 'POST') {
      return await updateProducts(req, res);
    }
    if (route === '/api/admin/products/toggle' && req.method === 'POST') {
      return await toggleProductStatus(req, res);
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
const port = Number(process.env.PORT || 8088);
const host = process.env.HOST || '0.0.0.0';
server.listen(port, host, () => {
  console.log('MockUp3D prêt sur le port ' + server.address().port);
});

if (!process.env.PORT) {
  const mirror = http.createServer(server.listeners('request')[0]);
  mirror.requestTimeout = 60_000;
  mirror.headersTimeout = 15_000;
  mirror.listen(4173, host, () => {
    console.log('MockUp3D miroir actif sur le port 4173');
  }).on('error', () => {});
}
