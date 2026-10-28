import * as THREE from 'three';
import { createOrchidPlant, createMonsteraPlant } from './plants.js';

export function createTshirtStand() {
  const stand = new THREE.Group();
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x26303d, roughness: 0.35, metalness: 0.75 });
  const woodMat = new THREE.MeshStandardMaterial({ color: 0xd8b88c, roughness: 0.45, metalness: 0.05 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.022, 32), metalMat);
  base.position.set(0, -0.209, -0.02); base.castShadow = true; base.receiveShadow = true; stand.add(base);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.71, 16), metalMat);
  pole.position.set(0, 0.145, -0.025); pole.castShadow = true; stand.add(pole);
  const neckBlock = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.018, 0.032, 20), woodMat);
  neckBlock.position.set(0, 0.525, -0.025); stand.add(neckBlock);
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.30, 16), woodMat);
  bar.rotation.z = Math.PI / 2; bar.position.set(0, 0.50, -0.02); stand.add(bar);
  return stand;
}

export function createBusinessCard() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 640;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const drawCard = (logoImg) => {
    ctx.fillStyle = '#111827'; ctx.fillRect(0, 0, 1024, 640);
    ctx.strokeStyle = '#8b5cf6'; ctx.lineWidth = 14; ctx.strokeRect(14, 14, 996, 612);
    ctx.fillStyle = 'rgba(139, 92, 246, 0.18)'; ctx.fillRect(20, 20, 984, 140);
    if (logoImg) {
      const ratio = logoImg.width / logoImg.height, h = 180, w = Math.min(600, h * ratio);
      ctx.drawImage(logoImg, (1024 - w) / 2, 175, w, h);
    }
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 38px Inter, Arial, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('GRAPH2PRINT • GPO SARL', 512, 400);
    ctx.fillStyle = '#c084fc'; ctx.font = 'bold 44px Inter, Arial, sans-serif';
    ctx.fillText('06 73 54 03 94', 512, 470);
    ctx.fillStyle = '#94a3b8'; ctx.font = '30px Inter, Arial, sans-serif';
    ctx.fillText('Cliquez pour ouvrir la carte de visite', 512, 555);
    tex.needsUpdate = true;
  };
  drawCard(null);
  const img = new Image(); img.onload = () => drawCard(img); img.src = '/logo-graph2print.png';
  const cardGeo = new THREE.BoxGeometry(0.36, 0.004, 0.225);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.4 });
  const topMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35, metalness: 0.02 });
  const card = new THREE.Mesh(cardGeo, [sideMat, sideMat, topMat, sideMat, sideMat, sideMat]);
  card.position.set(0.83, 0.003, 0.80); card.rotation.y = -0.06; card.castShadow = true; card.receiveShadow = true;
  card.userData = { showcaseProductKey: 'businessCard', isBusinessCard: true, showcaseLabel: 'GPO SARL • Graph2Print', showcasePrice: '06 73 54 03 94', showcaseSub: 'Cliquez pour ouvrir la carte de visite complète', baseScale: 1 };
  return card;
}

export function createStudioRoom() {
  const roomGroup = new THREE.Group();
  const tableX = 0.75;

  // Texture bois noir satiné pour la table
  const c = document.createElement('canvas'); c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1e242d'; ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(15, 18, 23, 0.35)' : 'rgba(42, 50, 62, 0.22)';
    ctx.fillRect(0, (i * 6) % 512, 512, 2 + (i % 4));
  }
  const woodTex = new THREE.CanvasTexture(c); woodTex.colorSpace = THREE.SRGBColorSpace;
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, color: 0x242a34, roughness: 0.38, metalness: 0.08 });
  const edgeMat = new THREE.MeshStandardMaterial({ color: 0x141820, roughness: 0.45, metalness: 0.1 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0x0f1318, roughness: 0.4, metalness: 0.35 });

  // Plateau de table décalé vers la droite
  const topMesh = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.08, 2.1), [edgeMat, edgeMat, woodMat, edgeMat, edgeMat, edgeMat]);
  topMesh.position.set(tableX, -0.04, 0); topMesh.receiveShadow = true; topMesh.castShadow = true; roomGroup.add(topMesh);

  // Cadre sous plateau et pieds
  const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.045, 1.85), legMat);
  frameMesh.position.set(tableX, -0.10, 0); roomGroup.add(frameMesh);
  const legGeo = new THREE.CylinderGeometry(0.055, 0.042, 0.75, 20);
  for (const [lx, lz] of [[-2.05, -0.82], [2.05, -0.82], [-2.05, 0.82], [2.05, 0.82]]) {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(lx + tableX, -0.46, lz); leg.castShadow = true; leg.receiveShadow = true; roomGroup.add(leg);
  }

  // Mur arrière de showroom 3D (élargi à 8.6 m pour couvrir tout le fond)
  const wallCanvas = document.createElement('canvas'); wallCanvas.width = 512; wallCanvas.height = 512;
  const wCtx = wallCanvas.getContext('2d');
  wCtx.fillStyle = '#262d38'; wCtx.fillRect(0, 0, 512, 512);
  for (let x = 0; x < 512; x += 32) {
    wCtx.fillStyle = 'rgba(15, 20, 26, 0.25)'; wCtx.fillRect(x, 0, 2, 512);
    wCtx.fillStyle = 'rgba(255, 255, 255, 0.04)'; wCtx.fillRect(x + 2, 0, 30, 512);
  }
  const wallTex = new THREE.CanvasTexture(wallCanvas); wallTex.wrapS = THREE.RepeatWrapping; wallTex.repeat.set(10, 1);
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.85, metalness: 0.05 });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(16.0, 4.4, 0.08), wallMat);
  backWall.position.set(tableX, 1.35, -1.18); backWall.receiveShadow = true; roomGroup.add(backWall);

  // Plinthe basse au pied du mur
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0x12171e, roughness: 0.5 });
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(16.0, 0.12, 0.05), plinthMat);
  plinth.position.set(tableX, -0.775, -1.14); plinth.receiveShadow = true; roomGroup.add(plinth);

  // Sol du studio / showroom (noir en mode nuit)
  const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark';
  const studioFloor = new THREE.Mesh(new THREE.PlaneGeometry(24.0, 14.0), new THREE.MeshStandardMaterial({ color: isDark ? 0x000000 : 0xdde3ea, roughness: 0.85, metalness: 0.05 }));
  studioFloor.name = 'studioFloor'; studioFloor.rotation.x = -Math.PI / 2; studioFloor.position.set(tableX, -0.835, 3.5); studioFloor.receiveShadow = true; roomGroup.add(studioFloor);

  // Carte de visite interactive posée sur la table
  roomGroup.add(createBusinessCard());

  // Orchidée violette en pot posée sur le bureau (table) agrandie
  const orchid = createOrchidPlant();
  orchid.scale.setScalar(1.5);
  orchid.position.set(0.12, 0.001, -0.42);
  roomGroup.add(orchid);

  // Monstera Deliciosa en pot posée au sol à droite de la table
  const monstera = createMonsteraPlant();
  monstera.position.set(3.40, -0.835, -0.05);
  roomGroup.add(monstera);

  return roomGroup;
}
