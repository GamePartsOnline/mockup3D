import * as THREE from 'three';

export const posterProduct = {
  id: 'poster-80x60',
  name: 'Poster 80 × 60 cm (Sans cadre)',
  dimensions: [800, 600, 2],
  printable: [800, 600],
  icon: '🖼️',
  create() {
    const group = new THREE.Group();
    const width = 1.44;
    const height = 1.08;
    const yCenter = 0.55;

    // Mur d'exposition en arrière-plan
    const wallGeo = new THREE.PlaneGeometry(width * 2.5, height * 2.2);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf3f5f8, roughness: 0.95 });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(0, yCenter, -0.012);
    wall.receiveShadow = true;
    group.add(wall);

    // Support papier satiné épais 250g sans cadre, fixé verticalement au mur
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.0 });
    const paperSheet = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.006), baseMaterial);
    paperSheet.position.set(0, yCenter, -0.003);
    paperSheet.castShadow = true;
    paperSheet.receiveShadow = true;
    group.add(paperSheet);

    const topGeo = new THREE.PlaneGeometry(width, height);
    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.45,
      metalness: 0.0,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.position.set(0, yCenter, 0.001);
    top.receiveShadow = true;
    group.add(top);

    return {
      group,
      top,
      topMaterial,
      baseMaterial,
      printMesh: top,
      printAspect: width / height,
      meshWidth: width,
      meshHeight: height,
      yOffset: yCenter,
      vertical: true,
      type: 'flat'
    };
  }
};
