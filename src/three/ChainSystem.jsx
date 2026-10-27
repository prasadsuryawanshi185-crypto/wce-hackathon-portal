import * as THREE from 'three';

export const CHAIN_MATERIAL_COLORS = {
  silver: '#c9c9d6',
  deepPurple: '#0f0b22',
  purpleReflect: '#7445A6',
  mintReflect: '#66E8C3',
  mintEdge: '#55DCCB',
  navy: '#05060b',
};

/* ------------------------------------------------------------------ *
 *  Chain link geometry.
 *
 *  Thick, smooth, tubular link with a softly rounded rectangular
 *  (stadium) outline — matches the reference: elongated, rounded
 *  links with substantial volume, not a thin wire torus.
 * ------------------------------------------------------------------ */
function arcPoints(cx, cy, r, startAngle, endAngle, segments) {
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const a = startAngle + (endAngle - startAngle) * (i / segments);
    pts.push(new THREE.Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 0));
  }
  return pts;
}

export function createChainLinkGeometry(optionsOrRadius = {}, maybeTubeRadius) {
  let opts = {};
  if (typeof optionsOrRadius === 'number') {
    opts = {
      width: optionsOrRadius * 2,
      height: optionsOrRadius * 1.4,
      tubeRadius: maybeTubeRadius || 0.11,
    };
  } else if (typeof optionsOrRadius === 'object' && optionsOrRadius !== null) {
    opts = optionsOrRadius;
  }
  const {
    width = 1.5,
    height = 1.05,
    cornerRadius = 0.3,
    tubeRadius = 0.11,
    radialSegments = 24,
  } = opts;
  const r = Math.min(cornerRadius, width / 2, height / 2);
  const sx = width / 2 - r;
  const sy = height / 2 - r;
  const arcSeg = 14;
  const points = [];

  // Perimeter of a stadium (rounded rectangle), sampled clockwise.
  const addLine = (x1, y1, x2, y2, n = 3) => {
    for (let i = 0; i <= n; i++) {
      const k = i / n;
      points.push(new THREE.Vector3(x1 + (x2 - x1) * k, y1 + (y2 - y1) * k, 0));
    }
  };

  // bottom straight (left -> right)
  addLine(-sx, -height / 2, sx, -height / 2);
  // bottom-right arc
  points.push(...arcPoints(sx, -height / 2 + r, r, -Math.PI / 2, 0, arcSeg).slice(1));
  // right straight
  addLine(width / 2, -sy, width / 2, sy);
  // top-right arc
  points.push(...arcPoints(sx, sy, r, 0, Math.PI / 2, arcSeg).slice(1));
  // top straight (right -> left)
  addLine(width / 2, height / 2, -sx, height / 2);
  // top-left arc
  points.push(...arcPoints(-sx, sy, r, Math.PI / 2, Math.PI, arcSeg).slice(1));
  // left straight
  addLine(-width / 2, sy, -width / 2, -sy);
  // bottom-left arc (back to start)
  points.push(...arcPoints(-sx, -sy, r, Math.PI, (3 * Math.PI) / 2, arcSeg).slice(1));

  // Drop the duplicated closing point so CatmullRom can close cleanly.
  if (points.length > 1 && points[0].distanceTo(points[points.length - 1]) < 1e-4) {
    points.pop();
  }

  const curve = new THREE.CatmullRomCurve3(points, true, 'chordal');
  const tubularSegments = Math.max(64, points.length * 2);
  const geometry = new THREE.TubeGeometry(curve, tubularSegments, tubeRadius, radialSegments, true);
  geometry.computeVertexNormals();
  return geometry;
}

/* ------------------------------------------------------------------ *
 *  Premium chrome material — polished silver with clearcoat.
 * ------------------------------------------------------------------ */
export function createChainMaterial({
  color = CHAIN_MATERIAL_COLORS.silver,
  metalness = 1.0,
  roughness = 0.18,
  clearcoat = 0.5,
  clearcoatRoughness = 0.1,
  envIntensity = 1.7,
  emissive = null,
  emissiveIntensity = 0,
} = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness,
    roughness,
    reflectivity: 1.0,
    clearcoat,
    clearcoatRoughness,
    envMapIntensity: envIntensity,
    ...(emissive && { emissive, emissiveIntensity }),
  });
}

export function createAccentMaterial({
  color = CHAIN_MATERIAL_COLORS.mintReflect,
  metalness = 1.0,
  roughness = 0.14,
  clearcoat = 0.55,
  clearcoatRoughness = 0.08,
  envIntensity = 1.9,
} = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: '#dbeefa',
    metalness,
    roughness,
    reflectivity: 1.0,
    clearcoat,
    clearcoatRoughness,
    emissive: color,
    emissiveIntensity: 0.35,
    envMapIntensity: envIntensity,
  });
}
