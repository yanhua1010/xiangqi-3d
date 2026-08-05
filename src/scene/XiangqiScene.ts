import * as THREE from "three";
import {
  FILES,
  PIECE_NAMES,
  RANKS,
  createBoard,
  gameStatus,
  legalMovesFrom,
} from "../game/engine";
import type { Board, Difficulty, Move, Piece, Side } from "../game/types";
import { chooseMove } from "../game/ai";

// Board lies in the X-Z plane. x in [0..8], z in [0..9].
const TILE = 1.15;
const PIECE_H = 0.32;
const PIECE_R = 0.42;

export interface SceneCallbacks {
  onMove: (m: Move) => void;
  onBoardChange: (b: Board, turn: Side) => void;
  onGameOver: (winner: Side | "draw") => void;
  onThinkingChange: (thinking: boolean) => void;
  onSelectChange: (moves: Move[]) => void;
}

interface PieceMesh {
  piece: Piece;
  group: THREE.Group;
  disc: THREE.Mesh;
  ring: THREE.Mesh;
  label: THREE.Sprite;
}

const RED = 0xc8322e;
const BLACK = 0x23262d;

export class XiangqiScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private container: HTMLElement;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private board: Board = createBoard();
  private turn: Side = "r";
  private meshes = new Map<string, PieceMesh>();
  private highlightGroup = new THREE.Group();
  private moveMarkers: THREE.Mesh[] = [];
  private selected: [number, number] | null = null;
  private lastMove: Move | null = null;
  private lastMoveMarker: THREE.Mesh | null = null;
  private animating = false;
  private cb: SceneCallbacks;
  private humanSide: Side = "r";
  private mode: "ai" | "hotseat" = "ai";
  private difficulty: Difficulty = "medium";
  private cameraTarget = new THREE.Vector3(
    ((FILES - 1) / 2) * TILE,
    0,
    ((RANKS - 1) / 2) * TILE
  );
  private spherical = new THREE.Spherical(13.5, Math.PI / 3.2, 0);
  private dragging = false;
  private lastPointer = { x: 0, y: 0 };
  private raf = 0;
  private worker: Worker | null = null;
  private disposed = false;

  constructor(container: HTMLElement, cb: SceneCallbacks) {
    this.container = container;
    this.cb = cb;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1410);
    this.scene.fog = new THREE.Fog(0x1a1410, 18, 32);

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    this.updateCamera();

    this.buildLights();
    this.buildBoard();
    this.scene.add(this.highlightGroup);
    this.buildPieces();

    this.bindEvents();
    this.animate();
  }

  // --------------------------------------------------------------- setup

  private buildLights() {
    const hemi = new THREE.HemisphereLight(0xfff0d0, 0x3a2a1c, 0.7);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xfff2d6, 1.3);
    key.position.set(6, 14, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const s = key.shadow.camera;
    s.left = -8; s.right = 8; s.top = 8; s.bottom = -8;
    s.near = 1; s.far = 40;
    this.scene.add(key);

    const rim = new THREE.DirectionalLight(0x88aaff, 0.35);
    rim.position.set(-6, 6, -6);
    this.scene.add(rim);
  }

  private boardWidth = (FILES - 1) * TILE;
  private boardDepth = (RANKS - 1) * TILE;

  private buildBoard() {
    // Wooden slab
    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(this.boardWidth + 1.4, 0.4, this.boardDepth + 1.4),
      new THREE.MeshStandardMaterial({
        color: 0x7a4a22,
        roughness: 0.8,
        metalness: 0.05,
      })
    );
    slab.position.set(this.cameraTarget.x, -0.45, this.cameraTarget.z);
    slab.receiveShadow = true;
    this.scene.add(slab);

    // Playing surface
    const surface = new THREE.Mesh(
      new THREE.PlaneGeometry(this.boardWidth + 0.6, this.boardDepth + 0.6),
      new THREE.MeshStandardMaterial({
        color: 0xd9b481,
        roughness: 0.75,
        metalness: 0.02,
      })
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.set(this.cameraTarget.x, -0.23, this.cameraTarget.z);
    surface.receiveShadow = true;
    this.scene.add(surface);

    const lineMat = new THREE.LineBasicMaterial({ color: 0x3a2410 });
    const positions: number[] = [];
    const halfX = this.boardWidth / 2;
    const halfZ = this.boardDepth / 2;
    const y = -0.21;

    const addLine = (x1: number, z1: number, x2: number, z2: number) => {
      positions.push(x1, y, z1, x2, y, z2);
    };
    // World z for a grid rank y (0 = far/black back rank).
    const wz = (r: number) => this.cameraTarget.z + halfZ - r * TILE;

    // Horizontal lines (ranks)
    for (let r = 0; r < RANKS; r++) {
      const z = wz(r);
      addLine(this.cameraTarget.x - halfX, z, this.cameraTarget.x + halfX, z);
    }
    // Vertical files, broken at the river (between ranks 4 and 5)
    for (let f = 0; f < FILES; f++) {
      const x = this.cameraTarget.x - halfX + f * TILE;
      addLine(x, wz(0), x, wz(4));
      addLine(x, wz(5), x, wz(9));
    }
    // Border
    addLine(this.cameraTarget.x - halfX, wz(0), this.cameraTarget.x + halfX, wz(0));
    addLine(this.cameraTarget.x - halfX, wz(9), this.cameraTarget.x + halfX, wz(9));

    // Palace diagonals
    const palace = (top: boolean) => {
      const z0 = wz(top ? 0 : 7);
      const z1 = wz(top ? 2 : 9);
      addLine(this.cameraTarget.x - TILE, z0, this.cameraTarget.x + TILE, z1);
      addLine(this.cameraTarget.x + TILE, z0, this.cameraTarget.x - TILE, z1);
    };
    palace(true);
    palace(false);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.scene.add(new THREE.LineSegments(geo, lineMat));

    // River label
    this.makeTextPlane("楚 河", new THREE.Vector3(this.cameraTarget.x - 1.6, -0.2, this.cameraTarget.z), 2.4, 0x5a3a1a);
    this.makeTextPlane("漢 界", new THREE.Vector3(this.cameraTarget.x + 1.6, -0.2, this.cameraTarget.z), 2.4, 0x5a3a1a);

    // Last-move highlight (transparent tile)
    const hlm = new THREE.Mesh(
      new THREE.PlaneGeometry(TILE * 0.9, TILE * 0.9),
      new THREE.MeshBasicMaterial({ color: 0xffd24a, transparent: true, opacity: 0.35, depthWrite: false })
    );
    hlm.rotation.x = -Math.PI / 2;
    hlm.position.y = -0.2;
    hlm.visible = false;
    this.scene.add(hlm);
    this.lastMoveMarker = hlm;
  }

  private makeTextPlane(text: string, pos: THREE.Vector3, size: number, color: number) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    ctx.font = "bold 40px serif";
    ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 128, 32);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size / 4), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(pos);
    this.scene.add(mesh);
  }

  private makeLabelSprite(p: Piece): THREE.Sprite {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    const color = p.side === "r" ? RED : BLACK;
    ctx.fillStyle = "#f5e6c4";
    ctx.beginPath();
    ctx.arc(64, 64, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = `#${color.toString(16).padStart(6, "0")}`;
    ctx.stroke();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.font = "bold 72px 'STKaiti','KaiTi','Songti SC',serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(PIECE_NAMES[p.side][p.type], 64, 68);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(0.78, 0.78, 1);
    sprite.position.y = PIECE_H / 2 + 0.005;
    return sprite;
  }

  private buildPieces() {
    for (let y = 0; y < RANKS; y++) {
      for (let x = 0; x < FILES; x++) {
        const p = this.board[y][x];
        if (p) this.addPieceMesh(p, x, y);
      }
    }
  }

  private addPieceMesh(p: Piece, x: number, y: number) {
    const group = new THREE.Group();
    const color = p.side === "r" ? RED : BLACK;

    const discMat = new THREE.MeshStandardMaterial({
      color: 0xf0ddb5,
      roughness: 0.55,
      metalness: 0.1,
    });
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(PIECE_R, PIECE_R, PIECE_H, 32),
      discMat
    );
    disc.castShadow = true;
    disc.receiveShadow = true;
    group.add(disc);

    // Colored rim
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(PIECE_R - 0.04, 0.045, 12, 40),
      new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.3 })
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = PIECE_H / 2 - 0.01;
    group.add(rim);

    const label = this.makeLabelSprite(p);
    group.add(label);

    const [wx, wz] = this.gridToWorld(x, y);
    group.position.set(wx, -0.23 + PIECE_H / 2, wz);
    this.scene.add(group);

    const key = `${x},${y}`;
    this.meshes.set(key, { piece: p, group, disc, ring: rim, label });
  }

  private gridToWorld(x: number, y: number): [number, number] {
    // y=0 is black's back rank (far, +z), y=9 is red's (near, -z).
    return [
      this.cameraTarget.x - this.boardWidth / 2 + x * TILE,
      this.cameraTarget.z + this.boardDepth / 2 - y * TILE,
    ];
  }

  private worldToGrid(wx: number, wz: number): [number, number] | null {
    const x = Math.round((wx - (this.cameraTarget.x - this.boardWidth / 2)) / TILE);
    const y = Math.round((this.cameraTarget.z + this.boardDepth / 2 - wz) / TILE);
    if (x < 0 || x >= FILES || y < 0 || y >= RANKS) return null;
    return [x, y];
  }

  // --------------------------------------------------------------- camera

  private updateCamera() {
    const pos = new THREE.Vector3().setFromSpherical(this.spherical).add(this.cameraTarget);
    this.camera.position.copy(pos);
    this.camera.lookAt(this.cameraTarget);
  }

  // --------------------------------------------------------------- events

  private bindEvents() {
    const el = this.renderer.domElement;
    el.addEventListener("pointerdown", this.onPointerDown);
    el.addEventListener("pointermove", this.onPointerMove);
    el.addEventListener("pointerup", this.onPointerUp);
    el.addEventListener("pointerleave", this.onPointerUp);
    el.addEventListener("wheel", this.onWheel, { passive: false });
    window.addEventListener("resize", this.onResize);
  }

  private onResize = () => {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  private onWheel = (e: WheelEvent) => {
    e.preventDefault();
    this.spherical.radius = THREE.MathUtils.clamp(
      this.spherical.radius + e.deltaY * 0.01,
      7,
      22
    );
    this.updateCamera();
  };

  private onPointerDown = (e: PointerEvent) => {
    this.dragging = true;
    this.lastPointer = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastPointer.x;
    const dy = e.clientY - this.lastPointer.y;
    this.lastPointer = { x: e.clientX, y: e.clientY };
    // If mouse moves enough, treat as camera orbit, not click.
    if (Math.abs(dx) + Math.abs(dy) > 4) this.justDragged = true;
    this.spherical.theta -= dx * 0.006;
    this.spherical.phi = THREE.MathUtils.clamp(
      this.spherical.phi - dy * 0.006,
      Math.PI / 6,
      Math.PI / 2.05
    );
    this.updateCamera();
  };

  private justDragged = false;

  private onPointerUp = (e: PointerEvent) => {
    const wasDragging = this.dragging;
    this.dragging = false;
    if (wasDragging && !this.justDragged) {
      this.handleClick(e);
    }
    this.justDragged = false;
  };

  private handleClick(e: PointerEvent) {
    if (this.animating) return;
    if (this.mode === "ai" && this.turn !== this.humanSide) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Intersect the board plane at y = -0.2
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.2);
    const point = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(plane, point)) return;
    const grid = this.worldToGrid(point.x, point.z);
    if (!grid) return;

    const [x, y] = grid;

    if (this.selected) {
      const moves = legalMovesFrom(this.board, this.selected[0], this.selected[1]);
      const move = moves.find((m) => m.to[0] === x && m.to[1] === y);
      if (move) {
        this.clearHighlights();
        this.selected = null;
        this.cb.onSelectChange([]);
        void this.playMove(move);
        return;
      }
    }

    const piece = this.board[y][x];
    if (piece && piece.side === this.turn) {
      this.selected = [x, y];
      const moves = legalMovesFrom(this.board, x, y);
      this.showHighlights(moves);
      this.cb.onSelectChange(moves);
    } else {
      this.selected = null;
      this.clearHighlights();
      this.cb.onSelectChange([]);
    }
  }

  // --------------------------------------------------------------- highlights

  private showHighlights(moves: Move[]) {
    this.clearHighlights();
    for (const m of moves) {
      const [wx, wz] = this.gridToWorld(m.to[0], m.to[1]);
      const cap = !!m.captured;
      const geo = cap
        ? new THREE.RingGeometry(PIECE_R * 0.8, PIECE_R * 1.0, 32)
        : new THREE.CircleGeometry(0.14, 24);
      const mat = new THREE.MeshBasicMaterial({
        color: cap ? 0xe0403a : 0x4adf7a,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const marker = new THREE.Mesh(geo, mat);
      marker.rotation.x = -Math.PI / 2;
      marker.position.set(wx, -0.19, wz);
      this.highlightGroup.add(marker);
      this.moveMarkers.push(marker);
    }
  }

  private clearHighlights() {
    for (const m of this.moveMarkers) {
      this.highlightGroup.remove(m);
      (m.geometry as THREE.BufferGeometry).dispose();
      (m.material as THREE.Material).dispose();
    }
    this.moveMarkers = [];
  }

  // --------------------------------------------------------------- moves

  private async playMove(m: Move) {
    this.animating = true;
    const fromKey = `${m.from[0]},${m.from[1]}`;
    const toKey = `${m.to[0]},${m.to[1]}`;
    const mover = this.meshes.get(fromKey);
    if (!mover) {
      this.animating = false;
      return;
    }

    // Capture animation: lift captured piece and fade.
    const captured = this.meshes.get(toKey);
    if (captured) {
      await this.animateCapture(captured);
      this.scene.remove(captured.group);
      this.disposeMesh(captured);
      this.meshes.delete(toKey);
    }

    // Animate mover to destination with a hop.
    await this.animateMove(mover, m.to[0], m.to[1]);

    this.meshes.delete(fromKey);
    this.meshes.set(toKey, mover);

    // Apply to logical board.
    this.board[m.to[1]][m.to[0]] = this.board[m.from[1]][m.from[0]];
    this.board[m.from[1]][m.from[0]] = null;
    this.lastMove = m;
    this.updateLastMoveMarker();

    this.turn = this.turn === "r" ? "b" : "r";
    this.cb.onMove(m);
    this.cb.onBoardChange(this.board, this.turn);
    this.animating = false;

    this.checkGameState();
  }

  private updateLastMoveMarker() {
    if (!this.lastMoveMarker || !this.lastMove) return;
    const [wx, wz] = this.gridToWorld(this.lastMove.to[0], this.lastMove.to[1]);
    this.lastMoveMarker.position.set(wx, -0.195, wz);
    this.lastMoveMarker.visible = true;
  }

  private animateMove(m: PieceMesh, tx: number, ty: number): Promise<void> {
    return new Promise((resolve) => {
      const [wx, wz] = this.gridToWorld(tx, ty);
      const start = m.group.position.clone();
      const end = new THREE.Vector3(wx, start.y, wz);
      const duration = 280;
      const t0 = performance.now();
      const hop = m.piece.type === "H" ? 0.9 : 0.35;
      const tick = () => {
        const t = Math.min(1, (performance.now() - t0) / duration);
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        m.group.position.lerpVectors(start, end, e);
        m.group.position.y = start.y + Math.sin(t * Math.PI) * hop;
        if (t < 1) requestAnimationFrame(tick);
        else {
          m.group.position.copy(end);
          resolve();
        }
      };
      tick();
    });
  }

  private animateCapture(m: PieceMesh): Promise<void> {
    return new Promise((resolve) => {
      const startY = m.group.position.y;
      const t0 = performance.now();
      const duration = 260;
      const tick = () => {
        const t = Math.min(1, (performance.now() - t0) / duration);
        m.group.position.y = startY + t * 1.6;
        m.group.rotation.y = t * Math.PI * 2;
        const s = 1 - t * 0.6;
        m.group.scale.setScalar(s);
        if (t < 1) requestAnimationFrame(tick);
        else {
          m.group.visible = false;
          resolve();
        }
      };
      tick();
    });
  }

  private disposeMesh(m: PieceMesh) {
    m.group.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mat = mesh.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else if (mat) {
        const mm = mat as THREE.MeshStandardMaterial;
        if (mm.map) mm.map.dispose();
        mm.dispose();
      }
    });
  }

  // --------------------------------------------------------------- game flow

  private checkGameState() {
    const status = gameStatus(this.board, this.turn);
    if (status === "red_win") this.cb.onGameOver("r");
    else if (status === "black_win") this.cb.onGameOver("b");
    else if (this.mode === "ai" && this.turn !== this.humanSide) this.runAI();
  }

  private runAI() {
    this.cb.onThinkingChange(true);
    // Run AI in a worker to keep the animation smooth.
    if (typeof Worker !== "undefined") {
      if (!this.worker) {
        this.worker = new Worker(
          new URL("../game/ai.worker.ts", import.meta.url),
          { type: "module" }
        );
      }
      const w = this.worker;
      const handler = (e: MessageEvent) => {
        w.removeEventListener("message", handler);
        this.cb.onThinkingChange(false);
        const move = e.data as Move | null;
        if (move && !this.disposed) void this.playMove(move);
      };
      w.addEventListener("message", handler);
      w.postMessage({ board: this.board, side: this.turn, difficulty: this.difficulty });
    } else {
      const move = chooseMove(this.board, this.turn, this.difficulty);
      this.cb.onThinkingChange(false);
      if (move) void this.playMove(move);
    }
  }

  // --------------------------------------------------------------- public API

  setOptions(opts: { mode?: "ai" | "hotseat"; humanSide?: Side; difficulty?: Difficulty }) {
    if (opts.mode) this.mode = opts.mode;
    if (opts.humanSide) {
      this.humanSide = opts.humanSide;
      // Orient camera so human plays from their side.
      this.spherical.theta = opts.humanSide === "r" ? 0 : Math.PI;
      this.updateCamera();
    }
    if (opts.difficulty) this.difficulty = opts.difficulty;
  }

  reset() {
    for (const m of this.meshes.values()) {
      this.scene.remove(m.group);
      this.disposeMesh(m);
    }
    this.meshes.clear();
    this.clearHighlights();
    if (this.lastMoveMarker) this.lastMoveMarker.visible = false;
    this.board = createBoard();
    this.turn = "r";
    this.selected = null;
    this.lastMove = null;
    this.buildPieces();
    this.cb.onBoardChange(this.board, this.turn);
    if (this.mode === "ai" && this.turn !== this.humanSide) this.runAI();
  }

  undo() {
    // Simple: reset and replay without AI moves is complex; provide restart instead.
    this.reset();
  }

  // --------------------------------------------------------------- loop

  private animate = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.onResize);
    const el = this.renderer.domElement;
    el.removeEventListener("pointerdown", this.onPointerDown);
    el.removeEventListener("pointermove", this.onPointerMove);
    el.removeEventListener("pointerup", this.onPointerUp);
    el.removeEventListener("pointerleave", this.onPointerUp);
    el.removeEventListener("wheel", this.onWheel);
    this.worker?.terminate();
    this.renderer.dispose();
    if (el.parentNode) el.parentNode.removeChild(el);
  }
}
