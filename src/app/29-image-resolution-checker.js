// Analyse et vérification de la résolution d'image pour l'impression

export function calculateImageDpi(item, printable) {
  if (!item || !item.img) return null;
  const w = item.img.naturalWidth || item.img.width || 0;
  const h = item.img.naturalHeight || item.img.height || 0;
  if (!w || !h) return null;

  const [pw_mm] = Array.isArray(printable) ? printable : [210, 95];
  const sx = item.scaleX ?? item.scale ?? 1;
  const tiles = item.repeatPattern ? (item.repeatCount || 3) : 1;
  const coveredWidthMm = Math.max(5, (pw_mm * sx) / tiles);
  const coveredWidthInches = coveredWidthMm / 25.4;
  const dpi = Math.round(w / coveredWidthInches);

  let status = 'optimal', qualityLabel = 'Excellente (300+ DPI)', color = '#15803d', bg = '#dcfce7', tip = 'Qualité optimale pour une impression nette.';
  if (dpi < 100) {
    status = 'danger'; qualityLabel = 'Faible (< 100 DPI)'; color = '#b91c1c'; bg = '#fee2e2'; tip = 'Résolution faible. Risque important de flou ou de pixellisation.';
  } else if (dpi < 180) {
    status = 'warning'; qualityLabel = 'Moyenne (100-180 DPI)'; color = '#b45309'; bg = '#fef3c7'; tip = 'Qualité convenable pour du petit marquage.';
  } else if (dpi < 280) {
    status = 'good'; qualityLabel = 'Bonne (180-280 DPI)'; color = '#0369a1'; bg = '#e0f2fe'; tip = 'Très bonne qualité pour impression nette.';
  }
  return { width: w, height: h, dpi, status, qualityLabel, color, bg, tip };
}

export function register(app) {
  app.getImageResolutionInfo = function(item) {
    const printable = app.product?.printable || app.productDefinitions?.[app.currentProductKey]?.printable || [210, 95];
    return calculateImageDpi(item, printable);
  };

  app.updateActiveImageResolutionBadge = function() {
    const badge = document.querySelector('#imageResolutionBadge');
    if (!badge) return;
    const active = app.getActiveImage?.();
    if (!active || !active.img) { badge.style.display = 'none'; return; }
    const info = app.getImageResolutionInfo(active);
    if (!info) { badge.style.display = 'none'; return; }
    badge.style.display = 'flex';
    badge.style.background = info.bg;
    badge.style.border = `1px solid ${info.color}44`;
    badge.style.color = info.color;
    badge.innerHTML = `<span><strong>${info.width} × ${info.height} px</strong> (${info.qualityLabel})</span><span style="font-size:10px; background:#ffffff99; padding:2px 6px; border-radius:4px; font-weight:700;">${info.dpi} DPI</span>`;
    badge.title = info.tip;
  };

  app.updateOrderResolutionNotice = function() {
    const notice = document.querySelector('#orderResolutionNotice');
    if (!notice) return;
    const images = (app.imagesList || []).filter(x => x && x.img);
    if (!images.length) { notice.style.display = 'none'; return; }
    const list = images.map(img => ({ item: img, info: app.getImageResolutionInfo(img) })).filter(x => x.info);
    const hasDanger = list.some(x => x.info.status === 'danger');
    const hasWarning = list.some(x => x.info.status === 'warning');

    notice.style.display = 'flex';
    if (hasDanger) {
      notice.style.background = '#fef2f2'; notice.style.border = '1px solid #fecaca'; notice.style.color = '#991b1b';
      notice.innerHTML = `
        <div style="font-weight:700;">Attention : Résolution d'image faible détectée</div>
        <div style="font-size:11px; margin-top:3px;">
          ${list.filter(x => x.info.status === 'danger').map(x => `• <strong>${x.item.name}</strong> : ${x.info.width} × ${x.info.height} px (${x.info.dpi} DPI - Risque de flou)`).join('<br>')}
        </div>
        <div style="font-size:11px; margin-top:4px; opacity:0.9;">
          Pour un rendu parfait à l'impression, nous conseillons une image plus nette en haute définition. Vous pouvez néanmoins continuer si ce visuel vous convient.
        </div>
      `;
    } else if (hasWarning) {
      notice.style.background = '#fffbeb'; notice.style.border = '1px solid #fde68a'; notice.style.color = '#92400e';
      notice.innerHTML = `
        <div style="font-weight:700;">Résolution convenable pour l'impression</div>
        <div style="font-size:11px; margin-top:3px;">
          ${list.map(x => `• ${x.item.name} : ${x.info.width} × ${x.info.height} px (${x.info.dpi} DPI)`).join('<br>')}
        </div>
      `;
    } else {
      notice.style.background = '#f0fdf4'; notice.style.border = '1px solid #bbf7d0'; notice.style.color = '#166534';
      notice.innerHTML = `
        <div style="font-weight:700;">Résolution vérifiée : qualité optimale</div>
        <div style="font-size:11px; margin-top:3px;">
          ${list.map(x => `• ${x.item.name} : ${x.info.width} × ${x.info.height} px (${x.info.dpi} DPI - Net)`).join('<br>')}
        </div>
      `;
    }
  };
}

export function initialize() {}
