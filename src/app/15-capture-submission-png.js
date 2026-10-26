// Shared application state is supplied by the entry point.
export function register(app) {
app.captureSubmissionPng = async function captureSubmissionPng() {
  const size = new app.THREE.Vector2();
  app.renderer.getSize(size);
  const pixelRatio = app.renderer.getPixelRatio();
  const overlayVisible = app.isOverlayVisible();
  const gridVisible = app.grid.visible;
  const wrapVisible = app.wrapPreview.visible;
  try {
    app.setOverlayVisible(false);
    app.grid.visible = false;
    app.wrapPreview.visible = false;
    app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * 2);
    app.renderer.render(app.scene, app.camera);
    return app.renderer.domElement.toDataURL('image/png');
  } finally {
    app.renderer.setPixelRatio(pixelRatio);
    app.renderer.setSize(size.x, size.y, false);
    app.grid.visible = gridVisible;
    app.wrapPreview.visible = wrapVisible;
    app.setOverlayVisible(overlayVisible);
    app.renderer.render(app.scene, app.camera);
  }
};

app.blobToDataUrl = function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
};

app.submissionWrapDataUrl = function submissionWrapDataUrl() {
  const source = app.texture?.image;
  if (!source?.toDataURL) throw new Error('Ajoutez une image ou un texte avant l’envoi.');
  return source.toDataURL('image/png');
};
}

export function initialize(app) {
document.querySelector('#submitCreation')?.addEventListener('click', async () => {
  if (!app.clientMode || app.submissionInProgress) return;
  app.submissionInProgress = true;
  const button = document.querySelector('#submitCreation');
  const initialText = button.textContent;
  button.disabled = true;
  let ownerExportStarted = false;
  try {
    if (!app.texture) throw new Error('Ajoutez une image ou un texte avant l’envoi.');
    const statusResponse = await fetch('/api/submissions/status');
    const status = await statusResponse.json();
    if (!status.configured) throw new Error('Envoi mail non configuré. Contactez Graph2Print.');
    ownerExportStarted = true;
    document.querySelector('.workspace').inert = true;
    document.querySelector('#submissionMask').hidden = false;
    app.suppressClientWatermarkForOwnerExport = true;
    app.buildTexture();
    app.updateSceneBackground();
    button.textContent = 'Préparation des fichiers…';
    const key = app.currentProductKey;
    const files = [];
    const addPng = (name, data) => files.push({ name, type: 'image/png', data });
    const printable = app.product.printable || app.productDefinitions[key].printable || [210, 95];
    addPng('wrap-' + key + '-' + printable.join('x') + 'mm.png', app.submissionWrapDataUrl());
    if (app.heartTexture?.image) addPng('coeur-tshirt.png', app.heartTexture.image.toDataURL('image/png'));
    if (key === 'tshirt3D') {
      const source = app.texture.image;
      for (const [index, side] of ['a', 'b'].entries()) {
        const page = document.createElement('canvas');
        page.width = source.width / 2;
        page.height = source.height;
        page.getContext('2d').drawImage(source, index * page.width, 0, page.width, page.height, 0, 0, page.width, page.height);
        addPng('wrap-tshirt-face-' + side + '-' + printable.join('x') + 'mm.png', page.toDataURL('image/png'));
      }
    }
    const savedPosition = app.camera.position.clone();
    const savedTarget = app.controls.target.clone();
    const savedAngle = document.querySelector('#viewAngle').value;
    try {
      addPng('mockup-' + key + '-apercu.png', await app.captureSubmissionPng());
      const views = key === 'mug11oz'
        ? [{ name: '90deg', angle: 90 }, { name: '225deg', angle: 225 }, { name: '270deg', angle: 270 }]
        : (key.startsWith('keychain') || key === 'tshirt3D')
          ? [{ name: 'face-a', angle: 90 }, { name: 'face-b', angle: 270 }]
          : [];
      for (const view of views) {
        app.setViewAngle(view.angle);
        addPng('mockup-' + key + '-' + view.name + '.png', await app.captureSubmissionPng());
      }
    } finally {
      app.camera.position.copy(savedPosition);
      app.controls.target.copy(savedTarget);
      app.controls.update();
      document.querySelector('#viewAngle').value = savedAngle;
      app.renderer.render(app.scene, app.camera);
    }
    button.textContent = 'Création de la vidéo…';
    let videoUnavailable = false;
    try {
      const video = await app.exportMp4({ download: false });
      if (video?.size) files.push({ name: 'animation-' + key + '.mp4', type: 'video/mp4', data: await app.blobToDataUrl(video) });
      else videoUnavailable = true;
    } catch (error) {
      console.warn('MP4 unavailable:', error);
      videoUnavailable = true;
    }
    button.textContent = 'Envoi en cours…';
    const response = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: app.productDefinitions[key].name, files })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "L'envoi a échoué.");
    app.showToast(videoUnavailable ? 'Création envoyée, vidéo indisponible' : 'Création et exports envoyés');
  } catch (error) {
    console.error(error);
    app.showToast(error.message || "L'envoi a échoué.");
  } finally {
    if (ownerExportStarted) {
      app.suppressClientWatermarkForOwnerExport = false;
      app.buildTexture();
      app.updateSceneBackground();
      document.querySelector('#submissionMask').hidden = true;
    }
    app.submissionInProgress = false;
    document.querySelector('.workspace').inert = false;
    button.textContent = initialText;
    app.updateClientGuide();
  }
});
}
