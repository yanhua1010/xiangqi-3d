import { chooseMove, rankMoves } from "./ai";
import type { Board, Difficulty, Move, Side } from "./types";

interface Request {
  id: number;
  type: "choose" | "suggest";
  board: Board;
  side: Side;
  difficulty: Difficulty;
  count?: number;
}

self.onmessage = (e: MessageEvent<Request>) => {
  const { id, type, board, side, difficulty, count } = e.data;
  let result: Move | Move[] | null = null;
  if (type === "suggest") {
    result = rankMoves(board, side, difficulty, count ?? 3);
  } else {
    result = chooseMove(board, side, difficulty);
  }
  (self as unknown as Worker).postMessage({ id, result });
};
