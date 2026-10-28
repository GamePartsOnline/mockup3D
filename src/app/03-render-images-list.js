// Shared application state is supplied by the entry point.
export function register(app) {
app.renderImagesList = function renderImagesList() {
  const listEl = document.querySelector('#imagesList');
  if (!listEl) return;
  listEl.innerHTML = '';
  app.imagesList.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = `image-item${index === app.activeImageIndex ? ' active' : ''}`;
    itemEl.onclick = () => app.selectActiveImage(index);

    const thumb = document.createElement('img');
    thumb.className = 'image-item-thumb';
    thumb.src = item.img.src;
    thumb.alt = item.name;

    const info = document.createElement('div');
    info.className = 'image-item-info';
    info.innerHTML = `<span class="image-item-name">${item.name}</span><small class="image-item-meta">Calque #${index + 1} • ${Math.round(item.scale * 100)}%</small>`;
    const sideSelect = document.createElement('select');
    sideSelect.className = 'layer-side-select';
    if (app.product.zones) {
      sideSelect.innerHTML = '<option value="both">Toutes zones</option>' + app.product.zones.map(z => `<option value="${z.id}">${z.label}</option>`).join('');
    } else {
      sideSelect.innerHTML = '<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>' + (app.currentProductKey === 'tshirt3D' ? '<option value="heart">Cœur (petit)</option>' : '');
    }
    sideSelect.value = item.side || 'both';
    sideSelect.onclick = e => e.stopPropagation();
    sideSelect.onchange = e => { item.side = e.target.value; app.buildTexture(); };
    if (app.product.twoSided || app.product.zones) {
      info.append(sideSelect);
    }

    const removeBtn = document.createElement('button');
    removeBtn.className = 'image-item-remove';
    removeBtn.title = 'Supprimer cette image';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = (e) => app.removeImageByIndex(index, e);

    itemEl.append(thumb, info, removeBtn);
    listEl.append(itemEl);
  });
};

app.isOverlayVisible = function isOverlayVisible() {
  return !app.overlay.hasAttribute('hidden') && !app.overlay.classList.contains('hidden') && app.overlay.style.display !== 'none';
};

app.setOverlayVisible = function setOverlayVisible(visible) {
  const isFlat = app.product.type === 'flat';
  const showCheckbox = document.querySelector('#showTransformFrame').checked;
  const active = app.getActiveImage();
  const shouldShow = !!visible && showCheckbox && !!active && isFlat;
  if (shouldShow) {
    app.overlay.removeAttribute('hidden');
    app.overlay.classList.remove('hidden');
    app.overlay.style.display = 'block';
  } else {
    app.overlay.setAttribute('hidden', '');
    app.overlay.classList.add('hidden');
    app.overlay.style.display = 'none';
  }
};

app.updateWrapPreviewWidget = function updateWrapPreviewWidget(canvas) {
  const widget = document.querySelector('#wrapPreviewWidget');
  const img = document.querySelector('#wrapPreviewImg');
  if (!widget || !img) return;
  if (app.clientMode || app.currentProductKey === 'showcase') {
    widget.hidden = true;
    return;
  }
  const heartPanel = document.querySelector('#heartPreviewPanel');
  const heartDownload = document.querySelector('#downloadHeartBtn');
  if (heartPanel) heartPanel.hidden = !app.heartTexture;
  if (heartDownload) heartDownload.hidden = !app.heartTexture || app.clientMode;
  if (app.heartTexture) document.querySelector('#heartPreviewImg').src = app.heartTexture.image.toDataURL('image/png');
  const hasContent = app.imagesList.length > 0 || app.textParams.text.trim().length > 0;
  if (hasContent) {
    widget.hidden = false;
    const targetCanvas = canvas || (app.texture?.image);
    if (targetCanvas && targetCanvas.toDataURL) {
      img.src = targetCanvas.toDataURL('image/png');
    }
  } else {
    widget.hidden = true;
  }
};
}

export function initialize(app) {
document.querySelector('#toggleWrapPreview')?.addEventListener('click', () => {
  document.querySelector('#wrapPreviewWidget')?.classList.toggle('collapsed');
});
document.querySelector('#downloadHeartBtn')?.addEventListener('click', () => {
  if (!app.heartTexture?.image) return;
  const link = document.createElement('a');
  link.href = app.heartTexture.image.toDataURL('image/png');
  link.download = 'coeur-tshirt-' + Date.now() + '.png';
  document.body.append(link);
  link.click();
  link.remove();
});
document.querySelector('#downloadWrapBtn')?.addEventListener('click', () => {
  const targetCanvas = app.texture?.image;
  if (!targetCanvas || !targetCanvas.toDataURL) {
    app.showToast('Aucun visuel wrap à exporter');
    return;
  }
  const link = document.createElement('a');
  link.href = targetCanvas.toDataURL('image/png');
  const printable = app.product.printable || app.productDefinitions[app.currentProductKey].printable;
  const sizeLabel = Array.isArray(printable) ? printable.join('x') + 'mm' : '210x95mm';
  link.download = 'wrap-' + app.currentProductKey + '-' + sizeLabel + '-' + Date.now() + '.png';
  document.body.append(link);
  link.click();
  link.remove();
  app.showToast('Fichier d’impression Wrap PNG téléchargé');
});
}
