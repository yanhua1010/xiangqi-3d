/**
 * Skin / theme definitions. A "piece skin" changes what each xiangqi piece is
 * made of (its PBR material + rim colour + canvas label styling), while a
 * "board theme" changes the board surface, frame, lighting and ambience.
 *
 * Skins are fully procedural — no external models or textures are required —
 * so they can be swapped at any time with a single state change.
 */

import type { Side } from "../game/types";

export interface PieceSkin {
  id: string;
  name: string;
  /** Main body colour for each side. */
  body: Record<Side, number>;
  /** Rim / accent colour for each side. */
  rim: Record<Side, number>;
  /** Label ink colour for each side. */
  ink: Record<Side, number>;
  /** PBR roughness for the body disc. */
  roughness: number;
  /** PBR metalness for the body disc. */
  metalness: number;
  /** Rim metalness. */
  rimMetalness: number;
  /** Label background disc colour. */
  face: number;
  /** Optional bevel / emissive accent. */
  emissive?: number;
  emissiveIntensity?: number;
}

export interface BoardTheme {
  id: string;
  name: string;
  /** Playing surface colour. */
  surface: number;
  /** Frame / slab colour. */
  frame: number;
  /** Grid line colour. */
  line: number;
  /** River-text colour. */
  river: number;
  /** Scene background colour. */
  background: number;
  /** Fog colour (matches background usually). */
  fog: number;
  /** Hemisphere sky/ground colours. */
  hemiSky: number;
  hemiGround: number;
  /** Key light colour. */
  keyLight: number;
  keyIntensity: number;
  /** Ambient kind. */
  ambience: "battle" | "courtyard" | "none";
  /** Roughness of the board surface. */
  surfaceRoughness: number;
  /** Optional accent decorations. */
  accent?: "none" | "jade" | "bronze" | "ink";
}

export const PIECE_SKINS: PieceSkin[] = [
  {
    id: "wood",
    name: "釉彩 · 经典",
    // Glazed-clay colours from the reference project: crimson glaze vs
    // deep ink-green glaze, gold trim, ivory bases.
    body: { r: 0xa83a2c, b: 0x3a5f58 },
    rim: { r: 0xd8b44a, b: 0xd8b44a },
    ink: { r: 0xfff3d0, b: 0xfff3d0 },
    face: 0xeae0c8,
    roughness: 0.38,
    metalness: 0.15,
    rimMetalness: 0.95,
  },
  {
    id: "jade",
    name: "玉石 · 温润",
    body: { r: 0x7fbf9a, b: 0x6fa58a },
    rim: { r: 0xe05a4a, b: 0x2a2a33 },
    ink: { r: 0xffffff, b: 0xeef3ff },
    face: 0xcdeedb,
    roughness: 0.18,
    metalness: 0.05,
    rimMetalness: 0.3,
    emissive: 0x103322,
    emissiveIntensity: 0.25,
  },
  {
    id: "bronze",
    name: "青铜 · 古战场",
    body: { r: 0x6b7a5a, b: 0x55604a },
    rim: { r: 0xc8322e, b: 0x202020 },
    ink: { r: 0xfbe6c0, b: 0xe8e0c8 },
    face: 0x8a6a3a,
    roughness: 0.4,
    metalness: 0.85,
    rimMetalness: 0.9,
  },
  {
    id: "porcelain",
    name: "青花 · 瓷器",
    body: { r: 0xf2f1ea, b: 0xe8e7df },
    rim: { r: 0x1f4e8c, b: 0x16325c },
    ink: { r: 0x1f4e8c, b: 0x0f2444 },
    face: 0xffffff,
    roughness: 0.22,
    metalness: 0.0,
    rimMetalness: 0.1,
  },
  {
    id: "lacquer",
    name: "金漆 · 宫廷",
    body: { r: 0x7a1f1c, b: 0x1a1410 },
    rim: { r: 0xffd24a, b: 0xd4a828 },
    ink: { r: 0xffd24a, b: 0xf0c040 },
    face: 0x2a0f0d,
    roughness: 0.3,
    metalness: 0.35,
    rimMetalness: 1.0,
    emissive: 0x3a1500,
    emissiveIntensity: 0.3,
  },
];

export const BOARD_THEMES: BoardTheme[] = [
  {
    id: "wood",
    name: "木盘 · 经典",
    surface: 0xe8d5a8,
    frame: 0x8a5a2a,
    line: 0x5a3a1c,
    river: 0x6a4a24,
    background: 0x2a2016,
    fog: 0x2a2016,
    hemiSky: 0xfff4dc,
    hemiGround: 0x5a4030,
    keyLight: 0xfff6e0,
    keyIntensity: 2.4,
    ambience: "courtyard",
    surfaceRoughness: 0.75,
    accent: "none",
  },
  {
    id: "jade",
    name: "玉盘 · 温润",
    surface: 0xb8dcc8,
    frame: 0x4a7a64,
    line: 0x2a4a38,
    river: 0x35604a,
    background: 0x16241e,
    fog: 0x16241e,
    hemiSky: 0xe0fff2,
    hemiGround: 0x2c4a3a,
    keyLight: 0xeafff6,
    keyIntensity: 2.6,
    ambience: "courtyard",
    surfaceRoughness: 0.3,
    accent: "jade",
  },
  {
    id: "bronze",
    name: "青铜沙盘 · 古战场",
    surface: 0xa88a5a,
    frame: 0x4a3620,
    line: 0x241a0c,
    river: 0x36281a,
    background: 0x1c1410,
    fog: 0x1c1410,
    hemiSky: 0xffc488,
    hemiGround: 0x3a2818,
    keyLight: 0xffc488,
    keyIntensity: 2.6,
    ambience: "battle",
    surfaceRoughness: 0.6,
    accent: "bronze",
  },
  {
    id: "ink",
    name: "水墨 · 宣纸",
    surface: 0xf0e2c4,
    frame: 0x4a4a4a,
    line: 0x242424,
    river: 0x3a3a3a,
    background: 0xefe8d8,
    fog: 0xefe8d8,
    hemiSky: 0xffffff,
    hemiGround: 0xa0a0a0,
    keyLight: 0xffffff,
    keyIntensity: 2.0,
    ambience: "none",
    surfaceRoughness: 0.9,
    accent: "ink",
  },
];

export function getPieceSkin(id: string): PieceSkin {
  return PIECE_SKINS.find((s) => s.id === id) ?? PIECE_SKINS[0];
}
export function getBoardTheme(id: string): BoardTheme {
  return BOARD_THEMES.find((t) => t.id === id) ?? BOARD_THEMES[0];
}
