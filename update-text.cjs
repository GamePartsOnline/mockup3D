const fs = require('fs');

let mainJs = fs.readFileSync('src/main.js', 'utf8');

// 1. Text rendering logic in buildTexture
const oldTextRender = `    if (hasText) {
      ctx.save();
      const tx = canvas.width / 2 + textParams.x * canvas.width * 0.5;
      const ty = canvas.height / 2 - textParams.y * canvas.height * 0.5;
      ctx.translate(tx, ty);
      ctx.rotate(-textParams.rotation * Math.PI / 180);
      const fontStyle = \`\${textParams.italic ? 'italic ' : ''}\${textParams.bold ? 'bold ' : 'normal '}\${textParams.size}px \${textParams.font}\`;
      ctx.font = fontStyle;
      ctx.fillStyle = textParams.color;
      ctx.textAlign = textParams.align || 'center';
      ctx.textBaseline = 'middle';
      const lines = textParams.text.split('\\n');
      const lineHeight = textParams.size * 1.25;
      const totalBlockHeight = (lines.length - 1) * lineHeight;
      const startY = -totalBlockHeight / 2;
      lines.forEach((line, index) => {
        ctx.fillText(line, 0, startY + index * lineHeight);
      });
      ctx.restore();
    }`;

const newTextRender = `    if (hasText) {
      const singleWidth = isTwoSided ? 1600 : canvas.width;
      const textSides = !isTwoSided ? [0] : (textParams.side === 'A' ? [0] : (textParams.side === 'B' ? [1] : [0, 1]));
      
      textSides.forEach(sideIndex => {
        ctx.save();
        const xOffset = sideIndex * 1600;
        const tx = xOffset + singleWidth / 2 + textParams.x * singleWidth * 0.5;
        const ty = canvas.height / 2 - textParams.y * canvas.height * 0.5;
        ctx.translate(tx, ty);
        ctx.rotate(-textParams.rotation * Math.PI / 180);
        const fontStyle = \`\${textParams.italic ? 'italic ' : ''}\${textParams.bold ? 'bold ' : 'normal '}\${textParams.size}px \${textParams.font}\`;
        ctx.font = fontStyle;
        ctx.fillStyle = textParams.color;
        ctx.textAlign = textParams.align || 'center';
        ctx.textBaseline = 'middle';
        const lines = textParams.text.split('\\n');
        const lineHeight = textParams.size * 1.25;
        const totalBlockHeight = (lines.length - 1) * lineHeight;
        const startY = -totalBlockHeight / 2;
        lines.forEach((line, index) => {
          ctx.fillText(line, 0, startY + index * lineHeight);
        });
        ctx.restore();
      });
    }`;

mainJs = mainJs.replace(oldTextRender, newTextRender);

fs.writeFileSync('src/main.js', mainJs);
