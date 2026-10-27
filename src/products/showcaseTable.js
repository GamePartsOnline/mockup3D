import * as THREE from 'three';
import { mug11ozProduct } from './mug11oz.js';
import { mousePadProduct } from './mousePad.js';
import { tshirt3DProduct } from './tshirt3D.js';
import { capProduct } from './cap.js';
import { cushionProduct } from './cushion.js';
import { puzzleProduct } from './puzzle.js';
import { pencilCaseProduct } from './pencilCase.js';
import { coasterProduct } from './coaster.js';
import { coasterRoundProduct } from './coasterRound.js';
import { keychainRectProduct } from './keychainRect.js';
import { keychainRoundProduct } from './keychainRound.js';
import { keychainHeartProduct } from './keychainHeart.js';
import { eventWristbandProduct } from './eventWristband.js';
import { arcadeCabinetProduct } from './arcadeCabinet.js';
import { posterProduct } from './poster.js';

const SHOWCASE_LAYOUT = [
  // Accroché au mur derrière la table : Poster 80×60 cm vendu sans cadre (800×600 mm)
  { key: 'poster', def: posterProduct, label: 'Poster 80 × 60 cm (Sans cadre)', price: '25,00 €', pos: [0.05, 1.48, -1.05], scale: 0.8333, rot: [Math.PI / 2, 0, 0], wallMounted: true },
  // Rangée arrière : T-shirt agrandi sur présentoir, Mug posé sur la table juste à côté du T-shirt, Coussin 40×40 cm, Casquette
  { key: 'tshirt3D', def: tshirt3DProduct, label: 'T-shirt 3D (A4 210×297 mm)', price: '17,00 € - 21,00 €', pos: [-1.35, 0.517, -0.45], scale: 2.35, rot: [0, 0.12, 0], withStand: true },
  { key: 'mug11oz', def: mug11ozProduct, label: 'Mug blanc 11 oz (Ø 82×95 mm)', price: '13,00 €', pos: [-0.62, 0.001, -0.28], scale: 0.165, rot: [0, -0.45, 0] },
  { key: 'cushion', def: cushionProduct, label: 'Housse de coussin (400×400×150 mm)', price: '17,00 €', pos: [0.18, 0.111, -0.45], scale: 0.50, rot: [0, -0.04, 0] },
  { key: 'cap', def: capProduct, label: 'Casquette 3D (Front 120×65 mm)', price: '15,00 €', pos: [1.32, 0.024, -0.46], scale: 0.30, rot: [0, -0.22, 0] },
  // Rangée centrale : Puzzle (280×195×2 mm), Tapis de souris (240×200×3 mm), Trousse (210×130×10 mm), Sous-verres (90×90×3 mm)
  { key: 'puzzle', def: puzzleProduct, label: 'Puzzle 120 pièces (280×195×2 mm)', price: '15,00 €', pos: [-1.38, 0.005, 0.32], scale: 0.25, rot: [0, 0.02, 0] },
  { key: 'mousePad', def: mousePadProduct, label: 'Tapis de souris (240×200×3 mm)', price: '10,00 €', pos: [-0.48, 0.022, 0.32], scale: 0.2463, rot: [0, -0.02, 0] },
  { key: 'pencilCase', def: pencilCaseProduct, label: 'Trousse (210×130×10 mm)', price: '11,00 €', pos: [0.35, 0.013, 0.32], scale: 0.25, rot: [0, -0.03, 0] },
  { key: 'coaster', def: coasterProduct, label: 'Sous-verre carré (90×90×3 mm)', price: '8,00 €', pos: [1.05, 0.013, 0.25], scale: 0.2473, rot: [0, 0.05, 0] },
  { key: 'coasterRound', def: coasterRoundProduct, label: 'Sous-verre rond (90×90×3 mm)', price: '8,00 €', pos: [1.45, 0.008, 0.32], scale: 0.225, rot: [0, 0, 0] },
  // Rangée avant : Porte-clés Unisub (40.6 à 63.5 mm) et Bracelet événementiel (250×20×1 mm)
  { key: 'keychainRect', def: keychainRectProduct, label: 'Porte-clés rectangle (40.6×57.15×1.14 mm)', price: '6,00 €', pos: [-1.15, 0.002, 0.82], scale: 0.2479, rot: [-Math.PI / 2, 0, 0.05] },
  { key: 'keychainRound', def: keychainRoundProduct, label: 'Porte-clés rond (63.5×63.5×2.29 mm)', price: '6,00 €', pos: [-0.82, 0.004, 0.82], scale: 0.2484, rot: [-Math.PI / 2, 0, 0] },
  { key: 'keychainHeart', def: keychainHeartProduct, label: 'Porte-clés Cœur (57.2×63.5×2.29 mm)', price: '6,00 €', pos: [-0.48, 0.003, 0.82], scale: 0.1424, rot: [-Math.PI / 2, 0, -0.05] },
  { key: 'eventWristband', def: eventWristbandProduct, label: 'Bracelet tissu (250×20×1 mm)', price: '6,50 €', pos: [0.85, 0.003, 0.78], scale: 0.25, rot: [0, 0.03, 0] },
  // Posée au sol à gauche de la table : Borne d'Arcade (600×1700×700 mm)
  { key: 'arcadeCabinet', def: arcadeCabinetProduct, label: "Borne d'Arcade (Décoration spécifique)", price: '2290,00 €', pos: [-3.25, 0.790, -0.20], scale: 1.95, rot: [0, 0.42, 0], floorY: -0.835 }
];

function createTshirtStand() {
  const stand = new THREE.Group();
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x26303d, roughness: 0.35, metalness: 0.75 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0xd8b88c, roughness: 0.45, metalness: 0.05 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.022, 32), metalMat);
  base.position.set(0, -0.209, -0.02); base.castShadow = true; base.receiveShadow = true; stand.add(base);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.71, 16), metalMat);
  pole.position.set(0, 0.145, -0.025); pole.castShadow = true; stand.add(pole);
  // Cintre en bois logé à l'intérieur des épaules et du col du T-shirt (sans dépasser au-dessus)
  const neckBlock = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.018, 0.032, 20), woodMat);
  neckBlock.position.set(0, 0.525, -0.025); stand.add(neckBlock);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.30, 16), woodMat);
  bar.rotation.z = Math.PI / 2; bar.position.set(0, 0.50, -0.02); stand.add(bar);
  return stand;
}

function createBusinessCard() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 640;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const drawCard = (logoImg) => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 1024, 640);
    ctx.strokeStyle = '#1caa88'; ctx.lineWidth = 18; ctx.strokeRect(18, 18, 988, 604);
    ctx.fillStyle = '#111820'; ctx.fillRect(18, 520, 988, 102);
    if (logoImg) {
      const ratio = logoImg.width / logoImg.height, h = 290, w = Math.min(760, h * ratio);
      ctx.drawImage(logoImg, (1024 - w) / 2, 65, w, h);
    }
    ctx.fillStyle = '#111820'; ctx.font = 'bold 44px Inter, Arial, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('GRAPH2PRINT • IMPRESSION & SUBLIMATION 3D', 512, 445);
    ctx.fillStyle = '#65dfc0'; ctx.font = 'bold 54px Inter, Arial, sans-serif';
    ctx.fillText('www.graph2print.com', 512, 590);
    tex.needsUpdate = true;
  };
  drawCard(null);
  const img = new Image(); img.onload = () => drawCard(img); img.src = '/logo-graph2print.png';
  const cardGeo = new THREE.BoxGeometry(0.36, 0.004, 0.225);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  const topMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35, metalness: 0.02 });
  const card = new THREE.Mesh(cardGeo, [sideMat, sideMat, topMat, sideMat, sideMat, sideMat]);
  card.position.set(0.08, 0.003, 0.80); card.rotation.y = -0.06; card.castShadow = true; card.receiveShadow = true;
  card.userData = { showcaseProductKey: 'businessCard', isBusinessCard: true, showcaseLabel: 'www.graph2print.com', showcasePrice: 'GPO SARL', showcaseSub: 'Tél : 06.73.54.03.94', baseScale: 1 };
  return card;
}

function createStudioTable() {
  const tableGroup = new THREE.Group();
  const c = document.createElement('canvas'); c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1b2028'; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(15, 18, 23, 0.35)' : 'rgba(42, 50, 62, 0.25)';
    ctx.fillRect(0, (i * 6) % 512, 512, 2 + (i % 4));
  }
  const woodTex = new THREE.CanvasTexture(c);
  woodTex.colorSpace = THREE.SRGBColorSpace;
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, color: 0x222831, roughness: 0.42, metalness: 0.08 });
  const edgeMat = new THREE.MeshStandardMaterial({ color: 0x151920, roughness: 0.48, metalness: 0.1 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0x0f1318, roughness: 0.4, metalness: 0.35 });
  const topMesh = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.08, 2.1), [edgeMat, edgeMat, woodMat, edgeMat, edgeMat, edgeMat]);
  topMesh.position.set(0, -0.04, 0); topMesh.receiveShadow = true; topMesh.castShadow = true; tableGroup.add(topMesh);
  const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.045, 1.85), legMat);
  frameMesh.position.set(0, -0.10, 0); tableGroup.add(frameMesh);
  const legGeo = new THREE.CylinderGeometry(0.055, 0.042, 0.75, 20);
  for (const [lx, lz] of [[-2.05, -0.82], [2.05, -0.82], [-2.05, 0.82], [2.05, 0.82]]) {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(lx, -0.46, lz); leg.castShadow = true; leg.receiveShadow = true; tableGroup.add(leg);
  }
  tableGroup.add(createBusinessCard());
  return tableGroup;
}

export const showcaseTableProduct = {
  id: 'showcase', name: "Table d'accueil (Tous les produits)",
  dimensions: 'Cliquez sur un objet de la table pour le personnaliser',
  printable: [240, 200], icon: '🏠', printAspect: 1.0, isShowcase: true,
  create() {
    const group = new THREE.Group();
    const dummyMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const tableGroup = createStudioTable();
    group.add(tableGroup);
    const subProducts = [], interactiveWrappers = [];
    tableGroup.traverse(c => { if (c.userData?.isBusinessCard) interactiveWrappers.push(c); });
    let oneSidedCanvas = null, oneSidedTex = null, twoSidedCanvas = null, twoSidedTex = null, arcadeCanvas = null, arcadeTex = null, bandCanvas = null, bandTex = null;

    for (const item of SHOWCASE_LAYOUT) {
      const sub = item.def.create();
      const wrapper = new THREE.Group();
      wrapper.scale.setScalar(item.scale);
      wrapper.rotation.set(item.rot[0], item.rot[1], item.rot[2]);
      if (item.withStand) wrapper.add(createTshirtStand());
      wrapper.add(sub.group);
      wrapper.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(wrapper);
      const exactY = item.wallMounted ? item.pos[1] : (!box.isEmpty() ? (item.floorY ?? 0.001) - box.min.y : item.pos[1]);
      wrapper.position.set(item.pos[0], exactY, item.pos[2]);
      wrapper.userData = { showcaseProductKey: item.key, showcaseLabel: item.label, showcasePrice: item.price, baseScale: item.scale, baseY: exactY };
      group.add(wrapper);
      subProducts.push({ key: item.key, sub, wrapper });
      interactiveWrappers.push(wrapper);
    }

    function applyDecals(texture, isTwoSided, canvas, heartTexture) {
      if (!canvas) return;
      if (!oneSidedCanvas) oneSidedCanvas = document.createElement('canvas');
      oneSidedCanvas.width = canvas.width; oneSidedCanvas.height = canvas.height;
      const oCtx = oneSidedCanvas.getContext('2d');
      oCtx.fillStyle = '#ffffff'; oCtx.fillRect(0, 0, canvas.width, canvas.height);
      oCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      if (!oneSidedTex) { oneSidedTex = new THREE.CanvasTexture(oneSidedCanvas); oneSidedTex.colorSpace = THREE.SRGBColorSpace; }
      else oneSidedTex.needsUpdate = true;

      if (!twoSidedCanvas) twoSidedCanvas = document.createElement('canvas');
      twoSidedCanvas.width = canvas.width * 2; twoSidedCanvas.height = canvas.height;
      const tCtx = twoSidedCanvas.getContext('2d');
      tCtx.fillStyle = '#ffffff'; tCtx.fillRect(0, 0, twoSidedCanvas.width, twoSidedCanvas.height);
      tCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      tCtx.drawImage(canvas, canvas.width, 0, canvas.width, canvas.height);
      if (!twoSidedTex) { twoSidedTex = new THREE.CanvasTexture(twoSidedCanvas); twoSidedTex.colorSpace = THREE.SRGBColorSpace; }
      else twoSidedTex.needsUpdate = true;

      if (!arcadeCanvas) arcadeCanvas = document.createElement('canvas');
      arcadeCanvas.width = 3072; arcadeCanvas.height = 2048;
      const aCtx = arcadeCanvas.getContext('2d');
      aCtx.fillStyle = '#ffffff'; aCtx.fillRect(0, 0, 3072, 2048);
      for (const [col, row] of [[0, 1], [1, 1], [2, 1], [2, 0]]) aCtx.drawImage(canvas, col * 1024, row * 1024, 1024, 1024);
      if (!arcadeTex) { arcadeTex = new THREE.CanvasTexture(arcadeCanvas); arcadeTex.colorSpace = THREE.SRGBColorSpace; }
      else arcadeTex.needsUpdate = true;

      if (!bandCanvas) bandCanvas = document.createElement('canvas');
      bandCanvas.width = 2000; bandCanvas.height = 160;
      const bCtx = bandCanvas.getContext('2d');
      bCtx.fillStyle = '#ffffff'; bCtx.fillRect(0, 0, 2000, 160);
      for (const xPos of [220, 760, 1300]) bCtx.drawImage(canvas, xPos, 4, 360, 152);
      if (!bandTex) { bandTex = new THREE.CanvasTexture(bandCanvas); bandTex.colorSpace = THREE.SRGBColorSpace; }
      else bandTex.needsUpdate = true;

      for (const { key, sub } of subProducts) {
        if (sub.type === '3d-decal' && sub.applyDecals) sub.applyDecals(texture, false, canvas, heartTexture);
        else if (key === 'arcadeCabinet' && sub.topMaterial) { sub.topMaterial.map = arcadeTex; sub.topMaterial.color.set(0xffffff); sub.topMaterial.needsUpdate = true; }
        else if (key === 'eventWristband' && sub.topMaterial) { sub.topMaterial.map = bandTex; sub.topMaterial.color.set(0xffffff); sub.topMaterial.needsUpdate = true; }
        else if (sub.topMaterial) { sub.topMaterial.map = sub.twoSided ? twoSidedTex : oneSidedTex; sub.topMaterial.color.set(0xffffff); sub.topMaterial.needsUpdate = true; }
      }
    }

    function clearDecals() {
      for (const { sub } of subProducts) {
        sub.clearDecals?.();
        if (sub.topMaterial && sub.type !== '3d-decal') { sub.topMaterial.map = null; sub.topMaterial.needsUpdate = true; }
      }
    }

    return { group, topMaterial: dummyMat, baseMaterial: dummyMat, applyDecals, clearDecals, interactiveWrappers, type: '3d-decal', isShowcase: true, printAspect: 1.0, printable: [240, 200] };
  }
};
