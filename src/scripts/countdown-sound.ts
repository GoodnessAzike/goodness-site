// Countdown sound ("E. Dread under the clock"): a low hum under the clock,
// a metallic tick each second with echo, and a deep swelling boom on each new minute.
// Made live with Web Audio. No audio files. Only starts after the visitor turns it on.

import { unlockAudio, releaseAudio } from './unlock-audio';

type Ctx = AudioContext;

export function createCountdownSound() {
  let ac: Ctx | null = null;
  let fx: { dry: GainNode; verb: ConvolverNode; echo: DelayNode } | null = null;
  let stopDrone: (() => void) | null = null;

  const effects = (c: Ctx) => {
    if (fx) return fx;
    const len = Math.floor(c.sampleRate * 2.4);
    const ir = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2.6;
    }
    const verb = c.createConvolver(); verb.buffer = ir;
    const verbGain = c.createGain(); verbGain.gain.value = 0.55;
    verb.connect(verbGain).connect(c.destination);

    const echo = c.createDelay(1); echo.delayTime.value = 0.24;
    const fb = c.createGain(); fb.gain.value = 0.38;
    const echoTone = c.createBiquadFilter(); echoTone.type = 'lowpass'; echoTone.frequency.value = 2400;
    const echoGain = c.createGain(); echoGain.gain.value = 0.45;
    echo.connect(echoTone).connect(fb).connect(echo);
    echoTone.connect(echoGain).connect(c.destination);

    const dry = c.createGain(); dry.gain.value = 0.8;
    dry.connect(c.createDynamicsCompressor()).connect(c.destination);
    return (fx = { dry, verb, echo });
  };

  const out = (c: Ctx, node: AudioNode, wet = 0.6, echo = false) => {
    const f = effects(c);
    node.connect(f.dry);
    const w = c.createGain(); w.gain.value = wet; node.connect(w).connect(f.verb);
    if (echo) node.connect(f.echo);
  };

  const tone = (c: Ctx, o: { type?: OscillatorType; from: number; at: number; dur: number; gain: number; wet?: number; echo?: boolean }) => {
    const osc = c.createOscillator(), g = c.createGain();
    osc.type = o.type ?? 'sine';
    osc.frequency.setValueAtTime(o.from, o.at);
    g.gain.setValueAtTime(0.0001, o.at);
    g.gain.exponentialRampToValueAtTime(o.gain, o.at + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, o.at + o.dur);
    osc.connect(g); out(c, g, o.wet ?? 0.6, o.echo);
    osc.start(o.at); osc.stop(o.at + o.dur + 0.05);
  };

  const metal = (c: Ctx, base: number, at: number, dur: number, gain: number) => {
    [1, 2.32, 3.86, 5.41, 7.1].forEach((r, i) =>
      tone(c, { type: i ? 'sine' : 'triangle', from: base * r, at, dur: dur / (1 + i * 0.35), gain: gain / (1 + i * 0.8), wet: 0.7, echo: true }));
  };

  const noise = (c: Ctx, at: number, dur: number, gain: number, freq: number, q = 2) => {
    const len = Math.ceil(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
    const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; g.gain.value = gain;
    src.connect(f).connect(g); out(c, g, 0.4);
    src.start(at);
  };

  const drone = (c: Ctx) => {
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.11, c.currentTime + 1.2);
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220;
    const oscs = [55, 55.7, 82.4].map((f) => {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start(); return o;
    });
    lp.connect(g); out(c, g, 0.3);
    return () => {
      const t = c.currentTime;
      g.gain.cancelScheduledValues(t);
      g.gain.setValueAtTime(Math.max(g.gain.value, 0.0001), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
      oscs.forEach((o) => o.stop(t + 0.9));
    };
  };

  return {
    get on() { return stopDrone !== null; },
    start() {
      unlockAudio();
      ac ??= new (window.AudioContext || (window as any).webkitAudioContext)();
      ac.resume();
      if (!stopDrone) stopDrone = drone(ac);
    },
    stop() {
      if (stopDrone) { stopDrone(); stopDrone = null; }
      releaseAudio();
    },
    tick() {
      if (!ac || !stopDrone) return;
      const t = ac.currentTime + 0.01;
      metal(ac, 340, t, 0.45, 0.12);
      noise(ac, t, 0.025, 0.55, 5000);
    },
    minute() {
      if (!ac || !stopDrone) return;
      const t = ac.currentTime + 0.01;
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.setValueAtTime(42, t); o.frequency.linearRampToValueAtTime(58, t + 1.2);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
      o.connect(g); out(ac, g, 0.5); o.start(t); o.stop(t + 1.7);
      metal(ac, 120, t, 2, 0.2);
    },
  };
}
