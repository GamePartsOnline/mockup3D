import * as THREE from 'three';

const roundedRectWithHole = (width, height, radius, holeRadius, holeYOffset) => {
  const x = -width / 2, y = -height / 2;
  const s = new THREE.Shape();
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y); s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius); s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height); s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
  
  const hole = new THREE.Path();
  hole.absarc(0, (height / 2) - holeYOffset, holeRadius, 0, Math.PI * 2, false);
  s.holes.push(hole);
  return s;
};

export const keychainRectProduct = {
  id: 'keychain-rect-unisub', name: 'Porte-clés rectangle', dimensions: [40.6, 57.15, 1.14], printable: [40.6, 57.15],
  icon: '🔑',
  create() {
    const group = new THREE.Group();
    // Units mapped to 1 unit = 100mm -> 40.6mm = 0.406
    const w = 0.406, h = 0.5715;
    const shape = roundedRectWithHole(w, h, 0.03, 0.015, 0.04);
    
    // Thickness = 0.0114 units.
    const depth = 0.008;
    const bevelSize = 0.0017;
    const bevelThickness = 0.0017;
    const baseGeo = new THREE.ExtrudeGeometry(shape, { 
      depth: depth, bevelEnabled: true, bevelSegments: 3, bevelSize: bevelSize, bevelThickness: bevelThickness, curveSegments: 24 
    });
    
    // Center it on Z
    baseGeo.translate(0, 0, -depth / 2);
    
    const positions = baseGeo.attributes.position;
    const uv = baseGeo.attributes.uv;
    
    // UV Mapping (Before moving it up)
    for (let i = 0; i < positions.count; i++) {
        const px = positions.getX(i);
        const py = positions.getY(i);
        const pz = positions.getZ(i);
        
        // v=1 is top (py = h/2), v=0 is bottom (py = -h/2)
        const v = (py + h / 2) / h;
        
        // Front face (pz > 0)
        let u = (px + w / 2) / w;
        
        // Back face (pz < 0): flip U
        if (pz < 0) {
             u = (-px + w / 2) / w;
             u = u * 0.5 + 0.5;
             u = Math.max(u, 0.501);
        } else {
             u = u * 0.5;
             u = Math.min(u, 0.499);
        }
        
        uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    // Elevate so it stands on the floor
    baseGeo.translate(0, h / 2 + bevelThickness, 0);
    
    // Smooth, somewhat glossy plastic material
    const printMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.2 });
    const sideMaterial = new THREE.MeshPhysicalMaterial({ color: 0xf0f0f0, roughness: 0.3, metalness: 0, clearcoat: 0.3 });
    
    // Materials mapping: front/back faces get printMaterial, sides get sideMaterial
    const mesh = new THREE.Mesh(baseGeo, [printMaterial, sideMaterial]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    
    return { 
      group, 
      topMaterial: printMaterial, 
      baseMaterial: sideMaterial, 
      printMesh: mesh, 
      printAspect: w / h, 
      type: 'flat', twoSided: true,
      meshWidth: w, meshHeight: h
    };
  }
};
