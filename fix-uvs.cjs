const fs = require('fs');

const fixProduct = (file, widthVar) => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Clean up any bad replacements
  content = content.replace(/if \(pz < 0\) \{ u = .*? if \(false\) \{/g, 'if (pz < 0) {');
  
  // Replace the old UV mapping for pz < 0 with the twoSided approach
  const search = `if (pz < 0) {\n             u = (-px + ${widthVar}) / ${widthVar.includes('2 *') ? widthVar : (widthVar.includes('size.x') ? 'size.x' : 'w')};\n        }`;
  
  const widthDenom = widthVar.includes('2 *') ? '(2 * r)' : (widthVar.includes('size.x') ? 'size.x' : 'w');
  const replace = `if (pz < 0) {\n             u = (-px + ${widthVar}) / ${widthDenom};\n             u = u * 0.5 + 0.5;\n        } else {\n             u = u * 0.5;\n        }`;
  
  // Specific fix for tshirtTechno where it was `0.20) / 0.40`
  if (file.includes('tshirtTechno')) {
    content = content.replace(/if \(pz < 0\) \{\n             u = \(-px \+ 0\.20\) \/ 0\.40;\n        \}/g, `if (pz < 0) {\n             u = (-px + 0.20) / 0.40;\n             u = u * 0.5 + 0.5;\n        } else {\n             u = u * 0.5;\n        }`);
  } else {
    content = content.replace(search, replace);
  }

  if (!content.includes('twoSided: true')) {
     content = content.replace(/type: 'flat'/g, "type: 'flat', twoSided: true");
  }
  
  fs.writeFileSync(file, content);
};

fixProduct('src/products/keychainRect.js', 'w / 2');
fixProduct('src/products/keychainRound.js', 'r');
fixProduct('src/products/keychainHeart.js', 'size.x/2');
fixProduct('src/products/tshirtTechno.js', '0.20');
