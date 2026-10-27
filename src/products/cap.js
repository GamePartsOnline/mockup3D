import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';
import capObjUrl from '../mockup/baseball_hat_028.obj?url';

const PRINT_ASPECT = 120 / 65;
const loader = new OBJLoader();
let cachedCapGeometry = null;

export const capProduct = {
  id: 'cap-3d',
  name: 'Casquette 3D',
  dimensions: 'Taille unique (Front 120 × 65 mm)',
  printable: [120, 65],
  icon: '🧢',
  printAspect: PRINT_ASPECT,
  create() {
    const group = new THREE.Group();
    const decalsGroup = new THREE.Group();
    let isLoaded = false;
    let pendingTexture = null;

    const fabricMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.82,
      metalness: 0.04,
      side: THREE.DoubleSide
    });

    const decalMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.78,
      metalness: 0.05,
      transparent: true,
      premultipliedAlpha: false,
      depthTest: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      alphaTest: 0.01,
      blending: THREE.NormalBlending
    });

    const setupGeometry = (rawGeo) => {
      const geo = rawGeo.clone();
      geo.rotateY(Math.PI / 2);
      geo.scale(0.1, 0.1, 0.1);
      geo.translate(0, -0.08, -0.15);
      geo.computeVertexNormals();
      geo.computeBoundingBox();
      geo.computeBoundingSphere();

      const mesh = new THREE.Mesh(geo, fabricMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.userData.mainMesh = mesh;
      group.add(mesh);
      mesh.add(decalsGroup);
      isLoaded = true;

      if (pendingTexture) {
        applyDecals(pendingTexture.texture);
        pendingTexture = null;
      }
    };

    if (cachedCapGeometry) {
      setupGeometry(cachedCapGeometry);
    } else {
      loader.load(capObjUrl, (obj) => {
        let foundGeo = null;
        obj.traverse((child) => {
          if (child.isMesh && !foundGeo) {
            foundGeo = child.geometry.clone();
          }
        });
        if (foundGeo) {
          cachedCapGeometry = foundGeo;
          setupGeometry(foundGeo);
        }
      }, undefined, (err) => {
        console.error('Erreur chargement Casquette 3D:', err);
      });
    }

    function applyDecals(texture) {
      if (!isLoaded || !group.userData.mainMesh) {
        pendingTexture = { texture };
        return;
      }
      clearDecals();
      if (!texture) return;

      const mainMesh = group.userData.mainMesh;
      const localTarget = new THREE.Mesh(mainMesh.geometry);

      const pFront = new THREE.Vector3(0, 0.62, 0.35);
      const oFront = new THREE.Euler(-0.52, 0, 0);
      const sFront = new THREE.Vector3(0.72, 0.36, 0.55);

      try {
        const decalGeo = new DecalGeometry(localTarget, pFront, oFront, sFront);
        const mat = decalMaterial.clone();
        mat.map = texture;
        mat.needsUpdate = true;
        const decalMesh = new THREE.Mesh(decalGeo, mat);
        decalsGroup.add(decalMesh);
      } catch (err) {
        console.error('Erreur Decal Casquette:', err);
      }
    }

    function clearDecals() {
      pendingTexture = null;
      while (decalsGroup.children.length > 0) {
        const child = decalsGroup.children[0];
        decalsGroup.remove(child);
        child.geometry?.dispose();
        child.material?.dispose();
      }
    }

    return {
      group,
      topMaterial: fabricMaterial,
      baseMaterial: fabricMaterial,
      applyDecals,
      clearDecals,
      type: '3d-decal',
      printAspect: PRINT_ASPECT,
      printable: [120, 65],
      twoSided: false
    };
  }
};
