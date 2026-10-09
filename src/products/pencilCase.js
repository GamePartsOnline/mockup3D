import * as THREE from 'three';

const createPouchShape = (width, height, segmentsX, segmentsY) => {
  const geo = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // Normalize coordinates from -1 to 1
    const nx = x / (width / 2);
    const ny = y / (height / 2);
    
    // Create a bulge in the middle, tapering off at edges
    const bulge = Math.cos(nx * Math.PI / 2) * Math.cos(ny * Math.PI / 2);
    const z = bulge * 0.05; // 5cm thick in the middle
    pos.setZ(i, z);
  }
  geo.computeVertexNormals();
  return geo;
};

export const pencilCaseProduct = {
  id: 'pencil-case', name: 'Trousse de maquillage', dimensions: [210, 130, 10], printable: [210, 130],
  icon: '👝',
  create() {
    const group = new THREE.Group();
    const width = 2.1; // 21 cm
    const height = 1.3; // 13 cm
    
    // Front half (Printable)
    const frontGeo = createPouchShape(width, height, 32, 32);
    let uvs = frontGeo.attributes.uv;
    for (let i = 0; i < uvs.count; i++) {
        // Face A: 0 to 0.5
        let u = uvs.getX(i); 
        uvs.setX(i, u * 0.5); 
    }
    frontGeo.rotateX(-Math.PI / 2);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0.0 });
    const top = new THREE.Mesh(frontGeo, topMaterial);
    top.castShadow = true; top.receiveShadow = true; group.add(top);
    
    // Back half (Printable)
    const backGeo = createPouchShape(width, height, 32, 32);
    uvs = backGeo.attributes.uv;
    for (let i = 0; i < uvs.count; i++) {
        // Face B: 0.5 to 1.0, miroir demandé (uniquement Face B)
        let u = 1.0 - uvs.getX(i); 
        uvs.setX(i, u * 0.5 + 0.5); 
    }
    backGeo.rotateX(Math.PI / 2); // Flip to back
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.95, metalness: 0.0 }); 
    const back = new THREE.Mesh(backGeo, topMaterial);
    back.castShadow = true; back.receiveShadow = true; group.add(back);
    
    // Zipper line at the very top (back edge to blend)
    const zipGeo = new THREE.CylinderGeometry(0.015, 0.015, width, 8);
    zipGeo.rotateZ(Math.PI / 2);
    zipGeo.translate(0, 0.005, -height / 2); // at the top edge of the pouch
    const zipMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.3 });
    const zip = new THREE.Mesh(zipGeo, zipMaterial);
    group.add(zip);

    // Zipper pull
    const pullGeo = new THREE.BoxGeometry(0.04, 0.01, 0.08);
    pullGeo.translate(width / 2 - 0.1, 0.01, -height / 2 - 0.04);
    const pull = new THREE.Mesh(pullGeo, zipMaterial);
    group.add(pull);
    
    return { group, top, topMaterial, baseMaterial, printAspect: width / height, type: 'flat', printMesh: top, meshWidth: width, meshHeight: height, twoSided: true };
  }
};
