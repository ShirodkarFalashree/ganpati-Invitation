/**
 * Web Audio API synthesized brass temple bell chime & devotional audio controller
 */

let bgAudioInstance = null;

export const startDevotionalMusic = () => {
  try {
    if (!bgAudioInstance) {
      bgAudioInstance = new Audio('/audio/ganpati.mp3');
      bgAudioInstance.loop = true;
      bgAudioInstance.volume = 0.85;
      bgAudioInstance.preload = 'auto';
    }

    const unmuteAll = () => {
      if (bgAudioInstance) {
        bgAudioInstance.muted = false;
        if (bgAudioInstance.paused) {
          bgAudioInstance.play().catch(() => {});
        }
      }
      window.removeEventListener('mousemove', unmuteAll);
      window.removeEventListener('pointermove', unmuteAll);
      window.removeEventListener('scroll', unmuteAll, true);
      window.removeEventListener('touchstart', unmuteAll);
      window.removeEventListener('pointerdown', unmuteAll);
      window.removeEventListener('click', unmuteAll);
      window.removeEventListener('keydown', unmuteAll);
    };

    // Attach listeners for any subtle interaction (mousemove, scroll, touch, pointer, click, keydown)
    window.addEventListener('mousemove', unmuteAll, { once: true });
    window.addEventListener('pointermove', unmuteAll, { once: true });
    window.addEventListener('scroll', unmuteAll, { capture: true, once: true });
    window.addEventListener('touchstart', unmuteAll, { once: true });
    window.addEventListener('pointerdown', unmuteAll, { once: true });
    window.addEventListener('click', unmuteAll, { once: true });
    window.addEventListener('keydown', unmuteAll, { once: true });

    // Attempt direct unmuted play when curtains open
    const playPromise = bgAudioInstance.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Unmuted autoplay deferred by browser, starting muted audio & unmuting on movement:', err);
        // Fallback: start playing muted so audio timeline starts immediately with curtains
        bgAudioInstance.muted = true;
        bgAudioInstance.play().catch(() => {});
      });
    }
  } catch (err) {
    console.error('Error starting devotional music:', err);
  }
};

export const playTempleBellSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    
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

