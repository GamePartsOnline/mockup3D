import * as THREE from 'three';

export const photoFrameProduct = {
  id: 'photo-frame-a4',
  name: 'Poster A4 (Sans cadre)',
  dimensions: [210, 297, 3],
  printable: [210, 297],
  icon: '📄',
  create() {
    const group = new THREE.Group();
    const w = 0.70;
    const h = 0.99;
    const thickness = 0.008;
    const yCenter = 0.52;

    // Support papier d'art rigide 250g blanc satiné sans cadre
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xfcfcfc,
      roughness: 0.6,
      metalness: 0.02
    });
    const sheet = new THREE.Mesh(new THREE.BoxGeometry(w, h, thickness), paperMat);
    sheet.position.set(0, yCenter, 0);
    sheet.castShadow = true;
    sheet.receiveShadow = true;

    // Mini chevalet discret à l'arrière pour le maintien debout
    const standMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.8 });
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.14, h * 0.45, 0.006), standMat);
    stand.position.set(0, yCenter - h * 0.22, -0.09);
    stand.rotation.x = 0.38;
    stand.castShadow = true;

    // Face avant d'impression du poster A4
    const topGeo = new THREE.PlaneGeometry(w - 0.004, h - 0.004);
    const topMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.01,
      clearcoat: 0.15,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.position.set(0, yCenter, thickness / 2 + 0.001);
    top.receiveShadow = true;

    group.add(sheet, stand, top);

    return {
      group,
      top,
      topMaterial,
      baseMaterial: paperMat,
      printMesh: top,
      printAspect: w / h,
      meshWidth: w,
      meshHeight: h,
      yOffset: yCenter,
      type: 'flat'
    };
  }
};
