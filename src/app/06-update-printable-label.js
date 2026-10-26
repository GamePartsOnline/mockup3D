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
  for (const file of files) {
    const url = URL.createObjectURL(file);
    await new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        app.imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          img,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          x: 0,
          y: 0,
          rotation: 0,
          fitMode: 'cover',
          side: app.product.zones ? app.product.zones[0].id : 'both'
        });
        resolve();
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      img.src = url;
    });
  }
  e.target.value = '';
  app.activeImageIndex = app.imagesList.length - 1;
  app.renderImagesList();
  app.syncActiveControls();
  app.buildTexture();
  app.setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  app.showToast(`${files.length} image(s) ajoutée(s)`);
});
document.querySelector('#productSelect').onchange = e => {
  if (app.clientMode && !e.detail?.initial) app.clientSelectedProduct = true;
  app.currentProductKey = e.target.value; app.scene.remove(app.product.group); app.product.group.traverse(child => child.geometry?.dispose());
  const definition = app.productDefinitions[app.currentProductKey]; app.product = definition.create(); app.scene.add(app.product.group);
  document.querySelector('#productDimensions').textContent = Array.isArray(definition.dimensions) ? `${definition.dimensions.join(' × ')} mm` : definition.dimensions;
  document.querySelector('#productIcon').textContent = definition.icon || (app.currentProductKey === 'mousePad' ? '▰' : app.currentProductKey === 'mug11oz' ? '☕' : '👕');
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
    'puzzle': '15,00 €',
    'coaster': '8,00 €',
    'coasterRound': '8,00 €',
    'pencilCase': '11,00 €',
    'cushion': '17,00 €',
    'arcadeCabinet': '2090,00 €',
    'eventWristband': 'À définir'
  };
  const priceEl = document.querySelector('#productPrice');
  if (priceEl) priceEl.textContent = priceMap[app.currentProductKey] || '-- €';
  
  const isMug = app.currentProductKey === 'mug11oz';
  const isArcade = app.currentProductKey === 'arcadeCabinet';
  
  document.querySelector('#handleColorWrap').hidden = !isMug;
  document.querySelector('#innerColorWrap').hidden = !isMug;
  document.querySelector('#quickPalette').hidden = !isMug;
  
  const arcadeControlsWrap = document.querySelector('#arcadeControlsWrap');
  if (arcadeControlsWrap) arcadeControlsWrap.hidden = !isArcade;
  const arcadeGlowWrap = document.querySelector('#arcadeGlowWrap');
  if (arcadeGlowWrap) arcadeGlowWrap.hidden = !isArcade;

  document.querySelector('#baseColor').value = '#ffffff'; document.querySelector('#topColor').value = '#ffffff';
  if (isMug) {
    document.querySelector('#handleColor').value = '#ffffff';
    document.querySelector('#innerColor').value = '#ffffff';
  }
  if (isArcade) {
    if (document.querySelector('#j1Color')) document.querySelector('#j1Color').value = '#ff0000';
    if (document.querySelector('#j2Color')) document.querySelector('#j2Color').value = '#0055ff';
    if (document.querySelector('#b1Color')) document.querySelector('#b1Color').value = '#0055ff';
    if (document.querySelector('#b2Color')) document.querySelector('#b2Color').value = '#ff0000';
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
  
  app.floor.position.y = isArcade ? -0.835 : -0.09;
  
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
  app.buildTexture();
}));
}
