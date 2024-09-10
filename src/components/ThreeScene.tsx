"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createMaterialArray } from "../lib/skybox"; // Import the skybox utility
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55, // FOV
      window.innerWidth / window.innerHeight, // Aspect ratio
      45, // Near clipping
      30000 // Far clipping
    );
    const light = new THREE.AmbientLight(0xffffff);
    const light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(1, 1, 1);
    scene.add(light2);
    scene.add(light);
    camera.position.set(1200, -250, 2000); // Adjust as needed

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = "canvas";

    // Append renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create skybox geometry and materials
    const materialArray = createMaterialArray(); // Get the skybox material array
    const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    const skybox = new THREE.Mesh(skyboxGeo, materialArray);
    scene.add(skybox);
    // Add orbit controls for handling camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.minDistance = 500;
    controls.maxDistance = 1500;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Animation loop
    const animate = () => {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeScene;
