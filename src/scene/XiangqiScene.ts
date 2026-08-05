import * as THREE from "three";
import {
  FILES,
  RANKS,
  createBoard,
  gameStatus,
  isInCheck,
  legalMovesFrom,
} from "../game/engine";
import type { Board, Difficulty, Move, Piece, Side } from "../game/types";
import { chooseMove } from "../game/ai";
import { sound } from "../audio/SoundEngine";
import {
  buildPieceMesh,
  PIECE_H,
  reskinPieceMesh,
  type PieceMesh,
} from "./pieces";
import { getBoardTheme, getPieceSkin, type BoardTheme, type PieceSkin } from "./skins";

// Board lies in the X-Z plane. x in [0..8], z in [0..9].
const TILE = 1.15;
const PIECE_R = 0.4;

export interface SceneCallbacks {
  onMove: (m: Move) => void;
  onBoardChange: (b: Board, turn: Side) => void;
  onGameOver: (winner: Side | "draw") => void;
  onThinkingChange: (thinking: boolean) => void;
  onSelectChange: (moves: Move[]) => void;
  onCheck: (side: Side | null) => void;
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
  private meshes = new Map<string, PieceMesh>();
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
  private spherical = new THREE.Spherical(13.5, Math.PI / 3.2, 0);
  private dragging = false;
  private lastPointer = { x: 0, y: 0 };
  private justDragged = false;
  private raf = 0;
  private worker: Worker | null = null;
  private disposed = false;
  private keyLight!: THREE.DirectionalLight;
  private hemi!: THREE.HemisphereLight;
  private surfaceMat!: THREE.MeshStandardMaterial;
  private frameMat!: THREE.MeshStandardMaterial;
  private lineMat!: THREE.LineBasicMaterial;
  private ambientStarted = false;

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
    this.scene.fog = new THREE.Fog(this.boardTheme.fog, 18, 34);

    this.camera = new THREE.PerspectiveCamera(
      45,
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
    this.keyLight.position.set(6, 14, 8);
    this.keyLight.castShadow = true;
    this.keyLight.shadow.mapSize.set(2048, 2048);
    const s = this.keyLight.shadow.camera;
    s.left = -8; s.right = 8; s.top = 8; s.bottom = -8;
    s.near = 1; s.far = 40;
    this.lightsGroup.add(this.keyLight);

    const rim = new THREE.DirectionalLight(0x88aaff, 0.35);
    rim.position.set(-6, 6, -6);
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
      new THREE.BoxGeometry(this.boardWidth + 1.6, 0.5, this.boardDepth + 1.6),
      this.frameMat
    );
    slab.position.set(this.cameraTarget.x, -0.5, this.cameraTarget.z);
    slab.receiveShadow = true;
    slab.castShadow = true;
    this.boardGroup.add(slab);

    this.surfaceMat = new THREE.MeshStandardMaterial({
      color: this.boardTheme.surface,
      roughness: this.boardTheme.surfaceRoughness,
      metalness: 0.02,
    });
    const surface = new THREE.Mesh(
      new THREE.PlaneGeometry(this.boardWidth + 0.8, this.boardDepth + 0.8),
      this.surfaceMat
    );
    surface.rotation.x = -Math.PI / 2;
    surface.position.set(this.cameraTarget.x, -0.23, this.cameraTarget.z);
    surface.receiveShadow = true;
    this.boardGroup.add(surface);

    this.lineMat = new THREE.LineBasicMaterial({ color: this.boardTheme.line });
    this.redrawLines();

    // River labels
    this.makeTextPlane(
      "楚 河",
      new THREE.Vector3(this.cameraTarget.x - 1.7, -0.21, this.cameraTarget.z),
      2.8,
      this.boardTheme.river
    );
    this.makeTextPlane(
      "漢 界",
      new THREE.Vector3(this.cameraTarget.x + 1.7, -0.21, this.cameraTarget.z),
      2.8,
      this.boardTheme.river
    );

    // Last move highlight
    const hlm = new THREE.Mesh(
      new THREE.PlaneGeometry(TILE * 0.92, TILE * 0.92),
      new THREE.MeshBasicMaterial({
        color: 0xffd24a,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      })
    );
    hlm.rotation.x = -Math.PI / 2;
    hlm.position.y = -0.2;
    hlm.visible = false;
    this.boardGroup.add(hlm);
    this.lastMoveMarker = hlm;

    // Check highlight
    const cm = new THREE.Mesh(
      new THREE.RingGeometry(PIECE_R * 0.7, PIECE_R * 0.98, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff2222,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    cm.rotation.x = -Math.PI / 2;
    cm.position.y = -0.19;
    cm.visible = false;
    this.boardGroup.add(cm);
    this.checkMarker = cm;
  }

  private redrawLines() {
    // Remove existing line objects.
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
    const y = -0.21;
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

    // Position markers (the little "L" corner brackets at cannon/pawn spots).
    const markerSpots: [number, number][] = [
      [1, 2], [7, 2], [1, 7], [7, 7],
      [0, 3], [2, 3], [4, 3], [6, 3], [8, 3],
      [0, 6], [2, 6], [4, 6], [6, 6], [8, 6],
    ];
    const b = 0.12;
    const d = 0.06;
    for (const [fx, fy] of markerSpots) {
      const cx = this.cameraTarget.x - halfX + fx * TILE;
      const cz = wz(fy);
      const corners: [number, number][] = [
        [-1, -1], [1, -1], [-1, 1], [1, 1],
      ];
      // skip brackets that would point off the board edge
      for (const [sx, sz] of corners) {
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
    // Clear previous.
    while (this.decoGroup.children.length) {
      const c = this.decoGroup.children[0];
      this.decoGroup.remove(c);
      ((c as THREE.Mesh).geometry as THREE.BufferGeometry)?.dispose?.();
    }
    const accent = this.boardTheme.accent ?? "none";
    if (accent === "none" || accent === "ink") return;

    if (accent === "bronze") {
      // Four guardian lantern posts around the board.
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
      const corners: [number, number][] = [
        [-1, -1], [1, -1], [-1, 1], [1, 1],
      ];
      for (const [sx, sz] of corners) {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.1, 2.4, 12),
          postMat
        );
        post.position.set(
          this.cameraTarget.x + sx * (this.boardWidth / 2 + 1.1),
          0.7,
          this.cameraTarget.z + sz * (this.boardDepth / 2 + 1.1)
        );
        post.castShadow = true;
        this.decoGroup.add(post);
        const lantern = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 16, 12),
          lanternMat
        );
        lantern.position.set(post.position.x, 2, post.position.z);
        this.decoGroup.add(lantern);
        const pl = new THREE.PointLight(0xff7a2a, 0.8, 8);
        pl.position.copy(lantern.position);
        this.decoGroup.add(pl);
      }
    } else if (accent === "jade") {
      // Glowing jade orbs at the palace centers.
      const orbMat = new THREE.MeshStandardMaterial({
        color: 0x9ff5c8,
        emissive: 0x2bd687,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.1,
      });
      for (const y of [1, 8]) {
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), orbMat);
        const [, wz] = this.gridToWorld(4, y);
        orb.position.set(this.cameraTarget.x, -0.05, wz);
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
    const pm = buildPieceMesh(p, this.pieceSkin);
    const [wx, wz] = this.gridToWorld(x, y);
    pm.group.position.set(wx, -0.23 + PIECE_H / 2, wz);
    this.scene.add(pm.group);
    this.meshes.set(`${x},${y}`, pm);
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
      this.spherical.radius + e.deltaY * 0.01,
      7,
      22
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
        sound.play("move", { pan });
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

  /** Map a file x to a stereo pan from the current camera angle. */
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
        ? new THREE.RingGeometry(PIECE_R * 0.8, PIECE_R * 1.02, 32)
        : new THREE.CircleGeometry(0.15, 24);
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

  private isInCheckSide(side: Side): boolean {
    return isInCheck(this.board, side);
  }

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

    const captured = this.meshes.get(toKey);
    if (captured) {
      await this.animateCapture(captured);
      this.scene.remove(captured.group);
      this.disposeMesh(captured);
      this.meshes.delete(toKey);
      sound.play("capture", { pan, weight });
    }

    await this.animateMove(mover, m.to[0], m.to[1]);
    // Place sound for non-captures; captures already got the clank.
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

    // Check / checkmate detection.
    const foeInCheck = this.isInCheckSide(this.turn);
    this.updateCheckMarker(foeInCheck ? m.to : null);
    this.cb.onCheck(foeInCheck ? this.turn : null);

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
    this.lastMoveMarker.position.set(wx, -0.195, wz);
    this.lastMoveMarker.visible = true;
  }

  private updateCheckMarker(pos: [number, number] | null) {
    if (!this.checkMarker) return;
    if (!pos) {
      this.checkMarker.visible = false;
      return;
    }
    const [wx, wz] = this.gridToWorld(pos[0], pos[1]);
    this.checkMarker.position.set(wx, -0.185, wz);
    this.checkMarker.visible = true;
  }

  private animateMove(m: PieceMesh, tx: number, ty: number): Promise<void> {
    return new Promise((resolve) => {
      const [wx, wz] = this.gridToWorld(tx, ty);
      const start = m.group.position.clone();
      const end = new THREE.Vector3(wx, start.y, wz);
      const duration = 280;
      const t0 = performance.now();
      const hop = m.piece.type === "H" ? 0.9 : m.piece.type === "R" ? 0.5 : 0.35;
      // Face direction of travel.
      const dx = end.x - start.x;
      const dz = end.z - start.z;
      if (Math.abs(dx) + Math.abs(dz) > 0.001) {
        const targetRot = Math.atan2(dx, dz);
        m.group.rotation.y = targetRot;
      }
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
      const startRot = m.group.rotation.y;
      const t0 = performance.now();
      const duration = 320;
      const tick = () => {
        const t = Math.min(1, (performance.now() - t0) / duration);
        m.group.position.y = startY + t * 1.8;
        m.group.rotation.y = startRot + t * Math.PI * 3;
        const s = 1 - t * 0.7;
        m.group.scale.setScalar(Math.max(0.01, s));
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
    [m.base.material, m.finial.material, m.rim.material, m.label.material].forEach(
      (mat) => {
        const mm = mat as THREE.MeshStandardMaterial | THREE.SpriteMaterial;
        if ("map" in mm && mm.map) mm.map.dispose();
        mm.dispose();
      }
    );
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
      if (inCheck) sound.play("check", { pan: 0 });
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

  setOptions(opts: {
    mode?: "ai" | "hotseat";
    humanSide?: Side;
    difficulty?: Difficulty;
  }) {
    if (opts.mode) this.mode = opts.mode;
    if (opts.humanSide) {
      this.humanSide = opts.humanSide;
      this.spherical.theta = opts.humanSide === "r" ? 0 : Math.PI;
      this.updateCamera();
    }
    if (opts.difficulty) this.difficulty = opts.difficulty;
  }

  setPieceSkin(id: string) {
    this.pieceSkin = getPieceSkin(id);
    for (const m of this.meshes.values()) reskinPieceMesh(m, this.pieceSkin);
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
    if (!this.ambientStarted && this.ctxAlive()) {
      sound.resume();
      sound.startAmbience(t.ambience);
      this.ambientStarted = true;
    } else {
      sound.startAmbience(t.ambience);
    }
  }

  private ctxAlive() {
    return true;
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
    this.ambientStarted = true;
    if (this.mode === "ai" && this.turn !== this.humanSide) this.runAI();
  }

  // --------------------------------------------------------------- loop

  private animate = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.animate);
    // Subtle idle bob for all pieces.
    const t = performance.now() * 0.001;
    let i = 0;
    for (const m of this.meshes.values()) {
      if (!m.group.visible) continue;
      const base = -0.23 + PIECE_H / 2;
      // Only bob pieces not currently animating (the move handler overwrites y).
      if (Math.abs(m.group.position.y - base) < 0.05 && !this.animating) {
        m.group.position.y = base + Math.sin(t * 1.5 + i * 0.7) * 0.01;
      }
      i++;
    }
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
    this.renderer.dispose();
    if (el.parentNode) el.parentNode.removeChild(el);
  }
}
