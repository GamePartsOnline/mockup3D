// Module 32 : Rendu des matières réelles et Planche Contact Commerciale 4-en-1

export function register(app) {
  app.currentFinish = 'auto';

  // Application des propriétés physiques de matière (Shaders PBR Three.js)
  app.applyMaterialFinish = function applyMaterialFinish(finishType) {
    app.currentFinish = finishType || 'auto';
    let target = finishType;

    if (finishType === 'auto') {
      const key = app.currentProductKey || '';
      if (['mug11oz', 'coaster', 'coasterRound'].includes(key)) target = 'ceramic';
      else if (['tshirt3D', 'cushion', 'cap', 'pencilCase'].includes(key)) target = 'fabric';
      else target = 'satin';
    }

    const configs = {
      ceramic: { roughness: 0.12, metalness: 0.05, clearcoat: 0.88, clearcoatRoughness: 0.08 },
      fabric: { roughness: 0.94, metalness: 0.00, clearcoat: 0.00, clearcoatRoughness: 0.00 },
      satin: { roughness: 0.40, metalness: 0.22, clearcoat: 0.35, clearcoatRoughness: 0.25 }
    };

    const cfg = configs[target] || configs.satin;
    const mats = [app.product?.topMaterial, app.product?.baseMaterial, app.product?.handleMaterial].filter(Boolean);

    mats.forEach(mat => {
      if ('roughness' in mat) mat.roughness = cfg.roughness;
      if ('metalness' in mat) mat.metalness = cfg.metalness;
      if ('clearcoat' in mat) mat.clearcoat = cfg.clearcoat;
      if ('clearcoatRoughness' in mat) mat.clearcoatRoughness = cfg.clearcoatRoughness;
      mat.needsUpdate = true;
    });

    app.renderer?.render(app.scene, app.camera);
  };

  // Génération de la planche contact commerciale 4-en-1 (BAT)
  app.generateContactSheet = async function generateContactSheet() {
    app.updateExportStatus?.('Génération de la planche contact 4-en-1…');
    app.setOverlayVisible(false);

    const savedPos = app.camera.position.clone();
    const savedTarget = app.controls.target.clone();
    const prevRatio = app.renderer.getPixelRatio();
    app.renderer.setPixelRatio(2);

    const isTwoSided = !!app.product?.twoSided;
    const viewConfigs = [
      { label: 'VUE DE FACE', angle: 0, zoom: 1.0 },
      { label: 'PERSPECTIVE 45°', angle: 45, zoom: 1.0 },
      { label: isTwoSided ? 'VUE ARRIÈRE' : 'VUE DE CÔTÉ', angle: isTwoSided ? 180 : 90, zoom: 1.0 },
      { label: 'DÉTAIL & TEXTURE', angle: 25, zoom: 0.65 }
    ];

    const capturedImages = [];

    for (const vc of viewConfigs) {
      if (typeof app.setViewAngle === 'function') app.setViewAngle(vc.angle);
      if (vc.zoom !== 1.0) {
        app.camera.position.copy(app.controls.target).add(savedPos.clone().sub(savedTarget).multiplyScalar(vc.zoom));
      }
      app.camera.lookAt(app.controls.target);
      app.renderer.render(app.scene, app.camera);

      const dataUrl = app.renderer.domElement.toDataURL('image/png');
      const img = new Image();
      await new Promise(res => { img.onload = res; img.src = dataUrl; });
      capturedImages.push({ img, label: vc.label });
      await new Promise(r => setTimeout(r, 60));
    }

    // Création de la planche 2400 × 2400 px
    const sheet = document.createElement('canvas');
    sheet.width = 2400; sheet.height = 2400;
    const ctx = sheet.getContext('2d');

    // Fond blanc studio avec bordure fine
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 2400, 2400);

    // En-tête de marque
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 2400, 220);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 48px Inter, sans-serif';
    ctx.fillText('GRAPH2PRINT', 100, 95);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 22px Inter, sans-serif';
    ctx.fillText('BON À TIRER VIRTUEL · FICHE DE PRÉSENTATION 3D', 100, 145);

    const prodTitle = (app.product?.name || 'Objet personnalisé').toUpperCase();
    ctx.textAlign = 'right';
    ctx.fillStyle = '#38bdf8';
    ctx.font = '700 32px Inter, sans-serif';
    ctx.fillText(prodTitle, 2300, 95);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '500 20px Inter, sans-serif';
    ctx.fillText(new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }), 2300, 145);
    ctx.textAlign = 'left';

    // Grille 2×2 des rendus
    const cellW = 1050, cellH = 920;
    const coords = [
      { x: 100, y: 280 },
      { x: 1250, y: 280 },
      { x: 100, y: 1270 },
      { x: 1250, y: 1270 }
    ];

    capturedImages.forEach((item, idx) => {
      const c = coords[idx];
      ctx.fillStyle = '#ffffff';
      if (typeof ctx.roundRect === 'function') ctx.roundRect(c.x, c.y, cellW, cellH, 16);
      else ctx.rect(c.x, c.y, cellW, cellH);
      ctx.fill();

      // Dessin de la vue
      ctx.drawImage(item.img, c.x + 20, c.y + 20, cellW - 40, cellH - 40);

      // Pastille titre de la vue
      ctx.fillStyle = '#1e293b';
      if (typeof ctx.roundRect === 'function') ctx.roundRect(c.x + 30, c.y + 30, 260, 48, 8);
      else ctx.rect(c.x + 30, c.y + 30, 260, 48);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = '700 18px Inter, sans-serif';
      ctx.fillText(item.label, c.x + 50, c.y + 61);
    });

    // Pied de page atelier
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 2250, 2400, 150);
    ctx.fillStyle = '#334155';
    ctx.font = '600 22px Inter, sans-serif';
    ctx.fillText('GPO SARL (Graph2Print) · 4 rue des Jardins, 51330 Givry-en-Argonne · 06 73 54 03 94 · sarlgpo@gmail.com', 100, 2330);
    ctx.fillStyle = '#64748b';
    ctx.font = '400 18px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Rendu indicatif 3D sous réserve de fabrication · www.graph2print.com', 2300, 2330);
    ctx.textAlign = 'left';

    // Déclenchement du téléchargement
    const link = document.createElement('a');
    link.download = `BAT-Planche-Commerciale-${(app.currentProductKey || 'produit')}-${Date.now()}.png`;
    link.href = sheet.toDataURL('image/png');
    document.body.append(link);
    link.click();
    link.remove();

    // Restauration de la caméra
    app.camera.position.copy(savedPos);
    app.controls.target.copy(savedTarget);
    app.controls.update();
    app.renderer.setPixelRatio(prevRatio);
    app.renderer.render(app.scene, app.camera);

    app.updateExportStatus?.('Prêt');
    app.showToast('Planche contact 4-en-1 générée avec succès !');
  };
}

export function initialize(app) {
  // Changement de finition de matière
  document.querySelector('#materialFinishSelect')?.addEventListener('change', (e) => {
    app.applyMaterialFinish(e.target.value);
  });

  // Adaptation automatique lors du changement de produit
  document.querySelector('#productSelect')?.addEventListener('change', () => {
    setTimeout(() => {
      const select = document.querySelector('#materialFinishSelect');
      if (select && select.value === 'auto') {
        app.applyMaterialFinish('auto');
      }
    }, 200);
  });

  // Boutons de génération de la planche contact
  ['#btnContactSheetHeader', '#btnContactSheetFloating', '#btnContactSheetPanel'].forEach(sel => {
    document.querySelector(sel)?.addEventListener('click', () => {
      app.generateContactSheet();
    });
  });
}
