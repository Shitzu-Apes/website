"use client";

import { Circle, Ring } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  BackSide,
  Color,
  DoubleSide,
  FrontSide,
  Group,
  ShapeGeometry,
} from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";

import ShitzuWireframe from "@/assets/shitzu-wireframe.svg";

export default function ShitzuToken() {
  const ref = useRef<Group>(null);

  const {
    paths: [path],
  } = useLoader(SVGLoader, ShitzuWireframe.src as string);

  const geometry = useMemo(() => {
    return new ShapeGeometry(path.toShapes(true));
  }, [path]);

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta;
  });

  return (
    <group
      ref={ref}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
      scale={innerWidth < 768 ? [2, 2, 2] : [1.5, 1.5, 1.5]}
    >
      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <Ring args={[0.9, 1, 256, 1, 0, Math.PI * 2]} position={[0, 0, 0.101]}>
          <meshLambertMaterial color={new Color("#31c891")} side={FrontSide} />
        </Ring>
        <Circle args={[1, 256]} position={[0, -0, 0.1]}>
          <meshLambertMaterial color={new Color("#000")} side={FrontSide} />
        </Circle>
        <mesh
          geometry={geometry}
          scale={[2 / 238, 2 / 238, 2 / 238]}
          position={[-1, 1, 0.11]}
          rotation={[0, Math.PI * 1, Math.PI]}
        >
          <meshLambertMaterial side={DoubleSide} color={new Color("#31c891")} />
        </mesh>
      </group>

      <mesh rotation={[0, Math.PI * 0.5, Math.PI * 0.5]}>
        <cylinderGeometry args={[1, 1, 0.2, 256, 256, true]} />
        <meshLambertMaterial color={new Color("#31c891")} />
      </mesh>

      <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <Circle args={[1, 256]} position={[0, 0, -0.1]}>
          <meshLambertMaterial color={new Color("#31c891")} side={BackSide} />
        </Circle>
        <mesh
          geometry={geometry}
          scale={[2 / 238, 2 / 238, 2 / 238]}
          position={[1, 1, -0.11]}
          rotation={[0, 0, Math.PI * 1]}
        >
          <meshLambertMaterial side={BackSide} color={"#fff"} />
        </mesh>
      </group>
    </group>
  );
}
