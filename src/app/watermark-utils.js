// Helper de rendu des filigranes pour le canevas de texture

export function drawTiledWatermark(ctx, canvas, app) {
  const show = !app.suppressClientWatermarkForOwnerExport && (app.clientMode || (document.querySelector('#showWatermark')?.checked ?? true));
  const style = app.watermarkStyle || (app.clientMode ? 'both' : (document.querySelector('#watermarkStyle')?.value || 'both'));
  if (!show || !app.isWatermarkLoaded || app.watermarkImg.width <= 0 || app.product.type === '3d-decal') return;
  if (style !== 'reduced' && style !== 'both') return;

  ctx.save();
  const wmCanvas = document.createElement('canvas');
  wmCanvas.width = app.watermarkImg.width;
  wmCanvas.height = app.watermarkImg.height;
  const wmCtx = wmCanvas.getContext('2d');
  wmCtx.drawImage(app.watermarkImg, 0, 0);
  wmCtx.globalCompositeOperation = 'source-in';
  wmCtx.fillStyle = '#111820';
  wmCtx.fillRect(0, 0, wmCanvas.width, wmCanvas.height);

  ctx.globalAlpha = 0.045;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-25 * Math.PI / 180);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  const stepX = 540, stepY = 320, wmWidth = 135;
  const wmHeight = Math.round(wmWidth * (app.watermarkImg.height / app.watermarkImg.width));
  for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
    const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
    for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
      ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
    }
  }
  ctx.restore();
}

export function drawWatermarkTags(ctx, canvas, app, isMultiZone, isTwoSided) {
  const show = !app.suppressClientWatermarkForOwnerExport && (app.clientMode || (document.querySelector('#showWatermark')?.checked ?? true));
  const style = app.watermarkStyle || (app.clientMode ? 'both' : (document.querySelector('#watermarkStyle')?.value || 'both'));
  if (!show || !app.isWatermarkLoaded || app.watermarkImg.width <= 0 || app.product.type === '3d-decal') return;
  if (style !== 'tag' && style !== 'both') return;

  const drawTagAt = (x, y) => {
    ctx.save();
    const tagW = 180, tagH = 30, tagX = x - tagW, tagY = y - tagH;
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') ctx.roundRect(tagX, tagY, tagW, tagH, 6);
    else ctx.rect(tagX, tagY, tagW, tagH);
    ctx.fill();

    ctx.globalAlpha = 0.90;
    const logoH = 18;
    const logoW = Math.round(logoH * (app.watermarkImg.width / app.watermarkImg.height));
    ctx.drawImage(app.watermarkImg, tagX + 8, tagY + (tagH - logoH) / 2, logoW, logoH);

    ctx.fillStyle = '#ffffff';
    ctx.font = '600 11px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('Aperçu Graph2Print', tagX + logoW + 12, tagY + tagH / 2);
    ctx.restore();
  };

  if (isMultiZone && app.product.zones) {
    app.product.zones.forEach(z => {
      drawTagAt((z.col + 1) * 1024 - 20, ((z.row || 0) + 1) * 1024 - 20);
    });
  } else if (isTwoSided) {
    drawTagAt(1600 - 20, canvas.height - 20);
    drawTagAt(3200 - 20, canvas.height - 20);
  } else {
    drawTagAt(canvas.width - 20, canvas.height - 20);
  }
}
