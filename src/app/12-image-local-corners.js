// Shared application state is supplied by the entry point.
export function register(app) {
app.imageLocalCorners = function imageLocalCorners() {
  const active = app.getActiveImage();
  if (!active || !active.img) return [];
  const ir = active.img.width / active.img.height;
  const isTshirt = app.currentProductKey.startsWith('tshirt');
  const isKeychain = app.currentProductKey.startsWith('keychain');
  const sr = app.product.printAspect || 1.2;
  const meshW = app.product.meshWidth || (isTshirt ? 1.45 : isKeychain ? 1.2 : app.currentProductKey === 'poster' ? 1.44 : app.currentProductKey === 'photoFrame' ? 0.70 : 2.4);
  const meshH = app.product.meshHeight || (isTshirt ? 1.85 : isKeychain ? 1.2 / sr : app.currentProductKey === 'poster' ? 1.08 : app.currentProductKey === 'photoFrame' ? 0.99 : 2.0);

  let w, h;
  if ((active.fitMode === 'contain') === (ir > sr)) {
    w = meshW;
    h = w / ir;
  } else {
    h = meshH;
    w = h * ir;
  }
  const sx = active.scaleX ?? active.scale ?? 1;
  const sy = active.scaleY ?? active.scale ?? 1;
  w *= sx;
  h *= sy;
  const cx = active.x * (meshW / 2);
  const cy = active.y * (meshH / 2);
  const a = app.THREE.MathUtils.degToRad(active.rotation), c = Math.cos(a), s = Math.sin(a);
  return [[-w/2, h/2], [w/2, h/2], [w/2, -h/2], [-w/2, -h/2]].map(([x,y]) => [cx+x*c-y*s, cy+x*s+y*c]);
};

app.projectPoint = function projectPoint([x, y]) {
  let p;
  const active = app.getActiveImage();
  const side = active?.side || 'A';
  const key = app.currentProductKey;

  if (key.startsWith('keychain')) {
    const yOffsets = { keychainHeart: 0.45, keychainRound: 0.32, keychainRect: 0.29 };
    const yOff = yOffsets[key] || 0.32;
    const z = side === 'B' ? -0.015 : 0.015;
    const xPos = side === 'B' ? -x : x;
    p = new app.THREE.Vector3(xPos, y + yOff, z).project(app.camera);
  } else if (key.startsWith('tshirt')) {
    const z = side === 'B' ? -0.015 : 0.015;
    const xPos = side === 'B' ? -x : x;
    p = new app.THREE.Vector3(xPos, y + 0.35, z).project(app.camera);
  } else if (key === 'poster') {
    // Poster mural vertical (plan XY centre a Y = 0.55)
    p = new app.THREE.Vector3(x, y + 0.55, 0.003).project(app.camera);
  } else if (key === 'photoFrame') {
    // Poster A4 vertical sur chevalet (plan XY à Y = 0.52)
    p = new app.THREE.Vector3(x, y + 0.52, 0.008).project(app.camera);
  } else if (key === 'cushion') {
    // Coussin horizontal face imprimable unique au-dessus
    p = new app.THREE.Vector3(x, 0.12, -y).project(app.camera);
  } else if (key === 'pencilCase') {
    // Trousse horizontale
    const zPos = side === 'B' ? y : -y;
    const yLev = side === 'B' ? -0.06 : 0.06;
    p = new app.THREE.Vector3(x, yLev, zPos).project(app.camera);
  } else {
    // Produits à plat horizontaux (tapis de souris, puzzle, sous-verres, bracelet)
    // En 3D, le haut de l'image (y > 0) est à Z < 0
    p = new app.THREE.Vector3(x, 0.004, -y).project(app.camera);
  }
  return [(p.x * 0.5 + 0.5) * app.viewer.clientWidth, (-p.y * 0.5 + 0.5) * app.viewer.clientHeight];
};

app.updateOverlay = function updateOverlay() {
  const active = app.getActiveImage();
  if (!active || !app.isOverlayVisible() || app.product.type !== 'flat') return;
  const side = active.side || 'A';
  const key = app.currentProductKey;
  const isTwoSided = !!app.product.twoSided;
  const isVertical = key.startsWith('tshirt') || key.startsWith('keychain') || key === 'poster' || key === 'photoFrame';
  if (isTwoSided) {
    if ((side === 'A' && app.camera.position.z < -0.1) || (side === 'B' && app.camera.position.z > 0.1)) {
      app.box.setAttribute('points', '');
      app.handles.forEach(h => { h.setAttribute('cx', -9999); h.setAttribute('cy', -9999); });
      app.edgeHandles.forEach(eh => { eh.setAttribute('cx', -9999); eh.setAttribute('cy', -9999); });
      app.rotateStem.setAttribute('x1', -9999); app.rotateStem.setAttribute('y1', -9999); app.rotateStem.setAttribute('x2', -9999); app.rotateStem.setAttribute('y2', -9999);
      app.rotateHandle.setAttribute('cx', -9999); app.rotateHandle.setAttribute('cy', -9999);
      return;
    }
  } else if (!isVertical && app.camera.position.y < -0.05) {
    app.box.setAttribute('points', '');
    app.handles.forEach(h => { h.setAttribute('cx', -9999); h.setAttribute('cy', -9999); });
    app.edgeHandles.forEach(eh => { eh.setAttribute('cx', -9999); eh.setAttribute('cy', -9999); });
    app.rotateStem.setAttribute('x1', -9999); app.rotateStem.setAttribute('y1', -9999); app.rotateStem.setAttribute('x2', -9999); app.rotateStem.setAttribute('y2', -9999);
    app.rotateHandle.setAttribute('cx', -9999); app.rotateHandle.setAttribute('cy', -9999);
    return;
  }
  const points = app.imageLocalCorners().map(app.projectPoint);
  if (!points.length) return;
  app.box.setAttribute('points', points.map(p => p.join(',')).join(' '));
  app.handles.forEach((h, i) => { h.setAttribute('cx', points[i][0]); h.setAttribute('cy', points[i][1]); });

  // Positionnement des poignées d'arêtes (0: haut, 1: droite, 2: bas, 3: gauche)
  if (app.edgeHandles.length >= 4) {
    const midTop = [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2];
    const midRight = [(points[1][0] + points[2][0]) / 2, (points[1][1] + points[2][1]) / 2];
    const midBottom = [(points[2][0] + points[3][0]) / 2, (points[2][1] + points[3][1]) / 2];
    const midLeft = [(points[3][0] + points[0][0]) / 2, (points[3][1] + points[0][1]) / 2];
    const edgeCoords = [midTop, midRight, midBottom, midLeft];
    app.edgeHandles.forEach((eh, i) => {
      eh.setAttribute('cx', edgeCoords[i][0]);
      eh.setAttribute('cy', edgeCoords[i][1]);
    });
  }

  const top = [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2], center = points.reduce((a, p) => [a[0] + p[0] / 4, a[1] + p[1] / 4], [0, 0]);
  const dx = top[0] - center[0], dy = top[1] - center[1], len = Math.hypot(dx, dy) || 1, rot = [top[0] + dx / len * 28, top[1] + dy / len * 28];
  app.rotateStem.setAttribute('x1', top[0]); app.rotateStem.setAttribute('y1', top[1]); app.rotateStem.setAttribute('x2', rot[0]); app.rotateStem.setAttribute('y2', rot[1]);
  app.rotateHandle.setAttribute('cx', rot[0]); app.rotateHandle.setAttribute('cy', rot[1]);
};

app.overlayCenter = function overlayCenter() { const pts = app.imageLocalCorners().map(app.projectPoint); return pts.reduce((a,p)=>[a[0]+p[0]/4,a[1]+p[1]/4],[0,0]); };

app.pointInImage = function pointInImage(x, y) {
  const points = app.imageLocalCorners().map(app.projectPoint);
  if (!points.length) return false;
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i], [xj, yj] = points[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
}

export function initialize(app) {
app.directDrag = null;
app.viewerPointer = null;
app.raycaster = new app.THREE.Raycaster();
app.mouseVec = new app.THREE.Vector2();
}
