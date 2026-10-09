import * as THREE from 'three';

export const keychainHeartProduct = {
  id: 'keychain-heart', name: 'Porte-clés Cœur Unisub', dimensions: [57.2, 63.5, 2.29], printable: [57.2, 63.5],
  icon: '🤍',
  create() {
    const group = new THREE.Group();
    
    // Create heart shape
    const shape = new THREE.Shape();
    // In THREE.js, +Y is up. We want the bumps at the top (positive Y) and the tip at the bottom (negative Y).
    // Let's draw it centered around X=0.
    // Cleavage at (0, 0.2)
    // Tip at (0, -0.6)
    shape.moveTo( 0, 0.2 );
    // Left lobe: up and left, then down to tip
    shape.bezierCurveTo( -0.1, 0.4, -0.5, 0.4, -0.5, 0.1 );
    shape.bezierCurveTo( -0.5, -0.2, -0.2, -0.4, 0, -0.6 );
    // Right lobe: up and right, from tip to cleavage
    shape.bezierCurveTo( 0.2, -0.4, 0.5, -0.2, 0.5, 0.1 );
    shape.bezierCurveTo( 0.5, 0.4, 0.1, 0.4, 0, 0.2 );

    // Hole for keychain, right lobe near the top
    const holePath = new THREE.Path();
    holePath.absarc(0.35, 0.22, 0.035, 0, Math.PI * 2, false);
    shape.holes.push(holePath);

    const depth = 0.0229;
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: depth, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.002, bevelThickness: 0.002, curveSegments: 32
    });
    
    geo.computeBoundingBox();
    const box = geo.boundingBox;
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    geo.translate(-center.x, -center.y, -depth / 2);
    // Move up so bottom is at y=0, then up a bit
    geo.translate(0, size.y / 2 + 0.1, 0);
    
    const positions = geo.attributes.position;
    const uv = geo.attributes.uv;
    for (let i = 0; i < positions.count; i++) {
        const px = positions.getX(i);
        const py = positions.getY(i);
        const pz = positions.getZ(i);
        
        let u = (px + size.x/2) / size.x;
        let v = (py - 0.1) / size.y;
        
        if (pz < 0) {
             u = (-px + size.x/2) / size.x;
             u = u * 0.5 + 0.5;
             u = Math.max(u, 0.501);
        } else {
             u = u * 0.5;
             u = Math.min(u, 0.499);
        }
        uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    const printMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.15, clearcoat: 0.8, clearcoatRoughness: 0.1 });
    const sideMaterial = new THREE.MeshPhysicalMaterial({ color: 0x222222, roughness: 0.4 });
    const mesh = new THREE.Mesh(geo, [printMaterial, sideMaterial]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    
    return { group, topMaterial: printMaterial, baseMaterial: sideMaterial, printMesh: mesh, printAspect: 57.2 / 63.5, type: 'flat', twoSided: true, meshWidth: 1.0, meshHeight: 1.0 };
  }
};
