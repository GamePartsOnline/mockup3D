// Shared application state is supplied by the entry point.
export function register(app) {
app.runExportMugViews = async function runExportMugViews() {
  if (app.currentProductKey !== 'mug11oz') {
    document.querySelector('#productSelect').value = 'mug11oz';
    document.querySelector('#productSelect').dispatchEvent(new Event('change'));
    await new Promise(r => setTimeout(r, 120));
  }

  const overlayWasVisible = app.isOverlayVisible(), gridWasVisible = app.grid.visible;
  const scaleMultiplier = app.getSelectedResolution();
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  app.setOverlayVisible(false);
  app.grid.visible = false;

  const currentPixelRatio = app.renderer.getPixelRatio();
  const currentSize = new app.THREE.Vector2();
  app.renderer.getSize(currentSize);

  // Sauvegarde de la pose initiale de la caméra
  const savedPosition = app.camera.position.clone();
  const savedTarget = app.controls.target.clone();

  // Les 3 angles clés demandés : 90°, 225° et 270°
  // - 90° : Côté anse droite (visuel côté droit et anse visible à droite)
  // - 225° : Face trois-quarts (visuel central bien visible)
  // - 270° : Côté anse gauche (visuel côté gauche avec départ du wrap)
  const views = [
    { name: 'vue1-90deg-anse-droite', degrees: 90, label: '90°' },
    { name: 'vue2-225deg-face', degrees: 225, label: '225°' },
    { name: 'vue3-270deg-anse-gauche', degrees: 270, label: '270°' }
  ];

  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);

  for (let i = 0; i < views.length; i++) {
    const v = views[i];
    app.updateExportStatus(`Export vue ${i + 1}/3 (${v.label})…`);
    app.setViewAngle(v.degrees);
    app.camera.lookAt(app.controls.target);
    app.renderer.render(app.scene, app.camera);

    const a = document.createElement('a');
    a.download = `mockup-mug-vue-${i + 1}-${v.name}-${resLabel}-${Date.now()}.png`;
    a.href = app.renderer.domElement.toDataURL('image/png');
    document.body.append(a);
    a.click();
    a.remove();
    await new Promise(r => setTimeout(r, 350));
  }

  app.updateExportStatus('Prêt');

  // Restauration de la caméra et de la résolution
  app.camera.position.copy(savedPosition);
  app.controls.target.copy(savedTarget);
  app.controls.update();

  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  app.renderer.setSize(currentSize.x, currentSize.y, false);
  app.renderer.render(app.scene, app.camera);

  app.setOverlayVisible(overlayWasVisible);
  app.grid.visible = gridWasVisible;
  app.showToast(`3 vues Mug exportées (90°, 225°, 270°) - ${resLabel.toUpperCase()}`);
};

app.runExportKeychainViews = async function runExportKeychainViews() {
  const overlayWasVisible = app.isOverlayVisible(), gridWasVisible = app.grid.visible;
  const scaleMultiplier = app.getSelectedResolution();
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  app.setOverlayVisible(false);
  app.grid.visible = false;

  const currentSize = new app.THREE.Vector2();
  app.renderer.getSize(currentSize);

  const savedPosition = app.camera.position.clone();
  const savedTarget = app.controls.target.clone();

  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);

  const views = [
    { name: 'face-a', degrees: 90, label: 'Face A' },
    { name: 'face-b', degrees: 270, label: 'Face B' }
  ];

  for (let i = 0; i < views.length; i++) {
    const v = views[i];
    app.updateExportStatus(`Export vue ${i + 1}/2 (${v.label})…`);
    app.setViewAngle(v.degrees);
    app.camera.lookAt(app.controls.target);
    app.renderer.render(app.scene, app.camera);

    const a = document.createElement('a');
    a.download = `mockup-${app.currentProductKey}-${v.name}-${resLabel}-${Date.now()}.png`;
    a.href = app.renderer.domElement.toDataURL('image/png');
    document.body.append(a);
    a.click();
    a.remove();
    await new Promise(r => setTimeout(r, 350));
  }

  app.updateExportStatus('Prêt');

  app.camera.position.copy(savedPosition);
  app.controls.target.copy(savedTarget);
  app.controls.update();

  app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  app.renderer.setSize(currentSize.x, currentSize.y, false);
  app.renderer.render(app.scene, app.camera);

  app.setOverlayVisible(overlayWasVisible);
  app.grid.visible = gridWasVisible;
  app.showToast(`2 vues Porte-clés exportées (Face A, Face B) - ${resLabel.toUpperCase()}`);
};

app.runExportAll = async function runExportAll() {
  const btn = document.querySelector('#exportAll');
  if (btn) btn.disabled = true;
  document.querySelector('#exportStatus').textContent = 'Export complet...';
  try {
    if (app.currentProductKey === 'mug11oz') {
      await app.runExportMugViews();
    } else if (app.currentProductKey.startsWith('keychain')) {
      await app.runExportKeychainViews();
    } else {
      app.runExportPng();
    }
    await app.exportMp4();
    app.showToast('Tous les exports sont terminés !');
  } catch(e) {
    console.error(e);
  } finally {
    if (btn) btn.disabled = false;
    document.querySelector('#exportStatus').textContent = 'Prêt';
  }
};
}

export function initialize(app) {
document.querySelector('#exportMugViews')?.addEventListener('click', app.runExportMugViews);
document.querySelector('#exportMugViewsSide')?.addEventListener('click', app.runExportMugViews);
document.querySelector('#exportMp4Side')?.addEventListener('click', () => {
  document.querySelector('#exportMp4')?.click();
});
document.querySelector('#exportMp4').onclick = app.exportMp4;
document.querySelector('#exportAll')?.addEventListener('click', app.runExportAll);
}
