// Modale de gestion propre et épurée d'un visuel individuel
import { PRODUCTS_LIST } from './22-product-compatibility.js';
import { getProductThumbnail } from './19-shop-product-thumbs.js';

export function register(app) {
  let currentItem = null;
  let selectedStatus = 'approved';

  app.openVisualEditModal = function(item) {
    if (!item) return;
    if (typeof item === 'string') {
      item = (app.catalogImages || []).find(v => String(v.id) === String(item)) || { id: item, name: item, url: '' };
    }
    currentItem = item;
    const modal = document.querySelector('#visualEditModal');
    if (!modal) {
      console.warn('visualEditModal DOM introuvable');
      return;
    }
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
    const thumb = document.querySelector('#visualEditThumb'), nameInput = document.querySelector('#visualEditNameInput');
    const catSel = document.querySelector('#visualEditCategorySelect'), subSel = document.querySelector('#visualEditSubcategorySelect');
    const catSel2 = document.querySelector('#visualEditCategorySelect2');
    const repeatCheck = document.querySelector('#visualEditRepeatCheck');
    const trashBtn = document.querySelector('#visualEditTrashBtn');
    const headerTitle = document.querySelector('#visualEditHeaderTitle');
    if (headerTitle) headerTitle.textContent = `Fiche du visuel : ${item.name || 'Visuel'}`;

    if (thumb) thumb.src = item.url;
    if (nameInput) nameInput.value = item.name || '';
    if (repeatCheck) repeatCheck.checked = !!item.repeatPattern;

    selectedStatus = item.status || 'approved';
    const setStatusUI = (st) => {
      selectedStatus = st;
      modal.querySelectorAll('.visual-status-pill').forEach(pill => {
        const match = (pill.dataset.status === st);
        pill.classList.toggle('is-checked', match);
        const rad = pill.querySelector('input[type="radio"]');
        if (rad) rad.checked = match;
      });
    };
    setStatusUI(selectedStatus);

    modal.querySelectorAll('.visual-status-pill').forEach(pill => {
      pill.onclick = (e) => {
        e.preventDefault();
        setStatusUI(pill.dataset.status);
      };
    });

    const refreshCats = (selectName) => {
      const cats = app.getCategoryNames ? app.getCategoryNames() : [];
      if (catSel) {
        catSel.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');
        const target = selectName || item.category;
        if (cats.includes(target)) catSel.value = target;
      }
      if (catSel2) {
        catSel2.innerHTML = '<option value="">(Aucune deuxième catégorie)</option>' +
          cats.map(c => `<option value="${c}">${c}</option>`).join('');
        const target2 = item.category2 || (Array.isArray(item.categories) && item.categories[1]) || '';
        catSel2.value = target2;
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
    app.loadAdminCatalog?.();
    app.updateAdminKpis?.();
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
        const checked = isAll || currentTargets.includes(p.key);
        const thumbSvg = getProductThumbnail(p.key);
        return `
          <label class="visual-compat-card${checked ? ' is-checked' : ''}" title="${p.label}">
            <input type="checkbox" class="visual-compat-prod-check" value="${p.key}" ${checked ? 'checked' : ''} />
            <div class="visual-compat-preview-box">
              <img src="${thumbSvg}" alt="${p.label}" class="compat-prod-base-icon" />
            </div>
            <div class="visual-compat-label-wrap">
              <span class="compat-prod-name">${p.label}</span>
              <small class="compat-prod-status-tag ${checked ? 'tag-ok' : 'tag-no'}">${checked ? '✓ Autorisé' : '✕ Bloqué'}</small>
            </div>
          </label>
        `;
      }).join('');

      const updateCardTag = (chk) => {
        const card = chk.closest('.visual-compat-card');
        card?.classList.toggle('is-checked', chk.checked);
        const tag = card?.querySelector('.compat-prod-status-tag');
        if (tag) {
          tag.textContent = chk.checked ? '✓ Autorisé' : '✕ Bloqué';
          tag.className = `compat-prod-status-tag ${chk.checked ? 'tag-ok' : 'tag-no'}`;
        }
      };

      const checkAllStatusSync = () => {
        const checks = Array.from(productsGrid.querySelectorAll('.visual-compat-prod-check'));
        const allChecked = checks.length > 0 && checks.every(c => c.checked);
        if (compatAll) compatAll.checked = allChecked;
      };

      productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(chk => {
        chk.addEventListener('change', () => {
          updateCardTag(chk);
          checkAllStatusSync();
        });
      });

      if (compatAll) {
        compatAll.onchange = () => {
          const state = compatAll.checked;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = state;
            updateCardTag(c);
          });
        };
      }

      const btnSelAll = document.querySelector('#compatSelectAllBtn');
      if (btnSelAll) {
        btnSelAll.onclick = () => {
          if (compatAll) compatAll.checked = true;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = true;
            updateCardTag(c);
          });
        };
      }
      const btnDeselAll = document.querySelector('#compatDeselectAllBtn');
      if (btnDeselAll) {
        btnDeselAll.onclick = () => {
          if (compatAll) compatAll.checked = false;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = false;
            updateCardTag(c);
          });
        };
      }
      const btnCoaster = document.querySelector('#compatCoasterOnlyBtn');
      if (btnCoaster) {
        btnCoaster.onclick = () => {
          if (compatAll) compatAll.checked = false;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = (c.value === 'coaster' || c.value === 'coasterRound');
            updateCardTag(c);
          });
          checkAllStatusSync();
        };
      }
      const btnMug = document.querySelector('#compatMugOnlyBtn');
      if (btnMug) {
        btnMug.onclick = () => {
          if (compatAll) compatAll.checked = false;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = (c.value === 'mug11oz');
            updateCardTag(c);
          });
          checkAllStatusSync();
        };
      }
      const btnArcade = document.querySelector('#compatArcadeOnlyBtn');
      if (btnArcade) {
        btnArcade.onclick = () => {
          if (compatAll) compatAll.checked = false;
          productsGrid.querySelectorAll('.visual-compat-prod-check').forEach(c => {
            c.checked = (c.value === 'arcadeCabinet');
            updateCardTag(c);
          });
          checkAllStatusSync();
        };
      }
    }

    modal.hidden = false;
    modal.removeAttribute('hidden');
    modal.style.display = 'flex';
    modal.style.zIndex = '100050';
    nameInput?.focus();
    nameInput?.select();
  };

  app.closeVisualEditModal = function() {
    const modal = document.querySelector('#visualEditModal');
    if (modal) { modal.hidden = true; modal.setAttribute('hidden', ''); modal.style.display = 'none'; }
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

    const catSel2 = document.querySelector('#visualEditCategorySelect2');
    if (nameInput && nameInput.value.trim()) it.name = nameInput.value.trim();
    if (catSel) it.category = catSel.value;
    const cat2 = catSel2 ? catSel2.value : '';
    it.category2 = cat2;
    it.categories = [catSel ? catSel.value : it.category, cat2].filter(Boolean);
    if (subSel) it.subcategory = subSel.value || '';
    if (repeatCheck) it.repeatPattern = repeatCheck.checked;
    if (customStatus) it.status = customStatus;
    else if (selectedStatus) it.status = selectedStatus;
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
    app.loadAdminCatalog?.();
    app.renderCatalog?.();
    app.updateAdminKpis?.();

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
