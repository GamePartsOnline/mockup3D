// Module 33 : Double panneau avec bascule Mode Simplifié (Mocka3D) / Mode Expert

export function register(app) {
  app.setPanelMode = function setPanelMode(mode) {
    const isSimple = mode === 'simple';
    document.querySelector('#panelContentSimple')?.style.setProperty('display', isSimple ? 'flex' : 'none');
    document.querySelector('#panelContentAdvanced')?.style.setProperty('display', isSimple ? 'none' : 'block');
    document.querySelector('#btnModeSimple')?.classList.toggle('active', isSimple);
    document.querySelector('#btnModeAdvanced')?.classList.toggle('active', !isSimple);
    try { localStorage.setItem('mockup3d_panel_mode', mode); } catch (_) {}
    if (isSimple) {
      app.renderImagesList?.();
      app.syncSimplePanel?.();
    }
  };

  app.syncSimplePanel = function syncSimplePanel() {
    const name = document.querySelector('#activeProductName')?.textContent || 'Le Showroom 3D';
    const price = document.querySelector('#activeProductPriceBadge')?.textContent || '';
    const nameEl = document.querySelector('#simpleProductName');
    const priceEl = document.querySelector('#simpleProductPrice');
    if (nameEl) nameEl.textContent = name;
    if (priceEl) {
      priceEl.style.display = (price && app.currentProductKey !== 'showcase') ? 'inline-block' : 'none';
      priceEl.textContent = price;
    }

    const activeImg = app.getActiveImage?.();
    const adjustBox = document.querySelector('#simpleVisualAdjustBox');
    if (!activeImg) {
      if (adjustBox) adjustBox.style.display = 'none';
    } else {
      if (adjustBox) adjustBox.style.display = 'block';
      const avgScale = Math.round(((activeImg.scaleX + activeImg.scaleY) / 2) * 100);
      const sScale = document.querySelector('#simpleScale');
      const sScaleVal = document.querySelector('#simpleScaleVal');
      if (sScale) sScale.value = avgScale;
      if (sScaleVal) sScaleVal.value = `${avgScale} %`;
      const sRot = document.querySelector('#simpleRotation');
      const sRotVal = document.querySelector('#simpleRotationVal');
      if (sRot) sRot.value = Math.round(activeImg.rotation || 0);
      if (sRotVal) sRotVal.value = `${Math.round(activeImg.rotation || 0)}°`;
      document.querySelector('#simpleBtnPattern')?.classList.toggle('active', !!activeImg.repeatPattern);
    }

    // Synchronisation zone du texte
    const isMulti = !!app.product?.twoSided || !!app.product?.zones || app.currentProductKey === 'tshirt3D';
    const sideWrap = document.querySelector('#simpleTextSideWrap');
    if (sideWrap) sideWrap.style.display = isMulti ? 'flex' : 'none';
    const sTextSide = document.querySelector('#simpleTextSide');
    const aTextSide = document.querySelector('#textSideSelect');
    if (sTextSide && aTextSide && sTextSide.value !== aTextSide.value) sTextSide.value = aTextSide.value;

    // Synchronisation texte & typographie
    const tInput = document.querySelector('#simpleTextInput');
    const customText = document.querySelector('#customText');
    if (tInput && customText && tInput.value !== customText.value) tInput.value = customText.value;
    const sFont = document.querySelector('#simpleTextFont');
    const aFont = document.querySelector('#textFont');
    if (sFont && aFont && sFont.value !== aFont.value) sFont.value = aFont.value;
    const sSize = document.querySelector('#simpleTextSize');
    const aSize = document.querySelector('#textSize');
    if (sSize && aSize) {
      sSize.value = aSize.value;
      const out = document.querySelector('#simpleTextSizeVal');
      if (out) out.value = `${aSize.value} px`;
    }

    const arcCard = document.querySelector('#simpleArcadeCard');
    if (arcCard) arcCard.style.display = app.currentProductKey === 'arcadeCabinet' ? 'block' : 'none';
  };
}

export function initialize(app) {
  document.querySelector('#btnModeSimple')?.addEventListener('click', () => app.setPanelMode('simple'));
  document.querySelector('#btnModeAdvanced')?.addEventListener('click', () => app.setPanelMode('advanced'));

  document.querySelector('#simpleUploadTrigger')?.addEventListener('click', () => document.querySelector('#imageInput')?.click());
  document.querySelector('#simpleOpenCatalogBtn')?.addEventListener('click', () => document.querySelector('#openCatalogBtn')?.click());
  document.querySelector('#simpleBtnReplace')?.addEventListener('click', () => document.querySelector('#imageInput')?.click());
  document.querySelector('#simpleBtnKnockout')?.addEventListener('click', () => document.querySelector('#btnRemoveWhiteBg')?.click());

  document.querySelector('#simpleBtnCenter')?.addEventListener('click', () => {
    const active = app.getActiveImage?.();
    if (!active) return;
    active.x = 0; active.y = 0;
    app.syncActiveControls?.(); app.buildTexture?.(); app.updateOverlay?.();
  });

  document.querySelector('#simpleBtnPattern')?.addEventListener('click', () => {
    const repBox = document.querySelector('#repeatPattern');
    if (repBox) {
      repBox.checked = !repBox.checked;
      repBox.dispatchEvent(new Event('change'));
      document.querySelector('#simpleBtnPattern')?.classList.toggle('active', repBox.checked);
    }
  });

  const wireRange = (sId, aId, outId, unit) => {
    document.querySelector(sId)?.addEventListener('input', (e) => {
      const el = document.querySelector(aId);
      if (el) { el.value = e.target.value; el.dispatchEvent(new Event('input')); }
      const out = document.querySelector(outId);
      if (out) out.value = `${e.target.value} ${unit}`;
    });
  };
  wireRange('#simpleScale', '#scale', '#simpleScaleVal', '%');
  wireRange('#simpleRotation', '#rotation', '#simpleRotationVal', '°');
  wireRange('#simpleTextSize', '#textSize', '#simpleTextSizeVal', 'px');

  const wireChange = (sId, aId) => {
    document.querySelector(sId)?.addEventListener('change', e => {
      const el = document.querySelector(aId);
      if (el) { if (el.type === 'checkbox') el.checked = e.target.checked; else el.value = e.target.value; el.dispatchEvent(new Event('change')); }
    });
  };
  wireChange('#simpleTextSide', '#textSideSelect');
  wireChange('#simpleTextFont', '#textFont');
  wireChange('#simpleTextBold', '#textBold');
  wireChange('#simpleTextItalic', '#textItalic');
  wireChange('#simpleCurvedText', '#textCurved');
  wireChange('#simpleShadowText', '#textShadow');

  document.querySelector('#simpleTextInput')?.addEventListener('input', e => {
    app.textParams.text = e.target.value;
    const ct = document.querySelector('#customText');
    if (ct) ct.value = e.target.value;
    app.requestBuildTexture?.();
  });
  document.querySelectorAll('[data-simple-align]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-simple-align]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`.align-btn[data-align="${btn.dataset.simpleAlign}"]`)?.click();
    });
  });
  document.querySelectorAll('.simple-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.simple-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tc = document.querySelector('#textColor');
      if (tc) { tc.value = btn.dataset.color; tc.dispatchEvent(new Event('input')); }
    });
  });
  document.querySelector('#simpleTextColorPicker')?.addEventListener('input', e => {
    document.querySelectorAll('.simple-swatch').forEach(b => b.classList.remove('active'));
    const tc = document.querySelector('#textColor');
    if (tc) { tc.value = e.target.value; tc.dispatchEvent(new Event('input')); }
  });
  const handleRemoveActive = () => {
    if (app.imagesList.length === 0) return;
    const idx = app.activeImageIndex >= 0 ? app.activeImageIndex : 0;
    app.removeImageByIndex(idx);
    app.showToast('Visuel retiré');
  };
  document.querySelector('#simpleBtnRemoveVisual')?.addEventListener('click', handleRemoveActive);
  document.querySelector('#btnDeleteActiveImage')?.addEventListener('click', handleRemoveActive);

  ['j1Color', 'j2Color', 'b1Color', 'b2Color'].forEach(k => {
    const sId = '#simple' + k.charAt(0).toUpperCase() + k.slice(1);
    document.querySelector(sId)?.addEventListener('change', e => {
      const aEl = document.querySelector('#' + k);
      if (aEl) { aEl.value = e.target.value; aEl.dispatchEvent(new Event('change')); }
    });
  });
  document.querySelector('#simpleArcadeGlow')?.addEventListener('change', e => {
    const el = document.querySelector('#arcadeGlow');
    if (el) { el.checked = e.target.checked; el.dispatchEvent(new Event('change')); }
  });
  const wireArcadeMirror = (srcId, otherId) => {
    document.querySelector(srcId)?.addEventListener('change', e => {
      app.arcadeMirrorSideB = e.target.checked;
      const other = document.querySelector(otherId);
      if (other && other.checked !== e.target.checked) other.checked = e.target.checked;
      app.buildTexture?.();
    });
  };
  wireArcadeMirror('#simpleArcadeMirrorSideB', '#arcadeMirrorSideB');
  wireArcadeMirror('#arcadeMirrorSideB', '#simpleArcadeMirrorSideB');

  document.querySelector('#simpleBtnOrder')?.addEventListener('click', () => app.openClientOrderModal?.());
  document.querySelector('#simpleBtnChangeProduct')?.addEventListener('click', () => document.querySelector('#btnChangeProductShop')?.click());
  const origSync = app.syncActiveControls;
  app.syncActiveControls = function () {
    if (origSync) origSync.apply(this, arguments);
    app.syncSimplePanel?.();
  };
  const origProdChange = document.querySelector('#productSelect')?.onchange;
  if (origProdChange) {
    document.querySelector('#productSelect').onchange = function (e) {
      origProdChange.apply(this, arguments);
      app.renderImagesList?.();
      app.syncSimplePanel?.();
    };
  }
  let savedMode = 'simple';
  try { savedMode = localStorage.getItem('mockup3d_panel_mode') || 'simple'; } catch (_) {}
  app.setPanelMode(savedMode);
}
