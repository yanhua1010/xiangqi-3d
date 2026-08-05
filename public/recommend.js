/*
 * Optional recommendation rail for the Kimi-style runtime.
 * The game bundle exposes a read-only snapshot through window.__st and its
 * existing React click handler through window.__xq.onCellClick. Keeping this
 * feature in a small, readable module means the visual runtime stays frozen
 * while the hint engine remains easy to tune.
 */
(() => {
  "use strict";

  const NAMES = {
    r: { K: "帥", A: "仕", B: "相", N: "馬", R: "車", C: "炮", P: "兵" },
    b: { K: "將", A: "士", B: "象", N: "馬", R: "車", C: "砲", P: "卒" },
  };
  const VALUES = { K: 10000, R: 600, C: 300, N: 270, B: 120, A: 120, P: 60 };
  const FILES = "一二三四五六七八九";
  const inside = (x, y) => x >= 0 && x < 9 && y >= 0 && y < 10;
  const other = (side) => (side === "r" ? "b" : "r");
  const ownPalace = (side, x, y) =>
    x >= 3 && x <= 5 && (side === "r" ? y >= 7 && y <= 9 : y >= 0 && y <= 2);
  const crossedRiver = (side, y) => (side === "r" ? y <= 4 : y >= 5);

  function cloneBoard(board) {
    return board.map((row) => row.slice());
  }

  function pushIfOpen(board, moves, piece, from, x, y) {
    if (!inside(x, y)) return false;
    const target = board[y][x];
    if (!target) {
      moves.push({ piece, from, to: { x, y }, captured: null });
      return true;
    }
    if (target.color !== piece.color) {
      moves.push({ piece, from, to: { x, y }, captured: target });
    }
    return false;
  }

  function pseudoMoves(board, x, y) {
    const piece = board[y]?.[x];
    if (!piece) return [];
    const moves = [];
    const from = { x, y };
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    if (piece.type === "R") {
      for (const [dx, dy] of dirs) {
        let tx = x + dx;
        let ty = y + dy;
        while (pushIfOpen(board, moves, piece, from, tx, ty)) {
          tx += dx;
          ty += dy;
        }
      }
    } else if (piece.type === "C") {
      for (const [dx, dy] of dirs) {
        let jumped = false;
        let tx = x + dx;
        let ty = y + dy;
        while (inside(tx, ty)) {
          const target = board[ty][tx];
          if (!jumped) {
            if (target) jumped = true;
            else moves.push({ piece, from, to: { x: tx, y: ty }, captured: null });
          } else if (target) {
            if (target.color !== piece.color) {
              moves.push({ piece, from, to: { x: tx, y: ty }, captured: target });
            }
            break;
          }
          tx += dx;
          ty += dy;
        }
      }
    } else if (piece.type === "N") {
      const jumps = [
        [1, 0, 2, 1], [1, 0, 2, -1], [-1, 0, -2, 1], [-1, 0, -2, -1],
        [0, 1, 1, 2], [0, 1, -1, 2], [0, -1, 1, -2], [0, -1, -1, -2],
      ];
      for (const [lx, ly, tx, ty] of jumps) {
        if (board[y + ly]?.[x + lx]) continue;
        pushIfOpen(board, moves, piece, from, x + tx, y + ty);
      }
    } else if (piece.type === "B") {
      for (const [dx, dy] of [[2, 2], [2, -2], [-2, 2], [-2, -2]]) {
        const tx = x + dx;
        const ty = y + dy;
        if (!inside(tx, ty)) continue;
        if ((piece.color === "r" && ty < 5) || (piece.color === "b" && ty > 4)) continue;
        if (board[y + dy / 2]?.[x + dx / 2]) continue;
        pushIfOpen(board, moves, piece, from, tx, ty);
      }
    } else if (piece.type === "A") {
      for (const [dx, dy] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
        const tx = x + dx;
        const ty = y + dy;
        if (ownPalace(piece.color, tx, ty)) pushIfOpen(board, moves, piece, from, tx, ty);
      }
    } else if (piece.type === "K") {
      for (const [dx, dy] of dirs) {
        const tx = x + dx;
        const ty = y + dy;
        if (ownPalace(piece.color, tx, ty)) pushIfOpen(board, moves, piece, from, tx, ty);
      }
    } else if (piece.type === "P") {
      const forward = piece.color === "r" ? -1 : 1;
      pushIfOpen(board, moves, piece, from, x, y + forward);
      if (crossedRiver(piece.color, y)) {
        pushIfOpen(board, moves, piece, from, x - 1, y);
        pushIfOpen(board, moves, piece, from, x + 1, y);
      }
    }
    return moves;
  }

  function findKing(board, side) {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 9; x++) {
        const piece = board[y][x];
        if (piece?.color === side && piece.type === "K") return { x, y };
      }
    }
    return null;
  }

  function flyingGenerals(board) {
    const red = findKing(board, "r");
    const black = findKing(board, "b");
    if (!red || !black || red.x !== black.x) return false;
    for (let y = Math.min(red.y, black.y) + 1; y < Math.max(red.y, black.y); y++) {
      if (board[y][red.x]) return false;
    }
    return true;
  }

  function inCheck(board, side) {
    if (flyingGenerals(board)) return true;
    const king = findKing(board, side);
    if (!king) return true;
    const attacker = other(side);
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 9; x++) {
        if (board[y][x]?.color !== attacker) continue;
        if (pseudoMoves(board, x, y).some((m) => m.to.x === king.x && m.to.y === king.y)) return true;
      }
    }
    return false;
  }

  function applyMove(board, move) {
    const next = cloneBoard(board);
    next[move.from.y][move.from.x] = null;
    next[move.to.y][move.to.x] = move.piece;
    return next;
  }

  function legalMoves(board, x, y) {
    const piece = board[y]?.[x];
    if (!piece) return [];
    return pseudoMoves(board, x, y).filter((move) => !inCheck(applyMove(board, move), piece.color));
  }

  function allMoves(board, side) {
    const moves = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 9; x++) {
        if (board[y][x]?.color === side) moves.push(...legalMoves(board, x, y));
      }
    }
    return moves;
  }

  function material(board) {
    let score = 0;
    for (const row of board) {
      for (const piece of row) {
        if (piece) score += (piece.color === "r" ? 1 : -1) * VALUES[piece.type];
      }
    }
    return score;
  }

  function positional(move) {
    const p = move.piece;
    const advance = p.color === "r" ? move.from.y - move.to.y : move.to.y - move.from.y;
    const center = 4 - Math.abs(4 - move.to.x);
    return advance * (p.type === "P" ? 8 : 1) + center * (p.type === "C" || p.type === "N" ? 2 : 0);
  }

  function search(board, side, depth, alpha, beta, root) {
    const moves = allMoves(board, side);
    if (moves.length === 0) return inCheck(board, side) ? (side === root ? -999999 : 999999) : 0;
    if (depth === 0) {
      const score = material(board);
      return root === "r" ? score : -score;
    }
    const maximizing = side === root;
    let best = maximizing ? -Infinity : Infinity;
    for (const move of moves) {
      const value = search(applyMove(board, move), other(side), depth - 1, alpha, beta, root);
      if (maximizing) {
        best = Math.max(best, value);
        alpha = Math.max(alpha, value);
      } else {
        best = Math.min(best, value);
        beta = Math.min(beta, value);
      }
      if (beta <= alpha) break;
    }
    return best;
  }

  function rankMoves(board, side) {
    const moves = allMoves(board, side);
    const scored = moves.map((move) => {
      const next = applyMove(board, move);
      const checkBonus = inCheck(next, other(side)) ? 22 : 0;
      const captureBonus = move.captured ? VALUES[move.captured.type] * 0.18 : 0;
      const score = search(next, other(side), 1, -Infinity, Infinity, side) + checkBonus + captureBonus + positional(move);
      return { move, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 3);
  }

  function notation(board, move) {
    const side = move.piece.color;
    const name = NAMES[side][move.piece.type];
    const same = [];
    for (let y = 0; y < 10; y++) {
      const p = board[y][move.from.x];
      if (p && p.color === side && p.type === move.piece.type && y !== move.from.y) same.push(y);
    }
    let prefix = name;
    if (same.length && ["R", "N", "C", "P"].includes(move.piece.type)) {
      const front = side === "r" ? same.every((y) => move.from.y < y) : same.every((y) => move.from.y > y);
      prefix = (front ? "前" : "后") + name;
    } else {
      const file = side === "r" ? 9 - move.from.x : move.from.x + 1;
      prefix += side === "r" ? FILES[file - 1] : String(file);
    }
    const targetFile = side === "r" ? FILES[8 - move.to.x] : String(move.to.x + 1);
    if (move.from.y === move.to.y) return `${prefix}平${targetFile}`;
    const forward = side === "r" ? move.to.y < move.from.y : move.to.y > move.from.y;
    const action = forward ? "进" : "退";
    if (["N", "B", "A"].includes(move.piece.type)) return `${prefix}${action}${targetFile}`;
    const distance = Math.abs(move.to.y - move.from.y);
    return `${prefix}${action}${side === "r" ? FILES[distance - 1] : distance}`;
  }

  function boardKey(board) {
    return board.map((row) => row.map((p) => (p ? `${p.color}${p.type}` : "-")).join("")).join("/");
  }

  const style = document.createElement("style");
  style.textContent = `
    .gf-recommend { border-top: 1px solid rgba(201,164,92,.25); padding-top: 8px; margin-top: 8px; display: none; }
    .gf-recommend.visible { display: flex; flex-direction: column; gap: 5px; }
    .gf-recommend-head { display:flex; justify-content:space-between; align-items:center; color: #e9cf8f; font-family: var(--font-cal); font-size: 17px; letter-spacing: .18em; }
    .gf-recommend-head small { color: #efe5cf66; font-family: var(--font-serif); font-size: 10px; letter-spacing: .06em; }
    .gf-recommend-row { display:flex; align-items:center; gap:8px; width:100%; text-align:left; }
    .gf-recommend-row .gf-rec-rank { color:#e9cf8f; border:1px solid rgba(201,164,92,.55); min-width:20px; height:20px; display:inline-flex; align-items:center; justify-content:center; font-size:11px; }
    .gf-recommend-row .gf-rec-name { font-family: var(--font-serif); flex:1; }
    .gf-recommend-row .gf-rec-eval { color:#a8d8c8; font-size:10px; opacity:.75; }
    .gf-recommend-row.best { border-color:#e9cf8f; color:#fff2c4; background:rgba(201,164,92,.16); }
    .gf-recommend-empty { color:#efe5cf66; font-size:11px; text-align:center; padding:4px; }
    @media(max-width:920px){ .gf-recommend-head {font-size:14px;} .gf-recommend-row .gf-rec-eval {display:none;} }
  `;
  document.head.appendChild(style);

  let panel = null;
  let list = null;
  let lastKey = "";
  let lastStarted = false;
  let calculating = false;

  function ensurePanel() {
    if (panel) return true;
    const side = document.querySelector(".gf-side");
    if (!side) return false;
    panel = document.createElement("div");
    panel.className = "gf-recommend";
    panel.innerHTML = '<div class="gf-recommend-head"><span>推荐走法</span><small>引擎评估 · 前三</small></div><div class="gf-recommend-list"></div>';
    side.appendChild(panel);
    list = panel.querySelector(".gf-recommend-list");
    return true;
  }

  function clear() {
    if (!panel) return;
    panel.classList.remove("visible");
    if (list) list.innerHTML = "";
  }

  function play(move) {
    const state = window.__st?.();
    const game = window.__xq;
    if (!state || !game?.onCellClick || state.status !== "playing" || state.thinking) return;
    game.onCellClick(move.from.x, move.from.y);
    window.setTimeout(() => game.onCellClick(move.to.x, move.to.y), 100);
  }

  function render(state) {
    if (!ensurePanel() || !list) return;
    const humanTurn = state.mode === "pvp" || state.turn === "r";
    if (!state.started || state.status !== "playing" || !state.board || !humanTurn) {
      clear();
      return;
    }
    panel.classList.add("visible");
    list.innerHTML = '<div class="gf-recommend-empty">正在观局，计算三步妙手…</div>';
    calculating = true;
    window.setTimeout(() => {
      const current = window.__st?.();
      if (!current?.board || boardKey(current.board) !== boardKey(state.board)) {
        calculating = false;
        // The position changed while the shallow search was running. Force
        // the polling loop to render the fresh position on its next tick.
        lastKey = "";
        return;
      }
      const ranked = rankMoves(state.board, state.turn);
      list.innerHTML = "";
      if (!ranked.length) {
        list.innerHTML = '<div class="gf-recommend-empty">暂无合法走法</div>';
      } else {
        ranked.forEach(({ move, score }, index) => {
          const button = document.createElement("button");
          button.className = `gf-btn gf-recommend-row${index === 0 ? " best" : ""}`;
          button.title = "采用这一步推荐";
          const displayScore = Math.round(score / 10) / 10;
          button.innerHTML = `<span class="gf-rec-rank">${index + 1}</span><span class="gf-rec-name">${notation(state.board, move)}</span><span class="gf-rec-eval">${displayScore >= 0 ? "+" : ""}${displayScore}</span>`;
          button.addEventListener("click", () => play(move));
          list.appendChild(button);
        });
      }
      calculating = false;
    }, 20);
  }

  function tick() {
    ensurePanel();
    const state = window.__st?.();
    if (!state) {
      window.setTimeout(tick, 250);
      return;
    }
    const key = state.started && state.board ? `${state.turn}:${state.status}:${boardKey(state.board)}` : "idle";
    if (key !== lastKey || state.started !== lastStarted) {
      lastKey = key;
      lastStarted = state.started;
      if (!calculating) render(state);
    }
    window.setTimeout(tick, 350);
  }

  tick();
})();
