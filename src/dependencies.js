import './style.css';
import './reference.css';
import './logo.css';
import './direct-edit.css';
import './sidebar-left.css';
import './animation-visible.css';
import './product-select.css';
import './rotation-modes.css';
import './frame-option.css';
import './compact-screen.css';
import './text-tool.css';
import './wrap-preview.css';
import './exports-sidebar.css';
import './interface-modes.css';
import './responsive.css';
import { CanvasTexture, CircleGeometry, Color, DirectionalLight, GridHelper, HemisphereLight, LinearToneMapping, MathUtils, Mesh, PCFSoftShadowMap, PerspectiveCamera, Raycaster, SRGBColorSpace, Scene, ShadowMaterial, Sprite, SpriteMaterial, Vector2, Vector3, WebGLRenderer } from 'three';
const THREE = { CanvasTexture, CircleGeometry, Color, DirectionalLight, GridHelper, HemisphereLight, LinearToneMapping, MathUtils, Mesh, PCFSoftShadowMap, PerspectiveCamera, Raycaster, SRGBColorSpace, Scene, ShadowMaterial, Sprite, SpriteMaterial, Vector2, Vector3, WebGLRenderer };
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ArrayBufferTarget, Muxer } from 'mp4-muxer';
import { mousePadProduct } from './products/mousePad.js';
import { mug11ozProduct } from './products/mug11oz.js';
import { keychainRectProduct } from './products/keychainRect.js';
import { keychainRoundProduct } from './products/keychainRound.js';
import { keychainHeartProduct } from './products/keychainHeart.js';
import { tshirt3DProduct } from './products/tshirt3D.js';
import { puzzleProduct } from './products/puzzle.js';
import { coasterProduct } from './products/coaster.js';
import { coasterRoundProduct } from './products/coasterRound.js';
import { pencilCaseProduct } from './products/pencilCase.js';
import { cushionProduct } from './products/cushion.js';
import { arcadeCabinetProduct } from './products/arcadeCabinet.js';
import { eventWristbandProduct } from './products/eventWristband.js';

export const dependencies = {
  THREE,
  OrbitControls,
  ArrayBufferTarget,
  Muxer,
  mousePadProduct,
  mug11ozProduct,
  keychainRectProduct,
  keychainRoundProduct,
  keychainHeartProduct,
  tshirt3DProduct,
  puzzleProduct,
  coasterProduct,
  coasterRoundProduct,
  pencilCaseProduct,
  cushionProduct,
  arcadeCabinetProduct,
  eventWristbandProduct
};
