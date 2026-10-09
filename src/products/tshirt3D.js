import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';

import objUrl from '../mockup/male_crew_neck_worn_v1_no_tag_517_YEE.obj?url';

export const tshirt3DProduct = {
  id: 'tshirt-3d', 
  name: 'T-shirt 3D (Dos, Cœur, Ventre)', 
  dimensions: 'S, M, L, XL', 
  printable: [40, 70],
  icon: '👕',
  printAspect: 40 / 70,
  create() {
    const group = new THREE.Group();
    const decalsGroup = new THREE.Group();
    
    let isLoaded = false;
    let pendingTexture = null;

    const fabricMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, 
      roughness: 0.9, 
      metalness: 0.05 
    });

    const decalMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
      alphaTest: 0.05
    });

    const loader = new OBJLoader();
    loader.load(objUrl, (obj) => {
      obj.traverse((child) => {
        if (child.isMesh) {
          if (!child.geometry.attributes.normal) {
              child.geometry.computeVertexNormals();
          }
          child.geometry.scale(0.01, 0.01, 0.01);
          child.geometry.translate(0, -0.1, 0); // Remonter le t-shirt
          child.geometry.computeVertexNormals();
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
          
          child.material = fabricMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
          group.userData.mainMesh = child;
        }
      });
      group.add(obj);
      isLoaded = true;
      if (pendingTexture) {
         applyDecals(pendingTexture.texture, pendingTexture.isTwoSided, pendingTexture.canvas);
         pendingTexture = null;
      }
    }, undefined, (error) => {
      console.error('Erreur de chargement du modèle T-Shirt:', error);
    });

    function applyDecals(texture, isTwoSided, canvas) {
      if (!isLoaded || !group.userData.mainMesh) {
          pendingTexture = { texture, isTwoSided, canvas };
          return;
      }
      
      while(decalsGroup.children.length > 0) {
          const child = decalsGroup.children[0];
          decalsGroup.remove(child);
          child.geometry?.dispose();
      }

      const mainMesh = group.userData.mainMesh;
      if (!decalsGroup.parent) {
          mainMesh.add(decalsGroup);
      }
      
      const frontTex = new THREE.CanvasTexture(canvas);
      frontTex.colorSpace = THREE.SRGBColorSpace;
      frontTex.needsUpdate = true;
      
      const backTex = new THREE.CanvasTexture(canvas);
      backTex.colorSpace = THREE.SRGBColorSpace;
      backTex.needsUpdate = true;

      if (isTwoSided) {
          frontTex.repeat.set(0.5, 1);
          frontTex.offset.set(0, 0);
          backTex.repeat.set(0.5, 1);
          backTex.offset.set(0.5, 0);
      }
      
      const frontMat = decalMaterial.clone();
      frontMat.map = frontTex;
      frontMat.transparent = true;
      frontMat.alphaTest = 0.05;
      
      const backMat = decalMaterial.clone();
      backMat.map = backTex;
      backMat.transparent = true;
      backMat.alphaTest = 0.05;
      
      group.updateMatrixWorld(true);

      const box = new THREE.Box3().setFromObject(mainMesh);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const projHeight = size.y * 0.85;
      const projWidth = projHeight * (40 / 70); // Match printAspect

      const pFront = center.clone();
      pFront.z += size.z * 0.5; // Placer le projecteur devant
      const oFront = new THREE.Euler(0, 0, 0); 
      const sFront = new THREE.Vector3(projWidth, projHeight, size.z * 3.0);

      const pBack = center.clone();
      pBack.z -= size.z * 0.5; // Placer le projecteur derrière
      const oBack = new THREE.Euler(0, Math.PI, 0);
      const sBack = new THREE.Vector3(projWidth, projHeight, size.z * 3.0);

      try {
          const frontGeometry = new DecalGeometry(mainMesh, pFront, oFront, sFront);
          const frontMesh = new THREE.Mesh(frontGeometry, frontMat);
          decalsGroup.add(frontMesh);

          if (isTwoSided) {
              const backGeometry = new DecalGeometry(mainMesh, pBack, oBack, sBack);
              const backMesh = new THREE.Mesh(backGeometry, backMat);
              decalsGroup.add(backMesh);
          }
      } catch (e) {
          console.error("Erreur Decal:", e);
      }
    }
    
    return { 
      group, 
      topMaterial: fabricMaterial, 
      applyDecals,
      type: '3d-decal',
      twoSided: true
    };
  }
};
