// Générateur de visuels haute définition pour les objets de la boutique 2D

const svgWrap = (content, viewBox = '0 0 200 200') =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%">
      <defs>
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0f172a" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="whiteMat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="ceramicShine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#cbd5e1"/>
          <stop offset="25%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
        <linearGradient id="metalChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="40%" stop-color="#f8fafc"/>
          <stop offset="70%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="corkMat" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
      </defs>
      ${content}
    </svg>`
  )}`;

const ICONS_SVG = {
  mug11oz: svgWrap(`
    <ellipse cx="95" cy="172" rx="48" ry="12" fill="url(#shadowGrad)"/>
    <path d="M125 78 C158 78 158 140 125 140" fill="none" stroke="url(#ceramicShine)" stroke-width="14" stroke-linecap="round"/>
    <path d="M60 62 L60 150 C60 168 130 168 130 150 L130 62 Z" fill="url(#ceramicShine)"/>
    <ellipse cx="95" cy="62" rx="35" ry="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <ellipse cx="95" cy="62" rx="30" ry="8" fill="#291810"/>
    <ellipse cx="95" cy="62" rx="27" ry="6" fill="#1b0e07"/>
  `),
  tshirt3D: svgWrap(`
    <ellipse cx="100" cy="180" rx="55" ry="10" fill="url(#shadowGrad)"/>
    <path d="M72 40 Q100 55 128 40 L165 62 L145 92 L132 84 L132 168 Q100 174 68 168 L68 84 L55 92 L35 62 Z" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <path d="M72 40 Q100 56 128 40 Q100 48 72 40 Z" fill="#e2e8f0"/>
    <path d="M68 84 L132 84" stroke="#f1f5f9" stroke-width="1.5" stroke-dasharray="3,3"/>
  `),
  photoFrame: svgWrap(`
    <ellipse cx="100" cy="182" rx="52" ry="9" fill="url(#shadowGrad)"/>
    <polygon points="94,115 106,115 115,178 85,178" fill="#cbd5e1"/>
    <rect x="58" y="32" width="84" height="124" rx="2" fill="url(#whiteMat)" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="62" y="36" width="76" height="116" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <line x1="68" y1="50" x2="110" y2="50" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
    <line x1="68" y1="58" x2="132" y2="58" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
  `),
  poster: svgWrap(`
    <ellipse cx="100" cy="178" rx="60" ry="8" fill="url(#shadowGrad)"/>
    <rect x="42" y="44" width="116" height="88" rx="3" fill="url(#whiteMat)" stroke="#64748b" stroke-width="2"/>
    <rect x="46" y="48" width="108" height="80" fill="#f8fafc"/>
    <polygon points="46,128 78,88 102,112 120,94 154,128" fill="#e2e8f0"/>
    <circle cx="70" cy="68" r="8" fill="#cbd5e1"/>
  `),
  cushion: svgWrap(`
    <ellipse cx="100" cy="176" rx="54" ry="11" fill="url(#shadowGrad)"/>
    <rect x="52" y="52" width="96" height="96" rx="20" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2.5"/>
    <path d="M52 100 Q100 108 148 100" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
    <circle cx="100" cy="100" r="4" fill="#cbd5e1"/>
  `),
  cap: svgWrap(`
    <ellipse cx="100" cy="168" rx="60" ry="12" fill="url(#shadowGrad)"/>
    <path d="M54 116 C54 62 146 62 146 116 Z" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <ellipse cx="112" cy="126" rx="52" ry="16" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="100" cy="62" r="4" fill="#94a3b8"/>
  `),
  mousePad: svgWrap(`
    <ellipse cx="100" cy="170" rx="66" ry="12" fill="url(#shadowGrad)"/>
    <rect x="36" y="66" width="128" height="96" rx="14" fill="#0f172a"/>
    <rect x="36" y="62" width="128" height="96" rx="14" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="1.5"/>
  `),
  puzzle: svgWrap(`
    <ellipse cx="100" cy="172" rx="62" ry="10" fill="url(#shadowGrad)"/>
    <rect x="42" y="56" width="116" height="88" rx="6" fill="url(#whiteMat)" stroke="#94a3b8" stroke-width="2"/>
    <line x1="42" y1="85" x2="158" y2="85" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="14,6,4,6"/>
    <line x1="42" y1="115" x2="158" y2="115" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="8,6,8,6"/>
    <line x1="80" y1="56" x2="80" y2="144" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="10,6,6,6"/>
    <line x1="120" y1="56" x2="120" y2="144" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6,6,12,6"/>
  `),
  pencilCase: svgWrap(`
    <ellipse cx="100" cy="168" rx="64" ry="10" fill="url(#shadowGrad)"/>
    <rect x="38" y="78" width="124" height="66" rx="12" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="46" y1="78" x2="154" y2="78" stroke="#64748b" stroke-width="4"/>
    <circle cx="145" cy="78" r="5" fill="url(#metalChrome)"/>
  `),
  coaster: svgWrap(`
    <ellipse cx="100" cy="166" rx="55" ry="11" fill="url(#shadowGrad)"/>
    <rect x="52" y="66" width="96" height="96" rx="12" fill="url(#corkMat)"/>
    <rect x="52" y="62" width="96" height="96" rx="12" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="1.5"/>
  `),
  coasterRound: svgWrap(`
    <ellipse cx="100" cy="168" rx="55" ry="12" fill="url(#shadowGrad)"/>
    <ellipse cx="100" cy="114" rx="50" ry="50" fill="url(#corkMat)"/>
    <ellipse cx="100" cy="110" rx="50" ry="50" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="1.5"/>
  `),
  keychainRect: svgWrap(`
    <ellipse cx="100" cy="178" rx="40" ry="8" fill="url(#shadowGrad)"/>
    <circle cx="100" cy="46" r="14" fill="none" stroke="url(#metalChrome)" stroke-width="3"/>
    <circle cx="100" cy="64" r="5" fill="none" stroke="url(#metalChrome)" stroke-width="2.5"/>
    <rect x="68" y="74" width="64" height="94" rx="8" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="100" cy="84" r="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  `),
  keychainRound: svgWrap(`
    <ellipse cx="100" cy="178" rx="42" ry="8" fill="url(#shadowGrad)"/>
    <circle cx="100" cy="46" r="14" fill="none" stroke="url(#metalChrome)" stroke-width="3"/>
    <circle cx="100" cy="64" r="5" fill="none" stroke="url(#metalChrome)" stroke-width="2.5"/>
    <circle cx="100" cy="120" r="46" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="100" cy="82" r="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  `),
  keychainHeart: svgWrap(`
    <ellipse cx="100" cy="178" rx="45" ry="8" fill="url(#shadowGrad)"/>
    <circle cx="100" cy="44" r="14" fill="none" stroke="url(#metalChrome)" stroke-width="3"/>
    <circle cx="100" cy="62" r="5" fill="none" stroke="url(#metalChrome)" stroke-width="2.5"/>
    <path d="M100 84 C76 56 46 84 68 116 L100 156 L132 116 C154 84 124 56 100 84 Z" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="2"/>
    <circle cx="100" cy="84" r="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  `),
  eventWristband: svgWrap(`
    <ellipse cx="100" cy="168" rx="60" ry="10" fill="url(#shadowGrad)"/>
    <path d="M42 120 C42 70 158 70 158 120 L158 136 C158 86 42 86 42 136 Z" fill="url(#whiteMat)" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect x="92" y="96" width="16" height="24" rx="4" fill="#0f172a"/>
  `),
  arcadeCabinet: svgWrap(`
    <ellipse cx="100" cy="184" rx="46" ry="9" fill="url(#shadowGrad)"/>
    <polygon points="68,26 132,26 138,46 130,172 70,172 62,46" fill="#111827" stroke="#374151" stroke-width="2"/>
    <rect x="74" y="32" width="52" height="16" rx="2" fill="#38bdf8"/>
    <text x="100" y="44" font-family="sans-serif" font-weight="900" font-size="9" fill="#ffffff" text-anchor="middle">ARCADE</text>
    <polygon points="74,56 126,56 122,106 78,106" fill="#030712" stroke="#1f2937" stroke-width="1"/>
    <polygon points="76,60 124,60 120,102 80,102" fill="#1e1b4b"/>
    <rect x="72" y="112" width="56" height="18" fill="#1f2937" stroke="#374151"/>
    <circle cx="86" cy="120" r="4" fill="#ef4444"/>
    <line x1="86" y1="120" x2="86" y2="114" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="106" cy="118" r="3" fill="#3b82f6"/>
    <circle cx="114" cy="122" r="3" fill="#10b981"/>
    <rect x="80" y="136" width="40" height="32" rx="2" fill="#1f2937" stroke="#374151"/>
    <rect x="94" y="142" width="12" height="4" fill="#e2e8f0"/>
  `)
};

export function getProductThumbnail(key) {
  return ICONS_SVG[key] || ICONS_SVG.mug11oz;
}
