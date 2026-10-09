import * as THREE from 'three';

const createTshirtShape = () => {
  const s = new THREE.Shape();
  // Start at bottom center
  s.moveTo(0, -0.35);
  s.lineTo(0.20, -0.35); // Bottom right
  s.lineTo(0.20, 0.15); // Armpit right
  s.lineTo(0.35, 0.12); // Sleeve right bottom
  s.lineTo(0.38, 0.22); // Sleeve right top
  s.lineTo(0.22, 0.28); // Shoulder right
  s.quadraticCurveTo(0.15, 0.35, 0, 0.35); // Neck right to center
  s.quadraticCurveTo(-0.15, 0.35, -0.22, 0.28); // Center to Neck left
  s.lineTo(-0.38, 0.22); // Sleeve left top
  s.lineTo(-0.35, 0.12); // Sleeve left bottom
  s.lineTo(-0.20, 0.15); // Armpit left
  s.lineTo(-0.20, -0.35); // Bottom left
  s.lineTo(0, -0.35); // Close
  return s;
};

export const tshirtTechnoProduct = {
  id: 'tshirt-technotape', name: 'T-shirt Technotape (Zones libres)', dimensions: [40, 70, 0.5], printable: [40, 70],
  icon: '👕',
  create() {
    const group = new THREE.Group();
    const shape = createTshirtShape();
    
    const depth = 0.01;
    const baseGeo = new THREE.ExtrudeGeometry(shape, { 
      depth: depth, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.003, bevelThickness: 0.003, curveSegments: 24 
    });
    
    // Center Z
    baseGeo.translate(0, 0, -depth / 2);
    // Elevate Y so bottom is at Y=0
    baseGeo.translate(0, 0.35, 0);
    
    const positions = baseGeo.attributes.position;
    const uv = baseGeo.attributes.uv;
    
    // UV Mapping: 
    // bounding box: X from -0.38 to 0.38, Y from 0 to 0.70
    // But printable area is mostly the body (X from -0.20 to 0.20, Y from 0 to 0.70)
    // We map U from -0.20 to 0.20 so the canvas strictly covers the body (ventral/coeur/dos).
    // Sleeves will just bleed or repeat if outside [0,1].
    for (let i = 0; i < positions.count; i++) {
        const px = positions.getX(i);
        const py = positions.getY(i);
        const pz = positions.getZ(i);
        
        // v = 1 is top (0.70), v = 0 is bottom (0)
        const v = py / 0.70;
        
        // U mapping
        let u = (px + 0.20) / 0.40;
        
        // Face arrière (pz < 0) : on retourne U
        if (pz < 0) {
             u = (-px + 0.20) / 0.40;
        }
        
        uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    // Sensation coton -> slightly rough, no clearcoat
    const printMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0 });
    const sideMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.9, metalness: 0 });
    
    const mesh = new THREE.Mesh(baseGeo, [printMaterial, sideMaterial]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    
    return { 
      group, 
      topMaterial: printMaterial, 
      baseMaterial: sideMaterial, 
      printMesh: mesh, 
      printAspect: 40 / 70, 
      type: 'flat', twoSided: true 
    };
  }
};
