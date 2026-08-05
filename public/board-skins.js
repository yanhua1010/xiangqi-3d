/* Board/environment skins that layer on top of the procedural board runtime. */
(() => {
  "use strict";

  const THEMES = [
    {
      id: "wood",
      name: "暖木 · 战场",
      top: "#8a4c2e", bottom: "#6b3820", grain: "rgba(214,150,96,.15)", grainDark: "rgba(46,20,10,.16)",
      frame: "#3d2416", outer: "#6d6f66", inner: "#8b8d84", rim: "#c9a45c", line: "#e6c87a", river: "#f0e1be",
      fog: "#d6dccb", ground: "#6d6f66", sun: "#d1495b", lantern: "#ff8a50", rough: .5, metal: .08,
      hemi: "#dde8ea", hemiGround: "#8a7a5a", key: "#ffe3b0", keyPower: 2.3,
    },
    {
      id: "jade",
      name: "青玉 · 云台",
      top: "#39766a", bottom: "#153b38", grain: "rgba(188,243,208,.12)", grainDark: "rgba(7,31,28,.22)",
      frame: "#122b29", outer: "#244d49", inner: "#356c61", rim: "#8bd5ad", line: "#c3ebc8", river: "#dff4d8",
      fog: "#b9cfc4", ground: "#38564e", sun: "#9a6557", lantern: "#74e2bb", rough: .32, metal: .14,
      hemi: "#d8f2e9", hemiGround: "#496d61", key: "#e4fff1", keyPower: 2.1,
    },
    {
      id: "ink",
      name: "水墨 · 宣纸",
      top: "#e5decf", bottom: "#bdb9aa", grain: "rgba(50,48,42,.10)", grainDark: "rgba(255,255,255,.18)",
      frame: "#3b3a35", outer: "#686960", inner: "#a4a397", rim: "#8d785c", line: "#444841", river: "#53564f",
      fog: "#d5d3c8", ground: "#787b73", sun: "#9b6a63", lantern: "#c98a57", rough: .82, metal: .02,
      hemi: "#f1f0e7", hemiGround: "#8c8d86", key: "#fff4dc", keyPower: 1.8,
    },
    {
      id: "vermilion",
      name: "朱阙 · 丹霞",
      top: "#702b25", bottom: "#351615", grain: "rgba(246,181,99,.12)", grainDark: "rgba(24,6,5,.25)",
      frame: "#1d100f", outer: "#41302b", inner: "#67443a", rim: "#e1aa54", line: "#d59d5d", river: "#f2d08a",
      fog: "#b9a493", ground: "#4b3930", sun: "#b83b32", lantern: "#ff6040", rough: .44, metal: .12,
      hemi: "#f0ded0", hemiGround: "#6d4a3e", key: "#ffc184", keyPower: 2.4,
    },
    {
      id: "bronze",
      name: "青铜 · 古阵",
      top: "#756342", bottom: "#383124", grain: "rgba(229,201,132,.12)", grainDark: "rgba(26,20,12,.24)",
      frame: "#241d16", outer: "#50483a", inner: "#756c51", rim: "#b9a160", line: "#ddc98f", river: "#e7d8ad",
      fog: "#a6a49a", ground: "#4f4c42", sun: "#c86648", lantern: "#ff8040", rough: .62, metal: .42,
      hemi: "#e8ddc6", hemiGround: "#625b4b", key: "#f6c88b", keyPower: 2.6,
    },
  ];

  const state = {
    active: localStorage.getItem("xiangqi-board-skin") || THEMES[0].id,
    options: null,
    lastGame: null,
    lastMap: null,
  };

  function theme() {
    return THEMES.find((item) => item.id === state.active) || THEMES[0];
  }

  function makeTexture(item) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, item.top);
    gradient.addColorStop(.5, item.top);
    gradient.addColorStop(1, item.bottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Deterministic grain/marbled strokes so every theme has a tactile surface.
    let seed = item.id.length * 973;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    for (let i = 0; i < 230; i++) {
      const x = random() * canvas.width;
      const width = .6 + random() * 3;
      const height = canvas.height * (.2 + random() * .8);
      const y = random() * canvas.height - height / 2;
      ctx.strokeStyle = random() > .5 ? item.grainDark : item.grain;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + (random() - .5) * 24, y + height * .33, x + (random() - .5) * 24, y + height * .68, x + (random() - .5) * 14, y + height);
      ctx.stroke();
    }

    const h = (x) => (x + 4.9) / 9.8 * canvas.width;
    const v = (y) => (y + 5.4) / 10.8 * canvas.height;
    const line = (x1, y1, x2, y2, width = 2.6) => {
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(h(x1), v(y1));
      ctx.lineTo(h(x2), v(y2));
      ctx.stroke();
    };

    ctx.strokeStyle = item.line;
    ctx.shadowColor = "rgba(0,0,0,.32)";
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;
    for (let x = -4; x <= 4; x++) line(x, -4.5, x, 4.5);
    for (let y = -4.5; y <= 4.5; y++) line(-4, y, 4, y, 3);
    line(-1, -4.5, 1, -2.5, 2);
    line(1, -4.5, -1, -2.5, 2);
    line(-1, 2.5, 1, 4.5, 2);
    line(1, 2.5, -1, 4.5, 2);

    const marks = [[-3, -2.5], [3, -2.5], [-3, 2.5], [3, 2.5], [-4, -1.5], [-2, -1.5], [0, -1.5], [2, -1.5], [4, -1.5], [-4, 1.5], [-2, 1.5], [0, 1.5], [2, 1.5], [4, 1.5]];
    ctx.strokeStyle = item.line;
    ctx.lineWidth = 2;
    const gap = .085;
    const arm = .13;
    for (const [x, y] of marks) {
      for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
        if (x === -4 && sx < 0 || x === 4 && sx > 0) continue;
        ctx.beginPath();
        ctx.moveTo(h(x + sx * (arm + gap)), v(y + sy * arm));
        ctx.lineTo(h(x + sx * arm), v(y + sy * arm));
        ctx.lineTo(h(x + sx * arm), v(y + sy * (arm + gap)));
        ctx.stroke();
      }
    }

    ctx.fillStyle = item.river;
    ctx.strokeStyle = "rgba(35,20,12,.35)";
    ctx.lineWidth = 2;
    ctx.font = '900 118px "Ma Shan Zheng","ZCOOL XiaoWei","KaiTi",serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const riverY = v(0);
    [["楚", h(-3)], ["河", h(-1.4)], ["漢", h(1.4)], ["界", h(3)]].forEach(([text, x]) => {
      ctx.strokeText(text, x, riverY);
      ctx.fillText(text, x, riverY);
    });

    const vignette = ctx.createRadialGradient(512, 564, 120, 512, 564, 720);
    vignette.addColorStop(0, "rgba(255,230,170,.08)");
    vignette.addColorStop(1, "rgba(0,0,0,.18)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = item.rim;
    ctx.lineWidth = 5;
    ctx.strokeRect(14, 14, 996, 1100);
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 964, 1068);

    const sourceMap = window.__xq?.boardGroup?.children?.[0]?.material?.map;
    if (!sourceMap?.constructor) return null;
    const texture = new sourceMap.constructor(canvas);
    texture.colorSpace = sourceMap.colorSpace;
    texture.anisotropy = 8;
    return texture;
  }

  function setColor(material, value) {
    if (material?.color?.set) material.color.set(value);
    if (material) material.needsUpdate = true;
  }

  function apply() {
    const game = window.__xq;
    if (!game?.boardGroup) return;
    const item = theme();
    const children = game.boardGroup.children;
    const surface = children[0]?.material;
    const frame = children[1]?.material;
    const rim = children[2]?.material;
    if (!surface || !frame || !rim) return;

    const texture = makeTexture(item);
    if (texture) {
      if (state.lastMap && state.lastMap !== surface.map) state.lastMap.dispose();
      surface.map = texture;
      surface.color.set(0xffffff);
      surface.roughness = item.rough;
      surface.metalness = item.metal;
      surface.needsUpdate = true;
      state.lastMap = texture;
    }
    setColor(frame, item.frame);
    frame.roughness = item.rough;
    frame.metalness = item.metal * .35;
    setColor(rim, item.rim);
    rim.roughness = .3;
    rim.metalness = .9;

    const scene = game.scene;
    if (scene.fog?.color?.set) scene.fog.color.set(item.fog);
    const lights = scene.children.filter((object) => object.isLight);
    const hemi = lights.find((light) => light.type === "HemisphereLight");
    const directional = lights.filter((light) => light.type === "DirectionalLight");
    if (hemi) {
      hemi.color.set(item.hemi);
      hemi.groundColor.set(item.hemiGround);
    }
    if (directional[0]) {
      directional[0].color.set(item.key);
      directional[0].intensity = item.keyPower;
    }
    if (directional[1]) directional[1].color.set(item.lantern);
    if (directional[2]) directional[2].color.set(item.line);
    if (game.env?.lanternLights) game.env.lanternLights.forEach((light) => light.color.set(item.lantern));

    // Re-tint the stage platform and the sunset disc without touching the
    // procedural mountain shader.
    const sunset = scene.children[1]?.material;
    if (sunset?.color?.set) sunset.color.set(item.sun);
    const stageOuter = scene.children[7]?.material;
    const stageInner = scene.children[8]?.material;
    if (stageOuter?.color?.set) stageOuter.color.set(item.outer);
    if (stageInner?.color?.set) stageInner.color.set(item.inner);
    const stageRim = scene.children[9]?.material;
    if (stageRim?.color?.set) stageRim.color.set(item.rim);

    document.querySelectorAll(".gf-board-option").forEach((button) => {
      button.classList.toggle("on", button.dataset.board === state.active);
    });
    state.lastGame = game;
  }

  function buildUi() {
    if (state.options) return true;
    const panel = document.querySelector(".gf-skin-panel");
    if (!panel) return false;
    const style = document.createElement("style");
    style.textContent = `
      .gf-board-section { border-top:1px solid rgba(201,164,92,.25); margin-top:10px; padding-top:8px; }
      .gf-board-title { display:flex; justify-content:space-between; color:#e9cf8f; font-family:var(--font-cal); font-size:17px; letter-spacing:.18em; margin-bottom:6px; }
      .gf-board-title small { color:#efe5cf66; font-family:var(--font-serif); font-size:10px; letter-spacing:.04em; }
      .gf-board-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px; }
      .gf-board-option { display:flex; align-items:center; gap:6px; padding:6px 7px; font-size:11px; text-align:left; }
      .gf-board-option.on { color:#ffe9ac; border-color:#e9cf8f; background:rgba(201,164,92,.2); box-shadow:inset 0 0 8px rgba(201,164,92,.12); }
      .gf-board-swatch { width:24px; height:16px; flex:0 0 24px; border:1px solid rgba(239,229,207,.6); display:inline-block; }
      @media(max-width:640px){ .gf-board-grid { grid-template-columns:1fr; } }
    `;
    document.head.appendChild(style);
    const section = document.createElement("div");
    section.className = "gf-board-section";
    section.innerHTML = '<div class="gf-board-title"><span>棋盘皮肤</span><small>盘面与环境</small></div><div class="gf-board-grid"></div>';
    panel.appendChild(section);
    state.options = section.querySelector(".gf-board-grid");
    THEMES.forEach((item) => {
      const button = document.createElement("button");
      button.className = "gf-btn gf-board-option";
      button.dataset.board = item.id;
      button.innerHTML = `<i class="gf-board-swatch" style="background:linear-gradient(135deg,${item.top},${item.bottom})"></i><span>${item.name}</span>`;
      button.addEventListener("click", () => {
        state.active = item.id;
        localStorage.setItem("xiangqi-board-skin", item.id);
        apply();
      });
      state.options.appendChild(button);
    });
    return true;
  }

  function tick() {
    if (buildUi()) {
      const game = window.__xq;
      if (game && game !== state.lastGame) apply();
    }
    window.setTimeout(tick, 500);
  }

  tick();
})();
