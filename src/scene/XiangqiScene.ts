import * as THREE from "three";
import {
  FILES,
  RANKS,
  createBoard,
  findKing,
  gameStatus,
  isInCheck,
  legalMovesFrom,
} from "../game/engine";
import type { Board, Difficulty, Move, Piece, Side } from "../game/types";
import { chooseMove, rankMoves } from "../game/ai";
import { sound } from "../audio/SoundEngine";
import {
  animateFigure,
  buildWarrior,
  reskinWarrior,
  triggerMuzzleFlash,
  type WarriorMesh,
} from "./warriors";
import { getBoardTheme, getPieceSkin, type BoardTheme, type PieceSkin } from "./skins";
import {
  clearEffects,
  clearPetals,
  makeBanner,
  spawnCapture,
  spawnCheckPulse,
  spawnDust,
  spawnFlame,
  spawnPetals,
  spawnRipple,
  updateEffects,
} from "./effects";

// Board lies in the X-Z plane. x in [0..8], z in [0..9].
const TILE = 1.05;
const PIECE_R = 0.34;

export interface SceneCallbacks {
  onMove: (m: Move) => void;
  onBoardChange: (b: Board, turn: Side) => void;
  onGameOver: (winner: Side | "draw") => void;
  onThinkingChange: (thinking: boolean) => void;
  onSelectChange: (moves: Move[]) => void;
  onCheck: (side: Side | null) => void;
  onSuggestions: (moves: Move[]) => void;
}

export class XiangqiScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private container: HTMLElement;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private board: Board = createBoard();
  private turn: Side = "r";
  private meshes = new Map<string, WarriorMesh>();
  private highlightGroup = new THREE.Group();
  private boardGroup = new THREE.Group();
  private decoGroup = new THREE.Group();
  private lightsGroup = new THREE.Group();
  private moveMarkers: THREE.Mesh[] = [];
  private selected: [number, number] | null = null;
  private lastMove: Move | null = null;
  private lastMoveMarker: THREE.Mesh | null = null;
  private checkMarker: THREE.Mesh | null = null;
  private animating = false;
  private cb: SceneCallbacks;
  private humanSide: Side = "r";
  private mode: "ai" | "hotseat" = "ai";
  private difficulty: Difficulty = "medium";
  private pieceSkin: PieceSkin = getPieceSkin("wood");
  private boardTheme: BoardTheme = getBoardTheme("wood");

  private cameraTarget = new THREE.Vector3(
    ((FILES - 1) / 2) * TILE,
    0,
    ((RANKS - 1) / 2) * TILE
  );
  private spherical = new THREE.Spherical(20, Math.PI * (40 / 180), 0);
  private dragging = false;
  private lastPointer = { x: 0, y: 0 };
  private justDragged = false;
  private raf = 0;
  private clock = new THREE.Clock();
  private worker: Worker | null = null;
  private workerSeq = 0;
  private suggestionSeq = 0;
  private disposed = false;
  private keyLight!: THREE.DirectionalLight;
  private hemi!: THREE.HemisphereLight;
  private surfaceMat!: THREE.MeshStandardMaterial;
  private frameMat!: THREE.MeshStandardMaterial;
  private lineMat!: THREE.LineBasicMaterial;

  constructor(container: HTMLElement, cb: SceneCallbacks) {
    this.container = container;
    this.cb = cb;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.boardTheme.background);
    this.scene.fog = new THREE.Fog(this.boardTheme.fog, 20, 38);

    this.camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    this.updateCamera();

    this.buildLights();
    this.scene.add(this.boardGroup);
    this.scene.add(this.decoGroup);
    this.scene.add(this.highlightGroup);
    this.buildBoard();
    this.buildDecorations();
    this.buildPieces();

    this.bindEvents();
    this.animate();
  }

  // --------------------------------------------------------------- lights

  private buildLights() {
    this.hemi = new THREE.HemisphereLight(
      this.boardTheme.hemiSky,
      this.boardTheme.hemiGround,
      0.7
    );
    this.lightsGroup.add(this.hemi);

    this.keyLight = new THREE.DirectionalLight(
      this.boardTheme.keyLight,
      this.boardTheme.keyIntensity
    );
    this.keyLight.position.set(6, 16, 8);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    const s = this.keyLight.shadow.camera;
    s.left = -10; s.right = 10; s.top = 10; s.bottom = -10;
    s.near = 1; s.far = 45;
    s.updateProjectionMatrix();
    this.keyLight.shadow.bias = -0.0005;
    this.lightsGroup.add(this.keyLight);

    const rim = new THREE.DirectionalLight(0x88aaff, 0.4);
    rim.position.set(-6, 8, -6);
    this.lightsGroup.add(rim);

    this.scene.add(this.lightsGroup);
  }

  // --------------------------------------------------------------- board

  private boardWidth = (FILES - 1) * TILE;
  private boardDepth = (RANKS - 1) * TILE;

  private buildBoard() {
    this.frameMat = new THREE.MeshStandardMaterial({
      color: this.boardTheme.frame,
      roughness: 0.8,
      metalness: 0.05,
    });
    const slab = new THREE.Mesh(
      new THREE.BoxGeometry(this.boardWidth + 1.4, 0.18, this.boardDepth + 1.4),
      this.frameMat
    );
    slab.position.set(this.cameraTarget.x, -0.32, this.cameraTarget.z);
    slab.receiveShadow = true;
    slab.castShadow = true;
    this.boardGroup.add(slab);

    this.surfaceMat = new THREE.MeshStandardMaterial({
      color: this.boardTheme.surface,
      roughness: this.boardTheme.surfaceRoughness,
      metalness: 0.02,
    });
    const surface = new THREE.Mesh(
      new THREE.PlaneGeometry(this.boardWidth + 0.9, this.boardDepth + 0.9),
      this.surfaceMat
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.set(this.cameraTarget.x, -0.22, this.cameraTarget.z);
    surface.receiveShadow = true;
    this.boardGroup.add(surface);

    this.lineMat = new THREE.LineBasicMaterial({ color: this.boardTheme.line });
    this.redrawLines();

    // River labels.
    this.makeTextPlane(
      "楚 河",
      new THREE.Vector3(this.cameraTarget.x - 2.0, -0.205, this.cameraTarget.z),
      3.2,
      this.boardTheme.river
    );
    this.makeTextPlane(
      "漢 界",
      new THREE.Vector3(this.cameraTarget.x + 2.0, -0.205, this.cameraTarget.z),
      3.2,
      this.boardTheme.river
    );

    // Last move highlight.
    const hlm = new THREE.Mesh(
      new THREE.PlaneGeometry(TILE * 0.92, TILE * 0.92),
      new THREE.MeshBasicMaterial({
        color: 0xffd24a,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
      })
    );
    hlm.rotation.x = -Math.PI / 2;
    hlm.position.y = -0.19;
    hlm.visible = false;
    this.boardGroup.add(hlm);
    this.lastMoveMarker = hlm;

    // Check highlight.
    const cm = new THREE.Mesh(
      new THREE.RingGeometry(PIECE_R * 0.7, PIECE_R * 1.05, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff2222,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    cm.rotation.x = -Math.PI / 2;
    cm.position.y = -0.185;
    cm.visible = false;
    this.boardGroup.add(cm);
    this.checkMarker = cm;
  }

  private redrawLines() {
    const toRemove: THREE.Object3D[] = [];
    this.boardGroup.traverse((o) => {
      if ((o as THREE.LineSegments).isLineSegments) toRemove.push(o);
    });
    toRemove.forEach((o) => {
      this.boardGroup.remove(o);
      ((o as THREE.LineSegments).geometry as THREE.BufferGeometry).dispose();
    });

    const positions: number[] = [];
    const halfX = this.boardWidth / 2;
    const halfZ = this.boardDepth / 2;
    const y = -0.205;
    const addLine = (x1: number, z1: number, x2: number, z2: number) => {
      positions.push(x1, y, z1, x2, y, z2);
    };
    const wz = (r: number) => this.cameraTarget.z + halfZ - r * TILE;

    for (let r = 0; r < RANKS; r++) {
      const z = wz(r);
      addLine(this.cameraTarget.x - halfX, z, this.cameraTarget.x + halfX, z);
    }
    for (let f = 0; f < FILES; f++) {
      const x = this.cameraTarget.x - halfX + f * TILE;
      addLine(x, wz(0), x, wz(4));
      addLine(x, wz(5), x, wz(9));
    }
    addLine(this.cameraTarget.x - halfX, wz(0), this.cameraTarget.x + halfX, wz(0));
    addLine(this.cameraTarget.x - halfX, wz(9), this.cameraTarget.x + halfX, wz(9));

    const palace = (top: boolean) => {
      const z0 = wz(top ? 0 : 7);
      const z1 = wz(top ? 2 : 9);
      addLine(this.cameraTarget.x - TILE, z0, this.cameraTarget.x + TILE, z1);
      addLine(this.cameraTarget.x + TILE, z0, this.cameraTarget.x - TILE, z1);
    };
    palace(true);
    palace(false);

    // Position markers (L-shaped corner brackets).
    const markerSpots: [number, number][] = [
      [1, 2], [7, 2], [1, 7], [7, 7],
      [0, 3], [2, 3], [4, 3], [6, 3], [8, 3],
      [0, 6], [2, 6], [4, 6], [6, 6], [8, 6],
    ];
    const b = 0.14;
    const d = 0.08;
    for (const [fx, fy] of markerSpots) {
      const cx = this.cameraTarget.x - halfX + fx * TILE;
      const cz = wz(fy);
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as [number, number][]) {
        if (fx === 0 && sx < 0) continue;
        if (fx === 8 && sx > 0) continue;
        const ox = cx + sx * b;
        const oz = cz + sz * b;
        positions.push(ox, y, oz, ox + sx * d, y, oz);
        positions.push(ox, y, oz, ox, y, oz + sz * d);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const lines = new THREE.LineSegments(geo, this.lineMat);
    this.boardGroup.add(lines);
  }

  private makeTextPlane(text: string, pos: THREE.Vector3, size: number, color: number) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    ctx.font = "bold 70px 'STKaiti','KaiTi','Songti SC',serif";
    ctx.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 64);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(size, size / 4),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(pos);
    this.boardGroup.add(mesh);
  }

  // --------------------------------------------------------------- decorations

  private buildDecorations() {
    while (this.decoGroup.children.length) {
      const c = this.decoGroup.children[0];
      this.decoGroup.remove(c);
      ((c as THREE.Mesh).geometry as THREE.BufferGeometry)?.dispose?.();
    }
    // Clean ambient effects, then re-add per theme.
    clearPetalsAndFlames(this.scene);
    const accent = this.boardTheme.accent ?? "none";

    // Ambient petals for the calm themes.
    if (accent === "none" || accent === "jade") {
      spawnPetals(
        this.scene,
        { x: this.boardWidth, z: this.boardDepth },
        1.6,
        accent === "jade" ? 18 : 26,
        accent === "jade" ? 0xc9f2da : 0xf2c9c9
      );
    }

    if (accent === "none" || accent === "ink") return;

    if (accent === "bronze") {
      const postMat = new THREE.MeshStandardMaterial({
        color: 0x3a2a18,
        roughness: 0.6,
        metalness: 0.7,
      });
      const lanternMat = new THREE.MeshStandardMaterial({
        color: 0xff7a2a,
        emissive: 0xff5500,
        emissiveIntensity: 1.2,
        roughness: 0.4,
      });
      for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]] as [number, number][]) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 2.6, 12), postMat);
        post.position.set(
          this.cameraTarget.x + sx * (this.boardWidth / 2 + 1.2),
          0.8,
          this.cameraTarget.z + sz * (this.boardDepth / 2 + 1.2)
        );
        post.castShadow = true;
        this.decoGroup.add(post);
        const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 12), lanternMat);
        lantern.position.set(post.position.x, 2.2, post.position.z);
        this.decoGroup.add(lantern);
        const pl = new THREE.PointLight(0xff7a2a, 0.9, 9);
        pl.position.copy(lantern.position);
        this.decoGroup.add(pl);
        // Flickering flame on each torch.
        spawnFlame(this.scene, post.position.x, 2.42, post.position.z, 0.15);
      }
    } else if (accent === "jade") {
      const orbMat = new THREE.MeshStandardMaterial({
        color: 0x9ff5c8,
        emissive: 0x2bd687,
        emissiveIntensity: 0.8,
        roughness: 0.1,
      });
      for (const y of [1, 8]) {
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), orbMat);
        const [, zw] = this.gridToWorld(4, y);
        orb.position.set(this.cameraTarget.x, 0.05, zw);
        this.decoGroup.add(orb);
      }
    }
  }

  // --------------------------------------------------------------- pieces

  private buildPieces() {
    for (let y = 0; y < RANKS; y++) {
      for (let x = 0; x < FILES; x++) {
        const p = this.board[y][x];
        if (p) this.addPieceMesh(p, x, y);
      }
    }
  }

  private addPieceMesh(p: Piece, x: number, y: number) {
    const wm = buildWarrior(p.side, p.type, this.pieceSkin);
    const [wx, wz] = this.gridToWorld(x, y);
    // Characters were authored a little large for this tile size; scale down
    // and keep the labelled base flush on the board.
    wm.group.scale.setScalar(0.72);
    wm.group.position.set(wx, -0.13, wz);
    // Face the opponent. Horses/elephants already face +Z; flip black to -Z.
    wm.group.rotation.y = p.side === "r" ? 0 : Math.PI;
    wm.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = true;
      }
    });
    this.scene.add(wm.group);
    this.meshes.set(`${x},${y}`, wm);

    // Chariots carry a waving standard.
    if (p.type === "R") {
      const side = p.side;
      makeBanner(
        wm.figure.root,
        0.02,
        0.55,
        -0.16,
        0.14,
        0.18,
        side === "r" ? 0xd8403a : 0x2a4a6a,
        0.05
      );
    }
  }

  private gridToWorld(x: number, y: number): [number, number] {
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
      this.spherical.radius + e.deltaY * 0.012,
      8,
      26
    );
    this.updateCamera();
  };

  private onPointerDown = (e: PointerEvent) => {
    this.dragging = true;
    this.justDragged = false;
    this.lastPointer = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging) return;
    const dx = e.clientX - this.lastPointer.x;
    const dy = e.clientY - this.lastPointer.y;
    this.lastPointer = { x: e.clientX, y: e.clientY };
    if (Math.abs(dx) + Math.abs(dy) > 4) this.justDragged = true;
    this.spherical.theta -= dx * 0.006;
    this.spherical.phi = THREE.MathUtils.clamp(
      this.spherical.phi - dy * 0.006,
      Math.PI / 6,
      Math.PI / 2.05
    );
    this.updateCamera();
  };

  private onPointerUp = (e: PointerEvent) => {
    const wasDragging = this.dragging;
    this.dragging = false;
    if (wasDragging && !this.justDragged) this.handleClick(e);
  };

  private handleClick(e: PointerEvent) {
    if (this.animating) return;
    if (this.mode === "ai" && this.turn !== this.humanSide) return;
    sound.resume();

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Pick the board plane near the surface.
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.2);
    const point = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(plane, point)) return;
    const grid = this.worldToGrid(point.x, point.z);
    if (!grid) return;

    const [x, y] = grid;
    const pan = this.screenPan(x);

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
      sound.play("select", { pan });
    } else {
      this.selected = null;
      this.clearHighlights();
      this.cb.onSelectChange([]);
      sound.play("ui", { pan });
    }
  }

  private screenPan(x: number): number {
    const [wx] = this.gridToWorld(x, 0);
    const v = new THREE.Vector3(wx, 0, this.cameraTarget.z).project(this.camera);
    return THREE.MathUtils.clamp(v.x, -1, 1);
  }

  // --------------------------------------------------------------- highlights

  private showHighlights(moves: Move[]) {
    this.clearHighlights();
    for (const m of moves) {
      const [wx, wz] = this.gridToWorld(m.to[0], m.to[1]);
      const cap = !!m.captured;
      const geo = cap
        ? new THREE.RingGeometry(PIECE_R * 0.8, PIECE_R * 1.05, 32)
        : new THREE.CircleGeometry(0.16, 24);
      const mat = new THREE.MeshBasicMaterial({
        color: cap ? 0xe0403a : 0x4adf7a,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const marker = new THREE.Mesh(geo, mat);
      marker.rotation.x = -Math.PI / 2;
      marker.position.set(wx, -0.18, wz);
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
    const pan = this.screenPan(m.to[0]);
    const weight = this.pieceWeight(m.piece);
    sound.play("move", { pan });

    // Turn to face the destination.
    const [fx, fz] = this.gridToWorld(m.from[0], m.from[1]);
    const [tx, tz] = this.gridToWorld(m.to[0], m.to[1]);
    const targetRot = Math.atan2(tx - fx, tz - fz);
    mover.group.rotation.y = targetRot;

    // Cannon muzzle flash when capturing.
    if (m.piece === "C" && m.captured) {
      triggerMuzzleFlash(mover.figure);
    }

    const captured = this.meshes.get(toKey);
    const victimColor = captured
      ? captured.piece.side === "r"
        ? 0xe0403a
        : 0xcfd3da
      : m.side === "r"
      ? 0xcfd3da
      : 0xe0403a;
    // March to the destination with legs/wheels animating; capture on arrival.
    await this.animateMarch(mover, m.to[0], m.to[1], () => {
      if (captured && captured.group.visible) {
        this.scene.remove(captured.group);
        this.disposeMesh(captured);
        this.meshes.delete(toKey);
        sound.play("capture", { pan, weight });
        // Capture burst in the victim's colour.
        spawnCapture(this.scene, tx, tz, victimColor, 0.1);
      } else {
        spawnRipple(this.scene, tx, tz);
      }
      spawnDust(this.scene, tx, tz, 0.02, 8);
    });
    if (!captured) sound.play("place", { pan, weight: weight * 0.6 });

    this.meshes.delete(fromKey);
    this.meshes.set(toKey, mover);

    this.board[m.to[1]][m.to[0]] = this.board[m.from[1]][m.from[0]];
    this.board[m.from[1]][m.from[0]] = null;
    this.lastMove = m;
    this.updateLastMoveMarker();

    this.turn = this.turn === "r" ? "b" : "r";
    this.cb.onMove(m);
    this.cb.onBoardChange(this.board, this.turn);
    this.animating = false;

    const foeInCheck = isInCheck(this.board, this.turn);
    this.updateCheckMarker(foeInCheck ? m.to : null);
    this.cb.onCheck(foeInCheck ? this.turn : null);

    // It's now the human's turn — surface engine suggestions.
    if (this.mode === "ai" && this.turn === this.humanSide) this.requestSuggestions();
    else this.cb.onSuggestions([]);

    this.checkGameState(foeInCheck);
  }

  private pieceWeight(type: Move["piece"]): number {
    switch (type) {
      case "K": return 1;
      case "R": return 0.8;
      case "C": return 0.6;
      case "H": return 0.55;
      case "E":
      case "A": return 0.4;
      default: return 0.3;
    }
  }

  private updateLastMoveMarker() {
    if (!this.lastMoveMarker || !this.lastMove) return;
    const [wx, wz] = this.gridToWorld(this.lastMove.to[0], this.lastMove.to[1]);
    this.lastMoveMarker.position.set(wx, -0.19, wz);
    this.lastMoveMarker.visible = true;
  }

  private updateCheckMarker(pos: [number, number] | null) {
    if (!this.checkMarker) return;
    if (!pos) {
      this.checkMarker.visible = false;
      return;
    }
    const [wx, wz] = this.gridToWorld(pos[0], pos[1]);
    this.checkMarker.position.set(wx, -0.18, wz);
    this.checkMarker.visible = true;
  }

  /**
   * March a figure from its current square to (tx, ty). The figure's legs/wheels
   * swing while it travels and settle on arrival. `onArrive` fires once on the
   * final frame (used to remove the captured piece).
   */
  private animateMarch(
    wm: WarriorMesh,
    tx: number,
    ty: number,
    onArrive: () => void
  ): Promise<void> {
    return new Promise((resolve) => {
      const [wx, wz] = this.gridToWorld(tx, ty);
      const start = wm.group.position.clone();
      const end = new THREE.Vector3(wx, start.y, wz);
      const dist = start.distanceTo(end);
      const baseY = start.y;
      // Longer journeys take a little longer; wheels/legs look right at ~speed 3/s.
      const duration = Math.max(320, dist * 230);
      const hop = wm.figure.wheels.length > 0 ? 0.05 : 0.12;
      const t0 = performance.now();
      let arrived = false;

      const tick = () => {
        const t = Math.min(1, (performance.now() - t0) / duration);
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        wm.group.position.lerpVectors(start, end, e);
        // Foot/vehicle bob.
        if (wm.figure.wheels.length > 0) {
          wm.group.position.y = baseY + Math.sin(t * Math.PI * 6) * 0.012;
        } else {
          wm.group.position.y = baseY + Math.abs(Math.sin(t * Math.PI * 4)) * hop;
        }
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          wm.group.position.copy(end);
          wm.group.position.y = baseY;
          if (!arrived) {
            arrived = true;
            onArrive();
          }
          resolve();
        }
      };
      tick();
    });
  }

  private disposeMesh(wm: WarriorMesh) {
    wm.group.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mat = mesh.material as THREE.Material | THREE.Material[];
      const mats = Array.isArray(mat) ? mat : [mat];
      for (const m of mats) {
        const mm = m as THREE.MeshStandardMaterial;
        if (mm.map) mm.map.dispose();
        mm.dispose();
      }
    });
  }

  // --------------------------------------------------------------- game flow

  private checkGameState(inCheck: boolean) {
    const status = gameStatus(this.board, this.turn);
    if (status === "red_win") {
      sound.play(this.humanSide === "r" ? "win" : "lose");
      this.cb.onGameOver("r");
    } else if (status === "black_win") {
      sound.play(this.humanSide === "b" ? "win" : "lose");
      this.cb.onGameOver("b");
    } else {
      if (inCheck) {
        sound.play("check", { pan: 0 });
        const king = findKing(this.board, this.turn);
        if (king) {
          const [wx, wz] = this.gridToWorld(king[0], king[1]);
          spawnCheckPulse(this.scene, wx, wz, 0.1);
        }
      }
      if (this.mode === "ai" && this.turn !== this.humanSide) this.runAI();
    }
  }

  private runAI() {
    this.cb.onThinkingChange(true);
    if (typeof Worker !== "undefined") {
      if (!this.worker) {
        this.worker = new Worker(
          new URL("../game/ai.worker.ts", import.meta.url),
          { type: "module" }
        );
      }
      const w = this.worker;
      const id = ++this.workerSeq;
      const handler = (e: MessageEvent) => {
        if (e.data.id !== id) return;
        w.removeEventListener("message", handler);
        this.cb.onThinkingChange(false);
        const move = e.data.result as Move | null;
        if (move && !this.disposed) void this.playMove(move);
      };
      w.addEventListener("message", handler);
      w.postMessage({ id, type: "choose", board: this.board, side: this.turn, difficulty: this.difficulty });
    } else {
      const move = chooseMove(this.board, this.turn, this.difficulty);
      this.cb.onThinkingChange(false);
      if (move) void this.playMove(move);
    }
  }

  /**
   * Ask the engine to rank the current player's legal moves and surface the
   * top suggestions via `onSuggestions`. Requests are invalidated as soon as
   * the position changes, so stale results are dropped.
   */
  private requestSuggestions() {
    if (this.mode !== "ai") return;
    const seq = ++this.suggestionSeq;
    if (typeof Worker !== "undefined") {
      if (!this.worker) {
        this.worker = new Worker(
          new URL("../game/ai.worker.ts", import.meta.url),
          { type: "module" }
        );
      }
      const w = this.worker;
      const id = ++this.workerSeq;
      const handler = (e: MessageEvent) => {
        if (e.data.id !== id) return;
        w.removeEventListener("message", handler);
        if (seq !== this.suggestionSeq || this.disposed) return;
        this.cb.onSuggestions(e.data.result as Move[]);
      };
      w.addEventListener("message", handler);
      w.postMessage({
        id,
        type: "suggest",
        board: this.board,
        side: this.turn,
        difficulty: this.difficulty,
        count: 3,
      });
    } else {
      const moves = rankMoves(this.board, this.turn, this.difficulty, 3);
      if (seq === this.suggestionSeq && !this.disposed) this.cb.onSuggestions(moves);
    }
  }

  /** Play one of the suggested moves immediately (human turn). */
  playSuggestedMove(move: Move) {
    if (this.animating || this.mode !== "ai" || this.turn !== this.humanSide) return;
    if (this.selected) {
      this.clearHighlights();
      this.selected = null;
    }
    this.cb.onSelectChange([]);
    void this.playMove(move);
  }

  // --------------------------------------------------------------- public API

  setOptions(opts: {
    mode?: "ai" | "hotseat";
    humanSide?: Side;
    difficulty?: Difficulty;
  }) {
    if (opts.mode) this.mode = opts.mode;
    if (opts.humanSide) {
      this.humanSide = opts.humanSide;
      // Red sits at the near edge (small z); place the camera behind the
      // human player so their own army is at the bottom of the screen.
      this.spherical.theta = opts.humanSide === "r" ? Math.PI : 0;
      this.updateCamera();
    }
    if (opts.difficulty) this.difficulty = opts.difficulty;
  }

  setPieceSkin(id: string) {
    this.pieceSkin = getPieceSkin(id);
    for (const [key, wm] of this.meshes) {
      const [x, y] = key.split(",").map(Number);
      const piece = this.board[y][x];
      if (piece) reskinWarrior(wm, piece.side, this.pieceSkin);
    }
  }

  setBoardTheme(id: string) {
    this.boardTheme = getBoardTheme(id);
    const t = this.boardTheme;
    this.scene.background = new THREE.Color(t.background);
    (this.scene.fog as THREE.Fog).color.setHex(t.fog);
    this.surfaceMat.color.setHex(t.surface);
    this.surfaceMat.roughness = t.surfaceRoughness;
    this.frameMat.color.setHex(t.frame);
    this.lineMat.color.setHex(t.line);
    this.hemi.color.setHex(t.hemiSky);
    this.hemi.groundColor.setHex(t.hemiGround);
    this.keyLight.color.setHex(t.keyLight);
    this.keyLight.intensity = t.keyIntensity;
    this.redrawLines();
    this.buildDecorations();
    sound.startAmbience(t.ambience);
  }

  reset() {
    for (const m of this.meshes.values()) {
      this.scene.remove(m.group);
      this.disposeMesh(m);
    }
    this.meshes.clear();
    this.clearHighlights();
    if (this.lastMoveMarker) this.lastMoveMarker.visible = false;
    if (this.checkMarker) this.checkMarker.visible = false;
    this.board = createBoard();
    this.turn = "r";
    this.selected = null;
    this.lastMove = null;
    this.buildPieces();
    this.cb.onBoardChange(this.board, this.turn);
    this.cb.onCheck(null);
    sound.resume();
    sound.play("start");
    sound.startAmbience(this.boardTheme.ambience);
    if (this.mode === "ai" && this.turn !== this.humanSide) this.runAI();
    else if (this.mode === "ai") this.requestSuggestions();
  }

  // --------------------------------------------------------------- loop

  private animate = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;

    // Animate every figure. Pieces involved in a move march; the rest idle.
    for (const [key, wm] of this.meshes) {
      let marching = 0;
      if (this.animating && this.lastMove) {
        const fk = `${this.lastMove.from[0]},${this.lastMove.from[1]}`;
        if (key === fk) marching = 1;
      }
      animateFigure(wm.figure, time, delta, marching);
    }

    updateEffects(this.scene, delta, time);

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
    sound.stopAmbience();
    clearEffects(this.scene);
    for (const m of this.meshes.values()) this.disposeMesh(m);
    this.meshes.clear();
    this.renderer.dispose();
    if (el.parentNode) el.parentNode.removeChild(el);
  }
}

// Rebuild the ambient petal/flame layer (cheap standalone helper).
function clearPetalsAndFlames(scene: THREE.Scene) {
  clearPetals(scene);
}
