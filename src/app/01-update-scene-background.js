// Shared application state is supplied by the entry point.
export function register(app) {
app.updateSceneBackground = function updateSceneBackground() {
  if (!app.scene) return;
  const showWatermark = !app.suppressClientWatermarkForOwnerExport && (app.clientMode || (document.querySelector("#showWatermark")?.checked ?? true));
  const bgColor = document.querySelector("#sceneColor")?.value || "#e9edf0";
  const opInput = document.querySelector("#bgOpacity");
  const opacityVal = opInput ? Number(opInput.value) / 100 : 1;

  const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';

  if (!showWatermark && !app.bgImageObj) {
    app.sceneWatermarkTexture?.dispose();
    app.sceneWatermarkTexture = null;
    app.scene.background = new app.THREE.Color(bgColor);
    const sf = app.scene?.getObjectByName('studioFloor');
    if (sf?.material) { sf.material.map = null; sf.material.color.set(isDark ? 0x000000 : 0xdde3ea); sf.material.needsUpdate = true; }
    return;
  }

  const targetW = Math.min(window.innerWidth > 0 ? window.innerWidth : 1920, 1920);
  const targetH = Math.min(window.innerHeight > 0 ? window.innerHeight : 1080, 1080);
  if (!app._bgCanvas) app._bgCanvas = document.createElement("canvas");
  const canvas = app._bgCanvas;
  if (canvas.width !== targetW) canvas.width = targetW;
  if (canvas.height !== targetH) canvas.height = targetH;
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
    if (!app._wmCanvas) app._wmCanvas = document.createElement("canvas");
    app._wmCanvas.width = app.watermarkImg.width;
    app._wmCanvas.height = app.watermarkImg.height;
    const wmCtx = app._wmCanvas.getContext("2d");
    wmCtx.clearRect(0, 0, app._wmCanvas.width, app._wmCanvas.height);
    wmCtx.drawImage(app.watermarkImg, 0, 0);
    wmCtx.globalCompositeOperation = "source-in";
    wmCtx.fillStyle = isDark ? "#94a3b8" : "#425260";
    wmCtx.fillRect(0, 0, app._wmCanvas.width, app._wmCanvas.height);

    ctx.globalAlpha = isDark ? 0.08 : 0.08;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-25 * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    const stepX = 340, stepY = 220, wmWidth = 220;
    const wmHeight = Math.round(wmWidth * (app.watermarkImg.height / app.watermarkImg.width));

    for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
      const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
      for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
        ctx.drawImage(app._wmCanvas, px + offsetX, py, wmWidth, wmHeight);
      }
    }
    ctx.restore();
  }

  if (!app.sceneWatermarkTexture || app.sceneWatermarkTexture.image !== canvas) {
    app.sceneWatermarkTexture?.dispose();
    app.sceneWatermarkTexture = new app.THREE.CanvasTexture(canvas);
    app.sceneWatermarkTexture.colorSpace = app.THREE.SRGBColorSpace;
  } else {
    app.sceneWatermarkTexture.needsUpdate = true;
  }
  app.scene.background = app.sceneWatermarkTexture;

  const sf = app.scene?.getObjectByName('studioFloor');
  if (sf?.material && !sf.userData?.customFloor) {
    if (showWatermark && app.sceneWatermarkTexture) {
      sf.material.map = app.sceneWatermarkTexture;
      sf.material.color.set(0xffffff);
    } else {
      sf.material.map = null;
      sf.material.color.set(isDark ? 0x000000 : 0xdde3ea);
    }
    sf.material.needsUpdate = true;
  }
};
let rafBgId = null;
app.requestUpdateSceneBackground = function requestUpdateSceneBackground() {
  if (rafBgId) return;
  rafBgId = requestAnimationFrame(() => {
    rafBgId = null;
    app.updateSceneBackground();
  });
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
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const clientLink = document.querySelector('#clientModeLink');
if (clientLink) {
  clientLink.href = app.clientMode ? '/admin' : '/';
  clientLink.textContent = app.clientMode ? 'Retour Atelier (Admin)' : 'Interface Client';
  if (app.clientMode && !isLocal) clientLink.style.display = 'none';
}
document.querySelector('#modeLabel').textContent = app.clientMode ? 'Espace Client' : 'Atelier de création';
if (app.clientMode) {
  ['topColor','baseColor'].forEach(id => { const el = document.getElementById(id); if (el) { el.disabled = true; el.title = 'Objets blancs uniquement'; } });
}
app.watermarkControl = document.querySelector('#showWatermark');
if (app.clientMode) { app.watermarkControl.checked = true; app.watermarkControl.disabled = true; }
const savedTheme = localStorage.getItem('mockup3d_theme') || 'light';
const applyTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  app._wmCanvas = null;
  const btn = document.querySelector('#themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? 'Mode Jour' : 'Mode Nuit';
  const clientBtn = document.querySelector('#clientThemeToggle');
  if (clientBtn) clientBtn.textContent = theme === 'dark' ? 'Mode Jour' : 'Mode Nuit';
  localStorage.setItem('mockup3d_theme', theme);
  if (!app.bgImageObj) {
    const sceneColorInput = document.querySelector('#sceneColor');
    if (sceneColorInput) sceneColorInput.value = theme === 'dark' ? '#000000' : '#e9edf0';
  }
  if (app.floor?.material) {
    app.floor.material.color.set(theme === 'dark' ? 0x000000 : 0x55616b);
    app.floor.material.needsUpdate = true;
  }
  app.updateSceneBackground();
};
applyTheme(savedTheme);
const clientThemeBtn = document.querySelector('#clientThemeToggle');
if (clientThemeBtn) {
  if (app.clientMode) clientThemeBtn.style.display = 'inline-flex';
  clientThemeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
document.querySelector('#themeToggle')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
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
app.controls.minDistance = 1.6;
app.controls.maxDistance = 10;
applyTheme(savedTheme);
}
