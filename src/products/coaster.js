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

export const coasterProduct = {
  id: 'coaster-square', name: 'Sous-verre carré', dimensions: [90, 90, 3], printable: [90, 90],
  icon: '🔲',
  create() {
    const group = new THREE.Group();
    // width 0.9, height 0.9 (representing 90x90 mm)
    const size = 0.9;
    const shape = roundedRect(size, size, 0.08); // rounded corners
    
    // Base (cork or foam)
    const baseGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.005, bevelThickness: 0.005, curveSegments: 16 });
    baseGeo.rotateX(Math.PI / 2); baseGeo.translate(0, -0.015, 0);
    // Darker, rougher base for cork/foam look
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2b1f, roughness: 1.0, metalness: 0.0 });
    const base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true; base.receiveShadow = true; group.add(base);
    
    // Glossy/Printable top surface
    const topGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.004, bevelEnabled: false, curveSegments: 16 });
    topGeo.rotateX(Math.PI / 2);
    topGeo.translate(0, 0.002, 0);
    
    const positions = topGeo.attributes.position;
    const uv = topGeo.attributes.uv;
    
    // UV Mapping
    for (let i = 0; i < positions.count; i++) {
      const u = (positions.getX(i) + size / 2) / size;
      const v = (size / 2 - positions.getZ(i)) / size;
      uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    // Glossy finish for the print
    const topMaterial = new THREE.MeshPhysicalMaterial({ 
      color: 0xffffff, roughness: 0.15, metalness: 0, 
      clearcoat: 0.5, clearcoatRoughness: 0.2,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 
    });
    
    const top = new THREE.Mesh(topGeo, topMaterial); 
    top.receiveShadow = true; 
    group.add(top);
    
    return { group, top, topMaterial, baseMaterial, printAspect: 1.0, type: 'flat', printMesh: top, meshWidth: size, meshHeight: size };
  }
};
