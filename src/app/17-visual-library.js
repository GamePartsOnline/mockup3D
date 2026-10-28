import { formatCleanTitle, inferCategory } from './21-catalog-categories.js';

export function register(app) {
  app.catalogImages = [];
  app.activeCatalogCategory = 'all';

  app.addImageFromUrl = function(url, name, options = {}) {
    return new Promise(resolve => {
      const img = new Image(); img.crossOrigin = 'anonymous';
      img.onload = () => {
        app.imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: name || 'Visuel', img,
          scale: options.scale || 1, scaleX: options.scale || 1, scaleY: options.scale || 1,
          x: options.x || 0, y: options.y || 0, rotation: options.rotation || 0,
          fitMode: options.fitMode || (options.repeatPattern ? 'cover' : 'contain'),
          repeatPattern: !!options.repeatPattern, repeatCount: options.repeatCount || 3,
          side: app.product.zones ? app.product.zones[0].id : 'both'
        });
        app.activeImageIndex = app.imagesList.length - 1;
        app.renderImagesList(); app.syncActiveControls(); app.buildTexture();
        app.setOverlayVisible(document.querySelector('#showTransformFrame')?.checked || false);
        if (!options.silent) app.showToast(`Visuel "${name}" appliqué`);
        resolve(true);
      };
      img.onerror = () => { if (!options.silent) app.showToast('Erreur de chargement du visuel'); resolve(false); };
      img.src = url;
    });
  };

  app.proposeClientImages = async function(files) {
    for (const file of files) {
      const dataUrl = await new Promise(res => {
        const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(null); r.readAsDataURL(file);
      });
      if (!dataUrl) continue;
      try {
        await fetch('/api/catalog-images/propose', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formatCleanTitle(file.name), url: dataUrl })
        });
      } catch {}
    }
  };
}

export function initialize(app) {
  const explorer = document.querySelector('#catalogExplorer');
  const openBtn = document.querySelector('#openCatalogBtn'), closeBtn = document.querySelector('#closeExplorerBtn');
  const grid = document.querySelector('#catalogGrid'), addBtn = document.querySelector('#adminAddLibraryBtn');
  const addInput = document.querySelector('#adminLibraryInput'), catSelect = document.querySelector('#adminCategorySelect');
  const searchInput = document.querySelector('#catalogSearchInput'), countLabel = document.querySelector('#catalogCount');
  const catBar = document.querySelector('#catalogCategories');

  if (app.clientMode) {
    if (addBtn) addBtn.style.display = 'none';
    if (catSelect) catSelect.style.display = 'none';
  }

  openBtn?.addEventListener('click', () => {
    if (explorer) { explorer.hidden = false; explorer.removeAttribute('hidden'); }
    app.activeCatalogCategory = (!app.currentProductKey || app.currentProductKey === 'showcase') ? 'all' : 'current_product';
    loadCatalog();
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

  function renderPills(visibleItems, pendingCount) {
    if (!catBar) return;
    catBar.innerHTML = '';
    const counts = {};
    visibleItems.filter(x => x.status !== 'pending').forEach(x => { const c = x.category || 'Illustrations'; counts[c] = (counts[c] || 0) + 1; });
    const isShowcase = !app.currentProductKey || app.currentProductKey === 'showcase';
    const pills = [];
    if (!isShowcase) {
      const compatCount = visibleItems.filter(x => x.status !== 'pending' && (app.isVisualCompatible ? app.isVisualCompatible(x, app.currentProductKey) : true)).length;
      pills.push({ id: 'current_product', label: `Pour cet objet (${compatCount})` });
    }
    pills.push({ id: 'all', label: `Tous (${visibleItems.filter(x => x.status !== 'pending').length})` });
    if (!app.clientMode && pendingCount > 0) pills.push({ id: 'pending', label: `À valider (${pendingCount})`, warn: true });
    const cats = app.catalogCategories || ['Fleurs', 'Licornes', 'Animaux & Art', 'Illustrations', 'Motifs', 'Logos'];
    for (const c of cats) if (counts[c] || !app.clientMode) pills.push({ id: c, label: `${c} (${counts[c] || 0})` });
    pills.forEach(p => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'cat-pill' + (app.activeCatalogCategory === p.id ? ' active' : '');
      if (p.warn) b.style.cssText = 'background:#f59e0b;color:#fff;font-weight:700;';
      b.textContent = p.label; b.onclick = () => { app.activeCatalogCategory = p.id; renderCatalog(); };
      catBar.appendChild(b);
    });
  }

  function renderCatalog() {
    if (!grid) return;
    grid.innerHTML = '';
    const q = (searchInput?.value || '').toLowerCase().trim();
    const pendingCount = app.catalogImages.filter(x => x.status === 'pending').length;
    const baseList = app.clientMode ? app.catalogImages.filter(x => x.status !== 'pending') : app.catalogImages;
    renderPills(baseList, pendingCount);

    const filtered = baseList.filter(item => {
      if (app.activeCatalogCategory === 'pending') return item.status === 'pending';
      if (item.status === 'pending' && app.activeCatalogCategory !== 'pending') return false;
      if (app.activeCatalogCategory === 'current_product') {
        if (app.isVisualCompatible && !app.isVisualCompatible(item, app.currentProductKey)) return false;
      } else if (app.activeCatalogCategory !== 'all') {
        const matchCat = app.activeCatalogCategory === 'Motifs' ? (item.repeatPattern || item.category === 'Motifs') : item.category === app.activeCatalogCategory;
        if (!matchCat) return false;
      }
      return !q || item.name.toLowerCase().includes(q) || (item.category || '').toLowerCase().includes(q);
    });

    if (countLabel) countLabel.textContent = `${filtered.length} visuel(s) affiché(s)` + (!app.clientMode && pendingCount ? ` • ${pendingCount} en attente` : '');

    filtered.forEach(item => {
      const card = document.createElement('div'); card.className = 'catalog-item-card';
      const thumb = document.createElement('img'); thumb.src = item.url; thumb.alt = item.name; card.appendChild(thumb);
      const title = document.createElement('span'); title.className = 'catalog-item-name';
      title.title = !app.clientMode ? `Renommer • Objets : ${app.getCompatibilityLabel ? app.getCompatibilityLabel(item) : 'Tous'}` : item.name;
      title.textContent = `${item.category || 'Illustrations'} · ${item.name}`;
      if (!app.clientMode) {
        title.style.cursor = 'pointer';
        title.onclick = e => {
          e.stopPropagation();
          const n = prompt('Renommer le visuel du catalogue :', item.name);
          if (n && n.trim()) { item.name = n.trim(); persistCatalog(); app.showToast(`Visuel renommé en "${item.name}"`); }
        };
      }
      card.appendChild(title);
      if (item.status === 'pending') {
        const b = document.createElement('span'); b.className = 'catalog-item-badge'; b.style.background = '#f59e0b'; b.textContent = 'À valider'; card.appendChild(b);
      } else if (item.repeatPattern) {
        const b = document.createElement('span'); b.className = 'catalog-item-badge'; b.textContent = 'Motif'; card.appendChild(b);
      }
      card.addEventListener('click', e => {
        if (e.target.closest('.card-btn') || e.target.closest('select') || e.target === title) return;
        app.addImageFromUrl(item.url, item.name, { repeatPattern: item.repeatPattern });
      });

      if (!app.clientMode) {
        const actions = document.createElement('div'); actions.className = 'catalog-item-actions';
        if (item.status === 'pending') {
          const okBtn = document.createElement('button'); okBtn.type = 'button'; okBtn.className = 'card-btn active'; okBtn.style.background = '#8b5cf6'; okBtn.title = 'Valider'; okBtn.textContent = '✓';
          okBtn.onclick = e => { e.stopPropagation(); item.status = 'approved'; app.activeCatalogCategory = 'all'; persistCatalog(); app.showToast(`"${item.name}" validé`); };
          actions.appendChild(okBtn);
        }
        const renBtn = document.createElement('button'); renBtn.type = 'button'; renBtn.className = 'card-btn'; renBtn.title = 'Renommer'; renBtn.textContent = '✎';
        renBtn.onclick = e => { e.stopPropagation(); const n = prompt('Renommer le visuel :', item.name); if (n && n.trim()) { item.name = n.trim(); persistCatalog(); app.showToast(`Renommé en "${item.name}"`); } };
        const catSel = document.createElement('select'); catSel.style.cssText = 'font-size:9px;padding:1px 2px;border-radius:4px;background:#0f172a;color:#fff;border:1px solid #334155;max-width:68px;';
        (app.catalogCategories || []).forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; if (item.category === c) o.selected = true; catSel.appendChild(o); });
        catSel.onchange = e => { e.stopPropagation(); item.category = e.target.value; persistCatalog(); };
        const repBtn = document.createElement('button'); repBtn.type = 'button'; repBtn.className = 'card-btn' + (item.repeatPattern ? ' active' : ''); repBtn.title = 'Basculer Motif'; repBtn.textContent = 'M';
        repBtn.onclick = e => { e.stopPropagation(); item.repeatPattern = !item.repeatPattern; persistCatalog(); };
        const objBtn = document.createElement('button'); objBtn.type = 'button'; objBtn.className = 'card-btn card-btn-wide'; objBtn.title = 'Définir les objets compatibles'; objBtn.textContent = app.getCompatibilityLabel ? app.getCompatibilityLabel(item) : 'Objets';
        objBtn.onclick = e => { e.stopPropagation(); app.openCompatibilityModal?.(item, async () => { await persistCatalog(); objBtn.textContent = app.getCompatibilityLabel(item); }); };
        const delBtn = document.createElement('button'); delBtn.type = 'button'; delBtn.className = 'card-btn danger'; delBtn.title = 'Supprimer'; delBtn.textContent = '✕';
        delBtn.onclick = e => { e.stopPropagation(); app.catalogImages = app.catalogImages.filter(x => x.id !== item.id); persistCatalog(); app.showToast(`"${item.name}" supprimé`); };
        actions.append(renBtn, catSel, repBtn, objBtn, delBtn);
        card.appendChild(actions);
      }
      grid.appendChild(card);
    });
  }
  app.renderCatalog = renderCatalog;

  addBtn?.addEventListener('click', () => addInput?.click());
  addInput?.addEventListener('change', async e => {
    const files = Array.from(e.target.files || []); if (!files.length) return;
    const chosenCat = catSelect?.value || 'auto';
    for (const file of files) {
      const dataUrl = await new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => res(null); r.readAsDataURL(file); });
      if (!dataUrl) continue;
      const cleanName = formatCleanTitle(file.name);
      const cat = chosenCat === 'auto' ? inferCategory(cleanName) : chosenCat;
      app.catalogImages.unshift({ id: `visuel-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, name: cleanName, url: dataUrl, category: cat, repeatPattern: cat === 'Motifs', status: 'approved', compatibleProducts: ['all'] });
    }
    e.target.value = ''; await persistCatalog(); app.showToast(`${files.length} visuel(s) classé(s) et enregistré(s)`);
  });
  loadCatalog();
}
