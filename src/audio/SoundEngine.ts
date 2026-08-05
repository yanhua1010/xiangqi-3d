/**
 * Fully synthesised sound engine — no audio files required.
 * All SFX are generated with the Web Audio API (noise bursts, oscillators,
 * filters and short envelopes), then spatialised by on-screen pan.
 */

export type SfxName =
  | "select"
  | "place"
  | "capture"
  | "check"
  | "move" // whoosh while a piece travels
  | "win"
  | "lose"
  | "ui"
  | "start";

interface EngineOpts {
  master?: number;
  sfx?: number;
  muted?: boolean;
}

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private master!: GainNode;
  private sfxBus!: GainNode;
  private musicBus!: GainNode;
  private noiseBuffer!: AudioBuffer;
  private ambience: { stop: () => void } | null = null;
  private opts: Required<EngineOpts> = {
    master: 0.8,
    sfx: 0.9,
    muted: false,
  };
  private started = false;

  init() {
    if (this.ctx) return;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.opts.muted ? 0 : this.opts.master;
    this.master.connect(this.ctx.destination);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = this.opts.sfx;
    this.sfxBus.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.5;
    this.musicBus.connect(this.master);

    // Pre-render 2s of white noise.
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noiseBuffer = buf;
    this.started = true;
  }

  /** Must be called from a user gesture to satisfy autoplay policies. */
  resume() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") void this.ctx.resume();
  }

  setMuted(m: boolean) {
    this.opts.muted = m;
    if (this.master && this.ctx)
      this.master.gain.setTargetAtTime(m ? 0 : this.opts.master, this.ctx.currentTime, 0.02);
  }
  isMuted() {
    return this.opts.muted;
  }
  setMaster(v: number) {
    this.opts.master = v;
    if (!this.opts.muted && this.master && this.ctx)
      this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.02);
  }
  setSfx(v: number) {
    this.opts.sfx = v;
    if (this.sfxBus && this.ctx)
      this.sfxBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.02);
  }
  setMusic(v: number) {
    if (this.musicBus && this.ctx)
      this.musicBus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.02);
  }

  // ----------------------------------------------------------- helpers

  private noiseSource() {
    const src = this.ctx!.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    return src;
  }

  /** Pan a sound by screen x: -1 left … +1 right. */
  private panner(pan = 0) {
    const p = this.ctx!.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan));
    return p;
  }

  private env(
    node: AudioNode,
    gain: number,
    attack: number,
    decay: number,
    when = 0
  ) {
    const g = this.ctx!.createGain();
    const t = this.ctx!.currentTime + when;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    node.connect(g);
    return g;
  }

  // ----------------------------------------------------------- public sfx

  play(name: SfxName, opts: { pan?: number; weight?: number } = {}) {
    if (!this.started) this.init();
    if (!this.ctx || this.opts.muted) return;
    if (this.ctx.state === "suspended") void this.ctx.resume();
    switch (name) {
      case "select":
        this.blip(880, 0.06, 0.08, opts.pan);
        break;
      case "ui":
        this.blip(520, 0.04, 0.05, opts.pan, "triangle");
        break;
      case "place":
        this.woodTap(opts.weight ?? 0.3, opts.pan);
        break;
      case "capture":
        this.capture(opts.weight ?? 0.5, opts.pan);
        break;
      case "move":
        this.whoosh(opts.pan);
        break;
      case "check":
        this.gong(opts.pan);
        break;
      case "start":
        this.drumRoll(opts.pan);
        break;
      case "win":
        this.fanfare(opts.pan);
        break;
      case "lose":
        this.defeat(opts.pan);
        break;
    }
  }

  // ----------------------------------------------------------- synthesis

  private blip(
    freq: number,
    dur: number,
    gain: number,
    pan = 0,
    type: OscillatorType = "sine"
  ) {
    const osc = this.ctx!.createOscillator();
    osc.type = type;
    osc.frequency.value = freq;
    const g = this.env(osc, gain, 0.005, dur);
    const p = this.panner(pan);
    g.connect(p).connect(this.sfxBus);
    osc.start();
    osc.stop(this.ctx!.currentTime + dur + 0.05);
  }

  private woodTap(weight: number, pan = 0) {
    const t = this.ctx!.currentTime;
    // Resonant body — heavier pieces lower & longer.
    const bodyFreq = 320 - weight * 180;
    const osc = this.ctx!.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(bodyFreq * 1.6, t);
    osc.frequency.exponentialRampToValueAtTime(bodyFreq, t + 0.04);
    const bg = this.ctx!.createGain();
    bg.gain.setValueAtTime(0.0001, t);
    bg.gain.exponentialRampToValueAtTime(0.5 * (0.4 + weight), t + 0.004);
    bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.12 + weight * 0.12);
    osc.connect(bg);

    // Noise "tick" (the strike).
    const noise = this.noiseSource();
    const filt = this.ctx!.createBiquadFilter();
    filt.type = "bandpass";
    filt.frequency.value = 1800 + weight * 600;
    filt.Q.value = 3;
    const ng = this.ctx!.createGain();
    ng.gain.setValueAtTime(0.0001, t);
    ng.gain.exponentialRampToValueAtTime(0.35, t + 0.002);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    noise.connect(filt).connect(ng);

    const p = this.panner(pan);
    bg.connect(p);
    ng.connect(p);
    p.connect(this.sfxBus);
    osc.start(t);
    osc.stop(t + 0.3);
    noise.start(t);
    noise.stop(t + 0.3);
  }

  private whoosh(pan = 0) {
    const t = this.ctx!.currentTime;
    const noise = this.noiseSource();
    const filt = this.ctx!.createBiquadFilter();
    filt.type = "bandpass";
    filt.Q.value = 0.8;
    filt.frequency.setValueAtTime(400, t);
    filt.frequency.exponentialRampToValueAtTime(1600, t + 0.25);
    const g = this.ctx!.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    noise.connect(filt).connect(g);
    const p = this.panner(pan);
    g.connect(p).connect(this.sfxBus);
    noise.start(t);
    noise.stop(t + 0.35);
  }

  private capture(weight: number, pan = 0) {
    const t = this.ctx!.currentTime;
    // Clank — inharmonic metallic partials.
    const partials = [1, 2.76, 5.4];
    partials.forEach((mult, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i === 0 ? "triangle" : "square";
      osc.frequency.value = 220 * mult;
      const g = this.ctx!.createGain();
      g.gain.setValueAtTime(0.0001, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.25 / (i + 1), t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2 + i * 0.05);
      osc.connect(g);
      const p = this.panner(pan);
      g.connect(p).connect(this.sfxBus);
      osc.start(t + 0.005);
      osc.stop(t + 0.4);
    });
    // Shatter noise.
    const noise = this.noiseSource();
    const hp = this.ctx!.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 2500;
    const ng = this.ctx!.createGain();
    ng.gain.setValueAtTime(0.0001, t);
    ng.gain.exponentialRampToValueAtTime(0.2 + weight * 0.2, t + 0.01);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    noise.connect(hp).connect(ng);
    const p = this.panner(pan);
    ng.connect(p).connect(this.sfxBus);
    noise.start(t);
    noise.stop(t + 0.25);
    // Low thunk.
    this.blip(120 - weight * 40, 0.18, 0.4, pan, "sine");
  }

  private gong(pan = 0) {
    const t = this.ctx!.currentTime;
    // Gong: rich inharmonic spectrum with slow attack/decay.
    const freqs = [180, 240, 355, 540, 780, 1150];
    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = i < 2 ? "sine" : "triangle";
      osc.frequency.value = f;
      const g = this.ctx!.createGain();
      const peak = 0.18 / (i + 1);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak, t + 0.02 + i * 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
      osc.connect(g);
      const p = this.panner(pan);
      g.connect(p).connect(this.sfxBus);
      osc.start(t);
      osc.stop(t + 2);
    });
    // Strike transient.
    const noise = this.noiseSource();
    const bp = this.ctx!.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1200;
    bp.Q.value = 1.5;
    const ng = this.ctx!.createGain();
    ng.gain.setValueAtTime(0.0001, t);
    ng.gain.exponentialRampToValueAtTime(0.3, t + 0.003);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    noise.connect(bp).connect(ng);
    const p = this.panner(pan);
    ng.connect(p).connect(this.sfxBus);
    noise.start(t);
    noise.stop(t + 0.3);
    // Warning drone underneath.
    const drone = this.ctx!.createOscillator();
    drone.type = "sawtooth";
    drone.frequency.value = 55;
    const dg = this.ctx!.createGain();
    const dgf = this.ctx!.createBiquadFilter();
    dgf.type = "lowpass";
    dgf.frequency.value = 300;
    dg.gain.setValueAtTime(0.0001, t + 0.1);
    dg.gain.exponentialRampToValueAtTime(0.12, t + 0.3);
    dg.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
    drone.connect(dgf).connect(dg);
    dg.connect(this.sfxBus);
    drone.start(t + 0.1);
    drone.stop(t + 1.4);
  }

  private fanfare(pan = 0) {
    const t = this.ctx!.currentTime;
    // Triumphant arpeggio in a pentatonic-ish major.
    const notes = [392, 523, 659, 784, 1047];
    notes.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = f;
      const g = this.ctx!.createGain();
      const start = t + i * 0.1;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.22, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);
      osc.connect(g);
      const p = this.panner(pan);
      g.connect(p).connect(this.sfxBus);
      osc.start(start);
      osc.stop(start + 0.5);
    });
    // Final chord.
    [392, 494, 587, 784].forEach((f) => {
      const osc = this.ctx!.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      const g = this.ctx!.createGain();
      const start = t + 0.55;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.12, start + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 1.2);
      osc.connect(g);
      g.connect(this.sfxBus);
      osc.start(start);
      osc.stop(start + 1.3);
    });
  }

  private defeat(pan = 0) {
    const t = this.ctx!.currentTime;
    const notes = [440, 392, 330, 262];
    notes.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.value = f;
      const filt = this.ctx!.createBiquadFilter();
      filt.type = "lowpass";
      filt.frequency.value = 600;
      const g = this.ctx!.createGain();
      const start = t + i * 0.18;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.18, start + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.5);
      osc.connect(filt).connect(g);
      const p = this.panner(pan);
      g.connect(p).connect(this.sfxBus);
      osc.start(start);
      osc.stop(start + 0.6);
    });
  }

  private drumRoll(pan = 0) {
    const t = this.ctx!.currentTime;
    for (let i = 0; i < 6; i++) {
      const osc = this.ctx!.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, t + i * 0.08);
      osc.frequency.exponentialRampToValueAtTime(70, t + i * 0.08 + 0.08);
      const g = this.ctx!.createGain();
      g.gain.setValueAtTime(0.0001, t + i * 0.08);
      g.gain.exponentialRampToValueAtTime(0.3, t + i * 0.08 + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.08 + 0.12);
      osc.connect(g);
      const p = this.panner(pan);
      g.connect(p).connect(this.sfxBus);
      osc.start(t + i * 0.08);
      osc.stop(t + i * 0.08 + 0.15);
    }
  }

  // ----------------------------------------------------------- ambience

  /** A looping bed: low wind + distant war-drum pulse. */
  startAmbience(kind: "battle" | "courtyard" | "none" = "courtyard") {
    if (!this.ctx) return;
    this.stopAmbience();
    if (kind === "none") return;
    const t = this.ctx.currentTime;
    const out = this.ctx.createGain();
    out.gain.value = 0.0;
    out.gain.setTargetAtTime(0.25, t, 1.5);
    out.connect(this.musicBus);

    // Wind: filtered noise.
    const noise = this.noiseSource();
    const lp = this.ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = kind === "battle" ? 700 : 380;
    const ng = this.ctx.createGain();
    ng.gain.value = 0.15;
    // Slow LFO on wind gain.
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.1;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.08;
    lfo.connect(lfoGain).connect(ng.gain);
    lfo.start();
    noise.connect(lp).connect(ng).connect(out);
    noise.start();

    const stops: (() => void)[] = [
      () => noise.stop(),
      () => lfo.stop(),
    ];

    if (kind === "battle") {
      // Distant drum pulse.
      const interval = setInterval(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(90, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.2);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
        osc.connect(g).connect(out);
        osc.start(now);
        osc.stop(now + 0.5);
      }, 1800);
      stops.push(() => clearInterval(interval));
    }

    this.ambience = {
      stop: () => {
        try {
          out.gain.setTargetAtTime(0.0001, this.ctx!.currentTime, 0.4);
        } catch {
          /* noop */
        }
        stops.forEach((s) => s());
        setTimeout(() => {
          try {
            out.disconnect();
          } catch {
            /* noop */
          }
        }, 800);
      },
    };
  }

  stopAmbience() {
    this.ambience?.stop();
    this.ambience = null;
  }

  dispose() {
    this.stopAmbience();
    if (this.ctx) void this.ctx.close();
    this.ctx = null;
    this.started = false;
  }
}

export const sound = new SoundEngine();
