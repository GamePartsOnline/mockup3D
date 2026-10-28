// Modale de gestion propre et épurée d'un visuel individuel

export function register(app) {
  let currentItem = null;

  app.openVisualEditModal = function(item) {
    currentItem = item;
    const modal = document.querySelector('#visualEditModal');
    if (!modal) return;
    const thumb = document.querySelector('#visualEditThumb');
    const nameInput = document.querySelector('#visualEditNameInput');
    const catSel = document.querySelector('#visualEditCategorySelect');
    const subSel = document.querySelector('#visualEditSubcategorySelect');
    const repeatCheck = document.querySelector('#visualEditRepeatCheck');
    const trashBtn = document.querySelector('#visualEditTrashBtn');

    if (thumb) thumb.src = item.url;
    if (nameInput) nameInput.value = item.name || '';
    if (repeatCheck) repeatCheck.checked = !!item.repeatPattern;

    const cats = app.getCategoryNames ? app.getCategoryNames() : [];
    if (catSel) {
      catSel.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
      if (cats.includes(item.category)) catSel.value = item.category;
    }

    const updateSubs = () => {
      if (!subSel) return;
      const curCat = catSel ? catSel.value : item.category;
      const subs = app.getSubcategories ? app.getSubcategories(curCat) : [];
      if (!subs.length) {
        subSel.innerHTML = '<option value="">(Aucune sous-catégorie)</option>';
        subSel.disabled = true;
      } else {
        subSel.disabled = false;
        subSel.innerHTML = '<option value="">(Sans sous-catégorie)</option>' +
          subs.map(s => `<option value="${s}">${s}</option>`).join('');
        if (subs.includes(item.subcategory)) subSel.value = item.subcategory;
      }
    };
    updateSubs();
    if (catSel) catSel.onchange = updateSubs;

    if (trashBtn) {
      if (item.status === 'trash') {
        trashBtn.textContent = 'Restaurer ce visuel';
        trashBtn.className = 'cat-btn-sm';
        trashBtn.style.background = '#10b981';
        trashBtn.style.color = '#fff';
      } else {
        trashBtn.textContent = 'Mettre à la corbeille';
        trashBtn.className = 'cat-btn-sm cat-btn-danger';
        trashBtn.style.background = '';
        trashBtn.style.color = '';
      }
      trashBtn.onclick = async () => {
        if (item.status === 'trash') {
          item.status = 'approved';
          await app.persistCatalog?.();
          app.closeVisualEditModal();
          app.showToast(`"${item.name}" restauré de la corbeille`);
        } else {
          item.status = 'trash';
          await app.persistCatalog?.();
          app.closeVisualEditModal();
          app.showToast(`"${item.name}" déplacé dans la corbeille`);
        }
      };
    }

    const compatBtn = document.querySelector('#visualEditCompatBtn');
    if (compatBtn) {
      compatBtn.onclick = () => {
        app.openCompatibilityModal?.(item, () => {
          app.showToast('Objets compatibles mis à jour');
        });
      };
    }

    modal.hidden = false;
    modal.removeAttribute('hidden');
  };

  app.closeVisualEditModal = function() {
    const modal = document.querySelector('#visualEditModal');
    if (modal) { modal.hidden = true; modal.setAttribute('hidden', ''); }
    currentItem = null;
  };

  app.saveCurrentVisualEdit = async function() {
    if (!currentItem) return;
    const nameInput = document.querySelector('#visualEditNameInput');
    const catSel = document.querySelector('#visualEditCategorySelect');
    const subSel = document.querySelector('#visualEditSubcategorySelect');
    const repeatCheck = document.querySelector('#visualEditRepeatCheck');

    if (nameInput && nameInput.value.trim()) currentItem.name = nameInput.value.trim();
    if (catSel) currentItem.category = catSel.value;
    if (subSel) currentItem.subcategory = subSel.value || '';
    if (repeatCheck) currentItem.repeatPattern = repeatCheck.checked;

    await app.persistCatalog?.();
    app.closeVisualEditModal();
    app.showToast(`Visuel "${currentItem.name}" enregistré`);
  };
}

export function initialize(app) {
  const closeBtn = document.querySelector('#closeVisualEditBtn');
  const cancelBtn = document.querySelector('#cancelVisualEditBtn');
  const saveBtn = document.querySelector('#saveVisualEditBtn');

  closeBtn?.addEventListener('click', () => app.closeVisualEditModal());
  cancelBtn?.addEventListener('click', () => app.closeVisualEditModal());
  saveBtn?.addEventListener('click', () => app.saveCurrentVisualEdit());
}
