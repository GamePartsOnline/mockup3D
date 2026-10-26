// Shared application state is supplied by the entry point.
export function register(app) {
app.getIntersection = function getIntersection(event) {
  const rect = app.renderer.domElement.getBoundingClientRect();
  app.mouseVec.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  app.mouseVec.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  app.raycaster.setFromCamera(app.mouseVec, app.camera);
  const targets = [];
  if (app.product.printMesh) targets.push(app.product.printMesh);
  app.product.group.traverse(child => {
    if (child.isMesh && child.material === app.product.topMaterial) targets.push(child);
  });
  const intersects = app.raycaster.intersectObjects(targets.length ? targets : app.product.group.children, true);
  return intersects.length > 0 ? intersects[0] : null;
};
}

export function initialize(app) {
app.renderer.domElement.addEventListener('pointerdown', e => {
  app.viewerPointer = { x: e.offsetX, y: e.offsetY };
  const active = app.getActiveImage();
  if (!active) return;

  if (app.currentProductKey === 'mug11oz') {
    const hit = app.getIntersection(e);
    if (hit) {
      app.controls.enabled = false;
      app.directDrag = {
        type: 'mug-drag',
        startX: e.clientX,
        startY: e.clientY,
        initialPosX: active.x,
        initialPosY: active.y
      };
      app.renderer.domElement.setPointerCapture(e.pointerId);
    }
  }
});
app.renderer.domElement.addEventListener('pointermove', e => {
  const active = app.getActiveImage();
  if (app.directDrag && app.directDrag.type === 'mug-drag' && active) {
    const dx = (e.clientX - app.directDrag.startX) / app.viewer.clientWidth;
    const dy = (e.clientY - app.directDrag.startY) / app.viewer.clientHeight;
    active.x = Math.max(-1, Math.min(1, app.directDrag.initialPosX + dx * 2.2));
    active.y = Math.max(-1, Math.min(1, app.directDrag.initialPosY - dy * 2.2));
    app.syncActiveControls();
    app.buildTexture();
  }
});
app.renderer.domElement.addEventListener('pointerup', e => {
  if (app.directDrag && app.directDrag.type === 'mug-drag') {
    try { app.renderer.domElement.releasePointerCapture(e.pointerId); } catch {}
    app.directDrag = null;
    app.controls.enabled = true;
    return;
  }
  const active = app.getActiveImage();
  if (!active || !app.viewerPointer) return;
  const moved = Math.hypot(e.offsetX - app.viewerPointer.x, e.offsetY - app.viewerPointer.y) > 5;
  if (!moved) {
    if (app.product.type === 'flat') {
      if (document.querySelector('#showTransformFrame').checked) {
        app.setOverlayVisible(app.pointInImage(e.offsetX, e.offsetY));
      }
    } else if (app.currentProductKey === 'mug11oz') {
      const hit = app.getIntersection(e);
      if (hit && hit.uv) {
        active.x = Math.max(-1, Math.min(1, (hit.uv.x - 0.5) * 2));
        active.y = Math.max(-1, Math.min(1, (hit.uv.y - 0.5) * 2));
        app.syncActiveControls();
        app.buildTexture();
        app.showToast('Image positionnée');
      }
    }
  }
  app.viewerPointer = null;
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelector('#showTransformFrame').checked = false;
    app.setOverlayVisible(false);
  }
});
app.box.addEventListener('pointerdown', e => {
  const active = app.getActiveImage();
  if (!active) return;
  e.preventDefault();
  app.directDrag = { type: 'move', x: e.clientX, y: e.clientY, startX: active.x, startY: active.y };
  app.overlay.setPointerCapture(e.pointerId);
  app.controls.enabled = false;
});
app.handles.forEach(h => h.addEventListener('pointerdown', e => {
  const active = app.getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = app.overlayCenter();
  app.directDrag = {
    type: 'corner-scale',
    corner: Number(h.dataset.corner),
    center: c,
    startDistance: Math.hypot(e.offsetX - c[0], e.offsetY - c[1]) || 1,
    startScaleX: active.scaleX ?? 1,
    startScaleY: active.scaleY ?? 1
  };
  app.overlay.setPointerCapture(e.pointerId);
  app.controls.enabled = false;
}));
app.edgeHandles.forEach(eh => eh.addEventListener('pointerdown', e => {
  const active = app.getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = app.overlayCenter();
  const edgeIndex = Number(eh.dataset.edge); // 0: haut (Y), 1: droite (X), 2: bas (Y), 3: gauche (X)
  app.directDrag = {
    type: 'edge-scale',
    edge: edgeIndex,
    center: c,
    startDistance: Math.hypot(e.offsetX - c[0], e.offsetY - c[1]) || 1,
    startScaleX: active.scaleX ?? 1,
    startScaleY: active.scaleY ?? 1
  };
  app.overlay.setPointerCapture(e.pointerId);
  app.controls.enabled = false;
}));
app.rotateHandle.addEventListener('pointerdown', e => {
  const active = app.getActiveImage();
  if (!active) return;
  e.preventDefault();
  const c = app.overlayCenter();
  app.directDrag = { type: 'rotate', center: c, startAngle: Math.atan2(e.offsetY - c[1], e.offsetX - c[0]), startRotation: active.rotation };
  app.overlay.setPointerCapture(e.pointerId);
  app.controls.enabled = false;
});
app.overlay.addEventListener('pointermove', e => {
  const active = app.getActiveImage();
  if (!app.directDrag || !active) return;
  const side = active.side || 'A';
  if (app.directDrag.type === 'move') {
    const dx = (e.clientX - app.directDrag.x) / app.viewer.clientWidth * 2.2;
    const xMove = side === 'B' ? -dx : dx;
    active.x = Math.max(-1, Math.min(1, app.directDrag.startX + xMove));
    active.y = Math.max(-1, Math.min(1, app.directDrag.startY - (e.clientY - app.directDrag.y) / app.viewer.clientHeight * 2.2));
  } else if (app.directDrag.type === 'corner-scale') {
    const currentDist = Math.hypot(e.offsetX - app.directDrag.center[0], e.offsetY - app.directDrag.center[1]);
    const factor = currentDist / app.directDrag.startDistance;
    active.scaleX = Math.max(0.15, Math.min(3.5, app.directDrag.startScaleX * factor));
    active.scaleY = Math.max(0.15, Math.min(3.5, app.directDrag.startScaleY * factor));
    active.scale = (active.scaleX + active.scaleY) / 2;
  } else if (app.directDrag.type === 'edge-scale') {
    const currentDist = Math.hypot(e.offsetX - app.directDrag.center[0], e.offsetY - app.directDrag.center[1]);
    const factor = currentDist / app.directDrag.startDistance;
    if (app.directDrag.edge === 0 || app.directDrag.edge === 2) {
      // Arête Haut ou Bas : étire ou compresse la hauteur (Y)
      active.scaleY = Math.max(0.15, Math.min(3.5, app.directDrag.startScaleY * factor));
    } else {
      // Arête Gauche ou Droite : étire ou compresse la largeur (X)
      active.scaleX = Math.max(0.15, Math.min(3.5, app.directDrag.startScaleX * factor));
    }
    active.scale = (active.scaleX + active.scaleY) / 2;
  } else if (app.directDrag.type === 'rotate') {
    const a = Math.atan2(e.offsetY - app.directDrag.center[1], e.offsetX - app.directDrag.center[0]);
    const dTheta = app.THREE.MathUtils.radToDeg(a - app.directDrag.startAngle);
    active.rotation = app.directDrag.startRotation + (side === 'B' ? -dTheta : dTheta);
  }
  app.syncActiveControls();
  app.buildTexture();
});
app.overlay.addEventListener('pointerup', () => {
  app.directDrag = null;
  app.controls.enabled = true;
});
}
