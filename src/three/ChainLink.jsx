import { useMemo } from 'react';
import { createChainLinkGeometry, createChainMaterial } from './ChainSystem';
export { createChainLinkGeometry, createChainMaterial } from './ChainSystem';

export function ChainLink({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  width = 1.5,
  height = 1.05,
  cornerRadius = 0.3,
  tubeRadius = 0.11,
  material,
  materialProps = {},
}) {
  const geometry = useMemo(
    () => createChainLinkGeometry({ width, height, cornerRadius, tubeRadius }),
    [width, height, cornerRadius, tubeRadius]
  );

  const linkMaterial = useMemo(
    () =>
      material ??
      createChainMaterial(materialProps),
    [material, materialProps.color, materialProps.metalness, materialProps.roughness, materialProps.clearcoat, materialProps.envIntensity]
  );

  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
      geometry={geometry}
      material={linkMaterial}
      castShadow
      receiveShadow
    />
  );
}
