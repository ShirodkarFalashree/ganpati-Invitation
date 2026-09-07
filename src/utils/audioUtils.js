/**
 * Web Audio API synthesized brass temple bell chime & devotional audio controller
 */

export const playTempleBellSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    
    // Master Gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.4, ctx.currentTime);
    masterGain.connect(ctx.destination);

    // Fundamental frequencies for brass temple bell harmonic resonance
    const frequencies = [587.33, 880, 1174.66, 1760, 2349.32]; // D5, A5, D6, A6, D7
    const decayTimes = [3.5, 2.8, 2.0, 1.5, 1.0];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const now = ctx.currentTime;
      const decay = decayTimes[idx];

      // Instant attack, exponential decay for bell resonance
      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(0.3 / (idx + 1), now + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(masterGain);

      osc.start(now);
      osc.stop(now + decay + 0.1);
    });

    // Close AudioContext after sound finishes decay
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 4000);
  } catch (err) {
    console.warn('Web Audio bell chime not supported or blocked:', err);
  }
};
