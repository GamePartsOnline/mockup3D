import * as THREE from 'three';

export const arcadeCabinetProduct = {
  id: 'arcade-cabinet',
  name: 'Borne d\'Arcade',
  dimensions: '600 × 1700 × 700 mm',
  printable: [600, 1700],
  icon: '🕹️',
  printAspect: 1, 
  twoSided: false,
  zones: [
    { id: 'left', label: 'Joue Gauche (Côté 1)', col: 0, row: 1, aspect: 770 / 1700 }, 
    { id: 'right', label: 'Joue Droite (Côté 2)', col: 1, row: 1, aspect: 770 / 1700 },
    { id: 'marquee', label: 'Fronton (Haut)', col: 2, row: 1, aspect: 600 / 200 },
    { id: 'screen', label: 'Écran', col: 0, row: 0, aspect: 600 / 500 },
    { id: 'panel', label: 'Panel', col: 1, row: 0, aspect: 600 / 250 },
    { id: 'front', label: 'Porte Avant', col: 2, row: 0, aspect: 600 / 800 }
  ],
  create() {
    const group = new THREE.Group();
    
    // Matériau pour les tranches et l'intérieur
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    // Matériau pour le covering imprimable
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.1 });
    
    function normalizeAndMapUV(geometry, minX, maxX, minY, maxY, col, row, flipHorizontal=false) {
        const uv = geometry.attributes.uv;
        const pos = geometry.attributes.position;
        const uOffset = col * (1/3);
        const vOffset = row * 0.5;
        for (let i = 0; i < uv.count; i++) {
            const x = pos.getX(i);
            const y = pos.getY(i);
            let rawU = (x - minX) / (maxX - minX);
            if (flipHorizontal) rawU = 1.0 - rawU;
            const rawV = (y - minY) / (maxY - minY);
            uv.setXY(i, uOffset + rawU * (1/3), vOffset + rawV * 0.5);
        }
        uv.needsUpdate = true;
    }
    
    function createPlane(w, h, col, row) {
        const geo = new THREE.PlaneGeometry(w, h);
        const mat = topMaterial;
        const uv = geo.attributes.uv;
        const uOffset = col * (1/3);
        const vOffset = row * 0.5;
        for (let i = 0; i < uv.count; i++) {
            let u = uv.getX(i);
            let v = uv.getY(i);
            uv.setXY(i, uOffset + u * (1/3), vOffset + v * 0.5);
        }
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.y = Math.PI / 2; // Face direction
        return mesh;
    }

    const shape = new THREE.Shape();
    shape.moveTo(-0.35, 0);       
    shape.lineTo(0.3, 0);         
    shape.lineTo(0.3, 0.8);       
    shape.lineTo(0.42, 0.82);     
    shape.lineTo(0.25, 0.97);     
    shape.lineTo(0.12, 1.45);     
    shape.lineTo(0.28, 1.55);     
    shape.lineTo(0.2, 1.7);       
    shape.lineTo(-0.35, 1.7);     
    shape.lineTo(-0.35, 0);       

    const extrudeSettings = { depth: 0.015, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.002, bevelThickness: 0.002 };
    
    const leftGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    leftGeo.translate(0, 0, 0.285);
    normalizeAndMapUV(leftGeo, -0.35, 0.42, 0, 1.7, 0, 1, false);
    const leftMesh = new THREE.Mesh(leftGeo, [topMaterial, baseMaterial]);
    leftMesh.castShadow = true;
    
    const rightGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    rightGeo.translate(0, 0, -0.3);
    normalizeAndMapUV(rightGeo, -0.35, 0.42, 0, 1.7, 1, 1, true);
    const rightMesh = new THREE.Mesh(rightGeo, [topMaterial, baseMaterial]);
    rightMesh.castShadow = true;

    const frontBase = createPlane(0.57, 0.8, 2, 0);
    frontBase.position.set(0.301, 0.4, 0);
    
    const dxP = 0.25 - 0.42;
    const dyP = 0.97 - 0.82;
    const lengthP = Math.hypot(dxP, dyP);
    const angleP = Math.atan2(dyP, dxP);
    const panel = createPlane(0.57, lengthP, 1, 0);
    panel.position.set(0.42 + dxP/2, 0.82 + dyP/2, 0);
    // rotate around Z after it was rotated on Y
    // wait, createPlane does rotate.y = Math.PI/2.
    // So its local X axis is actually world -Z.
    // If we want to tilt it along World Z, we can rotate around world Z.
    // Let's just create a group for each plane.
    const panelGroup = new THREE.Group();
    panelGroup.add(panel);
    panelGroup.position.set(0.42 + dxP/2, 0.82 + dyP/2, 0);
    panelGroup.rotation.z = angleP;
    panel.position.set(0,0,0);

    const dxS = 0.12 - 0.25;
    const dyS = 1.45 - 0.97;
    const lengthS = Math.hypot(dxS, dyS);
    const angleS = Math.atan2(dyS, dxS);
    const screen = createPlane(0.57, lengthS, 0, 0);
    const screenGroup = new THREE.Group();
    screenGroup.add(screen);
    screenGroup.position.set(0.25 + dxS/2, 0.97 + dyS/2, 0);
    screenGroup.rotation.z = angleS;
    screen.position.set(0,0,0);
    
    const dxM = 0.2 - 0.28;
    const dyM = 1.7 - 1.55;
    const lengthM = Math.hypot(dxM, dyM);
    const angleM = Math.atan2(dyM, dxM);
    const marquee = createPlane(0.57, lengthM, 2, 1);
    const marqueeGroup = new THREE.Group();
    marqueeGroup.add(marquee);
    marqueeGroup.position.set(0.28 + dxM/2, 1.55 + dyM/2, 0);
    marqueeGroup.rotation.z = angleM;
    marquee.position.set(0,0,0);

    const innerBodyGeo = new THREE.BoxGeometry(0.5, 1.68, 0.56);
    const innerBody = new THREE.Mesh(innerBodyGeo, baseMaterial);
    innerBody.position.set(-0.1, 0.84, 0);

    group.add(leftMesh, rightMesh, frontBase, panelGroup, screenGroup, marqueeGroup, innerBody);
    group.rotation.y = Math.PI / 6; // slightly angled

    return { 
      group, 
      topMaterial, 
      baseMaterial, 
      type: 'arcade',
      zones: this.zones,
      twoSided: false
    };
  }
};
