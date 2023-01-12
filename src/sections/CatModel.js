import React, { Suspense } from "react";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../animated_bengal_cat/Scene";

export const CatModel = () => {
  return (
    <div className="modelContainer" id="cat-model">
      <Canvas camera={{ fov: 25 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.24} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="sunset" />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};
