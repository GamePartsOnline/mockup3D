import * as THREE from 'three';

const roundedRect = (width, height, radius) => {
  const x = -width / 2, y = -height / 2;
  const s = new THREE.Shape();
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y); s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius); s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height); s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
  return s;
};

export const mousePadProduct = {
  id: 'mouse-pad-240x200', name: 'Tapis de souris', dimensions: [240, 200, 3], printable: [240, 200],
  create() {
    const group = new THREE.Group();
    const shape = roundedRect(2.4, 2, 0.13);
    const baseGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: true, bevelSegments: 4, bevelSize: 0.018, bevelThickness: 0.012, curveSegments: 16 });
    baseGeo.rotateX(Math.PI / 2); baseGeo.translate(0, -0.045, 0);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x101318, roughness: 0.7, metalness: 0.02 });
    const base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true; base.receiveShadow = true; group.add(base);
    const topGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.004, bevelEnabled: false, curveSegments: 16 });
    topGeo.rotateX(Math.PI / 2);
    topGeo.translate(0, 0.001, 0);
    const positions = topGeo.attributes.position;
    const uv = topGeo.attributes.uv;
    for (let i = 0; i < positions.count; i++) {
      uv.setXY(i, (positions.getX(i) + 1.2) / 2.4, (1 - positions.getZ(i)) / 2);
    }
    uv.needsUpdate = true;
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xf7f7f4, roughness: 0.72, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const top = new THREE.Mesh(topGeo, topMaterial); top.receiveShadow = true; group.add(top);
    return { group, top, topMaterial, baseMaterial, printAspect: 1.2, type: 'flat' };
  }
};
