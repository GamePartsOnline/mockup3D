// Gestion des catégories du catalogue en mode administrateur

export function register(app) {
  app.catalogCategories = ['Fleurs', 'Licornes', 'Animaux & Art', 'Illustrations', 'Motifs', 'Logos'];

  app.loadCatalogCategories = async function loadCatalogCategories() {
    try {
      const res = await fetch('/api/catalog-categories');
      if (res.ok) {
        const list = await res.json();
        if (Array.isArray(list) && list.length) app.catalogCategories = list;
      }
    } catch {}
    app.updateAdminCategorySelect?.();
  };

  app.persistCatalogCategories = async function persistCatalogCategories() {
    try {
      await fetch('/api/catalog-categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(app.catalogCategories)
      });
    } catch {}
    app.updateAdminCategorySelect?.();
  };

  app.updateAdminCategorySelect = function updateAdminCategorySelect() {
    const sel = document.querySelector('#adminCategorySelect');
    if (!sel) return;
    const cur = sel.value;
    sel.innerHTML = '<option value="auto">Catégorie : Auto</option>' +
      app.catalogCategories.map(c => `<option value="${c}">${c}</option>`).join('');
    if (app.catalogCategories.includes(cur)) sel.value = cur;
  };
}

export function initialize(app) {
  const addCatBtn = document.querySelector('#adminAddCategoryBtn');
  const editCatBtn = document.querySelector('#adminEditCategoryBtn');

  if (app.clientMode) {
    if (addCatBtn) addCatBtn.style.display = 'none';
    if (editCatBtn) editCatBtn.style.display = 'none';
    return;
  }

  addCatBtn?.addEventListener('click', async () => {
    const val = prompt('Nom de la nouvelle catégorie :');
    if (!val || !val.trim()) return;
    const clean = val.trim();
    if (app.catalogCategories.some(c => c.toLowerCase() === clean.toLowerCase())) {
      return app.showToast('Cette catégorie existe déjà.');
    }
    app.catalogCategories.push(clean);
    await app.persistCatalogCategories();
    app.renderCatalog?.();
    app.showToast(`Catégorie "${clean}" créée`);
  });

  editCatBtn?.addEventListener('click', async () => {
    const active = (app.activeCatalogCategory !== 'all' && app.activeCatalogCategory !== 'pending') ? app.activeCatalogCategory : '';
    const target = active || prompt(`Quelle catégorie modifier parmi :\n${app.catalogCategories.join(', ')}`);
    if (!target || !app.catalogCategories.includes(target)) return;
    const val = prompt(`Renommer la catégorie "${target}" (ou laisser vide pour la supprimer) :`, target);
    if (val === null) return;
    const clean = val.trim();
    if (clean && clean !== target) {
      const idx = app.catalogCategories.indexOf(target);
      if (idx !== -1) app.catalogCategories[idx] = clean;
      app.catalogImages.forEach(it => { if (it.category === target) it.category = clean; });
      if (app.activeCatalogCategory === target) app.activeCatalogCategory = clean;
      await Promise.all([app.persistCatalogCategories(), app.persistCatalog?.()]);
      app.renderCatalog?.();
      app.showToast(`Catégorie renommée en "${clean}"`);
    } else if (!clean) {
      app.catalogCategories = app.catalogCategories.filter(c => c !== target);
      app.catalogImages.forEach(it => { if (it.category === target) it.category = 'Illustrations'; });
      if (app.activeCatalogCategory === target) app.activeCatalogCategory = 'all';
      await Promise.all([app.persistCatalogCategories(), app.persistCatalog?.()]);
      app.renderCatalog?.();
      app.showToast(`Catégorie "${target}" supprimée`);
    }
  });

  app.loadCatalogCategories();
}
