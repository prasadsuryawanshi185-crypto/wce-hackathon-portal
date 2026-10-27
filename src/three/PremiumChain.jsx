import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { createChainLinkGeometry } from './ChainLink';

export function PremiumChain({ shared = { current: { px: 0, py: 0, dx: 0, dy: 0 } }, reducedMotion = false }) {
  const group = useRef();
  const linksRef = useRef([]);

  const linkGeo = useMemo(() => createChainLinkGeometry(0.58, 0.09), []);
  
  const metalMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#c9c9d6',
        metalness: 1.0,
        roughness: 0.18,
        reflectivity: 1.0,
        clearcoat: 0.4,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.6,
      }),
    []
  );

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#d8f8f0',
        metalness: 1.0,
        roughness: 0.14,
        reflectivity: 1.0,
        emissive: '#66E8C3',
        emissiveIntensity: 0.4,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.8,
      }),
    []
  );

  const chainLinks = useMemo(
    () => [
      { position: [-1.4, 0.3, 0.1], rotation: [0.3, 0.5, 0.4], scale: 1.0 },
      { position: [-0.5, -0.15, 0.15], rotation: [-0.25, 0.25, -0.3], scale: 0.95 },
      { position: [0.4, 0.25, -0.05], rotation: [0.35, -0.2, 0.45], scale: 0.98 },
      { position: [1.3, -0.1, 0.12], rotation: [-0.18, -0.32, -0.25], scale: 0.93 },
      { position: [-0.9, 0.8, -0.08], rotation: [0.6, 0.8, 0.2], scale: 0.88 },
      { position: [0.8, -0.5, 0.18], rotation: [-0.4, 0.1, -0.5], scale: 0.9 },
    ],
    []
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    const px = shared.current?.px || 0;
    const py = shared.current?.py || 0;
    const dx = shared.current?.dx || 0;
    const dy = shared.current?.dy || 0;

    group.current.rotation.y += (dx * 0.25 - group.current.rotation.y) * Math.min(1, delta * 1.8);
    group.current.rotation.x += (dy * 0.2 - group.current.rotation.x) * Math.min(1, delta * 1.8);

    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.06;
      group.current.rotation.x += Math.sin(t * 0.16) * delta * 0.04;
    }

    group.current.position.x += (px * 0.1 - group.current.position.x) * Math.min(1, delta * 1.6);
    group.current.position.y += (py * -0.08 - group.current.position.y) * Math.min(1, delta * 1.6);

    linksRef.current.forEach((link, i) => {
      if (!link) return;
      link.rotation.z += delta * (0.05 + i * 0.012);
    });
  });

  return (
    <group ref={group} position={[0.4, -0.05, 0]} scale={1.32}>
      {chainLinks.map((cfg, i) => (
        <group
          key={i}
          ref={(el) => (linksRef.current[i] = el)}
          position={cfg.position}
          rotation={cfg.rotation}
          scale={cfg.scale}
        >
          <mesh geometry={linkGeo} material={i % 3 === 0 ? accentMaterial : metalMaterial} castShadow receiveShadow />
        </group>
      ))}

      <pointLight position={[2.2, 1.2, 2.0]} intensity={2.4} color="#66E8C3" distance={7} decay={2} />
      <pointLight position={[-2.0, -0.8, 2.2]} intensity={2.0} color="#7445A6" distance={6.5} decay={2} />
      <spotLight position={[1, 3, 4]} angle={0.4} penumbra={1.2} intensity={1.1} color="#F7F5FF" />
    </group>
  );
}
