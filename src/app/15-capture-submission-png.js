// Shared application state is supplied by the entry point.
export function register(app) {
app.captureSubmissionPng = async function captureSubmissionPng() {
  const size = new app.THREE.Vector2();
  app.renderer.getSize(size);
  const pixelRatio = app.renderer.getPixelRatio();
  const overlayVisible = app.isOverlayVisible();
  const gridVisible = app.grid?.visible ?? false;
  const wrapVisible = app.wrapPreview?.visible ?? false;
  try {
    app.setOverlayVisible(false);
    if (app.grid) app.grid.visible = false;
    if (app.wrapPreview) app.wrapPreview.visible = false;
    app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * 2);
    app.renderer.render(app.scene, app.camera);
    return app.renderer.domElement.toDataURL('image/png');
  } finally {
    app.renderer.setPixelRatio(pixelRatio);
    app.renderer.setSize(size.x, size.y, false);
    if (app.grid) app.grid.visible = gridVisible;
    if (app.wrapPreview) app.wrapPreview.visible = wrapVisible;
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

app.executeSubmission = async function executeSubmission(clientData) {
  if (app.submissionInProgress) return;
  app.submissionInProgress = true;
  const button = document.querySelector('#submitCreation');
  const initialText = button ? button.textContent : 'Envoyer ma création';
  if (button) {
    button.disabled = true;
    button.textContent = 'Préparation des fichiers…';
  }
  let ownerExportStarted = false;
  try {
    if (app.currentProductKey === 'showcase') throw new Error('Veuillez d’abord choisir un objet à personnaliser.');
    if (!app.texture && (app.imagesList?.length > 0 || app.textParams?.text?.trim())) {
      app.buildTexture?.();
    }
    if (!app.texture) throw new Error('Ajoutez une image ou un texte sur votre objet avant l’envoi.');

    const statusResponse = await fetch('/api/submissions/status');
    const status = await statusResponse.json();
    if (!status.configured) throw new Error('Envoi non configuré. Contactez Graph2Print.');
    ownerExportStarted = true;
    const ws = document.querySelector('.workspace');
    if (ws) ws.inert = true;
    const mask = document.querySelector('#submissionMask');
    if (mask) mask.hidden = false;
    app.suppressClientWatermarkForOwnerExport = true;
    app.buildTexture?.();
    app.updateSceneBackground?.();
    const key = app.currentProductKey;
    const files = [];
    const addPng = (name, data) => files.push({ name, type: 'image/png', data });
    const printable = app.product?.printable || app.productDefinitions?.[key]?.printable || [210, 95];
    addPng('wrap-' + key + '-' + printable.join('x') + 'mm.png', app.submissionWrapDataUrl());
    if (app.heartTexture?.image) addPng('coeur-tshirt.png', app.heartTexture.image.toDataURL('image/png'));
    if (key === 'tshirt3D' && app.texture?.image) {
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
    const angleEl = document.querySelector('#viewAngle');
    const savedAngle = angleEl ? angleEl.value : 45;
    try {
      addPng('mockup-' + key + '-apercu.png', await app.captureSubmissionPng());
      const views = key === 'mug11oz'
        ? [{ name: '90deg', angle: 90 }, { name: '225deg', angle: 225 }, { name: '270deg', angle: 270 }]
        : (key.startsWith('keychain') || key === 'tshirt3D')
          ? [{ name: 'face-a', angle: 90 }, { name: 'face-b', angle: 270 }]
          : [];
      for (const view of views) {
        app.setViewAngle?.(view.angle);
        addPng('mockup-' + key + '-' + view.name + '.png', await app.captureSubmissionPng());
      }
    } finally {
      app.camera.position.copy(savedPosition);
      app.controls.target.copy(savedTarget);
      app.controls.update();
      if (angleEl) angleEl.value = savedAngle;
      app.renderer.render(app.scene, app.camera);
    }
    if (button) button.textContent = 'Envoi des fichiers…';
    try {
      const vPromise = app.exportMp4({ download: false });
      const tPromise = new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 4000));
      const video = await Promise.race([vPromise, tPromise]);
      if (video?.size) files.push({ name: 'animation-' + key + '.mp4', type: 'video/mp4', data: await app.blobToDataUrl(video) });
    } catch {}

    const response = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: app.productDefinitions?.[key]?.name || key, files, client: clientData })
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || "L'envoi a échoué.");
    app.showToast(result.message || 'Votre création a été transmise à l’atelier Graph2Print.');
    return true;
  } catch (error) {
    console.error(error);
    app.showToast(error.message || "L'envoi a échoué.");
    throw error;
  } finally {
    if (ownerExportStarted) {
      app.suppressClientWatermarkForOwnerExport = false;
      app.buildTexture?.();
      app.updateSceneBackground?.();
      const mask = document.querySelector('#submissionMask');
      if (mask) mask.hidden = true;
    }
    app.submissionInProgress = false;
    const ws = document.querySelector('.workspace');
    if (ws) ws.inert = false;
    if (button) button.textContent = initialText;
    app.updateClientGuide?.();
  }
};
}

export function initialize(app) {
  document.querySelector('#submitCreation')?.addEventListener('click', () => {
    if (app.submissionInProgress) return;
    if (app.currentProductKey === 'showcase') {
      app.showToast('Veuillez d’abord choisir un objet à personnaliser.');
      app.openShop2D?.();
      return;
    }
    if (!app.texture && (app.imagesList?.length > 0 || app.textParams?.text?.trim())) {
      app.buildTexture?.();
    }
    if (!app.texture) {
      app.showToast('Veuillez ajouter une image ou un texte avant d’envoyer votre création.');
      return;
    }
    app.openClientOrderModal?.();
  });
}
