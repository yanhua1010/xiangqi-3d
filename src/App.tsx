import { useEffect, useRef, useState } from "react";
import { XiangqiScene } from "./scene/XiangqiScene";
import { BOARD_THEMES, PIECE_SKINS } from "./scene/skins";
import { moveToChinese, PIECE_NAMES } from "./game/engine";import { sound } from "./audio/SoundEngine";
import type { Board, Difficulty, Move, Side } from "./game/types";

function moveNotation(m: Move): string {
  const file = (x: number) => String.fromCharCode(97 + x);
  const from = `${file(m.from[0])}${m.from[1]}`;
  const to = `${file(m.to[0])}${m.to[1]}`;
  const name = PIECE_NAMES[m.side][m.piece];
  const capName = m.captured
    ? PIECE_NAMES[m.side === "r" ? "b" : "r"][m.captured]
    : "";
  return `${name} ${from}→${to}${m.captured ? " ×" + capName : ""}`;
}

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<XiangqiScene | null>(null);
  const boardRef = useRef<Board | null>(null);
  const [board, setBoard] = useState<Board | null>(null);
  const [turn, setTurn] = useState<Side>("r");
  const [thinking, setThinking] = useState(false);
  const [moves, setMoves] = useState<Move[]>([]);
  const [history, setHistory] = useState<{ chinese: string; side: Side }[]>([]);
  const [winner, setWinner] = useState<Side | "draw" | null>(null);
  const [inCheck, setInCheck] = useState<Side | null>(null);
  const [mode, setMode] = useState<"ai" | "hotseat">("ai");
  const [humanSide, setHumanSide] = useState<Side>("r");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [started, setStarted] = useState(false);
  const [pieceSkin, setPieceSkin] = useState("wood");
  const [boardTheme, setBoardTheme] = useState("wood");
  const [muted, setMuted] = useState(false);
  const [sfxVol, setSfxVol] = useState(0.9);
  const [showSettings, setShowSettings] = useState(false);
  const [suggestions, setSuggestions] = useState<Move[]>([]);

  useEffect(() => {
    if (!started || !mountRef.current) return;
    sound.resume();
    const scene = new XiangqiScene(mountRef.current, {
      onMove: (m) => {
        // Compute notation synchronously: the history updater runs later, by
        // which point boardRef would already be the post-move board.
        const chinese = boardRef.current
          ? moveToChinese(boardRef.current, m)
          : moveNotation(m);
        setHistory((h) => [...h, { chinese, side: m.side }]);
      },
      onBoardChange: (b, t) => {
        boardRef.current = b.map((row) => [...row]);
        setBoard(b.map((row) => [...row]));
        setTurn(t);
      },
      onGameOver: (w) => {
        setWinner(w);
      },
      onThinkingChange: setThinking,
      onSelectChange: setMoves,
      onCheck: setInCheck,
      onSuggestions: setSuggestions,
    });
    scene.setOptions({ mode, humanSide, difficulty });
    scene.setPieceSkin(pieceSkin);
    scene.setBoardTheme(boardTheme);
    sceneRef.current = scene;
    // Start a game immediately.
    scene.reset();
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    sceneRef.current?.setPieceSkin(pieceSkin);
  }, [pieceSkin]);
  useEffect(() => {
    sceneRef.current?.setBoardTheme(boardTheme);
  }, [boardTheme]);
  useEffect(() => {
    sound.setMuted(muted);
  }, [muted]);
  useEffect(() => {
    sound.setSfx(sfxVol);
  }, [sfxVol]);

  const startGame = (m: "ai" | "hotseat", side: Side, diff: Difficulty) => {
    sound.resume();
    sound.play("ui");
    setMode(m);
    setHumanSide(side);
    setDifficulty(diff);
    setWinner(null);
    setInCheck(null);
    setHistory([]);
    setMoves([]);
    setStarted(true);
  };

  const restart = () => {
    sound.play("ui");
    setWinner(null);
    setInCheck(null);
    setHistory([]);
    setMoves([]);
    setSuggestions([]);
    sceneRef.current?.reset();
  };

  const backToMenu = () => {
    sound.play("ui");
    setStarted(false);
    setWinner(null);
    setInCheck(null);
    setHistory([]);
  };

  if (!started) {
    return (
      <MainMenu
        onStart={startGame}
        pieceSkin={pieceSkin}
        setPieceSkin={setPieceSkin}
        boardTheme={boardTheme}
        setBoardTheme={setBoardTheme}
      />
    );
  }

  return (
    <div className="app">
      <div className="canvas-wrap" ref={mountRef} />

      <div className="hud top-hud">
        <div className={`turn-badge ${turn}`}>
          <span className="dot" />
          {turn === "r" ? "红方" : "黑方"}行棋
          {inCheck && <span className="check"> · 将军！</span>}
          {thinking && <span className="thinking"> · 思考中…</span>}
        </div>
        <div className="controls">
          <button onClick={restart}>重新开始</button>
          <button onClick={() => setShowSettings((s) => !s)}>
            {showSettings ? "收起" : "皮肤/音效"}
          </button>
          <button onClick={backToMenu}>主菜单</button>
        </div>
      </div>

      {showSettings && (
        <div className="hud settings-panel">
          <h4>棋子材质</h4>
          <div className="chip-row">
            {PIECE_SKINS.map((s) => (
              <button
                key={s.id}
                className={pieceSkin === s.id ? "chip active" : "chip"}
                onClick={() => {
                  setPieceSkin(s.id);
                  sound.play("ui");
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
          <h4>棋盘环境</h4>
          <div className="chip-row">
            {BOARD_THEMES.map((t) => (
              <button
                key={t.id}
                className={boardTheme === t.id ? "chip active" : "chip"}
                onClick={() => {
                  setBoardTheme(t.id);
                  sound.play("ui");
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
          <h4>音效</h4>
          <div className="audio-row">
            <button
              className={muted ? "chip" : "chip active"}
              onClick={() => {
                setMuted((m) => !m);
                if (muted) sound.play("ui");
              }}
            >
              {muted ? "🔇 已静音" : "🔊 已开启"}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={sfxVol}
              onChange={(e) => setSfxVol(Number(e.target.value))}
            />
          </div>
        </div>
      )}

      <div className="hud side-hud">
        <h3>走棋记录</h3>
        <ol className="move-list">
          {history.map((m, i) => (
            <li key={i} className={m.side}>
              <span className="num">
                {Math.floor(i / 2) + 1}
                {i % 2 ? ".." : "."}
              </span>
              {m.chinese}
            </li>
          ))}
          {history.length === 0 && <li className="empty">尚未走棋</li>}
        </ol>
        <div className="hint">
          拖拽旋转 · 滚轮缩放 · 点击选子，绿点走棋/红圈吃子
        </div>
      </div>

      {moves.length > 0 && (
        <div className="hud select-hud">可选 {moves.length} 个落点</div>
      )}

      {suggestions.length > 0 && !winner && (
        <div className="hud suggest-hud">
          <span className="suggest-label">🤖 推荐走法</span>
          {suggestions.map((m, i) => (
            <button
              key={i}
              className="suggest-chip"
              onClick={() => sceneRef.current?.playSuggestedMove(m)}
            >
              <b>{i + 1}</b> {board ? moveToChinese(board, m) : `${m.from}→${m.to}`}
            </button>
          ))}
        </div>
      )}

      {winner && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>
              {winner === "draw"
                ? "和棋"
                : winner === "r"
                ? "红方胜利！"
                : "黑方胜利！"}
            </h2>
            <p>将死，对局结束。</p>
            <div className="modal-actions">
              <button className="primary" onClick={restart}>
                再来一局
              </button>
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
  pieceSkin,
  setPieceSkin,
  boardTheme,
  setBoardTheme,
}: {
  onStart: (m: "ai" | "hotseat", side: Side, diff: Difficulty) => void;
  pieceSkin: string;
  setPieceSkin: (s: string) => void;
  boardTheme: string;
  setBoardTheme: (s: string) => void;
}) {
  const [mode, setMode] = useState<"ai" | "hotseat">("ai");
  const [side, setSide] = useState<Side>("r");
  const [diff, setDiff] = useState<Difficulty>("medium");

  const playUi = () => sound.play("ui");
  const start = () => {
    sound.play("start");
    onStart(mode, mode === "hotseat" ? "r" : side, diff);
  };

  return (
    <div className="menu">
      <div className="menu-card">
        <h1>3D 中国象棋</h1>
        <p className="subtitle">XIANGQI · THREE.JS</p>

        <div className="field">
          <label>对局模式</label>
          <div className="segmented">
            <button
              className={mode === "ai" ? "active" : ""}
              onClick={() => {
                setMode("ai");
                playUi();
              }}
            >
              人机对战
            </button>
            <button
              className={mode === "hotseat" ? "active" : ""}
              onClick={() => {
                setMode("hotseat");
                playUi();
              }}
            >
              双人同机
            </button>
          </div>
        </div>

        {mode === "ai" && (
          <>
            <div className="field">
              <label>执子</label>
              <div className="segmented">
                <button
                  className={side === "r" ? "active" : ""}
                  onClick={() => {
                    setSide("r");
                    playUi();
                  }}
                >
                  红方（先手）
                </button>
                <button
                  className={side === "b" ? "active" : ""}
                  onClick={() => {
                    setSide("b");
                    playUi();
                  }}
                >
                  黑方（后手）
                </button>
              </div>
            </div>

            <div className="field">
              <label>AI 难度</label>
              <div className="segmented">
                {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    className={diff === d ? "active" : ""}
                    onClick={() => {
                      setDiff(d);
                      playUi();
                    }}
                  >
                    {d === "easy" ? "简单" : d === "medium" ? "中等" : "困难"}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="field">
          <label>棋子材质</label>
          <div className="chip-row wrap">
            {PIECE_SKINS.map((s) => (
              <button
                key={s.id}
                className={pieceSkin === s.id ? "chip active" : "chip"}
                onClick={() => {
                  setPieceSkin(s.id);
                  playUi();
                }}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label>棋盘环境</label>
          <div className="chip-row wrap">
            {BOARD_THEMES.map((t) => (
              <button
                key={t.id}
                className={boardTheme === t.id ? "chip active" : "chip"}
                onClick={() => {
                  setBoardTheme(t.id);
                  playUi();
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <button className="start-btn" onClick={start}>
          开始游戏
        </button>

        <p className="foot">
          完整规则：马腿、象眼、炮架、九宫、将帅不照面、将军将死。
          <br />
          拖拽旋转视角，滚轮缩放，点击选子落子。
        </p>
      </div>
    </div>
  );
}
