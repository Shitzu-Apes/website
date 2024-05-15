"use client";

import { Canvas } from "@react-three/fiber";
import ShitzuToken from "./ShitzuToken";

export default function Scene() {
  return (
    <Canvas>
      <ShitzuToken />
      <ambientLight />
      {/* point light that points to the center of the scene from bottom left */}
      <pointLight position={[-2, -2, 1]} intensity={50} />
      {/* point light that points to the center of the scene from bottom right */}
      <pointLight position={[2, 2, 1]} intensity={50} />
    </Canvas>
  );
}
