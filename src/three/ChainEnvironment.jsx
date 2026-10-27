import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ChainEnvironment({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  reducedMotion = false,
}) {
  const root = useRef();

  useFrame((state, delta) => {
    if (!root.current || reducedMotion) return;
    const t = state.clock.elapsedTime;
    root.current.rotation.y += delta * 0.015;
    root.current.rotation.x = Math.sin(t * 0.08) * 0.03;
  });

  const purpleMat = new THREE.MeshStandardMaterial({
    color: '#17132A',
    metalness: 0.5,
    roughness: 0.4,
    emissive: '#4B2877',
    emissiveIntensity: 0.1,
  });

  const mintMat = new THREE.MeshStandardMaterial({
    color: '#0D0B1C',
    metalness: 0.3,
    roughness: 0.5,
    emissive: '#66E8C3',
    emissiveIntensity: 0.05,
  });

  return (
    <group ref={root} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      {/* Deep purple architectural planes */}
      <mesh geometry={new THREE.PlaneGeometry(60, 40)} material={purpleMat} position={[0, 0, -30]} />
      <mesh geometry={new THREE.PlaneGeometry(40, 30)} material={purpleMat} position={[30, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={new THREE.PlaneGeometry(60, 20)} material={purpleMat} position={[0, 25, -15]} rotation={[Math.PI / 4, 0, 0]} />

      {/* Mint accent strips */}
      <mesh geometry={new THREE.PlaneGeometry(0.5, 20)} material={mintMat} position={[-28, 5, -25]} />
      <mesh geometry={new THREE.PlaneGeometry(0.5, 12)} material={mintMat} position={[28, 2, -18]} />
      <mesh geometry={new THREE.PlaneGeometry(15, 0.4)} material={mintMat} position={[10, 15, -20]} rotation={[0, Math.PI / 6, 0]} />

      {/* Shadow planes */}
      <mesh geometry={new THREE.PlaneGeometry(80, 50)} material={new THREE.MeshStandardMaterial({ color: '#0a0718', transparent: true, opacity: 0.9 }) } position={[0, -12, -10]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

export function ChainArch({ position = [0, 0, 0], scale = 1, reducedMotion = false }) {
  const root = useRef();

  useFrame((state) => {
    if (!root.current || reducedMotion) return;
    const t = state.clock.elapsedTime;
    root.current.rotation.z = Math.sin(t * 0.06) * 0.02;
  });

  return (
    <group ref={root} position={position} scale={[scale, scale, scale]}>
      <mesh geometry={new THREE.BoxGeometry(1, 20, 1)} material={new THREE.MeshStandardMaterial({ color: '#17132A', metalness: 0.6, roughness: 0.3 }) } position={[0, 0, 0]} />
      <mesh geometry={new THREE.BoxGeometry(22, 1, 1)} material={new THREE.MeshStandardMaterial({ color: '#17132A', metalness: 0.6, roughness: 0.3 }) } position={[0, 10, 0]} />
      <mesh geometry={new THREE.BoxGeometry(22, 1, 1)} material={new THREE.MeshStandardMaterial({ color: '#17132A', metalness: 0.6, roughness: 0.3 }) } position={[0, -10, 0]} />
    </group>
  );
}
