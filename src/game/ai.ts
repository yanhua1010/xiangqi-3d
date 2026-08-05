import {
  FILES,
  RANKS,
  applyMove,
  isInCheck,
  kingsFacing,
  legalMoves,
  PIECE_VALUE,
} from "./engine";
import type { Board, Difficulty, Move, PieceType, Side } from "./types";

// Positional bonus tables, indexed by y (rank 0..9 from black's back rank).
// Values are from red's perspective; mirrored for black by reversing rows.
function pst(piece: PieceType): number[][] {
  switch (piece) {
    case "P":
      return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [20, 20, 20, 20, 20, 20, 20, 20, 20],
        [30, 35, 40, 45, 50, 45, 40, 35, 30],
        [40, 45, 50, 55, 60, 55, 50, 45, 40],
        [20, 30, 40, 50, 55, 50, 40, 30, 20],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
    case "R":
      return [
        [14, 14, 12, 18, 16, 18, 12, 14, 14],
        [16, 20, 18, 24, 26, 24, 18, 20, 16],
        [12, 12, 12, 18, 18, 18, 12, 12, 12],
        [12, 18, 16, 22, 22, 22, 16, 18, 12],
        [12, 14, 12, 18, 18, 18, 12, 14, 12],
        [12, 16, 14, 20, 20, 20, 14, 16, 12],
        [12, 14, 12, 18, 18, 18, 12, 14, 12],
        [12, 14, 12, 18, 18, 18, 12, 14, 12],
        [12, 14, 12, 18, 18, 18, 12, 14, 12],
        [14, 14, 12, 18, 16, 18, 12, 14, 14],
      ];
    case "H":
      return [
        [4, 8, 16, 12, 4, 12, 16, 8, 4],
        [4, 10, 28, 16, 8, 16, 28, 10, 4],
        [12, 14, 16, 20, 18, 20, 16, 14, 12],
        [8, 24, 18, 24, 20, 24, 18, 24, 8],
        [6, 16, 14, 18, 16, 18, 14, 16, 6],
        [4, 12, 16, 14, 12, 14, 16, 12, 4],
        [2, 6, 8, 6, 10, 6, 8, 6, 2],
        [4, 2, 8, 8, 4, 8, 8, 2, 4],
        [0, 2, 4, 4, -2, 4, 4, 2, 0],
        [0, -4, 0, 0, 0, 0, 0, -4, 0],
      ];
    case "C":
      return [
        [6, 4, 0, -10, -12, -10, 0, 4, 6],
        [2, 2, 0, -4, -14, -4, 0, 2, 2],
        [2, 2, 0, -10, -8, -10, 0, 2, 2],
        [0, 0, -2, 4, 10, 4, -2, 0, 0],
        [0, 0, 0, 2, 8, 2, 0, 0, 0],
        [0, 0, 0, 2, 8, 2, 0, 0, 0],
        [0, 0, -2, 4, 10, 4, -2, 0, 0],
        [2, 2, 0, -10, -8, -10, 0, 2, 2],
        [2, 2, 0, -4, -14, -4, 0, 2, 2],
        [6, 4, 0, -10, -12, -10, 0, 4, 6],
      ];
    default:
      return Array.from({ length: RANKS }, () => new Array(FILES).fill(0));
  }
}

function evaluate(b: Board): number {
  // Positive favours red.
  let score = 0;
  for (let y = 0; y < RANKS; y++) {
    for (let x = 0; x < FILES; x++) {
      const p = b[y][x];
      if (!p) continue;
      const val = PIECE_VALUE[p.type];
      const table = pst(p.type);
      const pos = p.side === "r" ? table[y][x] : table[RANKS - 1 - y][x];
      const total = val + pos;
      score += p.side === "r" ? total : -total;
    }
  }
  return score;
}

function orderMoves(_b: Board, moves: Move[]): Move[] {
  return moves.sort((a, z) => {
    const av = a.captured ? PIECE_VALUE[a.captured] : 0;
    const zv = z.captured ? PIECE_VALUE[z.captured] : 0;
    return zv - av;
  });
}

const DEPTH: Record<Difficulty, number> = { easy: 2, medium: 3, hard: 4 };

function negamax(
  b: Board,
  side: Side,
  depth: number,
  alpha: number,
  beta: number
): number {
  if (depth === 0) {
    const e = evaluate(b);
    return side === "r" ? e : -e;
  }
  const moves = legalMoves(b, side);
  if (moves.length === 0) return -100000 - depth; // checkmated
  let best = -Infinity;
  for (const m of orderMoves(b, moves)) {
    const nb = applyMove(b, m);
    const foe: Side = side === "r" ? "b" : "r";
    const val = -negamax(nb, foe, depth - 1, -beta, -alpha);
    if (val > best) best = val;
    if (best > alpha) alpha = best;
    if (alpha >= beta) break;
  }
  return best;
}

export function chooseMove(
  b: Board,
  side: Side,
  difficulty: Difficulty
): Move | null {
  const moves = legalMoves(b, side);
  if (moves.length === 0) return null;
  const depth = DEPTH[difficulty];
  const ordered = orderMoves(b, moves);
  let bestScore = -Infinity;
  let best: Move[] = [];
  let alpha = -Infinity;
  const beta = Infinity;
  // Inject some randomness on easy so it doesn't always pick the same line.
  const jitter = difficulty === "easy" ? 25 : 0;
  for (const m of ordered) {
    const nb = applyMove(b, m);
    const foe: Side = side === "r" ? "b" : "r";
    const score = -negamax(nb, foe, depth - 1, -beta, -alpha) +
      (jitter ? (Math.random() - 0.5) * jitter : 0);
    if (score > bestScore) {
      bestScore = score;
      best = [m];
    } else if (score === bestScore) {
      best.push(m);
    }
    if (score > alpha) alpha = score;
  }
  return best[Math.floor(Math.random() * best.length)];
}

// Re-export for the worker's tree-shaking friendliness.
export { isInCheck, kingsFacing };
