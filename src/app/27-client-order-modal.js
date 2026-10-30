// Gestion du formulaire de coordonnées client pour l'envoi de création
const STORAGE_KEY = 'mockup3d_client_coords';

export function register(app) {
  app.openClientOrderModal = function openClientOrderModal() {
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
    modal.hidden = false;
    setTimeout(() => document.querySelector('#orderNom')?.focus(), 50);
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
  return {
    data: { nom, prenom, adresse, codePostal, ville, email, telephone, note }
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
