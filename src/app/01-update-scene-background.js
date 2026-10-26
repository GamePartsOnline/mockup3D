// Shared application state is supplied by the entry point.
export function register(app) {
app.updateSceneBackground = function updateSceneBackground() {
  const showWatermark = !app.suppressClientWatermarkForOwnerExport && (app.clientMode || (document.querySelector("#showWatermark")?.checked ?? true));
  const bgColor = document.querySelector("#sceneColor")?.value || "#e9edf0";
  const opInput = document.querySelector("#bgOpacity");
  const opacityVal = opInput ? Number(opInput.value) / 100 : 1;

  if (!showWatermark && !app.bgImageObj) {
    app.sceneWatermarkTexture?.dispose();
    app.sceneWatermarkTexture = null;
    app.scene.background = new app.THREE.Color(bgColor);
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth > 0 ? window.innerWidth * 2 : 2048;
  canvas.height = window.innerHeight > 0 ? window.innerHeight * 2 : 2048;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (app.bgImageObj) {
    ctx.save();
    ctx.globalAlpha = opacityVal;
    const scale = Math.max(canvas.width / app.bgImageObj.width, canvas.height / app.bgImageObj.height);
    const w = app.bgImageObj.width * scale;
    const h = app.bgImageObj.height * scale;
    ctx.drawImage(app.bgImageObj, (canvas.width - w)/2, (canvas.height - h)/2, w, h);
    ctx.restore();
  }

  if (showWatermark && app.isWatermarkLoaded && app.watermarkImg.width > 0) {
    ctx.save();
    const wmCanvas = document.createElement("canvas");
    wmCanvas.width = app.watermarkImg.width;
    wmCanvas.height = app.watermarkImg.height;
    const wmCtx = wmCanvas.getContext("2d");
    wmCtx.drawImage(app.watermarkImg, 0, 0);
    wmCtx.globalCompositeOperation = "source-in";
    wmCtx.fillStyle = "#425260";
    wmCtx.fillRect(0, 0, wmCanvas.width, wmCanvas.height);

    ctx.globalAlpha = 0.08;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-25 * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    const stepX = 340, stepY = 220, wmWidth = 220;
    const wmHeight = Math.round(wmWidth * (app.watermarkImg.height / app.watermarkImg.width));

    for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
      const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
      for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
        ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
      }
    }
    ctx.restore();
  }

  app.sceneWatermarkTexture?.dispose();
  app.sceneWatermarkTexture = new app.THREE.CanvasTexture(canvas);
  app.sceneWatermarkTexture.colorSpace = app.THREE.SRGBColorSpace;
  app.scene.background = app.sceneWatermarkTexture;
};
}

export function initialize(app) {
app.clientMode = document.documentElement.dataset.mode !== 'admin';
app.clientSelectedProduct = false;
app.clientDesignConfirmed = false;
app.submissionInProgress = false;
app.suppressClientWatermarkForOwnerExport = false;
document.body.classList.toggle('client-mode', app.clientMode);
document.querySelector('#submitCreation').hidden = !app.clientMode;
document.querySelector('#clientGuide').hidden = !app.clientMode;
document.querySelector('#clientModeLink').href = '/';
document.querySelector('#modeLabel').textContent = app.clientMode ? 'ESPACE CLIENT' : 'ATELIER PROPRIÉTAIRE';
for (const id of ['topColor','baseColor','handleColor','innerColor','j1Color','j2Color','b1Color','b2Color']) {
  const input = document.getElementById(id);
  if (input) {
    input.disabled = true;
    input.title = 'Non disponible pour le moment — objets blancs uniquement';
  }
}
document.querySelectorAll('.quick-palette .swatch').forEach(button => {
  button.disabled = true;
  button.title = 'Non disponible pour le moment — objets blancs uniquement';
});
app.watermarkControl = document.querySelector('#showWatermark');
if (app.clientMode) { app.watermarkControl.checked = true; app.watermarkControl.disabled = true; }
if (window.matchMedia('(max-width: 900px)').matches) {
  document.querySelector('.workspace').classList.add('right-collapsed');
  document.querySelector('#wrapPreviewWidget').classList.add('collapsed');
  if (!app.clientMode) document.querySelector('.workspace').classList.add('left-collapsed');
}
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  const localBadge = document.querySelector('#localBadge');
  if (localBadge) localBadge.style.display = 'none';


}
app.viewer = document.querySelector('#viewer');
app.renderer = new app.THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
app.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
app.renderer.shadowMap.enabled = true;
app.renderer.shadowMap.type = app.THREE.PCFSoftShadowMap;
app.renderer.outputColorSpace = app.THREE.SRGBColorSpace;
app.renderer.toneMapping = app.THREE.LinearToneMapping;
app.renderer.toneMappingExposure = 1.0;
app.viewer.append(app.renderer.domElement);
app.scene = new app.THREE.Scene();
app.scene.background = new app.THREE.Color(0xe9edf0);
app.camera = new app.THREE.PerspectiveCamera(34, 1, 0.1, 100);
app.camera.position.set(3.4, 2.8, 3.8);
app.scene.add(app.camera);
app.sceneWatermarkTexture = null;
app.bgImageObj = null;
app.backgroundTexture = null;
app.watermarkImg = new Image();
app.watermarkImg.src = '/logo-graph2print.png';
app.isWatermarkLoaded = false;
app.watermarkImg.onload = () => {
  app.isWatermarkLoaded = true;
  app.updateSceneBackground();
  if (app.imagesList.length > 0 || app.textParams.text.trim()) app.buildTexture();
};
app.wrapPreview = new app.THREE.Sprite(new app.THREE.SpriteMaterial({ transparent: true, depthTest: false, depthWrite: false }));
app.wrapPreview.position.set(0, -1.28, -5);
app.wrapPreview.visible = false;
app.wrapPreview.renderOrder = 20;
app.controls = new app.OrbitControls(app.camera, app.renderer.domElement);
app.controls.enableDamping = false;
app.controls.autoRotate = false;
app.controls.minDistance = 2.2;
app.controls.maxDistance = 8;
}
