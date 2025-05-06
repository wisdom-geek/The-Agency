"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import type { Group } from "three"

// Simplified 3D scene to avoid React Three Fiber issues
function Scene() {
  const globeRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <>
      {/* Wireframe Globe */}
      <group ref={globeRef} position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial color="#7c3aed" wireframe opacity={0.4} transparent />
        </mesh>
        <mesh scale={[2.53, 2.53, 2.53]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#7c3aed" opacity={0.1} transparent />
        </mesh>
      </group>

      {/* Particles */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#ffffff" opacity={0.5} transparent />
        </mesh>
      ))}

      {/* Environment lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="night" />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}
