import { drawTiledWatermark, drawWatermarkTags } from './watermark-utils.js';

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
  const targetW = isMultiZone ? 3072 : (isTwoSided ? 3200 : 1600), targetH = isMultiZone ? 2048 : Math.round(1600 / app.product.printAspect);
  if (!app._buildCanvas) app._buildCanvas = document.createElement('canvas');
  const canvas = app._buildCanvas, sizeChanged = canvas.width !== targetW || canvas.height !== targetH;
  if (canvas.width !== targetW) canvas.width = targetW;
  if (canvas.height !== targetH) canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (app.product.type !== '3d-decal') { ctx.fillStyle = surfaceColor; ctx.fillRect(0, 0, canvas.width, canvas.height); }

  drawTiledWatermark(ctx, canvas, app);

  app.imagesList.forEach(item => {
    if (!item.img || (app.currentProductKey === 'tshirt3D' && item.side === 'heart')) return;
    const sx = item.scaleX ?? item.scale ?? 1;
    const sy = item.scaleY ?? item.scale ?? 1;
    const imageRatio = item.img.width / item.img.height;

    let targetZones = [];
    if (app.currentProductKey === 'arcadeCabinet') {
      const zL = app.product.zones.find(z => z.id === 'left');
      const zR = app.product.zones.find(z => z.id === 'right');
      const zM = app.product.zones.find(z => z.id === 'marquee');
      const zF = app.product.zones.find(z => z.id === 'front');
      const s = item.side || 'sides';
      const otherR = app.imagesList.some(o => o !== item && o.img && o.side === 'right');
      const otherL = app.imagesList.some(o => o !== item && o.img && o.side === 'left');
      if (s === 'sides' || s === 'both') {
        targetZones = [zL, { ...zR, isMirror: true }];
        if (s === 'both') targetZones.push(zM, zF);
      } else if (s === 'left') {
        targetZones = [zL];
        if (!otherR && zR) targetZones.push({ ...zR, isMirror: true });
      } else if (s === 'right') {
        targetZones = [zR];
        if (!otherL && zL) targetZones.push({ ...zL, isMirror: true });
      } else if (s === 'marquee') targetZones = [zM];
      else if (s === 'front') targetZones = [zF];
      targetZones = targetZones.filter(Boolean);
    } else if (app.product.zones) {
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

      const mirrorActive = (app.arcadeMirrorSideB !== false);
      const isMirrored = (zone.isMirror && mirrorActive) || (zone.id === 'right' && mirrorActive && app.currentProductKey === 'arcadeCabinet');
      const effX = isMirrored ? -item.x : item.x;
      const effRot = isMirrored ? -item.rotation : item.rotation;

      const x = xOffset + zoneWidth / 2 + effX * zoneWidth * 0.5;
      const y = yOffset + zoneHeight / 2 - item.y * zoneHeight * 0.5;

      ctx.save();
      ctx.beginPath();
      ctx.rect(xOffset, yOffset, zoneWidth, zoneHeight);
      ctx.clip();

      ctx.translate(x, y);
      ctx.rotate(-effRot * Math.PI / 180);
      if (isMirrored) ctx.scale(-1, 1);
      if (item.repeatPattern) {
        const count = item.repeatCount || 3;
        const tw = Math.max(16, w / count), th = Math.max(16, h / count);
        const cols = Math.ceil(zoneWidth * 1.5 / tw) + 2, rows = Math.ceil(zoneHeight * 1.5 / th) + 2;
        const sx = -((cols * tw) / 2), sy = -((rows * th) / 2);
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) ctx.drawImage(item.img, sx + c * tw, sy + r * th, tw, th);
      } else {
        ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
      }
      ctx.restore();
    });
  });

  if (hasText && !(app.currentProductKey === 'tshirt3D' && app.textParams.side === 'heart')) {
    let targetZones = [];
    if (app.currentProductKey === 'arcadeCabinet') {
      const zL = app.product.zones.find(z => z.id === 'left');
      const zR = app.product.zones.find(z => z.id === 'right');
      const zM = app.product.zones.find(z => z.id === 'marquee');
      const zF = app.product.zones.find(z => z.id === 'front');
      const s = app.textParams.side || 'sides';
      if (s === 'sides' || s === 'left' || s === 'right') targetZones = [zL, zR];
      else if (s === 'marquee') targetZones = [zM];
      else if (s === 'front') targetZones = [zF];
      else targetZones = [zL, zR, zM, zF];
      targetZones = targetZones.filter(Boolean);
    } else if (app.product.zones) {
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
      const align = app.textParams.align || 'center';
      const lines = app.textParams.text.split('\n');
      const lineHeight = app.textParams.size * 1.25;
      const totalBlockHeight = (lines.length - 1) * lineHeight;
      const startY = -totalBlockHeight / 2;
      const startX = align === 'left' ? -zoneWidth * 0.18 : (align === 'right' ? zoneWidth * 0.18 : 0);
      ctx.textAlign = align;
      ctx.textBaseline = 'middle';
      if (app.textParams.shadow) { ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 8; ctx.shadowOffsetX = 3; ctx.shadowOffsetY = 3; }
      if (app.textParams.stroke) { ctx.strokeStyle = app.textParams.strokeColor || '#ffffff'; ctx.lineWidth = Math.max(3, Math.round(app.textParams.size * 0.08)); }
      lines.forEach((line, index) => {
        const py = startY + index * lineHeight;
        if (app.textParams.curved && typeof app.drawCurvedText === 'function') {
          app.drawCurvedText(ctx, line, py);
        } else {
          if (app.textParams.stroke) ctx.strokeText(line, startX, py);
          ctx.fillText(line, startX, py);
        }
      });
      ctx.restore();
    });
  }

  drawWatermarkTags(ctx, canvas, app, isMultiZone, isTwoSided);

  app.buildHeartTexture();
  if (!app.texture || app.texture.image !== canvas || sizeChanged) {
    app.texture?.dispose();
    app.texture = new app.THREE.CanvasTexture(canvas);
    app.texture.colorSpace = app.THREE.SRGBColorSpace;
    app.texture.anisotropy = app.renderer.capabilities.getMaxAnisotropy();
  } else { app.texture.needsUpdate = true; }
  if (app.product.type === '3d-decal') {
    app.texture.needsUpdate = true;
    if (app.product.applyDecals) app.product.applyDecals(app.texture, isTwoSided, canvas, app.heartTexture);
  } else {
    app.product.topMaterial.map = app.texture; app.product.topMaterial.color.set(0xffffff); app.product.topMaterial.needsUpdate = true;
  }
  app.wrapPreview.material.map = app.texture; app.wrapPreview.material.needsUpdate = true; app.wrapPreview.scale.set(3.1, 3.1 / app.product.printAspect, 1);
  app.updateWrapPreviewWidget(canvas);
  app.updateClientGuide();
};
let rafBuildId = null;
app.requestBuildTexture = function requestBuildTexture() {
  if (rafBuildId) return;
  rafBuildId = requestAnimationFrame(() => { rafBuildId = null; app.buildTexture(); });
};
}
export function initialize(app) {}
