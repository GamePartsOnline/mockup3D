import * as THREE from 'three';

const createPuffShape = (size, segments) => {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  const pos = geo.attributes.position;
  const half = size / 2;
  // Bombé régulier avec jonction hermétique stricte à z = 0 sur les 4 bords
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const nx = Math.max(-1, Math.min(1, x / half));
    const ny = Math.max(-1, Math.min(1, y / half));
    const cx = Math.cos(nx * Math.PI * 0.5);
    const cy = Math.cos(ny * Math.PI * 0.5);
    const z = Math.pow(Math.max(0, cx * cy), 0.55) * 0.22;
    pos.setZ(i, z);
  }
  geo.computeVertexNormals();
  return geo;
};

export const cushionProduct = {
  id: 'cushion', name: 'Housse de Coussin (Sublimation)', dimensions: [400, 400, 150], printable: [400, 400],
  icon: '🛋️',
  create() {
    const group = new THREE.Group();
    const size = 2.0; // 40 cm relative scale

    // Cushion top half (Face imprimable unique)
    const topGeo = createPuffShape(size, 40);
    topGeo.rotateX(-Math.PI / 2);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0.0 });
    const top = new THREE.Mesh(topGeo, topMaterial);
    top.castShadow = true; top.receiveShadow = true; group.add(top);

    // Cushion bottom half (Dos textile uni non imprimable)
    const bottomGeo = createPuffShape(size, 40);
    bottomGeo.rotateX(Math.PI / 2);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.9, metalness: 0.0 });
    const bottom = new THREE.Mesh(bottomGeo, baseMaterial);
    bottom.castShadow = true; bottom.receiveShadow = true; group.add(bottom);

    return { group, top, topMaterial, baseMaterial, printAspect: 1, type: 'flat', printMesh: top, meshWidth: size, meshHeight: size, twoSided: false };
  }
};
