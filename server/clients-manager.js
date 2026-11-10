import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { json, readJson, authorizeAdmin } from './security.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
const clientsFile = path.join(dataDir, 'clients.json');
const clientsTrashFile = path.join(dataDir, 'clients_trash.json');
const submissionsDir = path.join(__dirname, '..', 'submissions');

// Sessions en memoire pour les clients connectes : token -> { clientId, email, expiresAt }
const clientSessions = new Map();

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  try {
    if (!stored || !stored.includes(':')) return false;
    const [salt, hash] = stored.split(':');
    const verifyHash = crypto.scryptSync(password, salt, 64).toString('hex');
    const a = Buffer.from(hash, 'hex');
    const b = Buffer.from(verifyHash, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch (err) {
    return false;
  }
}

async function loadClients() {
  try {
    if (!fsSync.existsSync(clientsFile)) {
      await initClientsData();
    }
    const raw = await fs.readFile(clientsFile, 'utf8');
    const list = JSON.parse(raw);
    const validList = Array.isArray(list) ? list : [];

    // Réconciliation proactive automatique avec les commandes physiques dans submissions/
    let modified = false;
    if (fsSync.existsSync(submissionsDir)) {
      try {
        const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
        for (const ent of entries) {
          if (!ent.isDirectory()) continue;
          const metaPath = path.join(submissionsDir, ent.name, 'submission.json');
          if (!fsSync.existsSync(metaPath)) continue;
          try {
            const subData = JSON.parse(await fs.readFile(metaPath, 'utf8'));
            const c = subData.client || {};
            const email = (c.email || '').trim().toLowerCase();
            if (email && !validList.some(x => (x.email || '').toLowerCase() === email)) {
              validList.push({
                id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
                email,
                passwordHash: hashPassword('Client123!'),
                nom: c.nom || 'Client',
                prenom: c.prenom || '',
                telephone: c.telephone || '',
                adresse: c.adresse || '',
                codePostal: c.codePostal || '',
                ville: c.ville || '',
                pays: c.pays || 'France',
                dateInscription: subData.date || new Date().toISOString(),
                notes: c.notes || 'Client synchronise automatiquement depuis les commandes atelier.',
                role: 'client'
              });
              modified = true;
            }
          } catch (e) {}
        }
      } catch (eDir) {}
    }

    if (modified) {
      await saveClients(validList);
    }
    return validList;
  } catch (err) {
    console.error('Erreur lecture clients.json:', err);
    return [];
  }
}

async function saveClients(list) {
  try {
    if (!fsSync.existsSync(dataDir)) {
      await fs.mkdir(dataDir, { recursive: true });
    }
    await fs.writeFile(clientsFile, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Erreur ecriture clients.json:', err);
    return false;
  }
}

export async function initClientsData() {
  if (fsSync.existsSync(clientsFile)) return;
  const initialClients = [];

  // Extraire les clients des commandes reelles existantes
  try {
    if (fsSync.existsSync(submissionsDir)) {
      const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const subPath = path.join(submissionsDir, ent.name, 'submission.json');
        if (!fsSync.existsSync(subPath)) continue;
        try {
          const raw = await fs.readFile(subPath, 'utf8');
          const d = JSON.parse(raw);
          const c = d.client || {};
          const email = (c.email || '').trim().toLowerCase();
          if (email && !initialClients.some(x => x.email === email)) {
            initialClients.push({
              id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
              email,
              passwordHash: hashPassword('Client123!'),
              nom: c.nom || 'Client',
              prenom: c.prenom || '',
              telephone: c.telephone || '',
              adresse: c.adresse || '',
              codePostal: c.codePostal || '',
              ville: c.ville || '',
              pays: c.pays || 'France',
              dateInscription: d.date || new Date().toISOString(),
              notes: c.notes || 'Client issu des commandes atelier.',
              role: 'client'
            });
          }
        } catch (e) {}
      }
    }
  } catch (err) {}

  if (initialClients.length === 0) {
    initialClients.push({
      id: 'CLI-BERNARD-51',
      email: 'camille.bernard51@gmail.com',
      passwordHash: hashPassword('Client123!'),
      nom: 'Bernard',
      prenom: 'Camille',
      telephone: '06 12 34 56 78',
      adresse: '12 rue des Jardins',
      codePostal: '51330',
      ville: 'Givry-en-Argonne',
      pays: 'France',
      dateInscription: '2026-11-07T16:00:00.000Z',
      notes: 'Client local de Givry-en-Argonne.',
      role: 'client'
    });
  }

  await saveClients(initialClients);
}

export async function recordClientFromOrder(clientInfo, orderDate = new Date().toISOString()) {
  if (!clientInfo || !clientInfo.email) return null;
  const email = clientInfo.email.trim().toLowerCase();
  const list = await loadClients();
  let existing = list.find(c => (c.email || '').toLowerCase() === email);

  if (existing) {
    if (clientInfo.nom && (!existing.nom || existing.nom === 'Client')) existing.nom = clientInfo.nom;
    if (clientInfo.prenom && !existing.prenom) existing.prenom = clientInfo.prenom;
    if (clientInfo.telephone) existing.telephone = clientInfo.telephone;
    if (clientInfo.adresse) existing.adresse = clientInfo.adresse;
    if (clientInfo.codePostal) existing.codePostal = clientInfo.codePostal;
    if (clientInfo.ville) existing.ville = clientInfo.ville;
    existing.lastOrderDate = orderDate;
    await saveClients(list);
    return existing;
  }

  const newClient = {
    id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
    email,
    passwordHash: hashPassword('Client123!'),
    nom: clientInfo.nom || 'Client',
    prenom: clientInfo.prenom || '',
    telephone: clientInfo.telephone || '',
    adresse: clientInfo.adresse || '',
    codePostal: clientInfo.codePostal || '',
    ville: clientInfo.ville || '',
    pays: clientInfo.pays || 'France',
    dateInscription: orderDate,
    notes: clientInfo.note || 'Client issu des commandes atelier.',
    role: 'client'
  };

  list.push(newClient);
  await saveClients(list);
  return newClient;
}

// Extraction des statistiques de commandes pour un email
async function getClientOrdersStats(email) {
  let ordersCount = 0;
  let totalSpent = 0;
  let firstDate = null;
  let lastDate = null;
  const orders = [];

  try {
    if (fsSync.existsSync(submissionsDir)) {
      const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const subPath = path.join(submissionsDir, ent.name, 'submission.json');
        if (!fsSync.existsSync(subPath)) continue;
        try {
          const raw = await fs.readFile(subPath, 'utf8');
          const d = JSON.parse(raw);
          if (d.client?.email?.toLowerCase() === email.toLowerCase()) {
            ordersCount++;
            const val = Number.parseFloat(String(d.totalPrice || d.price || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
            totalSpent += val;
            const dateStr = d.date || null;
            if (dateStr) {
              if (!firstDate || new Date(dateStr) < new Date(firstDate)) firstDate = dateStr;
              if (!lastDate || new Date(dateStr) > new Date(lastDate)) lastDate = dateStr;
            }
            orders.push({
              id: d.id || ent.name,
              folder: ent.name,
              date: d.date,
              product: d.product || d.productKey || 'Objet personnalisé',
              quantity: d.quantity || 1,
              totalPrice: d.totalPrice || `${val.toFixed(2)} €`,
              status: d.status || 'nouveau',
              checks: d.checks || {},
              messages: Array.isArray(d.messages) ? d.messages : [],
              customText: d.customText || '',
              visualName: d.visualName || '',
              cart: Array.isArray(d.cart) ? d.cart : [],
              discount: d.discount || null
            });
          }
        } catch (e) {}
      }
    }
  } catch (err) {}

  return { ordersCount, totalSpent, firstDate, lastDate, orders };
}

// ----------------------------------------------------
// API ADMIN ATELIER
// ----------------------------------------------------

export async function adminGetClients(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    let clients = await loadClients();
    let modified = false;

    // Réconciliation proactive automatique depuis submissionsDir
    if (fsSync.existsSync(submissionsDir)) {
      try {
        const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
        for (const ent of entries) {
          if (!ent.isDirectory()) continue;
          const subPath = path.join(submissionsDir, ent.name, 'submission.json');
          if (!fsSync.existsSync(subPath)) continue;
          try {
            const raw = await fs.readFile(subPath, 'utf8');
            const d = JSON.parse(raw);
            const c = d.client || {};
            const email = (c.email || '').trim().toLowerCase();
            if (email && !clients.some(x => (x.email || '').toLowerCase() === email)) {
              clients.push({
                id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
                email,
                passwordHash: hashPassword('Client123!'),
                nom: c.nom || 'Client',
                prenom: c.prenom || '',
                telephone: c.telephone || '',
                adresse: c.adresse || '',
                codePostal: c.codePostal || '',
                ville: c.ville || '',
                pays: c.pays || 'France',
                dateInscription: d.date || new Date().toISOString(),
                notes: c.note || 'Client issu des commandes atelier.',
                role: 'client'
              });
              modified = true;
            }
          } catch (e) {}
        }
      } catch (err) {}
    }

    if (modified) {
      await saveClients(clients);
    }

    const enriched = await Promise.all(clients.map(async c => {
      const stats = await getClientOrdersStats(c.email);
      return {
        id: c.id,
        key: (c.email || `${c.nom}_${c.prenom}`).toLowerCase().replace(/[^a-z0-9_]/g, '_'),
        nom: c.nom,
        prenom: c.prenom,
        email: c.email,
        telephone: c.telephone,
        adresse: c.adresse,
        codePostal: c.codePostal,
        ville: c.ville,
        pays: c.pays || 'France',
        dateInscription: c.dateInscription,
        notes: c.notes || '',
        ordersCount: stats.ordersCount,
        totalSpent: stats.totalSpent,
        firstDate: stats.firstDate || c.dateInscription,
        lastDate: stats.lastDate || c.dateInscription,
        orders: stats.orders
      };
    }));

    return json(res, 200, { ok: true, clients: enriched });
  } catch (err) {
    console.error('adminGetClients error:', err);
    return json(res, 500, { error: 'Erreur lors du chargement des clients.' });
  }
}

export async function adminDeleteClient(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const targetEmail = (body.email || '').trim().toLowerCase();
    const targetId = (body.id || '').trim();
    const deleteOrders = !!body.deleteOrders;

    if (!targetEmail && !targetId) {
      return json(res, 400, { error: 'Identifiant ou courriel du client requis.' });
    }

    const clients = await loadClients();
    const initialCount = clients.length;
    const remaining = clients.filter(c => {
      if (targetId && c.id === targetId) return false;
      if (targetEmail && c.email.toLowerCase() === targetEmail) return false;
      return true;
    });

    const deletedClient = clients.find(c => (targetId && c.id === targetId) || (targetEmail && c.email.toLowerCase() === targetEmail));

    if (remaining.length === initialCount) {
      return json(res, 404, { error: 'Fiche client introuvable.' });
    }

    // Sauvegarde en corbeille pour restauration facile
    if (deletedClient) {
      try {
        let trash = [];
        if (fsSync.existsSync(clientsTrashFile)) {
          trash = JSON.parse(await fs.readFile(clientsTrashFile, 'utf8'));
          if (!Array.isArray(trash)) trash = [];
        }
        trash = trash.filter(x => x.email !== deletedClient.email);
        trash.push({ ...deletedClient, deletedAt: new Date().toISOString() });
        await fs.writeFile(clientsTrashFile, JSON.stringify(trash, null, 2), 'utf8');
      } catch (e) {
        console.warn('Erreur sauvegarde corbeille clients:', e);
      }
    }

    await saveClients(remaining);

    // Si demande de suppression des commandes associees
    if (deleteOrders && targetEmail && fsSync.existsSync(submissionsDir)) {
      const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const subPath = path.join(submissionsDir, ent.name, 'submission.json');
        if (!fsSync.existsSync(subPath)) continue;
        try {
          const raw = await fs.readFile(subPath, 'utf8');
          const d = JSON.parse(raw);
          if (d.client?.email?.toLowerCase() === targetEmail) {
            await fs.rm(path.join(submissionsDir, ent.name), { recursive: true, force: true });
          }
        } catch (e) {}
      }
    }

    return json(res, 200, { ok: true, message: 'Fiche client supprimée avec succès.' });
  } catch (err) {
    console.error('adminDeleteClient error:', err);
    return json(res, 500, { error: 'Erreur lors de la suppression du client.' });
  }
}

export async function adminSaveClient(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const email = (body.email || '').trim().toLowerCase();
    if (!email) return json(res, 400, { error: 'Adresse courriel requise.' });

    const clients = await loadClients();
    const idx = clients.findIndex(c => c.email.toLowerCase() === email || (body.id && c.id === body.id));

    if (idx >= 0) {
      // Mise a jour
      const c = clients[idx];
      c.nom = body.nom !== undefined ? String(body.nom).trim() : c.nom;
      c.prenom = body.prenom !== undefined ? String(body.prenom).trim() : c.prenom;
      c.telephone = body.telephone !== undefined ? String(body.telephone).trim() : c.telephone;
      c.adresse = body.adresse !== undefined ? String(body.adresse).trim() : c.adresse;
      c.codePostal = body.codePostal !== undefined ? String(body.codePostal).trim() : c.codePostal;
      c.ville = body.ville !== undefined ? String(body.ville).trim() : c.ville;
      c.notes = body.notes !== undefined ? String(body.notes).trim() : c.notes;
      if (body.isTest !== undefined) c.isTest = !!body.isTest;
      if (body.newPassword && body.newPassword.length >= 6) {
        c.passwordHash = hashPassword(body.newPassword);
      }
      clients[idx] = c;
    } else {
      // Creation
      clients.push({
        id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
        email,
        passwordHash: hashPassword(body.password || 'Client123!'),
        nom: String(body.nom || 'Client').trim(),
        prenom: String(body.prenom || '').trim(),
        telephone: String(body.telephone || '').trim(),
        adresse: String(body.adresse || '').trim(),
        codePostal: String(body.codePostal || '').trim(),
        ville: String(body.ville || '').trim(),
        pays: 'France',
        dateInscription: new Date().toISOString(),
        notes: String(body.notes || 'Créé manuellement depuis l\'atelier.').trim(),
        isTest: !!body.isTest,
        role: 'client'
      });
    }

    await saveClients(clients);
    return json(res, 200, { ok: true, message: 'Fiche client enregistrée.' });
  } catch (err) {
    console.error('adminSaveClient error:', err);
    return json(res, 500, { error: 'Erreur lors de l\'enregistrement de la fiche client.' });
  }
}

// ----------------------------------------------------
// API ESPACE CLIENT CONNECTE
// ----------------------------------------------------

export async function clientRegister(req, res) {
  try {
    const body = await readJson(req);
    const email = (body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();
    const nom = String(body.nom || '').trim();
    const prenom = String(body.prenom || '').trim();

    if (!email || !email.includes('@')) {
      return json(res, 400, { error: 'Adresse courriel valide requise.' });
    }
    if (!password || password.length < 6) {
      return json(res, 400, { error: 'Le mot de passe doit comporter au moins 6 caractères.' });
    }
    if (!nom) {
      return json(res, 400, { error: 'Votre nom est requis.' });
    }

    const clients = await loadClients();
    if (clients.some(c => c.email.toLowerCase() === email)) {
      return json(res, 409, { error: 'Un compte existe déjà avec cette adresse courriel. Veuillez vous connecter.' });
    }

    const newClient = {
      id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
      email,
      passwordHash: hashPassword(password),
      nom,
      prenom,
      telephone: String(body.telephone || '').trim(),
      adresse: String(body.adresse || '').trim(),
      codePostal: String(body.codePostal || '').trim(),
      ville: String(body.ville || '').trim(),
      pays: 'France',
      dateInscription: new Date().toISOString(),
      notes: 'Inscription directe Espace Client.',
      role: 'client'
    };

    clients.push(newClient);
    await saveClients(clients);

    const token = crypto.randomBytes(32).toString('hex');
    clientSessions.set(token, {
      clientId: newClient.id,
      email: newClient.email,
      expiresAt: Date.now() + 30 * 24 * 3600 * 1000 // 30 jours
    });

    const safeProfile = {
      id: newClient.id,
      email: newClient.email,
      nom: newClient.nom,
      prenom: newClient.prenom,
      telephone: newClient.telephone,
      adresse: newClient.adresse,
      codePostal: newClient.codePostal,
      ville: newClient.ville
    };

    return json(res, 201, { ok: true, token, client: safeProfile, message: 'Compte créé avec succès.' });
  } catch (err) {
    console.error('clientRegister error:', err);
    return json(res, 500, { error: 'Erreur lors de la création du compte.' });
  }
}

export async function clientLogin(req, res) {
  try {
    const body = await readJson(req);
    const email = (body.email || '').trim().toLowerCase();
    const password = String(body.password || '').trim();

    if (!email || !password) {
      return json(res, 400, { error: 'Courriel et mot de passe requis.' });
    }

    const clients = await loadClients();
    const client = clients.find(c => c.email.toLowerCase() === email);

    if (!client || !verifyPassword(password, client.passwordHash)) {
      return json(res, 401, { error: 'Identifiants incorrects. Vérifiez votre courriel et votre mot de passe.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    clientSessions.set(token, {
      clientId: client.id,
      email: client.email,
      expiresAt: Date.now() + 30 * 24 * 3600 * 1000
    });

    const safeProfile = {
      id: client.id,
      email: client.email,
      nom: client.nom,
      prenom: client.prenom,
      telephone: client.telephone,
      adresse: client.adresse,
      codePostal: client.codePostal,
      ville: client.ville
    };

    return json(res, 200, { ok: true, token, client: safeProfile, message: 'Connexion réussie.' });
  } catch (err) {
    console.error('clientLogin error:', err);
    return json(res, 500, { error: 'Erreur lors de la connexion.' });
  }
}

export async function clientGetProfile(req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const session = clientSessions.get(token);

    if (!session || session.expiresAt < Date.now()) {
      return json(res, 401, { error: 'Session expirée ou invalide. Veuillez vous reconnecter.' });
    }

    const clients = await loadClients();
    const client = clients.find(c => c.id === session.clientId || c.email.toLowerCase() === session.email.toLowerCase());

    if (!client) {
      return json(res, 404, { error: 'Profil client introuvable.' });
    }

    const stats = await getClientOrdersStats(client.email);

    return json(res, 200, {
      ok: true,
      client: {
        id: client.id,
        email: client.email,
        nom: client.nom,
        prenom: client.prenom,
        telephone: client.telephone,
        adresse: client.adresse,
        codePostal: client.codePostal,
        ville: client.ville,
        ordersCount: stats.ordersCount,
        totalSpent: stats.totalSpent,
        orders: stats.orders,
        generalMessages: Array.isArray(client.messages) ? client.messages : []
      }
    });
  } catch (err) {
    console.error('clientGetProfile error:', err);
    return json(res, 500, { error: 'Erreur lors de la récupération du profil.' });
  }
}

export async function clientUpdateProfile(req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const session = clientSessions.get(token);

    if (!session || session.expiresAt < Date.now()) {
      return json(res, 401, { error: 'Session expirée ou invalide. Veuillez vous reconnecter.' });
    }

    const body = await readJson(req);
    const clients = await loadClients();
    const client = clients.find(c => c.id === session.clientId || c.email.toLowerCase() === session.email.toLowerCase());

    if (!client) {
      return json(res, 404, { error: 'Profil client introuvable.' });
    }

    if (body.nom !== undefined) client.nom = String(body.nom).trim();
    if (body.prenom !== undefined) client.prenom = String(body.prenom).trim();
    if (body.telephone !== undefined) client.telephone = String(body.telephone).trim();
    if (body.adresse !== undefined) client.adresse = String(body.adresse).trim();
    if (body.codePostal !== undefined) client.codePostal = String(body.codePostal).trim();
    if (body.ville !== undefined) client.ville = String(body.ville).trim();

    if (body.newPassword && body.newPassword.length >= 6) {
      client.passwordHash = hashPassword(body.newPassword);
    }

    await saveClients(clients);

    return json(res, 200, {
      ok: true,
      message: 'Vos coordonnées ont été enregistrées avec succès.',
      client: {
        id: client.id,
        email: client.email,
        nom: client.nom,
        prenom: client.prenom,
        telephone: client.telephone,
        adresse: client.adresse,
        codePostal: client.codePostal,
        ville: client.ville
      }
    });
  } catch (err) {
    console.error('clientUpdateProfile error:', err);
    return json(res, 500, { error: 'Erreur lors de la mise à jour du profil.' });
  }
}

export async function adminRestoreClients(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const clients = await loadClients();
    const existingEmails = new Set(clients.map(c => (c.email || '').trim().toLowerCase()));
    let restoredCount = 0;
    const restoredClients = [];

    // 1. Restaurer depuis la corbeille clients_trash.json
    if (fsSync.existsSync(clientsTrashFile)) {
      try {
        const rawTrash = await fs.readFile(clientsTrashFile, 'utf8');
        const trash = JSON.parse(rawTrash);
        if (Array.isArray(trash)) {
          for (const item of trash) {
            const em = (item.email || '').trim().toLowerCase();
            if (em && !existingEmails.has(em)) {
              delete item.deletedAt;
              clients.push(item);
              existingEmails.add(em);
              restoredClients.push(`${item.nom || 'Client'} ${item.prenom || ''} (${em})`);
              restoredCount++;
            }
          }
        }
      } catch (e) {
        console.warn('Erreur lecture clients_trash:', e);
      }
    }

    // 2. Restaurer depuis l'historique physique de tous les dossiers submissions/
    if (fsSync.existsSync(submissionsDir)) {
      const entries = await fs.readdir(submissionsDir, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const subPath = path.join(submissionsDir, ent.name, 'submission.json');
        if (!fsSync.existsSync(subPath)) continue;
        try {
          const raw = await fs.readFile(subPath, 'utf8');
          const d = JSON.parse(raw);
          const c = d.client || {};
          const em = (c.email || '').trim().toLowerCase();
          if (em && !existingEmails.has(em)) {
            const newClient = {
              id: `CLI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
              email: em,
              passwordHash: hashPassword('Client123!'),
              nom: c.nom || 'Client',
              prenom: c.prenom || '',
              telephone: c.telephone || '',
              adresse: c.adresse || '',
              codePostal: c.codePostal || '',
              ville: c.ville || '',
              pays: c.pays || 'France',
              dateInscription: d.date || new Date().toISOString(),
              notes: c.notes || 'Fiche client restaurée automatiquement depuis l’historique des commandes.',
              role: 'client'
            };
            clients.push(newClient);
            existingEmails.add(em);
            restoredClients.push(`${newClient.nom} ${newClient.prenom} (${em})`);
            restoredCount++;
          }
        } catch (e) {}
      }
    }

    if (restoredCount > 0) {
      await saveClients(clients);
    }

    return json(res, 200, {
      ok: true,
      restoredCount,
      restoredClients,
      message: restoredCount > 0
        ? `${restoredCount} fiche(s) client restaurée(s) avec succès !`
        : 'Aucune fiche client manquante à restaurer.'
    });
  } catch (err) {
    console.error('adminRestoreClients error:', err);
    return json(res, 500, { error: 'Erreur lors de la restauration des clients.' });
  }
}

// Obtenir la liste des clients dans la corbeille
export async function adminGetClientsTrash(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    let trash = [];
    if (fsSync.existsSync(clientsTrashFile)) {
      const raw = await fs.readFile(clientsTrashFile, 'utf8');
      trash = JSON.parse(raw);
      if (!Array.isArray(trash)) trash = [];
    }
    // Trier du plus récemment supprimé au plus ancien
    trash.sort((a, b) => new Date(b.deletedAt || 0) - new Date(a.deletedAt || 0));
    return json(res, 200, { ok: true, trash });
  } catch (err) {
    return json(res, 500, { error: 'Erreur lecture corbeille.' });
  }
}

// Restaurer UNIQUEMENT le dernier client supprimé
export async function adminRestoreLastClient(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    if (!fsSync.existsSync(clientsTrashFile)) {
      return json(res, 404, { error: 'La corbeille des clients est vide.' });
    }
    const rawTrash = await fs.readFile(clientsTrashFile, 'utf8');
    let trash = JSON.parse(rawTrash);
    if (!Array.isArray(trash) || trash.length === 0) {
      return json(res, 404, { error: 'Aucun client supprimé dans la corbeille.' });
    }

    // Le plus récemment supprimé
    trash.sort((a, b) => new Date(b.deletedAt || 0) - new Date(a.deletedAt || 0));
    const target = trash.shift(); // retire le premier (le plus récent)

    const clients = await loadClients();
    const existing = clients.find(c => c.email.toLowerCase() === target.email.toLowerCase() || c.id === target.id);
    if (existing) {
      // Déjà présent dans les clients
      await fs.writeFile(clientsTrashFile, JSON.stringify(trash, null, 2), 'utf8');
      return json(res, 200, { ok: true, message: `Le client ${target.nom} ${target.prenom} était déjà présent dans la liste active.` });
    }

    delete target.deletedAt;
    clients.push(target);
    await saveClients(clients);
    await fs.writeFile(clientsTrashFile, JSON.stringify(trash, null, 2), 'utf8');

    return json(res, 200, {
      ok: true,
      message: `Dernier client restauré : ${target.nom} ${target.prenom} (${target.email})`,
      restoredClient: target
    });
  } catch (err) {
    console.error('adminRestoreLastClient error:', err);
    return json(res, 500, { error: 'Erreur lors de la restauration du dernier client.' });
  }
}

// Restaurer un client spécifique choisi dans la corbeille
export async function adminRestoreSpecificClient(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const targetId = (body.id || '').trim();
    const targetEmail = (body.email || '').trim().toLowerCase();

    if (!targetId && !targetEmail) {
      return json(res, 400, { error: 'Identifiant ou email requis pour restaurer.' });
    }

    if (!fsSync.existsSync(clientsTrashFile)) {
      return json(res, 404, { error: 'La corbeille des clients est vide.' });
    }

    const rawTrash = await fs.readFile(clientsTrashFile, 'utf8');
    let trash = JSON.parse(rawTrash);
    if (!Array.isArray(trash) || trash.length === 0) {
      return json(res, 404, { error: 'La corbeille des clients est vide.' });
    }

    const targetIdx = trash.findIndex(c => (targetId && c.id === targetId) || (targetEmail && c.email.toLowerCase() === targetEmail));
    if (targetIdx === -1) {
      return json(res, 404, { error: 'Client introuvable dans la corbeille.' });
    }

    const [target] = trash.splice(targetIdx, 1);
    const clients = await loadClients();
    const existingIdx = clients.findIndex(c => c.email.toLowerCase() === target.email.toLowerCase() || c.id === target.id);

    if (existingIdx === -1) {
      delete target.deletedAt;
      clients.push(target);
      await saveClients(clients);
    }

    await fs.writeFile(clientsTrashFile, JSON.stringify(trash, null, 2), 'utf8');

    return json(res, 200, {
      ok: true,
      message: `Client ${target.nom} ${target.prenom} restauré avec succès !`,
      restoredClient: target
    });
  } catch (err) {
    console.error('adminRestoreSpecificClient error:', err);
    return json(res, 500, { error: 'Erreur lors de la restauration du client.' });
  }
}

export function generateAiAssistantResponse(questionText, clientName = 'Client') {
  const q = String(questionText || '').toLowerCase();
  let answer = '';

  if (q.includes('delai') || q.includes('délai') || q.includes('temps') || q.includes('quand') || q.includes('combien de temps') || q.includes('livr')) {
    answer = `Bonjour ${clientName}. Nos délais habituels de fabrication à l'atelier sont de 48h à 72h ouvrées dès validation de votre Bon à Tirer (BAT). Vous recevez ensuite une notification dès que votre commande est prête ou expédiée.`;
  } else if (q.includes('bat') || q.includes('valid') || q.includes('bon a tirer') || q.includes('bon à tirer') || q.includes('maquette') || q.includes('conforme')) {
    answer = `Bonjour ${clientName}. Pour inspecter votre maquette en 3D et donner votre accord de fabrication, rendez-vous dans l'onglet "Mes Commandes", puis cliquez sur "Valider mon BAT". Dès validation, le travail d'impression est engagé.`;
  } else if (q.includes('qualite') || q.includes('qualité') || q.includes('resolution') || q.includes('résolution') || q.includes('dpi') || q.includes('pixel') || q.includes('flou') || q.includes('format')) {
    answer = `Pour un marquage haute fidélité, nous recommandons des images d'une résolution de 300 DPI (PNG avec fond transparent, JPG haute définition ou PDF vectorisé). Cela garantit un rendu parfaitement net sans pixelisation.`;
  } else if (q.includes('retrait') || q.includes('adresse') || q.includes('givry') || q.includes('magasin') || q.includes('atelier') || q.includes('ou')) {
    answer = `Notre atelier de création et sublimation est situé à Givry-en-Argonne (51330, Marne). Le retrait sur place de votre commande est totalement gratuit aux horaires d'ouverture.`;
  } else if (q.includes('prix') || q.includes('tarif') || q.includes('devis') || q.includes('remise') || q.includes('promo') || q.includes('code') || q.includes('cadeau')) {
    answer = `Nos prix unitaires sont affichés en direct sur chaque support. Pour bénéficier d'une remise, vous pouvez saisir votre code cadeau (ex: CADEAU pour -20%) dans le panier de commande.`;
  } else {
    answer = `Bonjour ${clientName}. Votre demande a été enregistrée par l'accueil de l'Atelier Graph2Print. Un membre de notre équipe prendra le relais pour vous apporter une réponse personnalisée sous 24h ouvrées.`;
  }

  return {
    id: `MSG-AI-${Date.now().toString(36).toUpperCase()}`,
    author: 'Assistant IA Atelier Graph2Print',
    sender: 'atelier',
    isAi: true,
    text: answer,
    date: new Date().toISOString()
  };
}

export async function clientSendMessage(req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const session = clientSessions.get(token);

    if (!session || session.expiresAt < Date.now()) {
      return json(res, 401, { error: 'Session expirée ou invalide. Veuillez vous reconnecter.' });
    }

    const body = await readJson(req);
    const text = String(body.text || '').trim();
    const folder = (body.folder || '').trim();

    if (!text) {
      return json(res, 400, { error: 'Le texte du message est requis.' });
    }

    const clients = await loadClients();
    const client = clients.find(c => c.id === session.clientId || c.email.toLowerCase() === session.email.toLowerCase());

    if (!client) {
      return json(res, 404, { error: 'Profil client introuvable.' });
    }

    const clientName = `${client.prenom || ''} ${client.nom || 'Client'}`.trim() || client.email;
    const newMsg = {
      id: `MSG-${Date.now().toString(36).toUpperCase()}`,
      author: clientName,
      sender: 'client',
      text,
      date: new Date().toISOString()
    };

    // Génération automatique d'une réponse IA d'accueil immédiate
    const aiResponse = generateAiAssistantResponse(text, client.prenom || client.nom || 'Client');

    if (folder && folder !== 'general') {
      const safeFolder = path.basename(folder);
      const subPath = path.join(submissionsDir, safeFolder, 'submission.json');
      if (fsSync.existsSync(subPath)) {
        const subData = JSON.parse(await fs.readFile(subPath, 'utf8'));
        if (!Array.isArray(subData.messages)) subData.messages = [];
        subData.messages.push(newMsg);
        subData.messages.push(aiResponse);
        await fs.writeFile(subPath, JSON.stringify(subData, null, 2), 'utf8');
      }
    } else {
      if (!Array.isArray(client.messages)) client.messages = [];
      client.messages.push(newMsg);
      client.messages.push(aiResponse);
      await saveClients(clients);
    }

    return json(res, 200, {
      ok: true,
      message: 'Message envoyé avec succès.',
      newMsg,
      aiResponse
    });
  } catch (err) {
    console.error('clientSendMessage error:', err);
    return json(res, 500, { error: 'Erreur lors de l\'envoi du message.' });
  }
}
