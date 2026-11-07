// ==================== SOUND, CLOUD + NATIVE HEBREW TTS & CONFETTI ENGINE (v5.0) ====================

class ArcadeAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.voices = [];
    this.activeAudio = null;
    this.ttsQueueId = 0;

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
    this.playTone(523.25, 'triangle', 0.12, 0, 0.2);    // C5
    this.playTone(659.25, 'triangle', 0.12, 0.09, 0.2); // E5
    this.playTone(783.99, 'triangle', 0.15, 0.18, 0.22);// G5
    this.playTone(1046.50, 'sine', 0.35, 0.27, 0.25);   // C6
  }

  playWhistleVictory() {
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

    // 1. Universal Phonetic replacement for Ilay -> עִילַאי
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
    t = t.replace(/[⚽🏆🔥🪙⭐🥅🧤🎙️💡🎯⏱️🦁👑💛🖤🤍💜🎉👟🛡️💎🎩🏃📜🔬🎨🎵🕯️📌✔✖☐•⬅➡⬆⬇]/g, ' ');

    // 3. Common Hebrew abbreviations
    t = t.replace(/\bבית"ר\b/g, 'ביתר ירושלים');
    t = t.replace(/\bבי"ס\b/g, 'בית ספר');
    t = t.replace(/\bאחה"צ\b/g, 'אחר הצהריים');
    t = t.replace(/\bאחה״צ\b/g, 'אחר הצהריים');
    t = t.replace(/\bעמ'\b/g, 'עמוד');
    t = t.replace(/\bדק'\b/g, 'דקות');

    // 4. Preposition hyphens before numbers (e.g. ב-25, מ-14, ה-15)
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
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = this.voices.length > 0 ? this.voices : (window.speechSynthesis.getVoices() || []);
    if (voices.length === 0) return null;

    if (lang.startsWith('he') || lang.startsWith('iw')) {
      const heVoices = voices.filter(v => {
        const vl = (v.lang || '').toLowerCase();
        const vn = (v.name || '').toLowerCase();
        return vl.startsWith('he') || vl.startsWith('iw') || vn.includes('hebrew') || vn.includes('carmit') || vn.includes('asaf') || vn.includes('עברית');
      });
      if (heVoices.length === 0) return null;

      const premium = heVoices.find(v => /siri|enhanced|premium|natural/i.test(v.name));
      if (premium) return premium;

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

  stopAllSpeech() {
    this.ttsQueueId++;
    if (this.activeAudio) {
      try {
        this.activeAudio.pause();
        this.activeAudio.src = '';
      } catch (e) {}
      this.activeAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  // Split text into safe <=165 char chunks at sentence/clause boundaries for Cloud TTS
  splitTextIntoChunks(text, maxLen = 165) {
    const clean = String(text || '').trim();
    if (!clean) return [];
    if (clean.length <= maxLen) return [clean];

    const sentences = clean.split(/(?<=[.!?।:;\n])\s+/);
    const chunks = [];
    let current = '';

    for (const s of sentences) {
      if ((current + ' ' + s).trim().length <= maxLen) {
        current = (current + ' ' + s).trim();
      } else {
        if (current) chunks.push(current);
        if (s.length <= maxLen) {
          current = s;
        } else {
          // Split long sentence by words
          const words = s.split(/\s+/);
          current = '';
          for (const w of words) {
            if ((current + ' ' + w).trim().length <= maxLen) {
              current = (current + ' ' + w).trim();
            } else {
              if (current) chunks.push(current);
              current = w;
            }
          }
        }
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  // Play a sequence of [{ text, tl, rate }] segments using Cloud TTS (with automatic native fallback)
  playSegments(segments) {
    if (!this.enabled || !segments || segments.length === 0) return;
    this.stopAllSpeech();
    const myQueueId = this.ttsQueueId;

    // Expand any long segment into <=165 char chunks
    const expanded = [];
    segments.forEach(seg => {
      const isHeb = seg.lang.startsWith('he') || seg.lang.startsWith('iw');
      const cleaned = isHeb
        ? this.cleanTextForHebrewTTS(seg.text)
        : String(seg.text || '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
      if (!cleaned) return;
      const chunks = this.splitTextIntoChunks(cleaned, 160);
      chunks.forEach(ch => {
        expanded.push({
          text: ch,
          lang: seg.lang,
          tl: isHeb ? 'iw' : 'en',
          rate: seg.rate || (isHeb ? 0.92 : 0.85)
        });
      });
    });

    if (expanded.length === 0) return;

    const playIndex = (idx) => {
      if (myQueueId !== this.ttsQueueId || idx >= expanded.length) return;
      const item = expanded[idx];
      const nativeVoice = this.getBestVoice(item.lang);

      // Prefer native voice ONLY if it actually exists for that language AND is Apple Siri/Carmit or English;
      // On Windows where getBestVoice('he-IL') is null, ALWAYS use Cloud Hebrew MP3 so Hebrew is 100% heard!
      const useCloud = (item.tl === 'iw' && !nativeVoice) || (typeof Audio !== 'undefined' && item.tl === 'iw');

      if (useCloud && typeof Audio !== 'undefined') {
        try {
          const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=${item.tl}&q=${encodeURIComponent(item.text)}`;
          const audio = new Audio();
          audio.referrerPolicy = 'no-referrer';
          audio.src = url;
          audio.playbackRate = Math.max(0.65, Math.min(1.25, item.rate ? item.rate * 1.06 : 1.0));
          this.activeAudio = audio;

          audio.onended = () => {
            if (myQueueId !== this.ttsQueueId) return;
            playIndex(idx + 1);
          };
          audio.onerror = () => {
            if (myQueueId !== this.ttsQueueId) return;
            this.speakNativeSingle(item, () => playIndex(idx + 1), myQueueId);
          };

          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
              if (myQueueId !== this.ttsQueueId) return;
              this.speakNativeSingle(item, () => playIndex(idx + 1), myQueueId);
            });
          }
          return;
        } catch (e) {
          // Fall through to native speechSynthesis
        }
      }

      this.speakNativeSingle(item, () => playIndex(idx + 1), myQueueId);
    };

    playIndex(0);
  }

  speakNativeSingle(item, onDone, queueId) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onDone) onDone();
      return;
    }
    try {
      const utter = new SpeechSynthesisUtterance(item.text);
      utter.lang = item.lang;
      utter.rate = item.rate || 0.86;
      utter.pitch = 1.05;
      const v = this.getBestVoice(item.lang);
      if (v) utter.voice = v;
      utter.onend = () => {
        if (queueId === this.ttsQueueId && onDone) onDone();
      };
      utter.onerror = () => {
        if (queueId === this.ttsQueueId && onDone) onDone();
      };
      window.speechSynthesis.speak(utter);
    } catch (e) {
      if (onDone) onDone();
    }
  }

  speak(text, lang = 'he-IL', rate = 0.88) {
    if (!text) return;
    this.playSegments([{ text, lang, rate }]);
  }

  speakBilingual(hebrewText, englishWord, rate = 0.88) {
    const segs = [];
    if (hebrewText) {
      segs.push({ text: hebrewText, lang: 'he-IL', rate });
    }
    if (englishWord) {
      segs.push({ text: englishWord, lang: 'en-US', rate: 0.82 });
    }
    this.playSegments(segs);
  }
}

const arcadeAudio = new ArcadeAudio();

// ==================== CONFETTI ENGINE ====================
class ConfettiManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 75) {
    if (!this.ctx) return;
    const colors = ['#FFD700', '#111111', '#FFFFFF', '#00529F', '#00E676', '#FF3D00'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.35,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.85) * 17,
        size: Math.random() * 9 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 14,
        life: 1
      });
    }
    if (!this.animating) {
      this.animating = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.42; // gravity
      p.rot += p.vRot;
      p.life -= 0.013;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rot * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      this.ctx.restore();
    });

    this.particles = this.particles.filter((p) => p.life > 0 && p.y < this.canvas.height + 40);

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.animating = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

let confetti;
document.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiManager('confetti-canvas');
});
