const SHOP_ITEMS = [
  { key: 'tshirt3D', cat: 'mode', name: 'T-shirt 3D', price: '17,00 € - 21,00 €', dim: 'A4 (210 × 297 mm)', icon: '👕', badge: 'Populaire', desc: 'Impression recto/verso personnalisée en haute définition.' },
  { key: 'mug11oz', cat: 'deco', name: 'Mug blanc 11 oz', price: '13,00 €', dim: 'Ø 82 × 95 mm (325 ml)', icon: '☕', badge: 'Best-seller', desc: 'Céramique de qualité supérieure, résistant au micro-ondes et lave-vaisselle.' },
  { key: 'photoFrame', cat: 'deco', name: 'Poster A4', price: '20,00 €', dim: '21 × 29,7 cm (A4)', icon: '🖼️', badge: 'Nouveau', desc: 'Poster A4 sous cadre baguette noire, passe-partout blanc et finition sous verre.' },
  { key: 'poster', cat: 'deco', name: 'Poster mural 80 × 60 cm', price: '25,00 €', dim: '800 × 600 mm (Sans cadre)', icon: '🖼️', badge: 'Grand format', desc: 'Papier satiné épais 250g, rendu éclatant pour vos œuvres d\'art.' },
  { key: 'cushion', cat: 'deco', name: 'Housse de coussin', price: '17,00 €', dim: '400 × 400 × 150 mm', icon: '🛋️', desc: 'Toucher doux, fermeture éclair invisible, impression 1 ou 2 faces.' },
  { key: 'cap', cat: 'mode', name: 'Casquette 3D', price: '15,00 €', dim: 'Front 120 × 65 mm', icon: '🧢', desc: 'Casquette réglable avec personnalisation bombée sur la face avant.' },
  { key: 'mousePad', cat: 'bureau', name: 'Tapis de souris', price: '10,00 €', dim: '240 × 200 × 3 mm', icon: '▰', desc: 'Surface textile ultra-lisse et base en caoutchouc naturel antidérapant.' },
  { key: 'puzzle', cat: 'jeux', name: 'Puzzle 120 pièces', price: '15,00 €', dim: '280 × 195 × 2 mm', icon: '🧩', badge: 'Cadeau', desc: '120 pièces découpées avec précision sur carton rigide vernis.' },
  { key: 'pencilCase', cat: 'bureau', name: 'Trousse zippée', price: '11,00 €', dim: '210 × 130 × 10 mm', icon: '✏️', desc: 'Toile résistante avec fermeture éclair solide pour stylos ou accessoires.' },
  { key: 'coaster', cat: 'deco', name: 'Sous-verre carré', price: '8,00 €', dim: '90 × 90 × 3 mm', icon: '🔲', desc: 'Finition brillante sublimée avec sous-face liège isolante.' },
  { key: 'coasterRound', cat: 'deco', name: 'Sous-verre rond', price: '8,00 €', dim: 'Ø 90 × 3 mm', icon: '⚪', desc: 'Format circulaire brillant pour embellir votre table.' },
  { key: 'keychainRect', cat: 'bureau', name: 'Porte-clés rectangle', price: '6,00 €', dim: '40 × 60 × 3 mm', icon: '🗝️', desc: 'Polymère Unisub FRP haute résistance avec anneau métal.' },
  { key: 'keychainRound', cat: 'bureau', name: 'Porte-clés rond', price: '6,00 €', dim: 'Ø 63.5 × 2.3 mm', icon: '⭕', desc: 'Unisub FRP rond, impression éclatante sur deux faces.' },
  { key: 'keychainHeart', cat: 'bureau', name: 'Porte-clés Cœur', price: '6,00 €', dim: '57 × 63 mm', icon: '💖', desc: 'Forme cœur romantique avec deux faces imprimables.' },
  { key: 'eventWristband', cat: 'jeux', name: 'Bracelet événementiel', price: '6,50 €', dim: '250 × 20 mm', icon: '🎟️', desc: 'Tissu soyeux résistant à l\'eau avec bague de verrouillage.' },
  { key: 'arcadeCabinet', cat: 'jeux', name: 'Borne d\'Arcade Pro', price: '2290,00 €', dim: '600 × 1700 × 700 mm', icon: '🕹️', badge: 'Prestige', desc: 'Borne 2 joueurs complète avec décoration personnalisée sur mesure.' }
];

function generate3DThumb(app, key) {
  const def = app.productDefinitions?.[key];
  if (!def?.create || !app.THREE) return null;
  try {
    const width = 180, height = 180;
    const canvas = document.createElement('canvas'); canvas.width = width; canvas.height = height;
    const renderer = new app.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height); renderer.setPixelRatio(1); renderer.colorSpace = app.THREE.SRGBColorSpace;
    const scene = new app.THREE.Scene();
    scene.add(new app.THREE.HemisphereLight(0xffffff, 0x444455, 1.4));
    const dir = new app.THREE.DirectionalLight(0xffffff, 1.5); dir.position.set(3, 4, 5); scene.add(dir);
    const prod = def.create(); scene.add(prod.group); prod.group.updateMatrixWorld(true);
    const box = new app.THREE.Box3().setFromObject(prod.group);
    const center = box.getCenter(new app.THREE.Vector3());
    const size = box.getSize(new app.THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const cam = new app.THREE.PerspectiveCamera(38, 1, 0.05, 50);
    cam.position.set(center.x + maxDim * 0.75, center.y + maxDim * 0.45, center.z + maxDim * 1.55);
    cam.lookAt(center);
    renderer.render(scene, cam);
    const dataUrl = canvas.toDataURL('image/png');
    renderer.dispose();
    return dataUrl;
  } catch { return null; }
}

export function register(app) {
  app.shopThumbnails = {};
  app.openShop2D = function() {
    const el = document.querySelector('#shop2DOverlay');
    if (!el) return;
    el.hidden = false; document.body.classList.add('modal-open');
    if (Object.keys(app.shopThumbnails).length === 0) {
      setTimeout(() => {
        SHOP_ITEMS.forEach(it => { if (!app.shopThumbnails[it.key]) app.shopThumbnails[it.key] = generate3DThumb(app, it.key); });
        app.renderShop2D?.();
      }, 50);
    }
  };
  app.closeShop2D = function() {
    const el = document.querySelector('#shop2DOverlay');
    if (!el) return;
    el.hidden = true; document.body.classList.remove('modal-open');
  };
}

export function initialize(app) {
  const overlay = document.querySelector('#shop2DOverlay');
  const openBtn = document.querySelector('#btnShop2D');
  const closeBtn = document.querySelector('#closeShop2DBtn');
  const grid = document.querySelector('#shop2DGrid');
  const filterBtns = document.querySelectorAll('[data-shop-cat]');
  let currentCat = 'all';

  if (!overlay || !grid) return;

  app.renderShop2D = function(cat = currentCat) {
    currentCat = cat; grid.innerHTML = '';
    const filtered = cat === 'all' ? SHOP_ITEMS : SHOP_ITEMS.filter(it => it.cat === cat);
    filtered.forEach(item => {
      const card = document.createElement('article'); card.className = 'shop-card';
      const thumb = app.shopThumbnails[item.key] || generate3DThumb(app, item.key);
      if (thumb) app.shopThumbnails[item.key] = thumb;
      const mediaHtml = thumb
        ? `<div class="shop-thumb-3d-wrap"><img src="${thumb}" alt="${item.name}" class="shop-thumb-3d-img" /></div>`
        : `<div class="shop-thumb-3d-wrap"></div>`;

      card.innerHTML = `
        <div class="shop-card-badge-wrap">
          ${item.badge ? `<span class="shop-badge">${item.badge}</span>` : '<span></span>'}
        </div>
        ${mediaHtml}
        <div class="shop-card-body">
          <h3 class="shop-card-title">${item.name}</h3>
          <p class="shop-card-desc">${item.desc}</p>
          <div class="shop-card-meta">
            <span class="shop-card-dim">${item.dim}</span>
            <span class="shop-card-price">${item.price}</span>
          </div>
        </div>
        <button type="button" class="shop-card-btn primary" data-product="${item.key}">Personnaliser cet objet</button>
      `;
      card.onclick = () => { app.switchToProduct(item.key); app.closeShop2D(); };
      grid.appendChild(card);
    });
  };

  app.renderShop2D('all');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      app.renderShop2D(btn.dataset.shopCat);
    };
  });
  openBtn?.addEventListener('click', app.openShop2D);
  closeBtn?.addEventListener('click', app.closeShop2D);
  overlay.addEventListener('click', e => { if (e.target === overlay) app.closeShop2D(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hidden) app.closeShop2D(); });
}
