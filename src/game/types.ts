// Chinese Chess (Xiangqi) shared types.
// Board coordinates: x = file 0..8 (left to right from red's perspective),
// y = rank 0..9 (0 = red's bottom river-bank row, 9 = black's top).

export type Side = "r" | "b"; // red / black

export type PieceType =
  | "K" // 帅/将 General
  | "A" // 仕/士 Advisor
  | "E" // 相/象 Elephant
  | "H" // 马 Horse
  | "R" // 车 Chariot
  | "C" // 炮 Cannon
  | "P"; // 兵/卒 Pawn

export interface Piece {
  type: PieceType;
  side: Side;
  id: number;
}

export type Cell = Piece | null;
export type Board = Cell[][]; // board[y][x]

export interface Move {
  from: [number, number];
  to: [number, number];
  piece: PieceType;
  side: Side;
  captured: PieceType | null;
  /** For the cannon only: the square of the piece jumped (screen). */
  screen?: [number, number];
}

export type GameStatus = "playing" | "red_win" | "black_win" | "draw";
export type Difficulty = "easy" | "medium" | "hard";
