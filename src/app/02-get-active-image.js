// Shared application state is supplied by the entry point.
export function register(app) {
app.getActiveImage = function getActiveImage() {
  if (app.activeImageIndex >= 0 && app.activeImageIndex < app.imagesList.length) {
    const item = app.imagesList[app.activeImageIndex];
    if (item.scaleX === undefined) item.scaleX = item.scale ?? 1;
    if (item.scaleY === undefined) item.scaleY = item.scale ?? 1;
    return item;
  }
  return null;
};

app.syncActiveControls = function syncActiveControls() {
  const active = app.getActiveImage();
  const adjustmentsSection = document.querySelector('#adjustments');
  const activeLabel = document.querySelector('#activeImageLabel');
  if (!active) {
    adjustmentsSection?.classList.add('disabled');
    if (activeLabel) activeLabel.textContent = 'Aucune image active';
    app.updateActiveImageResolutionBadge?.();
    return;
  }
  adjustmentsSection?.classList.remove('disabled');
  if (activeLabel) activeLabel.textContent = `Image active : ${active.name}`;
  app.updateActiveImageResolutionBadge?.();

  const avgScale = Math.round(((active.scaleX + active.scaleY) / 2) * 100);
  document.querySelector('#scale').value = avgScale;
  document.querySelector('#scaleValue').value = `${avgScale} %`;
  document.querySelector('#posX').value = Math.round(active.x * 100);
  document.querySelector('#posXValue').value = `${Math.round(active.x * 100)} %`;
  document.querySelector('#posY').value = Math.round(active.y * 100);
  document.querySelector('#posYValue').value = `${Math.round(active.y * 100)} %`;
  document.querySelector('#rotation').value = Math.round(active.rotation);
  document.querySelector('#rotationValue').value = `${Math.round(active.rotation)}°`;

  const repBox = document.querySelector('#repeatPattern');
  const repCtrl = document.querySelector('#repeatCountControl');
  if (repBox) repBox.checked = !!active.repeatPattern;
  if (repCtrl) repCtrl.hidden = !active.repeatPattern;
  const repInput = document.querySelector('#repeatCount');
  if (repInput) {
    repInput.value = active.repeatCount || 3;
    const repVal = document.querySelector('#repeatCountValue');
    if (repVal) repVal.value = `${active.repeatCount || 3} × ${active.repeatCount || 3}`;
  }

  document.querySelectorAll('[data-fit]').forEach(x => x.classList.toggle('active', x.dataset.fit === active.fitMode));
};

app.selectActiveImage = function selectActiveImage(index) {
  if (index >= 0 && index < app.imagesList.length) {
    app.activeImageIndex = index;
  } else {
    app.activeImageIndex = app.imagesList.length - 1;
  }
  app.renderImagesList();
  app.syncActiveControls();
  app.setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  app.updateOverlay();
};

app.removeImageByIndex = function removeImageByIndex(index, e) {
  if (e) e.stopPropagation();
  const removed = app.imagesList[index];
  if (removed?.img.src.startsWith('blob:')) URL.revokeObjectURL(removed.img.src);
  app.imagesList.splice(index, 1);
  if (app.activeImageIndex >= app.imagesList.length) {
    app.activeImageIndex = app.imagesList.length - 1;
  }
  app.renderImagesList();
  app.syncActiveControls();
  app.buildTexture();
  app.setOverlayVisible(document.querySelector('#showTransformFrame').checked);
};
}

export function initialize(app) {
app.controls.target.set(0, -.04, 0);
app.scene.add(new app.THREE.HemisphereLight(0xffffff, 0xe2e8f0, 1.8));
app.key = new app.THREE.DirectionalLight(0xffffff, 1.9);
app.key.position.set(-3, 5, 4);
app.key.castShadow = true;
app.key.shadow.mapSize.set(2048, 2048);
app.scene.add(app.key);
app.fill = new app.THREE.DirectionalLight(0xffffff, 1.2);
app.fill.position.set(4, 2, -3);
app.scene.add(app.fill);
app.frontLight = new app.THREE.DirectionalLight(0xffffff, 0.35);
app.frontLight.position.set(0, 2, 5);
app.scene.add(app.frontLight);
app.floor = new app.THREE.Mesh(new app.THREE.CircleGeometry(5, 64), new app.THREE.ShadowMaterial({ color: 0x55616b, opacity: .15 }));
app.floor.rotation.x = -Math.PI / 2;
app.floor.position.y = -.09;
app.floor.receiveShadow = true;
app.scene.add(app.floor);
app.productDefinitions = {
  showcase: app.showcaseTableProduct,
  mousePad: app.mousePadProduct,
  mug11oz: app.mug11ozProduct,
  keychainRect: app.keychainRectProduct,
  keychainRound: app.keychainRoundProduct,
  keychainHeart: app.keychainHeartProduct,
  tshirt3D: app.tshirt3DProduct,
  cap: app.capProduct,
  poster: app.posterProduct,
  photoFrame: app.photoFrameProduct,
  puzzle: app.puzzleProduct,
  coaster: app.coasterProduct,
  coasterRound: app.coasterRoundProduct,
  pencilCase: app.pencilCaseProduct,
  cushion: app.cushionProduct,
  arcadeCabinet: app.arcadeCabinetProduct,
  eventWristband: app.eventWristbandProduct
};
app.defaultProductKey = document.querySelector('#productSelect')?.value || 'showcase';
app.currentProductKey = app.defaultProductKey;
app.product = app.productDefinitions[app.defaultProductKey].create();
app.scene.add(app.product.group);
app.grid = new app.THREE.GridHelper(8, 24, 0x617078, 0x9aa6ac);
app.grid.position.y = -.085;
app.grid.visible = false;
app.scene.add(app.grid);
app.imagesList = [];
app.activeImageIndex = -1;
app.heartTexture = null;
app.texture = null;
app.fitMode = 'cover';
app.params = { scale: 1, x: 0, y: 0, rotation: 0 };
app.textParams = { text: '', color: '#111820', font: 'Inter, sans-serif', size: 60, bold: false, italic: false, align: 'center', x: 0, y: 0, rotation: 0 };
app.overlay = document.querySelector('#transformOverlay');
app.box = document.querySelector('#transformBox');
app.rotateHandle = document.querySelector('#rotateHandle');
app.rotateStem = document.querySelector('#rotateStem');
app.handles = [...document.querySelectorAll('.resize-handle')];
app.edgeHandles = [...document.querySelectorAll('.edge-handle')];
}
