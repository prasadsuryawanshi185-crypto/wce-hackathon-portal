import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { HeroChainScene } from './HeroChainScene';
import { HeroFallback } from './HeroFallback';

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return Boolean(gl);
  } catch {
    return false;
  }
}

/* Camera drifts with the pointer for a cinematic parallax. */
function CameraRig({ shared }) {
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const { camera } = state;
    const t = state.clock.elapsedTime;

    target.current.x += (shared.current.px * 0.75 - target.current.x) * Math.min(1, delta * 2);
    target.current.y += (shared.current.py * -0.45 - target.current.y) * Math.min(1, delta * 2);

    camera.position.x += (target.current.x - camera.position.x) * Math.min(1, delta * 2.4);
    camera.position.y +=
      (target.current.y + Math.sin(t * 0.14) * 0.12 - camera.position.y) * Math.min(1, delta * 2.4);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  const wrapRef = useRef(null);
  const shared = useRef({ px: 0, py: 0, dx: 0, dy: 0, hover: false, dragging: false, reduced: false });
  const drag = useRef({ active: false, x: 0, y: 0 });

  const [webglSupported] = useState(() => detectWebGL());
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMq = () => setReducedMotion(mq.matches);
    mq.addEventListener?.('change', onMq);
    onMq();
    return () => mq.removeEventListener?.('change', onMq);
  }, []);

  useEffect(() => {
    const onVis = () => setRunning(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), {
      threshold: 0.02,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const active = running && !document.hidden && !reducedMotion;

  const onPointerMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    shared.current.px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    shared.current.py = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    if (drag.current.active) {
      shared.current.dx += (e.clientX - drag.current.x) * 0.006;
      shared.current.dy += (e.clientY - drag.current.y) * 0.006;
      drag.current.x = e.clientX;
      drag.current.y = e.clientY;
    }
  };

  const onPointerDown = (e) => {
    drag.current.active = true;
    shared.current.dragging = true;
    drag.current.x = e.clientX;
    drag.current.y = e.clientY;
  };

  const endDrag = () => {
    drag.current.active = false;
    shared.current.dragging = false;
  };

  if (!webglSupported) {
    return (
      <div
        ref={wrapRef}
        className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[620px]"
      >
        <HeroFallback />
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[620px] cursor-grab active:cursor-grabbing touch-none"
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerUp={endDrag}
      onPointerLeave={() => {
        shared.current.hover = false;
        endDrag();
      }}
      onPointerEnter={() => {
        shared.current.hover = true;
      }}
      role="img"
      aria-label="Photorealistic interlocking polished metal chain representing the WCE Hackathon 2027 identity"
    >
      <Canvas
        dpr={[1, 1.9]}
        camera={{ position: [0.6, 0.4, 9.2], fov: 34, near: 0.1, far: 65 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={active ? 'always' : 'never'}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} color="#221a3a" />
        <directionalLight position={[10, 12, 9]} intensity={3.0} color="#F7F5FF" />
        <directionalLight position={[6, 4, 10]} intensity={2.2} color="#66E8C3" />
        <directionalLight position={[-10, -6, 8]} intensity={1.6} color="#7445A6" />
        <spotLight position={[0, 14, 6]} angle={0.42} penumbra={1.4} intensity={1.2} color="#F7F5FF" />
        <Environment preset="studio" />
        <CameraRig shared={shared} />
        <HeroChainScene shared={shared} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
