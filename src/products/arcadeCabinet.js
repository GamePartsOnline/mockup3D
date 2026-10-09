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
    { id: 'left', label: 'Côté Gauche', col: 0, row: 1, aspect: 770 / 1700 }, 
    { id: 'right', label: 'Côté Droit', col: 1, row: 1, aspect: 770 / 1700 },
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
        const vOffset = (1 - row) * 0.5;
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
        const vOffset = (1 - row) * 0.5;
        for (let i = 0; i < uv.count; i++) {
            let u = uv.getX(i);
            let v = uv.getY(i);
            uv.setXY(i, uOffset + u * (1/3), vOffset + v * 0.5);
        }
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.y = Math.PI / 2; // Face direction
        return mesh;
    }

    function createPlaneGroup(p1, p2, col, row) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        
        const mesh = createPlane(0.65, length, col, row);
        const group = new THREE.Group();
        group.add(mesh);
        
        const cx = p1.x + dx/2;
        const cy = p1.y + dy/2;
        group.position.set(cx, cy, 0);
        group.rotation.z = angle - Math.PI/2;
        
        return group;
    }

    const shape = new THREE.Shape();
    shape.moveTo(-0.02, 0);
    shape.lineTo(-0.02, 1.62);
    shape.lineTo(0.43, 1.62);
    shape.lineTo(0.45, 1.58);
    shape.lineTo(0.32, 1.40);
    shape.lineTo(0.10, 0.97);
    shape.lineTo(0.12, 0.93);
    shape.lineTo(0.72, 0.86);
    shape.lineTo(0.67, 0.80);
    shape.lineTo(0.62, 0);
    shape.lineTo(-0.02, 0);

    const extrudeSettings = { depth: 0.018, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.002, bevelThickness: 0.002 };
    
    const leftGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    leftGeo.translate(0, 0, 0.325);
    normalizeAndMapUV(leftGeo, -0.02, 0.72, 0, 1.62, 0, 1, false);
    const leftMesh = new THREE.Mesh(leftGeo, [topMaterial, baseMaterial]);
    leftMesh.castShadow = true;
    
    const rightGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    rightGeo.translate(0, 0, -0.343); // -0.325 - 0.018
    normalizeAndMapUV(rightGeo, -0.02, 0.72, 0, 1.62, 1, 1, true);
    const rightMesh = new THREE.Mesh(rightGeo, [topMaterial, baseMaterial]);
    rightMesh.castShadow = true;

    // Define points for planes (x = depth from back, y = height)
    const pFrontDoorB = { x: 0.60, y: 0.00 };
    const pFrontDoorT = { x: 0.65, y: 0.80 };
    
    const pPanelTip = { x: 0.70, y: 0.85 };
    const pPanelBack = { x: 0.453, y: 0.891 }; // 25cm graphic part
    const pPanelDeep = { x: 0.10, y: 0.95 }; // Blank part behind graphic
    
    const pScreenB = pPanelDeep;
    const pScreenT = { x: 0.30, y: 1.40 };
    
    const pMarqueeB = pScreenT;
    const pMarqueeT = { x: 0.42, y: 1.56 };

    // Create plane groups
    const frontDoor = createPlaneGroup(pFrontDoorB, pFrontDoorT, 2, 0);
    const panelGraphic = createPlaneGroup(pPanelBack, pPanelTip, 1, 0);
    
    // Create blank panel part (no texture, uses baseMaterial)
    const blankPanelDx = pPanelDeep.x - pPanelBack.x;
    const blankPanelDy = pPanelDeep.y - pPanelBack.y;
    const blankPanelLen = Math.hypot(blankPanelDx, blankPanelDy);
    const blankPanelAngle = Math.atan2(blankPanelDy, blankPanelDx);
    const blankPanelGeo = new THREE.PlaneGeometry(0.65, blankPanelLen);
    const blankPanelMesh = new THREE.Mesh(blankPanelGeo, baseMaterial);
    blankPanelMesh.rotation.y = Math.PI / 2;
    const blankPanel = new THREE.Group();
    blankPanel.add(blankPanelMesh);
    blankPanel.position.set(pPanelBack.x + blankPanelDx/2, pPanelBack.y + blankPanelDy/2, 0);
    blankPanel.rotation.z = blankPanelAngle - Math.PI/2;

    const screen = createPlaneGroup(pScreenB, pScreenT, 0, 0);
    const marquee = createPlaneGroup(pMarqueeB, pMarqueeT, 2, 1);

    const innerBodyGeo = new THREE.BoxGeometry(0.3, 1.60, 0.64);
    const innerBody = new THREE.Mesh(innerBodyGeo, baseMaterial);
    innerBody.position.set(0.15, 0.80, 0);

    group.add(leftMesh, rightMesh, frontDoor, panelGraphic, blankPanel, screen, marquee, innerBody);
    group.position.set(-0.3, -0.8, 0); // Center the cabinet
    group.rotation.y = Math.PI / 6;

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
