"use client";

import { Canvas } from "@react-three/fiber";
import ShitzuToken from "./ShitzuToken";

export default function Scene() {
  return (
    <Canvas>
      <ShitzuToken />
    </Canvas>
  );
}
