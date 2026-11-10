// Module 38 : Boîtes de dialogue métiers personnalisées (remplacement de window.confirm, window.prompt, window.alert)
// et neutralisation des menus contextuels système sur l'espace 3D.

export function register(app) {
  let activeResolver = null;

  app.customAlert = function(message, options = {}) {
    return new Promise(resolve => {
      const overlay = document.querySelector('#customDialogOverlay');
      const titleEl = document.querySelector('#customDialogTitle');
      const msgEl = document.querySelector('#customDialogMessage');
      const inputWrap = document.querySelector('#customDialogInputWrap');
      const cancelBtn = document.querySelector('#customDialogCancelBtn');
      const confirmBtn = document.querySelector('#customDialogConfirmBtn');

      if (!overlay) {
        app.showToast?.(message);
        return resolve(true);
      }

      if (titleEl) titleEl.textContent = options.title || 'Information';
      if (msgEl) msgEl.textContent = message;
      if (inputWrap) inputWrap.style.display = 'none';
      if (cancelBtn) cancelBtn.style.display = 'none';
      if (confirmBtn) {
        confirmBtn.textContent = options.okText || 'Compris';
        confirmBtn.className = 'primary';
      }

      activeResolver = () => {
        app.closeCustomDialog();
        resolve(true);
      };

      overlay.hidden = false;
      overlay.style.display = 'flex';
      confirmBtn?.focus();
    });
  };

  app.customConfirm = function(message, options = {}) {
    return new Promise(resolve => {
      const overlay = document.querySelector('#customDialogOverlay');
      const titleEl = document.querySelector('#customDialogTitle');
      const msgEl = document.querySelector('#customDialogMessage');
      const inputWrap = document.querySelector('#customDialogInputWrap');
      const cancelBtn = document.querySelector('#customDialogCancelBtn');
      const confirmBtn = document.querySelector('#customDialogConfirmBtn');

      if (!overlay) {
        return resolve(false);
      }

      if (titleEl) titleEl.textContent = options.title || 'Confirmation requise';
      if (msgEl) msgEl.textContent = message;
      if (inputWrap) inputWrap.style.display = 'none';
      if (cancelBtn) {
        cancelBtn.style.display = 'inline-flex';
        cancelBtn.textContent = options.cancelText || 'Annuler';
      }
      if (confirmBtn) {
        confirmBtn.textContent = options.confirmText || 'Confirmer';
        confirmBtn.className = options.danger ? 'primary custom-dialog-btn-danger' : 'primary';
      }

      activeResolver = (ok) => {
        app.closeCustomDialog();
        resolve(!!ok);
      };

      overlay.hidden = false;
      overlay.style.display = 'flex';
      confirmBtn?.focus();
    });
  };

  app.customPrompt = function(message, defaultValue = '', options = {}) {
    return new Promise(resolve => {
      const overlay = document.querySelector('#customDialogOverlay');
      const titleEl = document.querySelector('#customDialogTitle');
      const msgEl = document.querySelector('#customDialogMessage');
      const inputWrap = document.querySelector('#customDialogInputWrap');
      const inputEl = document.querySelector('#customDialogInput');
      const cancelBtn = document.querySelector('#customDialogCancelBtn');
      const confirmBtn = document.querySelector('#customDialogConfirmBtn');

      if (!overlay || !inputEl) {
        return resolve(null);
      }

      if (titleEl) titleEl.textContent = options.title || 'Saisie';
      if (msgEl) msgEl.textContent = message;
      if (inputWrap) inputWrap.style.display = 'block';
      inputEl.value = defaultValue || '';
      inputEl.placeholder = options.placeholder || '';
      if (cancelBtn) {
        cancelBtn.style.display = 'inline-flex';
        cancelBtn.textContent = options.cancelText || 'Annuler';
      }
      if (confirmBtn) {
        confirmBtn.textContent = options.confirmText || 'Valider';
        confirmBtn.className = 'primary';
      }

      activeResolver = (ok) => {
        const val = inputEl.value;
        app.closeCustomDialog();
        resolve(ok ? val : null);
      };

      overlay.hidden = false;
      overlay.style.display = 'flex';
      setTimeout(() => {
        inputEl.focus();
        inputEl.select();
      }, 50);
    });
  };

  app.closeCustomDialog = function() {
    const overlay = document.querySelector('#customDialogOverlay');
    if (overlay) {
      overlay.hidden = true;
      overlay.style.display = 'none';
    }
  };

  app._customDialogResolve = function(ok) {
    if (typeof activeResolver === 'function') {
      const fn = activeResolver;
      activeResolver = null;
      fn(ok);
    }
  };
}

export function initialize(app) {
  const overlay = document.querySelector('#customDialogOverlay');
  const confirmBtn = document.querySelector('#customDialogConfirmBtn');
  const cancelBtn = document.querySelector('#customDialogCancelBtn');
  const closeBtn = document.querySelector('#customDialogCloseBtn');
  const inputEl = document.querySelector('#customDialogInput');

  confirmBtn?.addEventListener('click', () => app._customDialogResolve(true));
  cancelBtn?.addEventListener('click', () => app._customDialogResolve(false));
  closeBtn?.addEventListener('click', () => app._customDialogResolve(false));

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) app._customDialogResolve(false);
  });

  inputEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      app._customDialogResolve(true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      app._customDialogResolve(false);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (overlay && !overlay.hidden && overlay.style.display !== 'none') {
      if (e.key === 'Escape') {
        e.preventDefault();
        app._customDialogResolve(false);
      }
    }
  });

  // Suppression du menu contextuel système sur le canevas Three.js pour une expérience 3D fluide
  const viewer = document.querySelector('#viewer');
  if (viewer) {
    viewer.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  if (app.renderer?.domElement) {
    app.renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  // Neutralisation de window.alert natif pour éviter tout blocage du rendu 3D
  try {
    window.alert = function(msg) {
      if (app.showToast) app.showToast(String(msg || ''));
      else console.info('[System alert intercepted]:', msg);
    };
  } catch (err) {
    console.warn('Impossible de redéfinir window.alert:', err);
  }
}
