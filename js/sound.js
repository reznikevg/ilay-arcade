// ==================== SOUND, TTS & CONFETTI ENGINE ====================

class ArcadeAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, delay = 0, volume = 0.18) {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    } catch (e) {
      // Ignore audio errors on restricted devices
    }
  }

  playClick() {
    this.playTone(520, 'triangle', 0.06, 0, 0.12);
  }

  playGoalSuccess() {
    // Upbeat stadium fanfare chord
    this.playTone(523.25, 'triangle', 0.12, 0, 0.2);    // C5
    this.playTone(659.25, 'triangle', 0.12, 0.09, 0.2); // E5
    this.playTone(783.99, 'triangle', 0.15, 0.18, 0.22);// G5
    this.playTone(1046.50, 'sine', 0.35, 0.27, 0.25);   // C6
  }

  playWhistleVictory() {
    // Referee whistle + fanfare
    this.playTone(2800, 'sine', 0.12, 0, 0.12);
    this.playTone(2850, 'sine', 0.12, 0.16, 0.12);
    this.playTone(2900, 'sine', 0.35, 0.32, 0.15);
    setTimeout(() => this.playGoalSuccess(), 450);
  }

  playMiss() {
    this.playTone(300, 'sawtooth', 0.18, 0, 0.14);
    this.playTone(220, 'sawtooth', 0.28, 0.15, 0.14);
  }

  playUnlock() {
    this.playTone(587.33, 'sine', 0.1, 0, 0.2);
    this.playTone(880, 'sine', 0.15, 0.1, 0.22);
    this.playTone(1174.66, 'triangle', 0.35, 0.2, 0.25);
  }

  cleanTextForHebrewTTS(text) {
    if (!text) return '';
    let t = String(text);

    // 1. Phonetic replacement for Ilay -> עילאי (so iOS/Android TTS pronounces "Ilai" perfectly!)
    t = t.replace(/(^|[\s,.\-—"'(])עילי([,.\-—"')\s]|$)/g, '$1עילאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])וְ?עִילִי([,.\-—"')\s]|$)/g, '$1וְעִילַאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])לְ?עִילִי([,.\-—"')\s]|$)/g, '$1לְעִילַאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])שְ?עִילִי([,.\-—"')\s]|$)/g, '$1שְׁעִילַאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])מֵ?עִילִי([,.\-—"')\s]|$)/g, '$1מֵעִילַאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])בְּ?עִילִי([,.\-—"')\s]|$)/g, '$1בְּעִילַאי$2');

    t = t.replace(/(^|[\s,.\-—"'(])ועילי([,.\-—"')\s]|$)/g, '$1ועילאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])לעילי([,.\-—"')\s]|$)/g, '$1לעילאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])שעילי([,.\-—"')\s]|$)/g, '$1שעילאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])מעילי([,.\-—"')\s]|$)/g, '$1מעילאי$2');
    t = t.replace(/(^|[\s,.\-—"'(])בעילי([,.\-—"')\s]|$)/g, '$1בעילאי$2');

    // 2. Remove emojis and UI decorative icons
    t = t.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ' ');
    t = t.replace(/[⚽🏆🔥🪙⭐🥅🧤🎙️💡🎯⏱️🦁👑💛🖤🤍💜🎉👟🛡️💎🎩🏃📜🔬🎨🎵🕯️📌✔✖☐•]/g, ' ');

    // 3. Common Hebrew abbreviations that TTS stumbles on
    t = t.replace(/\bבית"ר\b/g, 'ביתר ירושלים');
    t = t.replace(/\bבי"ס\b/g, 'בית ספר');
    t = t.replace(/\bאחה"צ\b/g, 'אחר הצהריים');
    t = t.replace(/\bאחה״צ\b/g, 'אחר הצהריים');
    t = t.replace(/\bעמ'\b/g, 'עמוד');
    t = t.replace(/\bדק'\b/g, 'דקות');
    t = t.replace(/\bב-(\d+)\b/g, 'ב $1');
    t = t.replace(/\bה-(\d+)\b/g, 'ה $1');

    // 4. Mathematical and inequality expressions for natural Hebrew reading
    t = t.replace(/□/g, ' המספר החסר ');
    t = t.replace(/\s*>\s*/g, ' גדול מ- ');
    t = t.replace(/\s*<\s*/g, ' קטן מ- ');
    t = t.replace(/(\d+)\s*\+\s*(\d+)/g, '$1 ועוד $2');
    t = t.replace(/(\d+)\s*-\s*(\d+)/g, '$1 פחות $2');
    t = t.replace(/(\d+)\s*=\s*(\d+)/g, '$1 שווה $2');
    t = t.replace(/(\d+)\s*[*×]\s*(\d+)/g, '$1 כפול $2');

    // 5. Clean punctuation and spaces
    t = t.replace(/\s+/g, ' ').trim();
    return t;
  }

  getBestVoice(lang = 'he-IL') {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length === 0) return null;

    const heVoices = voices.filter(v => v.lang && (v.lang === 'he-IL' || v.lang === 'he_IL' || v.lang.startsWith('he')));
    if (heVoices.length === 0) return null;

    // Priority 1: Apple Siri or Enhanced/Premium voices on iOS
    const premium = heVoices.find(v => /siri|enhanced|premium|natural/i.test(v.name));
    if (premium) return premium;

    // Priority 2: Google Hebrew
    const google = heVoices.find(v => /google/i.test(v.name));
    if (google) return google;

    return heVoices[0];
  }

  speak(text, lang = 'he-IL', rate = 0.86) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = this.cleanTextForHebrewTTS(text);
      if (!cleanText) return;

      const utter = new SpeechSynthesisUtterance(cleanText);
      utter.lang = lang;
      utter.rate = rate; // Calm, clear pace for 2nd grade
      utter.pitch = 1.05; // Slightly warmer child-friendly pitch

      const voice = this.getBestVoice(lang);
      if (voice) utter.voice = voice;

      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('TTS error:', e);
    }
  }
}

const arcadeAudio = new ArcadeAudio();

// ==================== CONFETTI ENGINE ====================
class ConfettiManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 75) {
    if (!this.ctx) return;
    const colors = ['#fbbf24', '#10b981', '#3b82f6', '#ec4899', '#a855f7', '#ef4444'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        y: window.innerHeight * 0.45,
        vx: (Math.random() - 0.5) * 18,
        vy: -Math.random() * 16 - 5,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        life: 110 + Math.random() * 40
      });
    }
    if (!this.animId) this.loop();
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.42; // gravity
      p.rotation += p.vRot;
      p.life--;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      this.ctx.restore();

      if (p.life <= 0 || p.y > this.canvas.height + 30) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animId = null;
    }
  }
}

const confetti = new ConfettiManager('confetti-canvas');
