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
    { id: 'front', label: 'Porte Avant', col: 2, row: 0, aspect: 600 / 800 }
  ],
  create() {
    const group = new THREE.Group();
    
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.1 });
    
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.2, metalness: 0.8 });
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/ryu-vs-ryu.avif', (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        screenMaterial.map = texture;
        screenMaterial.color.set(0xffffff); // On remet la couleur blanche pour que la texture s'affiche bien
        screenMaterial.needsUpdate = true;
    });
    
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
    
    function createPlane(w, h, col, row, customMaterial=null) {
        const geo = new THREE.PlaneGeometry(w, h);
        const mat = customMaterial || topMaterial;
        const uv = geo.attributes.uv;
        
        if (!customMaterial) {
            const uOffset = col * (1/3);
            const vOffset = (1 - row) * 0.5;
            for (let i = 0; i < uv.count; i++) {
                let u = uv.getX(i);
                let v = uv.getY(i);
                uv.setXY(i, uOffset + u * (1/3), vOffset + v * 0.5);
            }
        }
        
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.y = Math.PI / 2; // Face direction
        return mesh;
    }

    function fixInnerFace(geo, innerZDir) {
        geo.clearGroups();
        const pos = geo.attributes.position;
        const norm = geo.attributes.normal;
        for (let i = 0; i < pos.count; i+=3) {
            // Check normal of the first vertex of the face
            const nz = norm.getZ(i);
            const isSide = Math.abs(nz) < 0.5;
            const isInner = Math.sign(nz) === innerZDir;
            if (isSide || isInner) {
                geo.addGroup(i * 3, 3, 1); // baseMaterial
            } else {
                geo.addGroup(i * 3, 3, 0); // topMaterial
            }
        }
    }

    function createPlaneGroup(p1, p2, col, row, customMaterial=null) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        
        const mesh = createPlane(0.58, length, col, row, customMaterial);
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
    fixInnerFace(leftGeo, -1); // Inner face points towards -Z
    const leftMesh = new THREE.Mesh(leftGeo, [topMaterial, baseMaterial]);
    
    const rightGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // Right panel inner face at -0.285 (extrudes +0.018, so start at -0.303)
    rightGeo.translate(0, 0, -0.303);
    normalizeAndMapUV(rightGeo, minX, maxX, minY, maxY, 1, 1, true);
    fixInnerFace(rightGeo, 1); // Inner face points towards +Z
    const rightMesh = new THREE.Mesh(rightGeo, [topMaterial, baseMaterial]);

    // Define points for planes (x = depth from back, y = height)
    // The front door goes from y=0 to y=0.9731 (connecting to the panel tip seamlessly)
    // Recessing front door by 3cm (0.03)
    const pFrontDoorB = { x: 0.5128 - 0.03, y: 0.0 };
    const pFrontDoorT = { x: 0.5618 - 0.03, y: 0.9731 };
    
    const pPanelTip = { x: 0.5618, y: 0.9731 };
    // Flatten panel but keep it long enough for joysticks
    const pPanelBack = { x: 0.4800, y: 0.9850 }; 
    
    // Ajustement de la profondeur de l'écran pour éviter qu'il ne dépasse
    // La courbe du panneau latéral est concave, une ligne droite couperait à l'extérieur.
    const pScreenB = { x: 0.3500, y: 1.0500 }; 
    const pScreenT = { x: 0.1500, y: 1.3500 };
    
    const pMarqueeB = { x: 0.3360, y: 1.5000 };
    const pMarqueeT = { x: 0.3147, y: 1.6665 };

    const pRoofB = { x: 0.0, y: 1.6222 }; // Back top corner
    const pBottomBack = { x: 0.0, y: 0.0 }; // Back bottom corner

    // Create plane groups (width = 0.58)
    const frontDoor = createPlaneGroup(pFrontDoorB, pFrontDoorT, 2, 0);
    const panelUnderside = createPlaneGroup(pFrontDoorT, pPanelTip, null, null, baseMaterial);
    const panelGraphic = createPlaneGroup(pPanelTip, pPanelBack, null, null, baseMaterial);
    
    // The screen and speaker panel
    const screenShelf = createPlaneGroup(pPanelBack, pScreenB, null, null, baseMaterial);
    const speakerPanel = createPlaneGroup(pScreenT, pMarqueeB, null, null, baseMaterial);
    const topRoof = createPlaneGroup(pMarqueeT, pRoofB, null, null, baseMaterial);
    const bottomFloor = createPlaneGroup(pBottomBack, pFrontDoorB, null, null, baseMaterial);
    const backPanel = createPlaneGroup(pRoofB, pBottomBack, null, null, baseMaterial);
    
    const joystick1Material = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.3, metalness: 0.1 });
    const button1Material = new THREE.MeshStandardMaterial({ color: 0x0055ff, roughness: 0.3, metalness: 0.1 });
    
    const joystick2Material = new THREE.MeshStandardMaterial({ color: 0x0055ff, roughness: 0.3, metalness: 0.1 });
    const button2Material = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.3, metalness: 0.1 });
    
    function addPlayerControls(group, zOffset, jMat, bMat) {
        // Joystick shaft (metal)
        const shaftMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.4, metalness: 0.8 });
        const shaftGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.05, 16);
        const shaft = new THREE.Mesh(shaftGeo, shaftMat);
        shaft.rotation.z = -Math.PI / 2; // Point normal is +X, so rotate cylinder (which is along Y) to along X
        shaft.position.set(0.025, 0.01, zOffset + 0.12);
        
        // Joystick ball (plastic)
        const ballGeo = new THREE.SphereGeometry(0.015, 32, 32);
        const ball = new THREE.Mesh(ballGeo, jMat);
        ball.position.set(0.05, 0.01, zOffset + 0.12);
        
        group.add(shaft, ball);
        
        // Buttons (6 buttons)
        const btnGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.005, 32);
        const btnBaseGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.002, 32);
        const btnBaseMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
        
        const btnPositions = [
            {y: 0.02, z: zOffset + 0.04}, {y: 0.03, z: zOffset - 0.00}, {y: 0.02, z: zOffset - 0.04},
            {y: -0.02, z: zOffset + 0.03}, {y: -0.01, z: zOffset - 0.01}, {y: -0.02, z: zOffset - 0.05}
        ];
        
        btnPositions.forEach(pos => {
            const btn = new THREE.Mesh(btnGeo, bMat);
            btn.rotation.z = -Math.PI / 2;
            btn.position.set(0.0025, pos.y, pos.z);
            
            const btnBase = new THREE.Mesh(btnBaseGeo, btnBaseMat);
            btnBase.rotation.z = -Math.PI / 2;
            btnBase.position.set(0.001, pos.y, pos.z);
            
            group.add(btn, btnBase);
        });
    }
    
    addPlayerControls(panelGraphic, 0.05, joystick1Material, button1Material); // Player 1 (Left, +Z)
    addPlayerControls(panelGraphic, -0.19, joystick2Material, button2Material); // Player 2 (Right, -Z)

    const screen = createPlaneGroup(pScreenB, pScreenT, null, null, screenMaterial);
    const marquee = createPlaneGroup(pMarqueeB, pMarqueeT, 2, 1);

    const wrapper = new THREE.Group();
    wrapper.add(leftMesh, rightMesh, frontDoor, panelUnderside, panelGraphic, screenShelf, screen, speakerPanel, marquee, topRoof, bottomFloor, backPanel);
    wrapper.position.set(-0.3, -0.8, 0); // Center the cabinet's geometries

    group.add(wrapper);
    group.rotation.y = Math.PI / 6;

    return { 
      group, 
      topMaterial, 
      baseMaterial, 
      joystick1Material,
      button1Material,
      joystick2Material,
      button2Material,
      type: 'arcade',
      zones: this.zones,
      twoSided: false
    };
  }
};
