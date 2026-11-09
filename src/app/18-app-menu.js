export function register(app) {
  app.switchToProduct = function switchToProduct(productKey) {
    const select = document.querySelector('#productSelect');
    if (!select || !app.productDefinitions[productKey]) return;
    select.value = productKey;
    select.dispatchEvent(new Event('change'));
  };
}

export function initialize(app) {
  // Menu Fichier
  document.querySelector('#menuFileImport')?.addEventListener('click', () => {
    document.querySelector('#imageInput')?.click();
  });

  // Menu Éditer
  document.querySelector('#menuEditResetImg')?.addEventListener('click', () => {
    app.resetActiveImage?.(true);
    app.showToast('Visuel réinitialisé');
  });
  document.querySelector('#menuEditRepeat')?.addEventListener('click', () => {
    const cb = document.querySelector('#repeatPattern');
    if (cb) {
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event('change'));
    }
  });
  document.querySelector('#menuEditFrame')?.addEventListener('click', () => {
    const cb = document.querySelector('#showTransformFrame');
    if (cb) {
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event('change'));
    }
  });
  document.querySelector('#menuEditResetText')?.addEventListener('click', () => {
    document.querySelector('#resetText')?.click();
    app.showToast('Texte effacé');
  });

  // Menu Affichage & Showroom 3D
  const goShowcase = () => {
    app.switchToProduct('showcase');
    app.showToast("Showroom 3D : cliquez sur un objet pour le personnaliser");
  };
  document.querySelector('#menuViewShowcase')?.addEventListener('click', goShowcase);
  document.querySelector('#btnShowcaseTable')?.addEventListener('click', goShowcase);
  document.querySelector('#btnBackToShowroom')?.addEventListener('click', goShowcase);
  document.querySelector('#btnChangeProductShop')?.addEventListener('click', () => app.openShop2D?.());

  // Décoration festive de Noël pour le Showroom 3D
  app.setChristmasDecor = function setChristmasDecor(enabled) {
    localStorage.setItem('mockup3d_decor_noel', enabled ? '1' : '0');
    if (app.scene) {
      app.scene.traverse(c => {
        if (c.name === 'christmasDecorGroup') {
          c.visible = !!enabled;
        }
        if (c.name === 'monsteraPlantGroup') {
          c.visible = !enabled; // Le sapin remplace la plante
        }
      });
    }
    const adminBox = document.querySelector('#adminNoelDecorToggle');
    if (adminBox) adminBox.checked = !!enabled;
    const simpleBox = document.querySelector('#simpleNoelToggle');
    if (simpleBox) simpleBox.checked = !!enabled;
    app.showToast(enabled ? 'Ambiance de Noël activée dans le Showroom 3D' : 'Décorations de Noël masquées');
  };

  const initialNoel = (localStorage.getItem('mockup3d_decor_noel') === '1');
  const adminNoelBox = document.querySelector('#adminNoelDecorToggle');
  if (adminNoelBox) {
    adminNoelBox.checked = initialNoel;
    adminNoelBox.addEventListener('change', e => app.setChristmasDecor(e.target.checked));
  }
  const simpleNoelBox = document.querySelector('#simpleNoelToggle');
  if (simpleNoelBox) {
    simpleNoelBox.checked = initialNoel;
    simpleNoelBox.addEventListener('change', e => app.setChristmasDecor(e.target.checked));
  }
  document.querySelector('#menuViewHome')?.addEventListener('click', () => {
    app.homeView?.();
    app.showToast('Vue 3D réinitialisée');
  });
  document.querySelector('#menuViewSave')?.addEventListener('click', () => app.saveCurrentView?.());
  document.querySelector('#saveViewBtn')?.addEventListener('click', () => app.saveCurrentView?.());
  document.querySelector('#menuViewClearSave')?.addEventListener('click', () => app.clearSavedView?.());
  document.querySelector('#menuViewFaceA')?.addEventListener('click', () => {
    document.querySelector('#viewFaceA')?.click();
  });
  document.querySelector('#menuViewFaceB')?.addEventListener('click', () => {
    document.querySelector('#viewFaceB')?.click();
  });

  // Image de test par défaut chargée automatiquement au démarrage : Logo Graph2Print
  const startupVis = { url: '/logo-graph2print.png', name: 'Logo Graph2Print', fitMode: 'contain', scale: 0.85 };
  app.addImageFromUrl?.(startupVis.url, startupVis.name, {
    fitMode: startupVis.fitMode,
    scale: startupVis.scale,
    repeatPattern: false,
    silent: true
  });

  // Menu Catalogue
  document.querySelector('#menuCatOpen')?.addEventListener('click', () => {
    document.querySelector('#openCatalogBtn')?.click();
  });
  document.querySelector('#menuCatAdd')?.addEventListener('click', () => {
    const explorer = document.querySelector('#catalogExplorer');
    if (explorer) explorer.hidden = false;
    document.querySelector('#adminLibraryInput')?.click();
  });

  // Interactivité de la Table d'accueil (survol + clic pour choisir un produit)
  const tooltip = document.querySelector('#showcaseTooltip');
  let hoveredWrapper = null;
  let downPos = null;

  const resetHoveredWrapper = () => {
    if (hoveredWrapper) {
      hoveredWrapper.scale.setScalar(hoveredWrapper.userData.baseScale || 1);
      if (hoveredWrapper.userData?.isBusinessCard) {
        hoveredWrapper.position.y = 0.003;
      }
      hoveredWrapper = null;
    }
    if (tooltip) tooltip.hidden = true;
    if (app.renderer?.domElement) app.renderer.domElement.style.cursor = '';
  };

  const findShowcaseWrapper = (event) => {
    if (app.currentProductKey !== 'showcase' || !app.product?.interactiveWrappers) return null;
    const rect = app.renderer.domElement.getBoundingClientRect();
    app.mouseVec.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    app.mouseVec.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    app.raycaster.setFromCamera(app.mouseVec, app.camera);
    const visibleWrappers = app.product.interactiveWrappers.filter(w => w.visible !== false && (!w.userData?.showcaseProductKey || (app.isProductActive ? app.isProductActive(w.userData.showcaseProductKey) : true)));
    const hits = app.raycaster.intersectObjects(visibleWrappers, true);
    if (!hits.length) return null;
    let obj = hits[0].object;
    while (obj && !obj.userData?.showcaseProductKey) obj = obj.parent;
    if (obj && obj.visible === false) return null;
    return obj || null;
  };

  app.renderer.domElement.addEventListener('pointermove', (e) => {
    if (app.currentProductKey !== 'showcase') {
      if (hoveredWrapper) resetHoveredWrapper();
      return;
    }
    const wrapper = findShowcaseWrapper(e);
    if (wrapper !== hoveredWrapper) {
      resetHoveredWrapper();
      if (wrapper) {
        hoveredWrapper = wrapper;
        const hoverScale = wrapper.userData?.isBusinessCard ? 1.45 : ((wrapper.userData?.isCallistoBook || wrapper.userData?.isGpoBoard) ? 1.06 : 1.04);
        wrapper.scale.setScalar((wrapper.userData.baseScale || 1) * hoverScale);
        if (wrapper.userData?.isBusinessCard) {
          wrapper.position.y = 0.025;
        }
      }
    }
    if (wrapper && tooltip) {
      const rect = app.viewer.getBoundingClientRect();
      const subText = wrapper.userData.showcaseSub || 'Cliquez pour personnaliser cet objet';
      tooltip.innerHTML = `<strong>${wrapper.userData.showcaseLabel} <span class="showcase-price">${wrapper.userData.showcasePrice}</span></strong><small>${subText}</small>`;
      tooltip.style.left = `${e.clientX - rect.left}px`;
      tooltip.style.top = `${e.clientY - rect.top - 10}px`;
      tooltip.hidden = false;
      app.renderer.domElement.style.cursor = 'pointer';
    }
  });

  app.renderer.domElement.addEventListener('pointerdown', (e) => {
    if (app.currentProductKey === 'showcase') downPos = { x: e.clientX, y: e.clientY };
  });

  app.renderer.domElement.addEventListener('pointerup', (e) => {
    if (app.currentProductKey !== 'showcase' || !downPos) return;
    const dist = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
    downPos = null;
    if (dist > 6) return;
    const wrapper = findShowcaseWrapper(e);
    if (wrapper?.userData?.isBusinessCard) {
      resetHoveredWrapper();
      app.openBusinessCardModal?.();
      return;
    }
    if (wrapper?.userData?.isCallistoBook) {
      resetHoveredWrapper();
      window.open('https://www.callistoarts.com', '_blank');
      return;
    }
    if (wrapper?.userData?.isGpoBoard) {
      resetHoveredWrapper();
      window.open('https://www.gposarl.com', '_blank');
      return;
    }
    if (wrapper?.userData?.showcaseProductKey) {
      const key = wrapper.userData.showcaseProductKey;
      const label = wrapper.userData.showcaseLabel;
      resetHoveredWrapper();
      app.switchToProduct(key);
      app.showToast(`Objet sélectionné : ${label}`);
    }
  });
}
