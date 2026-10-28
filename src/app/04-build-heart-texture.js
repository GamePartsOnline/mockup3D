// Shared application state is supplied by the entry point.
export function register(app) {
app.buildHeartTexture = function buildHeartTexture() {
  app.heartTexture?.dispose();
  app.heartTexture = null;
  if (app.currentProductKey !== 'tshirt3D') return;
  const items = app.imagesList.filter(item => item.side === 'heart' && item.img);
  const hasHeartText = app.textParams.side === 'heart' && app.textParams.text.trim();
  if (!items.length && !hasHeartText) return;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  for (const item of items) {
    const ratio = item.img.width / item.img.height;
    let w, h;
    if (item.fitMode === 'fill') {
      w = h = 1024;
    } else if ((item.fitMode === 'contain') === (ratio > 1)) {
      w = 1024; h = w / ratio;
    } else {
      h = 1024; w = h * ratio;
    }
    w *= item.scaleX ?? item.scale ?? 1;
    h *= item.scaleY ?? item.scale ?? 1;
    ctx.save();
    ctx.translate(512 + item.x * 512, 512 - item.y * 512);
    ctx.rotate(-item.rotation * Math.PI / 180);
    ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }
  if (hasHeartText) {
    ctx.save();
    ctx.translate(512 + app.textParams.x * 512, 512 - app.textParams.y * 512);
    ctx.rotate(-app.textParams.rotation * Math.PI / 180);
    ctx.font = (app.textParams.italic ? 'italic ' : '') + (app.textParams.bold ? 'bold ' : 'normal ') + app.textParams.size + 'px ' + app.textParams.font;
    ctx.fillStyle = app.textParams.color;
    ctx.textAlign = app.textParams.align || 'center';
    ctx.textBaseline = 'middle';
    const lines = app.textParams.text.split('\n');
    lines.forEach((line, index) => ctx.fillText(line, 0, (index - (lines.length - 1) / 2) * app.textParams.size * 1.25));
    ctx.restore();
  }
  if (app.clientMode && !app.suppressClientWatermarkForOwnerExport && app.isWatermarkLoaded) {
    ctx.save();
    ctx.globalAlpha = 0.07;
    const logoW = 130;
    const logoH = Math.round(logoW * (app.watermarkImg.height / app.watermarkImg.width));
    ctx.drawImage(app.watermarkImg, 512 - logoW / 2, 512 - logoH / 2, logoW, logoH);
    ctx.restore();
  }
  app.heartTexture = new app.THREE.CanvasTexture(canvas);
  app.heartTexture.colorSpace = app.THREE.SRGBColorSpace;
  app.heartTexture.anisotropy = app.renderer.capabilities.getMaxAnisotropy();
};
}

export function initialize(app) {

}
