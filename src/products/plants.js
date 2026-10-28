import * as THREE from 'three';

function makeMonsteraLeafTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 512, 512);

  // Forme de feuille de Monstera avec découpes emblématiques
  ctx.save();
  ctx.translate(256, 480);
  ctx.scale(1, -1);
  ctx.fillStyle = '#2d6a4f';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(90, 80, 210, 180, 220, 320);
  ctx.bezierCurveTo(225, 410, 140, 470, 0, 480);
  ctx.bezierCurveTo(-140, 470, -225, 410, -220, 320);
  ctx.bezierCurveTo(-210, 180, -90, 80, 0, 0);
  ctx.fill();

  // Découpes (fenestrations) caractéristiques
  ctx.globalCompositeOperation = 'destination-out';
  const cuts = [[60, 220, 110, 240, 14], [80, 300, 130, 330, 16], [50, 370, 100, 410, 14],
                [-60, 220, -110, 240, 14], [-80, 300, -130, 330, 16], [-50, 370, -100, 410, 14]];
  for (const [x1, y1, x2, y2, r] of cuts) {
    ctx.lineWidth = r; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }

  // Nervure centrale et texture
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = '#52b788'; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 460); ctx.stroke();
  ctx.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeOrchidFlowerTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  ctx.save();
  ctx.translate(128, 128);

  // 3 sépales lavande/pourpre
  ctx.fillStyle = '#a855f7';
  for (const ang of [-Math.PI / 2, Math.PI / 4, 3 * Math.PI / 4]) {
    ctx.save(); ctx.rotate(ang);
    ctx.beginPath(); ctx.ellipse(0, 52, 22, 42, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // 2 grands pétales ronds lilas/pourpre
  ctx.fillStyle = '#c084fc';
  for (const ang of [-Math.PI / 6, -5 * Math.PI / 6]) {
    ctx.save(); ctx.rotate(ang);
    ctx.beginPath(); ctx.ellipse(0, 46, 32, 46, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // Cœur / Labelle pourpre foncé et pistil jaune
  ctx.fillStyle = '#6b21a8';
  ctx.beginPath(); ctx.ellipse(0, 18, 18, 22, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#facc15';
  ctx.beginPath(); ctx.arc(0, 8, 6, 0, Math.PI * 2); ctx.fill();
  ctx.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createOrchidPlant() {
  const group = new THREE.Group();
  // Pot en céramique blanche satinée
  const potMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.05 });
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.065, 0.16, 24), potMat);
  pot.position.y = 0.08; pot.castShadow = true; pot.receiveShadow = true; group.add(pot);

  // Terreau sombre
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x241d18, roughness: 0.9 });
  const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.076, 0.076, 0.02, 24), soilMat);
  soil.position.y = 0.155; group.add(soil);

  // Feuilles basales épaisses
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x1b4332, roughness: 0.35, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.18), leafMat);
    const ang = (i * Math.PI * 2) / 5;
    leaf.rotation.set(0.65, ang, 0, 'YXZ');
    leaf.position.set(Math.sin(ang) * 0.04, 0.16, Math.cos(ang) * 0.04);
    group.add(leaf);
  }

  // Tuteur en bambou
  const stakeMat = new THREE.MeshStandardMaterial({ color: 0xc2a679, roughness: 0.6 });
  const stake = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.45, 12), stakeMat);
  stake.position.set(0.02, 0.36, -0.01); stake.rotation.z = -0.04; group.add(stake);

  // Tige fine et courbée
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.5 });
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.16, 0),
    new THREE.Vector3(0.015, 0.38, 0),
    new THREE.Vector3(0.04, 0.48, 0.04),
    new THREE.Vector3(0.10, 0.52, 0.07),
    new THREE.Vector3(0.16, 0.47, 0.08)
  ]);
  const stem = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.0035, 8, false), stemMat);
  stem.castShadow = true; group.add(stem);

  // Fleurs d'orchidée pourpre
  const flowerTex = makeOrchidFlowerTexture();
  const flowerMat = new THREE.MeshStandardMaterial({ map: flowerTex, transparent: true, alphaTest: 0.15, side: THREE.DoubleSide, roughness: 0.4 });
  const flowerPoints = [
    [0.05, 0.46, 0.04, 0.2, 0.15],
    [0.08, 0.51, 0.06, -0.1, 0.18],
    [0.12, 0.51, 0.08, 0.25, 0.18],
    [0.16, 0.46, 0.08, 0.4, 0.16]
  ];
  for (const [x, y, z, ry, sc] of flowerPoints) {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(sc, sc), flowerMat);
    fl.position.set(x, y, z); fl.rotation.set(0.1, ry, 0.2); fl.castShadow = true; group.add(fl);
  }
  return group;
}

export function createMonsteraPlant() {
  const group = new THREE.Group();
  // Grand bac moderne au sol
  const potMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.1 });
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.16, 0.42, 28), potMat);
  pot.position.y = 0.21; pot.castShadow = true; pot.receiveShadow = true; group.add(pot);

  // Terreau
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x1f1915, roughness: 0.95 });
  const soil = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.03, 24), soilMat);
  soil.position.y = 0.405; group.add(soil);

  // Tiges et grandes feuilles de Monstera Deliciosa
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x1e5138, roughness: 0.45 });
  const leafTex = makeMonsteraLeafTexture();
  const leafMat = new THREE.MeshStandardMaterial({ map: leafTex, transparent: true, alphaTest: 0.2, side: THREE.DoubleSide, roughness: 0.32 });

  const leafConfigs = [
    { curve: [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(0.08, 0.75, 0.08), new THREE.Vector3(0.18, 1.05, 0.16)], size: [0.38, 0.44], rot: [0.35, 0.4, -0.2] },
    { curve: [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(-0.09, 0.82, -0.05), new THREE.Vector3(-0.22, 1.15, -0.12)], size: [0.42, 0.48], rot: [-0.3, -0.6, 0.3] },
    { curve: [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(0.12, 0.70, -0.10), new THREE.Vector3(0.28, 0.92, -0.18)], size: [0.36, 0.42], rot: [-0.4, 0.8, -0.3] },
    { curve: [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(-0.10, 0.65, 0.12), new THREE.Vector3(-0.24, 0.86, 0.22)], size: [0.34, 0.40], rot: [0.45, -0.8, 0.25] },
    { curve: [new THREE.Vector3(0, 0.4, 0), new THREE.Vector3(0.02, 0.95, -0.02), new THREE.Vector3(0.05, 1.30, 0.02)], size: [0.46, 0.52], rot: [0.2, 0.1, -0.1] }
  ];

  for (const cfg of leafConfigs) {
    const c = new THREE.CatmullRomCurve3(cfg.curve);
    const stem = new THREE.Mesh(new THREE.TubeGeometry(c, 16, 0.007, 8, false), stemMat);
    stem.castShadow = true; group.add(stem);
    const leaf = new THREE.Mesh(new THREE.PlaneGeometry(cfg.size[0], cfg.size[1]), leafMat);
    const end = cfg.curve[cfg.curve.length - 1];
    leaf.position.copy(end);
    leaf.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2]);
    leaf.castShadow = true; group.add(leaf);
  }

  return group;
}
