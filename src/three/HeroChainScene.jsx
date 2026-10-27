import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { createChainLinkGeometry, createChainMaterial, createAccentMaterial } from './ChainSystem';

export function HeroChainScene({
  shared = { current: { px: 0, py: 0, dx: 0, dy: 0 } },
  reducedMotion = false,
}) {
  const root = useRef();
  const linksRef = useRef([]);

  const linkGeo = useMemo(() => createChainLinkGeometry({ radius: 0.72, tubeRadius: 0.1 }), []);
  const silverMaterial = useMemo(
    () =>
      createChainMaterial({
        metalness: 1.0,
        roughness: 0.16,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        envIntensity: 1.8,
      }),
    []
  );
  const mintMaterial = useMemo(() => createAccentMaterial({ color: '#66E8C3' }), []);

  const chainLinks = useMemo(
    () => [
      { position: [-1.5, 0.45, 0.12], rotation: [0.32, 0.52, 0.38], scale: 1.05, material: silverMaterial },
      { position: [-0.55, -0.08, 0.18], rotation: [-0.28, 0.28, -0.32], scale: 0.96, material: silverMaterial },
      { position: [0.45, 0.38, -0.05], rotation: [0.38, -0.22, 0.48], scale: 1.0, material: mintMaterial },
      { position: [1.45, -0.02, 0.14], rotation: [-0.2, -0.34, -0.26], scale: 0.94, material: silverMaterial },
      { position: [-1.05, 0.95, -0.08], rotation: [0.62, 0.84, 0.22], scale: 0.88, material: silverMaterial },
      { position: [0.85, -0.55, 0.2], rotation: [-0.42, 0.12, -0.52], scale: 0.91, material: silverMaterial },
    ],
    [silverMaterial, mintMaterial]
  );

  useFrame((state, delta) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;

    const px = shared.current?.px || 0;
    const py = shared.current?.py || 0;
    const dx = shared.current?.dx || 0;
    const dy = shared.current?.dy || 0;

    root.current.rotation.y += (dx * 0.22 - root.current.rotation.y) * Math.min(1, delta * 1.8);
    root.current.rotation.x += (dy * 0.18 - root.current.rotation.x) * Math.min(1, delta * 1.8);

    if (!reducedMotion) {
      root.current.rotation.y += delta * 0.055;
      root.current.rotation.x += Math.sin(t * 0.15) * delta * 0.035;
    }

    root.current.position.x += (px * 0.09 - root.current.position.x) * Math.min(1, delta * 1.6);
    root.current.position.y += (py * -0.07 - root.current.position.y) * Math.min(1, delta * 1.6);

    linksRef.current.forEach((link, i) => {
      if (!link) return;
      link.rotation.z += delta * (0.048 + i * 0.011);
    });
  });

  return (
    <group ref={root} position={[0.45, -0.08, 0]} scale={1.42}>
      <Environment preset="studio" />
      {chainLinks.map((cfg, i) => (
        <group
          key={i}
          ref={(el) => (linksRef.current[i] = el)}
          position={cfg.position}
          rotation={cfg.rotation}
          scale={cfg.scale}
        >
          <mesh geometry={linkGeo} material={cfg.material} castShadow receiveShadow />
        </group>
      ))}

      <pointLight position={[2.4, 1.3, 2.2]} intensity={2.6} color="#66E8C3" distance={7.5} decay={2} />
      <pointLight position={[-2.2, -0.9, 2.4]} intensity={2.2} color="#7445A6" distance={7} decay={2} />
      <spotLight position={[1.2, 3.2, 4.2]} angle={0.4} penumbra={1.3} intensity={1.3} color="#F7F5FF" />
    </group>
  );
}
