import type { Board, Move, Piece, PieceType, Side } from "./types";

export const FILES = 9;
export const RANKS = 10;

export const PIECE_NAMES: Record<Side, Record<PieceType, string>> = {
  r: { K: "帅", A: "仕", E: "相", H: "马", R: "车", C: "炮", P: "兵" },
  b: { K: "将", A: "士", E: "象", H: "马", R: "车", C: "砲", P: "卒" },
};

// Standard material values (Chinese chess conventions).
export const PIECE_VALUE: Record<PieceType, number> = {
  K: 10000,
  R: 900,
  C: 450,
  H: 400,
  E: 200,
  A: 200,
  P: 100,
};

let nextId = 1;
function make(type: PieceType, side: Side): Piece {
  return { type, side, id: nextId++ };
}

export function createBoard(): Board {
  nextId = 1;
  const b: Board = Array.from({ length: RANKS }, () =>
    Array.from({ length: FILES }, () => null as Cell)
  );
  // Black (top, y=0..9; black back rank at y=0)
  const back: PieceType[] = ["R", "H", "E", "A", "K", "A", "E", "H", "R"];
  for (let x = 0; x < 9; x++) b[0][x] = make(back[x], "b");
  b[2][1] = make("C", "b");
  b[2][7] = make("C", "b");
  for (let x = 0; x < 9; x += 2) b[3][x] = make("P", "b");
  // Red (bottom)
  for (let x = 0; x < 9; x++) b[9][x] = make(back[x], "r");
  b[7][1] = make("C", "r");
  b[7][7] = make("C", "r");
  for (let x = 0; x < 9; x += 2) b[6][x] = make("P", "r");
  return b;
}

type Cell = Piece | null;

export function cloneBoard(b: Board): Board {
  return b.map((row) => row.map((c) => (c ? { ...c } : null)));
}

const inBoard = (x: number, y: number) => x >= 0 && x < FILES && y >= 0 && y < RANKS;

function inPalace(x: number, y: number, side: Side): boolean {
  if (x < 3 || x > 5) return false;
  if (side === "r") return y >= 7 && y <= 9;
  return y >= 0 && y <= 2;
}

function crossedRiver(y: number, side: Side): boolean {
  return side === "r" ? y <= 4 : y >= 5;
}

/** Generate pseudo-legal moves for the piece at (x,y). */
export function pieceMoves(b: Board, x: number, y: number): Move[] {
  const p = b[y][x];
  if (!p) return [];
  const moves: Move[] = [];
  const side = p.side;
  const add = (tx: number, ty: number, extra?: Partial<Move>) => {
    if (!inBoard(tx, ty)) return;
    const target = b[ty][tx];
    if (target && target.side === side) return;
    moves.push({
      from: [x, y],
      to: [tx, ty],
      piece: p.type,
      side,
      captured: target ? target.type : null,
      ...extra,
    });
  };

  switch (p.type) {
    case "K": {
      const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dx, dy] of dirs) {
        const tx = x + dx;
        const ty = y + dy;
        if (inPalace(tx, ty, side)) add(tx, ty);
      }
      // Flying general: kings may capture each other across an empty file.
      const dir = side === "r" ? -1 : 1;
      let ty = y + dir;
      while (inBoard(x, ty)) {
        const t = b[ty][x];
        if (t) {
          if (t.type === "K" && t.side !== side) add(x, ty);
          break;
        }
        ty += dir;
      }
      break;
    }
    case "A": {
      for (const [dx, dy] of [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        const tx = x + dx;
        const ty = y + dy;
        if (inPalace(tx, ty, side)) add(tx, ty);
      }
      break;
    }
    case "E": {
      for (const [dx, dy] of [
        [2, 2],
        [2, -2],
        [-2, 2],
        [-2, -2],
      ]) {
        const tx = x + dx;
        const ty = y + dy;
        if (!inBoard(tx, ty)) continue;
        if (crossedRiver(ty, side)) continue; // elephant can't cross river
        const eyeX = x + dx / 2;
        const eyeY = y + dy / 2;
        if (b[eyeY][eyeX]) continue; // blocked eye
        add(tx, ty);
      }
      break;
    }
    case "H": {
      const steps: [number, number, number, number][] = [
        // dx, dy, legX, legY
        [1, 2, 0, 1],
        [-1, 2, 0, 1],
        [1, -2, 0, -1],
        [-1, -2, 0, -1],
        [2, 1, 1, 0],
        [2, -1, 1, 0],
        [-2, 1, -1, 0],
        [-2, -1, -1, 0],
      ];
      for (const [dx, dy, lx, ly] of steps) {
        const tx = x + dx;
        const ty = y + dy;
        if (!inBoard(tx, ty)) continue;
        if (b[y + ly][x + lx]) continue; // hobbled horse leg
        add(tx, ty);
      }
      break;
    }
    case "R": {
      for (const [dx, dy] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        let tx = x + dx;
        let ty = y + dy;
        while (inBoard(tx, ty)) {
          const t = b[ty][tx];
          if (!t) {
            add(tx, ty);
          } else {
            if (t.side !== side) add(tx, ty);
            break;
          }
          tx += dx;
          ty += dy;
        }
      }
      break;
    }
    case "C": {
      for (const [dx, dy] of [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]) {
        let tx = x + dx;
        let ty = y + dy;
        // Non-capturing: move along empty squares.
        while (inBoard(tx, ty) && !b[ty][tx]) {
          add(tx, ty);
          tx += dx;
          ty += dy;
        }
        // Found a screen; jump it and capture the first piece beyond.
        if (inBoard(tx, ty)) {
          const sx = tx;
          const sy = ty;
          tx += dx;
          ty += dy;
          while (inBoard(tx, ty)) {
            const t = b[ty][tx];
            if (t) {
              if (t.side !== side) add(tx, ty, { screen: [sx, sy] });
              break;
            }
            tx += dx;
            ty += dy;
          }
        }
      }
      break;
    }
    case "P": {
      const fwd = side === "r" ? -1 : 1;
      add(x, y + fwd);
      if (crossedRiver(y, side)) {
        add(x + 1, y);
        add(x - 1, y);
      }
      break;
    }
  }
  return moves;
}

export function allMoves(b: Board, side: Side): Move[] {
  const out: Move[] = [];
  for (let y = 0; y < RANKS; y++) {
    for (let x = 0; x < FILES; x++) {
      const p = b[y][x];
      if (p && p.side === side) out.push(...pieceMoves(b, x, y));
    }
  }
  return out;
}

export function applyMove(b: Board, m: Move): Board {
  const nb = cloneBoard(b);
  nb[m.to[1]][m.to[0]] = nb[m.from[1]][m.from[0]];
  nb[m.from[1]][m.from[0]] = null;
  return nb;
}

export function findKing(b: Board, side: Side): [number, number] | null {
  for (let y = 0; y < RANKS; y++)
    for (let x = 0; x < FILES; x++) {
      const p = b[y][x];
      if (p && p.type === "K" && p.side === side) return [x, y];
    }
  return null;
}

/** Is `side`'s king in check? */
export function isInCheck(b: Board, side: Side): boolean {
  const king = findKing(b, side);
  if (!king) return true;
  const foe = side === "r" ? "b" : "r";
  for (const m of allMoves(b, foe)) {
    if (m.to[0] === king[0] && m.to[1] === king[1]) return true;
  }
  return false;
}

/** Kings facing each other on an open file is illegal. */
export function kingsFacing(b: Board): boolean {
  const rk = findKing(b, "r");
  const bk = findKing(b, "b");
  if (!rk || !bk) return false;
  if (rk[0] !== bk[0]) return false;
  const x = rk[0];
  const lo = Math.min(rk[1], bk[1]);
  const hi = Math.max(rk[1], bk[1]);
  for (let y = lo + 1; y < hi; y++) {
    if (b[y][x]) return false;
  }
  return true;
}

export function legalMoves(b: Board, side: Side): Move[] {
  const out: Move[] = [];
  for (const m of allMoves(b, side)) {
    const nb = applyMove(b, m);
    if (kingsFacing(nb)) continue;
    if (isInCheck(nb, side)) continue;
    out.push(m);
  }
  return out;
}

export function legalMovesFrom(b: Board, x: number, y: number): Move[] {
  const p = b[y][x];
  if (!p) return [];
  return pieceMoves(b, x, y).filter((m) => {
    const nb = applyMove(b, m);
    if (kingsFacing(nb)) return false;
    if (isInCheck(nb, p.side)) return false;
    return true;
  });
}

export type Status = "playing" | "red_win" | "black_win" | "draw";

export function gameStatus(b: Board, sideToMove: Side): Status {
  const moves = legalMoves(b, sideToMove);
  if (moves.length === 0) {
    // Checkmate or stalemate — both are a loss for the side to move in Xiangqi.
    return sideToMove === "r" ? "black_win" : "red_win";
  }
  // Perpetual-check handling is omitted; offer a draw only via UI.
  return "playing";
}

// --------------------------------------------------------------- notation

const CN_NUM = "一二三四五六七八九";

/**
 * Classic Chinese notation for a move, e.g. "炮二平五", "马八进七", "前车进一".
 * Uses the mover's own perspective (red reads left→right 1..9, black the
 * reverse), disambiguates same-file pieces with 前/后 and same-rank pieces
 * with 左/右.
 */
export function moveToChinese(b: Board, m: Move): string {
  const name = PIECE_NAMES[m.side][m.piece];
  const [fx, fy] = m.from;
  const [tx, ty] = m.to;
  // File number from the mover's perspective.
  const file = (x: number) => (m.side === "r" ? x + 1 : 9 - x);
  // Advancing means y decreasing for red, increasing for black.
  const isAdvance = (y: number) => (m.side === "r" ? y < fy : y > fy);

  // Collect same-type pieces to disambiguate.
  const same: [number, number][] = [];
  for (let y = 0; y < RANKS; y++)
    for (let x = 0; x < FILES; x++) {
      const p = b[y][x];
      if (p && p.type === m.piece && p.side === m.side && !(x === fx && y === fy))
        same.push([x, y]);
    }
  const sameCol = same.filter(([x]) => x === fx);

  let head: string;
  if (sameCol.length > 0) {
    // 前/后 — red: 前 = smaller y; black: 前 = larger y.
    const mine = m.side === "r" ? fy < sameCol[0][1] : fy > sameCol[0][1];
    head = (mine ? "前" : "后") + name;
  } else {
    // Same-rank pieces live on different files, so the file number alone is
    // unambiguous — no 左/右 needed.
    head = name + CN_NUM[file(fx) - 1];
  }

  // Destination.
  let tail: string;
  const dx = tx - fx;
  const dy = ty - fy;
  if (dy === 0) {
    // Horizontal move (also crossed-river pawns).
    tail = "平" + CN_NUM[file(tx) - 1];
  } else if (dx !== 0) {
    // Diagonal move (horse/elephant/advisor): name the destination file.
    tail = (isAdvance(ty) ? "进" : "退") + CN_NUM[file(tx) - 1];
  } else {
    // Straight move: count the steps.
    const steps = Math.abs(dy);
    tail = (isAdvance(ty) ? "进" : "退") + CN_NUM[steps - 1];
  }
  return head + tail;
}
