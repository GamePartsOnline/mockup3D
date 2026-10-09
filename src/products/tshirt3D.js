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
      alphaTest: 0.01
    });

    const loader = new OBJLoader();
    loader.load(objUrl, (obj) => {
      obj.traverse((child) => {
        if (child.isMesh) {
          // Décisif pour DecalGeometry: il FAUT des normales
          if (!child.geometry.attributes.normal) {
              child.geometry.computeVertexNormals();
          }
          // Appliquer l'échelle et la position directement sur la géométrie
          // pour éviter les problèmes de matrice avec DecalGeometry
          child.geometry.scale(0.01, 0.01, 0.01);
          child.geometry.translate(0, -0.5, 0);
          child.geometry.computeVertexNormals(); // RECOMPUTE HERE
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
      
      // Cleanup
      while(decalsGroup.children.length > 0) {
          const child = decalsGroup.children[0];
          decalsGroup.remove(child);
          child.geometry?.dispose();
      }

      const mainMesh = group.userData.mainMesh;
      if (!decalsGroup.parent) {
          mainMesh.add(decalsGroup);
      }
      
      // Utiliser la texture passée ou bien configurer le nouveau CanvasTexture
      const frontTex = new THREE.CanvasTexture(canvas);
      frontTex.colorSpace = THREE.SRGBColorSpace;
      frontTex.anisotropy = 4;
      const backTex = new THREE.CanvasTexture(canvas);
      backTex.colorSpace = THREE.SRGBColorSpace;
      backTex.anisotropy = 4;

      if (isTwoSided) {
          frontTex.repeat.set(0.5, 1);
          frontTex.offset.set(0, 0);
          backTex.repeat.set(0.5, 1);
          backTex.offset.set(0.5, 0);
      }
      
      const frontMat = decalMaterial.clone();
      frontMat.map = frontTex;
      
      const backMat = decalMaterial.clone();
      backMat.map = backTex;
      
      // Indispensable : mettre à jour la matrice monde du GROUPE PARENT
      // pour que le scale(0.01) redescende jusqu'au mainMesh avant DecalGeometry !
      group.updateMatrixWorld(true);

      const box = new THREE.Box3().setFromObject(mainMesh);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Pour projeter sur l'avant (normales vers +Z), orientation à 0,0,0
      const pFront = center.clone();
      const oFront = new THREE.Euler(0, 0, 0); 
      // Réduire la profondeur Z pour ne pas traverser jusqu'au dos
      const sFront = new THREE.Vector3(size.x * 0.5, size.y * 0.7, size.z * 1.2);

      // Pour l'arrière (normales vers -Z), on tourne de 180°
      const pBack = center.clone();
      const oBack = new THREE.Euler(0, Math.PI, 0);
      const sBack = new THREE.Vector3(size.x * 0.5, size.y * 0.7, size.z * 1.2);

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
