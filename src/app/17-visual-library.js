import { formatCleanTitle } from './21-catalog-categories.js';

export function register(app) {
  app.catalogImages = []; app.activeCatalogCategory = 'all'; app.activeSubcategory = 'all';
  app.addImageFromUrl = function(url, name, opt = {}) {
    return new Promise(resolve => {
      const img = new Image(); img.crossOrigin = 'anonymous';
      img.onload = () => {
        app.imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: name || 'Visuel', img,
          scale: opt.scale || 1, scaleX: opt.scale || 1, scaleY: opt.scale || 1, x: opt.x || 0, y: opt.y || 0, rotation: opt.rotation || 0,
          fitMode: opt.fitMode || (opt.repeatPattern ? 'cover' : 'contain'),
          repeatPattern: !!opt.repeatPattern, repeatCount: opt.repeatCount || 3, side: app.product.zones ? app.product.zones[0].id : 'both'
        });
        app.activeImageIndex = app.imagesList.length - 1;
        app.renderImagesList(); app.syncActiveControls(); app.buildTexture();
        app.setOverlayVisible(document.querySelector('#showTransformFrame')?.checked || false);
        if (!opt.silent) app.showToast(`Visuel "${name}" appliqué`);
        resolve(true);
      };
      img.onerror = () => { if (!opt.silent) app.showToast('Erreur chargement'); resolve(false); };
      img.src = url;
    });
  };
}

export function initialize(app) {
  const explorer = document.querySelector('#catalogExplorer'), openBtn = document.querySelector('#openCatalogBtn'), closeBtn = document.querySelector('#closeExplorerBtn');
  const grid = document.querySelector('#catalogGrid'), addBtn = document.querySelector('#adminAddLibraryBtn'), addInput = document.querySelector('#adminLibraryInput');
  const catSelect = document.querySelector('#catalogCategorySelect'), searchInput = document.querySelector('#catalogSearchInput'), emptyTrashBtn = document.querySelector('#emptyTrashBtn');

  if (app.clientMode && addBtn) addBtn.style.display = 'none';

  openBtn?.addEventListener('click', () => {
    if (explorer) { explorer.hidden = false; explorer.removeAttribute('hidden'); }
    app.activeCatalogCategory = (!app.currentProductKey || app.currentProductKey === 'showcase') ? 'all' : 'current_product';
    app.activeSubcategory = 'all'; loadCatalog();
  });
  closeBtn?.addEventListener('click', () => { if (explorer) { explorer.hidden = true; explorer.setAttribute('hidden', ''); } });
  searchInput?.addEventListener('input', () => renderCatalog());

  async function loadCatalog() {
    await app.loadCatalogCategories?.();
    try {
      const res = await fetch('/api/catalog-images');
      if (res.ok) { const list = await res.json(); if (Array.isArray(list)) app.catalogImages = list; }
    } catch {}
    renderCatalog();
  }

  async function persistCatalog() {
    try {
      const res = await fetch('/api/catalog-images', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(app.catalogImages) });
      if (res.ok) { const data = await res.json(); if (Array.isArray(data.items)) app.catalogImages = data.items; }
    } catch {}
    renderCatalog();
  }
  app.persistCatalog = persistCatalog;

  function updateCategoryDropdown(activeItems, trashCount, pendingCount) {
    if (!catSelect) return;
    const curVal = app.activeCatalogCategory, curSub = app.activeSubcategory;
    let html = `<option value="all">Tous les visuels (${activeItems.length})</option>`;
    if (!app.clientMode && pendingCount > 0) {
      html += `<option value="pending" ${curVal === 'pending' ? 'selected' : ''} style="color:#d97706;font-weight:700;">Nouveaux à valider (${pendingCount})</option>`;
    }
    if (app.currentProductKey && app.currentProductKey !== 'showcase') {
      const compat = activeItems.filter(x => (app.isVisualCompatible ? app.isVisualCompatible(x, app.currentProductKey) : true)).length;
      if (compat > 0) html += `<option value="current_product">Pour cet objet (${compat})</option>`;
    }
    const cats = (app.catalogCategories || []).slice().sort((a, b) => {
      const na = typeof a === 'string' ? a : a.name;
      const nb = typeof b === 'string' ? b : b.name;
      return na.localeCompare(nb, 'fr', { sensitivity: 'base' });
    });
    cats.forEach(cat => {
      const name = typeof cat === 'string' ? cat : cat.name;
      const subs = ((typeof cat === 'object' && Array.isArray(cat.subs)) ? cat.subs.slice() : []).sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
      const catCount = (name === 'Nouveau' && !app.clientMode)
        ? app.catalogImages.filter(x => x.category === name && x.status !== 'trash').length
        : activeItems.filter(x => x.category === name).length;
      if (catCount > 0) {
        html += `<option value="cat:${name}" ${curVal === name && curSub === 'all' ? 'selected' : ''}>${name} (${catCount})</option>`;
        subs.forEach(s => {
          const subCount = activeItems.filter(x => x.category === name && (x.subcategory || '').toLowerCase() === s.toLowerCase()).length;
          if (subCount > 0) html += `<option value="sub:${name}:${s}" ${curVal === name && curSub.toLowerCase() === s.toLowerCase() ? 'selected' : ''}>&nbsp;&nbsp;└ ${s} (${subCount})</option>`;
        });
      }
    });
    if (!app.clientMode && trashCount > 0) {
      html += `<option value="trash" ${curVal === 'trash' ? 'selected' : ''} style="color:#ef4444;font-weight:700;">Corbeille (${trashCount})</option>`;
    }
    catSelect.innerHTML = html;
  }

  function renderCatalog() {
    if (!grid) return;
    grid.innerHTML = '';
    const q = (searchInput?.value || '').toLowerCase().trim();
    const isTrash = app.activeCatalogCategory === 'trash', isPending = app.activeCatalogCategory === 'pending';
    if (emptyTrashBtn) emptyTrashBtn.style.display = (isTrash && !app.clientMode) ? 'inline-block' : 'none';

    const activeItems = app.catalogImages.filter(x => x.status === 'approved');
    const trashItems = app.catalogImages.filter(x => x.status === 'trash');
    const pendingItems = app.catalogImages.filter(x => x.status === 'pending');
    updateCategoryDropdown(activeItems, trashItems.length, pendingItems.length);

    let baseList = isTrash ? trashItems : isPending ? pendingItems : app.clientMode ? activeItems : app.catalogImages.filter(x => x.status !== 'trash');
    const filtered = baseList.filter(item => {
      if (isTrash || isPending) return !q || item.name.toLowerCase().includes(q);
      if (app.clientMode && item.status === 'pending') return false;
      if (app.activeCatalogCategory === 'current_product') {
        if (app.isVisualCompatible && !app.isVisualCompatible(item, app.currentProductKey)) return false;
      } else if (app.activeCatalogCategory !== 'all' && item.category !== app.activeCatalogCategory) return false;
      if (app.activeSubcategory && app.activeSubcategory !== 'all' && (item.subcategory || '').toLowerCase() !== app.activeSubcategory.toLowerCase()) return false;
      return !q || item.name.toLowerCase().includes(q) || (item.category || '').toLowerCase().includes(q) || (item.subcategory || '').toLowerCase().includes(q);
    });

    filtered.forEach(item => {
      const card = document.createElement('div'); card.className = 'catalog-item-card';
      const thumb = document.createElement('img'); thumb.src = item.url; thumb.alt = item.name; card.appendChild(thumb);
      const title = document.createElement('span'); title.className = 'catalog-item-name'; title.textContent = item.name; card.appendChild(title);
      const subInfo = document.createElement('span'); subInfo.className = 'catalog-item-subcat';
      subInfo.textContent = item.subcategory ? `${item.category} › ${item.subcategory}` : (item.category || 'Nouveau');
      card.appendChild(subInfo);

      const badgeType = isTrash ? ['Corbeille', '#ef4444'] : item.status === 'pending' ? ['À valider', '#f59e0b'] : item.category === 'Nouveau' ? ['Nouveau', '#10b981'] : item.repeatPattern ? ['Motif', ''] : null;
      if (badgeType) {
        const b = document.createElement('span'); b.className = 'catalog-item-badge';
        if (badgeType[1]) b.style.background = badgeType[1];
        b.textContent = badgeType[0]; card.appendChild(b);
      }

      if (!app.clientMode) {
        if (isTrash) {
          const act = document.createElement('div'); act.style.cssText = 'display:flex;gap:4px;margin-top:6px;width:100%;';
          const resBtn = document.createElement('button'); resBtn.className = 'cat-btn-sm'; resBtn.style.cssText = 'flex:1;background:#10b981;color:#fff;'; resBtn.textContent = 'Restaurer';
          resBtn.onclick = async e => { e.stopPropagation(); item.status = 'approved'; await persistCatalog(); app.showToast(`"${item.name}" restauré`); };
          const delBtn = document.createElement('button'); delBtn.className = 'cat-btn-sm cat-btn-danger'; delBtn.textContent = '✕'; delBtn.title = 'Supprimer définitivement';
          delBtn.onclick = async e => { e.stopPropagation(); if (confirm(`Supprimer définitivement "${item.name}" ?`)) { app.catalogImages = app.catalogImages.filter(x => x.id !== item.id); await persistCatalog(); } };
          act.append(resBtn, delBtn); card.appendChild(act);
        } else {
          const topActions = document.createElement('div'); topActions.style.cssText = 'position:absolute;top:6px;right:6px;display:flex;gap:4px;';
          if (item.status === 'pending') {
            const okBtn = document.createElement('button'); okBtn.type = 'button'; okBtn.className = 'cat-btn-sm'; okBtn.style.cssText = 'background:#10b981;color:#fff;font-weight:700;';
            okBtn.textContent = 'Valider'; okBtn.title = 'Valider';
            okBtn.onclick = async e => { e.stopPropagation(); item.status = 'approved'; await persistCatalog(); app.showToast(`"${item.name}" validé`); };
            topActions.appendChild(okBtn);
          }
          const editBtn = document.createElement('button'); editBtn.type = 'button'; editBtn.className = 'card-btn'; editBtn.textContent = '✎'; editBtn.title = 'Modifier ce visuel';
          editBtn.onclick = e => { e.stopPropagation(); app.openVisualEditModal?.(item); };
          topActions.appendChild(editBtn); card.appendChild(topActions);
        }
      }

      card.addEventListener('click', e => {
        if (e.target.closest('button')) return;
        if (!isTrash) app.addImageFromUrl(item.url, item.name, { repeatPattern: item.repeatPattern });
      });
      grid.appendChild(card);
    });
  }
  app.renderCatalog = renderCatalog;

  catSelect?.addEventListener('change', () => {
    const val = catSelect.value;
    if (val === 'all') { app.activeCatalogCategory = 'all'; app.activeSubcategory = 'all'; }
    else if (val === 'current_product') { app.activeCatalogCategory = 'current_product'; app.activeSubcategory = 'all'; }
    else if (val === 'pending') { app.activeCatalogCategory = 'pending'; app.activeSubcategory = 'all'; }
    else if (val === 'trash') { app.activeCatalogCategory = 'trash'; app.activeSubcategory = 'all'; }
    else if (val.startsWith('cat:')) { app.activeCatalogCategory = val.slice(4); app.activeSubcategory = 'all'; }
    else if (val.startsWith('sub:')) { const p = val.split(':'); app.activeCatalogCategory = p[1]; app.activeSubcategory = p[2]; }
    renderCatalog();
  });

  emptyTrashBtn?.addEventListener('click', async () => {
    const count = app.catalogImages.filter(x => x.status === 'trash').length;
    if (!confirm(`Supprimer définitivement les ${count} visuel(s) de la corbeille ?`)) return;
    app.catalogImages = app.catalogImages.filter(x => x.status !== 'trash');
    app.activeCatalogCategory = 'all';
    await persistCatalog();
    app.showToast('Corbeille vidée');
  });

  addBtn?.addEventListener('click', () => addInput?.click());
  addInput?.addEventListener('change', async e => {
    const files = Array.from(e.target.files || []); if (!files.length) return;
    for (const file of files) {
      const dataUrl = await new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(null); r.readAsDataURL(file); });
      if (!dataUrl) continue;
      app.catalogImages.unshift({ id: `visuel-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, name: formatCleanTitle(file.name), url: dataUrl, category: 'Nouveau', subcategory: '', repeatPattern: false, status: 'pending', compatibleProducts: ['all'] });
    }
    e.target.value = '';
    app.activeCatalogCategory = 'pending';
    await persistCatalog();
    app.showToast(`${files.length} visuel(s) ajouté(s) dans Nouveau (en attente de validation)`);
  });
  loadCatalog();
}
