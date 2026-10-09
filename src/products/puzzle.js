import * as THREE from 'three';

const roundedRect = (width, height, radius) => {
  const x = -width / 2, y = -height / 2;
  const s = new THREE.Shape();
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y); s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius); s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height); s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
  return s;
};

export const puzzleProduct = {
  id: 'puzzle-120', name: 'Puzzle 120 pièces', dimensions: [280, 195, 2], printable: [280, 195],
  icon: '🧩',
  create() {
    const group = new THREE.Group();
    // width 2.8, height 1.95
    const width = 2.8;
    const height = 1.95;
    const shape = roundedRect(width, height, 0.02); // tiny rounded corners for puzzle
    
    // Cardboard base
    const baseGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.005, bevelThickness: 0.005, curveSegments: 8 });
    baseGeo.rotateX(Math.PI / 2); baseGeo.translate(0, -0.015, 0);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xe0d6c8, roughness: 0.9, metalness: 0.0 });
    const base = new THREE.Mesh(baseGeo, baseMaterial);
    base.castShadow = true; base.receiveShadow = true; group.add(base);
    
    // Glossy top surface
    const topGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.002, bevelEnabled: false, curveSegments: 8 });
    topGeo.rotateX(Math.PI / 2);
    topGeo.translate(0, 0.001, 0);
    const positions = topGeo.attributes.position;
    const uv = topGeo.attributes.uv;
    
    // UV Mapping
    for (let i = 0; i < positions.count; i++) {
      const u = (positions.getX(i) + width / 2) / width;
      const v = (height / 2 - positions.getZ(i)) / height;
      uv.setXY(i, u, v);
    }
    uv.needsUpdate = true;
    
    // Générer un overlay pour simuler un relief 3D (Biseau / Emboss) sur les pièces de puzzle
    const bumpCanvas = document.createElement('canvas');
    bumpCanvas.width = 1500;
    bumpCanvas.height = 800;
    const ctx = bumpCanvas.getContext('2d');
    ctx.clearRect(0, 0, 1500, 800);
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const cols = 15;
    const rows = 8;
    const cellW = 1500 / cols;
    const cellH = 800 / rows;

    const drawPaths = () => {
      ctx.beginPath();
      // Lignes verticales
      for (let i = 1; i < cols; i++) {
        ctx.moveTo(i * cellW, 0);
        for (let j = 0; j < rows; j++) {
          const y = j * cellH;
          const cy = y + cellH / 2;
          const dir = (i + j) % 2 === 0 ? 1 : -1;
          ctx.lineTo(i * cellW, cy - 15);
          ctx.bezierCurveTo(i * cellW + 25 * dir, cy - 15, i * cellW + 25 * dir, cy + 15, i * cellW, cy + 15);
          ctx.lineTo(i * cellW, y + cellH);
        }
      }
      // Lignes horizontales
      for (let j = 1; j < rows; j++) {
        ctx.moveTo(0, j * cellH);
        for (let i = 0; i < cols; i++) {
          const x = i * cellW;
          const cx = x + cellW / 2;
          const dir = (i + j) % 2 === 0 ? 1 : -1;
          ctx.lineTo(cx - 15, j * cellH);
          ctx.bezierCurveTo(cx - 15, j * cellH + 25 * dir, cx + 15, j * cellH + 25 * dir, cx + 15, j * cellH);
          ctx.lineTo(x + cellW, j * cellH);
        }
      }
    };

    // Ombre (Noir/Gris foncé) avec un léger décalage en haut à gauche
    ctx.save();
    ctx.translate(-2, -2);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.lineWidth = 4;
    drawPaths();
    ctx.stroke();
    ctx.restore();

    // Lumière (Blanc) avec un léger décalage en bas à droite
    ctx.save();
    ctx.translate(2, 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 4;
    drawPaths();
    ctx.stroke();
    ctx.restore();

    // Creux de la découpe (Noir très fin au centre)
    ctx.save();
    ctx.strokeStyle = 'rgba(10, 10, 10, 0.9)';
    ctx.lineWidth = 2;
    drawPaths();
    ctx.stroke();
    ctx.restore();

    const linesTexture = new THREE.CanvasTexture(bumpCanvas);
    linesTexture.anisotropy = 4;

    const topMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, roughness: 0.2, metalness: 0.1, 
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 
    });
    const top = new THREE.Mesh(topGeo, topMaterial); top.receiveShadow = true; group.add(top);

    // Overlay mesh with just the lines
    const overlayMat = new THREE.MeshBasicMaterial({
      map: linesTexture, transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    });
    const overlay = new THREE.Mesh(topGeo, overlayMat);
    group.add(overlay);
    
    return { group, top, topMaterial, baseMaterial, printAspect: width / height, type: 'flat', printMesh: top, meshWidth: width, meshHeight: height };
  }
};
