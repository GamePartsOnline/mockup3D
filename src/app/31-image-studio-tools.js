// Module 31 : Outils de retouche graphique et typographie enrichie

export function register(app) {
  // Détourage automatique express du fond blanc
  app.removeWhiteBackground = function removeWhiteBackground(item, tolerance = 30) {
    if (!item || !item.img) return;
    if (!item._originalImg) item._originalImg = item.img;

    const source = item._originalImg;
    const canvas = document.createElement('canvas');
    canvas.width = source.width || source.videoWidth || 800;
    canvas.height = source.height || source.videoHeight || 800;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(source, 0, 0);

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const threshold = 255 - tolerance;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (r >= threshold && g >= threshold && b >= threshold) {
          const diff = Math.min(r - threshold, g - threshold, b - threshold);
          const factor = 1 - (diff / tolerance);
          data[i + 3] = Math.max(0, Math.min(data[i + 3], Math.round(255 * factor * 0.4)));
        }
      }
      ctx.putImageData(imgData, 0, 0);
      item.img = canvas;
      app.requestBuildTexture();
      app.showToast('Fond blanc détouré avec succès');
    } catch (err) {
      console.warn('Détourage impossible (CORS ou sécurité canvas) :', err);
    }
  };

  // Rétablir l'image d'origine sans retouche
  app.revertOriginalImage = function revertOriginalImage(item) {
    if (!item || !item._originalImg) return;
    item.img = item._originalImg;
    item.filter = 'none';
    const filterSelect = document.querySelector('#imageFilterSelect');
    if (filterSelect) filterSelect.value = 'none';
    app.requestBuildTexture();
    app.showToast('Image originale rétablie');
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
  // Bouton détourage fond blanc
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
