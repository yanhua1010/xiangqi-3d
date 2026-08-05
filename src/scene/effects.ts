/**
 * Procedural special effects — no textures or shaders required.
 * Everything is built from THREE primitives + Points, animated on the main
 * clock: march dust, capture bursts, check pulse rings, landing ripples,
 * ambient falling petals, torch flames and waving banners.
 */

import * as THREE from "three";

export interface EffectHost {
  scene: THREE.Scene;
  /** Advance all live effects; `dt` seconds, `t` absolute. */
  update(dt: number, t: number): void;
  dispose(): void;
}

// --------------------------------------------------------------- helpers

function pointsGeo(positions: Float32Array): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return g;
}

function fadeMaterial(color: number, size: number): THREE.PointsMaterial {
  return new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

// --------------------------------------------------------------- dust burst

/** Small brown puff of dust when a figure lands / marches. */
export function spawnDust(scene: THREE.Scene, x: number, z: number, y = 0, count = 10) {
  const positions = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.random() * 0.2;
    positions[i * 3] = x + Math.cos(a) * r;
    positions[i * 3 + 1] = y + Math.random() * 0.05;
    positions[i * 3 + 2] = z + Math.sin(a) * r;
    vel[i * 3] = (Math.random() - 0.5) * 0.6;
    vel[i * 3 + 1] = Math.random() * 0.9 + 0.2;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
  }
  const mat = fadeMaterial(0xb08a5a, 0.09);
  const points = new THREE.Points(pointsGeo(positions), mat);
  points.position.y = y;
  scene.add(points);
  active.push({ points, vel, life: 0, maxLife: 0.7 });
}

// --------------------------------------------------------------- capture burst

/**
 * Explosion when a piece is captured: a ring shockwave, a flash of light and a
 * shower of embers in the victim's colour.
 */
export function spawnCapture(
  scene: THREE.Scene,
  x: number,
  z: number,
  color: number,
  y = 0.1
) {
  const count = 26;
  const positions = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const elev = (Math.random() - 0.4) * Math.PI;
    const sp = 1.2 + Math.random() * 1.4;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    vel[i * 3] = Math.cos(a) * Math.cos(elev) * sp;
    vel[i * 3 + 1] = Math.sin(elev) * sp + 0.8;
    vel[i * 3 + 2] = Math.sin(a) * Math.cos(elev) * sp;
  }
  const mat = fadeMaterial(color, 0.16);
  const points = new THREE.Points(pointsGeo(positions), mat);
  points.position.set(x, y, z);
  scene.add(points);

  // Shockwave ring expanding flat on the board.
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.3, 0.38, 32),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, y + 0.02, z);
  scene.add(ring);

  // Brief light.
  const flash = new THREE.PointLight(color, 3, 5);
  flash.position.set(x, y + 0.5, z);
  scene.add(flash);

  active.push({ points, vel, life: 0, maxLife: 0.9, color, ring, flash } as ActiveEffect);
}

// --------------------------------------------------------------- check pulse

/** Red pulsing ring around the checked general. */
export function spawnCheckPulse(scene: THREE.Scene, x: number, z: number, y = 0.08) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.34, 0.4, 40),
    new THREE.MeshBasicMaterial({
      color: 0xff3030,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, y, z);
  ring.scale.setScalar(0.1);
  scene.add(ring);
  active.push({ points: null, vel: null, life: 0, maxLife: 1.2, ring });
}

// --------------------------------------------------------------- landing ripple

/** Soft circular ripple where a piece lands (non-capture). */
export function spawnRipple(scene: THREE.Scene, x: number, z: number, color = 0xffd24a) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.3, 0.34, 32),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, 0.06, z);
  scene.add(ring);
  active.push({ points: null, vel: null, life: 0, maxLife: 0.5, ring });
}

// --------------------------------------------------------------- ambient petals

interface Petal {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  spin: THREE.Vector3;
}

/**
 * Falling petals drifting over the board (courtyard / ink themes). Cheap CPU
 * particles — a handful of small quads with a per-petal sway.
 */
export function spawnPetals(
  scene: THREE.Scene,
  extent: { x: number; z: number },
  centerY = 4,
  count = 24,
  color = 0xf2c9c9
) {
  const geo = new THREE.PlaneGeometry(0.14, 0.2);
  const petals: Petal[] = [];
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(
      (Math.random() - 0.5) * extent.x,
      centerY + Math.random() * 1.6,
      (Math.random() - 0.5) * extent.z
    );
    m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(m);
    petals.push({
      mesh: m,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.12, -0.25 - Math.random() * 0.2, (Math.random() - 0.5) * 0.12),
      spin: new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
    });
  }
  petalSets.push({ petals, extent, centerY });
}

interface PetalSet {
  petals: Petal[];
  extent: { x: number; z: number };
  centerY: number;
}
const petalSets: PetalSet[] = [];

export function clearPetals(scene: THREE.Scene) {
  for (const set of petalSets) {
    for (const petal of set.petals) {
      scene.remove(petal.mesh);
      petal.mesh.geometry.dispose();
      (petal.mesh.material as THREE.Material).dispose();
    }
  }
  petalSets.length = 0;
}

// --------------------------------------------------------------- torch flame

interface Flame {
  mesh: THREE.Mesh;
  seed: number;
}

/** Flickering additive flame for lanterns / torches. */
export function spawnFlame(scene: THREE.Scene, x: number, y: number, z: number, size = 0.14) {
  const mat = new THREE.MeshBasicMaterial({
    color: 0xffa040,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(size, size * 2.2, 8), mat);
  mesh.position.set(x, y, z);
  scene.add(mesh);
  flames.push({ mesh, seed: Math.random() * 10 });
}

const flames: Flame[] = [];

// --------------------------------------------------------------- banner

export interface Banner {
  mesh: THREE.Mesh;
  baseX: number;
  seed: number;
  amplitude: number;
}

/** A flag/banner that waves — used for chariot standards. */
export function makeBanner(
  parent: THREE.Object3D,
  x: number,
  y: number,
  z: number,
  w = 0.13,
  h = 0.16,
  color = 0xd8b44a,
  amplitude = 0.06
): Banner {
  const geo = new THREE.PlaneGeometry(w, h);
  const mat = new THREE.MeshBasicMaterial({
    color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x + w / 2, y, z);
  parent.add(mesh);
  const banner: Banner = { mesh, baseX: x + w / 2, seed: Math.random() * 10, amplitude };
  banners.push(banner);
  return banner;
}

const banners: Banner[] = [];

// --------------------------------------------------------------- active pool

interface ActiveEffect {
  points: THREE.Points | null;
  vel: Float32Array | null;
  life: number;
  maxLife: number;
  color?: number;
  ring?: THREE.Mesh;
  flash?: THREE.PointLight;
}


const active: ActiveEffect[] = [];

export function updateEffects(scene: THREE.Scene, dt: number, t: number) {
  // Dust & bursts.
  for (let i = active.length - 1; i >= 0; i--) {
    const e = active[i];
    if (e.points && e.vel && e.vel.length > 0) {
      e.life += dt;
      const p = e.points;
      const pos = p.geometry.getAttribute("position") as THREE.BufferAttribute;
      const k = 1 - e.life / e.maxLife;
      for (let j = 0; j < pos.count; j++) {
        pos.setXYZ(
          j,
          pos.getX(j) + e.vel[j * 3] * dt,
          pos.getY(j) + e.vel[j * 3 + 1] * dt,
          pos.getZ(j) + e.vel[j * 3 + 2] * dt
        );
        if (e.maxLife < 999) {
          pos.setY(j, pos.getY(j) - 0.25 * dt); // slight gravity after launch
        }
      }
      pos.needsUpdate = true;
      const m = p.material as THREE.PointsMaterial;
      m.opacity = Math.max(0, k);
      if (e.life >= e.maxLife) {
        scene.remove(p);
        p.geometry.dispose();
        m.dispose();
        active.splice(i, 1);
        continue;
      }
    }
    // Rings / flashes.
    if (e.ring) {
      e.life += dt;
      const k = 1 - e.life / e.maxLife;
      const s = 0.1 + (1 - k) * 1.6;
      e.ring.scale.setScalar(Math.max(0.01, s));
      (e.ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, k);
      if (e.life >= e.maxLife) {
        scene.remove(e.ring);
        (e.ring.material as THREE.Material).dispose();
        active.splice(i, 1);
        continue;
      }
    }
    if (e.flash) {
      e.flash.intensity = Math.max(0, 3 * (1 - e.life / e.maxLife));
      if (e.life >= e.maxLife) {
        scene.remove(e.flash);
        active.splice(i, 1);
      }
    }
  }

  // Petals.
  for (const set of petalSets) {
    for (const petal of set.petals) {
      petal.mesh.position.addScaledVector(petal.vel, dt);
      petal.mesh.rotation.x += petal.spin.x * dt;
      petal.mesh.rotation.y += petal.spin.y * dt;
      petal.mesh.rotation.z += petal.spin.z * dt;
      petal.mesh.position.x += Math.sin(t * 1.3 + petal.mesh.position.z * 0.7) * dt * 0.15;
      if (petal.mesh.position.y < 0.1) {
        petal.mesh.position.y = set.centerY + Math.random() * 1.6;
        petal.mesh.position.x = (Math.random() - 0.5) * set.extent.x;
        petal.mesh.position.z = (Math.random() - 0.5) * set.extent.z;
      }
    }
  }

  // Flames.
  for (const f of flames) {
    const s = 1 + Math.sin(t * 7 + f.seed) * 0.18 + Math.sin(t * 13 + f.seed * 2) * 0.08;
    f.mesh.scale.set(s, s * (1 + Math.sin(t * 9 + f.seed) * 0.15), s);
  }

  // Banners.
  for (const b of banners) {
    b.mesh.rotation.y = Math.sin(t * 4 + b.seed) * 0.5;
    b.mesh.rotation.z = Math.sin(t * 5 + b.seed) * 0.12;
    b.mesh.position.x = b.baseX + Math.sin(t * 4 + b.seed) * b.amplitude;
  }
}

export function clearEffects(scene: THREE.Scene) {
  for (const e of active) {
    if (e.points) {
      scene.remove(e.points);
      e.points.geometry.dispose();
      (e.points.material as THREE.Material).dispose();
    }
    if (e.ring) {
      scene.remove(e.ring);
      (e.ring.material as THREE.Material).dispose();
    }
    if (e.flash) scene.remove(e.flash);
  }
  active.length = 0;
  clearPetals(scene);
  for (const f of flames) scene.remove(f.mesh);
  flames.length = 0;
  for (const b of banners) b.mesh.removeFromParent();
  banners.length = 0;
}
