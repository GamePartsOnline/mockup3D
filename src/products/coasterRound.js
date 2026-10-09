import * as THREE from 'three';

export const coasterRoundProduct = {
  id: 'coaster-round', name: 'Sous-verre rond (Caoutchouc)', dimensions: [100, 100, 3], printable: [100, 100],
  icon: '⚪',
  create() {
    const group = new THREE.Group();
    const radius = 0.5; // 1.0 unit diameter
    
    // Rubber base
    const baseGeo = new THREE.CylinderGeometry(radius, radius, 0.03, 64);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9, metalness: 0.0 });
    const base = new THREE.Mesh(baseGeo, baseMaterial);
    base.position.y = -0.015;
    base.castShadow = true; base.receiveShadow = true; group.add(base);
    
    // Glossy top surface
    const topGeo = new THREE.CylinderGeometry(radius, radius, 0.002, 64);
    const topMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, roughness: 0.8, metalness: 0.1
    });
    const top = new THREE.Mesh(topGeo, topMaterial); 
    top.position.y = 0.001;
    top.receiveShadow = true; group.add(top);
    
    // UV Mapping for cylinder cap (top face)
    // The cylinder geometry has UVs. For the top cap, we want to map the 2D texture.
    const positions = topGeo.attributes.position;
    const uv = topGeo.attributes.uv;
    
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      if (y > 0) { // top vertices
        const u = (positions.getX(i) / radius + 1) / 2;
        const v = (positions.getZ(i) / radius + 1) / 2;
        uv.setXY(i, u, 1 - v); // flip V to match texture orientation
      }
    }
    uv.needsUpdate = true;
    
    return { group, top, topMaterial, baseMaterial, printAspect: 1, type: 'flat', printMesh: top, meshWidth: 1.0, meshHeight: 1.0 };
  }
};
