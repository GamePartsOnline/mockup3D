import * as THREE from 'three';

const circleWithHole = (radius, holeRadius, holeYOffset) => {
  const s = new THREE.Shape();
  s.absarc(0, 0, radius, 0, Math.PI * 2, false);
  
  const hole = new THREE.Path();
  // Hole at the top
  hole.absarc(0, radius - holeYOffset, holeRadius, 0, Math.PI * 2, true);
  s.holes.push(hole);
  return s;
};

export const keychainRoundProduct = {
  id: 'keychain-round-unisub', name: 'Porte-clés rond Unisub', dimensions: [63.5, 63.5, 2.29], printable: [63.5, 63.5],
  icon: '⚪',
  create() {
    const group = new THREE.Group();
    // Diameter 63.5mm -> radius 0.3175
    const r = 0.3175;
    // Hole radius ~1.5mm, 4mm from edge
    const shape = circleWithHole(r, 0.015, 0.04);
    
    // Thickness = 2.29mm -> 0.0229 units
    const depth = 0.018;
    const bevelThickness = 0.00245;
    const bevelSize = 0.002;
    
    const baseGeo = new THREE.ExtrudeGeometry(shape, { 
      depth: depth, bevelEnabled: true, bevelSegments: 4, bevelSize: bevelSize, bevelThickness: bevelThickness, curveSegments: 32 
    });
    
    baseGeo.translate(0, 0, -depth / 2);
    
    const positions = baseGeo.attributes.position;
    const uv = baseGeo.attributes.uv;
    
    // UV Mapping avant translation
    for (let i = 0; i < positions.count; i++) {
        const px = positions.getX(i);
        const py = positions.getY(i);
        const pz = positions.getZ(i);
        
        // py va de -r à +r. v=1 en haut.
        const v = (py + r) / (2 * r);
        
        // Face avant (pz > 0)
        let u = (px + r) / (2 * r);
        
        if (pz < 0) {
             u = (-px + r) / (2 * r);
             u = u * 0.5 + 0.5;
             u = Math.max(u, 0.501);
        } else {
             u = u * 0.5;
             u = Math.min(u, 0.499);
        }
        
        uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    // On le pose sur le sol
    baseGeo.translate(0, r + bevelThickness, 0);
    
    const printMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.2 });
    const sideMaterial = new THREE.MeshPhysicalMaterial({ color: 0xf0f0f0, roughness: 0.3, metalness: 0, clearcoat: 0.3 });
    
    const mesh = new THREE.Mesh(baseGeo, [printMaterial, sideMaterial]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    
    return { 
      group, 
      topMaterial: printMaterial, 
      baseMaterial: sideMaterial, 
      printMesh: mesh, 
      printAspect: 1.0, 
      type: 'flat', twoSided: true,
      meshWidth: 0.635, meshHeight: 0.635
    };
  }
};
