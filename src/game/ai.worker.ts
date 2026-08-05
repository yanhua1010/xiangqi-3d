import { chooseMove } from "./ai";
import type { Board, Difficulty, Move, Side } from "./types";

self.onmessage = (e: MessageEvent) => {
  const { board, side, difficulty } = e.data as {
    board: Board;
    side: Side;
    difficulty: Difficulty;
  };
  const move = chooseMove(board, side, difficulty);
  (self as unknown as Worker).postMessage(move as Move | null);
};
