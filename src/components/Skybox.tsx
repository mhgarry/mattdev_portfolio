"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Skybox: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ft = new THREE.TextureLoader().load("/assets/skybox/corona_ft.png");
    const bk = new THREE.TextureLoader().load("/assets/skybox/corona_bk.png");
    const up = new THREE.TextureLoader().load("/assets/skybox/corona_up.png");
    const dn = new THREE.TextureLoader().load("/assets/skybox/corona_dn.png");
    const rt = new THREE.TextureLoader().load("/assets/skybox/corona_rt.png");
    const lf = new THREE.TextureLoader().load("/assets/skybox/corona_lf.png");

    const basePath = "./static/skybox/";
    const baseFilename = basePath + filename;
    const fileType = ".png";
    const sides = ["ft", "bk", "up", "dn", "rt", "lf"];
    const pathStings = sides.map((side) => {
      return baseFilename + "_" + side + fileType;
    });

    return pathStings;
  });
  let skyboxImage = "corona";
  function createMaterialArray(filename) {
    const skyboxImagepaths = createPathStrings(filename);
    const materialArray = skyboxImagepaths.map((image) => {
      let texture = new THREE.TextureLoader().load(image);

      return texture;
    });
    return materialArray;
  }

  return <div ref={mountRef} />;
};
export default { Skybox };
