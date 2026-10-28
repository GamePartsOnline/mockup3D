// Gestion de la compatibilité des visuels par objet / produit

export const PRODUCTS_LIST = [
  { key: 'mug11oz', label: 'Mug 11oz' },
  { key: 'tshirt3D', label: 'T-shirt 3D' },
  { key: 'cap', label: 'Casquette 3D' },
  { key: 'cushion', label: 'Housse de coussin' },
  { key: 'poster', label: 'Poster 80 × 60' },
  { key: 'photoFrame', label: 'Poster A4 (Sans cadre)' },
  { key: 'puzzle', label: 'Puzzle 120 pièces' },
  { key: 'coaster', label: 'Sous-verre carré' },
  { key: 'coasterRound', label: 'Sous-verre rond' },
  { key: 'mousePad', label: 'Tapis de souris' },
  { key: 'pencilCase', label: 'Trousse zippée' },
  { key: 'keychainRect', label: 'Porte-clés rectangle' },
  { key: 'keychainRound', label: 'Porte-clés rond' },
  { key: 'keychainHeart', label: 'Porte-clés Cœur' },
  { key: 'arcadeCabinet', label: "Borne d'Arcade" },
  { key: 'eventWristband', label: 'Bracelet événementiel' }
];

export function isVisualCompatible(visual, currentProductKey) {
  if (!currentProductKey || currentProductKey === 'showcase') return true;
  const list = visual?.compatibleProducts;
  if (!Array.isArray(list) || !list.length || list.includes('all')) return true;
  return list.includes(currentProductKey);
}

export function getCompatibilityLabel(visual) {
  const list = visual?.compatibleProducts;
  if (!Array.isArray(list) || !list.length || list.includes('all')) return 'Tous objets';
  if (list.length === 1) {
    const item = PRODUCTS_LIST.find(p => p.key === list[0]);
    return item ? item.label : list[0];
  }
  return `${list.length} objets`;
}

export function register(app) {
  app.isVisualCompatible = isVisualCompatible;
  app.getCompatibilityLabel = getCompatibilityLabel;
  app.productScopeFilter = 'scoped'; // 'scoped' = pour ce produit, 'all' = tout le catalogue

  app.openCompatibilityModal = function(visual, onSaved) {
    let overlay = document.querySelector('#compatModalOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'compatModalOverlay';
      overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(15,23,42,0.78);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;';
      document.body.appendChild(overlay);
    }
    overlay.hidden = false; overlay.style.display = 'flex';

    const currentTargets = Array.isArray(visual.compatibleProducts) && visual.compatibleProducts.length
      ? visual.compatibleProducts
      : ['all'];
    const isAll = currentTargets.includes('all');

    overlay.innerHTML = `
      <div style="background:#1e293b; color:#f8fafc; border:1px solid #334155; border-radius:14px; max-width:480px; width:100%; padding:20px; box-shadow:0 20px 40px rgba(0,0,0,0.5); font-family:Inter,sans-serif;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #334155; padding-bottom:10px;">
          <div>
            <strong style="font-size:14px; display:block;">Objets compatibles</strong>
            <small style="color:#94a3b8; font-size:11px;">${visual.name}</small>
          </div>
          <button type="button" id="closeCompatBtn" style="background:transparent; border:0; color:#94a3b8; font-size:16px; cursor:pointer; font-weight:700;">✕</button>
        </div>
        <div style="margin-bottom:14px;">
          <label style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:12px; margin-bottom:10px; cursor:pointer; color:#c084fc;">
            <input type="checkbox" id="compatAllCheckbox" ${isAll ? 'checked' : ''} />
            Valide pour tous les objets (recommandé)
          </label>
        </div>
        <div id="compatProductsGrid" style="display:grid; grid-template-columns:1fr 1fr; gap:6px; max-height:260px; overflow-y:auto; margin-bottom:16px; padding-right:4px; ${isAll ? 'opacity:0.4; pointer-events:none;' : ''}">
          ${PRODUCTS_LIST.map(p => `
            <label style="display:flex; align-items:center; gap:6px; font-size:11px; padding:4px 6px; background:#0f172a; border-radius:6px; cursor:pointer;">
              <input type="checkbox" class="compat-prod-check" value="${p.key}" ${(!isAll && currentTargets.includes(p.key)) ? 'checked' : ''} />
              ${p.label}
            </label>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px;">
          <button type="button" id="cancelCompatBtn" style="padding:8px 14px; font-size:12px; border-radius:6px; border:1px solid #475569; background:#0f172a; color:#cbd5e1; cursor:pointer;">Annuler</button>
          <button type="button" id="saveCompatBtn" style="padding:8px 16px; font-size:12px; font-weight:700; border-radius:6px; border:0; background:#8b5cf6; color:#ffffff; cursor:pointer;">Enregistrer</button>
        </div>
      </div>
    `;

    const close = () => { overlay.hidden = true; overlay.style.display = 'none'; };
    overlay.querySelector('#closeCompatBtn').onclick = close;
    overlay.querySelector('#cancelCompatBtn').onclick = close;

    const allBox = overlay.querySelector('#compatAllCheckbox');
    const grid = overlay.querySelector('#compatProductsGrid');
    allBox.onchange = () => {
      grid.style.opacity = allBox.checked ? '0.4' : '1';
      grid.style.pointerEvents = allBox.checked ? 'none' : 'auto';
    };

    overlay.querySelector('#saveCompatBtn').onclick = async () => {
      let chosen = [];
      if (allBox.checked) {
        chosen = ['all'];
      } else {
        overlay.querySelectorAll('.compat-prod-check:checked').forEach(cb => chosen.push(cb.value));
        if (!chosen.length) chosen = ['all'];
      }
      visual.compatibleProducts = chosen;
      close();
      if (onSaved) await onSaved(chosen);
      app.showToast(`Compatibilité mise à jour : ${getCompatibilityLabel(visual)}`);
    };
  };
}

export function initialize(app) {
  // Rien d'obligatoire à l'initialisation, piloté par visual-library
}
