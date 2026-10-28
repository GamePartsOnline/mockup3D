// Gestionnaire visuel des catégories et sous-catégories (ordre, déplacement, CRUD)

export function register(app) {
  app.openCategoryManager = function() {
    const modal = document.querySelector('#categoryManagerModal');
    if (modal) { modal.hidden = false; modal.removeAttribute('hidden'); app.renderCategoryManagerList?.(); }
  };
  app.closeCategoryManager = function() {
    const modal = document.querySelector('#categoryManagerModal');
    if (modal) { modal.hidden = true; modal.setAttribute('hidden', ''); }
  };

  app.sortCategoriesAlphabetically = async function() {
    if (!Array.isArray(app.catalogCategories)) return;
    app.catalogCategories.sort((a, b) => {
      const na = typeof a === 'string' ? a : a.name;
      const nb = typeof b === 'string' ? b : b.name;
      return na.localeCompare(nb, 'fr', { sensitivity: 'base' });
    });
    app.catalogCategories.forEach(c => {
      if (c && Array.isArray(c.subs)) c.subs.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));
    });
    await app.persistCatalogCategories?.();
    app.renderCategoryManagerList?.(); app.renderCatalog?.(); app.updateAdminCategorySelect?.();
    app.showToast('Catégories classées par ordre alphabétique');
  };

  app.renderCategoryManagerList = function() {
    const listEl = document.querySelector('#categoryManagerList');
    if (!listEl) return;
    listEl.innerHTML = '';
    const cats = app.catalogCategories || [];

    cats.forEach((catObj, catIdx) => {
      const catName = typeof catObj === 'string' ? catObj : catObj.name;
      const subs = (typeof catObj === 'object' && Array.isArray(catObj.subs)) ? catObj.subs : [];
      const catCount = (app.catalogImages || []).filter(x => x.category === catName).length;
      const block = document.createElement('div'); block.className = 'cat-item-block';
      const main = document.createElement('div'); main.className = 'cat-item-main';
      main.innerHTML = `<span class="cat-item-label">${catName} <small style="font-weight:400;color:#64748b;">(${catCount})</small></span>`;
      const actions = document.createElement('div'); actions.className = 'cat-item-actions';

      const btn = (txt, title, fn, danger) => {
        const b = document.createElement('button'); b.className = 'cat-btn-sm' + (danger ? ' cat-btn-danger' : '');
        b.textContent = txt; b.title = title || ''; b.onclick = fn; return b;
      };

      if (catIdx > 0) actions.appendChild(btn('▲', 'Monter', async () => { [cats[catIdx], cats[catIdx - 1]] = [cats[catIdx - 1], cats[catIdx]]; await sync(); }));
      if (catIdx < cats.length - 1) actions.appendChild(btn('▼', 'Descendre', async () => { [cats[catIdx], cats[catIdx + 1]] = [cats[catIdx + 1], cats[catIdx]]; await sync(); }));
      actions.appendChild(btn('Renommer', 'Renommer', async () => {
        const n = prompt(`Nouveau nom pour "${catName}" :`, catName);
        if (n && n.trim() && n.trim() !== catName) {
          if (typeof catObj === 'string') cats[catIdx] = { name: n.trim(), subs: [] }; else catObj.name = n.trim();
          (app.catalogImages || []).forEach(it => { if (it.category === catName) it.category = n.trim(); });
          await sync();
        }
      }));
      actions.appendChild(btn('Déplacer dans...', `Transformer "${catName}" en sous-catégorie`, async () => {
        const others = cats.map(c => typeof c === 'string' ? c : c.name).filter(n => n !== catName);
        if (!others.length) return app.showToast('Aucune autre catégorie disponible.');
        const chosen = prompt(`Déplacer "${catName}" en tant que sous-catégorie dans :\n` + others.join(', '));
        if (!chosen) return;
        const targetObj = cats.find(c => (typeof c === 'string' ? c : c.name) === chosen);
        if (targetObj) {
          if (!Array.isArray(targetObj.subs)) targetObj.subs = [];
          if (!targetObj.subs.includes(catName)) targetObj.subs.push(catName);
          cats.splice(catIdx, 1);
          (app.catalogImages || []).forEach(it => { if (it.category === catName) { it.category = chosen; it.subcategory = catName; } });
          await sync();
        }
      }));
      actions.appendChild(btn('✕ Supprimer', `Supprimer "${catName}"`, async () => {
        if (!confirm(`Supprimer la catégorie "${catName}" ? Les visuels basculeront dans "Illustrations".`)) return;
        cats.splice(catIdx, 1);
        (app.catalogImages || []).forEach(it => { if (it.category === catName) { it.category = 'Illustrations'; it.subcategory = ''; } });
        await sync();
      }, true));

      const subInput = document.createElement('input'); subInput.type = 'text'; subInput.placeholder = '+ Sous-catégorie...'; subInput.className = 'cat-input-sm';
      subInput.onkeydown = async e => {
        if (e.key === 'Enter' && subInput.value.trim()) {
          const val = subInput.value.trim();
          if (typeof catObj === 'string') { cats[catIdx] = { name: catName, subs: [val] }; }
          else { if (!Array.isArray(catObj.subs)) catObj.subs = []; if (!catObj.subs.includes(val)) catObj.subs.push(val); }
          subInput.value = ''; await sync();
        }
      };
      actions.appendChild(subInput);
      main.appendChild(actions); block.appendChild(main);

      if (subs.length > 0) {
        const subBox = document.createElement('div'); subBox.className = 'cat-subs-list';
        subs.forEach((subName, sIdx) => {
          const subCount = (app.catalogImages || []).filter(x => x.category === catName && x.subcategory === subName).length;
          const row = document.createElement('div'); row.className = 'cat-sub-row';
          row.innerHTML = `<span class="cat-sub-label">└ ${subName} <small style="font-weight:400;color:#64748b;">(${subCount})</small></span>`;
          const sActions = document.createElement('div'); sActions.className = 'cat-sub-actions';
          if (sIdx > 0) sActions.appendChild(btn('▲', 'Monter', async () => { [subs[sIdx], subs[sIdx - 1]] = [subs[sIdx - 1], subs[sIdx]]; await sync(); }));
          if (sIdx < subs.length - 1) sActions.appendChild(btn('▼', 'Descendre', async () => { [subs[sIdx], subs[sIdx + 1]] = [subs[sIdx + 1], subs[sIdx]]; await sync(); }));
          sActions.appendChild(btn('Promouvoir', 'Transformer en catégorie principale', async () => {
            catObj.subs = subs.filter(s => s !== subName);
            cats.push({ name: subName, subs: [] });
            (app.catalogImages || []).forEach(it => { if (it.category === catName && it.subcategory === subName) { it.category = subName; it.subcategory = ''; } });
            await sync();
          }));
          sActions.appendChild(btn('Déplacer...', `Déplacer "${subName}" dans une autre catégorie`, async () => {
            const others = cats.map(c => typeof c === 'string' ? c : c.name).filter(n => n !== catName);
            if (!others.length) return;
            const chosen = prompt(`Déplacer "${subName}" dans quelle catégorie ?\n` + others.join(', '));
            if (!chosen) return;
            const targetObj = cats.find(c => (typeof c === 'string' ? c : c.name) === chosen);
            if (targetObj) {
              catObj.subs = subs.filter(s => s !== subName);
              if (!Array.isArray(targetObj.subs)) targetObj.subs = [];
              targetObj.subs.push(subName);
              (app.catalogImages || []).forEach(it => { if (it.category === catName && it.subcategory === subName) it.category = chosen; });
              await sync();
            }
          }));
          sActions.appendChild(btn('✕', 'Supprimer sous-cat', async () => {
            if (!confirm(`Supprimer la sous-catégorie "${subName}" ?`)) return;
            catObj.subs = subs.filter(s => s !== subName);
            (app.catalogImages || []).forEach(it => { if (it.category === catName && it.subcategory === subName) it.subcategory = ''; });
            await sync();
          }, true));
          row.appendChild(sActions); subBox.appendChild(row);
        });
        block.appendChild(subBox);
      }
      listEl.appendChild(block);
    });

    async function sync() {
      await Promise.all([app.persistCatalogCategories?.(), app.persistCatalog?.()]);
      app.renderCategoryManagerList(); app.renderCatalog?.();
    }
  };
}

export function initialize(app) {
  const openBtn = document.querySelector('#openCategoryManagerBtn'), closeBtn = document.querySelector('#closeCategoryManagerBtn');
  const addModalBtn = document.querySelector('#addCategoryFromModalBtn'), sortAlphaBtn = document.querySelector('#sortCategoriesAlphaBtn');

  if (app.clientMode && openBtn) openBtn.style.display = 'none';
  openBtn?.addEventListener('click', () => app.openCategoryManager?.());
  closeBtn?.addEventListener('click', () => app.closeCategoryManager?.());
  sortAlphaBtn?.addEventListener('click', () => app.sortCategoriesAlphabetically?.());

  addModalBtn?.addEventListener('click', async () => {
    const val = prompt('Nom de la nouvelle catégorie principale :');
    if (!val || !val.trim()) return;
    if (!Array.isArray(app.catalogCategories)) app.catalogCategories = [];
    app.catalogCategories.push({ name: val.trim(), subs: [] });
    await app.persistCatalogCategories?.();
    app.renderCategoryManagerList?.(); app.renderCatalog?.();
    app.showToast(`Catégorie "${val.trim()}" créée`);
  });
}
