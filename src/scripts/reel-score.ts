// Original score for the About page opening film: a heartbeat only. Made live with Web Audio,
// no audio files, nothing copied. It starts slow, speeds up as the film builds, and stops dead
// on the title so the title lands in silence. Only plays after the visitor turns sound on.
import { unlockAudio, releaseAudio } from './unlock-audio';

export function createReelScore() {
  let ac: AudioContext | null = null;
  let out: GainNode | null = null;
  let timer = 0;
  let running = false;

  // One thump: a low sine that drops in pitch
  const thump = (at: number, from: number, to: number, gain: number, dur: number) => {
    const o = ac!.createOscillator(), g = ac!.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(from, at);
    o.frequency.exponentialRampToValueAtTime(to, at + dur);
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(gain, at + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g).connect(out!);
    o.start(at); o.stop(at + dur + 0.05);
  };

  const stopBeat = () => { window.clearTimeout(timer); running = false; };

  return {
    // Start the heartbeat. It goes from about 60 to about 115 beats a minute over `seconds`.
    start(seconds = 16) {
      unlockAudio();
      ac ??= new (window.AudioContext || (window as any).webkitAudioContext)();
      ac.resume();
      if (!out) { out = ac.createGain(); out.gain.value = 0.9; out.connect(ac.destination); }
      stopBeat();
      running = true;
      const t0 = performance.now();
      const beat = () => {
        if (!running) return;
        const p = Math.min(1, (performance.now() - t0) / (seconds * 1000));
        const t = ac!.currentTime + 0.01;
        thump(t, 68, 40, 0.75, 0.18);        // lub
        thump(t + 0.2, 60, 36, 0.5, 0.2);    // dub
        timer = window.setTimeout(beat, 1000 - p * 480);
      };
      beat();
    },
    // The title: the heartbeat stops dead
    titleHit() { stopBeat(); },
    stop() { stopBeat(); releaseAudio(); },
  };
}
