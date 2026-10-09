import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import maleTshirtUrl from '../mockup/male_crew_neck_worn_v1_no_tag_517_YEE.obj?url';
import femaleLayingUrl from '../mockup/female_crew_neck_laying_CSEXX1.obj?url';
import femaleHangingUrl from '../mockup/female_crew_neck_hanging_tag_CEFQZV.obj?url';
import baseballHatUrl from '../mockup/baseball_hat_028.obj?url';

const loader = new OBJLoader();
const cache = new Map();

async function loadObjGeometry(url) {
  if (cache.has(url)) return cache.get(url).clone();
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      obj => {
        cache.set(url, obj);
        resolve(obj.clone());
      },
      undefined,
      err => reject(err)
    );
  });
}

function createObjProductConfig({ id, name, dimensions, icon, url, printArea, modelTransform }) {
  return {
    id,
    name,
    dimensions,
    icon,
    create() {
      const group = new THREE.Group();

      const fabricMaterial = new THREE.MeshStandardMaterial({
        color: 0xf8f9fa,
        roughness: 0.82,
        metalness: 0.04,
        side: THREE.DoubleSide
      });

      const printMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.75,
        metalness: 0,
        transparent: true,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -2,
        side: THREE.DoubleSide
      });

      // Création de la zone d'impression (poitrine / face avant / front casquette)
      const pw = printArea.width || 1.6;
      const ph = printArea.height || 2.0;
      let printGeo;
      if (typeof printArea.customGeometry === 'function') {
        printGeo = printArea.customGeometry();
      } else {
        printGeo = new THREE.PlaneGeometry(pw, ph, 24, 24);
        if (printArea.curve) {
          const pos = printGeo.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const px = pos.getX(i);
            pos.setZ(i, -Math.pow(px / pw, 2) * printArea.curve);
          }
          printGeo.computeVertexNormals();
        }
      }

      const printMesh = new THREE.Mesh(printGeo, printMaterial);
      printMesh.position.set(printArea.x || 0, printArea.y || 0.35, printArea.z || 0.38);
      if (printArea.rotX) printMesh.rotation.x = printArea.rotX;
      if (printArea.rotY) printMesh.rotation.y = printArea.rotY;
      printMesh.receiveShadow = true;
      group.add(printMesh);

      // Chargement asynchrone du modèle OBJ photoréaliste
      loadObjGeometry(url).then(obj => {
        // Appliquer le matériau tissu à tous les meshes du modèle
        obj.traverse(child => {
          if (child.isMesh) {
            child.material = fabricMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Calcul et centrage de la bounding box
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Normalisation d'échelle
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = (modelTransform.targetSize || 3.2) / maxDim;
        obj.scale.setScalar(targetScale);

        // Centrage
        obj.position.x = -center.x * targetScale + (modelTransform.offsetX || 0);
        obj.position.y = -center.y * targetScale + (modelTransform.offsetY || 0);
        obj.position.z = -center.z * targetScale + (modelTransform.offsetZ || 0);

        if (modelTransform.rotX) obj.rotation.x = modelTransform.rotX;
        if (modelTransform.rotY) obj.rotation.y = modelTransform.rotY;
        if (modelTransform.rotZ) obj.rotation.z = modelTransform.rotZ;

        group.add(obj);
      }).catch(err => {
        console.error('Erreur chargement OBJ:', err);
      });

      return {
        group,
        topMaterial: printMaterial,
        baseMaterial: fabricMaterial,
        printMesh,
        printAspect: pw / ph,
        type: 'flat'
      };
    }
  };
}

// 1. T-shirt Homme porté 3D (photoréaliste sur torse)
export const maleTshirtProduct = createObjProductConfig({
  id: 'tshirt-male-worn',
  name: 'T-shirt homme porté 3D',
  dimensions: 'Taille L (Poitrine 280 × 350 mm)',
  icon: '👕',
  url: maleTshirtUrl,
  printArea: {
    width: 1.45,
    height: 1.85,
    x: 0,
    y: 0.32,
    z: 0.35,
    curve: 0.04
  },
  modelTransform: {
    targetSize: 3.6,
    offsetY: 0.28,
    rotY: 0
  }
});

// 2. T-shirt à plat couché 3D (laying)
export const femaleLayingTshirtProduct = createObjProductConfig({
  id: 'tshirt-female-laying',
  name: 'T-shirt à plat couché 3D',
  dimensions: 'Taille M (Impression 280 × 350 mm)',
  icon: '👕',
  url: femaleLayingUrl,
  printArea: {
    width: 1.45,
    height: 1.85,
    x: 0,
    y: 0.08,
    z: -0.05,
    rotX: -Math.PI / 2
  },
  modelTransform: {
    targetSize: 3.6,
    offsetY: 0,
    rotY: 0
  }
});

// 3. T-shirt femme suspendu sur cintre 3D (hanging)
export const femaleHangingTshirtProduct = createObjProductConfig({
  id: 'tshirt-female-hanging',
  name: 'T-shirt femme sur cintre 3D',
  dimensions: 'Taille M (Poitrine 280 × 350 mm)',
  icon: '👕',
  url: femaleHangingUrl,
  printArea: {
    width: 1.35,
    height: 1.75,
    x: 0,
    y: 0.22,
    z: 0.32,
    curve: 0.03
  },
  modelTransform: {
    targetSize: 3.6,
    offsetY: 0.2,
    rotY: 0
  }
});

// 4. Casquette de baseball 3D
export const baseballHatProduct = createObjProductConfig({
  id: 'baseball-hat',
  name: 'Casquette de baseball 3D',
  dimensions: 'Taille unique (Front 120 × 70 mm)',
  icon: '🧢',
  url: baseballHatUrl,
  printArea: {
    width: 1.2,
    height: 0.7,
    x: 0,
    y: 0.35,
    z: 0.85,
    curve: 0.06
  },
  modelTransform: {
    targetSize: 2.5,
    offsetY: 0.1,
    rotY: 0
  }
});
