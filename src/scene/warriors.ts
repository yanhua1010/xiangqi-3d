/**
 * Procedural xiangqi "warrior" figures.
 *
 * Each piece is a little character assembled from primitives — a general with a
 * cape, jade belt and spiked crown; an advisor with a feather fan; an elephant
 * with a segmented trunk and tusks; a horse with mane and tail; a chariot on
 * spoked wheels; a cannon on wheels with a muzzle and fuse spark; and a
 * spear-carrying footsoldier. The mesh hierarchy exposes named parts so the
 * march animation can swing legs, wheels, trunks, capes and beads without any
 * skeleton or external model.
 *
 * All geometry is shared per piece type; only materials are per instance.
 */

import * as THREE from "three";
import type { PieceType, Side } from "../game/types";
import { PIECE_NAMES } from "../game/engine";
import type { PieceSkin } from "./skins";

export interface Figure {
  root: THREE.Group;
  body?: THREE.Mesh;
  head?: THREE.Mesh;
  legs: THREE.Object3D[];
  legPhase: number[];
  legAmp: number;
  wheels: THREE.Object3D[];
  wheelRadius: number;
  trunk: THREE.Object3D[];
  trunkBase: number[];
  ears: THREE.Object3D[];
  tail?: THREE.Object3D;
  tailBase: number;
  cape?: THREE.Object3D;
  capeBase: number;
  fan?: THREE.Object3D;
  beads: THREE.Object3D[];
  fuseSpark?: THREE.Mesh;
  muzzleFlash?: THREE.Mesh;
  spear?: THREE.Object3D;
  marchPhase: number;
  height: number;
}

export interface WarriorPalette {
  glaze: THREE.MeshPhysicalMaterial;
  glazeDeep: THREE.MeshPhysicalMaterial;
  trim: THREE.MeshStandardMaterial;
  bronze: THREE.MeshStandardMaterial;
  dark: THREE.MeshStandardMaterial;
  wood: THREE.MeshStandardMaterial;
  skin: THREE.MeshStandardMaterial;
  ivory: THREE.MeshStandardMaterial;
  cream: THREE.MeshStandardMaterial;
  jade: THREE.MeshPhysicalMaterial;
}

// --------------------------------------------------------------- materials

function darken(hex: number, amount = 0.6): number {
  const c = new THREE.Color(hex);
  c.multiplyScalar(amount);
  return c.getHex();
}

export function makePalette(side: Side, skin: PieceSkin): WarriorPalette {
  const armor = skin.body[side];
  const trim = skin.rim[side];
  return {
    glaze: new THREE.MeshPhysicalMaterial({
      color: armor,
      roughness: 0.38,
      metalness: 0.15,
      clearcoat: 0.7,
      clearcoatRoughness: 0.28,
    }),
    glazeDeep: new THREE.MeshPhysicalMaterial({
      color: darken(armor, 0.7),
      roughness: 0.45,
      metalness: 0.15,
      clearcoat: 0.5,
    }),
    trim: new THREE.MeshStandardMaterial({
      color: trim,
      roughness: 0.26,
      metalness: 0.95,
      emissive: trim,
      emissiveIntensity: 0.1,
    }),
    bronze: new THREE.MeshStandardMaterial({
      color: 0x5a6a5e,
      roughness: 0.34,
      metalness: 0.9,
    }),
    dark: new THREE.MeshStandardMaterial({
      color: side === "r" ? 0x241c36 : 0x14181c,
      roughness: 0.7,
      metalness: 0.05,
    }),
    wood: new THREE.MeshStandardMaterial({
      color: 0x4a2a17,
      roughness: 0.8,
      metalness: 0.02,
    }),
    skin: new THREE.MeshStandardMaterial({
      color: side === "r" ? 0xe0b088 : 0xc9986e,
      roughness: 0.82,
      metalness: 0,
    }),
    ivory: new THREE.MeshStandardMaterial({
      color: 0xf0e6c0,
      roughness: 0.5,
      metalness: 0,
    }),
    cream: new THREE.MeshStandardMaterial({
      color: 0xefe6cf,
      roughness: 0.9,
      metalness: 0,
      side: THREE.DoubleSide,
    }),
    jade: new THREE.MeshPhysicalMaterial({
      color: 0x7fd6a0,
      roughness: 0.2,
      metalness: 0,
      clearcoat: 1,
      emissive: 0x0f5a36,
      emissiveIntensity: 0.18,
    }),
  };
}

// --------------------------------------------------------------- geometry helpers

// Shared geometries, keyed by a signature.
const geoCache = new Map<string, THREE.BufferGeometry>();
function cyl(rt: number, rb: number, h: number, seg = 12): THREE.CylinderGeometry {
  const k = `c|${rt}|${rb}|${h}|${seg}`;
  let g = geoCache.get(k);
  if (!g) {
    g = new THREE.CylinderGeometry(rt, rb, h, seg);
    geoCache.set(k, g);
  }
  return g as THREE.CylinderGeometry;
}
function sph(r: number, ws = 14, hs = 10): THREE.SphereGeometry {
  const k = `s|${r}|${ws}|${hs}`;
  let g = geoCache.get(k);
  if (!g) {
    g = new THREE.SphereGeometry(r, ws, hs);
    geoCache.set(k, g);
  }
  return g as THREE.SphereGeometry;
}
function cone(r: number, h: number, seg = 10): THREE.ConeGeometry {
  const k = `k|${r}|${h}|${seg}`;
  let g = geoCache.get(k);
  if (!g) {
    g = new THREE.ConeGeometry(r, h, seg);
    geoCache.set(k, g);
  }
  return g as THREE.ConeGeometry;
}
function tor(r: number, tube: number, seg = 20): THREE.TorusGeometry {
  const k = `t|${r}|${tube}|${seg}`;
  let g = geoCache.get(k);
  if (!g) {
    g = new THREE.TorusGeometry(r, tube, 8, seg);
    geoCache.set(k, g);
  }
  return g as THREE.TorusGeometry;
}
function box(w: number, h: number, d: number): THREE.BoxGeometry {
  const k = `b|${w}|${h}|${d}`;
  let g = geoCache.get(k);
  if (!g) {
    g = new THREE.BoxGeometry(w, h, d);
    geoCache.set(k, g);
  }
  return g as THREE.BoxGeometry;
}

function mesh(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x = 0,
  y = 0,
  z = 0
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// --------------------------------------------------------------- base disc with label

export function buildBase(
  side: Side,
  type: PieceType,
  skin: PieceSkin,
  palette: WarriorPalette
): { base: THREE.Group; labelMat: THREE.MeshStandardMaterial } {
  const root = new THREE.Group();

  const discMat = new THREE.MeshStandardMaterial({
    color: skin.face,
    roughness: 0.55,
    metalness: 0.1,
  });
  const disc = mesh(cyl(0.42, 0.44, 0.1, 32), discMat);
  disc.position.y = 0.05;
  root.add(disc);

  // Coloured rim.
  const rim = mesh(tor(0.4, 0.03, 40), palette.trim);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.1;
  root.add(rim);

  // Label on the top face.
  const tex = makeLabelTexture(side, type, skin);
  const labelMat = new THREE.MeshStandardMaterial({
    map: tex,
    roughness: 0.6,
    metalness: 0.05,
  });
  const label = mesh(new THREE.CircleGeometry(0.34, 36), labelMat);
  label.rotation.x = -Math.PI / 2;
  label.position.y = 0.102;
  label.receiveShadow = true;
  root.add(label);

  return { base: root, labelMat };
}

function makeLabelTexture(
  side: Side,
  type: PieceType,
  skin: PieceSkin
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const ink = skin.ink[side];
  ctx.fillStyle = `#${skin.face.toString(16).padStart(6, "0")}`;
  ctx.beginPath();
  ctx.arc(128, 128, 124, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 12;
  ctx.strokeStyle = `#${skin.rim[side].toString(16).padStart(6, "0")}`;
  ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(128, 128, 108, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = `#${ink.toString(16).padStart(6, "0")}`;
  ctx.font = "900 150px 'STKaiti','KaiTi','Songti SC','Noto Serif SC',serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(PIECE_NAMES[side][type], 128, 140);
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// --------------------------------------------------------------- figures

function emptyFig(type: PieceType): Figure {
  return {
    root: new THREE.Group(),
    legs: [],
    legPhase: [],
    legAmp: 0.35,
    wheels: [],
    wheelRadius: 0.25,
    trunk: [],
    trunkBase: [],
    ears: [],
    beads: [],
    tailBase: 0,
    capeBase: 0,
    marchPhase: Math.random() * 6,
    height: 0.6,
    // stash type via cast
    ...({ type } as object),
  } as Figure;
}

// 帅/将 General
function buildGeneral(p: WarriorPalette): Figure {
  const f = emptyFig("K");
  const body = mesh(cyl(0.15, 0.3, 0.5, 16), p.glaze, 0, 0.25, 0);
  const belt = mesh(tor(0.185, 0.022), p.trim, 0, 0.29, 0);
  belt.rotation.x = Math.PI / 2;
  const sashL = mesh(cyl(0.075, 0.075, 0.24), p.glazeDeep, -0.17, 0.47, 0);
  sashL.rotation.set(0.7, 0, 0.5);
  const sashR = sashL.clone();
  sashR.position.set(0.12, 0.4, 0.1);
  sashR.rotation.set(0.7, 0, -0.5);
  const jadePendant = mesh(box(0.075, 0.22, 0.018), p.jade, 0, 0.4, 0.2);
  jadePendant.rotation.x = -0.12;
  const head = mesh(sph(0.105, 18, 14), p.skin, 0, 0.6, 0);
  const hat = mesh(cyl(0.11, 0.115, 0.05, 14), p.dark, 0, 0.685, 0);
  const hatTop = mesh(box(0.25, 0.016, 0.14), p.dark, 0, 0.722, 0);
  const finial = mesh(box(0.05, 0.03, 0.02), p.trim, 0, 0.7, 0.075);

  // Beaded tassels at the brow, left and right.
  const beads: THREE.Object3D[] = [];
  for (const side of [0.062, -0.062]) {
    for (let d = 0; d < 4; d++) {
      const strand = new THREE.Group();
      strand.position.set(-0.09 + d * 0.06, 0.715, side);
      for (let r = 0; r < 3; r++) {
        strand.add(mesh(sph(0.011, 8, 6), r % 2 ? p.jade : p.trim, 0, -0.035 - r * 0.032, 0));
      }
      f.root.add(strand);
      beads.push(strand);
    }
  }

  // Cape.
  const cape = new THREE.Group();
  cape.position.set(0, 0.52, -0.14);
  cape.rotation.x = 0.16;
  const capeCloth = mesh(box(0.34, 0.42, 0.018), p.glazeDeep, 0, -0.2, -0.02);
  cape.add(capeCloth);

  f.root.add(body, belt, sashL, sashR, jadePendant, head, hat, hatTop, finial, cape);
  f.body = body;
  f.head = head;
  f.cape = cape;
  f.capeBase = 0.16;
  f.beads = beads;
  f.height = 0.82;
  return f;
}

// 仕/士 Advisor
function buildAdvisor(p: WarriorPalette): Figure {
  const f = emptyFig("A");
  const body = mesh(cyl(0.13, 0.26, 0.46, 14), p.glaze, 0, 0.23, 0);
  const belt = mesh(tor(0.155, 0.016), p.trim, 0, 0.28, 0);
  belt.rotation.x = Math.PI / 2;
  const sashL = mesh(cyl(0.05, 0.1, 0.24, 10), p.glazeDeep, -0.16, 0.34, 0.02);
  sashL.rotation.z = 0.5;
  const sashR = sashL.clone();
  sashR.position.set(0.17, 0.36, 0.06);
  sashR.rotation.set(0.5, 0, -0.55);

  // Feather fan held to the side.
  const fan = new THREE.Group();
  fan.position.set(0.22, 0.3, 0.13);
  const handle = mesh(cyl(0.011, 0.013, 0.17), p.wood, 0, 0, 0);
  fan.add(handle);
  for (let v = 0; v < 5; v++) {
    const feather = mesh(cone(0.035, 0.17, 6), p.cream, 0, 0.14, 0);
    feather.scale.z = 0.28;
    feather.rotation.z = (v - 2) * 0.28;
    feather.position.x = (v - 2) * 0.028;
    feather.position.y = 0.14 + Math.abs(v - 2) * -0.012;
    fan.add(feather);
  }

  const head = mesh(sph(0.095, 16, 12), p.skin, 0, 0.535, 0);
  const hat = mesh(cyl(0.095, 0.1, 0.06, 12), p.dark, 0, 0.6, 0);
  const wingL = mesh(box(0.15, 0.014, 0.05), p.dark, -0.155, 0.615, -0.01);
  wingL.rotation.z = 0.1;
  const wingR = wingL.clone();
  wingR.position.set(0.155, 0.615, -0.01);
  wingR.rotation.z = -0.1;

  f.root.add(body, belt, sashL, sashR, fan, head, hat, wingL, wingR);
  f.body = body;
  f.head = head;
  f.fan = fan;
  f.height = 0.68;
  return f;
}

// 相/象 Elephant (animal)
function buildElephant(p: WarriorPalette): Figure {
  const f = emptyFig("E");
  const body = mesh(sph(0.24, 18, 14), p.glaze, 0, 0.4, 0);
  body.scale.set(1.02, 0.82, 1.35);
  const saddle = mesh(box(0.38, 0.05, 0.42), p.glazeDeep, 0, 0.565, -0.02);
  // Saddle studs.
  for (const sx of [-1, 1])
    for (const sz of [-1, 1])
      f.root.add(mesh(sph(0.02, 8, 6), p.trim, sx * 0.17, 0.53, -0.02 + sz * 0.19));
  const head = mesh(sph(0.165, 16, 12), p.glaze, 0, 0.52, 0.31);
  const brow = mesh(cyl(0.06, 0.06, 0.012), p.trim, 0, 0.6, 0.4);
  brow.rotation.x = -0.55;

  // Segmented trunk.
  const trunk: THREE.Object3D[] = [];
  let parent: THREE.Object3D = new THREE.Group();
  parent.position.set(0, 0.47, 0.44);
  parent.rotation.x = 1.05;
  f.root.add(parent);
  const segs = [0, -0.34, -0.3, -0.22];
  for (let s = 0; s < 4; s++) {
    const r = 0.052 - s * 0.009;
    const part = new THREE.Group();
    part.add(mesh(cyl(r, r + 0.008, 0.15, 10), p.glaze, 0, -0.075, 0));
    if (s === 0) part.add(mesh(tor(0.075, 0.012), p.trim, 0, -0.075, 0));
    if (s > 0) {
      part.position.y = -0.15;
      part.rotation.x = segs[s];
      (parent as THREE.Group).add(part);
    } else {
      (parent as THREE.Group).add(part);
    }
    trunk.push(part);
    parent = part;
  }
  // Tusks.
  for (const sx of [-1, 1]) {
    const tusk = mesh(cone(0.028, 0.16, 8), p.ivory, sx * 0.1, 0.42, 0.42);
    tusk.rotation.x = 1.25;
    tusk.rotation.z = sx * 0.15;
    f.root.add(tusk);
  }
  // Ears.
  const ears: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    const ear = new THREE.Group();
    ear.position.set(sx * 0.1, 0.56, 0.26);
    const flap = mesh(sph(0.15, 12, 8), p.glazeDeep, sx * 0.09, 0, 0);
    flap.scale.set(0.9, 1.05, 0.22);
    ear.add(flap);
    f.root.add(ear);
    ears.push(ear);
  }
  // Legs.
  const legs: THREE.Object3D[] = [];
  for (const [lx, lz] of [
    [-0.13, 0.15],
    [0.13, 0.15],
    [-0.13, -0.17],
    [0.13, -0.17],
  ]) {
    const leg = new THREE.Group();
    leg.position.set(lx, 0.34, lz);
    leg.add(mesh(cyl(0.065, 0.075, 0.32, 10), p.glazeDeep, 0, -0.16, 0));
    const foot = mesh(tor(0.075, 0.012), p.trim, 0, -0.28, 0);
    foot.rotation.x = Math.PI / 2;
    leg.add(foot);
    f.root.add(leg);
    legs.push(leg);
  }
  // Tail.
  const tail = new THREE.Group();
  tail.position.set(0, 0.44, -0.33);
  tail.rotation.x = -0.7;
  tail.add(mesh(cyl(0.018, 0.028, 0.2, 8), p.glazeDeep, 0, -0.1, 0));
  tail.add(mesh(cone(0.03, 0.07, 8), p.dark, 0, -0.23, 0));
  f.root.add(tail);

  f.root.add(body, saddle, head, brow);
  f.body = body;
  f.head = head;
  f.trunk = trunk;
  f.trunkBase = [1.05, -0.34, -0.3, -0.22];
  f.ears = ears;
  f.legs = legs;
  f.legPhase = [0, Math.PI, Math.PI, 0];
  f.legAmp = 0.3;
  f.tail = tail;
  f.tailBase = -0.7;
  f.height = 0.74;
  return f;
}

// 马 Horse
function buildHorse(p: WarriorPalette): Figure {
  const f = emptyFig("H");
  const body = mesh(sph(0.26, 18, 14), p.glaze, 0, 0.44, 0);
  body.scale.set(0.85, 0.9, 1.45);
  const chest = mesh(cyl(0.075, 0.105, 0.3, 12), p.glaze, 0, 0.62, 0.26);
  chest.rotation.x = 0.55;

  // Head group.
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.76, 0.4);
  headGroup.rotation.x = 0.35;
  const hHead = mesh(sph(0.1, 14, 10), p.glaze, 0, 0, 0);
  hHead.scale.set(0.8, 0.85, 1.35);
  const snout = mesh(sph(0.055, 10, 8), p.glazeDeep, 0, -0.045, 0.15);
  snout.scale.set(0.85, 0.8, 1.2);
  const eyeL = mesh(cone(0.022, 0.07, 6), p.dark, -0.045, 0.1, -0.03);
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.045;
  const forelock = mesh(tor(0.06, 0.008), p.trim, 0, -0.03, 0.14);
  forelock.rotation.x = 0.4;
  headGroup.add(hHead, snout, eyeL, eyeR, forelock);
  f.head = hHead;

  // Mane.
  for (let i = 0; i < 5; i++) {
    const s = i / 4;
    f.root.add(
      mesh(box(0.028, 0.075, 0.05), p.dark, 0, 0.8 - s * 0.2, 0.33 - s * 0.18)
    );
  }
  const saddle = mesh(box(0.3, 0.045, 0.28), p.glazeDeep, 0, 0.6, -0.02);
  const girth = mesh(tor(0.1, 0.022, 14), p.trim, 0, 0.625, -0.02);
  girth.rotation.x = Math.PI / 2;
  girth.scale.set(1.4, 1, 0.6);

  // Legs.
  const legs: THREE.Object3D[] = [];
  for (const [lx, lz] of [
    [-0.11, 0.24],
    [0.11, 0.24],
    [-0.11, -0.24],
    [0.11, -0.24],
  ]) {
    const leg = new THREE.Group();
    leg.position.set(lx, 0.36, lz);
    leg.add(mesh(cyl(0.048, 0.038, 0.2, 10), p.glaze, 0, -0.1, 0));
    const knee = new THREE.Group();
    knee.position.y = -0.2;
    knee.add(mesh(cyl(0.032, 0.028, 0.16, 8), p.glazeDeep, 0, -0.07, 0));
    knee.add(mesh(box(0.065, 0.045, 0.08), p.dark, 0, -0.16, 0.01));
    leg.add(knee);
    f.root.add(leg);
    legs.push(leg);
  }
  // Tail.
  const tail = new THREE.Group();
  tail.position.set(0, 0.52, -0.36);
  tail.rotation.x = -0.85;
  tail.add(mesh(cyl(0.02, 0.035, 0.24, 8), p.dark, 0, -0.12, 0));
  tail.add(mesh(cone(0.045, 0.1, 8), p.dark, 0, -0.28, 0));
  f.root.add(tail);

  f.root.add(body, chest, headGroup, saddle, girth);
  f.body = body;
  f.legs = legs;
  f.legPhase = [0, Math.PI, Math.PI, 0];
  f.legAmp = 0.5;
  f.tail = tail;
  f.tailBase = -0.85;
  f.height = 0.86;
  return f;
}

// 车 Chariot
function buildChariot(p: WarriorPalette): Figure {
  const f = emptyFig("R");
  const body = new THREE.Group();
  const hull = mesh(box(0.44, 0.15, 0.48), p.glaze, 0, 0.34, 0);
  const railFront = mesh(box(0.46, 0.028, 0.03), p.trim, 0, 0.44, 0.24);
  const railL = mesh(box(0.03, 0.028, 0.48), p.trim, -0.215, 0.44, 0);
  const railR = railL.clone();
  railR.position.x = 0.215;
  const panelL = mesh(box(0.018, 0.12, 0.38), p.glazeDeep, -0.225, 0.33, 0);
  const panelR = panelL.clone();
  panelR.position.x = 0.225;
  // Banner pole.
  const pole = new THREE.Group();
  pole.position.set(-0.1, 0.42, -0.1);
  pole.rotation.z = 0.12;
  pole.add(mesh(cyl(0.014, 0.016, 0.55), p.wood, 0, 0.22, 0));
  const banner = mesh(box(0.018, 0.05, 0.14), p.trim, 0, 0.47, 0.05);
  pole.add(banner);
  pole.add(mesh(cone(0.02, 0.07, 8), p.trim, 0, 0.53, 0));
  body.add(hull, railFront, railL, railR, panelL, panelR, pole);
  f.root.add(body);

  // Two spoked wheels.
  const wheels: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    const wheel = new THREE.Group();
    wheel.position.set(sx * 0.27, 0.26, 0);
    const wdisc = mesh(cyl(0.26, 0.26, 0.05, 20), p.wood);
    wdisc.rotation.z = Math.PI / 2;
    wheel.add(wdisc);
    for (let s = 0; s < 8; s++) {
      const spoke = mesh(box(0.022, 0.22, 0.022), p.trim);
      spoke.rotation.x = (s / 8) * Math.PI;
      spoke.rotation.order = "ZXY";
      const wrap = new THREE.Group();
      wrap.rotation.z = Math.PI / 2;
      wrap.add(spoke);
      wrap.rotation.y = (s / 8) * Math.PI;
      wheel.add(wrap);
    }
    wheel.add(mesh(sph(0.05, 10, 8), p.trim));
    f.root.add(wheel);
    wheels.push(wheel);
  }
  // Front tongue / axle.
  const tongue = mesh(cyl(0.026, 0.03, 0.5), p.wood, 0, 0.3, 0.48);
  tongue.rotation.x = Math.PI / 2;
  const yoke = mesh(box(0.3, 0.035, 0.05), p.trim, 0, 0.3, 0.72);
  f.root.add(tongue, yoke);

  f.body = body as unknown as THREE.Mesh;
  f.wheels = wheels;
  f.wheelRadius = 0.26;
  f.height = 0.74;
  return f;
}

// 炮 Cannon
function buildCannon(p: WarriorPalette): Figure {
  const f = emptyFig("C");
  const carriage = mesh(box(0.3, 0.08, 0.42), p.wood, 0, 0.24, -0.02);
  const trail = mesh(box(0.09, 0.05, 0.38), p.wood, 0, 0.16, -0.3);
  trail.rotation.x = 0.28;
  const cheekL = mesh(box(0.05, 0.12, 0.1), p.glazeDeep, -0.1, 0.34, 0.06);
  const cheekR = cheekL.clone();
  cheekR.position.x = 0.1;
  f.root.add(carriage, trail, cheekL, cheekR);

  // Wheels.
  const wheels: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    const wheel = new THREE.Group();
    wheel.position.set(sx * 0.2, 0.2, 0.06);
    const wdisc = mesh(cyl(0.2, 0.2, 0.045, 18), p.wood);
    wdisc.rotation.z = Math.PI / 2;
    wheel.add(wdisc);
    for (let s = 0; s < 6; s++) {
      const spoke = mesh(box(0.02, 0.17, 0.02), p.trim);
      const wrap = new THREE.Group();
      wrap.rotation.z = Math.PI / 2;
      wrap.add(spoke);
      wrap.rotation.y = (s / 6) * Math.PI;
      wheel.add(wrap);
    }
    wheel.add(mesh(sph(0.042, 10, 8), p.trim));
    f.root.add(wheel);
    wheels.push(wheel);
  }

  // Barrel assembly.
  const barrel = new THREE.Group();
  barrel.position.set(0, 0.4, 0.04);
  const tube = mesh(cyl(0.075, 0.095, 0.55, 16), p.bronze, 0, 0, 0.02);
  tube.rotation.x = Math.PI / 2;
  barrel.add(tube);
  for (const z of [-0.18, 0, 0.18]) barrel.add(mesh(tor(0.088, 0.013), p.trim, 0, 0, z));
  barrel.add(mesh(tor(0.082, 0.016), p.trim, 0, 0, 0.3));
  const breech = mesh(sph(0.075, 12, 8), p.bronze, 0, 0, -0.27);
  barrel.add(breech);
  // Muzzle flash (hidden until fired).
  const flash = mesh(
    sph(0.1, 10, 8),
    new THREE.MeshBasicMaterial({
      color: 0xffc23a,
      transparent: true,
      opacity: 0.9,
    }),
    0, 0, 0.36
  );
  flash.scale.setScalar(0.001);
  (flash.material as THREE.MeshBasicMaterial).color.setHex(0xffc23a);
  barrel.add(flash);
  const fuseSpark = mesh(
    sph(0.02, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xff7a2a }),
    0, 0.09, -0.22
  );
  barrel.add(fuseSpark);
  // Sight posts.
  barrel.add(mesh(sph(0.045, 10, 8), p.dark, 0.16, 0.045, -0.2));
  barrel.add(mesh(sph(0.045, 10, 8), p.dark, 0.24, 0.045, -0.14));
  barrel.add(mesh(sph(0.045, 10, 8), p.dark, 0.2, 0.12, -0.17));
  f.root.add(barrel);

  f.wheels = wheels;
  f.wheelRadius = 0.2;
  f.barrel = barrel;
  f.muzzleFlash = flash;
  f.fuseSpark = fuseSpark;
  f.height = 0.6;
  return f;
}

// 兵/卒 Pawn (spear soldier)
function buildSoldier(p: WarriorPalette): Figure {
  const f = emptyFig("P");
  const legs: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(sx * 0.065, 0.2, 0);
    leg.add(mesh(cyl(0.045, 0.05, 0.2, 8), p.dark, 0, -0.1, 0));
    f.root.add(leg);
    legs.push(leg);
  }
  const torso = mesh(cyl(0.13, 0.165, 0.14, 12), p.glazeDeep, 0, 0.27, 0);
  const chest = mesh(cyl(0.105, 0.125, 0.24, 12), p.glaze, 0, 0.45, 0);
  const shoulderL = mesh(cyl(0.06, 0.06, 0.1, 8), p.glaze, -0.125, 0.55, 0);
  shoulderL.scale.y = 0.7;
  const shoulderR = shoulderL.clone();
  shoulderR.position.x = 0.125;
  const armL = mesh(cyl(0.032, 0.036, 0.2, 8), p.glaze, -0.15, 0.47, 0.03);
  armL.rotation.z = -0.25;
  const armR = armL.clone();
  armR.position.set(0.16, 0.47, 0);
  armR.rotation.z = 0.35;
  const head = mesh(sph(0.088, 16, 12), p.skin, 0, 0.62, 0);
  const helmet = mesh(
    new THREE.SphereGeometry(0.13, 16, 12, 0, Math.PI * 2, 0, Math.PI / 1.8),
    p.glaze,
    0,
    0.62,
    0
  );
  const spike = mesh(cone(0.06, 10, 8), p.trim, 0, 0.14, 0);
  helmet.add(spike);
  const brim = mesh(tor(0.14, 0.02), p.trim, 0, 0, 0);
  brim.rotation.x = Math.PI / 2;
  helmet.add(brim);

  // Spear held forward.
  const spear = new THREE.Group();
  spear.position.set(0.19, 0.06, 0.05);
  spear.add(mesh(cyl(0.011, 0.013, 0.62), p.wood, 0, 0.31, 0));
  spear.add(mesh(cone(0.024, 0.09, 8), p.trim, 0, 0.66, 0));
  spear.add(mesh(cone(0.03, 0.06, 8), p.glaze, 0, 0.6, 0));
  spear.add(mesh(tor(0.088, 0.01), p.trim, 0, 0.635, 0));
  f.root.add(
    ...legs,
    torso,
    chest,
    shoulderL,
    shoulderR,
    armL,
    armR,
    head,
    helmet,
    spear
  );

  f.body = chest;
  f.head = head;
  f.legs = legs;
  f.legPhase = [0, Math.PI];
  f.legAmp = 0.42;
  f.spear = spear;
  f.height = 0.74;
  return f;
}

// augment Figure with optional barrel for cannon
declare module "./warriors" {}
export interface Figure {
  barrel?: THREE.Group;
  armor?: unknown;
}

const BUILDERS: Record<PieceType, (p: WarriorPalette) => Figure> = {
  K: buildGeneral,
  A: buildAdvisor,
  E: buildElephant,
  H: buildHorse,
  R: buildChariot,
  C: buildCannon,
  P: buildSoldier,
};

export interface WarriorMesh {
  group: THREE.Group;
  figure: Figure;
  baseLabel: THREE.MeshStandardMaterial;
  palette: WarriorPalette;
}

export function buildWarrior(
  side: Side,
  type: PieceType,
  skin: PieceSkin
): WarriorMesh {
  const palette = makePalette(side, skin);
  const fig = BUILDERS[type](palette);
  const { base, labelMat } = buildBase(side, type, skin, palette);
  fig.root.add(base);
  return { group: fig.root, figure: fig, baseLabel: labelMat, palette };
}

/** Re-skin an existing warrior in place (shared geometry, swapped materials). */
export function reskinWarrior(w: WarriorMesh, side: Side, skin: PieceSkin) {
  w.palette.glaze.color.setHex(skin.body[side]);
  w.palette.glazeDeep.color.setHex(darken(skin.body[side], 0.7));
  w.palette.trim.color.setHex(skin.rim[side]);
  w.palette.trim.emissive.setHex(skin.rim[side]);
  const oldMap = w.baseLabel.map;
  w.baseLabel.map = makeLabelTexture(side, typeOf(w), skin);
  w.baseLabel.needsUpdate = true;
  oldMap?.dispose();
}

function typeOf(w: WarriorMesh): PieceType {
  // Recover the piece type from stored label texture character fallback:
  // the figure root carries it via the emptyFig spread.
  return (w.figure as unknown as { type?: PieceType }).type ?? "P";
}

// --------------------------------------------------------------- animation

/**
 * Advance a figure's procedural animation.
 * @param time   elapsed seconds
 * @param delta  frame delta seconds
 * @param march  0 = idle, 1 = marching (legs swing, wheels roll, cape billows)
 */
export function animateFigure(f: Figure, time: number, delta: number, march: number) {
  if (f.body) {
    const s = 1 + Math.sin(time * 2.1 + f.marchPhase) * 0.015;
    f.body.scale.y = s;
  }
  if (march > 0) f.marchPhase += delta * 9;

  const u = march;
  f.legs.forEach((leg, i) => {
    leg.rotation.x = Math.sin(f.marchPhase + (f.legPhase[i] ?? 0)) * f.legAmp * u;
  });
  f.wheels.forEach((w) => {
    if (march > 0) w.rotation.x += (delta * 3) / f.wheelRadius;
  });
  f.trunk.forEach((seg, i) => {
    const base = f.trunkBase[i] ?? 0;
    seg.rotation.x =
      base + Math.sin(time * 1.7 + i * 0.7 + f.marchPhase * 0.1) * (0.07 + i * 0.02) - u * 0.3;
  });
  f.ears.forEach((ear, i) => {
    const dir = i === 0 ? -1 : 1;
    ear.rotation.y = dir * (0.12 + Math.sin(time * 2.3 + i) * 0.13);
  });
  if (f.tail) {
    f.tail.rotation.x = f.tailBase + Math.sin(time * 1.9) * 0.16;
  }
  if (f.fan) {
    f.fan.rotation.z = Math.sin(time * 1.4) * 0.16 + u * 0.3;
  }
  if (f.cape) {
    f.cape.rotation.x = f.capeBase + Math.sin(time * 1.5) * 0.05 + u * 0.22;
  }
  f.beads.forEach((strand, i) => {
    strand.rotation.x = Math.sin(time * 1.8 + i * 0.9) * (0.08 + u * 0.12);
  });
  if (f.head && f.trunk.length === 0) {
    f.head.rotation.y = Math.sin(time * 0.55 + f.marchPhase) * 0.08;
  }
  if (f.spear) {
    f.spear.rotation.x = Math.sin(time * 2 + f.marchPhase) * 0.08 * u;
  }
  if (f.fuseSpark) {
    const s = 0.7 + Math.abs(Math.sin(time * 7.3)) * 0.9;
    f.fuseSpark.scale.setScalar(s);
    (f.fuseSpark.material as THREE.MeshBasicMaterial).color.setHSL(
      0.07,
      1,
      0.5 + Math.abs(Math.sin(time * 11)) * 0.25
    );
  }
  if (f.muzzleFlash) {
    // Decays on its own after triggerMuzzleFlash.
  }
}

let muzzleTimeout: number | null = null;
export function triggerMuzzleFlash(f: Figure) {
  if (!f.muzzleFlash) return;
  f.muzzleFlash.scale.setScalar(1);
  if (muzzleTimeout) window.clearTimeout(muzzleTimeout);
  muzzleTimeout = window.setTimeout(() => {
    if (f.muzzleFlash) f.muzzleFlash.scale.setScalar(0.001);
  }, 120);
}

export function disposeSharedGeometries() {
  for (const g of geoCache.values()) g.dispose();
  geoCache.clear();
}
