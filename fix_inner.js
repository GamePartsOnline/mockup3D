const fs = require('fs'); let code = fs.readFileSync('src/products/arcadeCabinet.js', 'utf8');
const replacement = \
    // Convert faces groups to individual triangles to assign material 1 to inner faces
    function fixInnerFace(geo, innerZDir) {
        geo.clearGroups();
        const normals = geo.attributes.normal;
        for (let i = 0; i < normals.count; i+=3) {
            const nz = normals.getZ(i);
            const isSide = Math.abs(nz) < 0.5;
            const isInner = Math.sign(nz) === innerZDir;
            if (isSide || isInner) {
                geo.addGroup(i * 3, 3, 1);
            } else {
                geo.addGroup(i * 3, 3, 0);
            }
        }
    }
    // L'interieur gauche regarde vers -Z (car pan droit) ou +Z ?
    // Left panel est a +Z. Face interieure regarde vers l'interieur (-Z). 
    fixInnerFace(leftGeo, -1);
    const leftMesh = new THREE.Mesh(leftGeo, [topMaterial, baseMaterial]);
\;
code = code.replace(/const leftMesh = new THREE\.Mesh\(leftGeo, \[topMaterial, baseMaterial\]\);/, replacement);
const replacementRight = \
    fixInnerFace(rightGeo, 1); // Face interieure regarde vers +Z
    const rightMesh = new THREE.Mesh(rightGeo, [topMaterial, baseMaterial]);
\;
code = code.replace(/const rightMesh = new THREE\.Mesh\(rightGeo, \[topMaterial, baseMaterial\]\);/, replacementRight);
fs.writeFileSync('src/products/arcadeCabinet.js', code);

