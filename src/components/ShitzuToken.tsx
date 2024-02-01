"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Group } from "three";

export default function ShitzuToken() {
  const ref = useRef<Group>(null);
  const logo = useTexture("/shitzu.png");

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta / 2;
  });

  return (
    <group ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial map={logo} />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.2, 32, 32, true]} />
        <meshBasicMaterial color={new Color("#31c891")} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI]} position={[0, -0.1, 0]}>
        <circleGeometry args={[1, 32]} />
        <meshBasicMaterial map={logo} />
      </mesh>
    </group>
  );
}
