import * as THREE from 'three';

function createCoffeeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const cx = 256, cy = 256, r = 256;

  // 1. Fond café espresso noir / brun profond
  const baseGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, r);
  baseGrad.addColorStop(0, '#22120a');
  baseGrad.addColorStop(0.5, '#2e180d');
  baseGrad.addColorStop(0.85, '#3a1f11');
  baseGrad.addColorStop(1, '#1f0d06');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 512, 512);

  // 2. Volutes de crème dorée (crema espresso)
  for (let i = 0; i < 35; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = (0.2 + Math.random() * 0.7) * r;
    const spotX = cx + Math.cos(angle) * dist;
    const spotY = cy + Math.sin(angle) * dist;
    const spotR = 25 + Math.random() * 55;

    const grad = ctx.createRadialGradient(spotX, spotY, 2, spotX, spotY, spotR);
    const alpha = 0.35 + Math.random() * 0.35;
    grad.addColorStop(0, `rgba(212, 163, 107, ${alpha})`);
    grad.addColorStop(0.5, `rgba(184, 126, 68, ${alpha * 0.6})`);
    grad.addColorStop(1, 'rgba(46, 24, 13, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(spotX, spotY, spotR, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Anneau doré de crème sur le pourtour (créma naturelle le long de la céramique)
  const ringGrad = ctx.createRadialGradient(cx, cy, r * 0.82, cx, cy, r);
  ringGrad.addColorStop(0, 'rgba(196, 138, 72, 0)');
  ringGrad.addColorStop(0.5, 'rgba(217, 160, 91, 0.65)');
  ringGrad.addColorStop(0.9, 'rgba(180, 115, 50, 0.45)');
  ringGrad.addColorStop(1, 'rgba(46, 24, 13, 0.2)');
  ctx.fillStyle = ringGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  // 4. Micro-bulles d'espresso
  for (let b = 0; b < 120; b++) {
    const bAngle = Math.random() * Math.PI * 2;
    const bDist = (0.3 + Math.random() * 0.65) * r;
    const bx = cx + Math.cos(bAngle) * bDist;
    const by = cy + Math.sin(bAngle) * bDist;
    const br = 1 + Math.random() * 2.5;
    ctx.fillStyle = 'rgba(240, 200, 150, 0.55)';
    ctx.beginPath();
    ctx.arc(bx, by, br, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const mug11ozProduct = {
  id: 'mug-11oz', name: 'Mug blanc 11 oz', dimensions: 'Ø 82 × 95 mm',
  create() {
    const group = new THREE.Group();
    const printMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .18, clearcoat: .45, clearcoatRoughness: .16 });
    const ceramic = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .16, clearcoat: .5, clearcoatRoughness: .14 });
    const handleMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .16, clearcoat: .5, clearcoatRoughness: .14 });
    const innerMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .2, clearcoat: .4, clearcoatRoughness: .18, side: THREE.DoubleSide });
    const thetaLength = (210 / 257.6) * Math.PI * 2;
    const bodyGap = Math.PI * 2 - thetaLength;

    // Corps cylindrique extérieur ouvert en haut et bas (openEnded = true)
    const bodyGeometry = new THREE.CylinderGeometry(.7, .7, 1.76, 96, 1, true, bodyGap / 2, thetaLength);
    const body = new THREE.Mesh(bodyGeometry, printMaterial); body.castShadow = true; body.receiveShadow = true; group.add(body);

    const bodyBackGeometry = new THREE.CylinderGeometry(.7, .7, 1.76, 32, 1, true, -bodyGap / 2, bodyGap);
    const bodyBack = new THREE.Mesh(bodyBackGeometry, ceramic); bodyBack.castShadow = true; bodyBack.receiveShadow = true; group.add(bodyBack);

    // Rebord supérieur en céramique
    const rimGeo = new THREE.RingGeometry(.62, .7, 96);
    rimGeo.rotateX(-Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, ceramic);
    rim.position.y = .88;
    group.add(rim);

    // Fond inférieur du mug au sol
    const bottomGeo = new THREE.CircleGeometry(.7, 64);
    bottomGeo.rotateX(Math.PI / 2);
    const bottom = new THREE.Mesh(bottomGeo, ceramic);
    bottom.position.y = -.88;
    group.add(bottom);

    // Paroi intérieure blanche visible sous le rebord
    const innerWallGeo = new THREE.CylinderGeometry(.62, .62, .40, 96, 1, true);
    const innerWall = new THREE.Mesh(innerWallGeo, innerMaterial);
    innerWall.position.y = .68;
    group.add(innerWall);

    // Surface de café réaliste avec crème dorée et reflet liquide
    const coffeeMaterial = new THREE.MeshPhysicalMaterial({
      map: createCoffeeTexture(),
      roughness: .12,
      metalness: .05,
      clearcoat: .95,
      clearcoatRoughness: .08
    });
    const coffeeGeo = new THREE.CircleGeometry(.618, 96);
    coffeeGeo.rotateX(-Math.PI / 2);
    const coffee = new THREE.Mesh(coffeeGeo, coffeeMaterial);
    coffee.position.y = .76;
    coffee.receiveShadow = true;
    group.add(coffee);

    // L'anse est centrée sur l'axe (X = 0, Z > 0)
    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, .58, .62), new THREE.Vector3(0, .58, 1.08), new THREE.Vector3(0, .3, 1.28),
      new THREE.Vector3(0, -.3, 1.28), new THREE.Vector3(0, -.58, 1.08), new THREE.Vector3(0, -.58, .62)
    ]);
    const handle = new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 64, .105, 20, false), handleMaterial); handle.castShadow = true; group.add(handle);
    group.position.y = .82;
    return { group, topMaterial: printMaterial, baseMaterial: ceramic, handleMaterial, innerMaterial, printMesh: body, printAspect: 210 / 95, type: 'wrap' };
  }
};
