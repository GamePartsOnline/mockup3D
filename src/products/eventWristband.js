import * as THREE from 'three';

// Generic woven event wristband, shown flat so the full print is visible.
const WIDTH = 2.5;
const HEIGHT = 0.2;

export const eventWristbandProduct = {
  id: 'event-wristband-fabric',
  name: 'Bracelet événementiel en tissu',
  dimensions: [250, 20, 1],
  printable: [250, 20],
  icon: '🎟️',
  create() {
    const group = new THREE.Group();
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.95, metalness: 0 });
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0, side: THREE.FrontSide });
    const stitchMaterial = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 1 });
    const claspMaterial = new THREE.MeshStandardMaterial({ color: 0xf8f8f5, roughness: 0.62, metalness: 0 });

    const band = new THREE.Mesh(new THREE.BoxGeometry(WIDTH, 0.012, HEIGHT), baseMaterial);
    band.castShadow = true;
    band.receiveShadow = true;
    group.add(band);

    const topGeo = new THREE.PlaneGeometry(WIDTH, HEIGHT);
    topGeo.rotateX(-Math.PI / 2);
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.position.y = 0.0065;
    top.receiveShadow = true;
    group.add(top);

    // Stitched edges and a fixed, one-way plastic lock suggest a sealed event wristband.
    for (const z of [-HEIGHT / 2 + 0.008, HEIGHT / 2 - 0.008]) {
      const seam = new THREE.Mesh(new THREE.BoxGeometry(WIDTH - 0.035, 0.001, 0.002), stitchMaterial);
      seam.position.set(0, 0.0075, z);
      group.add(seam);
    }
    const clasp = new THREE.Mesh(new THREE.BoxGeometry(0.072, 0.023, HEIGHT + 0.012), claspMaterial);
    clasp.position.set(WIDTH / 2 - 0.18, 0.01, 0);
    clasp.castShadow = true;
    group.add(clasp);
    const lockTooth = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.004, HEIGHT * 0.45), claspMaterial);
    lockTooth.position.set(WIDTH / 2 - 0.18, 0.023, 0);
    group.add(lockTooth);

    return {
      group, top, topMaterial, baseMaterial, printMesh: top,
      printAspect: WIDTH / HEIGHT, meshWidth: WIDTH, meshHeight: HEIGHT,
      type: 'flat'
    };
  }
};
