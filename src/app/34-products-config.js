// Demi-largeurs physiques réelles (axe X) avec marge de respiration
const PRODUCT_HALF_WIDTHS = {
  tshirt3D: 0.35,
  cushion: 0.24,
  photoFrame: 0.18,
  cap: 0.16,
  mug11oz: 0.14,
  puzzle: 0.25,
  mousePad: 0.22,
  pencilCase: 0.18,
  coaster: 0.13,
  coasterRound: 0.13,
  keychainRect: 0.10,
  keychainRound: 0.11,
  keychainHeart: 0.10,
  eventWristband: 0.18
};

// Obstacles fixes sanctuarisés sur la table d'atelier
const FIXED_OBSTACLES = [
  {
    name: 'businessCard',
    // Carte de visite posée à X: 0.83, Z: 0.80 (360x225mm, grossissement 1.45x au survol)
    // Zone interdite stricte avec coussin de sécurité anti-collision
    minX: 0.52,
    maxX: 1.14,
    minZ: 0.65,
    maxZ: 0.95,
    centerX: 0.83,
    active: () => true
  },
  {
    name: 'orchid',
    // Orchidée violette posée à X: 2.20, Z: -0.46
    minX: 1.95,
    maxX: 2.45,
    minZ: -0.65,
    maxZ: -0.25,
    centerX: 2.20,
    active: () => true
  },
  {
    name: 'cookiesPlate',
    // Assiette de cookies à X: 2.68, Z: 0.72 en mode Noël (coin avant-droit dégagé)
    minX: 2.45,
    maxX: 2.92,
    minZ: 0.50,
    maxZ: 0.94,
    centerX: 2.68,
    active: () => {
      const th = localStorage.getItem('mockup3d_theme') || (localStorage.getItem('mockup3d_decor_noel') === '1' ? 'noel' : 'standard');
      return th === 'noel';
    }
  }
];

function enforceAntiCollision(activeItems) {
  const PADDING = 0.05; // 5 cm de distance minimale entre objets
  const TABLE_MIN_X = -1.35;
  const TABLE_MAX_X = 2.85;

  for (let iter = 0; iter < 12; iter++) {
    let moved = false;

    // 1. Détection et résolution contre les obstacles fixes (carte de visite, orchidée, etc.)
    activeItems.forEach(item => {
      const k = item.userData.showcaseProductKey;
      const hw = PRODUCT_HALF_WIDTHS[k] || 0.14;
      const z = item.userData.baseZ;

      FIXED_OBSTACLES.forEach(obs => {
        if (!obs.active()) return;
        if (z >= obs.minZ && z <= obs.maxZ) {
          const itemMinX = item.position.x - hw;
          const itemMaxX = item.position.x + hw;
          if (itemMaxX > obs.minX && itemMinX < obs.maxX) {
            moved = true;
            // Repousser fermement vers le côté naturel hors de l'obstacle
            if (item.position.x < obs.centerX) {
              item.position.x = obs.minX - hw - PADDING;
            } else {
              item.position.x = obs.maxX + hw + PADDING;
            }
          }
        }
      });
    });

    // 2. Détection et résolution de chevauchement entre voisins de la même rangée
    for (let i = 0; i < activeItems.length; i++) {
      for (let j = i + 1; j < activeItems.length; j++) {
        const a = activeItems[i];
        const b = activeItems[j];
        if (Math.abs(a.userData.baseZ - b.userData.baseZ) > 0.18) continue;

        const hwA = PRODUCT_HALF_WIDTHS[a.userData.showcaseProductKey] || 0.14;
        const hwB = PRODUCT_HALF_WIDTHS[b.userData.showcaseProductKey] || 0.14;
        const minDist = hwA + hwB + PADDING;
        const actualDist = Math.abs(a.position.x - b.position.x);

        if (actualDist < minDist) {
          moved = true;
          const overlap = minDist - actualDist;
          const shift = overlap * 0.55;
          if (a.position.x <= b.position.x) {
            a.position.x -= shift;
            b.position.x += shift;
          } else {
            a.position.x += shift;
            b.position.x -= shift;
          }
        }
      }
    }

    // 3. Maintien strict sur le plateau de table
    activeItems.forEach(item => {
      const hw = PRODUCT_HALF_WIDTHS[item.userData.showcaseProductKey] || 0.14;
      if (item.position.x - hw < TABLE_MIN_X) {
        item.position.x = TABLE_MIN_X + hw;
        moved = true;
      }
      if (item.position.x + hw > TABLE_MAX_X) {
        item.position.x = TABLE_MAX_X - hw;
        moved = true;
      }
    });

    if (!moved) break;
  }
}

// Gestion dynamique des produits (statut actif/inactif, tarifs, dimensions)
export function register(app) {
  app.productsConfig = [];
  app.enforceTableAntiCollision = enforceAntiCollision;

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

    // 1. Rangée arrière (t-shirt, coussin, poster A4, casquette, mug)
    const rearRow = tableItems.filter(c => c.userData.baseZ < -0.2).sort((a, b) => a.userData.baseX - b.userData.baseX);
    const activeRear = rearRow.filter(c => c.visible);
    if (activeRear.length === rearRow.length) {
      rearRow.forEach(c => { c.position.x = c.userData.baseX; });
    } else if (activeRear.length > 0) {
      const minX = -0.63, maxX = 2.65;
      if (activeRear.length === 1) {
        activeRear[0].position.x = (minX + maxX) / 2;
      } else {
        const step = (maxX - minX) / (activeRear.length - 1);
        activeRear.forEach((c, idx) => { c.position.x = minX + idx * step; });
      }
    }

    // 2. Rangée centrale (puzzle, tapis de souris, trousse, sous-verres)
    const midRow = tableItems.filter(c => c.userData.baseZ >= -0.2 && c.userData.baseZ < 0.6).sort((a, b) => a.userData.baseX - b.userData.baseX);
    const activeMid = midRow.filter(c => c.visible);
    if (activeMid.length === midRow.length) {
      midRow.forEach(c => { c.position.x = c.userData.baseX; });
    } else if (activeMid.length > 0) {
      const minX = -0.63, maxX = 2.20;
      if (activeMid.length === 1) {
        activeMid[0].position.x = (minX + maxX) / 2;
      } else {
        const step = (maxX - minX) / (activeMid.length - 1);
        activeMid.forEach((c, idx) => { c.position.x = minX + idx * step; });
      }
    }

    // 3. Rangée avant : SÉPARATION STRICTE PORTE-CLÉS ET CARTE DE VISITE
    // Les porte-clés sont situés STRICTEMENT à gauche de la carte de visite (X <= 0.40)
    const keychains = tableItems.filter(c => ['keychainRect', 'keychainRound', 'keychainHeart'].includes(c.userData.showcaseProductKey)).sort((a, b) => a.userData.baseX - b.userData.baseX);
    const activeKeychains = keychains.filter(c => c.visible);

    if (activeKeychains.length === keychains.length) {
      // Tous actifs : positions d'origine parfaites (porte-clé rond à -0.07, bien à gauche de la carte à 0.83)
      keychains.forEach(c => { c.position.x = c.userData.baseX; });
    } else if (activeKeychains.length === 2) {
      // 2 porte-clés actifs : répartis avec élégance bien à gauche de la carte
      activeKeychains[0].position.x = -0.28;
      activeKeychains[1].position.x = 0.10;
    } else if (activeKeychains.length === 1) {
      // 1 seul porte-clé actif : centré dans son domaine sécurisé
      activeKeychains[0].position.x = -0.08;
    }

    // Bracelet événementiel : situé à droite de la carte de visite
    const wristband = tableItems.find(c => c.userData.showcaseProductKey === 'eventWristband');
    if (wristband) {
      wristband.position.x = wristband.userData.baseX; // X = 1.60
    }

    // 4. MOTEUR ANTI-COLLISION GENERAL (Résolution physique itérative)
    const allActive = tableItems.filter(c => c.visible);
    enforceAntiCollision(allActive);
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
