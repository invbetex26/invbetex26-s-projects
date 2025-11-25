import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, CatmullRomLine } from '@react-three/drei';
import * as THREE from 'three';

// Font URL
const FONT_URL = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json';

const BloodyText = () => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2} floatingRange={[-0.2, 0.2]}>
      <group position={[2, 0, 0]}>
        <Center>
          <Text3D
            font={FONT_URL}
            size={3.5}
            height={0.5} // Thicker extrusion
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {`CALATO\nNO`}
            <meshPhysicalMaterial
              color="#991b1b" // Deep blood red
              roughness={0.2}
              metalness={0.4}
              clearcoat={1} // Wet look
              clearcoatRoughness={0.1}
              emissive="#450a0a"
              emissiveIntensity={0.4}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
};

const RedBalloon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      const { x, y } = state.pointer;
      
      // Balloon follows mouse with 'drag' feel (Lerp)
      // We map the normalized mouse coordinates (-1 to 1) to world coordinates
      const targetX = x * 10 - 5; // Offset to the left
      const targetY = y * 6;

      // Smooth movement
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      
      // Slight rotation based on movement for realism
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -x * 0.5, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.2, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[-5, 0, 0]}>
      {/* Balloon Body */}
      <mesh scale={[1.3, 1.5, 1.3]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          color="#dc2626" // Bright Red
          roughness={0.15}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={1}
        />
      </mesh>
      
      {/* Balloon Knot */}
      <mesh position={[0, -1.4, 0]}>
        <coneGeometry args={[0.2, 0.4, 32]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>

      {/* Balloon String */}
      <mesh position={[0, 0, 0]}>
         <CatmullRomLine 
            points={[
                [0, -1.5, 0],
                [0.1, -3, 0.1],
                [-0.1, -5, -0.1],
                [0, -8, 0]
            ] as unknown as THREE.Vector3[]} 
            color="#ffffff" 
            lineWidth={1} 
            transparent 
            opacity={0.6} 
          />
      </mesh>

      {/* Rim Light for the balloon */}
      <pointLight position={[-2, 2, 2]} intensity={2} color="#ffaaaa" distance={5} />
    </group>
  );
};

const DustParticles = () => {
    const count = 200;
    const mesh = useRef<THREE.InstancedMesh>(null);
    
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
      const temp = [];
      for (let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() * 0.02;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
      }
      return temp;
    }, [count]);
  
    useFrame((state) => {
      if (!mesh.current) return;
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
        t = particle.t += speed / 2;
        const a = Math.cos(t) + Math.sin(t * 1) / 10;
        const b = Math.sin(t) + Math.cos(t * 2) / 10;
        const s = Math.cos(t);
        
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        );
        dummy.scale.setScalar(s);
        dummy.rotation.set(s * 5, s * 5, s * 5);
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    });
  
    return (
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.1, 0]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.6} />
      </instancedMesh>
    );
  };

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        {/* Dark foggy atmosphere */}
        <fog attach="fog" args={['#000000', 15, 40]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        {/* Spotlight on Text */}
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={10} color="#ff0000" />
        {/* Spotlight on Balloon */}
        <spotLight position={[-10, 10, 10]} angle={0.5} penumbra={1} intensity={5} color="#ffffff" />
        {/* Backlight */}
        <pointLight position={[0, 0, -5]} intensity={2} color="#7f1d1d" />

        <RedBalloon />
        <BloodyText />
        <DustParticles />
        
      </Canvas>
    </div>
  );
};

export default Background3D;