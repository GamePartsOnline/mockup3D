import './style.css';
import './reference.css';
import './logo.css';
import './direct-edit.css';
import './sidebar-left.css';
import './animation-visible.css';
import './product-select.css';
import './rotation-modes.css';
import './frame-option.css';
import './compact-screen.css';
import './text-tool.css';
import './wrap-preview.css';
import './exports-sidebar.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ArrayBufferTarget, Muxer } from 'mp4-muxer';
import { mousePadProduct } from './products/mousePad.js';
import { mug11ozProduct } from './products/mug11oz.js';
import { keychainRectProduct } from './products/keychainRect.js';
import { keychainRoundProduct } from './products/keychainRound.js';
import { keychainHeartProduct } from './products/keychainHeart.js';
import { tshirt3DProduct } from './products/tshirt3D.js';
import { puzzleProduct } from './products/puzzle.js';
import { coasterProduct } from './products/coaster.js';
import { coasterRoundProduct } from './products/coasterRound.js';
import { pencilCaseProduct } from './products/pencilCase.js';
import { cushionProduct } from './products/cushion.js';
import { arcadeCabinetProduct } from './products/arcadeCabinet.js';
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  const localBadge = document.querySelector('#localBadge');
  if (localBadge) localBadge.style.display = 'none';
  
  const pSelect = document.querySelector('#productSelect');
  if (pSelect) {
    Array.from(pSelect.options).forEach(opt => {
      if (opt.value === 'tshirt3D' || opt.value === 'arcadeCabinet') {
        opt.remove();
      }
    });
  }
}

const viewer = document.querySelector('#viewer');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
viewer.append(renderer.domElement);
const scene = new THREE.Scene(); scene.background = new THREE.Color(0xe9edf0);
const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100); camera.position.set(3.4, 2.8, 3.8);
scene.add(camera);
let sceneWatermarkTexture = null;
let backgroundTexture = null;

function updateSceneBackground() {
  if (backgroundTexture) {
    scene.background = backgroundTexture;
    return;
  }
  const showWatermark = document.querySelector('#showWatermark')?.checked ?? true;
  const bgColor = document.querySelector('#sceneColor')?.value || '#e9edf0';
  
  if (!showWatermark || !isWatermarkLoaded || watermarkImg.width === 0) {
    sceneWatermarkTexture?.dispose();
    sceneWatermarkTexture = null;
    scene.background = new THREE.Color(bgColor);
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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

  const stepX = 340;
  const stepY = 220;
  const wmWidth = 220;
  const wmHeight = Math.round(wmWidth * (watermarkImg.height / watermarkImg.width));

  for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
    const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
    for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
      ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
    }
  }
  ctx.restore();

  sceneWatermarkTexture?.dispose();
  sceneWatermarkTexture = new THREE.CanvasTexture(canvas);
  sceneWatermarkTexture.colorSpace = THREE.SRGBColorSpace;
  sceneWatermarkTexture.wrapS = THREE.RepeatWrapping;
  sceneWatermarkTexture.wrapT = THREE.RepeatWrapping;
  scene.background = sceneWatermarkTexture;
}

const watermarkImg = new Image();
watermarkImg.src = '/logo-graph2print.png';
let isWatermarkLoaded = false;
watermarkImg.onload = () => {
  isWatermarkLoaded = true;
  updateSceneBackground();
  if (imagesList.length > 0 || textParams.text.trim()) buildTexture();
};

const wrapPreview = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthTest: false, depthWrite: false }));
wrapPreview.position.set(0, -1.28, -5); wrapPreview.visible = false; wrapPreview.renderOrder = 20;
const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = false; controls.autoRotate = false; controls.minDistance = 2.2; controls.maxDistance = 8; controls.target.set(0, -.04, 0);
scene.add(new THREE.HemisphereLight(0xffffff, 0x607080, 2.2));
const key = new THREE.DirectionalLight(0xffffff, 3.4); key.position.set(-3, 5, 4); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); scene.add(key);
const fill = new THREE.DirectionalLight(0xb8d7ff, 1.4); fill.position.set(4, 2, -3); scene.add(fill);
const floor = new THREE.Mesh(new THREE.CircleGeometry(5, 64), new THREE.ShadowMaterial({ color: 0x55616b, opacity: .15 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.09; floor.receiveShadow = true; scene.add(floor);
const productDefinitions = {
  mousePad: mousePadProduct,
  mug11oz: mug11ozProduct,
  keychainRect: keychainRectProduct,
  keychainRound: keychainRoundProduct,
  keychainHeart: keychainHeartProduct,
  tshirt3D: tshirt3DProduct,
  puzzle: puzzleProduct,
  coaster: coasterProduct,
  coasterRound: coasterRoundProduct,
  pencilCase: pencilCaseProduct,
  cushion: cushionProduct,
  arcadeCabinet: arcadeCabinetProduct
};
const defaultProductKey = document.querySelector('#productSelect')?.value || 'mug11oz';
let currentProductKey = defaultProductKey, product = productDefinitions[defaultProductKey].create(); scene.add(product.group);
const grid = new THREE.GridHelper(8, 24, 0x617078, 0x9aa6ac); grid.position.y = -.085; grid.visible = false; scene.add(grid);

let imagesList = [];
let activeImageIndex = -1;
let texture = null, fitMode = 'cover';
const params = { scale: 1, x: 0, y: 0, rotation: 0 };
const textParams = { text: '', color: '#111820', font: 'Inter, sans-serif', size: 60, bold: false, italic: false, align: 'center', x: 0, y: 0, rotation: 0 };

const overlay = document.querySelector('#transformOverlay'), box = document.querySelector('#transformBox'), rotateHandle = document.querySelector('#rotateHandle'), rotateStem = document.querySelector('#rotateStem'), handles = [...document.querySelectorAll('.resize-handle')], edgeHandles = [...document.querySelectorAll('.edge-handle')];

function getActiveImage() {
  if (activeImageIndex >= 0 && activeImageIndex < imagesList.length) {
    const item = imagesList[activeImageIndex];
    if (item.scaleX === undefined) item.scaleX = item.scale ?? 1;
    if (item.scaleY === undefined) item.scaleY = item.scale ?? 1;
    return item;
  }
  return null;
}

function syncActiveControls() {
  const active = getActiveImage();
  const adjustmentsSection = document.querySelector('#adjustments');
  const activeLabel = document.querySelector('#activeImageLabel');
  if (!active) {
    adjustmentsSection?.classList.add('disabled');
    if (activeLabel) activeLabel.textContent = 'Aucune image active';
    return;
  }
  adjustmentsSection?.classList.remove('disabled');
  if (activeLabel) activeLabel.textContent = `Image active : ${active.name}`;

  const avgScale = Math.round(((active.scaleX + active.scaleY) / 2) * 100);
  document.querySelector('#scale').value = avgScale;
  document.querySelector('#scaleValue').value = `${avgScale} %`;
  document.querySelector('#posX').value = Math.round(active.x * 100);
  document.querySelector('#posXValue').value = `${Math.round(active.x * 100)} %`;
  document.querySelector('#posY').value = Math.round(active.y * 100);
  document.querySelector('#posYValue').value = `${Math.round(active.y * 100)} %`;
  document.querySelector('#rotation').value = Math.round(active.rotation);
  document.querySelector('#rotationValue').value = `${Math.round(active.rotation)}°`;

  document.querySelectorAll('[data-fit]').forEach(x => x.classList.toggle('active', x.dataset.fit === active.fitMode));
}

function selectActiveImage(index) {
  if (index >= 0 && index < imagesList.length) {
    activeImageIndex = index;
  } else {
    activeImageIndex = imagesList.length - 1;
  }
  renderImagesList();
  syncActiveControls();
  setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  updateOverlay();
}

function removeImageByIndex(index, e) {
  if (e) e.stopPropagation();
  imagesList.splice(index, 1);
  if (activeImageIndex >= imagesList.length) {
    activeImageIndex = imagesList.length - 1;
  }
  renderImagesList();
  syncActiveControls();
  buildTexture();
  setOverlayVisible(document.querySelector('#showTransformFrame').checked);
}

function renderImagesList() {
  const listEl = document.querySelector('#imagesList');
  if (!listEl) return;
  listEl.innerHTML = '';
  imagesList.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = `image-item${index === activeImageIndex ? ' active' : ''}`;
    itemEl.onclick = () => selectActiveImage(index);

    const thumb = document.createElement('img');
    thumb.className = 'image-item-thumb';
    thumb.src = item.img.src;
    thumb.alt = item.name;

    const info = document.createElement('div');
    info.className = 'image-item-info';
    info.innerHTML = `<span class="image-item-name">${item.name}</span><small class="image-item-meta">Calque #${index + 1} • ${Math.round(item.scale * 100)}%</small>`;
    const sideSelect = document.createElement('select');
    sideSelect.className = 'layer-side-select';
    if (product.zones) {
      sideSelect.innerHTML = '<option value="both">Toutes zones</option>' + product.zones.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
    } else {
      sideSelect.innerHTML = '<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>';
    }
    sideSelect.value = item.side || 'both';
    sideSelect.onclick = e => e.stopPropagation();
    sideSelect.onchange = e => { item.side = e.target.value; buildTexture(); };
    if (product.twoSided || product.zones) {
      info.append(sideSelect);
    }

    const removeBtn = document.createElement('button');
    removeBtn.className = 'image-item-remove';
    removeBtn.title = 'Supprimer cette image';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = (e) => removeImageByIndex(index, e);

    itemEl.append(thumb, info, removeBtn);
    listEl.append(itemEl);
  });
}

function isOverlayVisible() {
  return !overlay.hasAttribute('hidden') && !overlay.classList.contains('hidden') && overlay.style.display !== 'none';
}

function setOverlayVisible(visible) {
  const isFlat = product.type === 'flat';
  const showCheckbox = document.querySelector('#showTransformFrame').checked;
  const active = getActiveImage();
  const shouldShow = !!visible && showCheckbox && !!active && isFlat;
  if (shouldShow) {
    overlay.removeAttribute('hidden');
    overlay.classList.remove('hidden');
    overlay.style.display = 'block';
  } else {
    overlay.setAttribute('hidden', '');
    overlay.classList.add('hidden');
    overlay.style.display = 'none';
  }
}

function updateWrapPreviewWidget(canvas) {
  const widget = document.querySelector('#wrapPreviewWidget');
  const img = document.querySelector('#wrapPreviewImg');
  if (!widget || !img) return;
  const hasContent = imagesList.length > 0 || textParams.text.trim().length > 0;
  if (hasContent) {
    widget.hidden = false;
    const targetCanvas = canvas || (texture?.image);
    if (targetCanvas && targetCanvas.toDataURL) {
      img.src = targetCanvas.toDataURL('image/png');
    }
  } else {
    widget.hidden = true;
  }
}
document.querySelector('#toggleWrapPreview')?.addEventListener('click', () => {
  document.querySelector('#wrapPreviewWidget')?.classList.toggle('collapsed');
});

document.querySelector('#downloadWrapBtn')?.addEventListener('click', () => {
  const targetCanvas = texture?.image;
  if (!targetCanvas || !targetCanvas.toDataURL) {
    showToast('Aucun visuel wrap à exporter');
    return;
  }
  const link = document.createElement('a');
  link.href = targetCanvas.toDataURL('image/png');
  link.download = `wrap-${currentProductKey}-210x95mm-${Date.now()}.png`;
  document.body.append(link);
  link.click();
  link.remove();
  showToast('Fichier d’impression Wrap PNG téléchargé');
});

function buildTexture() {
  const hasText = textParams.text.trim().length > 0;
  const hasImages = imagesList.length > 0;
  if (!hasImages && !hasText) {
    texture?.dispose(); texture = null; product.topMaterial.map = null; product.topMaterial.needsUpdate = true; wrapPreview.material.map = null; wrapPreview.material.needsUpdate = true; document.querySelector('#emptyHint').hidden = false; updateWrapPreviewWidget(null); return;
  }
  document.querySelector('#emptyHint').hidden = true;
  const surfaceColor = document.querySelector('#topColor')?.value || '#ffffff';
  
  const isTwoSided = !!product.twoSided;
  const isMultiZone = !!product.zones;
  const canvas = document.createElement('canvas');
  
  canvas.width = isMultiZone ? 3072 : (isTwoSided ? 3200 : 1600);
  canvas.height = isMultiZone ? 2048 : Math.round(1600 / product.printAspect);
  const ctx = canvas.getContext('2d'); 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (product.type !== '3d-decal') {
    ctx.fillStyle = surfaceColor; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  const showWatermark = document.querySelector('#showWatermark')?.checked ?? true;
  if (showWatermark && isWatermarkLoaded && watermarkImg.width > 0 && product.type !== '3d-decal') {
    ctx.save();
    const wmCanvas = document.createElement('canvas');
    wmCanvas.width = watermarkImg.width;
    wmCanvas.height = watermarkImg.height;
    const wmCtx = wmCanvas.getContext('2d');
    wmCtx.drawImage(watermarkImg, 0, 0);
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
    const wmHeight = Math.round(wmWidth * (watermarkImg.height / watermarkImg.width));

    for (let py = -canvas.height * 0.6; py < canvas.height * 1.6; py += stepY) {
      const offsetX = (Math.floor(py / stepY) % 2) * (stepX / 2);
      for (let px = -canvas.width * 0.6; px < canvas.width * 1.6; px += stepX) {
        ctx.drawImage(wmCanvas, px + offsetX, py, wmWidth, wmHeight);
      }
    }
    ctx.restore();
  }

  imagesList.forEach(item => {
    if (!item.img) return;
    const sx = item.scaleX ?? item.scale ?? 1;
    const sy = item.scaleY ?? item.scale ?? 1;
    const imageRatio = item.img.width / item.img.height;
    
    let targetZones = [];
    if (product.zones) {
      targetZones = (item.side === 'both' || !item.side) ? product.zones : product.zones.filter(z => z.id === item.side);
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

  if (hasText) {
    let targetZones = [];
    if (product.zones) {
      targetZones = (textParams.side === 'both' || !textParams.side) ? product.zones : product.zones.filter(z => z.id === textParams.side);
    } else {
      const sides = !isTwoSided ? [0] : (textParams.side === 'A' ? [0] : (textParams.side === 'B' ? [1] : [0, 1]));
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
      
      const tx = xOffset + zoneWidth / 2 + textParams.x * zoneWidth * 0.5;
      const ty = yOffset + zoneHeight / 2 - textParams.y * zoneHeight * 0.5;
      ctx.translate(tx, ty);
      ctx.rotate(-textParams.rotation * Math.PI / 180);
      const fontStyle = `${textParams.italic ? 'italic ' : ''}${textParams.bold ? 'bold ' : 'normal '}${textParams.size}px ${textParams.font}`;
      ctx.font = fontStyle;
      ctx.fillStyle = textParams.color;
      ctx.textAlign = textParams.align || 'center';
      ctx.textBaseline = 'middle';
      const lines = textParams.text.split('\n');
      const lineHeight = textParams.size * 1.25;
      const totalBlockHeight = (lines.length - 1) * lineHeight;
      const startY = -totalBlockHeight / 2;
      lines.forEach((line, index) => {
        ctx.fillText(line, 0, startY + index * lineHeight);
      });
      ctx.restore();
    });
  }
  texture?.dispose(); texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  if (product.type === '3d-decal') {
    texture.premultiplyAlpha = false;
    texture.needsUpdate = true;
    if (product.applyDecals) product.applyDecals(texture, isTwoSided, canvas);
  } else {
    product.topMaterial.map = texture; product.topMaterial.color.set(0xffffff); product.topMaterial.needsUpdate = true;
  }
  wrapPreview.material.map = texture; wrapPreview.material.needsUpdate = true; wrapPreview.scale.set(3.1, 3.1 / product.printAspect, 1);
  updateWrapPreviewWidget(canvas);
}

document.querySelector('#imageInput').addEventListener('change', async e => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;
  for (const file of files) {
    const url = URL.createObjectURL(file);
    await new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        imagesList.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          img,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          x: 0,
          y: 0,
          rotation: 0,
          fitMode: 'cover',
          side: product.zones ? product.zones[0].id : 'both'
        });
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      img.src = url;
    });
  }
  e.target.value = '';
  activeImageIndex = imagesList.length - 1;
  renderImagesList();
  syncActiveControls();
  buildTexture();
  setOverlayVisible(document.querySelector('#showTransformFrame').checked);
  showToast(`${files.length} image(s) ajoutée(s)`);
});

document.querySelector('#productSelect').onchange = e => {
  currentProductKey = e.target.value; scene.remove(product.group); product.group.traverse(child => child.geometry?.dispose());
  const definition = productDefinitions[currentProductKey]; product = definition.create(); scene.add(product.group);
  document.querySelector('#productDimensions').textContent = Array.isArray(definition.dimensions) ? `${definition.dimensions.join(' × ')} mm` : definition.dimensions;
  document.querySelector('#productIcon').textContent = definition.icon || (currentProductKey === 'mousePad' ? '▰' : currentProductKey === 'mug11oz' ? '☕' : '👕');
  
  const priceMap = {
    'mug11oz': '13,00 €',
    'mousePad': '10,00 €',
    'keychainRect': '6,00 €',
    'keychainRound': '6,00 €',
    'keychainHeart': '6,00 €',
    'tshirt3D': '17,00 € - 21,00 €',
    'puzzle': '15,00 €',
    'coaster': '8,00 €',
    'coasterRound': '8,00 €',
    'pencilCase': '11,00 €',
    'cushion': '17,00 €'
  };
  const priceEl = document.querySelector('#productPrice');
  if (priceEl) priceEl.textContent = priceMap[currentProductKey] || '-- €';
  
  const isMug = currentProductKey === 'mug11oz';
  const isArcade = currentProductKey === 'arcadeCabinet';
  
  document.querySelector('#handleColorWrap').hidden = !isMug;
  document.querySelector('#innerColorWrap').hidden = !isMug;
  document.querySelector('#quickPalette').hidden = !isMug;
  
  const joystickColorWrap = document.querySelector('#joystickColorWrap');
  if (joystickColorWrap) joystickColorWrap.hidden = !isArcade;
  const buttonColorWrap = document.querySelector('#buttonColorWrap');
  if (buttonColorWrap) buttonColorWrap.hidden = !isArcade;
  const arcadeGlowWrap = document.querySelector('#arcadeGlowWrap');
  if (arcadeGlowWrap) arcadeGlowWrap.hidden = !isArcade;

  document.querySelector('#baseColor').value = '#ffffff'; document.querySelector('#topColor').value = '#ffffff';
  if (isMug) {
    document.querySelector('#handleColor').value = '#ffffff';
    document.querySelector('#innerColor').value = '#ffffff';
  }
  if (isArcade) {
    if (document.querySelector('#joystickColor')) document.querySelector('#joystickColor').value = '#ff0000';
    if (document.querySelector('#buttonColor')) document.querySelector('#buttonColor').value = '#0055ff';
    if (document.querySelector('#arcadeGlow')) document.querySelector('#arcadeGlow').checked = false;
  }
  
  const isTwoSided = !!product.twoSided;
  const hasZones = !!product.zones;
  
  const viewFaceA = document.querySelector('#viewFaceA');
  const viewFaceB = document.querySelector('#viewFaceB');
  if (viewFaceA) viewFaceA.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';
  if (viewFaceB) viewFaceB.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';
  
  // Custom labels for view buttons if zones
  if (viewFaceA) viewFaceA.innerHTML = hasZones ? '<span style="font-weight:900;margin-right:4px;">A</span> Face Avant' : '<span style="font-weight:900;margin-right:4px;">A</span> Face A';
  if (viewFaceB) viewFaceB.innerHTML = hasZones ? '<span style="font-weight:900;margin-right:4px;">B</span> Côtés' : '<span style="font-weight:900;margin-right:4px;">B</span> Face B';

  const textSideSelect = document.querySelector('#textSideSelect');
  if (textSideSelect) {
    textSideSelect.style.display = (isTwoSided || hasZones) ? 'inline-block' : 'none';
    if (hasZones) {
      textSideSelect.innerHTML = '<option value="both">Toutes zones</option>' + product.zones.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
    } else {
      textSideSelect.innerHTML = '<option value="both">2 faces</option><option value="A">Face A</option><option value="B">Face B</option>';
    }
  }
  
  updateLayersList();
  if (imagesList.length > 0 || textParams.text.trim()) buildTexture(); 
  homeView(); setOverlayVisible(document.querySelector('#showTransformFrame').checked); 
  updateWrapPreviewWidget(texture?.image);
};
document.querySelector('#showTransformFrame').addEventListener('change', e => {
  setOverlayVisible(e.target.checked);
  if (e.target.checked) updateOverlay();
  showToast(e.target.checked ? 'Cadre de sélection activé' : 'Cadre de sélection masqué');
});
document.querySelectorAll('[data-fit]').forEach(btn => btn.onclick = () => {
  const active = getActiveImage();
  if (!active) return;
  active.fitMode = btn.dataset.fit;
  document.querySelectorAll('[data-fit]').forEach(x => x.classList.toggle('active', x === btn));
  resetActiveImage(true);
});
const sliders = { scale: ['scaleValue', v => `${v} %`, v => v / 100], posX: ['posXValue', v => `${v} %`, v => v / 100], posY: ['posYValue', v => `${v} %`, v => v / 100], rotation: ['rotationValue', v => `${v}°`, Number] };
Object.entries(sliders).forEach(([id, [out, format, convert]]) => document.querySelector(`#${id}`).addEventListener('input', e => {
  const active = getActiveImage();
  if (!active) return;
  if (id === 'scale') {
    const val = convert(e.target.value);
    active.scale = val;
    active.scaleX = val;
    active.scaleY = val;
  } else {
    active[id === 'posX' ? 'x' : id === 'posY' ? 'y' : id] = convert(e.target.value);
  }
  document.querySelector(`#${out}`).value = format(e.target.value);
  buildTexture();
}));
function resetActiveImage(redraw = true) {
  const active = getActiveImage();
  if (!active) return;
  active.scale = 1;
  active.scaleX = 1;
  active.scaleY = 1;
  active.x = 0;
  active.y = 0;
  active.rotation = 0;
  syncActiveControls();
  if (redraw) buildTexture();
}
document.querySelector('#resetImage').onclick = () => resetActiveImage(true);

document.querySelector('#customText').addEventListener('input', e => { textParams.text = e.target.value; buildTexture(); }); document.querySelector('#textSideSelect')?.addEventListener('change', e => { textParams.side = e.target.value; buildTexture(); });
document.querySelector('#textColor').addEventListener('input', e => { textParams.color = e.target.value; buildTexture(); });
document.querySelector('#textFont').addEventListener('change', async e => {
  textParams.font = e.target.value;
  if (document.fonts) {
    try {
      await document.fonts.load(`${textParams.bold ? 'bold ' : 'normal '}${textParams.size}px ${textParams.font}`);
    } catch {}
  }
  buildTexture();
});
document.querySelector('#textSize').addEventListener('input', e => { textParams.size = Number(e.target.value); document.querySelector('#textSizeValue').value = `${e.target.value} px`; buildTexture(); });
document.querySelector('#textBold').addEventListener('change', e => { textParams.bold = e.target.checked; buildTexture(); });
document.querySelector('#textItalic').addEventListener('change', e => { textParams.italic = e.target.checked; buildTexture(); });
document.querySelectorAll('.align-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.align-btn').forEach(b => b.classList.toggle('active', b === btn));
    textParams.align = btn.dataset.align;
    buildTexture();
  });
});
document.querySelector('#textPosX').addEventListener('input', e => { textParams.x = Number(e.target.value) / 100; document.querySelector('#textPosXValue').value = `${e.target.value} %`; buildTexture(); });
document.querySelector('#textPosY').addEventListener('input', e => { textParams.y = Number(e.target.value) / 100; document.querySelector('#textPosYValue').value = `${e.target.value} %`; buildTexture(); });
document.querySelector('#textRotation').addEventListener('input', e => { textParams.rotation = Number(e.target.value); document.querySelector('#textRotationValue').value = `${e.target.value}°`; buildTexture(); });
document.querySelector('#resetText').addEventListener('click', () => {
  textParams.text = ''; textParams.color = '#111820'; textParams.font = 'Inter, sans-serif'; textParams.size = 60; textParams.bold = false; textParams.italic = false; textParams.align = 'center'; textParams.x = 0; textParams.y = 0; textParams.rotation = 0;
  document.querySelector('#customText').value = ''; document.querySelector('#textColor').value = '#111820'; document.querySelector('#textFont').value = 'Inter, sans-serif'; document.querySelector('#textSize').value = 60; document.querySelector('#textSizeValue').value = '60 px'; document.querySelector('#textBold').checked = false; document.querySelector('#textItalic').checked = false;
  document.querySelectorAll('.align-btn').forEach(b => b.classList.toggle('active', b.dataset.align === 'center'));
  document.querySelector('#textPosX').value = 0; document.querySelector('#textPosXValue').value = '0 %'; document.querySelector('#textPosY').value = 0; document.querySelector('#textPosYValue').value = '0 %'; document.querySelector('#textRotation').value = 0; document.querySelector('#textRotationValue').value = '0°';
  buildTexture(); updateWrapPreviewWidget(texture?.image);
});

// Gestion des sections repliables 1, 2 et 3
document.querySelectorAll('.collapsible-section .section-title-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.collapsible-section');
    if (!section) return;
    const isCollapsed = section.classList.toggle('collapsed');
    btn.setAttribute('aria-expanded', String(!isCollapsed));
  });
});

const homeView = () => {
  if (currentProductKey === 'mug11oz') {
    camera.position.set(0.8, 2.5, 6.5);
    controls.target.set(0, 0.78, 0);
  } else if (currentProductKey === 'mousePad' || currentProductKey === 'puzzle' || currentProductKey === 'coaster') {
    camera.position.set(0, 4.5, 0.001);
    controls.target.set(0, 0, 0);
  } else if (currentProductKey === 'keychainHeart') {
    camera.position.set(0, 0.45, 1.15);
    controls.target.set(0, 0.45, 0);
  } else if (currentProductKey === 'keychainRound') {
    camera.position.set(0, 0.32, 0.9);
    controls.target.set(0, 0.32, 0);
  } else if (currentProductKey === 'keychainRect') {
    camera.position.set(0, 0.29, 0.7);
    controls.target.set(0, 0.29, 0);
  } else if (currentProductKey.startsWith('tshirt')) {
    camera.position.set(0, 0.35, 1.6);
    controls.target.set(0, 0.35, 0);
  } else if (currentProductKey === 'arcadeCabinet') {
    camera.position.set(2.8, 0.5, 2.8);
    controls.target.set(0, 0, 0);
  } else {
    camera.position.set(3.4, 2.8, 3.8);
    controls.target.set(0, -.04, 0);
  }
  controls.update();
};
document.querySelector('#resetView')?.addEventListener('click', homeView);
document.querySelector('#viewFaceA')?.addEventListener('click', () => {
  homeView();
  if (currentProductKey === 'arcadeCabinet') {
    camera.position.set(2.6, 0.5, 1.5);
    controls.update();
  }
});
document.querySelector('#viewFaceB')?.addEventListener('click', () => {
  homeView();
  if (currentProductKey === 'mug11oz') {
    camera.position.set(-0.8, 2.5, -6.5);
  } else if (currentProductKey === 'arcadeCabinet') {
    camera.position.set(1.5, 0.5, -2.6);
  } else {
    camera.position.z = -Math.abs(camera.position.z);
  }
  controls.update();
});
document.querySelector('#zoomIn').onclick = () => { camera.position.multiplyScalar(.84); controls.update(); }; document.querySelector('#zoomOut').onclick = () => { camera.position.multiplyScalar(1.16); controls.update(); };
document.querySelector('#autoRotate').onchange = () => { controls.autoRotate = false; swingAngle = 0; swingDirection = 1; }; controls.autoRotateSpeed = 1.25;
document.querySelector('#topColor').oninput = e => {
  product.topMaterial.color.set(e.target.value);
  product.topMaterial.needsUpdate = true;
  buildTexture();
};
document.querySelector('#baseColor').oninput = e => { product.baseMaterial.color.set(e.target.value); product.baseMaterial.needsUpdate = true; };
document.querySelector('#handleColor').oninput = e => { if (product.handleMaterial) { product.handleMaterial.color.set(e.target.value); product.handleMaterial.needsUpdate = true; } };
document.querySelector('#innerColor').oninput = e => { if (product.innerMaterial) { product.innerMaterial.color.set(e.target.value); product.innerMaterial.needsUpdate = true; } };

if (document.querySelector('#joystickColor')) {
  document.querySelector('#joystickColor').oninput = e => {
    if (product.joystickMaterial) {
      product.joystickMaterial.color.set(e.target.value);
      if (document.querySelector('#arcadeGlow').checked) {
         product.joystickMaterial.emissive.set(e.target.value);
      }
      product.joystickMaterial.needsUpdate = true;
    }
  };
}
if (document.querySelector('#buttonColor')) {
  document.querySelector('#buttonColor').oninput = e => {
    if (product.buttonMaterial) {
      product.buttonMaterial.color.set(e.target.value);
      if (document.querySelector('#arcadeGlow').checked) {
         product.buttonMaterial.emissive.set(e.target.value);
      }
      product.buttonMaterial.needsUpdate = true;
    }
  };
}
if (document.querySelector('#arcadeGlow')) {
  document.querySelector('#arcadeGlow').onchange = e => {
    const isGlowing = e.target.checked;
    if (product.joystickMaterial) {
      if (isGlowing) {
        product.joystickMaterial.emissive.copy(product.joystickMaterial.color);
        product.joystickMaterial.emissiveIntensity = 0.8;
      } else {
        product.joystickMaterial.emissive.setHex(0x000000);
      }
      product.joystickMaterial.needsUpdate = true;
    }
    if (product.buttonMaterial) {
      if (isGlowing) {
        product.buttonMaterial.emissive.copy(product.buttonMaterial.color);
        product.buttonMaterial.emissiveIntensity = 0.8;
      } else {
        product.buttonMaterial.emissive.setHex(0x000000);
      }
      product.buttonMaterial.needsUpdate = true;
    }
  };
}

document.querySelectorAll('.quick-palette .swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const col = swatch.dataset.color;
    document.querySelector('#handleColor').value = col;
    document.querySelector('#innerColor').value = col;
    if (product.handleMaterial) { product.handleMaterial.color.set(col); product.handleMaterial.needsUpdate = true; }
    if (product.innerMaterial) { product.innerMaterial.color.set(col); product.innerMaterial.needsUpdate = true; }
  });
});
document.querySelector('#sceneColor').oninput = () => updateSceneBackground();
document.querySelector('#showGrid').onchange = e => grid.visible = e.target.checked;
document.querySelector('#showWatermark')?.addEventListener('change', () => {
  updateSceneBackground();
  buildTexture();
  showToast(document.querySelector('#showWatermark').checked ? 'Filigrane activé' : 'Filigrane retiré');
});
document.querySelector('#speed').oninput = e => { controls.autoRotateSpeed = Number(e.target.value) / 9.6 * (document.querySelector('#reverse').checked ? -1 : 1); document.querySelector('#speedValue').value = `${(Number(e.target.value) / 12).toFixed(1)}×`; };
document.querySelector('#reverse').onchange = e => controls.autoRotateSpeed = Math.abs(controls.autoRotateSpeed) * (e.target.checked ? -1 : 1);
const rotationAxes = { horizontal: new THREE.Vector3(0,1,0), vertical: new THREE.Vector3(1,0,0), diagonal: new THREE.Vector3(1,1,0).normalize(), swing: new THREE.Vector3(0,1,0) };
let swingAngle = 0, swingDirection = 1, previousFrameTime = performance.now();
function applyExportPose(progress, startPosition) {
  const mode = document.querySelector('#rotationMode').value, reverse = document.querySelector('#reverse').checked ? -1 : 1;
  const offset = startPosition.clone().sub(controls.target), angle = mode === 'swing' ? Math.sin(progress * Math.PI * 2) * .8 * reverse : progress * Math.PI * 2 * reverse;
  offset.applyAxisAngle(rotationAxes[mode], angle); camera.position.copy(controls.target).add(offset); camera.lookAt(controls.target);
}
function setViewAngle(degrees) { const radius = Math.hypot(camera.position.x - controls.target.x, camera.position.z - controls.target.z); const angle = THREE.MathUtils.degToRad(degrees); camera.position.x = controls.target.x + Math.cos(angle) * radius; camera.position.z = controls.target.z + Math.sin(angle) * radius; camera.lookAt(controls.target); controls.update(); document.querySelector('#viewAngle').value = degrees; document.querySelector('#angleValue').value = `${degrees}°`; }
document.querySelectorAll('[data-angle]').forEach(button => button.onclick = () => setViewAngle(Number(button.dataset.angle)));
document.querySelector('#viewAngle').oninput = e => setViewAngle(Number(e.target.value));
document.querySelector('#bgInput').onchange = e => { const file = e.target.files[0]; if (!file) return; const url = URL.createObjectURL(file); new THREE.TextureLoader().load(url, loaded => { backgroundTexture?.dispose(); backgroundTexture = loaded; backgroundTexture.colorSpace = THREE.SRGBColorSpace; scene.background = backgroundTexture; URL.revokeObjectURL(url); showToast('Image de fond appliquée'); }); };
document.querySelector('#clearBg').onclick = () => { backgroundTexture?.dispose(); backgroundTexture = null; updateSceneBackground(); document.querySelector('#bgInput').value = ''; };
// Synchronisation de la résolution d'export entre topbar et sidebar
const resSelectTop = document.querySelector('#exportResolution');
const resSelectSide = document.querySelector('#exportResolutionSide');
resSelectTop?.addEventListener('change', () => { if (resSelectSide) resSelectSide.value = resSelectTop.value; });
resSelectSide?.addEventListener('change', () => { if (resSelectTop) resSelectTop.value = resSelectSide.value; });

function getSelectedResolution() {
  return Number(resSelectTop?.value || resSelectSide?.value || 2);
}

function updateExportStatus(text) {
  const stTop = document.querySelector('#exportStatus');
  const stSide = document.querySelector('#exportStatusSide');
  if (stTop) stTop.textContent = text;
  if (stSide) stSide.textContent = text;
}

function runExportPng() {
  const overlayWasVisible = isOverlayVisible(), gridWasVisible = grid.visible;
  const scaleMultiplier = getSelectedResolution();
  setOverlayVisible(false);
  grid.visible = false;

  const currentPixelRatio = renderer.getPixelRatio();
  const currentSize = new THREE.Vector2();
  renderer.getSize(currentSize);

  // Application du multiplicateur de résolution
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);
  renderer.render(scene, camera);

  const a = document.createElement('a');
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  a.download = `mockup-${currentProductKey}-${resLabel}-${Date.now()}.png`;
  a.href = renderer.domElement.toDataURL('image/png');
  document.body.append(a);
  a.click();
  a.remove();

  // Restauration de la résolution d'écran standard
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(currentSize.x, currentSize.y, false);
  renderer.render(scene, camera);

  setOverlayVisible(overlayWasVisible);
  grid.visible = gridWasVisible;
  showToast(`Aperçu PNG ${resLabel.toUpperCase()} téléchargé`);
}
document.querySelector('#exportPng')?.addEventListener('click', runExportPng);
document.querySelector('#exportPngSide')?.addEventListener('click', runExportPng);

async function runExportMugViews() {
  if (currentProductKey !== 'mug11oz') {
    document.querySelector('#productSelect').value = 'mug11oz';
    document.querySelector('#productSelect').dispatchEvent(new Event('change'));
    await new Promise(r => setTimeout(r, 120));
  }

  const overlayWasVisible = isOverlayVisible(), gridWasVisible = grid.visible;
  const scaleMultiplier = getSelectedResolution();
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  setOverlayVisible(false);
  grid.visible = false;

  const currentPixelRatio = renderer.getPixelRatio();
  const currentSize = new THREE.Vector2();
  renderer.getSize(currentSize);

  // Sauvegarde de la pose initiale de la caméra
  const savedPosition = camera.position.clone();
  const savedTarget = controls.target.clone();

  // Les 3 angles clés demandés : 90°, 225° et 270°
  // - 90° : Côté anse droite (visuel côté droit et anse visible à droite)
  // - 225° : Face trois-quarts (visuel central bien visible)
  // - 270° : Côté anse gauche (visuel côté gauche avec départ du wrap)
  const views = [
    { name: 'vue1-90deg-anse-droite', degrees: 90, label: '90°' },
    { name: 'vue2-225deg-face', degrees: 225, label: '225°' },
    { name: 'vue3-270deg-anse-gauche', degrees: 270, label: '270°' }
  ];

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);

  for (let i = 0; i < views.length; i++) {
    const v = views[i];
    updateExportStatus(`Export vue ${i + 1}/3 (${v.label})…`);
    setViewAngle(v.degrees);
    camera.lookAt(controls.target);
    renderer.render(scene, camera);

    const a = document.createElement('a');
    a.download = `mockup-mug-vue-${i + 1}-${v.name}-${resLabel}-${Date.now()}.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    document.body.append(a);
    a.click();
    a.remove();
    await new Promise(r => setTimeout(r, 350));
  }

  updateExportStatus('Prêt');

  // Restauration de la caméra et de la résolution
  camera.position.copy(savedPosition);
  controls.target.copy(savedTarget);
  controls.update();

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(currentSize.x, currentSize.y, false);
  renderer.render(scene, camera);

  setOverlayVisible(overlayWasVisible);
  grid.visible = gridWasVisible;
  showToast(`3 vues Mug exportées (90°, 225°, 270°) - ${resLabel.toUpperCase()}`);
}
document.querySelector('#exportMugViews')?.addEventListener('click', runExportMugViews);
document.querySelector('#exportMugViewsSide')?.addEventListener('click', runExportMugViews);
document.querySelector('#exportMp4Side')?.addEventListener('click', () => {
  document.querySelector('#exportMp4')?.click();
});

document.querySelector('#exportMp4').onclick = exportMp4;

async function runExportKeychainViews() {
  const overlayWasVisible = isOverlayVisible(), gridWasVisible = grid.visible;
  const scaleMultiplier = getSelectedResolution();
  const resLabel = scaleMultiplier === 1 ? 'standard' : scaleMultiplier === 2 ? 'hd-2x' : 'ultrahd-3x';
  setOverlayVisible(false);
  grid.visible = false;

  const currentSize = new THREE.Vector2();
  renderer.getSize(currentSize);

  const savedPosition = camera.position.clone();
  const savedTarget = controls.target.clone();

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2) * scaleMultiplier);

  const views = [
    { name: 'face-a', degrees: 90, label: 'Face A' },
    { name: 'face-b', degrees: 270, label: 'Face B' }
  ];

  for (let i = 0; i < views.length; i++) {
    const v = views[i];
    updateExportStatus(`Export vue ${i + 1}/2 (${v.label})…`);
    setViewAngle(v.degrees);
    camera.lookAt(controls.target);
    renderer.render(scene, camera);

    const a = document.createElement('a');
    a.download = `mockup-${currentProductKey}-${v.name}-${resLabel}-${Date.now()}.png`;
    a.href = renderer.domElement.toDataURL('image/png');
    document.body.append(a);
    a.click();
    a.remove();
    await new Promise(r => setTimeout(r, 350));
  }

  updateExportStatus('Prêt');

  camera.position.copy(savedPosition);
  controls.target.copy(savedTarget);
  controls.update();

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(currentSize.x, currentSize.y, false);
  renderer.render(scene, camera);

  setOverlayVisible(overlayWasVisible);
  grid.visible = gridWasVisible;
  showToast(`2 vues Porte-clés exportées (Face A, Face B) - ${resLabel.toUpperCase()}`);
}

async function runExportAll() {
  const btn = document.querySelector('#exportAll');
  if (btn) btn.disabled = true;
  document.querySelector('#exportStatus').textContent = 'Export complet...';
  try {
    if (currentProductKey === 'mug11oz') {
      await runExportMugViews();
    } else if (currentProductKey.startsWith('keychain')) {
      await runExportKeychainViews();
    } else {
      runExportPng();
    }
    await exportMp4();
    showToast('Tous les exports sont terminés !');
  } catch(e) {
    console.error(e);
  } finally {
    if (btn) btn.disabled = false;
    document.querySelector('#exportStatus').textContent = 'Prêt';
  }
}
document.querySelector('#exportAll')?.addEventListener('click', runExportAll);
async function exportMp4() {
  const button = document.querySelector('#exportMp4'), status = document.querySelector('#exportStatus');
  if (!window.VideoEncoder || !window.VideoFrame) { await exportMp4Compat(button, status); return; }
  const width = renderer.domElement.width - renderer.domElement.width % 2, height = renderer.domElement.height - renderer.domElement.height % 2;
  const config = { codec: 'avc1.42001f', width, height, bitrate: 5_000_000, framerate: 30, avc: { format: 'avc' } };
  const support = await VideoEncoder.isConfigSupported(config).catch(() => null);
  if (!support?.supported) { await exportMp4Compat(button, status); return; }
  const oldText = button.textContent, startPosition = camera.position.clone(), offset = startPosition.clone().sub(controls.target);
  const radius = Math.hypot(offset.x, offset.z), startAngle = Math.atan2(offset.z, offset.x), target = new ArrayBufferTarget();
  const muxer = new Muxer({ target, video: { codec: 'avc', width, height }, fastStart: 'in-memory', firstTimestampBehavior: 'offset' });
  let encodeError = null;
  const encoder = new VideoEncoder({ output: (chunk, meta) => muxer.addVideoChunk(chunk, meta), error: error => { encodeError = error; } });
  const overlayWasVisible = isOverlayVisible(), gridWasVisible = grid.visible; setOverlayVisible(false); grid.visible = false; wrapPreview.visible = false;
  button.disabled = true; controls.enabled = false; controls.autoRotate = false; document.querySelector('#autoRotate').checked = false; encoder.configure(config);
  try {
    for (let i = 0; i < 180; i++) {
      applyExportPose(i / 180, startPosition); renderer.render(scene, camera);
      const frame = new VideoFrame(renderer.domElement, { timestamp: Math.round(i * 1_000_000 / 30), duration: Math.round(1_000_000 / 30) });
      encoder.encode(frame, { keyFrame: i % 60 === 0 }); frame.close();
      button.textContent = `Création du MP4… ${Math.round((i + 1) / 1.8)} %`; status.textContent = 'Gardez cette fenêtre ouverte';
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
    await encoder.flush(); if (encodeError) throw encodeError; muxer.finalize();
    const url = URL.createObjectURL(new Blob([target.buffer], { type: 'video/mp4' })), a = document.createElement('a');
    a.href = url; a.download = `animation-${currentProductKey}-${Date.now()}.mp4`; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 10000); showToast('Animation MP4 enregistrée');
  } catch (error) { console.error(error); showToast('Impossible de créer le MP4'); }
  finally { encoder.close(); camera.position.copy(startPosition); camera.lookAt(controls.target); controls.enabled = true; setOverlayVisible(overlayWasVisible); grid.visible = gridWasVisible; wrapPreview.visible = wrapWasVisible; button.disabled = false; button.textContent = oldText; status.textContent = 'PNG haute qualité ou MP4 de 6 secondes'; }
}
async function exportMp4Compat(button, status) {
  if (!window.MediaRecorder || !renderer.domElement.captureStream) { showToast('Export vidéo indisponible dans ce navigateur'); return; }
  const oldText = button.textContent, startPosition = camera.position.clone(), offset = startPosition.clone().sub(controls.target);
  const radius = Math.hypot(offset.x, offset.z), startAngle = Math.atan2(offset.z, offset.x), chunks = [];
  const stream = renderer.domElement.captureStream(30);
  const mimeType = ['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm'].find(type => MediaRecorder.isTypeSupported(type));
  if (!mimeType) { showToast('Enregistrement vidéo indisponible'); return; }
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 5_000_000 });
  recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
  const overlayWasVisible = isOverlayVisible(), gridWasVisible = grid.visible; setOverlayVisible(false); grid.visible = false; wrapPreview.visible = false;
  button.disabled = true; controls.enabled = false; controls.autoRotate = false; document.querySelector('#autoRotate').checked = false;
  try {
    recorder.start(250); const start = performance.now(), duration = 6000;
    await new Promise(resolve => { const recordFrame = now => { const progress = Math.min(1, (now - start) / duration); applyExportPose(progress, startPosition); renderer.render(scene, camera); button.textContent = `Enregistrement… ${Math.round(progress * 100)} %`; status.textContent = 'Création locale de la vidéo'; if (progress < 1) requestAnimationFrame(recordFrame); else resolve(); }; requestAnimationFrame(recordFrame); });
    const stopped = new Promise(resolve => recorder.addEventListener('stop', resolve, { once: true })); recorder.stop(); await stopped; stream.getTracks().forEach(track => track.stop());
    button.textContent = 'Conversion en MP4…'; status.textContent = 'Première conversion : quelques secondes';
    const [{ FFmpeg }, { fetchFile }] = await Promise.all([import('@ffmpeg/ffmpeg'), import('@ffmpeg/util')]);
    const ffmpeg = new FFmpeg(); await ffmpeg.load({ coreURL: '/ffmpeg-core.js', wasmURL: '/ffmpeg-core.wasm' });
    await ffmpeg.writeFile('rotation.webm', await fetchFile(new Blob(chunks, { type: mimeType })));
    const exitCode = await ffmpeg.exec(['-i','rotation.webm','-vf','scale=1280:-2','-r','30','-an','-c:v','libx264','-profile:v','baseline','-level','3.1','-pix_fmt','yuv420p','-movflags','+faststart','rotation.mp4']);
    if (exitCode !== 0) throw new Error(`FFmpeg a retourné le code ${exitCode}`);
    const data = await ffmpeg.readFile('rotation.mp4'); if (!data?.length) throw new Error('Le fichier MP4 est vide');
    const url = URL.createObjectURL(new Blob([data], { type: 'video/mp4' })), a = document.createElement('a');
    a.href = url; a.download = `animation-${currentProductKey}-${Date.now()}.mp4`; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 10000); ffmpeg.terminate(); showToast('Animation MP4 enregistrée');
  } catch (error) { console.error(error); showToast('La conversion MP4 a échoué'); }
  finally { if (recorder.state !== 'inactive') recorder.stop(); stream.getTracks().forEach(track => track.stop()); camera.position.copy(startPosition); camera.lookAt(controls.target); controls.enabled = true; setOverlayVisible(overlayWasVisible); grid.visible = gridWasVisible; wrapPreview.visible = wrapWasVisible; button.disabled = false; button.textContent = oldText; status.textContent = 'PNG haute qualité ou MP4 de 6 secondes'; }
}
function showToast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2400); }
function imageLocalCorners() {
  const active = getActiveImage();
  if (!active || !active.img) return [];
  const ir = active.img.width / active.img.height;
  const isTshirt = currentProductKey.startsWith('tshirt');
  const isKeychain = currentProductKey.startsWith('keychain');
  const sr = product.printAspect || 1.2;
  const meshW = product.meshWidth || (isTshirt ? 1.45 : isKeychain ? 1.2 : 2.4);
  const meshH = product.meshHeight || (isTshirt ? 1.85 : isKeychain ? 1.2 / sr : 2.0);
  
  let w, h;
  if ((active.fitMode === 'contain') === (ir > sr)) {
    w = meshW;
    h = w / ir;
  } else {
    h = meshH;
    w = h * ir;
  }
  const sx = active.scaleX ?? active.scale ?? 1;
  const sy = active.scaleY ?? active.scale ?? 1;
  w *= sx;
  h *= sy;
  const cx = active.x * (meshW / 2);
  const cy = active.y * (meshH / 2);
  const a = THREE.MathUtils.degToRad(active.rotation), c = Math.cos(a), s = Math.sin(a);
  return [[-w/2,-h/2],[w/2,-h/2],[w/2,h/2],[-w/2,h/2]].map(([x,y]) => [cx+x*c-y*s, cy+x*s+y*c]);
}
function projectPoint([x, y]) {
  let p;
  const active = getActiveImage();
  const side = active?.side || 'A';
  if (currentProductKey.startsWith('keychain')) {
    const yOffsets = { keychainHeart: 0.45, keychainRound: 0.32, keychainRect: 0.29 };
    const yOff = yOffsets[currentProductKey] || 0.32;
    const z = side === 'B' ? -0.015 : 0.015;
    const xPos = side === 'B' ? -x : x;
    p = new THREE.Vector3(xPos, y + yOff, z).project(camera);
  } else if (currentProductKey.startsWith('tshirt')) {
    const z = side === 'B' ? -0.015 : 0.015;
    const xPos = side === 'B' ? -x : x;
    p = new THREE.Vector3(xPos, y + 0.35, z).project(camera);
  } else {
    p = new THREE.Vector3(x, -0.002, y).project(camera);
  }
  return [(p.x * 0.5 + 0.5) * viewer.clientWidth, (-p.y * 0.5 + 0.5) * viewer.clientHeight];
}
function updateOverlay() {
  const active = getActiveImage();
  if (!active || !isOverlayVisible() || product.type !== 'flat') return;
  const side = active.side || 'A';
  if ((side === 'A' && camera.position.z < -0.1) || (side === 'B' && camera.position.z > 0.1)) {
    box.setAttribute('points', '');
    handles.forEach(h => { h.setAttribute('cx', -9999); h.setAttribute('cy', -9999); });
    edgeHandles.forEach(eh => { eh.setAttribute('cx', -9999); eh.setAttribute('cy', -9999); });
    rotateStem.setAttribute('x1', -9999); rotateStem.setAttribute('y1', -9999); rotateStem.setAttribute('x2', -9999); rotateStem.setAttribute('y2', -9999);
    rotateHandle.setAttribute('cx', -9999); rotateHandle.setAttribute('cy', -9999);
    return;
  }
  const points = imageLocalCorners().map(projectPoint);
  if (!points.length) return;
  box.setAttribute('points', points.map(p => p.join(',')).join(' '));
  handles.forEach((h, i) => { h.setAttribute('cx', points[i][0]); h.setAttribute('cy', points[i][1]); });
  
  // Positionnement des poignées d'arêtes (0: haut, 1: droite, 2: bas, 3: gauche)
  if (edgeHandles.length >= 4) {
    const midTop = [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2];
    const midRight = [(points[1][0] + points[2][0]) / 2, (points[1][1] + points[2][1]) / 2];
    const midBottom = [(points[2][0] + points[3][0]) / 2, (points[2][1] + points[3][1]) / 2];
    const midLeft = [(points[3][0] + points[0][0]) / 2, (points[3][1] + points[0][1]) / 2];
    const edgeCoords = [midTop, midRight, midBottom, midLeft];
    edgeHandles.forEach((eh, i) => {
      eh.setAttribute('cx', edgeCoords[i][0]);
      eh.setAttribute('cy', edgeCoords[i][1]);
    });
  }

  const top = [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2], center = points.reduce((a, p) => [a[0] + p[0] / 4, a[1] + p[1] / 4], [0, 0]);
  const dx = top[0] - center[0], dy = top[1] - center[1], len = Math.hypot(dx, dy) || 1, rot = [top[0] + dx / len * 28, top[1] + dy / len * 28];
  rotateStem.setAttribute('x1', top[0]); rotateStem.setAttribute('y1', top[1]); rotateStem.setAttribute('x2', rot[0]); rotateStem.setAttribute('y2', rot[1]);
  rotateHandle.setAttribute('cx', rot[0]); rotateHandle.setAttribute('cy', rot[1]);
}
let directDrag = null;
let viewerPointer = null;
function overlayCenter() { const pts = imageLocalCorners().map(projectPoint); return pts.reduce((a,p)=>[a[0]+p[0]/4,a[1]+p[1]/4],[0,0]); }
function pointInImage(x, y) {
  const points = imageLocalCorners().map(projectPoint);
  if (!points.length) return false;
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i], [xj, yj] = points[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
const raycaster = new THREE.Raycaster();
const mouseVec = new THREE.Vector2();

function getIntersection(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  mouseVec.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouseVec.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(mouseVec, camera);
  const targets = [];
  if (product.printMesh) targets.push(product.printMesh);
  product.group.traverse(child => {
    if (child.isMesh && child.material === product.topMaterial) targets.push(child);
  });
  const intersects = raycaster.intersectObjects(targets.length ? targets : product.group.children, true);
  return intersects.length > 0 ? intersects[0] : null;
}

renderer.domElement.addEventListener('pointerdown', e => {
  viewerPointer = { x: e.offsetX, y: e.offsetY };
  const active = getActiveImage();
  if (!active) return;

  if (currentProductKey === 'mug11oz') {
    const hit = getIntersection(e);
    if (hit) {
      controls.enabled = false;
      directDrag = {
        type: 'mug-drag',
        startX: e.clientX,
        startY: e.clientY,
        initialPosX: active.x,
        initialPosY: active.y
      };
      renderer.domElement.setPointerCapture(e.pointerId);
    }
  }
});

renderer.domElement.addEventListener('pointermove', e => {
  const active = getActiveImage();
  if (directDrag && directDrag.type === 'mug-drag' && active) {
    const dx = (e.clientX - directDrag.startX) / viewer.clientWidth;
    const dy = (e.clientY - directDrag.startY) / viewer.clientHeight;
    active.x = Math.max(-1, Math.min(1, directDrag.initialPosX + dx * 2.2));
    active.y = Math.max(-1, Math.min(1, directDrag.initialPosY - dy * 2.2));
    syncActiveControls();
    buildTexture();
  }
});

renderer.domElement.addEventListener('pointerup', e => {
  if (directDrag && directDrag.type === 'mug-drag') {
    try { renderer.domElement.releasePointerCapture(e.pointerId); } catch {}
    directDrag = null;
    controls.enabled = true;
    return;
  }
  const active = getActiveImage();
  if (!active || !viewerPointer) return;
  const moved = Math.hypot(e.offsetX - viewerPointer.x, e.offsetY - viewerPointer.y) > 5;
  if (!moved) {
    if (product.type === 'flat') {
      if (document.querySelector('#showTransformFrame').checked) {
        setOverlayVisible(pointInImage(e.offsetX, e.offsetY));
      }
    } else if (currentProductKey === 'mug11oz') {
      const hit = getIntersection(e);
      if (hit && hit.uv) {
        active.x = Math.max(-1, Math.min(1, (hit.uv.x - 0.5) * 2));
        active.y = Math.max(-1, Math.min(1, (hit.uv.y - 0.5) * 2));
        syncActiveControls();
        buildTexture();
        showToast('Image positionnée');
      }
    }
  }
  viewerPointer = null;
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelector('#showTransformFrame').checked = false;
    setOverlayVisible(false);
  }
});

box.addEventListener('pointerdown', e => {
  const active = getActiveImage();
  if (!active) return;
  e.preventDefault();
  directDrag = { type: 'move', x: e.clientX, y: e.clientY, startX: active.x, startY: active.y };
  overlay.setPointerCapture(e.pointerId);
  controls.enabled = false;
});

handles.forEach(h => h.addEventListener('pointerdown', e => {
  const active = getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = overlayCenter();
  directDrag = {
    type: 'corner-scale',
    corner: Number(h.dataset.corner),
    center: c,
    startDistance: Math.hypot(e.offsetX - c[0], e.offsetY - c[1]) || 1,
    startScaleX: active.scaleX ?? 1,
    startScaleY: active.scaleY ?? 1
  };
  overlay.setPointerCapture(e.pointerId);
  controls.enabled = false;
}));

edgeHandles.forEach(eh => eh.addEventListener('pointerdown', e => {
  const active = getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = overlayCenter();
  const edgeIndex = Number(eh.dataset.edge); // 0: haut (Y), 1: droite (X), 2: bas (Y), 3: gauche (X)
  directDrag = {
    type: 'edge-scale',
    edge: edgeIndex,
    center: c,
    startDistance: Math.hypot(e.offsetX - c[0], e.offsetY - c[1]) || 1,
    startScaleX: active.scaleX ?? 1,
    startScaleY: active.scaleY ?? 1
  };
  overlay.setPointerCapture(e.pointerId);
  controls.enabled = false;
}));

rotateHandle.addEventListener('pointerdown', e => {
  const active = getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = overlayCenter();
  directDrag = { type: 'rotate', center: c, startAngle: Math.atan2(e.offsetY - c[1], e.offsetX - c[0]), startRotation: active.rotation };
  overlay.setPointerCapture(e.pointerId);
  controls.enabled = false;
});

overlay.addEventListener('pointermove', e => {
  const active = getActiveImage();
  if (!directDrag || !active) return;
  const side = active.side || 'A';
  if (directDrag.type === 'move') {
    const dx = (e.clientX - directDrag.x) / viewer.clientWidth * 2.2;
    const xMove = side === 'B' ? -dx : dx;
    active.x = Math.max(-1, Math.min(1, directDrag.startX + xMove));
    active.y = Math.max(-1, Math.min(1, directDrag.startY - (e.clientY - directDrag.y) / viewer.clientHeight * 2.2));
  } else if (directDrag.type === 'corner-scale') {
    const currentDist = Math.hypot(e.offsetX - directDrag.center[0], e.offsetY - directDrag.center[1]);
    const factor = currentDist / directDrag.startDistance;
    active.scaleX = Math.max(0.15, Math.min(3.5, directDrag.startScaleX * factor));
    active.scaleY = Math.max(0.15, Math.min(3.5, directDrag.startScaleY * factor));
    active.scale = (active.scaleX + active.scaleY) / 2;
  } else if (directDrag.type === 'edge-scale') {
    const currentDist = Math.hypot(e.offsetX - directDrag.center[0], e.offsetY - directDrag.center[1]);
    const factor = currentDist / directDrag.startDistance;
    if (directDrag.edge === 0 || directDrag.edge === 2) {
      // Arête Haut ou Bas : étire ou compresse la hauteur (Y)
      active.scaleY = Math.max(0.15, Math.min(3.5, directDrag.startScaleY * factor));
    } else {
      // Arête Gauche ou Droite : étire ou compresse la largeur (X)
      active.scaleX = Math.max(0.15, Math.min(3.5, directDrag.startScaleX * factor));
    }
    active.scale = (active.scaleX + active.scaleY) / 2;
  } else if (directDrag.type === 'rotate') {
    const a = Math.atan2(e.offsetY - directDrag.center[1], e.offsetX - directDrag.center[0]);
    const dTheta = THREE.MathUtils.radToDeg(a - directDrag.startAngle);
    active.rotation = directDrag.startRotation + (side === 'B' ? -dTheta : dTheta);
  }
  syncActiveControls();
  buildTexture();
});

overlay.addEventListener('pointerup', () => {
  directDrag = null;
  controls.enabled = true;
});

function resize() {
  const { clientWidth: w, clientHeight: h } = viewer;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(viewer);
resize();

function animate(now = performance.now()) {
  requestAnimationFrame(animate);
  const dt = Math.min(.05, (now - previousFrameTime) / 1000);
  previousFrameTime = now;
  if (document.querySelector('#autoRotate').checked && controls.enabled) {
    const mode = document.querySelector('#rotationMode').value, reverse = document.querySelector('#reverse').checked ? -1 : 1, speed = Number(document.querySelector('#speed').value) / 12 * .55;
    let direction = reverse;
    if (mode === 'swing') {
      swingAngle += speed * dt * swingDirection;
      if (Math.abs(swingAngle) > .75) {
        swingAngle = Math.sign(swingAngle) * .75;
        swingDirection *= -1;
      }
      direction *= swingDirection;
    }
    const offset = camera.position.clone().sub(controls.target).applyAxisAngle(rotationAxes[mode], speed * dt * direction);
    camera.position.copy(controls.target).add(offset);
    camera.lookAt(controls.target);
  }
  controls.update();
  renderer.render(scene, camera);
  updateOverlay();
}
animate();

setTimeout(() => document.querySelector('#productSelect').dispatchEvent(new Event('change')), 100);
