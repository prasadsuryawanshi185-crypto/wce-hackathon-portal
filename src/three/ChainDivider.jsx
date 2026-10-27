import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createChainLinkGeometry, createChainMaterial } from './ChainSystem';

export function ChainDivider({
  shared = { current: { px: 0, py: 0, dx: 0, dy: 0 } },
  reducedMotion = false,
  linkCount = 6,
  linkRadius = 0.28,
  tubeRadius = 0.045,
  spacing = 0.85,
  accent = false,
}) {
  const containerRef = useRef(null);
  const rootRef = useRef(null);
  const linksRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 60;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const root = new THREE.Group();
    rootRef.current = root;
    scene.add(root);

    const linkGeo = createChainLinkGeometry({ radius: linkRadius, tubeRadius });
    const material = createChainMaterial({ envIntensity: accent ? 1.6 : 1.4 });

    const links = [];
    for (let i = 0; i < linkCount; i++) {
      const tt = i / Math.max(linkCount - 1, 1);
      const angle = tt * 0.6 - 0.3;
      links.push({
        pos: [tt * spacing * 1.5 - (spacing * 1.5 * (linkCount - 1)) / 2, Math.sin(angle) * 0.15, 0],
        rot: [angle * 0.4, angle * 0.2, 0],
        scale: 1 - Math.abs(tt - 0.5) * 0.15,
      });
    }

    links.forEach((cfg, i) => {
      const linkGroup = new THREE.Group();
      linkGroup.position.set(...cfg.pos);
      linkGroup.rotation.set(...cfg.rot);
      linkGroup.scale.set(cfg.scale, cfg.scale, cfg.scale);
      const mesh = new THREE.Mesh(linkGeo, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      linkGroup.add(mesh);
      root.add(linkGroup);
      linksRef.current[i] = linkGroup;
    });

    const ambient = new THREE.AmbientLight(0x221a3a, 0.6);
    scene.add(ambient);
    const pl = new THREE.PointLight(0x66e8c3, 2.0, 7);
    pl.position.set(2, 1, 2);
    pl.decay = 2;
    scene.add(pl);

    let last = performance.now();
    const animate = (time) => {
      const delta = Math.min((time - last) / 1000, 0.1);
      last = time;
      const root = rootRef.current;
      if (root) {
        const px = shared.current?.px || 0;
        root.rotation.z += (px * 0.15 - root.rotation.z) * Math.min(1, delta * 1.2);
        if (!reducedMotion) {
          root.rotation.y += delta * 0.03;
        }
        linksRef.current.forEach((link, i) => {
          if (!link) return;
          link.rotation.x += delta * (0.03 + i * 0.008);
        });
      }
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      rootRef.current = null;
      linksRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
    />
  );
}

export function FooterChain() {
  return (
    <div className="relative w-full h-20 md:h-24 overflow-hidden pointer-events-none" aria-hidden="true">
      <canvas
        className="w-full h-full"
        style={{ background: 'transparent', display: 'block' }}
      />
    </div>
  );
}
