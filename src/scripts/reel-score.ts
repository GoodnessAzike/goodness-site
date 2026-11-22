// Original sound for the About page opening film, made live with Web Audio (no audio files,
// nothing copied): typewriter keys for the opening line, a heartbeat that the pictures cut on,
// and a pen scribbling as the tagline is written. Everything is scheduled on the audio clock from
// one shared plan, so the sound lands exactly with the pictures. Only plays after "Sound on".
import { unlockAudio, releaseAudio } from './unlock-audio';

export interface ScorePlan {
  keys: number[];               // ms from start: one typewriter key each
  beats: number[];              // ms from start: one heartbeat each
  scribble: [number, number];   // [start ms, duration ms] of the pen writing
}

export function createReelScore() {
  let ac: AudioContext | null = null;
  let out: GainNode | null = null;
  let live: AudioScheduledSourceNode[] = [];

  const ensure = () => {
    unlockAudio();
    ac ??= new (window.AudioContext || (window as any).webkitAudioContext)();
    ac.resume();
    if (!out) { out = ac.createGain(); out.gain.value = 0.9; out.connect(ac.destination); }
    return ac;
  };
  const keep = <T extends AudioScheduledSourceNode>(n: T) => { live.push(n); return n; };

  const noiseBuffer = (seconds: number, shape: (i: number, len: number) => number) => {
    const len = Math.max(1, Math.ceil(ac!.sampleRate * seconds));
    const buf = ac!.createBuffer(1, len, ac!.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * shape(i, len);
    return buf;
  };

  // A typewriter key: a sharp click plus a small body thunk, slightly different every time
  const key = (at: number) => {
    const src = keep(ac!.createBufferSource());
    src.buffer = noiseBuffer(0.03, (i, len) => (1 - i / len) ** 6);
    const f = ac!.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2600 + Math.random() * 1400; f.Q.value = 1.5;
    const g = ac!.createGain(); g.gain.value = 0.55;
    src.connect(f).connect(g).connect(out!); src.start(at);
    const o = keep(ac!.createOscillator()), og = ac!.createGain();
    o.frequency.setValueAtTime(180 + Math.random() * 40, at); o.frequency.exponentialRampToValueAtTime(90, at + 0.04);
    og.gain.setValueAtTime(0.0001, at); og.gain.exponentialRampToValueAtTime(0.18, at + 0.003); og.gain.exponentialRampToValueAtTime(0.0001, at + 0.05);
    o.connect(og).connect(out!); o.start(at); o.stop(at + 0.06);
  };

  // One heartbeat: lub, then dub
  const thump = (at: number, from: number, to: number, gain: number, dur: number) => {
    const o = keep(ac!.createOscillator()), g = ac!.createGain();
    o.frequency.setValueAtTime(from, at); o.frequency.exponentialRampToValueAtTime(to, at + dur);
    g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(gain, at + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(out!); o.start(at); o.stop(at + dur + 0.05);
  };
  const heartbeat = (at: number) => { thump(at, 68, 40, 0.75, 0.18); thump(at + 0.2, 60, 36, 0.5, 0.2); };

  // A pen writing: soft scratchy noise that comes and goes in strokes
  const scribble = (at: number, dur: number) => {
    const src = keep(ac!.createBufferSource());
    const strokes = 7 + Math.floor(dur * 4);
    src.buffer = noiseBuffer(dur, (i, len) => {
      const x = i / len;
      const stroke = Math.abs(Math.sin(x * Math.PI * strokes));
      return 0.6 * stroke ** 0.6 * Math.min(1, x * 12) * Math.min(1, (1 - x) * 8);
    });
    const hp = ac!.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
    const bp = ac!.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 4200; bp.Q.value = 0.7;
    const g = ac!.createGain(); g.gain.value = 0.5;
    src.connect(hp).connect(bp).connect(g).connect(out!); src.start(at);
  };

  return {
    // Schedule the whole film's sound from now, following the shared plan
    play(plan: ScorePlan) {
      this.stop(false);
      const c = ensure();
      const base = c.currentTime + 0.05;
      plan.keys.forEach((ms) => key(base + ms / 1000));
      plan.beats.forEach((ms) => heartbeat(base + ms / 1000));
      scribble(base + plan.scribble[0] / 1000, plan.scribble[1] / 1000);
    },
    // Stop everything that is still scheduled
    stop(release = true) {
      live.forEach((n) => { try { n.stop(); } catch { /* already stopped */ } });
      live = [];
      if (release) releaseAudio();
    },
  };
}
