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

  // Positionnée sur la table en coin avant-droit, complètement dégagée de tout produit (sous-verres, mug, bracelet)
  plateGroup.position.set(2.68, 0.001, 0.72);
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

// Tableau d'entreprise GPO SARL accroché sur le mur du fond à gauche de la borne d'arcade
export function createGpoBoard() {
  const boardGroup = new THREE.Group();
  boardGroup.name = 'gpoBoardGroup';

  // Format plus compact et proportionné (A2/A3 design)
  const w = 0.62, h = 0.48, d = 0.03;

  // Cadre élégant en aluminium noir brossé
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x15181e, roughness: 0.35, metalness: 0.75 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, h + 0.04, d), frameMat);
  frame.castShadow = true;
  boardGroup.add(frame);

  // Toile / affiche imprimée
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 800;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;

  const drawBoard = (logoImg) => {
    // Fond blanc satiné moderne avec subtil dégradé
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 800);
    bgGrad.addColorStop(0, '#ffffff');
    bgGrad.addColorStop(1, '#f1f5f9');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 800);

    // Bordure bleu corporate GPO
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 8;
    ctx.strokeRect(18, 18, 988, 764);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 960, 736);

    // Dessin du logo GPO Bleu
    if (logoImg) {
      const ratio = logoImg.width / logoImg.height;
      const targetH = 280;
      const targetW = Math.min(720, targetH * ratio);
      ctx.drawImage(logoImg, (1024 - targetW) / 2, 60, targetW, targetH);
    } else {
      ctx.fillStyle = '#0284c7';
      ctx.font = 'bold 84px "Segoe UI", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GPO', 512, 210);
      ctx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText('GAME PARTS ONLINE', 512, 280);
    }

    // Titres corporate
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 42px "Segoe UI", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GPO SARL', 512, 410);

    ctx.fillStyle = '#475569';
    ctx.font = 'bold 22px "Segoe UI", Arial, sans-serif';
    ctx.fillText('IMPRESSION NUMÉRIQUE • MARQUAGE PUBLICITAIRE', 512, 460);

    // Cartouche bouton URL web cliquable
    ctx.fillStyle = '#0284c7';
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(140, 525, 744, 100, 20);
      ctx.fill();
    } else {
      ctx.fillRect(140, 525, 744, 100);
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Segoe UI", Arial, sans-serif';
    ctx.fillText('www.gposarl.com', 512, 592);

    // Mention d'interaction
    ctx.fillStyle = '#0369a1';
    ctx.font = 'italic 24px "Segoe UI", Arial, sans-serif';
    ctx.fillText('Cliquez pour visiter le site officiel', 512, 695);

    tex.needsUpdate = true;
  };

  drawBoard(null);
  const logo = new Image();
  logo.onload = () => drawBoard(logo);
  logo.src = '/logo-gposarl-bleu.png';

  const boardMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.35, metalness: 0.05 });
  const printFace = new THREE.Mesh(new THREE.PlaneGeometry(w, h), boardMat);
  printFace.position.set(0, 0, d / 2 + 0.002);
  boardGroup.add(printFace);

  // Positionnement sur le mur du fond, plus aéré et écarté de la borne d'arcade (arcade à X: -2.55)
  boardGroup.position.set(-3.95, 1.38, -1.13);
  boardGroup.rotation.set(0, 0, 0);

  const boardMeta = {
    showcaseProductKey: 'gpoBoard',
    isGpoBoard: true,
    showcaseLabel: 'GPO SARL • Site Officiel',
    showcasePrice: 'www.gposarl.com',
    showcaseSub: 'Cliquez pour ouvrir le site www.gposarl.com',
    baseScale: 1
  };
  boardGroup.userData = boardMeta;
  frame.userData = boardMeta;
  printFace.userData = boardMeta;

  return boardGroup;
}

// Grande cheminée imposante en pierre avec linteau chêne, hotte monumentale, pieds du Père Noël en mode Noël
export function createWarmFireplace(leftX, floorY) {
  const fpGroup = new THREE.Group();
  fpGroup.name = 'warmFireplaceGroup';

  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xded8cc, roughness: 0.85, metalness: 0.05 });
  const hearthMat = new THREE.MeshStandardMaterial({ color: 0x12100e, roughness: 0.95 });
  const mantelWoodMat = new THREE.MeshStandardMaterial({ color: 0x3e2412, roughness: 0.65, metalness: 0.05 });
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x1a1e22, roughness: 0.5, metalness: 0.65 });
  const woodLogMat = new THREE.MeshStandardMaterial({ color: 0x331c0e, roughness: 0.92 });
  const ashMat = new THREE.MeshStandardMaterial({ color: 0xbf360c, emissive: 0xd84315, emissiveIntensity: 1.8, roughness: 0.9 });

  // 1. Socle bas au sol (plus large : 2.50m)
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.12, 2.50), stoneMat);
  base.position.set(0.35, 0.06, 0);
  base.castShadow = true; base.receiveShadow = true;
  fpGroup.add(base);

  // 2. Foyer intérieur sombre (fond contre le mur gauche)
  const backWallFp = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.40, 1.90), hearthMat);
  backWallFp.position.set(0.04, 0.78, 0);
  backWallFp.receiveShadow = true;
  fpGroup.add(backWallFp);

  // 3. Jambages latéraux en pierre (piliers gauche et droit massifs)
  const pillarGeo = new THREE.BoxGeometry(0.62, 1.40, 0.32);
  const leftPillar = new THREE.Mesh(pillarGeo, stoneMat);
  leftPillar.position.set(0.31, 0.78, -0.95);
  leftPillar.castShadow = true; leftPillar.receiveShadow = true;
  fpGroup.add(leftPillar);

  const rightPillar = new THREE.Mesh(pillarGeo, stoneMat);
  rightPillar.position.set(0.31, 0.78, 0.95);
  rightPillar.castShadow = true; rightPillar.receiveShadow = true;
  fpGroup.add(rightPillar);

  // 4. Linteau imposant au-dessus du foyer
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.28, 2.22), stoneMat);
  lintel.position.set(0.325, 1.35, 0);
  lintel.castShadow = true; lintel.receiveShadow = true;
  fpGroup.add(lintel);

  // 5. Manteau / Tablette supérieure en chêne massif foncé
  const mantel = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.12, 2.65), mantelWoodMat);
  mantel.position.set(0.37, 1.54, 0);
  mantel.castShadow = true; mantel.receiveShadow = true;
  fpGroup.add(mantel);

  // 6. Grande hotte pyramidale qui monte vers le plafond
  const hoodCanvas = document.createElement('canvas'); hoodCanvas.width = 256; hoodCanvas.height = 256;
  const hCtx = hoodCanvas.getContext('2d');
  hCtx.fillStyle = '#ded8cc'; hCtx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 40; i++) {
    hCtx.fillStyle = 'rgba(190, 180, 165, 0.25)';
    hCtx.fillRect(0, i * 6.5, 256, 3);
  }
  const hoodTex = new THREE.CanvasTexture(hoodCanvas);
  const hoodMat = new THREE.MeshStandardMaterial({ map: hoodTex, roughness: 0.85, metalness: 0.05 });
  const hoodGeo = new THREE.BoxGeometry(0.50, 3.20, 2.00);
  const hoodMesh = new THREE.Mesh(hoodGeo, hoodMat);
  hoodMesh.position.set(0.25, 3.10, 0);
  fpGroup.add(hoodMesh);

  // 7. Grille de foyer en fer forgé
  const grate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.95), ironMat);
  grate.position.set(0.32, 0.14, 0);
  fpGroup.add(grate);

  // 8. Bûches de bois en relief
  const logGeo = new THREE.CylinderGeometry(0.060, 0.065, 0.75, 12);
  for (let b = 0; b < 3; b++) {
    const log = new THREE.Mesh(logGeo, woodLogMat);
    log.rotation.x = Math.PI / 2;
    log.rotation.z = (b - 1) * 0.18;
    log.position.set(0.28 + (b === 2 ? 0.04 : (b * 0.08)), 0.20 + (b === 2 ? 0.10 : 0), (b - 1) * 0.10);
    log.castShadow = true;
    fpGroup.add(log);
  }

  // 9. Lit de braises incandescentes
  const embers = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.04, 0.70), ashMat);
  embers.position.set(0.30, 0.15, 0);
  fpGroup.add(embers);

  // 10. Flammes stylisées chaleureuses (actives uniquement hors mode Noël)
  const flameGroup = new THREE.Group();
  flameGroup.name = 'fireplaceFlameGroup';
  const flameMat1 = new THREE.MeshBasicMaterial({ color: 0xff3d00, transparent: true, opacity: 0.90 });
  const flameMat2 = new THREE.MeshBasicMaterial({ color: 0xff9100, transparent: true, opacity: 0.95 });
  const flameMat3 = new THREE.MeshBasicMaterial({ color: 0xffea00, transparent: true, opacity: 0.95 });
  const flamesList = [];

  for (let f = 0; f < 7; f++) {
    const fH = 0.28 + (f % 2) * 0.16;
    const fGeo = new THREE.ConeGeometry(0.065 - f * 0.005, fH, 8);
    const fMat = f % 3 === 0 ? flameMat1 : (f % 3 === 1 ? flameMat2 : flameMat3);
    const flame = new THREE.Mesh(fGeo, fMat);
    flame.position.set(0.26 + (f % 2) * 0.06, 0.20 + fH / 2, -0.28 + f * 0.09);
    flame.userData = { baseY: 0.20 + fH / 2, baseScaleY: 1.0, phase: f * 1.3 };
    flameGroup.add(flame);
    flamesList.push(flame);
  }
  fpGroup.add(flameGroup);
  fpGroup.userData.flameGroup = flameGroup;
  fpGroup.userData.flames = flamesList;

  // 11. Lumière chaleureuse vacillante du feu
  const fireLight = new THREE.PointLight(0xff6b1a, 2.5, 6.5, 1.8);
  fireLight.position.set(0.40, 0.40, 0);
  fpGroup.add(fireLight);
  fpGroup.userData.fireLight = fireLight;

  // 12. DÉCORATION NOËL EXCLUSIVE : PIEDS DU PÈRE NOËL, SUIE AU SOL, CHAUSSETTES ET GUIRLANDE
  const christmasFireplaceGroup = new THREE.Group();
  christmasFireplaceGroup.name = 'christmasFireplaceExclusiveGroup';

  // A. Saleté et suie étalée au sol devant l'âtre
  const sootCanvas = document.createElement('canvas'); sootCanvas.width = 512; sootCanvas.height = 512;
  const sCtx = sootCanvas.getContext('2d');
  sCtx.fillStyle = '#000000';
  for (let i = 0; i < 300; i++) {
    const cx = 256 + (Math.random() - 0.5) * 360;
    const cy = 256 + (Math.random() - 0.5) * 280;
    const r = 8 + Math.random() * 45;
    const g = sCtx.createRadialGradient(cx, cy, 2, cx, cy, r);
    g.addColorStop(0, 'rgba(18, 14, 12, ' + (0.15 + Math.random() * 0.35) + ')');
    g.addColorStop(1, 'rgba(18, 14, 12, 0)');
    sCtx.fillStyle = g; sCtx.beginPath(); sCtx.arc(cx, cy, r, 0, Math.PI * 2); sCtx.fill();
  }
  const sootTex = new THREE.CanvasTexture(sootCanvas);
  const sootMat = new THREE.MeshStandardMaterial({
    map: sootTex,
    color: 0x1a1410,
    transparent: true,
    opacity: 0.82,
    roughness: 0.98
  });
  const sootPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.20, 2.20), sootMat);
  sootPlane.rotation.x = -Math.PI / 2;
  sootPlane.position.set(0.95, 0.005, 0);
  christmasFireplaceGroup.add(sootPlane);

  // B. Jambes et bottes du Père Noël qui sortent / dépassent de la cheminée
  const redPantsMat = new THREE.MeshStandardMaterial({ color: 0xcc1111, roughness: 0.70 });
  const whiteFurMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.90 });
  const blackBootMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.35, metalness: 0.2 });
  const goldBuckleMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.25 });

  const legsGroup = new THREE.Group();
  legsGroup.position.set(0.38, 0.95, 0); // Suspendues dans l'âtre

  [-0.18, 0.18].forEach((legZ, idx) => {
    const legSub = new THREE.Group();
    legSub.position.set(0, 0, legZ);
    legSub.rotation.z = -0.15 + (idx * 0.08); // Légère inclinaison
    legSub.rotation.y = (idx === 0 ? 0.15 : -0.15);

    // Pantalon rouge (jambe descendant du conduit)
    const pantMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.095, 0.50, 16), redPantsMat);
    pantMesh.position.y = -0.18;
    pantMesh.castShadow = true;
    legSub.add(pantMesh);

    // Revers de fourrure blanche épaisse
    const furMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.08, 16), whiteFurMat);
    furMesh.position.y = -0.42;
    furMesh.castShadow = true;
    legSub.add(furMesh);

    // Botte noire (tige)
    const bootShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.090, 0.090, 0.18, 16), blackBootMat);
    bootShaft.position.y = -0.52;
    bootShaft.castShadow = true;
    legSub.add(bootShaft);

    // Pied de la botte orienté vers l'avant (vers la pièce)
    const bootFoot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.10, 0.13), blackBootMat);
    bootFoot.position.set(0.06, -0.61, 0);
    bootFoot.castShadow = true;
    legSub.add(bootFoot);

    // Boucle dorée sur la botte
    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 0.08), goldBuckleMat);
    buckle.position.set(0.12, -0.56, 0);
    legSub.add(buckle);

    legsGroup.add(legSub);
  });
  christmasFireplaceGroup.add(legsGroup);

  // C. Guirlande de Noël le long du manteau de cheminée
  const garlandMat = new THREE.MeshStandardMaterial({ color: 0x1b4324, roughness: 0.85 });
  const berryMat = new THREE.MeshStandardMaterial({ color: 0xd92626, roughness: 0.3, metalness: 0.1 });
  const ribbonMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.6 });

  const garland = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.50, 12), garlandMat);
  garland.rotation.x = Math.PI / 2;
  garland.position.set(0.72, 1.48, 0);
  christmasFireplaceGroup.add(garland);

  // Petites baies rouges festives sur la guirlande
  for (let b = 0; b < 12; b++) {
    const berry = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), berryMat);
    berry.position.set(0.74, 1.48 + ((b % 2) * 0.03 - 0.015), -1.05 + b * 0.19);
    christmasFireplaceGroup.add(berry);
  }

  // D. 3 Chaussettes de Noël suspendues sous le manteau
  const sockColors = [0x991b1b, 0x166534, 0x991b1b];
  [-0.60, 0, 0.60].forEach((sZ, sIdx) => {
    const sockGroup = new THREE.Group();
    sockGroup.position.set(0.70, 1.42, sZ);

    const sockBodyMat = new THREE.MeshStandardMaterial({ color: sockColors[sIdx], roughness: 0.8 });
    const sockCuffMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });

    const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.14), sockCuffMat);
    sockGroup.add(cuff);

    const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.20, 0.12), sockBodyMat);
    bodyMesh.position.y = -0.11;
    sockGroup.add(bodyMesh);

    const footMesh = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.09, 0.17), sockBodyMat);
    footMesh.position.set(0, -0.20, 0.04);
    sockGroup.add(footMesh);

    christmasFireplaceGroup.add(sockGroup);
  });

  // Décoration Noël exclusive sur la cheminée
  const isNoelActive = (localStorage.getItem('mockup3d_decor_noel') === '1');
  christmasFireplaceGroup.visible = isNoelActive;
  flameGroup.visible = !isNoelActive;
  fireLight.visible = !isNoelActive;
  fpGroup.add(christmasFireplaceGroup);
  fpGroup.userData.christmasDecor = christmasFireplaceGroup;

  // Décorations standard sur le manteau (bougeoirs dorés sur le rebord avant)
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.25 });
  const candleWaxMat = new THREE.MeshStandardMaterial({ color: 0xfffbeb, roughness: 0.4 });
  const candleFlameMat = new THREE.MeshBasicMaterial({ color: 0xffa000 });

  [-0.95, 0.95].forEach(sideZ => {
    const holder = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.09, 16), brassMat);
    holder.position.set(0.60, 1.645, sideZ);
    fpGroup.add(holder);

    const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.20, 12), candleWaxMat);
    candle.position.set(0.60, 1.77, sideZ);
    fpGroup.add(candle);

    const cFlame = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.04, 8), candleFlameMat);
    cFlame.position.set(0.60, 1.89, sideZ);
    fpGroup.add(cFlame);
  });

  // Game Boy rétro DMG-01 posée bien en vue sur le rebord avant du manteau de la cheminée
  const gb = createGameBoyDMG();
  gb.scale.setScalar(1.5);
  gb.position.set(0.60, 1.72, -0.42);
  gb.rotation.set(0, Math.PI / 2 + 0.20, -0.15); // Debout et inclinée vers la pièce
  fpGroup.add(gb);

  // Rubik's Cube 3D multicolore posé bien en vue sur le rebord avant du manteau de la cheminée
  const rubik = createRubiksCube();
  rubik.position.set(0.60, 1.66, 0.42);
  rubik.rotation.set(0.20, 0.55, 0.10);
  fpGroup.add(rubik);

  // Positionner contre le mur gauche
  fpGroup.position.set(leftX + 0.04, floorY, 1.25);
  return fpGroup;
}

// Game Boy classique originale DMG-01 avec écran rétro LCD, croix directionnelle et boutons bordeaux
export function createGameBoyDMG() {
  const gb = new THREE.Group();
  gb.name = 'gameBoyDMG';

  const gbBodyMat = new THREE.MeshStandardMaterial({ color: 0xd2cdc2, roughness: 0.65 });
  const gbBezelMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
  const gbScreenMat = new THREE.MeshStandardMaterial({ color: 0x829158, roughness: 0.25, emissive: 0x1f2e14, emissiveIntensity: 0.3 });
  const dpadMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
  const buttonMat = new THREE.MeshStandardMaterial({ color: 0x9f1239, roughness: 0.3 });
  const selectMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.148, 0.032), gbBodyMat);
  body.castShadow = true; body.receiveShadow = true;
  gb.add(body);

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.076, 0.065, 0.003), gbBezelMat);
  bezel.position.set(0, 0.032, 0.016);
  gb.add(bezel);

  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.046, 0.002), gbScreenMat);
  screen.position.set(0, 0.032, 0.018);
  gb.add(screen);

  const dpadV = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.022, 0.004), dpadMat);
  dpadV.position.set(-0.023, -0.022, 0.017);
  gb.add(dpadV);
  const dpadH = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.007, 0.004), dpadMat);
  dpadH.position.set(-0.023, -0.022, 0.017);
  gb.add(dpadH);

  const btnB = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.004, 16), buttonMat);
  btnB.rotation.x = Math.PI / 2;
  btnB.position.set(0.017, -0.025, 0.017);
  gb.add(btnB);

  const btnA = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.004, 16), buttonMat);
  btnA.rotation.x = Math.PI / 2;
  btnA.position.set(0.028, -0.018, 0.017);
  gb.add(btnA);

  [-0.010, 0.005].forEach(sx => {
    const sel = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.0035, 0.002), selectMat);
    sel.rotation.z = -0.45;
    sel.position.set(sx, -0.052, 0.017);
    gb.add(sel);
  });

  return gb;
}

// Rubik's Cube 3D avec ses 6 faces colorées et ses rainures noires
export function createRubiksCube() {
  const cubeGroup = new THREE.Group();
  cubeGroup.name = 'rubiksCube3D';

  const blackMat = new THREE.MeshStandardMaterial({ color: 0x111315, roughness: 0.55 });
  const faceColors = [0xdc2626, 0xf97316, 0xffffff, 0xfacc15, 0x2563eb, 0x16a34a];
  const size = 0.12; // Agrandie pour être bien nette et visible sur le manteau
  const pieceSize = (size - 0.008) / 3;

  const core = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), blackMat);
  core.castShadow = true;
  cubeGroup.add(core);

  const stickerMatList = faceColors.map(c => new THREE.MeshStandardMaterial({
    color: c, roughness: 0.25, metalness: 0.05
  }));

  const half = size / 2;
  const stickerSize = pieceSize * 0.88;
  const th = 0.001;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const u = i * (pieceSize + 0.002);
      const v = j * (pieceSize + 0.002);

      const stR = new THREE.Mesh(new THREE.BoxGeometry(th, stickerSize, stickerSize), stickerMatList[0]);
      stR.position.set(half + 0.0005, u, v); cubeGroup.add(stR);

      const stL = new THREE.Mesh(new THREE.BoxGeometry(th, stickerSize, stickerSize), stickerMatList[1]);
      stL.position.set(-half - 0.0005, u, v); cubeGroup.add(stL);

      const stT = new THREE.Mesh(new THREE.BoxGeometry(stickerSize, th, stickerSize), stickerMatList[2]);
      stT.position.set(u, half + 0.0005, v); cubeGroup.add(stT);

      const stB = new THREE.Mesh(new THREE.BoxGeometry(stickerSize, th, stickerSize), stickerMatList[3]);
      stB.position.set(u, -half - 0.0005, v); cubeGroup.add(stB);

      const stF = new THREE.Mesh(new THREE.BoxGeometry(stickerSize, stickerSize, th), stickerMatList[4]);
      stF.position.set(u, v, half + 0.0005); cubeGroup.add(stF);

      const stK = new THREE.Mesh(new THREE.BoxGeometry(stickerSize, stickerSize, th), stickerMatList[5]);
      stK.position.set(u, v, -half - 0.0005); cubeGroup.add(stK);
    }
  }

  return cubeGroup;
}

// Grande étagère rétro-gaming & design sur le mur du fond entre le tableau et le sapin (Atari 520 ST, Amiga, Vectrex, Appareil photo, Trophées, Portfolio Callisto Arts)
export function createRetroTechShelf(rightX, floorY, roomCenterZ) {
  const shelfGroup = new THREE.Group();
  shelfGroup.name = 'retroTechShelfGroup';

  const woodShelfMat = new THREE.MeshStandardMaterial({ color: 0x805533, roughness: 0.65, metalness: 0.05 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x1e242b, roughness: 0.40, metalness: 0.70 });
  const atariGrayMat = new THREE.MeshStandardMaterial({ color: 0xbbb5a8, roughness: 0.55 });
  const amigaBeigeMat = new THREE.MeshStandardMaterial({ color: 0xd0c8b6, roughness: 0.55 });
  const vectrexBlackMat = new THREE.MeshStandardMaterial({ color: 0x141619, roughness: 0.35, metalness: 0.2 });
  const vectrexScreenMat = new THREE.MeshStandardMaterial({ color: 0x0a1c18, emissive: 0x032b1f, emissiveIntensity: 0.6, roughness: 0.1 });
  const goldTrophyMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.90, roughness: 0.18 });
  const marbleBaseMat = new THREE.MeshStandardMaterial({ color: 0x1f2429, roughness: 0.4 });
  const cameraSilverMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.85, roughness: 0.2 });
  const cameraLeatherMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
  const lensGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.5 });

  // 1. Structure murale en hauteur face caméra (3 niveaux en chêne avec montants verticaux en métal noir)
  const shelfW = 1.55, shelfD = 0.28, shelfH = 0.03;
  const levelsY = [0.90, 1.40, 1.90];

  levelsY.forEach(ly => {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(shelfW, shelfH, shelfD), woodShelfMat);
    plank.position.set(0, ly, 0);
    plank.castShadow = true; plank.receiveShadow = true;
    shelfGroup.add(plank);
  });

  // Montants latéraux en acier noir
  [-shelfW / 2 + 0.02, shelfW / 2 - 0.02].forEach(mx => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.05, shelfD + 0.02), darkMetalMat);
    bar.position.set(mx, 1.40, 0);
    bar.castShadow = true;
    shelfGroup.add(bar);
  });

  // 2. NIVEAU 1 (ly = 0.90) : ATARI 520 ST & COMMODORE AMIGA 500
  // A. Atari 520 ST (forme biseautée grise emblématique, face caméra)
  const atari = new THREE.Group();
  atari.name = 'atari520ST';
  atari.position.set(-0.38, 0.92, 0);

  const atariBase = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.045, 0.22), atariGrayMat);
  atari.add(atariBase);

  // Clavier incliné face caméra
  const atariKeyboardMat = new THREE.MeshStandardMaterial({ color: 0x3d3935, roughness: 0.7 });
  const atariKeys = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.015, 0.12), atariKeyboardMat);
  atariKeys.position.set(0, 0.028, 0.04);
  atari.add(atariKeys);

  // Fente lecteur disquette 3.5" latérale droite
  const driveSlot = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.012, 0.08), darkMetalMat);
  driveSlot.position.set(0.181, 0.015, 0.02);
  atari.add(driveSlot);

  // Logo Atari stylisé (rouge)
  const atariBadge = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.004, 0.03), new THREE.MeshBasicMaterial({ color: 0xd92626 }));
  atariBadge.position.set(-0.12, 0.025, -0.06);
  atari.add(atariBadge);

  shelfGroup.add(atari);

  // B. Commodore Amiga 500 (boîtier beige emblématique, face caméra)
  const amiga = new THREE.Group();
  amiga.name = 'amiga500';
  amiga.position.set(0.38, 0.92, 0);

  const amigaBase = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.052, 0.22), amigaBeigeMat);
  amiga.add(amigaBase);

  const amigaKeysMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c2, roughness: 0.6 });
  const amigaKeys = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.018, 0.12), amigaKeysMat);
  amigaKeys.position.set(0, 0.032, 0.04);
  amiga.add(amigaKeys);

  // LED Power et Floppy
  const ledPower = new THREE.Mesh(new THREE.SphereGeometry(0.005, 8, 8), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
  ledPower.position.set(-0.14, 0.030, -0.06);
  amiga.add(ledPower);

  const ledDrive = new THREE.Mesh(new THREE.SphereGeometry(0.005, 8, 8), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
  ledDrive.position.set(-0.12, 0.030, -0.06);
  amiga.add(ledDrive);

  shelfGroup.add(amiga);

  // 3. NIVEAU 2 (ly = 1.40) : VECTREX ET APPAREIL PHOTO VINTAGE
  // A. Console Vectrex (borne vectorielle noire verticale compacte face caméra)
  const vectrex = new THREE.Group();
  vectrex.name = 'vectrexConsole';
  vectrex.position.set(-0.38, 1.42, 0);

  // Meuble vertical
  const vxCabinet = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.38, 0.18), vectrexBlackMat);
  vxCabinet.position.y = 0.19;
  vxCabinet.castShadow = true;
  vectrex.add(vxCabinet);

  // Écran vertical 9 pouces face caméra
  const vxScreen = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.20, 0.01), vectrexScreenMat);
  vxScreen.position.set(0, 0.22, 0.091);
  vectrex.add(vxScreen);

  // Manette Vectrex posée devant avec joystick
  const vxCtrl = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.025, 0.08), vectrexBlackMat);
  vxCtrl.position.set(0, 0.013, 0.10);
  vectrex.add(vxCtrl);

  const vxStick = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.04, 8), cameraSilverMat);
  vxStick.position.set(-0.04, 0.040, 0.10);
  vectrex.add(vxStick);

  shelfGroup.add(vectrex);

  // B. Appareil photo vintage argenté et cuir noir (objectif face caméra)
  const camera = new THREE.Group();
  camera.name = 'vintageCamera';
  camera.position.set(0.36, 1.42, 0);

  const camBody = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.10, 0.10), cameraLeatherMat);
  camBody.position.y = 0.05;
  camBody.castShadow = true;
  camera.add(camBody);

  const camTop = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.035, 0.095), cameraSilverMat);
  camTop.position.set(0, 0.11, 0);
  camera.add(camTop);

  // Objectif en verre face caméra
  const lensBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.048, 0.08, 20), cameraSilverMat);
  lensBarrel.rotation.x = Math.PI / 2;
  lensBarrel.position.set(0, 0.05, 0.08);
  camera.add(lensBarrel);

  const lensGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.01, 16), lensGlassMat);
  lensGlass.rotation.x = Math.PI / 2;
  lensGlass.position.set(0, 0.05, 0.121);
  camera.add(lensGlass);

  shelfGroup.add(camera);

  // 4. NIVEAU 3 (ly = 1.90) : TROPHÉES DORÉS ET PORTFOLIO CALLISTO ARTS
  // A. Trophée doré étincelant avec anses
  const trophy = new THREE.Group();
  trophy.name = 'goldTrophy';
  trophy.position.set(-0.36, 1.92, 0);

  const trophyBase = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.06, 0.10), marbleBaseMat);
  trophyBase.position.y = 0.03;
  trophy.add(trophyBase);

  const trophyStem = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.025, 0.08, 12), goldTrophyMat);
  trophyStem.position.y = 0.10;
  trophy.add(trophyStem);

  const trophyCup = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.025, 0.14, 20), goldTrophyMat);
  trophyCup.position.y = 0.19;
  trophy.add(trophyCup);

  shelfGroup.add(trophy);

  // B. Grand livre relié Portfolio Callisto Arts (présenté debout face caméra, interactif vers www.callistoarts.com)
  const book = new THREE.Group();
  book.name = 'portfolioBookCallisto';
  book.position.set(0.30, 1.90, 0);

  // Chevalet / support d'exposition noir architectural derrière le livre
  const standMat = new THREE.MeshStandardMaterial({ color: 0x15181e, roughness: 0.5, metalness: 0.6 });
  const standBack = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.26, 0.015), standMat);
  standBack.position.set(0, 0.14, -0.04);
  standBack.rotation.x = -0.16;
  book.add(standBack);
  const standLip = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.045), standMat);
  standLip.position.set(0, 0.015, 0.02);
  book.add(standLip);

  // Texture de couverture haute définition 1024x1024
  const bookCanvas = document.createElement('canvas'); bookCanvas.width = 1024; bookCanvas.height = 1024;
  const bCtx = bookCanvas.getContext('2d');
  bCtx.fillStyle = '#0f172a'; bCtx.fillRect(0, 0, 1024, 1024);

  // Dégradé radial subtil luxueux
  const radG = bCtx.createRadialGradient(512, 512, 100, 512, 512, 600);
  radG.addColorStop(0, '#1e293b');
  radG.addColorStop(1, '#090d16');
  bCtx.fillStyle = radG;
  bCtx.fillRect(0, 0, 1024, 1024);

  // Double cadre doré luxueux
  bCtx.strokeStyle = '#d4af37'; bCtx.lineWidth = 14;
  bCtx.strokeRect(36, 36, 952, 952);
  bCtx.lineWidth = 4;
  bCtx.strokeRect(60, 60, 904, 904);

  // Coins décoratifs dorés
  bCtx.lineWidth = 6;
  [[80, 80], [944, 80], [80, 944], [944, 944]].forEach(([cx, cy]) => {
    bCtx.strokeRect(cx - 15, cy - 15, 30, 30);
  });

  // Emblème central losange doré
  bCtx.fillStyle = '#f59e0b';
  bCtx.beginPath();
  bCtx.moveTo(512, 150); bCtx.lineTo(540, 200); bCtx.lineTo(512, 250); bCtx.lineTo(484, 200);
  bCtx.closePath();
  bCtx.fill();

  // Typographies
  bCtx.fillStyle = '#f59e0b';
  bCtx.font = 'bold 64px "Segoe UI", Arial, sans-serif';
  bCtx.textAlign = 'center';
  bCtx.fillText('CALLISTO ARTS', 512, 340);

  // Ligne dorée
  bCtx.strokeStyle = '#d4af37'; bCtx.lineWidth = 3;
  bCtx.beginPath(); bCtx.moveTo(250, 380); bCtx.lineTo(774, 380); bCtx.stroke();

  bCtx.font = 'bold 40px "Segoe UI", Arial, sans-serif';
  bCtx.fillStyle = '#f1f5f9';
  bCtx.fillText('PORTFOLIO CRÉATIF', 512, 450);

  bCtx.font = '28px "Segoe UI", Arial, sans-serif';
  bCtx.fillStyle = '#94a3b8';
  bCtx.fillText('DESIGN • GRAPHISME • 3D', 512, 510);

  // Badge URL web cliquable
  bCtx.fillStyle = '#1e293b';
  bCtx.strokeStyle = '#38bdf8';
  bCtx.lineWidth = 3;
  bCtx.beginPath();
  if (bCtx.roundRect) {
    bCtx.roundRect(160, 680, 704, 90, 20);
  } else {
    bCtx.rect(160, 680, 704, 90);
  }
  bCtx.fill();
  bCtx.stroke();

  bCtx.font = 'bold 36px "Segoe UI", Arial, sans-serif';
  bCtx.fillStyle = '#38bdf8';
  bCtx.fillText('www.callistoarts.com', 512, 738);

  bCtx.font = 'italic 26px "Segoe UI", Arial, sans-serif';
  bCtx.fillStyle = '#facc15';
  bCtx.fillText('Cliquez pour visiter le portfolio', 512, 840);

  const bookTex = new THREE.CanvasTexture(bookCanvas);
  bookTex.colorSpace = THREE.SRGBColorSpace;
  const bookCoverMat = new THREE.MeshStandardMaterial({ map: bookTex, roughness: 0.35, metalness: 0.15 });
  const bookPagesMat = new THREE.MeshStandardMaterial({ color: 0xfdfaf5, roughness: 0.85 });
  const bookSpineMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.45 });
  const bookBackMat = new THREE.MeshStandardMaterial({ color: 0x0a0f18, roughness: 0.50 });

  // BoxGeometry : [0: +X (pages), 1: -X (tranche/dos), 2: +Y (pages haut), 3: -Y (pages bas), 4: +Z (COUVERTURE FACE CAMERA), 5: -Z (quatrième de couverture)]
  const bookMesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.38, 0.04), [
    bookPagesMat, bookSpineMat, bookPagesMat, bookPagesMat, bookCoverMat, bookBackMat
  ]);
  bookMesh.position.set(0, 0.20, 0);
  bookMesh.rotation.x = -0.10; // Légère inclinaison arrière naturelle sur chevalet face caméra
  bookMesh.castShadow = true;
  book.add(bookMesh);

  // Métadonnées d'interaction au clic
  const bookMeta = {
    showcaseProductKey: 'callistoBook',
    isCallistoBook: true,
    showcaseLabel: 'Portfolio Callisto Arts',
    showcasePrice: 'callistoarts.com',
    showcaseSub: 'Cliquez pour ouvrir le site www.callistoarts.com',
    baseScale: 1
  };
  book.userData = bookMeta;
  bookMesh.userData = bookMeta;
  standBack.userData = bookMeta;
  standLip.userData = bookMeta;

  shelfGroup.add(book);

  // Positionnement en hauteur sur le mur du fond, exactement entre le tableau et le sapin
  shelfGroup.position.set(3.45, 0, -1.02);
  shelfGroup.rotation.set(0, 0, 0);
  return shelfGroup;
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

  // Cheminée chaleureuse en pierre avec linteau chêne et feu crépitant sur le mur de gauche
  const fireplace = createWarmFireplace(leftX, floorY);
  roomGroup.add(fireplace);
  roomGroup.userData.fireplace = fireplace;

  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, wallHeight, roomDepth), sideWallMat);
  rightWall.position.set(rightX, wallY, roomCenterZ); rightWall.receiveShadow = true; roomGroup.add(rightWall);

  // Grande étagère rétro-gaming & design sur le mur de droite (Atari 520 ST, Amiga, Vectrex, Appareil photo, Trophées, Portfolio Callisto Arts)
  const retroShelf = createRetroTechShelf(rightX, floorY, roomCenterZ);
  roomGroup.add(retroShelf);
  roomGroup.userData.retroShelf = retroShelf;

  // Grand tableau GPO SARL (www.gposarl.com) sur le mur du fond à gauche de la borne d'arcade
  const gpoBoard = createGpoBoard();
  roomGroup.add(gpoBoard);
  roomGroup.userData.gpoBoard = gpoBoard;

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

    // Cheminée : en mode Noël -> pieds du Père Noël, saleté au sol, guirlande, pas de flammes vives
    const fp = roomGroup.userData?.fireplace;
    if (fp) {
      if (th === 'noel') {
        if (fp.userData?.christmasDecor) fp.userData.christmasDecor.visible = true;
        if (fp.userData?.flameGroup) fp.userData.flameGroup.visible = false;
        if (fp.userData?.fireLight) fp.userData.fireLight.visible = false;
      } else {
        if (fp.userData?.christmasDecor) fp.userData.christmasDecor.visible = false;
        if (fp.userData?.flameGroup) fp.userData.flameGroup.visible = true;
        if (fp.userData?.fireLight) fp.userData.fireLight.visible = true;
      }
    }
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
      // Animation crépitante chaleureuse du feu de la cheminée sur le mur gauche (hors mode Noël où le feu est éteint)
      const fp = roomGroup.userData?.fireplace;
      if (fp && fp.userData?.flameGroup && fp.userData.flameGroup.visible) {
        const time = performance.now() * 0.001;
        if (fp.userData?.fireLight) {
          const flicker = 1.9 + 0.45 * Math.sin(time * 8.5) + 0.25 * Math.cos(time * 15.2) + 0.15 * Math.sin(time * 23.0);
          fp.userData.fireLight.intensity = Math.max(1.1, flicker);
        }
        if (Array.isArray(fp.userData?.flames)) {
          fp.userData.flames.forEach(fl => {
            fl.scale.y = 0.85 + 0.35 * Math.sin(time * 11.5 + fl.userData.phase);
          });
        }
      }

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

  // Collection de boîtes de cadeaux au sol avec flots rouges et verts
  decor.add(createChristmasGiftsGroup());

  // Système de particules de neige continue ininterrompue
  const snow = createSnowSystem(1100);
  decor.add(snow.group);
  decor.userData.snowSystem = snow;

  return decor;
}

// Boîtes de cadeaux de Noël au sol avec ruban croisé et flot en relief rouge ou vert
export function createChristmasGiftsGroup() {
  const giftsGroup = new THREE.Group();
  giftsGroup.name = 'christmasGiftsGroup';

  function createSingleGift({ w, h, d, boxColor, ribbonColor, pos, rotY }) {
    const g = new THREE.Group();

    // 1. Boîte cadeau principale
    const boxMat = new THREE.MeshStandardMaterial({
      color: boxColor,
      roughness: 0.35,
      metalness: 0.12
    });
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), boxMat);
    box.position.y = h / 2;
    box.castShadow = true;
    box.receiveShadow = true;
    g.add(box);

    // 2. Rubans croisés
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: ribbonColor,
      roughness: 0.28,
      metalness: 0.20
    });
    const rw = Math.max(0.024, Math.min(w, d) * 0.16);

    const ribX = new THREE.Mesh(new THREE.BoxGeometry(w + 0.002, h + 0.002, rw), ribbonMat);
    ribX.position.y = h / 2;
    ribX.castShadow = true;
    g.add(ribX);

    const ribZ = new THREE.Mesh(new THREE.BoxGeometry(rw, h + 0.002, d + 0.002), ribbonMat);
    ribZ.position.y = h / 2;
    ribZ.castShadow = true;
    g.add(ribZ);

    // 3. Le Flot / Nœud papillon 3D sur le dessus de la boîte
    const bow = new THREE.Group();
    bow.position.set(0, h + 0.001, 0);

    // Nœud central
    const knot = new THREE.Mesh(new THREE.SphereGeometry(rw * 0.58, 12, 12), ribbonMat);
    knot.castShadow = true;
    bow.add(knot);

    // Boucles gauche et droite du flot
    const loopGeo = new THREE.TorusGeometry(rw * 1.15, rw * 0.22, 10, 20);
    const loopL = new THREE.Mesh(loopGeo, ribbonMat);
    loopL.rotation.set(Math.PI / 3, -Math.PI / 4, 0);
    loopL.position.set(-rw * 0.85, rw * 0.55, 0);
    loopL.castShadow = true;
    bow.add(loopL);

    const loopR = new THREE.Mesh(loopGeo, ribbonMat);
    loopR.rotation.set(Math.PI / 3, Math.PI / 4, 0);
    loopR.position.set(rw * 0.85, rw * 0.55, 0);
    loopR.castShadow = true;
    bow.add(loopR);

    // Deux rubans pendants qui retombent sur les bords
    const tailGeo = new THREE.BoxGeometry(rw * 0.55, 0.002, rw * 1.4);
    const tail1 = new THREE.Mesh(tailGeo, ribbonMat);
    tail1.rotation.set(0.18, 0.6, 0);
    tail1.position.set(rw * 0.55, 0.002, rw * 0.65);
    bow.add(tail1);

    const tail2 = new THREE.Mesh(tailGeo, ribbonMat);
    tail2.rotation.set(0.18, -0.6, 0);
    tail2.position.set(-rw * 0.55, 0.002, rw * 0.65);
    bow.add(tail2);

    g.add(bow);

    g.position.set(pos[0], pos[1], pos[2]);
    if (rotY) g.rotation.y = rotY;

    return g;
  }

  const floorY = -0.835;

  // Collection de boîtes cadeaux au sol au pied du sapin et vers le flanc de la table
  // 1. Grande boîte rouge carmin avec ruban et flot vert émeraude
  giftsGroup.add(createSingleGift({
    w: 0.36, h: 0.30, d: 0.36,
    boxColor: 0xb91c1c, // Rouge carmin
    ribbonColor: 0x15803d, // Flot vert émeraude
    pos: [4.15, floorY, 0.38],
    rotY: 0.22
  }));

  // 2. Belle boîte vert sapin avec ruban et flot rouge vermillon
  giftsGroup.add(createSingleGift({
    w: 0.32, h: 0.25, d: 0.30,
    boxColor: 0x166534, // Vert forêt profond
    ribbonColor: 0xdc2626, // Flot rouge vermillon
    pos: [4.42, floorY, -0.42],
    rotY: -0.35
  }));

  // 3. Boîte dorée étincelante avec ruban et flot rouge carmin
  giftsGroup.add(createSingleGift({
    w: 0.28, h: 0.22, d: 0.28,
    boxColor: 0xca8a04, // Or satiné
    ribbonColor: 0xb91c1c, // Flot rouge
    pos: [3.85, floorY, 0.12],
    rotY: 0.42
  }));

  // 4. Boîte rouge rubis empilée avec ruban et flot vert sapin
  giftsGroup.add(createSingleGift({
    w: 0.24, h: 0.20, d: 0.24,
    boxColor: 0xdc2626, // Rouge vif
    ribbonColor: 0x16a34a, // Flot vert
    pos: [4.62, floorY, 0.22],
    rotY: -0.15
  }));

  // 5. Boîte ivoire féerique avec ruban et flot rouge
  giftsGroup.add(createSingleGift({
    w: 0.30, h: 0.18, d: 0.25,
    boxColor: 0xf8fafc, // Blanc ivoire
    ribbonColor: 0xdc2626, // Flot rouge
    pos: [3.80, floorY, -0.32],
    rotY: 0.15
  }));

  // 6. Boîte cadeau moyenne vert émeraude avec flot rouge vif près du pied de table
  giftsGroup.add(createSingleGift({
    w: 0.26, h: 0.22, d: 0.26,
    boxColor: 0x047857, // Émeraude
    ribbonColor: 0xef4444, // Flot rouge
    pos: [3.20, floorY, 0.48],
    rotY: 0.30
  }));

  return giftsGroup;
}
