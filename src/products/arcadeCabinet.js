import * as THREE from 'three';
import { profilePoints } from './arcadeProfile.js';

export const arcadeCabinetProduct = {
  id: 'arcade-cabinet',
  name: 'Borne d\'Arcade',
  dimensions: '600 × 1700 × 700 mm',
  printable: [600, 1700],
  icon: '🕹️',
  printAspect: 1, 
  twoSided: false,
  zones: [
    { id: 'left', label: 'Côté Gauche', col: 0, row: 1, aspect: 561.8 / 1670.9 }, 
    { id: 'right', label: 'Côté Droit', col: 1, row: 1, aspect: 561.8 / 1670.9 },
    { id: 'marquee', label: 'Fronton (Haut)', col: 2, row: 1, aspect: 600 / 200 },
    { id: 'screen', label: 'Écran', col: 0, row: 0, aspect: 600 / 500 },
    { id: 'panel', label: 'Panel', col: 1, row: 0, aspect: 600 / 250 },
    { id: 'front', label: 'Porte Avant', col: 2, row: 0, aspect: 600 / 800 }
  ],
  create() {
    const group = new THREE.Group();
    
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
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
        
        const mesh = createPlane(0.58, length, col, row);
        const group = new THREE.Group();
        group.add(mesh);
        
        const cx = p1.x + dx/2;
        const cy = p1.y + dy/2;
        group.position.set(cx, cy, 0);
        group.rotation.z = angle - Math.PI/2;
        
        return group;
    }

    const shape = new THREE.Shape();
    if (profilePoints.length > 0) {
      shape.moveTo(profilePoints[0][0], profilePoints[0][1]);
      for(let i=1; i<profilePoints.length; i++) {
        shape.lineTo(profilePoints[i][0], profilePoints[i][1]);
      }
    } else {
      shape.moveTo(0,0); shape.lineTo(0,1); shape.lineTo(1,1); shape.lineTo(1,0); shape.lineTo(0,0);
    }

    const extrudeSettings = { depth: 0.018, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.002, bevelThickness: 0.002 };
    
    // Calculate bounds for UV mapping
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    profilePoints.forEach(p => {
      if(p[0] < minX) minX = p[0];
      if(p[0] > maxX) maxX = p[0];
      if(p[1] < minY) minY = p[1];
      if(p[1] > maxY) maxY = p[1];
    });

    const leftGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Left panel inner face at +0.285 (57cm interior width / 2)
    leftGeo.translate(0, 0, 0.285);
    normalizeAndMapUV(leftGeo, minX, maxX, minY, maxY, 0, 1, false);
    const leftMesh = new THREE.Mesh(leftGeo, [topMaterial, baseMaterial]);
    leftMesh.castShadow = true;
    
    const rightGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Right panel inner face at -0.285 (extrudes +0.018, so start at -0.303)
    rightGeo.translate(0, 0, -0.303);
    normalizeAndMapUV(rightGeo, minX, maxX, minY, maxY, 1, 1, true);
    const rightMesh = new THREE.Mesh(rightGeo, [topMaterial, baseMaterial]);
    rightMesh.castShadow = true;

    // Define points for planes (x = depth from back, y = height)
    // Points extracted directly from the SVG profile Douglas-Peucker simplification
    const pFrontDoorB = { x: 0.5128, y: 0.2537 };
    const pFrontDoorT = { x: 0.5613, y: 0.9521 };
    
    const pPanelTip = { x: 0.5618, y: 0.9731 };
    const pPanelBack = { x: 0.3406, y: 1.1034 }; 
    
    // The screen connects the back of the panel to the bottom of the marquee
    const pScreenB = pPanelBack;
    const pScreenT = { x: 0.3355, y: 1.4964 };
    
    const pMarqueeB = pScreenT;
    const pMarqueeT = { x: 0.3147, y: 1.6665 };

    // Create plane groups (width = 0.58 to fit inside the 0.57 spacing while embedding slightly into the side panels to prevent gaps)
    const frontDoor = createPlaneGroup(pFrontDoorB, pFrontDoorT, 2, 0);
    // Panel graphic goes from the tip (closer to user) to the back (near screen)
    const panelGraphic = createPlaneGroup(pPanelTip, pPanelBack, 1, 0);
    
    // Blank panel isn't needed anymore if the graphic covers the whole slope
    // But if we want it, we can keep it empty or remove it. We'll remove it.

    const screen = createPlaneGroup(pScreenB, pScreenT, 0, 0);
    const marquee = createPlaneGroup(pMarqueeB, pMarqueeT, 2, 1);

    const innerBodyGeo = new THREE.BoxGeometry(0.3, 1.60, 0.56);
    const innerBody = new THREE.Mesh(innerBodyGeo, baseMaterial);
    innerBody.position.set(0.15, 0.80, 0);

    group.add(leftMesh, rightMesh, frontDoor, panelGraphic, screen, marquee, innerBody);
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
