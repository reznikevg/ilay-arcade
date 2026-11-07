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

const LIA_STICKER_CATALOG = [
  { id: 'l1', emoji: '🦄', name: 'חד-קרן קשת בענן', rarity: 'חד-קרן קסום 🦄' },
  { id: 'l2', emoji: '💙', name: 'סטיץ׳ החבר הכי טוב', rarity: 'אוהנה 💙🌺' },
  { id: 'l3', emoji: '🩷', name: 'אנג׳ל הוורודה של סטיץ׳', rarity: 'אוהנה 💙🌺' },
  { id: 'l4', emoji: '💄', name: 'מזוודת האיפור הנוצצת של ליה', rarity: 'גלאם ויופי 💄' },
  { id: 'l5', emoji: '👩‍🏫', name: 'הגננת ליה האלופה', rarity: 'אגדי ⭐' },
  { id: 'l6', emoji: '👑', name: 'כתר היהלומים של הנסיכה ליה', rarity: 'מלכותי 👑' },
  { id: 'l7', emoji: '💅', name: 'סט לקים מנצנצים בצבעי קשת', rarity: 'גלאם ויופי 💄' },
  { id: 'l8', emoji: '🪞', name: 'מראת הקסמים של המאפרת', rarity: 'גלאם ויופי 💄' },
  { id: 'l9', emoji: '🌺', name: 'פרח ההוואי של לילו וסטיץ׳', rarity: 'אוהנה 💙🌺' },
  { id: 'l10', emoji: '🌈', name: 'גשר הקשת בענן של חדי-הקרן', rarity: 'חד-קרן קסום 🦄' },
  { id: 'l11', emoji: '👗', name: 'שמלת הנשף הוורודה', rarity: 'מלכותי 👑' },
  { id: 'l12', emoji: '🧚‍♀️', name: 'פיית הנצנצים של גן חובה', rarity: 'חד-קרן קסום 🦄' },
  { id: 'l13', emoji: '🧸', name: 'הדובי של מפגש הבוקר בגן', rarity: 'הגן של ליה 👩‍🏫' },
  { id: 'l14', emoji: '🦋', name: 'פרפר הקסם הסגול', rarity: 'חד-קרן קסום 🦄' },
  { id: 'l15', emoji: '🍦', name: 'גלידת חד-קרן מתוקה', rarity: 'נדיר ✨' },
  { id: 'l16', emoji: '🎀', name: 'קשת סרט ורודה לשיער', rarity: 'גלאם ויופי 💄' },
  { id: 'l17', emoji: '🏄‍♂️', name: 'סטיץ׳ גולש על הגלים', rarity: 'אוהנה 💙🌺' },
  { id: 'l18', emoji: '⭐', name: 'מדבקת כוכב הזהב של הגננת', rarity: 'הגן של ליה 👩‍🏫' },
  { id: 'l19', emoji: '👛', name: 'תיק האיפור המלכותי', rarity: 'גלאם ויופי 💄' },
  { id: 'l20', emoji: '👧', name: 'ליה כוכבת העל של גן חובה!', rarity: 'אגדי ⭐' }
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
  { word: 'מָזוֹן', hint: '🍎 אוכל שמזין את הגוף', alternatives: ['מזון'] },
  { word: 'שֶׁמֶשׁ', hint: '☀️ מאירה ומחממת אותנו בשמיים', alternatives: ['שמש'] },
  { word: 'עֵץ', hint: '🌳 גדל בטבע עם גזע וענפים', alternatives: ['עץ'] },
  { word: 'יָרוֹק', hint: '🌱 צבע הדשא והעלים', alternatives: ['ירוק', 'ירק'] },
  { word: 'עָלֶה', hint: '🍃 צומח על ענפי העץ', alternatives: ['עלה'] },
  { word: 'צְבָעִים', hint: '🎨 אדום, צהוב, כחול ועוד', alternatives: ['צבעים', 'צבאיים'] },
  { word: 'מִתְיַבֵּשׁ', hint: '🍂 נהיה יבש כשאין מים (כתיב חסר: מתיבש / מתייבש)', alternatives: ['מתיבש', 'מתייבש'] },
  { word: 'אוֹר', hint: '💡 ההפך מחושך', alternatives: ['אור', 'אר'] },
  { word: 'קַרְקַע', hint: '🌍 האדמה שעליה אנחנו דורכים', alternatives: ['קרקע'] },
  { word: 'צָהוֹב', hint: '💛 הצבע האהוב של בית"ר!', alternatives: ['צהוב', 'צהב'] }
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
  allowedEmails: ['reznikevg@gmail.com', 'natalieazu@gmail.com'],
  googleClientId: '',
  devRequests: [], // [{ id, date, text, status }]
  activeChild: 'ilay', // 'ilay' | 'lia'
  liaProfile: {
    coins: 60,
    trophies: 1,
    bestStreak: 0,
    avatar: '🦄',
    theme: 'unicorn', // 'unicorn' | 'stitch'
    unlockedStickers: ['l1', 'l2'],
    topicStats: {},
    kinderStars: 5
  }
};

function ensureLiaProfile() {
  if (!appState.liaProfile) {
    appState.liaProfile = {
      coins: 60,
      trophies: 1,
      bestStreak: 0,
      avatar: '🦄',
      theme: 'unicorn',
      unlockedStickers: ['l1', 'l2'],
      topicStats: {},
      kinderStars: 5
    };
  }
  if (!appState.activeChild) appState.activeChild = 'ilay';
}

function isLiaActive() {
  ensureLiaProfile();
  return appState.activeChild === 'lia';
}

function getActiveCoins() {
  return isLiaActive() ? appState.liaProfile.coins : appState.coins;
}

function addActiveCoins(amount) {
  ensureLiaProfile();
  if (isLiaActive()) {
    appState.liaProfile.coins = Math.max(0, (appState.liaProfile.coins || 0) + amount);
  } else {
    appState.coins = Math.max(0, (appState.coins || 0) + amount);
  }
}

function getActiveTrophies() {
  return isLiaActive() ? appState.liaProfile.trophies : appState.trophies;
}

function addActiveTrophies(amount) {
  ensureLiaProfile();
  if (isLiaActive()) {
    appState.liaProfile.trophies = (appState.liaProfile.trophies || 0) + amount;
  } else {
    appState.trophies = (appState.trophies || 0) + amount;
  }
}

function getActiveStickers() {
  ensureLiaProfile();
  return isLiaActive() ? appState.liaProfile.unlockedStickers : appState.unlockedStickers;
}

function getActiveCatalog() {
  return isLiaActive() ? LIA_STICKER_CATALOG : STICKER_CATALOG;
}

function getActiveTopicStats() {
  ensureLiaProfile();
  return isLiaActive() ? appState.liaProfile.topicStats : appState.topicStats;
}

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
  heardTranscript: '',
  startTime: 0,
  maxVolume: 0,
  audioContext: null,
  analyser: null,
  volInterval: null,
  activeStream: null
};

// ==================== INITIALIZATION & LIVE 24/7 CLOUD FAMILY SYNC (CLOUDFLARE) ====================

const CLOUD_BACKEND_URL = 'https://ilay-backend.reznikevg.workers.dev';

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

  // Pull from Cloudflare KV
  try {
    const res = await fetch(`${CLOUD_BACKEND_URL}/api/state`, { cache: 'no-store' });
    if (res.ok) {
      const remote = await res.json();
      if (remote && remote.updatedAt && (!appState.updatedAt || remote.updatedAt >= appState.updatedAt)) {
        const localLogs = appState.speechLogs || [];
        appState = { ...appState, ...remote };
        if (remote.speechLogs && localLogs.length > 0) {
          appState.speechLogs = remote.speechLogs.map(rl => {
            const match = localLogs.find(ll => ll.date === rl.date && ll.phrase === rl.phrase);
            return match ? match : rl;
          });
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      }
    }
  } catch (e) {}

  // Clean any junk/OCR noise from homework list
  if (appState.homeworkList) {
    appState.homeworkList = appState.homeworkList.filter(h => 
      h.source === 'webtop' || ['hw_sp','hw1','hw2','hw3'].includes(h.id) || (h.title && h.title.length > 4 && !/[₪\><\\|]/.test(h.title))
    );
  }

  if (!appState.homeworkList) appState.homeworkList = [...DEFAULT_HOMEWORK];
  if (!appState.allowedEmails) appState.allowedEmails = [];
  ['reznikevg@gmail.com', 'natalieazu@gmail.com'].forEach(em => {
    if (!appState.allowedEmails.some(ae => ae.toLowerCase() === em)) {
      appState.allowedEmails.push(em);
    }
  });
  if (!appState.dictationWords || appState.dictationWords.length === 0 || (appState.dictationWords[0] && (appState.dictationWords[0].word === 'ירושלים' || appState.dictationWords[0].word === 'יְרוּשָׁלַיִם'))) {
    appState.dictationWords = [...DEFAULT_DICTATION_WORDS];
  }
  if (!appState.playerName || appState.playerName === 'עילי' || appState.playerName === 'עילי') {
    appState.playerName = 'עילי';
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

  // Push to Cloudflare KV 24/7 Sync
  try {
    fetch(`${CLOUD_BACKEND_URL}/api/state`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appState)
    }).catch(() => {});
  } catch (e) {}
}

setInterval(async () => {
  try {
    const res = await fetch(`${CLOUD_BACKEND_URL}/api/state`, { cache: 'no-store' });
    if (!res.ok) return;
    const remote = await res.json();
    if (remote && remote.updatedAt && (!appState.updatedAt || remote.updatedAt > appState.updatedAt)) {
      const currentDay = appState.selectedDay;
      const currentCat = appState.selectedCategory;
      appState = { ...appState, ...remote, selectedDay: currentDay, selectedCategory: currentCat };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      updateHeaderUI();
      if (document.getElementById('view-schedule')?.classList.contains('active')) renderScheduleView();
      if (document.getElementById('view-homework')?.classList.contains('active')) renderHomeworkView();
      if (document.getElementById('view-parents')?.classList.contains('active')) renderParentsView();
    }
  } catch (e) {}
}, 5000);

function getRankTitle(trophies, solved) {
  if (isLiaActive()) {
    if (trophies >= 12 || solved >= 80) return 'מלכת החד-קרן והגננת הראשית 👑🦄';
    if (trophies >= 5 || solved >= 30) return 'הגננת האלופה של סטיץ׳ 👩‍🏫💙';
    return 'גן חובה • נסיכת הקסם 🦄💄';
  }
  if (trophies >= 15 || solved >= 120) return 'אגדת טדי והברנבאו 👑🦁';
  if (trophies >= 8 || solved >= 60) return 'קפטן בית"ר וריאל 🌟';
  if (trophies >= 4 || solved >= 25) return 'כוכב ההרכב הפותח ⚡';
  return 'כוכב על במגרש ⚽';
}

function applyTeamTheme(team) {
  ensureLiaProfile();
  if (isLiaActive()) {
    const liaTheme = (team === 'unicorn' || team === 'stitch') ? team : (appState.liaProfile.theme || 'unicorn');
    appState.liaProfile.theme = liaTheme;
    document.body.classList.remove('theme-beitar', 'theme-real', 'theme-unicorn', 'theme-stitch');
    document.body.classList.add(`theme-${liaTheme}`);
    document.querySelectorAll('#team-switcher .team-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.team === liaTheme);
    });
  } else {
    const ilayTeam = (team === 'beitar' || team === 'real') ? team : (appState.teamTheme || 'beitar');
    appState.teamTheme = ilayTeam;
    document.body.classList.remove('theme-beitar', 'theme-real', 'theme-unicorn', 'theme-stitch');
    document.body.classList.add(`theme-${ilayTeam}`);
    document.querySelectorAll('#team-switcher .team-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.team === ilayTeam);
    });
  }
}

function switchActiveChild(kid) {
  ensureLiaProfile();
  appState.activeChild = kid === 'lia' ? 'lia' : 'ilay';
  appState.selectedCategory = 'all';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'all'));
  saveState();
  updateHeaderUI();
  renderTopicsGrid();
  switchView('home');
  if (kid === 'lia') {
    arcadeAudio.speak('שלום ליה מתוקה! ברוכה הבאה לעולם הקסם של סטיץ׳, חד קרן, איפור והגן של ליה!', 'he-IL', 0.88);
  } else {
    arcadeAudio.speak('שלום עילי האלוף! מוכן להבקיע שערים?', 'he-IL', 0.9);
  }
}

function updateHeaderUI() {
  ensureLiaProfile();
  const lia = isLiaActive();

  // Kid switcher buttons
  document.querySelectorAll('.kid-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.kid === appState.activeChild);
  });

  // Toggle theme buttons in header (Beitar/Real vs Unicorn/Stitch)
  const btnBeitar = document.getElementById('btn-team-beitar');
  const btnReal = document.getElementById('btn-team-real');
  const btnUnicorn = document.getElementById('btn-team-unicorn');
  const btnStitch = document.getElementById('btn-team-stitch');
  if (btnBeitar && btnReal && btnUnicorn && btnStitch) {
    btnBeitar.classList.toggle('hidden', lia);
    btnReal.classList.toggle('hidden', lia);
    btnUnicorn.classList.toggle('hidden', !lia);
    btnStitch.classList.toggle('hidden', !lia);
  }

  // Toggle Home Bento grids & Hero card text
  const ilayBento = document.getElementById('ilay-bento-grid');
  const liaBento = document.getElementById('lia-bento-grid');
  const fc27Banner = document.getElementById('fc27-home-banner');
  if (ilayBento && liaBento) {
    ilayBento.classList.toggle('hidden', lia);
    liaBento.classList.toggle('hidden', !lia);
  }
  if (fc27Banner) {
    fc27Banner.classList.toggle('hidden', lia);
  }

  const heroTag = document.getElementById('hero-tag-text');
  const heroTitle = document.getElementById('hero-title-text');
  const heroDesc = document.getElementById('hero-desc-text');
  const practiceHeading = document.getElementById('practice-section-heading');
  if (heroTag && heroTitle && heroDesc) {
    if (lia) {
      heroTag.textContent = 'מסיבת הקסמים של ליה • בונוס כפול ✨';
      heroTitle.textContent = 'הרפתקת סטיץ׳ וחד-קרן 🦄💙';
      heroDesc.textContent = '8 חידות שמחות באנגלית, אותיות וחשבון לגן חובה!';
      if (practiceHeading) practiceHeading.textContent = 'משחקי הכנה לגן חובה ואנגלית לליה 🦄';
    } else {
      heroTag.textContent = 'אתגר יומי • בונוס כפול';
      heroTitle.textContent = 'משחק האלופים המהיר';
      heroDesc.textContent = '8 שאלות בחשבון ושפה על גביע יומי';
      if (practiceHeading) practiceHeading.textContent = 'תרגול לימודי (כיתה ב׳)';
    }
  }

  // Update Bottom Nav buttons for Lia vs Ilay
  const nav2Icon = document.getElementById('nav-2-icon');
  const nav2Text = document.getElementById('nav-2-text');
  const nav2Btn = document.getElementById('nav-speech');
  const nav3Icon = document.getElementById('nav-3-icon');
  const nav3Text = document.getElementById('nav-3-text');
  const nav3Btn = document.getElementById('nav-homework');
  if (nav2Btn && nav3Btn) {
    if (lia) {
      nav2Btn.dataset.view = 'makeup';
      if (nav2Icon) nav2Icon.textContent = '💄';
      if (nav2Text) nav2Text.textContent = 'איפור';
      nav3Btn.dataset.view = 'kinder';
      if (nav3Icon) nav3Icon.textContent = '👩‍🏫';
      if (nav3Text) nav3Text.textContent = 'הגן שלי';
    } else {
      nav2Btn.dataset.view = 'speech';
      if (nav2Icon) nav2Icon.textContent = '🎙️';
      if (nav2Text) nav2Text.textContent = 'הגייה';
      nav3Btn.dataset.view = 'homework';
      if (nav3Icon) nav3Icon.textContent = '✅';
      if (nav3Text) nav3Text.textContent = 'משימות';
    }
  }

  const activeCoins = getActiveCoins();
  const activeTrophies = getActiveTrophies();
  const activeAvatar = lia ? (appState.liaProfile.avatar || '🦄') : (appState.avatar || '🦁');
  const activeName = lia ? 'ליה' : 'עילי';

  document.getElementById('stat-coins').textContent = activeCoins;
  document.getElementById('stat-trophies').textContent = activeTrophies;
  document.getElementById('stat-streak').textContent = session.currentStreak;
  document.getElementById('current-avatar').textContent = activeAvatar;
  const nameEl = document.getElementById('player-name-display');
  if (nameEl) nameEl.textContent = activeName;

  applyTeamTheme(lia ? (appState.liaProfile.theme || 'unicorn') : (appState.teamTheme || 'beitar'));

  let totalSolved = 0;
  Object.values(getActiveTopicStats()).forEach(s => { totalSolved += (s.solved || 0); });
  document.getElementById('player-rank-display').textContent = getRankTitle(activeTrophies, totalSolved);

  // Shop badge
  const shopNotif = document.getElementById('shop-notif');
  if (activeCoins >= 50 && getActiveStickers().length < getActiveCatalog().length) {
    shopNotif.classList.remove('hidden');
  } else {
    shopNotif.classList.add('hidden');
  }

  // Homework badge & quick tile summary
  const pendingHw = (appState.homeworkList || []).filter(h => !h.done).length;
  const hwNotif = document.getElementById('hw-notif');
  if (!lia && pendingHw > 0) {
    hwNotif.textContent = pendingHw;
    hwNotif.classList.remove('hidden');
    document.getElementById('quick-hw-summary').textContent = `${pendingHw} משימות להיום`;
  } else {
    hwNotif.classList.add('hidden');
    if (document.getElementById('quick-hw-summary')) {
      document.getElementById('quick-hw-summary').textContent = `הכל בוצע! 🏆`;
    }
  }

  // Speech studio daily status
  const todayStr = new Date().toLocaleDateString('he-IL');
  const todayLogs = (appState.speechLogs || []).filter(l => l.date.startsWith(todayStr));
  const speechNotif = document.getElementById('speech-notif');
  if (!lia && todayLogs.length < 3) {
    speechNotif.classList.remove('hidden');
    document.getElementById('quick-speech-summary').textContent = `תורגלו ${todayLogs.length}/5 היום`;
  } else {
    speechNotif.classList.add('hidden');
    if (document.getElementById('quick-speech-summary')) {
      document.getElementById('quick-speech-summary').textContent = `אלוף השדרנים! 🏆`;
    }
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
  if (viewName === 'makeup') initMakeupStudio();
  if (viewName === 'kinder') initKinderStudio();
  if (viewName === 'fc27') initFC27Studio();
  updateHeaderUI();
}

// ==================== HOME: VISUAL TOPICS GRID ====================

function renderTopicsGrid() {
  const grid = document.getElementById('topics-grid');
  grid.innerHTML = '';

  const lia = isLiaActive();
  const sourceTopics = lia && typeof LIA_TOPICS !== 'undefined' ? LIA_TOPICS : TOPICS;
  const statsObj = getActiveTopicStats();

  const filtered = sourceTopics.filter(t => {
    if (appState.selectedCategory === 'all') return true;
    return t.cat === appState.selectedCategory;
  });

  filtered.forEach(topic => {
    const st = statsObj[topic.id] || { solved: 0, correct: 0, stars: 0 };
    const starsDisplay = '⭐'.repeat(Math.min(3, st.stars)) + '☆'.repeat(Math.max(0, 3 - Math.min(3, st.stars)));
    const playLabel = lia ? 'שחקי 🦄' : 'שחק ⚽';

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
        <span class="play-mini-btn">${playLabel}</span>
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

function cleanHebrewLettersOnly(text) {
  return (text || '')
    .replace(/[\u0591-\u05C7]/g, '') // remove nikud vowels & cantillation
    .replace(/[^\u0590-\u05EA\s]/g, ' ') // letters & spaces only
    .replace(/\s+/g, ' ')
    .trim();
}

function renderSpeechCard() {
  const card = speechSession.cards[speechSession.index];
  speechSession.lastAudioUrl = null;
  speechSession.heardTranscript = '';
  speechSession.maxVolume = 0;
  speechSession.startTime = 0;

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
  const waveEl = document.getElementById('sp-wave-bars');
  waveEl.classList.add('hidden');
  waveEl.classList.remove('active');
  document.getElementById('sp-recognized-box').classList.add('hidden');
  document.getElementById('sp-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-sp-next').classList.add('hidden');
}

async function toggleSpeechRecording() {
  const card = speechSession.cards[speechSession.index];
  const recBtn = document.getElementById('btn-sp-record');
  const waveEl = document.getElementById('sp-wave-bars');

  // ---------- A. STOP RECORDING & EVALUATE ----------
  if (speechSession.isRecording) {
    speechSession.isRecording = false;
    const durationMs = Date.now() - (speechSession.startTime || Date.now());

    if (speechSession.volInterval) {
      clearInterval(speechSession.volInterval);
      speechSession.volInterval = null;
    }

    recBtn.classList.remove('recording');
    waveEl.classList.remove('active');
    waveEl.classList.add('hidden');
    document.getElementById('sp-mic-icon').textContent = '⏳';
    document.getElementById('sp-mic-label').textContent = 'בּוֹדֵק אֶת הַהַקְלָטָה...';

    if (speechSession.recognition) {
      try { speechSession.recognition.stop(); } catch (e) {}
    }

    if (speechSession.mediaRecorder && speechSession.mediaRecorder.state !== 'inactive') {
      try { speechSession.mediaRecorder.stop(); } catch (e) {}
    }

    if (speechSession.audioContext) {
      try { speechSession.audioContext.close(); } catch (e) {}
      speechSession.audioContext = null;
    }

    // Short 250ms buffer to let final recognition/media chunks flush
    setTimeout(() => {
      evaluateSpeechRecording(card, durationMs);
    }, 280);
    return;
  }

  // ---------- B. START RECORDING ----------
  speechSession.isRecording = true;
  speechSession.heardTranscript = '';
  speechSession.maxVolume = 0;
  speechSession.startTime = Date.now();
  speechSession.audioChunks = [];

  recBtn.classList.add('recording');
  waveEl.classList.remove('hidden');
  waveEl.classList.add('active');
  document.getElementById('sp-mic-icon').textContent = '⏹️';
  document.getElementById('sp-mic-label').textContent = 'מַקְלִיט... לְחַץ לְסִיּוּם';

  document.getElementById('sp-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-sp-next').classList.add('hidden');

  const recBox = document.getElementById('sp-recognized-box');
  const recTxt = document.getElementById('sp-recognized-text');
  if (recBox) recBox.classList.add('hidden');
  if (recTxt) recTxt.textContent = '';

  // 1. Web Speech Recognition in Hebrew
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    try {
      const rec = new SpeechRec();
      rec.lang = 'he-IL';
      rec.interimResults = true;
      rec.continuous = false;
      rec.onresult = (event) => {
        let t = '';
        for (let i = 0; i < event.results.length; i++) {
          t += event.results[i][0].transcript;
        }
        speechSession.heardTranscript = t.trim();
        if (recBox && t.trim()) {
          recBox.classList.remove('hidden');
          recTxt.textContent = `נקלט בדיבור: "${t.trim()}"`;
        }
      };
      rec.onerror = (e) => {
        console.warn('Speech rec event:', e.error);
      };
      rec.start();
      speechSession.recognition = rec;
    } catch (e) {
      console.warn('Speech recognition not available:', e);
    }
  }

  // 2. Microphone Stream + Web Audio Analyser (Voice Energy Detection)
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      speechSession.activeStream = stream;

      // Real-time voice amplitude analysis
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const actx = new AudioCtx();
          speechSession.audioContext = actx;
          const src = actx.createMediaStreamSource(stream);
          const analyser = actx.createAnalyser();
          analyser.fftSize = 256;
          src.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          speechSession.volInterval = setInterval(() => {
            if (!speechSession.isRecording) return;
            analyser.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
            const avg = sum / dataArray.length;
            if (avg > speechSession.maxVolume) speechSession.maxVolume = avg;
          }, 60);
        }
      } catch (e) {}

      // MediaRecorder for playback & parent audit
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) speechSession.audioChunks.push(e.data);
      };
      mr.onstop = () => {
        if (speechSession.audioChunks.length > 0) {
          const blob = new Blob(speechSession.audioChunks, { type: 'audio/webm' });
          speechSession.lastAudioUrl = URL.createObjectURL(blob);
          const playSelfBtn = document.getElementById('btn-sp-play-self');
          if (playSelfBtn) playSelfBtn.classList.remove('hidden');

          // Save small sample to parent logs
          const reader = new FileReader();
          reader.onloadend = () => {
            saveSpeechLogEntry(card.phrase, speechSession.heardTranscript, reader.result);
          };
          reader.readAsDataURL(blob);
        }
        stream.getTracks().forEach(t => t.stop());
      };
      mr.start();
      speechSession.mediaRecorder = mr;
    } catch (err) {
      console.warn('Microphone permission error:', err);
      // If mic denied: inform user clearly
      speechSession.isRecording = false;
      recBtn.classList.remove('recording');
      waveEl.classList.add('hidden');
      document.getElementById('sp-mic-icon').textContent = '🎙️';
      document.getElementById('sp-mic-label').textContent = 'הַקְלֵט שׁוּב';
      const fb = document.getElementById('sp-feedback-banner');
      fb.className = 'feedback-banner warning';
      fb.innerHTML = `🔒 <strong>יש לאשר גישה למיקרופון!</strong><br>כדי שנוכל לבדוק את ההגייה של עילי, יש לאשר הרשאת מיקרופון בדפדפן.`;
      fb.classList.remove('hidden');
    }
  }
}

function evaluateSpeechRecording(card, durationMs) {
  const fb = document.getElementById('sp-feedback-banner');
  const nextBtn = document.getElementById('btn-sp-next');
  const recBtn = document.getElementById('btn-sp-record');

  const targetClean = cleanHebrewLettersOnly(card.phrase);
  const targetWords = targetClean.split(' ').filter(w => w.length >= 2);
  const heardClean = cleanHebrewLettersOnly(speechSession.heardTranscript);
  const heardWords = heardClean.split(' ').filter(Boolean);

  const hasRecognizedWords = heardClean.length > 0;
  // Volume energy above ambient quiet room noise floor (~10-12)
  const hasAudibleVoice = speechSession.maxVolume >= 11;
  const isTooShort = durationMs < 800;

  // Reset button state
  document.getElementById('sp-mic-icon').textContent = '🎙️';
  document.getElementById('sp-mic-label').textContent = 'הַקְלֵט שׁוּב';

  // 1. STRICT SILENCE CHECK: Did the child actually speak?
  if ((!hasRecognizedWords && !hasAudibleVoice) || isTooShort) {
    arcadeAudio.playMiss();
    fb.className = 'feedback-banner warning';
    fb.innerHTML = `⚠️ <strong>לא שמענו אותך עדיין!</strong><br>לחצו על <strong>הַקְלֵט שׁוּב</strong>, אמרו את המשפט בקול ברור ליד המכשיר, ולחצו לסיום.`;
    fb.classList.remove('hidden');
    nextBtn.classList.add('hidden'); // CANNOT skip without actually practicing!
    return;
  }

  // 2. CHECK TARGET WORDS & SIBILANTS ('ש' and 'ס')
  let matchedWordCount = 0;
  targetWords.forEach(tw => {
    if (heardWords.some(hw => hw === tw || hw.includes(tw) || tw.includes(hw))) {
      matchedWordCount++;
    }
  });

  const targetHasSibilant = targetClean.includes('ש') || targetClean.includes('ס');
  const heardHasSibilant = heardClean.includes('ש') || heardClean.includes('ס');

  // LEVEL A: EXCELLENT PRONUNCIATION / WORDS MATCHED
  if (matchedWordCount >= 2 || (matchedWordCount >= 1 && (heardHasSibilant || heardWords.length >= 2))) {
    appState.coins += 20;
    saveState();
    updateHeaderUI();
    arcadeAudio.playGoalSuccess();
    confetti.burst(75);

    fb.className = 'feedback-banner success';
    fb.innerHTML = `🌟 <strong>איזה שדרן אלוף! שמענו אותך מצוין!</strong><br>נקלט: "${speechSession.heardTranscript}"<br>הגייה נהדרת! הרווחת <strong>+20 🪙</strong> מטבעות!`;
    fb.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    return;
  }

  // LEVEL B: HEARD GENERAL SPEECH ATTEMPT
  if (hasRecognizedWords) {
    appState.coins += 15;
    saveState();
    updateHeaderUI();
    arcadeAudio.playGoalSuccess();

    fb.className = 'feedback-banner success';
    fb.innerHTML = `👏 <strong>יופי של ניסיון!</strong> שמענו: "${speechSession.heardTranscript}".<br>הקשב להקלטה שלך ובדוק שסגרת שיניים לחיוך ב-ש׳ ו-ס׳! הרווחת <strong>+15 🪙</strong>`;
    fb.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    return;
  }

  // LEVEL C: AUDIBLE VOICE CAPTURED (Real voice energy detected, but recognition was muffled / unavailable)
  if (hasAudibleVoice && durationMs >= 1200) {
    appState.coins += 15;
    saveState();
    updateHeaderUI();
    arcadeAudio.playGoalSuccess();

    fb.className = 'feedback-banner success';
    fb.innerHTML = `🎙️ <strong>שמענו את הקול שלך בהקלטה!</strong><br>לחצו על "השמע את ההקלטה שלי" להקשיב לעצמך ולתרגל חיוך! הרווחת <strong>+15 🪙</strong>`;
    fb.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    return;
  }

  // Voice was marginal / very quiet
  arcadeAudio.playMiss();
  fb.className = 'feedback-banner warning';
  fb.innerHTML = `⚠️ <strong>הקול היה שקט מדי!</strong><br>נסו שוב ואמרו את המשפט בקול רם וברור קרוב למיקרופון.`;
  fb.classList.remove('hidden');
  nextBtn.classList.add('hidden');
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
  // Legacy stub - now handled by evaluateSpeechRecording
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
  const countEl = document.getElementById('hw-done-count');
  if (countEl) countEl.textContent = `${doneCount}/${list.length}`;

  const wtLabel = document.getElementById('hw-webtop-status-label');
  if (wtLabel) {
    if (appState.lastWebtopSync && appState.lastWebtopSync.time) {
      wtLabel.innerHTML = `✅ סונכרן: <strong>${appState.lastWebtopSync.time}</strong> (${appState.lastWebtopSync.totalItems || 6} משימות) | ⏰ כל יום ב-14:00`;
    } else {
      wtLabel.textContent = `⏰ סנכרון אוטומטי מתוזמן לענן בכל יום בשעה 14:00`;
    }
  }

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

function isDictationCorrect(item, typedRaw) {
  if (!typedRaw) return false;
  const typed = stripNiqqud(typedRaw).trim();
  const target = stripNiqqud(item.word).trim();
  if (typed === target) return true;

  // Explicit alternatives if present (e.g. ['מתיבש', 'מתייבש'])
  if (item.alternatives && item.alternatives.some(alt => stripNiqqud(alt).trim() === typed)) {
    return true;
  }

  // Defective / plene spelling tolerance (single vs double yod/vav)
  const norm = s => s.replace(/יי+/g, 'י').replace(/וו+/g, 'ו');
  if (norm(typed) === norm(target)) return true;

  // Grade 2 defective and vocalized spelling variants:
  const grade2Variants = {
    'מתיבש': ['מתייבש', 'מתיבש'],
    'מתייבש': ['מתייבש', 'מתיבש'],
    'צהוב': ['צהב', 'צהוב'],
    'ירוק': ['ירק', 'ירוק'],
    'אור': ['אר', 'אור'],
    'צבעים': ['צבאיים', 'צבעים', 'צבעם']
  };
  if (grade2Variants[target] && grade2Variants[target].includes(typed)) return true;
  if (grade2Variants[typed] && grade2Variants[typed].includes(target)) return true;

  return false;
}

function updateDictationSlots() {
  const item = dictSession.words[dictSession.index];
  if (!item) return;
  const targetClean = stripNiqqud(item.word);
  const typed = document.getElementById('dict-user-input').value;

  const slotsEl = document.getElementById('dict-letter-slots');
  slotsEl.innerHTML = '';
  const slotCount = Math.max(targetClean.length, typed.length);
  for (let i = 0; i < slotCount; i++) {
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

  if (isDictationCorrect(item, typed)) {
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
  if (!track) return;
  const lia = isLiaActive();
  track.innerHTML = '';
  for (let i = 0; i < session.totalQuestions; i++) {
    const dot = document.createElement('div');
    dot.className = 'penalty-dot';
    if (session.penaltyHistory[i] === 'scored') {
      dot.classList.add('scored');
      dot.textContent = lia ? '🦄' : '⚽';
    } else if (session.penaltyHistory[i] === 'missed') {
      dot.classList.add('missed');
      dot.textContent = '✖';
    } else {
      dot.textContent = i + 1;
    }
    track.appendChild(dot);
  }
}

function speakOptionValue(optVal) {
  if (!optVal) return;
  const raw = String(optVal);
  // Check if option has English in parentheses like "🩷 וָרוֹד (Pink)"
  const parenMatch = raw.match(/\(([A-Za-z\s/]+)\)/);
  if (parenMatch) {
    const engPart = parenMatch[1].split('/')[0].trim();
    const hebPart = raw.replace(/\([^)]+\)/g, '').trim();
    arcadeAudio.speakBilingual(hebPart, engPart);
    return;
  }
  // If option is purely English letters
  if (/^[A-Za-z\s!?.,'-]+$/.test(raw.trim())) {
    arcadeAudio.speak(raw.trim(), 'en-US', 0.82);
  } else {
    arcadeAudio.speak(raw, 'he-IL', 0.86);
  }
}

function speakQuestionPrompt(q) {
  if (!q) return;
  if (q.isEnglish && q.englishSpeechWord) {
    arcadeAudio.speakBilingual(q.ttsText || q.instruction, q.englishSpeechWord, 0.86);
  } else if (q.isEnglish) {
    arcadeAudio.speak(q.ttsText || q.instruction, 'en-US', 0.84);
  } else {
    arcadeAudio.speak(q.ttsText || q.instruction, 'he-IL', 0.86);
  }
}

function renderCurrentQuestion() {
  const q = session.questions[session.currentIndex];
  const lia = isLiaActive();
  session.attemptsOnCurrent = 1;
  session.selectedOptions.clear();
  session.answeredCurrent = false;

  document.getElementById('q-current-num').textContent = session.currentIndex + 1;
  document.getElementById('q-total-num').textContent = session.totalQuestions;
  const pct = Math.round(((session.currentIndex + 1) / session.totalQuestions) * 100);
  document.getElementById('q-progress-fill').style.width = `${pct}%`;

  const ball = document.getElementById('soccer-ball-shot');
  const gk = document.getElementById('goalkeeper');
  if (ball) {
    ball.className = 'arena-ball';
    ball.textContent = lia ? '🦄' : '⚽';
  }
  if (gk) {
    gk.className = 'arena-keeper';
    gk.textContent = lia ? '🌈' : '🧤';
    gk.style.transform = 'translateX(0)';
  }
    document.getElementById('commentator-text').textContent =
    lia
      ? '✨ "ליה וסטיץ׳ מוכנים לחידה הבאה!"'
      : q.isMulti
        ? '🎙️ "בחר את כל המספרים המתאימים!"'
        : '🎙️ "עילי מכוון לשער..."';

  const btnSpeak = document.getElementById('btn-speak-question');
  if (btnSpeak) {
    btnSpeak.textContent = q.isEnglish ? '🔊 הקרא + אנגלית' : '🔊 הקרא שאלה';
  }

  document.getElementById('q-instruction').innerHTML = q.instruction;
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.add('hidden');
  hintBox.textContent = `💡 רמז: ${q.hint}`;

  const stim = document.getElementById('q-stimulus');
  stim.className = 'q-stimulus-box' + (q.rtlStimulus ? ' rtl-stimulus' : '');
  stim.innerHTML = q.stimulusHtml;
  stim.querySelectorAll('[data-fc27-key]').forEach(el => {
    el.addEventListener('click', () => {
      const k = el.dataset.fc27Key;
      const found = (typeof FC27_VOCAB_BANK !== 'undefined') && FC27_VOCAB_BANK.find(x => x.key === k);
      if (found) {
        const cleanEng = found.eng.replace(/\([^)]*\)/g, '').trim();
        arcadeAudio.speak(cleanEng, 'en-US', 0.82);
      }
    });
  });

  const optsContainer = document.getElementById('q-options-container');
  optsContainer.className = q.isMulti ? 'options-container' : 'options-container grid-options';
  optsContainer.innerHTML = '';

  q.options.forEach(optVal => {
    const row = document.createElement('div');
    row.className = 'option-row';
    row.dataset.val = optVal;
    row.innerHTML = `
      <span class="opt-text" dir="auto">${optVal}</span>
      <button type="button" class="opt-speak-mini" title="השמע תשובה">🔊</button>
      <span class="opt-indicator">${q.isMulti ? '☐' : '•'}</span>
    `;
    const miniSpeak = row.querySelector('.opt-speak-mini');
    if (miniSpeak) {
      miniSpeak.addEventListener('click', (ev) => {
        ev.stopPropagation();
        speakOptionValue(optVal);
      });
    }
    row.addEventListener('click', () => {
      handleOptionSelect(optVal, row, q.isMulti);
      if (lia) speakOptionValue(optVal);
    });
    optsContainer.appendChild(row);
  });

  document.getElementById('attempt-counter').textContent = `ניסיון 1`;
  const fb = document.getElementById('feedback-banner');
  fb.className = 'feedback-banner hidden';
  document.getElementById('btn-check-answer').classList.remove('hidden');
  document.getElementById('btn-next-question').classList.add('hidden');

  if (q.autoSpeak || lia) {
    setTimeout(() => speakQuestionPrompt(q), 240);
  }
}

function handleOptionSelect(val, rowEl, isMulti) {
  if (session.answeredCurrent) return;
  arcadeAudio.playClick();
  const lia = isLiaActive();

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
    rowEl.querySelector('.opt-indicator').textContent = lia ? '🦄' : '⚽';
  }
}

function checkCurrentAnswer() {
  if (session.answeredCurrent) return;
  const q = session.questions[session.currentIndex];
  const lia = isLiaActive();

  if (session.selectedOptions.size === 0) {
    const fb = document.getElementById('feedback-banner');
    fb.className = 'feedback-banner error';
    fb.textContent = lia ? 'בחרי תשובה קודם מתוקה! 🦄' : 'בחר תשובה קודם! ⚽';
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
    if (!lia && session.currentStreak > appState.bestStreak) {
      appState.bestStreak = session.currentStreak;
    }

    const baseReward = session.attemptsOnCurrent === 1 ? 10 : 5;
    const streakBonus = session.currentStreak >= 3 ? 5 : 0;
    const mult = session.isDailyBonus ? 2 : 1;
    const earned = (baseReward + streakBonus) * mult;

    session.coinsEarned += earned;
    addActiveCoins(earned);
    session.penaltyHistory[session.currentIndex] = 'scored';

    const statsObj = getActiveTopicStats();
    const tStat = statsObj[q.topicId] || { solved: 0, correct: 0, stars: 0 };
    tStat.solved++;
    tStat.correct++;
    tStat.stars = Math.min(3, Math.floor(tStat.correct / 5));
    statsObj[q.topicId] = tStat;
    saveState();

    document.querySelectorAll('#q-options-container .option-row').forEach(el => {
      if (correctSet.has(el.dataset.val)) {
        el.classList.add('correct');
        el.querySelector('.opt-indicator').textContent = '✔';
      }
    });

    arcadeAudio.playGoalSuccess();
    confetti.burst(65);
    if (ball) ball.classList.add('shoot-anim');
    if (gk) gk.classList.add('dive-right');

    const streakMsg = session.currentStreak >= 3 ? ` 🔥 רצף ${session.currentStreak}!` : '';
    fb.className = 'feedback-banner success';
    fb.textContent = lia
      ? `כל הכבוד ליה! קסם של תשובה! +${earned} 🪙${streakMsg}`
      : `גווווול! +${earned} 🪙${streakMsg}`;
    document.getElementById('commentator-text').textContent = lia
      ? `🦄 "סטיץ׳ וחד-קרן מוחאים כפיים לליה!"`
      : `🎙️ "שעררר אדיר של עילי!"`;

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
      fb.textContent = lia ? 'כמעט מתוקה! 💡 היעזרי ברמז ונסי שוב!' : 'בקורה! 🥅 היעזר ברמז ונסה שוב!';
      document.getElementById('hint-box').classList.remove('hidden');
    } else {
      session.answeredCurrent = true;
      session.penaltyHistory[session.currentIndex] = 'missed';

      const statsObj = getActiveTopicStats();
      const tStat = statsObj[q.topicId] || { solved: 0, correct: 0, stars: 0 };
      tStat.solved++;
      statsObj[q.topicId] = tStat;
      saveState();

      document.querySelectorAll('#q-options-container .option-row').forEach(el => {
        if (correctSet.has(el.dataset.val)) {
          el.classList.add('correct');
          el.querySelector('.opt-indicator').textContent = '✔';
        } else if (session.selectedOptions.has(el.dataset.val)) {
          el.classList.add('wrong');
        }
      });

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
  const lia = isLiaActive();

  const ratio = session.correctCount / session.totalQuestions;
  if (ratio >= 0.7) {
    addActiveTrophies(session.isDailyBonus ? 2 : 1);
  }
  saveState();
  updateHeaderUI();

  const sumTitle = document.getElementById('summary-title');
  if (sumTitle) {
    sumTitle.textContent = lia ? 'כל הכבוד ליה האלופה! 🦄👑' : 'כל הכבוד עילי! 🏆⚽';
  }
  document.getElementById('sum-correct').textContent = `${session.correctCount}/${session.totalQuestions}`;
  document.getElementById('sum-coins').textContent = `+${session.coinsEarned}`;
  document.getElementById('sum-streak').textContent = session.maxSessionStreak;

  switchView('summary');
}

// ==================== STICKER ALBUM & SHOP ====================

function renderShopView() {
  const catalog = getActiveCatalog();
  const stickers = getActiveStickers();
  const coins = getActiveCoins();
  const lia = isLiaActive();

  document.getElementById('shop-coins-balance').textContent = coins;
  document.getElementById('album-count').textContent = `${stickers.length}/${catalog.length}`;
  const pct = Math.round((stickers.length / catalog.length) * 100);
  document.getElementById('album-progress-fill').style.width = `${pct}%`;

  const grid = document.getElementById('stickers-grid');
  grid.innerHTML = '';

  catalog.forEach(st => {
    const unlocked = stickers.includes(st.id);
    const card = document.createElement('div');
    card.className = `sticker-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="sticker-emoji">${st.emoji}</div>
      <div class="sticker-name">${unlocked ? st.name : '???'}</div>
      <div class="sticker-rarity">${st.rarity}</div>
    `;
    if (unlocked) {
      card.addEventListener('click', () => {
        if (lia) {
          appState.liaProfile.avatar = st.emoji;
        } else {
          appState.avatar = st.emoji;
        }
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
  const coins = getActiveCoins();
  const catalog = getActiveCatalog();
  const stickers = getActiveStickers();
  const lia = isLiaActive();

  if (coins < PACK_COST) {
    arcadeAudio.playMiss();
    alert(`חסרים לך עוד ${PACK_COST - coins} מטבעות! 🪙`);
    return;
  }

  addActiveCoins(-PACK_COST);
  const locked = catalog.filter(s => !stickers.includes(s.id));

  if (locked.length > 0) {
    const chosen = locked[Math.floor(Math.random() * locked.length)];
    stickers.push(chosen.id);
    if (lia) {
      appState.liaProfile.avatar = chosen.emoji;
    } else {
      appState.avatar = chosen.emoji;
    }
    arcadeAudio.playUnlock();
    confetti.burst(95);
    alert(`🎉 קלף חדש: ${chosen.emoji} "${chosen.name}"!`);
  } else {
    addActiveTrophies(1);
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

    // Filter out OCR noise and gibberish symbols (must contain at least 2 Hebrew words or valid book/page ref)
    const hebWords = clean.match(/[\u0590-\u05FF]{2,}/g) || [];
    if (hebWords.length === 0 || (clean.length < 5 && !clean.includes('עמ')) || /[₪\><\\|_=]/.test(clean)) {
      return; // Skip OCR garbage lines (e.g. "-- ---", "0 3(0 6", "סול ל רסו וק", etc.)
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

  // Webtop Live Status in Parents View
  const wtStatusBox = document.getElementById('webtop-sync-status');
  if (wtStatusBox) {
    if (appState.lastWebtopSync) {
      wtStatusBox.innerHTML = `✅ סנכרון Webtop אחרון: <strong>${appState.lastWebtopSync.time}</strong> (${appState.lastWebtopSync.totalItems} משימות ב-Webtop)<br><span style="font-size:0.85em;color:#34c759;">⏰ סנכרון אוטומטי מתוזמן לענן בכל יום בשעה 14:00.</span>`;
    } else {
      wtStatusBox.innerHTML = `⏰ סנכרון אוטומטי מתוזמן לענן בכל יום בשעה 14:00. ניתן ללחוץ בכל עת לסנכרון מיידי.`;
    }
  }

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
    // 1. Try Gemini Vision via backend or direct key
    const gemKey = appState.geminiApiKey?.trim();
    try {
      if (statusBox) statusBox.textContent = '✨ מפענח טקסט ועברית באמצעות AI...';
      const ocrRes = await fetch(`${CLOUD_BACKEND_URL}/api/ocr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: dataUrl,
          apiKey: gemKey || undefined
        })
      });
      if (ocrRes.ok) {
        const ocrJson = await ocrRes.json();
        if (ocrJson.ok && ocrJson.text && ocrJson.text.length > 2) {
          return ocrJson.text.trim();
        }
      }
    } catch (e) {}

    // 2. Direct client-side Gemini if key is provided
    if (gemKey && gemKey.length > 10) {
      try {
        const base64Data = dataUrl.split(',')[1];
        const mimeType = dataUrl.substring(dataUrl.indexOf(':') + 1, dataUrl.indexOf(';')) || 'image/jpeg';
        const gemRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(gemKey)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [
                  { text: 'חלץ את כל הטקסט בעברית מתוך צילום המסך או המחברת. החזר אך ורק שורות טקסט נקיות בעברית, ללא הערות או תוספות באנגלית.' },
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
      } catch (e) {}
    }

    // 3. Fallback: Cloud OCR engine
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

    // 4. Fallback: In-Browser Tesseract
    try {
      if (statusBox) statusBox.textContent = '⏳ טוען קורא עברית...';
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

      const hebWordCount = (cleaned.match(/[\u0590-\u05FF]{2,}/g) || []).length;
      const isNoise = cleaned.length > 0 && (hebWordCount < 2 || /[₪\><\\|=_]{2,}/.test(cleaned));

      if (statusBox) {
        if (cleaned && !isNoise) {
          statusBox.textContent = '✅ הטקסט חולץ מהתמונה! לחצו על "פענח ועדכן לעילי" לשמירה.';
        } else if (isNoise) {
          statusBox.innerHTML = '⚠️ לא זוהו מילים ברורות בעברית בתמונה (לוח כיתה / כתב יד). מומלץ להדביק את הטקסט או להזין מפתח Gemini AI בהגדרות לפענוח מושלם.';
        } else {
          statusBox.textContent = '💡 התמונה נטענה. אם הטקסט לא זוהה אוטומטית, ניתן להקליד בתיבה למטה.';
        }
      }
      if (cleaned && !isNoise && inp) {
        inp.value = inp.value.trim() ? `${inp.value.trim()}\n${cleaned}` : cleaned;
      }
      return isNoise ? '' : cleaned;
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

  // Shared Live Webtop Sync Function (Parents Zone + Homework View)
  async function executeLiveWebtopSync(statusBox, triggerBtn) {
    try {
      if (triggerBtn) triggerBtn.disabled = true;
      if (statusBox) {
        statusBox.classList.remove('hidden');
        statusBox.innerHTML = '⏳ מתחבר ל-Webtop ומושך שיעורי בית...';
      }

      const res = await fetch(`${CLOUD_BACKEND_URL}/api/webtop/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: appState.webtopUser || 'ykt559',
          password: appState.webtopPass || 'ted200218'
        })
      });

      const data = await res.json();
      if (!data.ok) {
        throw new Error(data.error || 'שגיאה במשיכת נתונים מ-Webtop');
      }

      if (data.state) {
        appState = { ...appState, ...data.state };
      }

      // Filter any residual junk
      if (appState.homeworkList) {
        appState.homeworkList = appState.homeworkList.filter(h => 
          h.source === 'webtop' || ['hw_sp','hw1','hw2','hw3'].includes(h.id) || (h.title && h.title.length > 4 && !/[₪\><\\|_=]/.test(h.title))
        );
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));

      renderParentsView();
      renderHomeworkView();
      updateHeaderUI();
      arcadeAudio.playGoalSuccess();
      confetti.burst(70);

      const msg = `✅ <strong>סונכרן בהצלחה!</strong> נמשכו ${data.totalWebtopItems || 6} משימות מ-Webtop עבור ${data.studentName || 'עילי'}.<br><span style="font-size:0.85em;color:#34c759;">⏰ סנכרון אוטומטי מתוזמן לענן בכל יום בשעה 14:00.</span>`;
      if (statusBox) statusBox.innerHTML = msg;
      const wtLabel = document.getElementById('hw-webtop-status-label');
      if (wtLabel) wtLabel.innerHTML = `✅ סונכרן: <strong>${data.lastSync || 'עכשיו'}</strong> (${data.totalWebtopItems || 6} משימות) | ⏰ כל יום ב-14:00`;
    } catch (err) {
      if (statusBox) {
        statusBox.innerHTML = `❌ ${err.message || 'הסנכרון נכשל'}. אנא נסו שוב בעוד מספר שניות.`;
      }
    } finally {
      if (triggerBtn) triggerBtn.disabled = false;
    }
  }

  // Direct Webtop Live Sync (Parents Zone)
  const syncWebtopBtn = document.getElementById('btn-sync-webtop-direct');
  const wtStatusBox = document.getElementById('webtop-sync-status');
  if (syncWebtopBtn) {
    syncWebtopBtn.addEventListener('click', () => executeLiveWebtopSync(wtStatusBox, syncWebtopBtn));
  }

  // Direct Webtop Quick Sync (Homework / Tasks View)
  const quickSyncBtn = document.getElementById('btn-quick-sync-webtop');
  const quickStatusLabel = document.getElementById('hw-webtop-status-label');
  if (quickSyncBtn) {
    quickSyncBtn.addEventListener('click', () => executeLiveWebtopSync(quickStatusLabel, quickSyncBtn));
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

  // 4 Big Home Visual Tiles (Ilay)
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

  // 4 Big Home Visual Tiles (Lia)
  const btnOpenMakeup = document.getElementById('quick-open-makeup');
  if (btnOpenMakeup) {
    btnOpenMakeup.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('makeup');
    });
  }
  const btnOpenKinder = document.getElementById('quick-open-kinder');
  if (btnOpenKinder) {
    btnOpenKinder.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('kinder');
    });
  }
  const btnOpenLiaEng = document.getElementById('quick-open-lia-eng');
  if (btnOpenLiaEng) {
    btnOpenLiaEng.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('lia_english_colors_glam', '💄 אנגלית עם סטיץ׳ וחד-קרן', false);
    });
  }
  const btnOpenLiaPrep = document.getElementById('quick-open-lia-prep');
  if (btnOpenLiaPrep) {
    btnOpenLiaPrep.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('lia_heb_letters', '🔤 מוכנות לגן חובה עם ליה', false);
    });
  }

  // Kid Switcher Bar (Ilay vs Lia)
  document.querySelectorAll('.kid-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchActiveChild(btn.dataset.kid);
    });
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
  const btnOpenDictEd = document.getElementById('btn-open-dict-editor');
  if (btnOpenDictEd) {
    btnOpenDictEd.addEventListener('click', () => {
      switchView('parents');
      setTimeout(() => {
        const ta = document.getElementById('dict-words-textarea');
        if (ta) {
          ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
          ta.focus();
        }
      }, 200);
    });
  }
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

  // Team / Theme Switcher
  document.querySelectorAll('#team-switcher .team-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      const team = btn.dataset.team;
      applyTeamTheme(team);
      if (!isLiaActive()) {
        if (team === 'beitar' && appState.avatar === '👑') appState.avatar = '🦁';
        if (team === 'real' && appState.avatar === '🦁') appState.avatar = '👑';
      } else {
        if (team === 'unicorn') appState.liaProfile.avatar = '🦄';
        if (team === 'stitch') appState.liaProfile.avatar = '💙';
      }
      saveState();
      updateHeaderUI();
    });
  });

  // Daily challenge button
  document.getElementById('btn-daily-match').addEventListener('click', () => {
    arcadeAudio.playClick();
    if (isLiaActive()) {
      startMatch('lia_daily_mix', '🦄 מסיבת הקסמים של ליה וסטיץ׳ ✨', true);
    } else {
      startMatch('daily_mix', 'גמר גביע האלופים 🏆', true);
    }
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
    if (!q) return;
    speakQuestionPrompt(q);
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
      arcadeAudio.playGoalSuccess();
      alert(`✅ נשמרו ${parsed.length} מילים לאימון ההכתבה של עילי! המילים סונכרנו גם לענן. 🎧`);
    }
  });

  // Load tomorrow's 10 words shortcut button
  const btnTomorrow = document.getElementById('btn-load-tomorrow-dictation');
  if (btnTomorrow) {
    btnTomorrow.addEventListener('click', () => {
      appState.dictationWords = [...DEFAULT_DICTATION_WORDS];
      saveState();
      updateHeaderUI();
      renderParentsView();
      arcadeAudio.playGoalSuccess();
      alert('✅ 10 המילים של ההכתבה למחר (מזון, שמש, עץ, ירוק, עלה, צבעים, מתיבש, אור, קרקע, צהוב) נטענו וסונכרנו בהצלחה!');
    });
  }

  // Reset progress button
  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (confirm('האם לאפס את כל הנתונים והנקודות?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  // Setup Lia's Studios & Ilay's FC 27 Studio
  setupMakeupStudioListeners();
  setupKinderStudioListeners();
  setupFC27StudioListeners();
});

// ==================== VIEW 10: LIA'S GLAM & MAKEUP STUDIO CONTROLLER ====================

const GLAM_MISSIONS = [
  { lip: 'Pink Lipstick', crown: 'Gold Crown', heb: 'ליה מתוקה, הלקוחה מבקשת שפתון ורוד וכתר זהב!', eng: 'Pink Lipstick and Gold Crown', display: 'בחרי שפתון ורוד (Pink Lipstick) + כתר זהב (Gold Crown) 💄👑' },
  { lip: 'Red Lipstick', crown: 'Unicorn Horn', heb: 'ליה, חד-הקרן מבקש שפתון אדום וקרן של חד-קרן!', eng: 'Red Lipstick and Unicorn Horn', display: 'בחרי שפתון אדום (Red Lipstick) + קרן חד-קרן (Unicorn) ❤️🦄' },
  { lip: 'Purple Lipstick', crown: 'Stitch Flower', heb: 'סטיץ׳ מבקש איפור עם שפתון סגול ופרח של הוואי!', eng: 'Purple Lipstick and Stitch Flower', display: 'בחרי שפתון סגול (Purple Lipstick) + פרח של סטיץ׳ (Flower) 💜🌺' },
  { lip: 'Pink Lipstick', crown: 'Pink Bow', heb: 'הנסיכה מבקשת שפתון ורוד וסרט ורוד לשיער!', eng: 'Pink Lipstick and Pink Bow', display: 'בחרי שפתון ורוד (Pink Lipstick) + סרט ורוד (Pink Bow) 🩷🎀' }
];

let glamState = {
  model: '👸',
  lip: 'Pink Lipstick',
  lipHeb: 'שפתון ורוד',
  lipColor: '#ec4899',
  eye: 'Purple Sparkle',
  eyeHeb: 'צללית סגולה',
  eyeColor: '#c084fc',
  crown: 'Gold Crown',
  crownIcon: '👑',
  nail: 'Pink Nails',
  nailHeb: 'לק ורוד נוצץ',
  missionIndex: 0
};

function initMakeupStudio() {
  renderGlamMission();
  updateGlamMirrorUI();
}

function renderGlamMission() {
  const m = GLAM_MISSIONS[glamState.missionIndex % GLAM_MISSIONS.length];
  const txtEl = document.getElementById('glam-mission-text');
  if (txtEl) txtEl.textContent = m.display;
  const fb = document.getElementById('glam-feedback-banner');
  if (fb) fb.className = 'feedback-banner hidden';
}

function updateGlamMirrorUI() {
  const avatarEl = document.getElementById('glam-main-avatar');
  const crownEl = document.getElementById('glam-crown-slot');
  const faceCircle = document.getElementById('glam-face-circle');
  const blushL = document.getElementById('glam-blush-left');
  const blushR = document.getElementById('glam-blush-right');

  if (avatarEl) avatarEl.textContent = glamState.model;
  if (crownEl) crownEl.textContent = glamState.crownIcon;
  if (faceCircle) {
    faceCircle.style.borderColor = glamState.lipColor;
    faceCircle.style.boxShadow = `0 0 24px ${glamState.eyeColor}`;
  }
  if (blushL && blushR) {
    blushL.style.background = glamState.lipColor;
    blushR.style.background = glamState.lipColor;
  }

  const lipPill = document.getElementById('glam-lip-pill');
  const eyePill = document.getElementById('glam-eye-pill');
  const nailPill = document.getElementById('glam-nail-pill');
  if (lipPill) lipPill.textContent = `💄 ${glamState.lipHeb} (${glamState.lip.split(' ')[0]})`;
  if (eyePill) eyePill.textContent = `✨ ${glamState.eyeHeb} (${glamState.eye.split(' ')[0]})`;
  if (nailPill) nailPill.textContent = `💅 ${glamState.nailHeb} (${glamState.nail.split(' ')[0]})`;
}

function setupMakeupStudioListeners() {
  document.querySelectorAll('.glam-model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('.glam-model-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      glamState.model = btn.dataset.model;
      updateGlamMirrorUI();
      arcadeAudio.speak(`עכשיו מאפרים את ${btn.dataset.name}!`, 'he-IL', 0.88);
    });
  });

  document.querySelectorAll('#glam-lip-swatches .glam-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#glam-lip-swatches .glam-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      glamState.lip = btn.dataset.eng;
      glamState.lipHeb = btn.dataset.heb;
      glamState.lipColor = btn.dataset.color;
      updateGlamMirrorUI();
      arcadeAudio.speakBilingual(btn.dataset.heb, btn.dataset.eng);
    });
  });

  document.querySelectorAll('#glam-eye-swatches .glam-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#glam-eye-swatches .glam-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      glamState.eye = btn.dataset.eng;
      glamState.eyeHeb = btn.dataset.heb;
      glamState.eyeColor = btn.dataset.color;
      updateGlamMirrorUI();
      arcadeAudio.speakBilingual(btn.dataset.heb, btn.dataset.eng);
    });
  });

  document.querySelectorAll('#glam-crown-swatches .glam-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#glam-crown-swatches .glam-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      glamState.crown = btn.dataset.eng;
      glamState.crownIcon = btn.dataset.icon;
      updateGlamMirrorUI();
      arcadeAudio.speakBilingual(btn.dataset.heb, btn.dataset.eng);
    });
  });

  document.querySelectorAll('#glam-nail-swatches .glam-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#glam-nail-swatches .glam-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      glamState.nail = btn.dataset.eng;
      glamState.nailHeb = btn.dataset.heb;
      updateGlamMirrorUI();
      arcadeAudio.speakBilingual(btn.dataset.heb, btn.dataset.eng);
    });
  });

  const btnSpeakMission = document.getElementById('btn-glam-speak-mission');
  if (btnSpeakMission) {
    btnSpeakMission.addEventListener('click', () => {
      const m = GLAM_MISSIONS[glamState.missionIndex % GLAM_MISSIONS.length];
      arcadeAudio.speakBilingual(m.heb, m.eng);
    });
  }

  const btnNewMission = document.getElementById('btn-glam-new-mission');
  if (btnNewMission) {
    btnNewMission.addEventListener('click', () => {
      arcadeAudio.playClick();
      glamState.missionIndex = (glamState.missionIndex + 1) % GLAM_MISSIONS.length;
      renderGlamMission();
      const m = GLAM_MISSIONS[glamState.missionIndex];
      arcadeAudio.speakBilingual(m.heb, m.eng);
    });
  }

  const btnFinish = document.getElementById('btn-glam-finish');
  if (btnFinish) {
    btnFinish.addEventListener('click', () => {
      const m = GLAM_MISSIONS[glamState.missionIndex % GLAM_MISSIONS.length];
      const fb = document.getElementById('glam-feedback-banner');
      if (glamState.lip === m.lip && glamState.crown === m.crown) {
        addActiveCoins(25);
        saveState();
        updateHeaderUI();
        arcadeAudio.playGoalSuccess();
        confetti.burst(90);
        if (fb) {
          fb.className = 'feedback-banner success';
          fb.textContent = '🌟 וואו ליה! איפרת בדיוק לפי הבקשה באנגלית! הרווחת +25 מטבעות! 💄👑';
        }
        arcadeAudio.speak('וואו ליה! איזו מאפרת אלופה! הרווחת עשרים וחמישה מטבעות!', 'he-IL', 0.88);
        setTimeout(() => {
          glamState.missionIndex = (glamState.missionIndex + 1) % GLAM_MISSIONS.length;
          renderGlamMission();
        }, 2600);
      } else {
        addActiveCoins(10);
        saveState();
        updateHeaderUI();
        arcadeAudio.playGoalSuccess();
        confetti.burst(45);
        if (fb) {
          fb.className = 'feedback-banner success';
          fb.textContent = `✨ איפור מהמם ליה! (+10 🪙). לבונוס הגדול נסי גם את משימת הלקוחה למעלה!`;
        }
        arcadeAudio.speak('איפור מהמם ליה! הרווחת עשרה מטבעות!', 'he-IL', 0.88);
      }
    });
  }
}

// ==================== VIEW 11: TEACHER LIA'S KINDERGARTEN CONTROLLER ====================

const KINDER_STUDENTS = [
  { id: 'stitch', emoji: '💙🌺', name: 'סטיץ׳ החמוד', greetingHeb: 'בוקר טוב הגננת ליה! הבאתי לך פרח מהוואי!', greetingEng: 'Good Morning Teacher Lia!', star: false },
  { id: 'unicorn', emoji: '🦄🌈', name: 'חד-קרן קשת', greetingHeb: 'שלום הגננת ליה! איזה כיף במפגש הבוקר בגן!', greetingEng: 'Hello Teacher Lia! I love you!', star: false },
  { id: 'teddy', emoji: '🧸💛', name: 'הדובי טדי', greetingHeb: 'בוקר טוב הגננת ליה! אני מוכן לשיר ולספור!', greetingEng: 'One, Two, Three, Happy Bear!', star: false },
  { id: 'fairy', emoji: '🧚‍♀️✨', name: 'הפיה לילי', greetingHeb: 'שלום הגננת ליה! הבאתי נצנצים ורודים לגן!', greetingEng: 'Pink Sparkle and Gold Star!', star: false },
  { id: 'kitty', emoji: '🐱🎀', name: 'החתלתולה מיצי', greetingHeb: 'מיאו הגננת ליה! תודה רבה על החיבוק!', greetingEng: 'Thank You Teacher Lia!', star: false }
];

const KINDER_QUESTIONS = [
  { speaker: '💙 סטיץ׳ שואל:', text: 'הגננת ליה! ספרתי 4 פרחים: 🌸🌸🌸🌸 — ספרתי נכון?', isRight: true, explain: 'נכון מאוד! יש כאן בדיוק 4 פרחים ורודים!' },
  { speaker: '🦄 חד-קרן שואל:', text: 'הגננת ליה! המילה לִיָּה מתחילה באות ל׳ — זה נכון?', isRight: true, explain: 'כל הכבוד! לִיָּה מתחילה באות ל׳!' },
  { speaker: '🧸 הדובי טדי שואל:', text: 'הגננת ליה! תפוח אדום 🍎 באנגלית זה Blue (כחול) — זה נכון?', isRight: false, explain: 'איזו גננת חכמה את ליה! תפוח אדום הוא Red, ו-Blue זה כחול!' },
  { speaker: '🧚‍♀️ הפיה לילי שואלת:', text: 'הגננת ליה! שפתון ורוד 💄 באנגלית זה Pink Lipstick — זה נכון?', isRight: true, explain: 'מדויק! Pink Lipstick זה שפתון ורוד!' },
  { speaker: '🐱 החתלתולה מיצי שואלת:', text: 'הגננת ליה! ספרתי 5 כוכבים: ⭐⭐ — זה נכון?', isRight: false, explain: 'תפסת אותה הגננת ליה! יש כאן רק 2 כוכבים ולא 5!' },
  { speaker: '💙 סטיץ׳ שואל:', text: 'הגננת ליה! המילה גְּלִידָה 🍦 מתחרזת עם חִידָה 🧩 — זה נכון?', isRight: true, explain: 'חרוז מושלם! גלידה — חידה!' }
];

let kinderQuizIndex = 0;

function initKinderStudio() {
  ensureLiaProfile();
  renderKinderStudents();
  renderKinderQuiz();
}

function renderKinderStudents() {
  const grid = document.getElementById('kinder-students-grid');
  const starsCountEl = document.getElementById('kinder-stars-count');
  if (starsCountEl) starsCountEl.textContent = appState.liaProfile.kinderStars || 0;
  if (!grid) return;
  grid.innerHTML = '';

  KINDER_STUDENTS.forEach(st => {
    const card = document.createElement('div');
    card.className = `kinder-student-card ${st.star ? 'has-star' : ''}`;
    card.innerHTML = `
      <div class="kinder-student-emoji">${st.emoji}</div>
      <div class="kinder-student-name">${st.name}</div>
      <div class="kinder-student-status">${st.star ? '⭐ קיבל מדבקת כוכב!' : 'לחצי לבדיקת נוכחות ✋'}</div>
    `;
    card.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      if (!st.star) {
        st.star = true;
        appState.liaProfile.kinderStars = (appState.liaProfile.kinderStars || 0) + 1;
        addActiveCoins(5);
        saveState();
        updateHeaderUI();
        confetti.burst(35);
      }
      renderKinderStudents();
      arcadeAudio.speakBilingual(st.greetingHeb, st.greetingEng);
    });
    grid.appendChild(card);
  });
}

function renderKinderQuiz() {
  const q = KINDER_QUESTIONS[kinderQuizIndex % KINDER_QUESTIONS.length];
  const av = document.getElementById('kinder-quiz-avatar');
  const txt = document.getElementById('kinder-quiz-text');
  const fb = document.getElementById('kinder-feedback-banner');
  if (av) av.textContent = q.speaker;
  if (txt) txt.textContent = q.text;
  if (fb) fb.className = 'feedback-banner hidden';
}

function handleKinderTeacherCheck(teacherSaysYes) {
  const q = KINDER_QUESTIONS[kinderQuizIndex % KINDER_QUESTIONS.length];
  const fb = document.getElementById('kinder-feedback-banner');
  if (teacherSaysYes === q.isRight) {
    addActiveCoins(20);
    appState.liaProfile.kinderStars = (appState.liaProfile.kinderStars || 0) + 1;
    saveState();
    updateHeaderUI();
    renderKinderStudents();
    arcadeAudio.playGoalSuccess();
    confetti.burst(75);
    if (fb) {
      fb.className = 'feedback-banner success';
      fb.textContent = `👩‍🏫 כל הכבוד להגננת ליה! ${q.explain} (+20 🪙)`;
    }
    arcadeAudio.speak(`כל הכבוד להגננת ליה! ${q.explain}`, 'he-IL', 0.88);
    setTimeout(() => {
      kinderQuizIndex = (kinderQuizIndex + 1) % KINDER_QUESTIONS.length;
      renderKinderQuiz();
    }, 2800);
  } else {
    arcadeAudio.playMiss();
    if (fb) {
      fb.className = 'feedback-banner error';
      fb.textContent = `💡 בואי נבדוק שוב הגננת ליה: ${q.explain}`;
    }
    arcadeAudio.speak(`בואי נבדוק שוב הגננת ליה: ${q.explain}`, 'he-IL', 0.88);
  }
}

function setupKinderStudioListeners() {
  const btnSpeak = document.getElementById('btn-kinder-speak');
  if (btnSpeak) {
    btnSpeak.addEventListener('click', () => {
      const q = KINDER_QUESTIONS[kinderQuizIndex % KINDER_QUESTIONS.length];
      arcadeAudio.speak(q.text, 'he-IL', 0.86);
    });
  }
  const btnYes = document.getElementById('btn-kinder-yes');
  if (btnYes) {
    btnYes.addEventListener('click', () => handleKinderTeacherCheck(true));
  }
  const btnNo = document.getElementById('btn-kinder-no');
  if (btnNo) {
    btnNo.addEventListener('click', () => handleKinderTeacherCheck(false));
  }
}

// ==================== VIEW 12: EA SPORTS FC 27 INTERACTIVE SCREEN EXPLORER ====================

let fc27ExplorerState = {
  screen: 'main_menu',
  selectedKey: 'KICK OFF'
};

function initFC27Studio() {
  renderFC27ExplorerScreen();
}

function renderFC27ExplorerScreen() {
  if (typeof FC27_VOCAB_BANK === 'undefined' || typeof renderFC27Screenshot === 'undefined') return;

  const screenWords = FC27_VOCAB_BANK.filter(w => w.screen === fc27ExplorerState.screen);
  let activeItem = screenWords.find(w => w.key === fc27ExplorerState.selectedKey) || screenWords[0];
  if (!activeItem) activeItem = FC27_VOCAB_BANK[0];
  fc27ExplorerState.selectedKey = activeItem.key;

  const stage = document.getElementById('fc27-interactive-stage');
  if (stage) {
    stage.innerHTML = renderFC27Screenshot(activeItem);
    stage.querySelectorAll('[data-fc27-key]').forEach(el => {
      el.addEventListener('click', () => {
        arcadeAudio.playClick();
        fc27ExplorerState.selectedKey = el.dataset.fc27Key;
        renderFC27ExplorerScreen();
        speakCurrentFC27ExplorerWord();
      });
    });
  }

  const engEl = document.getElementById('fc27-exp-eng');
  const hebEl = document.getElementById('fc27-exp-heb');
  const hintEl = document.getElementById('fc27-exp-hint');
  if (engEl) engEl.textContent = activeItem.eng.toUpperCase();
  if (hebEl) hebEl.textContent = activeItem.heb;
  if (hintEl) hintEl.textContent = activeItem.hint;
}

function speakCurrentFC27ExplorerWord() {
  if (typeof FC27_VOCAB_BANK === 'undefined') return;
  const activeItem = FC27_VOCAB_BANK.find(w => w.key === fc27ExplorerState.selectedKey) || FC27_VOCAB_BANK[0];
  if (!activeItem) return;
  const cleanEng = activeItem.eng.replace(/\([^)]*\)/g, '').trim();
  arcadeAudio.speakBilingual(activeItem.heb, cleanEng, 0.88);
}

function setupFC27StudioListeners() {
  const banner = document.getElementById('fc27-home-banner');
  if (banner) {
    banner.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('fc27');
      setTimeout(() => speakCurrentFC27ExplorerWord(), 250);
    });
  }

  document.querySelectorAll('#fc27-screen-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#fc27-screen-tabs .cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      fc27ExplorerState.screen = tab.dataset.screen;
      const firstInScreen = (typeof FC27_VOCAB_BANK !== 'undefined') && FC27_VOCAB_BANK.find(w => w.screen === fc27ExplorerState.screen);
      if (firstInScreen) fc27ExplorerState.selectedKey = firstInScreen.key;
      renderFC27ExplorerScreen();
      speakCurrentFC27ExplorerWord();
    });
  });

  const btnSpeak = document.getElementById('btn-fc27-speak-current');
  if (btnSpeak) {
    btnSpeak.addEventListener('click', () => {
      speakCurrentFC27ExplorerWord();
    });
  }

  const btnQuiz1 = document.getElementById('btn-fc27-start-quiz');
  if (btnQuiz1) {
    btnQuiz1.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('english_fc27', '🎮 אנגלית של FC 27 (מסכים)', false);
    });
  }

  const btnQuiz2 = document.getElementById('btn-fc27-launch-match');
  if (btnQuiz2) {
    btnQuiz2.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('english_fc27', '🎮 אנגלית של FC 27 (מסכים)', false);
    });
  }
}
