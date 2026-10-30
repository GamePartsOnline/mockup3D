// Module 30 : Studio mobile tactile (style Mocka3D) pour MockUp3D

export function register(app) {
  app.currentMobileTab = null;

  app.openMobileSheet = function openMobileSheet(tabName) {
    const panel = document.querySelector('.workspace .panel');
    if (!panel) return;

    app.workspace?.classList.remove('left-collapsed');
    panel.classList.add('mobile-sheet-open');
    app.currentMobileTab = tabName;

    // Mise à jour de l'onglet actif du dock
    document.querySelectorAll('#mobileBottomDock .dock-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.dock === tabName);
    });

    // Correspondance entre onglet et section du formulaire
    const isSimple = document.querySelector('#panelContentSimple')?.style.display !== 'none';
    const tabSectionMap = isSimple ? {
      visual: '#simpleSectionVisual',
      adjust: '#simpleSectionVisual',
      text: '#simpleSectionText',
      color: '#simpleSectionFinish'
    } : {
      visual: '#sectionImages',
      adjust: '#adjustments',
      text: '#textSection',
      color: '#sectionAppearance'
    };

    const targetSelector = tabSectionMap[tabName];
    if (targetSelector) {
      const targetSec = document.querySelector(targetSelector);
      if (targetSec) {
        if (!isSimple) {
          targetSec.classList.remove('collapsed');
          const content = targetSec.querySelector('.section-content');
          if (content) content.style.display = 'block';
          const icon = targetSec.querySelector('.collapse-icon');
          if (icon) icon.style.transform = 'none';
        }

        setTimeout(() => {
          targetSec.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
      }
    }
  };

  app.closeMobileSheet = function closeMobileSheet() {
    const panel = document.querySelector('.workspace .panel');
    if (panel) panel.classList.remove('mobile-sheet-open');
    app.currentMobileTab = null;
    document.querySelectorAll('#mobileBottomDock .dock-btn').forEach(btn => {
      if (btn.dataset.dock !== 'order') btn.classList.remove('active');
    });
  };

  app.toggleMobileSheet = function toggleMobileSheet(tabName) {
    const panel = document.querySelector('.workspace .panel');
    const isOpen = panel && panel.classList.contains('mobile-sheet-open');
    if (isOpen && app.currentMobileTab === tabName) {
      app.closeMobileSheet();
    } else {
      app.openMobileSheet(tabName);
    }
  };
}

export function initialize(app) {
  const dock = document.querySelector('#mobileBottomDock');
  if (dock) {
    dock.addEventListener('click', (e) => {
      const btn = e.target.closest('.dock-btn');
      if (!btn) return;
      const tab = btn.dataset.dock;

      if (tab === 'product') {
        if (typeof app.openShop2DModal === 'function') {
          app.openShop2DModal();
        } else {
          document.querySelector('#btnChangeProductShop')?.click();
        }
        app.closeMobileSheet();
      } else if (tab === 'order') {
        if (typeof app.openClientOrderModal === 'function') {
          app.openClientOrderModal();
        } else {
          document.querySelector('#clientGuideAction')?.click();
        }
      } else if (tab) {
        app.toggleMobileSheet(tab);
      }
    });
  }

  // Fermeture du tiroir bas mobile
  document.querySelector('#mobileSheetClose')?.addEventListener('click', () => {
    app.closeMobileSheet();
  });

  const handleBar = document.querySelector('#mobileSheetHandle .sheet-drag-pill');
  if (handleBar) {
    handleBar.addEventListener('click', () => {
      app.closeMobileSheet();
    });
  }

  // Clic sur la scène 3D : repli automatique du tiroir pour admirer l'objet
  const viewer = document.querySelector('#viewer');
  if (viewer) {
    viewer.addEventListener('pointerdown', (e) => {
      if (window.innerWidth <= 850) {
        const panel = document.querySelector('.workspace .panel');
        if (panel && panel.classList.contains('mobile-sheet-open')) {
          // Ferme le tiroir seulement si l'interaction démarre dans le viewer 3D
          const rect = viewer.getBoundingClientRect();
          if (e.clientY < rect.bottom - 60) {
            app.closeMobileSheet();
          }
        }
      }
    });
  }

  // Bouton flottant de rotation automatique rapide
  const quickRotateBtn = document.querySelector('#btnQuickRotate');
  const autoRotateInput = document.querySelector('#autoRotate');
  if (quickRotateBtn && autoRotateInput) {
    quickRotateBtn.addEventListener('click', () => {
      autoRotateInput.checked = !autoRotateInput.checked;
      autoRotateInput.dispatchEvent(new Event('change', { bubbles: true }));
      quickRotateBtn.style.color = autoRotateInput.checked ? '#8b5cf6' : '#1e293b';
      quickRotateBtn.style.borderColor = autoRotateInput.checked ? '#8b5cf6' : 'rgba(0,0,0,0.08)';
    });
  }
}
