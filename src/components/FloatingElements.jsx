import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Box,
  Torus,
  Octahedron,
} from "@react-three/drei";

// 3D Geometric Shapes
const FloatingGeometry = ({ position, color, shape = "sphere", scale = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent =
    {
      sphere: Sphere,
      box: Box,
      torus: Torus,
      octahedron: Octahedron,
    }[shape] || Sphere;

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <ShapeComponent ref={meshRef} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </ShapeComponent>
    </Float>
  );
};

// Particle System
const ParticleField = () => {
  const particlesRef = useRef();
  const particleCount = 200;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    colors[i * 3] = Math.random();
    colors[i * 3 + 1] = Math.random();
    colors[i * 3 + 2] = Math.random();
  }

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.6} />
    </points>
  );
};

// Main 3D Scene
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />

      <FloatingGeometry
        position={[-2, 1, 0]}
        color="#6366f1"
        shape="sphere"
        scale={0.5}
      />
      <FloatingGeometry
        position={[2, -1, 0]}
        color="#f59e0b"
        shape="box"
        scale={0.4}
      />
      <FloatingGeometry
        position={[0, 2, -1]}
        color="#10b981"
        shape="torus"
        scale={0.3}
      />
      <FloatingGeometry
        position={[-1.5, -2, 1]}
        color="#ef4444"
        shape="octahedron"
        scale={0.4}
      />

      <ParticleField />
    </>
  );
};

// 2D Floating Elements
const FloatingElements2D = () => {
  const elements = [
    { id: 1, x: "10%", y: "20%", delay: 0, duration: 6 },
    { id: 2, x: "80%", y: "10%", delay: 1, duration: 8 },
    { id: 3, x: "20%", y: "70%", delay: 2, duration: 7 },
    { id: 4, x: "90%", y: "60%", delay: 0.5, duration: 9 },
    { id: 5, x: "5%", y: "80%", delay: 1.5, duration: 5 },
    { id: 6, x: "70%", y: "30%", delay: 2.5, duration: 6.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-30"
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger floating orbs */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-xl"
          style={{
            left: `${20 + index * 30}%`,
            top: `${10 + index * 25}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Main Component
const FloatingElements = ({ show3D = false }) => {
  return (
    <>
      <FloatingElements2D />

      {show3D && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            style={{ background: "transparent" }}
          >
            <Scene3D />
          </Canvas>
        </div>
      )}
    </>
  );
};

export default FloatingElements;
