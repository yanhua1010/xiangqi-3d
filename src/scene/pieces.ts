/**
 * Procedural xiangqi piece models.
 *
 * Each piece is built from a common base (a disc) plus a distinctive crown /
 * finial made from primitives, so the seven piece types read apart from across
 * the board even before the label is legible. All geometry is shared per type;
 * only materials are cloned per instance for per-side / per-skin recolouring.
 */

import * as THREE from "three";
import { PIECE_NAMES } from "../game/engine";
import type { Piece, PieceType, Side } from "../game/types";
import type { PieceSkin } from "./skins";

export const PIECE_H = 0.5;
const PIECE_R = 0.4;

interface PieceGeometries {
  base: THREE.CylinderGeometry;
  finial: THREE.BufferGeometry;
}

// Build one shared geometry set per piece type.
const geoCache = new Map<PieceType, PieceGeometries>();

function baseGeometry(): THREE.CylinderGeometry {
  return new THREE.CylinderGeometry(PIECE_R, PIECE_R * 1.04, PIECE_H * 0.6, 40, 1);
}

/**
 * Returns a merged geometry for the decorative finial that sits on top of the
 * disc, centered so that y=0 is the top of the base disc.
 */
function finialGeometry(type: PieceType): THREE.BufferGeometry {
  const g = new THREE.Group();
  const top = PIECE_H * 0.3; // top surface height relative to base center
  const add = (mesh: THREE.Mesh) => {
    mesh.position.y += top;
    g.add(mesh);
  };

  switch (type) {
    case "K": {
      // 帅/将: stepped pedestal + tall crown with a finial.
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.26, 0.12, 24));
      add(ped);
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.22, 6));
      crown.position.y = top + 0.16;
      g.add(crown);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12));
      ball.position.y = top + 0.34;
      g.add(ball);
      // Five points of the crown.
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.1, 8));
        spike.position.set(Math.cos(a) * 0.12, top + 0.3, Math.sin(a) * 0.12);
        g.add(spike);
      }
      break;
    }
    case "A": {
      // 仕/士: advisor's tablet / rounded cap with two horns.
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2));
      cap.position.y = top;
      g.add(cap);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.18, 12));
      stem.position.y = top + 0.14;
      g.add(stem);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 10));
      knob.position.y = top + 0.25;
      g.add(knob);
      break;
    }
    case "E": {
      // 相/象: elephant — a domed cap with two curved "tusks" (cones).
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2.2));
      dome.position.y = top;
      g.add(dome);
      for (const sx of [-1, 1]) {
        const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.2, 10));
        tusk.position.set(sx * 0.14, top + 0.06, 0.1);
        tusk.rotation.x = -0.6;
        tusk.rotation.z = sx * 0.4;
        g.add(tusk);
      }
      break;
    }
    case "H": {
      // 马: horse head — a box neck with a tapered snout and two ears.
      const neck = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.26, 0.22));
      neck.position.set(0, top + 0.13, -0.02);
      g.add(neck);
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 0.2));
      head.position.set(0, top + 0.22, 0.12);
      head.rotation.x = -0.3;
      g.add(head);
      const snout = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.12));
      snout.position.set(0, top + 0.18, 0.24);
      g.add(snout);
      // mane ridge
      const mane = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.08));
      mane.position.set(0, top + 0.22, -0.02);
      g.add(mane);
      // ears
      for (const sx of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.09, 8));
        ear.position.set(sx * 0.05, top + 0.32, 0.02);
        g.add(ear);
      }
      break;
    }
    case "R": {
      // 车: chariot / tower — crenellated keep.
      const tower = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.26, 0.34));
      tower.position.y = top + 0.13;
      g.add(tower);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.12, 4));
      roof.rotation.y = Math.PI / 4;
      roof.position.y = top + 0.32;
      g.add(roof);
      // crenellations
      for (let i = -1; i <= 1; i += 2)
        for (let j = -1; j <= 1; j += 2) {
          const merlon = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.08));
          merlon.position.set(i * 0.14, top + 0.28, j * 0.14);
          g.add(merlon);
        }
      break;
    }
    case "C": {
      // 炮: cannon — a barrel on a small carriage.
      const carriage = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.2));
      carriage.position.y = top + 0.04;
      g.add(carriage);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.34, 16));
      barrel.rotation.z = Math.PI / 2;
      barrel.position.set(0, top + 0.15, 0);
      g.add(barrel);
      // muzzle ring
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 8, 20));
      ring.rotation.y = Math.PI / 2;
      ring.position.set(0.17, top + 0.15, 0);
      g.add(ring);
      // wheels
      for (const sx of [-1, 1]) {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.04, 16));
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(sx * 0.12, top + 0.04, 0.14);
        g.add(wheel);
      }
      break;
    }
    case "P": {
      // 兵/卒: footsoldier helmet — simple dome with a small spike.
      const helm = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 12, 0, Math.PI * 2, 0, Math.PI / 1.8));
      helm.position.y = top;
      g.add(helm);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 10));
      spike.position.y = top + 0.14;
      g.add(spike);
      // small brim
      const brim = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 8, 24));
      brim.rotation.x = Math.PI / 2;
      brim.position.y = top;
      g.add(brim);
      break;
    }
  }
  return mergeGroup(g);
}

function mergeGroup(group: THREE.Group): THREE.BufferGeometry {
  // Merge by collecting to non-indexed BufferGeometries transformed into world.
  const geometries: THREE.BufferGeometry[] = [];
  group.updateMatrixWorld(true);
  group.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh && mesh.geometry) {
      const g = mesh.geometry.clone();
      g.applyMatrix4(mesh.matrixWorld);
      const nonIndexed = g.index ? g.toNonIndexed() : g;
      geometries.push(nonIndexed);
    }
  });
  if (geometries.length === 0) return new THREE.BufferGeometry();
  // Simple concat of position + normal attributes.
  let posCount = 0;
  let normCount = 0;
  for (const g of geometries) {
    const p = g.getAttribute("position");
    if (p) posCount += p.count;
    const n = g.getAttribute("normal");
    if (n) normCount += n.count;
  }
  const positions = new Float32Array(posCount * 3);
  const normals = new Float32Array(normCount * 3);
  let po = 0;
  let no = 0;
  for (const g of geometries) {
    const p = g.getAttribute("position");
    if (p) {
      positions.set(p.array as Float32Array, po);
      po += p.array.length;
    }
    const n = g.getAttribute("normal");
    if (n) {
      normals.set(n.array as Float32Array, no);
      no += n.array.length;
    }
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  if (no > 0) merged.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
  else merged.computeVertexNormals();
  geometries.forEach((g) => g.dispose());
  return merged;
}

export function getGeometries(type: PieceType): PieceGeometries {
  let set = geoCache.get(type);
  if (!set) {
    set = { base: baseGeometry(), finial: finialGeometry(type) };
    geoCache.set(type, set);
  }
  return set;
}

export function disposeGeometries() {
  for (const { base, finial } of geoCache.values()) {
    base.dispose();
    finial.dispose();
  }
  geoCache.clear();
}

// --------------------------------------------------------------- label

export function makeLabelTexture(piece: Piece, skin: PieceSkin): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const ink = skin.ink[piece.side];

  // Round face disc.
  ctx.fillStyle = `#${skin.face.toString(16).padStart(6, "0")}`;
  ctx.beginPath();
  ctx.arc(128, 128, 118, 0, Math.PI * 2);
  ctx.fill();

  // Decorative inner ring.
  ctx.lineWidth = 10;
  ctx.strokeStyle = `#${skin.rim[piece.side].toString(16).padStart(6, "0")}`;
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(128, 128, 104, 0, Math.PI * 2);
  ctx.stroke();

  // Glyph.
  ctx.fillStyle = `#${ink.toString(16).padStart(6, "0")}`;
  ctx.font = "bold 130px 'STKaiti','KaiTi','Songti SC','Noto Serif SC',serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(PIECE_NAMES[piece.side][piece.type], 128, 138);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// --------------------------------------------------------------- factory

export interface PieceMesh {
  group: THREE.Group;
  base: THREE.Mesh;
  finial: THREE.Mesh;
  rim: THREE.Mesh;
  label: THREE.Sprite;
  piece: Piece;
}

export function buildPieceMesh(piece: Piece, skin: PieceSkin): PieceMesh {
  const geo = getGeometries(piece.type);
  const group = new THREE.Group();

  const bodyColor = skin.body[piece.side];
  const baseMat = new THREE.MeshStandardMaterial({
    color: bodyColor,
    roughness: skin.roughness,
    metalness: skin.metalness,
    emissive: skin.emissive ?? 0x000000,
    emissiveIntensity: skin.emissiveIntensity ?? 0,
  });
  const base = new THREE.Mesh(geo.base, baseMat);
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  // Finial uses the rim material (darker/metallic accent).
  const finialMat = new THREE.MeshStandardMaterial({
    color: skin.rim[piece.side],
    roughness: 0.4,
    metalness: skin.rimMetalness,
  });
  const finial = new THREE.Mesh(geo.finial, finialMat);
  finial.castShadow = true;
  group.add(finial);

  // Rim torus around the top edge.
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(PIECE_R - 0.03, 0.035, 12, 48),
    new THREE.MeshStandardMaterial({
      color: skin.rim[piece.side],
      roughness: 0.35,
      metalness: skin.rimMetalness,
    })
  );
  rim.rotation.x = Math.PI / 2;
  rim.position.y = PIECE_H * 0.3 - 0.01;
  group.add(rim);

  // The label floats as a billboard slightly above the disc, in front of the
  // finial. It sits at the piece's center so it's readable from the default
  // elevated camera; the finial rises behind it.
  const tex = makeLabelTexture(piece, skin);
  const label = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: true })
  );
  label.scale.set(0.72, 0.72, 1);
  label.position.set(0, PIECE_H * 0.3 + 0.02, 0);
  group.add(label);

  return { group, base, finial, rim, label, piece };
}

/** Recolour an existing mesh for a different skin / side (keeps shared geo). */
export function reskinPieceMesh(m: PieceMesh, skin: PieceSkin) {
  const side: Side = m.piece.side;
  (m.base.material as THREE.MeshStandardMaterial).color.setHex(skin.body[side]);
  (m.base.material as THREE.MeshStandardMaterial).roughness = skin.roughness;
  (m.base.material as THREE.MeshStandardMaterial).metalness = skin.metalness;
  (m.base.material as THREE.MeshStandardMaterial).emissive.setHex(skin.emissive ?? 0);
  (m.base.material as THREE.MeshStandardMaterial).emissiveIntensity =
    skin.emissiveIntensity ?? 0;
  (m.finial.material as THREE.MeshStandardMaterial).color.setHex(skin.rim[side]);
  (m.finial.material as THREE.MeshStandardMaterial).metalness = skin.rimMetalness;
  (m.rim.material as THREE.MeshStandardMaterial).color.setHex(skin.rim[side]);
  (m.rim.material as THREE.MeshStandardMaterial).metalness = skin.rimMetalness;

  const oldMap = (m.label.material as THREE.SpriteMaterial).map;
  const tex = makeLabelTexture(m.piece, skin);
  (m.label.material as THREE.SpriteMaterial).map = tex;
  (m.label.material as THREE.SpriteMaterial).needsUpdate = true;
  oldMap?.dispose();
}
