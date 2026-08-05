# 3D 中国象棋 · Xiangqi 3D

一款运行在浏览器中的 3D 中国象棋。基于 [rork-medieval-3d-chess](https://github.com/alexngdev99/rork-medieval-3d-chess)
（国际象棋 3D 版）的技术思路复刻，使用 **Vite + React 19 + TypeScript + Three.js** 构建，
规则与 AI 完全自研，无需后端、无账号、纯静态站点。

![tech](https://img.shields.io/badge/Vite-8.x-646cff) ![react](https://img.shields.io/badge/React-19-61dafb) ![three](https://img.shields.io/badge/three.js-0.185-000)

## 特性

- **完整中国象棋规则**：车、马、炮、相/象、仕/士、帅/将、兵/卒的走法；马腿、象眼、炮架；
  九宫限制、相不过河、兵过河可横走；**将帅不照面**；将军与将死判定。
- **3D 棋盘与棋子**：实木质感棋盘、楚河汉界、九宫斜线；圆柱棋子 + 楷书棋子名，红蓝（黑）双方配色；
  棋子落子有抛物线跃动，被吃时旋转飞升消散。
- **Three.js 交互相机**：鼠标拖拽旋转视角、滚轮缩放，点击选子并以绿点（移动）/红圈（吃子）高亮落点。
- **内置 AI 对手**：基于 Alpha-Beta 剪枝的 Negamax 搜索，配合子力价值表与位置评估表（PST），
  三档难度（简单/中等/困难，搜索深度 2/3/4）；AI 运行在 Web Worker 中，不阻塞渲染。
- **人机对战 / 双人同机** 两种模式；可选择执红（先手）或执黑（后手）。
- 右上角实时走棋记录、当前行棋方、AI 思考状态。

## 快速开始

```bash
bun install      # 或 npm install / pnpm install
bun run dev      # 启动开发服务器
bun run build    # 类型检查 + 生产构建，输出到 dist/
bun run preview  # 预览生产构建
```

## 操作

- **左键点击** 棋子选中，再点击高亮落点走棋
- **按住拖拽** 旋转 3D 视角
- **滚轮** 缩放
- 红方先手；执黑时镜头自动转到黑方一侧

## 项目结构

```
src/
├── game/
│   ├── types.ts        # 共享类型：棋子、棋盘、走法、难度
│   ├── engine.ts       # 棋盘生成、各子走法、合法性、将军/将死判定
│   ├── ai.ts           # Alpha-Beta Negamax + 位置评估表
│   └── ai.worker.ts    # Web Worker 封装
├── scene/
│   └── XiangqiScene.ts # Three.js 场景：棋盘/棋子/光照/相机/点击拾取/动画
├── App.tsx             # React UI：主菜单、HUD、走棋记录、胜负弹窗
├── main.tsx
└── index.css
```

## 规则实现说明

- 走法生成采用"伪合法 → 过滤"两步：先生成所有符合子力走法的目标格，再执行走法并检查
  己方是否被将军、以及将帅是否照面，过滤掉非法走法。
- "飞将"（将帅不照面）作为硬性规则：若双方将帅在同一列且中间无子，任何导致该局面的走法均非法。
- 将死/困毙均判负（无合法走子的一方告负），这是中国象棋通行规则。
- AI 使用 Negamax + Alpha-Beta，按吃子价值排序走法以提升剪枝效率；简单难度加入随机扰动。

## 致谢

灵感与架构参考自 Alex Ng 的 [rork-medieval-3d-chess](https://github.com/alexngdev99/rork-medieval-3d-chess)
（React + Three.js 3D 国际象棋）。本项目将其从国际象棋（chess.js）替换为完整自研的中国象棋规则与 AI。

## License

MIT
