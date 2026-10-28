import { getProductThumbnail } from './19-shop-product-thumbs.js';

const SHOP_ITEMS = [
  { key: 'tshirt3D', cat: 'mode', name: 'T-shirt 3D', price: '17,00 € - 21,00 €', dim: 'A4 (210 × 297 mm)', badge: 'Populaire', desc: 'Impression recto/verso personnalisée en haute définition.' },
  { key: 'mug11oz', cat: 'deco', name: 'Mug blanc 11 oz', price: '13,00 €', dim: 'Ø 82 × 95 mm (325 ml)', badge: 'Best-seller', desc: 'Céramique de qualité supérieure, résistant au micro-ondes et lave-vaisselle.' },
  { key: 'photoFrame', cat: 'deco', name: 'Poster A4 (Sans cadre)', price: '12,00 €', dim: '210 × 297 mm', badge: 'Art', desc: 'Poster A4 sur papier d\'art satiné 250g, vendu sans cadre.' },
  { key: 'poster', cat: 'deco', name: 'Poster mural 80 × 60 cm', price: '25,00 €', dim: '800 × 600 mm (Sans cadre)', badge: 'Grand format', desc: 'Papier satiné épais 250g, rendu éclatant pour vos œuvres d\'art.' },
  { key: 'cushion', cat: 'deco', name: 'Housse de coussin', price: '17,00 €', dim: '400 × 400 × 150 mm', desc: 'Toucher doux, fermeture éclair invisible, impression 1 ou 2 faces.' },
  { key: 'cap', cat: 'mode', name: 'Casquette 3D', price: '15,00 €', dim: 'Front 120 × 65 mm', desc: 'Casquette réglable avec personnalisation bombée sur la face avant.' },
  { key: 'mousePad', cat: 'bureau', name: 'Tapis de souris', price: '10,00 €', dim: '240 × 200 × 3 mm', desc: 'Surface textile ultra-lisse et base en caoutchouc naturel antidérapant.' },
  { key: 'puzzle', cat: 'jeux', name: 'Puzzle 120 pièces', price: '15,00 €', dim: '280 × 195 × 2 mm', badge: 'Cadeau', desc: '120 pièces découpées avec précision sur carton rigide vernis.' },
  { key: 'pencilCase', cat: 'bureau', name: 'Trousse zippée', price: '11,00 €', dim: '210 × 130 × 10 mm', desc: 'Toile résistante avec fermeture éclair solide pour stylos ou accessoires.' },
  { key: 'coaster', cat: 'deco', name: 'Sous-verre carré', price: '8,00 €', dim: '90 × 90 × 3 mm', desc: 'Finition brillante sublimée avec sous-face liège isolante.' },
  { key: 'coasterRound', cat: 'deco', name: 'Sous-verre rond', price: '8,00 €', dim: 'Ø 90 × 3 mm', desc: 'Format circulaire brillant pour embellir votre table.' },
  { key: 'keychainRect', cat: 'bureau', name: 'Porte-clés rectangle', price: '6,00 €', dim: '40 × 60 × 3 mm', desc: 'Polymère Unisub FRP haute résistance avec anneau métal.' },
  { key: 'keychainRound', cat: 'bureau', name: 'Porte-clés rond', price: '6,00 €', dim: 'Ø 63.5 × 2.3 mm', desc: 'Unisub FRP rond, impression éclatante sur deux faces.' },
  { key: 'keychainHeart', cat: 'bureau', name: 'Porte-clés Cœur', price: '6,00 €', dim: '57 × 63 mm', desc: 'Forme cœur romantique avec deux faces imprimables.' },
  { key: 'eventWristband', cat: 'jeux', name: 'Bracelet événementiel', price: '6,50 €', dim: '250 × 20 mm', desc: 'Tissu soyeux résistant à l\'eau avec bague de verrouillage.' },
  { key: 'arcadeCabinet', cat: 'jeux', name: 'Borne d\'Arcade Pro', price: '2290,00 €', dim: '600 × 1700 × 700 mm', badge: 'Prestige', desc: 'Borne 2 joueurs complète avec décoration personnalisée sur mesure.' }
];

export function register(app) {
  app.shopThumbnails = {};
  SHOP_ITEMS.forEach(it => {
    app.shopThumbnails[it.key] = getProductThumbnail(it.key);
  });

  app.openShop2D = function() {
    const el = document.querySelector('#shop2DOverlay');
    if (!el) return;
    el.hidden = false;
    document.body.classList.add('modal-open');
    app.renderShop2D?.();
  };

  app.closeShop2D = function() {
    const el = document.querySelector('#shop2DOverlay');
    if (el) {
      el.hidden = true;
      document.body.classList.remove('modal-open');
    }
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
    currentCat = cat;
    grid.innerHTML = '';
    const filtered = cat === 'all' ? SHOP_ITEMS : SHOP_ITEMS.filter(it => it.cat === cat);
    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'shop-card';
      const thumb = app.shopThumbnails[item.key] || getProductThumbnail(item.key);

      card.innerHTML = `
        <div class="shop-card-badge-wrap">${item.badge ? `<span class="shop-badge">${item.badge}</span>` : '<span></span>'}</div>
        <div class="shop-thumb-3d-wrap"><img src="${thumb}" alt="${item.name}" class="shop-thumb-3d-img" /></div>
        <div class="shop-card-body">
          <h3 class="shop-card-title">${item.name}</h3>
          <p class="shop-card-desc">${item.desc}</p>
          <div class="shop-card-meta"><span class="shop-card-dim">${item.dim}</span><span class="shop-card-price">${item.price}</span></div>
        </div>
        <button type="button" class="shop-card-btn primary" data-product="${item.key}">Personnaliser cet objet</button>
      `;
      card.onclick = () => {
        app.switchToProduct(item.key);
        app.closeShop2D();
      };
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
  document.querySelector('#shopGoShowcaseBtn')?.addEventListener('click', () => {
    app.closeShop2D();
    app.switchToProduct('showcase');
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) app.closeShop2D(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && !overlay.hidden) app.closeShop2D(); });
}
