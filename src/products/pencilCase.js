import * as THREE from 'three';

const createPouchHalf = (width, height, segmentsX, segmentsY, isBack = false) => {
  const geo = new THREE.PlaneGeometry(width, height, segmentsX, segmentsY);
  const pos = geo.attributes.position;
  const uvs = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const nx = x / (width / 2);
    const ny = y / (height / 2);
    const bulge = Math.cos(nx * Math.PI / 2) * Math.cos(ny * Math.PI / 2) * 0.05;

    pos.setXYZ(i, x, isBack ? -bulge : bulge, -y);

    const uNorm = uvs.getX(i);
    const vNorm = uvs.getY(i);
    if (!isBack) {
      uvs.setXY(i, uNorm * 0.5, vNorm);
    } else {
      uvs.setXY(i, 1.0 - uNorm * 0.5, vNorm);
    }
  }
  if (isBack) {
    const idx = geo.index.array;
    for (let i = 0; i < idx.length; i += 3) {
      const tmp = idx[i];
      idx[i] = idx[i + 1];
      idx[i + 1] = tmp;
    }
  }
  geo.computeVertexNormals();
  return geo;
};

export const pencilCaseProduct = {
  id: 'pencil-case', name: 'Trousse de maquillage', dimensions: [210, 130, 10], printable: [210, 130],
  icon: '👝',
  create() {
    const group = new THREE.Group();
    const width = 2.1; // 21 cm
    const height = 1.3; // 13 cm

    // Front half (Face A)
    const frontGeo = createPouchHalf(width, height, 32, 32, false);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0.0, side: THREE.DoubleSide });
    const top = new THREE.Mesh(frontGeo, topMaterial);
    top.castShadow = true; top.receiveShadow = true; group.add(top);

    // Back half (Face B)
    const backGeo = createPouchHalf(width, height, 32, 32, true);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.95, metalness: 0.0 });
    const back = new THREE.Mesh(backGeo, topMaterial);
    back.castShadow = true; back.receiveShadow = true; group.add(back);

    // Zipper line at the very top (back edge to blend)
    const zipGeo = new THREE.CylinderGeometry(0.015, 0.015, width, 8);
    zipGeo.rotateZ(Math.PI / 2);
    zipGeo.translate(0, 0.005, -height / 2); // at the top edge of the pouch
    const zipMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.3 });
    const zip = new THREE.Mesh(zipGeo, zipMaterial);
    group.add(zip);

    // Zipper pull
    const pullGeo = new THREE.BoxGeometry(0.04, 0.01, 0.08);
    pullGeo.translate(width / 2 - 0.1, 0.01, -height / 2 - 0.04);
    const pull = new THREE.Mesh(pullGeo, zipMaterial);
    group.add(pull);

    return { group, top, topMaterial, baseMaterial, printAspect: width / height, type: 'flat', printMesh: top, meshWidth: width, meshHeight: height, twoSided: true };
  }
};
