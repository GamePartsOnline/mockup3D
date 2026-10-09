const fs = require('fs');

let mainJs = fs.readFileSync('src/main.js', 'utf8');

// 1. Update image object to have side property
mainJs = mainJs.replace(/fitMode: 'cover'/g, "fitMode: 'cover',\n          side: 'both'");

// 2. Add side dropdown in UI
mainJs = mainJs.replace(
  /const info = document\.createElement\('div'\);\s*info\.className = 'image-item-info';\s*info\.innerHTML = `(.*?)`;/s,
  `const info = document.createElement('div');
    info.className = 'image-item-info';
    info.innerHTML = \`$1\`;
    const sideSelect = document.createElement('select');
    sideSelect.className = 'layer-side-select';
    sideSelect.innerHTML = '<option value="both">Deux faces</option><option value="A">Face A</option><option value="B">Face B</option>';
    sideSelect.value = item.side || 'both';
    sideSelect.onclick = e => e.stopPropagation();
    sideSelect.onchange = e => { item.side = e.target.value; buildTexture(); };
    info.append(sideSelect);`
);

// 3. Update buildTexture
const oldBuildTexture = `  const canvas = document.createElement('canvas'); canvas.width = 1600; canvas.height = Math.round(1600 / product.printAspect);
  const ctx = canvas.getContext('2d'); ctx.fillStyle = surfaceColor; ctx.fillRect(0, 0, canvas.width, canvas.height);`;

const newBuildTexture = `  const isTwoSided = !!product.twoSided;
  const canvas = document.createElement('canvas'); 
  canvas.width = isTwoSided ? 3200 : 1600; 
  canvas.height = Math.round(1600 / product.printAspect);
  const ctx = canvas.getContext('2d'); ctx.fillStyle = surfaceColor; ctx.fillRect(0, 0, canvas.width, canvas.height);`;

mainJs = mainJs.replace(oldBuildTexture, newBuildTexture);

const oldDrawImages = `  imagesList.forEach(item => {
    if (!item.img) return;
    const sx = item.scaleX ?? item.scale ?? 1;
    const sy = item.scaleY ?? item.scale ?? 1;
    const imageRatio = item.img.width / item.img.height;
    const surfaceRatio = canvas.width / canvas.height;
    let w, h;
    if (item.fitMode === 'fill') {
      w = canvas.width;
      h = canvas.height;
    } else if ((item.fitMode === 'contain') === (imageRatio > surfaceRatio)) {
      w = canvas.width;
      h = w / imageRatio;
    } else {
      h = canvas.height;
      w = h * imageRatio;
    }
    w *= sx;
    h *= sy;
    const x = canvas.width / 2 + item.x * canvas.width * 0.5;
    const y = canvas.height / 2 - item.y * canvas.height * 0.5;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-item.rotation * Math.PI / 180);
    ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
    ctx.restore();
  });`;

const newDrawImages = `  imagesList.forEach(item => {
    if (!item.img) return;
    const sx = item.scaleX ?? item.scale ?? 1;
    const sy = item.scaleY ?? item.scale ?? 1;
    const imageRatio = item.img.width / item.img.height;
    const singleWidth = isTwoSided ? 1600 : canvas.width;
    const surfaceRatio = singleWidth / canvas.height;
    
    let w, h;
    if (item.fitMode === 'fill') {
      w = singleWidth;
      h = canvas.height;
    } else if ((item.fitMode === 'contain') === (imageRatio > surfaceRatio)) {
      w = singleWidth;
      h = w / imageRatio;
    } else {
      h = canvas.height;
      w = h * imageRatio;
    }
    w *= sx;
    h *= sy;
    
    const sides = !isTwoSided ? [0] : (item.side === 'A' ? [0] : (item.side === 'B' ? [1] : [0, 1]));
    
    sides.forEach(sideIndex => {
        const xOffset = sideIndex * 1600;
        const x = xOffset + singleWidth / 2 + item.x * singleWidth * 0.5;
        const y = canvas.height / 2 - item.y * canvas.height * 0.5;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-item.rotation * Math.PI / 180);
        ctx.drawImage(item.img, -w / 2, -h / 2, w, h);
        ctx.restore();
    });
  });`;

mainJs = mainJs.replace(oldDrawImages, newDrawImages);

fs.writeFileSync('src/main.js', mainJs);
