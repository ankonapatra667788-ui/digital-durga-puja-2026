/**
 * Pure Web Audio API Synthesizer for Authentic Durga Puja Percussion & Sacred Acoustics
 * Synthesizes Dhak (Bengal festive drum), Kanshi (brass bell), Shankha (conch), and Diya chime.
 */

class PujaAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.activeInterval = null;
    this.loopSpeed = 140; // BPM
  }

  getContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  setMute(mute) {
    this.isMuted = mute;
    if (mute) this.stopLoop();
  }

  getIsMuted() {
    return this.isMuted;
  }

  /**
   * Synthesize "Dha" - Deep Resonant Dhak Bass Skin
   */
  playDhakDha(volume = 0.8) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(54, now + 0.18);

    gain.gain.setValueAtTime(volume * 0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    // Punchy noise impact transient
    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(volume * 0.5, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(now);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.36);
  }

  /**
   * Synthesize "Kring" - High Rim Stick Snap
   */
  playDhakKring(volume = 0.7) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    // Bandpass filter for woody ring
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(4, now);

    gain.gain.setValueAtTime(volume * 0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Synthesize "Ta" - Crisp Open Slap
   */
  playDhakTa(volume = 0.65) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.1);

    gain.gain.setValueAtTime(volume * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  /**
   * Synthesize Kanshi (Bell Metal Gong / Cymbal Strike)
   */
  playKanshi(volume = 0.5) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [1040, 1560, 2600].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const dur = idx === 0 ? 0.6 : 0.35;
      gain.gain.setValueAtTime(volume * (0.3 / (idx + 1)), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });
  }

  /**
   * Synthesize Sacred Conch (Shankha) Drone Sweep
   */
  playShankha(duration = 2.4, volume = 0.55) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(285, now);
    osc1.frequency.linearRampToValueAtTime(320, now + 0.4);
    osc1.frequency.exponentialRampToValueAtTime(300, now + duration);

    osc2.frequency.setValueAtTime(570, now);
    osc2.frequency.linearRampToValueAtTime(640, now + 0.4);
    osc2.frequency.exponentialRampToValueAtTime(600, now + duration);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, now);
    filter.frequency.linearRampToValueAtTime(950, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(450, now + duration);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(volume * 0.8, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  /**
   * Play Diya Pranam Chime
   */
  playDiyaChime() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [1320, 1760, 2640].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.25 / (idx + 1), now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.05);
      osc.stop(now + 1.3);
    });
  }

  /**
   * Start Loop Pattern
   */
  startDhakLoop(pattern = 'dhunuchi') {
    this.stopLoop();
    if (this.isMuted) return;

    let step = 0;
    const intervalMs = (60 / this.loopSpeed) * 250;

    this.activeInterval = window.setInterval(() => {
      if (pattern === 'dhunuchi') {
        const pos = step % 6;
        if (pos === 0) {
          this.playDhakDha(0.85);
          this.playKanshi(0.4);
        } else if (pos === 2) {
          this.playDhakKring(0.65);
        } else if (pos === 3) {
          this.playDhakTa(0.6);
        } else if (pos === 4) {
          this.playDhakDha(0.7);
        } else if (pos === 5) {
          this.playDhakKring(0.75);
          this.playKanshi(0.3);
        }
      } else if (pattern === 'dha-kring') {
        const pos = step % 8;
        if (pos === 0 || pos === 4) {
          this.playDhakDha(0.8);
          this.playKanshi(0.35);
        } else if (pos === 2 || pos === 6) {
          this.playDhakKring(0.7);
        } else if (pos === 7) {
          this.playDhakTa(0.5);
        }
      } else {
        const pos = step % 4;
        if (pos === 0) {
          this.playDhakDha(0.9);
          this.playKanshi(0.5);
        } else if (pos === 1) {
          this.playDhakKring(0.8);
        } else if (pos === 2) {
          this.playDhakDha(0.75);
        } else if (pos === 3) {
          this.playDhakKring(0.85);
          this.playKanshi(0.45);
        }
      }
      step++;
    }, intervalMs);
  }

  stopLoop() {
    if (this.activeInterval !== null) {
      clearInterval(this.activeInterval);
      this.activeInterval = null;
    }
  }

  isLoopPlaying() {
    return this.activeInterval !== null;
  }
}

export const pujaAudio = new PujaAudioEngine();
