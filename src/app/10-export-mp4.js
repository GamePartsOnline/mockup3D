// Shared application state is supplied by the entry point.
export function register(app) {
app.exportMp4 = async function exportMp4({ download = true } = {}) {
  if (app.clientMode && download) { app.showToast("L'export direct est réservé à l'atelier. Cliquez sur 'Valider ma création'."); return null; }
  const button = document.querySelector('#exportMp4');
  const buttonSide = document.querySelector('#exportMp4Side');
  const status = document.querySelector('#exportStatus');
  const oldText = button?.textContent || 'Export MP4 (Rotation)';
  const setButtonsDisabled = (val) => {
    if (button) button.disabled = val;
    if (buttonSide) buttonSide.disabled = val;
  };
  const setButtonsText = (txt) => {
    if (button) button.textContent = txt;
    if (buttonSide) buttonSide.textContent = txt;
  };

  if (!window.VideoEncoder || !window.VideoFrame) {
    return await app.exportMp4Compat(button, buttonSide, status, oldText, download);
    return;
  }

  // Dimensions paires garanties
  let width = app.renderer.domElement.width - (app.renderer.domElement.width % 2);
  let height = app.renderer.domElement.height - (app.renderer.domElement.height % 2);
  if (width <= 0 || height <= 0) {
    width = 1280;
    height = 720;
  }

  // Profils H264 testes par ordre de preference
  const candidateProfiles = [
    { codec: 'avc1.4d002a', width, height, bitrate: 6_000_000, framerate: 30, avc: { format: 'avc' } },
    { codec: 'avc1.42001f', width, height, bitrate: 5_000_000, framerate: 30, avc: { format: 'avc' } }
  ];

  let config = null;
  for (const candidate of candidateProfiles) {
    try {
      const support = await VideoEncoder.isConfigSupported(candidate);
      if (support?.supported) {
        config = candidate;
        break;
      }
    } catch (e) {}
  }

  if (!config) {
    return await app.exportMp4Compat(button, buttonSide, status, oldText, download);
    return;
  }

  const startPosition = app.camera.position.clone();
  const target = new app.ArrayBufferTarget();
  const muxer = new app.Muxer({ target, video: { codec: 'avc', width, height }, fastStart: 'in-memory', firstTimestampBehavior: 'offset' });
  let encodeError = null;
  let encoder = null;

  try {
    encoder = new VideoEncoder({
      output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
      error: error => { encodeError = error; }
    });
    encoder.configure(config);
  } catch (err) {
    console.warn('Initialisation VideoEncoder echouee, passage au mode compatibilite :', err);
    return await app.exportMp4Compat(button, buttonSide, status, oldText, download);
    return;
  }

  const overlayWasVisible = typeof app.isOverlayVisible === 'function' ? app.isOverlayVisible() : false;
  const gridWasVisible = app.grid ? app.grid.visible : false;
  const wrapWasVisible = app.wrapPreview ? app.wrapPreview.visible : false;

  app.setOverlayVisible(false);
  if (app.grid) app.grid.visible = false;
  if (app.wrapPreview) app.wrapPreview.visible = false;
  setButtonsDisabled(true);
  app.controls.enabled = false;
  app.controls.autoRotate = false;
  const autoRotateEl = document.querySelector('#autoRotate');
  if (autoRotateEl) autoRotateEl.checked = false;

  try {
    for (let i = 0; i < 180; i++) {
      app.applyExportPose(i / 180, startPosition);
      app.renderer.render(app.scene, app.camera);
      const frame = new VideoFrame(app.renderer.domElement, {
        timestamp: Math.round(i * 1_000_000 / 30),
        duration: Math.round(1_000_000 / 30)
      });
      encoder.encode(frame, { keyFrame: i % 60 === 0 });
      frame.close();
      const pct = Math.round((i + 1) / 1.8);
      setButtonsText(`Creation MP4… ${pct} %`);
      if (status) status.textContent = 'Gardez cette fenetre ouverte';
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    await encoder.flush();
    if (encodeError) throw encodeError;
    muxer.finalize();

    const blob = new Blob([target.buffer], { type: 'video/mp4' });
    if (download) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `animation-${app.currentProductKey}-${Date.now()}.mp4`;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      app.showToast('Animation MP4 enregistree');
    }
    return blob;
  } catch (error) {
    console.error(error);
    app.showToast('Impossible de creer le MP4');
    if (!download) throw error;
  } finally {
    if (encoder) {
      try {
        if (encoder.state !== 'closed') encoder.close();
      } catch (e) {
        console.warn('Erreur fermeture encoder :', e);
      }
    }
    try {
      app.camera.position.copy(startPosition);
      app.camera.lookAt(app.controls.target);
      app.controls.enabled = true;
      app.controls.update();
      app.setOverlayVisible(overlayWasVisible);
      if (app.grid) app.grid.visible = gridWasVisible;
      if (app.wrapPreview) app.wrapPreview.visible = wrapWasVisible;
      app.renderer.render(app.scene, app.camera);
    } catch (e) {
      console.warn('Erreur restauration camera/scene :', e);
    }
    setButtonsDisabled(false);
    setButtonsText(oldText);
    if (status) status.textContent = 'PNG haute qualite ou MP4 de 6 secondes';
  }
};
}

export function initialize(app) {

}
