import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sparkles, ContactShadows, Environment } from '@react-three/drei';

const PremiumShape = () => {
  const coreRef = useRef();
  const shellRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Core pulsing effect
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
      coreRef.current.rotation.y = time * 0.5;
    }

    // Shell rotation
    if (shellRef.current) {
      shellRef.current.rotation.y = -time * 0.2;
      shellRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }

    // Rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.8;
      ring1Ref.current.rotation.y = time * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.6;
      ring2Ref.current.rotation.z = time * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sparkles count={100} scale={10} size={1.5} speed={0.2} opacity={0.3} color="#00f0ff" />
      
      {/* Central Power Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial 
          color="#9d4edd"
          emissive="#9d4edd"
          emissiveIntensity={4}
          roughness={0}
        />
      </mesh>

      {/* Refractive Outer Shell */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.8, 15]} />
        <MeshDistortMaterial
          color="#ffffff"
          opacity={0.15}
          transparent
          roughness={0}
          metalness={1}
          distort={0.3}
          speed={2}
          reflectivity={1}
          clearcoat={1}
        />
      </mesh>

      {/* orbital Data Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={5} />
      </mesh>

      {/* orbital Data Ring 2 */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshStandardMaterial color="#ff00e5" emissive="#ff00e5" emissiveIntensity={5} />
      </mesh>

      {/* Hidden point cloud for extra "data" feel */}
      <points>
        <sphereGeometry args={[2, 32, 32]} />
        <pointsMaterial size={0.02} color="#00f0ff" transparent opacity={0.2} />
      </points>
    </Float>
  );
};

export default function CyberScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }} className="pointer-events-auto">
        {/* Very subtle studio lighting */}
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#00f0ff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#9d4edd" />
        
        {/* Environment preset provides photo-realistic reflections over the metallic clearcoat */}
        <Environment preset="city" /> 
        
        <PremiumShape />
        
        {/* Floor shadow grounded beneath the floating object */}
        <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={20} blur={2.5} far={4} color="#00f0ff" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.4} 
          maxPolarAngle={Math.PI / 2 + 0.25}
          minPolarAngle={Math.PI / 2 - 0.25}
        />
      </Canvas>
    </div>
  );
}
