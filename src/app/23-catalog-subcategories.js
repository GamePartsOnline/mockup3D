// Gestion des sous-catégories du catalogue en mode administrateur et client

export function register(app) {
  app.activeSubcategory = 'all';

  app.getSubcategories = function getSubcategories(catName) {
    if (!catName) return [];
    const found = (app.catalogCategories || []).find(c => (typeof c === 'string' ? c : c.name) === catName);
    const list = (found && typeof found === 'object' && Array.isArray(found.subs)) ? found.subs.slice() : [];
    return list.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
  };

  app.renderSubcategoryPills = function renderSubcategoryPills(visibleItems = []) {
    const box = document.querySelector('#catalogSubcategories');
    if (!box) return;
    const cat = app.activeCatalogCategory;
    if (!cat || cat === 'all' || cat === 'pending' || cat === 'current_product') {
      box.hidden = true; box.setAttribute('hidden', ''); app.activeSubcategory = 'all'; return;
    }
    const subs = app.getSubcategories(cat);
    if (!subs.length && app.clientMode) {
      box.hidden = true; box.setAttribute('hidden', ''); app.activeSubcategory = 'all'; return;
    }

    box.hidden = false; box.removeAttribute('hidden'); box.innerHTML = '';
    const catItems = visibleItems.filter(x => x.category === cat && x.status !== 'pending');
    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'subcat-pill' + (app.activeSubcategory === 'all' ? ' active' : '');
    allBtn.textContent = `Tout (${catItems.length})`;
    allBtn.onclick = () => { app.activeSubcategory = 'all'; app.renderCatalog?.(); };
    box.appendChild(allBtn);

    subs.forEach(sub => {
      const count = catItems.filter(x => (x.subcategory || '').toLowerCase() === sub.toLowerCase()).length;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'subcat-pill' + (app.activeSubcategory.toLowerCase() === sub.toLowerCase() ? ' active' : '');
      b.textContent = `${sub} (${count})`;
      b.onclick = () => { app.activeSubcategory = sub; app.renderCatalog?.(); };
      box.appendChild(b);
    });

    if (!app.clientMode) {
      const addBtn = document.createElement('button');
      addBtn.type = 'button'; addBtn.className = 'subcat-pill-action';
      addBtn.textContent = '+ Sous-cat'; addBtn.title = `Ajouter une sous-catégorie à ${cat}`;
      addBtn.onclick = async () => {
        const val = prompt(`Nom de la sous-catégorie pour "${cat}" (ex: Chats, Chiens, Girafe, Licorne) :`);
        if (!val || !val.trim()) return;
        const clean = val.trim();
        const obj = (app.catalogCategories || []).find(c => (typeof c === 'string' ? c : c.name) === cat);
        if (!obj || typeof obj !== 'object') return;
        if (!Array.isArray(obj.subs)) obj.subs = [];
        if (obj.subs.some(s => s.toLowerCase() === clean.toLowerCase())) return app.showToast('Cette sous-catégorie existe déjà.');
        obj.subs.push(clean);
        obj.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
        await app.persistCatalogCategories?.();
        app.activeSubcategory = clean;
        app.renderCatalog?.();
        app.showToast(`Sous-catégorie "${clean}" ajoutée à "${cat}"`);
      };
      box.appendChild(addBtn);

      if (subs.length > 0) {
        const delBtn = document.createElement('button');
        delBtn.type = 'button'; delBtn.className = 'subcat-pill-action subcat-pill-danger';
        delBtn.textContent = '✕ Sous-cat'; delBtn.title = `Supprimer une sous-catégorie de ${cat}`;
        delBtn.onclick = async () => {
          const list = subs.map((s, i) => `${i + 1}. ${s}`).join('\n');
          const input = prompt(`Entrez le numéro ou le nom de la sous-catégorie à supprimer de "${cat}" :\n\n${list}`);
          if (!input || !input.trim()) return;
          let target = null;
          const num = parseInt(input.trim(), 10);
          if (!isNaN(num) && num >= 1 && num <= subs.length) target = subs[num - 1];
          else target = subs.find(s => s.toLowerCase() === input.trim().toLowerCase());
          if (!target) return app.showToast('Sous-catégorie introuvable.');
          if (!confirm(`Supprimer la sous-catégorie "${target}" ?`)) return;
          const obj = (app.catalogCategories || []).find(c => (typeof c === 'string' ? c : c.name) === cat);
          if (obj && Array.isArray(obj.subs)) obj.subs = obj.subs.filter(s => s !== target);
          app.catalogImages.forEach(it => { if (it.category === cat && it.subcategory === target) it.subcategory = ''; });
          if (app.activeSubcategory === target) app.activeSubcategory = 'all';
          await Promise.all([app.persistCatalogCategories?.(), app.persistCatalog?.()]);
          app.renderCatalog?.();
          app.showToast(`Sous-catégorie "${target}" supprimée`);
        };
        box.appendChild(delBtn);
      }
    }
  };

  app.buildSubcatCardControl = function buildSubcatCardControl(item, actions, onUpdate) {
    const subs = app.getSubcategories(item.category);
    if (!subs.length) return;
    const sel = document.createElement('select');
    sel.style.cssText = 'font-size:9px;padding:1px 2px;border-radius:4px;background:#0f172a;color:#cbd5e1;border:1px solid #475569;max-width:76px;';
    sel.title = 'Sous-catégorie';
    sel.innerHTML = '<option value="">(Sous-cat)</option>' + subs.map(s => `<option value="${s}">${s}</option>`).join('');
    if (item.subcategory && subs.includes(item.subcategory)) sel.value = item.subcategory;
    sel.onchange = e => {
      e.stopPropagation();
      item.subcategory = e.target.value;
      onUpdate?.();
    };
    actions.appendChild(sel);
  };
}

export function initialize(app) {
  const catSel = document.querySelector('#adminCategorySelect');
  const subSel = document.querySelector('#adminSubcategorySelect');

  app.updateAdminSubcategorySelect = function updateAdminSubcategorySelect() {
    if (!subSel || !catSel) return;
    const curCat = catSel.value;
    const subs = curCat && curCat !== 'auto' ? app.getSubcategories(curCat) : [];
    if (!subs.length || app.clientMode) {
      subSel.style.display = 'none';
      subSel.value = 'auto';
      return;
    }
    subSel.style.display = 'inline-block';
    subSel.innerHTML = '<option value="auto">Sous-cat : Auto</option>' +
      subs.map(s => `<option value="${s}">${s}</option>`).join('');
  };

  catSel?.addEventListener('change', () => app.updateAdminSubcategorySelect());
}
