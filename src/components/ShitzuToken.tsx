"use client";

import { Circle } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackSide, Color, FrontSide, Group, ShapeGeometry } from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

import ShitzuWireframe from "@/assets/shitzu-wireframe.svg";

export default function ShitzuToken() {
  const ref = useRef<Group>(null);

  console.log(ShitzuWireframe);
  const {
    paths: [path],
  } = useLoader(SVGLoader, ShitzuWireframe.src as string);

  const geometry = useMemo(() => {
    return new ShapeGeometry(path.toShapes(true));
  }, [path]);

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta;
  });

  return (
    <group
      ref={ref}
      rotation={[Math.PI / 2, Math.PI, 0]}
      position={[0, 0, 0]}
      scale={innerWidth < 768 ? [2, 2, 2] : [1.5, 1.5, 1.5]}
    >
      <group position={[-1, 0.1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <Circle args={[1, 32]} position={[1, -1, 0.001]}>
          <meshStandardMaterial color={new Color("black")} side={BackSide} />
        </Circle>
        <mesh
          geometry={geometry}
          scale={[2 / 238, 2 / 238, 2 / 238]}
          rotation={[Math.PI, 0, 0]}
        >
          <meshStandardMaterial color={new Color("#31c891")} />
        </mesh>
      </group>

      <mesh>
        <cylinderGeometry args={[1, 1, 0.2, 32, 32, true]} />
        <meshStandardMaterial color={new Color("#31c891")} />
      </mesh>

      <group position={[-1, -0.1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <Circle args={[1, 32]} position={[1, -1, -0.001]}>
          <meshStandardMaterial color={new Color("#31c891")} side={FrontSide} />
        </Circle>
        <mesh
          geometry={geometry}
          scale={[2 / 238, 2 / 238, 2 / 238]}
          position={[2, 0, 0]}
          rotation={[-Math.PI, Math.PI, 0]}
        >
          <meshStandardMaterial color={"#fff"} />
        </mesh>
      </group>
    </group>
  );
}
