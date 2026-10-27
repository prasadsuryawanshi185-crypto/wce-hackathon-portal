import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ChainLink } from './ChainLink';
import { createChainMaterial, createAccentMaterial } from './ChainSystem';

/* ------------------------------------------------------------------ *
 *  Connected chain segment.
 *
 *  Thick tubular links whose planes alternate orientation so adjacent
 *  links visibly interlock. Placed along a gentle arc so the segment
 *  reads as a single continuous chain, not a pile of disconnected
 *  rings. Geometry and material are shared across links.
 * ------------------------------------------------------------------ */
export function ChainSegment({
  linkCount = 5,
  width = 1.5,
  height = 1.05,
  cornerRadius = 0.3,
  tubeRadius = 0.11,
  spacing = 0.78,
  arc = Math.PI / 3,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  accent = false,
  lights = true,
  shared = { current: { px: 0, py: 0, dx: 0, dy: 0 } },
  reducedMotion = false,
}) {
  const root = useRef();

  const silverMaterial = useMemo(
    () =>
      createChainMaterial({
        color: '#c9c9d6',
        metalness: 1.0,
        roughness: 0.17,
        clearcoat: 0.5,
        envIntensity: 1.7,
      }),
    []
  );

  const accentMaterial = useMemo(() => createAccentMaterial({ color: '#66E8C3' }), []);

  const configs = useMemo(() => {
    const out = [];
    for (let i = 0; i < linkCount; i++) {
      const t = linkCount === 1 ? 0.5 : i / (linkCount - 1);
      const angle = arc * (t * 2 - 1);
      const r = spacing * 1.05;
      const x = Math.sin(angle) * r;
      const y = Math.cos(angle) * r * 0.9 - r * 0.55;
      // Offset every other link along Z so it passes through its neighbour,
      // producing a genuinely interlocked appearance.
      const z = i % 2 === 1 ? 0.66 : 0;
      const rot = i % 2 === 0 ? [0, 0, angle] : [Math.PI / 2, angle * 0.12, Math.PI / 2];
      out.push({
        position: [x, y, z],
        rotation: rot,
        scale: 1 - Math.abs(t - 0.5) * 0.07,
        width,
        height,
        cornerRadius,
        tubeRadius,
        material: accent && i % 3 === 0 ? accentMaterial : silverMaterial,
      });
    }
    return out;
  }, [linkCount, width, height, cornerRadius, tubeRadius, spacing, arc, accent, silverMaterial, accentMaterial]);

  useFrame((state, delta) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime;
    const d = Math.min(delta, 0.05);

    const px = shared.current?.px || 0;
    const py = shared.current?.py || 0;
    const dx = shared.current?.dx || 0;
    const dy = shared.current?.dy || 0;

    root.current.rotation.y += (dx * 0.18 - root.current.rotation.y) * Math.min(1, d * 1.6);
    root.current.rotation.x += (dy * -0.14 - root.current.rotation.x) * Math.min(1, d * 1.6);
    root.current.position.x += (px * 0.06 - root.current.position.x) * Math.min(1, d * 1.6);
    root.current.position.y += (py * -0.05 - root.current.position.y) * Math.min(1, d * 1.6);

    if (!reducedMotion) {
      root.current.rotation.y += delta * 0.018;
      root.current.rotation.x += Math.sin(t * 0.12) * delta * 0.012;
    }
  });

  return (
    <group ref={root} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {configs.map((cfg, i) => (
        <ChainLink key={i} {...cfg} />
      ))}
      {lights && (
        <>
          <pointLight position={[2.6, 1.4, 2.4]} intensity={2.4} color="#66E8C3" distance={8} decay={2} />
          <pointLight position={[-2.4, -1.0, 2.6]} intensity={2.0} color="#7445A6" distance={7.5} decay={2} />
        </>
      )}
    </group>
  );
}
