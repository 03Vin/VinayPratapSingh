import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSystem({ count = 100 }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10;
      const size = Math.random() * 0.05 + 0.01;
      temp.push({ x, y, z, size, speed: Math.random() * 0.02 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { x, y, z, size, speed } = particle;
      
      // Gentle floating animation
      y += Math.sin(state.clock.elapsedTime * 0.5 + i) * speed;
      x += Math.cos(state.clock.elapsedTime * 0.3 + i) * speed;
      
      dummy.position.set(x, y, z);
      dummy.scale.set(size, size, size);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.3} />
    </instancedMesh>
  );
}

export default function Particles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleSystem count={150} />
      </Canvas>
    </div>
  );
}
