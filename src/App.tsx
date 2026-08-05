import { useEffect, useRef, useState } from "react";
import { XiangqiScene } from "./scene/XiangqiScene";
import { PIECE_NAMES } from "./game/engine";
import type { Board, Difficulty, Move, Side } from "./game/types";

function moveNotation(m: Move): string {
  const file = (x: number) => String.fromCharCode(97 + x);
  const from = `${file(m.from[0])}${m.from[1]}`;
  const to = `${file(m.to[0])}${m.to[1]}`;
  const name = PIECE_NAMES[m.side][m.piece];
  return `${name} ${from}→${to}${m.captured ? " ×" + PIECE_NAMES[m.side === "r" ? "b" : "r"][m.captured] : ""}`;
}

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<XiangqiScene | null>(null);
  const [, setBoard] = useState<Board | null>(null);
  const [turn, setTurn] = useState<Side>("r");
  const [thinking, setThinking] = useState(false);
  const [moves, setMoves] = useState<Move[]>([]);
  const [history, setHistory] = useState<Move[]>([]);
  const [winner, setWinner] = useState<Side | "draw" | null>(null);
  const [mode, setMode] = useState<"ai" | "hotseat">("ai");
  const [humanSide, setHumanSide] = useState<Side>("r");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || !mountRef.current) return;
    const scene = new XiangqiScene(mountRef.current, {
      onMove: (m) => setHistory((h) => [...h, m]),
      onBoardChange: (b, t) => {
        setBoard(b.map((row) => [...row]));
        setTurn(t);
      },
      onGameOver: (w) => setWinner(w),
      onThinkingChange: setThinking,
      onSelectChange: setMoves,
    });
    scene.setOptions({ mode, humanSide, difficulty });
    sceneRef.current = scene;
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const startGame = (m: "ai" | "hotseat", side: Side, diff: Difficulty) => {
    setMode(m);
    setHumanSide(side);
    setDifficulty(diff);
    setWinner(null);
    setHistory([]);
    setMoves([]);
    setStarted(true);
  };

  const restart = () => {
    setWinner(null);
    setHistory([]);
    setMoves([]);
    sceneRef.current?.reset();
  };

  const backToMenu = () => {
    setStarted(false);
    setWinner(null);
    setHistory([]);
  };

  if (!started) {
    return <MainMenu onStart={startGame} />;
  }

  return (
    <div className="app">
      <div className="canvas-wrap" ref={mountRef} />

      <div className="hud top-hud">
        <div className={`turn-badge ${turn}`}>
          <span className="dot" />
          {turn === "r" ? "红方" : "黑方"}行棋
          {thinking && <span className="thinking"> · 思考中…</span>}
        </div>
        <div className="controls">
          <button onClick={restart}>重新开始</button>
          <button onClick={backToMenu}>主菜单</button>
        </div>
      </div>

      <div className="hud side-hud">
        <h3>走棋记录</h3>
        <ol className="move-list">
          {history.map((m, i) => (
            <li key={i} className={m.side}>
              <span className="num">{Math.floor(i / 2) + 1}{i % 2 ? ".." : "."}</span>
              {moveNotation(m)}
            </li>
          ))}
          {history.length === 0 && <li className="empty">尚未走棋</li>}
        </ol>
        <div className="hint">
          拖拽旋转视角 · 滚轮缩放 · 点击棋子后点击绿点落子
        </div>
      </div>

      {moves.length > 0 && (
        <div className="hud select-hud">
          可选 {moves.length} 个落点
        </div>
      )}

      {winner && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{winner === "draw" ? "和棋" : winner === "r" ? "红方胜利！" : "黑方胜利！"}</h2>
            <p>{winner === "draw" ? "旗鼓相当" : "将死，对局结束。"}</p>
            <div className="modal-actions">
              <button className="primary" onClick={restart}>再来一局</button>
              <button onClick={backToMenu}>返回菜单</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MainMenu({
  onStart,
}: {
  onStart: (m: "ai" | "hotseat", side: Side, diff: Difficulty) => void;
}) {
  const [side, setSide] = useState<Side>("r");
  const [diff, setDiff] = useState<Difficulty>("medium");

  return (
    <div className="menu">
      <div className="menu-card">
        <h1>3D 中国象棋</h1>
        <p className="subtitle">Xiangqi · Three.js</p>

        <div className="field">
          <label>对局模式</label>
          <div className="segmented">
            <button className="primary" onClick={() => onStart("ai", side, diff)}>
              人机对战
            </button>
            <button onClick={() => onStart("hotseat", "r", diff)}>
              双人同机
            </button>
          </div>
        </div>

        <div className="field">
          <label>执子（人机）</label>
          <div className="segmented">
            <button className={side === "r" ? "active" : ""} onClick={() => setSide("r")}>
              红方（先手）
            </button>
            <button className={side === "b" ? "active" : ""} onClick={() => setSide("b")}>
              黑方（后手）
            </button>
          </div>
        </div>

        <div className="field">
          <label>AI 难度</label>
          <div className="segmented">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <button key={d} className={diff === d ? "active" : ""} onClick={() => setDiff(d)}>
                {d === "easy" ? "简单" : d === "medium" ? "中等" : "困难"}
              </button>
            ))}
          </div>
        </div>

        <p className="foot">
          完整象棋规则：马腿、象眼、炮架、九宫、将帅不照面；将军与将死判定。
          <br />鼠标拖拽旋转，滚轮缩放，点击选子与落子。
        </p>
      </div>
    </div>
  );
}
