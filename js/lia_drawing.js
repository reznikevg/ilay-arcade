// ==================== LIA'S ULTRA-FUN MAGICAL DRAWING PLAYGROUND (AGE 5) ====================
// Inspired by Sago Mini, Crayola Create & Play, Kandinsky Musical Draw & Glow Kaleidoscope:
// - Musical pentatonic chimes while drawing!
// - Soap Bubbles Brush, Flower/Heart Trail Brush, Rainbow Brush, Neon Glow, 6-Way Kaleidoscope,
//   Magic Scratch Surprise, Connect-the-Dots, Step-by-Step "How to Draw" Guides & Princess Frame!

let liaDrawState = {
  mode: 'free', // 'free' | 'glow' | 'symmetry' | 'scratch' | 'guided' | 'dots'
  brushType: 'rainbow', // 'color' | 'rainbow' | 'bubbles' | 'trail' | 'stamp' | 'eraser'
  color: '#ec4899',
  size: 12,
  stamp: '🦄',
  trailSet: ['🌸', '🌺', '🌼', '🌷'],
  rainbowHue: 0,
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  lastNoteTime: 0,
  noteIdx: 0,
  history: [],
  guidedIdx: 0,
  guidedStep: 0,
  dotsTemplateIdx: 0,
  dotsNextNum: 1
};

const LIA_DRAW_COLORS = [
  { hex: '#ec4899', name: 'ורוד' },
  { hex: '#8b5cf6', name: 'סגול' },
  { hex: '#ef4444', name: 'אדום' },
  { hex: '#f97316', name: 'כתום' },
  { hex: '#facc15', name: 'צהוב' },
  { hex: '#22c55e', name: 'ירוק' },
  { hex: '#38bdf8', name: 'תכלת' },
  { hex: '#0f172a', name: 'שחור' }
];

const LIA_DRAW_STAMPS = ['🦄', '🦋', '🌸', '👑', '❤️', '🌈', '🐶', '🍦', '🧚‍♀️', '⭐'];

const LIA_GUIDED_DRAWINGS = [
  {
    name: '🦋 פרפר שמח',
    steps: [
      { tip: 'שלב 1: ציירי גוף מאורך באמצע!', draw: (ctx) => { ctx.ellipse(180, 160, 14, 52, 0, 0, Math.PI * 2); } },
      { tip: 'שלב 2: ציירי שתי כנפיים גדולות בצד ימין ושמאל!', draw: (ctx) => { ctx.ellipse(115, 130, 52, 42, -0.3, 0, Math.PI * 2); ctx.moveTo(297, 130); ctx.ellipse(245, 130, 52, 42, 0.3, 0, Math.PI * 2); } },
      { tip: 'שלב 3: ציירי מחושים וחיוך חמוד!', draw: (ctx) => { ctx.moveTo(172, 108); ctx.quadraticCurveTo(155, 70, 140, 75); ctx.moveTo(188, 108); ctx.quadraticCurveTo(205, 70, 220, 75); } }
    ]
  },
  {
    name: '🍦 גביע גלידה',
    steps: [
      { tip: 'שלב 1: ציירי משולש הפוך לגביע הגלידה!', draw: (ctx) => { ctx.moveTo(130, 145); ctx.lineTo(230, 145); ctx.lineTo(180, 265); ctx.closePath(); } },
      { tip: 'שלב 2: ציירי כדור גלידה עגול וטעים למעלה!', draw: (ctx) => { ctx.arc(180, 115, 50, Math.PI, 0, false); } },
      { tip: 'שלב 3: הוסיפי דובדבן מתוק למעלה!', draw: (ctx) => { ctx.arc(180, 55, 14, 0, Math.PI * 2); } }
    ]
  },
  {
    name: '🌸 פרח מחייך',
    steps: [
      { tip: 'שלב 1: ציירי עיגול באמצע הפרח!', draw: (ctx) => { ctx.arc(180, 135, 32, 0, Math.PI * 2); } },
      { tip: 'שלב 2: ציירי עלי כותרת סביב העיגול!', draw: (ctx) => { for (let a = 0; a < 6; a++) { const ang = (a * Math.PI) / 3; ctx.moveTo(180 + Math.cos(ang) * 58 + 24, 135 + Math.sin(ang) * 58); ctx.arc(180 + Math.cos(ang) * 58, 135 + Math.sin(ang) * 58, 24, 0, Math.PI * 2); } } },
      { tip: 'שלב 3: ציירי גבעול ירוק למטה!', draw: (ctx) => { ctx.moveTo(180, 215); ctx.lineTo(180, 290); } }
    ]
  }
];

const LIA_DOT_TEMPLATES = [
  {
    name: '❤️ לֵב קָסוּם',
    speak: 'בואי נחבר את הנקודות מאחת עד שש ונצייר לב!',
    points: [
      { n: 1, x: 180, y: 110 },
      { n: 2, x: 250, y: 65 },
      { n: 3, x: 305, y: 125 },
      { n: 4, x: 180, y: 255 },
      { n: 5, x: 55, y: 125 },
      { n: 6, x: 110, y: 65 }
    ],
    closeLoop: true
  },
  {
    name: '⭐ כּוֹכָב נוֹצֵץ',
    speak: 'בואי נחבר מאחת עד חמש ונצייר כוכב!',
    points: [
      { n: 1, x: 180, y: 45 },
      { n: 2, x: 245, y: 245 },
      { n: 3, x: 80, y: 125 },
      { n: 4, x: 280, y: 125 },
      { n: 5, x: 115, y: 245 }
    ],
    closeLoop: true
  },
  {
    name: '👑 כֶּתֶר נְסִיכָה',
    speak: 'בואי נחבר מאחת עד שבע ונצייר כתר!',
    points: [
      { n: 1, x: 75, y: 220 },
      { n: 2, x: 75, y: 100 },
      { n: 3, x: 130, y: 155 },
      { n: 4, x: 180, y: 80 },
      { n: 5, x: 230, y: 155 },
      { n: 6, x: 285, y: 100 },
      { n: 7, x: 285, y: 220 }
    ],
    closeLoop: true
  }
];

function playMusicalBrushNote() {
  const now = Date.now();
  if (now - liaDrawState.lastNoteTime < 130) return;
  liaDrawState.lastNoteTime = now;
  try {
    if (typeof arcadeAudio !== 'undefined' && !arcadeAudio.muted && arcadeAudio.ctx) {
      if (arcadeAudio.ctx.state === 'suspended') arcadeAudio.ctx.resume();
      const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
      const freq = pentatonic[liaDrawState.noteIdx % pentatonic.length];
      liaDrawState.noteIdx++;
      const osc = arcadeAudio.ctx.createOscillator();
      const gain = arcadeAudio.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, arcadeAudio.ctx.currentTime);
      gain.gain.setValueAtTime(0.05, arcadeAudio.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, arcadeAudio.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(arcadeAudio.ctx.destination);
      osc.start();
      osc.stop(arcadeAudio.ctx.currentTime + 0.14);
    }
  } catch (e) {}
}

function startLiaDrawingStudio() {
  if (typeof switchView === 'function') switchView('lia-drawing');
  setTimeout(() => {
    initLiaDrawCanvas();
    renderLiaDrawToolbar();
    clearLiaDrawCanvas(true);
    renderLiaDrawGallery();
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.speak('איזה כיף! ברוכה הבאה לסטודיו הציור המוזיקלי של ליה! בחרי קשת, בועות סבון, פרחים או מנדלה!', 'he-IL', 0.88);
    }
  }, 60);
}

function getLiaDrawCanvas() {
  return document.getElementById('lia-draw-canvas');
}

function initLiaDrawCanvas() {
  const canvas = getLiaDrawCanvas();
  if (!canvas || canvas.dataset.bound === '1') return;
  canvas.dataset.bound = '1';

  const getCoords = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height
    };
  };

  const onDown = (e) => {
    e.preventDefault();
    const pt = getCoords(e);

    if (liaDrawState.mode === 'dots') {
      handleLiaDotTap(pt.x, pt.y);
      return;
    }

    if (liaDrawState.brushType === 'stamp' && liaDrawState.mode !== 'scratch') {
      saveLiaDrawSnapshot();
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.shadowBlur = liaDrawState.mode === 'glow' ? 16 : 4;
      ctx.shadowColor = 'rgba(250,204,21,0.7)';
      ctx.font = '46px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(liaDrawState.stamp, pt.x, pt.y);
      ctx.restore();
      if (typeof arcadeAudio !== 'undefined') arcadeAudio.playMagicSparkle();
      return;
    }

    saveLiaDrawSnapshot();
    liaDrawState.isDrawing = true;
    liaDrawState.lastX = pt.x;
    liaDrawState.lastY = pt.y;
    drawLiaStroke(pt.x, pt.y, pt.x + 0.1, pt.y + 0.1);
  };

  const onMove = (e) => {
    if (!liaDrawState.isDrawing) return;
    e.preventDefault();
    const pt = getCoords(e);
    drawLiaStroke(liaDrawState.lastX, liaDrawState.lastY, pt.x, pt.y);
    liaDrawState.lastX = pt.x;
    liaDrawState.lastY = pt.y;
  };

  const onUp = () => {
    liaDrawState.isDrawing = false;
  };

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);

  canvas.addEventListener('touchstart', onDown, { passive: false });
  canvas.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);
}

function saveLiaDrawSnapshot() {
  const canvas = getLiaDrawCanvas();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  liaDrawState.history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  if (liaDrawState.history.length > 15) liaDrawState.history.shift();
}

function undoLiaDraw() {
  const canvas = getLiaDrawCanvas();
  if (!canvas || liaDrawState.history.length === 0) return;
  const ctx = canvas.getContext('2d');
  const prev = liaDrawState.history.pop();
  ctx.putImageData(prev, 0, 0);
  if (typeof arcadeAudio !== 'undefined') arcadeAudio.playClick();
}

function getStrokeColorForMode() {
  if (liaDrawState.brushType === 'eraser') {
    return liaDrawState.mode === 'glow' || liaDrawState.mode === 'symmetry' ? '#090d16' : '#ffffff';
  }
  if (liaDrawState.mode === 'scratch' || liaDrawState.brushType === 'rainbow' || liaDrawState.mode === 'symmetry') {
    liaDrawState.rainbowHue = (liaDrawState.rainbowHue + 7) % 360;
    return `hsl(${liaDrawState.rainbowHue}, 94%, 58%)`;
  }
  return liaDrawState.color;
}

function drawLiaStroke(x1, y1, x2, y2) {
  const canvas = getLiaDrawCanvas();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const strokeCol = getStrokeColorForMode();

  if (liaDrawState.brushType !== 'eraser') {
    playMusicalBrushNote();
  }

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = strokeCol;

  // Magic Scratch Foil Mode
  if (liaDrawState.mode === 'scratch') {
    ctx.lineWidth = 24;
    ctx.shadowBlur = 8;
    ctx.shadowColor = strokeCol;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (Math.random() < 0.14) {
      const surprises = ['✨', '🦄', '🌸', '⭐', '💖'];
      ctx.font = '20px serif';
      ctx.fillText(surprises[Math.floor(Math.random() * surprises.length)], x2, y2);
    }
    ctx.restore();
    return;
  }

  // Soap Bubbles Brush
  if (liaDrawState.brushType === 'bubbles') {
    if (Math.hypot(x2 - x1, y2 - y1) > 4 || Math.random() < 0.4) {
      const r = 8 + Math.random() * 14;
      const hue = Math.floor(Math.random() * 360);
      ctx.beginPath();
      ctx.arc(x2 + (Math.random() - 0.5) * 18, y2 + (Math.random() - 0.5) * 18, r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${hue}, 90%, 75%, 0.35)`;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = `hsla(${hue}, 95%, 60%, 0.85)`;
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  // Pattern Trail Brush (Flowers & Hearts!)
  if (liaDrawState.brushType === 'trail') {
    if (Math.hypot(x2 - x1, y2 - y1) > 10 || Math.random() < 0.35) {
      const icon = liaDrawState.trailSet[Math.floor(Math.random() * liaDrawState.trailSet.length)];
      ctx.font = `${18 + Math.floor(Math.random() * 12)}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(icon, x2 + (Math.random() - 0.5) * 16, y2 + (Math.random() - 0.5) * 16);
    }
    ctx.restore();
    return;
  }

  // Glow / Symmetry
  if (liaDrawState.mode === 'glow') {
    ctx.lineWidth = liaDrawState.brushType === 'eraser' ? 24 : liaDrawState.size + 3;
    ctx.shadowBlur = liaDrawState.brushType === 'eraser' ? 0 : 20;
    ctx.shadowColor = strokeCol;
  } else {
    ctx.lineWidth = liaDrawState.brushType === 'eraser' ? liaDrawState.size * 2 : liaDrawState.size;
  }

  if (liaDrawState.mode === 'symmetry') {
    // 6-way spinning Kaleidoscope mirror!
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = strokeCol;
    const dx1 = x1 - cx, dy1 = y1 - cy;
    const dx2 = x2 - cx, dy2 = y2 - cy;
    for (let k = 0; k < 6; k++) {
      const ang = (k * Math.PI) / 3;
      const cos = Math.cos(ang), sin = Math.sin(ang);
      const rx1 = cx + dx1 * cos - dy1 * sin;
      const ry1 = cy + dx1 * sin + dy1 * cos;
      const rx2 = cx + dx2 * cos - dy2 * sin;
      const ry2 = cy + dx2 * sin + dy2 * cos;
      ctx.beginPath();
      ctx.moveTo(rx1, ry1);
      ctx.lineTo(rx2, ry2);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function setLiaDrawMode(mode) {
  liaDrawState.mode = mode;
  liaDrawState.history = [];
  if (mode === 'glow' || mode === 'symmetry') {
    liaDrawState.brushType = 'rainbow';
  }
  clearLiaDrawCanvas(true);
  renderLiaDrawToolbar();
  const hints = {
    free: 'ציור חופשי עם מברשות מוזיקליות, בועות סבון ופרחים!',
    glow: 'ניאון זוהר בחושך! כל קו מאיר כמו שרביט קסמים!',
    symmetry: 'מנדלה קסומה! ציירי קו אחד ותראי פרח קסום מסתובב!',
    scratch: 'דף גירוד עם הפתעות! גרדי ותגלי צבעי קשת וחד-קרן!',
    guided: LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx].steps[0].tip,
    dots: LIA_DOT_TEMPLATES[liaDrawState.dotsTemplateIdx].speak
  };
  if (typeof arcadeAudio !== 'undefined' && hints[mode]) {
    arcadeAudio.speak(hints[mode], 'he-IL', 0.88);
  }
}

function nextGuidedDrawStep() {
  const tpl = LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx];
  liaDrawState.guidedStep++;
  if (liaDrawState.guidedStep >= tpl.steps.length) {
    liaDrawState.guidedIdx = (liaDrawState.guidedIdx + 1) % LIA_GUIDED_DRAWINGS.length;
    liaDrawState.guidedStep = 0;
    clearLiaDrawCanvas(true);
  } else {
    const canvas = getLiaDrawCanvas();
    if (canvas) drawGuidedStepOverlay(canvas.getContext('2d'));
  }
  renderLiaDrawToolbar();
  const curTpl = LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx];
  const tip = curTpl.steps[liaDrawState.guidedStep].tip;
  if (typeof arcadeAudio !== 'undefined') arcadeAudio.speak(tip, 'he-IL', 0.88);
}

function drawGuidedStepOverlay(ctx) {
  const tpl = LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx];
  if (!tpl) return;
  ctx.save();
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 4;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  tpl.steps[liaDrawState.guidedStep].draw(ctx);
  ctx.stroke();
  ctx.restore();
}

function clearLiaDrawCanvas(keepModeOverlay = false) {
  const canvas = getLiaDrawCanvas();
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (liaDrawState.mode === 'glow' || liaDrawState.mode === 'symmetry') {
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (liaDrawState.mode === 'symmetry') {
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      const cx = canvas.width / 2, cy = canvas.height / 2;
      for (let k = 0; k < 6; k++) {
        const ang = (k * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * 200, cy + Math.sin(ang) * 200);
        ctx.stroke();
      }
      ctx.restore();
    }
  } else if (liaDrawState.mode === 'scratch') {
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#1e1b4b');
    grad.addColorStop(1, '#3b0764');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🪄 גרדי כאן עם האצבע ותגלי הפתעות!', canvas.width / 2, 28);
    ctx.restore();
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (keepModeOverlay) {
    if (liaDrawState.mode === 'guided') {
      drawGuidedStepOverlay(ctx);
    } else if (liaDrawState.mode === 'dots') {
      liaDrawState.dotsNextNum = 1;
      drawLiaDotsOverlay(ctx);
    }
  }
}

function drawLiaDotsOverlay(ctx) {
  const tpl = LIA_DOT_TEMPLATES[liaDrawState.dotsTemplateIdx];
  if (!tpl) return;
  ctx.save();
  tpl.points.forEach(p => {
    const isDone = p.n < liaDrawState.dotsNextNum;
    const isNext = p.n === liaDrawState.dotsNextNum;
    ctx.beginPath();
    ctx.arc(p.x, p.y, isNext ? 20 : 16, 0, Math.PI * 2);
    ctx.fillStyle = isDone ? '#10b981' : isNext ? '#facc15' : '#e0f2fe';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = isDone ? '#047857' : isNext ? '#ca8a04' : '#0284c7';
    ctx.stroke();

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(p.n), p.x, p.y);
  });
  ctx.restore();
}

function handleLiaDotTap(x, y) {
  const tpl = LIA_DOT_TEMPLATES[liaDrawState.dotsTemplateIdx];
  if (!tpl) return;
  const targetPt = tpl.points.find(p => p.n === liaDrawState.dotsNextNum);
  if (!targetPt) return;

  const dist = Math.hypot(x - targetPt.x, y - targetPt.y);
  if (dist <= 36) {
    const canvas = getLiaDrawCanvas();
    const ctx = canvas.getContext('2d');
    if (liaDrawState.dotsNextNum > 1) {
      const prevPt = tpl.points.find(p => p.n === liaDrawState.dotsNextNum - 1);
      ctx.beginPath();
      ctx.moveTo(prevPt.x, prevPt.y);
      ctx.lineTo(targetPt.x, targetPt.y);
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playCombo(liaDrawState.dotsNextNum);
      arcadeAudio.speak(String(liaDrawState.dotsNextNum), 'he-IL', 0.95);
    }

    liaDrawState.dotsNextNum++;
    if (liaDrawState.dotsNextNum > tpl.points.length) {
      if (tpl.closeLoop) {
        const first = tpl.points[0];
        ctx.beginPath();
        ctx.moveTo(targetPt.x, targetPt.y);
        ctx.lineTo(first.x, first.y);
        ctx.strokeStyle = '#ec4899';
        ctx.lineWidth = 6;
        ctx.stroke();
      }
      drawLiaDotsOverlay(ctx);
      if (typeof arcadeAudio !== 'undefined') {
        arcadeAudio.playWhistleVictory();
        arcadeAudio.speak(`כל הכבוד ליה! ציירת ${tpl.name}!`, 'he-IL', 0.9);
      }
      if (typeof confetti !== 'undefined') confetti.burst(110);
      if (typeof addActiveCoins === 'function') addActiveCoins(15);
      if (typeof updateHeaderUI === 'function') updateHeaderUI();
      if (typeof saveState === 'function') saveState();
      liaDrawState.dotsTemplateIdx = (liaDrawState.dotsTemplateIdx + 1) % LIA_DOT_TEMPLATES.length;
    } else {
      drawLiaDotsOverlay(ctx);
    }
  }
}

function addLiaPrincessFrame() {
  const canvas = getLiaDrawCanvas();
  if (!canvas) return;
  saveLiaDrawSnapshot();
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.save();
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 8;
  ctx.strokeRect(4, 4, w - 8, h - 8);
  const decors = ['👑', '💖', '⭐', '🌸', '🦋'];
  ctx.font = '20px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let x = 22; x < w - 15; x += 48) {
    ctx.fillText(decors[Math.floor(x / 48) % decors.length], x, 18);
    ctx.fillText(decors[Math.floor(x / 48) % decors.length], x, h - 18);
  }
  ctx.restore();
  if (typeof arcadeAudio !== 'undefined') arcadeAudio.playMagicSparkle();
}

function saveLiaDrawingToGallery() {
  const canvas = getLiaDrawCanvas();
  if (!canvas) return;
  try {
    const dataUrl = canvas.toDataURL('image/png');
    const key = 'lia_draw_gallery_v1';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.unshift(dataUrl);
    if (existing.length > 6) existing.pop();
    localStorage.setItem(key, JSON.stringify(existing));
    renderLiaDrawGallery();
  } catch (e) {}
}

function renderLiaDrawGallery() {
  const gal = document.getElementById('lia-draw-gallery');
  if (!gal) return;
  try {
    const items = JSON.parse(localStorage.getItem('lia_draw_gallery_v1') || '[]');
    if (items.length === 0) {
      gal.innerHTML = '';
      return;
    }
    gal.innerHTML = `
      <div style="font-size:0.86rem;font-weight:900;color:#831843;margin-bottom:6px;">🖼️ הַצִּיּוּרִים הַשְּׁמוּרִים שֶׁל לִיָּה:</div>
      <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;">
        ${items.map(src => `<img src="${src}" style="width:86px;height:66px;object-fit:cover;border-radius:10px;border:2px solid #f472b6;background:#fff;" alt="ציור של ליה"/>`).join('')}
      </div>
    `;
  } catch (e) {}
}

function finishLiaDrawingArtwork() {
  saveLiaDrawingToGallery();
  if (typeof arcadeAudio !== 'undefined') {
    arcadeAudio.playWhistleVictory();
    arcadeAudio.speak('וואו ליה! איזה ציור מהמם של אמנית אמיתית! שמרנו אותו בגלריה וקיבלת עשרים מטבעות זהב!', 'he-IL', 0.9);
  }
  if (typeof confetti !== 'undefined') confetti.burst(130);
  if (typeof addActiveCoins === 'function') addActiveCoins(20);
  if (typeof updateHeaderUI === 'function') updateHeaderUI();
  if (typeof saveState === 'function') saveState(true);
  const fb = document.getElementById('lia-draw-fb');
  if (fb) {
    fb.className = 'feedback-banner success';
    fb.textContent = '🎨🌟 וואו ליה האמנית! הציור נשמר בגלריה + קיבלת +20 🪙!';
  }
}

function renderLiaDrawToolbar() {
  const modeBar = document.getElementById('lia-draw-modes');
  const colorBar = document.getElementById('lia-draw-colors');
  const stampBar = document.getElementById('lia-draw-stamps');

  if (modeBar) {
    modeBar.innerHTML = `
      <button type="button" class="cat-tab ${liaDrawState.mode === 'free' ? 'active' : ''}" onclick="setLiaDrawMode('free')">🖌️ חופשי</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'glow' ? 'active' : ''}" onclick="setLiaDrawMode('glow')">🌟 ניאון</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'symmetry' ? 'active' : ''}" onclick="setLiaDrawMode('symmetry')">🦋 מנדלה</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'scratch' ? 'active' : ''}" onclick="setLiaDrawMode('scratch')">🪄 גירוד</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'guided' ? 'active' : ''}" onclick="setLiaDrawMode('guided')">📖 צעד-צעד</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'dots' ? 'active' : ''}" onclick="setLiaDrawMode('dots')">🔢 נקודות</button>
    `;
  }

  if (colorBar) {
    const guidedBanner = liaDrawState.mode === 'guided' ? `
      <div style="width:100%;background:#fef9c3;border:2px solid #facc15;border-radius:12px;padding:6px 10px;display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:0.84rem;font-weight:900;color:#854d0e;">${LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx].name}: ${LIA_GUIDED_DRAWINGS[liaDrawState.guidedIdx].steps[liaDrawState.guidedStep].tip}</span>
        <button type="button" class="btn-chip" onclick="nextGuidedDrawStep()" style="background:#eab308;color:#fff;font-weight:900;border:none;">צעד הבא ➡️</button>
      </div>
    ` : '';

    const colorBtns = LIA_DRAW_COLORS.map(c => `
      <button type="button" title="${c.name}" onclick="liaDrawState.brushType='color';liaDrawState.color='${c.hex}';renderLiaDrawToolbar();" style="width:32px;height:32px;border-radius:50%;background:${c.hex};border:${liaDrawState.brushType === 'color' && liaDrawState.color === c.hex ? '3.5px solid #0f172a' : '2px solid #fff'};box-shadow:0 2px 6px rgba(0,0,0,0.22);cursor:pointer;"></button>
    `).join('');

    colorBar.innerHTML = guidedBanner + `
      ${colorBtns}
      <button type="button" onclick="liaDrawState.brushType='rainbow';renderLiaDrawToolbar();" style="padding:6px 10px;border-radius:99px;background:linear-gradient(90deg,#ef4444,#facc15,#22c55e,#3b82f6,#a855f7);color:#fff;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'rainbow' ? '3px solid #0f172a' : 'none'};cursor:pointer;">🌈 קשת</button>
      <button type="button" onclick="liaDrawState.brushType='bubbles';renderLiaDrawToolbar();" style="padding:6px 10px;border-radius:99px;background:#e0f2fe;color:#0369a1;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'bubbles' ? '3px solid #0f172a' : '1.5px solid #38bdf8'};cursor:pointer;">🫧 בועות</button>
      <button type="button" onclick="liaDrawState.brushType='trail';liaDrawState.trailSet=['🌸','🌺','🌼','🌷'];renderLiaDrawToolbar();" style="padding:6px 10px;border-radius:99px;background:#fce7f3;color:#9d174d;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'trail' ? '3px solid #0f172a' : '1.5px solid #f472b6'};cursor:pointer;">🌸 פרחים</button>
      <button type="button" onclick="addLiaPrincessFrame()" style="padding:6px 10px;border-radius:99px;background:#fef08a;color:#854d0e;font-weight:900;font-size:0.78rem;border:1.5px solid #eab308;cursor:pointer;">👑 מסגרת</button>
      <button type="button" onclick="liaDrawState.brushType='eraser';renderLiaDrawToolbar();" style="padding:6px 10px;border-radius:99px;background:#f1f5f9;color:#0f172a;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'eraser' ? '3px solid #0f172a' : '1.5px solid #cbd5e1'};cursor:pointer;">⬜ מחק</button>
    `;
  }

  if (stampBar) {
    stampBar.innerHTML = LIA_DRAW_STAMPS.map(st => `
      <button type="button" onclick="liaDrawState.brushType='stamp';liaDrawState.stamp='${st}';renderLiaDrawToolbar();" style="font-size:1.55rem;padding:4px 8px;border-radius:12px;background:${liaDrawState.brushType === 'stamp' && liaDrawState.stamp === st ? '#fde047' : '#ffffff'};border:2px solid ${liaDrawState.brushType === 'stamp' && liaDrawState.stamp === st ? '#ca8a04' : '#e2e8f0'};cursor:pointer;">${st}</button>
    `).join('');
  }
}
