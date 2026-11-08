import * as THREE from 'three';

// Système de neige festive continue ininterrompue avec gros flocons et tapis blanc au sol
export function createSnowSystem(count = 1100) {
  const group = new THREE.Group();
  group.name = 'snowParticleGroup';

  // Texture circulaire douce duveteuse
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.96)');
  grad.addColorStop(0.70, 'rgba(240, 248, 255, 0.65)');
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(64, 64, 64, 0, Math.PI * 2);
  ctx.fill();

  const snowTex = new THREE.CanvasTexture(canvas);
  snowTex.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];

  const floorY = -0.835;
  const ceilingY = 3.9;

  // Répartition uniforme dès le départ sur toute la hauteur pour un flux continu dès la première seconde
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 9.6 + 0.5;
    const z = (Math.random() - 0.5) * 7.2 + 0.5;
    const y = floorY + Math.random() * (ceilingY - floorY + 0.5);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      speed: 0.32 + Math.random() * 0.44,
      driftSpeed: 0.60 + Math.random() * 0.80,
      driftAmpX: 0.0018 + Math.random() * 0.0016,
      driftAmpZ: 0.0012 + Math.random() * 0.0012,
      driftPhase: Math.random() * Math.PI * 2
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.115, // Gros flocons duveteux très visibles
    map: snowTex,
    transparent: true,
    opacity: 0.96,
    depthWrite: false,
    blending: THREE.NormalBlending
  });

  const points = new THREE.Points(geometry, material);
  group.add(points);

  // Tapis de neige progressif qui démarre transparent et blanchit le sol en douceur
  const snowCarpetMat = new THREE.MeshStandardMaterial({
    color: 0xf8faff,
    roughness: 0.92,
    metalness: 0.01,
    transparent: true,
    opacity: 0.0
  });

  const floorSnow = new THREE.Mesh(new THREE.PlaneGeometry(11.2, 9.8), snowCarpetMat);
  floorSnow.rotation.x = -Math.PI / 2;
  floorSnow.position.set(0.5, floorY + 0.005, 3.52);
  floorSnow.receiveShadow = true;
  group.add(floorSnow);

  // Monticule doux sous le grand sapin de Noël géant
  const snowMoundMat = new THREE.MeshStandardMaterial({
    color: 0xfcfdff,
    roughness: 0.88,
    metalness: 0.02
  });
  const treeMound = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.45, 0.065, 28), snowMoundMat);
  treeMound.position.set(4.90, floorY + 0.030, 0.0);
  treeMound.receiveShadow = true;
  group.add(treeMound);

  let timeAccum = 0;
  let snowCoverage = 0.0;

  function update(dt) {
    if (!group.visible) return;
    const clampedDt = Math.min(dt, 0.1);
    timeAccum += clampedDt;

    // Le tapis de sol blanchit progressivement
    if (snowCoverage < 0.98) {
      snowCoverage = Math.min(0.98, snowCoverage + clampedDt * 0.05);
      snowCarpetMat.opacity = snowCoverage;
    }

    const pos = geometry.attributes.position.array;

    // Chute continue ininterrompue sans aucun blocage
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const v = velocities[i];

      let y = pos[idx + 1] - v.speed * clampedDt;

      // Dès qu'un flocon atteint le sol, il réapparaît immédiatement au plafond
      if (y <= floorY) {
        y = ceilingY + Math.random() * 0.6;
        pos[idx] = (Math.random() - 0.5) * 9.6 + 0.5;
        pos[idx + 2] = (Math.random() - 0.5) * 7.2 + 0.5;
        v.speed = 0.32 + Math.random() * 0.44;
        v.driftPhase = Math.random() * Math.PI * 2;
      } else {
        // Balancement sinusoïdal naturel au vent
        pos[idx] += Math.sin(timeAccum * v.driftSpeed + v.driftPhase) * v.driftAmpX;
        pos[idx + 2] += Math.cos(timeAccum * (v.driftSpeed * 0.85) + v.driftPhase) * v.driftAmpZ;
      }

      pos[idx + 1] = y;
    }

    geometry.attributes.position.needsUpdate = true;
  }

  return { group, update };
}
