// Gestion dynamique des produits (statut actif/inactif, tarifs, dimensions)
export function register(app) {
  app.productsConfig = [];

  app.isProductActive = function isProductActive(key) {
    if (!key || key === 'showcase') return true;
    const prod = (app.productsConfig || []).find(p => p.key === key || p.id === key);
    return prod ? prod.active !== false : true;
  };

  app.getProductPrice = function getProductPrice(key) {
    if (!key || key === 'showcase') return '';
    const prod = (app.productsConfig || []).find(p => p.key === key || p.id === key);
    return prod?.price || '';
  };

  app.getProductMeta = function getProductMeta(key) {
    return (app.productsConfig || []).find(p => p.key === key || p.id === key) || null;
  };

  app.refreshShowcaseVisibility = function refreshShowcaseVisibility() {
    if (!app.scene) return;
    const tableItems = [];

    app.scene.traverse(c => {
      if (c.userData?.showcaseProductKey) {
        const active = app.isProductActive(c.userData.showcaseProductKey);
        c.visible = active;
        if (!c.userData.wallMounted && !c.userData.isFloor && c.userData.baseX !== undefined) {
          tableItems.push(c);
        }
      }
    });

    // Répartition dynamique des articles actifs sur la table pour combler le vide (ex: t-shirt ou puzzle désactivé)
    const rows = [
      { name: 'rear', filter: c => c.userData.baseZ < -0.2, minX: -0.63, maxX: 2.65 },
      { name: 'middle', filter: c => c.userData.baseZ >= -0.2 && c.userData.baseZ < 0.6, minX: -0.63, maxX: 2.20 },
      { name: 'front', filter: c => c.userData.baseZ >= 0.6, minX: -0.40, maxX: 1.60 }
    ];

    rows.forEach(r => {
      const allRow = tableItems.filter(r.filter).sort((a, b) => a.userData.baseX - b.userData.baseX);
      const activeRow = allRow.filter(c => c.visible);

      if (activeRow.length === allRow.length) {
        // Tous les objets de la rangée sont actifs : position d'origine
        allRow.forEach(c => {
          c.position.x = c.userData.baseX;
        });
      } else if (activeRow.length > 0) {
        // Objets désactivés : redistribution équilibrée le long de [minX, maxX] pour combler tout vide à gauche
        if (activeRow.length === 1) {
          activeRow[0].position.x = (r.minX + r.maxX) / 2;
        } else {
          const step = (r.maxX - r.minX) / (activeRow.length - 1);
          activeRow.forEach((c, idx) => {
            c.position.x = r.minX + idx * step;
          });
        }
      }
    });
  };

  app.syncProductSelectOptions = function syncProductSelectOptions() {
    const select = document.querySelector('#productSelect');
    if (!select || !Array.isArray(app.productsConfig) || app.productsConfig.length === 0) return;

    // Conserver la sélection actuelle
    const currentVal = select.value;

    // Vider et reconstruire les options en respectant l'état actif
    const options = [
      { key: 'showcase', label: 'Le Showroom 3D' }
    ];

    app.productsConfig.forEach(p => {
      if (p.active !== false) {
        options.push({ key: p.key || p.id, label: p.name });
      }
    });

    select.innerHTML = '';
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.key;
      el.textContent = opt.label;
      select.appendChild(el);
    });

    // Rétablir la valeur si encore active, sinon basculer vers showcase ou le premier actif
    const stillExists = options.some(o => o.key === currentVal);
    if (stillExists) {
      select.value = currentVal;
    } else {
      select.value = options[0]?.key || 'showcase';
      if (currentVal && currentVal !== 'showcase') {
        app.showToast?.(`Le produit sélectionné est actuellement indisponible.`);
      }
    }
  };

  app.fetchProductsConfig = async function fetchProductsConfig() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          app.productsConfig = data;
          app.syncProductSelectOptions();
          app.refreshShowcaseVisibility();
          app.renderShopCatalog?.();
          return data;
        }
      }
    } catch (err) {
      console.warn('Impossible de charger /api/products, utilisation du cache par defaut');
    }
    return app.productsConfig;
  };
}

export function initialize(app) {
  app.fetchProductsConfig();
}
