/* Match each piece palette with a coordinated board/environment palette. */
(() => {
  "use strict";

  const SETS = [
    { id: "cinnabar", name: "朱砂 · 墨玉", note: "赤釉 × 暖木", piece: "cinnabar", board: "wood", red: "#a83c2c", black: "#3a5f58", boardA: "#8a4c2e", boardB: "#6b3820" },
    { id: "porcelain", name: "青花 · 瓷影", note: "青花 × 宣纸", piece: "porcelain", board: "ink", red: "#2e678c", black: "#193b55", boardA: "#e5decf", boardB: "#bdb9aa" },
    { id: "jade", name: "翡翠 · 赤金", note: "玉翠 × 云台", piece: "jade", board: "jade", red: "#a84132", black: "#1d7164", boardA: "#39766a", boardB: "#153b38" },
    { id: "iron", name: "玄铁 · 战痕", note: "玄铁 × 青铜", piece: "iron", board: "bronze", red: "#73343d", black: "#263440", boardA: "#756342", boardB: "#383124" },
    { id: "lacquer", name: "金漆 · 宫廷", note: "金漆 × 朱阙", piece: "lacquer", board: "vermilion", red: "#8f2d26", black: "#182b2a", boardA: "#702b25", boardB: "#351615" },
  ];

  const state = { section: null, initialized: false, active: "cinnabar" };

  function inferActive() {
    const stored = localStorage.getItem("xiangqi-skin-set");
    if (stored && SETS.some((item) => item.id === stored)) return stored;
    const piece = localStorage.getItem("xiangqi-piece-skin");
    const board = localStorage.getItem("xiangqi-board-skin");
    return SETS.find((item) => item.piece === piece && item.board === board)?.id || SETS[0].id;
  }

  function updateActive() {
    document.querySelectorAll(".gf-skin-set-option").forEach((button) => {
      button.classList.toggle("on", button.dataset.set === state.active);
    });
  }

  function applySet(item) {
    state.active = item.id;
    localStorage.setItem("xiangqi-skin-set", item.id);
    const pieceButton = document.querySelector(`.gf-skin-option[data-skin="${item.piece}"]`);
    const boardButton = document.querySelector(`.gf-board-option[data-board="${item.board}"]`);
    pieceButton?.click();
    boardButton?.click();
    updateActive();
  }

  function build() {
    if (state.section) return true;
    const panel = document.querySelector(".gf-skin-panel");
    const pieceTitle = panel?.querySelector(".gf-skin-title");
    const pieceGrid = panel?.querySelector(".gf-skin-grid");
    const boardSection = panel?.querySelector(".gf-board-section");
    if (!panel || !pieceTitle || !pieceGrid || !boardSection) return false;

    // Keep the underlying individual controls for compatibility, but present
    // one coherent choice to the player so pieces and board never drift apart.
    pieceTitle.style.display = "none";
    pieceGrid.style.display = "none";
    boardSection.style.display = "none";

    const style = document.createElement("style");
    style.textContent = `
      .gf-set-section { display:block; }
      .gf-set-title { display:flex; justify-content:space-between; align-items:center; color:#e9cf8f; font-family:var(--font-cal); font-size:18px; letter-spacing:.18em; margin-bottom:7px; }
      .gf-set-title small { color:#efe5cf66; font-family:var(--font-serif); font-size:10px; letter-spacing:.04em; }
      .gf-set-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
      .gf-skin-set-option { display:flex; align-items:center; gap:7px; min-height:39px; padding:6px 7px; text-align:left; }
      .gf-skin-set-option.on { color:#ffe9ac; border-color:#e9cf8f; background:rgba(201,164,92,.2); box-shadow:inset 0 0 8px rgba(201,164,92,.12); }
      .gf-set-swatch { width:30px; height:20px; flex:0 0 30px; border:1px solid rgba(239,229,207,.7); display:flex; overflow:hidden; }
      .gf-set-swatch i { flex:1; display:block; }
      .gf-set-copy { display:flex; flex-direction:column; gap:2px; line-height:1.1; }
      .gf-set-copy small { color:#efe5cf66; font-size:9px; letter-spacing:0; }
      @media(max-width:640px){ .gf-set-grid { grid-template-columns:1fr; } }
    `;
    document.head.appendChild(style);

    const section = document.createElement("div");
    section.className = "gf-set-section";
    section.innerHTML = '<div class="gf-set-title"><span>皮肤套装</span><small>棋子 × 棋盘</small></div><div class="gf-set-grid"></div>';
    panel.insertBefore(section, panel.firstChild);
    state.section = section;
    state.active = inferActive();
    const grid = section.querySelector(".gf-set-grid");
    SETS.forEach((item) => {
      const button = document.createElement("button");
      button.className = "gf-btn gf-skin-set-option";
      button.dataset.set = item.id;
      button.innerHTML = `<span class="gf-set-swatch"><i style="background:${item.red}"></i><i style="background:${item.black}"></i><i style="background:linear-gradient(180deg,${item.boardA},${item.boardB})"></i></span><span class="gf-set-copy"><b>${item.name}</b><small>${item.note}</small></span>`;
      button.addEventListener("click", () => applySet(item));
      grid.appendChild(button);
    });
    updateActive();
    if (!state.initialized) {
      state.initialized = true;
      const initial = SETS.find((item) => item.id === state.active) || SETS[0];
      applySet(initial);
    }
    return true;
  }

  function tick() {
    build();
    window.setTimeout(tick, 500);
  }

  tick();
})();
