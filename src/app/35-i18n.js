// Système d'internationalisation bilingue (Français / Anglais) pour MockUp3D C3
const TRANSLATIONS = {
  fr: {
    // Topbar & Navigation
    'brand.sub': 'Graph2Print • Personnalisation 3D',
    'menu.file': 'Fichier ▾',
    'menu.edit': 'Éditer ▾',
    'menu.view': 'Affichage ▾',
    'menu.catalog': 'Catalogue ▾',
    'menu.import': 'Importer une image…',
    'menu.exportPng': 'Exporter en image PNG',
    'menu.exportMp4': 'Exporter en vidéo MP4',
    'menu.resetVisual': 'Réinitialiser le visuel actif',
    'menu.repeat': 'Basculer le motif en mosaïque',
    'menu.nightMode': 'Mode Nuit',
    'menu.dayMode': 'Mode Jour',
    'menu.browseVisuals': 'Parcourir les visuels',
    'btn.showroom': 'Showroom 3D',
    'btn.shop2D': 'Boutique 2D',
    'btn.ready': 'Prêt',
    'btn.validateCreation': 'Valider ma création',
    'btn.clientInterface': 'Interface Client',
    'btn.adminDashboard': 'Dashboard Atelier',

    // Fiche Produit & Panneau latéral
    'product.selected': 'Produit sélectionné',
    'product.change': 'Changer',
    'product.upload': '+ Ajouter une photo ou un logo',
    'product.browseCatalog': 'Catalogue de visuels',
    'product.adjustments': 'Ajuster le visuel actif',
    'product.activeVisual': 'Visuel sélectionné',
    'product.size': 'Taille',
    'product.rotation': 'Rotation',
    'product.removeBg': 'Détourer fond',
    'product.center': 'Centrer',
    'product.repeat': 'Mosaïque',
    'product.replace': 'Remplacer',
    'product.remove': 'Retirer',
    'product.customText': 'Texte personnalisé',
    'product.customTextSub': 'Message, prénom ou citation',
    'product.textPlaceholder': 'Tapez votre texte ici...',
    'product.addText': 'Appliquer le texte',
    'product.curveText': 'Courber le texte en arc',
    'product.finishes': 'Finitions & Matières',
    'product.finishGlossy': 'Céramique brillante',
    'product.finishCotton': 'Coton textile mat',
    'product.finishSatin': 'Finition satinée',

    // Modal Boutique 2D
    'shop.title': 'Boutique des Objets Personnalisables',
    'shop.subtitle': 'Choisissez le support parfait pour votre personnalisation.',
    'shop.all': 'Tous les objets',
    'shop.mode': 'Mode & Textile',
    'shop.deco': 'Maison & Déco',
    'shop.bureau': 'Bureau & Papeterie',
    'shop.jeux': 'Jeux & Événements',
    'shop.customize': 'Personnaliser cet objet',

    // Modal Commande Client & BAT
    'order.title': 'Validation de votre Création & BAT',
    'order.subtitle': 'Vérifiez votre création avant transmission sécurisée à notre atelier d\'impression.',
    'order.preview': 'Aperçu 3D validé',
    'order.contact': 'Vos Coordonnées',
    'order.nom': 'Nom',
    'order.prenom': 'Prénom',
    'order.email': 'Adresse courriel',
    'order.telephone': 'Numéro de téléphone',
    'order.adresse': 'Adresse postale',
    'order.ville': 'Ville',
    'order.codePostal': 'Code postal',
    'order.note': 'Remarque ou instruction spécifique (facultatif)',
    'order.cgvConsent': 'J\'ai lu et j\'accepte les Conditions Générales de Vente (CGV)',
    'order.legalNotice': 'Vos créations sont vérifiées par notre équipe avant lancement en fabrication.',
    'order.submit': 'Confirmer et envoyer ma commande'
  },
  en: {
    // Topbar & Navigation
    'brand.sub': 'Graph2Print • 3D Customizer',
    'menu.file': 'File ▾',
    'menu.edit': 'Edit ▾',
    'menu.view': 'View ▾',
    'menu.catalog': 'Catalog ▾',
    'menu.import': 'Upload image…',
    'menu.exportPng': 'Export as PNG image',
    'menu.exportMp4': 'Export as MP4 video',
    'menu.resetVisual': 'Reset active graphic',
    'menu.repeat': 'Toggle repeating pattern',
    'menu.nightMode': 'Dark Mode',
    'menu.dayMode': 'Light Mode',
    'menu.browseVisuals': 'Browse graphics',
    'btn.showroom': '3D Showroom',
    'btn.shop2D': '2D Shop',
    'btn.ready': 'Ready',
    'btn.validateCreation': 'Validate My Design',
    'btn.clientInterface': 'Customer Studio',
    'btn.adminDashboard': 'Workshop Dashboard',

    // Fiche Produit & Panneau latéral
    'product.selected': 'Selected Product',
    'product.change': 'Change',
    'product.upload': '+ Add photo or logo',
    'product.browseCatalog': 'Graphic Catalog',
    'product.adjustments': 'Adjust active graphic',
    'product.activeVisual': 'Active artwork',
    'product.size': 'Scale',
    'product.rotation': 'Rotation',
    'product.removeBg': 'Cutout bg',
    'product.center': 'Center',
    'product.repeat': 'Tile pattern',
    'product.replace': 'Replace',
    'product.remove': 'Remove',
    'product.customText': 'Custom text',
    'product.customTextSub': 'Message, name or quote',
    'product.textPlaceholder': 'Type your text here...',
    'product.addText': 'Apply text',
    'product.curveText': 'Curved text arc',
    'product.finishes': 'Finishes & Materials',
    'product.finishGlossy': 'Glossy ceramic',
    'product.finishCotton': 'Matte cotton fabric',
    'product.finishSatin': 'Satin finish',

    // Modal Boutique 2D
    'shop.title': 'Customizable Products Shop',
    'shop.subtitle': 'Pick the perfect canvas for your personalized artwork.',
    'shop.all': 'All products',
    'shop.mode': 'Fashion & Apparel',
    'shop.deco': 'Home & Decor',
    'shop.bureau': 'Office & Stationery',
    'shop.jeux': 'Games & Events',
    'shop.customize': 'Customize this item',

    // Modal Commande Client & BAT
    'order.title': 'Order Review & Proof Validation',
    'order.subtitle': 'Inspect your design before secure transmission to our print workshop.',
    'order.preview': 'Validated 3D Proof Preview',
    'order.contact': 'Your Details',
    'order.nom': 'Last Name',
    'order.prenom': 'First Name',
    'order.email': 'Email Address',
    'order.telephone': 'Phone Number',
    'order.adresse': 'Delivery Address',
    'order.ville': 'City',
    'order.codePostal': 'Zip / Postal Code',
    'order.note': 'Special instructions for the workshop (optional)',
    'order.cgvConsent': 'I have read and agree to the Terms of Sale',
    'order.legalNotice': 'All custom designs are verified by our production team before printing.',
    'order.submit': 'Confirm and place order'
  }
};

export function register(app) {
  app.currentLang = 'fr';

  app.t = function(key) {
    const dict = TRANSLATIONS[app.currentLang] || TRANSLATIONS.fr;
    return dict[key] || TRANSLATIONS.fr[key] || key;
  };

  app.setLanguage = function(lang) {
    if (lang !== 'fr' && lang !== 'en') lang = 'fr';
    app.currentLang = lang;
    const isEn = lang === 'en';
    try {
      localStorage.setItem('mockup3d_lang', lang);
    } catch {}

    const select = document.querySelector('#langSelect');
    if (select) select.value = lang;

    // Mise à jour ciblée du Panneau Latéral Gauche (Mode Simple et Expert)
    const subtitle = document.querySelector('.simple-card-subtitle');
    if (subtitle) subtitle.textContent = isEn ? 'Selected product' : 'Produit sélectionné';

    const btnChange = document.querySelector('#simpleBtnChangeProduct');
    if (btnChange) btnChange.textContent = isEn ? 'Change' : 'Changer';

    const vCardTitle = document.querySelector('#simpleSectionVisual .simple-card-title-wrap h4');
    if (vCardTitle) vCardTitle.textContent = isEn ? 'Your graphics' : 'Vos visuels';

    const vCardSub = document.querySelector('#simpleSectionVisual .simple-card-title-wrap small');
    if (vCardSub) vCardSub.textContent = isEn ? 'PNG, JPG or SVG lossless' : 'PNG, JPG ou SVG sans perte';

    const btnUpload = document.querySelector('#simpleUploadTrigger');
    if (btnUpload) btnUpload.textContent = isEn ? '+ Add photo or logo' : '+ Ajouter une photo ou un logo';

    const btnCat = document.querySelector('#simpleOpenCatalogBtn');
    if (btnCat) btnCat.textContent = isEn ? 'Graphic Catalog' : 'Catalogue de visuels';

    const btnKnockout = document.querySelector('#simpleBtnKnockout');
    if (btnKnockout) btnKnockout.textContent = isEn ? 'Cutout bg' : 'Détourer fond';

    const btnCenter = document.querySelector('#simpleBtnCenter');
    if (btnCenter) btnCenter.textContent = isEn ? 'Center' : 'Centrer';

    const btnPattern = document.querySelector('#simpleBtnPattern');
    if (btnPattern) btnPattern.textContent = isEn ? 'Tile pattern' : 'Mosaïque';

    const btnReplace = document.querySelector('#simpleBtnReplace');
    if (btnReplace) btnReplace.textContent = isEn ? 'Replace' : 'Remplacer';

    const btnRemove = document.querySelector('#simpleBtnRemoveVisual');
    if (btnRemove) btnRemove.textContent = isEn ? 'Remove' : 'Retirer';

    const lblScale = document.querySelector('label[for="simpleScale"]');
    if (lblScale) lblScale.textContent = isEn ? 'Scale' : 'Taille';

    const lblRot = document.querySelector('label[for="simpleRotation"]');
    if (lblRot) lblRot.textContent = isEn ? 'Rotation' : 'Rotation';

    const tCardTitle = document.querySelector('#simpleSectionText .simple-card-title-wrap h4');
    if (tCardTitle) tCardTitle.textContent = isEn ? 'Custom text' : 'Texte personnalisé';

    const tCardSub = document.querySelector('#simpleSectionText .simple-card-title-wrap small');
    if (tCardSub) tCardSub.textContent = isEn ? 'Message, name or quote' : 'Message, prénom ou citation';

    const textInput = document.querySelector('#simpleTextInput');
    if (textInput) textInput.placeholder = isEn ? 'Type your text here...' : 'Tapez votre texte ici...';

    const textSideLabel = document.querySelector('#simpleTextSideWrap span');
    if (textSideLabel) textSideLabel.textContent = isEn ? 'Text area :' : 'Zone du texte :';

    const btnAlignLeft = document.querySelector('[data-simple-align="left"]');
    if (btnAlignLeft) btnAlignLeft.textContent = isEn ? 'Left' : 'Gauche';

    const btnAlignCenter = document.querySelector('[data-simple-align="center"]');
    if (btnAlignCenter) btnAlignCenter.textContent = isEn ? 'Center' : 'Centré';

    const btnAlignRight = document.querySelector('[data-simple-align="right"]');
    if (btnAlignRight) btnAlignRight.textContent = isEn ? 'Right' : 'Droite';

    const lblBold = document.querySelector('#simpleTextBold')?.parentElement?.querySelector('strong');
    if (lblBold) lblBold.textContent = isEn ? 'Bold' : 'Gras';

    const lblItalic = document.querySelector('#simpleTextItalic')?.parentElement?.querySelector('em');
    if (lblItalic) lblItalic.textContent = isEn ? 'Italic' : 'Italique';

    const lblFont = document.querySelector('label[for="simpleTextFont"]');
    if (lblFont) lblFont.textContent = isEn ? 'Font family' : 'Police de caractères';

    const lblColor = document.querySelector('.simple-color-field label');
    if (lblColor) lblColor.textContent = isEn ? 'Color' : 'Couleur';

    const arcTitle = document.querySelector('#simpleArcadeCard .simple-card-title-wrap h4');
    if (arcTitle) arcTitle.textContent = isEn ? 'Arcade Options' : 'Options Borne Arcade';

    const arcSub = document.querySelector('#simpleArcadeCard .simple-card-title-wrap small');
    if (arcSub) arcSub.textContent = isEn ? 'Joysticks, buttons & sides' : 'Joysticks, boutons et côtés';

    const lblGlow = document.querySelector('#simpleArcadeGlow')?.parentElement?.querySelector('span');
    if (lblGlow) lblGlow.textContent = isEn ? 'Illuminated buttons & sticks (LED)' : 'Boutons & manettes lumineux (LED)';

    const lblMirror = document.querySelector('#simpleArcadeMirrorSideB')?.parentElement?.querySelector('span');
    if (lblMirror) lblMirror.textContent = isEn ? 'Mirror Side B (Reverse right side)' : 'Miroir Côté B (Inverser Côté Droit)';

    const noelSpan = document.querySelector('#simpleNoelToggleWrap span');
    if (noelSpan) noelSpan.textContent = isEn ? 'Christmas Mode Decor' : 'Décoration Mode Noël';

    const noelAdminSpan = document.querySelector('#adminNoelDecorWrap span');
    if (noelAdminSpan) noelAdminSpan.textContent = isEn ? 'Christmas Mode' : 'Mode Noël';

    const btnVal = document.querySelector('#simpleBtnOrder');
    if (btnVal) btnVal.textContent = isEn ? 'Validate My Design' : 'Valider ma création';

    const btnSubmit = document.querySelector('#submitCreation');
    if (btnSubmit) btnSubmit.textContent = isEn ? 'Submit My Design' : 'Envoyer ma création';

    // Boutons de la barre supérieure et vue 3D
    const btnShowroom = document.querySelector('#btnShowcaseTable');
    if (btnShowroom) btnShowroom.textContent = isEn ? '3D Showroom' : 'Showroom 3D';

    const btnShop = document.querySelector('#btnShop2D');
    if (btnShop) btnShop.textContent = isEn ? '2D Shop' : 'Boutique 2D';

    const btnDashboard = document.querySelector('#btnAdminDashboard');
    if (btnDashboard) btnDashboard.textContent = isEn ? 'Workshop Dashboard' : 'Dashboard Atelier';

    const btnFace = document.querySelector('#viewAngleFront');
    if (btnFace) btnFace.textContent = isEn ? 'Front' : 'Face';

    const btnTop = document.querySelector('#viewAngleTop');
    if (btnTop) btnTop.textContent = isEn ? 'Top' : 'Dessus';

    const dropdownBtns = document.querySelectorAll('.menu-dropdown-btn');
    if (dropdownBtns.length >= 4) {
      dropdownBtns[0].textContent = isEn ? 'File ▾' : 'Fichier ▾';
      dropdownBtns[1].textContent = isEn ? 'Edit ▾' : 'Éditer ▾';
      dropdownBtns[2].textContent = isEn ? 'View ▾' : 'Affichage ▾';
      dropdownBtns[3].textContent = isEn ? 'Catalog ▾' : 'Catalogue ▾';
    }

    // Modal de Commande & BAT
    const orderTitle = document.querySelector('#clientOrderModal strong');
    if (orderTitle) orderTitle.textContent = isEn ? 'Order Review & Proof Validation' : 'Finaliser ma création et mes coordonnées';

    const orderSub = document.querySelector('#clientOrderModal p');
    if (orderSub) orderSub.textContent = isEn ? 'Enter your details for transmission to the print workshop.' : 'Renseignez vos coordonnées pour la transmission de votre commande à l\'atelier.';

    const btnSubmitOrder = document.querySelector('#submitOrderBtn');
    if (btnSubmitOrder) btnSubmitOrder.textContent = isEn ? 'Confirm and Send Order' : 'Confirmer et envoyer ma commande';

    // Mise à jour des éléments annotés avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const trans = app.t(k);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = trans;
      } else {
        el.textContent = trans;
      }
    });

    app.renderShop2D?.();
  };
}

export function initialize(app) {
  let saved = 'fr';
  try {
    saved = localStorage.getItem('mockup3d_lang') || 'fr';
  } catch {}

  const select = document.querySelector('#langSelect');
  if (select) {
    select.value = saved;
    select.addEventListener('change', (e) => {
      app.setLanguage(e.target.value);
    });
  }

  // Application immédiate de la langue au chargement
  app.setLanguage(saved);
}
