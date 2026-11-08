import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { json, readJson, authorizeAdmin } from './security.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const discountsFile = path.join(__dirname, 'data', 'discounts.json');

async function loadDiscounts() {
  try {
    if (!fsSync.existsSync(discountsFile)) {
      return {
        globalDiscount: { enabled: false, percent: 10, label: 'Remise spéciale atelier -10%' },
        coupons: [
          { code: 'CADEAU', type: 'percent', value: 20, label: 'Remise fidélité client (-20%)', active: true }
        ]
      };
    }
    const raw = await fs.readFile(discountsFile, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Erreur lecture discounts.json:', err);
    return {
      globalDiscount: { enabled: false, percent: 10, label: 'Remise spéciale atelier -10%' },
      coupons: []
    };
  }
}

async function saveDiscounts(data) {
  try {
    await fs.writeFile(discountsFile, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Erreur écriture discounts.json:', err);
    return false;
  }
}

// GET /api/discounts (public)
export async function getDiscounts(req, res) {
  const data = await loadDiscounts();
  // Pour la sécurité, ne renvoyer publiquement que la remise globale et la possibilité de vérifier un code
  return json(res, 200, {
    ok: true,
    globalDiscount: data.globalDiscount || { enabled: false, percent: 0 },
    // On ne renvoie que les codes actifs pour l'autocomplétion ou l'affichage public si souhaité
    availableCoupons: (data.coupons || []).filter(c => c.active).map(c => ({
      code: c.code,
      type: c.type,
      value: c.value,
      label: c.label
    }))
  });
}

// GET /api/admin/discounts (protégé)
export async function adminGetDiscounts(req, res) {
  if (!authorizeAdmin(req, res)) return;
  const data = await loadDiscounts();
  return json(res, 200, { ok: true, data });
}

// POST /api/admin/discounts/global
export async function adminUpdateGlobalDiscount(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const data = await loadDiscounts();

    data.globalDiscount = {
      enabled: !!body.enabled,
      percent: Math.max(0, Math.min(100, parseFloat(body.percent || 0))),
      label: String(body.label || 'Remise exceptionnelle').trim()
    };

    await saveDiscounts(data);
    return json(res, 200, { ok: true, message: 'Remise globale mise à jour.', globalDiscount: data.globalDiscount });
  } catch (err) {
    return json(res, 500, { error: 'Erreur mise à jour remise globale.' });
  }
}

// POST /api/admin/discounts/coupon
export async function adminSaveCoupon(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const code = String(body.code || '').trim().toUpperCase();
    if (!code) return json(res, 400, { error: 'Code requis.' });

    const data = await loadDiscounts();
    if (!Array.isArray(data.coupons)) data.coupons = [];

    const idx = data.coupons.findIndex(c => c.code.toUpperCase() === code);
    const couponObj = {
      code,
      type: body.type === 'fixed' ? 'fixed' : 'percent',
      value: Math.max(0, parseFloat(body.value || 0)),
      label: String(body.label || `Remise code ${code}`).trim(),
      active: body.active !== undefined ? !!body.active : true
    };

    if (idx >= 0) {
      data.coupons[idx] = couponObj;
    } else {
      data.coupons.push(couponObj);
    }

    await saveDiscounts(data);
    return json(res, 200, { ok: true, message: `Code cadeau "${code}" enregistré avec succès.`, coupon: couponObj });
  } catch (err) {
    return json(res, 500, { error: 'Erreur enregistrement code cadeau.' });
  }
}

// DELETE /api/admin/discounts/coupon
export async function adminDeleteCoupon(req, res) {
  if (!authorizeAdmin(req, res)) return;
  try {
    const body = await readJson(req);
    const code = String(body.code || '').trim().toUpperCase();
    if (!code) return json(res, 400, { error: 'Code requis.' });

    const data = await loadDiscounts();
    if (!Array.isArray(data.coupons)) data.coupons = [];

    const before = data.coupons.length;
    data.coupons = data.coupons.filter(c => c.code.toUpperCase() !== code);

    if (data.coupons.length === before) {
      return json(res, 404, { error: 'Code cadeau introuvable.' });
    }

    await saveDiscounts(data);
    return json(res, 200, { ok: true, message: `Code "${code}" supprimé.` });
  } catch (err) {
    return json(res, 500, { error: 'Erreur suppression code cadeau.' });
  }
}

// POST /api/discounts/apply (public)
export async function applyDiscountCheck(req, res) {
  try {
    const body = await readJson(req);
    const code = String(body.code || '').trim().toUpperCase();
    const subtotal = Math.max(0, parseFloat(body.subtotal || 0));

    const data = await loadDiscounts();
    let discountAmount = 0;
    let appliedLabel = '';
    let couponDetails = null;

    // 1. Remise globale si active
    if (data.globalDiscount && data.globalDiscount.enabled && data.globalDiscount.percent > 0) {
      const globAmount = (subtotal * data.globalDiscount.percent) / 100;
      discountAmount += globAmount;
      appliedLabel = `${data.globalDiscount.label} (-${data.globalDiscount.percent}%)`;
    }

    // 2. Code cadeau si fourni
    if (code) {
      const found = (data.coupons || []).find(c => c.code.toUpperCase() === code && c.active);
      if (!found) {
        return json(res, 400, { error: `Le code cadeau "${code}" est invalide ou expiré.` });
      }
      let cAmount = 0;
      if (found.type === 'percent') {
        cAmount = (subtotal * found.value) / 100;
      } else {
        cAmount = found.value;
      }
      discountAmount = Math.min(subtotal, discountAmount + cAmount);
      appliedLabel = appliedLabel ? `${appliedLabel} + ${found.label}` : found.label;
      couponDetails = found;
    }

    const finalTotal = Math.max(0, subtotal - discountAmount);

    return json(res, 200, {
      ok: true,
      code,
      subtotal,
      discountAmount: Math.round(discountAmount * 100) / 100,
      finalTotal: Math.round(finalTotal * 100) / 100,
      appliedLabel: appliedLabel || 'Aucune remise',
      coupon: couponDetails,
      globalDiscount: data.globalDiscount
    });
  } catch (err) {
    return json(res, 500, { error: 'Erreur validation remise.' });
  }
}
