// Module 39 : Menus déroulants personnalisés (Custom Dropdowns)
// Remplace le rendu système natif des éléments <select> par une interface personnalisée,
// animée, accessible et compatible avec le mode sombre et tous les événements existants.

export function register(app) {
  const enhancedMap = new WeakMap();

  function buildOptionsHtml(selectEl, searchTerm = '') {
    const term = searchTerm.toLowerCase().trim();
    let html = '';
    const children = Array.from(selectEl.children);

    for (const child of children) {
      if (child.tagName === 'OPTGROUP') {
        const groupLabel = child.label || '';
        const groupOpts = Array.from(child.children).filter(opt => {
          if (!term) return true;
          return (opt.textContent || '').toLowerCase().includes(term);
        });
        if (groupOpts.length > 0) {
          html += `<div class="custom-dropdown-group-header">${escapeHtml(groupLabel)}</div>`;
          for (const opt of groupOpts) {
            html += renderOption(opt, selectEl.value);
          }
        }
      } else if (child.tagName === 'OPTION') {
        const optText = child.textContent || '';
        if (!term || optText.toLowerCase().includes(term)) {
          html += renderOption(child, selectEl.value);
        }
      }
    }

    if (!html) {
      html = `<div style="padding:10px; text-align:center; color:#94a3b8; font-size:12px;">Aucun résultat</div>`;
    }

    return html;
  }

  function renderOption(opt, currentValue) {
    const isSelected = opt.value === currentValue || (!currentValue && opt.selected);
    const isDisabled = opt.disabled;
    const val = escapeHtml(opt.value);
    const text = escapeHtml(opt.textContent || opt.value);
    const classes = ['custom-dropdown-option'];
    if (isSelected) classes.push('selected');
    if (isDisabled) classes.push('disabled');

    return `<div class="${classes.join(' ')}" data-value="${val}" role="option" aria-selected="${isSelected ? 'true' : 'false'}" ${isDisabled ? 'aria-disabled="true"' : ''}><span>${text}</span></div>`;
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function updateTriggerLabel(selectEl, labelSpan) {
    if (!labelSpan) return;
    const selectedOpt = selectEl.selectedOptions?.[0] || selectEl.options?.[selectEl.selectedIndex];
    labelSpan.textContent = selectedOpt ? selectedOpt.textContent : (selectEl.placeholder || 'Sélectionner…');
  }

  app.enhanceSelect = function(selectEl) {
    if (!selectEl || selectEl.tagName !== 'SELECT') return null;
    if (selectEl.dataset.customEnhanced === 'true' || selectEl.dataset.noCustom === 'true') {
      return enhancedMap.get(selectEl) || null;
    }
    if (selectEl.multiple) return null;

    selectEl.classList.add('custom-hidden-select');
    selectEl.setAttribute('tabindex', '-1');
    selectEl.dataset.customEnhanced = 'true';

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-dropdown-wrapper';
    if (selectEl.id) wrapper.dataset.for = selectEl.id;

    // Report de classes spécifiques pour la mise en page
    if (selectEl.classList.contains('topbar-select')) wrapper.classList.add('topbar-dropdown');
    if (selectEl.style.width === '100%' || selectEl.classList.contains('admin-select') || selectEl.classList.contains('visual-edit-select')) {
      wrapper.classList.add('full-width');
    }

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-dropdown-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    if (selectEl.title) trigger.title = selectEl.title;

    const labelSpan = document.createElement('span');
    labelSpan.className = 'custom-dropdown-label';
    updateTriggerLabel(selectEl, labelSpan);

    const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrowSvg.setAttribute('class', 'custom-dropdown-arrow');
    arrowSvg.setAttribute('viewBox', '0 0 20 20');
    arrowSvg.setAttribute('fill', 'currentColor');
    arrowSvg.innerHTML = '<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />';

    trigger.append(labelSpan, arrowSvg);

    const menu = document.createElement('div');
    menu.className = 'custom-dropdown-menu';
    menu.setAttribute('role', 'listbox');

    const totalOptions = selectEl.querySelectorAll('option').length;
    let searchInput = null;

    if (totalOptions >= 10) {
      const searchWrap = document.createElement('div');
      searchWrap.className = 'custom-dropdown-search-wrap';
      searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.className = 'custom-dropdown-search-input';
      searchInput.placeholder = 'Rechercher…';
      searchWrap.appendChild(searchInput);
      menu.appendChild(searchWrap);

      searchInput.addEventListener('input', (e) => {
        renderMenuOptions(e.target.value);
      });
      searchInput.addEventListener('click', (e) => e.stopPropagation());
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
        e.stopPropagation();
      });
    }

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'custom-dropdown-options-list';
    menu.appendChild(optionsContainer);

    function renderMenuOptions(searchTerm = '') {
      optionsContainer.innerHTML = buildOptionsHtml(selectEl, searchTerm);
    }

    renderMenuOptions();

    function openDropdown() {
      // Ferme tous les autres menus personnalisés ouverts
      document.querySelectorAll('.custom-dropdown-wrapper.open').forEach(w => {
        if (w !== wrapper) {
          w.classList.remove('open', 'drop-up');
          const tr = w.querySelector('.custom-dropdown-trigger');
          if (tr) tr.setAttribute('aria-expanded', 'false');
        }
      });

      // Calcul de positionnement (drop-up si proche du bas de l'écran)
      const rect = trigger.getBoundingClientRect();
      const menuHeight = Math.min(280, (selectEl.options.length * 34) + 60);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < menuHeight && spaceAbove > spaceBelow) {
        wrapper.classList.add('drop-up');
      } else {
        wrapper.classList.remove('drop-up');
      }

      wrapper.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      if (searchInput) {
        setTimeout(() => {
          searchInput.value = '';
          renderMenuOptions('');
          searchInput.focus();
        }, 30);
      }
    }

    function closeDropdown() {
      wrapper.classList.remove('open', 'drop-up');
      trigger.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
      if (wrapper.classList.contains('open')) closeDropdown();
      else openDropdown();
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    optionsContainer.addEventListener('click', (e) => {
      const optEl = e.target.closest('.custom-dropdown-option');
      if (!optEl || optEl.classList.contains('disabled')) return;
      e.stopPropagation();

      const val = optEl.dataset.value;
      if (selectEl.value !== val) {
        selectEl.value = val;
        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        selectEl.dispatchEvent(new Event('input', { bubbles: true }));
      }
      updateTriggerLabel(selectEl, labelSpan);
      renderMenuOptions();
      closeDropdown();
      trigger.focus();
    });

    // Synchronisation sur changement programmatique ou externe
    selectEl.addEventListener('change', () => {
      updateTriggerLabel(selectEl, labelSpan);
      renderMenuOptions();
    });

    // Observer les mutations du select original (ajouts/suppressions d'options dynamiques)
    const observer = new MutationObserver(() => {
      updateTriggerLabel(selectEl, labelSpan);
      renderMenuOptions();
    });
    observer.observe(selectEl, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled', 'selected'] });

    wrapper.append(trigger, menu);

    // Insertion directe dans le DOM
    if (selectEl.nextSibling) {
      selectEl.parentNode.insertBefore(wrapper, selectEl.nextSibling);
    } else {
      selectEl.parentNode.appendChild(wrapper);
    }

    const instance = {
      wrapper,
      trigger,
      menu,
      refresh: () => {
        updateTriggerLabel(selectEl, labelSpan);
        renderMenuOptions();
      },
      close: closeDropdown,
      open: openDropdown,
      destroy: () => {
        observer.disconnect();
        wrapper.remove();
        selectEl.classList.remove('custom-hidden-select');
        selectEl.removeAttribute('tabindex');
        delete selectEl.dataset.customEnhanced;
      }
    };

    enhancedMap.set(selectEl, instance);
    return instance;
  };

  app.refreshCustomSelect = function(selectEl) {
    const inst = enhancedMap.get(selectEl);
    if (inst) inst.refresh();
    else if (selectEl && selectEl.dataset.customEnhanced !== 'true') app.enhanceSelect(selectEl);
  };

  app.enhanceAllSelects = function(root = document) {
    const selects = root.querySelectorAll('select:not([data-no-custom="true"]):not([data-custom-enhanced="true"])');
    selects.forEach(sel => {
      app.enhanceSelect(sel);
    });
  };
}

export function initialize(app) {
  // Fermeture au clic extérieur
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-dropdown-wrapper')) {
      document.querySelectorAll('.custom-dropdown-wrapper.open').forEach(w => {
        w.classList.remove('open', 'drop-up');
        const tr = w.querySelector('.custom-dropdown-trigger');
        if (tr) tr.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Fermeture par la touche Échap
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.custom-dropdown-wrapper.open').forEach(w => {
        w.classList.remove('open', 'drop-up');
        const tr = w.querySelector('.custom-dropdown-trigger');
        if (tr) {
          tr.setAttribute('aria-expanded', 'false');
          tr.focus();
        }
      });
    }
  });

  // Premier passage d'amélioration sur tous les selects existants
  app.enhanceAllSelects(document);

  // Observer global pour améliorer automatiquement les selects ajoutés dynamiquement
  const bodyObserver = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.addedNodes.length > 0) {
        m.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'SELECT') {
              app.enhanceSelect(node);
            } else if (node.querySelectorAll) {
              app.enhanceAllSelects(node);
            }
          }
        });
      }
    }
  });

  bodyObserver.observe(document.body, { childList: true, subtree: true });
}
