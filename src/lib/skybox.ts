import * as THREE from "three";

export const createMaterialArray = () => {
  const ft = new THREE.TextureLoader().load("/assets/skybox/corona_ft.png");
  const bk = new THREE.TextureLoader().load("/assets/skybox/corona_bk.png");
  const up = new THREE.TextureLoader().load("/assets/skybox/corona_up.png");
  const dn = new THREE.TextureLoader().load("/assets/skybox/corona_dn.png");
  const rt = new THREE.TextureLoader().load("/assets/skybox/corona_rt.png");
  const lf = new THREE.TextureLoader().load("/assets/skybox/corona_lf.png");

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
