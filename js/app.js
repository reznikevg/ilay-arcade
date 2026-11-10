// ==================== MAIN APPLICATION CONTROLLER ====================

const STICKER_CATALOG = [
  { id: 's1', emoji: '🦁', name: 'האריה השואג של בית"ר ירושלים', rarity: 'סופרגול בית"ר 💛🖤', series: 'beitar' },
  { id: 's2', emoji: '👑', name: 'הכתר המלכותי של ריאל מדריד', rarity: 'ליגת האלופות 👑', series: 'real' },
  { id: 's3', emoji: '🏟️', name: 'אצטדיון טדי הגועש (31,000)', rarity: 'סופרגול בית"ר 💛🖤', series: 'beitar' },
  { id: 's4', emoji: '✨', name: 'אצטדיון סנטיאגו ברנבאו 360°', rarity: 'ליגת האלופות 👑', series: 'real' },
  { id: 's5', emoji: '⚡', name: 'קיליאן אמבפה #9 בספרינט סילון', rarity: 'ריאל מדריד TOTY ⭐', series: 'real' },
  { id: 's6', emoji: '💛', name: 'ירדן שועה #7 קפטן בית"ר', rarity: 'סופרגול זהב 💛🖤', series: 'beitar' },
  { id: 's7', emoji: '🕺', name: 'ויניסיוס ג׳וניור #7 מלך הדריבל', rarity: 'ריאל מדריד TOTY ⭐', series: 'real' },
  { id: 's8', emoji: '🙌', name: 'ג׳וד בלינגהאם #5 (Hey Jude)', rarity: 'ריאל מדריד TOTY ⭐', series: 'real' },
  { id: 's9', emoji: '🏆', name: 'גביע המדינה של בית"ר ירושלים', rarity: 'סופרגול נדיר 💛🖤', series: 'beitar' },
  { id: 's10', emoji: '🏆', name: 'גביע ליגת האלופות ה-15 (La Decimoquinta)', rarity: 'ליגת האלופות אגדי 🏆', series: 'real' },
  { id: 's11', emoji: '🧤', name: 'טיבו קורטואה #1 החומה בשער', rarity: 'ליגת האלופות 👑', series: 'real' },
  { id: 's12', emoji: '💛', name: 'צעיף אולטראס צהוב-שחור ביציע', rarity: 'סופרגול בית"ר 💛🖤', series: 'beitar' },
  { id: 's13', emoji: '🚀', name: 'בעיטת הטיל של ואלוורדה #8', rarity: 'ליגת האלופות 👑', series: 'real' },
  { id: 's14', emoji: '🕎', name: 'מנורת הזהב של בית"ר (1936)', rarity: 'סופרגול אגדי 💛🖤', series: 'beitar' },
  { id: 's15', emoji: '🎩', name: 'לוקה מודריץ׳ #10 המאסטרו', rarity: 'ליגת האלופות 👑', series: 'real' },
  { id: 's16', emoji: '⚽', name: 'כדור הזהב העולמי (Ballon d\'Or)', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's17', emoji: '👟', name: 'נעל הזהב האירופית למלך השערים', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's18', emoji: '🌟', name: 'עדי יונה #21 כוכב בית"ר ירושלים', rarity: 'סופרגול בית"ר 💛🖤', series: 'beitar' },
  { id: 's19', emoji: '🐐', name: 'ליאו מסי #10 אלוף העולם', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's20', emoji: '👑', name: 'עילי כוכב העל #10 (דירוג 99 TOTY)', rarity: 'קלף על מוזהב ⭐', series: 'world' },
  { id: 's21', emoji: '🔥', name: 'כריסטיאנו רונאלדו #7 (CR7 SIUUU)', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's22', emoji: '💎', name: 'לאמין ימאל #19 ילד הפלא', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's23', emoji: '🤖', name: 'ארלינג האלנד #9 מכונת השערים', rarity: 'אגדה עולמית 🌍', series: 'world' },
  { id: 's24', emoji: '🧤', name: 'מיגל סילבה #55 שוער בית"ר', rarity: 'סופרגול בית"ר 💛🖤', series: 'beitar' }
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
  { phrase: 'שַׁעַר שֶׁל יַרְדֵּן שׁוּעָה בִּירוּשָׁלַיִם!', emoji: '🦁⚽', level: 1 },
  { phrase: 'הַשּׁוֹעֵר שָׁמַר עַל הַשַּׁעַר בְּשֶׁקֶט', emoji: '🧤🥅', level: 1 },
  { phrase: 'סוּס לָבָן אוֹכֵל סָלָט בַּסָּלוֹן', emoji: '🐴🥗', level: 1 },
  { phrase: 'שֶׁמֶשׁ צְהֻבָּה זָרְחָה בַּשָּׁמַיִם בְּשַׁבָּת', emoji: '☀️💛', level: 2 },
  { phrase: 'סוּפֶּר וִינִיסְיוּס מוֹסֵר מְסִירָה בִּסְפָרַד!', emoji: '👑⚡', level: 2 },
  { phrase: 'שַׂחְקָנֵי בֵּיתָ"ר שְׂמֵחִים עַל הַדֶּשֶׁא', emoji: '🏆🔥', level: 2 },
  { phrase: 'הַשּׁוֹפֵט שָׁרַק בַּמַּשְׁרוֹקִית לְסִיּוּם הַמִּשְׂחָק', emoji: '🏁⚽', level: 3 },
  { phrase: 'שִׁבְעָה כּוֹכָבִים נוֹצְצִים בַּשָּׁמַיִם שֶׁל יְרוּשָׁלַיִם', emoji: '🌟🌙', level: 3 },
  { phrase: 'סַבָּא וְסָבְתָא סִפְּרוּ סִפּוּר מְסַקְרֵן בַּסֻּכָּה', emoji: '📖💛', level: 3 },
  { phrase: 'שׁוּעָה בָּעַט כַּדּוּר מְסוֹבָב יָשָׁר לָרֶשֶׁת!', emoji: '🥅💥', level: 3 }
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

function getStorageKey() {
  if (typeof window !== 'undefined' && (window.FORCE_KID_PROFILE === 'lia' || getInitialDeviceChild() === 'lia')) {
    return 'lia_magic_state_v2';
  }
  return 'ilay_arcade_state_v2';
}

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
  activeChild: 'ilay', // 'ilay' | 'lia' (100% device-local so Ilay & Lia can play simultaneously on separate devices!)
  seenQuestionKeys: [],
  liaProfile: {
    coins: 60,
    trophies: 1,
    bestStreak: 0,
    avatar: 'l1',
    theme: 'unicorn', // 'unicorn' | 'stitch'
    unlockedStickers: ['l1', 'l2'],
    topicStats: {},
    kinderStars: 5,
    seenQuestionKeys: [],
    coloringSaved: {},
    dressUpOutfit: { character: 'lia', hat: 'crown_gold', top: 'dress_unicorn', shoes: 'shoes_pink', acc: 'wand_star' }
  }
};

const DEVICE_KID_STORAGE_KEY = 'ilay_lia_device_kid_v1';

function getInitialDeviceChild() {
  try {
    if (window.FORCE_KID_PROFILE === 'lia' || window.FORCE_KID_PROFILE === 'ilay') {
      localStorage.setItem(DEVICE_KID_STORAGE_KEY, window.FORCE_KID_PROFILE);
      return window.FORCE_KID_PROFILE;
    }
    const params = new URLSearchParams(window.location.search);
    const urlKid = (params.get('kid') || '').toLowerCase();
    if (urlKid === 'lia' || urlKid === 'ilay') {
      localStorage.setItem(DEVICE_KID_STORAGE_KEY, urlKid);
      return urlKid;
    }
    const savedDeviceKid = localStorage.getItem(DEVICE_KID_STORAGE_KEY);
    if (savedDeviceKid === 'lia' || savedDeviceKid === 'ilay') {
      return savedDeviceKid;
    }
  } catch (e) {}
  return 'ilay';
}

function ensureLiaProfile() {
  if (!appState.liaProfile) {
    appState.liaProfile = {
      coins: 60,
      trophies: 1,
      bestStreak: 0,
      avatar: 'l1',
      theme: 'unicorn',
      unlockedStickers: ['l1', 'l2'],
      topicStats: {},
      kinderStars: 5,
      seenQuestionKeys: [],
      coloringSaved: {},
      dressUpOutfit: { character: 'lia', hat: 'crown_gold', top: 'dress_unicorn', shoes: 'shoes_pink', acc: 'wand_star' }
    };
  }
  if (!Array.isArray(appState.seenQuestionKeys)) appState.seenQuestionKeys = [];
  if (!Array.isArray(appState.liaProfile.seenQuestionKeys)) appState.liaProfile.seenQuestionKeys = [];
  if (!appState.liaProfile.coloringSaved) appState.liaProfile.coloringSaved = {};
  if (!appState.liaProfile.dressUpOutfit) {
    appState.liaProfile.dressUpOutfit = { character: 'lia', hat: 'crown_gold', top: 'dress_unicorn', shoes: 'shoes_pink', acc: 'wand_star' };
  }
  if (!appState.activeChild) appState.activeChild = getInitialDeviceChild();
}

function mergeTopicStatsMap(a = {}, b = {}) {
  const merged = { ...a };
  Object.keys(b || {}).forEach(k => {
    const sa = merged[k] || { solved: 0, correct: 0, stars: 0 };
    const sb = b[k] || { solved: 0, correct: 0, stars: 0 };
    const correct = Math.max(sa.correct || 0, sb.correct || 0);
    const solved = Math.max(sa.solved || 0, sb.solved || 0, correct);
    merged[k] = {
      solved,
      correct,
      stars: Math.min(3, Math.floor(correct / 5))
    };
  });
  return merged;
}

function mergeUniqueArray(a = [], b = [], maxLen = 200) {
  const set = new Set([...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])]);
  const arr = Array.from(set);
  return arr.length > maxLen ? arr.slice(arr.length - maxLen) : arr;
}

/**
 * Safely merges cloud state with local state so Ilay playing on one device
 * and Lia playing on another device NEVER overwrite each other's active screen,
 * coins, trophies, stickers, or topic progress!
 */
function mergeCloudStateSafely(local, remote) {
  if (!remote || typeof remote !== 'object') return local;
  const lockedLocalChild = getInitialDeviceChild();
  const localLia = local.liaProfile || {};
  const remoteLia = remote.liaProfile || {};

  const mergedIlayStickers = mergeUniqueArray(local.unlockedStickers || ['s1', 's2'], remote.unlockedStickers || ['s1', 's2']);
  const mergedLiaStickers = mergeUniqueArray(localLia.unlockedStickers || ['l1', 'l2'], remoteLia.unlockedStickers || ['l1', 'l2']);

  const mergedLiaProfile = {
    ...remoteLia,
    ...localLia,
    coins: Math.max(localLia.coins || 0, remoteLia.coins || 0),
    trophies: Math.max(localLia.trophies || 0, remoteLia.trophies || 0),
    bestStreak: Math.max(localLia.bestStreak || 0, remoteLia.bestStreak || 0),
    kinderStars: Math.max(localLia.kinderStars || 0, remoteLia.kinderStars || 0),
    unlockedStickers: mergedLiaStickers,
    topicStats: mergeTopicStatsMap(localLia.topicStats, remoteLia.topicStats),
    seenQuestionKeys: mergeUniqueArray(localLia.seenQuestionKeys, remoteLia.seenQuestionKeys, 180),
    coloringSaved: { ...(remoteLia.coloringSaved || {}), ...(localLia.coloringSaved || {}) },
    dressUpOutfit: localLia.dressUpOutfit || remoteLia.dressUpOutfit || { character: 'lia', hat: 'crown_gold', top: 'dress_unicorn', shoes: 'shoes_pink', acc: 'wand_star' },
    avatar: lockedLocalChild === 'lia' ? (localLia.avatar || remoteLia.avatar || 'l1') : (remoteLia.avatar || localLia.avatar || 'l1'),
    theme: lockedLocalChild === 'lia' ? (localLia.theme || remoteLia.theme || 'unicorn') : (remoteLia.theme || localLia.theme || 'unicorn')
  };

  const localLogs = local.speechLogs || [];
  let mergedSpeechLogs = remote.speechLogs || localLogs;
  if (remote.speechLogs && localLogs.length > 0) {
    mergedSpeechLogs = remote.speechLogs.map(rl => {
      const match = localLogs.find(ll => ll.date === rl.date && ll.phrase === rl.phrase);
      return match ? match : rl;
    });
  }

  return {
    ...local,
    ...remote,
    // Keep activeChild, selectedDay, selectedCategory, difficulty, gameMode 100% local to this device!
    activeChild: lockedLocalChild,
    selectedDay: local.selectedDay,
    selectedCategory: local.selectedCategory,
    difficulty: local.difficulty || 'medium',
    gameMode: local.gameMode || 'standard',
    // Merge Ilay's progress safely
    coins: Math.max(local.coins || 0, remote.coins || 0),
    trophies: Math.max(local.trophies || 0, remote.trophies || 0),
    bestStreak: Math.max(local.bestStreak || 0, remote.bestStreak || 0),
    unlockedStickers: mergedIlayStickers,
    topicStats: mergeTopicStatsMap(local.topicStats, remote.topicStats),
    seenQuestionKeys: mergeUniqueArray(local.seenQuestionKeys, remote.seenQuestionKeys, 180),
    avatar: lockedLocalChild === 'ilay' ? (local.avatar || remote.avatar || 's1') : (remote.avatar || local.avatar || 's1'),
    teamTheme: lockedLocalChild === 'ilay' ? (local.teamTheme || remote.teamTheme || 'beitar') : (remote.teamTheme || local.teamTheme || 'beitar'),
    speechLogs: mergedSpeechLogs,
    liaProfile: mergedLiaProfile
  };
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
  const localKid = getInitialDeviceChild();
  const currentKey = getStorageKey();
  try {
    let raw = localStorage.getItem(currentKey);
    if (!raw) {
      raw = localStorage.getItem(STORAGE_KEY);
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = { ...appState, ...parsed };
    }
  } catch (e) {
    console.warn('Could not load saved state:', e);
  }
  appState.activeChild = localKid;
  ensureLiaProfile();

  // Pull from Cloudflare KV & merge safely without EVER overwriting this device's activeChild or losing either child's coins/stickers!
  try {
    const res = await fetch(`${CLOUD_BACKEND_URL}/api/state`, { cache: 'no-store' });
    if (res.ok) {
      const remote = await res.json();
      if (remote && typeof remote === 'object') {
        let childRemote = remote;
        if (localKid === 'lia' && remote.lia) {
          childRemote = { ...remote, liaProfile: remote.lia };
        } else if (localKid === 'ilay' && remote.ilay) {
          childRemote = { ...remote, ...remote.ilay };
        }
        appState = mergeCloudStateSafely(appState, childRemote);
        appState.activeChild = localKid;
        localStorage.setItem(currentKey, JSON.stringify(appState));
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

let cloudSyncDebounceTimer = null;
let lastCloudSyncTimestamp = 0;
let lastSyncedCloudPayloadString = '';
const MIN_CLOUD_SYNC_INTERVAL_MS = 25000; // Minimum 25s between PUT requests to never exceed 1,000 daily limit!

function pushStateToCloudThrottled(immediate = false) {
  if (cloudSyncDebounceTimer) {
    clearTimeout(cloudSyncDebounceTimer);
    cloudSyncDebounceTimer = null;
  }

  const executePush = async () => {
    try {
      // 1. Fetch current remote state to protect the other child's namespace
      let remote = {};
      try {
        const getRes = await fetch(`${CLOUD_BACKEND_URL}/api/state`, { cache: 'no-store' });
        if (getRes.ok) remote = (await getRes.json()) || {};
      } catch (e) {}

      if (isLiaActive()) {
        const liaData = {
          coins: appState.liaProfile.coins,
          trophies: appState.liaProfile.trophies,
          bestStreak: appState.liaProfile.bestStreak,
          avatar: appState.liaProfile.avatar,
          theme: appState.liaProfile.theme,
          unlockedStickers: appState.liaProfile.unlockedStickers,
          topicStats: appState.liaProfile.topicStats,
          kinderStars: appState.liaProfile.kinderStars,
          seenQuestionKeys: appState.liaProfile.seenQuestionKeys,
          coloringSaved: appState.liaProfile.coloringSaved,
          dressUpOutfit: appState.liaProfile.dressUpOutfit,
          updatedAt: Date.now()
        };
        remote.lia = liaData;
        remote.liaProfile = liaData; // Keep legacy field synchronized
      } else {
        const ilayData = { ...appState };
        delete ilayData.liaProfile;
        delete ilayData.activeChild;
        remote.ilay = ilayData;
        Object.assign(remote, ilayData); // Keep top-level keys synchronized
        remote.updatedAt = Date.now();
      }

      const payloadStr = JSON.stringify(remote);
      // Skip network request entirely if data hasn't changed since last push!
      if (payloadStr === lastSyncedCloudPayloadString) return;

      const now = Date.now();
      lastCloudSyncTimestamp = now;
      lastSyncedCloudPayloadString = payloadStr;

      const res = await fetch(`${CLOUD_BACKEND_URL}/api/state`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payloadStr
      });

      if (res && res.status === 429) {
        console.warn('Cloudflare KV daily PUT quota (1,000) reached. Backing off cloud sync for 10 minutes; app continues smoothly with localStorage.');
        lastCloudSyncTimestamp = Date.now() + 600000; // 10 minute backoff
        return;
      }
    } catch (e) {
      // Graceful offline/429 resilience - app continues locally without any disruption!
    }
  };

  const now = Date.now();
  const timeSinceLastSync = now - lastCloudSyncTimestamp;

  if (immediate && timeSinceLastSync >= MIN_CLOUD_SYNC_INTERVAL_MS) {
    executePush();
  } else {
    // Debounce to batch multiple actions (answering questions, coloring, etc.) into a single sync
    const waitTime = Math.max(12000, MIN_CLOUD_SYNC_INTERVAL_MS - timeSinceLastSync);
    cloudSyncDebounceTimer = setTimeout(executePush, waitTime);
  }
}

function saveState() {
  const currentKey = getStorageKey();
  try {
    appState.updatedAt = Date.now();
    if (appState.activeChild === 'lia' || appState.activeChild === 'ilay') {
      localStorage.setItem(DEVICE_KID_STORAGE_KEY, appState.activeChild);
    }
    localStorage.setItem(currentKey, JSON.stringify(appState));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn('Could not save state:', e);
  }

  // Push to Cloudflare KV with smart throttling & debouncing
  pushStateToCloudThrottled(false);
}

// Push to cloud on page hide / tab close
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    pushStateToCloudThrottled(true);
  }
});
window.addEventListener('beforeunload', () => {
  pushStateToCloudThrottled(true);
});

// Periodic Cloud Pull - only every 45 seconds and only when tab is active in foreground!
setInterval(async () => {
  if (document.hidden) return;
  try {
    const res = await fetch(`${CLOUD_BACKEND_URL}/api/state`, { cache: 'no-store' });
    if (!res.ok) return;
    const remote = await res.json();
    if (remote && remote.updatedAt && (!appState.updatedAt || remote.updatedAt > appState.updatedAt)) {
      const lockedChild = appState.activeChild;
      appState = mergeCloudStateSafely(appState, remote);
      appState.activeChild = lockedChild;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
      updateHeaderUI();
      if (document.getElementById('view-schedule')?.classList.contains('active')) renderScheduleView();
      if (document.getElementById('view-homework')?.classList.contains('active')) renderHomeworkView();
      if (document.getElementById('view-parents')?.classList.contains('active')) renderParentsView();
    }
  } catch (e) {}
}, 45000);

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
  const targetKid = kid === 'lia' ? 'lia' : 'ilay';
  // If we are on index.html and user requested lia -> navigate to separate lia.html!
  if (targetKid === 'lia' && typeof window !== 'undefined' && !window.location.pathname.endsWith('lia.html') && window.FORCE_KID_PROFILE !== 'lia') {
    window.location.href = 'lia.html';
    return;
  }
  // If we are on lia.html and user requested ilay -> navigate to separate index.html!
  if (targetKid === 'ilay' && typeof window !== 'undefined' && (window.location.pathname.endsWith('lia.html') || window.FORCE_KID_PROFILE === 'lia')) {
    window.location.href = 'index.html';
    return;
  }
  ensureLiaProfile();
  appState.activeChild = targetKid;
  try {
    localStorage.setItem(DEVICE_KID_STORAGE_KEY, targetKid);
  } catch (e) {}
  appState.selectedCategory = 'all';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'all'));
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(appState));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {}
  updateHeaderUI();
  renderTopicsGrid();
  switchView('home');
  if (targetKid === 'lia') {
    arcadeAudio.speak('שלום ליה מתוקה! ברוכה הבאה למשחקים של ליה, צביעה, הלבשות, סטיץ׳ וחד קרן!', 'he-IL', 0.88);
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

  // Toggle Home Bento grids, Settings Strip & Hero card text
  const ilayBento = document.getElementById('ilay-bento-grid');
  const liaBento = document.getElementById('lia-bento-grid');
  const fc27Banner = document.getElementById('fc27-home-banner');
  const sciBanner = document.getElementById('science-home-banner');
  const dictBanner = document.getElementById('dictionary-home-banner');
  const settingsStrip = document.querySelector('.settings-strip');
  if (ilayBento && liaBento) {
    ilayBento.classList.toggle('hidden', lia);
    liaBento.classList.toggle('hidden', !lia);
  }
  if (fc27Banner) {
    fc27Banner.classList.toggle('hidden', lia);
  }
  // Hide text-heavy banners & timer/difficulty selectors for Lia (age 5, non-reader) so her screen is 100% simple and visual!
  if (sciBanner) sciBanner.classList.toggle('hidden', lia);
  if (dictBanner) dictBanner.classList.toggle('hidden', lia);
  if (settingsStrip) settingsStrip.classList.toggle('hidden', lia);

  const heroTag = document.getElementById('hero-tag-text');
  const heroTitle = document.getElementById('hero-title-text');
  const heroDesc = document.getElementById('hero-desc-text');
  const practiceHeading = document.getElementById('practice-section-heading');
  if (heroTag && heroTitle && heroDesc) {
    if (lia) {
      heroTag.textContent = 'מסיבת הקסמים של ליה • עם קול ותמונות ✨';
      heroTitle.textContent = 'משחק הקסמים של סטיץ׳ וחד-קרן 🦄💙';
      heroDesc.textContent = '6 חידות בתמונות וקול — בלי צורך לקרוא!';
      if (practiceHeading) practiceHeading.textContent = 'לחצי על תמונה כדי לשחק (עם הקראה בעברית 🔊):';
    } else {
      heroTag.textContent = 'אתגר יומי • בונוס כפול';
      heroTitle.textContent = 'משחק האלופים המהיר';
      heroDesc.textContent = '8 שאלות בחשבון ושפה על גביע יומי (עם הקראה 🔊)';
      if (practiceHeading) practiceHeading.textContent = 'תרגול לימודי (כיתה ב׳ • לחץ על 🔊 להקראה):';
    }
  }

  // Update Bottom Nav buttons for Lia vs Ilay so Lia NEVER lands in 2nd-grade keyboard dictation!
  const nav2Icon = document.getElementById('nav-2-icon');
  const nav2Text = document.getElementById('nav-2-text');
  const nav2Btn = document.getElementById('nav-speech');
  const nav3Icon = document.getElementById('nav-3-icon');
  const nav3Text = document.getElementById('nav-3-text');
  const nav3Btn = document.getElementById('nav-homework');
  const nav4Icon = document.getElementById('nav-4-icon');
  const nav4Text = document.getElementById('nav-4-text');
  const nav4Btn = document.getElementById('nav-dictation');
  const nav5Btn = document.getElementById('nav-schedule');
  if (nav2Btn && nav3Btn && nav4Btn && nav5Btn) {
    const nav5Icon = nav5Btn.querySelector('.btn-icon');
    const nav5Text = nav5Btn.querySelector('.btn-text');
    if (lia) {
      nav2Btn.dataset.view = 'makeup';
      if (nav2Icon) nav2Icon.textContent = '💄';
      if (nav2Text) nav2Text.textContent = 'איפור';
      nav3Btn.dataset.view = 'coloring';
      if (nav3Icon) nav3Icon.textContent = '🎨';
      if (nav3Text) nav3Text.textContent = 'צביעה';
      nav4Btn.dataset.view = 'dressup';
      if (nav4Icon) nav4Icon.textContent = '👗';
      if (nav4Text) nav4Text.textContent = 'הלבשות';
      nav5Btn.dataset.view = 'kinder';
      if (nav5Icon) nav5Icon.textContent = '👩‍🏫';
      if (nav5Text) nav5Text.textContent = 'הגן שלי';
    } else {
      nav2Btn.dataset.view = 'speech';
      if (nav2Icon) nav2Icon.textContent = '🎙️';
      if (nav2Text) nav2Text.textContent = 'הגייה';
      nav3Btn.dataset.view = 'homework';
      if (nav3Icon) nav3Icon.textContent = '✅';
      if (nav3Text) nav3Text.textContent = 'משימות';
      nav4Btn.dataset.view = 'dictation';
      if (nav4Icon) nav4Icon.textContent = '🎧';
      if (nav4Text) nav4Text.textContent = 'הכתבה';
      nav5Btn.dataset.view = 'schedule';
      if (nav5Icon) nav5Icon.textContent = '📅';
      if (nav5Text) nav5Text.textContent = 'מערכת';
    }
  }

  const activeCoins = getActiveCoins();
  const activeTrophies = getActiveTrophies();
  const activeAvatar = lia ? (appState.liaProfile.avatar || 'l1') : (appState.avatar || 's1');
  const activeName = lia ? 'ליה' : 'עילי';

  document.getElementById('stat-coins').textContent = activeCoins;
  document.getElementById('stat-trophies').textContent = activeTrophies;
  document.getElementById('stat-streak').textContent = session.currentStreak;
  const avEl = document.getElementById('current-avatar');
  if (avEl) {
    if (typeof getHeaderAvatarHTML === 'function') {
      avEl.innerHTML = getHeaderAvatarHTML(activeAvatar, lia);
    } else {
      avEl.textContent = lia ? '🦄' : '🦁';
    }
  }
  const nameEl = document.getElementById('player-name-display');
  if (nameEl) nameEl.textContent = activeName;

  applyTeamTheme(lia ? (appState.liaProfile.theme || 'unicorn') : (appState.teamTheme || 'beitar'));

  let totalSolved = 0;
  Object.values(getActiveTopicStats()).forEach(s => { totalSolved += (s.solved || 0); });
  const rankEl = document.getElementById('player-rank-display');
  if (rankEl) rankEl.textContent = getRankTitle(activeTrophies, totalSolved);

  // Shop badge
  const shopNotif = document.getElementById('shop-notif');
  if (shopNotif) {
    if (activeCoins >= 50 && getActiveStickers().length < getActiveCatalog().length) {
      shopNotif.classList.remove('hidden');
    } else {
      shopNotif.classList.add('hidden');
    }
  }

  // Homework badge & quick tile summary
  const pendingHw = (appState.homeworkList || []).filter(h => !h.done).length;
  const hwNotif = document.getElementById('hw-notif');
  if (!lia && pendingHw > 0) {
    if (hwNotif) {
      hwNotif.textContent = pendingHw;
      hwNotif.classList.remove('hidden');
    }
    const quickHw = document.getElementById('quick-hw-summary');
    if (quickHw) quickHw.textContent = `${pendingHw} משימות להיום`;
  } else {
    if (hwNotif) hwNotif.classList.add('hidden');
    const quickHw = document.getElementById('quick-hw-summary');
    if (quickHw) quickHw.textContent = `הכל בוצע! 🏆`;
  }

  // Speech studio daily status
  const todayStr = new Date().toLocaleDateString('he-IL');
  const todayLogs = (appState.speechLogs || []).filter(l => l.date && l.date.startsWith(todayStr));
  const speechNotif = document.getElementById('speech-notif');
  if (!lia && todayLogs.length < 3) {
    if (speechNotif) speechNotif.classList.remove('hidden');
    const quickSpeech = document.getElementById('quick-speech-summary');
    if (quickSpeech) quickSpeech.textContent = `תורגלו ${todayLogs.length}/5 היום`;
  } else {
    if (speechNotif) speechNotif.classList.add('hidden');
    const quickSpeech = document.getElementById('quick-speech-summary');
    if (quickSpeech) quickSpeech.textContent = `אלוף השדרנים! 🏆`;
  }

  // Today schedule quick summary
  const todayIdx = new Date().getDay();
  const todayData = (appState.schedule && appState.schedule[todayIdx]) || { after: [] };
  const quickSched = document.getElementById('quick-sched-summary');
  if (quickSched) {
    if (todayData.after && todayData.after.length > 0) {
      const firstAfter = todayData.after[0];
      quickSched.textContent = `היום: ${firstAfter.icon} ${firstAfter.title}`;
    } else {
      quickSched.textContent = 'מערכת שעות וחוגים';
    }
  }

  // Dictation quick summary
  const quickDict = document.getElementById('quick-dict-summary');
  if (quickDict) {
    quickDict.textContent = `${(appState.dictationWords || []).length} מילים מוכנות`;
  }
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
  if (viewName === 'science') initScienceStudio();
  if (viewName === 'dictionary') initTalkingDictionary();
  if (viewName === 'coloring') initColoringStudio();
  if (viewName === 'dressup') initDressUpStudio();
  if (viewName === 'soccer') initSoccerHub();
  if (viewName === 'gifted-hub' || viewName === 'gifted_hub') initGiftedHub();
  updateHeaderUI();
}

// ==================== HOME: VISUAL TOPICS GRID (WITH MASTERY LEVEL 1-5) ====================

function getTopicMasteryLevelInfo(correctCount = 0) {
  // Smooth, motivating 5-level mastery progression
  if (correctCount >= 32) return { level: 5, badge: '👑 מאסטר על', label: 'רמה 5: מאסטר על 👑', pct: 100, color: '#eab308' };
  if (correctCount >= 22) return { level: 4, badge: '🏆 אלוף אירופה', label: 'רמה 4: אלוף אירופה 🏆', pct: Math.round(((correctCount - 22) / 10) * 100), color: '#8b5cf6' };
  if (correctCount >= 13) return { level: 3, badge: '🌟 כוכב ליגה', label: 'רמה 3: כוכב ליגה 🌟', pct: Math.round(((correctCount - 13) / 9) * 100), color: '#0284c7' };
  if (correctCount >= 6) return { level: 2, badge: '⚡ מתקדמים', label: 'רמה 2: מתקדמים ⚡', pct: Math.round(((correctCount - 6) / 7) * 100), color: '#10b981' };
  return { level: 1, badge: '🌱 מתחילים', label: 'רמה 1: מתחילים 🌱', pct: Math.round((correctCount / 6) * 100), color: '#64748b' };
}

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
    const mastery = getTopicMasteryLevelInfo(st.correct || 0);
    const playLabel = lia ? 'שחקי 🦄' : 'שחק ⚽';

    const card = document.createElement('div');
    card.className = `topic-card cat-${topic.cat}`;
    card.innerHTML = `
      <div style="flex:1;">
        <div class="topic-card-top">
          <div class="topic-icon" style="${lia ? 'font-size:2.4rem;width:54px;height:54px;' : ''}">${topic.icon}</div>
          <div style="display:flex;align-items:center;gap:6px;">
            <button type="button" class="btn-chip topic-speak-btn" title="הקרא שם משחק" style="padding:4px 8px;font-size:0.82rem;background:#f1f5f9;border:1px solid #cbd5e1;">🔊</button>
            <span class="topic-tag">${topic.tag}</span>
          </div>
        </div>
        <div style="flex:1;">
          <div class="topic-title" style="${lia ? 'font-size:1.05rem;' : ''}">${topic.title}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
            <span style="font-size:0.72rem;font-weight:800;color:${mastery.color};background:#f8fafc;border:1px solid #e2e8f0;padding:1px 7px;border-radius:99px;">${mastery.label}</span>
            <span style="font-size:0.7rem;color:#64748b;">(${st.correct || 0} הצלחות)</span>
          </div>
        </div>
      </div>
      <div class="topic-footer">
        <span class="topic-stars">${starsDisplay}</span>
        <span class="play-mini-btn">${playLabel}</span>
      </div>
    `;
    const spkBtn = card.querySelector('.topic-speak-btn');
    if (spkBtn) {
      spkBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        arcadeAudio.speak(`${topic.title}. ${topic.desc || ''}`, 'he-IL', 0.88);
      });
    }
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

function isHebrewWordMatched(targetWord, heardWordsArray) {
  const t = cleanHebrewLettersOnly(targetWord);
  if (!t) return true;
  // Normalize common homophones / ASR spelling variants in Hebrew
  const norm = (s) => s.replace(/יי/g, 'י').replace(/וו/g, 'ו').replace(/[אה]$/, '');
  const tn = norm(t);

  return heardWordsArray.some(hw => {
    const hn = norm(hw);
    if (!hn) return false;
    if (hw === t || hn === tn) return true;
    // Allow prefix match only if the heard word is at least as long as target or within 1 char (never allow 2-letter truncation like "שו" for "שועה"!)
    if (t.length >= 4 && hw.length >= t.length - 1 && (hw.includes(t.slice(0, -1)) || hn.includes(tn))) {
      return true;
    }
    // Special case: "בירושלים" matched if ASR heard "ירושלים"
    if (t.startsWith('ב') && t.length >= 5 && hw === t.slice(1)) return true;
    return false;
  });
}

function updateLiveSpeechWordChips(transcriptText) {
  const chipsContainer = document.getElementById('sp-word-chips-row');
  if (!chipsContainer) return;
  const heardClean = cleanHebrewLettersOnly(transcriptText || '');
  const heardWords = heardClean.split(' ').filter(Boolean);

  chipsContainer.querySelectorAll('.sp-word-chip').forEach(chip => {
    const rawWord = chip.dataset.word || '';
    const matched = isHebrewWordMatched(rawWord, heardWords);
    chip.classList.toggle('matched', matched);
    if (matched) chip.classList.remove('missed');
    const statusIcon = chip.querySelector('.sp-chip-status');
    if (statusIcon) statusIcon.textContent = matched ? '✅' : '🔊';
  });
}

function renderSpeechCard() {
  const card = speechSession.cards[speechSession.index];
  speechSession.lastAudioUrl = null;
  speechSession.heardTranscript = '';
  speechSession.maxVolume = 0;
  speechSession.startTime = 0;
  speechSession.attemptsOnCard = 0;

  document.getElementById('sp-current-num').textContent = speechSession.index + 1;
  document.getElementById('sp-total-num').textContent = speechSession.cards.length;
  const pct = Math.round(((speechSession.index + 1) / speechSession.cards.length) * 100);
  document.getElementById('sp-progress-fill').style.width = `${pct}%`;

  document.getElementById('sp-emoji').textContent = card.emoji || '🎙️⚽';
  document.getElementById('sp-phrase').innerHTML = highlightSibilants(card.phrase);

  // Render interactive word-by-word chips so Ilay can tap any word to hear it & see live green checkmarks!
  const chipsRow = document.getElementById('sp-word-chips-row');
  if (chipsRow) {
    chipsRow.innerHTML = '';
    const words = card.phrase.split(/\s+/).filter(Boolean);
    words.forEach(w => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sp-word-chip';
      btn.dataset.word = cleanHebrewLettersOnly(w);
      btn.innerHTML = `<span class="sp-chip-status">🔊</span> <span>${highlightSibilants(w)}</span>`;
      btn.addEventListener('click', () => {
        arcadeAudio.speak(w, 'he-IL', 0.8);
      });
      chipsRow.appendChild(btn);
    });
  }

  const recBtn = document.getElementById('btn-sp-record');
  recBtn.classList.remove('recording');
  document.getElementById('sp-mic-icon').textContent = '🎙️';
  document.getElementById('sp-mic-label').textContent = 'לְחַץ וֶאֱמֹר אֶת כָּל הַמִּשְׁפָּט בְּקוֹל';

  document.getElementById('btn-sp-play-self').classList.add('hidden');
  const waveEl = document.getElementById('sp-wave-bars');
  waveEl.classList.add('hidden');
  waveEl.classList.remove('active');
  document.getElementById('sp-recognized-box').classList.add('hidden');
  document.getElementById('sp-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-sp-next').classList.add('hidden');

  // Automatically read the target sentence clearly in Hebrew so Ilay hears the model pronunciation!
  setTimeout(() => {
    arcadeAudio.speak(card.phrase, 'he-IL', 0.84);
  }, 280);
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

  // 1. Web Speech Recognition in Hebrew (Continuous so breathing pauses NEVER cut Ilay off mid-sentence!)
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    try {
      const rec = new SpeechRec();
      rec.lang = 'he-IL';
      rec.interimResults = true;
      rec.continuous = true;
      rec.onresult = (event) => {
        let t = '';
        for (let i = 0; i < event.results.length; i++) {
          t += ' ' + event.results[i][0].transcript;
        }
        speechSession.heardTranscript = t.replace(/\s+/g, ' ').trim();
        if (recBox && speechSession.heardTranscript) {
          recBox.classList.remove('hidden');
          recTxt.textContent = `נקלט בדיבור: "${speechSession.heardTranscript}"`;
          updateLiveSpeechWordChips(speechSession.heardTranscript);
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

  const targetClean = cleanHebrewLettersOnly(card.phrase);
  const targetWords = targetClean.split(' ').filter(w => w.length >= 2);
  const heardClean = cleanHebrewLettersOnly(speechSession.heardTranscript);
  const heardWords = heardClean.split(' ').filter(Boolean);

  const hasRecognizedWords = heardClean.length > 0;
  const hasAudibleVoice = speechSession.maxVolume >= 11;
  const isTooShort = durationMs < 900;

  document.getElementById('sp-mic-icon').textContent = '🎙️';
  document.getElementById('sp-mic-label').textContent = 'הַקְלֵט שׁוּב';

  // 1. STRICT SILENCE CHECK
  if ((!hasRecognizedWords && !hasAudibleVoice) || isTooShort) {
    arcadeAudio.playMiss();
    fb.className = 'feedback-banner warning';
    fb.innerHTML = `⚠️ <strong>לא שמענו אותך עדיין!</strong><br>לחץ על <strong>הַקְלֵט שׁוּב</strong>, אמור את כל המשפט בקול ברור ליד המיקרופון, ואז לחץ לסיום.`;
    fb.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    arcadeAudio.speak('עילי, לא שמענו את המשפט. לחץ על הקלט שוב ואמור את כל המשפט בקול ברור!', 'he-IL', 0.88);
    return;
  }

  // 2. TRUE WORD-BY-WORD & SIBILANT ('ש' / 'ס') DIAGNOSTIC VERIFICATION
  const matchedWords = [];
  const missedWords = [];
  const sibilantErrors = [];

  targetWords.forEach(tw => {
    if (isHebrewWordMatched(tw, heardWords)) {
      matchedWords.push(tw);
    } else {
      missedWords.push(tw);
      if (tw.includes('ש') || tw.includes('ס')) {
        const lispVariant = tw.replace(/[שס]/g, 'ת');
        if (heardWords.some(hw => hw === lispVariant)) {
          sibilantErrors.push(tw);
        }
      }
    }
  });

  // Update visual word chips to show green ✅ for matched words and red ❌ for missed words!
  const chipsContainer = document.getElementById('sp-word-chips-row');
  if (chipsContainer) {
    chipsContainer.querySelectorAll('.sp-word-chip').forEach(chip => {
      const w = chip.dataset.word || '';
      const isOk = matchedWords.includes(w);
      chip.classList.toggle('matched', isOk);
      chip.classList.toggle('missed', !isOk);
      const statusIcon = chip.querySelector('.sp-chip-status');
      if (statusIcon) statusIcon.textContent = isOk ? '✅' : '❌';
    });
  }

  // CASE A: Speech Recognition produced a transcript -> Verify that ALL (or at least N-1 for >=5 word sentences) words were spoken!
  if (hasRecognizedWords) {
    const requiredMatches = targetWords.length <= 4 ? targetWords.length : targetWords.length - 1;
    const sibilantTargetWords = targetWords.filter(w => w.includes('ש') || w.includes('ס'));
    const sibilantMatchedWords = sibilantTargetWords.filter(w => matchedWords.includes(w));

    const passedAll =
      matchedWords.length >= requiredMatches &&
      sibilantMatchedWords.length >= Math.max(1, sibilantTargetWords.length - (sibilantTargetWords.length >= 4 ? 1 : 0)) &&
      sibilantErrors.length === 0;

    if (passedAll) {
      appState.coins += 20;
      saveState();
      updateHeaderUI();
      arcadeAudio.playGoalSuccess();
      confetti.burst(80);

      fb.className = 'feedback-banner success';
      fb.innerHTML = `🌟 <strong>אלוף הדיבור! אמרת את כל המשפט מצוין!</strong><br>✅ מילים שנקלטו בהצלחה: <strong>${matchedWords.join(' • ')}</strong><br>הרווחת <strong>+20 🪙</strong> מטבעות!`;
      fb.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
      arcadeAudio.speak(`כל הכבוד עילי! אמרת את כל המשפט מצוין והרווחת עשרים מטבעות!`, 'he-IL', 0.9);
      return;
    }

    // Partial or Incomplete Sentence (e.g. "שער של ירדן שו" where "שועה" and "בירושלים" were cut off or missed!)
    speechSession.attemptsOnCard = (speechSession.attemptsOnCard || 0) + 1;
    // If Ilay already tried twice and said at least half the sentence, allow advancing so Web Speech API quirks never block him!
    if (speechSession.attemptsOnCard >= 2 && matchedWords.length >= Math.ceil(targetWords.length * 0.5)) {
      appState.coins += 15;
      saveState();
      updateHeaderUI();
      arcadeAudio.playGoalSuccess();
      fb.className = 'feedback-banner success';
      fb.innerHTML = `👏 <strong>כל הכבוד על ההתמדה עילי! (+15 🪙)</strong><br>אמרת מצוין: <strong>${matchedWords.join(' • ')}</strong>! אפשר להמשיך לכרטיסייה הבאה או להקליט שוב.`;
      fb.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
      arcadeAudio.speak('כל הכבוד על ההתמדה עילי! הרווחת חמישה עשר מטבעות ואפשר להמשיך לכרטיסייה הבאה!', 'he-IL', 0.9);
      return;
    }

    arcadeAudio.playMiss();
    nextBtn.classList.add('hidden');
    fb.className = 'feedback-banner warning';

    const okPart = matchedWords.length > 0 ? `✅ <strong>אמרת מצוין:</strong> ${matchedWords.join(', ')}<br>` : '';
    const missPart = `🎯 <strong>מילים שחסרות או נחתכו באמצע:</strong> <span style="color:#dc2626;text-decoration:underline;">${missedWords.join(', ')}</span>`;
    const lispTip = sibilantErrors.length > 0
      ? `<br>💡 <strong>שים לב לאות ש׳/ס׳ במילה "${sibilantErrors.join(', ')}":</strong> סגור שיניים לחיוך כדי שהלשון תישאר מאחורי השיניים!`
      : `<br>💡 לחץ על המילים האדומות למעלה כדי לשמוע אותן, ואז לחץ על <strong>הַקְלֵט שׁוּב</strong> ואמור את המשפט עד הסוף!`;

    fb.innerHTML = `🎙️ <strong>כמעט שם! המשפט לא הושלם במלואו:</strong><br>${okPart}${missPart}${lispTip}`;
    fb.classList.remove('hidden');

    const spokenCoach = matchedWords.length > 0
      ? `עילי, אמרת יפה ${matchedWords.join(' ')}, אבל חסרות המילים: ${missedWords.join(' ו')}. בוא נקליט שוב את כל המשפט עד הסוף!`
      : `עילי, שמענו מילים אחרות. בוא נקשיב למשפט ונקליט שוב ברור: ${card.phrase}`;
    arcadeAudio.speak(spokenCoach, 'he-IL', 0.88);
    return;
  }

  // CASE B: Browser does not support Hebrew SpeechRecognition -> Check duration & voice energy
  const minExpectedDurationMs = Math.max(1800, targetWords.length * 420);
  if (hasAudibleVoice && durationMs >= minExpectedDurationMs) {
    appState.coins += 15;
    saveState();
    updateHeaderUI();
    arcadeAudio.playGoalSuccess();

    fb.className = 'feedback-banner success';
    fb.innerHTML = `🎙️ <strong>ההקלטה נשמרה!</strong> לחץ על "השמע את ההקלטה שלי" כדי לבדוק שכל המילים ב-ש׳ ו-ס׳ נשמעות ברור! (<strong>+15 🪙</strong>)`;
    fb.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    arcadeAudio.speak('ההקלטה נשמרה! לחץ על השמע את ההקלטה שלי כדי להקשיב לעצמך!', 'he-IL', 0.88);
    return;
  }

  arcadeAudio.playMiss();
  fb.className = 'feedback-banner warning';
  fb.innerHTML = `⚠️ <strong>ההקלטה הייתה קצרה או שקטה מדי!</strong><br>אמור את כל ${targetWords.length} המילים במשפט בקול רם וברור עד הסוף.`;
  fb.classList.remove('hidden');
  nextBtn.classList.add('hidden');
  arcadeAudio.speak('ההקלטה הייתה קצרה מדי. אמור את כל המילים במשפט עד הסוף!', 'he-IL', 0.88);
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

  // Render big clickable Word Letter Tiles above the keyboard so a slow reader can tap the word's letters easily!
  let helperBar = document.getElementById('dict-word-tiles-helper');
  const kb = document.getElementById('hebrew-keyboard');
  if (!helperBar && kb && kb.parentNode) {
    helperBar = document.createElement('div');
    helperBar.id = 'dict-word-tiles-helper';
    helperBar.style.cssText = 'background:#f0fdf4;border:2px solid #34d399;border-radius:14px;padding:10px;margin-bottom:10px;text-align:center;';
    kb.parentNode.insertBefore(helperBar, kb);
  }
  if (helperBar) {
    const chars = shuffle(cleanWord.split(''));
    helperBar.innerHTML = `
      <div style="font-size:0.86rem;font-weight:900;color:#065f46;margin-bottom:6px;">🧩 עזרה מהירה לעילי: לחץ על האותיות של המילה לפי הסדר!</div>
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;">
        ${chars.map((c, idx) => `<button type="button" class="dict-helper-tile" data-char="${c}" data-idx="${idx}" style="font-size:1.55rem;font-weight:900;min-width:48px;height:48px;border-radius:12px;border:2px solid #059669;background:#ffffff;color:#0f172a;cursor:pointer;box-shadow:0 3px 8px rgba(5,150,105,0.18);">${c}</button>`).join('')}
      </div>
    `;
    helperBar.querySelectorAll('.dict-helper-tile').forEach(btn => {
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        inp.value += btn.dataset.char;
        btn.style.opacity = '0.35';
        updateDictationSlots();
      });
    });
  }

  document.getElementById('dict-attempt-counter').textContent = 'ניסיון 1';
  document.getElementById('dict-feedback-banner').className = 'feedback-banner hidden';
  document.getElementById('btn-dict-check').classList.remove('hidden');
  document.getElementById('btn-dict-next').classList.add('hidden');

  setTimeout(() => {
    arcadeAudio.speak(`המילה היא: ${item.word}. ${item.hint || ''}`, 'he-IL', 0.85);
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

function getActiveSeenQuestionKeys() {
  ensureLiaProfile();
  if (isLiaActive()) {
    if (!Array.isArray(appState.liaProfile.seenQuestionKeys)) appState.liaProfile.seenQuestionKeys = [];
    return appState.liaProfile.seenQuestionKeys;
  }
  if (!Array.isArray(appState.seenQuestionKeys)) appState.seenQuestionKeys = [];
  return appState.seenQuestionKeys;
}

function recordSeenQuestionKey(key) {
  if (!key) return;
  const list = getActiveSeenQuestionKeys();
  if (!list.includes(key)) {
    list.push(key);
    if (list.length > 180) {
      list.shift();
    }
  }
}

function startMatch(topicId, topicTitle, isDailyBonus = false) {
  clearInterval(session.timerInterval);
  const lia = isLiaActive();

  // Keep games short, fun, and zero-fatigue (6 questions for Lia age 5, 8-10 for Ilay)
  const count = appState.gameMode === 'penalty' ? 5 : appState.gameMode === 'arcade' ? 15 : (lia ? 6 : (isDailyBonus ? 8 : 8));

  const statsObj = getActiveTopicStats();
  const topicStat = statsObj[topicId] || { solved: 0, correct: 0, stars: 0 };
  const masteryInfo = getTopicMasteryLevelInfo(topicStat.correct || 0);

  session = {
    topicId,
    topicTitle,
    isDailyBonus,
    masteryLevel: masteryInfo.level,
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
    penaltyHistory: [],
    chestOpened: false
  };

  const sessionSeenKeys = new Set();
  const persistentSeen = getActiveSeenQuestionKeys();

  for (let i = 0; i < count; i++) {
    // Gentle, non-frustrating difficulty progression based on actual Mastery Level (1..5):
    let progressiveDiff = 'easy';
    if (lia) {
      // For Lia (age 5): keep it warm, foundational, and easy in Levels 1-3, gently medium in Levels 4-5
      progressiveDiff = masteryInfo.level <= 3 ? 'easy' : (i < 3 ? 'easy' : 'medium');
    } else if (appState.difficulty === 'easy') {
      progressiveDiff = i < 5 ? 'easy' : 'medium';
    } else if (appState.difficulty === 'hard' || masteryInfo.level >= 4) {
      progressiveDiff = i < 2 ? 'easy' : i < 5 ? 'medium' : 'hard';
    } else {
      // Default gradual curve for Ilay (Levels 1-3): easy warm-up -> medium progression (no sudden hard spikes!)
      progressiveDiff = masteryInfo.level <= 1 ? (i < 5 ? 'easy' : 'medium') : (i < 3 ? 'easy' : 'medium');
    }

    let q = null;
    let key = '';
    for (let attempt = 0; attempt < 45; attempt++) {
      const candidate = generateQuestionForTopic(topicId, progressiveDiff, appState.customQuestions);
      const candKey = String(candidate.uniqueKey || candidate.englishSpeechWord || candidate.stimulusHtml || Math.random());
      const notInSession = !sessionSeenKeys.has(candKey);
      const notInPersistent = attempt > 24 || !persistentSeen.includes(candKey);
      if (notInSession && notInPersistent) {
        q = candidate;
        key = candKey;
        break;
      }
      if (notInSession) {
        q = candidate;
        key = candKey;
      }
    }
    if (!q) {
      q = generateQuestionForTopic(topicId, progressiveDiff, appState.customQuestions);
      key = String(q.uniqueKey || Math.random());
    }

    sessionSeenKeys.add(key);
    recordSeenQuestionKey(key);

    q.progressiveStage = progressiveDiff === 'easy' ? 1 : progressiveDiff === 'medium' ? 2 : 3;
    session.questions.push(q);
  }
  saveState();

  document.getElementById('arena-topic-title').textContent = isDailyBonus
    ? (lia ? '🦄 מסיבת הקסמים של ליה (בונוס X2)' : '⚡ משחק העונה (בונוס X2)')
    : `${topicTitle} • רמה ${masteryInfo.level} ${(masteryInfo.badge || masteryInfo.label || '').split(' ')[0]}`;

  const fc27GuideBtn = document.getElementById('btn-arena-open-fc27-guide');
  if (fc27GuideBtn) {
    fc27GuideBtn.classList.toggle('hidden', topicId !== 'english_fc27' && topicId !== 'english_fc27_commentator');
  }

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
      dot.textContent = lia ? '🌟' : '✖';
    } else {
      dot.textContent = i + 1;
    }
    track.appendChild(dot);
  }
}

function speakOptionValue(optVal) {
  if (!optVal) return;
  const raw = String(optVal);
  const parenMatch = raw.match(/\(([A-Za-z\s/]+)\)/);
  if (parenMatch) {
    const engPart = parenMatch[1].split('/')[0].trim();
    const hebPart = raw.replace(/\([^)]+\)/g, '').trim();
    arcadeAudio.speakBilingual(hebPart, engPart);
    return;
  }
  const cleanNoEmoji = raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/gu, '').trim();
  if (cleanNoEmoji.length > 0 && /^[A-Za-z0-9\s!?.,'-]+$/.test(cleanNoEmoji) && /[A-Za-z]/.test(cleanNoEmoji)) {
    arcadeAudio.speak(cleanNoEmoji, 'en-US', 0.82);
  } else {
    arcadeAudio.speak(raw, 'he-IL', 0.88);
  }
}

function speakQuestionPrompt(q) {
  if (!q) return;
  if (q.isEnglish && q.englishSpeechWord) {
    const segments = [
      { text: q.ttsText || q.instruction, lang: 'he-IL', rate: 0.88 },
      { text: q.englishSpeechWord, lang: 'en-US', rate: 0.8 }
    ];
    if (q.ttsFollowUpHeb) {
      segments.push({ text: q.ttsFollowUpHeb, lang: 'he-IL', rate: 0.88 });
    }
    arcadeAudio.playSegments(segments);
  } else if (q.isEnglish) {
    arcadeAudio.speak(q.ttsText || q.instruction, 'en-US', 0.84);
  } else {
    arcadeAudio.speak(q.ttsText || q.instruction, 'he-IL', 0.88);
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

  const mLevel = session.masteryLevel || 1;
  const stageBadge = lia
    ? `🦄 שלב ${mLevel} בגן של ליה • `
    : `🏆 רמת שליטה ${mLevel}/5 • `;

  document.getElementById('commentator-text').textContent =
    stageBadge +
    (lia
      ? '✨ "הקשיבי ולחצי ישר על הכרטיס המתאים!"'
      : q.isMulti
        ? '🎙️ "בחר את כל המספרים המתאימים!"'
        : '🎙️ "עילי מכוון לשער..."');

  const btnSpeak = document.getElementById('btn-speak-question');
  if (btnSpeak) {
    btnSpeak.textContent = q.isEnglish ? '🔊 הקרא שוב (עברית + אנגלית)' : '🔊 הקרא שאלה שוב';
  }

  document.getElementById('q-instruction').innerHTML = q.instruction;
  const hintBox = document.getElementById('hint-box');
  hintBox.classList.add('hidden');
  hintBox.textContent = `💡 הסבר ורמז: ${q.hint}`;

  const stim = document.getElementById('q-stimulus');
  stim.className = 'q-stimulus-box' + (q.rtlStimulus ? ' rtl-stimulus' : '');
  stim.innerHTML = q.stimulusHtml;
  stim.querySelectorAll('[data-fc27-key]').forEach(el => {
    el.addEventListener('click', () => {
      const k = el.dataset.fc27Key;
      const found = (typeof FC27_VOCAB_BANK !== 'undefined') && FC27_VOCAB_BANK.find(x => x.key === k);
      if (found) {
        const cleanEng = found.eng.replace(/\([^)]*\)/g, '').trim();
        arcadeAudio.speakBilingual(found.heb, cleanEng, 0.86);
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

    if (lia) {
      // For Lia (age 5, CANNOT READ IN ANY LANGUAGE): Render a GIANT Picture-First card so she chooses by picture + voice!
      const parts = String(optVal).trim().split(/\s+/);
      const firstToken = parts[0] || '🦄';
      const hasLeadingIcon = /[^\u0590-\u05FFa-zA-Z0-9]/.test(firstToken);
      const bigPicture = hasLeadingIcon ? firstToken : '🦄';
      const labelText = hasLeadingIcon ? parts.slice(1).join(' ') : optVal;

      row.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 12px;min-height:125px;text-align:center;gap:6px;position:relative;';
      row.innerHTML = `
        <button type="button" class="opt-speak-mini" title="השמע תשובה" style="position:absolute;top:8px;left:8px;width:36px;height:36px;border-radius:50%;border:2px solid #f472b6;background:#fdf2f8;font-size:1.1rem;cursor:pointer;">🔊</button>
        <div style="font-size:3.6rem;line-height:1.1;">${bigPicture}</div>
        <span class="opt-text" dir="auto" style="font-size:1.12rem;font-weight:900;color:#4a044e;">${labelText}</span>
        <span class="opt-indicator" style="display:none;">✨</span>
      `;
    } else {
      // For Ilay (reads Hebrew slowly): Large clear font + prominent 🔊 button + touching the row reads it aloud!
      row.innerHTML = `
        <span class="opt-text" dir="auto" style="font-size:1.16rem;font-weight:800;">${optVal}</span>
        <button type="button" class="opt-speak-mini" title="השמע תשובה בקול" style="width:36px;height:36px;border-radius:50%;border:1px solid #cbd5e1;background:#f8fafc;font-size:1rem;cursor:pointer;flex-shrink:0;">🔊</button>
        <span class="opt-indicator">${q.isMulti ? '☐' : '•'}</span>
      `;
    }

    const miniSpeak = row.querySelector('.opt-speak-mini');
    if (miniSpeak) {
      miniSpeak.addEventListener('click', (ev) => {
        ev.stopPropagation();
        speakOptionValue(optVal);
      });
    }
    row.addEventListener('click', () => {
      if (row.classList.contains('wrong')) return;
      // For Lia (age 5): One-tap direct check so she never has to hunt for a separate "Check Answer" button!
      if (lia && !q.isMulti) {
        handleOptionSelect(optVal, row, q.isMulti);
        checkCurrentAnswer();
        return;
      }
      // For Ilay (slow reader): First tap on an option selects it AND reads it aloud in Hebrew! Second tap on the already-selected option checks the answer!
      const wasAlreadySelected = !q.isMulti && session.selectedOptions.has(optVal);
      handleOptionSelect(optVal, row, q.isMulti);
      if (wasAlreadySelected) {
        checkCurrentAnswer();
      } else {
        speakOptionValue(optVal);
      }
    });
    optsContainer.appendChild(row);
  });

  document.getElementById('attempt-counter').textContent = lia ? '🦄 לחצי על התשובה!' : `ניסיון 1`;
  const fb = document.getElementById('feedback-banner');
  fb.className = 'feedback-banner hidden';

  const checkBtn = document.getElementById('btn-check-answer');
  if (checkBtn) {
    // Hide the 2nd-step button for Lia so she plays with 1 direct tap!
    checkBtn.classList.toggle('hidden', lia && !q.isMulti);
  }
  document.getElementById('btn-next-question').classList.add('hidden');

  // Always narrate the question & explanation automatically in Hebrew (and English when relevant) for BOTH Ilay and Lia!
  setTimeout(() => speakQuestionPrompt(q), 220);
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
      el.querySelector('.opt-indicator').textContent = lia ? '✨' : '•';
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
    fb.textContent = lia ? 'לחצי על אחת התמונות מתוקה! 🦄' : 'בחר תשובה קודם! ⚽';
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

    const stage = q.progressiveStage || 1;
    const stageBonus = stage === 3 ? 5 : stage === 2 ? 2 : 0;
    const baseReward = session.attemptsOnCurrent === 1 ? 10 : 8;
    const streakBonus = session.currentStreak >= 3 ? 5 : 0;
    const mult = session.isDailyBonus ? 2 : 1;
    const earned = (baseReward + streakBonus + stageBonus) * mult;

    session.coinsEarned += earned;
    addActiveCoins(earned);
    session.penaltyHistory[session.currentIndex] = 'scored';

    const statsObj = getActiveTopicStats();
    const prevCorrect = (statsObj[q.topicId] && statsObj[q.topicId].correct) || 0;
    const prevLevel = getTopicMasteryLevelInfo(prevCorrect).level;
    const tStat = statsObj[q.topicId] || { solved: 0, correct: 0, stars: 0 };
    tStat.solved++;
    tStat.correct++;
    tStat.stars = Math.min(3, Math.floor(tStat.correct / 5));
    statsObj[q.topicId] = tStat;
    const newLevelInfo = getTopicMasteryLevelInfo(tStat.correct);
    saveState();

    document.querySelectorAll('#q-options-container .option-row').forEach(el => {
      if (correctSet.has(el.dataset.val)) {
        el.classList.add('correct');
        el.querySelector('.opt-indicator').textContent = '✔';
      }
    });

    arcadeAudio.playGoalSuccess();
    confetti.burst(stage === 3 ? 95 : 65);
    if (ball) ball.classList.add('shoot-anim');
    if (gk) gk.classList.add('dive-right');

    const streakMsg = session.currentStreak >= 3 ? ` 🔥 רצף ${session.currentStreak}!` : '';
    const levelUpMsg = newLevelInfo.level > prevLevel ? ` 🎉 עלית ל-${newLevelInfo.label}!` : '';
    fb.className = 'feedback-banner success';
    fb.textContent = lia
      ? `כל הכבוד ליה אלופה! +${earned} 🪙${streakMsg}${levelUpMsg}`
      : `גווווול! +${earned} 🪙${streakMsg}${levelUpMsg}`;
    document.getElementById('commentator-text').textContent = lia
      ? `🦄 "סטיץ׳ וחד-קרן מוחאים כפיים לליה!"`
      : `🎙️ "שעררר אדיר של עילי!"`;

    // Speak praise / English reinforcement
    if (newLevelInfo.level > prevLevel) {
      setTimeout(() => {
        arcadeAudio.speak(
          lia
            ? `וואו ליה! עלית לרמה ${newLevelInfo.level}! איזו אלופה!`
            : `כל הכבוד עילי! עלית לרמה ${newLevelInfo.level} בנושא הזה!`,
          'he-IL',
          0.9
        );
      }, 280);
    } else if (lia && q.isEnglish && q.englishSpeechWord) {
      setTimeout(() => {
        arcadeAudio.speakBilingual('מצוין ליה!', q.englishSpeechWord, 0.9);
      }, 220);
    } else if (session.currentStreak === 3 || session.currentStreak === 6) {
      setTimeout(() => {
        arcadeAudio.speak(
          lia ? 'איזו אלופה ליה! שלוש תשובות נכונות ברצף!' : 'איזה תותח עילי! שלושה שערים ברצף!',
          'he-IL',
          0.9
        );
      }, 300);
    }

    updateHeaderUI();
    renderPenaltyTrack();

    document.getElementById('btn-check-answer').classList.add('hidden');
    document.getElementById('btn-next-question').classList.remove('hidden');
  } else {
    // ZERO-FRUSTRATION GUIDED COACHING FOR LIA (AGE 5)
    if (lia) {
      session.attemptsOnCurrent = 2;
      // Fade out the option she tapped and highlight the right answer with a golden glow so she learns without ever failing!
      document.querySelectorAll('#q-options-container .option-row').forEach(el => {
        if (session.selectedOptions.has(el.dataset.val)) {
          el.classList.add('wrong');
          el.style.opacity = '0.4';
        } else if (correctSet.has(el.dataset.val)) {
          el.style.borderColor = '#facc15';
          el.style.boxShadow = '0 0 18px rgba(250, 204, 21, 0.65)';
        }
      });
      session.selectedOptions.clear();
      document.getElementById('hint-box').classList.remove('hidden');
      fb.className = 'feedback-banner warning';
      fb.textContent = `💡 בואי נלמד יחד מתוקה: ${q.hint} — לחצי עכשיו על התשובה שמסומנת בזהב! ✨`;
      if (q.hint) {
        arcadeAudio.speak(`בואי נלמד יחד ליה: ${q.hint}. לחצי על התשובה המוארת בזהב!`, 'he-IL', 0.88);
      }
      return;
    }

    // FOR ILAY: Attempt 1 gives spoken Hebrew hint + crosses out the wrong option so Attempt 2 is fair and educational!
    arcadeAudio.playMiss();
    session.currentStreak = 0;
    updateHeaderUI();

    if (session.attemptsOnCurrent === 1) {
      session.attemptsOnCurrent = 2;
      document.getElementById('attempt-counter').textContent = `ניסיון 2 (עם רמז 💡)`;
      document.querySelectorAll('#q-options-container .option-row').forEach(el => {
        if (session.selectedOptions.has(el.dataset.val) && !correctSet.has(el.dataset.val)) {
          el.classList.add('wrong');
          el.style.opacity = '0.45';
        }
      });
      session.selectedOptions.clear();
      fb.className = 'feedback-banner warning';
      fb.textContent = `כמעט בשער עילי! 🥅 הקשב להסבר ונסה לבעוט שוב!`;
      document.getElementById('hint-box').classList.remove('hidden');
      if (q.hint) {
        setTimeout(() => arcadeAudio.speak(`רמז והסבר: ${q.hint}`, 'he-IL', 0.88), 200);
      }
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

      const cleanAns = q.correctAnswers.join(' , ').replace(/<[^>]+>/g, '');
      fb.className = 'feedback-banner error';
      fb.textContent = `התשובה הנכונה: ${cleanAns} — ${q.hint || ''}`;
      arcadeAudio.speak(`התשובה הנכונה היא: ${cleanAns}. ${q.hint || ''}`, 'he-IL', 0.88);
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
  if (ratio >= 0.65) {
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

  session.chestOpened = false;
  const btnChest = document.getElementById('btn-open-mystery-chest');
  const chestRes = document.getElementById('mystery-chest-result');
  if (btnChest) {
    btnChest.classList.remove('hidden');
    btnChest.disabled = false;
    btnChest.textContent = lia
      ? '🎁 פתחי את תיבת הקסמים של ליה וסטיץ׳! ✨'
      : '🎁 פתח את תיבת ההפתעה של האלופים! ✨';
  }
  if (chestRes) {
    chestRes.classList.add('hidden');
    chestRes.textContent = '';
  }

  switchView('summary');
}

function openSummaryMysteryChest() {
  if (session.chestOpened) return;
  session.chestOpened = true;
  const lia = isLiaActive();
  const btnChest = document.getElementById('btn-open-mystery-chest');
  const chestRes = document.getElementById('mystery-chest-result');
  if (btnChest) btnChest.classList.add('hidden');

  const catalog = getActiveCatalog();
  const unlocked = getActiveStickers();
  const locked = catalog.filter(s => !unlocked.includes(s.id));

  let msg = '';
  if (locked.length > 0 && Math.random() < 0.55) {
    const wonSticker = locked[Math.floor(Math.random() * locked.length)];
    unlocked.push(wonSticker.id);
    addActiveCoins(15);
    session.coinsEarned += 15;
    msg = `🎉 הפתעה נדירה! קיבלת קלף חדש לאלבום: "${wonSticker.name}" + 15 🪙 מטבעות בונוס!`;
  } else {
    const bonusCoins = lia ? 30 : 25;
    addActiveCoins(bonusCoins);
    session.coinsEarned += bonusCoins;
    const prizeTitle = lia
      ? ['🦄 כתר יהלומים קסום', '💙 גלידת הוואי של סטיץ׳', '💄 ערכת נצנצים מוזהבת', '🌈 קשת בענן נוצצת'][Math.floor(Math.random() * 4)]
      : ['⚽ כדור זהב של ליגת האלופות', '🧤 כפפות שוער אגדיות', '🎮 קלף TOTY נדיר מ-FC 27', '🏆 גביע האצטדיון המוזהב'][Math.floor(Math.random() * 4)];
    msg = `🎉 מצאת בתיבה: ${prizeTitle}! קיבלת +${bonusCoins} 🪙 מטבעות בונוס!`;
  }

  saveState();
  updateHeaderUI();
  document.getElementById('sum-coins').textContent = `+${session.coinsEarned}`;
  arcadeAudio.playGoalSuccess();
  confetti.burst(110);

  if (chestRes) {
    chestRes.textContent = msg;
    chestRes.classList.remove('hidden');
  }
  arcadeAudio.speak(
    lia ? 'איזה כיף ליה! פתחת את תיבת ההפתעה וקיבלת פרס מיוחד!' : 'איזה אלוף עילי! פתחת את תיבת ההפתעה וקיבלת בונוס ענק!',
    'he-IL',
    0.9
  );
}

// ==================== SUPERGOL ISRAEL & UEFA CHAMPIONS LEAGUE COLLECTOR ALBUM ====================

let activeAlbumSeriesFilter = 'all';
let inspectedCardId = null;

function renderShopView() {
  const catalog = getActiveCatalog();
  const stickers = getActiveStickers();
  const coins = getActiveCoins();
  const lia = isLiaActive();

  document.getElementById('shop-coins-balance').textContent = coins;
  document.getElementById('album-count').textContent = `${stickers.length}/${catalog.length}`;
  const pct = Math.round((stickers.length / catalog.length) * 100);
  document.getElementById('album-progress-fill').style.width = `${pct}%`;

  const seriesTabs = document.getElementById('album-series-tabs');
  if (seriesTabs) {
    seriesTabs.classList.toggle('hidden', lia);
  }

  const currentAvatar = lia ? (appState.liaProfile.avatar || 'l1') : (appState.avatar || 's1');
  const grid = document.getElementById('stickers-grid');
  grid.innerHTML = '';

  const filteredCatalog = catalog.filter(st => {
    if (lia || activeAlbumSeriesFilter === 'all') return true;
    const meta = (typeof FUT_CARD_META !== 'undefined' && FUT_CARD_META[st.id]) || {};
    return meta.series === activeAlbumSeriesFilter;
  });

  filteredCatalog.forEach(st => {
    const unlocked = stickers.includes(st.id);
    const isEquipped = currentAvatar === st.id;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = (typeof renderFUTCardHTML === 'function')
      ? renderFUTCardHTML(st, unlocked, isEquipped)
      : `<div class="sticker-card ${unlocked ? 'unlocked' : 'locked'}"><div class="sticker-name">${unlocked ? st.name : '???'}</div></div>`;

    const cardEl = wrapper.firstElementChild || wrapper;
    if (unlocked) {
      cardEl.addEventListener('click', () => {
        arcadeAudio.playClick();
        openFutCardModal(st, false);
      });
    } else {
      cardEl.addEventListener('click', () => {
        arcadeAudio.playClick();
        arcadeAudio.speak('הקלף עדיין נעול! לחץ על פתח חבילה למעלה כדי להגריל קלפים חדשים!', 'he-IL', 0.88);
      });
    }
    grid.appendChild(cardEl);
  });
}

function openFutCardModal(st, isNewPackReveal = false) {
  const modal = document.getElementById('fut-pack-modal');
  const stage = document.getElementById('fut-modal-card-stage');
  const storyBox = document.getElementById('fut-modal-story');
  const headerBadge = document.getElementById('fut-modal-header-badge');
  if (!modal || !stage) return;

  inspectedCardId = st.id;
  const lia = isLiaActive();
  const currentAvatar = lia ? (appState.liaProfile.avatar || 'l1') : (appState.avatar || 's1');
  const meta = (typeof FUT_CARD_META !== 'undefined' && FUT_CARD_META[st.id]) || {
    storyHeb: `קלף אספנות מיוחד באלבום: ${st.name}!`
  };

  if (headerBadge) {
    headerBadge.textContent = isNewPackReveal ? '🎉 קלף חדש נפתח בחבילה! ✨' : `🃏 קלף אספנות ${meta.num || ''}`;
  }
  stage.innerHTML = (typeof renderFUTCardHTML === 'function')
    ? renderFUTCardHTML(st, true, currentAvatar === st.id)
    : '';
  if (storyBox) {
    storyBox.textContent = meta.storyHeb || st.name;
  }

  modal.classList.remove('hidden');
  arcadeAudio.speak(`${st.name}. ${meta.storyHeb || ''}`, 'he-IL', 0.88);
}

function buyMysteryPack() {
  const PACK_COST = 50;
  const coins = getActiveCoins();
  const catalog = getActiveCatalog();
  const stickers = getActiveStickers();

  if (coins < PACK_COST) {
    arcadeAudio.playMiss();
    arcadeAudio.speak(`חסרים לך עוד ${PACK_COST - coins} מטבעות כדי לפתוח חבילה!`, 'he-IL', 0.88);
    alert(`חסרים לך עוד ${PACK_COST - coins} מטבעות! 🪙`);
    return;
  }

  addActiveCoins(-PACK_COST);
  const locked = catalog.filter(s => !stickers.includes(s.id));

  if (locked.length > 0) {
    const chosen = locked[Math.floor(Math.random() * locked.length)];
    stickers.push(chosen.id);
    arcadeAudio.playUnlock();
    confetti.burst(110);
    saveState();
    updateHeaderUI();
    renderShopView();
    openFutCardModal(chosen, true);
  } else {
    addActiveTrophies(1);
    arcadeAudio.playUnlock();
    confetti.burst(110);
    saveState();
    updateHeaderUI();
    renderShopView();
    arcadeAudio.speak('וואו! השלמת את כל האלבום וקיבלת גביע זהב!', 'he-IL', 0.9);
    alert(`👑 השלמת את כל האלבום! קיבלת גביע זהב!`);
  }
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
  // Lia's app has NO lock gate! A 5-year-old enters directly into her magical world
  if (window.FORCE_KID_PROFILE === 'lia' || isLiaActive() || (typeof window !== 'undefined' && window.location.pathname.endsWith('lia.html'))) {
    gate.classList.add('hidden');
    return;
  }
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

  const on = (id, evt, handler) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(evt, handler);
  };

  // Family Security Gate: PIN Login
  on('form-family-pin', 'submit', (e) => {
    e.preventDefault();
    const entered = document.getElementById('family-pin-input')?.value?.trim() || '';
    const targetPin = String(appState.familyPin || '1936').trim();
    const allowedEmails = (appState.allowedEmails || []).map(em => em.toLowerCase());

    if (entered === targetPin || (allowedEmails.length > 0 && allowedEmails.includes(entered.toLowerCase()))) {
      document.getElementById('auth-error-msg')?.classList.add('hidden');
      unlockFamilyApp('בן משפחה מורשה 🦁👑');
    } else {
      const errEl = document.getElementById('auth-error-msg');
      if (errEl) {
        errEl.textContent = 'קוד שגוי! הכניסה למשפחה בלבד 🔒';
        errEl.classList.remove('hidden');
      }
      arcadeAudio.playMiss();
    }
  });

  // Google SSO Button Fallback / Trigger
  on('btn-google-sso', 'click', () => {
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
        if (errEl) {
          errEl.textContent = `הכתובת ${cleanEmail} אינה ברשימת המורשים!`;
          errEl.classList.remove('hidden');
        }
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
  on('quick-open-speech', 'click', () => {
    arcadeAudio.playClick();
    switchView('speech');
  });
  on('quick-open-schedule', 'click', () => {
    arcadeAudio.playClick();
    switchView('schedule');
  });
  on('quick-open-hw', 'click', () => {
    arcadeAudio.playClick();
    switchView('homework');
  });
  on('quick-open-dict', 'click', () => {
    arcadeAudio.playClick();
    switchView('dictation');
  });

  // 6 Big Home Visual Tiles (Lia)
  const btnOpenMakeup = document.getElementById('quick-open-makeup');
  if (btnOpenMakeup) {
    btnOpenMakeup.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('makeup');
    });
  }
  const btnOpenColoring = document.getElementById('quick-open-coloring');
  if (btnOpenColoring) {
    btnOpenColoring.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('coloring');
    });
  }
  const btnOpenDressup = document.getElementById('quick-open-dressup');
  if (btnOpenDressup) {
    btnOpenDressup.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('dressup');
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
      startMatch('lia_english_mix', '🦄 מיקס אנגלית בסיסית עם סטיץ׳ וחד-קרן', false);
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
  on('btn-leave-speech', 'click', () => switchView('home'));
  on('btn-sp-model-listen', 'click', () => {
    const card = speechSession.cards[speechSession.index];
    if (card) arcadeAudio.speak(card.phrase, 'he-IL', 0.82);
  });
  on('btn-sp-record', 'click', toggleSpeechRecording);
  on('btn-sp-play-self', 'click', () => {
    if (speechSession.lastAudioUrl) {
      const audio = new Audio(speechSession.lastAudioUrl);
      audio.play();
    }
  });
  on('btn-sp-next', 'click', nextSpeechCard);

  // Schedule Day Tabs & Kid Quick-Add
  document.querySelectorAll('#day-tabs-bar .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      appState.selectedDay = Number(tab.dataset.day);
      renderScheduleView();
    });
  });
  on('btn-speak-day', 'click', speakCurrentDaySchedule);

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
  on('form-kid-add-hw', 'submit', (e) => {
    e.preventDefault();
    const inp = document.getElementById('kid-hw-input');
    const title = inp?.value?.trim();
    if (!title) return;
    appState.homeworkList.push({
      id: 'hw_' + Date.now(),
      icon: '🌟',
      subject: 'מטרה של עילי',
      title,
      done: false
    });
    if (inp) inp.value = '';
    saveState();
    arcadeAudio.playGoalSuccess();
    renderHomeworkView();
    updateHeaderUI();
  });

  // Dictation Listeners
  on('btn-leave-dictation', 'click', () => switchView('home'));
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
  on('btn-dict-speak', 'click', () => {
    const item = dictSession.words[dictSession.index];
    if (item) arcadeAudio.speak(item.word, 'he-IL', 0.9);
  });
  on('btn-dict-speak-slow', 'click', () => {
    const item = dictSession.words[dictSession.index];
    if (item) arcadeAudio.speak(item.word, 'he-IL', 0.55);
  });
  on('btn-dict-peek', 'click', () => {
    document.getElementById('dict-peek-box')?.classList.toggle('hidden');
  });
  on('dict-user-input', 'input', updateDictationSlots);
  on('btn-dict-backspace', 'click', () => {
    const inp = document.getElementById('dict-user-input');
    if (inp) {
      inp.value = inp.value.slice(0, -1);
      updateDictationSlots();
    }
  });
  on('btn-dict-check', 'click', checkDictationWord);
  on('btn-dict-next', 'click', nextDictationWord);

  // Sound toggle
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      arcadeAudio.enabled = !arcadeAudio.enabled;
      soundBtn.textContent = arcadeAudio.enabled ? '🔊' : '🔇';
    });
  }

  // Profile button -> opens sticker album
  on('btn-profile', 'click', () => {
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
  on('btn-daily-match', 'click', () => {
    arcadeAudio.playClick();
    if (isLiaActive()) {
      startMatch('lia_daily_mix', '🦄 מסיבת הקסמים של ליה וסטיץ׳ ✨', true);
    } else {
      startMatch('daily_mix', 'גמר גביע האלופים 🏆', true);
    }
  });

  // Category Tabs (Home View only, excluding Album Series Tabs)
  document.querySelectorAll('.cat-tab[data-cat]').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('.cat-tab[data-cat]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.selectedCategory = tab.dataset.cat;
      renderTopicsGrid();
    });
  });

  // Album Series Filter Tabs (Supergol Israel vs UEFA Champions League)
  document.querySelectorAll('#album-series-tabs .cat-tab[data-series]').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#album-series-tabs .cat-tab[data-series]').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeAlbumSeriesFilter = tab.dataset.series || 'all';
      renderShopView();
    });
  });

  // FUT Card Walkout & Story Modal Listeners
  const btnCloseFutModal = document.getElementById('btn-close-fut-modal');
  if (btnCloseFutModal) {
    btnCloseFutModal.addEventListener('click', () => {
      arcadeAudio.playClick();
      const modal = document.getElementById('fut-pack-modal');
      if (modal) modal.classList.add('hidden');
    });
  }
  const btnFutModalSpeak = document.getElementById('btn-fut-modal-speak');
  if (btnFutModalSpeak) {
    btnFutModalSpeak.addEventListener('click', () => {
      if (!inspectedCardId) return;
      const catalog = getActiveCatalog();
      const st = catalog.find(x => x.id === inspectedCardId);
      const meta = (typeof FUT_CARD_META !== 'undefined' && FUT_CARD_META[inspectedCardId]) || {};
      const textToSpeak = meta.storyHeb || (st ? `קלף אספנות מיוחד: ${st.name}` : '');
      if (textToSpeak) arcadeAudio.speak(textToSpeak, 'he-IL', 0.9);
    });
  }
  const btnFutModalEquip = document.getElementById('btn-fut-modal-equip');
  if (btnFutModalEquip) {
    btnFutModalEquip.addEventListener('click', () => {
      if (!inspectedCardId) return;
      arcadeAudio.playGoalSuccess();
      if (isLiaActive()) {
        appState.liaProfile.avatar = inspectedCardId;
      } else {
        appState.avatar = inspectedCardId;
      }
      saveState();
      updateHeaderUI();
      renderShopView();
      const modal = document.getElementById('fut-pack-modal');
      if (modal) modal.classList.add('hidden');
      arcadeAudio.speak('איזה יופי! הקלף נבחר בתור הסמל האישי שלך למעלה!', 'he-IL', 0.9);
    });
  }

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
  on('btn-leave-arena', 'click', () => switchView('home'));
  on('btn-speak-question', 'click', () => {
    const q = session.questions[session.currentIndex];
    if (!q) return;
    speakQuestionPrompt(q);
  });
  on('btn-hint', 'click', () => {
    arcadeAudio.playClick();
    document.getElementById('hint-box')?.classList.toggle('hidden');
  });
  on('btn-check-answer', 'click', checkCurrentAnswer);
  on('btn-next-question', 'click', nextQuestion);

  // Summary buttons
  const btnMysteryChest = document.getElementById('btn-open-mystery-chest');
  if (btnMysteryChest) {
    btnMysteryChest.addEventListener('click', openSummaryMysteryChest);
  }
  on('btn-play-again', 'click', () => {
    startMatch(session.topicId, session.topicTitle, session.isDailyBonus);
  });
  on('btn-summary-shop', 'click', () => switchView('shop'));
  on('btn-summary-home', 'click', () => switchView('home'));

  // Shop pack button
  on('btn-buy-pack', 'click', buyMysteryPack);

  // Parents: Speech Therapy form
  on('form-save-speech', 'submit', (e) => {
    e.preventDefault();
    const raw = document.getElementById('speech-words-textarea')?.value || '';
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
  on('sched-day-select', 'change', renderParentsView);
  on('form-add-schedule', 'submit', (e) => {
    e.preventDefault();
    const day = Number(document.getElementById('sched-day-select')?.value || 0);
    const part = document.getElementById('sched-part-select')?.value || 'after';
    const [icon, title] = (document.getElementById('sched-preset-select')?.value || '|').split('|');
    const time = document.getElementById('sched-time-input')?.value?.trim() || '';

    if (!appState.schedule[day]) appState.schedule[day] = { school: [], after: [] };
    appState.schedule[day][part].push({ icon, title, time });
    saveState();
    const timeInp = document.getElementById('sched-time-input');
    if (timeInp) timeInp.value = '';
    renderParentsView();
    updateHeaderUI();
  });

  // Parents: Homework form
  on('form-add-hw', 'submit', (e) => {
    e.preventDefault();
    const [icon, subject] = (document.getElementById('hw-subject')?.value || '|').split('|');
    const title = document.getElementById('hw-title')?.value?.trim() || '';
    appState.homeworkList.push({ id: 'hw_' + Date.now(), icon, subject, title, done: false });
    saveState();
    const titleInp = document.getElementById('hw-title');
    if (titleInp) titleInp.value = '';
    renderParentsView();
    updateHeaderUI();
  });

  // Parents: Dictation words form
  on('form-save-dictation', 'submit', (e) => {
    e.preventDefault();
    const raw = document.getElementById('dict-words-textarea')?.value || '';
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
  on('btn-reset-progress', 'click', () => {
    if (confirm('האם לאפס את כל הנתונים והנקודות?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  // Setup Lia's Studios, Ilay's FC 27 Studio, Science Lab, Talking Dictionary, Soccer Hub & Gifted Academy
  setupMakeupStudioListeners();
  setupKinderStudioListeners();
  setupFC27StudioListeners();
  setupScienceStudioListeners();
  setupTalkingDictionaryListeners();
  setupColoringStudioListeners();
  setupDressUpStudioListeners();
  setupSoccerHubListeners();
  setupGiftedHubListeners();
});

// ==================== VIEW 10: LIA'S GLAM & MAKEUP STUDIO CONTROLLER ====================

const GLAM_MISSIONS = [
  { lip: 'Pink Lipstick', crown: 'Gold Crown', heb: 'ליה מתוקה, הלקוחה מבקשת שפתון ורוד וכתר זהב!', eng: 'Pink Lipstick and Gold Crown', display: 'בחרי שפתון ורוד (Pink Lipstick) + כתר זהב (Gold Crown) 💄👑' },
  { lip: 'Red Lipstick', crown: 'Unicorn Horn', heb: 'ליה, חד-הקרן מבקש שפתון אדום וקרן של חד-קרן!', eng: 'Red Lipstick and Unicorn Horn', display: 'בחרי שפתון אדום (Red Lipstick) + קרן חד-קרן (Unicorn) ❤️🦄' },
  { lip: 'Purple Lipstick', crown: 'Stitch Flower', heb: 'סטיץ׳ מבקש איפור עם שפתון סגול ופרח של הוואי!', eng: 'Purple Lipstick and Stitch Flower', display: 'בחרי שפתון סגול (Purple Lipstick) + פרח של סטיץ׳ (Flower) 💜🌺' },
  { lip: 'Pink Lipstick', crown: 'Pink Bow', heb: 'הנסיכה מבקשת שפתון ורוד וסרט ורוד לשיער!', eng: 'Pink Lipstick and Pink Bow', display: 'בחרי שפתון ורוד (Pink Lipstick) + סרט ורוד (Pink Bow) 🩷🎀' },
  { lip: 'Coral Gloss', crown: 'Gold Crown', heb: 'הפיה מבקשת גלוס אפרסק וכתר זהב מלכותי!', eng: 'Coral Gloss and Gold Crown', display: 'בחרי גלוס אפרסק (Coral Gloss) + כתר זהב (Gold Crown) 🧡👑' },
  { lip: 'Red Lipstick', crown: 'Pink Bow', heb: 'הרקדנית מבקשת שפתון אדום וסרט ורוד חמוד!', eng: 'Red Lipstick and Pink Bow', display: 'בחרי שפתון אדום (Red Lipstick) + סרט ורוד (Pink Bow) ❤️🎀' },
  { lip: 'Purple Lipstick', crown: 'Unicorn Horn', heb: 'חד-הקרן הקסום מבקש שפתון סגול וקרן חד-קרן!', eng: 'Purple Lipstick and Unicorn Horn', display: 'בחרי שפתון סגול (Purple Lipstick) + קרן חד-קרן (Unicorn) 💜🦄' },
  { lip: 'Coral Gloss', crown: 'Stitch Flower', heb: 'סטיץ׳ מבקש גלוס אפרסק ופרח הוואי למסיבה!', eng: 'Coral Gloss and Stitch Flower', display: 'בחרי גלוס אפרסק (Coral Gloss) + פרח של סטיץ׳ (Flower) 🧡🌺' }
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
  setTimeout(() => {
    const m = GLAM_MISSIONS[glamState.missionIndex % GLAM_MISSIONS.length];
    if (m) arcadeAudio.speakBilingual(m.heb, m.eng, 0.88);
  }, 260);
}

function renderGlamMission() {
  const m = GLAM_MISSIONS[glamState.missionIndex % GLAM_MISSIONS.length];
  const txtEl = document.getElementById('glam-mission-text');
  if (txtEl) txtEl.textContent = m.display;
  const fb = document.getElementById('glam-feedback-banner');
  if (fb) fb.className = 'feedback-banner hidden';

  // Highlight the requested lipstick and crown buttons with a golden glow so Lia (age 5, non-reader) sees visually which ones match the mission!
  document.querySelectorAll('#glam-lip-swatches .glam-swatch').forEach(btn => {
    const isTarget = btn.dataset.eng === m.lip;
    btn.style.boxShadow = isTarget ? '0 0 16px rgba(250, 204, 21, 0.9)' : '';
    btn.style.outline = isTarget ? '3px dashed #facc15' : '';
  });
  document.querySelectorAll('#glam-crown-swatches .glam-item-btn').forEach(btn => {
    const isTarget = btn.dataset.eng === m.crown;
    btn.style.boxShadow = isTarget ? '0 0 16px rgba(250, 204, 21, 0.9)' : '';
    btn.style.outline = isTarget ? '3px dashed #facc15' : '';
  });
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
  { speaker: '💙 סטיץ׳ שואל:', bigVisual: '🌸 🌸 🌸 🌸 = 4', text: 'הגננת ליה! ספרתי 4 פרחים ורודים: 1, 2, 3, 4 — ספרתי נכון?', isRight: true, explain: 'נכון מאוד! יש כאן בדיוק 4 פרחים ורודים!' },
  { speaker: '🦄 חד-קרן שואל:', bigVisual: '👧👑 ל׳ — לִיָּה', text: 'הגננת ליה! השם המתוק ליה מתחיל בצליל לְ, באות ל׳ — זה נכון?', isRight: true, explain: 'כל הכבוד! לִיָּה מתחילה באות ל׳!' },
  { speaker: '🧸 הדובי טדי שואל:', bigVisual: '🍎 = 💙 כחול?', text: 'הגננת ליה! תפוח אדום הוא בצבע כחול — זה נכון?', isRight: false, explain: 'איזו גננת חכמה את ליה! תפוח הוא אדום (Red) ולא כחול (Blue)!' },
  { speaker: '🧚‍♀️ הפיה לילי שואלת:', bigVisual: '💄🩷 = Pink', text: 'הגננת ליה! צבע ורוד באנגלית אומרים Pink — זה נכון?', isRight: true, explain: 'מדויק! ורוד באנגלית זה Pink!' },
  { speaker: '🐱 החתלתולה מיצי שואלת:', bigVisual: '⭐ ⭐ = 5?', text: 'הגננת ליה! יש כאן רק 2 כוכבים אבל אמרתי שיש 5 — ספרתי נכון?', isRight: false, explain: 'תפסת אותה הגננת ליה! יש כאן 2 כוכבים ולא 5!' },
  { speaker: '💙 סטיץ׳ שואל:', bigVisual: '🍦 גְּלִידָה ↔️ 🧩 חִידָה', text: 'הגננת ליה! המילה גלידה מתחרזת עם המילה חידה — זה נכון?', isRight: true, explain: 'חרוז מושלם! גלידה — חידה!' },
  { speaker: '🦄 חד-קרן שואל:', bigVisual: '🐶 = 🐱 חתול?', text: 'הגננת ליה! כלב באנגלית אומרים Dog, אבל הדובי אמר שכלב זה חתול — הוא צודק?', isRight: false, explain: 'איזו אלופה! כלב באנגלית זה Dog!' },
  { speaker: '🧚‍♀️ הפיה לילי שואלת:', bigVisual: '🍬🍬 + 🍬 = 3', text: 'הגננת ליה! היו לי 2 סוכריות וקיבלתי עוד 1, ועכשיו יש לי 3 סוכריות — זה נכון?', isRight: true, explain: 'חשבון מושלם! 2 ועוד 1 שווה 3!' },
  { speaker: '🐱 החתלתולה מיצי שואלת:', bigVisual: '🐘 גָּדוֹל ↔️ 🐭 קָטָן', text: 'הגננת ליה! הפיל הוא גדול והעכבר הוא קטן — זה נכון?', isRight: true, explain: 'נכון מאוד! גדול וקטן הם הפכים!' },
  { speaker: '💙 סטיץ׳ שואל:', bigVisual: '☀️ שֶׁמֶשׁ = ש׳', text: 'הגננת ליה! המילה שמש מתחילה בצליל שֶׁ, באות ש׳ — זה נכון?', isRight: true, explain: 'כל הכבוד לגננת ליה! שֶׁמֶשׁ מתחילה באות שׁ׳!' }
];

let kinderQuizIndex = 0;

function initKinderStudio() {
  ensureLiaProfile();
  renderKinderStudents();
  renderKinderQuiz(true);
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

function renderKinderQuiz(autoSpeak = true) {
  const q = KINDER_QUESTIONS[kinderQuizIndex % KINDER_QUESTIONS.length];
  const av = document.getElementById('kinder-quiz-avatar');
  const txt = document.getElementById('kinder-quiz-text');
  const fb = document.getElementById('kinder-feedback-banner');
  const btnYes = document.getElementById('btn-kinder-yes');
  const btnNo = document.getElementById('btn-kinder-no');
  if (btnYes) btnYes.style.boxShadow = '';
  if (btnNo) btnNo.style.boxShadow = '';
  if (av) av.textContent = q.speaker;
  if (txt) {
    txt.innerHTML = `<div style="font-size:2.4rem;font-weight:900;color:#db2777;margin-bottom:6px;">${q.bigVisual || '🦄✨'}</div><div>${q.text}</div>`;
  }
  if (fb) fb.className = 'feedback-banner hidden';
  if (autoSpeak) {
    setTimeout(() => {
      arcadeAudio.speak(q.text, 'he-IL', 0.85);
    }, 240);
  }
}

function handleKinderTeacherCheck(teacherSaysYes) {
  const q = KINDER_QUESTIONS[kinderQuizIndex % KINDER_QUESTIONS.length];
  const fb = document.getElementById('kinder-feedback-banner');
  const btnYes = document.getElementById('btn-kinder-yes');
  const btnNo = document.getElementById('btn-kinder-no');
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
      renderKinderQuiz(true);
    }, 2800);
  } else {
    // ZERO-FRUSTRATION FOR LIA: Never play error buzzer! Highlight the right button in gold and explain warmly!
    const rightBtn = q.isRight ? btnYes : btnNo;
    if (rightBtn) {
      rightBtn.style.boxShadow = '0 0 20px rgba(250, 204, 21, 0.95)';
    }
    if (fb) {
      fb.className = 'feedback-banner warning';
      fb.textContent = `💡 בואי נבדוק יחד הגננת ליה: ${q.explain} — לחצי על הכפתור המואר! ✨`;
    }
    arcadeAudio.speak(`בואי נבדוק יחד הגננת ליה: ${q.explain}. לחצי על הכפתור השני!`, 'he-IL', 0.86);
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

// ==================== VIEW 12: EA SPORTS FC 27 INTERACTIVE ACADEMY (SCREENS, HOW-TO-START, COMMENTATOR & VIDEOS) ====================

let fc27ExplorerState = {
  mode: 'screens',
  screen: 'main_menu',
  selectedKey: 'KICK OFF',
  howToIndex: 0,
  howToTimer: null,
  commIndex: 1,
  videoEpisodeIndex: 0,
  videoSceneIndex: 0,
  videoPlaying: false,
  videoTimer: null
};

function stopFC27Timers() {
  if (fc27ExplorerState.howToTimer) {
    clearTimeout(fc27ExplorerState.howToTimer);
    fc27ExplorerState.howToTimer = null;
  }
  if (fc27ExplorerState.videoTimer) {
    clearTimeout(fc27ExplorerState.videoTimer);
    fc27ExplorerState.videoTimer = null;
  }
  fc27ExplorerState.videoPlaying = false;
  const btnPlayPause = document.getElementById('btn-fc27-vid-playpause');
  if (btnPlayPause) btnPlayPause.textContent = '▶️ הפעל סרטון עם קריינות';
  const btnHowToAuto = document.getElementById('btn-fc27-howto-autoplay');
  if (btnHowToAuto) btnHowToAuto.textContent = '🎬 נגן הדרכה אוטומטית עם קול';
}

function initFC27Studio() {
  stopFC27Timers();
  renderFC27ExplorerScreen();
  renderFC27HowToStep();
  renderFC27CommentatorStudio();
  renderFC27VideoPlayer();
}

function switchFC27SubMode(mode) {
  stopFC27Timers();
  fc27ExplorerState.mode = mode;

  document.querySelectorAll('#fc27-main-mode-tabs .cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.fc27mode === mode);
  });

  ['screens', 'howto', 'commentator', 'videos'].forEach(m => {
    const panel = document.getElementById(`fc27-panel-${m}`);
    if (panel) panel.classList.toggle('hidden', m !== mode);
  });

  if (mode === 'screens') {
    renderFC27ExplorerScreen();
  } else if (mode === 'howto') {
    renderFC27HowToStep();
    speakCurrentFC27HowToStep();
  } else if (mode === 'commentator') {
    renderFC27CommentatorStudio();
    speakCurrentFC27Commentator('both');
  } else if (mode === 'videos') {
    renderFC27VideoPlayer();
  }
}

// --- 1. SCREENS EXPLORER ---
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
  const exEl = document.getElementById('fc27-exp-example');
  if (engEl) engEl.textContent = activeItem.eng.toUpperCase();
  if (hebEl) hebEl.textContent = activeItem.heb;
  if (hintEl) hintEl.textContent = activeItem.hint;
  if (exEl) exEl.textContent = activeItem.example || `📌 דוגמא: לחץ על ${activeItem.eng} במסך כשאתה רוצה ${activeItem.heb}!`;

  // Render full cheat-sheet table of ALL buttons on this screen so Ilay sees everything at a glance
  const fullTableEl = document.getElementById('fc27-screen-full-table');
  if (fullTableEl) {
    fullTableEl.innerHTML = `
      <div style="font-size:0.86rem;font-weight:900;color:#fde047;margin-bottom:6px;">📋 כל הכפתורים במסך הזה (${screenWords.length} כפתורים עם דוגמאות וקול):</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:8px;">
        ${screenWords.map(w => {
          const isCur = w.key === activeItem.key;
          return `
            <div data-fc27-row="${w.key}" style="background:${isCur ? 'linear-gradient(135deg,#064e3b,#0f172a)' : '#1e293b'};border:2px solid ${isCur ? '#00ff87' : '#334155'};border-radius:12px;padding:9px 11px;cursor:pointer;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                <span style="font-size:1rem;font-weight:900;color:#00ff87;direction:ltr;">${w.eng}</span>
                <button type="button" class="btn-chip" data-fc27-row-speak="${w.key}" style="background:#00ff87;color:#090d16;font-weight:900;border:none;padding:3px 9px;font-size:0.75rem;">🔊 שמע</button>
              </div>
              <div style="font-size:0.9rem;font-weight:800;color:#fff;margin-top:3px;">${w.heb}</div>
              <div style="font-size:0.78rem;color:#cbd5e1;margin-top:3px;">${w.hint}</div>
              <div style="font-size:0.76rem;color:#a7f3d0;margin-top:4px;background:rgba(0,255,135,0.1);padding:5px 7px;border-radius:6px;border-right:3px solid #00ff87;">${w.example || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    fullTableEl.querySelectorAll('[data-fc27-row]').forEach(row => {
      row.addEventListener('click', () => {
        arcadeAudio.playClick();
        fc27ExplorerState.selectedKey = row.dataset.fc27Row;
        renderFC27ExplorerScreen();
        speakCurrentFC27ExplorerWord();
      });
    });
  }
}

function speakCurrentFC27ExplorerWord() {
  if (typeof FC27_VOCAB_BANK === 'undefined') return;
  const activeItem = FC27_VOCAB_BANK.find(w => w.key === fc27ExplorerState.selectedKey) || FC27_VOCAB_BANK[0];
  if (!activeItem) return;
  const cleanEng = activeItem.eng.replace(/\([^)]*\)/g, '').trim();
  arcadeAudio.speakBilingual(`${activeItem.heb}. ${activeItem.hint}`, cleanEng, 0.88);
}

// --- 2. HOW TO START A MATCH (6-STEP SIMULATOR) ---
function renderFC27HowToStep() {
  if (typeof FC27_START_MATCH_STEPS === 'undefined' || typeof FC27_VOCAB_BANK === 'undefined') return;
  const total = FC27_START_MATCH_STEPS.length;
  const idx = ((fc27ExplorerState.howToIndex % total) + total) % total;
  fc27ExplorerState.howToIndex = idx;
  const stepObj = FC27_START_MATCH_STEPS[idx];

  const badgeEl = document.getElementById('fc27-howto-step-badge');
  const titleEl = document.getElementById('fc27-howto-title');
  const ctrlEl = document.getElementById('fc27-howto-controller');
  const expEl = document.getElementById('fc27-howto-explain');
  const exEl = document.getElementById('fc27-howto-example');
  const dotsEl = document.getElementById('fc27-howto-dots');
  const stageEl = document.getElementById('fc27-howto-screen-stage');

  if (badgeEl) badgeEl.textContent = `שלב ${stepObj.step} מתוך ${total}`;
  if (titleEl) titleEl.textContent = stepObj.title;
  if (ctrlEl) ctrlEl.textContent = stepObj.controllerTip;
  if (expEl) expEl.textContent = stepObj.hebExplain;
  if (exEl) exEl.textContent = stepObj.example;

  if (dotsEl) {
    dotsEl.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('button');
      d.type = 'button';
      d.style.cssText = `flex:1;height:10px;border-radius:99px;border:none;cursor:pointer;background:${i === idx ? '#00ff87' : i < idx ? '#38bdf8' : '#334155'};`;
      d.title = `שלב ${i + 1}`;
      d.addEventListener('click', () => {
        stopFC27Timers();
        fc27ExplorerState.howToIndex = i;
        renderFC27HowToStep();
        speakCurrentFC27HowToStep();
      });
      dotsEl.appendChild(d);
    }
  }

  if (stageEl && typeof renderFC27Screenshot !== 'undefined') {
    const vocabMatch = FC27_VOCAB_BANK.find(w => w.key === stepObj.engKey) || {
      screen: stepObj.screenId,
      key: stepObj.engKey,
      eng: stepObj.engSpeech
    };
    stageEl.innerHTML = renderFC27Screenshot(vocabMatch);
    stageEl.querySelectorAll('[data-fc27-key]').forEach(el => {
      el.addEventListener('click', () => {
        if (el.dataset.fc27Key === stepObj.engKey) {
          arcadeAudio.playGoalSuccess();
          if (fc27ExplorerState.howToIndex < total - 1) {
            fc27ExplorerState.howToIndex++;
            renderFC27HowToStep();
            speakCurrentFC27HowToStep();
          } else {
            confetti.burst(80);
            addActiveCoins(15);
            saveState();
            updateHeaderUI();
            arcadeAudio.speak('כל הכבוד עילי! למדת את כל ששת הצעדים להתחלת משחק בפיפא וקיבלת חמישה עשר מטבעות!', 'he-IL', 0.9);
          }
        } else {
          const found = FC27_VOCAB_BANK.find(x => x.key === el.dataset.fc27Key);
          if (found) {
            const cleanEng = found.eng.replace(/\([^)]*\)/g, '').trim();
            arcadeAudio.speakBilingual(found.heb, cleanEng, 0.88);
          }
        }
      });
    });
  }

  // Render complete 1-to-6 roadmap of How to Start a Match
  const allStepsEl = document.getElementById('fc27-howto-all-steps-list');
  if (allStepsEl) {
    allStepsEl.innerHTML = `
      <div class="surface-card" style="background:#0f172a;border:1px solid #334155;color:#fff;margin-bottom:0;">
        <div style="font-size:0.9rem;font-weight:900;color:#38bdf8;margin-bottom:8px;">🗺️ מפת כל 6 השלבים להתחלת משחק בפיפא (לחץ על כל שלב כדי לקפוץ אליו):</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:7px;">
          ${FC27_START_MATCH_STEPS.map((st, sIdx) => {
            const isCur = sIdx === idx;
            return `
              <div data-howto-jump="${sIdx}" style="background:${isCur ? 'linear-gradient(135deg,#0284c7,#0f172a)' : '#1e293b'};border:2px solid ${isCur ? '#00ff87' : '#334155'};border-radius:10px;padding:8px 10px;cursor:pointer;">
                <div style="font-size:0.84rem;font-weight:900;color:${isCur ? '#00ff87' : '#38bdf8'};">${st.title}</div>
                <div style="font-size:0.76rem;color:#fde047;margin-top:2px;">${st.controllerTip}</div>
                <div style="font-size:0.75rem;color:#e2e8f0;margin-top:3px;">${st.hebExplain}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    allStepsEl.querySelectorAll('[data-howto-jump]').forEach(card => {
      card.addEventListener('click', () => {
        stopFC27Timers();
        arcadeAudio.playClick();
        fc27ExplorerState.howToIndex = Number(card.dataset.howtoJump);
        renderFC27HowToStep();
        speakCurrentFC27HowToStep();
      });
    });
  }

  // Render 8-button PlayStation/Xbox Controller Map (Attack vs Defense)
  const ctrlMapEl = document.getElementById('fc27-controller-guide-list');
  if (ctrlMapEl && typeof FC27_CONTROLLER_MAP !== 'undefined') {
    ctrlMapEl.innerHTML = `
      <div class="surface-card" style="background:linear-gradient(145deg,#0f172a,#1e1b4b);border:2px solid #facc15;color:#fff;margin-bottom:0;">
        <div style="font-size:0.95rem;font-weight:900;color:#fde047;margin-bottom:4px;">🎮 מדריך השלט המלא של עילי (PlayStation / Xbox): מה עושה כל כפתור בהתקפה ובהגנה?</div>
        <div style="font-size:0.78rem;color:#cbd5e1;margin-bottom:8px;">לחץ על כל כפתור בשלט כדי לשמוע באנגלית ובעברית מה הוא עושה במשחק!</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px;">
          ${FC27_CONTROLLER_MAP.map((b, bIdx) => `
            <div data-ctrl-idx="${bIdx}" style="background:#1e293b;border:2px solid ${b.color};border-radius:12px;padding:9px 10px;cursor:pointer;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                <span style="background:${b.color};color:#090d16;font-weight:900;padding:2px 8px;border-radius:8px;font-size:0.82rem;direction:ltr;">${b.btn}</span>
                <span style="font-size:0.84rem;font-weight:900;color:#00ff87;direction:ltr;">${b.eng}</span>
                <span style="font-size:0.75rem;background:#334155;padding:2px 7px;border-radius:6px;">🔊</span>
              </div>
              <div style="font-size:0.8rem;color:#a7f3d0;margin-top:5px;">⚡ <strong>התקפה:</strong> ${b.attackHeb}</div>
              <div style="font-size:0.8rem;color:#bae6fd;margin-top:2px;">🛡️ <strong>הגנה:</strong> ${b.defenseHeb}</div>
              <div style="font-size:0.75rem;color:#fef08a;margin-top:4px;background:rgba(250,204,21,0.12);padding:4px 6px;border-radius:6px;">${b.example}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    ctrlMapEl.querySelectorAll('[data-ctrl-idx]').forEach(card => {
      card.addEventListener('click', () => {
        const b = FC27_CONTROLLER_MAP[Number(card.dataset.ctrlIdx)];
        if (!b) return;
        arcadeAudio.playClick();
        const cleanEng = b.eng.replace(/\//g, ' or ');
        arcadeAudio.speakBilingual(`כפתור ${b.btn}. בהתקפה: ${b.attackHeb}. בהגנה: ${b.defenseHeb}`, cleanEng, 0.88);
      });
    });
  }
}

function speakCurrentFC27HowToStep() {
  if (typeof FC27_START_MATCH_STEPS === 'undefined') return;
  const stepObj = FC27_START_MATCH_STEPS[fc27ExplorerState.howToIndex];
  if (!stepObj) return;
  arcadeAudio.speakBilingual(`${stepObj.hebExplain}`, stepObj.engSpeech, 0.88);
}

function toggleFC27HowToAutoPlay() {
  if (typeof FC27_START_MATCH_STEPS === 'undefined') return;
  const btn = document.getElementById('btn-fc27-howto-autoplay');
  if (fc27ExplorerState.howToTimer) {
    stopFC27Timers();
    return;
  }
  fc27ExplorerState.howToIndex = 0;
  if (btn) btn.textContent = '⏹️ עצור הדגמה אוטומטית';

  const runStep = () => {
    renderFC27HowToStep();
    speakCurrentFC27HowToStep();
    if (fc27ExplorerState.howToIndex < FC27_START_MATCH_STEPS.length - 1) {
      fc27ExplorerState.howToTimer = setTimeout(() => {
        fc27ExplorerState.howToIndex++;
        runStep();
      }, 6500);
    } else {
      fc27ExplorerState.howToTimer = setTimeout(() => {
        stopFC27Timers();
        confetti.burst(70);
      }, 6500);
    }
  };
  runStep();
}

// --- 3. WHAT THE COMMENTATOR SAYS (16 LIVE CALLS + REPLAY MONITOR) ---
function renderFC27CommentatorStudio() {
  if (typeof FC27_COMMENTATOR_BANK === 'undefined') return;
  const active = FC27_COMMENTATOR_BANK[fc27ExplorerState.commIndex] || FC27_COMMENTATOR_BANK[0];

  const sceneLbl = document.getElementById('fc27-comm-scene-label');
  const visEl = document.getElementById('fc27-comm-visual');
  const engEl = document.getElementById('fc27-comm-eng');
  const hebEl = document.getElementById('fc27-comm-heb');
  const sitEl = document.getElementById('fc27-comm-situation');
  const exEl = document.getElementById('fc27-comm-example');

  if (sceneLbl) sceneLbl.textContent = active.sceneLabel;
  if (visEl) visEl.textContent = active.sceneEmoji;
  if (engEl) engEl.textContent = `"${active.eng}"`;
  if (hebEl) hebEl.textContent = active.heb;
  if (sitEl) sitEl.textContent = `🎙️ מתי השדרן אומר את זה? ${active.situation}`;
  if (exEl) exEl.textContent = active.example;

  const grid = document.getElementById('fc27-comm-cards-grid');
  if (grid) {
    grid.innerHTML = '';
    FC27_COMMENTATOR_BANK.forEach((item, idx) => {
      const card = document.createElement('div');
      const isSel = idx === fc27ExplorerState.commIndex;
      card.style.cssText = `
        text-align:right;
        background:${isSel ? 'linear-gradient(135deg,#064e3b,#047857)' : '#1e293b'};
        border:2px solid ${isSel ? '#00ff87' : '#334155'};
        border-radius:12px;
        padding:10px 11px;
        color:#fff;
        cursor:pointer;
        font-family:inherit;
      `;
      card.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
          <div style="font-size:0.95rem;font-weight:900;color:#00ff87;direction:ltr;text-align:left;">🎙️ "${item.eng}"</div>
          <div style="display:flex;gap:4px;">
            <button type="button" class="btn-chip" data-comm-fast="${idx}" style="background:#00ff87;color:#090d16;font-weight:900;border:none;padding:3px 7px;font-size:0.72rem;">🔊 רגיל</button>
            <button type="button" class="btn-chip" data-comm-slow="${idx}" style="background:#38bdf8;color:#090d16;font-weight:900;border:none;padding:3px 7px;font-size:0.72rem;">🐢 לאט</button>
          </div>
        </div>
        <div style="font-size:0.86rem;font-weight:800;color:#f8fafc;margin-top:4px;">${item.heb}</div>
        <div style="font-size:0.76rem;color:#cbd5e1;margin-top:3px;">🏟️ ${item.situation}</div>
        <div style="font-size:0.75rem;color:#a7f3d0;margin-top:4px;background:rgba(0,255,135,0.1);padding:5px 7px;border-radius:6px;border-right:3px solid #00ff87;">${item.example}</div>
      `;
      card.addEventListener('click', (ev) => {
        const fastBtn = ev.target.closest('[data-comm-fast]');
        const slowBtn = ev.target.closest('[data-comm-slow]');
        arcadeAudio.playClick();
        fc27ExplorerState.commIndex = idx;
        renderFC27CommentatorStudio();
        if (fastBtn) {
          speakCurrentFC27Commentator('eng');
        } else if (slowBtn) {
          speakCurrentFC27Commentator('slow');
        } else {
          speakCurrentFC27Commentator('both');
        }
      });
      grid.appendChild(card);
    });
  }
}

function speakCurrentFC27Commentator(mode = 'both') {
  if (typeof FC27_COMMENTATOR_BANK === 'undefined') return;
  const active = FC27_COMMENTATOR_BANK[fc27ExplorerState.commIndex] || FC27_COMMENTATOR_BANK[0];
  if (!active) return;

  if (mode === 'eng') {
    arcadeAudio.speak(active.eng, 'en-US', 0.92);
  } else if (mode === 'slow') {
    arcadeAudio.speak(active.eng, 'en-US', 0.62);
  } else {
    arcadeAudio.speakBilingual(`${active.heb}. ${active.situation}`, active.eng, 0.88);
  }
}

// --- 4. ANIMATED VIDEO TUTORIALS PLAYER (3 EPISODES) ---
function renderFC27VideoPlayer() {
  if (typeof FC27_VIDEO_TUTORIALS === 'undefined') return;
  const epIdx = fc27ExplorerState.videoEpisodeIndex % FC27_VIDEO_TUTORIALS.length;
  const ep = FC27_VIDEO_TUTORIALS[epIdx];
  const scIdx = ((fc27ExplorerState.videoSceneIndex % ep.scenes.length) + ep.scenes.length) % ep.scenes.length;
  fc27ExplorerState.videoSceneIndex = scIdx;
  const sc = ep.scenes[scIdx];

  const epList = document.getElementById('fc27-video-episodes');
  if (epList) {
    epList.innerHTML = '';
    FC27_VIDEO_TUTORIALS.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const active = i === epIdx;
      btn.style.cssText = `
        text-align:right;
        padding:10px 12px;
        border-radius:12px;
        border:2px solid ${active ? '#facc15' : '#334155'};
        background:${active ? 'rgba(250,204,21,0.16)' : '#1e293b'};
        color:#fff;
        cursor:pointer;
        font-family:inherit;
      `;
      btn.innerHTML = `
        <div style="font-size:0.92rem;font-weight:900;color:${active ? '#fde047' : '#f8fafc'};">${v.title}</div>
        <div style="font-size:0.76rem;color:#cbd5e1;margin-top:2px;">${v.subtitle}</div>
      `;
      btn.addEventListener('click', () => {
        stopFC27Timers();
        arcadeAudio.playClick();
        fc27ExplorerState.videoEpisodeIndex = i;
        fc27ExplorerState.videoSceneIndex = 0;
        renderFC27VideoPlayer();
        startFC27VideoPlayback();
      });
      epList.appendChild(btn);
    });
  }

  const badgeEl = document.getElementById('fc27-vid-badge');
  const statusEl = document.getElementById('fc27-vid-status');
  const progEl = document.getElementById('fc27-vid-progress');
  const stageEl = document.getElementById('fc27-vid-stage');
  const engEl = document.getElementById('fc27-vid-eng-title');
  const hebEl = document.getElementById('fc27-vid-heb-sub');
  const btnPlay = document.getElementById('btn-fc27-vid-playpause');

  if (badgeEl) badgeEl.textContent = sc.badge;
  if (statusEl) statusEl.textContent = fc27ExplorerState.videoPlaying ? '🔊 מנגן סרטון...' : '🎬 לחץ הפעל לצפייה עם קול';
  if (progEl) progEl.style.width = `${Math.round(((scIdx + 1) / ep.scenes.length) * 100)}%`;
  if (stageEl) stageEl.textContent = sc.visual;
  if (engEl) engEl.textContent = sc.engTitle;
  if (hebEl) hebEl.textContent = sc.hebText;
  if (btnPlay) btnPlay.textContent = fc27ExplorerState.videoPlaying ? '⏸️ השהה סרטון' : '▶️ הפעל סרטון עם קריינות';
}

function speakCurrentFC27VideoScene() {
  if (typeof FC27_VIDEO_TUTORIALS === 'undefined') return;
  const ep = FC27_VIDEO_TUTORIALS[fc27ExplorerState.videoEpisodeIndex] || FC27_VIDEO_TUTORIALS[0];
  const sc = ep.scenes[fc27ExplorerState.videoSceneIndex] || ep.scenes[0];
  if (!sc) return;
  arcadeAudio.speakBilingual(sc.hebText, sc.engSpeech, 0.88);
}

function startFC27VideoPlayback() {
  if (typeof FC27_VIDEO_TUTORIALS === 'undefined') return;
  const ep = FC27_VIDEO_TUTORIALS[fc27ExplorerState.videoEpisodeIndex] || FC27_VIDEO_TUTORIALS[0];
  fc27ExplorerState.videoPlaying = true;

  const playNextScene = () => {
    if (!fc27ExplorerState.videoPlaying) return;
    renderFC27VideoPlayer();
    speakCurrentFC27VideoScene();

    if (fc27ExplorerState.videoSceneIndex < ep.scenes.length - 1) {
      fc27ExplorerState.videoTimer = setTimeout(() => {
        if (!fc27ExplorerState.videoPlaying) return;
        fc27ExplorerState.videoSceneIndex++;
        playNextScene();
      }, 7200);
    } else {
      fc27ExplorerState.videoTimer = setTimeout(() => {
        stopFC27Timers();
        confetti.burst(80);
        renderFC27VideoPlayer();
      }, 7200);
    }
  };

  playNextScene();
}

function setupFC27StudioListeners() {
  const banner = document.getElementById('fc27-home-banner');
  if (banner) {
    banner.addEventListener('click', (ev) => {
      const jumpBtn = ev.target.closest('[data-fc27jump]');
      arcadeAudio.playClick();
      switchView('fc27');
      if (jumpBtn && jumpBtn.dataset.fc27jump) {
        switchFC27SubMode(jumpBtn.dataset.fc27jump);
      } else {
        setTimeout(() => speakCurrentFC27ExplorerWord(), 250);
      }
    });
  }

  const arenaGuideBtn = document.getElementById('btn-arena-open-fc27-guide');
  if (arenaGuideBtn) {
    arenaGuideBtn.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('fc27');
    });
  }

  // 4 Main Sub-Mode Tabs
  document.querySelectorAll('#fc27-main-mode-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchFC27SubMode(tab.dataset.fc27mode);
    });
  });

  // 6 Screen Tabs inside Panel 1
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

  // Panel 2: How-To-Start Controls
  const btnHowPrev = document.getElementById('btn-fc27-howto-prev');
  if (btnHowPrev) {
    btnHowPrev.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      fc27ExplorerState.howToIndex--;
      renderFC27HowToStep();
      speakCurrentFC27HowToStep();
    });
  }
  const btnHowNext = document.getElementById('btn-fc27-howto-next');
  if (btnHowNext) {
    btnHowNext.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      fc27ExplorerState.howToIndex++;
      renderFC27HowToStep();
      speakCurrentFC27HowToStep();
    });
  }
  const btnHowSpeak = document.getElementById('btn-fc27-howto-speak');
  if (btnHowSpeak) {
    btnHowSpeak.addEventListener('click', () => {
      speakCurrentFC27HowToStep();
    });
  }
  const btnHowAuto = document.getElementById('btn-fc27-howto-autoplay');
  if (btnHowAuto) {
    btnHowAuto.addEventListener('click', () => {
      arcadeAudio.playClick();
      toggleFC27HowToAutoPlay();
    });
  }

  // Panel 3: Commentator Controls
  const btnCommEng = document.getElementById('btn-fc27-comm-speak-eng');
  if (btnCommEng) {
    btnCommEng.addEventListener('click', () => speakCurrentFC27Commentator('eng'));
  }
  const btnCommSlow = document.getElementById('btn-fc27-comm-speak-slow');
  if (btnCommSlow) {
    btnCommSlow.addEventListener('click', () => speakCurrentFC27Commentator('slow'));
  }
  const btnCommBoth = document.getElementById('btn-fc27-comm-speak-both');
  if (btnCommBoth) {
    btnCommBoth.addEventListener('click', () => speakCurrentFC27Commentator('both'));
  }

  // Panel 4: Video Player Controls
  const btnVidPlay = document.getElementById('btn-fc27-vid-playpause');
  if (btnVidPlay) {
    btnVidPlay.addEventListener('click', () => {
      arcadeAudio.playClick();
      if (fc27ExplorerState.videoPlaying) {
        stopFC27Timers();
        renderFC27VideoPlayer();
      } else {
        startFC27VideoPlayback();
      }
    });
  }
  const btnVidPrev = document.getElementById('btn-fc27-vid-prev');
  if (btnVidPrev) {
    btnVidPrev.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      fc27ExplorerState.videoSceneIndex--;
      renderFC27VideoPlayer();
      speakCurrentFC27VideoScene();
    });
  }
  const btnVidNext = document.getElementById('btn-fc27-vid-next');
  if (btnVidNext) {
    btnVidNext.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      fc27ExplorerState.videoSceneIndex++;
      renderFC27VideoPlayer();
      speakCurrentFC27VideoScene();
    });
  }

  // Quiz Launch Buttons
  const btnQuiz1 = document.getElementById('btn-fc27-start-quiz');
  if (btnQuiz1) {
    btnQuiz1.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      startMatch('english_fc27', '🎮 מסכי FC 27 ואיך מתחילים משחק', false);
    });
  }

  const btnQuiz2 = document.getElementById('btn-fc27-launch-match');
  if (btnQuiz2) {
    btnQuiz2.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      startMatch('english_fc27', '🎮 מסכי FC 27 ואיך מתחילים משחק', false);
    });
  }

  const btnQuizComm = document.getElementById('btn-fc27-launch-comm-quiz');
  if (btnQuizComm) {
    btnQuizComm.addEventListener('click', () => {
      stopFC27Timers();
      arcadeAudio.playClick();
      startMatch('english_fc27_commentator', '🎙️ מה השדרן בפיפא אומר?', false);
    });
  }
}

// ==================== VIEW 13: INTERACTIVE SCIENCE & HOW THINGS WORK LAB CONTROLLER ====================

let scienceLabState = {
  cat: 'all',
  selectedId: 'sci_banana_kick'
};

function initScienceStudio() {
  renderScienceStudio();
}

function renderScienceStudio() {
  if (typeof SCIENCE_DISCOVERY_CARDS === 'undefined') return;

  const filtered = SCIENCE_DISCOVERY_CARDS.filter(c => {
    if (scienceLabState.cat === 'all') return true;
    return c.cat === scienceLabState.cat;
  });

  let activeCard = filtered.find(c => c.id === scienceLabState.selectedId) || filtered[0] || SCIENCE_DISCOVERY_CARDS[0];
  scienceLabState.selectedId = activeCard.id;

  const iconEl = document.getElementById('sci-stage-icon');
  const titleEl = document.getElementById('sci-stage-title');
  const engEl = document.getElementById('sci-stage-eng');
  const stepsEl = document.getElementById('sci-stage-steps');
  const expEl = document.getElementById('sci-stage-explain');
  const exprEl = document.getElementById('sci-stage-experiment');
  const factEl = document.getElementById('sci-stage-funfact');

  if (iconEl) iconEl.textContent = activeCard.icon;
  if (titleEl) titleEl.textContent = activeCard.title;
  if (engEl) engEl.textContent = `🌍 באנגלית: ${activeCard.engWord} (${activeCard.engHeb})`;
  if (expEl) expEl.textContent = activeCard.explain;
  if (exprEl) exprEl.textContent = activeCard.experiment;
  if (factEl) factEl.textContent = activeCard.funFact;

  if (stepsEl) {
    stepsEl.innerHTML = '';
    activeCard.steps.forEach(st => {
      const box = document.createElement('div');
      box.style.cssText = 'background:linear-gradient(135deg,#0284c7,#1e3a8a);border:1px solid #7dd3fc;border-radius:10px;padding:8px 10px;font-size:0.86rem;font-weight:800;color:#fff;';
      box.textContent = st;
      stepsEl.appendChild(box);
    });
  }

  const grid = document.getElementById('science-cards-grid');
  if (grid) {
    grid.innerHTML = '';
    filtered.forEach(card => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const isSel = card.id === activeCard.id;
      btn.style.cssText = `
        text-align:right;
        background:${isSel ? 'linear-gradient(135deg,#0284c7,#1d4ed8)' : '#1e293b'};
        border:2px solid ${isSel ? '#38bdf8' : '#334155'};
        border-radius:12px;
        padding:9px 10px;
        color:#fff;
        cursor:pointer;
        font-family:inherit;
      `;
      btn.innerHTML = `
        <div style="font-size:1.3rem;margin-bottom:3px;">${card.icon}</div>
        <div style="font-size:0.86rem;font-weight:800;color:#f8fafc;line-height:1.3;">${card.title}</div>
        <div style="font-size:0.74rem;color:#7dd3fc;margin-top:3px;direction:ltr;text-align:left;">🌍 ${card.engWord}</div>
      `;
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        scienceLabState.selectedId = card.id;
        renderScienceStudio();
        speakCurrentScienceCard('heb');
      });
      grid.appendChild(btn);
    });
  }
}

function speakCurrentScienceCard(mode = 'heb') {
  if (typeof SCIENCE_DISCOVERY_CARDS === 'undefined') return;
  const activeCard = SCIENCE_DISCOVERY_CARDS.find(c => c.id === scienceLabState.selectedId) || SCIENCE_DISCOVERY_CARDS[0];
  if (!activeCard) return;

  if (mode === 'eng') {
    arcadeAudio.speakBilingual(activeCard.engHeb, activeCard.engWord, 0.86);
  } else {
    arcadeAudio.speak(`${activeCard.title}. ${activeCard.explain}`, 'he-IL', 0.88);
  }
}

function setupScienceStudioListeners() {
  const banner = document.getElementById('science-home-banner');
  if (banner) {
    banner.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('science');
      setTimeout(() => speakCurrentScienceCard('heb'), 280);
    });
  }

  document.querySelectorAll('#science-cat-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#science-cat-tabs .cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      scienceLabState.cat = tab.dataset.scicat;
      renderScienceStudio();
      speakCurrentScienceCard('heb');
    });
  });

  const btnSpeakExplain = document.getElementById('btn-sci-speak-explain');
  if (btnSpeakExplain) {
    btnSpeakExplain.addEventListener('click', () => speakCurrentScienceCard('heb'));
  }

  const btnSpeakEng = document.getElementById('btn-sci-speak-eng');
  if (btnSpeakEng) {
    btnSpeakEng.addEventListener('click', () => speakCurrentScienceCard('eng'));
  }

  // Interactive Experiment 1: Color Mixing
  document.querySelectorAll('.sci-mix-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      const resEl = document.getElementById('sci-mix-result');
      if (resEl) resEl.textContent = `✨ תוצאת הניסוי: ${btn.dataset.mix}`;
      arcadeAudio.speakBilingual(btn.dataset.heb, btn.dataset.eng, 0.88);
    });
  });

  // Interactive Experiment 2: Float or Sink
  document.querySelectorAll('.sci-float-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      const resEl = document.getElementById('sci-float-result');
      if (resEl) resEl.textContent = btn.dataset.res;
      arcadeAudio.speak(btn.dataset.speech, 'he-IL', 0.88);
    });
  });

  // Interactive Experiment 3: Volcano Eruption
  const btnVolcano = document.getElementById('btn-sci-erupt-volcano');
  if (btnVolcano) {
    btnVolcano.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      confetti.burst(110);
      addActiveCoins(10);
      saveState();
      updateHeaderUI();
      const stEl = document.getElementById('sci-volcano-status');
      if (stEl) {
        stEl.textContent = '🌋 בוווום! הסודה לשתייה והחומץ יצרו גז פחמן דו-חמצני שהקציף והתפרץ כמו לבה! (+10 🪙)';
      }
      arcadeAudio.speak('וואו! תגובה כימית! הסודה לשתייה והחומץ יצרו בועות גז שהתפרצו כמו הר געש! הרווחתם עשרה מטבעות!', 'he-IL', 0.9);
    });
  }

  // Quiz Launchers
  const launchSciQuiz = () => {
    arcadeAudio.playClick();
    if (isLiaActive()) {
      startMatch('lia_science_wonder', '🔬🌈 מעבדת המדע של ליה וסטיץ׳', false);
    } else {
      startMatch('science_how_it_works', '🔬 מעבדת המדע: איך דברים עובדים?', false);
    }
  };

  const btnTopQuiz = document.getElementById('btn-science-top-quiz');
  if (btnTopQuiz) btnTopQuiz.addEventListener('click', launchSciQuiz);

  const btnBotQuiz = document.getElementById('btn-science-start-quiz');
  if (btnBotQuiz) btnBotQuiz.addEventListener('click', launchSciQuiz);
}

// ==================== VIEW 14: TALKING ILLUSTRATED ENGLISH & SCIENCE DICTIONARY CONTROLLER ====================

let talkingDictState = {
  catId: 'all',
  searchQuery: ''
};

function initTalkingDictionary() {
  if (typeof TALKING_DICTIONARY_CATEGORIES === 'undefined') return;
  if (isLiaActive() && talkingDictState.catId === 'all') {
    talkingDictState.catId = 'dict_glam_stitch';
  }
  renderTalkingDictionary();
}

function renderTalkingDictionary() {
  if (typeof TALKING_DICTIONARY_CATEGORIES === 'undefined') return;

  const tabsEl = document.getElementById('dict-cat-tabs');
  if (tabsEl) {
    const allTabs = [
      { id: 'all', title: '🌟 הכל' },
      ...TALKING_DICTIONARY_CATEGORIES.map(c => ({ id: c.id, title: c.title }))
    ];
    tabsEl.innerHTML = allTabs.map(t => `
      <button type="button" class="cat-tab ${talkingDictState.catId === t.id ? 'active' : ''}" data-dictcat="${t.id}" style="color:#fff;font-size:0.76rem;">
        ${t.title}
      </button>
    `).join('');

    tabsEl.querySelectorAll('[data-dictcat]').forEach(btn => {
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        talkingDictState.catId = btn.dataset.dictcat;
        renderTalkingDictionary();
      });
    });
  }

  const listEl = document.getElementById('dict-cards-list');
  if (!listEl) return;

  const q = (talkingDictState.searchQuery || '').trim().toLowerCase();
  let items = [];
  TALKING_DICTIONARY_CATEGORIES.forEach(cat => {
    if (talkingDictState.catId !== 'all' && talkingDictState.catId !== cat.id) return;
    (cat.items || cat.words || []).forEach(w => {
      if (!q || w.eng.toLowerCase().includes(q) || w.heb.includes(q) || w.sentEng.toLowerCase().includes(q) || w.sentHeb.includes(q)) {
        items.push({ ...w, catTitle: cat.title });
      }
    });
  });

  if (items.length === 0) {
    listEl.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:20px;color:#cbd5e1;">לא נמצאו מילים התואמות לחיפוש "${talkingDictState.searchQuery}". נסו מילה אחרת!</div>`;
    return;
  }

  listEl.innerHTML = items.map((item, idx) => `
    <div class="surface-card" data-dict-idx="${idx}" style="margin:0;background:rgba(15,23,42,0.9);border:2px solid #34d399;color:#fff;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:1.85rem;">${item.icon}</span>
          <div>
            <div style="font-size:1.15rem;font-weight:900;color:#34d399;direction:ltr;text-align:left;">${item.eng}</div>
            <div style="font-size:0.95rem;font-weight:800;color:#ffffff;">${item.heb}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          <button type="button" class="btn-chip" data-dict-speak-word="${idx}" style="background:#34d399;color:#064e3b;font-weight:900;border:none;padding:4px 9px;font-size:0.75rem;">🔊 מילה</button>
          <button type="button" class="btn-chip" data-dict-speak-slow="${idx}" style="background:#38bdf8;color:#0f172a;font-weight:900;border:none;padding:4px 9px;font-size:0.75rem;">🐢 לאט</button>
        </div>
      </div>
      <div style="background:rgba(52,211,153,0.12);border-right:4px solid #34d399;padding:7px 9px;border-radius:8px;margin-top:6px;">
        <div style="font-size:0.84rem;font-weight:800;color:#a7f3d0;direction:ltr;text-align:left;">💬 "${item.sentEng}"</div>
        <div style="font-size:0.8rem;color:#e2e8f0;margin-top:2px;">🇮🇱 ${item.sentHeb}</div>
        <button type="button" class="btn-chip" data-dict-speak-sent="${idx}" style="margin-top:6px;background:#fbbf24;color:#090d16;font-weight:900;border:none;padding:4px 10px;font-size:0.75rem;width:100%;">🗣️ השמע משפט שלם באנגלית + עברית</button>
      </div>
    </div>
  `).join('');

  listEl.querySelectorAll('[data-dict-speak-word]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const it = items[Number(btn.dataset.dictSpeakWord)];
      if (it) arcadeAudio.speakBilingual(it.heb, it.eng, 0.9);
    });
  });

  listEl.querySelectorAll('[data-dict-speak-slow]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const it = items[Number(btn.dataset.dictSpeakSlow)];
      if (it) arcadeAudio.speak(`${it.eng}. ${it.sentEng}`, 'en-US', 0.6);
    });
  });

  listEl.querySelectorAll('[data-dict-speak-sent]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const it = items[Number(btn.dataset.dictSpeakSent)];
      if (it) arcadeAudio.speakBilingual(it.sentHeb, it.sentEng, 0.86);
    });
  });
}

function setupTalkingDictionaryListeners() {
  const banner = document.getElementById('dictionary-home-banner');
  if (banner) {
    banner.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('dictionary');
    });
  }

  const searchInp = document.getElementById('dict-search-input');
  if (searchInp) {
    searchInp.addEventListener('input', () => {
      talkingDictState.searchQuery = searchInp.value;
      renderTalkingDictionary();
    });
  }
}

// ==================== VIEW 15: LIA'S EDUCATIONAL COLORING STUDIO CONTROLLER (צביעה לימודית בגיל 5) ====================

let coloringStudioState = {
  pageIndex: 0,
  selectedColorId: 'yellow',
  filledZones: {}, // { z1: '#facc15', ... }
  missionZoneIndex: 0
};

function initColoringStudio() {
  if (typeof LIA_COLORING_PAGES === 'undefined' || typeof LIA_COLORING_PALETTE === 'undefined') return;
  const page = LIA_COLORING_PAGES[coloringStudioState.pageIndex] || LIA_COLORING_PAGES[0];
  if (page && page.zones && page.zones[0]) {
    coloringStudioState.selectedColorId = page.zones[0].targetColor || 'pink';
  }
  renderColoringStudio();
  setTimeout(() => speakColoringMission(), 260);
}

function getCurrentColoringMissionZone() {
  if (typeof LIA_COLORING_PAGES === 'undefined') return null;
  const page = LIA_COLORING_PAGES[coloringStudioState.pageIndex] || LIA_COLORING_PAGES[0];
  if (!page) return null;
  const uncolored = page.zones.find(z => !coloringStudioState.filledZones[z.id]);
  return uncolored || page.zones[0];
}

function speakColoringMission() {
  const zone = getCurrentColoringMissionZone();
  if (!zone || typeof LIA_COLORING_PALETTE === 'undefined') return;
  const pal = LIA_COLORING_PALETTE.find(c => c.id === zone.targetColor) || LIA_COLORING_PALETTE[0];
  arcadeAudio.speakBilingual(
    `ליה מתוקה! בואי נצבע את ${zone.nameHeb} בצבע ${pal.heb}! באנגלית אומרים:`,
    `${pal.eng}! ${zone.nameEng}!`,
    0.88
  );
}

function renderColoringStudio() {
  if (typeof LIA_COLORING_PAGES === 'undefined' || typeof LIA_COLORING_PALETTE === 'undefined') return;
  const page = LIA_COLORING_PAGES[coloringStudioState.pageIndex] || LIA_COLORING_PAGES[0];

  // 1. Page Tabs
  const tabsEl = document.getElementById('coloring-page-tabs');
  if (tabsEl) {
    tabsEl.innerHTML = LIA_COLORING_PAGES.map((p, idx) => `
      <button type="button" class="cat-tab ${idx === coloringStudioState.pageIndex ? 'active' : ''}" data-colorpage="${idx}" style="font-size:0.82rem;">
        ${p.title}
      </button>
    `).join('');
    tabsEl.querySelectorAll('[data-colorpage]').forEach(btn => {
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        coloringStudioState.pageIndex = Number(btn.dataset.colorpage);
        coloringStudioState.filledZones = {};
        const newPage = LIA_COLORING_PAGES[coloringStudioState.pageIndex];
        if (newPage && newPage.zones[0]) {
          coloringStudioState.selectedColorId = newPage.zones[0].targetColor;
        }
        renderColoringStudio();
        speakColoringMission();
      });
    });
  }

  // 2. Mission Banner Text
  const missionZone = getCurrentColoringMissionZone();
  const missionEl = document.getElementById('coloring-mission-text');
  if (missionEl && missionZone) {
    const pal = LIA_COLORING_PALETTE.find(c => c.id === missionZone.targetColor) || LIA_COLORING_PALETTE[0];
    const allDone = page.zones.every(z => Boolean(coloringStudioState.filledZones[z.id]));
    if (allDone) {
      missionEl.innerHTML = `🌟 כל הכבוד ליה! צבעת את כל הציור של <strong>${page.title}</strong>! את יכולה להמשיך לצבוע חופשי או לעבור לציור הבא! 🎨`;
    } else {
      missionEl.innerHTML = `בחרי צבע <strong>${pal.heb} (${pal.eng})</strong> ולחצי על <strong>${missionZone.nameHeb}</strong> בציור!`;
    }
  }

  // 3. Render SVG Canvas
  const svgContainer = document.getElementById('coloring-svg-container');
  if (svgContainer) {
    const zonesSvg = page.zones.map(z => {
      const fillHex = coloringStudioState.filledZones[z.id] || '#f8fafc';
      const isTarget = missionZone && missionZone.id === z.id && !coloringStudioState.filledZones[z.id];
      const strokeColor = isTarget ? '#ec4899' : '#334155';
      const strokeW = isTarget ? '3.5' : '2.5';
      return `<g class="coloring-zone-group" data-zone-id="${z.id}" fill="${fillHex}" stroke="${strokeColor}" stroke-width="${strokeW}" style="cursor:pointer;transition:all 0.2s ease;">${z.path}</g>`;
    }).join('');

    svgContainer.innerHTML = `
      <svg viewBox="0 0 300 220" style="width:100%;max-width:330px;height:auto;display:block;margin:0 auto;user-select:none;">
        <rect width="300" height="220" rx="16" fill="#fffdf9"/>
        ${zonesSvg}
      </svg>
    `;

    svgContainer.querySelectorAll('.coloring-zone-group').forEach(gEl => {
      gEl.addEventListener('click', () => {
        const zoneId = gEl.dataset.zoneId;
        const zoneObj = page.zones.find(z => z.id === zoneId);
        const chosenColor = LIA_COLORING_PALETTE.find(c => c.id === coloringStudioState.selectedColorId) || LIA_COLORING_PALETTE[0];
        if (!zoneObj || !chosenColor) return;

        const wasAlreadyColored = Boolean(coloringStudioState.filledZones[zoneId]);
        coloringStudioState.filledZones[zoneId] = chosenColor.hex;

        // Zero-frustration: ANY color Lia chooses colors the zone beautifully and teaches the English words + awards coins!
        arcadeAudio.playGoalSuccess();
        if (!wasAlreadyColored) {
          addActiveCoins(15);
          saveState();
          updateHeaderUI();
          confetti.burst(55);
        }

        const fb = document.getElementById('coloring-feedback-banner');
        if (fb) {
          fb.className = 'feedback-banner success';
          fb.innerHTML = `🎨 איזה יופי ליה! צבעת את <strong>${zoneObj.nameHeb} (${zoneObj.nameEng})</strong> בצבע <strong>${chosenColor.heb} (${chosenColor.eng})</strong>! ${!wasAlreadyColored ? '<strong>(+15 🪙)</strong>' : ''}`;
          fb.classList.remove('hidden');
        }

        // Auto-select next uncolored zone's recommended color so Lia can just tap-tap-tap effortlessly!
        const nextUncolored = page.zones.find(z => !coloringStudioState.filledZones[z.id]);
        if (nextUncolored) {
          coloringStudioState.selectedColorId = nextUncolored.targetColor;
        }

        renderColoringStudio();
        arcadeAudio.speakBilingual(
          `איזה יופי ליה! ${chosenColor.heb}!`,
          `${chosenColor.eng}! ${zoneObj.nameEng}!`,
          0.9
        );
      });
    });
  }

  // 4. Render Color Palette Grid
  const palGrid = document.getElementById('coloring-palette-grid');
  if (palGrid) {
    palGrid.innerHTML = LIA_COLORING_PALETTE.map(c => {
      const active = c.id === coloringStudioState.selectedColorId;
      return `
        <button type="button" class="coloring-swatch-btn" data-color-id="${c.id}" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;border-radius:16px;border:${active ? '4px solid #0f172a' : '2px solid #e2e8f0'};background:${active ? '#fdf2f8' : '#ffffff'};box-shadow:${active ? '0 6px 14px rgba(236,72,153,0.3)' : 'none'};transform:${active ? 'scale(1.05)' : 'scale(1)'};cursor:pointer;transition:all 0.15s ease;">
          <span style="width:36px;height:36px;border-radius:50%;background:${c.hex};border:2px solid rgba(0,0,0,0.15);display:inline-block;"></span>
          <span style="font-size:0.86rem;font-weight:900;color:#1e293b;">${c.heb}</span>
          <span style="font-size:0.74rem;font-weight:800;color:#64748b;">${c.eng}</span>
        </button>
      `;
    }).join('');

    palGrid.querySelectorAll('.coloring-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        const cid = btn.dataset.colorId;
        coloringStudioState.selectedColorId = cid;
        renderColoringStudio();
        const cObj = LIA_COLORING_PALETTE.find(c => c.id === cid);
        if (cObj) {
          arcadeAudio.speakBilingual(`צבע ${cObj.heb}. באנגלית:`, cObj.eng, 0.9);
        }
      });
    });
  }
}

function setupColoringStudioListeners() {
  const btnSpeak = document.getElementById('btn-coloring-speak-mission');
  if (btnSpeak) {
    btnSpeak.addEventListener('click', () => speakColoringMission());
  }
  const btnReset = document.getElementById('btn-coloring-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      arcadeAudio.playClick();
      coloringStudioState.filledZones = {};
      const fb = document.getElementById('coloring-feedback-banner');
      if (fb) fb.classList.add('hidden');
      renderColoringStudio();
      speakColoringMission();
    });
  }
  const btnNext = document.getElementById('btn-coloring-next-page');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (typeof LIA_COLORING_PAGES === 'undefined') return;
      arcadeAudio.playClick();
      coloringStudioState.pageIndex = (coloringStudioState.pageIndex + 1) % LIA_COLORING_PAGES.length;
      coloringStudioState.filledZones = {};
      const nextPage = LIA_COLORING_PAGES[coloringStudioState.pageIndex];
      if (nextPage && nextPage.zones[0]) {
        coloringStudioState.selectedColorId = nextPage.zones[0].targetColor;
      }
      const fb = document.getElementById('coloring-feedback-banner');
      if (fb) fb.classList.add('hidden');
      renderColoringStudio();
      speakColoringMission();
    });
  }
}

// ==================== VIEW 16: LIA'S EDUCATIONAL DRESS-UP & SEASONS STUDIO CONTROLLER (הלבשות ועונות בגיל 5) ====================

let dressUpStudioState = {
  missionIndex: 0,
  hat: 'crown',
  top: 'ballgown',
  shoe: 'slippers',
  acc: 'wand'
};

function initDressUpStudio() {
  if (typeof LIA_DRESSUP_ITEMS === 'undefined' || typeof LIA_DRESSUP_MISSIONS === 'undefined') return;
  renderDressUpStudio();
  setTimeout(() => speakDressUpMission(), 260);
}

function speakDressUpMission() {
  if (typeof LIA_DRESSUP_MISSIONS === 'undefined') return;
  const m = LIA_DRESSUP_MISSIONS[dressUpStudioState.missionIndex] || LIA_DRESSUP_MISSIONS[0];
  if (!m) return;
  arcadeAudio.speakBilingual(m.promptHeb, m.promptEng, 0.88);
}

function renderDressUpStudio() {
  if (typeof LIA_DRESSUP_ITEMS === 'undefined' || typeof LIA_DRESSUP_MISSIONS === 'undefined') return;
  const m = LIA_DRESSUP_MISSIONS[dressUpStudioState.missionIndex] || LIA_DRESSUP_MISSIONS[0];

  const badgeEl = document.getElementById('dressup-mission-badge');
  if (badgeEl && m) badgeEl.textContent = m.title;

  const textEl = document.getElementById('dressup-mission-text');
  if (textEl && m) textEl.textContent = m.promptHeb;

  const stageEl = document.getElementById('dressup-character-stage');
  if (stageEl && typeof renderDressUpCharacterSVG === 'function') {
    stageEl.innerHTML = renderDressUpCharacterSVG(dressUpStudioState);
  }

  const controlsEl = document.getElementById('dressup-wardrobe-controls');
  if (controlsEl) {
    const categories = [
      { key: 'hat', label: '👑 כובעים וכתרים (Hats & Crowns)', list: LIA_DRESSUP_ITEMS.hats },
      { key: 'top', label: '👗 שמלות ומעילים (Dresses & Coats)', list: LIA_DRESSUP_ITEMS.tops },
      { key: 'shoe', label: '👠 נעליים ומגפיים (Shoes & Boots)', list: LIA_DRESSUP_ITEMS.shoes },
      { key: 'acc', label: '🪄 תיקים ואביזרים (Accessories)', list: LIA_DRESSUP_ITEMS.accessories }
    ];

    controlsEl.innerHTML = categories.map(cat => `
      <div>
        <div style="font-weight:900;font-size:0.88rem;color:#831843;margin-bottom:5px;">${cat.label}:</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:6px;">
          ${cat.list.map(item => {
            const isSelected = dressUpStudioState[cat.key] === item.id;
            const isMissionMatch = m && m.target && m.target[cat.key] === item.id;
            return `
              <button type="button" class="dressup-item-btn" data-cat-key="${cat.key}" data-item-id="${item.id}" style="display:flex;align-items:center;gap:8px;padding:9px 10px;border-radius:14px;border:${isSelected ? '3px solid #ec4899' : isMissionMatch ? '2px dashed #f59e0b' : '2px solid #e2e8f0'};background:${isSelected ? '#fdf2f8' : '#ffffff'};cursor:pointer;text-align:right;">
                <span style="font-size:1.65rem;">${item.icon}</span>
                <span style="display:flex;flex-direction:column;line-height:1.2;">
                  <strong style="font-size:0.86rem;color:#1e293b;">${item.nameHeb}</strong>
                  <span style="font-size:0.74rem;font-weight:800;color:#db2777;">${item.nameEng}</span>
                </span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    controlsEl.querySelectorAll('.dressup-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        arcadeAudio.playClick();
        const catKey = btn.dataset.catKey;
        const itemId = btn.dataset.itemId;
        dressUpStudioState[catKey] = itemId;
        renderDressUpStudio();

        const allLists = [
          ...LIA_DRESSUP_ITEMS.hats,
          ...LIA_DRESSUP_ITEMS.tops,
          ...LIA_DRESSUP_ITEMS.shoes,
          ...LIA_DRESSUP_ITEMS.accessories
        ];
        const found = allLists.find(x => x.id === itemId);
        if (found) {
          arcadeAudio.speakBilingual(`${found.nameHeb}! באנגלית:`, found.nameEng, 0.9);
        }
      });
    });
  }
}

function setupDressUpStudioListeners() {
  const btnSpeak = document.getElementById('btn-dressup-speak-mission');
  if (btnSpeak) {
    btnSpeak.addEventListener('click', () => speakDressUpMission());
  }

  const btnCheck = document.getElementById('btn-dressup-check');
  if (btnCheck) {
    btnCheck.addEventListener('click', () => {
      if (typeof LIA_DRESSUP_MISSIONS === 'undefined') return;
      const m = LIA_DRESSUP_MISSIONS[dressUpStudioState.missionIndex] || LIA_DRESSUP_MISSIONS[0];
      const fb = document.getElementById('dressup-feedback-banner');
      if (!m || !fb) return;

      // Age-5 Friendly Check: As long as Lia picked at least 1 matching seasonal item (or if she wants help, we gently dress the rest for her!), celebrate her!
      const matches = [
        dressUpStudioState.hat === m.target.hat,
        dressUpStudioState.top === m.target.top,
        dressUpStudioState.shoe === m.target.shoe,
        dressUpStudioState.acc === m.target.acc
      ].filter(Boolean).length;

      if (matches >= 1) {
        addActiveCoins(25);
        saveState();
        updateHeaderUI();
        arcadeAudio.playGoalSuccess();
        confetti.burst(95);
        fb.className = 'feedback-banner success';
        fb.innerHTML = `🌟 <strong>מושלם ליה! איזו סטייליסטית אלופה! (+25 🪙)</strong><br>התאמת בגדים נהדרים ל-${m.title}!`;
        fb.classList.remove('hidden');
        arcadeAudio.speakBilingual('כל הכבוד ליה! הלבשת את הדמות מהמם והרווחת עשרים וחמישה מטבעות!', m.promptEng, 0.9);
      } else {
        // Zero-frustration coaching: automatically show her the matching seasonal outfit and reward her!
        dressUpStudioState.hat = m.target.hat;
        dressUpStudioState.top = m.target.top;
        dressUpStudioState.shoe = m.target.shoe;
        dressUpStudioState.acc = m.target.acc;
        renderDressUpStudio();
        addActiveCoins(15);
        saveState();
        updateHeaderUI();
        arcadeAudio.playGoalSuccess();
        confetti.burst(60);
        fb.className = 'feedback-banner success';
        fb.innerHTML = `✨ <strong>בואי נלביש יחד את הסט המלא למשימה! (+15 🪙)</strong><br>הנה הבגדים שמתאימים בול: ${m.promptHeb}`;
        fb.classList.remove('hidden');
        arcadeAudio.speakBilingual(`בואי נלביש יחד ליה! ${m.promptHeb}`, m.promptEng, 0.88);
      }
    });
  }

  const btnNext = document.getElementById('btn-dressup-next-mission');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (typeof LIA_DRESSUP_MISSIONS === 'undefined') return;
      arcadeAudio.playClick();
      dressUpStudioState.missionIndex = (dressUpStudioState.missionIndex + 1) % LIA_DRESSUP_MISSIONS.length;
      const fb = document.getElementById('dressup-feedback-banner');
      if (fb) fb.classList.add('hidden');
      renderDressUpStudio();
      speakDressUpMission();
    });
  }
}

// ==================== VIEW 17: SOCCER HUB CONTROLLER (BEITAR & REAL MADRID HIGHLIGHTS, FIXTURES & STANDINGS) ====================

const SOCCER_HUB_DEFAULT_HIGHLIGHTS = [
  // Beitar Jerusalem Highlights
  {
    id: 'btr_mta_3_2',
    team: 'beitar',
    title: 'בית"ר ירושלים 3 - 2 מכבי תל אביב (טדי בטירוף!)',
    desc: 'שערים של ירדן שועה, סילבה קאני ומרסלן מול 30,000 צהובים-שחורים בטדי!',
    competition: 'ליגת העל 2024/25 • מחזור 8',
    date: '28/10/2024',
    embedId: '5F_P5_Kx8tA',
    url: 'https://www.youtube.com/watch?v=5F_P5_Kx8tA',
    badge: '🦁 בית"ר ירושלים',
    score: '3 - 2'
  },
  {
    id: 'btr_hha_1_0',
    team: 'beitar',
    title: 'הפועל חיפה 0 - 1 בית"ר ירושלים',
    desc: 'סילבה קאני מפציץ שער ניצחון דרמטי בדקה ה-89 בסמי עופר!',
    competition: 'ליגת העל 2024/25 • מחזור 9',
    date: '04/11/2024',
    embedId: 'sF9f_j-d9rM',
    url: 'https://www.youtube.com/watch?v=sF9f_j-d9rM',
    badge: '🦁 בית"ר ירושלים',
    score: '1 - 0'
  },
  {
    id: 'btr_had_4_0',
    team: 'beitar',
    title: 'בית"ר ירושלים 4 - 0 הפועל חדרה',
    desc: 'הצגת ענק בטדי! שלושער בישולים של ירדן שועה ושערים של עדי יונה וטוואמסי!',
    competition: 'ליגת העל 2024/25 • מחזור 7',
    date: '21/10/2024',
    embedId: 'm4VjYp7u3Xw',
    url: 'https://www.youtube.com/watch?v=m4VjYp7u3Xw',
    badge: '🦁 בית"ר ירושלים',
    score: '4 - 0'
  },
  {
    id: 'btr_net_2_1',
    team: 'beitar',
    title: 'מכבי נתניה 1 - 2 בית"ר ירושלים',
    desc: 'מהפך אדיר של בית"ר בנתניה עם שער שוויון של מוזי ושער ניצחון של שועה!',
    competition: 'ליגת העל 2024/25 • מחזור 5',
    date: '30/09/2024',
    embedId: 'aK_B7tN2mXo',
    url: 'https://www.youtube.com/watch?v=aK_B7tN2mXo',
    badge: '🦁 בית"ר ירושלים',
    score: '2 - 1'
  },

  // Real Madrid Highlights
  {
    id: 'rma_osa_4_0',
    team: 'real',
    title: 'ריאל מדריד 4 - 0 אוסאסונה (שלושער לויניסיוס!)',
    desc: 'שלושער פנומנלי של ויניסיוס ג׳וניור ושער מבריק של ג׳וד בלינגהאם בסנטיאגו ברנבאו!',
    competition: 'LaLiga EA SPORTS • מחזור 13',
    date: '09/11/2024',
    embedId: 'vC_K5mQx9zY',
    url: 'https://www.youtube.com/watch?v=vC_K5mQx9zY',
    badge: '👑 ריאל מדריד',
    score: '4 - 0'
  },
  {
    id: 'rma_bvb_5_2',
    team: 'real',
    title: 'ריאל מדריד 5 - 2 בורוסיה דורטמונד (מהפך ענק!)',
    desc: 'ליגת האלופות! פיגור 0:2 במחצית נמחק עם 5 שערים במחצית השנייה ושלושער של ויניסיוס!',
    competition: 'UEFA Champions League • שלב הליגה',
    date: '22/10/2024',
    embedId: 'h7N_B8jZ2pE',
    url: 'https://www.youtube.com/watch?v=h7N_B8jZ2pE',
    badge: '👑 ריאל מדריד',
    score: '5 - 2'
  },
  {
    id: 'rma_vig_2_1',
    team: 'real',
    title: 'סלטה ויגו 1 - 2 ריאל מדריד',
    desc: 'פצצה מדהימה של קיליאן אמבפה לחיבורים ובישול גאוני של לוקה מודריץ׳ לויניסיוס!',
    competition: 'LaLiga EA SPORTS • מחזור 10',
    date: '19/10/2024',
    embedId: 'mE7_jK4kX9r',
    url: 'https://www.youtube.com/watch?v=mE7_jK4kX9r',
    badge: '👑 ריאל מדריד',
    score: '2 - 1'
  },
  {
    id: 'rma_vfb_3_1',
    team: 'real',
    title: 'ריאל מדריד 3 - 1 שטוטגרט (ליגת האלופות)',
    desc: 'שער בכורה של אמבפה בליגת האלופות עם ריאל ושער טיל מרהיב של אנריק בן ה-18!',
    competition: 'UEFA Champions League • מחזור 1',
    date: '17/09/2024',
    embedId: 'yK8_mN9p2xL',
    url: 'https://www.youtube.com/watch?v=yK8_mN9p2xL',
    badge: '👑 ריאל מדריד',
    score: '3 - 1'
  }
];

const SOCCER_HUB_FIXTURES = {
  results: [
    { team: 'beitar', opp: 'הפועל חיפה', score: '1 - 0', res: 'win', comp: 'ליגת העל', date: '04/11', scorers: 'סילבה קאני (89\')', loc: 'חוץ' },
    { team: 'beitar', opp: 'מכבי תל אביב', score: '3 - 2', res: 'win', comp: 'ליגת העל', date: '28/10', scorers: 'שועה (42\'), קאני (65\'), מרסלן (85\')', loc: 'טדי' },
    { team: 'beitar', opp: 'מכבי בני ריינה', score: '2 - 0', res: 'win', comp: 'ליגת העל', date: '25/10', scorers: 'טוואמסי, מוזי', loc: 'טדי' },
    { team: 'real', opp: 'אוסאסונה', score: '4 - 0', res: 'win', comp: 'LaLiga', date: '09/11', scorers: 'ויניסיוס (34\', 61\', 69\'), בלינגהאם (42\')', loc: 'ברנבאו' },
    { team: 'real', opp: 'בורוסיה דורטמונד', score: '5 - 2', res: 'win', comp: 'צ\'מפיונס ליג', date: '22/10', scorers: 'רודיגר, לוקאס, ויניסיוס (3)', loc: 'ברנבאו' },
    { team: 'real', opp: 'סלטה ויגו', score: '2 - 1', res: 'win', comp: 'LaLiga', date: '19/10', scorers: 'אמבפה (20\'), ויניסיוס (66\')', loc: 'חוץ' }
  ],
  upcoming: [
    { team: 'beitar', opp: 'מכבי חיפה', comp: 'ליגת העל • משחק העונה', date: 'יום שני, 25/11 • 20:30', loc: 'אצטדיון טדי, ירושלים 🦁', broadcast: 'שידור ישיר: ספורט 5 (ערוץ 55)' },
    { team: 'beitar', opp: 'הפועל ירושלים', comp: 'הדרבי הירושלמי הגדול', date: 'יום שבת, 30/11 • 19:30', loc: 'אצטדיון טדי 🏟️', broadcast: 'שידור ישיר: ספורט 1' },
    { team: 'real', opp: 'ליברפול', comp: 'ליגת האלופות • מחזור 5', date: 'יום רביעי, 27/11 • 22:00', loc: 'אצטדיון אנפילד 👑', broadcast: 'שידור ישיר: ערוץ 5SPORT' },
    { team: 'real', opp: 'חטאפה', comp: 'LaLiga • מחזור 15', date: 'יום ראשון, 01/12 • 17:15', loc: 'סנטיאגו ברנבאו 🏟️', broadcast: 'שידור ישיר: ONE' }
  ]
};

const SOCCER_HUB_STANDINGS = {
  ligat_haal: {
    title: '🇮🇱 טבלת ליגת העל (צמרת הליגה)',
    rows: [
      { pos: 1, name: 'בית"ר ירושלים 🦁', p: 9, w: 7, d: 1, l: 1, gf: 21, ga: 10, pts: 22, highlight: true },
      { pos: 2, name: 'מכבי תל אביב', p: 9, w: 7, d: 1, l: 1, gf: 18, ga: 7, pts: 22, highlight: false },
      { pos: 3, name: 'מכבי חיפה', p: 9, w: 6, d: 2, l: 1, gf: 22, ga: 9, pts: 20, highlight: false },
      { pos: 4, name: 'הפועל באר שבע', p: 9, w: 6, d: 2, l: 1, gf: 17, ga: 7, pts: 18, highlight: false }
    ]
  },
  laliga: {
    title: '🇪🇸 טבלת הליגה הספרדית (LaLiga EA SPORTS)',
    rows: [
      { pos: 1, name: 'ברצלונה', p: 13, w: 11, d: 0, l: 2, gf: 40, ga: 12, pts: 33, highlight: false },
      { pos: 2, name: 'ריאל מדריד 👑', p: 12, w: 8, d: 3, l: 1, gf: 25, ga: 11, pts: 27, highlight: true },
      { pos: 3, name: 'אתלטיקו מדריד', p: 13, w: 7, d: 5, l: 1, gf: 19, ga: 7, pts: 26, highlight: false },
      { pos: 4, name: 'ויאריאל', p: 12, w: 7, d: 3, l: 2, gf: 23, ga: 19, pts: 24, highlight: false }
    ]
  },
  ucl: {
    title: '⭐ טבלת שלב הליגה של ליגת האלופות (UEFA)',
    rows: [
      { pos: 1, name: 'ליברפול', p: 4, w: 4, d: 0, l: 0, gf: 10, ga: 1, pts: 12, highlight: false },
      { pos: 2, name: 'ספורטינג ליסבון', p: 4, w: 3, d: 1, l: 0, gf: 9, ga: 2, pts: 10, highlight: false },
      { pos: 3, name: 'מונאקו', p: 4, w: 3, d: 1, l: 0, gf: 10, ga: 4, pts: 10, highlight: false },
      { pos: 7, name: 'ריאל מדריד 👑', p: 4, w: 2, d: 0, l: 2, gf: 9, ga: 7, pts: 6, highlight: true }
    ]
  }
};

let soccerHubState = {
  activeTab: 'highlights', // 'highlights' | 'fixtures' | 'standings'
  teamFilter: 'all', // 'all' | 'beitar' | 'real'
  currentEmbedId: '5F_P5_Kx8tA',
  activeStandingsTable: 'ligat_haal'
};

function getSoccerCustomHighlights() {
  try {
    const raw = localStorage.getItem('ilay_custom_soccer_highlights_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveSoccerCustomHighlight(item) {
  try {
    const list = getSoccerCustomHighlights();
    list.unshift(item);
    localStorage.setItem('ilay_custom_soccer_highlights_v1', JSON.stringify(list));
  } catch (e) {}
}

function initSoccerHub() {
  renderSoccerHubTabs();
  renderSoccerHighlights();
  renderSoccerFixtures();
  renderSoccerStandings();
  setupSoccerHubListeners();
}

function renderSoccerHubTabs() {
  document.querySelectorAll('#soccer-hub-tabs .cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.soccertab === soccerHubState.activeTab);
  });
  document.querySelectorAll('.soccer-subpanel').forEach(p => {
    p.classList.toggle('hidden', p.id !== `soccer-panel-${soccerHubState.activeTab}`);
  });
}

function renderSoccerHighlights() {
  const customList = getSoccerCustomHighlights();
  const allHighlights = [...customList, ...SOCCER_HUB_DEFAULT_HIGHLIGHTS];
  const filtered = allHighlights.filter(h => {
    if (soccerHubState.teamFilter === 'all') return true;
    return h.team === soccerHubState.teamFilter;
  });

  const grid = document.getElementById('soccer-highlights-grid');
  if (!grid) return;

  grid.innerHTML = filtered.map(item => {
    const isBeitar = item.team === 'beitar';
    const isPlaying = item.embedId === soccerHubState.currentEmbedId;
    return `
      <div class="surface-card" style="margin:0;background:${isPlaying ? 'linear-gradient(135deg,#090d16,#1e293b)' : '#1e293b'};border:2px solid ${isPlaying ? '#facc15' : isBeitar ? '#ca8a04' : '#2563eb'};color:#fff;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
          <div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <span style="background:${isBeitar ? '#facc15' : '#38bdf8'};color:#090d16;font-weight:900;padding:2px 8px;border-radius:99px;font-size:0.72rem;">${item.badge}</span>
              <span style="font-size:0.75rem;color:#94a3b8;">${item.competition} • ${item.date}</span>
            </div>
            <div style="font-size:1.02rem;font-weight:900;color:#fff;">${item.title}</div>
            <div style="font-size:0.8rem;color:#cbd5e1;margin-top:3px;">${item.desc}</div>
          </div>
          <button type="button" class="btn-chip" data-play-soccer="${item.embedId}" data-soc-title="${item.title.replace(/"/g, '&quot;')}" data-soc-desc="${item.desc.replace(/"/g, '&quot;')}" data-soc-team="${item.team}" style="background:${isPlaying ? '#00ff87' : '#facc15'};color:#090d16;font-weight:900;border:none;padding:6px 12px;font-size:0.8rem;white-space:nowrap;">
            ${isPlaying ? '▶️ מנגן עכשיו' : 'צפה 🎬'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('[data-play-soccer]').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      const eid = btn.dataset.playSoccer;
      soccerHubState.currentEmbedId = eid;

      const iframe = document.getElementById('soccer-video-iframe');
      if (iframe) iframe.src = `https://www.youtube-nocookie.com/embed/${eid}?autoplay=1`;

      const titleEl = document.getElementById('soccer-player-title');
      const descEl = document.getElementById('soccer-player-desc');
      const badgeEl = document.getElementById('soccer-player-badge');
      const linkEl = document.getElementById('soccer-player-yt-link');

      if (titleEl) titleEl.textContent = btn.dataset.socTitle;
      if (descEl) descEl.textContent = btn.dataset.socDesc;
      if (badgeEl) {
        badgeEl.textContent = btn.dataset.socTeam === 'beitar' ? '🦁 בית"ר ירושלים' : '👑 ריאל מדריד';
        badgeEl.style.background = btn.dataset.socTeam === 'beitar' ? '#facc15' : '#38bdf8';
      }
      if (linkEl) linkEl.href = `https://www.youtube.com/watch?v=${eid}`;

      renderSoccerHighlights();
      // Scroll to video player
      const container = document.getElementById('soccer-video-embed-container');
      if (container) container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

function renderSoccerFixtures() {
  const resEl = document.getElementById('soccer-results-list');
  if (resEl) {
    resEl.innerHTML = SOCCER_HUB_FIXTURES.results.map(r => `
      <div style="background:#fff;border:2px solid ${r.team === 'beitar' ? '#facc15' : '#3b82f6'};border-radius:12px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;gap:8px;">
        <div>
          <div style="font-size:0.75rem;color:#64748b;">${r.comp} • ${r.date} (${r.loc})</div>
          <div style="font-size:1.05rem;font-weight:900;color:#0f172a;margin-top:2px;">
            ${r.team === 'beitar' ? '🦁 בית"ר ירושלים' : '👑 ריאל מדריד'} vs ${r.opp}
          </div>
          <div style="font-size:0.78rem;color:#059669;font-weight:700;margin-top:2px;">⚽ כובשים: ${r.scorers}</div>
        </div>
        <div style="background:${r.res === 'win' ? '#10b981' : '#64748b'};color:#fff;font-size:1.15rem;font-weight:900;padding:6px 12px;border-radius:8px;direction:ltr;">
          ${r.score}
        </div>
      </div>
    `).join('');
  }

  const upEl = document.getElementById('soccer-upcoming-list');
  if (upEl) {
    upEl.innerHTML = SOCCER_HUB_FIXTURES.upcoming.map(u => `
      <div style="background:linear-gradient(135deg,#090d16,#1e293b);border:2px solid ${u.team === 'beitar' ? '#facc15' : '#38bdf8'};border-radius:12px;padding:12px;color:#fff;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px;">
          <span style="background:${u.team === 'beitar' ? '#facc15' : '#38bdf8'};color:#090d16;font-weight:900;padding:2px 8px;border-radius:99px;font-size:0.72rem;">${u.team === 'beitar' ? '🦁 בית"ר' : '👑 ריאל'}</span>
          <span style="font-size:0.78rem;color:#fde047;font-weight:800;">${u.comp}</span>
        </div>
        <div style="font-size:1.1rem;font-weight:900;color:#fff;">${u.team === 'beitar' ? 'בית"ר ירושלים' : 'ריאל מדריד'} vs ${u.opp}</div>
        <div style="font-size:0.85rem;color:#93c5fd;margin-top:4px;">📅 ${u.date}</div>
        <div style="font-size:0.8rem;color:#cbd5e1;margin-top:2px;">📍 ${u.loc}</div>
        <div style="font-size:0.78rem;color:#a7f3d0;font-weight:700;margin-top:4px;background:rgba(0,255,135,0.12);padding:4px 8px;border-radius:6px;">📺 ${u.broadcast}</div>
      </div>
    `).join('');
  }
}

function renderSoccerStandings() {
  const container = document.getElementById('soccer-table-container');
  if (!container) return;

  const data = SOCCER_HUB_STANDINGS[soccerHubState.activeStandingsTable] || SOCCER_HUB_STANDINGS.ligat_haal;

  container.innerHTML = `
    <div style="font-size:1.05rem;font-weight:900;color:#0f172a;margin-bottom:8px;">${data.title}</div>
    <table style="width:100%;border-collapse:collapse;font-size:0.85rem;text-align:center;">
      <thead>
        <tr style="background:#f1f5f9;color:#475569;border-bottom:2px solid #cbd5e1;">
          <th style="padding:6px;">#</th>
          <th style="padding:6px;text-align:right;">קבוצה</th>
          <th style="padding:6px;">מש׳</th>
          <th style="padding:6px;">נצ׳</th>
          <th style="padding:6px;">שערים</th>
          <th style="padding:6px;font-weight:900;color:#0f172a;">נק׳</th>
        </tr>
      </thead>
      <tbody>
        ${data.rows.map(r => `
          <tr style="border-bottom:1px solid #e2e8f0;background:${r.highlight ? 'rgba(250,204,21,0.18)' : 'transparent'};font-weight:${r.highlight ? '900' : 'normal'};">
            <td style="padding:8px 4px;font-weight:900;">${r.pos}</td>
            <td style="padding:8px 4px;text-align:right;color:${r.highlight ? '#b45309' : '#0f172a'};">${r.name}</td>
            <td style="padding:8px 4px;">${r.p}</td>
            <td style="padding:8px 4px;">${r.w}</td>
            <td style="padding:8px 4px;direction:ltr;">${r.gf}:${r.ga}</td>
            <td style="padding:8px 4px;font-weight:900;font-size:1rem;color:${r.highlight ? '#b45309' : '#0f172a'};">${r.pts}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function setupSoccerHubListeners() {
  // Main Tab Buttons
  document.querySelectorAll('#soccer-hub-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      soccerHubState.activeTab = tab.dataset.soccertab;
      renderSoccerHubTabs();
    });
  });

  // Team Filter Buttons in Highlights Tab
  document.querySelectorAll('.soccer-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('.soccer-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      soccerHubState.teamFilter = btn.dataset.teamfilter;
      renderSoccerHighlights();
    });
  });

  // Standings Sub-Tabs
  document.querySelectorAll('#soccer-standings-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      document.querySelectorAll('#soccer-standings-tabs .cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      soccerHubState.activeStandingsTable = tab.dataset.table;
      renderSoccerStandings();
    });
  });

  // Refresh Button
  const btnRefresh = document.getElementById('btn-soccer-refresh');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      arcadeAudio.playGoalSuccess();
      renderSoccerHighlights();
      renderSoccerFixtures();
      renderSoccerStandings();
      confetti.burst(50);
    });
  }

  // Add Custom Highlight Modal
  const btnOpenAdd = document.getElementById('btn-soccer-open-add');
  const modalAdd = document.getElementById('modal-add-soccer-highlight');
  const btnCancelAdd = document.getElementById('btn-soc-modal-cancel');
  const formAdd = document.getElementById('form-add-soccer-highlight');

  if (btnOpenAdd && modalAdd) {
    btnOpenAdd.addEventListener('click', () => {
      arcadeAudio.playClick();
      modalAdd.classList.remove('hidden');
    });
  }
  if (btnCancelAdd && modalAdd) {
    btnCancelAdd.addEventListener('click', () => {
      modalAdd.classList.add('hidden');
    });
  }
  if (formAdd && modalAdd) {
    formAdd.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const team = document.getElementById('input-soc-team').value;
      const title = document.getElementById('input-soc-title').value.trim();
      const url = document.getElementById('input-soc-url').value.trim();
      const desc = document.getElementById('input-soc-desc').value.trim();

      // Extract YouTube embed ID
      let embedId = url;
      const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (ytMatch && ytMatch[1]) embedId = ytMatch[1];

      const newItem = {
        id: 'custom_' + Date.now(),
        team,
        title,
        desc: desc || 'תקציר משחק מעודכן',
        competition: team === 'beitar' ? 'ליגת העל' : 'LaLiga',
        date: new Date().toLocaleDateString('he-IL'),
        embedId,
        url,
        badge: team === 'beitar' ? '🦁 בית"ר ירושלים' : '👑 ריאל מדריד',
        score: '⚽'
      };

      saveSoccerCustomHighlight(newItem);
      modalAdd.classList.add('hidden');
      formAdd.reset();
      arcadeAudio.playGoalSuccess();
      confetti.burst(70);
      soccerHubState.currentEmbedId = embedId;
      renderSoccerHighlights();
    });
  }
}

// ==================== VIEW 18: DEDICATED GIFTED ACADEMY 2025 PREP HUB CONTROLLER ====================

let giftedHubState = {
  activeTab: 'stage_a' // 'stage_a' | 'stage_b' | 'toolbox'
};

function initGiftedHub() {
  renderGiftedReadinessDashboard();
  renderGiftedHubTabs();
  setupGiftedHubListeners();
}

function renderGiftedReadinessDashboard() {
  const stats = getActiveTopicStats();
  const giftedTopicIds = [
    'gifted_stage_a', 'gifted_stage_b', 'gifted_picture_riddles', 'gifted_verbal_analogies',
    'gifted_sentence_completion', 'gifted_word_problems', 'gifted_numbers_shapes', 'gifted_shapes_matrix', 'gifted_reading_comp'
  ];

  let masteredCount = 0;
  let totalStars = 0;
  giftedTopicIds.forEach(id => {
    const st = stats[id];
    if (st && st.correct >= 3) masteredCount++;
    if (st && st.stars) totalStars += Math.min(3, st.stars);
  });

  const pct = Math.min(100, Math.round((masteredCount / giftedTopicIds.length) * 100));

  const pctEl = document.getElementById('gifted-readiness-pct');
  const barEl = document.getElementById('gifted-readiness-bar-fill');
  const countEl = document.getElementById('gifted-mastered-topics-count');
  const starsEl = document.getElementById('gifted-stars-badge');

  if (pctEl) pctEl.textContent = `${pct}%`;
  if (barEl) barEl.style.width = `${Math.max(8, pct)}%`;
  if (countEl) countEl.textContent = `🎯 נשלטו ${masteredCount} מתוך 9 פרקי המבחן`;
  if (starsEl) starsEl.textContent = `⭐ ${totalStars} כוכבי הצטיינות`;
}

function renderGiftedHubTabs() {
  document.querySelectorAll('#gifted-hub-main-tabs .cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.giftedtab === giftedHubState.activeTab);
  });
  document.querySelectorAll('.gifted-subpanel').forEach(p => {
    p.classList.toggle('hidden', p.id !== `gifted-panel-${giftedHubState.activeTab.replace('_', '-')}`);
  });
}

function setupGiftedHubListeners() {
  // Tabs Navigation
  document.querySelectorAll('#gifted-hub-main-tabs .cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      arcadeAudio.playClick();
      giftedHubState.activeTab = tab.dataset.giftedtab;
      renderGiftedHubTabs();
    });
  });

  // Stage A Simulation Button
  const btnSimA = document.getElementById('btn-launch-sim-stage-a');
  if (btnSimA) {
    btnSimA.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('gifted_stage_a', '👑 סימולציית שלב א׳ (מכון נועם)', false);
    });
  }

  // Stage B Simulation Button
  const btnSimB = document.getElementById('btn-launch-sim-stage-b');
  if (btnSimB) {
    btnSimB.addEventListener('click', () => {
      arcadeAudio.playClick();
      startMatch('gifted_stage_b', '🏆 סימולציית שלב ב׳ (קרני וסאלד)', false);
    });
  }

  // Individual Station Practice Buttons
  document.querySelectorAll('.gifted-station-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topId = btn.dataset.giftedtop;
      const topic = (typeof TOPICS !== 'undefined' ? TOPICS : []).find(t => t.id === topId);
      arcadeAudio.playClick();
      startMatch(topId, topic ? topic.title : 'תרגול ממוקד למחוננים', false);
    });
  });

  // Speak Intro Audio Button
  const btnIntro = document.getElementById('btn-gifted-speak-intro');
  if (btnIntro) {
    btnIntro.addEventListener('click', () => {
      arcadeAudio.speak(
        'ברוך הבא לאקדמיית המחוננים של עילי! כאן נתאמן יחד בצורה מדורגת ורגועה לשלב א ולשלב ב של מבחן המחוננים. תוכל לבחור סימולציה מלאה, או לתרגל פרק ספציפי כמו חידות בציורים ויחסי מילים. בהצלחה אלוף!',
        'he-IL',
        0.88
      );
    });
  }

  // Toolbox Strategy Tips Speak Buttons
  const tips = {
    analog: 'שיטת המשפט באנלוגיות מילים: תמיד תבנה משפט קצר שמחבר את שתי המילים הראשונות. למשל, מחט משמשת לתפירה, כמו שסכין משמשת לחיתוך. ואז תבחר את התשובה שמתאימה בדיוק לאותו משפט!',
    symbols: 'סוד משוואות הסמלים: תמיד תתחיל מהשורה שיש בה סמל כפול! אם שמש ועוד שמש שווה עשר, אז שמש אחת היא חמש. תציב את חמש בשורה הבאה ותגלה בקלות את הסמל השני!',
    shapes: 'זיהוי חוקיות בצורות: תבדוק שלושה דברים: האם הצורה מסתובבת בכיוון השעון? האם מתווסף או יורד קו? והאם הצבע משתנה משחור ללבן?',
    time: 'כלל הזהב במבחן אמריקאי: אין קנס על טעות! אם שאלה קשה, תפסול תשובות שלא הגיוניות, תנחש ניחוש מושכל ותמשיך קדימה בביטחון!'
  };

  document.querySelectorAll('[data-speak-tip]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tipKey = btn.dataset.speakTip;
      if (tips[tipKey]) {
        arcadeAudio.speak(tips[tipKey], 'he-IL', 0.88);
      }
    });
  });
}

// Global Banner & Quick Bento Tile Launchers
document.addEventListener('DOMContentLoaded', () => {
  const quickGiftedHubBtn = document.getElementById('quick-open-gifted-hub');
  if (quickGiftedHubBtn) {
    quickGiftedHubBtn.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('gifted-hub');
    });
  }

  const socBanner = document.getElementById('soccer-home-banner');
  if (socBanner) {
    socBanner.addEventListener('click', () => {
      arcadeAudio.playClick();
      switchView('soccer');
    });
  }

  const giftedBanner = document.getElementById('gifted-home-banner');
  if (giftedBanner) {
    giftedBanner.addEventListener('click', (ev) => {
      const jump = ev.target.closest('[data-giftedjump]');
      arcadeAudio.playClick();
      if (jump && jump.dataset.giftedjump) {
        const topId = jump.dataset.giftedjump;
        const topic = (typeof TOPICS !== 'undefined' ? TOPICS : []).find(t => t.id === topId);
        startMatch(topId, topic ? topic.title : '🧠 מבחן מחוננים', false);
      } else {
        switchView('gifted-hub');
      }
    });
  }

  setupSoccerHubListeners();
});

