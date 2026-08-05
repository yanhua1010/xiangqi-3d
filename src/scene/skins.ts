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
    name: "实木 · 经典",
    body: { r: 0xd9a866, b: 0xc98a48 },
    rim: { r: 0xb22222, b: 0x1a1a1a },
    ink: { r: 0xb22222, b: 0x111111 },
    face: 0xf3dfb0,
    roughness: 0.62,
    metalness: 0.08,
    rimMetalness: 0.2,
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
    surface: 0xd9b481,
    frame: 0x7a4a22,
    line: 0x3a2410,
    river: 0x5a3a1a,
    background: 0x1a1410,
    fog: 0x1a1410,
    hemiSky: 0xfff0d0,
    hemiGround: 0x3a2a1c,
    keyLight: 0xfff2d6,
    keyIntensity: 1.3,
    ambience: "courtyard",
    surfaceRoughness: 0.75,
    accent: "none",
  },
  {
    id: "jade",
    name: "玉盘 · 温润",
    surface: 0x9fc8b0,
    frame: 0x4a7a64,
    line: 0x23402f,
    river: 0x2f5a44,
    background: 0x0e1a16,
    fog: 0x0e1a16,
    hemiSky: 0xd0fff0,
    hemiGround: 0x1c3a2c,
    keyLight: 0xe0fff2,
    keyIntensity: 1.2,
    ambience: "courtyard",
    surfaceRoughness: 0.3,
    accent: "jade",
  },
  {
    id: "bronze",
    name: "青铜沙盘 · 古战场",
    surface: 0x8a6a3a,
    frame: 0x3a2a18,
    line: 0x1a1208,
    river: 0x2a1c0c,
    background: 0x120c08,
    fog: 0x18100a,
    hemiSky: 0xffb070,
    hemiGround: 0x2a1a10,
    keyLight: 0xffb070,
    keyIntensity: 1.5,
    ambience: "battle",
    surfaceRoughness: 0.6,
    accent: "bronze",
  },
  {
    id: "ink",
    name: "水墨 · 宣纸",
    surface: 0xead9b8,
    frame: 0x3a3a3a,
    line: 0x1a1a1a,
    river: 0x2a2a2a,
    background: 0xe8e0cc,
    fog: 0xe8e0cc,
    hemiSky: 0xffffff,
    hemiGround: 0x888888,
    keyLight: 0xffffff,
    keyIntensity: 1.1,
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
