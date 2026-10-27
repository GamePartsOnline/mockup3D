// Shared application state is supplied by the entry point.
export function register(app) {
app.applyExportPose = function applyExportPose(progress, startPosition) {
  const mode = document.querySelector('#rotationMode').value, reverse = document.querySelector('#reverse').checked ? -1 : 1;
  const offset = startPosition.clone().sub(app.controls.target), angle = mode === 'swing' ? Math.sin(progress * Math.PI * 2) * .8 * reverse : progress * Math.PI * 2 * reverse;
  offset.applyAxisAngle(app.rotationAxes[mode], angle); app.camera.position.copy(app.controls.target).add(offset); app.camera.lookAt(app.controls.target);
};

app.setViewAngle = function setViewAngle(degrees) { const radius = Math.hypot(app.camera.position.x - app.controls.target.x, app.camera.position.z - app.controls.target.z); const angle = app.THREE.MathUtils.degToRad(degrees); app.camera.position.x = app.controls.target.x + Math.cos(angle) * radius; app.camera.position.z = app.controls.target.z + Math.sin(angle) * radius; app.camera.lookAt(app.controls.target); app.controls.update(); document.querySelector('#viewAngle').value = degrees; document.querySelector('#angleValue').value = `${degrees}°`; };

app.setBackgroundImageFromUrl = function setBackgroundImageFromUrl(url, label) {
  const img = new Image();
  img.onload = () => {
    app.bgImageObj = img;
    const opCtrl = document.getElementById('bgOpacityControl');
    if (opCtrl) opCtrl.hidden = false;
    app.updateSceneBackground();
    if (label) app.showToast(label);
  };
  img.src = url;
};

app.getSelectedResolution = function getSelectedResolution() {
  return Number(app.resSelectTop?.value || app.resSelectSide?.value || 2);
};

app.updateExportStatus = function updateExportStatus(text) {
  const stTop = document.querySelector('#exportStatus');
  const stSide = document.querySelector('#exportStatusSide');
  if (stTop) stTop.textContent = text;
  if (stSide) stSide.textContent = text;
};

app.runExportPng = function runExportPng() {
  const overlayWasVisible = app.isOverlayVisible(), gridWasVisible = app.grid.visible;
  const scaleMultiplier = app.getSelectedResolution();
  app.setOverlayVisible(false);
  app.grid.visible = false;

  const currentPixelRatio = app.renderer.getPixelRatio();
  const currentSize = new app.THREE.Vector2();
  app.renderer.getSize(currentSize);

  // Application du multiplicateur de résolution
  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);
  app.renderer.render(app.scene, app.camera);

  const a = document.createElement('a');
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  a.download = `mockup-${app.currentProductKey}-${resLabel}-${Date.now()}.png`;
  a.href = app.renderer.domElement.toDataURL('image/png');
  document.body.append(a);
  a.click();
  a.remove();

  // Restauration de la résolution d'écran standard
  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  app.renderer.setSize(currentSize.x, currentSize.y, false);
  app.renderer.render(app.scene, app.camera);

  app.setOverlayVisible(overlayWasVisible);
  app.grid.visible = gridWasVisible;
  app.showToast(`Aperçu PNG ${resLabel.toUpperCase()} téléchargé`);
};
}

export function initialize(app) {
if (document.querySelector('#arcadeGlow')) {
  document.querySelector('#arcadeGlow').onchange = e => {
    const isGlowing = e.target.checked;
    const mats = [app.product.joystick1Material, app.product.joystick2Material, app.product.button1Material, app.product.button2Material];
    mats.forEach(mat => {
      if (mat) {
        if (isGlowing) {
          mat.emissive.copy(mat.color);
          mat.emissiveIntensity = 5.0;
        } else {
          mat.emissive.setHex(0x000000);
        }
        mat.needsUpdate = true;
      }
    });
  };
}
document.querySelectorAll('.quick-palette .swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const col = swatch.dataset.color;
    document.querySelector('#handleColor').value = col;
    document.querySelector('#innerColor').value = col;
    if (app.product.handleMaterial) { app.product.handleMaterial.color.set(col); app.product.handleMaterial.needsUpdate = true; }
    if (app.product.innerMaterial) { app.product.innerMaterial.color.set(col); app.product.innerMaterial.needsUpdate = true; }
  });
});
document.querySelector('#sceneColor').oninput = () => app.requestUpdateSceneBackground();
document.querySelector('#showGrid').onchange = e => app.grid.visible = e.target.checked;
document.querySelector('#showShadow')?.addEventListener('change', e => {
  app.floor.visible = e.target.checked;
  app.showToast(e.target.checked ? 'Ombre au sol activée' : 'Ombre au sol masquée');
});
document.querySelector('#showWatermark')?.addEventListener('change', () => {
  if (app.clientMode) { app.watermarkControl.checked = true; return; }
  app.updateSceneBackground();
  app.buildTexture();
  app.showToast(document.querySelector('#showWatermark').checked ? 'Filigrane activé' : 'Filigrane retiré');
});
document.querySelector('#speed').oninput = e => { app.controls.autoRotateSpeed = Number(e.target.value) / 9.6 * (document.querySelector('#reverse').checked ? -1 : 1); document.querySelector('#speedValue').value = `${(Number(e.target.value) / 12).toFixed(1)}×`; };
document.querySelector('#reverse').onchange = e => app.controls.autoRotateSpeed = Math.abs(app.controls.autoRotateSpeed) * (e.target.checked ? -1 : 1);
app.rotationAxes = { horizontal: new app.THREE.Vector3(0,1,0), vertical: new app.THREE.Vector3(1,0,0), diagonal: new app.THREE.Vector3(1,1,0).normalize(), swing: new app.THREE.Vector3(0,1,0) };
app.swingAngle = 0;
app.swingDirection = 1;
app.previousFrameTime = performance.now();
document.querySelectorAll('[data-angle]').forEach(button => button.onclick = () => app.setViewAngle(Number(button.dataset.angle)));
document.querySelector('#bgPresetPodium')?.addEventListener('click', () => {
  app.setBackgroundImageFromUrl('/background-podium.jpg', 'Studio podium coloré appliqué');
  if (app.currentProductKey === 'mug11oz') {
    app.camera.position.set(0, 1.85, 4.8);
    app.controls.target.set(0, 0.05, 0);
    app.controls.update();
  }
});
document.querySelector('#bgPresetMug')?.addEventListener('click', () => {
  app.setBackgroundImageFromUrl('/background-mug.jpg', 'Mise en scène cuisine moderne appliquée');
});
document.querySelector('#bgPresetBureau')?.addEventListener('click', () => {
  app.setBackgroundImageFromUrl('/background-bureau.jpg', 'Mise en scène bureau avec ordi appliquée');
  if (app.currentProductKey === 'mousePad') {
    app.camera.position.set(0, 3.1, 3.4);
    app.controls.target.set(0, -0.05, 0.15);
    app.controls.update();
  }
});
document.querySelector('#bgPresetSalon')?.addEventListener('click', () => {
  app.setBackgroundImageFromUrl('/background-salon.jpg?v=4', 'Simulation salon moderne appliquée');
});
document.querySelector('#bgInput').onchange = e => { const file = e.target.files[0]; if (!file) return; const url = URL.createObjectURL(file); app.setBackgroundImageFromUrl(url, 'Image de fond appliquée'); };
if (document.querySelector('#bgOpacity')) { document.querySelector('#bgOpacity').oninput = e => { document.querySelector('#bgOpacityValue').value = `${e.target.value} %`; app.requestUpdateSceneBackground(); }; }
document.querySelector("#clearBg").onclick = () => { app.bgImageObj = null; app.backgroundTexture?.dispose(); app.backgroundTexture = null; const opCtrl = document.getElementById("bgOpacityControl"); if (opCtrl) opCtrl.hidden = true; app.updateSceneBackground(); document.querySelector("#bgInput").value = ""; };
app.resSelectTop = document.querySelector('#exportResolution');
app.resSelectSide = document.querySelector('#exportResolutionSide');
app.resSelectTop?.addEventListener('change', () => { if (app.resSelectSide) app.resSelectSide.value = app.resSelectTop.value; });
app.resSelectSide?.addEventListener('change', () => { if (app.resSelectTop) app.resSelectTop.value = app.resSelectSide.value; });
document.querySelector('#exportPng')?.addEventListener('click', app.runExportPng);
document.querySelector('#exportPngSide')?.addEventListener('click', app.runExportPng);
}
