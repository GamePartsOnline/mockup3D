import * as THREE from 'three';

export const mug11ozProduct = {
  id: 'mug-11oz', name: 'Mug blanc 11 oz', dimensions: 'Ø 82 × 95 mm',
  create() {
    const group = new THREE.Group();
    const printMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .18, clearcoat: .45, clearcoatRoughness: .16 });
    const ceramic = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .16, clearcoat: .5, clearcoatRoughness: .14 });
    const handleMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .16, clearcoat: .5, clearcoatRoughness: .14 });
    const innerMaterial = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: .2, clearcoat: .4, clearcoatRoughness: .18 });
    const thetaLength = (210 / 257.6) * Math.PI * 2;
    const bodyGap = Math.PI * 2 - thetaLength;
    // Zone d'impression (wrap 210 mm) : démarre à +bodyGap / 2 (départ wrap au repère rouge côté anse)
    // et fait tout le tour du mug (thetaLength) pour s'arrêter à -bodyGap / 2.
    const bodyGeometry = new THREE.CylinderGeometry(.7, .7, 1.76, 96, 1, false, bodyGap / 2, thetaLength);
    const body = new THREE.Mesh(bodyGeometry, [printMaterial, ceramic, ceramic]); body.castShadow = true; body.receiveShadow = true; group.add(body);
    // Zone céramique sans impression (bodyGap) : centrée sur l'anse à theta = 0 (axe Z > 0, X = 0).
    const bodyBackGeometry = new THREE.CylinderGeometry(.7, .7, 1.76, 32, 1, false, -bodyGap / 2, bodyGap);
    const bodyBack = new THREE.Mesh(bodyBackGeometry, ceramic); bodyBack.castShadow = true; bodyBack.receiveShadow = true; group.add(bodyBack);
    const inside = new THREE.Mesh(new THREE.CylinderGeometry(.62, .62, .1, 96), innerMaterial); inside.position.y = .79; group.add(inside);
    const coffee = new THREE.Mesh(new THREE.CylinderGeometry(.595, .595, .025, 96), new THREE.MeshPhysicalMaterial({ color: 0x32180d, roughness: .3, clearcoat: .35, clearcoatRoughness: .22, transparent: false }));
    coffee.position.y = .855; coffee.receiveShadow = true; group.add(coffee);
    // L'anse est centrée sur l'axe (X = 0, Z > 0), exactement au milieu de la zone céramique blanche (les deux points rouges).
    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, .58, .62), new THREE.Vector3(0, .58, 1.08), new THREE.Vector3(0, .3, 1.28),
      new THREE.Vector3(0, -.3, 1.28), new THREE.Vector3(0, -.58, 1.08), new THREE.Vector3(0, -.58, .62)
    ]);
    const handle = new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 64, .105, 20, false), handleMaterial); handle.castShadow = true; group.add(handle);
    group.position.y = .82;
    return { group, topMaterial: printMaterial, baseMaterial: ceramic, handleMaterial, innerMaterial, printMesh: body, printAspect: 210 / 95, type: 'wrap' };
  }
};
