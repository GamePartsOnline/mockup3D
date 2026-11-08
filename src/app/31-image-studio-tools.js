// Module 31 : Outils de retouche graphique et typographie enrichie

export function detectWhiteBorderBackground(source, threshold = 232) {
  try {
    const w = source.naturalWidth || source.width || 0;
    const h = source.naturalHeight || source.height || 0;
    if (w < 8 || h < 8) return false;
    const canvas = document.createElement('canvas');
    canvas.width = Math.min(w, 120);
    canvas.height = Math.min(h, 120);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const cw = canvas.width, ch = canvas.height;

    // Analyse des 4 coins
    const cornerOffsets = [
      0,
      (cw - 1) * 4,
      ((ch - 1) * cw) * 4,
      ((ch - 1) * cw + cw - 1) * 4
    ];
    let whiteCorners = 0;
    for (const offset of cornerOffsets) {
      const r = data[offset], g = data[offset + 1], b = data[offset + 2], a = data[offset + 3];
      if (a > 200 && r >= threshold && g >= threshold && b >= threshold) {
        whiteCorners++;
      }
    }
    return whiteCorners >= 3;
  } catch {
    return false;
  }
}

export function processRemoveWhiteBackground(source, tolerance = 32) {
  const w = source.naturalWidth || source.width || 800;
  const h = source.naturalHeight || source.height || 800;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(source, 0, 0);

  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  const totalPixels = w * h;
  const visited = new Uint8Array(totalPixels);
  const queue = new Int32Array(totalPixels);
  let qHead = 0, qTail = 0;
  const threshold = 255 - tolerance;

  // Ajouter les pixels de bordures quasi-blancs (haut et bas)
  for (let x = 0; x < w; x++) {
    const topIdx = x;
    const bottomIdx = (h - 1) * w + x;
    for (const p of [topIdx, bottomIdx]) {
      if (!visited[p]) {
        const o = p * 4;
        if (data[o + 3] > 30 && data[o] >= threshold && data[o + 1] >= threshold && data[o + 2] >= threshold) {
          visited[p] = 1;
          queue[qTail++] = p;
        }
      }
    }
  }

  // Ajouter les pixels de bordures quasi-blancs (gauche et droite)
  for (let y = 0; y < h; y++) {
    const leftIdx = y * w;
    const rightIdx = y * w + (w - 1);
    for (const p of [leftIdx, rightIdx]) {
      if (!visited[p]) {
        const o = p * 4;
        if (data[o + 3] > 30 && data[o] >= threshold && data[o + 1] >= threshold && data[o + 2] >= threshold) {
          visited[p] = 1;
          queue[qTail++] = p;
        }
      }
    }
  }

  // BFS pour effacer le fond blanc contigu sans toucher aux yeux/corps intérieurs
  while (qHead < qTail) {
    const curr = queue[qHead++];
    const cx = curr % w;
    const cy = (curr / w) | 0;
    const o = curr * 4;

    // Rendre transparent le fond blanc
    data[o + 3] = 0;

    const nUp = cy > 0 ? curr - w : -1;
    const nDown = cy < h - 1 ? curr + w : -1;
    const nLeft = cx > 0 ? curr - 1 : -1;
    const nRight = cx < w - 1 ? curr + 1 : -1;

    for (const n of [nUp, nDown, nLeft, nRight]) {
      if (n >= 0 && visited[n] === 0) {
        const no = n * 4;
        if (data[no + 3] > 20 && data[no] >= threshold && data[no + 1] >= threshold && data[no + 2] >= threshold) {
          visited[n] = 1;
          queue[qTail++] = n;
        }
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

export function register(app) {
  app.detectWhiteBorderBackground = detectWhiteBorderBackground;
  app.processRemoveWhiteBackground = processRemoveWhiteBackground;

  // Détourage automatique express du fond blanc contigu
  app.removeWhiteBackground = function removeWhiteBackground(item, tolerance = 32, silent = false) {
    if (!item || !item.img) return;
    if (!item._originalImg) item._originalImg = item.img;

    try {
      const canvas = processRemoveWhiteBackground(item._originalImg, tolerance);
      item.img = canvas;
      item.removeWhite = true;
      app.requestBuildTexture?.();
      app.syncActiveControls?.();
      if (!silent) app.showToast('Fond blanc ignoré (détouré)');
    } catch (err) {
      console.warn('Détourage impossible :', err);
    }
  };

  // Rétablir l'image d'origine sans retouche
  app.revertOriginalImage = function revertOriginalImage(item) {
    if (!item || !item._originalImg) return;
    item.img = item._originalImg;
    item.removeWhite = false;
    item.filter = 'none';
    const filterSelect = document.querySelector('#imageFilterSelect');
    if (filterSelect) filterSelect.value = 'none';
    app.requestBuildTexture?.();
    app.syncActiveControls?.();
    app.showToast('Image originale rétablie');
  };

  // Détection et suppression automatique du fond blanc à l'intégration
  // DÉSACTIVÉ PAR DÉFAUT pour préserver les nuances de gris clairs, ombres et dégradés
  app.autoKnockoutWhiteIfOpaque = function autoKnockoutWhiteIfOpaque(item) {
    if (!item || !item.img || item.removeWhite || !item.forceAutoKnockout) return;
    if (detectWhiteBorderBackground(item.img)) {
      app.removeWhiteBackground(item, 32, true);
    }
  };

  // Application de filtres d'ambiance en direct
  app.applyImageFilter = function applyImageFilter(item, filterName) {
    if (!item || !item.img) return;
    if (!item._originalImg) item._originalImg = item.img;
    item.filter = filterName;

    if (filterName === 'none') {
      item.img = item._originalImg;
      app.requestBuildTexture();
      return;
    }

    const source = item._originalImg;
    const canvas = document.createElement('canvas');
    canvas.width = source.width || 800;
    canvas.height = source.height || 800;
    const ctx = canvas.getContext('2d');

    const filterMap = {
      grayscale: 'grayscale(100%) contrast(110%)',
      sepia: 'sepia(90%) contrast(105%)',
      contrast: 'contrast(160%) saturate(125%)',
      invert: 'invert(100%)'
    };

    if (filterMap[filterName]) {
      ctx.filter = filterMap[filterName];
    }
    ctx.drawImage(source, 0, 0);
    ctx.filter = 'none';

    item.img = canvas;
    app.requestBuildTexture();
  };

  // Dessin de texte courbé le long d'un arc de cercle
  app.drawCurvedText = function drawCurvedText(ctx, line, py) {
    if (!line) return;
    const size = app.textParams.size || 60;
    const radius = Math.max(180, size * 4.5);
    const chars = Array.from(line);
    const totalWidth = ctx.measureText(line).width;
    const totalAngle = Math.min(Math.PI * 0.75, totalWidth / radius);
    const angleStep = chars.length > 1 ? (totalAngle / (chars.length - 1)) : 0;
    const startAngle = -totalAngle / 2;

    ctx.save();
    // Point focal de l'arc situé en dessous
    ctx.translate(0, radius + py);

    chars.forEach((char, i) => {
      ctx.save();
      const angle = startAngle + i * angleStep;
      ctx.rotate(angle);
      ctx.translate(0, -radius);
      if (app.textParams.stroke) ctx.strokeText(char, 0, 0);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });

    ctx.restore();
  };
}

export function initialize(app) {
  // Case à cocher : Ignorer le fond blanc (détourage auto)
  document.querySelector('#chkAutoRemoveWhiteBg')?.addEventListener('change', (e) => {
    const active = app.getActiveImage();
    if (!active) return;
    if (e.target.checked) {
      app.removeWhiteBackground(active, 32, false);
    } else {
      app.revertOriginalImage(active);
    }
  });

  // Bouton forcer détourage fond blanc
  document.querySelector('#btnRemoveWhiteBg')?.addEventListener('click', () => {
    const active = app.getActiveImage();
    if (!active) {
      app.showToast('Veuillez d’abord sélectionner un visuel');
      return;
    }
    app.removeWhiteBackground(active);
  });

  // Bouton rétablir original
  document.querySelector('#btnRevertBg')?.addEventListener('click', () => {
    const active = app.getActiveImage();
    if (!active) return;
    app.revertOriginalImage(active);
  });

  // Sélecteur de filtre
  document.querySelector('#imageFilterSelect')?.addEventListener('change', (e) => {
    const active = app.getActiveImage();
    if (!active) return;
    app.applyImageFilter(active, e.target.value);
  });

  // Options typographiques
  document.querySelector('#textCurved')?.addEventListener('change', (e) => {
    app.textParams.curved = e.target.checked;
    app.requestBuildTexture();
  });

  document.querySelector('#textShadow')?.addEventListener('change', (e) => {
    app.textParams.shadow = e.target.checked;
    app.requestBuildTexture();
  });

  document.querySelector('#textStroke')?.addEventListener('change', (e) => {
    app.textParams.stroke = e.target.checked;
    app.requestBuildTexture();
  });

  document.querySelector('#textStrokeColor')?.addEventListener('input', (e) => {
    app.textParams.strokeColor = e.target.value;
    if (app.textParams.stroke) app.requestBuildTexture();
  });
}
