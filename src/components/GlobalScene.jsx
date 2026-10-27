import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { ChainSegment } from '../three/ChainSegment';
import { CHAIN_MATERIAL_COLORS } from '../three/ChainSystem';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Motes({ count = 70 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const rand = seeded(1337);
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (rand() - 0.5) * 52;
      arr[i * 3 + 1] = rand() * 52 - 34;
      arr[i * 3 + 2] = -26 + rand() * 22;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.005;
      points.current.position.y = Math.sin(state.clock.elapsedTime * 0.04) * 1.0;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#66E8C3"
        size={0.04}
        transparent
        opacity={0.22}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

function EnvironmentRig({ shared, reducedMotion }) {
  const env = useRef();
  const look = useRef({ progress: 0, target: 0 });
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const mobile = size.width < 768;

  useEffect(() => {
    const onPointerMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  useFrame((state, delta) => {
    const { camera } = state;
    const d = Math.min(delta, 0.05);

    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const target = clamp01(window.scrollY / max);
    look.current.target = target;
    look.current.progress += (target - look.current.progress) * Math.min(1, d * 3.2);

    const p = look.current.progress;

    if (env.current) {
      env.current.position.y = p * (mobile ? 30 : 31);
      env.current.position.x = Math.sin(p * Math.PI * 1.4) * (mobile ? 0.3 : 0.9);
      env.current.rotation.y = p * 0.14;
      env.current.rotation.z = Math.sin(p * Math.PI) * 0.01;
    }

    camera.position.x +=
      (pointer.current.x * (mobile ? 0.45 : 0.85) + p * 0.35 - camera.position.x) *
      Math.min(1, d * 1.8);
    camera.position.y +=
      (pointer.current.y * -0.35 - p * 0.5 - camera.position.y) * Math.min(1, d * 1.8);
    camera.position.z = 18 - p * 1.4;
    camera.lookAt(0, -p * 0.45, -5);
  });

  return (
    <>
      <fog attach="fog" args={['#05060b', 24, 72]} />

      {/* Cinematic studio lighting: soft key, purple fill, mint rim, cyan accents */}
      <ambientLight intensity={0.45} color="#2a2345" />
      <hemisphereLight args={['#5a4ce8', '#04070c', 1.0]} />

      <directionalLight position={[10, 13, 9]} intensity={2.6} color="#c4ccff" />
      <directionalLight position={[-12, -2, 8]} intensity={1.6} color="#7445A6" />
      <directionalLight position={[0, -11, 6]} intensity={1.3} color="#27dccb" />
      <directionalLight position={[-6, 9, -8]} intensity={1.0} color="#315bff" />

      <group ref={env}>
        {/* Chain environment — full page, multi-layered, replaces decorative rings */}
        <ChainBackground shared={shared} reducedMotion={reducedMotion} mobile={mobile} />
      </group>

      <Motes />
    </>
  );
}

/* ------------------------------------------------------------------ *
 *  ChainBackground
 *
 *  Multiple genuinely connected chain segments arranged across the
 *  full page at different positions, scales, orientations and depths.
 *  Segments frame the content edges and corners, keeping the central
 *  text area clear. Each segment alternates link orientation so links
 *  visibly interlock.
 * ------------------------------------------------------------------ */
function ChainBackground({ shared, reducedMotion, mobile }) {
  const Segment = (props) => (
    <ChainSegment
      lights={props.lights}
      shared={shared}
      reducedMotion={reducedMotion}
      {...props}
    />
  );

  const count = mobile ? 3 : 6;

  return (
    <group>
      {count >= 6 && (
        <>
          {/* Hero: large foreground chain entering from upper-right */}
          <Segment
            key="hero"
            position={[7.2, 3.4, 15.5]}
            rotation={[0, 0.42, 0.18]}
            scale={mobile ? 1.1 : 1.55}
            linkCount={6}
            width={mobile ? 1.4 : 1.8}
            height={mobile ? 0.95 : 1.3}
            tubeRadius={mobile ? 0.1 : 0.13}
            cornerRadius={mobile ? 0.26 : 0.34}
            spacing={0.8}
            arc={Math.PI / 3}
            lights
          />
          {/* Hero: smaller receding chain toward the left */}
          <Segment
            key="hero-rear"
            position={[-7.4, -1.6, 22]}
            rotation={[0, -0.35, -0.2]}
            scale={mobile ? 0.8 : 1.15}
            linkCount={4}
            width={mobile ? 1.1 : 1.35}
            height={mobile ? 0.78 : 1.0}
            tubeRadius={mobile ? 0.085 : 0.1}
            cornerRadius={mobile ? 0.24 : 0.3}
            spacing={0.82}
            arc={Math.PI / 3.4}
          />
          {/* About / mid: chain segment at the left edge */}
          <Segment
            key="about"
            position={[-9.6, -18, 18.5]}
            rotation={[0, 0.5, 0.3]}
            scale={mobile ? 0.85 : 1.2}
            linkCount={5}
            width={mobile ? 1.2 : 1.5}
            height={mobile ? 0.85 : 1.15}
            tubeRadius={mobile ? 0.09 : 0.11}
            cornerRadius={mobile ? 0.25 : 0.3}
            spacing={0.8}
            arc={Math.PI / 3.2}
          />
        </>
      )}

      {/* Timeline / center: subtle vertical accent behind the section */}
      <Segment
        key="timeline"
        position={[0.6, -38, 20]}
        rotation={[0, 0.2, 0]}
        scale={mobile ? 0.75 : 0.95}
        linkCount={mobile ? 3 : 5}
        width={mobile ? 1.1 : 1.3}
        height={mobile ? 0.8 : 1.1}
        tubeRadius={mobile ? 0.085 : 0.1}
        cornerRadius={mobile ? 0.24 : 0.3}
        spacing={0.82}
        arc={Math.PI / 2.8}
      />

      {count >= 6 && (
        <>
          {/* CTA: sweeping chain at lower-right guiding toward CTA */}
          <Segment
            key="cta"
            position={[8.2, -58, 16.5]}
            rotation={[0, -0.5, -0.25]}
            scale={mobile ? 0.9 : 1.35}
            linkCount={6}
            width={mobile ? 1.3 : 1.6}
            height={mobile ? 0.9 : 1.2}
            tubeRadius={mobile ? 0.095 : 0.12}
            cornerRadius={mobile ? 0.26 : 0.32}
            spacing={0.8}
            arc={Math.PI / 3}
          />
          {/* Footer: small restrained chain divider near the bottom */}
          <Segment
            key="footer"
            position={[-6.4, -80, 20.5]}
            rotation={[0, 0.3, 0.1]}
            scale={mobile ? 0.65 : 0.8}
            linkCount={4}
            width={mobile ? 1.0 : 1.25}
            height={mobile ? 0.7 : 0.95}
            tubeRadius={mobile ? 0.08 : 0.095}
            cornerRadius={mobile ? 0.24 : 0.3}
            spacing={0.82}
            arc={Math.PI / 3.4}
          />
        </>
      )}

      {/* Right-edge metallic fragment at mid depth */}
      <Segment
        key="edge-right"
        position={[13.2, -26, 24]}
        rotation={[0, -0.9, 0.2]}
        scale={mobile ? 0.6 : 0.85}
        linkCount={3}
        width={mobile ? 1.0 : 1.2}
        height={mobile ? 0.75 : 1.0}
        tubeRadius={mobile ? 0.08 : 0.09}
        cornerRadius={mobile ? 0.25 : 0.3}
        spacing={0.82}
        arc={Math.PI / 3.6}
      />
    </group>
  );
}

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

function ScrollScrim() {
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!ref.current) return;
      const t = Math.min(1, window.scrollY / 620);
      ref.current.style.opacity = String(t * 0.3);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 bg-[#05060b] opacity-0" />;
}

export function GlobalScene() {
  const [supported] = useState(() => detectWebGL());
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const shared = useMemo(() => ({ current: { px: 0, py: 0, dx: 0, dy: 0 } }), []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onMq);
    return () => mq.removeEventListener?.('change', onMq);
  }, []);

  if (!supported) {
    return (
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_65%_25%,rgba(117,71,232,0.22),transparent_55%),radial-gradient(ellipse_at_25%_75%,rgba(49,91,255,0.18),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(39,220,203,0.12),transparent_50%)]"
      />
    );
  }

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_22%,rgba(117,71,232,0.22),transparent_52%),radial-gradient(ellipse_at_22%_68%,rgba(49,91,255,0.17),transparent_50%),radial-gradient(ellipse_at_60%_85%,rgba(39,220,203,0.12),transparent_48%)]" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 18], fov: 46, near: 0.1, far: 90 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        performance={{ min: 0.6 }}
        frameloop={paused || reduced ? 'never' : 'always'}
        style={{ background: 'transparent' }}
      >
        <Environment preset="studio" />
        <EnvironmentRig shared={shared} reducedMotion={reduced} />
      </Canvas>
      <ScrollScrim />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(5,6,11,0.72)_100%)]" />
    </div>
  );
}
