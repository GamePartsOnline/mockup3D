import * as THREE from 'three';
import { createOrchidPlant, createMonsteraPlant } from './plants.js';
import { createSnowSystem } from './snowEffect.js';

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

// Grande assiette gourmande en céramique avec généreux cookies aux pépites de chocolat
export function createCookiesPlate() {
  const plateGroup = new THREE.Group();
  plateGroup.name = 'cookiesPlateGroup';

  // Assiette en céramique crème artisanale avec liseré doré
  const ceramicMat = new THREE.MeshStandardMaterial({
    color: 0xfbf8f3,
    roughness: 0.25,
    metalness: 0.03
  });

  const goldTrimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    roughness: 0.3,
    metalness: 0.7
  });

  // Base large de l'assiette gourmande
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.17, 0.010, 36), ceramicMat);
  base.position.y = 0.005;
  base.castShadow = true;
  base.receiveShadow = true;
  plateGroup.add(base);

  // Rebord évasé généreux de l'assiette
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.016, 36), ceramicMat);
  rim.position.y = 0.014;
  rim.castShadow = true;
  rim.receiveShadow = true;
  plateGroup.add(rim);

  // Liseré festif doré sur le bord extérieur
  const trim = new THREE.Mesh(new THREE.CylinderGeometry(0.222, 0.220, 0.005, 36), goldTrimMat);
  trim.position.y = 0.021;
  plateGroup.add(trim);

  // Texture procédurale de cookie doré cuit au four avec éclats
  const cCanvas = document.createElement('canvas');
  cCanvas.width = 256;
  cCanvas.height = 256;
  const ctx = cCanvas.getContext('2d');
  ctx.fillStyle = '#c58f50';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 500; i++) {
    const cx = Math.random() * 256, cy = Math.random() * 256, cr = 1 + Math.random() * 3.5;
    ctx.fillStyle = Math.random() > 0.5 ? '#b27a3c' : '#ddaa6c';
    ctx.beginPath();
    ctx.arc(cx, cy, cr, 0, Math.PI * 2);
    ctx.fill();
  }
  const cookieTex = new THREE.CanvasTexture(cCanvas);
  cookieTex.colorSpace = THREE.SRGBColorSpace;

  const cookieDoughMat = new THREE.MeshStandardMaterial({
    map: cookieTex,
    color: 0xd89e60,
    roughness: 0.80,
    metalness: 0.02
  });

  const chipMat = new THREE.MeshStandardMaterial({
    color: 0x1f0e04,
    roughness: 0.32,
    metalness: 0.12
  });

  const cookieGeo = new THREE.CylinderGeometry(0.048, 0.052, 0.015, 24);
  const chipGeo = new THREE.DodecahedronGeometry(0.0075, 0);

  function createSingleCookie() {
    const single = new THREE.Group();
    const dough = new THREE.Mesh(cookieGeo, cookieDoughMat);
    dough.castShadow = true;
    dough.receiveShadow = true;
    single.add(dough);

    // 8 pépites de chocolat noir généreuses incrustées en surface
    const chipPositions = [
      [0.016, 0.008, 0.014],
      [-0.018, 0.008, -0.016],
      [0.022, 0.008, -0.012],
      [-0.012, 0.008, 0.022],
      [0.004, 0.008, -0.022],
      [-0.026, 0.008, 0.008],
      [0.028, 0.008, 0.018],
      [0.002, 0.008, 0.004]
    ];
    chipPositions.forEach(cp => {
      const chip = new THREE.Mesh(chipGeo, chipMat);
      chip.position.set(cp[0], cp[1], cp[2]);
      chip.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      chip.castShadow = true;
      single.add(chip);
    });
    return single;
  }

  // 7 délicieux cookies disposés en pyramide gourmande
  // Couronne de 5 cookies au fond de l'assiette
  const radius = 0.088;
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI / 5) + 0.2;
    const c = createSingleCookie();
    c.position.set(Math.cos(angle) * radius, 0.017, Math.sin(angle) * radius);
    c.rotation.y = angle + 0.3;
    plateGroup.add(c);
  }

  // Cookie 6 au centre
  const cookieCenter = createSingleCookie();
  cookieCenter.position.set(0.005, 0.023, 0.002);
  cookieCenter.rotation.y = 0.9;
  plateGroup.add(cookieCenter);

  // Cookie 7 posé au sommet, légèrement incliné
  const cookieTop = createSingleCookie();
  cookieTop.position.set(-0.012, 0.034, -0.008);
  cookieTop.rotation.set(0.14, 0.6, -0.12);
  plateGroup.add(cookieTop);

  // Positionnée sur la table en avant-droite, bien en retrait du bord et stable
  plateGroup.position.set(2.10, 0.001, 0.48);
  plateGroup.rotation.y = 0.15;

  return plateGroup;
}

// Tapis douillet en laine tissée terracotta / grège chaud sous la table
export function createWarmCozyRug(roomCenterX, floorY) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#6e5445'; // Base terracotta chaude
  ctx.fillRect(0, 0, 512, 512);

  // Motif de tissage artisanal doux
  for (let i = 0; i < 512; i += 6) {
    ctx.fillStyle = (i % 12 === 0) ? 'rgba(164, 134, 114, 0.35)' : 'rgba(84, 62, 50, 0.30)';
    ctx.fillRect(0, i, 512, 3);
  }
  // Bordure tissée crème
  ctx.strokeStyle = '#c4b5a2';
  ctx.lineWidth = 14;
  ctx.strokeRect(16, 16, 480, 480);
  ctx.strokeStyle = 'rgba(230, 218, 202, 0.4)';
  ctx.lineWidth = 4;
  ctx.strokeRect(28, 28, 456, 456);

  const rugTex = new THREE.CanvasTexture(canvas);
  rugTex.colorSpace = THREE.SRGBColorSpace;
  rugTex.wrapS = THREE.RepeatWrapping;
  rugTex.wrapT = THREE.RepeatWrapping;
  rugTex.repeat.set(2, 1);

  const rugMat = new THREE.MeshStandardMaterial({
    map: rugTex,
    color: 0x876956,
    roughness: 0.95,
    metalness: 0.01
  });

  const rug = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.008, 2.7), rugMat);
  rug.name = 'cozyStudioRug';
  rug.position.set(roomCenterX + 0.25, floorY + 0.004, 0.05);
  rug.receiveShadow = true;
  return rug;
}


export function createBusinessCard() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 640;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const drawCard = (logoImg) => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 1024, 640);
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 8; ctx.strokeRect(16, 16, 992, 608);
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)'; ctx.lineWidth = 2; ctx.strokeRect(28, 28, 968, 584);
    if (logoImg) {
      const ratio = logoImg.width / logoImg.height, h = 180, w = Math.min(620, h * ratio);
      ctx.drawImage(logoImg, (1024 - w) / 2, 80, w, h);
    }
    ctx.fillStyle = '#0f172a'; ctx.font = 'bold 36px Inter, Arial, sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('GRAPH2PRINT • GPO SARL', 512, 330);
    ctx.fillStyle = '#d97706'; ctx.font = 'bold 44px Inter, Arial, sans-serif';
    ctx.fillText('06 73 54 03 94', 512, 405);
    ctx.fillStyle = '#334155'; ctx.font = 'bold 26px Inter, Arial, sans-serif';
    ctx.fillText('contact@graph2print.com • www.graph2print.com', 512, 470);
    ctx.fillStyle = '#64748b'; ctx.font = '24px Inter, Arial, sans-serif';
    ctx.fillText('Cliquez pour ouvrir la carte de visite', 512, 545);
    tex.needsUpdate = true;
  };
  drawCard(null);
  const img = new Image(); img.onload = () => drawCard(img); img.src = '/logo-graph2print.png';
  const cardGeo = new THREE.BoxGeometry(0.36, 0.004, 0.225);
  const sideMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 });
  const topMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.28, metalness: 0.05 });
  const card = new THREE.Mesh(cardGeo, [sideMat, sideMat, topMat, sideMat, sideMat, sideMat]);
  card.position.set(0.83, 0.003, 0.80); card.rotation.y = -0.06; card.castShadow = true; card.receiveShadow = true;
  card.userData = { showcaseProductKey: 'businessCard', isBusinessCard: true, showcaseLabel: 'GPO SARL • Graph2Print', showcasePrice: '06 73 54 03 94', showcaseSub: 'Cliquez pour ouvrir la carte de visite complète', baseScale: 1 };
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
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, color: 0x242a33, roughness: 0.88, metalness: 0.01 });
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

  // Tapis douillet chaleureux sous la table d'atelier
  roomGroup.add(createWarmCozyRug(roomCenterX, floorY));

  // 6. Eclairage doux architectural (lumière centrale aveuglante retirée pour éviter tout reflet spéculaire)
  const arcadeSpot = new THREE.PointLight(0xffe8cf, 0.9, 10, 1.4);
  arcadeSpot.position.set(-2.55, ceilingY - 0.35, -0.1);
  roomGroup.add(arcadeSpot);

  const warmAccent = new THREE.PointLight(0xffd5a0, 0.7, 8, 1.5);
  warmAccent.position.set(3.40, ceilingY - 0.60, 1.0);
  roomGroup.add(warmAccent);

  // Carte de visite interactive posée sur la table
  roomGroup.add(createBusinessCard());

  // Orchidée violette en pot (placée à gauche du mug blanc, bien écartée du mug)
  const orchid = createOrchidPlant();
  orchid.scale.setScalar(1.25);
  orchid.position.set(2.20, 0.001, -0.46);
  roomGroup.add(orchid);

  // Monstera Deliciosa en pot (remplacée en mode Noël ou Halloween)
  const monstera = createMonsteraPlant();
  monstera.name = 'monsteraPlantGroup';
  monstera.position.set(3.40, -0.835, -0.05);
  roomGroup.add(monstera);

  // Décoration festive de Noël (Grand sapin 2.6m, guirlande haute, chemin de table rouge et neige rapide)
  const noelDecor = createChristmasDecorGroup();
  roomGroup.add(noelDecor);
  roomGroup.userData.christmasDecor = noelDecor;

  // Décoration d'ambiance Halloween (prête et commutable : Jack-o'-lanterns rougeoyantes et bougies)
  const halloweenDecor = createHalloweenDecorGroup();
  roomGroup.add(halloweenDecor);
  roomGroup.userData.halloweenDecor = halloweenDecor;

  const currentTheme = localStorage.getItem('mockup3d_theme') || (localStorage.getItem('mockup3d_decor_noel') === '1' ? 'noel' : 'standard');
  const applyThemeVisibility = (th) => {
    noelDecor.visible = (th === 'noel');
    halloweenDecor.visible = (th === 'halloween');
    monstera.visible = (th === 'standard');
  };
  applyThemeVisibility(currentTheme);

  if (app) {
    app.setAmbienceTheme = function(themeName) {
      localStorage.setItem('mockup3d_theme', themeName);
      if (themeName === 'noel') localStorage.setItem('mockup3d_decor_noel', '1');
      else localStorage.removeItem('mockup3d_decor_noel');
      applyThemeVisibility(themeName);
    };

    app.updateSnowParticles = function(dt) {
      if (noelDecor.userData?.snowSystem && noelDecor.visible) {
        noelDecor.userData.snowSystem.update(dt);
      }
      if (noelDecor.visible) {
        const time = performance.now() * 0.001;
        // Scintillation dynamique de l'étoile au sommet du grand sapin
        const star = noelDecor.userData?.treeStar;
        if (star && star.material) {
          const shimmer = 1.3 + 0.9 * Math.sin(time * 5.2) + 0.4 * Math.cos(time * 11.8);
          star.material.emissiveIntensity = THREE.MathUtils.clamp(shimmer, 0.8, 2.8);
          star.rotation.y = time * 0.45;
        }
        // Clignotement festif et scintillement des lumières et boules du sapin
        const lights = noelDecor.userData?.treeLights;
        if (Array.isArray(lights)) {
          lights.forEach((bulb, idx) => {
            const phase = idx * 0.45;
            const blink = Math.sin(time * 3.5 + phase);
            bulb.material.emissiveIntensity = blink > 0.0 ? 0.9 + 0.7 * blink : 0.06;
          });
        }
        // Clignotement chaleureux et scintillement de la guirlande lumineuse murale
        const garland = noelDecor.userData?.wallGarland;
        if (Array.isArray(garland)) {
          garland.forEach((bulb, idx) => {
            const phase = idx * 0.55;
            const blink = Math.sin(time * 4.2 + phase);
            bulb.material.emissiveIntensity = blink > 0.0 ? 1.1 + 0.8 * blink : 0.12;
          });
        }
      }
    };
  }

  return roomGroup;
}

// Lampe de bureau design moderne et architecturale (grande échelle, structure élancée avec diffuseur LED linéaire)
export function createModernDesignerLamp() {
  const lampGroup = new THREE.Group();
  lampGroup.name = 'modernDesignerLamp';

  const charcoalMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    metalness: 0.85,
    roughness: 0.28
  });

  const brassTrimMat = new THREE.MeshStandardMaterial({
    color: 0xd4af37,
    metalness: 0.90,
    roughness: 0.20
  });

  const ledDiffuserMat = new THREE.MeshStandardMaterial({
    color: 0xfffaea,
    emissive: 0xffdf9e,
    emissiveIntensity: 0.75,
    roughness: 0.35
  });

  // Socle circulaire lourd et moderne (diamètre 26cm, hauteur 2.4cm)
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.135, 0.024, 32), charcoalMat);
  base.position.y = 0.012;
  base.castShadow = true;
  lampGroup.add(base);

  const baseRing = new THREE.Mesh(new THREE.CylinderGeometry(0.136, 0.136, 0.004, 32), brassTrimMat);
  baseRing.position.y = 0.024;
  lampGroup.add(baseRing);

  // Mât architectural imposant et élancé (hauteur 0.72m)
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.72, 16), charcoalMat);
  pole.position.set(0, 0.38, 0);
  pole.castShadow = true;
  lampGroup.add(pole);

  // Double anneau décoratif laiton sur le mât
  const ring1 = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.018, 16), brassTrimMat);
  ring1.position.set(0, 0.20, 0);
  lampGroup.add(ring1);

  // Articulation rotule design dorée
  const joint = new THREE.Mesh(new THREE.SphereGeometry(0.020, 16, 16), brassTrimMat);
  joint.position.set(0, 0.73, 0);
  lampGroup.add(joint);

  // Bras horizontal architectural étendu vers la table (longueur 0.44m)
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.44, 16), charcoalMat);
  arm.rotation.z = Math.PI / 2;
  arm.position.set(0.22, 0.73, 0);
  arm.castShadow = true;
  lampGroup.add(arm);

  // Tête luminaire linéaire moderne ultra-épurée (longueur 0.36m, profil rectangulaire)
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.028, 0.045), charcoalMat);
  head.position.set(0.36, 0.73, 0);
  head.castShadow = true;
  lampGroup.add(head);

  // Liseré laiton raffiné sur le dessus de la tête
  const headTrim = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.003, 0.008), brassTrimMat);
  headTrim.position.set(0.36, 0.745, 0);
  lampGroup.add(headTrim);

  // Diffuseur LED plat sous la tête (bandeau continu satiné)
  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.005, 0.038), ledDiffuserMat);
  diffuser.position.set(0.36, 0.714, 0);
  lampGroup.add(diffuser);

  // Éclairage doux d'ambiance 3000K orienté vers le bas (sans point chaud direct sur la table)
  const lampLight = new THREE.PointLight(0xffdfa8, 0.25, 1.2, 2.2);
  lampLight.position.set(0.36, 0.68, 0);
  lampGroup.add(lampLight);

  // Positionnée majestueusement à gauche de la table
  lampGroup.position.set(-1.18, 0.001, -0.44);
  return lampGroup;
}

// Chemin de table festif rouge de Noël brodé de flocons blancs et dorés, retombant sur les côtés
export function createChristmasTableRunner() {
  const runnerGroup = new THREE.Group();
  runnerGroup.name = 'christmasTableRunnerGroup';

  const runnerCanvas = document.createElement('canvas');
  runnerCanvas.width = 1024;
  runnerCanvas.height = 256;
  const ctx = runnerCanvas.getContext('2d');

  // Fond rouge velours Noël profond opaque
  ctx.fillStyle = '#991b1b';
  ctx.fillRect(0, 0, 1024, 256);

  // Liserés dorés festifs sur les bordures
  ctx.fillStyle = '#d4af37';
  ctx.fillRect(0, 0, 1024, 8);
  ctx.fillRect(0, 248, 1024, 8);
  ctx.fillStyle = '#fbbf24';
  ctx.fillRect(0, 12, 1024, 3);
  ctx.fillRect(0, 241, 1024, 3);

  // Flocons de neige brodés stylisés
  function drawEmbroideredSnowflake(cx, cy, radius, color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.2;
    for (let a = 0; a < 6; a++) {
      const angle = (a * Math.PI) / 3;
      const x2 = cx + Math.cos(angle) * radius;
      const y2 = cy + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      for (const t of [0.45, 0.75]) {
        const bx = cx + Math.cos(angle) * radius * t;
        const by = cy + Math.sin(angle) * radius * t;
        const branchLen = radius * 0.32;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(angle + 0.65) * branchLen, by + Math.sin(angle + 0.65) * branchLen);
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(angle - 0.65) * branchLen, by + Math.sin(angle - 0.65) * branchLen);
        ctx.stroke();
      }
    }
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let x = 45; x < 1024; x += 85) {
    drawEmbroideredSnowflake(x, 128, 36, '#ffffff');
    drawEmbroideredSnowflake(x + 42, 55, 18, '#fef08a');
    drawEmbroideredSnowflake(x + 42, 201, 18, '#fef08a');
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + 42, 128, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(runnerCanvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;

  // Matière textile velours rouge opaque stricte (sans transparence)
  const runnerMat = new THREE.MeshStandardMaterial({
    map: tex,
    roughness: 0.85,
    metalness: 0.02,
    transparent: false,
    side: THREE.DoubleSide
  });

  // 1. Partie centrale horizontale posée bien au centre de la table (X: 0.75, Z: 0)
  const topGeo = new THREE.PlaneGeometry(4.60, 0.65);
  const topMesh = new THREE.Mesh(topGeo, runnerMat);
  topMesh.rotation.x = -Math.PI / 2;
  topMesh.position.set(0.75, 0.0025, 0.0);
  topMesh.receiveShadow = true;
  runnerGroup.add(topMesh);

  // 2. Retombée gauche : tombe de 40 cm le long du flanc gauche de la table (sans toucher le sol)
  const leftDrapeGeo = new THREE.PlaneGeometry(0.65, 0.40);
  const leftDrape = new THREE.Mesh(leftDrapeGeo, runnerMat);
  leftDrape.rotation.y = -Math.PI / 2;
  leftDrape.position.set(-1.551, -0.20, 0.0);
  leftDrape.receiveShadow = true;
  runnerGroup.add(leftDrape);

  // 3. Retombée droite : tombe de 40 cm le long du flanc droit de la table (sans toucher le sol)
  const rightDrapeGeo = new THREE.PlaneGeometry(0.65, 0.40);
  const rightDrape = new THREE.Mesh(rightDrapeGeo, runnerMat);
  rightDrape.rotation.y = Math.PI / 2;
  rightDrape.position.set(3.051, -0.20, 0.0);
  rightDrape.receiveShadow = true;
  runnerGroup.add(rightDrape);

  return runnerGroup;
}

// Décoration d'ambiance Halloween prête pour plus tard
export function createHalloweenDecorGroup() {
  const decor = new THREE.Group();
  decor.name = 'halloweenDecorGroup';

  function createPumpkin(scale, pos, rotY) {
    const pGroup = new THREE.Group();
    pGroup.position.set(pos[0], pos[1], pos[2]);
    pGroup.rotation.y = rotY;
    pGroup.scale.setScalar(scale);

    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xd95a10, roughness: 0.65, metalness: 0.05 });
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x3f5822, roughness: 0.8 });
    const glowMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xff6600, emissiveIntensity: 2.2 });

    for (let a = 0; a < 8; a++) {
      const angle = (a * Math.PI) / 4;
      const slice = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), orangeMat);
      slice.scale.set(0.85, 0.8, 1.05);
      slice.position.set(Math.cos(angle) * 0.04, 0.14, Math.sin(angle) * 0.04);
      slice.castShadow = true;
      pGroup.add(slice);
    }

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.022, 0.08, 8), stemMat);
    stem.position.set(0, 0.28, 0);
    stem.rotation.z = 0.2;
    pGroup.add(stem);

    const eye1 = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.035, 3), glowMat);
    eye1.rotation.set(Math.PI / 2, 0, 0);
    eye1.position.set(-0.045, 0.17, 0.16);
    pGroup.add(eye1);

    const eye2 = eye1.clone();
    eye2.position.set(0.045, 0.17, 0.16);
    pGroup.add(eye2);

    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.025, 0.03), glowMat);
    mouth.position.set(0, 0.10, 0.155);
    pGroup.add(mouth);

    const candleLight = new THREE.PointLight(0xff7700, 0.65, 2.5, 2.0);
    candleLight.position.set(0, 0.15, 0.05);
    pGroup.add(candleLight);

    return pGroup;
  }

  decor.add(createPumpkin(1.6, [3.35, -0.835, -0.05], -0.3));
  decor.add(createPumpkin(0.65, [2.40, 0.001, 0.78], 0.4));
  decor.add(createPumpkin(0.50, [2.58, 0.001, 0.85], -0.6));

  return decor;
}

export function createChristmasDecorGroup() {
  const decor = new THREE.Group();
  decor.name = 'christmasDecorGroup';

  // Ajout du chemin de table rouge avec flocons brodés retombant sur les flancs de la table
  decor.add(createChristmasTableRunner());

  // Assiette gourmande de cookies aux pépites de chocolat (exclusivement en mode Noël)
  decor.add(createCookiesPlate());

  // Le Grand Sapin de Noël géant majestueux (aussi haut et imposant que la borne d'arcade : 3.34m)
  // Positionné à droite de la table (X: 4.90), à près de 1,90 m du bord droit du plateau, sans aucun risque de contact
  const treeGroup = new THREE.Group();
  treeGroup.position.set(4.90, -0.835, 0.0);

  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d1d07, roughness: 0.9 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.75, 16), trunkMat);
  trunk.position.y = 0.38;
  trunk.castShadow = true;
  treeGroup.add(trunk);

  const pineMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.75, metalness: 0.1 });
  const tiers = [
    { r: 1.05, h: 1.10, y: 1.00 },
    { r: 0.94, h: 1.00, y: 1.48 },
    { r: 0.82, h: 0.92, y: 1.94 },
    { r: 0.68, h: 0.82, y: 2.38 },
    { r: 0.52, h: 0.72, y: 2.76 },
    { r: 0.36, h: 0.60, y: 3.08 },
    { r: 0.20, h: 0.48, y: 3.28 }
  ];
  tiers.forEach(t => {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(t.r, t.h, 18), pineMat);
    cone.position.y = t.y;
    cone.castShadow = true;
    treeGroup.add(cone);
  });

  const starMat = new THREE.MeshStandardMaterial({
    color: 0xfde047,
    emissive: 0xeab308,
    emissiveIntensity: 1.8,
    metalness: 0.85,
    roughness: 0.18
  });
  const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), starMat);
  star.position.y = 3.36;
  treeGroup.add(star);
  decor.userData.treeStar = star;

  // 72 boules scintillantes et guirlandes lumineuses réparties sur la hauteur
  const treeLightsList = [];
  const colors = [0xdc2626, 0xfacc15, 0xffffff, 0x2563eb, 0x16a34a, 0xec4899];
  for (let i = 0; i < 72; i++) {
    const angle = (i * 2.399);
    const t = i / 72;
    const y = 0.52 + t * 2.68;
    const r = (1 - t * 0.82) * 0.92;
    const x = Math.cos(angle) * r;
    const z = Math.sin(angle) * r;

    const ballMat = new THREE.MeshStandardMaterial({
      color: colors[i % colors.length],
      emissive: colors[i % colors.length],
      emissiveIntensity: (i % 2 === 0) ? 0.8 : 0.2,
      metalness: 0.85,
      roughness: 0.15
    });
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.044, 12, 12), ballMat);
    ball.position.set(x, y, z);
    treeGroup.add(ball);
    treeLightsList.push(ball);
  }
  decor.userData.treeLights = treeLightsList;

  // Guirlande lumineuse murale clignotante
  const lightsGroup = new THREE.Group();
  const wallGarlandList = [];
  for (let i = 0; i < 22; i++) {
    const lx = -3.4 + i * 0.36;
    const ly = 2.15 + Math.sin(i * 0.8) * 0.10;
    const lz = -1.14;
    const glowMat = new THREE.MeshStandardMaterial({
      color: (i % 3 === 0) ? 0xef4444 : (i % 3 === 1 ? 0xfacc15 : 0x22c55e),
      emissive: (i % 3 === 0) ? 0xef4444 : (i % 3 === 1 ? 0xfacc15 : 0x22c55e),
      emissiveIntensity: 1.6,
      roughness: 0.2
    });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.026, 8, 8), glowMat);
    bulb.position.set(lx, ly, lz);
    lightsGroup.add(bulb);
    wallGarlandList.push(bulb);
  }
  decor.userData.wallGarland = wallGarlandList;

  decor.add(treeGroup);
  decor.add(lightsGroup);

  // Système de particules de neige rapide avec gros flocons et entassement dynamique
  const snow = createSnowSystem(850);
  decor.add(snow.group);
  decor.userData.snowSystem = snow;

  return decor;
}
