// ==================== MAIN APPLICATION CONTROLLER ====================

const STICKER_CATALOG = [
  { id: 's1', emoji: '🦁', name: 'האריה של בית"ר ירושלים', rarity: 'בית"ר 💛🖤' },
  { id: 's2', emoji: '👑', name: 'הכתר של ריאל מדריד', rarity: 'ריאל מדריד 🤍' },
  { id: 's3', emoji: '🏟️', name: 'אצטדיון טדי הגועש', rarity: 'בית"ר 💛🖤' },
  { id: 's4', emoji: '✨', name: 'אצטדיון סנטיאגו ברנבאו', rarity: 'ריאל מדריד 🤍' },
  { id: 's5', emoji: '⚡', name: 'קיליאן אמבפה בדהירה', rarity: 'אגדי ⭐' },
  { id: 's6', emoji: '💛', name: 'ירדן שועה מלך הבישולים', rarity: 'בית"ר 💛🖤' },
  { id: 's7', emoji: '🕺', name: 'ויניסיוס ג׳וניור כובש', rarity: 'אגדי ⭐' },
  { id: 's8', emoji: '🙌', name: 'ג׳וד בלינגהאם (Hey Jude)', rarity: 'אגדי ⭐' },
  { id: 's9', emoji: '🏆', name: 'גביע המדינה של בית"ר', rarity: 'נדיר 💛🖤' },
  { id: 's10', emoji: '🏅', name: 'גביע ליגת האלופות ה-15', rarity: 'אגדי ⭐' },
  { id: 's11', emoji: '🧤', name: 'קורטואה חומה בשער', rarity: 'ריאל מדריד 🤍' },
  { id: 's12', emoji: '🧣', name: 'צעיף צהוב-שחור ביציע', rarity: 'בית"ר 💛🖤' },
  { id: 's13', emoji: '🚀', name: 'בעיטת תותח של ואלוורדה', rarity: 'ריאל מדריד 🤍' },
  { id: 's14', emoji: '🔥', name: 'מנורה מוזהבת בירושלים', rarity: 'בית"ר 💛🖤' },
  { id: 's15', emoji: '🎩', name: 'לוקה מודריץ׳ הקוסם', rarity: 'אגדי ⭐' },
  { id: 's16', emoji: '⚽', name: 'כדור הזהב של הגמר', rarity: 'נדיר' },
  { id: 's17', emoji: '👟', name: 'נעל הזהב של האלופים', rarity: 'נדיר' },
  { id: 's18', emoji: '🛡️', name: 'קפטן בית"ר ירושלים', rarity: 'בית"ר 💛🖤' },
  { id: 's19', emoji: '💎', name: 'הגלאקטיקוס של מדריד', rarity: 'ריאל מדריד 🤍' },
  { id: 's20', emoji: '🦸‍♂️', name: 'עילי כוכב העל (#10)', rarity: 'אגדי ⭐' }
];

const DEFAULT_CUSTOM_QUESTIONS = [
  {
    instruction: 'הֲכָנָה לַמִּבְחָן בְּחֶשְׁבּוֹן:',
    prompt: 'כַּמָּה זֶה 38 + 25 ?',
    correct: '63',
    wrong: ['53', '62', '73']
  },
  {
    instruction: 'שָׂפָה וּכְתִיב נָכוֹן:',
    prompt: 'אֵיךְ כּוֹתְבִים נָכוֹן אֶת שֵׁם הַקְּבוּצָה הָאֲהוּבָה?',
    correct: 'בֵּיתָ"ר יְרוּשָׁלַיִם',
    wrong: ['בֶּתַר יְרוֹשָׁלַיִם', 'בֵּיתָר יְרוּשָׁלָם']
  }
];

const DEFAULT_HOMEWORK = [
  { id: 'hw_sp', icon: '🎙️', subject: 'תרגול קלינאית (ש׳ ו-ס׳)', title: 'להקליט 5 כרטיסים באלוף הדיבור', done: false },
  { id: 'hw1', icon: '🔢', subject: 'חשבון', title: 'חוברת חשבון עמוד 42', done: false },
  { id: 'hw2', icon: '📖', subject: 'עברית ושפה', title: 'קריאת סיפור ודף עבודה', done: false },
  { id: 'hw3', icon: '🎧', subject: 'אימון הכתבה', title: 'לתרגל 5 מילים באלוף ההכתבה', done: false }
];

const DEFAULT_DICTATION_WORDS = [
  { word: 'ירושלים', hint: '🦁 עיר הבירה שלנו (בית"ר...)' },
  { word: 'כדורגל', hint: '⚽ המשחק האהוב בעולם' },
  { word: 'אלוף', hint: '🏆 מנצח מקום ראשון' },
  { word: 'משפחה', hint: '👨‍👩‍👦 אבא, אמא וילדים' },
  { word: 'בית ספר', hint: '🏫 המקום שבו לומדים בבוקר' },
  { word: 'חברים', hint: '👦 משחקים יחד בהפסקה' },
  { word: 'ניצחון', hint: '🥇 ההפך מהפסד' },
  { word: 'מגרש', hint: '🏟️ הדשא הירוק שבו משחקים' }
];

const DEFAULT_SPEECH_CARDS = [
  { phrase: 'שַׁעַר שֶׁל יַרְדֵּן שׁוּעָה בִּירוּשָׁלַיִם!', emoji: '🦁⚽' },
  { phrase: 'סוּפֶּר וִינִיסְיוּס מוֹסֵר מְסִירָה בִּסְפָרַד!', emoji: '👑⚡' },
  { phrase: 'הַשּׁוֹעֵר שָׁמַר עַל הַשַּׁעַר בְּשֶׁקֶט', emoji: '🧤🥅' },
  { phrase: 'סוּס לָבָן אוֹכֵל סָלָט בַּסָּלוֹן', emoji: '🐴🥗' },
  { phrase: 'שֶׁמֶשׁ צְהֻבָּה זָרְחָה בַּשָּׁמַיִם בְּשַׁבָּת', emoji: '☀️💛' },
  { phrase: 'שַׂחְקָנֵי בֵּיתָ"ר שְׂמֵחִים עַל הַדֶּשֶׁא', emoji: '🏆🔥' }
];

const DEFAULT_SCHEDULE = {
  0: {
    school: [
      { icon: '📖', title: 'שפה', time: '08:00' },
      { icon: '🔢', title: 'חשבון', time: '09:00' },
      { icon: '📜', title: 'תורה', time: '10:15' },
      { icon: '🏃', title: 'ספורט', time: '11:15' }
    ],
    after: [
      { icon: '🎙️', title: 'אימון ש׳ ו-ס׳ (5 דק׳)', time: '15:30' },
      { icon: '⚽', title: 'אימון כדורגל', time: '17:00' }
    ]
  },
  1: {
    school: [
      { icon: '🔢', title: 'חשבון', time: '08:00' },
      { icon: '📖', title: 'שפה', time: '09:00' },
      { icon: '🔬', title: 'מדעים', time: '10:15' },
      { icon: '🌍', title: 'אנגלית', time: '11:15' }
    ],
    after: [
      { icon: '🎙️', title: 'קלינאית / תרגול ש׳-ס׳', time: '16:00' },
      { icon: '🌍', title: 'חוג אנגלית', time: '17:00' }
    ]
  },
  2: {
    school: [
      { icon: '📖', title: 'שפה', time: '08:00' },
      { icon: '🔢', title: 'חשבון', time: '09:00' },
      { icon: '🎨', title: 'אמנות', time: '10:15' }
    ],
    after: [
      { icon: '🎙️', title: 'אימון ש׳ ו-ס׳ (5 דק׳)', time: '15:30' },
      { icon: '⚽', title: 'אימון כדורגל', time: '17:00' }
    ]
  },
  3: {
    school: [
      { icon: '🔢', title: 'חשבון', time: '08:00' },
      { icon: '📜', title: 'תורה', time: '09:00' },
      { icon: '📖', title: 'שפה', time: '10:15' },
      { icon: '🏃', title: 'ספורט', time: '11:15' }
    ],
    after: [
      { icon: '🌍', title: 'חוג אנגלית', time: '16:30' },
      { icon: '🎙️', title: 'אימון ש׳ ו-ס׳ (5 דק׳)', time: '18:00' }
    ]
  },
  4: {
    school: [
      { icon: '📖', title: 'שפה', time: '08:00' },
      { icon: '🔢', title: 'חשבון', time: '09:00' },
      { icon: '🎵', title: 'מוזיקה', time: '10:15' }
    ],
    after: [
      { icon: '🎙️', title: 'אימון ש׳ ו-ס׳ (5 דק׳)', time: '15:30' },
      { icon: '⚽', title: 'אימון כדורגל', time: '17:00' }
    ]
  },
  5: {
    school: [
      { icon: '🎧', title: 'הכתבה ושפה', time: '08:00' },
      { icon: '🕯️', title: 'קבלת שבת', time: '10:00' }
    ],
    after: [
      { icon: '👦', title: 'חברים / משפחה', time: '14:00' }
    ]
  },
  6: {
    school: [],
    after: [
      { icon: '🏟️', title: 'משחק של בית"ר / ריאל!', time: '20:00' }
    ]
  }
};

const STORAGE_KEY = 'ilay_arcade_save_v3';
const AUTH_SESSION_KEY = 'ilay_family_auth_ok_v1';

let appState = {
  coins: 60,
  trophies: 1,
  bestStreak: 0,
  avatar: '🦁',
  teamTheme: 'beitar',
  difficulty: 'medium',
  gameMode: 'practice',
  selectedCategory: 'all',
  selectedDay: new Date().getDay(),
  unlockedStickers: ['s1', 's2'],
  topicStats: {},
  customQuestions: [...DEFAULT_CUSTOM_QUESTIONS],
  homeworkList: [...DEFAULT_HOMEWORK],
  dictationWords: [...DEFAULT_DICTATION_WORDS],
  speechCards: [...DEFAULT_SPEECH_CARDS],
  speechLogs: [], // [{ date, phrase, heardText, audioDataUrl }]
  schedule: JSON.parse(JSON.stringify(DEFAULT_SCHEDULE)),
  familyPin: '1936', // Default Beitar Jerusalem founding year!
  allowedEmails: [],
  googleClientId: '',
  devRequests: [] // [{ id, date, text, status }]
};

// Active match session state
let session = {
  topicId: null,
  topicTitle: '',
  isDailyBonus: false,
  questions: [],
  currentIndex: 0,
  totalQuestions: 10,
  correctCount: 0,
  coinsEarned: 0,
  currentStreak: 0,
  maxSessionStreak: 0,
  attemptsOnCurrent: 1,
  selectedOptions: new Set(),
  answeredCurrent: false,
  timerInterval: null,
  secondsLeft: 60,
  penaltyHistory: []
};

// Dictation trainer state
let dictSession = {
  words: [],
  index: 0,
  attempts: 1,
  answered: false,
  correctCount: 0
};

// Speech studio state
let speechSession = {
  cards: [],
  index: 0,
  isRecording: false,
  mediaRecorder: null,
  audioChunks: [],
  lastAudioUrl: null,
  recognition: null,
  heardTranscript: ''
};

// ==================== INITIALIZATION & LIVE 24/7 CLOUD FAMILY SYNC ====================

const CLOUD_SYNC_KEY = 'zehcx4w8';
const CLOUD_API_BASE = `https://keyvalue.immanuel.co/api/KeyVal`;

function encodeCloudState(stateObj) {
  // Strip large audio blobs before cloud sync so payload stays fast & compact
  const copy = { ...stateObj };
  if (copy.speechLogs) {
    copy.speechLogs = copy.speechLogs.map(l => ({
      date: l.date,
      phrase: l.phrase,
      heardText: l.heardText
    }));
  }
  const jsonStr = JSON.stringify(copy);
  return btoa(unescape(encodeURIComponent(jsonStr)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function decodeCloudState(b64Url) {
  if (!b64Url || b64Url.length < 10) return null;
  const b64 = b64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonStr = decodeURIComponent(escape(atob(b64)));
  return JSON.parse(jsonStr);
}

async function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.warn('Could not load saved state:', e);
  }

  // Pull from 24/7 Cloud Sync
  try {
    const res = await fetch(`${CLOUD_API_BASE}/GetValue/${CLOUD_SYNC_KEY}/ilay_v3`, { cache: 'no-store' });
    if (res.ok) {
      const text = (await res.text()).replace(/^"|"$/g, '');
      const remote = decodeCloudState(text);
      if (remote && remote.updatedAt && (!appState.updatedAt || remote.updatedAt >= appState.updatedAt)) {
        // Preserve any local audio recordings while merging cloud state
        const localLogs = appState.speechLogs || [];
        appState = { ...appState, ...remote };
        if (remote.speechLogs && localLogs.length > 0) {
          appState.speechLogs = remote.speechLogs.map(rl => {
            const match = localLogs.find(ll => ll.date === rl.date && ll.phrase === rl.phrase);
            return match ? match : rl;
          });
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      } else {
        saveState();
      }
    }
  } catch (e) {}

  if (!appState.homeworkList) appState.homeworkList = [...DEFAULT_HOMEWORK];
  if (!appState.dictationWords || appState.dictationWords.length === 0) {
    appState.dictationWords = [...DEFAULT_DICTATION_WORDS];
  }
  if (!appState.speechCards || appState.speechCards.length === 0) {
    appState.speechCards = [...DEFAULT_SPEECH_CARDS];
  }
  if (!appState.speechLogs) appState.speechLogs = [];
  if (!appState.schedule) appState.schedule = JSON.parse(JSON.stringify(DEFAULT_SCHEDULE));

  updateHeaderUI();
  renderTopicsGrid();
}

function saveState() {
  try {
    appState.updatedAt = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn('Could not save state:', e);
  }

  // Push to 24/7 Cloud Sync
  try {
    const encoded = encodeCloudState(appState);
    fetch(`${CLOUD_API_BASE}/UpdateValue/${CLOUD_SYNC_KEY}/ilay_v3/${encoded}`, {
      method: 'POST'
    }).catch(() => {});
  } catch (e) {}

  // Also push to local server if running
  try {
    fetch('/api/state', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appState)
    }).catch(() => {});
  } catch (e) {}
}

setInterval(async () => {
  try {
    const res = await fetch(`${CLOUD_API_BASE}/GetValue/${CLOUD_SYNC_KEY}/ilay_v3`, { cache: 'no-store' });
    if (!res.ok) return;
    const text = (await res.text()).replace(/^"|"$/g, '');
    const remote = decodeCloudState(text);
    if (remote && remote.updatedAt && (!appState.updatedAt || remote.updatedAt > appState.updatedAt)) {
      const currentDay = appState.selectedDay;
      const currentCat = appState.selectedCategory;
      appState = { ...appState, ...remote, selectedDay: currentDay, selectedCategory: currentCat };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      updateHeaderUI();
      if (document.getElementById('view-schedule').classList.contains('active')) renderScheduleView();
      if (document.getElementById('view-homework').classList.contains('active')) renderHomeworkView();
      if (document.getElementById('view-parents').classList.contains('active')) renderParentsView();
    }
  } catch (e) {}
}, 7000);

function getRankTitle(trophies, solved) {
  if (trophies >= 15 || solved >= 120) return 'אגדת טדי והברנבאו 👑🦁';
  if (trophies >= 8 || solved >= 60) return 'קפטן בית"ר וריאל 🌟';
  if (trophies >= 4 || solved >= 25) return 'כוכב ההרכב הפותח ⚡';
  return 'כוכב על במגרש ⚽';
}

function applyTeamTheme(team) {
  appState.teamTheme = team;
  document.body.classList.remove('theme-beitar', 'theme-real');
  document.body.classList.add(`theme-${team}`);

  document.querySelectorAll('#team-switcher .team-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.team === team);
  });
}

function updateHeaderUI() {
  document.getElementById('stat-coins').textContent = appState.coins;
  document.getElementById('stat-trophies').textContent = appState.trophies;
  document.getElementById('stat-streak').textContent = session.currentStreak;
  document.getElementById('current-avatar').textContent = appState.avatar;
  applyTeamTheme(appState.teamTheme || 'beitar');

  let totalSolved = 0;
  Object.values(appState.topicStats).forEach(s => { totalSolved += (s.solved || 0); });
  document.getElementById('player-rank-display').textContent = getRankTitle(appState.trophies, totalSolved);

  // Shop badge
  const shopNotif = document.getElementById('shop-notif');
  if (appState.coins >= 50 && appState.unlockedStickers.length < STICKER_CATALOG.length) {
    shopNotif.classList.remove('hidden');
  } else {
    shopNotif.classList.add('hidden');
  }

  // Homework badge & quick tile summary
  const pendingHw = (appState.homeworkList || []).filter(h => !h.done).length;
  const hwNotif = document.getElementById('hw-notif');
  if (pendingHw > 0) {
    hwNotif.textContent = pendingHw;
    hwNotif.classList.remove('hidden');
    document.getElementById('quick-hw-summary').textContent = `${pendingHw} משימות להיום`;
  } else {
    hwNotif.classList.add('hidden');
    document.getElementById('quick-hw-summary').textContent = `הכל בוצע! 🏆`;
  }

  // Speech studio daily status
  const todayStr = new Date().toLocaleDateString('he-IL');
  const todayLogs = (appState.speechLogs || []).filter(l => l.date.startsWith(todayStr));
  const speechNotif = document.getElementById('speech-notif');
  if (todayLogs.length < 3) {
    speechNotif.classList.remove('hidden');
    document.getElementById('quick-speech-summary').textContent = `תורגלו ${todayLogs.length}/5 היום`;
  } else {
    speechNotif.classList.add('hidden');
    document.getElementById('quick-speech-summary').textContent = `אלוף השדרנים! 🏆`;
  }

  // Today schedule quick summary
  const todayIdx = new Date().getDay();
  const todayData = (appState.schedule && appState.schedule[todayIdx]) || { after: [] };
  if (todayData.after && todayData.after.length > 0) {
    const firstAfter = todayData.after[0];
    document.getElementById('quick-sched-summary').textContent = `היום: ${firstAfter.icon} ${firstAfter.title}`;
  } else {
    document.getElementById('quick-sched-summary').textContent = 'מערכת שעות וחוגים';
  }

  // Dictation quick summary
  document.getElementById('quick-dict-summary').textContent = `${appState.dictationWords.length} מילים מוכנות`;
}

// ==================== VIEW NAVIGATION ====================

function switchView(viewName) {
  clearInterval(session.timerInterval);
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });

  if (viewName === 'home') renderTopicsGrid();
  if (viewName === 'speech') startSpeechStudio();
  if (viewName === 'schedule') renderScheduleView();
  if (viewName === 'homework') renderHomeworkView();
  if (viewName === 'dictation') startDictationTrainer();
  if (viewName === 'shop') renderShopView();
  if (viewName === 'parents') renderParentsView();
  updateHeaderUI();
}

// ==================== HOME: VISUAL TOPICS GRID ====================

function renderTopicsGrid() {
  const grid = document.getElementById('topics-grid');
  grid.innerHTML = '';

  const filtered = TOPICS.filter(t => {
    if (appState.selectedCategory === 'all') return true;
    return t.cat === appState.selectedCategory;
  });

  filtered.forEach(topic => {
    const st = appState.topicStats[topic.id] || { solved: 0, correct: 0, stars: 0 };
    const starsDisplay = '⭐'.repeat(Math.min(3, st.stars)) + '☆'.repeat(Math.max(0, 3 - Math.min(3, st.stars)));

    const card = document.createElement('div');
    card.className = `topic-card cat-${topic.cat}`;
    card.innerHTML = `
      <div>
        <div class="topic-card-top">
          <div class="topic-icon">${topic.icon}</div>
          <span class="topic-tag">${topic.tag}</span>
        </div>
        <div class="topic-title">${topic.title}</div>
      </div>
      <div class="topic-footer">
        <span class="topic-stars">${starsDisplay}</span>
        <span class="play-mini-btn">שחק ⚽</span>
      </div>
    `;
    card.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch(topic.id, topic.title, false);
    });
    grid.appendChild(card);
  });
}

// ==================== VIEW 2: SPEECH THERAPY STUDIO (אלוף הדיבור - ש׳ ו-ס׳) ====================

function highlightSibilants(text) {
  // Highlight ש and ס visually so Ilay notices where to keep his tongue behind his teeth!
  return text.replace(/([שס][\u0591-\u05C7]*)/g, '<span class="s-highlight">$1</span>');
}

function startSpeechStudio() {
  const list = appState.speechCards && appState.speechCards.length > 0
    ? appState.speechCards
    : DEFAULT_SPEECH_CARDS;

  speechSession.cards = [...list];
  speechSession.index = 0;
  speechSession.isRecording = false;
  speechSession.lastAudioUrl = null;
  renderSpeechCard();
}

function renderSpeechCard() {
  const card = speechSession.cards[speechSession.index];
  speechSession.lastAudioUrl = null;
  speechSession.heardTranscript = '';

  document.getElementById('sp-current-num').textContent = speechSession.index + 1;
  document.getElementById('sp-total-num').textContent = speechSession.cards.length;
  const pct = Math.round(((speechSession.index + 1) / speechSession.cards.length) * 100);
  document.getElementById('sp-progress-fill').style.width = `${pct}%`;

  document.getElementById('sp-emoji').textContent = card.emoji || '🎙️⚽';
  document.getElementById('sp-phrase').innerHTML = highlightSibilants(card.phrase);

  const recBtn = document.getElementById('btn-sp-record');
  recBtn.classList.remove('recording');
  document.getElementById('sp-mic-icon').textContent = '🎙️';
  document.getElementById('sp-mic-label').textContent = 'לְחַץ וֶאֱמֹר בְּקוֹל';

  document.getElementById('btn-sp-play-self').classList.add('hidden');
  document.getElementById('sp-wave-bars').classList.add('hidden');
  document.getElementById('sp-recognized-box').classList.add('hidden');
  document.getElementById('sp-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-sp-next').classList.add('hidden');
}

async function toggleSpeechRecording() {
  const card = speechSession.cards[speechSession.index];
  const recBtn = document.getElementById('btn-sp-record');
  const waveEl = document.getElementById('sp-wave-bars');

  if (speechSession.isRecording) {
    // Stop recording
    speechSession.isRecording = false;
    recBtn.classList.remove('recording');
    waveEl.classList.add('hidden');
    document.getElementById('sp-mic-icon').textContent = '🎙️';
    document.getElementById('sp-mic-label').textContent = 'הַקְלֵט שׁוּב';

    if (speechSession.mediaRecorder && speechSession.mediaRecorder.state !== 'inactive') {
      speechSession.mediaRecorder.stop();
    }
    if (speechSession.recognition) {
      try { speechSession.recognition.stop(); } catch (e) {}
    }
    completeSpeechCardPractice(card);
    return;
  }

  // Start recording
  speechSession.isRecording = true;
  speechSession.heardTranscript = '';
  recBtn.classList.add('recording');
  waveEl.classList.remove('hidden');
  document.getElementById('sp-mic-icon').textContent = '⏹️';
  document.getElementById('sp-mic-label').textContent = 'מַקְלִיט... לְחַץ לְסִיּוּם';

  // 1. Try Web Speech Recognition (if supported)
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    try {
      const rec = new SpeechRec();
      rec.lang = 'he-IL';
      rec.interimResults = true;
      rec.onresult = (event) => {
        let t = '';
        for (let i = 0; i < event.results.length; i++) {
          t += event.results[i][0].transcript;
        }
        speechSession.heardTranscript = t;
        document.getElementById('sp-recognized-box').classList.remove('hidden');
        document.getElementById('sp-recognized-text').textContent = t;
      };
      rec.start();
      speechSession.recognition = rec;
    } catch (e) {}
  }

  // 2. Try Microphone Audio Recording so Ilay & Parents can listen back!
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      speechSession.audioChunks = [];
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) speechSession.audioChunks.push(e.data);
      };
      mr.onstop = () => {
        const blob = new Blob(speechSession.audioChunks, { type: 'audio/webm' });
        speechSession.lastAudioUrl = URL.createObjectURL(blob);
        document.getElementById('btn-sp-play-self').classList.remove('hidden');

        // Convert small clip to DataURL for Parent Log
        const reader = new FileReader();
        reader.onloadend = () => {
          saveSpeechLogEntry(card.phrase, speechSession.heardTranscript, reader.result);
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start();
      speechSession.mediaRecorder = mr;
    } catch (err) {
      // Fallback if mic permission denied: still let Ilay practice!
      setTimeout(() => {
        if (speechSession.isRecording) toggleSpeechRecording();
      }, 3000);
    }
  } else {
    setTimeout(() => {
      if (speechSession.isRecording) toggleSpeechRecording();
    }, 3000);
  }
}

function saveSpeechLogEntry(phrase, heardText, audioDataUrl) {
  const nowStr = new Date().toLocaleDateString('he-IL') + ' ' + new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  appState.speechLogs.unshift({
    date: nowStr,
    phrase,
    heardText: heardText || 'הוקלט בקול 🎙️',
    audioDataUrl: audioDataUrl && audioDataUrl.length < 250000 ? audioDataUrl : null
  });
  // Keep latest 12 logs to fit localStorage comfortably
  if (appState.speechLogs.length > 12) appState.speechLogs.length = 12;

  // Auto-check speech homework if 3+ practiced today
  const todayStr = new Date().toLocaleDateString('he-IL');
  const todayCount = appState.speechLogs.filter(l => l.date.startsWith(todayStr)).length;
  if (todayCount >= 3) {
    const spHw = (appState.homeworkList || []).find(h => h.id === 'hw_sp' || h.subject.includes('קלינאית'));
    if (spHw && !spHw.done) {
      spHw.done = true;
      appState.coins += 25;
    }
  }
  saveState();
  updateHeaderUI();
}

function completeSpeechCardPractice(card) {
  appState.coins += 20;
  saveState();
  updateHeaderUI();

  arcadeAudio.playGoalSuccess();
  confetti.burst(60);

  const fb = document.getElementById('sp-feedback-banner');
  fb.className = 'feedback-banner success';
  fb.textContent = `איזה שדרן אלוף! הרווחת +20 🪙 מטבעות! תקשיב לעצמך או עבור לכרטיס הבא!`;
  document.getElementById('btn-sp-next').classList.remove('hidden');

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    saveSpeechLogEntry(card.phrase, speechSession.heardTranscript, null);
  }
}

function nextSpeechCard() {
  arcadeAudio.playClick();
  speechSession.index++;
  if (speechSession.index >= speechSession.cards.length) {
    arcadeAudio.playWhistleVictory();
    confetti.burst(120);
    appState.trophies += 1;
    saveState();
    updateHeaderUI();
    alert('🏆 כל הכבוד עילי! סיימת את אימון הדיבור של ש׳ ו-ס׳ כמו שדרן ליגת האלופות וזכית בגביע!');
    switchView('home');
  } else {
    renderSpeechCard();
  }
}

// ==================== VIEW 3: VISUAL WEEKLY SCHEDULE (היום שלי) ====================

const DAY_NAMES_HE = ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'];

function renderScheduleView() {
  const day = appState.selectedDay;
  document.querySelectorAll('#day-tabs-bar .day-tab').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.day) === day);
  });

  const dayObj = appState.schedule[day] || { school: [], after: [] };

  const schoolEl = document.getElementById('sched-school-list');
  schoolEl.innerHTML = '';
  if (!dayObj.school || dayObj.school.length === 0) {
    schoolEl.innerHTML = `<div class="sched-item-card"><div class="sched-item-icon">🎉</div><div class="sched-item-title">חופש מבית ספר!</div></div>`;
  } else {
    dayObj.school.forEach(item => {
      const card = document.createElement('div');
      card.className = 'sched-item-card';
      card.innerHTML = `
        <div class="sched-item-icon">${item.icon}</div>
        <div class="sched-item-title">${item.title}</div>
        ${item.time ? `<div class="sched-item-time">${item.time}</div>` : ''}
      `;
      card.addEventListener('click', () => arcadeAudio.speak(`${item.title} בשעה ${item.time || ''}`));
      schoolEl.appendChild(card);
    });
  }

  const afterEl = document.getElementById('sched-after-list');
  afterEl.innerHTML = '';
  if (!dayObj.after || dayObj.after.length === 0) {
    afterEl.innerHTML = `<div class="sched-item-card"><div class="sched-item-icon">🏠⚽</div><div class="sched-item-title">זמן חופשי ומנוחה</div></div>`;
  } else {
    dayObj.after.forEach(item => {
      const card = document.createElement('div');
      card.className = 'sched-item-card';
      card.innerHTML = `
        <div class="sched-item-icon">${item.icon}</div>
        <div class="sched-item-title">${item.title}</div>
        ${item.time ? `<div class="sched-item-time">🕒 ${item.time}</div>` : ''}
      `;
      card.addEventListener('click', () => arcadeAudio.speak(`${item.title} בשעה ${item.time || ''}`));
      afterEl.appendChild(card);
    });
  }
}

function speakCurrentDaySchedule() {
  const day = appState.selectedDay;
  const dayObj = appState.schedule[day] || { school: [], after: [] };
  const schoolNames = (dayObj.school || []).map(s => s.title).join(', ');
  const afterNames = (dayObj.after || []).map(s => `${s.title} ב-${s.time || ''}`).join(', ');
  let text = `ב${DAY_NAMES_HE[day]}: `;
  text += schoolNames ? `בבית הספר יש: ${schoolNames}. ` : `אין בית ספר! `;
  text += afterNames ? `ואחר הצהריים יש: ${afterNames}.` : `ואחר הצהריים זמן חופשי.`;
  arcadeAudio.speak(text);
}

// ==================== VIEW 4: HOMEWORK & DAILY MISSIONS ====================

function renderHomeworkView() {
  const list = appState.homeworkList || [];
  const doneCount = list.filter(h => h.done).length;
  document.getElementById('hw-done-count').textContent = `${doneCount}/${list.length}`;

  const container = document.getElementById('hw-kids-list');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center;font-size:1.4rem;font-weight:800;padding:24px;">🎉 אין משימות פתוחות כרגע! איזה כיף!</div>`;
  }

  list.forEach((hw) => {
    const row = document.createElement('div');
    row.className = `hw-kid-item ${hw.done ? 'done' : ''}`;
    row.innerHTML = `
      <div class="hw-kid-left">
        <div class="hw-check-circle">${hw.done ? '✔' : ''}</div>
        <div class="hw-big-emoji">${hw.icon || '📚'}</div>
        <div class="hw-kid-text">
          <span class="hw-kid-subject">${hw.subject}</span>
          <span class="hw-kid-title">${hw.title}</span>
        </div>
      </div>
      <div class="hw-reward-tag">${hw.done ? 'בוצע! 🏆 +25🪙' : '🪙 +25'}</div>
    `;

    row.addEventListener('click', () => {
      if (!hw.done) {
        hw.done = true;
        appState.coins += 25;
        arcadeAudio.playGoalSuccess();
        confetti.burst(70);
        arcadeAudio.speak(`כל הכבוד עילי! סיימת ${hw.title}`);
      } else {
        hw.done = false;
        appState.coins = Math.max(0, appState.coins - 25);
        arcadeAudio.playClick();
      }
      saveState();
      renderHomeworkView();
      updateHeaderUI();
    });

    container.appendChild(row);
  });

  const allDoneBanner = document.getElementById('hw-all-done-banner');
  if (list.length > 0 && doneCount === list.length) {
    allDoneBanner.classList.remove('hidden');
  } else {
    allDoneBanner.classList.add('hidden');
  }
}

// ==================== VIEW 5: DICTATION TRAINER (אלוף ההכתבה) ====================

const HEBREW_KEY_ROWS = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
];

function buildHebrewKeyboard() {
  const kb = document.getElementById('hebrew-keyboard');
  if (!kb || kb.children.length > 0) return;

  HEBREW_KEY_ROWS.forEach(rowChars => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    rowChars.forEach(ch => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'kb-key';
      btn.textContent = ch;
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        const inp = document.getElementById('dict-user-input');
        inp.value += ch;
        updateDictationSlots();
      });
      rowEl.appendChild(btn);
    });
    kb.appendChild(rowEl);
  });

  const bottomRow = document.createElement('div');
  bottomRow.className = 'kb-row';
  const spaceBtn = document.createElement('button');
  spaceBtn.type = 'button';
  spaceBtn.className = 'kb-key space-key';
  spaceBtn.textContent = 'רווח';
  spaceBtn.addEventListener('click', () => {
    arcadeAudio.playClick();
    const inp = document.getElementById('dict-user-input');
    inp.value += ' ';
    updateDictationSlots();
  });
  bottomRow.appendChild(spaceBtn);
  kb.appendChild(bottomRow);
}

function stripNiqqud(str) {
  return (str || '').replace(/[\u0591-\u05C7]/g, '').trim();
}

function startDictationTrainer() {
  buildHebrewKeyboard();
  const list = appState.dictationWords && appState.dictationWords.length > 0
    ? appState.dictationWords
    : DEFAULT_DICTATION_WORDS;

  dictSession = {
    words: [...list],
    index: 0,
    attempts: 1,
    answered: false,
    correctCount: 0
  };
  renderDictationWord();
}

function renderDictationWord() {
  const item = dictSession.words[dictSession.index];
  dictSession.attempts = 1;
  dictSession.answered = false;

  document.getElementById('dict-current-num').textContent = dictSession.index + 1;
  document.getElementById('dict-total-num').textContent = dictSession.words.length;
  const pct = Math.round(((dictSession.index + 1) / dictSession.words.length) * 100);
  document.getElementById('dict-progress-fill').style.width = `${pct}%`;

  document.getElementById('dict-sentence-context').textContent = item.hint || 'הקשב למילה וכתוב אותה!';
  const peekBox = document.getElementById('dict-peek-box');
  peekBox.classList.add('hidden');
  const cleanWord = stripNiqqud(item.word);
  peekBox.textContent = `👀 רמז: המילה מתחילה באות "${cleanWord[0]}" ויש בה ${cleanWord.length} אותיות.`;

  const inp = document.getElementById('dict-user-input');
  inp.value = '';
  updateDictationSlots();

  document.getElementById('dict-attempt-counter').textContent = 'ניסיון 1';
  document.getElementById('dict-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-dict-check').classList.remove('hidden');
  document.getElementById('btn-dict-next').classList.add('hidden');

  setTimeout(() => {
    arcadeAudio.speak(item.word, 'he-IL', 0.88);
  }, 300);
}

function updateDictationSlots() {
  const item = dictSession.words[dictSession.index];
  if (!item) return;
  const targetClean = stripNiqqud(item.word);
  const typed = document.getElementById('dict-user-input').value;

  const slotsEl = document.getElementById('dict-letter-slots');
  slotsEl.innerHTML = '';
  for (let i = 0; i < targetClean.length; i++) {
    const slot = document.createElement('div');
    const ch = typed[i] || '';
    slot.className = `letter-slot ${ch ? 'filled' : ''}`;
    slot.textContent = ch;
    slotsEl.appendChild(slot);
  }
}

function checkDictationWord() {
  if (dictSession.answered) return;
  const item = dictSession.words[dictSession.index];
  const target = stripNiqqud(item.word);
  const typed = stripNiqqud(document.getElementById('dict-user-input').value);

  const fb = document.getElementById('dict-feedback-banner');
  if (!typed) {
    fb.className = 'feedback-banner error';
    fb.textContent = 'כתוב את המילה קודם! ✍️';
    return;
  }

  if (typed === target) {
    dictSession.answered = true;
    dictSession.correctCount++;
    const reward = dictSession.attempts === 1 ? 15 : 8;
    appState.coins += reward;
    saveState();
    updateHeaderUI();

    arcadeAudio.playGoalSuccess();
    confetti.burst(65);
    fb.className = 'feedback-banner success';
    fb.textContent = `אלוף ההכתבה! כתבת "${item.word}" מדויק! +${reward} 🪙`;

    document.getElementById('btn-dict-check').classList.add('hidden');
    document.getElementById('btn-dict-next').classList.remove('hidden');
  } else {
    arcadeAudio.playMiss();
    if (dictSession.attempts === 1) {
      dictSession.attempts = 2;
      document.getElementById('dict-attempt-counter').textContent = 'ניסיון 2';
      document.getElementById('dict-peek-box').classList.remove('hidden');
      fb.className = 'feedback-banner error';
      fb.textContent = `כמעט! הקשב שוב למילה והיעזר ברמז 👀`;
    } else {
      dictSession.answered = true;
      document.getElementById('dict-user-input').value = target;
      updateDictationSlots();
      fb.className = 'feedback-banner error';
      fb.textContent = `הכתיב הנכון הוא: "${target}". נזכור לפעם הבאה! 💪`;
      document.getElementById('btn-dict-check').classList.add('hidden');
      document.getElementById('btn-dict-next').classList.remove('hidden');
    }
  }
}

function nextDictationWord() {
  arcadeAudio.playClick();
  dictSession.index++;
  if (dictSession.index >= dictSession.words.length) {
    arcadeAudio.playWhistleVictory();
    confetti.burst(110);
    appState.trophies += 1;
    saveState();
    updateHeaderUI();
    alert(`🏆 כל הכבוד עילי! סיימת את אימון ההכתבה (${dictSession.correctCount}/${dictSession.words.length}) וזכית בגביע!`);
    switchView('home');
  } else {
    renderDictationWord();
  }
}

// ==================== VIEW 6: GAME ARENA & MATCH LOGIC ====================

function startMatch(topicId, topicTitle, isDailyBonus = false) {
  clearInterval(session.timerInterval);

  const count = appState.gameMode === 'penalty' ? 5 : appState.gameMode === 'arcade' ? 20 : (isDailyBonus ? 8 : 10);

  session = {
    topicId,
    topicTitle,
    isDailyBonus,
    questions: [],
    currentIndex: 0,
    totalQuestions: count,
    correctCount: 0,
    coinsEarned: 0,
    currentStreak: session.currentStreak || 0,
    maxSessionStreak: session.currentStreak || 0,
    attemptsOnCurrent: 1,
    selectedOptions: new Set(),
    answeredCurrent: false,
    timerInterval: null,
    secondsLeft: 60,
    penaltyHistory: []
  };

  for (let i = 0; i < count; i++) {
    session.questions.push(generateQuestionForTopic(topicId, appState.difficulty, appState.customQuestions));
  }

  document.getElementById('arena-topic-title').textContent = isDailyBonus ? '⚡ משחק העונה (בונוס X2)' : topicTitle;

  const timerEl = document.getElementById('arena-timer');
  if (appState.gameMode === 'arcade') {
    timerEl.classList.remove('hidden');
    document.getElementById('timer-seconds').textContent = session.secondsLeft;
    session.timerInterval = setInterval(() => {
      session.secondsLeft--;
      document.getElementById('timer-seconds').textContent = session.secondsLeft;
      if (session.secondsLeft <= 0) {
        clearInterval(session.timerInterval);
        finishMatch();
      }
    }, 1000);
  } else {
    timerEl.classList.add('hidden');
  }

  switchView('arena');
  renderPenaltyTrack();
  renderCurrentQuestion();
}

function renderPenaltyTrack() {
  const track = document.getElementById('penalty-balls-track');
  track.innerHTML = '';
  for (let i = 0; i < session.totalQuestions; i++) {
    const dot = document.createElement('div');
    dot.className = 'p-dot';
    if (session.penaltyHistory[i] === 'scored') {
      dot.classList.add('scored');
      dot.textContent = '⚽';
    } else if (session.penaltyHistory[i] === 'missed') {
      dot.classList.add('missed');
      dot.textContent = '✖';
    } else {
      dot.textContent = i + 1;
    }
    track.appendChild(dot);
  }
}

function renderCurrentQuestion() {
  const q = session.questions[session.currentIndex];
  session.attemptsOnCurrent = 1;
  session.selectedOptions.clear();
  session.answeredCurrent = false;

  document.getElementById('q-current-num').textContent = session.currentIndex + 1;
  document.getElementById('q-total-num').textContent = session.totalQuestions;
  const pct = Math.round(((session.currentIndex + 1) / session.totalQuestions) * 100);
  document.getElementById('q-progress-fill').style.width = `${pct}%`;

  const ball = document.getElementById('soccer-ball-shot');
  ball.className = 'soccer-ball-shot';
  document.getElementById('goalkeeper').style.transform = 'translateX(0)';
  document.getElementById('commentator-text').textContent =
    q.isMulti
      ? '🎙️ "בחר את כל המספרים המתאימים!"'
      : '🎙️ "עילי מכוון לשער..."';

  document.getElementById('q-instruction').innerHTML = q.instruction;
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.add('hidden');
  hintBox.textContent = `💡 רמז: ${q.hint}`;

  const stim = document.getElementById('q-stimulus');
  stim.className = 'q-stimulus-box' + (q.rtlStimulus ? ' rtl-stimulus' : '');
  stim.innerHTML = q.stimulusHtml;

  const optsContainer = document.getElementById('q-options-container');
  optsContainer.className = q.isMulti ? 'options-container' : 'options-container grid-options';
  optsContainer.innerHTML = '';

  q.options.forEach(optVal => {
    const row = document.createElement('div');
    row.className = 'option-row';
    row.dataset.val = optVal;
    row.innerHTML = `
      <span class="opt-text" dir="auto">${optVal}</span>
      <span class="opt-indicator">${q.isMulti ? '☐' : '•'}</span>
    `;
    row.addEventListener('click', () => handleOptionSelect(optVal, row, q.isMulti));
    optsContainer.appendChild(row);
  });

  document.getElementById('attempt-counter').textContent = `ניסיון 1`;
  const fb = document.getElementById('feedback-banner');
  fb.className = 'feedback-banner hidden';
  document.getElementById('btn-check-answer').classList.remove('hidden');
  document.getElementById('btn-next-question').classList.add('hidden');
}

function handleOptionSelect(val, rowEl, isMulti) {
  if (session.answeredCurrent) return;
  arcadeAudio.playClick();

  if (isMulti) {
    if (session.selectedOptions.has(val)) {
      session.selectedOptions.delete(val);
      rowEl.classList.remove('selected');
      rowEl.querySelector('.opt-indicator').textContent = '☐';
    } else {
      session.selectedOptions.add(val);
      rowEl.classList.add('selected');
      rowEl.querySelector('.opt-indicator').textContent = '✔';
    }
  } else {
    session.selectedOptions.clear();
    document.querySelectorAll('#q-options-container .option-row').forEach(el => {
      el.classList.remove('selected');
      el.querySelector('.opt-indicator').textContent = '•';
    });
    session.selectedOptions.add(val);
    rowEl.classList.add('selected');
    rowEl.querySelector('.opt-indicator').textContent = '⚽';
  }
}

function checkCurrentAnswer() {
  if (session.answeredCurrent) return;
  const q = session.questions[session.currentIndex];

  if (session.selectedOptions.size === 0) {
    const fb = document.getElementById('feedback-banner');
    fb.className = 'feedback-banner error';
    fb.textContent = 'בחר תשובה קודם! ⚽';
    return;
  }

  const selectedArr = Array.from(session.selectedOptions);
  const correctSet = new Set(q.correctAnswers);

  const isExactMatch =
    selectedArr.length === correctSet.size &&
    selectedArr.every(v => correctSet.has(v));

  const fb = document.getElementById('feedback-banner');
  const ball = document.getElementById('soccer-ball-shot');
  const gk = document.getElementById('goalkeeper');

  if (isExactMatch) {
    session.answeredCurrent = true;
    session.correctCount++;
    session.currentStreak++;
    if (session.currentStreak > session.maxSessionStreak) {
      session.maxSessionStreak = session.currentStreak;
    }
    if (session.currentStreak > appState.bestStreak) {
      appState.bestStreak = session.currentStreak;
    }

    const baseReward = session.attemptsOnCurrent === 1 ? 10 : 5;
    const streakBonus = session.currentStreak >= 3 ? 5 : 0;
    const mult = session.isDailyBonus ? 2 : 1;
    const earned = (baseReward + streakBonus) * mult;

    session.coinsEarned += earned;
    appState.coins += earned;
    session.penaltyHistory[session.currentIndex] = 'scored';

    const tStat = appState.topicStats[q.topicId] || { solved: 0, correct: 0, stars: 0 };
    tStat.solved++;
    tStat.correct++;
    tStat.stars = Math.min(3, Math.floor(tStat.correct / 5));
    appState.topicStats[q.topicId] = tStat;
    saveState();

    document.querySelectorAll('#q-options-container .option-row').forEach(el => {
      if (correctSet.has(el.dataset.val)) {
        el.classList.add('correct');
        el.querySelector('.opt-indicator').textContent = '✔';
      }
    });

    arcadeAudio.playGoalSuccess();
    confetti.burst(65);
    ball.className = 'soccer-ball-shot goal-anim';
    gk.style.transform = 'translateX(35px) rotate(20deg)';

    const streakMsg = session.currentStreak >= 3 ? ` 🔥 רצף ${session.currentStreak}!` : '';
    fb.className = 'feedback-banner success';
    fb.textContent = `גווווול! +${earned} 🪙${streakMsg}`;
    document.getElementById('commentator-text').textContent = `🎙️ "שעררר אדיר של עילי!"`;

    const streakPill = document.getElementById('streak-pill');
    streakPill.classList.remove('pulse');
    void streakPill.offsetWidth;
    streakPill.classList.add('pulse');

    updateHeaderUI();
    renderPenaltyTrack();

    document.getElementById('btn-check-answer').classList.add('hidden');
    document.getElementById('btn-next-question').classList.remove('hidden');
  } else {
    arcadeAudio.playMiss();
    session.currentStreak = 0;
    updateHeaderUI();

    if (session.attemptsOnCurrent === 1) {
      session.attemptsOnCurrent = 2;
      document.getElementById('attempt-counter').textContent = `ניסיון 2`;
      fb.className = 'feedback-banner error';
      fb.textContent = 'בקורה! 🥅 היעזר ברמז ונסה שוב!';
      document.getElementById('hint-box').classList.remove('hidden');
    } else {
      session.answeredCurrent = true;
      session.penaltyHistory[session.currentIndex] = 'missed';

      const tStat = appState.topicStats[q.topicId] || { solved: 0, correct: 0, stars: 0 };
      tStat.solved++;
      appState.topicStats[q.topicId] = tStat;
      saveState();

      document.querySelectorAll('#q-options-container .option-row').forEach(el => {
        if (correctSet.has(el.dataset.val)) {
          el.classList.add('correct');
          el.querySelector('.opt-indicator').textContent = '✔';
        } else if (session.selectedOptions.has(el.dataset.val)) {
          el.classList.add('wrong');
        }
      });

      ball.className = 'soccer-ball-shot miss-anim';
      fb.className = 'feedback-banner error';
      fb.textContent = `התשובה הנכונה: ${q.correctAnswers.join(' , ')}`;
      renderPenaltyTrack();

      document.getElementById('btn-check-answer').classList.add('hidden');
      document.getElementById('btn-next-question').classList.remove('hidden');
    }
  }
}

function nextQuestion() {
  arcadeAudio.playClick();
  session.currentIndex++;
  if (session.currentIndex >= session.totalQuestions) {
    finishMatch();
  } else {
    renderCurrentQuestion();
  }
}

function finishMatch() {
  clearInterval(session.timerInterval);
  arcadeAudio.playWhistleVictory();
  confetti.burst(130);

  const ratio = session.correctCount / session.totalQuestions;
  if (ratio >= 0.7) {
    appState.trophies += session.isDailyBonus ? 2 : 1;
  }
  saveState();
  updateHeaderUI();

  document.getElementById('sum-correct').textContent = `${session.correctCount}/${session.totalQuestions}`;
  document.getElementById('sum-coins').textContent = `+${session.coinsEarned}`;
  document.getElementById('sum-streak').textContent = session.maxSessionStreak;

  switchView('summary');
}

// ==================== STICKER ALBUM & SHOP ====================

function renderShopView() {
  document.getElementById('shop-coins-balance').textContent = appState.coins;
  document.getElementById('album-count').textContent = `${appState.unlockedStickers.length}/${STICKER_CATALOG.length}`;
  const pct = Math.round((appState.unlockedStickers.length / STICKER_CATALOG.length) * 100);
  document.getElementById('album-progress-fill').style.width = `${pct}%`;

  const grid = document.getElementById('stickers-grid');
  grid.innerHTML = '';

  STICKER_CATALOG.forEach(st => {
    const unlocked = appState.unlockedStickers.includes(st.id);
    const card = document.createElement('div');
    card.className = `sticker-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="sticker-emoji">${st.emoji}</div>
      <div class="sticker-name">${unlocked ? st.name : '???'}</div>
      <div class="sticker-rarity">${st.rarity}</div>
    `;
    if (unlocked) {
      card.addEventListener('click', () => {
        appState.avatar = st.emoji;
        saveState();
        updateHeaderUI();
        arcadeAudio.playClick();
      });
    }
    grid.appendChild(card);
  });
}

function buyMysteryPack() {
  const PACK_COST = 50;
  if (appState.coins < PACK_COST) {
    arcadeAudio.playMiss();
    alert(`חסרים לך עוד ${PACK_COST - appState.coins} מטבעות! ⚽`);
    return;
  }

  appState.coins -= PACK_COST;
  const locked = STICKER_CATALOG.filter(s => !appState.unlockedStickers.includes(s.id));

  if (locked.length > 0) {
    const chosen = locked[Math.floor(Math.random() * locked.length)];
    appState.unlockedStickers.push(chosen.id);
    appState.avatar = chosen.emoji;
    arcadeAudio.playUnlock();
    confetti.burst(95);
    alert(`🎉 קלף חדש: ${chosen.emoji} "${chosen.name}"!`);
  } else {
    appState.trophies += 1;
    arcadeAudio.playUnlock();
    confetti.burst(95);
    alert(`👑 השלמת את כל האלבום! קיבלת גביע זהב!`);
  }

  saveState();
  updateHeaderUI();
  renderShopView();
}

// ==================== PARENTS ZONE & SECURITY GATE ====================

function parseSmartWhatsAppOrWebtopInput(rawText) {
  const lines = rawText.split(/\n+/).map(l => l.trim()).filter(Boolean);
  let addedHw = 0;
  let addedDict = 0;
  let addedSched = 0;

  lines.forEach(line => {
    const clean = line.replace(/^[-*•]\s*/, '');

    // 1. Check if line contains dictation words (e.g. "הכתבה: מילה1, מילה2, מילה3")
    if (clean.includes('הכתבה') && (clean.includes(':') || clean.includes('-'))) {
      const afterColon = clean.split(/[:\-]/).slice(1).join(' ').trim();
      const words = afterColon.split(/[,،\s]+/).map(w => w.trim()).filter(w => w.length >= 2);
      if (words.length >= 2) {
        words.forEach(w => {
          if (!appState.dictationWords.some(dw => dw.word === w)) {
            appState.dictationWords.push({ word: w, hint: 'מילה מההכתבה השבועית 🎧' });
            addedDict++;
          }
        });
        return;
      }
    }

    // 2. Check if line mentions a specific day or afternoon / school event
    const dayMap = [
      { keys: ['יום ראשון', 'ביום א'], idx: 0 },
      { keys: ['יום שני', 'ביום ב'], idx: 1 },
      { keys: ['יום שלישי', 'ביום ג'], idx: 2 },
      { keys: ['יום רביעי', 'ביום ד'], idx: 3 },
      { keys: ['יום חמישי', 'ביום ה'], idx: 4 },
      { keys: ['יום שישי', 'ביום ו'], idx: 5 }
    ];
    let matchedDay = null;
    for (const d of dayMap) {
      if (d.keys.some(k => clean.includes(k))) {
        matchedDay = d.idx;
        break;
      }
    }
    if (clean.includes('מחר')) {
      matchedDay = (new Date().getDay() + 1) % 7;
    }

    if (matchedDay !== null && (clean.includes('אימון') || clean.includes('חוג') || clean.includes('להביא') || clean.includes('טיול') || clean.includes('טקס') || clean.includes('ספורט'))) {
      if (!appState.schedule[matchedDay]) appState.schedule[matchedDay] = { school: [], after: [] };
      const isAfter = clean.includes('אימון') || clean.includes('חוג') || clean.includes('אחה"צ');
      const icon = clean.includes('כדורגל') ? '⚽' : clean.includes('ספורט') ? '🏃' : '📌';
      appState.schedule[matchedDay][isAfter ? 'after' : 'school'].push({
        icon,
        title: clean.slice(0, 42),
        time: ''
      });
      addedSched++;
      return;
    }

    // 3. Otherwise treat as Homework / Task from Webtop or WhatsApp
    let icon = '📚';
    let subject = 'וואטסאפ / Webtop';
    if (clean.includes('חשבון') || clean.includes('הנדסה') || clean.includes('עמ')) {
      icon = '🔢';
      subject = 'חשבון (Webtop)';
    } else if (clean.includes('שפה') || clean.includes('עברית') || clean.includes('קריאה')) {
      icon = '📖';
      subject = 'שפה (Webtop)';
    } else if (clean.includes('אנגלית')) {
      icon = '🌍';
      subject = 'אנגלית (Webtop)';
    } else if (clean.includes('קלינאית') || clean.includes('דיבור')) {
      icon = '🎙️';
      subject = 'תרגול קלינאית';
    }

    appState.homeworkList.unshift({
      id: 'hw_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      icon,
      subject,
      title: clean,
      done: false
    });
    addedHw++;
  });

  saveState();
  updateHeaderUI();
  renderParentsView();
  return { addedHw, addedDict, addedSched };
}

function checkAuthGate() {
  const gate = document.getElementById('auth-gate-overlay');
  if (!gate) return;
  const savedAuth = localStorage.getItem(AUTH_SESSION_KEY);
  if (savedAuth) {
    gate.classList.add('hidden');
    const badge = document.getElementById('logged-in-user-badge');
    if (badge) badge.textContent = savedAuth;
  } else {
    gate.classList.remove('hidden');
    initGoogleSSO();
  }
}

function unlockFamilyApp(identityLabel) {
  localStorage.setItem(AUTH_SESSION_KEY, identityLabel);
  document.getElementById('auth-gate-overlay').classList.add('hidden');
  const badge = document.getElementById('logged-in-user-badge');
  if (badge) badge.textContent = identityLabel;
  arcadeAudio.playGoalSuccess();
  confetti.burst(50);
}

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
  } catch (e) {
    return null;
  }
}

function initGoogleSSO() {
  if (!window.google || !window.google.accounts || !appState.googleClientId) return;
  try {
    window.google.accounts.id.initialize({
      client_id: appState.googleClientId,
      callback: (response) => {
        const payload = decodeJwtPayload(response.credential);
        if (!payload || !payload.email) return;
        const email = payload.email.toLowerCase();
        const allowed = (appState.allowedEmails || []).map(e => e.toLowerCase());
        if (allowed.length === 0 || allowed.includes(email)) {
          if (allowed.length === 0) {
            appState.allowedEmails = [email];
            saveState();
          }
          unlockFamilyApp(`${payload.name || email} (Google SSO ✅)`);
        } else {
          const errEl = document.getElementById('auth-error-msg');
          errEl.textContent = `החשבון ${email} אינו ברשימת המורשים של המשפחה!`;
          errEl.classList.remove('hidden');
          arcadeAudio.playMiss();
        }
      }
    });
    const container = document.getElementById('g-signin-btn-container');
    if (container) {
      container.innerHTML = '';
      window.google.accounts.id.renderButton(container, { theme: 'outline', size: 'large', shape: 'pill' });
      document.getElementById('btn-google-sso').classList.add('hidden');
    }
  } catch (e) {}
}

function renderParentsView() {
  // 0. Dev Requests & Security Settings
  if (!appState.devRequests) appState.devRequests = [];
  const devList = document.getElementById('dev-requests-list');
  const devCount = document.getElementById('dev-req-count');
  if (devList && devCount) {
    devCount.textContent = appState.devRequests.length;
    devList.innerHTML = '';
    if (appState.devRequests.length === 0) {
      devList.innerHTML = `<div class="custom-q-item">עדיין לא נשלחו בקשות פיתוח חדשות מהנייד.</div>`;
    } else {
      appState.devRequests.forEach((req, idx) => {
        const el = document.createElement('div');
        el.className = 'custom-q-item';
        el.innerHTML = `
          <span>🚀 <strong>${req.date}:</strong> ${req.text} <em>(${req.status || 'ממתין לפיתוח'})</em></span>
          <button class="del-q-btn">מחק</button>
        `;
        el.querySelector('.del-q-btn').addEventListener('click', () => {
          appState.devRequests.splice(idx, 1);
          saveState();
          renderParentsView();
        });
        devList.appendChild(el);
      });
    }
  }

  const pinDisp = document.getElementById('current-pin-display');
  if (pinDisp) pinDisp.textContent = appState.familyPin || '1936';
  const pinInp = document.getElementById('sec-family-pin');
  if (pinInp) pinInp.value = appState.familyPin || '1936';
  const emailsInp = document.getElementById('sec-allowed-emails');
  if (emailsInp) emailsInp.value = (appState.allowedEmails || []).join(', ');
  const cidInp = document.getElementById('sec-google-client-id');
  if (cidInp) cidInp.value = appState.googleClientId || '';
  const gemInp = document.getElementById('sec-gemini-key');
  if (gemInp) gemInp.value = appState.geminiApiKey || '';

  // 1. Speech Therapy Logs & Words
  const spLogList = document.getElementById('parent-speech-logs');
  document.getElementById('parent-sp-log-count').textContent = (appState.speechLogs || []).length;
  spLogList.innerHTML = '';

  if (!appState.speechLogs || appState.speechLogs.length === 0) {
    spLogList.innerHTML = `<div class="custom-q-item">עדיין אין הקלטות היום. כשעילי יתרגל ב"אלוף הדיבור" זה יופיע כאן!</div>`;
  } else {
    appState.speechLogs.forEach((log) => {
      const el = document.createElement('div');
      el.className = 'custom-q-item';
      el.innerHTML = `
        <span>🕒 ${log.date} | <strong>${log.phrase}</strong></span>
        ${log.audioDataUrl ? `<button class="arcade-btn btn-gold" style="padding:4px 12px;font-size:0.85rem;">▶️ שמע הקלטה</button>` : `<span>✅ תורגל</span>`}
      `;
      if (log.audioDataUrl) {
        el.querySelector('button').addEventListener('click', () => {
          const audio = new Audio(log.audioDataUrl);
          audio.play();
        });
      }
      spLogList.appendChild(el);
    });
  }

  const spLines = (appState.speechCards || []).map(c => c.emoji ? `${c.phrase} - ${c.emoji}` : c.phrase);
  document.getElementById('speech-words-textarea').value = spLines.join('\n');

  // 2. Schedule editor list
  const selDay = Number(document.getElementById('sched-day-select').value || 0);
  const dayData = appState.schedule[selDay] || { school: [], after: [] };
  const pSchedList = document.getElementById('parent-sched-list');
  pSchedList.innerHTML = '';

  (dayData.school || []).forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'custom-q-item';
    el.innerHTML = `
      <span>🏫 בוקר: ${item.icon} <strong>${item.title}</strong> (${item.time || ''})</span>
      <button class="del-q-btn">מחק</button>
    `;
    el.querySelector('.del-q-btn').addEventListener('click', () => {
      dayData.school.splice(idx, 1);
      saveState();
      renderParentsView();
    });
    pSchedList.appendChild(el);
  });

  (dayData.after || []).forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'custom-q-item';
    el.innerHTML = `
      <span>⚽ אחה"צ: ${item.icon} <strong>${item.title}</strong> (${item.time || ''})</span>
      <button class="del-q-btn">מחק</button>
    `;
    el.querySelector('.del-q-btn').addEventListener('click', () => {
      dayData.after.splice(idx, 1);
      saveState();
      renderParentsView();
    });
    pSchedList.appendChild(el);
  });

  // 3. Homework list
  const pHwList = document.getElementById('parent-hw-list');
  pHwList.innerHTML = '';
  (appState.homeworkList || []).forEach((hw, idx) => {
    const el = document.createElement('div');
    el.className = 'custom-q-item';
    el.innerHTML = `
      <span>${hw.done ? '✅' : '⏳'} ${hw.icon} <strong>${hw.subject}:</strong> ${hw.title}</span>
      <button class="del-q-btn">מחק</button>
    `;
    el.querySelector('.del-q-btn').addEventListener('click', () => {
      appState.homeworkList.splice(idx, 1);
      saveState();
      renderParentsView();
      updateHeaderUI();
    });
    pHwList.appendChild(el);
  });

  // 4. Dictation textarea & Stats
  const dictLines = (appState.dictationWords || []).map(w => w.hint ? `${w.word} - ${w.hint}` : w.word);
  document.getElementById('dict-words-textarea').value = dictLines.join('\n');

  let totalSolved = 0;
  let totalCorrect = 0;
  const listEl = document.getElementById('parent-topic-stats');
  listEl.innerHTML = '';

  TOPICS.forEach(t => {
    const st = appState.topicStats[t.id] || { solved: 0, correct: 0 };
    totalSolved += st.solved;
    totalCorrect += st.correct;
    const acc = st.solved > 0 ? Math.round((st.correct / st.solved) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'topic-stat-item';
    row.innerHTML = `
      <span>${t.icon} ${t.title}</span>
      <span>${st.correct}/${st.solved} (${acc}%)</span>
    `;
    listEl.appendChild(row);
  });

  document.getElementById('p-total-solved').textContent = totalSolved;
  document.getElementById('p-accuracy').textContent =
    totalSolved > 0 ? `${Math.round((totalCorrect / totalSolved) * 100)}%` : '0%';
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', () => {
  loadState().then(() => {
    checkAuthGate();
  });
  updateHeaderUI();
  renderTopicsGrid();

  // Family Security Gate: PIN Login
  document.getElementById('form-family-pin').addEventListener('submit', (e) => {
    e.preventDefault();
    const entered = document.getElementById('family-pin-input').value.trim();
    const targetPin = String(appState.familyPin || '1936').trim();
    const allowedEmails = (appState.allowedEmails || []).map(em => em.toLowerCase());

    if (entered === targetPin || (allowedEmails.length > 0 && allowedEmails.includes(entered.toLowerCase()))) {
      document.getElementById('auth-error-msg').classList.add('hidden');
      unlockFamilyApp('בן משפחה מורשה 🦁👑');
    } else {
      const errEl = document.getElementById('auth-error-msg');
      errEl.textContent = 'קוד שגוי! הכניסה למשפחה בלבד 🔒';
      errEl.classList.remove('hidden');
      arcadeAudio.playMiss();
    }
  });

  // Google SSO Button Fallback / Trigger
  document.getElementById('btn-google-sso').addEventListener('click', () => {
    if (appState.googleClientId && window.google && window.google.accounts) {
      window.google.accounts.id.prompt();
    } else {
      const email = prompt('הזן את כתובת ה-Google (Gmail) המורשית שלך לכניסה וזיהוי:');
      if (!email) return;
      const cleanEmail = email.trim().toLowerCase();
      const allowed = (appState.allowedEmails || []).map(em => em.toLowerCase());
      if (allowed.length === 0 || allowed.includes(cleanEmail)) {
        if (allowed.length === 0) {
          appState.allowedEmails = [cleanEmail];
          saveState();
        }
        unlockFamilyApp(`${cleanEmail} (Google ✅)`);
      } else {
        const errEl = document.getElementById('auth-error-msg');
        errEl.textContent = `הכתובת ${cleanEmail} אינה ברשימת המורשים!`;
        errEl.classList.remove('hidden');
        arcadeAudio.playMiss();
      }
    }
  });

  // Lock Device Button
  const logoutBtn = document.getElementById('btn-logout-device');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem(AUTH_SESSION_KEY);
      checkAuthGate();
    });
  }

  // Parents: Unified Smart WhatsApp & Webtop Import (Gallery / Clipboard / Paste / Text)
  let pendingSmartImageDataUrl = null;
  let activeOcrPromise = null;

  function resizeImageFileToDataUrl(file, maxWidth = 1500) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let w = img.width;
          let h = img.height;
          if (w > maxWidth) {
            h = Math.round((h * maxWidth) / w);
            w = maxWidth;
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.9));
        };
        img.onerror = () => resolve(ev.target.result);
        img.src = ev.target.result;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
  }

  async function extractTextFromImageSmart(dataUrl, statusBox) {
    // 1. If Gemini API Key is set, use Gemini 2.5 Flash Vision (100% accurate Hebrew screenshot reader)
    if (appState.geminiApiKey && appState.geminiApiKey.trim().length > 10) {
      try {
        if (statusBox) statusBox.textContent = '✨ מפענח תמונה באמצעות Gemini AI...';
        const base64Data = dataUrl.split(',')[1];
        const mimeType = dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';')) || 'image/jpeg';
        const gemRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(appState.geminiApiKey.trim())}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [
                  { text: 'חלץ את כל הטקסט בעברית מתוך צילום המסך (שיעורי בית, משימות מ-Webtop, מילים להכתבה או הודעות וואטסאפ). החזר אך ורק את שורות הטקסט הנקיות בעברית, שורה אחר שורה, ללא הקדמות.' },
                  { inline_data: { mime_type: mimeType, data: base64Data } }
                ]
              }]
            })
          }
        );
        if (gemRes.ok) {
          const gemJson = await gemRes.json();
          const text = gemJson?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (text && text.length > 2) return text;
        }
      } catch (e) {
        console.warn('Gemini Vision fallback:', e);
      }
    }

    // 2. Try Cloud OCR API (OCR.space Hebrew engine)
    try {
      if (statusBox) statusBox.textContent = '⏳ קורא טקסט מתוך התמונה...';
      const fd = new FormData();
      fd.append('base64Image', dataUrl);
      fd.append('language', 'heb');
      fd.append('isOverlayRequired', 'false');
      fd.append('scale', 'true');
      const r = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        headers: { 'apikey': 'helloworld' },
        body: fd
      });
      if (r.ok) {
        const j = await r.json();
        if (j && j.ParsedResults && j.ParsedResults[0] && j.ParsedResults[0].ParsedText) {
          const t = j.ParsedResults[0].ParsedText.trim();
          if (t.length > 2) return t;
        }
      }
    } catch (e) {}

    // 3. Reliable In-Browser Hebrew OCR via Tesseract.js v5 with live percentage progress
    try {
      if (statusBox) statusBox.textContent = '⏳ טוען קורא עברית חכם...';
      if (!window.Tesseract) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      const ret = await window.Tesseract.recognize(dataUrl, 'heb', {
        logger: (m) => {
          if (statusBox && m && m.status === 'recognizing text') {
            const pct = Math.round((m.progress || 0) * 100);
            statusBox.textContent = `⏳ קורא עברית מהתמונה... ${pct}%`;
          }
        }
      });
      return (ret && ret.data && ret.data.text ? ret.data.text : '').trim();
    } catch (err) {
      console.error('Tesseract fallback error:', err);
      return '';
    }
  }

  async function setSmartPendingImage(file) {
    const prevBox = document.getElementById('smart-img-preview-box');
    const prevImg = document.getElementById('smart-img-preview');
    const nameLbl = document.getElementById('attached-img-name');
    const statusBox = document.getElementById('ocr-status-box');
    const inp = document.getElementById('smart-import-text');

    if (!file) {
      pendingSmartImageDataUrl = null;
      activeOcrPromise = null;
      if (nameLbl) nameLbl.textContent = '';
      if (prevBox) prevBox.classList.add('hidden');
      if (statusBox) statusBox.classList.add('hidden');
      const imgInput = document.getElementById('webtop-image-upload');
      if (imgInput) imgInput.value = '';
      return;
    }

    if (nameLbl) nameLbl.textContent = '⏳ מכין תמונה...';
    pendingSmartImageDataUrl = await resizeImageFileToDataUrl(file);
    if (!pendingSmartImageDataUrl) return;

    if (prevImg && prevBox) {
      prevImg.src = pendingSmartImageDataUrl;
      prevBox.classList.remove('hidden');
    }
    if (nameLbl) nameLbl.textContent = file.name || 'צילום מסך נבחר ✅';

    // Immediately start extracting text into the textarea so the user sees it live!
    if (statusBox) {
      statusBox.classList.remove('hidden');
      statusBox.textContent = '⏳ מפענח אוטומטית את הטקסט מהתמונה...';
    }

    const currentDataUrl = pendingSmartImageDataUrl;
    activeOcrPromise = (async () => {
      const rawText = await extractTextFromImageSmart(currentDataUrl, statusBox);
      const cleaned = (rawText || '')
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 1)
        .join('\n');

      if (statusBox) {
        if (cleaned) {
          statusBox.textContent = '✅ הטקסט חולץ מהתמונה! לחצו על "פענח ועדכן לעילי" לשמירה.';
        } else {
          statusBox.textContent = '💡 התמונה מוכנה. אם הטקסט לא זוהה אוטומטית, ניתן לערוך/להדביק בתיבה למטה.';
        }
      }
      if (cleaned && inp) {
        inp.value = inp.value.trim() ? `${inp.value.trim()}\n${cleaned}` : cleaned;
      }
      return cleaned;
    })();
  }

  const imgUpload = document.getElementById('webtop-image-upload');
  if (imgUpload) {
    imgUpload.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) setSmartPendingImage(file);
    });
  }

  const removeImgBtn = document.getElementById('btn-remove-smart-img');
  if (removeImgBtn) {
    removeImgBtn.addEventListener('click', () => setSmartPendingImage(null));
  }

  // Dedicated "📋 הדבק מהלוח" button for iPhone / Android / Desktop (supports both copied images & text)
  const pasteClipBtn = document.getElementById('btn-paste-clipboard');
  if (pasteClipBtn) {
    pasteClipBtn.addEventListener('click', async () => {
      const inp = document.getElementById('smart-import-text');
      try {
        if (navigator.clipboard && navigator.clipboard.read) {
          const items = await navigator.clipboard.read();
          for (const item of items) {
            const imgType = item.types.find(t => t.startsWith('image/'));
            if (imgType) {
              const blob = await item.getType(imgType);
              if (blob) {
                await setSmartPendingImage(new File([blob], 'clipboard-image.png', { type: imgType }));
                return;
              }
            }
            if (item.types.includes('text/plain')) {
              const textBlob = await item.getType('text/plain');
              const txt = (await textBlob.text()).trim();
              if (txt && inp) {
                inp.value = inp.value.trim() ? `${inp.value.trim()}\n${txt}` : txt;
                arcadeAudio.playClick();
                return;
              }
            }
          }
        }
        if (navigator.clipboard && navigator.clipboard.readText) {
          const txt = (await navigator.clipboard.readText()).trim();
          if (txt && inp) {
            inp.value = inp.value.trim() ? `${inp.value.trim()}\n${txt}` : txt;
            arcadeAudio.playClick();
            return;
          }
        }
        if (inp) {
          inp.focus();
          alert('לחיצה ארוכה בתיבת הטקסט -> "הדבק" (Paste) תדביק את התמונה או הטקסט מהלוח.');
        }
      } catch (err) {
        if (inp) {
          inp.focus();
          alert('באייפון: לחצו לחיצה ארוכה בתוך תיבת הטקסט ובחרו "הדבק" (Paste).');
        }
      }
    });
  }

  // Support pasting an image directly anywhere in the form or textarea
  document.addEventListener('paste', (e) => {
    if (!document.getElementById('view-parents')?.classList.contains('active')) return;
    const items = (e.clipboardData || e.originalEvent?.clipboardData || {}).items || [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].type && items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          e.preventDefault();
          setSmartPendingImage(blob);
          break;
        }
      }
    }
  });

  const smartForm = document.getElementById('form-smart-import');
  if (smartForm) {
    smartForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inp = document.getElementById('smart-import-text');
      const statusBox = document.getElementById('ocr-status-box');
      const resBox = document.getElementById('smart-import-result');
      const submitBtn = document.getElementById('btn-smart-submit');

      if (activeOcrPromise && !inp.value.trim()) {
        if (submitBtn) submitBtn.disabled = true;
        await activeOcrPromise;
        if (submitBtn) submitBtn.disabled = false;
      }

      let combinedText = inp.value.trim();

      if (!combinedText && pendingSmartImageDataUrl) {
        if (statusBox) {
          statusBox.classList.remove('hidden');
          statusBox.textContent = '⏳ מפענח את הטקסט מתוך התמונה...';
        }
        if (submitBtn) submitBtn.disabled = true;
        const extracted = await extractTextFromImageSmart(pendingSmartImageDataUrl, statusBox);
        if (submitBtn) submitBtn.disabled = false;
        if (extracted && extracted.trim()) {
          combinedText = extracted.trim();
          inp.value = combinedText;
        }
      }

      if (!combinedText) {
        alert('לא זוהה טקסט. בחרו תמונה ברורה מהגלריה או הדביקו טקסט בתיבה.');
        return;
      }

      const res = parseSmartWhatsAppOrWebtopInput(combinedText);
      setSmartPendingImage(null);
      inp.value = '';
      arcadeAudio.playGoalSuccess();
      if (resBox) {
        resBox.classList.remove('hidden');
        resBox.innerHTML = `✅ <strong>עודכן בהצלחה לעילי!</strong> נוספו: ${res.addedHw} משימות, ${res.addedDict} מילים להכתבה, ו-${res.addedSched} עדכונים למערכת השעות.`;
      }
    });
  }

  // Support URL Share Shortcut (?import=...) from iOS Shortcuts / Webtop Share
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedText = urlParams.get('import');
    if (sharedText) {
      setTimeout(() => {
        parseSmartWhatsAppOrWebtopInput(sharedText);
        window.history.replaceState({}, document.title, window.location.pathname);
        alert('📲 ההודעה מוואטסאפ / Webtop נקלטה ועודכנה באפליקציה של עילי!');
      }, 900);
    }
  } catch (e) {}

  // Parents: Dev Feature Request Form (Mobile -> Antigravity AI)
  const devForm = document.getElementById('form-dev-request');
  if (devForm) {
    devForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inp = document.getElementById('dev-req-input');
      const text = inp.value.trim();
      if (!text) return;
      if (!appState.devRequests) appState.devRequests = [];
      const nowStr = new Date().toLocaleDateString('he-IL') + ' ' + new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
      appState.devRequests.unshift({
        id: 'req_' + Date.now(),
        date: nowStr,
        text,
        status: 'נשמר בענן ☁️'
      });
      inp.value = '';
      saveState();
      renderParentsView();
      arcadeAudio.playGoalSuccess();
      alert('🚀 הבקשה נשלחה ונשמרה בענן! בפעם הבאה שתכתוב לי בשיחה "תבצע את הבקשות" (או דרך לינק הוואטסאפ/שיחה), אבנה ואעדכן את זה מיד!');
    });
  }

  // Parents: Security Settings Form
  const secForm = document.getElementById('form-security-settings');
  if (secForm) {
    secForm.addEventListener('submit', (e) => {
      e.preventDefault();
      appState.familyPin = document.getElementById('sec-family-pin').value.trim() || '1936';
      const rawEmails = document.getElementById('sec-allowed-emails').value.trim();
      appState.allowedEmails = rawEmails ? rawEmails.split(',').map(s => s.trim().toLowerCase()).filter(Boolean) : [];
      appState.googleClientId = document.getElementById('sec-google-client-id').value.trim();
      const gemEl = document.getElementById('sec-gemini-key');
      if (gemEl) appState.geminiApiKey = gemEl.value.trim();
      saveState();
      renderParentsView();
      initGoogleSSO();
      alert('🔐 ההגדרות נשמרו בהצלחה!');
    });
  }

  // Top navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView(btn.dataset.view);
    });
  });

  // 4 Big Home Visual Tiles
  document.getElementById('quick-open-speech').addEventListener('click', () => {
    arcadeAudio.playClick();
    switchView('speech');
  });
  document.getElementById('quick-open-schedule').addEventListener('click', () => {
    arcadeAudio.playClick();
    switchView('schedule');
  });
  document.getElementById('quick-open-hw').addEventListener('click', () => {
    arcadeAudio.playClick();
    switchView('homework');
  });
  document.getElementById('quick-open-dict').addEventListener('click', () => {
    arcadeAudio.playClick();
    switchView('dictation');
  });

  // Speech Studio Listeners
  document.getElementById('btn-leave-speech').addEventListener('click', () => switchView('home'));
  document.getElementById('btn-sp-model-listen').addEventListener('click', () => {
    const card = speechSession.cards[speechSession.index];
    if (card) arcadeAudio.speak(card.phrase, 'he-IL', 0.82);
  });
  document.getElementById('btn-sp-record').addEventListener('click', toggleSpeechRecording);
  document.getElementById('btn-sp-play-self').addEventListener('click', () => {
    if (speechSession.lastAudioUrl) {
      const audio = new Audio(speechSession.lastAudioUrl);
      audio.play();
    }
  });
  document.getElementById('btn-sp-next').addEventListener('click', nextSpeechCard);

  // Schedule Day Tabs & Kid Quick-Add
  document.querySelectorAll('#day-tabs-bar .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      appState.selectedDay = Number(tab.dataset.day);
      renderScheduleView();
    });
  });
  document.getElementById('btn-speak-day').addEventListener('click', speakCurrentDaySchedule);

  document.querySelectorAll('.kid-quick-add-bar .kqa-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.dataset.icon;
      const title = btn.dataset.title;
      const day = appState.selectedDay;
      if (!appState.schedule[day]) appState.schedule[day] = { school: [], after: [] };
      appState.schedule[day].after.push({ icon, title, time: '' });
      saveState();
      arcadeAudio.playGoalSuccess();
      renderScheduleView();
      updateHeaderUI();
    });
  });

  // Kid Self-Add Homework/Goal
  document.getElementById('form-kid-add-hw').addEventListener('submit', (e) => {
    e.preventDefault();
    const inp = document.getElementById('kid-hw-input');
    const title = inp.value.trim();
    if (!title) return;
    appState.homeworkList.push({
      id: 'hw_' + Date.now(),
      icon: '🌟',
      subject: 'מטרה של עילי',
      title,
      done: false
    });
    inp.value = '';
    saveState();
    arcadeAudio.playGoalSuccess();
    renderHomeworkView();
    updateHeaderUI();
  });

  // Dictation Listeners
  document.getElementById('btn-leave-dictation').addEventListener('click', () => switchView('home'));
  document.getElementById('btn-dict-speak').addEventListener('click', () => {
    const item = dictSession.words[dictSession.index];
    if (item) arcadeAudio.speak(item.word, 'he-IL', 0.9);
  });
  document.getElementById('btn-dict-speak-slow').addEventListener('click', () => {
    const item = dictSession.words[dictSession.index];
    if (item) arcadeAudio.speak(item.word, 'he-IL', 0.55);
  });
  document.getElementById('btn-dict-peek').addEventListener('click', () => {
    document.getElementById('dict-peek-box').classList.toggle('hidden');
  });
  document.getElementById('dict-user-input').addEventListener('input', updateDictationSlots);
  document.getElementById('btn-dict-backspace').addEventListener('click', () => {
    const inp = document.getElementById('dict-user-input');
    inp.value = inp.value.slice(0, -1);
    updateDictationSlots();
  });
  document.getElementById('btn-dict-check').addEventListener('click', checkDictationWord);
  document.getElementById('btn-dict-next').addEventListener('click', nextDictationWord);

  // Sound toggle
  const soundBtn = document.getElementById('btn-sound-toggle');
  soundBtn.addEventListener('click', () => {
    arcadeAudio.enabled = !arcadeAudio.enabled;
    soundBtn.textContent = arcadeAudio.enabled ? '🔊' : '🔇';
  });

  // Profile button -> opens sticker album
  document.getElementById('btn-profile').addEventListener('click', () => {
    arcadeAudio.playClick();
    switchView('shop');
  });

  // Team Switcher
  document.querySelectorAll('#team-switcher .team-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      const team = btn.dataset.team;
      applyTeamTheme(team);
      if (team === 'beitar' && appState.avatar === '👑') appState.avatar = '🦁';
      if (team === 'real' && appState.avatar === '🦁') appState.avatar = '👑';
      saveState();
      updateHeaderUI();
    });
  });

  // Daily challenge button
  document.getElementById('btn-daily-match').addEventListener('click', () => {
    arcadeAudio.playClick();
    startMatch('daily_mix', 'גמר גביע האלופים 🏆', true);
  });

  // Category Tabs
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.selectedCategory = tab.dataset.cat;
      renderTopicsGrid();
    });
  });

  // Difficulty & Mode Selectors
  document.querySelectorAll('#difficulty-selector .pill-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#difficulty-selector .pill-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.difficulty = btn.dataset.diff;
      saveState();
    });
  });

  document.querySelectorAll('#gamemode-selector .pill-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#gamemode-selector .pill-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.gameMode = btn.dataset.mode;
      saveState();
    });
  });

  // Arena controls
  document.getElementById('btn-leave-arena').addEventListener('click', () => switchView('home'));
  document.getElementById('btn-speak-question').addEventListener('click', () => {
    const q = session.questions[session.currentIndex];
    if (q) arcadeAudio.speak(q.ttsText || q.instruction);
  });
  document.getElementById('btn-hint').addEventListener('click', () => {
    arcadeAudio.playClick();
    document.getElementById('hint-box').classList.toggle('hidden');
  });
  document.getElementById('btn-check-answer').addEventListener('click', checkCurrentAnswer);
  document.getElementById('btn-next-question').addEventListener('click', nextQuestion);

  // Summary buttons
  document.getElementById('btn-play-again').addEventListener('click', () => {
    startMatch(session.topicId, session.topicTitle, session.isDailyBonus);
  });
  document.getElementById('btn-summary-shop').addEventListener('click', () => switchView('shop'));
  document.getElementById('btn-summary-home').addEventListener('click', () => switchView('home'));

  // Shop pack button
  document.getElementById('btn-buy-pack').addEventListener('click', buyMysteryPack);

  // Parents: Speech Therapy form
  document.getElementById('form-save-speech').addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = document.getElementById('speech-words-textarea').value;
    const lines = raw.split('\n').map(s => s.trim()).filter(Boolean);
    const parsed = lines.map(line => {
      const parts = line.split('-');
      return {
        phrase: parts[0].trim(),
        emoji: parts.slice(1).join('-').trim() || '🎙️⚽'
      };
    }).filter(c => c.phrase.length > 0);

    if (parsed.length > 0) {
      appState.speechCards = parsed;
      saveState();
      alert(`נשמרו ${parsed.length} כרטיסיות דיבור (ש׳ ו-ס׳) לעילי! 🎙️`);
    }
  });

  // Parents: Schedule form
  document.getElementById('sched-day-select').addEventListener('change', renderParentsView);
  document.getElementById('form-add-schedule').addEventListener('submit', (e) => {
    e.preventDefault();
    const day = Number(document.getElementById('sched-day-select').value);
    const part = document.getElementById('sched-part-select').value;
    const [icon, title] = document.getElementById('sched-preset-select').value.split('|');
    const time = document.getElementById('sched-time-input').value.trim();

    if (!appState.schedule[day]) appState.schedule[day] = { school: [], after: [] };
    appState.schedule[day][part].push({ icon, title, time });
    saveState();
    document.getElementById('sched-time-input').value = '';
    renderParentsView();
    updateHeaderUI();
  });

  // Parents: Homework form
  document.getElementById('form-add-hw').addEventListener('submit', (e) => {
    e.preventDefault();
    const [icon, subject] = document.getElementById('hw-subject').value.split('|');
    const title = document.getElementById('hw-title').value.trim();
    appState.homeworkList.push({ id: 'hw_' + Date.now(), icon, subject, title, done: false });
    saveState();
    document.getElementById('hw-title').value = '';
    renderParentsView();
    updateHeaderUI();
  });

  // Parents: Dictation words form
  document.getElementById('form-save-dictation').addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = document.getElementById('dict-words-textarea').value;
    const lines = raw.split(/\n|,/).map(s => s.trim()).filter(Boolean);
    const parsed = lines.map(line => {
      const parts = line.split('-');
      return {
        word: parts[0].trim(),
        hint: parts.slice(1).join('-').trim() || 'הקשב למילה וכתוב אותה!'
      };
    }).filter(w => w.word.length > 0);

    if (parsed.length > 0) {
      appState.dictationWords = parsed;
      saveState();
      updateHeaderUI();
      alert(`נשמרו ${parsed.length} מילים לאימון ההכתבה של עילי! 🎧`);
    }
  });

  // Reset progress button
  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (confirm('האם לאפס את כל הנתונים והנקודות של עילי?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
});
