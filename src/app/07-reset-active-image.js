// Shared application state is supplied by the entry point.
export function register(app) {
app.resetActiveImage = function resetActiveImage(redraw = true) {
  const active = app.getActiveImage();
  if (!active) return;
  active.scale = 1;
  active.scaleX = 1;
  active.scaleY = 1;
  active.x = 0;
  active.y = 0;
  active.rotation = 0;
  app.syncActiveControls();
  if (redraw) app.buildTexture();
};
}

export function initialize(app) {
document.querySelector('#resetImage').onclick = () => app.resetActiveImage(true);
document.querySelector('#customText').addEventListener('input', e => { app.textParams.text = e.target.value; app.requestBuildTexture(); });
document.querySelector('#textSideSelect')?.addEventListener('change', e => { app.textParams.side = e.target.value; app.buildTexture(); });
document.querySelector('#textColor').addEventListener('input', e => { app.textParams.color = e.target.value; app.requestBuildTexture(); });
document.querySelector('#textFont').addEventListener('change', async e => {
  app.textParams.font = e.target.value;
  if (document.fonts) {
    try {
      await document.fonts.load(`${app.textParams.bold ? 'bold ' : 'normal '}${app.textParams.size}px ${app.textParams.font}`);
    } catch {}
  }
  app.buildTexture();
});
document.querySelector('#textSize').addEventListener('input', e => { app.textParams.size = Number(e.target.value); document.querySelector('#textSizeValue').value = `${e.target.value} px`; app.requestBuildTexture(); });
document.querySelector('#textBold').addEventListener('change', e => { app.textParams.bold = e.target.checked; app.buildTexture(); });
document.querySelector('#textItalic').addEventListener('change', e => { app.textParams.italic = e.target.checked; app.buildTexture(); });
document.querySelectorAll('.align-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.align-btn').forEach(b => b.classList.toggle('active', b === btn));
    app.textParams.align = btn.dataset.align;
    app.buildTexture();
  });
});
document.querySelector('#textPosX').addEventListener('input', e => { app.textParams.x = Number(e.target.value) / 100; document.querySelector('#textPosXValue').value = `${e.target.value} %`; app.requestBuildTexture(); });
document.querySelector('#textPosY').addEventListener('input', e => { app.textParams.y = Number(e.target.value) / 100; document.querySelector('#textPosYValue').value = `${e.target.value} %`; app.requestBuildTexture(); });
document.querySelector('#textRotation').addEventListener('input', e => { app.textParams.rotation = Number(e.target.value); document.querySelector('#textRotationValue').value = `${e.target.value}°`; app.requestBuildTexture(); });
document.querySelector('#resetText').addEventListener('click', () => {
  app.textParams.text = ''; app.textParams.color = '#111820'; app.textParams.font = 'Inter, sans-serif'; app.textParams.size = 60; app.textParams.bold = false; app.textParams.italic = false; app.textParams.align = 'center'; app.textParams.x = 0; app.textParams.y = 0; app.textParams.rotation = 0;
  document.querySelector('#customText').value = ''; document.querySelector('#textColor').value = '#111820'; document.querySelector('#textFont').value = 'Inter, sans-serif'; document.querySelector('#textSize').value = 60; document.querySelector('#textSizeValue').value = '60 px'; document.querySelector('#textBold').checked = false; document.querySelector('#textItalic').checked = false;
  document.querySelectorAll('.align-btn').forEach(b => b.classList.toggle('active', b.dataset.align === 'center'));
  document.querySelector('#textPosX').value = 0; document.querySelector('#textPosXValue').value = '0 %'; document.querySelector('#textPosY').value = 0; document.querySelector('#textPosYValue').value = '0 %'; document.querySelector('#textRotation').value = 0; document.querySelector('#textRotationValue').value = '0°';
  app.buildTexture(); app.updateWrapPreviewWidget(app.texture?.image);
});
document.querySelectorAll('.collapsible-section .section-title-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.collapsible-section');
    if (!section) return;
    const isCollapsed = section.classList.toggle('collapsed');
    btn.setAttribute('aria-expanded', String(!isCollapsed));
  });
});
app.saveCurrentView = () => {
  try {
    const store = JSON.parse(localStorage.getItem('mockup3d_saved_views') || '{}');
    const active = app.getActiveImage?.();
    store[app.currentProductKey] = {
      pos: app.camera.position.toArray(),
      target: app.controls.target.toArray()
    };
    if (active?.img?.src && !active.img.src.startsWith('blob:')) {
      store._savedVisual = { url: active.img.src, name: active.name, fitMode: active.fitMode, scale: active.scale, repeatPattern: !!active.repeatPattern };
    }
    localStorage.setItem('mockup3d_saved_views', JSON.stringify(store));
    app.showToast('Vue et visuel sauvegardés');
  } catch {}
};
app.clearSavedView = () => {
  try {
    const store = JSON.parse(localStorage.getItem('mockup3d_saved_views') || '{}');
    delete store[app.currentProductKey];
    localStorage.setItem('mockup3d_saved_views', JSON.stringify(store));
    app.homeView(true);
    app.showToast('Vue par défaut restaurée');
  } catch {}
};
app.homeView = (ignoreSaved = false) => {
  if (!ignoreSaved) {
    try {
      const saved = JSON.parse(localStorage.getItem('mockup3d_saved_views') || '{}')[app.currentProductKey];
      if (saved?.pos && saved?.target) {
        app.camera.position.fromArray(saved.pos);
        app.controls.target.fromArray(saved.target);
        app.controls.update();
        return;
      }
    } catch {}
  }
  if (app.currentProductKey === 'showcase') {
    app.camera.position.set(-0.55, 2.75, 5.35);
    app.controls.target.set(-0.55, 0.30, -0.05);
  } else if (app.currentProductKey === 'cap') {
    app.camera.position.set(0.3, 1.35, 2.75);
    app.controls.target.set(0, 0.48, 0.05);
  } else if (app.currentProductKey === 'mug11oz') {
    app.camera.position.set(0.6, 2.76, 6.2);
    app.controls.target.set(0, 0.88, 0);
  } else if (app.currentProductKey === 'mousePad' || app.currentProductKey === 'puzzle' || app.currentProductKey === 'coaster' || app.currentProductKey === 'poster') {
    app.camera.position.set(0, 4.5, 0.001);
    app.controls.target.set(0, 0, 0);
  } else if (app.currentProductKey === 'eventWristband') {
    app.camera.position.set(0, 2.5, 0.001);
    app.controls.target.set(0, 0, 0);
  } else if (app.currentProductKey === 'keychainHeart') {
    app.camera.position.set(0, 0.45, 1.15);
    app.controls.target.set(0, 0.45, 0);
  } else if (app.currentProductKey === 'keychainRound') {
    app.camera.position.set(0, 0.32, 0.9);
    app.controls.target.set(0, 0.32, 0);
  } else if (app.currentProductKey === 'keychainRect') {
    app.camera.position.set(0, 0.29, 0.7);
    app.controls.target.set(0, 0.29, 0);
  } else if (app.currentProductKey.startsWith('tshirt')) {
    app.camera.position.set(0, 0.35, 1.6);
    app.controls.target.set(0, 0.35, 0);
  } else if (app.currentProductKey === 'arcadeCabinet') {
    app.camera.position.set(0.7, -0.05, 3.4);
    app.controls.target.set(0, -0.05, 0);
  } else {
    app.camera.position.set(3.4, 2.8, 3.8);
    app.controls.target.set(0, -.04, 0);
  }
  app.controls.update();
};
document.querySelector('#resetView')?.addEventListener('click', app.homeView);
document.querySelector('#resetViewSide')?.addEventListener('click', app.homeView);
document.querySelector('#viewFaceA')?.addEventListener('click', () => {
  app.homeView();
  if (app.currentProductKey === 'arcadeCabinet') {
    app.camera.position.set(0, -0.05, 3.4);
  } else if (app.currentProductKey.startsWith('tshirt')) {
    app.camera.position.set(0, 0.28, 1.55);
    app.controls.target.set(0, 0.25, 0);
  }
  app.controls.update();
  app.showToast('Vue : Face A (Avant)');
});
document.querySelector('#viewFaceB')?.addEventListener('click', () => {
  app.homeView();
  if (app.currentProductKey === 'mug11oz') {
    app.camera.position.set(-0.8, 2.5, -6.5);
  } else if (app.currentProductKey === 'arcadeCabinet') {
    app.camera.position.set(3.4, -0.05, 0);
  } else if (app.currentProductKey.startsWith('tshirt')) {
    app.camera.position.set(0, 0.28, -1.55);
    app.controls.target.set(0, 0.25, 0);
  } else if (app.currentProductKey === 'cushion' || app.currentProductKey === 'pencilCase') {
    app.camera.position.set(0, -3.8, -0.01);
    app.controls.target.set(0, 0, 0);
  } else {
    app.camera.position.z = -Math.abs(app.camera.position.z);
  }
  app.controls.update();
  app.showToast('Vue : Face B (Arrière)');
});
document.querySelector('#zoomIn').onclick = () => { app.camera.position.multiplyScalar(.84); app.controls.update(); };
document.querySelector('#zoomOut').onclick = () => { app.camera.position.multiplyScalar(1.16); app.controls.update(); };
document.querySelector('#autoRotate').onchange = () => { app.controls.autoRotate = false; app.swingAngle = 0; app.swingDirection = 1; };
app.controls.autoRotateSpeed = 1.25;
document.querySelector('#topColor').oninput = e => {
  app.product.topMaterial.color.set(e.target.value);
  app.product.topMaterial.needsUpdate = true;
  app.requestBuildTexture();
};
document.querySelector('#baseColor').oninput = e => { app.product.baseMaterial.color.set(e.target.value); app.product.baseMaterial.needsUpdate = true; };
document.querySelector('#handleColor').oninput = e => { if (app.product.handleMaterial) { app.product.handleMaterial.color.set(e.target.value); app.product.handleMaterial.needsUpdate = true; } };
document.querySelector('#innerColor').oninput = e => { if (app.product.innerMaterial) { app.product.innerMaterial.color.set(e.target.value); app.product.innerMaterial.needsUpdate = true; } };
['j1Color', 'j2Color', 'b1Color', 'b2Color'].forEach(id => {
  const el = document.querySelector('#' + id);
  if (el) {
    el.addEventListener('change', e => {
      let mat = null;
      if (id === 'j1Color') mat = app.product.joystick1Material;
      if (id === 'j2Color') mat = app.product.joystick2Material;
      if (id === 'b1Color') mat = app.product.button1Material;
      if (id === 'b2Color') mat = app.product.button2Material;

      if (mat) {
        mat.color.set(e.target.value);
        if (document.querySelector('#arcadeGlow').checked) {
           mat.emissive.set(e.target.value); mat.emissiveIntensity = 5.0;
        }
        mat.needsUpdate = true;
      }
    });
  }
});
}
