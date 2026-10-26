// Shared application state is supplied by the entry point.
export function register(app) {
app.exportMp4Compat = async function exportMp4Compat(button, buttonSide, status, oldText, download = true) {
  const setButtonsDisabled = (val) => {
    if (button) button.disabled = val;
    if (buttonSide) buttonSide.disabled = val;
  };
  const setButtonsText = (txt) => {
    if (button) button.textContent = txt;
    if (buttonSide) buttonSide.textContent = txt;
  };

  if (!window.MediaRecorder || !app.renderer.domElement.captureStream) {
    app.showToast('Export video indisponible dans ce navigateur');
    setButtonsDisabled(false);
    return;
  }
  const startPosition = app.camera.position.clone();
  const chunks = [];
  const stream = app.renderer.domElement.captureStream(30);
  const mimeType = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm'].find(type => MediaRecorder.isTypeSupported(type));
  if (!mimeType) {
    app.showToast('Enregistrement video indisponible');
    setButtonsDisabled(false);
    return;
  }
  let recorder = null;
  try {
    recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 5_000_000 });
  } catch (e) {
    app.showToast('Erreur initialisation enregistreur');
    setButtonsDisabled(false);
    return;
  }
  recorder.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };

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
    recorder.start(250);
    const start = performance.now();
    const duration = 6000;
    await new Promise(resolve => {
      const recordFrame = now => {
        const progress = Math.min(1, (now - start) / duration);
        app.applyExportPose(progress, startPosition);
        app.renderer.render(app.scene, app.camera);
        setButtonsText(`Enregistrement… ${Math.round(progress * 100)} %`);
        if (status) status.textContent = 'Creation locale de la video';
        if (progress < 1) requestAnimationFrame(recordFrame);
        else resolve();
      };
      requestAnimationFrame(recordFrame);
    });

    const stopped = new Promise(resolve => recorder.addEventListener('stop', resolve, { once: true }));
    recorder.stop();
    await stopped;
    stream.getTracks().forEach(track => track.stop());

    setButtonsText('Conversion en MP4…');
    if (status) status.textContent = 'Premiere conversion : quelques secondes';
    const [{ FFmpeg }, { fetchFile }] = await Promise.all([import('@ffmpeg/ffmpeg'), import('@ffmpeg/util')]);
    const ffmpeg = new FFmpeg();
    await ffmpeg.load({ coreURL: '/ffmpeg-core.js', wasmURL: '/ffmpeg-core.wasm' });
    await ffmpeg.writeFile('rotation.webm', await fetchFile(new Blob(chunks, { type: mimeType })));
    const exitCode = await ffmpeg.exec(['-i', 'rotation.webm', '-vf', 'scale=1280:-2', '-r', '30', '-an', '-c:v', 'libx264', '-profile:v', 'baseline', '-level', '3.1', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'rotation.mp4']);
    if (exitCode !== 0) throw new Error(`FFmpeg a retourne le code ${exitCode}`);
    const data = await ffmpeg.readFile('rotation.mp4');
    if (!data?.length) throw new Error('Le fichier MP4 est vide');
    const blob = new Blob([data], { type: 'video/mp4' });
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
    ffmpeg.terminate();
    return blob;
  } catch (error) {
    console.error(error);
    app.showToast('La conversion MP4 a echoue');
    if (!download) throw error;
  } finally {
    try {
      if (recorder && recorder.state !== 'inactive') recorder.stop();
    } catch (e) {}
    try {
      stream.getTracks().forEach(track => track.stop());
    } catch (e) {}
    try {
      app.camera.position.copy(startPosition);
      app.camera.lookAt(app.controls.target);
      app.controls.enabled = true;
      app.controls.update();
      app.setOverlayVisible(overlayWasVisible);
      if (app.grid) app.grid.visible = gridWasVisible;
      if (app.wrapPreview) app.wrapPreview.visible = wrapWasVisible;
      app.renderer.render(app.scene, app.camera);
    } catch (e) {}
    setButtonsDisabled(false);
    setButtonsText(oldText);
    if (status) status.textContent = 'PNG haute qualite ou MP4 de 6 secondes';
  }
};

app.showToast = function showToast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2400); };
}

export function initialize(app) {

}
