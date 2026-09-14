"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  useTexture,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* =========================================
   HELPERS
========================================= */

function toSurface(v, radius = 1.84) {
  return new THREE.Vector3(...v).normalize().multiplyScalar(radius);
}

/* =========================================
   EARTH
========================================= */

function Earth() {
  const earthRef = useRef(null);

  const [
    earthMap,
    normalMap,
    specularMap,
    lightsMap,
  ] = useTexture([
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_lights_2048.png",
  ]);

  useFrame(() => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y += 0.00045;
  });

  return (
    <group ref={earthRef}>

      <Sphere args={[1.8, 128, 128]}>
        <meshPhongMaterial
          map={earthMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color("#2a2a2a")}
          shininess={18}
          emissiveMap={lightsMap}
          emissive={new THREE.Color("#ffd9a0")}
          emissiveIntensity={0.9}
        />
      </Sphere>

      <Sphere args={[1.825, 128, 128]}>
        <meshBasicMaterial
          color="#7fc9ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>

    </group>
  );
}


/* =========================================
   NETWORK ARC — elegant, 2-tone, with a
   traveling pulse dot for a "data transfer"
   feel instead of static lines
========================================= */

function NetworkArc({ start, end, color = "#9c8bff", speed = 0.15, offset = 0 }) {
  const pulseRef = useRef(null);

  const curve = useMemo(() => {
    const startVector = toSurface(start);
    const endVector = toSurface(end);

    const distance = startVector.distanceTo(endVector);

    const control = startVector
      .clone()
      .add(endVector)
      .normalize()
      .multiplyScalar(1.84 + 0.35 + distance * 0.1);

    return new THREE.QuadraticBezierCurve3(startVector, control, endVector);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(60), [curve]);
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points]
  );

  useFrame(({ clock }) => {
    if (!pulseRef.current) return;
    const t = (clock.elapsedTime * speed + offset) % 1;
    const p = curve.getPoint(t);
    pulseRef.current.position.copy(p);
    const fade = Math.sin(t * Math.PI); // fades in/out at ends
    pulseRef.current.material.opacity = fade * 0.9;
  });

  return (
    <group>
      <line geometry={geometry}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </line>

      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.028, 12, 12]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}


/* =========================================
   NETWORK POINT — sits flush on the surface,
   with a soft halo so it reads as "on" the
   globe, not floating outside it
========================================= */

function NetworkPoint({ position, color = "#a4f0bd" }) {
  const ref = useRef(null);
  const surfacePos = useMemo(() => toSurface(position).toArray(), [position]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 1.5) * 0.12;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <group ref={ref} position={surfacePos}>
      {/* core dot */}
      <mesh>
        <sphereGeometry args={[0.026, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </mesh>

      {/* soft halo, slightly larger, additive */}
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}


/* =========================================
   NETWORK SYSTEM — trimmed to a 2-tone
   palette (violet + green accent) for a
   cleaner, more elegant look
========================================= */

function Network() {
  return (
    <group>

      <NetworkArc start={[0.55, 1.58, 0.45]} end={[1.7, 0.75, 0.55]} color="#9c8bff" speed={0.16} offset={0} />
      <NetworkArc start={[-0.8, 1.45, 0.35]} end={[1.2, 1.15, 0.45]} color="#9c8bff" speed={0.13} offset={0.4} />
      <NetworkArc start={[-1.4, 0.55, 0.35]} end={[1.35, -0.45, 0.55]} color="#9c8bff" speed={0.11} offset={0.7} />
      <NetworkArc start={[-0.8, -1.3, 0.35]} end={[1.15, -1.05, 0.45]} color="#a4f0bd" speed={0.15} offset={0.2} />

      <NetworkPoint position={[1.7, 0.75, 0.55]} color="#a4f0bd" />
      <NetworkPoint position={[-0.8, 1.45, 0.35]} color="#9c8bff" />
      <NetworkPoint position={[-1.4, 0.55, 0.35]} color="#a4f0bd" />
      <NetworkPoint position={[-0.8, -1.3, 0.35]} color="#9c8bff" />
      <NetworkPoint position={[1.15, -1.05, 0.45]} color="#a4f0bd" />

    </group>
  );
}


/* =========================================
   SCENE — key light aligned with the camera
   so the side facing the viewer at start is
   the well-lit side, not a dim ocean view
========================================= */

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.18} />

      <directionalLight
        position={[2, 1.2, 6]}
        intensity={2.5}
      />

      <directionalLight
        position={[-4, -2, -3]}
        intensity={0.14}
        color="#2c3e66"
      />

      <Earth />

      <Network />
    </>
  );
}


/* =========================================
   MAIN GLOBE
========================================= */

export default function Globe() {
  return (
    <div className="w-full h-full">

      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 6.8],
          fov: 38,
          near: 0.1,
          far: 100,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >

        <GlobeScene />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}

          minDistance={4.8}
          maxDistance={9}

          rotateSpeed={0.45}
          zoomSpeed={0.45}

          enableDamping={true}
          dampingFactor={0.06}

          autoRotate={false}

          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />

      </Canvas>

    </div>
  );
}