import { formatCleanTitle } from './21-catalog-categories.js';

export function register(app) {
  app.catalogImages = []; app.activeCatalogCategory = 'all'; app.activeSubcategory = 'all';
  app.addImageFromUrl = function(url, name, opt = {}) {
    return new Promise(resolve => {
      const img = new Image(); img.crossOrigin = 'anonymous';
      img.onload = () => {
        const hadDefaultLogo = (app.imagesList || []).some(i => i.isDefaultLogo || i.url === '/logo-graph2print.png' || i.id?.startsWith('default-logo-') || (i.name && i.name.toLowerCase().includes('graph2print')));
        if (hadDefaultLogo) {
          app.imagesList = (app.imagesList || []).filter(i => !i.isDefaultLogo && i.url !== '/logo-graph2print.png' && !i.id?.startsWith('default-logo-') && !(i.name && i.name.toLowerCase().includes('graph2print')));
        }
        const used = new Set(app.imagesList.map(i => i.side));
        let defSide = 'both';
        if (app.currentProductKey === 'arcadeCabinet') defSide = (used.has('left') && !used.has('right')) ? 'right' : 'sides';
        else if (app.product.zones) defSide = app.product.zones.find(z => !used.has(z.id))?.id || app.product.zones[0].id;
        else if (app.product.twoSided) defSide = (used.has('A') && !used.has('B')) ? 'B' : (used.size === 0 ? 'A' : 'both');
        else if (app.currentProductKey === 'tshirt3D') defSide = (used.has('A') && !used.has('B')) ? 'B' : ((used.has('A') && !used.has('heart')) ? 'heart' : 'A');
        app.imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: name || 'Visuel', img,
          scale: opt.scale || 1, scaleX: opt.scale || 1, scaleY: opt.scale || 1, x: opt.x || 0, y: opt.y || 0, rotation: opt.rotation || 0,
          fitMode: opt.fitMode || (opt.repeatPattern ? 'cover' : 'contain'), repeatPattern: !!opt.repeatPattern, repeatCount: opt.repeatCount || 3, side: opt.side || defSide
        });
        app.activeImageIndex = app.imagesList.length - 1;
        app.renderImagesList(); app.syncActiveControls(); app.buildTexture();
        app.setOverlayVisible(document.querySelector('#showTransformFrame')?.checked || false);
        if (!opt.silent) app.showToast(`Visuel "${name}" appliqué`);
        resolve(true);
      };
      img.onerror = () => { if (!opt.silent) app.showToast('Erreur chargement'); resolve(false); };
      img.src = url; }); }; }

export function initialize(app) {
  const explorer = document.querySelector('#catalogExplorer'), openBtn = document.querySelector('#openCatalogBtn'), closeBtn = document.querySelector('#closeExplorerBtn');
  const fsBtn = document.querySelector('#toggleCatalogFullscreenBtn');
  const grid = document.querySelector('#catalogGrid'), addBtn = document.querySelector('#adminAddLibraryBtn'), addInput = document.querySelector('#adminLibraryInput');
  const catSelect = document.querySelector('#catalogCategorySelect'), searchInput = document.querySelector('#catalogSearchInput');
  const emptyTrashBtn = document.querySelector('#emptyTrashBtn'), batchApproveBtn = document.querySelector('#batchApproveBtn'), batchPrivateBtn = document.querySelector('#batchPrivateBtn');
  if (app.clientMode && addBtn) addBtn.style.display = 'none';

  fsBtn?.addEventListener('click', () => {
    explorer?.classList.toggle('is-fullscreen');
    const isFs = explorer?.classList.contains('is-fullscreen');
    if (fsBtn) {
      fsBtn.textContent = isFs ? '🗗 Réduire' : '⛶ Plein écran';
      fsBtn.title = isFs ? 'Réduire la vue latérale' : 'Basculer en plein écran';
    }
  });

  openBtn?.addEventListener('click', () => {
    if (explorer) {
      explorer.hidden = false;
      explorer.removeAttribute('hidden');
      explorer.classList.add('is-fullscreen');
      if (fsBtn) {
        fsBtn.textContent = '🗗 Réduire';
        fsBtn.title = 'Réduire la vue latérale';
      }
    }
    app.activeCatalogCategory = 'all';
    app.activeSubcategory = 'all'; loadCatalog();
  });
  closeBtn?.addEventListener('click', () => { if (explorer) { explorer.hidden = true; explorer.setAttribute('hidden', ''); } });
  searchInput?.addEventListener('input', () => renderCatalog());

  setTimeout(() => {
    if (window.location.hash === '#catalog' || window.location.search.includes('catalog')) {
      openBtn?.click();
    }
  }, 400);

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

  function updateCategoryDropdown(activeItems, trashCount, pendingCount, privateCount) {
    if (!catSelect) return;
    const curVal = app.activeCatalogCategory, curSub = app.activeSubcategory;
    const hasProduct = app.currentProductKey && app.currentProductKey !== 'showcase';
    const scopedActive = hasProduct ? activeItems.filter(x => (app.isVisualCompatible ? app.isVisualCompatible(x, app.currentProductKey) : true)) : activeItems;

    let html = `<option value="all">Tous les visuels (${scopedActive.length})</option>`;
    if (!app.clientMode && pendingCount > 0) html += `<option value="pending" ${curVal === 'pending' ? 'selected' : ''} style="color:#d97706;font-weight:700;">Nouveaux à valider (${pendingCount})</option>`;
    if (!app.clientMode && privateCount > 0) html += `<option value="private" ${curVal === 'private' ? 'selected' : ''} style="color:#6366f1;font-weight:700;">Visuels privés atelier (${privateCount})</option>`;

    const cats = (app.catalogCategories || []).slice().sort((a, b) => (typeof a === 'string' ? a : a.name).localeCompare(typeof b === 'string' ? b : b.name, 'fr', { sensitivity: 'base' }));
    cats.forEach(cat => {
      const name = typeof cat === 'string' ? cat : cat.name;
      const subs = ((typeof cat === 'object' && Array.isArray(cat.subs)) ? cat.subs.slice() : []).sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
      const catCount = scopedActive.filter(x => x.category === name).length;
      if (catCount > 0) {
        html += `<option value="cat:${name}" ${curVal === name && curSub === 'all' ? 'selected' : ''}>${name} (${catCount})</option>`;
        subs.forEach(s => {
          const subCount = scopedActive.filter(x => x.category === name && (x.subcategory || '').toLowerCase() === s.toLowerCase()).length;
          if (subCount > 0) html += `<option value="sub:${name}:${s}" ${curVal === name && curSub.toLowerCase() === s.toLowerCase() ? 'selected' : ''}>&nbsp;&nbsp;└ ${s} (${subCount})</option>`;
        });
      }
    });
    if (!app.clientMode && trashCount > 0) html += `<option value="trash" ${curVal === 'trash' ? 'selected' : ''} style="color:#ef4444;font-weight:700;">Corbeille (${trashCount})</option>`;
    catSelect.innerHTML = html;
  }

  function renderCatalog() {
    if (!grid) return;
    grid.innerHTML = '';
    const q = (searchInput?.value || '').toLowerCase().trim();
    const isTrash = app.activeCatalogCategory === 'trash', isPending = app.activeCatalogCategory === 'pending', isPrivate = app.activeCatalogCategory === 'private';
    if (emptyTrashBtn) emptyTrashBtn.style.display = (isTrash && !app.clientMode) ? 'inline-block' : 'none';

    const activeItems = app.catalogImages.filter(x => x.status === 'approved');
    const trashItems = app.catalogImages.filter(x => x.status === 'trash');
    const pendingItems = app.catalogImages.filter(x => x.status === 'pending');
    const privateItems = app.catalogImages.filter(x => x.status === 'private');
    updateCategoryDropdown(activeItems, trashItems.length, pendingItems.length, privateItems.length);

    let baseList = isTrash ? trashItems : isPending ? pendingItems : isPrivate ? privateItems : app.clientMode ? activeItems : app.catalogImages.filter(x => x.status !== 'trash');
    const filtered = baseList.filter(item => {
      if (isTrash || isPending || isPrivate) return !q || item.name.toLowerCase().includes(q);
      if (app.clientMode && (item.status === 'pending' || item.status === 'private')) return false;

      // FILTRE STRICT : impossible de voir l'image si le produit n'est pas sélectionné
      if (app.currentProductKey && app.currentProductKey !== 'showcase') {
        if (app.isVisualCompatible && !app.isVisualCompatible(item, app.currentProductKey)) {
          return false;
        }
      }

      if (app.activeCatalogCategory !== 'all' && app.activeCatalogCategory !== 'current_product') {
        if (item.category !== app.activeCatalogCategory) return false;
      }
      if (app.activeSubcategory && app.activeSubcategory !== 'all' && (item.subcategory || '').toLowerCase() !== app.activeSubcategory.toLowerCase()) return false;
      return !q || item.name.toLowerCase().includes(q) || (item.category || '').toLowerCase().includes(q) || (item.subcategory || '').toLowerCase().includes(q);
    });

    if (batchApproveBtn && batchPrivateBtn) {
      const showBatch = !app.clientMode && (isPending || isPrivate) && filtered.length > 0;
      batchApproveBtn.style.display = showBatch ? 'inline-block' : 'none';
      batchPrivateBtn.style.display = showBatch ? 'inline-block' : 'none';
      batchApproveBtn.onclick = async () => { filtered.forEach(it => { it.status = 'approved'; }); await persistCatalog(); app.showToast(`${filtered.length} visuel(s) validé(s)`); };
      batchPrivateBtn.onclick = async () => { filtered.forEach(it => { it.status = 'private'; }); await persistCatalog(); app.showToast(`${filtered.length} visuel(s) en privé`); };
    }

    filtered.forEach(item => {
      const card = document.createElement('div'); card.className = 'catalog-item-card';
      const thumb = document.createElement('img'); thumb.src = item.url; thumb.alt = item.name; card.appendChild(thumb);
      const title = document.createElement('span'); title.className = 'catalog-item-name'; title.textContent = item.name;
      if (!app.clientMode) {
        title.style.cursor = 'pointer'; title.title = 'Cliquer pour renommer rapidement';
        title.onclick = async e => {
          e.stopPropagation(); const n = prompt(`Nouveau nom pour "${item.name}" :`, item.name);
          if (n && n.trim() && n.trim() !== item.name) { item.name = n.trim(); await persistCatalog(); app.showToast(`Renommé en "${item.name}"`); }
        };
      }
      card.appendChild(title);
      const subInfo = document.createElement('span'); subInfo.className = 'catalog-item-subcat';
      subInfo.textContent = item.subcategory ? `${item.category} › ${item.subcategory}` : (item.category || 'Nouveau'); card.appendChild(subInfo);
      const badgeType = isTrash ? ['Corbeille', '#ef4444'] : item.status === 'pending' ? ['À valider', '#f59e0b'] : item.status === 'private' ? ['Privé', '#6366f1'] : item.category === 'Nouveau' ? ['Nouveau', '#10b981'] : item.repeatPattern ? ['Motif', ''] : null;
      if (badgeType) { const b = document.createElement('span'); b.className = 'catalog-item-badge'; if (badgeType[1]) b.style.background = badgeType[1]; b.textContent = badgeType[0]; card.appendChild(b); }

      if (!app.clientMode) {
        if (isTrash) {
          const act = document.createElement('div'); act.style.cssText = 'display:flex;gap:4px;margin-top:6px;width:100%;';
          const resBtn = document.createElement('button'); resBtn.className = 'cat-btn-sm'; resBtn.style.cssText = 'flex:1;background:#10b981;color:#fff;'; resBtn.textContent = 'Restaurer';
          resBtn.onclick = async e => { e.stopPropagation(); item.status = 'approved'; await persistCatalog(); app.showToast(`"${item.name}" restauré`); };
          const delBtn = document.createElement('button'); delBtn.className = 'cat-btn-sm cat-btn-danger'; delBtn.textContent = '✕'; delBtn.title = 'Supprimer';
          delBtn.onclick = async e => { e.stopPropagation(); if (confirm(`Supprimer définitivement "${item.name}" ?`)) { app.catalogImages = app.catalogImages.filter(x => x.id !== item.id); await persistCatalog(); } };
          act.append(resBtn, delBtn); card.appendChild(act);
        } else {
          const topActions = document.createElement('div'); topActions.style.cssText = 'position:absolute;top:6px;right:6px;display:flex;gap:4px;';
          if (item.status === 'pending') {
            const okBtn = document.createElement('button'); okBtn.type = 'button'; okBtn.className = 'cat-btn-sm'; okBtn.style.cssText = 'background:#10b981;color:#fff;font-weight:700;padding:2px 6px;';
            okBtn.textContent = '✓'; okBtn.title = 'Valider et publier';
            okBtn.onclick = async e => { e.stopPropagation(); item.status = 'approved'; await persistCatalog(); app.showToast(`"${item.name}" validé`); };
            const privBtn = document.createElement('button'); privBtn.type = 'button'; privBtn.className = 'cat-btn-sm'; privBtn.style.cssText = 'background:#fef3c7;color:#92400e;border-color:#fde047;font-weight:700;padding:2px 6px;';
            privBtn.textContent = '🔒'; privBtn.title = 'Passer en privé';
            privBtn.onclick = async e => { e.stopPropagation(); item.status = 'private'; await persistCatalog(); app.showToast(`"${item.name}" en privé`); };
            topActions.append(okBtn, privBtn);
          }
          const editBtn = document.createElement('button'); editBtn.type = 'button'; editBtn.className = 'card-btn'; editBtn.textContent = '✎'; editBtn.title = 'Fiche du visuel';
          editBtn.onclick = e => { e.stopPropagation(); app.openVisualEditModal?.(item); };
          topActions.appendChild(editBtn); card.appendChild(topActions);
        }
      }

      card.addEventListener('click', e => {
        if (!e.target.closest('button') && !isTrash) {
          app.addImageFromUrl(item.url, item.name, { repeatPattern: item.repeatPattern });
          if (explorer) { explorer.hidden = true; explorer.setAttribute('hidden', ''); }
        }
      });
      grid.appendChild(card);
    });
  }
  app.renderCatalog = renderCatalog;

  catSelect?.addEventListener('change', () => {
    const val = catSelect.value;
    if (val === 'all' || val === 'current_product' || val === 'pending' || val === 'private' || val === 'trash') { app.activeCatalogCategory = val; app.activeSubcategory = 'all'; }
    else if (val.startsWith('cat:')) { app.activeCatalogCategory = val.slice(4); app.activeSubcategory = 'all'; }
    else if (val.startsWith('sub:')) { const p = val.split(':'); app.activeCatalogCategory = p[1]; app.activeSubcategory = p[2]; }
    renderCatalog();
  });
  emptyTrashBtn?.addEventListener('click', async () => {
    const count = app.catalogImages.filter(x => x.status === 'trash').length;
    if (confirm(`Supprimer définitivement les ${count} visuel(s) de la corbeille ?`)) {
      app.catalogImages = app.catalogImages.filter(x => x.status !== 'trash');
      app.activeCatalogCategory = 'all'; await persistCatalog(); app.showToast('Corbeille vidée');
    }
  });
  addBtn?.addEventListener('click', () => addInput?.click());
  addInput?.addEventListener('change', async e => {
    const files = Array.from(e.target.files || []); if (!files.length) return;
    for (const file of files) {
      const dataUrl = await new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(null); r.readAsDataURL(file); });
      if (dataUrl) app.catalogImages.unshift({ id: `visuel-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, name: formatCleanTitle(file.name), url: dataUrl, category: 'Nouveau', subcategory: '', repeatPattern: false, status: 'pending', compatibleProducts: ['all'] });
    }
    e.target.value = ''; app.activeCatalogCategory = 'pending'; await persistCatalog();
    app.showToast(`${files.length} visuel(s) importé(s)`);
  });
  loadCatalog();
}
