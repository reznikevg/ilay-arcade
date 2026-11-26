// ==================== LIA'S MAGICAL 5-IN-1 FINGER-DRAWING STUDIO (AGE 5) ====================
// Inspired by top-rated kids drawing apps:
// 1. Free Draw (Rainbow, Glitter Sparkles, Crayons & Stamps)
// 2. Neon Glow Art (Glowing light lines on deep midnight canvas)
// 3. Symmetry Mandala / Kaleidoscope (4-way mirror magic!)
// 4. Magic Scratch Art (Scratch away dark foil to reveal glowing rainbow underneath!)
// 5. Connect-the-Dots & Trace Shapes + Auto-Save Gallery!

let liaDrawState = {
  mode: 'free', // 'free' | 'glow' | 'symmetry' | 'scratch' | 'dots'
  brushType: 'color', // 'color' | 'rainbow' | 'sparkle' | 'stamp' | 'eraser'
  color: '#ec4899',
  size: 10,
  stamp: '🦄',
  rainbowHue: 0,
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  history: [],
  dotsTemplateIdx: 0,
  dotsNextNum: 1
};

const LIA_DRAW_COLORS = [
  { hex: '#ec4899', name: 'ורוד' },
  { hex: '#8b5cf6', name: 'סגול' },
  { hex: '#ef4444', name: 'אדום' },
  { hex: '#facc15', name: 'צהוב' },
  { hex: '#22c55e', name: 'ירוק' },
  { hex: '#38bdf8', name: 'תכלת' },
  { hex: '#0f172a', name: 'שחור' }
];

const LIA_DRAW_STAMPS = ['🦄', '🦋', '🌸', '👑', '❤️', '🌈', '🐶', '🍦'];

const LIA_DOT_TEMPLATES = [
  {
    name: '❤️ לֵב קָסוּם',
    speak: 'בואי נחבר את הנקודות מאחת עד שש ונצייר לב!',
    points: [
      { n: 1, x: 180, y: 95 },
      { n: 2, x: 245, y: 55 },
      { n: 3, x: 300, y: 110 },
      { n: 4, x: 180, y: 225 },
      { n: 5, x: 60, y: 110 },
      { n: 6, x: 115, y: 55 }
    ],
    closeLoop: true
  },
  {
    name: '⭐ כּוֹכָב נוֹצֵץ',
    speak: 'בואי נחבר מאחת עד חמש ונצייר כוכב!',
    points: [
      { n: 1, x: 180, y: 40 },
      { n: 2, x: 240, y: 215 },
      { n: 3, x: 85, y: 110 },
      { n: 4, x: 275, y: 110 },
      { n: 5, x: 120, y: 215 }
    ],
    closeLoop: true
  },
  {
    name: '🏠 בַּיִת חָמוּד',
    speak: 'בואי נחבר מאחת עד חמש ונצייר בית!',
    points: [
      { n: 1, x: 100, y: 215 },
      { n: 2, x: 100, y: 120 },
      { n: 3, x: 180, y: 50 },
      { n: 4, x: 260, y: 120 },
      { n: 5, x: 260, y: 215 }
    ],
    closeLoop: true
  }
];

function startLiaDrawingStudio() {
  if (typeof switchView === 'function') switchView('lia-drawing');
  setTimeout(() => {
    initLiaDrawCanvas();
    renderLiaDrawToolbar();
    clearLiaDrawCanvas(true);
    renderLiaDrawGallery();
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.speak('ברוכה הבאה לסטודיו הציור של ליה! יש כאן ציור חופשי, ניאון זוהר, מנדלה, דף גירוד וחיבור נקודות!', 'he-IL', 0.88);
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
      ctx.shadowBlur = liaDrawState.mode === 'glow' ? 14 : 0;
      ctx.shadowColor = '#facc15';
      ctx.font = '44px serif';
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
  if (liaDrawState.mode === 'scratch') {
    // Vibrant rainbow reveal on scratch foil!
    liaDrawState.rainbowHue = (liaDrawState.rainbowHue + 5) % 360;
    return `hsl(${liaDrawState.rainbowHue}, 95%, 60%)`;
  }
  if (liaDrawState.brushType === 'rainbow' || liaDrawState.brushType === 'sparkle' || liaDrawState.mode === 'symmetry') {
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

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = strokeCol;

  if (liaDrawState.mode === 'scratch') {
    ctx.lineWidth = 22;
    ctx.shadowBlur = 6;
    ctx.shadowColor = strokeCol;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (Math.random() < 0.25) {
      ctx.font = '14px serif';
      ctx.fillText('✨', x2 + (Math.random() - 0.5) * 14, y2 + (Math.random() - 0.5) * 14);
    }
    ctx.restore();
    return;
  }

  if (liaDrawState.mode === 'glow') {
    ctx.lineWidth = liaDrawState.brushType === 'eraser' ? 24 : liaDrawState.size + 2;
    ctx.shadowBlur = liaDrawState.brushType === 'eraser' ? 0 : 18;
    ctx.shadowColor = strokeCol;
  } else {
    ctx.lineWidth = liaDrawState.brushType === 'eraser' ? liaDrawState.size * 2 : liaDrawState.size;
  }

  if (liaDrawState.mode === 'symmetry') {
    // 4-way kaleidoscope mirror!
    const w = canvas.width;
    const h = canvas.height;
    ctx.shadowBlur = 12;
    ctx.shadowColor = strokeCol;
    const pairs = [
      [x1, y1, x2, y2],
      [w - x1, y1, w - x2, y2],
      [x1, h - y1, x2, h - y2],
      [w - x1, h - y1, w - x2, h - y2]
    ];
    pairs.forEach(([ax, ay, bx, by]) => {
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    });
    ctx.restore();
    return;
  }

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  if (liaDrawState.brushType === 'sparkle') {
    if (Math.random() < 0.45) {
      const ox = (Math.random() - 0.5) * 26;
      const oy = (Math.random() - 0.5) * 26;
      ctx.font = `${10 + Math.floor(Math.random() * 10)}px serif`;
      ctx.fillText(Math.random() < 0.5 ? '✨' : '⭐', x2 + ox, y2 + oy);
    }
  }
  ctx.restore();
}

function setLiaDrawMode(mode) {
  liaDrawState.mode = mode;
  liaDrawState.history = [];
  clearLiaDrawCanvas(true);
  renderLiaDrawToolbar();
  const hints = {
    free: 'ציור חופשי! ציירי עם צבעים, קשת וחותמות!',
    glow: 'מצב ניאון זוהר! כל קו מאיר בחושך כמו קסם!',
    symmetry: 'מראת קסם! ציירי בצד אחד ותראי מנדלה מושלמת!',
    scratch: 'דף גירוד קסום! גרדי עם האצבע ותגלי צבעי קשת!',
    dots: LIA_DOT_TEMPLATES[liaDrawState.dotsTemplateIdx].speak
  };
  if (typeof arcadeAudio !== 'undefined' && hints[mode]) {
    arcadeAudio.speak(hints[mode], 'he-IL', 0.88);
  }
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
      ctx.strokeStyle = 'rgba(255,255,255,0.16)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      ctx.restore();
    }
  } else if (liaDrawState.mode === 'scratch') {
    // Dark purple-black scratch foil!
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#1e1b4b');
    grad.addColorStop(1, '#312e81');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🪄 גרדי כאן עם האצבע כדי לגלות קשת!', canvas.width / 2, 28);
    ctx.restore();
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (keepModeOverlay && liaDrawState.mode === 'dots') {
    liaDrawState.dotsNextNum = 1;
    drawLiaDotsOverlay(ctx);
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
  if (dist <= 34) {
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
        ${items.map(src => `<img src="${src}" style="width:82px;height:58px;object-fit:cover;border-radius:10px;border:2px solid #f472b6;background:#fff;" alt="ציור של ליה"/>`).join('')}
      </div>
    `;
  } catch (e) {}
}

function finishLiaDrawingArtwork() {
  saveLiaDrawingToGallery();
  if (typeof arcadeAudio !== 'undefined') {
    arcadeAudio.playWhistleVictory();
    arcadeAudio.speak('וואו ליה! איזה ציור מדהים של אמנית אמיתית! שמרנו אותו בגלריה וקיבלת עשרים מטבעות זהב!', 'he-IL', 0.9);
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
      <button type="button" class="cat-tab ${liaDrawState.mode === 'glow' ? 'active' : ''}" onclick="setLiaDrawMode('glow')">🌟 ניאון זוהר</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'symmetry' ? 'active' : ''}" onclick="setLiaDrawMode('symmetry')">🦋 מנדלה</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'scratch' ? 'active' : ''}" onclick="setLiaDrawMode('scratch')">🪄 גירוד</button>
      <button type="button" class="cat-tab ${liaDrawState.mode === 'dots' ? 'active' : ''}" onclick="setLiaDrawMode('dots')">🔢 נקודות</button>
    `;
  }

  if (colorBar) {
    const colorBtns = LIA_DRAW_COLORS.map(c => `
      <button type="button" title="${c.name}" onclick="liaDrawState.brushType='color';liaDrawState.color='${c.hex}';renderLiaDrawToolbar();" style="width:30px;height:30px;border-radius:50%;background:${c.hex};border:${liaDrawState.brushType === 'color' && liaDrawState.color === c.hex ? '3.5px solid #0f172a' : '2px solid #fff'};box-shadow:0 2px 5px rgba(0,0,0,0.2);cursor:pointer;"></button>
    `).join('');

    colorBar.innerHTML = `
      ${colorBtns}
      <button type="button" onclick="liaDrawState.brushType='rainbow';renderLiaDrawToolbar();" style="padding:5px 10px;border-radius:99px;background:linear-gradient(90deg,#ef4444,#facc15,#22c55e,#3b82f6,#a855f7);color:#fff;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'rainbow' ? '3px solid #0f172a' : 'none'};cursor:pointer;">🌈 קשת</button>
      <button type="button" onclick="liaDrawState.brushType='sparkle';renderLiaDrawToolbar();" style="padding:5px 10px;border-radius:99px;background:#fef08a;color:#854d0e;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'sparkle' ? '3px solid #0f172a' : '1.5px solid #eab308'};cursor:pointer;">✨ נצנצים</button>
      <button type="button" onclick="liaDrawState.brushType='eraser';renderLiaDrawToolbar();" style="padding:5px 10px;border-radius:99px;background:#f1f5f9;color:#0f172a;font-weight:900;font-size:0.78rem;border:${liaDrawState.brushType === 'eraser' ? '3px solid #0f172a' : '1.5px solid #cbd5e1'};cursor:pointer;">⬜ מחק</button>
    `;
  }

  if (stampBar) {
    stampBar.innerHTML = LIA_DRAW_STAMPS.map(st => `
      <button type="button" onclick="liaDrawState.brushType='stamp';liaDrawState.stamp='${st}';renderLiaDrawToolbar();" style="font-size:1.5rem;padding:4px 8px;border-radius:12px;background:${liaDrawState.brushType === 'stamp' && liaDrawState.stamp === st ? '#fde047' : '#ffffff'};border:2px solid ${liaDrawState.brushType === 'stamp' && liaDrawState.stamp === st ? '#ca8a04' : '#e2e8f0'};cursor:pointer;">${st}</button>
    `).join('');
  }
}
