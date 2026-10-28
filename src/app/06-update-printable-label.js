// Shared application state is supplied by the entry point.
export function register(app) {
app.updatePrintableLabel = function updatePrintableLabel() {
  const printable = app.product.printable || app.productDefinitions[app.currentProductKey].printable;
  if (app.currentProductKey === 'tshirt3D') {
    const orientation = document.querySelector('#tshirtOrientation').value === 'landscape' ? 'paysage' : 'portrait';
    document.querySelector('#productDimensions').textContent = 'Zone devant et dos : A4 ' + orientation + ' (' + printable.join(' × ') + ' mm)';
  }
  if (Array.isArray(printable)) {
    document.querySelector('#wrapDimensions').textContent = 'Visuel déroulé (' + printable.join(' × ') + ' mm)';
  }
};
}

export function initialize(app) {
document.querySelector('#imageInput').addEventListener('change', async e => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  if (app.clientMode) app.proposeClientImages?.(files);
  for (const file of files) {
    const url = URL.createObjectURL(file);
    await new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        app.imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name, img, scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, rotation: 0, fitMode: 'contain',
          side: app.product.zones ? app.product.zones[0].id : 'both'
        });
        resolve();
      };
      img.onerror = () => { URL.revokeObjectURL(url); resolve(); };
      img.src = url;
    });
  }
  e.target.value = '';
  app.activeImageIndex = app.imagesList.length - 1;
  app.renderImagesList(); app.syncActiveControls(); app.buildTexture();
  app.setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  app.showToast(app.clientMode ? `${files.length} image(s) ajoutée(s) (soumise(s) à validation catalogue)` : `${files.length} image(s) ajoutée(s)`);
});
document.querySelector('#productSelect').onchange = e => {
  if (app.clientMode && !e.detail?.initial) app.clientSelectedProduct = e.target.value !== 'showcase';
  app.currentProductKey = e.target.value; app.scene.remove(app.product.group); app.product.group.traverse(child => child.geometry?.dispose());
  const definition = app.productDefinitions[app.currentProductKey]; app.product = definition.create(); app.scene.add(app.product.group);
  document.querySelector('#productDimensions').textContent = Array.isArray(definition.dimensions) ? `${definition.dimensions.join(' × ')} mm` : definition.dimensions;
  document.querySelector('#tshirtOrientationWrap').hidden = app.currentProductKey !== 'tshirt3D';
  document.querySelector('#loadTshirtExample').hidden = app.currentProductKey !== 'tshirt3D';
  if (app.currentProductKey === 'tshirt3D') document.querySelector('#tshirtOrientation').value = 'portrait';
  app.updatePrintableLabel();

  const priceMap = {
    'mug11oz': '13,00 €',
    'mousePad': '10,00 €',
    'keychainRect': '6,00 €',
    'keychainRound': '6,00 €',
    'keychainHeart': '6,00 €',
    'tshirt3D': '17,00 € - 21,00 €',
    'cap': '15,00 €',
    'poster': '25,00 €',
    'puzzle': '15,00 €',
    'coaster': '8,00 €',
    'coasterRound': '8,00 €',
    'pencilCase': '11,00 €',
    'cushion': '17,00 €',
    'arcadeCabinet': '2290,00 € (Décoration spécifique)',
    'eventWristband': '6,50 €'
  };
  const priceContainer = document.querySelector('#productPriceContainer');
  const priceEl = document.querySelector('#productPrice');
  if (priceContainer) {
    priceContainer.style.display = app.currentProductKey === 'showcase' ? 'none' : 'inline-block';
    if (priceEl && app.currentProductKey !== 'showcase') priceEl.textContent = priceMap[app.currentProductKey] || '-- €';
  }

  const isMug = app.currentProductKey === 'mug11oz';
  const isArcade = app.currentProductKey === 'arcadeCabinet';
  const isShowcase = app.currentProductKey === 'showcase';
  if (app.controls) {
    app.controls.enableRotate = !isShowcase;
    app.controls.enablePan = !isShowcase;
    app.controls.enableZoom = !isShowcase;
  }
  if (isShowcase && app.backgroundTexture) { app.backgroundTexture.dispose(); app.backgroundTexture = null; }
  app.updateSceneBackground?.();
  const btnShowcase = document.querySelector('#btnShowcaseTable'), btnBack = document.querySelector('#btnBackToShowroom');
  if (btnShowcase) { btnShowcase.style.opacity = isShowcase ? '0.6' : '1'; btnShowcase.title = isShowcase ? 'Showroom 3D actif' : 'Retourner au Showroom 3D'; }
  if (btnBack) btnBack.style.display = isShowcase ? 'none' : 'inline-flex';
  const nameEl = document.querySelector('#activeProductName'); if (nameEl) nameEl.textContent = isShowcase ? 'Le Showroom 3D' : (definition.name || 'Objet personnalisé');

  document.querySelector('#handleColorWrap').hidden = !isMug;
  document.querySelector('#innerColorWrap').hidden = !isMug;
  document.querySelector('#quickPalette').hidden = !isMug;

  const stockNote = document.querySelector('#stockNote');
  if (stockNote) stockNote.style.display = (isArcade || isShowcase) ? 'none' : 'block';
  const topColorWrap = document.querySelector('#topColorWrap');
  if (topColorWrap) topColorWrap.style.display = (isArcade || isShowcase) ? 'none' : 'flex';
  const baseColorWrap = document.querySelector('#baseColorWrap');
  if (baseColorWrap) baseColorWrap.style.display = (isArcade || isShowcase || !app.product.hasBaseColor) ? 'none' : 'flex';

  const arcadeControlsWrap = document.querySelector('#arcadeControlsWrap');
  if (arcadeControlsWrap) arcadeControlsWrap.hidden = !isArcade;
  const arcadeGlowWrap = document.querySelector('#arcadeGlowWrap');
  if (arcadeGlowWrap) arcadeGlowWrap.hidden = !isArcade;

  document.querySelector('#baseColor').value = '#ffffff'; document.querySelector('#topColor').value = '#ffffff';
  if (isMug) { document.querySelector('#handleColor').value = '#ffffff'; document.querySelector('#innerColor').value = '#ffffff'; }
  if (isArcade) {
    ['#j1Color','#b2Color'].forEach(id => { const el = document.querySelector(id); if (el) el.value = '#ff0000'; });
    ['#j2Color','#b1Color'].forEach(id => { const el = document.querySelector(id); if (el) el.value = '#0055ff'; });
    if (document.querySelector('#arcadeGlow')) document.querySelector('#arcadeGlow').checked = false;
  }

  const isTwoSided = !!app.product.twoSided;
  const hasZones = !!app.product.zones;

  const viewFaceA = document.querySelector('#viewFaceA');
  const viewFaceB = document.querySelector('#viewFaceB');
  if (viewFaceA) viewFaceA.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';
  if (viewFaceB) viewFaceB.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';

  // Custom labels for view buttons if zones
  if (viewFaceA) viewFaceA.innerHTML = hasZones ? '<span style="font-weight:900;margin-right:4px;">A</span> Face Avant' : '<span style="font-weight:900;margin-right:4px;">A</span> Face A';
  if (viewFaceB) viewFaceB.innerHTML = hasZones ? '<span style="font-weight:900;margin-right:4px;">B</span> Côtés' : '<span style="font-weight:900;margin-right:4px;">B</span> Face B';

  const textSideSelect = document.querySelector('#textSideSelect');
  if (textSideSelect) {
    textSideSelect.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';
    if (hasZones) {
      textSideSelect.innerHTML = '<option value="both">Toutes zones</option>' + app.product.zones.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
    } else {
      textSideSelect.innerHTML = '<option value="both">2 faces</option><option value="A">Face A</option><option value="B">Face B</option>' + (app.currentProductKey === 'tshirt3D' ? '<option value="heart">Cœur (petit)</option>' : '');
    }
  }

  app.floor.position.y = isMug ? -0.002 : (isArcade || isShowcase) ? -0.835 : -0.09;

  app.renderImagesList();
  if (app.imagesList.length > 0 || app.textParams.text.trim()) app.buildTexture();
  app.homeView(); app.setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  app.updateWrapPreviewWidget(app.texture?.image);
  app.updateClientGuide();
};
document.querySelector('#tshirtOrientation').addEventListener('change', e => {
  if (app.currentProductKey !== 'tshirt3D') return;
  app.product.setPrintOrientation(e.target.value);
  app.updatePrintableLabel();
  if (app.imagesList.length || app.textParams.text.trim()) app.buildTexture();
  app.showToast('Zone A4 ' + (e.target.value === 'landscape' ? 'paysage' : 'portrait') + ' appliquée aux deux faces');
});
document.querySelector('#showTransformFrame').addEventListener('change', e => {
  app.setOverlayVisible(e.target.checked);
  if (e.target.checked) app.updateOverlay();
  app.showToast(e.target.checked ? 'Cadre de sélection activé' : 'Cadre de sélection masqué');
});
document.querySelector('#repeatPattern')?.addEventListener('change', e => {
  const active = app.getActiveImage();
  if (!active) return;
  active.repeatPattern = e.target.checked;
  const repCtrl = document.querySelector('#repeatCountControl');
  if (repCtrl) repCtrl.hidden = !e.target.checked;
  app.requestBuildTexture();
  app.showToast(e.target.checked ? 'Mode motif répété activé' : 'Mode motif répété désactivé');
});
document.querySelector('#repeatCount')?.addEventListener('input', e => {
  const active = app.getActiveImage();
  if (!active) return;
  active.repeatCount = Number(e.target.value) || 3;
  const repVal = document.querySelector('#repeatCountValue');
  if (repVal) repVal.value = `${active.repeatCount} × ${active.repeatCount}`;
  app.requestBuildTexture();
});
document.querySelectorAll('[data-fit]').forEach(btn => btn.onclick = () => {
  const active = app.getActiveImage();
  if (!active) return;
  active.fitMode = btn.dataset.fit;
  document.querySelectorAll('[data-fit]').forEach(x => x.classList.toggle('active', x === btn));
  app.resetActiveImage(true);
});
app.sliders = { scale: ['scaleValue', v => `${v} %`, v => v / 100], posX: ['posXValue', v => `${v} %`, v => v / 100], posY: ['posYValue', v => `${v} %`, v => v / 100], rotation: ['rotationValue', v => `${v}°`, Number] };
Object.entries(app.sliders).forEach(([id, [out, format, convert]]) => document.querySelector(`#${id}`).addEventListener('input', e => {
  const active = app.getActiveImage();
  if (!active) return;
  if (id === 'scale') {
    const val = convert(e.target.value);
    active.scale = val;
    active.scaleX = val;
    active.scaleY = val;
  } else {
    active[id === 'posX' ? 'x' : id === 'posY' ? 'y' : id] = convert(e.target.value);
  }
  document.querySelector(`#${out}`).value = format(e.target.value);
  app.requestBuildTexture();
}));
}
