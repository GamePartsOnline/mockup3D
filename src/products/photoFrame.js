import * as THREE from 'three';

export const photoFrameProduct = {
  id: 'photo-frame-a4',
  name: 'Poster A4 (21 × 29,7 cm)',
  dimensions: [210, 297, 18],
  printable: [210, 297],
  icon: '🖼️',
  create() {
    const group = new THREE.Group();
    const w = 0.70;
    const h = 0.99;
    const border = 0.055;
    const depth = 0.036;
    const yCenter = 0.54;

    // Baguette du cadre (noire satinée par défaut, personnalisable via baseMaterial)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e242b,
      roughness: 0.38,
      metalness: 0.12
    });

    const topBar = new THREE.Mesh(new THREE.BoxGeometry(w + border * 2, border, depth), baseMaterial);
    topBar.position.set(0, yCenter + h / 2 + border / 2, 0);
    topBar.castShadow = true;
    topBar.receiveShadow = true;

    const botBar = new THREE.Mesh(new THREE.BoxGeometry(w + border * 2, border, depth), baseMaterial);
    botBar.position.set(0, yCenter - h / 2 - border / 2, 0);
    botBar.castShadow = true;
    botBar.receiveShadow = true;

    const leftBar = new THREE.Mesh(new THREE.BoxGeometry(border, h, depth), baseMaterial);
    leftBar.position.set(-w / 2 - border / 2, yCenter, 0);
    leftBar.castShadow = true;
    leftBar.receiveShadow = true;

    const rightBar = new THREE.Mesh(new THREE.BoxGeometry(border, h, depth), baseMaterial);
    rightBar.position.set(w / 2 + border / 2, yCenter, 0);
    rightBar.castShadow = true;
    rightBar.receiveShadow = true;

    // Dos carton rigide et pied cravate arrière pour poser le cadre
    const backMat = new THREE.MeshStandardMaterial({ color: 0x2b3038, roughness: 0.75 });
    const backBoard = new THREE.Mesh(new THREE.BoxGeometry(w + border * 0.8, h + border * 0.8, 0.012), backMat);
    backBoard.position.set(0, yCenter, -depth * 0.32);
    backBoard.castShadow = true;

    const standLeg = new THREE.Mesh(new THREE.BoxGeometry(0.16, h * 0.62, 0.014), backMat);
    standLeg.position.set(0, yCenter - h * 0.16, -0.14);
    standLeg.rotation.x = 0.36;
    standLeg.castShadow = true;

    // Passe-partout blanc fin derrière la vitre
    const matBoard = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.01, h + 0.01, 0.014),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 })
    );
    matBoard.position.set(0, yCenter, -0.002);

    // Zone photo A4 brillante sous verre
    const topGeo = new THREE.PlaneGeometry(w, h);
    const topMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.02,
      clearcoat: 0.65,
      clearcoatRoughness: 0.12,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.position.set(0, yCenter, 0.007);
    top.receiveShadow = true;

    group.add(topBar, botBar, leftBar, rightBar, backBoard, standLeg, matBoard, top);

    return {
      group,
      top,
      topMaterial,
      baseMaterial,
      printMesh: top,
      printAspect: w / h,
      meshWidth: w,
      meshHeight: h,
      yOffset: yCenter,
      type: 'flat'
    };
  }
};
