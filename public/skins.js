/* Runtime skin switcher for the procedural Kimi-style pieces. */
(() => {
  "use strict";

  const SKINS = [
    {
      id: "cinnabar",
      name: "朱砂 · 墨玉",
      red: { glaze: "#a83c2c", deep: "#7e2a1e", trim: "#d8b56a", dark: "#241d16", wood: "#4a2c17", saddle: "#76251e", skin: "#b5774e" },
      black: { glaze: "#3a5f58", deep: "#264540", trim: "#b9c4c9", dark: "#241d16", wood: "#4a2c17", saddle: "#27463f", skin: "#b5774e" },
      bronze: "#5a6b5e", ivory: "#ead9b8", cream: "#efe5cf", jade: "#cfe0d0",
    },
    {
      id: "porcelain",
      name: "青花 · 瓷影",
      red: { glaze: "#2e678c", deep: "#18435f", trim: "#e3c477", dark: "#152a3b", wood: "#3b271c", saddle: "#24536f", skin: "#c58f68" },
      black: { glaze: "#193b55", deep: "#102638", trim: "#a9d4e4", dark: "#101b28", wood: "#32251e", saddle: "#17344b", skin: "#c58f68" },
      bronze: "#50758a", ivory: "#e9eef0", cream: "#f4f7f3", jade: "#9bc9d1",
    },
    {
      id: "jade",
      name: "翡翠 · 赤金",
      red: { glaze: "#a84132", deep: "#6f241e", trim: "#f0d28a", dark: "#30221e", wood: "#4a2c17", saddle: "#78291f", skin: "#d19b72" },
      black: { glaze: "#1d7164", deep: "#10493f", trim: "#b8efd2", dark: "#142c29", wood: "#263b32", saddle: "#155649", skin: "#c68f6c" },
      bronze: "#657d68", ivory: "#e6dfc2", cream: "#f0ead5", jade: "#78e2b5",
    },
    {
      id: "iron",
      name: "玄铁 · 战痕",
      red: { glaze: "#73343d", deep: "#431e29", trim: "#dda05d", dark: "#1b1e28", wood: "#30221e", saddle: "#542631", skin: "#b4775e" },
      black: { glaze: "#263440", deep: "#151e2a", trim: "#7d9db5", dark: "#11151b", wood: "#25252a", saddle: "#1b2732", skin: "#a97762" },
      bronze: "#6f7376", ivory: "#c8c7bc", cream: "#d7d6cf", jade: "#78939b",
    },
    {
      id: "lacquer",
      name: "金漆 · 宫廷",
      red: { glaze: "#8f2d26", deep: "#511915", trim: "#ffe08a", dark: "#291512", wood: "#4b2918", saddle: "#6d201b", skin: "#c28660" },
      black: { glaze: "#182b2a", deep: "#0d1918", trim: "#d9b969", dark: "#111514", wood: "#2b2118", saddle: "#142321", skin: "#ae7c5d" },
      bronze: "#9a7a3d", ivory: "#ead9b8", cream: "#f2dfb0", jade: "#c5ab62",
    },
  ];

  const state = {
    active: localStorage.getItem("xiangqi-piece-skin") || SKINS[0].id,
    panel: null,
    options: null,
    lastPieces: "",
  };

  function getSkin() {
    return SKINS.find((skin) => skin.id === state.active) || SKINS[0];
  }

  function classify(material) {
    if (material.userData?.xqSkinRole) return material.userData.xqSkinRole;
    const hex = material.color?.getHexString?.() || "";
    const rough = Number(material.roughness ?? 0);
    const metal = Number(material.metalness ?? 0);
    const clear = Number(material.clearcoat ?? 0);
    let role = "other";

    if (clear >= 0.95 && rough <= 0.25) role = "jade";
    else if (clear >= 0.5 && rough <= 0.4) role = "glaze";
    else if (clear >= 0.5) role = "deep";
    else if (metal >= 0.9 && rough <= 0.3) role = "trim";
    else if (metal >= 0.75 && rough <= 0.45) role = "bronze";
    else if (material.map && Math.abs(metal - 0.35) < 0.02 && Math.abs(rough - 0.5) < 0.02) role = "saddle";
    else if (hex === "4a2c17") role = "wood";
    else if (hex === "241d16") role = "dark";
    else if (hex === "b5774e") role = "skin";
    else if (hex === "ead9b8") role = "ivory";
    else if (hex === "efe5cf" || (hex === "ffffff" && rough >= 0.8)) role = "cream";

    material.userData.xqSkinRole = role;
    return role;
  }

  function paintMaterial(material, side, skin) {
    const role = classify(material);
    const palette = side === "r" ? skin.red : skin.black;
    const color = palette[role] || skin[role];
    if (!color || role === "other") return;
    material.color?.set?.(color);
    if (role === "trim" && material.emissive?.set) material.emissive.set(color);
    material.needsUpdate = true;
  }

  function applySkin() {
    const game = window.__xq;
    if (!game?.pieces) return;
    const skin = getSkin();
    for (const entry of game.pieces.values()) {
      entry.group.traverse((object) => {
        if (!object.isMesh) return;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => paintMaterial(material, entry.color, skin));
      });
    }
    state.lastPieces = Array.from(game.pieces.keys()).join("|");
    document.querySelectorAll(".gf-skin-option").forEach((button) => {
      button.classList.toggle("on", button.dataset.skin === state.active);
    });
  }

  function choose(id) {
    state.active = id;
    localStorage.setItem("xiangqi-piece-skin", id);
    applySkin();
  }

  function buildUi() {
    if (state.panel) return true;
    const side = document.querySelector(".gf-side");
    if (!side) return false;

    const style = document.createElement("style");
    style.textContent = `
      .gf-skin-panel { display:none; border-top:1px solid rgba(201,164,92,.25); padding-top:8px; margin-top:8px; }
      .gf-skin-panel.open { display:block; }
      .gf-skin-title { display:flex; justify-content:space-between; align-items:center; color:#e9cf8f; font-family:var(--font-cal); font-size:17px; letter-spacing:.18em; margin-bottom:6px; }
      .gf-skin-title small { color:#efe5cf66; font-family:var(--font-serif); font-size:10px; letter-spacing:.04em; }
      .gf-skin-grid { display:grid; grid-template-columns:1fr 1fr; gap:5px; }
      .gf-skin-option { display:flex; align-items:center; gap:6px; padding:6px 7px; font-size:11px; text-align:left; }
      .gf-skin-option.on { color:#ffe9ac; border-color:#e9cf8f; background:rgba(201,164,92,.2); box-shadow:inset 0 0 8px rgba(201,164,92,.12); }
      .gf-skin-swatch { width:24px; height:16px; flex:0 0 24px; border:1px solid rgba(239,229,207,.6); display:inline-flex; overflow:hidden; }
      .gf-skin-swatch i { flex:1; display:block; }
      @media(max-width:640px){ .gf-skin-grid { grid-template-columns:1fr; } }
    `;
    document.head.appendChild(style);

    const toggle = document.createElement("button");
    toggle.className = "gf-btn";
    toggle.textContent = "皮肤";
    toggle.title = "切换棋子皮肤";
    toggle.addEventListener("click", () => state.panel.classList.toggle("open"));
    const firstControls = side.querySelector(".gf-controls");
    firstControls?.appendChild(toggle);

    const panel = document.createElement("div");
    panel.className = "gf-skin-panel";
    panel.innerHTML = '<div class="gf-skin-title"><span>棋子皮肤</span><small>实时切换</small></div><div class="gf-skin-grid"></div>';
    const notation = side.querySelector(".gf-notation");
    side.insertBefore(panel, notation || null);
    state.panel = panel;
    state.options = panel.querySelector(".gf-skin-grid");

    SKINS.forEach((skin) => {
      const button = document.createElement("button");
      button.className = "gf-btn gf-skin-option";
      button.dataset.skin = skin.id;
      button.innerHTML = `<span class="gf-skin-swatch"><i style="background:${skin.red.glaze}"></i><i style="background:${skin.black.glaze}"></i></span><span>${skin.name}</span>`;
      button.addEventListener("click", () => choose(skin.id));
      state.options.appendChild(button);
    });
    return true;
  }

  function tick() {
    if (buildUi()) {
      const game = window.__xq;
      const pieces = game?.pieces;
      const signature = pieces ? Array.from(pieces.keys()).join("|") : "";
      if (signature !== state.lastPieces || state.lastPieces === "") applySkin();
    }
    window.setTimeout(tick, 500);
  }

  tick();
})();
