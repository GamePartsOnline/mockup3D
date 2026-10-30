// Modale de gestion propre et épurée d'un visuel individuel
import { PRODUCTS_LIST } from './22-product-compatibility.js';

export function register(app) {
  let currentItem = null;

  app.openVisualEditModal = function(item) {
    currentItem = item;
    const modal = document.querySelector('#visualEditModal');
    if (!modal) return;
    const thumb = document.querySelector('#visualEditThumb'), nameInput = document.querySelector('#visualEditNameInput');
    const catSel = document.querySelector('#visualEditCategorySelect'), subSel = document.querySelector('#visualEditSubcategorySelect');
    const repeatCheck = document.querySelector('#visualEditRepeatCheck');
    const trashBtn = document.querySelector('#visualEditTrashBtn');
    const statusBoxes = modal.querySelectorAll('.visual-status-checkbox');

    if (thumb) thumb.src = item.url;
    if (nameInput) nameInput.value = item.name || '';
    if (repeatCheck) repeatCheck.checked = !!item.repeatPattern;

    const setStatusUI = (selectedStatus) => {
      statusBoxes.forEach(box => {
        const match = (box.value === selectedStatus);
        box.checked = match;
        box.closest('.visual-status-card')?.classList.toggle('is-checked', match);
      });
    };
    setStatusUI(item.status || 'approved');

    statusBoxes.forEach(box => {
      box.onchange = () => {
        setStatusUI(box.value);
      };
    });

    const refreshCats = (selectName) => {
      const cats = app.getCategoryNames ? app.getCategoryNames() : [];
      if (catSel) {
        catSel.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
        const target = selectName || item.category;
        if (cats.includes(target)) catSel.value = target;
      }
      updateSubs();
    };

    const updateSubs = (selectSub) => {
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
        const target = selectSub || item.subcategory;
        if (subs.includes(target)) subSel.value = target;
      }
    };

    refreshCats();
    if (catSel) catSel.onchange = () => updateSubs();

    const quickCatBtn = document.querySelector('#quickAddCatInEditBtn');
    if (quickCatBtn) {
      quickCatBtn.onclick = async () => {
        const val = prompt('Nom de la nouvelle catégorie :');
        if (!val || !val.trim()) return;
        const clean = val.trim().charAt(0).toUpperCase() + val.trim().slice(1);
        if (!app.catalogCategories) app.catalogCategories = [];
        if (!app.catalogCategories.some(c => (typeof c === 'string' ? c : c.name) === clean)) {
          app.catalogCategories.push({ name: clean, subs: [] });
          app.catalogCategories.sort((a, b) => (a.name || a).localeCompare(b.name || b, 'fr', { sensitivity: 'base' }));
          await app.persistCatalogCategories?.();
        }
        refreshCats(clean);
        app.showToast(`Catégorie "${clean}" créée`);
      };
    }

    const quickSubBtn = document.querySelector('#quickAddSubInEditBtn');
    if (quickSubBtn) {
      quickSubBtn.onclick = async () => {
        const curCat = catSel ? catSel.value : item.category;
        if (!curCat) return;
        const val = prompt(`Nom de la sous-catégorie pour "${curCat}" :`);
        if (!val || !val.trim()) return;
        const clean = val.trim().charAt(0).toUpperCase() + val.trim().slice(1);
        const obj = (app.catalogCategories || []).find(c => (typeof c === 'string' ? c : c.name) === curCat);
        if (obj) {
          if (!Array.isArray(obj.subs)) obj.subs = [];
          if (!obj.subs.includes(clean)) {
            obj.subs.push(clean);
            obj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
            await app.persistCatalogCategories?.();
          }
          updateSubs(clean);
          app.showToast(`Sous-catégorie "${clean}" ajoutée`);
        }
      };
    }

    if (trashBtn) {
      const inTrash = item.status === 'trash';
      trashBtn.textContent = inTrash ? 'Restaurer ce visuel' : 'Mettre à la corbeille';
      trashBtn.className = inTrash ? 'cat-btn-sm' : 'cat-btn-sm cat-btn-danger';
      trashBtn.style.background = inTrash ? '#10b981' : '';
      trashBtn.style.color = inTrash ? '#fff' : '';
      trashBtn.onclick = async () => {
        item.status = inTrash ? 'approved' : 'trash';
        await app.persistCatalog?.();
        app.closeVisualEditModal();
        app.showToast(inTrash ? `"${item.name}" restauré` : `"${item.name}" mis à la corbeille`);
      };
    }

    const compatAll = document.querySelector('#visualEditCompatAll');
    const productsGrid = document.querySelector('#visualEditProductsGrid');
    const currentTargets = Array.isArray(item.compatibleProducts) && item.compatibleProducts.length
      ? item.compatibleProducts
      : ['all'];
    const isAll = currentTargets.includes('all');

    if (compatAll) compatAll.checked = isAll;

    if (productsGrid) {
      productsGrid.innerHTML = PRODUCTS_LIST.map(p => {
        const checked = (!isAll && currentTargets.includes(p.key));
        return `
          <label class="visual-compat-card${checked ? ' is-checked' : ''}">
            <input type="checkbox" class="visual-compat-prod-check" value="${p.key}" ${checked ? 'checked' : ''} />
            <span>${p.label}</span>
          </label>
        `;
      }).join('');

      productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(chk => {
        chk.addEventListener('change', () => {
          chk.closest('.visual-compat-card')?.classList.toggle('is-checked', chk.checked);
        });
      });

      const updateGridState = () => {
        const checked = compatAll ? compatAll.checked : false;
        productsGrid.style.opacity = checked ? '0.45' : '1';
        productsGrid.style.pointerEvents = checked ? 'none' : 'auto';
      };
      updateGridState();
      if (compatAll) compatAll.onchange = updateGridState;

      document.querySelector('#compatSelectAllBtn').onclick = () => {
        if (compatAll) { compatAll.checked = false; updateGridState(); }
        productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
          c.checked = true;
          c.closest('.visual-compat-card')?.classList.add('is-checked');
        });
      };
      document.querySelector('#compatDeselectAllBtn').onclick = () => {
        if (compatAll) { compatAll.checked = false; updateGridState(); }
        productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
          c.checked = false;
          c.closest('.visual-compat-card')?.classList.remove('is-checked');
        });
      };
      document.querySelector('#compatMugOnlyBtn').onclick = () => {
        if (compatAll) { compatAll.checked = false; updateGridState(); }
        productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
          c.checked = (c.value === 'mug11oz');
          c.closest('.visual-compat-card')?.classList.toggle('is-checked', c.checked);
        });
      };
      document.querySelector('#compatArcadeOnlyBtn').onclick = () => {
        if (compatAll) { compatAll.checked = false; updateGridState(); }
        productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
          c.checked = (c.value === 'arcadeCabinet');
          c.closest('.visual-compat-card')?.classList.toggle('is-checked', c.checked);
        });
      };
    }

    modal.hidden = false; modal.removeAttribute('hidden');
    nameInput?.focus();
    nameInput?.select();
  };

  app.closeVisualEditModal = function() {
    const modal = document.querySelector('#visualEditModal');
    if (modal) { modal.hidden = true; modal.setAttribute('hidden', ''); }
    currentItem = null;
  };

  app.saveCurrentVisualEdit = async function(customStatus = null, andNext = false) {
    if (!currentItem) return;
    const it = currentItem;
    const nameInput = document.querySelector('#visualEditNameInput');
    const catSel = document.querySelector('#visualEditCategorySelect');
    const subSel = document.querySelector('#visualEditSubcategorySelect');
    const repeatCheck = document.querySelector('#visualEditRepeatCheck');
    const activeStatusBox = document.querySelector('.visual-status-checkbox:checked');

    if (nameInput && nameInput.value.trim()) it.name = nameInput.value.trim();
    if (catSel) it.category = catSel.value;
    if (subSel) it.subcategory = subSel.value || '';
    if (repeatCheck) it.repeatPattern = repeatCheck.checked;
    if (customStatus) it.status = customStatus;
    else if (activeStatusBox) it.status = activeStatusBox.value;
    else it.status = 'approved';

    const compatAll = document.querySelector('#visualEditCompatAll');
    const productsGrid = document.querySelector('#visualEditProductsGrid');
    if (compatAll && compatAll.checked) {
      it.compatibleProducts = ['all'];
    } else if (productsGrid) {
      const selected = Array.from(productsGrid.querySelectorAll('.visual-compat-prod-check:checked')).map(el => el.value);
      it.compatibleProducts = selected.length ? selected : [];
    }

    await app.persistCatalog?.();

    if (andNext) {
      const list = (app.catalogImages || []).filter(x => x.status !== 'trash');
      const curIdx = list.findIndex(x => x.id === it.id);
      const nextItem = (curIdx >= 0 && curIdx < list.length - 1) ? list[curIdx + 1] : null;
      if (nextItem) {
        app.showToast(`"${it.name}" enregistré`);
        app.openVisualEditModal(nextItem);
        return;
      }
    }

    app.closeVisualEditModal();
    const stLabel = it.status === 'private' ? ' (Privé)' : (it.status === 'approved' ? ' (Publié)' : '');
    app.showToast(`Visuel "${it.name}" enregistré${stLabel}`);
  };
}

export function initialize(app) {
  document.querySelector('#closeVisualEditBtn')?.addEventListener('click', () => app.closeVisualEditModal());
  document.querySelector('#cancelVisualEditBtn')?.addEventListener('click', () => app.closeVisualEditModal());
  document.querySelector('#saveVisualEditBtn')?.addEventListener('click', () => app.saveCurrentVisualEdit());
  document.querySelector('#saveAndApproveBtn')?.addEventListener('click', () => app.saveCurrentVisualEdit('approved', true));
  document.querySelector('#saveVisualPrivateBtn')?.addEventListener('click', () => app.saveCurrentVisualEdit('private', false));
  document.querySelector('#saveAndNextBtn')?.addEventListener('click', () => app.saveCurrentVisualEdit(null, true));
  document.querySelector('#visualEditNameInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); app.saveCurrentVisualEdit(null, true); }
  });
}
