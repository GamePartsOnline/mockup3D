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
    '', 'Choisissez un produit dans la liste, puis confirmez votre choix.',
    'Importez une image PNG ou JPG, ou ajoutez du texte.',
    'Vérifiez les faces, la position et les couleurs. Confirmez quand le rendu vous convient.',
    'Les fichiers PNG et la vidéo seront préparés puis envoyés à Graph2Print.'
  ];
  document.querySelector('#clientGuideTitle').textContent = titles[step];
  document.querySelector('#clientGuideText').textContent = instructions[step];
  document.querySelectorAll('[data-guide-step]').forEach(el => {
    const number = Number(el.dataset.guideStep);
    el.classList.toggle('active', number === step);
    el.classList.toggle('done', number < step);
  });
  const action = document.querySelector('#clientGuideAction');
  action.hidden = step === 2;
  action.textContent = step === 1 ? 'Choisir ce produit' : step === 3 ? 'Mon visuel est prêt' : 'Envoyer ma création';
  document.querySelector('#submitCreation').disabled = step !== 4 || app.submissionInProgress;
};
}

export function initialize(app) {
document.querySelector('#clientGuideAction').addEventListener('click', () => {
  const step = Number(document.body.dataset.clientStep);
  if (step === 1) app.clientSelectedProduct = true;
  if (step === 3) app.clientDesignConfirmed = true;
  if (step === 4) document.querySelector('#submitCreation').click();
  app.updateClientGuide();
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
    document.querySelector(side === 'left' ? '#toggleLeftSidebar' : '#toggleRightSidebar').setAttribute('aria-expanded','false');
  });
});
}
