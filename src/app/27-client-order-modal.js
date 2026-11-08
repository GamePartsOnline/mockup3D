// Gestion du formulaire de coordonnées client pour l'envoi de création
const STORAGE_KEY = 'mockup3d_client_coords';

export function register(app) {
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
    setTimeout(() => document.querySelector('#orderNom')?.focus(), 50);
  };

  app.updateOrderTotalCalc = function() {
    const qtyInput = document.querySelector('#orderQuantity');
    const totalEl = document.querySelector('#orderTotalCalculatedPrice');
    const prevPriceEl = document.querySelector('#orderBatProductPrice');
    if (!qtyInput || !totalEl) return;
    const qty = Math.max(1, parseInt(qtyInput.value || '1', 10));
    const priceText = prevPriceEl?.textContent || '17,00 €';
    const num = parseFloat(priceText.replace(',', '.').replace(/[^0-9.]/g, '')) || 17.0;
    const total = (num * qty).toFixed(2).replace('.', ',');
    totalEl.textContent = `${total} €`;
  };

  app.closeClientOrderModal = function closeClientOrderModal() {
    const modal = document.querySelector('#clientOrderModal');
    if (modal) modal.hidden = true;
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

  if (!nom) return { error: 'Veuillez saisir votre nom.' };
  if (!prenom) return { error: 'Veuillez saisir votre prénom.' };
  if (!adresse) return { error: 'Veuillez saisir votre adresse postale.' };
  if (!codePostal) return { error: 'Veuillez renseigner votre code postal.' };
  if (!ville) return { error: 'Veuillez renseigner votre ville.' };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Veuillez saisir une adresse e-mail valide.' };
  }
  if (!telephone || telephone.length < 6) {
    return { error: 'Veuillez saisir un numéro de téléphone valide.' };
  }
  const acceptCgv = document.querySelector('#orderAcceptCgv');
  if (acceptCgv && !acceptCgv.checked) {
    return { error: 'Veuillez accepter les Conditions Générales de Vente pour valider votre commande.' };
  }
  const curKey = app.currentProductKey;
  const isAct = app.isProductActive ? app.isProductActive(curKey) : true;
  if (!isAct) {
    return { error: 'Cet article est actuellement désactivé et ne peut pas être commandé.' };
  }
  return {
    data: { nom, prenom, adresse, codePostal, ville, email, telephone, note, quantity, unitPrice, totalPrice, productName }
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

  const cgvModal = document.querySelector('#cgvModal');
  const mentionsModal = document.querySelector('#mentionsModal');

  document.querySelectorAll('.btn-open-cgv').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cgvModal) { cgvModal.hidden = false; cgvModal.removeAttribute('hidden'); }
    });
  });

  document.querySelectorAll('.btn-open-mentions').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mentionsModal) { mentionsModal.hidden = false; mentionsModal.removeAttribute('hidden'); }
    });
  });

  document.querySelectorAll('.close-cgv-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (cgvModal) { cgvModal.hidden = true; cgvModal.setAttribute('hidden', ''); }
    });
  });

  document.querySelectorAll('.close-mentions-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (mentionsModal) { mentionsModal.hidden = true; mentionsModal.setAttribute('hidden', ''); }
    });
  });

  cgvModal?.addEventListener('click', (e) => {
    if (e.target === cgvModal) { cgvModal.hidden = true; cgvModal.setAttribute('hidden', ''); }
  });
  mentionsModal?.addEventListener('click', (e) => {
    if (e.target === mentionsModal) { mentionsModal.hidden = true; mentionsModal.setAttribute('hidden', ''); }
  });

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
    confirmBtn.textContent = 'Envoi en cours…';
    try {
      app.closeClientOrderModal();
      await app.executeSubmission(check.data);
    } catch (err) {
      modal.hidden = false;
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
