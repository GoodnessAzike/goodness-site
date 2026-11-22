// Original score for the About page opening film. Made live with Web Audio: no audio files,
// nothing copied. A low uneasy hum, a heartbeat that speeds up, a metallic tick each second,
// hits on every cut, and a boom on the title. Only plays after the visitor turns sound on.
import { unlockAudio, releaseAudio } from './unlock-audio';

export function createReelScore() {
  let ac: AudioContext | null = null;
  let out: GainNode | null = null;
  let verb: ConvolverNode | null = null;
  let echo: DelayNode | null = null;
  let droneStop: (() => void) | null = null;
  let pulseTimer = 0;

  const setup = (c: AudioContext) => {
    if (out) return;
    out = c.createGain(); out.gain.value = 0.85;
    out.connect(c.createDynamicsCompressor()).connect(c.destination);
    const len = Math.floor(c.sampleRate * 2.6);
    const ir = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2.5;
    }
    verb = c.createConvolver(); verb.buffer = ir;
    const vg = c.createGain(); vg.gain.value = 0.5; verb.connect(vg).connect(out);
    echo = c.createDelay(1); echo.delayTime.value = 0.22;
    const fb = c.createGain(); fb.gain.value = 0.35;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
    echo.connect(lp).connect(fb).connect(echo); lp.connect(out);
  };

  const send = (node: AudioNode, wet = 0.5, withEcho = false) => {
    node.connect(out!);
    const w = ac!.createGain(); w.gain.value = wet; node.connect(w).connect(verb!);
    if (withEcho) node.connect(echo!);
  };

  const tone = (type: OscillatorType, from: number, to: number, at: number, dur: number, gain: number, wet = 0.5, withEcho = false) => {
    const o = ac!.createOscillator(), g = ac!.createGain();
    o.type = type;
    o.frequency.setValueAtTime(from, at);
    if (to !== from) o.frequency.exponentialRampToValueAtTime(to, at + dur);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(gain, at + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g); send(g, wet, withEcho);
    o.start(at); o.stop(at + dur + 0.05);
  };

  const noise = (at: number, dur: number, gain: number, freq: number, q = 2) => {
    const len = Math.ceil(ac!.sampleRate * dur);
    const buf = ac!.createBuffer(1, len, ac!.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
    const src = ac!.createBufferSource(), f = ac!.createBiquadFilter(), g = ac!.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; g.gain.value = gain;
    src.connect(f).connect(g); send(g, 0.35);
    src.start(at);
  };

  const metal = (base: number, at: number, dur: number, gain: number) => {
    [1, 2.32, 3.86, 5.41].forEach((r, i) => tone(i ? 'sine' : 'triangle', base * r, base * r, at, dur / (1 + i * 0.4), gain / (1 + i * 0.8), 0.7, true));
  };

  const now = () => ac!.currentTime + 0.01;

  return {
    get on() { return ac !== null && out !== null && droneStop !== null; },

    // Turn on: start the low hum and a heartbeat that speeds up over `seconds`
    start(seconds = 16) {
      unlockAudio();
      ac ??= new (window.AudioContext || (window as any).webkitAudioContext)();
      ac.resume();
      setup(ac);
      if (droneStop) return;
      const c = ac;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.13, c.currentTime + 1.5);
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 240;
      const oscs = [55, 55.6, 82.4].map((f) => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start(); return o; });
      lp.connect(g); send(g, 0.3);
      droneStop = () => {
        const t = c.currentTime;
        g.gain.cancelScheduledValues(t);
        g.gain.setValueAtTime(Math.max(g.gain.value, 0.0001), t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
        oscs.forEach((o) => o.stop(t + 1.3));
      };
      // heartbeat: starts slow, gets faster
      const t0 = performance.now();
      const beat = () => {
        if (!droneStop) return;
        const p = Math.min(1, (performance.now() - t0) / (seconds * 1000));
        const t = now();
        tone('sine', 70, 42, t, 0.16, 0.55, 0.25);
        tone('sine', 62, 38, t + 0.17, 0.18, 0.4, 0.25);
        pulseTimer = window.setTimeout(beat, 1000 - p * 520);
      };
      beat();
    },
    // A metallic tick, once a second with the clock
    tick() { if (!this.on) return; const t = now(); metal(340, t, 0.4, 0.1); noise(t, 0.02, 0.5, 5000); },
    // A short typewriter key
    key() { if (!this.on) return; noise(now(), 0.012, 0.35, 3200, 4); },
    // A hit on each cut or new panel
    hit() { if (!this.on) return; const t = now(); tone('sine', 95, 40, t, 0.35, 0.8, 0.4); metal(180, t, 0.9, 0.12); noise(t, 0.05, 0.6, 1400); },
    // The clock freezing: two beeps
    beeps() { if (!this.on) return; const t = now(); tone('square', 880, 880, t, 0.09, 0.08, 0.3); tone('square', 880, 880, t + 0.16, 0.09, 0.08, 0.3); },
    // The title: a big boom that rings out, then the hum fades away
    boom() {
      if (!this.on) return;
      const t = now();
      tone('sine', 72, 26, t, 2.2, 1, 0.6);
      metal(110, t, 3, 0.26);
      noise(t, 0.4, 0.7, 300, 0.8);
      window.clearTimeout(pulseTimer);
      window.setTimeout(() => this.fadeOut(), 2500);
    },
    fadeOut() { window.clearTimeout(pulseTimer); if (droneStop) { droneStop(); droneStop = null; } },
    stop() { this.fadeOut(); releaseAudio(); },
  };
}
