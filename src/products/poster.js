import * as THREE from 'three';

export const posterProduct = {
  id: 'poster-80x60',
  name: 'Poster 80 × 60 cm (Sans cadre)',
  dimensions: [800, 600, 2],
  printable: [800, 600],
  icon: '🖼️',
  create() {
    const group = new THREE.Group();
    const width = 2.4;
    const height = 1.8;

    // Support papier satiné épais sans cadre (vendu sans cadre)
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.0 });
    const paperSheet = new THREE.Mesh(new THREE.BoxGeometry(width, 0.008, height), baseMaterial);
    paperSheet.position.y = -0.004;
    paperSheet.castShadow = true;
    paperSheet.receiveShadow = true;
    group.add(paperSheet);

    const topGeo = new THREE.PlaneGeometry(width, height);
    topGeo.rotateX(-Math.PI / 2);
    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.28,
      metalness: 0.02,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    });
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.position.y = 0.001;
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
      type: 'flat'
    };
  }
};
