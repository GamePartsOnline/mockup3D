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
import { photoFrameProduct } from './photoFrame.js';
import { createTshirtStand, createStudioRoom } from './showcaseRoom.js';

export const SHOWCASE_LAYOUT = [
  // Accroché au mur décalé vers la droite et surélevé : Poster 80×60 cm sans cadre
  { key: 'poster', def: posterProduct, label: 'Poster 80 × 60 cm (Sans cadre)', price: '25,00 €', pos: [1.25, 0.95, -1.10], scale: 0.92, rot: [0, 0, 0], wallMounted: true },
  // Rangée arrière (décalée à droite sur la table) : T-shirt, Coussin, Poster A4, Casquette, Mug
  { key: 'tshirt3D', def: tshirt3DProduct, label: 'T-shirt 3D (A4 210×297 mm)', price: '20,00 €', pos: [-0.63, 0.517, -0.45], scale: 2.35, rot: [0, 0.12, 0], withStand: true },
  { key: 'cushion', def: cushionProduct, label: 'Housse de coussin (400×400×150 mm)', price: '17,00 €', pos: [0.80, 0.111, -0.45], scale: 0.50, rot: [0, -0.04, 0] },
  { key: 'photoFrame', def: photoFrameProduct, label: 'Poster A4 (Sans cadre)', price: '12,00 €', pos: [1.57, 0.001, -0.44], scale: 0.56, rot: [0, -0.18, 0] },
  { key: 'cap', def: capProduct, label: 'Casquette 3D (Front 120×65 mm)', price: '15,00 €', pos: [2.21, 0.024, -0.45], scale: 0.30, rot: [0, -0.22, 0] },
  { key: 'mug11oz', def: mug11ozProduct, label: 'Mug blanc 11 oz (Ø 82×95 mm)', price: '13,00 €', pos: [2.65, 0.001, -0.42], scale: 0.165, rot: [0, 2.70, 0] },
  // Rangée centrale : Puzzle, Tapis de souris, Trousse, Sous-verres
  { key: 'puzzle', def: puzzleProduct, label: 'Puzzle 120 pièces (280×195×2 mm)', price: '15,00 €', pos: [-0.63, 0.005, 0.32], scale: 0.25, rot: [0, 0.02, 0] },
  { key: 'mousePad', def: mousePadProduct, label: 'Tapis de souris (240×200×3 mm)', price: '10,00 €', pos: [0.27, 0.022, 0.32], scale: 0.2463, rot: [0, -0.02, 0] },
  { key: 'pencilCase', def: pencilCaseProduct, label: 'Trousse (210×130×10 mm)', price: '11,00 €', pos: [1.10, 0.013, 0.32], scale: 0.25, rot: [0, -0.03, 0] },
  { key: 'coaster', def: coasterProduct, label: 'Sous-verre carré (90×90×3 mm)', price: '8,00 €', pos: [1.80, 0.013, 0.25], scale: 0.2473, rot: [0, 0.05, 0] },
  { key: 'coasterRound', def: coasterRoundProduct, label: 'Sous-verre rond (90×90×3 mm)', price: '8,00 €', pos: [2.20, 0.008, 0.32], scale: 0.225, rot: [0, 0, 0] },
  // Rangée avant : Porte-clés Unisub et Bracelet événementiel
  { key: 'keychainRect', def: keychainRectProduct, label: 'Porte-clés rectangle (40.6×57.15×1.14 mm)', price: '6,00 €', pos: [-0.40, 0.002, 0.82], scale: 0.2479, rot: [-Math.PI / 2, 0, 0.05] },
  { key: 'keychainRound', def: keychainRoundProduct, label: 'Porte-clés rond (63.5×63.5×2.29 mm)', price: '6,00 €', pos: [-0.07, 0.004, 0.82], scale: 0.2484, rot: [-Math.PI / 2, 0, 0] },
  { key: 'keychainHeart', def: keychainHeartProduct, label: 'Porte-clés Cœur (57.2×63.5×2.29 mm)', price: '6,00 €', pos: [0.27, 0.003, 0.82], scale: 0.1424, rot: [-Math.PI / 2, 0, -0.05] },
  { key: 'eventWristband', def: eventWristbandProduct, label: 'Bracelet tissu (250×20×1 mm)', price: '6,50 €', pos: [1.60, 0.003, 0.78], scale: 0.25, rot: [0, 0.03, 0] },
  // Posée au sol à gauche : Borne d'Arcade avec dos noir collé contre le mur arrière
  { key: 'arcadeCabinet', def: arcadeCabinetProduct, label: "Borne d'Arcade (Décoration spécifique)", price: '2290,00 €', pos: [-2.55, 0.790, -0.60], scale: 1.85, rot: [0, 0, 0], floorY: -0.835 }
];

export const showcaseTableProduct = {
  id: 'showcase', name: 'Le Showroom 3D (Tous les objets)',
  dimensions: 'Cliquez sur un objet pour le personnaliser',
  printable: [240, 200], icon: '🏠', printAspect: 1.0, isShowcase: true,
  create() {
    const group = new THREE.Group();
    const dummyMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const room = createStudioRoom();
    group.add(room);
    const subProducts = [], interactiveWrappers = [];
    room.traverse(c => { if (c.userData?.isBusinessCard) interactiveWrappers.push(c); });
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
      oCtx.imageSmoothingEnabled = true; oCtx.imageSmoothingQuality = 'high';
      oCtx.fillStyle = '#ffffff'; oCtx.fillRect(0, 0, canvas.width, canvas.height);
      oCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      if (!oneSidedTex) {
        oneSidedTex = new THREE.CanvasTexture(oneSidedCanvas);
        oneSidedTex.colorSpace = THREE.SRGBColorSpace;
        oneSidedTex.generateMipmaps = false;
        oneSidedTex.minFilter = THREE.LinearFilter;
        oneSidedTex.magFilter = THREE.LinearFilter;
        oneSidedTex.anisotropy = 16;
      } else oneSidedTex.needsUpdate = true;

      if (!twoSidedCanvas) twoSidedCanvas = document.createElement('canvas');
      twoSidedCanvas.width = canvas.width * 2; twoSidedCanvas.height = canvas.height;
      const tCtx = twoSidedCanvas.getContext('2d');
      tCtx.imageSmoothingEnabled = true; tCtx.imageSmoothingQuality = 'high';
      tCtx.fillStyle = '#ffffff'; tCtx.fillRect(0, 0, twoSidedCanvas.width, twoSidedCanvas.height);
      tCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      tCtx.drawImage(canvas, canvas.width, 0, canvas.width, canvas.height);
      if (!twoSidedTex) {
        twoSidedTex = new THREE.CanvasTexture(twoSidedCanvas);
        twoSidedTex.colorSpace = THREE.SRGBColorSpace;
        twoSidedTex.generateMipmaps = false;
        twoSidedTex.minFilter = THREE.LinearFilter;
        twoSidedTex.magFilter = THREE.LinearFilter;
        twoSidedTex.anisotropy = 16;
      } else twoSidedTex.needsUpdate = true;

      if (!arcadeCanvas) arcadeCanvas = document.createElement('canvas');
      arcadeCanvas.width = 3072; arcadeCanvas.height = 2048;
      const aCtx = arcadeCanvas.getContext('2d');
      aCtx.imageSmoothingEnabled = true; aCtx.imageSmoothingQuality = 'high';
      aCtx.fillStyle = '#ffffff'; aCtx.fillRect(0, 0, 3072, 2048);
      for (const [col, row] of [[0, 1], [1, 1], [2, 0]]) aCtx.drawImage(canvas, col * 1024, row * 1024, 1024, 1024);
      // Fronton haut (col: 2, row: 1) : cadrage optimisé haute netteté
      aCtx.drawImage(canvas, 2048, 1024, 1024, 1024);
      if (!arcadeTex) {
        arcadeTex = new THREE.CanvasTexture(arcadeCanvas);
        arcadeTex.colorSpace = THREE.SRGBColorSpace;
        arcadeTex.generateMipmaps = true;
        arcadeTex.minFilter = THREE.LinearMipmapLinearFilter;
        arcadeTex.magFilter = THREE.LinearFilter;
        arcadeTex.anisotropy = 16;
      } else arcadeTex.needsUpdate = true;

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
