// Shared application state is supplied by the entry point.
export function register(app) {
app.buildTexture = function buildTexture() {
  const hasText = app.textParams.text.trim().length > 0;
  const hasImages = app.imagesList.length > 0;
  if (!hasImages && !hasText) {
    app.product.clearDecals?.(); app.texture?.dispose(); app.texture = null; app.heartTexture?.dispose(); app.heartTexture = null; app.product.topMaterial.map = null; app.product.topMaterial.needsUpdate = true; app.wrapPreview.material.map = null; app.wrapPreview.material.needsUpdate = true; app.updateWrapPreviewWidget(null); app.updateClientGuide(); return;
  }
  const surfaceColor = document.querySelector('#topColor')?.value || '#ffffff';

  const isTwoSided = !!app.product.twoSided;
  const isMultiZone = !!app.product.zones;
  const canvas = document.createElement('canvas');

  canvas.width = isMultiZone ? 3072 : (isTwoSided ? 3200 : 1600);
  canvas.height = isMultiZone ? 2048 : Math.round(1600 / app.product.printAspect);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (app.product.type !== '3d-decal') {
    ctx.fillStyle = surfaceColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const showWatermark = !app.suppressClientWatermarkForOwnerExport && (app.clientMode || (document.querySelector('#showWatermark')?.checked ?? true));
  if (showWatermark && app.isWatermarkLoaded && app.watermarkImg.width > 0 && app.product.type !== '3d-decal') {
    ctx.save();
    const wmCanvas = document.createElement('canvas');
    wmCanvas.width = app.watermarkImg.width;
    wmCanvas.height = app.watermarkImg.height;
    const wmCtx = wmCanvas.getContext('2d');
    wmCtx.drawImage(app.watermarkImg, 0, 0);
    wmCtx.globalCompositeOperation = 'source-in';
    wmCtx.fillStyle = '#111820';
    wmCtx.fillRect(0, 0, wmCanvas.width, wmCanvas.height);

    ctx.globalAlpha = 0.12;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-25 * Math.PI / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    const stepX = 320;
    const stepY = 200;
    const wmWidth = 190;
    const wmHeight = Math.round(wmWidth * (app.watermarkImg.height / app.watermarkImg.width));

    for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
      const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
      for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
        ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
      }
    }
    ctx.restore();
  }

  app.imagesList.forEach(item => {
    if (!item.img || (app.currentProductKey === 'tshirt3D' && item.side === 'heart')) return;
    const sx = item.scaleX ?? item.scale ?? 1;
    const sy = item.scaleY ?? item.scale ?? 1;
    const imageRatio = item.img.width / item.img.height;

    let targetZones = [];
    if (app.product.zones) {
      targetZones = (item.side === 'both' || !item.side) ? app.product.zones : app.product.zones.filter(z => z.id === item.side);
    } else {
      const sides = !isTwoSided ? [0] : (item.side === 'A' ? [0] : (item.side === 'B' ? [1] : [0, 1]));
      targetZones = sides.map(s => ({ col: s, row: 0, width: 1600, height: canvas.height }));
    }

    targetZones.forEach(zone => {
      const zoneWidth = isMultiZone ? 1024 : 1600;
      const zoneHeight = isMultiZone ? 1024 : canvas.height;
      const xOffset = zone.col * zoneWidth;
      const yOffset = (zone.row || 0) * zoneHeight;
      const surfaceRatio = isMultiZone ? (zone.aspect || 1) : (zoneWidth / zoneHeight);

      let w, h;
      if (item.fitMode === 'fill') {
        w = zoneWidth;
        h = zoneHeight;
      } else if ((item.fitMode === 'contain') === (imageRatio > surfaceRatio)) {
        w = zoneWidth;
        h = isMultiZone ? (zoneWidth * surfaceRatio / imageRatio) : (w / imageRatio);
      } else {
        h = zoneHeight;
        w = isMultiZone ? (zoneHeight * imageRatio / surfaceRatio) : (h * imageRatio);
      }
      w *= sx;
      h *= sy;

      const x = xOffset + zoneWidth / 2 + item.x * zoneWidth * 0.5;
      const y = yOffset + zoneHeight / 2 - item.y * zoneHeight * 0.5;

      ctx.save();
      ctx.beginPath();
      ctx.rect(xOffset, yOffset, zoneWidth, zoneHeight);
      ctx.clip();

      ctx.translate(x, y);
      ctx.rotate(-item.rotation * Math.PI / 180);
      ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
      ctx.restore();
    });
  });

  if (hasText && !(app.currentProductKey === 'tshirt3D' && app.textParams.side === 'heart')) {
    let targetZones = [];
    if (app.product.zones) {
      targetZones = (app.textParams.side === 'both' || !app.textParams.side) ? app.product.zones : app.product.zones.filter(z => z.id === app.textParams.side);
    } else {
      const sides = !isTwoSided ? [0] : (app.textParams.side === 'A' ? [0] : (app.textParams.side === 'B' ? [1] : [0, 1]));
      targetZones = sides.map(s => ({ col: s, row: 0, width: 1600, height: canvas.height }));
    }

    targetZones.forEach(zone => {
      ctx.save();
      const zoneWidth = isMultiZone ? 1024 : 1600;
      const zoneHeight = isMultiZone ? 1024 : canvas.height;
      const xOffset = zone.col * zoneWidth;
      const yOffset = (zone.row || 0) * zoneHeight;

      ctx.beginPath();
      ctx.rect(xOffset, yOffset, zoneWidth, zoneHeight);
      ctx.clip();

      const tx = xOffset + zoneWidth / 2 + app.textParams.x * zoneWidth * 0.5;
      const ty = yOffset + zoneHeight / 2 - app.textParams.y * zoneHeight * 0.5;
      ctx.translate(tx, ty);
      ctx.rotate(-app.textParams.rotation * Math.PI / 180);
      const fontStyle = `${app.textParams.italic ? 'italic ' : ''}${app.textParams.bold ? 'bold ' : 'normal '}${app.textParams.size}px ${app.textParams.font}`;
      ctx.font = fontStyle;
      ctx.fillStyle = app.textParams.color;
      ctx.textAlign = app.textParams.align || 'center';
      ctx.textBaseline = 'middle';
      const lines = app.textParams.text.split('\n');
      const lineHeight = app.textParams.size * 1.25;
      const totalBlockHeight = (lines.length - 1) * lineHeight;
      const startY = -totalBlockHeight / 2;
      lines.forEach((line, index) => {
        ctx.fillText(line, 0, startY + index * lineHeight);
      });
      ctx.restore();
    });
  }
  app.buildHeartTexture();
  app.texture?.dispose(); app.texture = new app.THREE.CanvasTexture(canvas); app.texture.colorSpace = app.THREE.SRGBColorSpace; app.texture.anisotropy = app.renderer.capabilities.getMaxAnisotropy();
  if (app.product.type === '3d-decal') {
    // texture.premultiplyAlpha = false;
    app.texture.needsUpdate = true;
    if (app.product.applyDecals) app.product.applyDecals(app.texture, isTwoSided, canvas, app.heartTexture);
  } else {
    app.product.topMaterial.map = app.texture; app.product.topMaterial.color.set(0xffffff); app.product.topMaterial.needsUpdate = true;
  }
  app.wrapPreview.material.map = app.texture; app.wrapPreview.material.needsUpdate = true; app.wrapPreview.scale.set(3.1, 3.1 / app.product.printAspect, 1);
  app.updateWrapPreviewWidget(canvas);
  app.updateClientGuide();
};
}

export function initialize(app) {

}
