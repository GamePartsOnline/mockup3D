const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const replacement = \unction updateSceneBackground() {
  const showWatermark = document.querySelector('#showWatermark')?.checked ?? true;
  const bgColor = document.querySelector('#sceneColor')?.value || '#e9edf0';
  const opInput = document.querySelector('#bgOpacity');
  const opacityVal = opInput ? Number(opInput.value) / 100 : 1;

  if (!showWatermark && !bgImageObj) {
    sceneWatermarkTexture?.dispose();
    sceneWatermarkTexture = null;
    scene.background = new THREE.Color(bgColor);
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth * 2 || 2048;
  canvas.height = window.innerHeight * 2 || 2048;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (bgImageObj) {
    ctx.save();
    ctx.globalAlpha = opacityVal;
    const scale = Math.max(canvas.width / bgImageObj.width, canvas.height / bgImageObj.height);
    const w = bgImageObj.width * scale;
    const h = bgImageObj.height * scale;
    ctx.drawImage(bgImageObj, (canvas.width - w)/2, (canvas.height - h)/2, w, h);
    ctx.restore();
  }

  if (showWatermark && isWatermarkLoaded && watermarkImg.width > 0 && product.type !== '3d-decal') {
    ctx.save();
    const wmCanvas = document.createElement('canvas');
    wmCanvas.width = watermarkImg.width;
    wmCanvas.height = watermarkImg.height;
    const wmCtx = wmCanvas.getContext('2d');
    wmCtx.drawImage(watermarkImg, 0, 0);
    wmCtx.globalCompositeOperation = 'source-in';
    wmCtx.fillStyle = '#425260';
    wmCtx.fillRect(0, 0, wmCanvas.width, wmCanvas.height);

    ctx.globalAlpha = 0.08;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-25 * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    const stepX = 340, stepY = 220, wmWidth = 220;
    const wmHeight = Math.round(wmWidth * (watermarkImg.height / watermarkImg.width));

    for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
      const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
      for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
        ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
      }
    }
    ctx.restore();
  }

  sceneWatermarkTexture?.dispose();
  sceneWatermarkTexture = new THREE.CanvasTexture(canvas);
  sceneWatermarkTexture.colorSpace = THREE.SRGBColorSpace;
  scene.background = sceneWatermarkTexture;
}\;

code = code.replace(/function updateSceneBackground\(\) \{[\s\S]+?scene\.background = sceneWatermarkTexture;\\r?\\n\}/, replacement);
fs.writeFileSync('src/main.js', code);

