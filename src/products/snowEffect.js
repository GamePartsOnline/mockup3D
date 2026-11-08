import * as THREE from 'three';

// Système de neige festive avec gros flocons, formation d'un tapis de neige blanc permanent et chute continue
export function createSnowSystem(count = 1200) {
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
  const tableY = 0.003;
  const tableMinX = -1.55, tableMaxX = 3.05, tableMinZ = -1.05, tableMaxZ = 1.05;

  // Tous les flocons démarrent en l'air et tombent progressivement vers le sol du showroom (aucun voile blanc sur la table)
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 8.6;
    const z = (Math.random() - 0.5) * 6.2;
    const baseGround = floorY;

    const pileOffset = Math.random() * 0.035;
    const y = baseGround + 0.8 + Math.random() * 4.2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      speed: 0.38 + Math.random() * 0.42,
      driftSpeed: 0.50 + Math.random() * 0.90,
      driftPhase: Math.random() * Math.PI * 2,
      settled: false,
      pileHeight: pileOffset,
      isPermanentFlake: false
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

  // Tapis de neige progressif qui démarre invisible (zéro voile blanc au départ)
  const snowCarpetMat = new THREE.MeshStandardMaterial({
    color: 0xf8faff,
    roughness: 0.92,
    metalness: 0.01,
    transparent: true,
    opacity: 0.0 // Démarre transparent et blanchit lentement au fil de la chute des flocons
  });

  const floorSnow = new THREE.Mesh(new THREE.PlaneGeometry(10.6, 9.4), snowCarpetMat);
  floorSnow.rotation.x = -Math.PI / 2;
  floorSnow.position.set(0.5, floorY + 0.005, 3.52);
  floorSnow.receiveShadow = true;
  group.add(floorSnow);

  // Monticule doux sous le grand sapin de Noël géant (à X: 4.90, bien dégagé de la table)
  const snowMoundMat = new THREE.MeshStandardMaterial({
    color: 0xfcfdff,
    roughness: 0.88,
    metalness: 0.02
  });
  const treeMound = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.35, 0.065, 28), snowMoundMat);
  treeMound.position.set(4.90, floorY + 0.030, 0.0);
  treeMound.receiveShadow = true;
  group.add(treeMound);

  let timeAccum = 0;
  let snowCoverage = 0.0;

  function update(dt) {
    if (!group.visible) return;
    timeAccum += dt;

    // Le sol blanchit progressivement jusqu'à couverture totale
    if (snowCoverage < 0.98) {
      snowCoverage = Math.min(0.98, snowCoverage + dt * 0.04);
      snowCarpetMat.opacity = snowCoverage;
    }

    const pos = geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const v = velocities[i];

      // Les flocons déjà posés au sol restent strictement immobiles et forment le tapis de neige
      if (v.settled) {
        continue;
      }

      const x = pos[idx];
      let y = pos[idx + 1];
      const z = pos[idx + 2];

      const groundTarget = floorY + v.pileHeight;

      if (y <= groundTarget) {
        // Le flocon touche le sol du showroom et devient fixe pour former le tapis
        pos[idx + 1] = groundTarget;
        v.settled = true;

        // Si le sol n'est pas encore totalement blanc ou pour renouveler la magie des flocons qui tombent,
        // on réinjecte périodiquement un nouveau flocon du ciel
        if (!v.isPermanentFlake) {
          setTimeout(() => {
            if (!group.visible) return;
            v.settled = false;
            v.pileHeight = Math.random() * 0.048;
            pos[idx] = (Math.random() - 0.5) * 8.6;
            pos[idx + 1] = 3.6 + Math.random() * 0.8;
            pos[idx + 2] = (Math.random() - 0.5) * 6.2;
          }, (10 + Math.random() * 25) * 1000);
        }
      } else {
        // Chute rapide et tourbillonnante
        y -= v.speed * dt;
        pos[idx + 1] = y;
        pos[idx] += Math.sin(timeAccum * v.driftSpeed + v.driftPhase) * 0.0022;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  }

  return { group, update };
}
