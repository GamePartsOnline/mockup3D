// Gestion du formulaire de validation de commande, multi-produits, codes cadeaux et favoris
const STORAGE_KEY = 'mockup3d_client_coords';
const FAVORITES_STORAGE_KEY = 'mockup3d_favorite_orders';

const PROMO_CODES = {
  'CADEAU': { type: 'percent', val: 20, label: 'Code CADEAU (-20%)' },
  'NOEL2026': { type: 'percent', val: 25, label: 'Spécial Noël (-25%)' },
  'BIENVENUE': { type: 'percent', val: 15, label: 'Bienvenue (-15%)' },
  'VIP10': { type: 'percent', val: 10, label: 'Remise VIP (-10%)' },
  'G2P5': { type: 'fixed', val: 5.0, label: 'Bon d’achat Graph2Print (-5 €)' }
};

export function register(app) {
  app.orderCart = [];
  app.appliedDiscount = null;

  app.openClientOrderModal = function openClientOrderModal() {
    const curKey = app.currentProductKey;
    const isAct = app.isProductActive ? app.isProductActive(curKey) : true;
    if (!isAct) {
      app.showToast('Cet article est actuellement désactivé et indisponible à la commande.');
      return;
    }
    const modal = document.querySelector('#clientOrderModal');
    if (!modal) return;
    const errBox = document.querySelector('#orderErrorMessage');
    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }

    // Vérifier si le client est connecté
    const clientProf = JSON.parse(localStorage.getItem('g2p_client_profile') || 'null');
    const connectedWrap = document.querySelector('#orderConnectedClientWrap');
    const manualWrap = document.querySelector('#orderManualCoordsWrap');

    if (clientProf && clientProf.email) {
      // CLIENT CONNECTÉ : PAS DE FORMULAIRE À REREMPLIR !
      if (connectedWrap) {
        connectedWrap.style.display = 'flex';
        const nameEl = document.querySelector('#orderConnectedClientName');
        const addrEl = document.querySelector('#orderConnectedClientAddress');
        const contactEl = document.querySelector('#orderConnectedClientContact');
        if (nameEl) nameEl.textContent = `${clientProf.prenom || ''} ${clientProf.nom || 'Client'}`.trim();
        if (addrEl) addrEl.textContent = `${clientProf.adresse || 'Adresse'}, ${clientProf.codePostal || ''} ${clientProf.ville || ''}`.trim();
        if (contactEl) contactEl.textContent = `${clientProf.email || ''} ${clientProf.telephone ? '• ' + clientProf.telephone : ''}`;
      }
      if (manualWrap) manualWrap.style.display = 'none';

      // Remplir aussi les inputs cachés pour getFormData
      if (clientProf.nom) document.querySelector('#orderNom').value = clientProf.nom;
      if (clientProf.prenom) document.querySelector('#orderPrenom').value = clientProf.prenom;
      if (clientProf.adresse) document.querySelector('#orderAdresse').value = clientProf.adresse;
      if (clientProf.codePostal) document.querySelector('#orderCodePostal').value = clientProf.codePostal;
      if (clientProf.ville) document.querySelector('#orderVille').value = clientProf.ville;
      if (clientProf.email) document.querySelector('#orderEmail').value = clientProf.email;
      if (clientProf.telephone) document.querySelector('#orderTelephone').value = clientProf.telephone;
    } else {
      // CLIENT NON CONNECTÉ : Formulaire classique
      if (connectedWrap) connectedWrap.style.display = 'none';
      if (manualWrap) manualWrap.style.display = 'flex';

      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        if (saved.nom) document.querySelector('#orderNom').value = saved.nom;
        if (saved.prenom) document.querySelector('#orderPrenom').value = saved.prenom;
        if (saved.adresse) document.querySelector('#orderAdresse').value = saved.adresse;
        if (saved.codePostal) document.querySelector('#orderCodePostal').value = saved.codePostal;
        if (saved.ville) document.querySelector('#orderVille').value = saved.ville;
        if (saved.email) document.querySelector('#orderEmail').value = saved.email;
        if (saved.telephone) document.querySelector('#orderTelephone').value = saved.telephone;
      } catch {}
    }

    // Gestion des Favoris
    app.updateFavoritesDropdown?.();

    // Rendu Panier Multi-produits
    app.renderMultiCartList?.();

    app.updateOrderResolutionNotice?.();
    const prevImg = document.querySelector('#orderBatPreviewImg');
    const prevName = document.querySelector('#orderBatProductName');
    const prevPrice = document.querySelector('#orderBatProductPrice');
    if (prevImg && app.renderer?.domElement) {
      prevImg.src = app.renderer.domElement.toDataURL('image/png');
    }
    if (prevName) {
      prevName.textContent = app.product?.name || document.querySelector('#simpleProductName')?.textContent || 'Objet personnalisé';
    }
    if (prevPrice) {
      prevPrice.textContent = (app.getProductPrice && app.getProductPrice(app.currentProductKey)) || document.querySelector('#simpleProductPrice')?.textContent || '';
    }
    const qtyInput = document.querySelector('#orderQuantity');
    if (qtyInput) qtyInput.value = '1';

    app.updateOrderTotalCalc?.();
    modal.hidden = false;
    modal.removeAttribute('hidden');
    modal.style.display = 'flex';
  };

  app.updateFavoritesDropdown = function() {
    const wrap = document.querySelector('#orderFavoritesBar');
    const select = document.querySelector('#selectFavoriteOrder');
    if (!wrap || !select) return;

    let favorites = [];
    try {
      favorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
    } catch {}

    const clientOrders = app.currentClientProfile?.orders || [];
    const allFavs = [...favorites];

    // Ajouter les commandes passées qui ne sont pas déjà dans la liste
    clientOrders.forEach(o => {
      if (!allFavs.some(f => f.folder === o.folder || f.id === o.id)) {
        allFavs.push({
          id: o.id || o.folder,
          product: o.product || 'Objet',
          folder: o.folder,
          date: o.date
        });
      }
    });

    if (allFavs.length === 0) {
      wrap.style.display = 'none';
      return;
    }

    wrap.style.display = 'flex';
    select.innerHTML = '<option value="">⭐ Sélectionner une création précédente…</option>' +
      allFavs.map(f => `<option value="${f.folder || f.id}">${f.product} (${f.id || 'Favori'})</option>`).join('');

    select.onchange = () => {
      const chosen = allFavs.find(f => (f.folder || f.id) === select.value);
      if (chosen) {
        app.loadFavoriteCreation?.(chosen);
      }
    };
  };

  app.loadFavoriteCreation = function(fav) {
    if (!fav) return;
    if (fav.productKey && app.switchToProduct) {
      app.switchToProduct(fav.productKey);
    }
    setTimeout(() => {
      const loader = app.addImageFromUrl || app.loadCatalogImageDirect;
      if (fav.visualUrl && loader) {
        loader(fav.visualUrl, fav.visualName || 'Visuel favori');
      } else if (fav.folder && loader) {
        const visUrl = `/api/admin/submissions/file?folder=${encodeURIComponent(fav.folder)}&file=visuel_client.png`;
        loader(visUrl, 'Visuel favori');
      }
    }, 250);
    app.showToast(`Création favorite rechargée : ${fav.product || 'Objet'}`);
    app.closeClientOrderModal();
  };

  app.renderMultiCartList = function() {
    const wrap = document.querySelector('#orderMultiCartWrap');
    const list = document.querySelector('#orderMultiCartList');
    if (!wrap || !list) return;

    if (!app.orderCart || app.orderCart.length === 0) {
      wrap.style.display = 'none';
      return;
    }

    wrap.style.display = 'flex';
    list.innerHTML = app.orderCart.map((item, idx) => `
      <div style="display:flex; justify-content:space-between; align-items:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; padding:6px 10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${item.previewData || '/logo-graph2print.png'}" style="width:28px; height:28px; object-fit:contain; border-radius:4px; background:#f8fafc;" />
          <strong>${item.productName} (Qté : ${item.quantity})</strong>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-weight:700; color:#7c3aed;">${item.totalItemPrice}</span>
          <button type="button" class="btn-remove-cart-item" data-idx="${idx}" style="background:transparent; border:none; color:#dc2626; cursor:pointer; font-weight:700;" title="Retirer cet article">✕</button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.btn-remove-cart-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        app.orderCart.splice(idx, 1);
        app.renderMultiCartList();
        app.updateOrderTotalCalc();
      });
    });
  };

  app.updateOrderTotalCalc = function() {
    const qtyInput = document.querySelector('#orderQuantity');
    const totalEl = document.querySelector('#orderTotalCalculatedPrice');
    const subNotice = document.querySelector('#orderSubtotalNotice');
    const prevPriceEl = document.querySelector('#orderBatProductPrice');
    if (!qtyInput || !totalEl) return;

    const currentQty = Math.max(1, parseInt(qtyInput.value || '1', 10));
    const priceText = prevPriceEl?.textContent || '17,00 €';
    const unitNum = parseFloat(priceText.replace(',', '.').replace(/[^0-9.]/g, '')) || 17.0;
    const currentItemTotal = unitNum * currentQty;

    // Calculer le total du panier multi-articles
    let cartTotal = 0;
    if (Array.isArray(app.orderCart)) {
      app.orderCart.forEach(it => {
        const itNum = parseFloat(String(it.unitPrice || '17').replace(',', '.').replace(/[^0-9.]/g, '')) || 17.0;
        cartTotal += itNum * (it.quantity || 1);
      });
    }

    const brutTotal = currentItemTotal + cartTotal;
    let finalTotal = brutTotal;
    let discountAmount = 0;

    if (app.appliedDiscount) {
      if (app.appliedDiscount.type === 'percent') {
        discountAmount = brutTotal * (app.appliedDiscount.val / 100);
      } else if (app.appliedDiscount.type === 'fixed') {
        discountAmount = Math.min(brutTotal, app.appliedDiscount.val);
      }
      finalTotal = Math.max(0, brutTotal - discountAmount);
    }

    if (app.appliedDiscount && discountAmount > 0) {
      if (subNotice) subNotice.innerHTML = `Sous-total : ${brutTotal.toFixed(2).replace('.', ',')} €<br><span style="color:#059669; font-weight:700;">Remise (${app.appliedDiscount.code}) : -${discountAmount.toFixed(2).replace('.', ',')} €</span><br>Total net TTC :`;
    } else {
      if (subNotice) subNotice.textContent = 'Total estimé TTC :';
    }

    totalEl.textContent = `${finalTotal.toFixed(2).replace('.', ',')} €`;
  };

  app.closeClientOrderModal = function closeClientOrderModal() {
    const modal = document.querySelector('#clientOrderModal');
    if (modal) {
      modal.hidden = true;
      modal.setAttribute('hidden', '');
      modal.style.display = 'none';
    }
  };
}

function getFormData() {
  const nom = (document.querySelector('#orderNom')?.value || '').trim();
  const prenom = (document.querySelector('#orderPrenom')?.value || '').trim();
  const adresse = (document.querySelector('#orderAdresse')?.value || '').trim();
  const codePostal = (document.querySelector('#orderCodePostal')?.value || '').trim();
  const ville = (document.querySelector('#orderVille')?.value || '').trim();
  const email = (document.querySelector('#orderEmail')?.value || '').trim().toLowerCase();
  const telephone = (document.querySelector('#orderTelephone')?.value || '').trim();
  const note = (document.querySelector('#orderNote')?.value || '').trim();
  const quantity = Math.max(1, parseInt(document.querySelector('#orderQuantity')?.value || '1', 10));
  const unitPrice = document.querySelector('#orderBatProductPrice')?.textContent || '';
  const totalPrice = document.querySelector('#orderTotalCalculatedPrice')?.textContent || '';
  const productName = document.querySelector('#orderBatProductName')?.textContent || '';

  if (!nom) return { error: 'Veuillez renseigner votre nom.' };
  if (!adresse) return { error: 'Veuillez renseigner votre adresse de livraison.' };
  if (!email || !email.includes('@')) {
    return { error: 'Veuillez saisir une adresse courriel valide.' };
  }

  const acceptCgv = document.querySelector('#orderAcceptCgv');
  if (acceptCgv && !acceptCgv.checked) {
    return { error: 'Veuillez accepter les Conditions Générales de Vente pour valider votre commande.' };
  }

  return {
    data: {
      nom, prenom, adresse, codePostal, ville, email, telephone, note,
      quantity, unitPrice, totalPrice, productName
    }
  };
}

export function initialize(app) {
  const modal = document.querySelector('#clientOrderModal');
  const closeBtn = document.querySelector('#closeOrderModalBtn');
  const cancelBtn = document.querySelector('#cancelOrderBtn');
  const confirmBtn = document.querySelector('#confirmOrderSubmitBtn');
  const errBox = document.querySelector('#orderErrorMessage');

  const close = () => app.closeClientOrderModal();
  closeBtn?.addEventListener('click', close);
  cancelBtn?.addEventListener('click', close);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  // Quantité + / -
  const qtyInput = document.querySelector('#orderQuantity');
  const btnDec = document.querySelector('#btnOrderQtyDec');
  const btnInc = document.querySelector('#btnOrderQtyInc');

  btnDec?.addEventListener('click', () => {
    if (!qtyInput) return;
    const cur = Math.max(1, parseInt(qtyInput.value || '1', 10) - 1);
    qtyInput.value = String(cur);
    app.updateOrderTotalCalc?.();
  });

  btnInc?.addEventListener('click', () => {
    if (!qtyInput) return;
    const cur = parseInt(qtyInput.value || '1', 10) + 1;
    qtyInput.value = String(cur);
    app.updateOrderTotalCalc?.();
  });

  qtyInput?.addEventListener('input', () => {
    if (parseInt(qtyInput.value, 10) < 1) qtyInput.value = '1';
    app.updateOrderTotalCalc?.();
  });

  // Application du Code Cadeau / Promo
  const codeInput = document.querySelector('#orderDiscountCode');
  const applyCodeBtn = document.querySelector('#btnApplyDiscountCode');
  const codeFeedback = document.querySelector('#orderDiscountFeedback');

  applyCodeBtn?.addEventListener('click', async () => {
    const raw = (codeInput?.value || '').trim().toUpperCase();
    if (!raw) return;

    if (codeFeedback) codeFeedback.style.display = 'block';

    try {
      const res = await fetch('/api/discounts/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: raw, subtotal: 100 })
      });
      const data = await res.json();
      if (res.ok && data.ok && data.coupon) {
        const c = data.coupon;
        app.appliedDiscount = { type: c.type, val: c.value, label: c.label, code: c.code };
        if (codeFeedback) {
          codeFeedback.style.background = '#ecfdf5';
          codeFeedback.style.color = '#059669';
          codeFeedback.textContent = `✓ ${c.label} appliquée avec succès !`;
        }
        app.updateOrderTotalCalc?.();
        app.showToast?.(`Code cadeau ${c.code} activé !`);
        return;
      }
    } catch {}

    if (PROMO_CODES[raw]) {
      const promo = PROMO_CODES[raw];
      app.appliedDiscount = { ...promo, code: raw };
      if (codeFeedback) {
        codeFeedback.style.background = '#ecfdf5';
        codeFeedback.style.color = '#059669';
        codeFeedback.textContent = `✓ ${promo.label} appliquée avec succès !`;
      }
      app.updateOrderTotalCalc?.();
      app.showToast?.(`Code promo ${raw} activé !`);
    } else {
      app.appliedDiscount = null;
      if (codeFeedback) {
        codeFeedback.style.background = '#fef2f2';
        codeFeedback.style.color = '#dc2626';
        codeFeedback.textContent = 'Ce code cadeau n’est pas valide ou est expiré.';
      }
      app.updateOrderTotalCalc?.();
    }
  });

  // Bouton Ajouter au Panier (Multi-produits)
  const addCartBtn = document.querySelector('#btnOrderSaveAsCartItem');
  addCartBtn?.addEventListener('click', () => {
    const qty = Math.max(1, parseInt(qtyInput?.value || '1', 10));
    const priceText = document.querySelector('#orderBatProductPrice')?.textContent || '17,00 €';
    const num = parseFloat(priceText.replace(',', '.').replace(/[^0-9.]/g, '')) || 17.0;
    const itemTotal = (num * qty).toFixed(2).replace('.', ',') + ' €';

    const item = {
      productKey: app.currentProductKey,
      productName: app.product?.name || document.querySelector('#orderBatProductName')?.textContent || 'Objet personnalisé',
      unitPrice: priceText,
      quantity: qty,
      totalItemPrice: itemTotal,
      previewData: document.querySelector('#orderBatPreviewImg')?.src || '',
      customText: app.textParams?.text || ''
    };

    app.orderCart.push(item);
    app.showToast?.(`"${item.productName}" ajouté au panier ! Vous pouvez maintenant choisir un autre produit.`);
    app.closeClientOrderModal();
  });

  // Lien modifier profil
  document.querySelector('#btnOrderSwitchProfile')?.addEventListener('click', () => {
    app.closeClientOrderModal();
    app.openClientAccountModal?.();
    app.switchPortalTab?.('profile');
  });

  // Soumission finale de commande
  confirmBtn?.addEventListener('click', async () => {
    const check = getFormData();
    if (check.error) {
      if (errBox) {
        errBox.textContent = check.error;
        errBox.style.display = 'block';
      }
      return;
    }
    if (errBox) errBox.style.display = 'none';

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(check.data));
    } catch {}

    const originalText = confirmBtn.textContent;
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Transmission de la commande…';

    try {
      // Inclure les articles du panier et la remise si présents
      const payload = {
        ...check.data,
        cart: app.orderCart && app.orderCart.length > 0 ? [...app.orderCart] : null,
        discount: app.appliedDiscount ? { ...app.appliedDiscount } : null
      };

      app.closeClientOrderModal();
      await app.executeSubmission(payload);

      // Réinitialiser le panier après soumission réussie
      app.orderCart = [];
      app.appliedDiscount = null;
    } catch (err) {
      modal.hidden = false;
      modal.style.display = 'flex';
      if (errBox) {
        errBox.textContent = err?.message || 'Erreur lors de l’envoi.';
        errBox.style.display = 'block';
      }
    } finally {
      confirmBtn.disabled = false;
      confirmBtn.textContent = originalText;
    }
  });
}
