import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';

import objUrl from '../mockup/male_crew_neck_worn_v1_no_tag_517_YEE.obj?url';

const PRINT_ASPECT = 210 / 297;
const loader = new OBJLoader();
let cachedTshirtGeometry = null;

export const tshirt3DProduct = {
  id: 'tshirt-3d',
  name: 'T-shirt 3D (Dos, Cœur, Ventre)',
  dimensions: 'S, M, L, XL',
  printable: [210, 297],
  icon: '👕',
  printAspect: PRINT_ASPECT,
  create() {
    const group = new THREE.Group();
    const decalsGroup = new THREE.Group();

    let isLoaded = false;
    let pendingTexture = null;
    let printOrientation = 'portrait';

    const fabricMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.05
    });

    const decalMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.1,
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
      const mesh = new THREE.Mesh(geo, fabricMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.userData.mainMesh = mesh;
      group.add(mesh);
      mesh.add(decalsGroup);
      isLoaded = true;
      if (pendingTexture) {
        applyDecals(pendingTexture.texture, pendingTexture.isTwoSided, pendingTexture.canvas, pendingTexture.heartTexture);
        pendingTexture = null;
      }
    };

    if (cachedTshirtGeometry) {
      setupGeometry(cachedTshirtGeometry);
    } else {
      loader.load(objUrl, (obj) => {
        let foundGeo = null;
        obj.traverse((child) => {
          if (child.isMesh && !foundGeo) {
            const g = child.geometry.clone();
            g.scale(0.01, 0.01, 0.01);
            g.translate(0, -0.1, 0);
            g.computeVertexNormals();
            g.computeBoundingBox();
            g.computeBoundingSphere();
            foundGeo = g;
          }
        });
        if (foundGeo) {
          cachedTshirtGeometry = foundGeo;
          setupGeometry(foundGeo);
        }
      }, undefined, (error) => {
        console.error('Erreur de chargement du modèle T-Shirt:', error);
      });
    }

    function clearDecals() {
      pendingTexture = null;
      while (decalsGroup.children.length > 0) {
        const child = decalsGroup.children[0];
        decalsGroup.remove(child);
        child.geometry?.dispose();
        if (child.material?.userData?.ownsTexture) child.material.map?.dispose();
        child.material?.dispose();
      }
    }

    function applyDecals(texture, isTwoSided, canvas, heartTexture) {
      if (!isLoaded || !group.userData.mainMesh) {
        pendingTexture = { texture, isTwoSided, canvas, heartTexture };
        return;
      }
      clearDecals();

      const mainMesh = group.userData.mainMesh;
      if (!decalsGroup.parent) mainMesh.add(decalsGroup);

      const decalTex = canvas ? new THREE.CanvasTexture(canvas) : texture;
      if (canvas) decalTex.colorSpace = THREE.SRGBColorSpace;

      const frontMat = decalMaterial.clone();
      frontMat.map = decalTex;
      frontMat.userData = { ownsTexture: !!canvas };
      frontMat.needsUpdate = true;

      const backMat = decalMaterial.clone();
      backMat.map = decalTex;
      backMat.needsUpdate = true;

      const localTarget = new THREE.Mesh(mainMesh.geometry);
      if (!mainMesh.geometry.boundingBox) mainMesh.geometry.computeBoundingBox();
      const box = mainMesh.geometry.boundingBox;
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Keep the print on the torso, below the collar and above the hem.
      // The projector depth stops at the shirt midpoint, so each face stays independent.
      const projHeight = Math.min(printOrientation === 'landscape' ? 0.210 : 0.297, size.y * 0.45);
      const projWidth = Math.min(printOrientation === 'landscape' ? 0.297 : 0.210, size.x * 0.8);
      const printCenterY = box.min.y + size.y * 0.55;
      const projDepth = size.z * 0.7;

      const pFront = new THREE.Vector3(center.x, printCenterY, box.max.z + 0.005);
      const oFront = new THREE.Euler(0, 0, 0);
      const sFront = new THREE.Vector3(projWidth, projHeight, projDepth);

      const pBack = new THREE.Vector3(center.x, printCenterY, box.min.z - 0.005);
      const oBack = new THREE.Euler(0, Math.PI, 0);
      const sBack = new THREE.Vector3(projWidth, projHeight, projDepth);

      try {
          const frontGeometry = new DecalGeometry(localTarget, pFront, oFront, sFront);
          // Ajuster les UVs pour la face avant (moitié gauche de la texture)
          if (isTwoSided) {
              const uv = frontGeometry.attributes.uv;
              for (let i = 0; i < uv.count; i++) {
                  uv.setX(i, uv.getX(i) * 0.5);
              }
          }
          const frontMesh = new THREE.Mesh(frontGeometry, frontMat);
          decalsGroup.add(frontMesh);

          if (isTwoSided) {
              const backGeometry = new DecalGeometry(localTarget, pBack, oBack, sBack);
              // Ajuster les UVs pour la face arrière (moitié droite de la texture)
              const uv = backGeometry.attributes.uv;
              for (let i = 0; i < uv.count; i++) {
                  uv.setX(i, uv.getX(i) * 0.5 + 0.5);
              }
              const backMesh = new THREE.Mesh(backGeometry, backMat);
              decalsGroup.add(backMesh);
          }
          if (heartTexture) {
              const heartPosition = new THREE.Vector3(
                center.x + size.x * 0.23,
                box.min.y + size.y * 0.75,
                box.max.z + 0.005
              );
              const heartGeometry = new DecalGeometry(
                localTarget, heartPosition, oFront,
                new THREE.Vector3(0.09, 0.09, projDepth)
              );
              const heartMaterial = decalMaterial.clone();
              heartMaterial.map = heartTexture;
              heartMaterial.needsUpdate = true;
              decalsGroup.add(new THREE.Mesh(heartGeometry, heartMaterial));
          }
      } catch (e) {
          console.error("Erreur Decal:", e);
      }
    }

    const product = {
      group,
      topMaterial: fabricMaterial,
      applyDecals,
      clearDecals,
      type: '3d-decal',
      printAspect: PRINT_ASPECT,
      printable: [210, 297],
      twoSided: true,
      setPrintOrientation(value) {
        printOrientation = value === 'landscape' ? 'landscape' : 'portrait';
        product.printable = printOrientation === 'landscape' ? [297, 210] : [210, 297];
        product.printAspect = product.printable[0] / product.printable[1];
      }
    };
    return product;
  }
};
