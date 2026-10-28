// Shared application state is supplied by the entry point.
export function register(app) {
app.updateClientGuide = function updateClientGuide() {
  if (!app.clientMode) return;
  const hasContent = app.imagesList.length > 0 || !!app.textParams.text.trim();
  const step = !app.clientSelectedProduct ? 1 : !hasContent ? 2 : !app.clientDesignConfirmed ? 3 : 4;
  document.body.dataset.clientStep = String(step);
  const titles = [
    '', 'Étape 1 · Choisir un produit', 'Étape 2 · Ajouter un visuel',
    'Étape 3 · Ajuster le rendu', 'Étape 4 · Envoyer la création'
  ];
  const instructions = [
    '', 'Cliquez directement sur un objet de la table 3D ou choisissez-le dans la liste.',
    'Choisissez un visuel du catalogue, importez une image ou ajoutez du texte.',
    'Vérifiez les faces, la position et le rendu. Confirmez quand votre création vous convient.',
    'Les fichiers PNG et la vidéo seront préparés puis envoyés à Graph2Print.'
  ];
  const titleEl = document.querySelector('#clientGuideTitle'); if (titleEl) titleEl.textContent = titles[step];
  const textEl = document.querySelector('#clientGuideText'); if (textEl) textEl.textContent = instructions[step];
  document.querySelectorAll('[data-guide-step]').forEach(el => {
    const number = Number(el.dataset.guideStep);
    el.classList.toggle('active', number === step);
    el.classList.toggle('done', number < step);
  });
  const fill = document.querySelector('#timelineProgressFill');
  if (fill) fill.style.width = step === 1 ? '12%' : step === 2 ? '38%' : step === 3 ? '68%' : '100%';
  const action = document.querySelector('#clientGuideAction');
  action.hidden = step === 2 || (step === 1 && app.currentProductKey === 'showcase');
  action.textContent = step === 1 ? 'Choisir ce produit' : 'Envoyer ma création';
  const submitBtn = document.querySelector('#submitCreation');
  if (submitBtn) submitBtn.disabled = !!app.submissionInProgress;
};
}

export function initialize(app) {
document.querySelector('#clientGuideAction')?.addEventListener('click', () => {
  const step = Number(document.body.dataset.clientStep);
  if (step === 1) {
    app.clientSelectedProduct = true;
    app.updateClientGuide();
    return;
  }
  document.querySelector('#submitCreation')?.click();
});
document.querySelectorAll('.timeline-step').forEach(stepEl => {
  stepEl.addEventListener('click', () => {
    const targetStep = Number(stepEl.dataset.guideStep);
    const secMap = { 1: '#sectionProduct', 2: '#sectionImages', 3: '#adjustments', 4: '#sectionAppearance' };
    const sec = document.querySelector(secMap[targetStep]);
    if (sec && sec.classList.contains('collapsed')) {
      sec.querySelector('.section-title-btn')?.click();
    }
    sec?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (targetStep === 1 && app.currentProductKey === 'showcase') {
      app.openShop2D?.();
    }
  });
});
app.updateClientGuide();
document.querySelector('#loadTshirtExample').addEventListener('click', async () => {
  if (app.currentProductKey !== 'tshirt3D') return;
  const img = new Image();
  img.src = '/logo-graph2print.png';
  await img.decode();
  for (const side of ['A', 'B', 'heart']) {
    app.imagesList.push({ id: 'example-' + side + '-' + Date.now(), name: 'Exemple Graph2Print · ' + side,
      img, scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, rotation: 0, fitMode: 'contain', side });
  }
  app.activeImageIndex = app.imagesList.length - 1;
  app.renderImagesList();
  app.syncActiveControls();
  app.buildTexture();
  app.showToast('Exemples ajoutés : devant, dos et cœur');
});
document.querySelectorAll('[data-close-panel]').forEach(button => {
  button.addEventListener('click', () => {
    const side = button.dataset.closePanel;
    document.querySelector('.workspace').classList.add(side + '-collapsed');
    document.querySelector(side === 'left' ? '#toggleLeftSidebar' : '#toggleRightSidebar')?.setAttribute('aria-expanded','false');
  });
});
}
