"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function ShitzuToken() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshBasicMaterial color={"red"} />
    </mesh>
  );
}
