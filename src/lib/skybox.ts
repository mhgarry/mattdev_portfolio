import * as THREE from "three";

export const createMaterialArray = () => {
  const ft = new THREE.TextureLoader().load("/assets/skybox/xeng.png"); // front
  const bk = new THREE.TextureLoader().load("/assets/skybox/xpos.png"); // back
  const up = new THREE.TextureLoader().load("/assets/skybox/yeng.png"); // top
  const dn = new THREE.TextureLoader().load("/assets/skybox/ypos.png"); // bottom
  const rt = new THREE.TextureLoader().load("/assets/skybox/zneg.png"); // right
  const lf = new THREE.TextureLoader().load("/assets/skybox/zpos.png"); // left

  const materialArray = [
    new THREE.MeshBasicMaterial({ map: ft, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ map: bk, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ map: up, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ map: dn, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ map: rt, side: THREE.BackSide }),
    new THREE.MeshBasicMaterial({ map: lf, side: THREE.BackSide }),
  ];

  return materialArray;
};
