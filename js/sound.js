// ==================== SOUND, TTS & CONFETTI ENGINE ====================

class ArcadeAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.voices = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices() || [];
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices() || [];
      };
    }
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

  numberToHebrewWords(num) {
    const n = parseInt(num, 10);
    if (isNaN(n)) return '';
    if (n < 0) return 'מִינוּס ' + this.numberToHebrewWords(-n);

    const units = ['אֶפֶס', 'אַחַת', 'שְׁתַּיִם', 'שָׁלוֹשׁ', 'אַרְבַּע', 'חָמֵשׁ', 'שֵׁשׁ', 'שֶׁבַע', 'שְׁמוֹנֶה', 'תֵּשַׁע'];
    const teens = ['עֶשֶׂר', 'אַחַד עָשָׂר', 'שְׁתֵּים עֶשְׂרֵה', 'שְׁלוֹשׁ עֶשְׂרֵה', 'אַרְבַּע עֶשְׂרֵה', 'חֲמֵשׁ עֶשְׂרֵה', 'שֵׁשׁ עֶשְׂרֵה', 'שְׁבַע עֶשְׂרֵה', 'שְׁמוֹנֶה עֶשְׂרֵה', 'תְּשַׁע עֶשְׂרֵה'];
    const tens = ['', '', 'עֶשְׂרִים', 'שְׁלוֹשִׁים', 'אַרְבָּעִים', 'חֲמִשִּׁים', 'שִׁשִּׁים', 'שִׁבְעִים', 'שְׁמוֹנִים', 'תִּשְׁעִים'];
    const hundreds = ['', 'מֵאָה', 'מָאתַיִם', 'שְׁלוֹשׁ מֵאוֹת', 'אַרְבַּע מֵאוֹת', 'חֲמֵשׁ מֵאוֹת', 'שֵׁשׁ מֵאוֹת', 'שְׁבַע מֵאוֹת', 'שְׁמוֹנֶה מֵאוֹת', 'תְּשַׁע מֵאוֹת'];

    if (n < 10) return units[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) {
      const t = Math.floor(n / 10);
      const u = n % 10;
      return u === 0 ? tens[t] : tens[t] + ' וְ' + units[u];
    }
    if (n < 1000) {
      const h = Math.floor(n / 100);
      const rem = n % 100;
      return rem === 0 ? hundreds[h] : hundreds[h] + ' וְ' + this.numberToHebrewWords(rem);
    }
    if (n === 1000) return 'אֶלֶף';
    return String(n);
  }

  cleanTextForHebrewTTS(text) {
    if (!text) return '';
    let t = String(text);

    // 0. Remove HTML tags
    t = t.replace(/<[^>]+>/g, ' ');

    // 1. Universal Phonetic replacement for Ilay -> עִילַאי (with full vocalization for Apple Siri / Carmit & Android)
    // Strip any existing partial nikud first
    t = t.replace(/עִ?ילַ?י|עִ?ילַ?א?י/g, 'עילי');
    const prefixMap = {
      '': 'עִילַאי',
      'ו': 'וְעִילַאי',
      'ל': 'לְעִילַאי',
      'ש': 'שֶׁעִילַאי',
      'מ': 'מֵעִילַאי',
      'ב': 'בְּעִילַאי',
      'וכ': 'וּכְעִילַאי',
      'ול': 'וּלְעִילַאי',
      'וש': 'וְשֶׁעִילַאי'
    };
    t = t.replace(/(^|[^\u0590-\u05FF])(וכ|ול|וש|[ולשמב])?עילי([^\u0590-\u05FF]|$)/g, (match, before, p, after) => {
      const vocalized = prefixMap[p || ''] || (p + 'עִילַאי');
      return before + vocalized + after;
    });

    // 1b. Phonetic replacement for Lia -> לִיָּה
    t = t.replace(/לִ?יָּ?ה/g, 'ליה');
    const liaPrefixMap = {
      '': 'לִיָּה',
      'ו': 'וְלִיָּה',
      'ל': 'לְלִיָּה',
      'ש': 'שֶׁלִּיָּה',
      'מ': 'מִלִּיָּה',
      'ב': 'בְּלִיָּה',
      'ול': 'וּלְלִיָּה'
    };
    t = t.replace(/(^|[^\u0590-\u05FF])(ול|[ולשמב])?ליה([^\u0590-\u05FF]|$)/g, (match, before, p, after) => {
      const vocalized = liaPrefixMap[p || ''] || (p + 'לִיָּה');
      return before + vocalized + after;
    });

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

    // 4. Preposition hyphens before numbers (e.g. ב-25, מ-14, ה-2, ו-3, ל-8) - do this BEFORE math minus!
    t = t.replace(/([במלכוה])-(\d+)/g, (match, prefix, num) => {
      const hebWord = this.numberToHebrewWords(num);
      const prefixVocal = {
        'ב': 'בְּ',
        'מ': 'מִ',
        'ל': 'לְ',
        'כ': 'כְּ',
        'ו': 'וְ',
        'ה': 'הַ'
      }[prefix] || prefix;
      return prefixVocal + hebWord;
    });

    // 5. Mathematical expressions & comparisons
    t = t.replace(/□|\?/g, ' מָה הַתּוֹצָאָה ');
    t = t.replace(/\s*>\s*/g, ' גָּדוֹל מִ ');
    t = t.replace(/\s*<\s*/g, ' קָטָן מִ ');
    t = t.replace(/\bמִ?-\s*/g, ' מִ ');
    t = t.replace(/\s*\+\s*/g, ' וְעוֹד ');
    t = t.replace(/(\d+)\s*[-−]\s*(\d+)/g, '$1 פָּחוֹת $2');
    t = t.replace(/\s*[-−]\s*(?=\d)/g, ' פָּחוֹת ');
    t = t.replace(/\s*[-−]\s*/g, ' פָּחוֹת ');
    t = t.replace(/\s*=\s*/g, ' שָׁוֶה ');
    t = t.replace(/\s*[*×]\s*/g, ' כָּפוּל ');

    // 6. Convert ANY remaining digits into Hebrew words
    t = t.replace(/\b\d+\b/g, (num) => this.numberToHebrewWords(num));

    // 7. Clean punctuation and spaces
    t = t.replace(/\s+/g, ' ').trim();
    return t;
  }

  getBestVoice(lang = 'he-IL') {
    if (!('speechSynthesis' in window)) return null;
    const voices = this.voices.length > 0 ? this.voices : (window.speechSynthesis.getVoices() || []);
    if (voices.length === 0) return null;

    if (lang.startsWith('he') || lang.startsWith('iw')) {
      const heVoices = voices.filter(v => {
        const vl = (v.lang || '').toLowerCase();
        const vn = (v.name || '').toLowerCase();
        return vl.startsWith('he') || vl.startsWith('iw') || vn.includes('hebrew') || vn.includes('carmit') || vn.includes('asaf') || vn.includes('עברית');
      });
      if (heVoices.length === 0) return null;

      // Priority 1: Apple Siri or Enhanced/Premium voices on iOS
      const premium = heVoices.find(v => /siri|enhanced|premium|natural/i.test(v.name));
      if (premium) return premium;

      // Priority 2: Google Hebrew
      const google = heVoices.find(v => /google/i.test(v.name));
      if (google) return google;

      return heVoices[0];
    }

    if (lang.startsWith('en')) {
      const enVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith('en'));
      if (enVoices.length === 0) return null;
      const premium = enVoices.find(v => /siri|samantha|enhanced|premium|natural/i.test(v.name));
      if (premium) return premium;
      const us = enVoices.find(v => /us/i.test(v.lang) || /google/i.test(v.name));
      if (us) return us;
      return enVoices[0];
    }

    return null;
  }

  speak(text, lang = 'he-IL', rate = 0.86) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const isHebrew = lang.startsWith('he') || lang.startsWith('iw');
      const cleanText = isHebrew
        ? this.cleanTextForHebrewTTS(text)
        : String(text).replace(/<[^>]+>/g, '').replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();

      if (!cleanText) return;

      const utter = new SpeechSynthesisUtterance(cleanText);
      utter.lang = lang;
      utter.rate = rate; // Calm, clear pace for 2nd grade
      utter.pitch = 1.05; // Slightly warmer child-friendly pitch

      const voice = this.getBestVoice(lang);
      if (voice) {
        utter.voice = voice;
      } else if (isHebrew) {
        // Enforce he-IL locale on utterance even if voice object is not explicit
        utter.lang = 'he-IL';
      }

      window.speechSynthesis.speak(utter);
    } catch (e) {
      console.warn('TTS error:', e);
    }
  }

  speakBilingual(hebrewText, englishWord, rate = 0.85) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      if (hebrewText) {
        const cleanHeb = this.cleanTextForHebrewTTS(hebrewText);
        if (cleanHeb) {
          const uHeb = new SpeechSynthesisUtterance(cleanHeb);
          uHeb.lang = 'he-IL';
          uHeb.rate = rate;
          uHeb.pitch = 1.06;
          const vHeb = this.getBestVoice('he-IL');
          if (vHeb) uHeb.voice = vHeb;
          window.speechSynthesis.speak(uHeb);
        }
      }
      if (englishWord) {
        const cleanEng = String(englishWord).replace(/<[^>]+>/g, '').replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
        if (cleanEng) {
          const uEng = new SpeechSynthesisUtterance(cleanEng);
          uEng.lang = 'en-US';
          uEng.rate = 0.80;
          uEng.pitch = 1.05;
          const vEng = this.getBestVoice('en-US');
          if (vEng) uEng.voice = vEng;
          window.speechSynthesis.speak(uEng);
        }
      }
    } catch (e) {
      console.warn('Bilingual TTS error:', e);
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
