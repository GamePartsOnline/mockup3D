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
    ctx.fillStyle = '#1c1512'; ctx.fillRect(0, 0, 1024, 640);
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 14; ctx.strokeRect(14, 14, 996, 612);
    ctx.fillStyle = 'rgba(217, 119, 6, 0.14)'; ctx.fillRect(20, 20, 984, 140);
    if (logoImg) {
      const ratio = logoImg.width / logoImg.height, h = 180, w = Math.min(600, h * ratio);
      ctx.drawImage(logoImg, (1024 - w) / 2, 175, w, h);
    }
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 38px Inter, Arial, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('GRAPH2PRINT ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ¢ GPO SARL', 512, 400);
    ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 44px Inter, Arial, sans-serif';
    ctx.fillText('06 73 54 03 94', 512, 470);
    ctx.fillStyle = '#d1d5db'; ctx.font = '30px Inter, Arial, sans-serif';
    ctx.fillText('Cliquez pour ouvrir la carte de visite', 512, 555);
    tex.needsUpdate = true;
  };
  drawCard(null);
  const img = new Image(); img.onload = () => drawCard(img); img.src = '/logo-graph2print.png';
  const cardGeo = new THREE.BoxGeometry(0.36, 0.004, 0.225);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0x1c1512, roughness: 0.4 });
  const topMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35, metalness: 0.02 });
  const card = new THREE.Mesh(cardGeo, [sideMat, sideMat, topMat, sideMat, sideMat, sideMat]);
  card.position.set(0.83, 0.003, 0.80); card.rotation.y = -0.06; card.castShadow = true; card.receiveShadow = true;
  card.userData = { showcaseProductKey: 'businessCard', isBusinessCard: true, showcaseLabel: 'GPO SARL ÃÂÃÂ¢ÃÂÃÂÃÂÃÂ¢ Graph2Print', showcasePrice: '06 73 54 03 94', showcaseSub: 'Cliquez pour ouvrir la carte de visite complÃÂÃÂÃÂÃÂ¨te', baseScale: 1 };
  return card;
}

export function createStudioRoom() {
  const roomGroup = new THREE.Group();
  const tableX = 0.75;

  // Texture table atelier design noir graphite satine (met en valeur les produits sans etre marron)
  const c = document.createElement('canvas'); c.width = 1024; c.height = 1024;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1a1f26'; ctx.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 180; i++) {
    const y = (i * 6) % 1024;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(38, 46, 56, 0.35)' : 'rgba(18, 22, 28, 0.40)';
    ctx.fillRect(0, y, 1024, 1 + (i % 4));
  }
  for (let k = 0; k < 6; k++) {
    const kx = (k * 200 + 90) % 1024, ky = (k * 220 + 80) % 1024;
    const grad = ctx.createRadialGradient(kx, ky, 2, kx, ky, 50);
    grad.addColorStop(0, 'rgba(45, 54, 65, 0.25)'); grad.addColorStop(1, 'rgba(26, 31, 38, 0)');
    ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(kx, ky, 50, 0, Math.PI * 2); ctx.fill();
  }
  const woodTex = new THREE.CanvasTexture(c); woodTex.colorSpace = THREE.SRGBColorSpace;
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, color: 0x242a33, roughness: 0.36, metalness: 0.08 });
  const edgeMat = new THREE.MeshStandardMaterial({ color: 0x161a20, roughness: 0.42, metalness: 0.10 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0x101317, roughness: 0.40, metalness: 0.35 });

  // Plateau de table noir graphite satine
  const topMesh = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.08, 2.1), [edgeMat, edgeMat, woodMat, edgeMat, edgeMat, edgeMat]);
  topMesh.position.set(tableX, -0.04, 0); topMesh.receiveShadow = true; topMesh.castShadow = true; roomGroup.add(topMesh);

  // Cadre sous plateau et pieds en metal noir mat architectural
  const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.045, 1.85), legMat);
  frameMesh.position.set(tableX, -0.10, 0); roomGroup.add(frameMesh);
  const legGeo = new THREE.CylinderGeometry(0.055, 0.042, 0.75, 20);
  for (const [lx, lz] of [[-2.05, -0.82], [2.05, -0.82], [-2.05, 0.82], [2.05, 0.82]]) {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(lx + tableX, -0.46, lz); leg.castShadow = true; leg.receiveShadow = true; roomGroup.add(leg);
  }

  // Dimensions de la piece complete du Showroom 3D (hauteur sous plafond 5.8m sans collision)
  const roomCenterX = 0.5, roomWidth = 10.6, roomDepth = 9.4;
  const wallHeight = 5.80, wallY = 2.05, floorY = -0.835, ceilingY = 4.90, roomCenterZ = 3.52;
  const leftX = roomCenterX - roomWidth / 2, rightX = roomCenterX + roomWidth / 2;

  // 1. Mur arriere : claustra acoustique en tasseaux de chene
  const wallCanvas = document.createElement('canvas'); wallCanvas.width = 512; wallCanvas.height = 512;
  const wCtx = wallCanvas.getContext('2d');
  wCtx.fillStyle = '#1c1714'; wCtx.fillRect(0, 0, 512, 512);
  for (let x = 0; x < 512; x += 24) {
    wCtx.fillStyle = '#b37f4d'; wCtx.fillRect(x + 4, 0, 16, 512);
    wCtx.fillStyle = 'rgba(255, 225, 185, 0.22)'; wCtx.fillRect(x + 4, 0, 3, 512);
    wCtx.fillStyle = 'rgba(50, 30, 12, 0.40)'; wCtx.fillRect(x + 18, 0, 2, 512);
  }
  const wallTex = new THREE.CanvasTexture(wallCanvas); wallTex.wrapS = THREE.RepeatWrapping; wallTex.repeat.set(8, 1);
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.65, metalness: 0.05 });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, wallHeight, 0.08), wallMat);
  backWall.position.set(roomCenterX, wallY, -1.18); backWall.receiveShadow = true; roomGroup.add(backWall);

  // 2. Murs lateraux gauche et droit (enduit chaud mineral architectural)
  const sideWallMat = new THREE.MeshStandardMaterial({ color: 0xe0dbd2, roughness: 0.85, metalness: 0.02 });
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, wallHeight, roomDepth), sideWallMat);
  leftWall.position.set(leftX, wallY, roomCenterZ); leftWall.receiveShadow = true; roomGroup.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, wallHeight, roomDepth), sideWallMat);
  rightWall.position.set(rightX, wallY, roomCenterZ); rightWall.receiveShadow = true; roomGroup.add(rightWall);

  // 3. Plafond avec spots architecturaux encastres
  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0xeee9e2, roughness: 0.90, metalness: 0.02 });
  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, 0.08, roomDepth), ceilingMat);
  ceiling.position.set(roomCenterX, ceilingY, roomCenterZ); ceiling.receiveShadow = true; roomGroup.add(ceiling);

  // Rails d eclairage architectural noir au plafond
  const railMat = new THREE.MeshStandardMaterial({ color: 0x181b20, roughness: 0.40, metalness: 0.4 });
  for (const rz of [0.5, 2.8]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(roomWidth - 1.2, 0.035, 0.04), railMat);
    rail.position.set(roomCenterX, ceilingY - 0.035, rz); roomGroup.add(rail);
    // Spots cylindriques le long du rail
    for (let sx = -3.5; sx <= 4.0; sx += 1.8) {
      const spotMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.08, 12), railMat);
      spotMesh.position.set(roomCenterX + sx, ceilingY - 0.075, rz);
      spotMesh.rotation.x = 0.25; roomGroup.add(spotMesh);
    }
  }

  // 4. Plinthes basses en metal noir architectural
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0x15181e, roughness: 0.50, metalness: 0.2 });
  const plinthBack = new THREE.Mesh(new THREE.BoxGeometry(roomWidth, 0.12, 0.05), plinthMat);
  plinthBack.position.set(roomCenterX, -0.775, -1.14); plinthBack.receiveShadow = true; roomGroup.add(plinthBack);

  const plinthLeft = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, roomDepth), plinthMat);
  plinthLeft.position.set(leftX + 0.04, -0.775, roomCenterZ); plinthLeft.receiveShadow = true; roomGroup.add(plinthLeft);

  const plinthRight = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, roomDepth), plinthMat);
  plinthRight.position.set(rightX - 0.04, -0.775, roomCenterZ); plinthRight.receiveShadow = true; roomGroup.add(plinthRight);

  // 5. Sol architectural en beton cire grege chaud satine
  const floorCanvas = document.createElement('canvas'); floorCanvas.width = 1024; floorCanvas.height = 1024;
  const fCtx = floorCanvas.getContext('2d');
  fCtx.fillStyle = '#3c3732'; fCtx.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 200; i++) {
    const rx = (i * 137) % 1024, ry = (i * 219) % 1024, rad = 30 + (i % 70);
    const g = fCtx.createRadialGradient(rx, ry, 2, rx, ry, rad);
    const alpha = (i % 2 === 0) ? 0.08 : 0.05;
    g.addColorStop(0, i % 3 === 0 ? 'rgba(95, 85, 76, ' + alpha + ')' : 'rgba(45, 40, 36, ' + alpha + ')');
    g.addColorStop(1, 'rgba(60, 55, 50, 0)');
    fCtx.fillStyle = g; fCtx.beginPath(); fCtx.arc(rx, ry, rad, 0, Math.PI * 2); fCtx.fill();
  }
  fCtx.strokeStyle = 'rgba(25, 22, 19, 0.65)'; fCtx.lineWidth = 2;
  fCtx.strokeRect(0, 0, 512, 512); fCtx.strokeRect(512, 0, 512, 512);
  fCtx.strokeRect(0, 512, 512, 512); fCtx.strokeRect(512, 512, 512, 512);

  const floorTex = new THREE.CanvasTexture(floorCanvas);
  floorTex.wrapS = THREE.RepeatWrapping; floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(5, 3);

  const studioFloor = new THREE.Mesh(new THREE.PlaneGeometry(roomWidth, roomDepth), new THREE.MeshStandardMaterial({
    map: floorTex,
    color: 0x9a948c,
    roughness: 0.58,
    metalness: 0.03
  }));
  studioFloor.name = 'studioFloor';
  studioFloor.userData = { customFloor: true };
  studioFloor.rotation.x = -Math.PI / 2;
  studioFloor.position.set(roomCenterX, floorY, roomCenterZ);
  studioFloor.receiveShadow = true;
  roomGroup.add(studioFloor);

  // 6. Eclairage chaleureux des spots plafonniers
  const warmLight = new THREE.PointLight(0xfff0db, 1.4, 14, 1.3);
  warmLight.position.set(tableX, ceilingY - 0.35, 0.5);
  roomGroup.add(warmLight);

  const arcadeSpot = new THREE.PointLight(0xffe8cf, 1.1, 10, 1.4);
  arcadeSpot.position.set(-2.55, ceilingY - 0.35, -0.1);
  roomGroup.add(arcadeSpot);

  const warmAccent = new THREE.PointLight(0xffd5a0, 0.7, 8, 1.5);
  warmAccent.position.set(3.40, ceilingY - 0.60, 1.0);
  roomGroup.add(warmAccent);

  // Carte de visite interactive posÃÂÃÂÃÂÃÂ©e sur la table
  roomGroup.add(createBusinessCard());

  // OrchidÃÂÃÂÃÂÃÂ©e violette en pot
  const orchid = createOrchidPlant();
  orchid.scale.setScalar(1.5);
  orchid.position.set(0.12, 0.001, -0.42);
  roomGroup.add(orchid);

  // Monstera Deliciosa en pot
  const monstera = createMonsteraPlant();
  monstera.position.set(3.40, -0.835, -0.05);
  roomGroup.add(monstera);

  return roomGroup;
}
