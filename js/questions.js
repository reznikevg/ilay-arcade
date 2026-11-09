// ==================== CURRICULUM & DYNAMIC QUESTION GENERATORS (2ND GRADE - BEITAR & REAL MADRID EDITION) ====================

const TOPICS = [
  // ===== MATH GAMES =====
  {
    id: 'math_inequalities',
    cat: 'math',
    tag: 'כמו בגלים PRO! ⭐',
    icon: '⚖️',
    title: 'אי-שוויונות ומספרים מתאימים',
    desc: 'בחרו את כל המספרים המתאימים להשלמת התרגיל (גדול מ- / קטן מ-).',
    multiSelectPossible: true
  },
  {
    id: 'math_add_sub',
    cat: 'math',
    tag: 'חשבון כיתה ב׳',
    icon: '⚽',
    title: 'חיבור וחיסור בתחום ה-100',
    desc: 'תרגילי חיבור וחיסור עשרות ואחדות עם ובלי המרה עד 100 ויותר.'
  },
  {
    id: 'math_missing',
    cat: 'math',
    tag: 'ריבוע הקסם הסגול',
    icon: '🟪',
    title: 'מציאת המספר החסר בתרגיל',
    desc: 'איזה מספר מסתתר בתוך הריבוע הסגול כדי שהמשוואה תהיה נכונה?'
  },
  {
    id: 'math_place_value',
    cat: 'math',
    tag: 'המבנה העשרוני',
    icon: '🧱',
    title: 'עשרות, אחדות, קודם ועוקב',
    desc: 'פירוק מספרים לעשרות ואחדות, מספר קודם ומספר עוקב וערך הספרה.'
  },
  {
    id: 'math_mult_intro',
    cat: 'math',
    tag: 'התחלת כפל',
    icon: '✖️',
    title: 'נבחרת הכפל והקבוצות',
    desc: 'חיבור חוזר, קבוצות שוות ותחילת לוח הכפל (כפולות 2, 3, 4, 5, 10).'
  },
  {
    id: 'math_word_problems',
    cat: 'math',
    tag: 'בית"ר & ריאל 💛👑',
    icon: '🏟️',
    title: 'בעיות מילוליות: טדי והברנבאו',
    desc: 'סיפורי חשבון מרתקים מהמשחקים של בית"ר ירושלים וריאל מדריד!'
  },
  {
    id: 'logic_series',
    cat: 'math',
    tag: 'סדרות והנדסה',
    icon: '🧠',
    title: 'סדרות מספרים, שעון ומצולעים',
    desc: 'השלמת סדרות מספרים בקפיצות, קריאת שעון וזיהוי צורות הנדסיות.'
  },

  // ===== HEBREW / LANGUAGE GAMES =====
  {
    id: 'hebrew_opposites',
    cat: 'hebrew',
    tag: 'שפה ואוצר מילים',
    icon: '🔄',
    title: 'הפכים ומילים נרדפות',
    desc: 'זיהוי מילים הפוכות ומילים בעלות משמעות דומה בעברית עם ניקוד מלא.'
  },
  {
    id: 'hebrew_grammar',
    cat: 'hebrew',
    tag: 'דקדוק כיתה ב׳',
    icon: '📚',
    title: 'יחיד/רבים, זכר/נקבה ומשפחות מילים',
    desc: 'השלמת משפטים, זיהוי שורשים, יחיד ורבים ויוצאי דופן.'
  },
  {
    id: 'hebrew_reading',
    cat: 'hebrew',
    tag: 'הבנת הנקרא וכתיב',
    icon: '🦁',
    title: 'סיפורי אלופים והשלמת משפטים',
    desc: 'קטעי קריאה קצרים וכיפיים על כדורגל וחברים, כתיב נכון והבנת הנקרא.'
  },

  // ===== ENGLISH ACADEMY (2ND GRADE) =====
  {
    id: 'english_fc27',
    cat: 'english',
    tag: 'EA SPORTS FC 27 🎮',
    icon: '🎮',
    title: 'מסכי FC 27: מה כל כפתור אומר ואיך מתחילים משחק?',
    desc: 'לומדים מה אומר כל כפתור במסכים של פיפא (Kick Off, Select Side, Kit, Pause, Rematch) עם צילומי מסך ודוגמאות!'
  },
  {
    id: 'english_fc27_commentator',
    cat: 'english',
    tag: 'שדרן פיפא + וידאו 🎙️',
    icon: '🎙️',
    title: 'מה השדרן בפיפא אומר? (עם דוגמאות מהמגרש!)',
    desc: 'מבינים את כל הקריאות של השדרן באנגלית תוך כדי משחק (What a save, Offside, Crossbar, Penalty, One on one)!'
  },
  {
    id: 'english_abc',
    cat: 'english',
    tag: 'ABC ואותיות 🔤',
    icon: '🔤',
    title: 'אותיות ה-ABC וצלילים ראשונים',
    desc: 'התאמת אותיות גדולות וקטנות, זיהוי אות פותחת וצלילי פוניקס באנגלית!'
  },
  {
    id: 'english_words',
    cat: 'english',
    tag: 'צבעים ומספרים 🎨',
    icon: '🔟',
    title: 'מספרים, צבעים וחיות באנגלית',
    desc: 'ספירה 1-20, צבעי בית"ר וריאל (Yellow, White, Black), שמות חיות ויומיום!'
  },
  {
    id: 'english_soccer',
    cat: 'english',
    tag: 'כדורגל וספורט ⚽',
    icon: '⚽',
    title: 'אנגלית של אלופי כדורגל',
    desc: 'Ball, Goal, Team, Champion, Stadium, Run, Kick — לומדים אנגלית כמו מקצוענים!'
  },
  {
    id: 'english_starter',
    cat: 'english',
    tag: 'מיקס אנגלית 🌍',
    icon: '👑',
    title: 'אתגר אנגלית משולב לאלופים',
    desc: 'שילוב כיפי של אותיות, מספרים, צבעים ומילים מעולם הכדורגל והחיים.'
  },

  // ===== SCIENCE & HOW THINGS WORK (מדע ואיך דברים עובדים) =====
  {
    id: 'science_how_it_works',
    cat: 'science',
    tag: 'איך דברים עובדים? 🔬',
    icon: '🔬',
    title: 'מעבדת המדע: איך דברים עובדים בעולם?',
    desc: 'איך כדור מסובב עף באוויר? איך מטוס וטיל ממריאים? איך פועלים הלב, המוח, החשמל, המגנט והשלט האלחוטי!'
  },
  {
    id: 'science_nature_experiments',
    cat: 'science',
    tag: 'טבע, חלל וניסויים 🚀',
    icon: '🚀',
    title: 'חלל, מזג אוויר, צמחים וניסויים מדליקים',
    desc: 'איך נוצרים קשת בענן, ברק ורעם, יום ולילה, הר געש מקציף ואיך עצים מייצרים חמצן מאור השמש!'
  },

  // ===== GIFTED ACADEMY 2025 (הכנה ממוקדת למבחן מחוננים כיתה ב' - מכון נועם) =====
  {
    id: 'gifted_stage_a',
    cat: 'gifted',
    tag: 'מכון נועם • שלב א׳ 🧠',
    icon: '👑',
    title: 'מבחן מחוננים שלב א׳ (סימולציה מלאה)',
    desc: 'סימולציה מלאה של שלב א׳: בעיות בחשבון, השלמת מספרים, אי-שוויונות, חידות בציורים והבנת הנקרא.'
  },
  {
    id: 'gifted_stage_b',
    cat: 'gifted',
    tag: 'מכון נועם • שלב ב׳ 🏆',
    icon: '🌟',
    title: 'מבחן מחוננים שלב ב׳ (סימולציה מלאה)',
    desc: 'סימולציה מלאה של שלב ב׳: אנלוגיות מילים, השלמת משפטים, בעיות יחס וקצב, מספרים בצורות ומטריצות.'
  },
  {
    id: 'gifted_picture_riddles',
    cat: 'gifted',
    tag: 'משוואות סמלים 🧩',
    icon: '🧩',
    title: 'חידות בציורים ומערכות סמלים (שלב א׳)',
    desc: 'שמש, פרסה, עוגן ופעמון! גילוי הערך של כל סמל במשוואות מתמטיות בדיוק כמו במבחן.'
  },
  {
    id: 'gifted_verbal_analogies',
    cat: 'gifted',
    tag: 'יחסי מילים 🔄',
    icon: '🔄',
    title: 'יחסי מילים ואנלוגיות (שלב ב׳)',
    desc: 'לעוף : נחליאלי ➔ לרוץ : אריה. אפודה : בגד ➔ מברג : כלי עבודה. גילוי הקשר הלוגי המדויק!'
  },
  {
    id: 'gifted_sentence_completion',
    cat: 'gifted',
    tag: 'חשיבה לשונית ✏️',
    icon: '✏️',
    title: 'השלמת משפטים בהקשר לוגי (שלב ב׳)',
    desc: 'בחירת המילה המדויקת ביותר המשלימה את המשפט על פי ההקשר וההגיון הפנימי.'
  },
  {
    id: 'gifted_word_problems',
    cat: 'gifted',
    tag: 'בעיות מילוליות 🧮',
    icon: '🧮',
    title: 'בעיות מילוליות, חלוקה ויחסים',
    desc: 'חלוקה שווה, יחסי כפולות ("פי 3"), שאריות, שינוי כמויות גוגואים וקצב זמן/דלגית.'
  },
  {
    id: 'gifted_numbers_shapes',
    cat: 'gifted',
    tag: 'מספרים בצורות 🔢',
    icon: '🔢',
    title: 'מספרים בצורות ופירמידות (שלב ב׳)',
    desc: 'מעגלים מחולקים לגזרות, משולשי מספרים ופירמידות לבנים עם חוקיות חשבונית נסתרת.'
  },
  {
    id: 'gifted_shapes_matrix',
    cat: 'gifted',
    tag: 'חשיבה צורנית 📐',
    icon: '📐',
    title: 'צורות, מטריצות והשלמת שטיח חסר',
    desc: 'אנלוגיות צורניות, סדרות משבצות הנעות בכיוון השעון והשלמת חלק חסר בשטיח מורכב.'
  },
  {
    id: 'gifted_reading_comp',
    cat: 'gifted',
    tag: 'הבנת הנקרא 📖',
    icon: '📖',
    title: 'הבנת הנקרא: שינה, בריאות והסקה',
    desc: 'טקסט מידע מנוקד על חשיבות שעות השינה, הסקת מסקנות, מילים נרדפות ("שלווה") והרגלים.'
  },

  // ===== PARENTS CUSTOM =====
  {
    id: 'custom_parents',
    cat: 'custom',
    tag: 'מותאם אישית ⭐',
    icon: '👨‍👩‍👧‍👦',
    title: 'המשימות של אבא ואמא',
    desc: 'תרגילים בחשבון ומילים להכתבה בשפה שהוספתם במיוחד באזור ההורים!'
  }
];

// ==================== LIA'S KINDERGARTEN & ENGLISH CURRICULUM (AGE 5 - גן חובה • הבסיס של הבסיס בכיף ובלי תסכול!) ====================
const LIA_TOPICS = [
  // ===== LIA ENGLISH (STEP-BY-STEP FROM ZERO!) =====
  {
    id: 'lia_english_mix',
    kid: 'lia',
    cat: 'english',
    tag: 'הבסיס של הבסיס 🌱',
    icon: '🦄',
    title: 'צעדים ראשונים באנגלית עם סטיץ׳ וחד-קרן',
    desc: 'לומדים מילים ראשונות באנגלית מאפס! שומעים בעברית ובאנגלית ולוחצים על התמונה המתאימה בכיף!'
  },
  {
    id: 'lia_english_colors_glam',
    kid: 'lia',
    cat: 'english',
    tag: 'צבעים ונסיכות 🎨',
    icon: '🩷',
    title: 'צבעים ראשונים, כתר ושמלה באנגלית',
    desc: 'ורוד (Pink), כחול (Blue), אדום (Red), צהוב (Yellow), סגול (Purple), כתר (Crown) ושמלה (Dress)!'
  },
  {
    id: 'lia_english_stitch_animals',
    kid: 'lia',
    cat: 'english',
    tag: 'חיות מתוקות 🐶',
    icon: '🐶',
    title: 'כלב, חתול, חד-קרן וחיות באנגלית',
    desc: 'לומדים איך אומרים כלב (Dog), חתול (Cat), חד-קרן (Unicorn), פרפר (Butterfly), דג (Fish) ושמש (Sun)!'
  },
  {
    id: 'lia_english_numbers_food',
    kid: 'lia',
    cat: 'english',
    tag: 'מספרים וגלידה 🍦',
    icon: '🍦',
    title: 'מספרים (1 עד 5), גלידה ופירות באנגלית',
    desc: 'סופרים One, Two, Three, Four, Five ולומדים גלידה (Ice Cream), תפוח (Apple), בננה (Banana) ועוגה (Cake)!'
  },
  {
    id: 'lia_english_magic_words',
    kid: 'lia',
    cat: 'english',
    tag: 'משפחה ושלום 👋',
    icon: '💖',
    title: 'אמא, אבא, שלום ותודה באנגלית',
    desc: 'איך אומרים שלום (Hello), תודה (Thank You), אמא (Mommy), אבא (Daddy) ושמחה (Happy)!'
  },
  {
    id: 'lia_english_home_toys',
    kid: 'lia',
    cat: 'english',
    tag: 'בובה וצעצועים 🧸',
    icon: '🧸',
    title: 'בובה, דובי, בלון וכדור באנגלית',
    desc: 'לומדים מילים ראשונות מהחדר והגן: בובה (Doll), דובי (Bear), בלון (Balloon), כדור (Ball) ולב (Heart)!'
  },

  // ===== LIA HEBREW & KINDERGARTEN READINESS (2 TOPICS) =====
  {
    id: 'lia_heb_letters',
    kid: 'lia',
    cat: 'hebrew',
    tag: 'אותיות בתמונות 🔤',
    icon: '🔤',
    title: 'האותיות של ליה, אמא, אבא וסטיץ׳',
    desc: 'מכירים בכיף את האות ל׳ של ליה, א׳ של אמא ואבא, ב׳ של בובה ו-ש׳ של שמש עם תמונות וקול!'
  },
  {
    id: 'lia_heb_rhymes',
    kid: 'lia',
    cat: 'hebrew',
    tag: 'חרוזים והפכים 🎵',
    icon: '🎵',
    title: 'חרוזים מתוקים והפכים בתמונות',
    desc: 'גלידה–חידה, בלון–חלון, רכבת–ארנבת, גדול–קטן, יום–לילה — הכל בתמונות גדולות וברורות!'
  },

  // ===== LIA MATH & LOGIC (2 TOPICS) =====
  {
    id: 'lia_math_counting',
    kid: 'lia',
    cat: 'math',
    tag: 'סופרים בכיף 1-5 🦄',
    icon: '👑',
    title: 'סופרים יחד חדי-קרן, פרחים וגלידות!',
    desc: 'סופרים לאט ובכיף 1 עד 5 (ובהמשך עד 8) תמונות ענקיות של חד-קרן, כוכבים ופרחים!'
  },
  {
    id: 'lia_logic_patterns',
    kid: 'lia',
    cat: 'math',
    tag: 'מי הבא בתור? ✨',
    icon: '✨',
    title: 'משחק הצבעים והצורות: מי בא עכשיו?',
    desc: 'חד-קרן, סטיץ׳, חד-קרן, סטיץ׳ — מי בא עכשיו? משחקי חשיבה פשוטים ומשמחים לגן חובה!'
  },
  {
    id: 'lia_science_wonder',
    kid: 'lia',
    cat: 'science',
    tag: 'קסמי הטבע והצבעים 🌈',
    icon: '🌈',
    title: 'קסמי צבעים וטבע עם ליה וסטיץ׳',
    desc: 'מה יוצא כשמערבבים אדום ולבן? מתי יש קשת בענן? ולמה הופך הזחל הקטן? בתמונות ענקיות!'
  }
];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeNumericOptions(correct, count = 4, minVal = 0) {
  const set = new Set([String(correct)]);
  const offsets = [-10, -3, -2, -1, 1, 2, 3, 4, 10, -5, 5];
  let safety = 0;
  while (set.size < count && safety < 50) {
    safety++;
    const off = offsets[randInt(0, offsets.length - 1)];
    const candidate = correct + off;
    if (candidate >= minVal && candidate !== correct) {
      set.add(String(candidate));
    }
  }
  while (set.size < count) {
    set.add(String(correct + set.size));
  }
  return shuffle(Array.from(set));
}

// ==================== GENERATORS PER TOPIC ====================

function genInequalities(diff) {
  const maxBase = diff === 'easy' ? 20 : diff === 'medium' ? 35 : 80;
  const mode = randInt(1, 3);

  if (mode === 1) {
    // Exact Galim PRO screenshot style: 9 > 17 - [box]
    const a = randInt(14, maxBase);
    const threshold = randInt(6, a - 4);
    const minX = a - threshold + 1;
    const correctVals = [minX, minX + 2];
    const wrongVals = [minX - 1, Math.max(1, minX - 2)];
    const allOpts = shuffle([...correctVals, ...wrongVals].map(String));

    return {
      isMulti: true,
      instruction: 'בַּחֲרוּ אֶת <span class="multi-highlight">כָּל</span> הַמִּסְפָּרִים הַמַּתְאִימִים לְהַשְׁלָמַת הַתַּרְגִּיל:',
      ttsText: `בחרו את כל המספרים המתאימים להשלמת התרגיל: ${threshold} גדול מ- ${a} פחות המספר החסר`,
      stimulusHtml: `<span>${threshold}</span> <span>&gt;</span> <span>${a}</span> <span>−</span> <span class="mystery-box">?</span>`,
      rtlStimulus: false,
      options: allOpts,
      correctAnswers: correctVals.map(String),
      hint: `נבדוק: ${a} פחות כמה ייתן תוצאה שקטנה מ-${threshold}? אם נחסר ${minX} או יותר, התוצאה תהיה קטנה מ-${threshold}!`
    };
  } else if (mode === 2) {
    const b = randInt(5, 18);
    const threshold = b + randInt(6, 20);
    const minX = threshold - b + 1;
    const correctVals = [minX, minX + 3];
    const wrongVals = [minX - 1, Math.max(1, minX - 3)];
    const allOpts = shuffle([...correctVals, ...wrongVals].map(String));

    return {
      isMulti: true,
      instruction: 'בַּחֲרוּ אֶת <span class="multi-highlight">כָּל</span> הַמִּסְפָּרִים הַמַּתְאִימִים לְהַשְׁלָמַת הַתַּרְגִּיל:',
      ttsText: `בחרו את כל המספרים המתאימים: המספר החסר ועוד ${b} גדול מ- ${threshold}`,
      stimulusHtml: `<span class="mystery-box">?</span> <span>+</span> <span>${b}</span> <span>&gt;</span> <span>${threshold}</span>`,
      rtlStimulus: false,
      options: allOpts,
      correctAnswers: correctVals.map(String),
      hint: `אנחנו צריכים שהסכום יהיה גדול מ-${threshold}. מאחר ש-${minX - 1} + ${b} = ${threshold}, כל מספר שגדול מ-${minX - 1} יתאים!`
    };
  } else {
    const leftA = randInt(10, 45);
    const leftB = randInt(5, 30);
    const leftVal = leftA + leftB;
    const delta = randInt(-1, 1) * randInt(0, 4);
    const rightVal = leftVal + delta;
    const rightB = randInt(4, 15);
    const rightA = rightVal + rightB;

    const correctSym = leftVal > rightVal ? '>' : leftVal < rightVal ? '<' : '=';
    return {
      isMulti: false,
      instruction: 'בַּחֲרוּ אֶת הַסִּימָן הַמַּתְאִים ( < , > , = ) לְהַשְׁלָמַת הַתַּרְגִּיל:',
      ttsText: `איזה סימן מתאים בין ${leftA} ועוד ${leftB}, לבין ${rightA} פחות ${rightB}?`,
      stimulusHtml: `<span>${leftA} + ${leftB}</span> <span class="mystery-box">?</span> <span>${rightA} − ${rightB}</span>`,
      rtlStimulus: false,
      options: ['>', '<', '='],
      correctAnswers: [correctSym],
      hint: `חשבו קודם כל צד בנפרד: צד שמאל שווה ${leftVal}, וצד ימין שווה ${rightVal}.`
    };
  }
}

function genAddSub(diff) {
  const isAdd = Math.random() > 0.45;
  let a, b, ans;
  if (diff === 'easy') {
    a = randInt(8, 25);
    b = randInt(3, 15);
  } else if (diff === 'medium') {
    a = randInt(22, 68);
    b = randInt(12, 35);
  } else {
    a = randInt(48, 95);
    b = randInt(25, 65);
  }

  if (isAdd) {
    ans = a + b;
    return {
      isMulti: false,
      instruction: 'פִּתְרוּ אֶת תַּרְגִּיל הַחִבּוּר:',
      ttsText: `כמה זה ${a} ועוד ${b}?`,
      stimulusHtml: `<span>${a}</span> <span>+</span> <span>${b}</span> <span>=</span> <span class="mystery-box">?</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(ans, 4, 1),
      correctAnswers: [String(ans)],
      hint: `חברו קודם את העשרות (${Math.floor(a/10)*10} + ${Math.floor(b/10)*10}) ואז את האחדות (${a%10} + ${b%10})!`
    };
  } else {
    if (b > a) [a, b] = [b, a];
    ans = a - b;
    return {
      isMulti: false,
      instruction: 'פִּתְרוּ אֶת תַּרְגִּיל הַחִסּוּר:',
      ttsText: `כמה זה ${a} פחות ${b}?`,
      stimulusHtml: `<span>${a}</span> <span>−</span> <span>${b}</span> <span>=</span> <span class="mystery-box">?</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(ans, 4, 0),
      correctAnswers: [String(ans)],
      hint: `אפשר לחסר בשלבים: קודם להוריד ${Math.floor(b/10)*10} מ-${a}, ואז להוריד עוד ${b%10}.`
    };
  }
}

function genMissingNumber(diff) {
  const max = diff === 'easy' ? 20 : diff === 'medium' ? 50 : 90;
  const subType = randInt(1, 3);

  if (subType === 1) {
    const a = randInt(7, max);
    const missing = randInt(5, 35);
    const c = a + missing;
    return {
      isMulti: false,
      instruction: 'מִצְאוּ אֶת הַמִּסְפָּר הֶחָסֵר בָּרִבּוּעַ הַסָּגֹל:',
      ttsText: `${a} ועוד איזה מספר שווה ${c}?`,
      stimulusHtml: `<span>${a}</span> <span>+</span> <span class="mystery-box">?</span> <span>=</span> <span>${c}</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(missing, 4, 1),
      correctAnswers: [String(missing)],
      hint: `כדי למצוא מחובר חסר, נחשב את התרגיל ההפוך: ${c} פחות ${a}.`
    };
  } else if (subType === 2) {
    const c = randInt(8, max);
    const missing = randInt(4, 25);
    const a = c + missing;
    return {
      isMulti: false,
      instruction: 'מִצְאוּ אֶת הַמִּסְפָּר הֶחָסֵר בָּרִבּוּעַ הַסָּגֹל:',
      ttsText: `${a} פחות איזה מספר שווה ${c}?`,
      stimulusHtml: `<span>${a}</span> <span>−</span> <span class="mystery-box">?</span> <span>=</span> <span>${c}</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(missing, 4, 1),
      correctAnswers: [String(missing)],
      hint: `חשבו: כמה צריך להוריד מ-${a} כדי להגיע ל-${c}? (${a} פחות ${c}).`
    };
  } else {
    const b = randInt(6, 25);
    const c = randInt(10, max);
    const missing = b + c;
    return {
      isMulti: false,
      instruction: 'מִצְאוּ אֶת הַמִּסְפָּר הֶחָסֵר בִּתְחִלַּת הַתַּרְגִּיל:',
      ttsText: `איזה מספר פחות ${b} שווה ${c}?`,
      stimulusHtml: `<span class="mystery-box">?</span> <span>−</span> <span>${b}</span> <span>=</span> <span>${c}</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(missing, 4, 5),
      correctAnswers: [String(missing)],
      hint: `המספר הראשוני הוא הגדול ביותר! נחבר את ${c} ועוד ${b}.`
    };
  }
}

function genPlaceValue(diff) {
  const mode = randInt(1, 3);
  if (mode === 1) {
    const tens = randInt(2, 9);
    const units = randInt(1, 9);
    const extraUnits = diff === 'hard' ? randInt(10, 18) : units;
    const ans = tens * 10 + extraUnits;
    return {
      isMulti: false,
      instruction: 'אֵיזֶה מִסְפָּר מִתְקַבֵּל?',
      ttsText: `איזה מספר מתקבל מ- ${tens} עשרות ו- ${extraUnits} אחדות?`,
      stimulusHtml: `<span><strong>${tens}</strong> עֲשָׂרוֹת וְ-<strong>${extraUnits}</strong> יְחִידוֹת (אֲחָדוֹת)</span>`,
      rtlStimulus: true,
      options: makeNumericOptions(ans, 4, 10),
      correctAnswers: [String(ans)],
      hint: `${tens} עשרות הן ${tens * 10}, ונוסיף להן ${extraUnits}.`
    };
  } else if (mode === 2) {
    const num = randInt(29, 99);
    const isNext = Math.random() > 0.5;
    const ans = isNext ? num + 1 : num - 1;
    const word = isNext ? 'הָעוֹקֵב (שֶׁבָּא מִיָּד אַחֲרֵי)' : 'הַקּוֹדֵם (שֶׁבָּא מִיָּד לִפְנֵי)';
    return {
      isMulti: false,
      instruction: 'הַכָּרַת הַמִּסְפָּרִים בִּתְחוּם הַ-100:',
      ttsText: `מהו המספר ${isNext ? 'העוקב' : 'הקודם'} למספר ${num}?`,
      stimulusHtml: `<span>מַהוּ הַמִּסְפָּר ${word} לַמִּסְפָּר <strong>${num}</strong>?</span>`,
      rtlStimulus: true,
      options: makeNumericOptions(ans, 4, 10),
      correctAnswers: [String(ans)],
      hint: isNext ? `המספר העוקב גדול ב-1 מ-${num}.` : `המספר הקודם קטן ב-1 מ-${num}.`
    };
  } else {
    const tens = randInt(2, 9);
    const units = randInt(0, 9);
    const num = tens * 10 + units;
    const askTens = Math.random() > 0.5;
    const ans = askTens ? tens * 10 : units;
    const targetDigit = askTens ? tens : units;
    return {
      isMulti: false,
      instruction: 'מַהוּ עֵרֶךְ הַסִּפְרָה בַּמִּסְפָּר?',
      ttsText: `מהו הערך של הספרה ${targetDigit} במספר ${num}?`,
      stimulusHtml: `<span>מַהוּ הָעֵרֶךְ שֶׁל הַסִּפְרָה <u>${targetDigit}</u> בַּמִּסְפָּר <strong>${num}</strong>?</span>`,
      rtlStimulus: true,
      options: shuffle(Array.from(new Set([String(ans), String(tens), String(units * 10), String(num)]))).slice(0, 4),
      correctAnswers: [String(ans)],
      hint: askTens ? `הספרה ${tens} נמצאת במקום העשרות, לכן הערך שלה הוא ${tens * 10}.` : `הספרה ${units} נמצאת במקום האחדות.`
    };
  }
}

function genMultIntro(diff) {
  const factors = diff === 'easy' ? [2, 5, 10] : diff === 'medium' ? [2, 3, 4, 5, 10] : [3, 4, 5, 6, 7, 8];
  const a = factors[randInt(0, factors.length - 1)];
  const b = randInt(2, 6);
  const ans = a * b;
  const emojis = ['⚽', '🦁', '👑', '🏆', '⭐'];
  const em = emojis[randInt(0, emojis.length - 1)];

  if (Math.random() > 0.45) {
    const groupsVisual = Array(b).fill(Array(a).fill(em).join('')).join(' &nbsp;|&nbsp; ');
    return {
      isMulti: false,
      instruction: 'חִבּוּר חוֹזֵר וְכֶפֶל קְבוּצוֹת:',
      ttsText: `יש לנו ${b} קבוצות ובכל קבוצה ${a} סמלים. כמה זה ${b} כפול ${a}?`,
      stimulusHtml: `<div style="width:100%;font-size:1.45rem;margin-bottom:8px;">${groupsVisual}</div><div><span>${b} × ${a} = </span> <span class="mystery-box">?</span></div>`,
      rtlStimulus: false,
      options: makeNumericOptions(ans, 4, 2),
      correctAnswers: [String(ans)],
      hint: `חברו את המספר ${a} בעצמו ${b} פעמים!`
    };
  } else {
    return {
      isMulti: false,
      instruction: 'פִּתְרוּ אֶת תַּרְגִּיל הַכֶּפֶל:',
      ttsText: `כמה זה ${a} כפול ${b}?`,
      stimulusHtml: `<span>${a}</span> <span>×</span> <span>${b}</span> <span>=</span> <span class="mystery-box">?</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(ans, 4, 2),
      correctAnswers: [String(ans)],
      hint: `אפשר לספור בקפיצות של ${a} בדיוק ${b} פעמים.`
    };
  }
}

function genWordProblems() {
  // Stories featuring Beitar Jerusalem (Teddy Stadium) & Real Madrid (Bernabeu, Mbappé, Vinicius, Bellingham, Yarden Shua)
  const templates = [
    () => {
      const a = randInt(14, 32);
      const b = randInt(11, 25);
      const ans = a + b;
      return {
        text: `🦁 בְּאִצְטַדְיוֹן טֶדִי בִּירוּשָׁלַיִם, <strong>בֵּיתָ"ר יְרוּשָׁלַיִם</strong> הִבְקִיעָה <strong>${a}</strong> שְׁעָרִים בַּסִּבּוּב הָרִאשׁוֹן וְעוֹד <strong>${b}</strong> שְׁעָרִים בַּסִּבּוּב הַשֵּׁנִי. כַּמָּה שְׁעָרִים הִבְקִיעָה בֵּיתָ"ר בְּסַךְ הַכֹּל?`,
        tts: `באצטדיון טדי בירושלים, ביתר ירושלים הבקיעה ${a} שערים בסיבוב הראשון ועוד ${b} שערים בסיבוב השני. כמה שערים הבקיעה ביתר בסך הכל?`,
        ans,
        hint: `נחבר את השערים משני הסיבובים: ${a} + ${b}.`
      };
    },
    () => {
      const total = randInt(40, 85);
      const sold = randInt(15, 34);
      const ans = total - sold;
      return {
        text: `👑 בַּחֲנוּת הָאוֹהֲדִים שֶׁל <strong>רֵיאָל מַדְרִיד</strong> בַּבֶּרְנַבֵּאוּ הָיוּ <strong>${total}</strong> חֻלְצוֹת לְבָנוֹת שֶׁל אֶמְבַּפֶּה וּבֶלִינְגְהָאם. הָאוֹהֲדִים קָנוּ <strong>${sold}</strong> חֻלְצוֹת. כַּמָּה חֻלְצוֹת נִשְׁאֲרוּ בַּחֲנוּת?`,
        tts: `בחנות האוהדים של ריאל מדריד היו ${total} חולצות לבנות. האוהדים קנו ${sold} חולצות. כמה חולצות נשארו בחנות?`,
        ans,
        hint: `נחסר מהכמות ההתחלתית את החולצות שנקנו: ${total} פחות ${sold}.`
      };
    },
    () => {
      const rows = randInt(3, 6);
      const perRow = 10;
      const ans = rows * perRow;
      return {
        text: `💛🖤 בַּיָּצִיעַ הַמִּזְרָחִי בְּטֶדִי יָשְׁבוּ <strong>${rows}</strong> שׁוּרוֹת שֶׁל אוֹהֲדֵי בֵּיתָ"ר יְרוּשָׁלַיִם. בְּכָל שׁוּרָה יָשְׁבוּ <strong>${perRow}</strong> אוֹהֲדִים עִם צְעִיפִים צְהֻבִּים. כַּמָּה אוֹהֲדִים יָשְׁבוּ בְּסַךְ הַכֹּל?`,
        tts: `ביציע בטדי ישבו ${rows} שורות של אוהדי ביתר ירושלים. בכל שורה ישבו ${perRow} אוהדים. כמה אוהדים ישבו בסך הכל?`,
        ans,
        hint: `נספור בעשרות שלמות: ${rows} כפול 10.`
      };
    },
    () => {
      const vini = randInt(16, 29);
      const more = randInt(7, 16);
      const ans = vini + more;
      return {
        text: `⚽ בְּטֻרְנִיר לִיגַת הָאַלּוּפוֹת שֶׁל <strong>רֵיאָל מַדְרִיד</strong>, וִינִיסְיוּס מָסַר <strong>${vini}</strong> מְסִירוֹת מְדֻיָּקוֹת, וְעִילַי מָסַר <strong>בְּ-${more} מְסִירוֹת יוֹתֵר</strong> מִמֶּנּוּ! כַּמָּה מְסִירוֹת מָסַר עִילַי?`,
        tts: `בטורניר ליגת האלופות של ריאל מדריד, ויניסיוס מסר ${vini} מסירות, ועילי מסר ב-${more} מסירות יותר ממנו. כמה מסירות מסר עילי?`,
        ans,
        hint: `הביטוי "יותר ב-" אומר שצריך לחבר: ${vini} + ${more}.`
      };
    }
  ];

  const item = templates[randInt(0, templates.length - 1)]();
  return {
    isMulti: false,
    instruction: 'קִרְאוּ אֶת סִפּוּר הַכַּדּוּרֶגֶל וּבַחֲרוּ אֶת הַתְּשׁוּבָה הַנְּכוֹנָה:',
    ttsText: item.tts,
    stimulusHtml: `<span>${item.text}</span>`,
    rtlStimulus: true,
    options: makeNumericOptions(item.ans, 4, 1),
    correctAnswers: [String(item.ans)],
    hint: item.hint
  };
}

const HEBREW_OPPOSITES_BANK = [
  { word: 'גָּבוֹהַּ', ans: 'נָמוּךְ', wrong: ['אָרֹךְ', 'חָזָק', 'מָהִיר'], type: 'הֵפֶךְ' },
  { word: 'מָהִיר', ans: 'אִטִּי', wrong: ['זָרִיז', 'עָצוּב', 'קָרוֹב'], type: 'הֵפֶךְ' },
  { word: 'נִצָּחוֹן', ans: 'הֶפְסֵד', wrong: ['גָּבִיעַ', 'מִשְׂחָק', 'שִׂמְחָה'], type: 'הֵפֶךְ' },
  { word: 'רָחוֹק', ans: 'קָרוֹב', wrong: ['גָּדוֹל', 'עָמֹק', 'רָחָב'], type: 'הֵפֶךְ' },
  { word: 'רַעַשׁ', ans: 'שֶׁקֶט', wrong: ['קוֹל', 'מוּזִיקָה', 'צִלְצוּל'], type: 'הֵפֶךְ' },
  { word: 'חָדָשׁ', ans: 'יָשָׁן', wrong: ['יָפֶה', 'נָקִי', 'קָטָן'], type: 'הֵפֶךְ' },
  { word: 'חָזָק', ans: 'חַלָּשׁ', wrong: ['גִּבּוֹר', 'עֲנָק', 'קָשֶׁה'], type: 'הֵפֶךְ' },
  { word: 'פָּתוּחַ', ans: 'סָגוּר', wrong: ['נָעוּל', 'שָׁבוּר', 'גָּדוֹל'], type: 'הֵפֶךְ' },
  { word: ' מָתוֹק', ans: 'חָמוּץ / מַר', wrong: ['טָעִים', 'חַם', 'רַךְ'], type: 'הֵפֶךְ' },
  { word: 'קַל', ans: 'כָּבֵד', wrong: ['גָּדוֹל', 'רָחוֹק', 'קָר'], type: 'הֵפֶךְ' },
  { word: 'רוֹעֵשׁ', ans: 'שָׁקֵט', wrong: ['שָׂמֵחַ', 'מָהִיר', 'גָּדוֹל'], type: 'הֵפֶךְ' },
  { word: 'שָׂמֵחַ', ans: 'עַלִּיז', wrong: ['עָצוּב', 'כּוֹעֵס', 'עָיֵף'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'נָבוֹן', ans: 'חָכָם', wrong: ['גִּבּוֹר', 'גָּבוֹהַּ', 'שָׁקֵט'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'גִּבּוֹר', ans: 'אַמִּיץ', wrong: ['פַּחְדָן', 'חַלָּשׁ', 'אִטִּי'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'יָפֶה', ans: 'נָאֶה', wrong: ['מְלֻכְלָךְ', 'יָשָׁן', 'קָטָן'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'מָהִיר', ans: 'זָרִיז', wrong: ['אִטִּי', 'עָיֵף', 'כָּבֵד'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' }
];

function genHebrewOpposites() {
  const item = HEBREW_OPPOSITES_BANK[randInt(0, HEBREW_OPPOSITES_BANK.length - 1)];
  return {
    uniqueKey: `heb_opp_${item.word}_${item.type}`,
    isMulti: false,
    instruction: `בַּחֲרוּ <strong>${item.type}</strong> לַמִּלָּה הַמֻּדְגֶּשֶׁת:`,
    ttsText: `בחרו ${item.type} למילה ${item.word}`,
    stimulusHtml: `<span>מַהוּ הַ${item.type} שֶׁל הַמִּלָּה: <strong style="color:#1d4ed8">"${item.word}"</strong>?</span>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: `חשבו על המשמעות של המילה "${item.word}" במשפט.`
  };
}

const HEBREW_GRAMMAR_BANK = [
  {
    q: 'אֵיךְ אוֹמְרִים בְּרַבִּים אֶת הַמִּלָּה <strong style="color:#059669">"שֻׁלְחָן"</strong>?',
    tts: 'איך אומרים ברבים את המילה שולחן?',
    ans: 'שֻׁלְחָנוֹת',
    wrong: ['שֻׁלְחָנִים', 'שֻׁלְחָנִיּוֹת', 'שֻׁלְחָן'],
    hint: 'אומרים שולחן אחד גדול, והרבה...'
  },
  {
    q: 'אֵיךְ אוֹמְרִים בְּרַבִּים אֶת הַמִּלָּה <strong style="color:#059669">"בֵּיצָה"</strong>?',
    tts: 'איך אומרים ברבים את המילה ביצה?',
    ans: 'בֵּיצִים',
    wrong: ['בֵּיצוֹת', 'בֵּיצִיּוֹת', 'בֵּיצָה'],
    hint: 'בקרטון במקרר יש תבנית של...'
  },
  {
    q: 'אֵיךְ אוֹמְרִים בְּרַבִּים אֶת הַמִּלָּה <strong style="color:#059669">"חַלּוֹן"</strong>?',
    tts: 'איך אומרים ברבים את המילה חלון?',
    ans: 'חַלּוֹנוֹת',
    wrong: ['חַלּוֹנִים', 'חַלּוֹנִיּוֹת', 'חַלּוֹן'],
    hint: 'חלון אחד מואר, והרבה...'
  },
  {
    q: 'אֵיךְ אוֹמְרִים בְּרַבִּים אֶת הַמִּלָּה <strong style="color:#059669">"נְמָלָה"</strong>?',
    tts: 'איך אומרים ברבים את המילה נמלה?',
    ans: 'נְמָלִים',
    wrong: ['נְמָלוֹת', 'נְמָלִיּוֹת', 'נְמָלָה'],
    hint: 'נמלה אחת חרוצה, ושיירה של...'
  },
  {
    q: 'אֵיזוֹ מִלָּה <strong>שַׁיֶּכֶת לְמִשְׁפַּחַת הַמִּלִּים</strong> שֶׁל "לִסְפֹּר" וְ-"סִפּוּר"?',
    tts: 'איזו מילה שייכת למשפחת המילים של לספור וסיפור?',
    ans: 'סִפְרִיָּה',
    wrong: ['מַחְבֶּרֶת', 'בֵּית סֵפֶר', 'עִפָּרוֹן'],
    hint: 'חפשו מילה עם האותיות ס.פ.ר!'
  },
  {
    q: 'הַשְׁלִימוּ אֶת הַמִּשְׁפָּט: "שַׂחְקָנֵי בֵּיתָ"ר עָלוּ לַמִּגְרָשׁ וְ______ גּוֹל מַדְהִים!"',
    tts: 'השלימו את המשפט: שחקני ביתר עלו למגרש ו... גול מדהים!',
    ans: 'הִבְקִיעוּ',
    wrong: ['הִבְקִיעַ', 'הִבְקִיעָה', 'מַבְקִיעַ'],
    hint: '"שחקני בית"ר" זה ברבים (הם).'
  },
  {
    q: 'אֵיזוֹ מִלָּה שַׁיֶּכֶת לְמִשְׁפַּחַת הַמִּלִּים שֶׁל <strong>"שַׂחְקָן"</strong>?',
    tts: 'איזו מילה שייכת למשפחת המילים של שחקן?',
    ans: 'מִשְׂחָקִיָּה',
    wrong: ['מִגְרָשׁ', 'כַּדּוּרֶגֶל', 'אַלּוּף'],
    hint: 'חפשו את אותיות השורש ש.ח.ק!'
  },
  {
    q: 'אֵיזוֹ מִלָּה שַׁיֶּכֶת לְמִשְׁפַּחַת הַמִּלִּים שֶׁל <strong>"לִכְתֹּב" וְ-"מִכְתָּב"</strong>?',
    tts: 'איזו מילה שייכת למשפחת המילים של לכתוב ומכתב?',
    ans: 'הַכְתָּבָה',
    wrong: ['סֵפֶר', 'מוֹרָה', 'קְרִיאָה'],
    hint: 'חפשו את אותיות השורש כ.ת.ב!'
  },
  {
    q: 'אֵיךְ אוֹמְרִים בִּנְקֵבָה אֶת הַצֵּרוּף: <strong>"אוֹהֵד נלהָב"</strong>?',
    tts: 'איך אומרים בנקבה את הצירוף אוהד נלהב?',
    ans: 'אוֹהֶדֶת נִלְהֶבֶת',
    wrong: ['אוֹהֲדִים נִלְהָבִים', 'אוֹהֶדֶת נִלְהָב', 'אוֹהֵד נִלְהֶבֶת'],
    hint: 'גם שם העצם וגם שם התואר עוברים ללשון נקבה!'
  }
];

function genHebrewGrammar() {
  const item = HEBREW_GRAMMAR_BANK[randInt(0, HEBREW_GRAMMAR_BANK.length - 1)];
  return {
    uniqueKey: `heb_gram_${item.ans}`,
    isMulti: false,
    instruction: 'שָׂפָה וְדִקְדּוּק לְכִתָּה ב׳:',
    ttsText: item.tts,
    stimulusHtml: `<span>${item.q}</span>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}



const HEBREW_READING_BANK = [
  {
    q: '🦁 עִילַי לָבַשׁ חֻלְצָה שֶׁל <strong>בֵּיתָ"ר</strong>.<br>⚽ הַקְּבוּצָה הִבְקִיעָה <strong>שַׁעַר נִצָּחוֹן</strong> וְעִילַי קָפַץ מִשִּׂמְחָה!<br><strong>לָמָּה קָפַץ עִילַי?</strong>',
    tts: 'עילי לבש חולצה של ביתר. הקבוצה הבקיעה שער ניצחון ועילי קפץ משמחה! למה קפץ עילי?',
    ans: '⚽ כִּי הַקְּבוּצָה הִבְקִיעָה שַׁעַר נִצָּחוֹן',
    wrong: ['🌧️ כִּי יָרַד גֶּשֶׁם', '🛑 כִּי הַמִּשְׂחָק בֻּטַּל', '🧣 כִּי הוּא שָׁכַח צָעִיף'],
    hint: 'הקבוצה הבקיעה שער ניצחון!'
  },
  {
    q: '👑 לְ<strong>רֵיאָל מַדְרִיד</strong> יֵשׁ חֻלְצָה לְבָנָה.<br>🏟️ הַמִּגְרָשׁ שֶׁלָּהֶם נִמְצָא בָּעִיר <strong>מַדְרִיד שֶׁבִּסְפָרַד</strong>.<br><strong>אֵיפֹה הַמִּגְרָשׁ שֶׁל רֵיאָל?</strong>',
    tts: 'לריאל מדריד יש חולצה לבנה. המגרש שלהם נמצא בעיר מדריד שבספרד. איפה המגרש של ריאל?',
    ans: '🇪🇸 בְּמַדְרִיד שֶׁבִּסְפָרַד',
    wrong: ['🇬🇧 בְּלוֹנְדּוֹן', '🇮🇹 בְּרוֹמָא', '⚓ בְּחֵיפָה'],
    hint: 'חפשו את שם העיר מדריד!'
  },
  {
    q: '🧤 הַשּׁוֹעֵר קוּרְטוּאָה זִנֵּק לַפִּנָּה וְ<strong>עָצַר פֶּנְדֶּל</strong> בַּדַּקָּה הָאַחֲרוֹנָה!<br><strong>מֶה עָשָׂה הַשּׁוֹעֵר?</strong>',
    tts: 'השוער קורטואה זינק לפינה ועצר פנדל בדקה האחרונה! מה עשה השוער?',
    ans: '🧤 עָצַר פֶּנְדֶּל בַּדַּקָּה הָאַחֲרוֹנָה',
    wrong: ['🍕 אָכַל פִּיצָה עַל הַדֶּשֶׁא', '🛌 הָלַךְ לִישׁוֹן בַּמַּחֲצִית', '🚌 נָסַע בְּאוֹטוֹבּוּס'],
    hint: 'השוער זינק לפינה ועצר פנדל!'
  },
  {
    q: '🦄 לִיָּה וְעִילַי שִׂחֲקוּ יַחַד בַּסָּלוֹן.<br>🎨 עִילַי עָזַר לְלִיָּה לִצְבֹּעַ צִיּוּר שֶׁל <strong>סְטִיץ׳ וְחַד-קֶרֶן</strong>!<br><strong>בַּמֶּה עָזַר עִילַי לְלִיָּה?</strong>',
    tts: 'ליה ועילי שיחקו יחד בסלון. עילי עזר לליה לצבוע ציור של סטיץ׳ וחד קרן! במה עזר עילי לליה?',
    ans: '🎨 לִצְבֹּעַ צִיּוּר שֶׁל סְטִיץ׳ וְחַד-קֶרֶן',
    wrong: ['🚗 לִנְהֹג בִּמְכוֹנִית', '✈️ לְהָטִיס מָטוֹס', '🛒 לַעֲשׂוֹת קְנִיּוֹת בַּסּוּפֶּר'],
    hint: 'עילי עזר לליה לצבוע ציור!'
  },
  {
    q: '🏛️ אֵיךְ כּוֹתְבִים נָכוֹן אֶת שֵׁם עִיר הַבִּירָה שֶׁלָּנוּ — <strong>יְרוּשָׁלַיִם</strong>?',
    tts: 'איך כותבים נכון את שם עיר הבירה שלנו, ירושלים?',
    ans: '🦁 יְרוּשָׁלַיִם',
    wrong: ['יְרוֹשָׁלַעִים', 'יְרֻשָׁלַתִים', 'יְרוּשָׁלָם'],
    hint: 'בסוף המילה ירושלים יש י׳ ואחריה ם סופית!'
  },
  {
    q: '🏃‍♂️ הַשַּׂחְקָנִים עוֹשִׂים חִמּוּם ______ שֶׁלֹּא יִפָּצְעוּ.',
    tts: 'השלימו את המשפט: השחקנים עושים חימום... שלא ייפצעו.',
    ans: '✅ כְּדֵי',
    wrong: ['❌ אֲבָל', '❌ לַמְרוֹת', '❌ אִלּוּ'],
    hint: 'מהי המילה שמסבירה את המטרה של החימום? כְּדֵי!'
  }
];

function genHebrewReading() {
  const item = HEBREW_READING_BANK[randInt(0, HEBREW_READING_BANK.length - 1)];
  return {
    uniqueKey: `heb_read_${item.ans}`,
    isMulti: false,
    instruction: '📖 קְרִיאָה קְצָרָה וּבְרוּרָה (אֶפְשָׁר גַּם לְהַקְשִׁיב 🔊):',
    ttsText: item.tts,
    stimulusHtml: `<div style="line-height:1.65;font-size:1.35rem;">${item.q}</div>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}



// ==================== COMPREHENSIVE ENGLISH ACADEMY (GRADE 2 - HEBREW-READER FRIENDLY!) ====================

const ENGLISH_ABC_MATCH = [
  { cap: 'A', low: 'a', hebSound: 'אֵיי (A)', wordEx: '🍎 Apple (תַּפּוּחַ)', wrong: ['e', 'o', 'd'] },
  { cap: 'B', low: 'b', hebSound: 'בִּי (B)', wordEx: '⚽ Ball (כַּדּוּר)', wrong: ['d', 'p', 'q'] },
  { cap: 'C', low: 'c', hebSound: 'סִי / קִי (C)', wordEx: '🐱 Cat (חָתוּל)', wrong: ['s', 'o', 'e'] },
  { cap: 'D', low: 'd', hebSound: 'דִּי (D)', wordEx: '🐶 Dog (כֶּלֶב)', wrong: ['b', 'p', 'q'] },
  { cap: 'E', low: 'e', hebSound: 'אִי (E)', wordEx: '🐘 Elephant (פִּיל)', wrong: ['a', 'c', 'o'] },
  { cap: 'F', low: 'f', hebSound: 'אֶף (F)', wordEx: '🐟 Fish (דָּג)', wrong: ['t', 'j', 'l'] },
  { cap: 'G', low: 'g', hebSound: 'ג׳ִי / גְּ (G)', wordEx: '🥅 Goal (שַׁעַר)', wrong: ['q', 'j', 'y'] },
  { cap: 'H', low: 'h', hebSound: 'אֵייץ׳ (H)', wordEx: '👋 Hello (שָׁלוֹם)', wrong: ['n', 'b', 'k'] },
  { cap: 'M', low: 'm', hebSound: 'אֶם (M)', wordEx: '👑 Madrid (מַדְרִיד)', wrong: ['w', 'n', 'u'] },
  { cap: 'N', low: 'n', hebSound: 'אֶן (N)', wordEx: '🥅 Net (רֶשֶׁת)', wrong: ['m', 'u', 'h'] },
  { cap: 'R', low: 'r', hebSound: 'אָר (R)', wordEx: '🏃 Run (לָרוּץ)', wrong: ['p', 'n', 'v'] },
  { cap: 'S', low: 's', hebSound: 'אֶס (S)', wordEx: '☀️ Sun (שֶׁמֶשׁ)', wrong: ['z', 'c', 'e'] },
  { cap: 'T', low: 't', hebSound: 'טִי (T)', wordEx: '🏟️ Teddy (טֶדִי)', wrong: ['f', 'l', 'i'] },
  { cap: 'Y', low: 'y', hebSound: 'וַואי (Y)', wordEx: '💛 Yellow (צָהֹב)', wrong: ['v', 'u', 'g'] }
];

const ENGLISH_PHONICS = [
  { word: 'Ball', hebPhonetic: 'בּוֹל', hebrew: 'כַּדּוּר ⚽', letter: 'B (בְּ)', wrong: ['D (דְּ)', 'P (פְּ)', 'T (טְ)'] },
  { word: 'Goal', hebPhonetic: 'גּוֹל', hebrew: 'שַׁעַר 🥅', letter: 'G (גְּ)', wrong: ['C (קְ)', 'J (ג׳)', 'K (קְ)'] },
  { word: 'Lion', hebPhonetic: 'לַאיְוֹן', hebrew: 'אַרְיֵה 🦁', letter: 'L (לְ)', wrong: ['R (רְ)', 'M (מְ)', 'N (נְ)'] },
  { word: 'Sun', hebPhonetic: 'סַאן', hebrew: 'שֶׁמֶשׁ ☀️', letter: 'S (סְ)', wrong: ['C (קְ)', 'Z (זְ)', 'X (אֶקְס)'] },
  { word: 'Dog', hebPhonetic: 'דּוֹג', hebrew: 'כֶּלֶב 🐶', letter: 'D (דְּ)', wrong: ['B (בְּ)', 'P (פְּ)', 'T (טְ)'] },
  { word: 'Cat', hebPhonetic: 'קָאט', hebrew: 'חָתוּל 🐱', letter: 'C (קְ)', wrong: ['S (סְ)', 'M (מְ)', 'G (גְּ)'] },
  { word: 'King', hebPhonetic: 'קִינְג', hebrew: 'מֶלֶךְ 👑', letter: 'K (קְ)', wrong: ['S (סְ)', 'G (גְּ)', 'B (בְּ)'] },
  { word: 'Apple', hebPhonetic: 'אָפֶּל', hebrew: 'תַּפּוּחַ 🍎', letter: 'A (אַ)', wrong: ['E (אֶ)', 'O (אוֹ)', 'I (אִי)'] },
  { word: 'Fish', hebPhonetic: 'פִישׁ', hebrew: 'דָּג 🐟', letter: 'F (פְ)', wrong: ['V (וְ)', 'P (פְּ)', 'T (טְ)'] },
  { word: 'Run', hebPhonetic: 'רַאן', hebrew: 'לָרוּץ 🏃', letter: 'R (רְ)', wrong: ['P (פְּ)', 'B (בְּ)', 'W (וְ)'] }
];

const ENGLISH_NUMBERS = [
  { num: 1, word: 'One', hebPhonetic: 'וַאן (One)', wrong: ['טְוּ (Two)', 'ת׳רִי (Three)', 'פוֹר (Four)'] },
  { num: 2, word: 'Two', hebPhonetic: 'טְוּ (Two)', wrong: ['וַאן (One)', 'ת׳רִי (Three)', 'פַייב (Five)'] },
  { num: 3, word: 'Three', hebPhonetic: 'ת׳רִי (Three)', wrong: ['טְוּ (Two)', 'פוֹר (Four)', 'טֶן (Ten)'] },
  { num: 4, word: 'Four', hebPhonetic: 'פוֹר (Four)', wrong: ['פַייב (Five)', 'סִיקְס (Six)', 'וַאן (One)'] },
  { num: 5, word: 'Five', hebPhonetic: 'פַייב (Five)', wrong: ['פוֹר (Four)', 'סִיקְס (Six)', 'סֶבֶן (Seven)'] },
  { num: 6, word: 'Six', hebPhonetic: 'סִיקְס (Six)', wrong: ['סֶבֶן (Seven)', 'פַייב (Five)', 'אֵייט (Eight)'] },
  { num: 7, word: 'Seven', hebPhonetic: 'סֶבֶן (Seven)', wrong: ['סִיקְס (Six)', 'אֵייט (Eight)', 'נַיין (Nine)'] },
  { num: 8, word: 'Eight', hebPhonetic: 'אֵייט (Eight)', wrong: ['סֶבֶן (Seven)', 'נַיין (Nine)', 'טֶן (Ten)'] },
  { num: 9, word: 'Nine', hebPhonetic: 'נַיין (Nine)', wrong: ['אֵייט (Eight)', 'טֶן (Ten)', 'סִיקְס (Six)'] },
  { num: 10, word: 'Ten', hebPhonetic: 'טֶן (Ten)', wrong: ['סֶבֶן (Seven)', 'אֵייט (Eight)', 'פַייב (Five)'] }
];

const ENGLISH_COLORS = [
  { color: 'Yellow', hebPhonetic: 'יֶלוֹ', heb: '💛 צָהֹב', note: 'הַצֶּבַע הָאֲהוּב שֶׁל בֵּיתָ"ר יְרוּשָׁלַיִם!', wrong: ['❤️ אָדֹם', '💙 כָּחֹל', '💚 יָרֹק'] },
  { color: 'White', hebPhonetic: 'וַואייט', heb: '🤍 לָבָן', note: 'הַצֶּבַע הָאַגָּדִי שֶׁל רֵיאָל מַדְרִיד!', wrong: ['🖤 שָׁחוֹר', '💜 סָגֹל', '🧡 כָּתֹם'] },
  { color: 'Black', hebPhonetic: 'בְּלָאק', heb: '🖤 שָׁחוֹר', note: 'הַצֶּבַע שֶׁל בֵּיתָ"ר יַחַד עִם צָהֹב!', wrong: ['💙 כָּחֹל', '💚 יָרֹק', '❤️ אָדֹם'] },
  { color: 'Green', hebPhonetic: 'גְּרִין', heb: '🌱 יָרוֹק', note: 'הַצֶּבַע שֶׁל דֶּשֶׁא הַמִּגְרָשׁ!', wrong: ['💛 צָהֹב', '💙 כָּחֹל', '❤️ אָדֹם'] },
  { color: 'Blue', hebPhonetic: 'בְּלוּ', heb: '💙 כָּחֹל', note: 'צֶבַע הַשָּׁמַיִם וְהַיָּם!', wrong: ['❤️ אָדֹם', '💚 יָרֹק', '💛 צָהֹב'] },
  { color: 'Red', hebPhonetic: 'רֶד', heb: '❤️ אָדֹם', note: 'הַצֶּבַע שֶׁל כַּרְטִיס אָדֹם!', wrong: ['💙 כָּחֹל', '💛 צָהֹב', '💚 יָרֹק'] },
  { color: 'Orange', hebPhonetic: 'אוֹרֶנְג׳', heb: '🧡 כָּתֹם', note: 'הַצֶּבַע שֶׁל תַּפּוּז!', wrong: ['💜 סָגֹל', '💚 יָרֹק', '💙 כָּחֹל'] }
];

const ENGLISH_SOCCER_WORDS = [
  { eng: 'Ball', hebPhonetic: 'בּוֹל (Ball)', heb: '⚽ כַּדּוּר', wrongHeb: ['🥅 שַׁעַר', '🏆 אַלּוּף', '👟 נַעֲלַיִם'] },
  { eng: 'Goal', hebPhonetic: 'גּוֹל (Goal)', heb: '🥅 שַׁעַר', wrongHeb: ['⚽ כַּדּוּר', '👥 קְבוּצָה', '🏃 לָרוּץ'] },
  { eng: 'Champion', hebPhonetic: 'צ׳אמְפְּיוֹן (Champion)', heb: '🏆 אַלּוּף', wrongHeb: ['👟 נַעֲלַיִם', '⚽ כַּדּוּר', '🏟️ אִצְטַדְיוֹן'] },
  { eng: 'Team', hebPhonetic: 'טִים (Team)', heb: '👥 קְבוּצָה', wrongHeb: ['🥅 שַׁעַר', '🏆 אַלּוּף', '⚡ מָהִיר'] },
  { eng: 'Stadium', hebPhonetic: 'סְטֵיידְיוּם (Stadium)', heb: '🏟️ אִצְטַדְיוֹן (כְּמוֹ טֶדִי!)', wrongHeb: ['⚽ כַּדּוּר', '👟 נַעֲלַיִם', '🥇 לְנַצֵּחַ'] },
  { eng: 'Shoes', hebPhonetic: 'שׁוּז (Shoes)', heb: '👟 נַעֲלֵי כַּדּוּרֶגֶל', wrongHeb: ['🏟️ אִצְטַדְיוֹן', '🥅 שַׁעַר', '👥 קְבוּצָה'] },
  { eng: 'Win', hebPhonetic: 'וִין (Win)', heb: '🥇 לְנַצֵּחַ!', wrongHeb: ['👟 נַעֲלַיִם', '🏟️ אִצְטַדְיוֹן', '⚽ כַּדּוּר'] },
  { eng: 'Run', hebPhonetic: 'רַאן (Run)', heb: '🏃 לָרוּץ מָהֵר', wrongHeb: ['🥅 שַׁעַר', '🏆 אַלּוּף', '👥 קְבוּצָה'] },
  { eng: 'Kick', hebPhonetic: 'קִיק (Kick)', heb: '🦵⚽ לִבְעֹט בַּכַּדּוּר', wrongHeb: ['🏟️ אִצְטַדְיוֹן', '👥 קְבוּצָה', '👟 נַעֲלַיִם'] },
  { eng: 'Player', hebPhonetic: 'פְּלֵייאֶר (Player)', heb: '🌟 שַׂחְקָן כַּדּוּרֶגֶל', wrongHeb: ['⚽ כַּדּוּר', '🥅 שַׁעַר', '🏟️ אִצְטַדְיוֹן'] },
  { eng: 'Fast', hebPhonetic: 'פָאסְט (Fast)', heb: '⚡ מָהִיר (כְּמוֹ וִינִיסְיוּס!)', wrongHeb: ['👟 נַעֲלַיִם', '👥 קְבוּצָה', '🥅 שַׁעַר'] }
];

const ENGLISH_DAILY_WORDS = [
  { eng: 'Hello', hebPhonetic: 'הֶלוֹ', heb: '👋 שָׁלוֹם', wrongHeb: ['💧 מַיִם', '🍕 פִּיצָה', '🐶 כֶּלֶב'] },
  { eng: 'Goodbye', hebPhonetic: 'גּוּד-בַּיי', heb: '👋 לְהִתְרָאוֹת!', wrongHeb: ['🏫 בֵּית סֵפֶר', '🐱 חָתוּל', '🦁 אַרְיֵה'] },
  { eng: 'Thank you', hebPhonetic: 'ת׳אנק יוּ', heb: '🙏 תּוֹדָה רַבָּה', wrongHeb: ['🍕 פִּיצָה', '🐶 כֶּלֶב', '💧 מַיִם'] },
  { eng: 'School', hebPhonetic: 'סְקוּל', heb: '🏫 בֵּית סֵפֶר', wrongHeb: ['🦁 אַרְיֵה', '🍕 פִּיצָה', '🙏 תּוֹדָה רַבָּה'] },
  { eng: 'Friend', hebPhonetic: 'פְרֶנְד', heb: '👦 חָבֵר טוֹב', wrongHeb: ['💧 מַיִם', '🐱 חָתוּל', '🏫 בֵּית סֵפֶר'] },
  { eng: 'Family', hebPhonetic: 'פָאמִילִי', heb: '👨‍👩‍👦 מִשְׁפָּחָה', wrongHeb: ['🍕 פִּיצָה', '🐶 כֶּלֶב', '🏫 בֵּית סֵפֶר'] },
  { eng: 'Water', hebPhonetic: 'ווֹטֶר', heb: '💧 מַיִם', wrongHeb: ['🦁 אַרְיֵה', '👦 חָבֵר טוֹב', '👋 שָׁלוֹם'] },
  { eng: 'Pizza', hebPhonetic: 'פִּיצָה', heb: '🍕 פִּיצָה', wrongHeb: ['💧 מַיִם', '🐶 כֶּלֶב', '🏫 בֵּית סֵפֶר'] },
  { eng: 'Lion', hebPhonetic: 'לַאיְוֹן', heb: '🦁 אַרְיֵה (בֵּיתָ"ר!)', wrongHeb: ['🐱 חָתוּל', '💧 מַיִם', '🍕 פִּיצָה'] },
  { eng: 'Dog', hebPhonetic: 'דּוֹג', heb: '🐶 כֶּלֶב', wrongHeb: ['🦁 אַרְיֵה', '🏫 בֵּית סֵפֶר', '💧 מַיִם'] },
  { eng: 'Cat', hebPhonetic: 'קָאט', heb: '🐱 חָתוּל', wrongHeb: ['🐶 כֶּלֶב', '🍕 פִּיצָה', '👦 חָבֵר טוֹב'] }
];

function genEnglishABC() {
  const isMatch = Math.random() > 0.45;
  if (isMatch) {
    const item = ENGLISH_ABC_MATCH[randInt(0, ENGLISH_ABC_MATCH.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: `🔤 אוֹתִיּוֹת בְּאַנְגְּלִית: הָאוֹת הַגְּדוֹלָה הִיא <strong>${item.cap}</strong> (${item.hebSound}). מַהִי הָאוֹת הַקְּטַנָּה שֶׁלָּהּ?`,
      ttsText: `עילי, האות הגדולה היא ${item.hebSound}, כמו במילה ${item.wordEx}. מצא את האות הקטנה שלה:`,
      englishSpeechWord: item.cap,
      stimulusHtml: `
        <div style="font-size:3rem;font-weight:900;color:#0a84ff;">${item.cap} <span style="font-size:1.5rem;color:#64748b;">➔ ?</span></div>
        <div style="font-size:1.1rem;font-weight:800;color:#1e293b;margin-top:4px;">צְלִיל: <strong>${item.hebSound}</strong> • דֻּגְמָה: <strong>${item.wordEx}</strong></div>
      `,
      rtlStimulus: false,
      options: shuffle([item.low, ...item.wrong]),
      correctAnswers: [item.low],
      hint: `האות הגדולה ${item.cap} נכתבת בקטן ככה: ${item.low}!`
    };
  } else {
    // Phonics beginning letter with Hebrew phonetic guide!
    const p = ENGLISH_PHONICS[randInt(0, ENGLISH_PHONICS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🎵 צְלִיל פּוֹתֵחַ בְּאַנְגְּלִית: בְּאֵיזוֹ אוֹת מַתְחִילָה הַמִּלָּה?',
      ttsText: `עילי, המילה ${p.hebrew} באנגלית היא ${p.hebPhonetic}. באיזו אות היא מתחילה?`,
      englishSpeechWord: p.word,
      stimulusHtml: `
        <div style="font-size:2.2rem;font-weight:900;color:#059669;">${p.word} <span style="font-size:1.25rem;color:#475569;">(${p.hebPhonetic})</span></div>
        <div style="font-size:1.25rem;font-weight:800;color:#1e293b;margin-top:6px;">פֵּרוּשׁ: <strong>${p.hebrew}</strong></div>
      `,
      rtlStimulus: false,
      options: shuffle([p.letter, ...p.wrong]),
      correctAnswers: [p.letter],
      hint: `המילה ${p.word} (${p.hebPhonetic}) מתחילה בצליל ובאות ${p.letter}!`
    };
  }
}

function genEnglishWords() {
  const mode = randInt(1, 3);
  if (mode === 1) {
    // Numbers - Always show Hebrew phonetic + digit options so Ilay never has to read raw English spelling alone!
    const numObj = ENGLISH_NUMBERS[randInt(0, ENGLISH_NUMBERS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🔟 מִסְפָּרִים בְּאַנְגְּלִית: הַקְשֵׁב לַמִּסְפָּר וּבְחַר אוֹתוֹ!',
      ttsText: `עילי, איזה מספר זה באנגלית: ${numObj.hebPhonetic.split(' ')[0]}?`,
      englishSpeechWord: numObj.word,
      stimulusHtml: `
        <div style="font-size:2.4rem;font-weight:900;color:#0a84ff;">🔊 ${numObj.word.toUpperCase()}</div>
        <div style="font-size:1.2rem;font-weight:800;color:#334155;margin-top:4px;">קוֹרְאִים בְּעִבְרִית: <strong>${numObj.hebPhonetic}</strong></div>
      `,
      rtlStimulus: false,
      options: shuffle([String(numObj.num), ...numObj.wrong.map(w => {
        const found = ENGLISH_NUMBERS.find(n => n.hebPhonetic === w);
        return found ? String(found.num) : '10';
      })]),
      correctAnswers: [String(numObj.num)],
      hint: `${numObj.hebPhonetic} באנגלית זה המספר ${numObj.num}!`
    };
  } else if (mode === 2) {
    // Colors
    const col = ENGLISH_COLORS[randInt(0, ENGLISH_COLORS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🎨 צְבָעִים בְּאַנְגְּלִית: מַהוּ הַצֶּבַע?',
      ttsText: `עילי, איזה צבע זה באנגלית: ${col.hebPhonetic}? ${col.note}`,
      englishSpeechWord: col.color,
      stimulusHtml: `
        <div style="font-size:2.2rem;font-weight:900;color:#d97706;">🔊 ${col.color.toUpperCase()} (${col.hebPhonetic})</div>
        <div style="font-size:1.05rem;font-weight:800;color:#475569;margin-top:6px;">💡 ${col.note}</div>
      `,
      rtlStimulus: false,
      options: shuffle([col.heb, ...col.wrong]),
      correctAnswers: [col.heb],
      hint: `${col.color} (${col.hebPhonetic}) פירושו ${col.heb}!`
    };
  } else {
    // Animals / daily
    const d = ENGLISH_DAILY_WORDS[randInt(0, ENGLISH_DAILY_WORDS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🌍 מִילִים בְּאַנְגְּלִית: הַקְשֵׁב לַמִּלָּה וּבְחַר אֶת הַפֵּרוּשׁ בְּעִבְרִית!',
      ttsText: `עילי, מה הפירוש בעברית של המילה באנגלית: ${d.hebPhonetic}?`,
      englishSpeechWord: d.eng,
      stimulusHtml: `
        <div style="font-size:2.3rem;font-weight:900;color:#7c3aed;">🔊 ${d.eng}</div>
        <div style="font-size:1.15rem;font-weight:800;color:#334155;margin-top:4px;">קוֹרְאִים: <strong>${d.hebPhonetic}</strong> — מָה הַפֵּרוּשׁ?</div>
      `,
      rtlStimulus: false,
      options: shuffle([d.heb, ...d.wrongHeb]),
      correctAnswers: [d.heb],
      hint: `${d.eng} (${d.hebPhonetic}) פירושו ${d.heb}!`
    };
  }
}

function genEnglishSoccer() {
  const item = ENGLISH_SOCCER_WORDS[randInt(0, ENGLISH_SOCCER_WORDS.length - 1)];
  const toHeb = Math.random() > 0.35;
  if (toHeb) {
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '⚽ אַנְגְּלִית שֶׁל כַּדּוּרֶגֶל: מָה הַפֵּרוּשׁ בְּעִבְרִית?',
      ttsText: `עילי, מה הפירוש בעולם הכדורגל של המילה ${item.hebPhonetic.split(' ')[0]}?`,
      englishSpeechWord: item.eng,
      stimulusHtml: `
        <div style="font-size:2.4rem;font-weight:900;color:#0a84ff;">🔊 ${item.eng.toUpperCase()}</div>
        <div style="font-size:1.15rem;font-weight:800;color:#334155;margin-top:6px;">קוֹרְאִים בְּעִבְרִית: <strong>${item.hebPhonetic}</strong></div>
      `,
      rtlStimulus: false,
      options: shuffle([item.heb, ...item.wrongHeb]),
      correctAnswers: [item.heb],
      hint: `${item.hebPhonetic} פירושו ${item.heb}!`
    };
  } else {
    const distractors = shuffle(ENGLISH_SOCCER_WORDS.filter(x => x.eng !== item.eng)).slice(0, 3);
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '⚽ אַנְגְּלִית שֶׁל כַּדּוּרֶגֶל: אֵיךְ אוֹמְרִים בְּאַנְגְּלִית?',
      ttsText: `עילי, איך אומרים ${item.heb} באנגלית? רמז: תקשיב למילה באנגלית:`,
      englishSpeechWord: item.eng,
      stimulusHtml: `<div style="font-size:2.2rem;font-weight:900;color:#059669;">${item.heb}</div>`,
      rtlStimulus: true,
      options: shuffle([item.hebPhonetic, ...distractors.map(d => d.hebPhonetic)]),
      correctAnswers: [item.hebPhonetic],
      hint: `${item.heb} באנגלית אומרים ${item.hebPhonetic}!`
    };
  }
}

function genEnglishStarter() {
  const pick = randInt(1, 4);
  if (pick === 1) return genEnglishFC27();
  if (pick === 2) return genEnglishABC();
  if (pick === 3) return genEnglishWords();
  return genEnglishSoccer();
}

// ==================== EA SPORTS FC 27 VISUAL SCREENSHOTS, HOW-TO-START, COMMENTATOR & VIDEO ENGINE ====================

const FC27_VOCAB_BANK = [
  // --- SCREEN 1: MAIN MENU & KICK OFF ---
  {
    screen: 'main_menu',
    key: 'KICK OFF',
    eng: 'Kick Off',
    heb: '⚽ מִשְׂחַק מָהִיר (בְּעִיטַת פְּתִיחָה)',
    example: '📌 דוגמא: הדלקת את הפלייסטיישן ובא לך לשחק מיד משחק של בית"ר נגד ריאל? לוחצים על KICK OFF!',
    wrong: ['⚙️ הַגְדָּרוֹת הַמִּשְׂחָק', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎥 הִלּוּךְ חוֹזֵר'],
    hint: 'בתפריט הראשי של FC 27 לוחצים על KICK OFF כדי להתחיל מיד משחק כדורגל!'
  },
  {
    screen: 'main_menu',
    key: 'CLASSIC MATCH',
    eng: 'Classic Match',
    heb: '🏟️ מִשְׂחָק רָגִיל (90 דַּקּוֹת עִם כָּל הַחֻקִּים)',
    example: '📌 דוגמא: אחרי שלחצת KICK OFF, המשחק שואל איזה סוג משחק תרצה — בוחרים CLASSIC MATCH למשחק כדורגל רגיל!',
    wrong: ['⏸️ עֲצִירַת הַמִּשְׂחָק', '🔄 חִלּוּף שַׂחְקָנִים', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'Classic Match הוא משחק כדורגל קלאסי רגיל בין שתי קבוצות!'
  },
  {
    screen: 'main_menu',
    key: 'CUP FINALS',
    eng: 'Cup Finals',
    heb: '🏆 גְּמַר גָּבִיעַ (לְמָשָׁל גְּמַר לִיגַת הָאַלּוּפוֹת עִם הֲנָפַת גָּבִיעַ!)',
    example: '📌 דוגמא: רוצה שאמבפה או שועה יניפו גביע עם זיקוקים בסוף המשחק? בוחרים CUP FINALS אחרי Kick Off!',
    wrong: ['🚩 נִבְדָּל בַּמִּגְרָשׁ', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🦵 גְּלִיץ׳ עַל הַדֶּשֶׁא'],
    hint: 'Cup = גביע, Finals = גמר. משחק חגיגי שבו המנצח מניף גביע!'
  },
  {
    screen: 'main_menu',
    key: 'ULTIMATE TEAM',
    eng: 'Ultimate Team',
    heb: '🃏 קְבוּצַת הַחֲלוֹמוֹת (אִסּוּף קְלָפִים וּפְתִיחַת חֲבִילוֹת)',
    example: '📌 דוגמא: רוצים לפתוח חבילות קלפים ולשים את מסי, אמבפה ורונאלדו באותה קבוצה? נכנסים ל-ULTIMATE TEAM!',
    wrong: ['🚩 נִבְדָּל בַּמִּגְרָשׁ', '🔄 חִלּוּף שַׂחְקָנִים', '🦵 תִּיקוּל גְּלִישָׁה (גְּלִיץ׳)'],
    hint: 'Ultimate Team (או FUT) הוא המצב שבו פותחים חבילות ובונים קבוצה מקלפי כוכבים!'
  },
  {
    screen: 'main_menu',
    key: 'CAREER MODE',
    eng: 'Career Mode',
    heb: '👔 מַצַּב קַרְיֵירָה (לִהְיוֹת מְאַמֵּן אוֹ שַׂחְקָן עוֹנָה שְׁלֵמָה)',
    example: '📌 דוגמא: ב-CAREER MODE אתה יכול ליצור שחקן בשם ILAY או לאמן קבוצה עונה שלמה ולקנות שחקנים!',
    wrong: ['🥅 דּוּ-קְרַב פֶּנְדָּלִים', '💨 רִיצָה מְהִירָה (סְפְּרִינְט)', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'ב-Career Mode מנהלים קריירה שלמה של שחקן או מאמן לאורך עונות!'
  },
  {
    screen: 'main_menu',
    key: 'SETTINGS',
    eng: 'Settings',
    heb: '⚙️ הַגְדָּרוֹת (שַׁלָּט, רָמַת קֹשִׁי וּצְלִילִים)',
    example: '📌 דוגמא: אם המשחק קשה מדי או רוצים לשנות את אורך המחצית מ-6 דקות ל-4 דקות — נכנסים ל-SETTINGS!',
    wrong: ['⚽ בְּעִיטַת פְּתִיחָה', '🎯 עוצְמַת בְּעִיטָה לַשַּׁעַר', '🏃‍♂️ רִיצָה מְהִירָה'],
    hint: 'Settings הן הגדרות המשחק (עם סמל גלגל השיניים ⚙️)!'
  },

  // --- SCREEN 2: PRE-MATCH SETUP (HOW TO START A MATCH!) ---
  {
    screen: 'pre_match',
    key: 'SELECT SIDE',
    eng: 'Select Side',
    heb: '🎮 בְּחַר צַד (הֲזָזַת הַשַּׁלָּט שְׂמֹאלָה אוֹ יָמִינָה לַקְּבוּצָה שֶׁלְּךָ)',
    example: '📌 דוגמא: השלט מופיע באמצע המסך. מזיזים ג׳ויסטיק שמאלה ל-HOME או ימינה ל-AWAY. אם אבא משחק איתך — כל אחד זז לצד אחר!',
    wrong: ['🎁 פְּתַח חֲבִילַת קְלָפִים', '⏱️ תּוֹסֶפֶת זְמַן / הַאֲרָכָה', '🛡️ הֲגָנָה וַחֲטִיפָה'],
    hint: 'לפני המשחק מזיזים את השלט ב-SELECT SIDE כדי לבחור באיזו קבוצה משחקים (בית או חוץ)!'
  },
  {
    screen: 'pre_match',
    key: 'HOME / AWAY',
    eng: 'Home / Away',
    heb: '🏟️ קְבוּצַת בַּיִת (שְׂמֹאל) מוּל קְבוּצַת חוּץ (יָמִין)',
    example: '📌 דוגמא: הקבוצה ב-HOME מארחת באצטדיון שלה (למשל בית"ר בטדי), והקבוצה ב-AWAY מתארחת!',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎥 הִלּוּךְ חוֹזֵר', '🚩 עֲבֵירַת נִבְדָּל'],
    hint: 'Home = בית (צד שמאל במסך), Away = חוץ (צד ימין במסך)!'
  },
  {
    screen: 'pre_match',
    key: 'SELECT TEAM',
    eng: 'Select Team',
    heb: '🦁👑 בְּחַר קְבוּצָה וְלִיגָה (לְמָשָׁל רֵיאָל מַדְרִיד אוֹ בֵּיתָ"ר)',
    example: '📌 דוגמא: לריאל מדריד בוחרים ספרד (LALIGA), ולבית"ר או קבוצות מיוחדות בוחרים REST OF WORLD (שאר העולם)!',
    wrong: ['⏸️ עֲצֹר אֶת הַמִּשְׂחָק', '🥅 דּוּ-קְרַב פֶּנְדָּלִים', '💰 שׁוּק הַהַעֲבָרוֹת'],
    hint: 'במסך Select Team בוחרים את המדינה, הליגה והקבוצה שלך!'
  },
  {
    screen: 'pre_match',
    key: 'SELECT KIT',
    eng: 'Select Kit',
    heb: '👕 בְּחִירַת תִּלְבֹּשֶׁת (חֻלְצַת בַּיִת אוֹ חֻלְצַת חוּץ)',
    example: '📌 דוגמא: ודא שלשתי הקבוצות אין אותו צבע חולצה! לריאל לבן (White) ולבית"ר צהוב-שחור (Yellow) כדי שלא תתבלבל במגרש!',
    wrong: ['🔄 חִלּוּף שַׂחְקָנִים', '📐 מַעֲרָךְ הַקְּבוּצָה', '🚩 שְׁרִיקָה לְנִבְדָּל'],
    hint: 'Kit = תלבושת/מדים של הקבוצה. בוחרים חולצה ולוחצים אישור!'
  },
  {
    screen: 'pre_match',
    key: 'PLAY MATCH',
    eng: 'Play Match',
    heb: '▶️ הַתְחֵל אֶת הַמִּשְׂחָק עַכְשָׁיו (עֲלִיָּה לַדֶּשֶׁא!)',
    example: '📌 דוגמא: אחרי שבחרת צד, קבוצה וחולצה — לוחצים על הכפתור הגדול PLAY MATCH והשחקנים עולים למגרש!',
    wrong: ['⏸️ עֲצֹר אֶת הַמִּשְׂחָק', '💰 שׁוּק הַהַעֲבָרוֹת', '🧪 כִּימְיָה בֵּין שַׂחְקָנִים'],
    hint: 'Play = שחק, Match = משחק. לוחצים על PLAY MATCH כדי לעלות לדשא!'
  },
  {
    screen: 'pre_match',
    key: 'DIFFICULTY: SEMI-PRO',
    eng: 'Beginner / Semi-Pro',
    heb: '🎚️ רָמַת קֹשִׁי: מַתְחִיל (Beginner) עַד חֲצִי-מִקְצוֹעָן (Semi-Pro)',
    example: '📌 דוגמא: אם המחשב בפיפא חזק מדי או קל מדי, ב-GAME SETTINGS בוחרים Beginner (קל), Amateur (בינוני) או Semi-Pro!',
    wrong: ['🎥 הִלּוּךְ חוֹזֵר', '🏳️ הֶפְסֵד טֶכְנִי', '🎁 פְּתִיחַת חֲבִילָה'],
    hint: 'Beginner = מתחיל (קל מאוד), Amateur = חובבן, Semi-Pro = חצי מקצוען!'
  },

  // --- SCREEN 3: PAUSE MENU & MATCH MANAGEMENT ---
  {
    screen: 'pause_menu',
    key: 'RESUME MATCH',
    eng: 'Resume Match',
    heb: '▶️ הַמְשֵׁךְ בַּמִּשְׂחָק (חֲזָרָה מִיָּדִית לַמִּגְרָשׁ)',
    example: '📌 דוגמא: לחצת בטעות על כפתור Options/Pause באמצע התקפה? לחץ על הכפתור העליון RESUME MATCH כדי לחזור מיד לשחק!',
    wrong: ['🏳️ פְּרֹשׁ מֵהַמִּשְׂחָק (הֶפְסֵד)', '🎥 הִלּוּךְ חוֹזֵר שֶׁל הַשַּׁעַר', '🎁 פְּתַח חֲבִילַת קְלָפִים'],
    hint: 'כשעוצרים את המשחק (Pause), הכפתור הראשון RESUME MATCH מחזיר אותך להמשיך לשחק!'
  },
  {
    screen: 'pause_menu',
    key: 'TEAM MANAGEMENT',
    eng: 'Team Management',
    heb: '📋 נִיהוּל קְבוּצָה (הֶרְכֵּב, מַעֲרָךְ וְחִלּוּפִים)',
    example: '📌 דוגמא: בדקה ה-70 השחקנים שלך עייפים (פס כוח אדום)? נכנסים ל-TEAM MANAGEMENT ומכניסים שחקן מהיר מהספסל!',
    wrong: ['🛒 חֲנוּת הַחֲבִילוֹת', '🚩 שְׁרִיקָה לְנִבְדָּל', '⚡ מְהִירוּת רִיצָה שֶׁל שַׂחְקָן'],
    hint: 'נכנסים ל-Team Management כדי לעשות חילופים ולסדר את ההרכב של בית"ר או ריאל!'
  },
  {
    screen: 'pause_menu',
    key: 'SUBSTITUTION',
    eng: 'Substitution',
    heb: '🔄 חִלּוּף שַׂחְקָנִים (הַכְנָסַת שַׂחְקָן רַעֲנָן מֵהַסַּפְסָל)',
    example: '📌 דוגמא: כשמופיע סמל חצים ירוק-אדום וכתוב SUBSTITUTION — שחקן עייף יוצא ושחקן רענן נכנס במקומו!',
    wrong: ['🥅 בְּעִיטַת פֶּנְדֶּל', '👑 מַצַּב קַרְיֵירָה', '💰 קְנִיַּת שַׂחְקָן בַּשּׁוּק'],
    hint: 'כששחקן מתעייף, עושים Substitution — חילוף שחקנים!'
  },
  {
    screen: 'pause_menu',
    key: 'INSTANT REPLAY',
    eng: 'Instant Replay',
    heb: '🎥 הִלּוּךְ חוֹזֵר (לִרְאוֹת שׁוּב אֶת הַגּוֹל מִכָּל הַזָּוִיּוֹת)',
    example: '📌 דוגמא: הבקעת שער במספרת לחיבורים ורוצה להראות לאבא? עוצרים ולוחצים INSTANT REPLAY כדי להריץ אחורה וקדימה!',
    wrong: ['▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '📐 מַעֲרָךְ הַקְּבוּצָה (4-3-3)', '🛡️ צִיּוּן הֲגָנָה בַּקְּלָף'],
    hint: 'הבקעת שער מדהים ב-FC 27? לוחצים על Instant Replay כדי לראות הילוך חוזר!'
  },
  {
    screen: 'pause_menu',
    key: 'FORMATION',
    eng: 'Formation',
    heb: '📐 מַעֲרָךְ הַשַּׂחְקָנִים עַל הַמִּגְרָשׁ (לְמָשָׁל 4-3-3 הַתְקָפִי)',
    example: '📌 דוגמא: ב-FORMATION בוחרים 4-3-3 אם רוצים 3 חלוצים מקדימה (אמבפה, ויניסיוס ורודריגו יחד בהתקפה)!',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎁 פְּתִיחַת חֲבִילַת זָהָב', '🚩 עֲבֵירַת נִבְדָּל'],
    hint: 'Formation הוא המבנה והמערך שבו השחקנים עומדים על הדשא (כמו 4-3-3 או 4-4-2)!'
  },
  {
    screen: 'pause_menu',
    key: 'FORFEIT MATCH',
    eng: 'Forfeit Match',
    heb: '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק (זְהִירוּת: זֶה הֶפְסֵד טֶכְנִי 3-0!)',
    example: '📌 דוגמא חשובה: לעולם אל תלחץ על FORFEIT MATCH אם אתה רוצה להמשיך לשחק! זה מסיים את המשחק בהפסד 3:0!',
    wrong: ['▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '🔄 בַּצַּע חִלּוּף שַׂחְקָנִים', '🎥 צְפֵה בְּהִלּוּךְ חוֹזֵר'],
    hint: 'זהירות! ב-FC 27 הכפתור התחתון FORFEIT MATCH אומר לפרוש ולוותר על המשחק!'
  },

  // --- SCREEN 4: END OF MATCH, EXTRA TIME & REMATCH ---
  {
    screen: 'end_match',
    key: 'REMATCH',
    eng: 'Rematch / Play Again',
    heb: '🔁 מִשְׂחָק חוֹזֵר מִיָּדִי עִם אוֹתָן קְבוּצוֹת!',
    example: '📌 דוגמא: נגמר המשחק ורוצה לשחק עוד משחק מיד בלי לבחור הכל מהתחלה? לוחצים על REMATCH (או PLAY AGAIN)!',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '⚙️ הַגְדָּרוֹת שַׁלָּט', '🚩 נִבְדָּל בַּמִּגְרָשׁ'],
    hint: 'בסיום המשחק לוחצים על REMATCH כדי להתחיל מיד משחק חוזר!'
  },
  {
    screen: 'end_match',
    key: 'EXTRA TIME',
    eng: 'Extra Time',
    heb: '⏱️ הַאֲרָכָה (30 דַּקּוֹת נוֹסָפוֹת כְּשֶׁיֵּשׁ תֵּיקוֹ בְּדַקָּה 90)',
    example: '📌 דוגמא: המשחק נגמר בתיקו 2-2 בדקה ה-90? המשחק שואל איך להכריע — בוחרים CLASSIC EXTRA TIME להארכה!',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '📋 נִיהוּל הֶרְכֵּב', '💰 שׁוּק הַהַעֲבָרוֹת'],
    hint: 'אם המשחק נגמר בתיקו, עוברים ל-Extra Time — הארכה!'
  },
  {
    screen: 'end_match',
    key: 'PENALTY SHOOTOUT',
    eng: 'Penalty Shootout',
    heb: '🥅 דּוּ-קְרַב בְּעִיטוֹת פֶּנְדָּלִים מַכְרִיעַ!',
    example: '📌 דוגמא: כשיש תיקו ורוצים ללכת ישר לבעיטות פנדלים מותחות — בוחרים PENALTY SHOOTOUT (או PENALTIES)!',
    wrong: ['🏃‍♂️ רִיצָה מְהִירָה', '🧪 כִּימְיָה בַּהֶרְכֵּב', '⚙️ הַגְדָּרוֹת שֵׁמַע'],
    hint: 'Penalty Shootout הוא דו-קרב פנדלים מותח על הניצחון!'
  },
  {
    screen: 'end_match',
    key: 'GOLDEN GOAL',
    eng: 'Golden Goal',
    heb: '🌟 שַׁעַר זָהָב (הַקְּבוּצָה הָרִאשׁוֹנָה שֶׁמַּבְקִיעָה מְנַצַּחַת מִיָּד!)',
    example: '📌 דוגמא: בתיקו אפשר לבחור GOLDEN GOAL — מי שמבקיע ראשון בהארכה מנצח את המשחק באותו רגע!',
    wrong: ['🚩 נִבְדָּל', '🔄 חִלּוּף שַׂחְקָנִים', '👕 בְּחִירַת חֻלְצָה'],
    hint: 'Golden Goal = שער זהב: הגול הראשון שנכנס מנצח מיד את המשחק!'
  },
  {
    screen: 'end_match',
    key: 'MATCH HIGHLIGHTS',
    eng: 'Match Highlights',
    heb: '🎬 תַּקְצִיר הַמִּשְׂחָק (סִרְטוֹן כָּל הַשְּׁעָרִים וְהַהַצָּלוֹת מֵהַמִּשְׂחָק)',
    example: '📌 דוגמא: בסוף המשחק רוצה לצפות בסרטון של כל הגולים שכבשת? לוחצים על MATCH HIGHLIGHTS!',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎮 בְּחִירַת שַׁלָּט', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'Match Highlights מציג את תקציר הרגעים הגדולים והשערים של המשחק!'
  },
  {
    screen: 'end_match',
    key: 'EXIT / ADVANCE',
    eng: 'Exit / Advance',
    heb: '🚪 סִיּוּם וִיצִיאָה חֲזָרָה לַתַּפְרִיט הָרָאשִׁי',
    example: '📌 דוגמא: סיימת את המשחק ורוצה לבחור קבוצות חדשות? לוחצים על ADVANCE או EXIT TO MAIN MENU!',
    wrong: ['🥅 בְּעִיטַת פֶּנְדֶּל', '🏃‍♂️ רִיצָה מְהִירָה', '📐 מַעֲרָךְ 4-3-3'],
    hint: 'Advance / Exit מוציא אותך מסך הסיכום חזרה לתפריט!'
  },

  // --- SCREEN 5: ULTIMATE TEAM PLAYER CARD & PACKS ---
  {
    screen: 'fut_card',
    key: 'PAC',
    eng: 'Pace (PAC)',
    heb: '⚡ מְהִירוּת רִיצָה (כַּמָּה מַהֵר הַשַּׂחְקָן דּוֹהֵר עַל הַדֶּשֶׁא)',
    example: '📌 דוגמא: לאמבפה ולויניסיוס יש PAC גבוה מאוד (97–99), ולכן אף מגן לא מצליח להשיג אותם בריצה!',
    wrong: ['🛡️ הֲגָנָה וַחֲטִיפַת כַּדּוּר', '🎯 דִּיּוּק בִּבְעִיטוֹת לַשַּׁעַר', '💪 כֹּחַ פִּיזִי'],
    hint: 'על הקלף של אמבפה כתוב 99 PAC — זה קיצור של Pace, כלומר מהירות אדירה!'
  },
  {
    screen: 'fut_card',
    key: 'SHO',
    eng: 'Shooting (SHO)',
    heb: '🎯 בְּעִיטָה לַשַּׁעַר (עוצְמָה וְדִיּוּק בְּהַבְקָעַת גּוֹלִים)',
    example: '📌 דוגמא: שחקן עם SHO גבוה (מעל 90) יבעט פצצות לחיבורים גם מחוץ לרחבה!',
    wrong: ['⚡ מְהִירוּת רִיצָה', '👟 מְסִירוֹת לַחֲבֵרִים', '🛡️ הֲגָנָה בָּרְחָבָה'],
    hint: 'SHO בקלף של FC 27 הוא קיצור של Shooting — יכולת הבעיטה לשער!'
  },
  {
    screen: 'fut_card',
    key: 'PAS',
    eng: 'Passing (PAS)',
    heb: '👟 מְסִירוֹת (דִּיּוּק בִּמְסִירוֹת וּבִישּׁוּלִים כְּמוֹ יַרְדֵּן שׁוּעָה)',
    example: '📌 דוגמא: שחקן קישור כמו בלינגהאם או ירדן שועה מצטיין ב-PAS כדי לתת מסירות עומק מדויקות לחלוץ!',
    wrong: ['💪 כֹּחַ פִּיזִי', '🎯 בְּעִיטָה לַשַּׁעַר', '🧤 שׁוֹעֵר בַּשַּׁעַר'],
    hint: 'PAS הוא קיצור של Passing — ציון המסירות של השחקן בקלף!'
  },
  {
    screen: 'fut_card',
    key: 'DRI',
    eng: 'Dribbling (DRI)',
    heb: '🕺 כִּדְרוּר וּשְׁלִיטָה בַּכַּדּוּר (לַעֲבֹר שַׂחְקָנִים בְּדְרִיבֶּל)',
    example: '📌 דוגמא: כשלשחקן יש DRI גבוה, הכדור "נדבק" לו לרגל וקל לעשות איתו תרגילים ולעבור שחקנים!',
    wrong: ['🛡️ הֲגָנָה וּבְלִימָה', '⏱️ הַאֲרָכָה בַּמִּשְׂחָק', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק'],
    hint: 'DRI הוא קיצור של Dribbling — דריבל ושליטה בכדור כמו ויניסיוס!'
  },
  {
    screen: 'fut_card',
    key: 'DEF',
    eng: 'Defending (DEF)',
    heb: '🛡️ הֲגָנָה (חֲטִיפַת כַּדּוּר וַעֲצִירַת הַתְקָפוֹת הַיָּרִיב)',
    example: '📌 דוגמא: לבלמים כמו רודיגר יש DEF גבוה כדי לחטוף כדורים מחלוצי היריב!',
    wrong: ['⚡ מְהִירוּת רִיצָה', '🎯 בְּעִיטָה לַשַּׁעַר', '🎁 פְּתִיחַת חֲבִילָה'],
    hint: 'DEF הוא קיצור של Defending — ציון ההגנה של בלמים ומגנים!'
  },
  {
    screen: 'fut_card',
    key: 'PHY',
    eng: 'Physical (PHY)',
    heb: '💪 פִּיזִיּוּת וְכֹשֶׁר גּוּפָנִי (כֹּחַ בְּמַאֲבָק עַל הַכַּדּוּר)',
    example: '📌 דוגמא: שחקן עם PHY גבוה דוחף כתף-אל-כתף ולא מתעייף מהר על המגרש!',
    wrong: ['👟 מְסִירוֹת קְצָרוֹת', '🎥 הִלּוּךְ חוֹזֵר', '🎮 בְּחִירַת שַׁלָּט'],
    hint: 'PHY הוא קיצור של Physical — כמה השחקן חזק פיזית ולא מתעייף!'
  },
  {
    screen: 'fut_card',
    key: 'OPEN PACK',
    eng: 'Open Pack',
    heb: '🎁 פְּתַח חֲבִילַת קְלָפִים חֲדָשָׁה!',
    example: '📌 דוגמא: לוחצים על OPEN PACK בחנות כדי לראות את האנימציה של השחקן שיוצא מהחבילה (Walkout)!',
    wrong: ['💰 מְכֹר שַׂחְקָן', '▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '🚩 נִבְדָּל'],
    hint: 'בחנות של Ultimate Team לוחצים על OPEN PACK כדי לפתוח חבילת קלפים עם זיקוקים!'
  },
  {
    screen: 'fut_card',
    key: 'TRANSFER MARKET',
    eng: 'Transfer Market',
    heb: '💰 שׁוּק הַהַעֲבָרוֹת (קְנִיָּה וּמְכִירָה שֶׁל קְלָפֵי שַׂחְקָנִים)',
    example: '📌 דוגמא: חסר לך חלוץ מהיר? נכנסים ל-TRANSFER MARKET וקונים קלף במטבעות שהרווחת!',
    wrong: ['⚽ מִשְׂחַק יְדִידוּת', '🔄 חִלּוּף שַׂחְקָן', '⚙️ הַגְדָּרוֹת שַׁלָּט'],
    hint: 'ב-Transfer Market מחפשים וקונים קלפים חדשים לקבוצה שלך!'
  },
  {
    screen: 'fut_card',
    key: 'CHEMISTRY',
    eng: 'Chemistry',
    heb: '🧪 כִּימְיָה וְחִיבּוּר בֵּין שַׂחְקָנֵי הַהֶרְכֵּב (עַד 33/33)',
    example: '📌 דוגמא: כששמים שני שחקנים מריאל מדריד או מאותה מדינה יחד, ה-CHEMISTRY עולה והם מוסרים טוב יותר!',
    wrong: ['🥅 בְּעִיטוֹת פֶּנְדָּלִים', '🎥 הִלּוּךְ חוֹזֵר', '🏳️ הֶפְסֵד טֶכְנִי'],
    hint: 'כששמים שחקנים מאותה ליגה או מדינה ב-FC 27, ה-Chemistry (כימיה) עולה והם משחקים טוב יותר!'
  },

  // --- SCREEN 6: ON THE PITCH & CONTROLLER HUD ---
  {
    screen: 'pitch_hud',
    key: 'SPRINT',
    eng: 'Sprint (R2 / RT)',
    heb: '🏃‍♂️💨 רִיצָה מְהִירָה (סְפְּרִינְט עִם כַּפְתּוֹר R2 בַּשַּׁלָּט)',
    example: '📌 דוגמא: כשיש שטח פנוי מולך, מחזיקים את כפתור R2 (Sprint) והשחקן טס קדימה בשיא המהירות!',
    wrong: ['🦵 גְּלִיץ׳ / תִּיקוּל', '⏸️ עֲצִירַת הַמִּשְׂחָק', '🧤 הַצָּלַת שׁוֹעֵר'],
    hint: 'כשמחזיקים את כפתור Sprint (R2 בשלט), השחקן פורץ בריצה הכי מהירה שלו!'
  },
  {
    screen: 'pitch_hud',
    key: 'SHOOT',
    eng: 'Shoot (◯ / B)',
    heb: '🥅🎯 בְּעִיטָה לַשַּׁעַר (כַּפְתּוֹר עִגּוּל ◯ אוֹ B)',
    example: '📌 דוגמא: הגעת מול השוער? לחץ על עיגול (◯) בעוצמה בינונית (לא עד הסוף כדי שהכדור לא יעוף מעל המשקוף)!',
    wrong: ['🔄 חִלּוּף שַׂחְקָן', '⏸️ עֲצִירַת מִשְׂחָק', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק'],
    hint: 'Shoot = לבעוט לשער! לוחצים על עיגול (◯) כדי להבקיע גול!'
  },
  {
    screen: 'pitch_hud',
    key: 'PASS',
    eng: 'Pass (✕ / A)',
    heb: '👟 מְסִירָה שְׁטוּחָה לְחָבֵר לַקְּבוּצָה (כַּפְתּוֹר ✕ אוֹ A)',
    example: '📌 דוגמא: יריב רץ מולך? כוון את הג׳ויסטיק לחבר פנוי ולחץ על ✕ (Pass) כדי למסור לו על הדשא!',
    wrong: ['🧤 זִינוּק שׁוֹעֵר', '🚩 עֲבֵירַת נִבְדָּל', '🎥 הִלּוּךְ חוֹזֵר'],
    hint: 'Pass = מסירה רגילה על הדשא באמצעות כפתור ✕!'
  },
  {
    screen: 'pitch_hud',
    key: 'THROUGH BALL',
    eng: 'Through Ball (△ / Y)',
    heb: '📐⚽ מְסִירַת עֹמֶק חֲכָמָה לַשֶּׁטַח הַפָּנוּי (כַּפְתּוֹר מְשֻׁלָּשׁ △)',
    example: '📌 דוגמא: רואה את החלוץ שלך מתחיל לרוץ קדימה בין המגנים? לחץ על משולש (△) והכדור יישלח לפניו ישר לרגל!',
    wrong: ['🚩 עֲבֵירַת נִבְדָּל', '🔄 חִלּוּף שַׂחְקָנִים', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'לחיצה על משולש (△) ב-FC 27 שולחת Through Ball — מסירת עומק לשחקן שרץ קדימה!'
  },
  {
    screen: 'pitch_hud',
    key: 'SLIDE TACKLE',
    eng: 'Slide Tackle (▢ / X)',
    heb: '🦵 גְּלִיץ׳ (תִּיקוּל גְּלִישָׁה עַל הַדֶּשֶׁא לַחֲטִיפַת הַכַּדּוּר)',
    example: '📌 דוגמא: כשאתה בהגנה, לחיצה על ריבוע (▢) עושה גליץ׳ — אבל זהירות לא לפגוע ברגל של היריב ברחבה כדי לא לעשות פנדל!',
    wrong: ['🎯 בְּעִיטָה לַחִיבּוּרִים', '🎁 פְּתִיחַת חֲבִילָה', '👔 מַצַּב קַרְיֵירָה'],
    hint: 'Slide Tackle הוא גליץ׳ על הדשא כדי לחטוף את הכדור מהיריב!'
  },
  {
    screen: 'pitch_hud',
    key: 'OFFSIDE',
    eng: 'Offside',
    heb: '🚩 נִבְדָּל! (הַשַּׂחְקָן עָמַד מֵאֲחוֹרֵי קַו הַהֲגָנָה בִּזְמַן הַמְּסִירָה)',
    example: '📌 דוגמא: אסור למסור לשחקן שלך אם הוא עומד קרוב לשער היריב מאחורי כל המגנים! חכה שהוא יהיה בקו אחד איתם ואז תמסור!',
    wrong: ['⚽ שַׁעַר נִצָּחוֹן!', '⏱️ תּוֹסֶפֶת זְמַן', '🏆 זְכִיָּה בַּגָּבִיעַ'],
    hint: 'כשהקוון מרים דגל ב-FC 27 וכתוב OFFSIDE — השריקה היא לנבדל!'
  }
];

// ==================== 6-STEP INTERACTIVE "HOW TO START A MATCH" GUIDE (איך מתחילים משחק בפיפא) ====================

const FC27_START_MATCH_STEPS = [
  {
    step: 1,
    title: 'שלב 1 מתוך 6: כניסה למשחק — KICK OFF',
    engKey: 'KICK OFF',
    engSpeech: 'Kick Off',
    screenId: 'main_menu',
    controllerTip: '🎮 בשלט: בוחרים ב-KICK OFF ולוחצים על ✕ (בפלייסטיישן) או A (באקסבוקס)',
    hebExplain: 'כשהמשחק נדלק ומופיע התפריט הראשי של FC 27, הכפתור הראשון למעלה הוא KICK OFF (בעיטת פתיחה / משחק מהיר).',
    example: '💡 דוגמא לעילי: אל תיכנס ל-Settings (הגדרות) אם אתה רוצה לשחק עכשיו — פשוט לחץ ישר על KICK OFF!'
  },
  {
    step: 2,
    title: 'שלב 2 מתוך 6: בחירת סוג המשחק — CLASSIC MATCH',
    engKey: 'CLASSIC MATCH',
    engSpeech: 'Classic Match',
    screenId: 'main_menu',
    controllerTip: '🎮 בשלט: לוחצים על ✕ / A על האפשרות הראשונה CLASSIC MATCH (או CUP FINALS לגמר גביע!)',
    hebExplain: 'עכשיו המשחק שואל איזה משחק בא לך: CLASSIC MATCH הוא משחק כדורגל רגיל. אם בא לך להניף גביע בסוף, בחר CUP FINALS!',
    example: '💡 דוגמא לעילי: למשחק מהיר וכיפי תמיד בוחרים ב-CLASSIC MATCH (הריבוע הראשון)!'
  },
  {
    step: 3,
    title: 'שלב 3 מתוך 6: הזזת השלט לקבוצה שלך — SELECT SIDE',
    engKey: 'SELECT SIDE',
    engSpeech: 'Select Side',
    screenId: 'pre_match',
    controllerTip: '🎮 בשלט: מזיזים את הג׳ויסטיק ⬅️ שמאלה (HOME) או ➡️ ימינה (AWAY) ולוחצים ✕ / A',
    hebExplain: 'במסך SELECT SIDE רואים ציור של שלט באמצע. אם לא תזיז אותו לצד שמאל או ימין, המחשב ישחק נגד עצמו! הזז את השלט לצד שלך ולחץ אישור.',
    example: '💡 דוגמא לעילי: אם משחקים 2 שחקנים (למשל עילי נגד אבא), שלט 1 זז שמאלה ל-HOME ושלט 2 זז ימינה ל-AWAY!'
  },
  {
    step: 4,
    title: 'שלב 4 מתוך 6: בחירת ליגה וקבוצה — SELECT TEAM',
    engKey: 'SELECT TEAM',
    engSpeech: 'Select Team',
    screenId: 'pre_match',
    controllerTip: '🎮 בשלט: חצים ⬆️⬇️ לבחירת מדינה/ליגה, וחצים ⬅️➡️ לבחירת הקבוצה, ואז ✕ / A',
    hebExplain: 'במסך SELECT TEAM בוחרים את הקבוצה שלך ואז את הקבוצה היריבה: לריאל מדריד בוחרים ספרד (LALIGA), ולבית"ר או קבוצות מיוחדות בוחרים REST OF WORLD.',
    example: '💡 דוגמא לעילי: שים לב למספרים ליד הקבוצה (למשל 86 ATT, 85 MID, 84 DEF) — הם מראים כמה הקבוצה חזקה!'
  },
  {
    step: 5,
    title: 'שלב 5 מתוך 6: בחירת תלבושת (חולצות) — SELECT KIT',
    engKey: 'SELECT KIT',
    engSpeech: 'Select Kit',
    screenId: 'pre_match',
    controllerTip: '🎮 בשלט: הזז ⬅️➡️ בין HOME KIT ל-AWAY KIT כדי שהחולצות לא יהיו באותו צבע, ולחץ ✕ / A',
    hebExplain: 'במסך SELECT KIT רואים את שני השחקנים עם החולצות שלהם. חשוב לבחור צבעים שונים לכל קבוצה כדי שיהיה קל לזהות למי למסור במגרש!',
    example: '💡 דוגמא לעילי: אם קבוצה אחת עם חולצה לבנה (White), תבחר לקבוצה השנייה חולצה צהובה (Yellow) או כחולה (Blue)!'
  },
  {
    step: 6,
    title: 'שלב 6 מתוך 6: עולים לדשא! — PLAY MATCH',
    engKey: 'PLAY MATCH',
    engSpeech: 'Play Match',
    screenId: 'pre_match',
    controllerTip: '🎮 בשלט: לוחצים ✕ / A על הכפתור הגדול PLAY MATCH — והמשחק מתחיל!',
    hebExplain: 'הגענו למסך האחרון לפני הדשא! הכפתור הראשון PLAY MATCH מתחיל את המשחק מיד. אם רוצים לסדר הרכב לפני כן, נכנסים ל-TEAM MANAGEMENT.',
    example: '💡 דוגמא לעילי: ברגע שלחצת PLAY MATCH, השחקנים עולים למגרש, לוחצים על ✕ (Pass) בעיגול האמצע — ומתחילים להבקיע!'
  }
];

// ==================== 16 LIVE FIFA ENGLISH COMMENTATOR CALLS WITH REPLAY EXAMPLES ====================

const FC27_COMMENTATOR_BANK = [
  {
    id: 'comm_kickoff',
    cat: 'time',
    eng: 'Kick off! Here we go!',
    heb: '⚽ בְּעִיטַת הַפְּתִיחָה! הִנֵּה אֲנַחְנוּ מַתְחִילִים!',
    situation: 'נשמע בדקה 00:00 כשהשופט שורק לפתיחת המשחק בעיגול האמצע.',
    example: '💡 דוגמא במגרש: השדרן אומר "Here we go!" — לחץ על ✕ (Pass) כדי למסור את המסירה הראשונה ולהתחיל התקפה!',
    sceneEmoji: '🏟️  whistle 😗 ➡️ ⚽🏃‍♂️',
    sceneLabel: '00:01 • KICK OFF AT CENTER CIRCLE',
    wrong: ['🚩 נִבְדָּל! הַדֶּגֶל לְמַעְלָה!', '🟨 כַּרְטִיס צָהֹב לַשַּׂחְקָן!', '🧤 הַצָּלָה גְּדוֹלָה שֶׁל הַשּׁוֹעֵר!']
  },
  {
    id: 'comm_what_a_goal',
    cat: 'goals',
    eng: 'What a goal! Unbelievable!',
    heb: '🔥⚽ אֵיזֶה שַׁעַר! לֹא יֵאָמֵן!',
    situation: 'השדרן צועק בהתלהבות כשכובשים גול מדהים לחיבורים!',
    example: '💡 דוגמא במגרש: What a goal = איזה שער! Unbelievable = לא ייאמן! רוץ לחגוג מול הקהל!',
    sceneEmoji: '🏃‍♂️⚡ ☄️⚽ ➡️ 🥅💥 🎉',
    sceneLabel: 'GOAL! • TOP CORNER STRIKE!',
    wrong: ['🧤 הַשּׁוֹעֵר תָּפַס אֶת הַכַּדּוּר', '⏱️ הַמַּחֲצִית הִסְתַּיְּמָה', '🏳️ הַכַּדּוּר יָצָא לַחוּץ']
  },
  {
    id: 'comm_what_a_save',
    cat: 'goals',
    eng: 'What a save by the goalkeeper!',
    heb: '🧤✨ אֵיזוֹ הַצָּלָה שֶׁל הַשּׁוֹעֵר!',
    situation: 'נשמע כשהשוער (Goalkeeper) מזנק באוויר ועוצר בעיטה חזקה לשער!',
    example: '💡 דוגמא במגרש: Save = הצלה! אם השוער הדף את הכדור החוצה, עכשיו תקבל כדור קרן (Corner Kick)!',
    sceneEmoji: '⚽💨 🧤🦸‍♂️ 🚫🥅',
    sceneLabel: 'SUPER SAVE BY THE GOALKEEPER!',
    wrong: ['⚽ הַכַּדּוּר נִכְנַס לַשַּׁעַר (גּוֹל)', '🟥 הַשַּׂחְקָן קִבֵּל כַּרְטִיס אָדֹם', '🔄 חִלּוּף שַׂחְקָנִים בַּמִּגְרָשׁ']
  },
  {
    id: 'comm_one_on_one',
    cat: 'action',
    eng: "He's through on goal! One on one!",
    heb: '🏃‍♂️💨 הוּא לְבַד מוּל הַשּׁוֹעֵר! אֶחָד עַל אֶחָד!',
    situation: 'הרגע הכי מרגש במשחק: החלוץ שלך עבר את כל המגנים ונשאר לבד מול השוער!',
    example: '💡 דוגמא במגרש: כששומעים "Through on goal! One on one!" — אל תמסור! תתקרב לשוער ולחץ על ◯ (Shoot) כדי לכבוש!',
    sceneEmoji: '🏃‍♂️💨 ⚽ .......... 🧤🥅',
    sceneLabel: '1 ON 1 BREAKAWAY VS KEEPER!',
    wrong: ['🚩 הַשּׁוֹפֵט שָׁרַק לְנִבְדָּל', '⏸️ הַמִּשְׂחָק בַּהַפְסָקַת מַחֲצִית', '🟨 כַּרְטִיס צָהֹב עַל עֲבֵירָה']
  },
  {
    id: 'comm_offside',
    cat: 'referee',
    eng: 'Offside! The flag is up!',
    heb: '🚩 נִבְדָּל! הַדֶּגֶל שֶׁל הַקַּוָּן לְמַעְלָה!',
    situation: 'הקוון מרים דגל (Flag is up) כי מסרת לשחקן שעמד מאחורי כל המגנים של היריב.',
    example: '💡 דוגמא במגרש: גם אם הבקעת גול אחרי השריקה ל-Offside, השער לא ייחשב! בפעם הבאה מסור לפני שהחלוץ עובר את המגן האחרון.',
    sceneEmoji: '🚩🙋‍♂️ 🚫 🏃‍♂️(מאחורי ההגנה)',
    sceneLabel: 'OFFSIDE • THE FLAG IS UP!',
    wrong: ['⚽ שַׁעַר חֻקִּי וּמֻשְׁלָם!', '🥅 בְּעִיטַת פֶּנְדֶּל מ-11 מֶטֶר', '🏆 נִצָּחוֹן בְּגְמַר הַגָּבִיעַ!']
  },
  {
    id: 'comm_penalty',
    cat: 'referee',
    eng: "It's a penalty! Pointed to the spot!",
    heb: '🥅🎯 זֶה פֶּנְדֶּל! הַשּׁוֹפֵט מַצְבִּיעַ עַל הַנְּקֻדָּה הַלְּבָנָה!',
    situation: 'הכשילו שחקן בתוך הרחבה, והשופט מצביע על נקודת הפנדל (The spot)!',
    example: '💡 דוגמא במגרש: בבעיטת Penalty מכוונים עם הג׳ויסטיק השמאלי לפינה ולוחצים בעדינות על ◯ (Shoot)!',
    sceneEmoji: '😗👉⚪ (11m) ⚽ vs 🧤🥅',
    sceneLabel: 'PENALTY KICK AWARDED!',
    wrong: ['🧤 הוֹצָאַת חוּץ בַּיָּדַיִם', '⏱️ תּוֹסֶפֶת זְמַן בַּמִּשְׂחָק', '🔄 חִלּוּף שַׂחְקָן עָיֵף']
  },
  {
    id: 'comm_crossbar',
    cat: 'goals',
    eng: 'Off the crossbar! So close!',
    heb: '🥅💥 פָּגַע בַּמַּשְׁקוֹף! כָּל כָּךְ קָרוֹב!',
    situation: 'בעטת פצצה לשער והכדור פגע בקורה העליונה (Crossbar) וניתז החוצה!',
    example: '💡 דוגמא במגרש: Crossbar = משקוף (למעלה), Post = קורה (בצד). אם הכדור חזר למגרש — לחץ מהר ◯ לבעוט ריבאונד!',
    sceneEmoji: '⚽🚀 💥═══🥅 (משקוף!) 😮',
    sceneLabel: 'HIT THE CROSSBAR • SO CLOSE!',
    wrong: ['🟨 השחקן קיבל כרטיס צהוב', '🚩 השופט שרק לנבדל', '🏁 המשחק הסתיים בניצחון']
  },
  {
    id: 'comm_corner',
    cat: 'action',
    eng: 'Corner kick!',
    heb: '📐⚽ כַּדּוּר קֶרֶן! (הֲרָמָה מֵהַדֶּגֶל בַּפִּנָּה)',
    situation: 'השוער או המגן של היריב הדף את הכדור מאחורי קו השער שלו.',
    example: '💡 דוגמא במגרש: ב-Corner kick לוחצים על ריבוע (▢) כדי להרים כדור גבוה לרחבה, ואז לוחצים על ◯ כדי לנגוח לשער!',
    sceneEmoji: '🚩📐 ⚽⤴️ ➡️ 🏃‍♂️🗣️🥅',
    sceneLabel: 'CORNER KICK INTO THE BOX',
    wrong: ['🥅 דו-קרב בעיטות פנדלים', '🟥 הרחקה בכרטיס אדום', '⏸️ הפסקת מחצית']
  },
  {
    id: 'comm_free_kick',
    cat: 'referee',
    eng: 'Free kick in a dangerous position!',
    heb: '🎯⚽ בְּעִיטָה חָפְשִׁית בְּמִיקוּם מְסֻכָּן!',
    situation: 'עשו עליך עבירה קרוב לרחבה של היריב, ואפשר לבעוט מעל החומה ישירות לשער!',
    example: '💡 דוגמא במגרש: Free kick = בעיטה חופשית, Dangerous position = מיקום מסוכן ליד השער! כוון מעל החומה ובעט עם ◯!',
    sceneEmoji: '⚽ 🎯 🧍‍♂️🧍‍♂️🧍‍♂️ (חומה) 🥅🧤',
    sceneLabel: 'DANGEROUS FREE KICK!',
    wrong: ['🚩 שריקה לנבדל', '🔄 חילוף שחקנים מהספסל', '⏱️ סיום המשחק (דקה 90)']
  },
  {
    id: 'comm_yellow_card',
    cat: 'referee',
    eng: 'Yellow card! He goes into the book!',
    heb: '🟨 כַּרְטִיס צָהֹב! הַשּׁוֹפֵט רוֹשֵׁם אוֹתוֹ בַּפִּנְקָס!',
    situation: 'השופט שולף כרטיס צהוב (Yellow card) אחרי עבירה או גליץ׳ חזק.',
    example: '💡 דוגמא במגרש: שים לב! שחקן שקיבל Yellow card חייב להיזהר לא לעשות עוד גליץ׳, אחרת יקבל כרטיס שני ויהפוך לאדום!',
    sceneEmoji: '😗🟨 📝 "INTO THE BOOK"',
    sceneLabel: 'REFEREE SHOWS YELLOW CARD',
    wrong: ['⚽ שער ניצחון בדקה ה-90!', '🧤 הצלה מדהימה של השוער!', '📐 כדור קרן מהפינה']
  },
  {
    id: 'comm_red_card',
    cat: 'referee',
    eng: "Red card! He's sent off!",
    heb: '🟥 כַּרְטִיס אָדֹם! הוּא מֻרְחָק מֵהַמִּגְרָשׁ!',
    situation: 'עבירה קשה או צהוב שני — השחקן מורחק (Sent off) והקבוצה נשארת בחיסרון של שחקן!',
    example: '💡 דוגמא במגרש: אם שחקן של היריב קיבל Red card ("He\'s sent off!"), יש לך יתרון במגרש ויותר שטח פנוי להבקיע!',
    sceneEmoji: '😗🟥 👉🚪🚶‍♂️ (יוצא מהמגרש)',
    sceneLabel: 'RED CARD • SENT OFF!',
    wrong: ['⚽ בעיטת פתיחה של המשחק', '🎯 כדור פגע במשקוף', '🏆 הנפת גביע האלופים']
  },
  {
    id: 'comm_good_tackle',
    cat: 'action',
    eng: 'Good tackle! Won the ball back!',
    heb: '🛡️💪 תִּיקוּל מְצֻיָּן! חָטַף אֶת הַכַּדּוּר בַּחֲזָרָה!',
    situation: 'חטפת ליריב את הכדור בצורה נקייה בלי לעשות עבירה (Good tackle)!',
    example: '💡 דוגמא במגרש: Won the ball back = זכה בכדור בחזרה! עכשיו צא מיד להתקפה מתפרצת מהירה עם R2 (Sprint)!',
    sceneEmoji: '🛡️👟💥⚽ ➡️ 🏃‍♂️💨',
    sceneLabel: 'CLEAN TACKLE • WON BALL BACK!',
    wrong: ['🚩 הקוון הרים דגל לנבדל', '🥅 השופט שרק לפנדל', '🟨 השופט שלף כרטיס צהוב']
  },
  {
    id: 'comm_throw_in',
    cat: 'action',
    eng: 'Throw-in!',
    heb: '🙌⚽ הוֹצָאַת חוּץ בַּיָּדַיִם!',
    situation: 'הכדור יצא מחוץ לקו האורך של המגרש, ושחקן מרים אותו בשתי ידיים וזורק לחבר.',
    example: '💡 דוגמא במגרש: ב-Throw-in כוון עם הג׳ויסטיק לשחקן פנוי מקבוצתך ולחץ על ✕ (Pass) לזרוק לו את הכדור!',
    sceneEmoji: '🙌⚽ ➡️ 🏃‍♂️ (על קו החוץ)',
    sceneLabel: 'THROW-IN FROM THE SIDELINE',
    wrong: ['🥅 בעיטת פנדל לשער', '🎥 הילוך חוזר של הגול', '⏱️ הארכה של 30 דקות']
  },
  {
    id: 'comm_hat_trick',
    cat: 'goals',
    eng: 'Hat-trick! Three goals in one match!',
    heb: '🎩⚽⚽⚽ שָׁלוֹשְׁעָר (הָאט-טְרִיק)! 3 שְׁעָרִים שֶׁל אוֹתוֹ שַׂחְקָן בְּמִשְׂחָק אֶחָד!',
    situation: 'אותו שחקן (למשל אמבפה, ויניסיוס או שועה) הבקיע את השער השלישי שלו במשחק!',
    example: '💡 דוגמא במגרש: באנגלית שלושער נקרא Hat-trick! בסוף המשחק השחקן שכבש Hat-trick מקבל את כדור המשחק במתנה!',
    sceneEmoji: '👑 ⚽+⚽+⚽ = 🎩🏆',
    sceneLabel: 'HAT-TRICK HERO • 3 GOALS!',
    wrong: ['🧤 שלוש הצלות של השוער', '🟨 שלושה כרטיסים צהובים', '📐 שלוש בעיטות קרן']
  },
  {
    id: 'comm_half_time',
    cat: 'time',
    eng: 'Half time! The whistle blows!',
    heb: '⏸️😗 מַחֲצִית! הַשּׁוֹפֵט שׁוֹרֵק לַהַפְסָקָה (דַּקָּה 45)!',
    situation: 'נגמרה המחצית הראשונה (45 דקות), והקבוצות יורדות להפסקה ולהחלפת צדדים במגרש.',
    example: '💡 דוגמא במגרש: כששומעים "Half time!" מופיע תפריט המחצית — לחץ על RESUME MATCH כדי להתחיל את המחצית השנייה!',
    sceneEmoji: '⏱️ 45:00 • 😗⏸️ HALF TIME',
    sceneLabel: '45:00 • HALF TIME WHISTLE',
    wrong: ['⚽ שריקת הפתיחה בדקה 0', '🥅 דו-קרב פנדלים', '🚩 עבירת נבדל']
  },
  {
    id: 'comm_full_time',
    cat: 'time',
    eng: 'Full time! They are the champions!',
    heb: '🏆🏁 סִיּוּם הַמִּשְׂחָק (דַּקָּה 90)! הֵם הָאַלּוּפִים!',
    situation: 'השופט שורק לסיום המשחק כולו (Full time = 90 דקות) והקבוצה שלך ניצחה וזכתה בגביע!',
    example: '💡 דוגמא במגרש: Full time = סיום המשחק המלא! Champions = אלופים! עכשיו אפשר ללחוץ על REMATCH למשחק חוזר!',
    sceneEmoji: '⏱️ 90:00 • 🏆👑 CHAMPIONS! 🎉',
    sceneLabel: '90:00 • FULL TIME VICTORY!',
    wrong: ['⏸️ הפסקת מחצית בדקה 45', '🚩 נבדל ברחבה', '🟨 כרטיס צהוב על עבירה']
  }
];

// ==================== 3 ANIMATED INTERACTIVE VIDEO TUTORIALS FOR ILAY ====================

const FC27_VIDEO_TUTORIALS = [
  {
    id: 'vid_start_match',
    title: '🎬 סרטון 1: איך מתחילים משחק בפיפא ב-6 צעדים קלים!',
    subtitle: 'מדריך וידאו מונפש עם קול שמראה לעילי בדיוק על מה לוחצים מהפתיחה ועד הדשא',
    scenes: [
      {
        badge: 'צעד 1 מתוך 6 • התפריט הראשי',
        visual: '🟢 EA SPORTS FC 27 ➔ [ ⚽ KICK OFF ] 👈 ✕',
        engTitle: '1. KICK OFF',
        engSpeech: 'Kick Off',
        hebText: 'שלום עילי! כדי להתחיל משחק בפיפא, בתפריט הראשי בוחרים בכפתור העליון KICK OFF (משחק מהיר) ולוחצים על איקס בשלט!'
      },
      {
        badge: 'צעד 2 מתוך 6 • סוג המשחק',
        visual: '🏟️ [ CLASSIC MATCH ] 👈 ✕   |   🏆 CUP FINALS',
        engTitle: '2. CLASSIC MATCH',
        engSpeech: 'Classic Match',
        hebText: 'עכשיו בוחרים ב-CLASSIC MATCH למשחק כדורגל רגיל, או ב-CUP FINALS אם בא לך לשחק גמר גביע עם זיקוקים!'
      },
      {
        badge: 'צעד 3 מתוך 6 • הזזת השלט לקבוצה שלך',
        visual: '🏠 HOME ⬅️ 🎮 SELECT SIDE ➡️ AWAY ✈️',
        engTitle: '3. SELECT SIDE',
        engSpeech: 'Select Side',
        hebText: 'במסך SELECT SIDE מזיזים את השלט שמאלה ל-HOME או ימינה ל-AWAY! אם אבא משחק איתך, שלט אחד זז שמאלה ושלט שני ימינה.'
      },
      {
        badge: 'צעד 4 מתוך 6 • בחירת קבוצה וליגה',
        visual: '👑 REAL MADRID (LaLiga) ⚡ 🦁 BEITAR (Rest of World)',
        engTitle: '4. SELECT TEAM',
        engSpeech: 'Select Team',
        hebText: 'במסך SELECT TEAM בוחרים את הקבוצה שלך ואז את היריבה! לריאל מדריד בוחרים ספרד (LaLiga) ולבית"ר בוחרים שאר העולם (Rest of World).'
      },
      {
        badge: 'צעד 5 מתוך 6 • בחירת חולצות שונות',
        visual: '👕 WHITE KIT (לבן) ⚡ 👕 YELLOW KIT (צהוב)',
        engTitle: '5. SELECT KIT',
        engSpeech: 'Select Kit',
        hebText: 'במסך SELECT KIT בוחרים חולצות בצבעים שונים לשתי הקבוצות כדי שלא נתבלבל למי למסור על המגרש!'
      },
      {
        badge: 'צעד 6 מתוך 6 • עולים לדשא!',
        visual: '▶️ [ PLAY MATCH ] 👈 ✕ ➔ ⚽🏟️ שריקת פתיחה!',
        engTitle: '6. PLAY MATCH!',
        engSpeech: 'Play Match',
        hebText: 'לוחצים על הכפתור הירוק PLAY MATCH — והשחקנים עולים לדשא! לחץ על איקס בעיגול האמצע וצא להבקיע שערים!'
      }
    ]
  },
  {
    id: 'vid_commentator',
    title: '🎬 סרטון 2: מה השדרן באנגלית צועק במשחק? (6 רגעים גדולים!)',
    subtitle: 'סרטון מונפש של מצבים אמיתיים על המגרש + הקול של השדרן באנגלית והסבר בעברית',
    scenes: [
      {
        badge: 'רגע 1 מתוך 6 • אחד על אחד מול השוער!',
        visual: '🏃‍♂️💨 ⚽ .......... 🧤🥅  🎙️ "ONE ON ONE!"',
        engTitle: "He's through on goal! One on one!",
        engSpeech: "He's through on goal! One on one!",
        hebText: 'כשהשדרן צועק: Through on goal, One on one! זה אומר שהחלוץ שלך עבר את כל המגנים והוא לבד מול השוער! תתקרב ובעט עם עיגול!'
      },
      {
        badge: 'רגע 2 מתוך 6 • שער אדיר לחיבורים!',
        visual: '☄️⚽ ➡️ 🥅💥 🎉  🎙️ "WHAT A GOAL!"',
        engTitle: 'What a goal! Unbelievable!',
        engSpeech: 'What a goal! Unbelievable!',
        hebText: 'כשהכדור קורע את הרשת, השדרן שואג: What a goal! Unbelievable! כלומר: איזה שער! לא ייאמן!'
      },
      {
        badge: 'רגע 3 מתוך 6 • הצלת ענק של השוער!',
        visual: '⚽🚀 🧤🦸‍♂️ 🚫🥅  🎙️ "WHAT A SAVE!"',
        engTitle: 'What a save by the goalkeeper!',
        engSpeech: 'What a save by the goalkeeper!',
        hebText: 'כשהשוער מזנק באוויר והודף כדור חזק, השדרן אומר: What a save by the goalkeeper! Save זה הצלה ו-Goalkeeper זה שוער!'
      },
      {
        badge: 'רגע 4 מתוך 6 • פגע במשקוף!',
        visual: '⚽🚀 💥═══🥅  🎙️ "OFF THE CROSSBAR!"',
        engTitle: 'Off the crossbar! So close!',
        engSpeech: 'Off the crossbar! So close!',
        hebText: 'אם בעטת חזק והכדור פגע בקורה העליונה של השער, השדרן צועק: Off the crossbar! So close! Crossbar זה משקוף!'
      },
      {
        badge: 'רגע 5 מתוך 6 • דגל לנבדל!',
        visual: '🚩🙋‍♂️ 🚫 🏃‍♂️  🎙️ "OFFSIDE! THE FLAG IS UP!"',
        engTitle: 'Offside! The flag is up!',
        engSpeech: 'Offside! The flag is up!',
        hebText: 'אם מסרת לשחקן שעמד מאחורי כל המגנים של היריב, הקוון מרים דגל והשדרן אומר: Offside! The flag is up! כלומר נבדל!'
      },
      {
        badge: 'רגע 6 מתוך 6 • פנדל מ-11 מטר!',
        visual: '😗👉⚪ ⚽ vs 🧤🥅  🎙️ "IT\'S A PENALTY!"',
        engTitle: "It's a penalty! Pointed to the spot!",
        engSpeech: "It's a penalty! Pointed to the spot!",
        hebText: 'כשהכשילו אותך ברחבה, השופט מצביע על הנקודה הלבנה והשדרן קורא: It is a penalty! כוון לפינה והבקע שער!'
      }
    ]
  },
  {
    id: 'vid_pause_end',
    title: '🎬 סרטון 3: מה עושים בעצירה (Pause), חילופים וסיום משחק?',
    subtitle: 'איך חוזרים למשחק בלי לפרוש בטעות, איך מחליפים שחקן עייף ואיך עושים משחק חוזר!',
    scenes: [
      {
        badge: 'מסך 1 מתוך 5 • חזרה למשחק (RESUME)',
        visual: '⏸️ PAUSE ➔ [ ▶️ RESUME MATCH ] 👈 ✕',
        engTitle: 'RESUME MATCH',
        engSpeech: 'Resume Match',
        hebText: 'כשעוצרים את המשחק או כשמגיעים למחצית, הכפתור העליון RESUME MATCH מחזיר אותך מיד להמשיך לשחק על הדשא!'
      },
      {
        badge: 'מסך 2 מתוך 5 • זהירות מ-FORFEIT!',
        visual: '⚠️ [ 🏳️ FORFEIT MATCH ] = הפסד 3:0! אל תלחץ!',
        engTitle: 'FORFEIT MATCH (WARNING!)',
        engSpeech: 'Forfeit Match',
        hebText: 'זהירות עילי! הכפתור התחתון בתפריט העצירה נקרא FORFEIT MATCH — אם לוחצים עליו פורשים מהמשחק ומפסידים טכנית שלוש אפס!'
      },
      {
        badge: 'מסך 3 מתוך 5 • חילוף שחקן עייף',
        visual: '📋 TEAM MANAGEMENT ➔ 🔄 SUBSTITUTION (חילוף)',
        engTitle: 'TEAM MANAGEMENT & SUBSTITUTION',
        engSpeech: 'Team Management, Substitution',
        hebText: 'אם השחקן שלך עייף ונגמר לו הכוח, נכנסים ל-TEAM MANAGEMENT ועושים SUBSTITUTION — חילוף של שחקן רענן מהספסל!'
      },
      {
        badge: 'מסך 4 מתוך 5 • תיקו בדקה 90: הארכה או פנדלים!',
        visual: '⏱️ [ EXTRA TIME ]  או  🥅 [ PENALTY SHOOTOUT ]',
        engTitle: 'EXTRA TIME / PENALTY SHOOTOUT',
        engSpeech: 'Extra Time, Penalty Shootout',
        hebText: 'אם המשחק נגמר בתיקו בדקה התשעים, אפשר לבחור EXTRA TIME להארכה, או PENALTY SHOOTOUT כדי ללכת ישר לדו-קרב פנדלים!'
      },
      {
        badge: 'מסך 5 מתוך 5 • משחק חוזר מיידי!',
        visual: '🏁 FULL TIME ➔ [ 🔁 REMATCH / PLAY AGAIN ] 👈 ✕',
        engTitle: 'REMATCH / PLAY AGAIN',
        engSpeech: 'Rematch, Play Again',
        hebText: 'בסיום המשחק רוצה לשחק שוב מיד עם אותן קבוצות? לוחצים על REMATCH (או PLAY AGAIN) ומתחילים משחק חוזר!'
      }
    ]
  },
  {
    id: 'vid_controller_master',
    title: '🎬 סרטון 4: מדריך השלט המלא — איך מוסרים, בועטים וחוטפים כדור!',
    subtitle: 'כל כפתור בשלט בהתקפה ובהגנה עם דוגמאות חיות על המגרש',
    scenes: [
      {
        badge: 'כפתור 1 מתוך 5 • מסירה קצרה וחטיפה (✕ / A)',
        visual: '🎮 [ ✕ PASS ] ➔ 🏃‍♂️👟⚽ ➔ 🏃‍♂️',
        engTitle: '✕ / A — GROUND PASS & CONTAIN',
        engSpeech: 'Ground Pass',
        hebText: 'כפתור איקס (✕) בהתקפה מוסר מסירה שטוחה ומדויקת לחבר על הדשא! בהגנה החזקה של איקס גורמת לשחקן שלך לשמור קרוב על היריב!'
      },
      {
        badge: 'כפתור 2 מתוך 5 • בעיטה לשער ותיקול עמידה (◯ / B)',
        visual: '🎮 [ ◯ SHOOT ] ➔ 🏃‍♂️🦵🚀⚽ ➔ 🥅💥',
        engTitle: '◯ / B — SHOOT & STAND TACKLE',
        engSpeech: 'Shoot and Stand Tackle',
        hebText: 'כפתור עיגול (◯) בהתקפה בועט לשער! לחץ עליו בעוצמה בינונית כדי שהכדור לא יעוף מעל המשקוף. בהגנה עיגול שולח רגל לחטוף את הכדור בעמידה!'
      },
      {
        badge: 'כפתור 3 מתוך 5 • מסירת עומק ויציאת שוער (△ / Y)',
        visual: '🎮 [ △ THROUGH BALL ] ➔ 📐⚽ ➔ 🏃‍♂️💨 (שטח פנוי)',
        engTitle: '△ / Y — THROUGH BALL & KEEPER RUSH',
        engSpeech: 'Through Ball',
        hebText: 'כפתור משולש (△) שולח מסירת עומק חכמה קדימה לשטח הפנוי לפני החלוץ שרץ! בהגנה החזקה של משולש מוציאה את השוער מהשער מול החלוץ!'
      },
      {
        badge: 'כפתור 4 מתוך 5 • הרמה מהאגף וגליץ׳ (▢ / X)',
        visual: '🎮 [ ▢ CROSS / SLIDE ] ➔ ⚽⤴️ 🗣️🥅  |  🦵💨 גליץ׳',
        engTitle: '▢ / X — LOB / CROSS & SLIDE TACKLE',
        engSpeech: 'Cross and Slide Tackle',
        hebText: 'כפתור ריבוע (▢) בהתקפה מרים כדור גבוה מהאגף או מהקרן לנגיחה! בהגנה ריבוע עושה גליץ׳ על הדשא — אבל זהירות לא לעשות פנדל ברחבה!'
      },
      {
        badge: 'כפתור 5 מתוך 5 • ספרינט ובעיטה מסובבת (R2 ו-R1)',
        visual: '🎮 [ R2 SPRINT 🏃‍♂️💨 ]  +  [ R1+◯ FINESSE SHOT ↪️🥅 ]',
        engTitle: 'R2 SPRINT & R1 FINESSE SHOT',
        engSpeech: 'Sprint and Finesse Shot',
        hebText: 'החזקת R2 גורמת לשחקן לרוץ בספרינט מהיר! וטיפ של אלופים: אם מחזיקים R1 יחד עם עיגול (◯), השחקן בועט בעיטת בננה מסובבת ומדויקת לפינה!'
      }
    ]
  },
  {
    id: 'vid_fut_cards',
    title: '🎬 סרטון 5: איך קוראים קלף שחקן ב-Ultimate Team?',
    subtitle: 'מה אומרים המספרים והאותיות על הקלפים של אמבפה, ויניסיוס ובלינגהאם',
    scenes: [
      {
        badge: 'קלף 1 מתוך 4 • הציון הכללי והעמדה (OVR & POS)',
        visual: '🃏 [ 99 ST ] 👑 MBAPPÉ (ST = חלוץ מרכזי)',
        engTitle: 'OVR 99 • ST (Striker)',
        engSpeech: 'Overall Rating, Striker',
        hebText: 'המספר הגדול בפינה העליונה הוא הציון הכללי של השחקן! מתחתיו כתובה העמדה: ST זה חלוץ, RW/LW זה כנף, CM זה קשר, CB זה בלם ו-GK זה שוער!'
      },
      {
        badge: 'קלף 2 מתוך 4 • מהירות ובעיטה (PAC & SHO)',
        visual: '⚡ 99 PAC (מהירות)   |   🎯 97 SHO (בעיטה)',
        engTitle: 'PAC (Pace) & SHO (Shooting)',
        engSpeech: 'Pace and Shooting',
        hebText: 'PAC הוא קיצור של Pace — כמה מהר השחקן רץ בספרינט! SHO הוא קיצור של Shooting — כמה חזק ומדויק הוא בועט לשער!'
      },
      {
        badge: 'קלף 3 מתוך 4 • מסירה וכדרור (PAS & DRI)',
        visual: '👟 96 PAS (מסירות)   |   🕺 98 DRI (דריבל)',
        engTitle: 'PAS (Passing) & DRI (Dribbling)',
        engSpeech: 'Passing and Dribbling',
        hebText: 'PAS הוא קיצור של Passing — דיוק במסירות ובישולים! DRI הוא קיצור של Dribbling — שליטה בכדור ותרגילים לעבור מגנים!'
      },
      {
        badge: 'קלף 4 מתוך 4 • הגנה, פיזיות וכימיה (DEF, PHY & CHEM)',
        visual: '🛡️ 88 DEF (הגנה)  |  💪 92 PHY (כוח)  |  🧪 33/33 CHEM',
        engTitle: 'DEF, PHY & CHEMISTRY',
        engSpeech: 'Defending, Physical and Chemistry',
        hebText: 'DEF מראה כמה השחקן טוב בחטיפת כדור, PHY מראה כמה הוא חזק פיזית ולא מתעייף, ו-CHEMISTRY מראה את החיבור בין שחקני ההרכב!'
      }
    ]
  }
];

const FC27_CONTROLLER_MAP = [
  {
    btn: '✕ (PS) / A (Xbox)',
    eng: 'Pass / Contain',
    attackHeb: '👟 בהתקפה: מסירה שטוחה על הדשא לחבר לקבוצה',
    defenseHeb: '🛡️ בהגנה: שמירה צמודה על השחקן עם הכדור',
    example: '📌 דוגמא: לחץ על ✕ עם כיוון הג׳ויסטיק כדי למסור מרגל לרגל ולהתקדם לשער!'
  },
  {
    btn: '◯ (PS) / B (Xbox)',
    eng: 'Shoot / Stand Tackle',
    attackHeb: '🥅 בהתקפה: בעיטה לשער (או נגיחה בכדור גובה)',
    defenseHeb: '🦵 בהגנה: תיקול וחטיפת כדור בעמידה',
    example: '📌 דוגמא: מול השוער לחץ על ◯ חצי שנייה (שני פסים ירוקים) כדי להבקיע בלי להעיף לשמיים!'
  },
  {
    btn: '△ (PS) / Y (Xbox)',
    eng: 'Through Ball / Keeper Rush',
    attackHeb: '📐 בהתקפה: מסירת עומק חכמה לשטח הפנוי לפני החלוץ',
    defenseHeb: '🧤 בהגנה (לחיצה ארוכה): הוצאת השוער מהשער לרוץ מול החלוץ',
    example: '📌 דוגמא: כשאמבפה או שועה מתחילים לרוץ קדימה — לחץ △ והכדור יישלח להם לריצה!'
  },
  {
    btn: '▢ (PS) / X (Xbox)',
    eng: 'Cross / Lob / Slide Tackle',
    attackHeb: '⤴️ בהתקפה: הרמת כדור גבוה מהאגף או כדור קרן לרחבה',
    defenseHeb: '🦵💨 בהגנה: גליץ׳ (תיקול גלישה על הדשא)',
    example: '📌 דוגמא: כשאתה רץ בצד המגרש, לחץ ▢ כדי להרים לחלוץ שינגח עם ◯ לשער!'
  },
  {
    btn: 'R2 (PS) / RT (Xbox)',
    eng: 'Sprint (הדק ימני תחתון)',
    attackHeb: '🏃‍♂️💨 בהתקפה: ריצה מהירה (ספרינט) בשטח פנוי',
    defenseHeb: '🏃‍♂️💨 בהגנה: רדיפה מהירה אחרי חלוץ היריב',
    example: '📌 דוגמא: אל תחזיק R2 כל הזמן בתוך צפיפות! עזוב את R2 כדי להסתובב מהר, ולחץ עליו כשיש שטח פנוי!'
  },
  {
    btn: 'R1 (PS) / RB (Xbox)',
    eng: 'Finesse Shot / Second Defender',
    attackHeb: '↪️🥅 בהתקפה (R1 + ◯): בעיטת בננה מסובבת ומדויקת לפינה!',
    defenseHeb: '👥 בהגנה (החזקת R1): קריאה לעוד שחקן שלך לבוא לעזור בחטיפה',
    example: '📌 דוגמא: מפינת הרחבה, החזק R1 ולחץ ◯ — הכדור יסתובב בקשת יפהפייה סביב השוער!'
  },
  {
    btn: 'L1 (PS) / LB (Xbox)',
    eng: 'Change Player / Chip Shot',
    attackHeb: '🎈 בהתקפה (L1 + ◯): הקפצת כדור ("צ׳יפ") מעל שוער שיוצא אליך',
    defenseHeb: '🔄 בהגנה: החלפת השחקן שאתה שולט בו לשחקן הקרוב לכדור',
    example: '📌 דוגמא: היריב מסר כדור? לחץ מיד על L1 כדי לעבור לשחקן ההגנה הכי קרוב לכדור!'
  },
  {
    btn: 'L2 (PS) / LT (Xbox)',
    eng: 'Shield Ball / Jockey',
    attackHeb: '💪 בהתקפה: הגנה על הכדור עם הגוף (לדחוף את המגן עם הגב)',
    defenseHeb: '🦀 בהגנה: עמידת הגנה יציבה (Jockey) כדי לחסום בעיטה או דריבל',
    example: '📌 דוגמא: כשחלוץ היריב מתקרב לרחבה, החזק L2 כדי לעמוד מולו יציב ולחטוף את הכדור!'
  }
];

function renderFC27Screenshot(item) {
  const hl = (k) => (item.key === k ? 'fc27-hl' : '');
  const ptr = (k) => (item.key === k ? '<span class="fc27-pointer-tag">👈 מה זה?</span>' : '');

  let bodyHtml = '';

  if (item.screen === 'main_menu') {
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#00ff87;font-weight:900;margin-bottom:2px;">🏟️ MAIN MENU — תפריט ראשי</div>
          <div class="fc27-menu-tile ${hl('KICK OFF')}" data-fc27-key="KICK OFF" style="cursor:pointer;"><span>⚽ KICK OFF</span>${ptr('KICK OFF')}</div>
          <div class="fc27-menu-tile ${hl('CLASSIC MATCH')}" data-fc27-key="CLASSIC MATCH" style="cursor:pointer;"><span>🏟️ CLASSIC MATCH</span>${ptr('CLASSIC MATCH')}</div>
          <div class="fc27-menu-tile ${hl('CUP FINALS')}" data-fc27-key="CUP FINALS" style="cursor:pointer;"><span>🏆 CUP FINALS</span>${ptr('CUP FINALS')}</div>
          <div class="fc27-menu-tile ${hl('ULTIMATE TEAM')}" data-fc27-key="ULTIMATE TEAM" style="cursor:pointer;"><span>🃏 ULTIMATE TEAM</span>${ptr('ULTIMATE TEAM')}</div>
          <div class="fc27-menu-tile ${hl('CAREER MODE')}" data-fc27-key="CAREER MODE" style="cursor:pointer;"><span>👔 CAREER MODE</span>${ptr('CAREER MODE')}</div>
          <div class="fc27-menu-tile ${hl('SETTINGS')}" data-fc27-key="SETTINGS" style="cursor:pointer;"><span>⚙️ SETTINGS</span>${ptr('SETTINGS')}</div>
        </div>
        <div class="fc27-preview-col">
          <div class="fc27-scoreboard-mini">WELCOME TO FC 27</div>
          <div class="fc27-pitch-graphic">🦁 <strong>BTR</strong> ⚡ <strong>RMA</strong> 👑<br><span style="font-size:0.7rem;color:#a7f3d0;">PRESS ✕ ON KICK OFF!</span></div>
          <div style="font-size:0.7rem;color:#fde047;font-weight:800;">🎮 שלב ראשון להתחלת משחק!</div>
        </div>
      </div>
    `;
  } else if (item.screen === 'pre_match') {
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#38bdf8;font-weight:900;margin-bottom:2px;">🎮 PRE-MATCH — איך מתחילים משחק</div>
          <div class="fc27-menu-tile ${hl('SELECT SIDE')}" data-fc27-key="SELECT SIDE" style="cursor:pointer;"><span>⬅️🎮➡️ SELECT SIDE</span>${ptr('SELECT SIDE')}</div>
          <div class="fc27-menu-tile ${hl('HOME / AWAY')}" data-fc27-key="HOME / AWAY" style="cursor:pointer;"><span>🏟️ HOME vs AWAY</span>${ptr('HOME / AWAY')}</div>
          <div class="fc27-menu-tile ${hl('SELECT TEAM')}" data-fc27-key="SELECT TEAM" style="cursor:pointer;"><span>🦁👑 SELECT TEAM</span>${ptr('SELECT TEAM')}</div>
          <div class="fc27-menu-tile ${hl('SELECT KIT')}" data-fc27-key="SELECT KIT" style="cursor:pointer;"><span>👕 SELECT KIT (חולצות)</span>${ptr('SELECT KIT')}</div>
          <div class="fc27-menu-tile ${hl('DIFFICULTY: SEMI-PRO')}" data-fc27-key="DIFFICULTY: SEMI-PRO" style="cursor:pointer;"><span>🎚️ BEGINNER / SEMI-PRO</span>${ptr('DIFFICULTY: SEMI-PRO')}</div>
          <div class="fc27-menu-tile ${hl('PLAY MATCH')}" data-fc27-key="PLAY MATCH" style="background:#059669;color:#fff;cursor:pointer;"><span>▶️ PLAY MATCH!</span>${ptr('PLAY MATCH')}</div>
        </div>
        <div class="fc27-preview-col">
          <div class="fc27-scoreboard-mini">HOME 🦁 vs 👑 AWAY</div>
          <div class="fc27-pitch-graphic">👕💛 vs 👕🤍<br><span style="font-size:0.7rem;color:#a7f3d0;">🎮 CONTROLLER 1 READY</span></div>
          <div style="font-size:0.68rem;color:#00ff87;font-weight:800;">▶️ לחץ PLAY MATCH לעלות לדשא!</div>
        </div>
      </div>
    `;
  } else if (item.screen === 'pause_menu') {
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#00ff87;font-weight:900;margin-bottom:2px;">⏸️ PAUSE MENU — תפריט עצירה ומחצית</div>
          <div class="fc27-menu-tile ${hl('RESUME MATCH')}" data-fc27-key="RESUME MATCH" style="cursor:pointer;"><span>▶️ RESUME MATCH</span>${ptr('RESUME MATCH')}</div>
          <div class="fc27-menu-tile ${hl('TEAM MANAGEMENT')}" data-fc27-key="TEAM MANAGEMENT" style="cursor:pointer;"><span>📋 TEAM MANAGEMENT</span>${ptr('TEAM MANAGEMENT')}</div>
          <div class="fc27-menu-tile ${hl('SUBSTITUTION')}" data-fc27-key="SUBSTITUTION" style="cursor:pointer;"><span>🔄 SUBSTITUTION</span>${ptr('SUBSTITUTION')}</div>
          <div class="fc27-menu-tile ${hl('FORMATION')}" data-fc27-key="FORMATION" style="cursor:pointer;"><span>📐 FORMATION: 4-3-3</span>${ptr('FORMATION')}</div>
          <div class="fc27-menu-tile ${hl('INSTANT REPLAY')}" data-fc27-key="INSTANT REPLAY" style="cursor:pointer;"><span>🎥 INSTANT REPLAY</span>${ptr('INSTANT REPLAY')}</div>
          <div class="fc27-menu-tile ${hl('FORFEIT MATCH')}" data-fc27-key="FORFEIT MATCH" style="color:#fca5a5;cursor:pointer;"><span>🏳️ FORFEIT MATCH</span>${ptr('FORFEIT MATCH')}</div>
        </div>
        <div class="fc27-preview-col">
          <div class="fc27-scoreboard-mini">BTR 💛 3 - 2 🤍 RMA | 82:15</div>
          <div class="fc27-pitch-graphic">⚽🥅<br><span style="font-size:0.7rem;color:#a7f3d0;">TEDDY STADIUM</span></div>
          <div style="font-size:0.68rem;color:#fde047;font-weight:800;">⭐ ILAY #10 • 2 GOALS</div>
        </div>
      </div>
    `;
  } else if (item.screen === 'end_match') {
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#fbbf24;font-weight:900;margin-bottom:2px;">🏁 FULL TIME & TIE — סיום משחק / תיקו</div>
          <div class="fc27-menu-tile ${hl('REMATCH')}" data-fc27-key="REMATCH" style="background:#059669;color:#fff;cursor:pointer;"><span>🔁 REMATCH / PLAY AGAIN</span>${ptr('REMATCH')}</div>
          <div class="fc27-menu-tile ${hl('EXTRA TIME')}" data-fc27-key="EXTRA TIME" style="cursor:pointer;"><span>⏱️ EXTRA TIME (30m)</span>${ptr('EXTRA TIME')}</div>
          <div class="fc27-menu-tile ${hl('PENALTY SHOOTOUT')}" data-fc27-key="PENALTY SHOOTOUT" style="cursor:pointer;"><span>🥅 PENALTY SHOOTOUT</span>${ptr('PENALTY SHOOTOUT')}</div>
          <div class="fc27-menu-tile ${hl('GOLDEN GOAL')}" data-fc27-key="GOLDEN GOAL" style="cursor:pointer;"><span>🌟 GOLDEN GOAL</span>${ptr('GOLDEN GOAL')}</div>
          <div class="fc27-menu-tile ${hl('MATCH HIGHLIGHTS')}" data-fc27-key="MATCH HIGHLIGHTS" style="cursor:pointer;"><span>🎬 MATCH HIGHLIGHTS</span>${ptr('MATCH HIGHLIGHTS')}</div>
          <div class="fc27-menu-tile ${hl('EXIT / ADVANCE')}" data-fc27-key="EXIT / ADVANCE" style="cursor:pointer;"><span>🚪 EXIT / ADVANCE</span>${ptr('EXIT / ADVANCE')}</div>
        </div>
        <div class="fc27-preview-col">
          <div class="fc27-scoreboard-mini">90:00 FULL TIME • 🏆</div>
          <div class="fc27-pitch-graphic">🏆🎉<br><span style="font-size:0.7rem;color:#fde047;">MAN OF THE MATCH: ILAY</span></div>
          <div style="font-size:0.68rem;color:#a7f3d0;font-weight:800;">🔁 לחץ REMATCH למשחק חוזר!</div>
        </div>
      </div>
    `;
  } else if (item.screen === 'fut_card') {
    bodyHtml = `
      <div class="fc27-fut-layout">
        <div class="fc27-gold-card">
          <div class="fc27-card-header">
            <div class="fc27-ovr-box">
              <span class="fc27-ovr-num">99</span>
              <span class="fc27-ovr-pos">ST 👑🦁</span>
            </div>
            <div class="fc27-card-face">⚡⚽</div>
          </div>
          <div class="fc27-card-name">ILAY & MBAPPÉ</div>
          <div class="fc27-stats-grid">
            <div class="fc27-stat-pill ${hl('PAC')}" data-fc27-key="PAC" style="cursor:pointer;"><span>99 PAC</span><span>${item.key === 'PAC' ? '👈' : ''}</span></div>
            <div class="fc27-stat-pill ${hl('DRI')}" data-fc27-key="DRI" style="cursor:pointer;"><span>98 DRI</span><span>${item.key === 'DRI' ? '👈' : ''}</span></div>
            <div class="fc27-stat-pill ${hl('SHO')}" data-fc27-key="SHO" style="cursor:pointer;"><span>97 SHO</span><span>${item.key === 'SHO' ? '👈' : ''}</span></div>
            <div class="fc27-stat-pill ${hl('DEF')}" data-fc27-key="DEF" style="cursor:pointer;"><span>86 DEF</span><span>${item.key === 'DEF' ? '👈' : ''}</span></div>
            <div class="fc27-stat-pill ${hl('PAS')}" data-fc27-key="PAS" style="cursor:pointer;"><span>96 PAS</span><span>${item.key === 'PAS' ? '👈' : ''}</span></div>
            <div class="fc27-stat-pill ${hl('PHY')}" data-fc27-key="PHY" style="cursor:pointer;"><span>94 PHY</span><span>${item.key === 'PHY' ? '👈' : ''}</span></div>
          </div>
        </div>
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#fbbf24;font-weight:900;margin-bottom:2px;">🏆 ULTIMATE TEAM 27</div>
          <div class="fc27-menu-tile ${hl('CHEMISTRY')}" data-fc27-key="CHEMISTRY" style="cursor:pointer;"><span>🧪 CHEMISTRY: 33/33</span>${ptr('CHEMISTRY')}</div>
          <div class="fc27-menu-tile ${hl('TRANSFER MARKET')}" data-fc27-key="TRANSFER MARKET" style="cursor:pointer;"><span>💰 TRANSFER MARKET</span>${ptr('TRANSFER MARKET')}</div>
          <div class="fc27-menu-tile ${hl('OPEN PACK')}" data-fc27-key="OPEN PACK" style="cursor:pointer;"><span>🎁 OPEN PACK</span>${ptr('OPEN PACK')}</div>
        </div>
      </div>
    `;
  } else {
    // pitch_hud
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-preview-col" style="padding:10px;">
          <div class="fc27-scoreboard-mini">UCL FINAL • 88:30</div>
          <div class="fc27-pitch-graphic" style="padding:10px 4px;">
            🏃‍♂️💨 ⚽ 🥅🧤
          </div>
          <div class="fc27-menu-tile ${hl('OFFSIDE')}" data-fc27-key="OFFSIDE" style="margin-bottom:3px;cursor:pointer;"><span>🚩 OFFSIDE</span>${ptr('OFFSIDE')}</div>
        </div>
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#38bdf8;font-weight:900;margin-bottom:2px;">🎮 CONTROLLER ACTIONS</div>
          <div class="fc27-menu-tile ${hl('SPRINT')}" data-fc27-key="SPRINT" style="cursor:pointer;"><span><strong>R2</strong> SPRINT 🏃‍♂️</span>${ptr('SPRINT')}</div>
          <div class="fc27-menu-tile ${hl('SHOOT')}" data-fc27-key="SHOOT" style="cursor:pointer;"><span><strong>◯</strong> SHOOT 🥅</span>${ptr('SHOOT')}</div>
          <div class="fc27-menu-tile ${hl('PASS')}" data-fc27-key="PASS" style="cursor:pointer;"><span><strong>✕</strong> PASS 👟</span>${ptr('PASS')}</div>
          <div class="fc27-menu-tile ${hl('THROUGH BALL')}" data-fc27-key="THROUGH BALL" style="cursor:pointer;"><span><strong>△</strong> THROUGH BALL 📐</span>${ptr('THROUGH BALL')}</div>
          <div class="fc27-menu-tile ${hl('SLIDE TACKLE')}" data-fc27-key="SLIDE TACKLE" style="cursor:pointer;"><span><strong>▢</strong> SLIDE TACKLE 🦵</span>${ptr('SLIDE TACKLE')}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="fc27-screen-wrap">
      <div class="fc27-topbar">
        <span class="fc27-brand">🟢 EA SPORTS FC™ 27</span>
        <span class="fc27-usertag">🎮 ILAY_10 • 🪙 99,500</span>
      </div>
      <div class="fc27-screen-body">
        ${bodyHtml}
      </div>
      <div class="fc27-controller-bar">
        <span><b class="fc27-btn-icon">✕</b> SELECT</span>
        <span><b class="fc27-btn-icon">○</b> BACK</span>
        <span>🔊 לחץ על כל כפתור במסך לשמיעת המילה באנגלית!</span>
      </div>
    </div>
  `;
}

function genEnglishFC27(diff = 'medium') {
  // Mix of screen buttons and commentator calls on higher stage
  if (diff === 'hard' && Math.random() < 0.35) {
    return genEnglishFC27Commentator(diff);
  }
  const item = FC27_VOCAB_BANK[randInt(0, FC27_VOCAB_BANK.length - 1)];
  const speechClean = item.eng.replace(/\([^)]*\)/g, '').trim();
  return {
    uniqueKey: 'fc27_screen_' + item.key,
    isEnglish: true,
    isMulti: false,
    instruction: `🎮 צִילוּם מָסָךְ מִתּוֹךְ <strong>FC 27</strong>: מָה אוֹמֵר הַכַּפְתּוֹר הַמְּסֻמָּן בְּיָרוֹק (<strong>${item.eng.toUpperCase()}</strong>)?`,
    ttsText: `עילי, הסתכל בצילום המסך של אף סי עשרים ושבע: מה אומר הכפתור`,
    englishSpeechWord: speechClean,
    stimulusHtml: renderFC27Screenshot(item),
    rtlStimulus: false,
    options: shuffle([item.heb, ...item.wrong]),
    correctAnswers: [item.heb],
    hint: `${item.hint} ${item.example || ''}`
  };
}

function genEnglishFC27Commentator(diff = 'medium') {
  const item = FC27_COMMENTATOR_BANK[randInt(0, FC27_COMMENTATOR_BANK.length - 1)];
  const stimHtml = `
    <div class="fc27-screen-wrap">
      <div class="fc27-topbar">
        <span class="fc27-brand">🎙️ EA SPORTS FC™ 27 LIVE BROADCAST</span>
        <span class="fc27-usertag">${item.sceneLabel}</span>
      </div>
      <div class="fc27-screen-body" style="text-align:center;padding:14px;">
        <div class="fc27-pitch-graphic" style="font-size:1.65rem;padding:12px;margin-bottom:10px;">
          ${item.sceneEmoji}
        </div>
        <div style="background:rgba(0,255,135,0.14);border:2px solid #00ff87;border-radius:12px;padding:10px;">
          <div style="font-size:0.75rem;color:#a7f3d0;font-weight:800;margin-bottom:2px;">🎙️ השדרן באנגלית צועק עכשיו:</div>
          <div style="font-size:1.35rem;font-weight:900;color:#ffffff;letter-spacing:0.4px;">"${item.eng}"</div>
        </div>
      </div>
    </div>
  `;

  return {
    uniqueKey: 'fc27_comm_' + item.id,
    isEnglish: true,
    isMulti: false,
    instruction: `🎙️ הַשַּׁדְרָן בְּפִיפָּ"א צוֹעֵק: <strong>"${item.eng}"</strong> — מָה קָרָה בַּמִּגְרָשׁ?`,
    ttsText: `עילי, השדרן בפיפא צועק עכשיו:`,
    englishSpeechWord: item.eng,
    stimulusHtml: stimHtml,
    rtlStimulus: false,
    options: shuffle([item.heb, ...item.wrong]),
    correctAnswers: [item.heb],
    hint: `${item.situation} ${item.example}`
  };
}

function genEnglish() {
  return genEnglishStarter();
}

function genLogicSeries(diff) {
  const mode = randInt(1, 2);
  if (mode === 1) {
    const step = diff === 'easy' ? randInt(2, 5) : randInt(3, 10);
    const start = randInt(2, 20);
    const n1 = start;
    const n2 = start + step;
    const n3 = start + step * 2;
    const n4 = start + step * 3;
    const ans = start + step * 4;

    return {
      isMulti: false,
      instruction: 'מִצְאוּ אֶת הַחֻקִּיּוּת וְהַשְׁלִימוּ אֶת הַמִּסְפָּר הַבָּא בַּסִּדְרָה:',
      ttsText: `השלימו את הסדרה: ${n1}, ${n2}, ${n3}, ${n4}, ומה המספר הבא?`,
      stimulusHtml: `<span>${n1} , ${n2} , ${n3} , ${n4} , </span> <span class="mystery-box">?</span>`,
      rtlStimulus: false,
      options: makeNumericOptions(ans, 4, 1),
      correctAnswers: [String(ans)],
      hint: `הסדרה עולה בקפיצות קבועות של +${step} בכל צעד!`
    };
  } else {
    const shapes = [
      { q: 'לְמְצֻלָּע עִם <strong>5 צְלָעוֹת וְ-5 קָדְקֳדִים</strong> קוֹרְאִים:', ans: 'מְחֻמָּשׁ ⬠', wrong: ['מְשֻׁשֶּׁה ⬢', 'מְרֻבָּע 🟦', 'מְשֻׁלָּשׁ 🔺'], hint: 'חמש צלעות = מחומש! (כמו המשושים והמחומשים שעל כדורגל)' },
      { q: 'לְמְצֻלָּע עִם <strong>6 צְלָעוֹת וְ-6 קָדְקֳדִים</strong> קוֹרְאִים:', ans: 'מְשֻׁשֶּׁה ⬢', wrong: ['מְחֻמָּשׁ ⬠', 'מְתֻמָּן 🛑', 'מַלְבֵּן ▭'], hint: 'שש צלעות = משושה!' },
      { q: 'כַּמָּה דַּקּוֹת יֵשׁ בְּ<strong>חֲצִי שָׁעָה</strong> בַּשָּׁעוֹן? 🕒', ans: '30 דַּקּוֹת', wrong: ['60 דַּקּוֹת', '15 דַּקּוֹת', '45 דַּקּוֹת'], hint: 'שעה שלמה היא 60 דקות, וחצי ממנה הוא 30.' }
    ];
    const item = shapes[randInt(0, shapes.length - 1)];
    return {
      isMulti: false,
      instruction: 'הַנְדָּסָה, צוּרוֹת וְשָׁעוֹן:',
      ttsText: item.q.replace(/<[^>]+>/g, ''),
      stimulusHtml: `<span>${item.q}</span>`,
      rtlStimulus: true,
      options: shuffle([item.ans, ...item.wrong]),
      correctAnswers: [item.ans],
      hint: item.hint
    };
  }
}

// ==================== LIA'S KINDERGARTEN & ENGLISH GENERATORS (150+ WORDS & NO-REPEAT VARIETY) ====================

const LIA_GLAM_WORDS = [
  // Colors (12)
  { eng: 'Pink', heb: '🩷 וָרוֹד (Pink)', hebShort: 'וָרוֹד', emoji: '🩷💄', hint: 'Pink זה הצבע הוורוד של שפתון ונסיכות!' },
  { eng: 'Purple', heb: '💜 סָגוֹל (Purple)', hebShort: 'סָגוֹל', emoji: '💜🦄', hint: 'Purple זה צבע סגול קסום של חד-קרן!' },
  { eng: 'Blue', heb: '💙 כָּחוֹל (Blue)', hebShort: 'כָּחוֹל', emoji: '💙🌺', hint: 'Blue זה הצבע הכחול של סטיץ׳ החמוד!' },
  { eng: 'Red', heb: '❤️ אָדוֹם (Red)', hebShort: 'אָדוֹם', emoji: '❤️🍓', hint: 'Red זה צבע אדום כמו לב ותות!' },
  { eng: 'Yellow', heb: '💛 צָהוֹב (Yellow)', hebShort: 'צָהוֹב', emoji: '💛☀️', hint: 'Yellow זה צהוב זורח כמו השמש!' },
  { eng: 'Green', heb: '💚 יָרוֹק (Green)', hebShort: 'יָרוֹק', emoji: '💚🌿', hint: 'Green זה ירוק כמו דשא ועלים!' },
  { eng: 'Orange', heb: '🧡 כָּתוֹם (Orange)', hebShort: 'כָּתוֹם', emoji: '🧡🍊', hint: 'Orange זה הצבע הכתום (וגם תפוז)!' },
  { eng: 'White', heb: '🤍 לָבָן (White)', hebShort: 'לָבָן', emoji: '🤍☁️', hint: 'White זה לבן כמו ענן וכמו שלג!' },
  { eng: 'Black', heb: '🖤 שָׁחוֹר (Black)', hebShort: 'שָׁחוֹר', emoji: '🖤🎩', hint: 'Black זה הצבע השחור!' },
  { eng: 'Gold', heb: '👑 זָהָב (Gold)', hebShort: 'זָהָב', emoji: '👑✨', hint: 'Gold זה צבע זהב נוצץ כמו כתר של מלכה!' },
  { eng: 'Silver', heb: '🥈 כֶּסֶף נוֹצֵץ (Silver)', hebShort: 'כֶּסֶף נוֹצֵץ', emoji: '🥈✨', hint: 'Silver זה צבע כסף מנצנץ!' },
  { eng: 'Rainbow', heb: '🌈 קֶשֶׁת בֶּעָנָן (Rainbow)', hebShort: 'קֶשֶׁת בֶּעָנָן', emoji: '🌈🦄', hint: 'Rainbow היא קשת צבעונית בשמיים!' },
  // Makeup & Glam (12)
  { eng: 'Lipstick', heb: '💄 שְׂפָתוֹן / אֹדֶם (Lipstick)', hebShort: 'שְׂפָתוֹן', emoji: '💄💋', hint: 'Lipstick הוא שפתון ששמים על השפתיים כשמתאפרים!' },
  { eng: 'Crown', heb: '👑 כֶּתֶר (Crown)', hebShort: 'כֶּתֶר', emoji: '👑👸', hint: 'Crown הוא כתר של נסיכה על הראש!' },
  { eng: 'Mirror', heb: '🪞 מַרְאָה (Mirror)', hebShort: 'מַרְאָה', emoji: '🪞✨', hint: 'Mirror היא מראה שמסתכלים בה כשמתאפרים!' },
  { eng: 'Nail Polish', heb: '💅 לָק לַצִּפָּרְנַיִם (Nail Polish)', hebShort: 'לָק לַצִּפָּרְנַיִם', emoji: '💅🩷', hint: 'Nail Polish הוא לק צבעוני שמורחים על הציפורניים!' },
  { eng: 'Brush', heb: '🪮 מִבְרֶשֶׁת שֵׂיעָר / אִיפּוּר (Brush)', hebShort: 'מִבְרֶשֶׁת', emoji: '🪮✨', hint: 'Brush היא מברשת שמסתרקים או מתאפרים איתה!' },
  { eng: 'Perfume', heb: '🧴 בֹּשֶׂם רֵיחָנִי (Perfume)', hebShort: 'בֹּשֶׂם', emoji: '🧴🌸', hint: 'Perfume הוא בושם עם ריח מתוק של פרחים!' },
  { eng: 'Ring', heb: '💍 טַבַּעַת יַהֲלוֹם (Ring)', hebShort: 'טַבַּעַת', emoji: '💍💎', hint: 'Ring היא טבעת נוצצת שעונדים על האצבע!' },
  { eng: 'Necklace', heb: '📿 שַׁרְשֶׁרֶת (Necklace)', hebShort: 'שַׁרְשֶׁרֶת', emoji: '📿✨', hint: 'Necklace היא שרשרת יפה על הצוואר!' },
  { eng: 'Bow', heb: '🎀 סֶרֶט / פַּפִּיוֹן לַשֵּׂיעָר (Bow)', hebShort: 'סֶרֶט לַשֵּׂיעָר', emoji: '🎀🩷', hint: 'Bow הוא סרט ורוד מתוק לשיער!' },
  { eng: 'Magic Wand', heb: '🪄 שַׁרְבִיט קְסָמִים (Magic Wand)', hebShort: 'שַׁרְבִיט קְסָמִים', emoji: '🪄✨', hint: 'Magic Wand הוא שרביט הקסמים של הפיה!' },
  { eng: 'Diamond', heb: '💎 יַהֲלוֹם נוֹצֵץ (Diamond)', hebShort: 'יַהֲלוֹם', emoji: '💎✨', hint: 'Diamond הוא יהלום מנצנץ!' },
  { eng: 'Princess', heb: '👸 נְסִיכָה (Princess)', hebShort: 'נְסִיכָה', emoji: '👸👑', hint: 'Princess באנגלית זו נסיכה!' },
  // Princess Clothes (8)
  { eng: 'Dress', heb: '👗 שִׂמְלָה (Dress)', hebShort: 'שִׂמְלָה', emoji: '👗✨', hint: 'Dress היא שמלה חגיגית ומהממת!' },
  { eng: 'Shoes', heb: '👠 נַעֲלַיִם (Shoes)', hebShort: 'נַעֲלַיִם', emoji: '👠👟', hint: 'Shoes הן נעליים!' },
  { eng: 'Bag', heb: '👛 תִּיק צַד / אַרְנָק (Bag)', hebShort: 'תִּיק', emoji: '👛💖', hint: 'Bag הוא תיק יפה שלוקחים לגן או למסיבה!' },
  { eng: 'Hat', heb: '👒 כּוֹבַע (Hat)', hebShort: 'כּוֹבַע', emoji: '👒🌸', hint: 'Hat הוא כובע על הראש!' },
  { eng: 'Glasses', heb: '🕶️ מִשְׁקָפַיִם (Glasses)', hebShort: 'מִשְׁקָפַיִם', emoji: '🕶️✨', hint: 'Glasses הם משקפיים מגניבים!' },
  { eng: 'Shirt', heb: '👚 חֻלְצָה (Shirt)', hebShort: 'חֻלְצָה', emoji: '👚🩷', hint: 'Shirt היא חולצה!' },
  { eng: 'Socks', heb: '🧦 גַּרְבַּיִם (Socks)', hebShort: 'גַּרְבַּיִם', emoji: '🧦🌈', hint: 'Socks הם גרביים חמימים!' },
  { eng: 'Pajamas', heb: '👚🌙 פִּיגָ׳מָה (Pajamas)', hebShort: 'פִּיגָ׳מָה', emoji: '🌙🧸', hint: 'Pajamas היא פיג׳מה שלובשים לפני השינה!' }
];

const LIA_STITCH_ANIMALS = [
  { eng: 'Unicorn', heb: '🦄 חַד-קֶרֶן (Unicorn)', hebShort: 'חַד-קֶרֶן', emoji: '🦄🌈', hint: 'Unicorn הוא חד-קרן קסום עם קרן נוצצת!' },
  { eng: 'Dog', heb: '🐶 כֶּלֶב (Dog)', hebShort: 'כֶּלֶב', emoji: '🐶🦴', hint: 'Dog הוא כלב חמוד שעושה הב-הב!' },
  { eng: 'Cat', heb: '🐱 חָתוּל (Cat)', hebShort: 'חָתוּל', emoji: '🐱🐾', hint: 'Cat הוא חתול מתוק שעושה מיאו!' },
  { eng: 'Puppy', heb: '🐕 גּוּר כְּלָבִים קָטָן (Puppy)', hebShort: 'גּוּר כְּלָבִים', emoji: '🐕💖', hint: 'Puppy הוא כלבלב קטן ומתוק!' },
  { eng: 'Kitten', heb: '🐈 חֲתַלְתּוּל קָטָן (Kitten)', hebShort: 'חֲתַלְתּוּל', emoji: '🐈🎀', hint: 'Kitten היא חתלתולה קטנה!' },
  { eng: 'Butterfly', heb: '🦋 פַּרְפַּר (Butterfly)', hebShort: 'פַּרְפַּר', emoji: '🦋🌸', hint: 'Butterfly הוא פרפר צבעוני שעף בין פרחים!' },
  { eng: 'Bunny', heb: '🐰 אַרְנָב (Bunny)', hebShort: 'אַרְנָב', emoji: '🐰🥕', hint: 'Bunny הוא ארנבון מתוק שאוהב גזר!' },
  { eng: 'Lion', heb: '🦁 אַרְיֵה (Lion)', hebShort: 'אַרְיֵה', emoji: '🦁👑', hint: 'Lion הוא אריה מלך החיות!' },
  { eng: 'Elephant', heb: '🐘 פִּיל (Elephant)', hebShort: 'פִּיל', emoji: '🐘💦', hint: 'Elephant הוא פיל גדול עם חדק ארוך!' },
  { eng: 'Monkey', heb: '🐵 קוֹף (Monkey)', hebShort: 'קוֹף', emoji: '🐵🍌', hint: 'Monkey הוא קוף שובב שאוהב בננות!' },
  { eng: 'Giraffe', heb: '🦒 גִ׳ירָפָה (Giraffe)', hebShort: 'גִ׳ירָפָה', emoji: '🦒🌿', hint: 'Giraffe היא ג׳ירפה גבוהה עם צוואר ארוך!' },
  { eng: 'Bear', heb: '🐻 דֹּב / דֻּבִּי (Bear)', hebShort: 'דֻּבִּי', emoji: '🐻🍯', hint: 'Bear הוא דוב שאוהב דבש!' },
  { eng: 'Koala', heb: '🐨 קוֹאָלָה (Koala)', hebShort: 'קוֹאָלָה', emoji: '🐨💙', hint: 'Koala היא קואלה חמודה (מזכירה קצת את סטיץ׳)!' },
  { eng: 'Panda', heb: '🐼 דֹּב פַּנְדָּה (Panda)', hebShort: 'פַּנְדָּה', emoji: '🐼🎋', hint: 'Panda הוא דוב פנדה שחור-לבן מתוק!' },
  { eng: 'Dolphin', heb: '🐬 דּוֹלְפִין (Dolphin)', hebShort: 'דּוֹלְפִין', emoji: '🐬🌊', hint: 'Dolphin הוא דולפין שקופץ בגלים של הים!' },
  { eng: 'Fish', heb: '🐠 דָּג (Fish)', hebShort: 'דָּג', emoji: '🐠🫧', hint: 'Fish הוא דג ששוחה במים!' },
  { eng: 'Turtle', heb: '🐢 צָב (Turtle)', hebShort: 'צָב', emoji: '🐢🌿', hint: 'Turtle הוא צב עם שריון על הגב!' },
  { eng: 'Bird', heb: '🐦 צִפּוֹר (Bird)', hebShort: 'צִפּוֹר', emoji: '🐦🎵', hint: 'Bird היא ציפור שמצייצת ועפה בשמיים!' },
  { eng: 'Duck', heb: '🦆 בַּרְוָז (Duck)', hebShort: 'בַּרְוָז', emoji: '🦆💛', hint: 'Duck הוא ברווז צהוב שעושה גע-גע!' },
  { eng: 'Horse', heb: '🐴 סוּס (Horse)', hebShort: 'סוּס', emoji: '🐴🌟', hint: 'Horse הוא סוס דוהר!' },
  { eng: 'Frog', heb: '🐸 צְפַרְדֵּעַ (Frog)', hebShort: 'צְפַרְדֵּעַ', emoji: '🐸💚', hint: 'Frog היא צפרדע ירוקה שקופצת!' },
  { eng: 'Bee', heb: '🐝 דְּבוֹרָה (Bee)', hebShort: 'דְּבוֹרָה', emoji: '🐝🍯', hint: 'Bee היא דבורה שמכינה דבש מתוק!' },
  { eng: 'Ladybug', heb: '🐞 פָּרַת מֹשֶׁה רַבֵּנוּ (Ladybug)', hebShort: 'חִפּוּשִׁית אֲדֻמָּה', emoji: '🐞🍀', hint: 'Ladybug היא חיפושית פרת משה רבנו עם נקודות!' },
  { eng: 'Penguin', heb: '🐧 פִּינְגְּוִין (Penguin)', hebShort: 'פִּינְגְּוִין', emoji: '🐧❄️', hint: 'Penguin הוא פינגווין חמוד שאוהב קרח ושלג!' },
  { eng: 'Sun', heb: '☀️ שֶׁמֶשׁ (Sun)', hebShort: 'שֶׁמֶשׁ', emoji: '☀️💛', hint: 'Sun היא השמש שמאירה בבוקר!' },
  { eng: 'Moon', heb: '🌙 יָרֵחַ (Moon)', hebShort: 'יָרֵחַ', emoji: '🌙✨', hint: 'Moon הוא הירח שזורח בלילה!' },
  { eng: 'Star', heb: '⭐ כּוֹכָב (Star)', hebShort: 'כּוֹכָב', emoji: '⭐✨', hint: 'Star הוא כוכב מנצנץ בשמיים!' },
  { eng: 'Flower', heb: '🌸 פֶּרַח (Flower)', hebShort: 'פֶּרַח', emoji: '🌸🌺', hint: 'Flower הוא פרח ריחני וצבעוני!' },
  { eng: 'Tree', heb: '🌳 עֵץ (Tree)', hebShort: 'עֵץ', emoji: '🌳🍃', hint: 'Tree הוא עץ ירוק בגינה!' },
  { eng: 'Sea', heb: '🌊 יָם וְגַלִּים (Sea)', hebShort: 'יָם', emoji: '🌊🏄‍♂️', hint: 'Sea הוא הים הכחול שסטיץ׳ אוהב לגלוש בו!' }
];

const LIA_NUMBERS_FOOD = [
  // Numbers 1-10 (with visual countable pictures so Lia can see and count without reading!)
  { eng: 'One', heb: '🦄 1 — אַחַת (One / וַאן)', hebShort: 'אַחַת (1)', emoji: '🦄 (1)', hint: 'One (וַאן) זה המספר 1 — חד-קרן אחד!' },
  { eng: 'Two', heb: '🦋🦋 2 — שְׁתַּיִם (Two / טוּ)', hebShort: 'שְׁתַּיִם (2)', emoji: '🦋🦋 (2)', hint: 'Two (טוּ) זה המספר 2 — שני פרפרים!' },
  { eng: 'Three', heb: '👑👑👑 3 — שָׁלוֹשׁ (Three / תְ׳רִי)', hebShort: 'שָׁלוֹשׁ (3)', emoji: '👑👑👑 (3)', hint: 'Three (תְ׳רִי) זה המספר 3 — שלושה כתרים!' },
  { eng: 'Four', heb: '🌸🌸🌸🌸 4 — אַרְבַּע (Four / פוֹר)', hebShort: 'אַרְבַּע (4)', emoji: '🌸🌸🌸🌸 (4)', hint: 'Four (פוֹר) זה המספר 4 — ארבעה פרחים!' },
  { eng: 'Five', heb: '⭐⭐⭐⭐⭐ 5 — חָמֵשׁ (Five / פַייב)', hebShort: 'חָמֵשׁ (5)', emoji: '⭐⭐⭐⭐⭐ (5)', hint: 'Five (פַייב) זה 5 כוכבים ו-5 אצבעות ביד!' },
  { eng: 'Six', heb: '🍓🍓🍓🍓🍓🍓 6 — שֵׁשׁ (Six / סִיקְס)', hebShort: 'שֵׁשׁ (6)', emoji: '🍓🍓🍓🍓🍓🍓 (6)', hint: 'Six (סִיקְס) זה המספר 6!' },
  { eng: 'Seven', heb: '🌈 7 — שֶׁבַע (Seven / סֶבֶן)', hebShort: 'שֶׁבַע (7)', emoji: '🌈 (7)', hint: 'Seven (סֶבֶן) זה המספר 7 (כמו 7 צבעים בקשת)!' },
  { eng: 'Eight', heb: '🐙 8 — שְׁמוֹנֶה (Eight / אֵייט)', hebShort: 'שְׁמוֹנֶה (8)', emoji: '🐙 (8)', hint: 'Eight (אֵייט) זה המספר 8 (כמו 8 זרועות של תמנון)!' },
  { eng: 'Nine', heb: '🎈 9 — תֵּשַׁע (Nine / נַיין)', hebShort: 'תֵּשַׁע (9)', emoji: '🎈 (9)', hint: 'Nine (נַיין) זה המספר 9!' },
  { eng: 'Ten', heb: '🙌 10 — עֶשֶׂר (Ten / טֶן)', hebShort: 'עֶשֶׂר (10)', emoji: '🙌 (10)', hint: 'Ten (טֶן) זה 10 אצבעות בשתי הידיים!' },
  // Treats, Fruits & Food (20)
  { eng: 'Ice Cream', heb: '🍦 גְּלִידָה (Ice Cream)', hebShort: 'גְּלִידָה', emoji: '🍦🍨', hint: 'Ice Cream היא גלידה מתוקה וצוננת!' },
  { eng: 'Cake', heb: '🎂 עוּגָה (Cake)', hebShort: 'עוּגָה', emoji: '🎂🍓', hint: 'Cake היא עוגת יום הולדת טעימה!' },
  { eng: 'Cupcake', heb: '🧁 קַאפְּקֵייק / עוּגָה אִישִׁית (Cupcake)', hebShort: 'קַאפְּקֵייק', emoji: '🧁🩷', hint: 'Cupcake היא עוגת קצפת קטנה ומתוקה!' },
  { eng: 'Cookie', heb: '🍪 עוּגִיָּה (Cookie)', hebShort: 'עוּגִיָּה', emoji: '🍪🍫', hint: 'Cookie היא עוגיית שוקולד צ׳יפס פציחה!' },
  { eng: 'Chocolate', heb: '🍫 שׁוֹקוֹלָד (Chocolate)', hebShort: 'שׁוֹקוֹלָד', emoji: '🍫🤎', hint: 'Chocolate הוא שוקולד מתוק!' },
  { eng: 'Candy', heb: '🍬 סֻכָּרִיָּה (Candy)', hebShort: 'סֻכָּרִיָּה', emoji: '🍬🍭', hint: 'Candy היא סוכרייה מתוקה!' },
  { eng: 'Donut', heb: '🍩 דּוֹנָאט (Donut)', hebShort: 'דּוֹנָאט', emoji: '🍩🌈', hint: 'Donut הוא סופגניית דונאט עם ציפוי וסוכריות!' },
  { eng: 'Popcorn', heb: '🍿 פּוֹפְּקוֹרְן (Popcorn)', hebShort: 'פּוֹפְּקוֹרְן', emoji: '🍿🎬', hint: 'Popcorn הוא פופקורן שאוכלים בסרט!' },
  { eng: 'Pizza', heb: '🍕 פִּיצָה (Pizza)', hebShort: 'פִּיצָה', emoji: '🍕🧀', hint: 'Pizza היא פיצה חמה עם גבינה!' },
  { eng: 'Pancake', heb: '🥞 פַּנְקֵייק (Pancake)', hebShort: 'פַּנְקֵייק', emoji: '🥞🍯', hint: 'Pancake הוא פנקייק מתוק עם סירופ מייפל!' },
  { eng: 'Apple', heb: '🍎 תַּפּוּחַ (Apple)', hebShort: 'תַּפּוּחַ', emoji: '🍎✨', hint: 'Apple הוא תפוח עץ מתוק!' },
  { eng: 'Banana', heb: '🍌 בָּנָנָה (Banana)', hebShort: 'בָּנָנָה', emoji: '🍌💛', hint: 'Banana היא בננה צהובה!' },
  { eng: 'Strawberry', heb: '🍓 תּוּת שָׂדֶה (Strawberry)', hebShort: 'תּוּת שָׂדֶה', emoji: '🍓❤️', hint: 'Strawberry הוא תות שדה אדום ומתוק!' },
  { eng: 'Watermelon', heb: '🍉 אֲבַטִּיחַ (Watermelon)', hebShort: 'אֲבַטִּיחַ', emoji: '🍉☀️', hint: 'Watermelon הוא אבטיח קר ומתוק של קיץ!' },
  { eng: 'Grapes', heb: '🍇 עֲנָבִים (Grapes)', hebShort: 'עֲנָבִים', emoji: '🍇💜', hint: 'Grapes הם ענבים מתוקים!' },
  { eng: 'Pineapple', heb: '🍍 אֲנָנָס (Pineapple)', hebShort: 'אֲנָנָס', emoji: '🍍🌺', hint: 'Pineapple הוא אננס טרופי מהוואי של סטיץ׳!' },
  { eng: 'Cherry', heb: '🍒 דֻּבְדְּבָן (Cherry)', hebShort: 'דֻּבְדְּבָן', emoji: '🍒❤️', hint: 'Cherry הוא דובדבן מתוק על הקצפת!' },
  { eng: 'Water', heb: '💧 מַיִם (Water)', hebShort: 'מַיִם', emoji: '💧🥤', hint: 'Water הם מים קרים ובריאים!' },
  { eng: 'Milk', heb: '🥛 חָלָב (Milk)', hebShort: 'חָלָב', emoji: '🥛🤍', hint: 'Milk הוא חלב לבן!' },
  { eng: 'Juice', heb: '🧃 מִיץ פֵּירוֹת (Juice)', hebShort: 'מִיץ', emoji: '🧃🍊', hint: 'Juice הוא מיץ פירות טעים!' }
];

const LIA_MAGIC_WORDS = [
  { eng: 'Hello', heb: '👋 שָׁלוֹם! (Hello)', hebShort: 'שָׁלוֹם', emoji: '👋😊', hint: 'כשנפגשים בגן אומרים Hello — שלום!' },
  { eng: 'Goodbye', heb: '👋 לְהִתְרָאוֹת! (Goodbye)', hebShort: 'לְהִתְרָאוֹת', emoji: '👋🌟', hint: 'כשנפרדים לשלום אומרים Goodbye או Bye-Bye!' },
  { eng: 'Good Morning', heb: '☀️ בּוֹקֶר טוֹב! (Good Morning)', hebShort: 'בּוֹקֶר טוֹב', emoji: '☀️🌈', hint: 'בבוקר כשהשמש זורחת בגן אומרים Good Morning — בוקר טוב!' },
  { eng: 'Good Night', heb: '🌙 לַיְלָה טוֹב! (Good Night)', hebShort: 'לַיְלָה טוֹב', emoji: '🌙⭐', hint: 'לפני שהולכים לישון אומרים Good Night — לילה טוב!' },
  { eng: 'Thank You', heb: '🙏 תּוֹדָה רַבָּה! (Thank You)', hebShort: 'תּוֹדָה רַבָּה', emoji: '🙏💖', hint: 'כשמקבלים מתנה או מחמאה אומרים Thank You — תודה!' },
  { eng: 'Please', heb: '🥰 בְּבַקָּשָׁה (Please)', hebShort: 'בְּבַקָּשָׁה', emoji: '🥰✨', hint: 'מילת הקסם כשמבקשים משהו יפה היא Please — בבקשה!' },
  { eng: 'Sorry', heb: '🤗 סְלִיחָה (Sorry)', hebShort: 'סְלִיחָה', emoji: '🤗💗', hint: 'כשרוצים לבקש סליחה אומרים Sorry!' },
  { eng: 'Yes', heb: '✅ כֵּן! (Yes)', hebShort: 'כֵּן', emoji: '✅👍', hint: 'Yes פירושו כן!' },
  { eng: 'No', heb: '❌ לֹא (No)', hebShort: 'לֹא', emoji: '❌🙅‍♀️', hint: 'No פירושו לא!' },
  { eng: 'I Love You', heb: '💖 אֲנִי אוֹהֶבֶת אוֹתְךָ! (I Love You)', hebShort: 'אֲנִי אוֹהֶבֶת אוֹתְךָ', emoji: '💖🫂', hint: 'I Love You זה אני אוהבת אותך!' },
  { eng: 'Good Job', heb: '👏 כָּל הַכָּבוֹד / עֲבוֹדָה מְעוּלָה! (Good Job)', hebShort: 'כָּל הַכָּבוֹד', emoji: '👏🏆', hint: 'הגננת ליה אומרת לילדים בגן Good Job — כל הכבוד!' },
  { eng: 'Mommy', heb: '👩 אִמָּא (Mommy)', hebShort: 'אִמָּא', emoji: '👩💖', hint: 'Mommy באנגלית זו אמא האהובה!' },
  { eng: 'Daddy', heb: '👨 אַבָּא (Daddy)', hebShort: 'אַבָּא', emoji: '👨💙', hint: 'Daddy באנגלית זה אבא האהוב!' },
  { eng: 'Brother', heb: '👦 אָח (Brother — כְּמוֹ עִילַי!)', hebShort: 'אָח', emoji: '👦⚽', hint: 'Brother הוא אח — כמו עילי אח של ליה!' },
  { eng: 'Sister', heb: '👧 אָחוֹת (Sister — כְּמוֹ לִיָּה!)', hebShort: 'אָחוֹת', emoji: '👧🦄', hint: 'Sister היא אחות — כמו ליה המתוקה!' },
  { eng: 'Baby', heb: '👶 תִּינוֹק / תִּינוֹקֶת (Baby)', hebShort: 'תִּינוֹק', emoji: '👶🍼', hint: 'Baby הוא תינוק חמוד!' },
  { eng: 'Family', heb: '👨‍👩‍👧‍👦 מִשְׁפָּחָה (Family / Ohana)', hebShort: 'מִשְׁפָּחָה', emoji: '💙🌺👨‍👩‍👧‍👦', hint: 'כמו שסטיץ׳ אומר: Ohana means Family — משפחה!' },
  { eng: 'Friend', heb: '👯‍♀️ חֲבֵרָה / חָבֵר טוֹב (Friend)', hebShort: 'חֲבֵרָה טוֹבָה', emoji: '👯‍♀️💖', hint: 'Friend הוא חבר או חברה טובה בגן!' },
  { eng: 'Teacher', heb: '👩‍🏫 גַּנֶּנֶת / מוֹרָה (Teacher)', hebShort: 'גַּנֶּנֶת', emoji: '👩‍🏫⭐', hint: 'Teacher היא גננת או מורה — בדיוק כמו הגננת ליה!' },
  { eng: 'Happy', heb: '😊 שְׂמֵחָה (Happy)', hebShort: 'שְׂמֵחָה', emoji: '😊🎉', hint: 'Happy זה שמחה ומחייכת!' },
  { eng: 'Sad', heb: '😢 עֲצוּבָה (Sad)', hebShort: 'עֲצוּבָה', emoji: '😢💧', hint: 'Sad זה עצובה!' },
  { eng: 'Excited', heb: '🤩 מִתְרַגֶּשֶׁת מְאוֹד! (Excited)', hebShort: 'מִתְרַגֶּשֶׁת', emoji: '🤩🎉', hint: 'Excited זה מתרגשת ושמחה מאוד!' },
  { eng: 'Sleepy', heb: '🥱 עֲיֵפָה / רוֹצָה לִישׁוֹן (Sleepy)', hebShort: 'עֲיֵפָה', emoji: '🥱🌙', hint: 'Sleepy זה עייפה ומוכנה לישון!' },
  { eng: 'Hug', heb: '🫂 חִיבּוּק חַם (Hug)', hebShort: 'חִיבּוּק', emoji: '🫂💖', hint: 'Hug הוא חיבוק חם ואוהב!' },
  { eng: 'Kiss', heb: '💋 נְשִׁיקָה (Kiss)', hebShort: 'נְשִׁיקָה', emoji: '💋🩷', hint: 'Kiss היא נשיקה מתוקה!' }
];

const LIA_TOYS_BODY_HOME = [
  { eng: 'Doll', heb: '🪆 בֻּבָּה (Doll)', hebShort: 'בֻּבָּה', emoji: '🪆🎀', hint: 'Doll היא בובה שאוהבים לשחק ולאפר!' },
  { eng: 'Teddy Bear', heb: '🧸 דֻּבִּי צַעֲצוּעַ (Teddy Bear)', hebShort: 'דֻּבִּי צַעֲצוּעַ', emoji: '🧸💛', hint: 'Teddy Bear הוא דובי פרווה רך שמחבקים!' },
  { eng: 'Balloon', heb: '🎈 בָּלוֹן (Balloon)', hebShort: 'בָּלוֹן', emoji: '🎈🎉', hint: 'Balloon הוא בלון צבעוני של מסיבה!' },
  { eng: 'Ball', heb: '⚽ כַּדּוּר מִשְׂחָק (Ball)', hebShort: 'כַּדּוּר', emoji: '⚽🏀', hint: 'Ball הוא כדור משחק!' },
  { eng: 'Puzzle', heb: '🧩 פָּאזֶל / תַּצְרֵף (Puzzle)', hebShort: 'פָּאזֶל', emoji: '🧩✨', hint: 'Puzzle הוא משחק הרכבה של חלקים!' },
  { eng: 'Book', heb: '📖 סֵפֶר סִיפּוּרִים (Book)', hebShort: 'סֵפֶר', emoji: '📖🧚‍♀️', hint: 'Book הוא ספר סיפורים שהגננת ליה מקריאה בגן!' },
  { eng: 'Gift', heb: '🎁 מַתָּנָה עֲטוּפָה (Gift)', hebShort: 'מַתָּנָה', emoji: '🎁🎀', hint: 'Gift (או Present) היא מתנה משמחת!' },
  { eng: 'Paint', heb: '🎨 צִבְעֵי צִיּוּר (Paint)', hebShort: 'צִבְעֵי צִיּוּר', emoji: '🎨🖌️', hint: 'Paint הם צבעים שמציירים איתם בגן!' },
  { eng: 'Dance', heb: '💃 לִרְקֹד (Dance)', hebShort: 'לִרְקֹד', emoji: '💃🎶', hint: 'Dance זה לרקוד עם מוזיקה שמחה!' },
  { eng: 'Sing', heb: '🎤 לָשִׁיר שִׁיר (Sing)', hebShort: 'לָשִׁיר', emoji: '🎤🎵', hint: 'Sing זה לשיר שירים יפים!' },
  { eng: 'Jump', heb: '🤸‍♀️ לִקְפֹּץ גָּבוֹהַּ (Jump)', hebShort: 'לִקְפֹּץ', emoji: '🤸‍♀️⭐', hint: 'Jump זה לקפוץ גבוה בשמחה!' },
  { eng: 'Sleep', heb: '😴 לִישׁוֹן בַּמִּיטָּה (Sleep)', hebShort: 'לִישׁוֹן', emoji: '😴🛏️', hint: 'Sleep זה לישון בלילה ולחלום חלומות מתוקים!' },
  { eng: 'Smile', heb: '😁 חִיּוּךְ גָּדוֹל (Smile)', hebShort: 'חִיּוּךְ', emoji: '😁✨', hint: 'Smile הוא חיוך מתוק כשמצטלמים!' },
  { eng: 'Heart', heb: '💖 לֵב (Heart)', hebShort: 'לֵב', emoji: '💖✨', hint: 'Heart הוא לב של אהבה!' },
  { eng: 'Eyes', heb: '👀 עֵינַיִם (Eyes)', hebShort: 'עֵינַיִם', emoji: '👀✨', hint: 'Eyes הן העיניים היפות שאיתן רואים (ושמים מעליהן צללית נוצצת)!' },
  { eng: 'Hands', heb: '👐 יָדַיִם (Hands)', hebShort: 'יָדַיִם', emoji: '👐💅', hint: 'Hands הן שתי הידיים שלנו!' },
  { eng: 'Hair', heb: '💇‍♀️ שֵׂיעָר (Hair)', hebShort: 'שֵׂיעָר', emoji: '💇‍♀️🎀', hint: 'Hair הוא השיער שמסרקים ומקשטים בסרט או כתר!' },
  { eng: 'House', heb: '🏠 בַּיִת (House)', hebShort: 'בַּיִת', emoji: '🏠🌳', hint: 'House הוא הבית החם שלנו!' },
  { eng: 'Bed', heb: '🛏️ מִיטָּה (Bed)', hebShort: 'מִיטָּה', emoji: '🛏️🌙', hint: 'Bed היא המיטה הנעימה שישנים בה!' },
  { eng: 'Car', heb: '🚗 מְכוֹנִית / אוֹטוֹ (Car)', hebShort: 'מְכוֹנִית', emoji: '🚗🛣️', hint: 'Car היא מכונית שנוסעים בה!' },
  { eng: 'Airplane', heb: '✈️ מָטוֹס בַּשָּׁמַיִם (Airplane)', hebShort: 'מָטוֹס', emoji: '✈️☁️', hint: 'Airplane הוא מטוס שטס גבוה מעל העננים!' },
  { eng: 'Castle', heb: '🏰 אַרְמוֹן שֶׁל נְסִיכָה (Castle)', hebShort: 'אַרְמוֹן נְסִיכוֹת', emoji: '🏰👸', hint: 'Castle הוא ארמון קסום שבו גרות נסיכות!' }
];

const LIA_ENGLISH_PHRASES = [
  { eng: 'Pink Dress', heb: '👗🩷 שִׂמְלָה וְרֻדָּה (Pink Dress)', hebShort: 'שִׂמְלָה וְרֻדָּה', emoji: '👗🩷', hint: 'Pink = ורוד, Dress = שמלה: שמלה ורודה!' },
  { eng: 'Gold Crown', heb: '👑✨ כֶּתֶר זָהָב (Gold Crown)', hebShort: 'כֶּתֶר זָהָב', emoji: '👑✨', hint: 'Gold = זהב, Crown = כתר: כתר זהב של נסיכה!' },
  { eng: 'Blue Stitch', heb: '💙🌺 סְטִיץ׳ כָּחוֹל (Blue Stitch)', hebShort: 'סְטִיץ׳ כָּחוֹל', emoji: '💙🌺', hint: 'Blue = כחול, Stitch = סטיץ׳ החמוד!' },
  { eng: 'Red Lipstick', heb: '💄❤️ שְׂפָתוֹן אָדוֹם (Red Lipstick)', hebShort: 'שְׂפָתוֹן אָדוֹם', emoji: '💄❤️', hint: 'Red = אדום, Lipstick = שפתון!' },
  { eng: 'Purple Butterfly', heb: '🦋💜 פַּרְפַּר סָגוֹל (Purple Butterfly)', hebShort: 'פַּרְפַּר סָגוֹל', emoji: '🦋💜', hint: 'Purple = סגול, Butterfly = פרפר!' },
  { eng: 'Two Unicorns', heb: '🦄🦄 שְׁנֵי חַדֵּי-קֶרֶן (Two Unicorns)', hebShort: 'שְׁנֵי חַדֵּי-קֶרֶן', emoji: '🦄🦄', hint: 'Two = שתיים (2), Unicorns = חדי-קרן!' },
  { eng: 'Three Stars', heb: '⭐⭐⭐ שְׁלוֹשָׁה כּוֹכָבִים (Three Stars)', hebShort: 'שְׁלוֹשָׁה כּוֹכָבִים', emoji: '⭐⭐⭐', hint: 'Three = שלוש (3), Stars = כוכבים!' },
  { eng: 'Red Apple', heb: '🍎❤️ תַּפּוּחַ אָדוֹם (Red Apple)', hebShort: 'תַּפּוּחַ אָדוֹם', emoji: '🍎❤️', hint: 'Red = אדום, Apple = תפוח!' },
  { eng: 'Yellow Banana', heb: '🍌💛 בָּנָנָה צְהֻבָּה (Yellow Banana)', hebShort: 'בָּנָנָה צְהֻבָּה', emoji: '🍌💛', hint: 'Yellow = צהוב, Banana = בננה!' },
  { eng: 'Happy Girl', heb: '😊👧 יַלְדָּה שְׂמֵחָה (Happy Girl)', hebShort: 'יַלְדָּה שְׂמֵחָה', emoji: '😊👧', hint: 'Happy = שמחה, Girl = ילדה!' },
  { eng: 'Big Dog', heb: '🐶🦴 כֶּלֶב גָּדוֹל (Big Dog)', hebShort: 'כֶּלֶב גָּדוֹל', emoji: '🐶🦴', hint: 'Big = גדול, Dog = כלב!' },
  { eng: 'Little Cat', heb: '🐱🐾 חָתוּל קָטָן (Little Cat)', hebShort: 'חָתוּל קָטָן', emoji: '🐱🐾', hint: 'Little = קטן, Cat = חתול!' },
  { eng: 'Pink Shoes', heb: '👠🩷 נַעֲלַיִם וְרֻדּוֹת (Pink Shoes)', hebShort: 'נַעֲלַיִם וְרֻדּוֹת', emoji: '👠🩷', hint: 'Pink = ורוד, Shoes = נעליים!' },
  { eng: 'Sweet Ice Cream', heb: '🍦😋 גְּלִידָה מְתוּקָה (Sweet Ice Cream)', hebShort: 'גְּלִידָה מְתוּקָה', emoji: '🍦😋', hint: 'Sweet = מתוקה, Ice Cream = גלידה!' },
  { eng: 'Pink Balloon', heb: '🎈🩷 בָּלוֹן וָרוֹד (Pink Balloon)', hebShort: 'בָּלוֹן וָרוֹד', emoji: '🎈🩷', hint: 'Pink = ורוד, Balloon = בלון!' },
  { eng: 'Big Hug', heb: '🫂💖 חִיבּוּק גָּדוֹל (Big Hug)', hebShort: 'חִיבּוּק גָּדוֹל', emoji: '🫂💖', hint: 'Big = גדול, Hug = חיבוק!' }
];

const LIA_ALL_ENGLISH_WORDS = [
  ...LIA_GLAM_WORDS,
  ...LIA_STITCH_ANIMALS,
  ...LIA_NUMBERS_FOOD,
  ...LIA_MAGIC_WORDS,
  ...LIA_TOYS_BODY_HOME,
  ...LIA_ENGLISH_PHRASES
];

// Core 32 foundational words ("הבסיס של הבסיס") for a 5-year-old starting English from zero!
const LIA_BASIC_STARTER_ENG_SET = new Set([
  'Pink', 'Blue', 'Red', 'Yellow', 'Green', 'Purple',
  'One', 'Two', 'Three', 'Four', 'Five',
  'Dog', 'Cat', 'Unicorn', 'Butterfly', 'Fish', 'Bird', 'Bunny', 'Bear', 'Sun', 'Star', 'Flower',
  'Crown', 'Dress', 'Shoes', 'Lipstick',
  'Ice Cream', 'Apple', 'Banana', 'Cake',
  'Hello', 'Thank You', 'Mommy', 'Daddy', 'Happy', 'Doll', 'Balloon', 'Ball', 'Heart'
]);

function buildLiaEnglishQuestion(bank, categoryTitle, diff = 'medium') {
  // Filter to foundational basic words first so Lia learns the core basics without overwhelm!
  const basicPool = bank.filter(w => LIA_BASIC_STARTER_ENG_SET.has(w.eng));
  let activeBank = (diff !== 'hard' && basicPool.length >= 5) ? basicPool : bank;
  if (activeBank === LIA_ALL_ENGLISH_WORDS && diff !== 'hard') {
    activeBank = LIA_ALL_ENGLISH_WORDS.filter(w => LIA_BASIC_STARTER_ENG_SET.has(w.eng));
  }

  const item = activeBank[randInt(0, activeBank.length - 1)];
  const otherPool = activeBank.filter(x => x.eng !== item.eng && x.heb !== item.heb);
  const distractors = shuffle(otherPool).slice(0, 2); // Only 3 big picture cards for age 5!

  const hebClean = (item.hebShort || item.heb.replace(/\([^)]*\)/g, '')).trim();
  const mainEmoji = item.emoji || '🦄';
  const opts = shuffle([item.heb, ...distractors.map(d => d.heb)]);

  // Teach-First pedagogy for a 5-year-old who CANNOT read in ANY language (not Hebrew, not English!):
  // ALWAYS warmly TEACH the word in Hebrew + English first, show the giant picture, and let her tap the matching picture card!
  const ttsIntro = `ליה מתוקה, בואי נלמד מילה באנגלית! ${hebClean} באנגלית אומרים:`;

  return {
    isEnglish: true,
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `lia_eng_${item.eng}`,
    instruction: `🌱 לוֹמְדִים יַחַד (בְּלִי צֹרֶךְ לִקְרֹא!): <strong>${hebClean}</strong> בְּאַנְגְּלִית זֶה <strong>${item.eng}</strong>! לַחֲצִי עַל הַתְּמוּנָה שֶׁל <strong>${hebClean}</strong>:`,
    ttsText: ttsIntro,
    englishSpeechWord: item.eng,
    ttsFollowUpHeb: `עכשיו לחצי על התמונה של ${hebClean}!`,
    stimulusHtml: `
      <div style="background:linear-gradient(135deg,#fdf2f8,#f3e8ff);border:3px solid #f472b6;border-radius:20px;padding:12px 16px;text-align:center;box-shadow:0 6px 16px rgba(236,72,153,0.14);">
        <div style="font-size:4.2rem;line-height:1.12;margin-bottom:4px;">${mainEmoji}</div>
        <div style="font-size:1.85rem;font-weight:900;color:#db2777;letter-spacing:1px;direction:ltr;">🔊 ${item.eng.toUpperCase()}</div>
        <div style="font-size:1.25rem;font-weight:800;color:#6b21a8;margin-top:4px;">✨ בעברית: <strong>${hebClean}</strong></div>
      </div>
    `,
    rtlStimulus: false,
    options: opts,
    correctAnswers: [item.heb],
    hint: `${item.eng} בעברית זה ${hebClean}! ${item.hint}`
  };
}

function genLiaHebLetters() {
  // 12 core familiar kindergarten words & letters where every option starts with the GIANT PICTURE EMOJI first so Lia never has to read!
  const items = [
    { word: 'לִיָּה', emoji: '👧👑', sound: 'לְ', letter: '👧👑 ל׳ — לִיָּה', wrong: ['🦁 א׳ — אַרְיֵה', '☀️ ש׳ — שֶׁמֶשׁ'], hint: 'השם המתוק לִיָּה מתחיל בצליל לְ — האות ל׳!' },
    { word: 'אַבָּא וְאִמָּא', emoji: '👨👩', sound: 'אַ', letter: '👨👩 א׳ — אַבָּא וְאִמָּא', wrong: ['🎈 ב׳ — בָּלוֹן', '🍦 ג׳ — גְּלִידָה'], hint: 'אַבָּא וְאִמָּא מתחילים באות הראשונה: א׳!' },
    { word: 'סְטִיץ׳', emoji: '💙🌺', sound: 'סְ', letter: '💙🌺 ס׳ — סְטִיץ׳', wrong: ['👧👑 ל׳ — לִיָּה', '👑 כ׳ — כֶּתֶר'], hint: 'סְטִיץ׳ מתחיל בצליל סְ — האות ס׳!' },
    { word: 'חַד-קֶרֶן', emoji: '🦄🌈', sound: 'חַ', letter: '🦄🌈 ח׳ — חַד-קֶרֶן', wrong: ['🧸 ד׳ — דֻּבִּי', '🦋 פ׳ — פַּרְפַּר'], hint: 'חַד-קֶרֶן מתחיל בצליל חַ — האות ח׳!' },
    { word: 'בֻּבָּה', emoji: '🪆🎀', sound: 'בּוּ', letter: '🪆🎀 ב׳ — בֻּבָּה', wrong: ['☀️ ש׳ — שֶׁמֶשׁ', '👧👑 ל׳ — לִיָּה'], hint: 'בֻּבָּה מתחילה בצליל בּוּ — האות ב׳!' },
    { word: 'שֶׁמֶשׁ', emoji: '☀️💛', sound: 'שֶׁ', letter: '☀️💛 ש׳ — שֶׁמֶשׁ', wrong: ['🍎 א׳ — תַּפּוּחַ', '🧸 ד׳ — דֻּבִּי'], hint: 'שֶׁמֶשׁ מתחילה בצליל שֶׁ — האות ש׳!' },
    { word: 'כֶּתֶר', emoji: '👑✨', sound: 'כֶּ', letter: '👑✨ כ׳ — כֶּתֶר', wrong: ['🪆🎀 ב׳ — בֻּבָּה', '💙🌺 ס׳ — סְטִיץ׳'], hint: 'כֶּתֶר של נסיכה מתחיל באות כ׳!' },
    { word: 'גְּלִידָה', emoji: '🍦🍓', sound: 'גְּ', letter: '🍦🍓 ג׳ — גְּלִידָה', wrong: ['👧👑 ל׳ — לִיָּה', '🦋 פ׳ — פַּרְפַּר'], hint: 'גְּלִידָה מתוקה (וגם גַּן!) מתחילה באות ג׳!' },
    { word: 'דֻּבִּי', emoji: '🧸💛', sound: 'דּוּ', letter: '🧸💛 ד׳ — דֻּבִּי', wrong: ['🦁 א׳ — אַרְיֵה', '👑✨ כ׳ — כֶּתֶר'], hint: 'דֻּבִּי חמוד מתחיל באות ד׳!' },
    { word: 'פַּרְפַּר', emoji: '🦋🌸', sound: 'פַּ', letter: '🦋🌸 פ׳ — פַּרְפַּר', wrong: ['☀️💛 ש׳ — שֶׁמֶשׁ', '🎈 ב׳ — בָּלוֹן'], hint: 'פַּרְפַּר צבעוני מתחיל באות פ׳!' },
    { word: 'תּוּת', emoji: '🍓❤️', sound: 'תּוּ', letter: '🍓❤️ ת׳ — תּוּת', wrong: ['🍦🍓 ג׳ — גְּלִידָה', '🦄🌈 ח׳ — חַד-קֶרֶן'], hint: 'תּוּת מתוק מתחיל באות ת׳!' },
    { word: 'עִילַי', emoji: '👦⚽', sound: 'עִי', letter: '👦⚽ ע׳ — עִילַי', wrong: ['🧸💛 ד׳ — דֻּבִּי', '💙🌺 ס׳ — סְטִיץ׳'], hint: 'השם של אחיך עִילַי (וגם עוּגָה!) מתחיל באות ע׳!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  const rawLet = item.letter.split(' ')[1];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `heb_let_${item.word}`,
    instruction: `🔤 הַמִּילָה <strong>${item.word}</strong> מַתְחִילָה בָּאוֹת <strong>${rawLet}</strong>! לַחֲצִי עַל הַתְּמוּנָה שֶׁל <strong>${item.word}</strong>:`,
    ttsText: `ליה מתוקה, המילה ${item.word} מתחילה בצליל ${item.sound}, באות ${rawLet}! לחצי על התמונה של ${item.word}!`,
    stimulusHtml: `
      <div style="background:linear-gradient(135deg,#faf5ff,#fdf2f8);border:3px solid #c084fc;border-radius:20px;padding:12px 16px;text-align:center;">
        <div style="font-size:4rem;margin-bottom:4px;">${item.emoji}</div>
        <div style="font-size:2.4rem;font-weight:900;color:#7e22ce;">הָאוֹת ${rawLet} — ${item.word}</div>
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.letter, ...item.wrong]),
    correctAnswers: [item.letter],
    hint: item.hint
  };
}

function genLiaHebRhymes() {
  const items = [
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>גְּלִידָה 🍦</strong>?', tts: 'גלידה מתחרזת עם חידה! לחצי על חידה!', emoji: '🍦 🧩', ans: '🧩 חִידָה', wrong: ['🐶 כֶּלֶב', '☀️ שֶׁמֶשׁ'], hint: 'גְּלִידָה — חִידָה! שתי המילים מסתיימות בצליל דָה!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>בָּלוֹן 🎈</strong>?', tts: 'בלון מתחרז עם חלון! לחצי על חלון!', emoji: '🎈 🪟', ans: '🪟 חַלּוֹן', wrong: ['🎂 עוּגָה', '👑 כֶּתֶר'], hint: 'בָּלוֹן — חַלּוֹן! מסתיימים בצליל לוֹן!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>רַכֶּבֶת 🚂</strong>?', tts: 'מה מתחרז עם רכבת? ארנבת! לחצי על ארנבת!', emoji: '🚂 🐰', ans: '🐰 אַרְנֶבֶת', wrong: ['🍎 תַּפּוּחַ', '🐟 דָּג'], hint: 'רַכֶּבֶת — אַרְנֶבֶת! חרוז מתוק!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>חָתוּל 🐱</strong>?', tts: 'מה מתחרז עם חתול? שבלול! לחצי על שבלול!', emoji: '🐱 🐌', ans: '🐌 שַׁבְּלוּל', wrong: ['🎈 בָּלוֹן', '👗 שִׂמְלָה'], hint: 'חָתוּל — שַׁבְּלוּל! שניהם מסתיימים בצליל וּל!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>עוּגָה 🎂</strong>?', tts: 'מה מתחרז עם עוגה? חגיגה! לחצי על חגיגה!', emoji: '🎂 🎉', ans: '🎉 חֲגִיגָה', wrong: ['🐶 כֶּלֶב', '🌙 יָרֵחַ'], hint: 'עוּגָה — חֲגִיגָה! חרוז של יום הולדת!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם <strong>סִירָה ⛵</strong>?', tts: 'מה מתחרז עם סירה? שירה! לחצי על שירה!', emoji: '⛵ 🎤', ans: '🎤 שִׁירָה', wrong: ['🐘 פִּיל', '🍌 בָּנָנָה'], hint: 'סִירָה — שִׁירָה! חרוז מתוק!' },
    { type: 'opp', q: 'הַפִּיל הוּא <strong>גָּדוֹל 🐘</strong>, וְהָעַכְבָּר הוּא...', tts: 'הפיל הוא גדול, ומה ההפך מגדול? העכבר הוא קטן!', emoji: '🐘 ↔️ 🐭', ans: '🐭 קָטָן', wrong: ['☀️ חַם', '🎈 גָּבוֹהַּ'], hint: 'הפיל הוא גדול, והעכבר הוא קטן!' },
    { type: 'opp', q: 'בַּשֶּׁמֶשׁ יֵשׁ <strong>יוֹם ☀️</strong>, וּכְשֶׁיֵּשׁ יָרֵחַ זֶה...', tts: 'מה ההפך מן המילה יום? כשיש ירח וכוכבים זה לילה!', emoji: '☀️ ↔️ 🌙', ans: '🌙 לַיְלָה', wrong: ['🍦 גְּלִידָה', '👑 כֶּתֶר'], hint: 'ביום זורחת השמש, ובלילה זורח הירח!' },
    { type: 'opp', q: 'הַמָּרָק הוּא <strong>חַם 🔥</strong>, וְהַגְּלִידָה הִיא...', tts: 'המרק הוא חם, והגלידה היא קרה! לחצי על קר!', emoji: '🔥 ↔️ 🍦', ans: '🍦 קַר', wrong: ['🐢 אִטִּי', '🩷 וָרוֹד'], hint: 'ההפך מחם הוא קר (כמו גלידה קרה)!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>שָׂמֵחַ 😊</strong>?', tts: 'מה ההפך משמח? עצוב!', emoji: '😊 ↔️ 😢', ans: '😢 עָצוּב', wrong: ['🐘 גָּדוֹל', '🍬 מָתוֹק'], hint: 'ההפך משמח הוא עצוב!' },
    { type: 'opp', q: 'הָאַרְנָב רָץ <strong>מָהֵר 🐰</strong>, וְהַצָּב הוֹלֵךְ...', tts: 'הארנב רץ מהר, והצב הולך לאט!', emoji: '🐰 ↔️ 🐢', ans: '🐢 לְאַט (אִטִּי)', wrong: ['☀️ חַם', '👑 זָהָב'], hint: 'הצב הולך לאט!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `rhyme_${item.q}`,
    instruction: '🎵 חֲרוּזִים וַהֲפָכִים בִּתְמוּנוֹת עִם לִיָּה:',
    ttsText: `ליה מתוקה, ${item.tts}`,
    stimulusHtml: `<div style="font-size:3.2rem;margin-bottom:6px;">${item.emoji}</div><div style="font-size:1.45rem;font-weight:800;color:#1e293b;">${item.q}</div>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genLiaMathCounting(diff = 'medium') {
  const icons = [
    { icon: '🦄', name: 'חַדֵּי-קֶרֶן' },
    { icon: '👑', name: 'כְּתָרִים' },
    { icon: '🌺', name: 'פְּרָחִים שֶׁל סְטִיץ׳' },
    { icon: '⭐', name: 'כּוֹכָבִים' },
    { icon: '🦋', name: 'פַּרְפָּרִים' },
    { icon: '🍦', name: 'גְּלִידוֹת' },
    { icon: '🍓', name: 'תּוּתִים' },
    { icon: '🎈', name: 'בָּלוֹנִים' }
  ];
  const picked = icons[randInt(0, icons.length - 1)];
  const maxCount = diff === 'easy' ? 4 : diff === 'medium' ? 6 : 8;
  const minCount = diff === 'easy' ? 1 : 2;
  const count = randInt(minCount, maxCount);
  const visual = Array(count).fill(picked.icon).join(' ');

  // Build 3 clear number options
  const numOptsSet = new Set([count]);
  const candidates = [count - 1, count + 1, count + 2, count - 2].filter(n => n >= 1 && n <= 10 && n !== count);
  for (const c of candidates) {
    if (numOptsSet.size < 3) numOptsSet.add(c);
  }
  while (numOptsSet.size < 3) {
    numOptsSet.add(randInt(1, 6));
  }
  const countWordsHeb = ['', 'אחת', 'שתיים', 'שלוש', 'ארבע', 'חמש', 'שש', 'שבע', 'שמונה', 'תשע', 'עשר'];
  const formatVisualNumOpt = (n) => `${Array(n).fill(picked.icon).join('')} ${n} (${countWordsHeb[n] || n})`;
  const opts = shuffle(Array.from(numOptsSet).map(formatVisualNumOpt));
  const correctOpt = formatVisualNumOpt(count);
  const countSequence = Array.from({ length: count }, (_, idx) => idx + 1).join(', ');

  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `cnt_${picked.icon}_${count}`,
    instruction: `🦄 בּוֹאִי נִסְפֹּר יַחַד: כַּמָּה ${picked.name} יֵשׁ בַּתְּמוּנָה?`,
    ttsText: `ליה מתוקה, בואי נספור יחד כמה ${picked.name} יש בתמונה: ${countSequence}! יש לנו ${countWordsHeb[count] || count} ${picked.name}! לחצי על הכרטיס עם ${countWordsHeb[count] || count}!`,
    stimulusHtml: `
      <div style="background:linear-gradient(135deg,#fdf2f8,#f5f3ff);border:3px solid #f472b6;border-radius:20px;padding:14px;">
        <div style="font-size:3.4rem;letter-spacing:10px;line-height:1.45;">${visual}</div>
        <div style="font-size:1.4rem;font-weight:900;color:#db2777;margin-top:6px;">${count} — ${countWordsHeb[count] || count}</div>
      </div>
    `,
    rtlStimulus: false,
    options: opts,
    correctAnswers: [correctOpt],
    hint: `בואי נספור באצבע: ${countSequence} — יש כאן ${count} ${picked.name}!`
  };
}

function genLiaLogicPatterns() {
  const patterns = [
    { seq: '🦄 , 💙 , 🦄 , 💙 , 🦄 , ', ans: '💙 סְטִיץ׳ כָּחוֹל', wrong: ['🍎 תַּפּוּחַ', '🚗 מְכוֹנִית'], tts: 'חד קרן, לב כחול, חד קרן, לב כחול, חד קרן. אחרי חד קרן בא לב כחול!', hint: 'הסדרה מתחלפת: חד-קרן ואז לב כחול של סטיץ׳!' },
    { seq: '💄 , 👑 , 💄 , 👑 , 💄 , ', ans: '👑 כֶּתֶר', wrong: ['🐶 כֶּלֶב', '🍌 בָּנָנָה'], tts: 'שפתון, כתר, שפתון, כתר, שפתון. אחרי שפתון בא כתר!', hint: 'אחרי כל שפתון מגיע כתר נוצץ!' },
    { seq: '🌸 , 🦋 , 🌸 , 🦋 , 🌸 , ', ans: '🦋 פַּרְפַּר', wrong: ['🍦 גְּלִידָה', '🐱 חָתוּל'], tts: 'פרח, פרפר, פרח, פרפר, פרח. אחרי פרח בא פרפר!', hint: 'אחרי הפרח הוורוד מגיע פרפר!' },
    { seq: '⭐ , 🌙 , ⭐ , 🌙 , ⭐ , ', ans: '🌙 יָרֵחַ', wrong: ['👗 שִׂמְלָה', '🍎 תַּפּוּחַ'], tts: 'כוכב, ירח, כוכב, ירח, כוכב. אחרי כוכב בא ירח!', hint: 'אחרי הכוכב מגיע הירח!' },
    { seq: '🍦 , 🍓 , 🍦 , 🍓 , 🍦 , ', ans: '🍓 תּוּת שָׂדֶה', wrong: ['🐸 צְפַרְדֵּעַ', '⚽ כַּדּוּר'], tts: 'גלידה, תות, גלידה, תות, גלידה. אחרי גלידה בא תות!', hint: 'אחרי כל גלידה מגיע תות מתוק!' },
    { seq: '🩷 , 💜 , 🩷 , 💜 , 🩷 , ', ans: '💜 לֵב סָגוֹל', wrong: ['💚 לֵב יָרוֹק', '🖤 לֵב שָׁחוֹר'], tts: 'לב ורוד, לב סגול, לב ורוד, לב סגול, לב ורוד. עכשיו בא לב סגול!', hint: 'הצבעים מתחלפים: ורוד ואז סגול!' },
    { seq: '🐶 , 🐱 , 🐶 , 🐱 , 🐶 , ', ans: '🐱 חָתוּל', wrong: ['🐘 פִּיל', '👑 כֶּתֶר'], tts: 'כלב, חתול, כלב, חתול, כלב. אחרי הכלב בא חתול!', hint: 'אחרי הכלב מגיע החתול!' },
    { seq: '☀️ , 🌈 , ☀️ , 🌈 , ☀️ , ', ans: '🌈 קֶשֶׁת בֶּעָנָן', wrong: ['👠 נַעַל', '🍕 פִּיצָה'], tts: 'שמש, קשת בענן, שמש, קשת בענן, שמש. אחרי השמש באה קשת בענן!', hint: 'אחרי השמש מופיעה הקשת בענן!' }
  ];
  const item = patterns[randInt(0, patterns.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `pat_${item.seq}`,
    instruction: '🌈 מִשְׂחַק הַסִּדְרוֹת שֶׁל לִיָּה: מִי בָּא עַכְשָׁיו בַּתּוֹר?',
    ttsText: `ליה חכמה, ${item.tts}`,
    stimulusHtml: `<div style="font-size:2.4rem;direction:ltr;background:#fdf2f8;padding:12px;border-radius:18px;border:2px solid #f472b6;">${item.seq}<span class="mystery-box">?</span></div>`,
    rtlStimulus: false,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

// ==================== SCIENCE & "HOW THINGS WORK" DISCOVERY ENGINE (מדע ואיך דברים עובדים) ====================

const SCIENCE_DISCOVERY_CARDS = [
  // --- CATEGORY 1: PHYSICS, SOCCER & FLIGHT (פיזיקה, כדורגל ותעופה) ---
  {
    id: 'sci_banana_kick',
    cat: 'physics',
    icon: '⚽🌪️',
    title: 'איך כדורגל מסתובב באוויר ("בעיטת בננה")?',
    engWord: 'Spin & Airflow',
    engHeb: 'סיבוב וזרימת אוויר',
    steps: [
      '1️⃣ בועטים בצד הכדור 👟⚽ (ולא באמצע)',
      '2️⃣ הכדור מסתובב מהר באוויר 🌪️⚽',
      '3️⃣ האוויר דוחף אותו במסלול עקום לחיבורים! ↪️🥅'
    ],
    explain: 'כשבועטים בצד של הכדור (כמו אמבפה או ירדן שועה בבעיטה חופשית), הכדור מסתובב סביב עצמו תוך כדי מעוף. צד אחד של הכדור דוחף את האוויר מהר יותר מהצד השני, והפרש הלחצים באוויר גורם לכדור להתעקל באוויר כמו בננה ישר לתוך השער! במדע קוראים לזה "אפקט מגנוס".',
    experiment: '🧪 נסה בעצמך: גלגל בלון או כדור קל על הרצפה ותן לו מכה קטנה מהצד — תראה איך הוא פונה הצידה במקום להמשיך ישר!',
    funFact: '🤯 הידעת? בבעיטה חופשית של כוכבי ליגת האלופות, הכדור מסתובב כ-10 סיבובים שלמים בכל שנייה באוויר!',
    quizQ: 'מָה גּוֹרֵם לְכַדּוּרֶגֶל לְהִסְתּוֹבֵב בָּאֲוִיר וְלַעֲשׂוֹת "בְּעִיטַת בָּנָנָה" לַשַּׁעַר?',
    quizAns: '🌪️ הַסִּיבּוּב שֶׁל הַכַּדּוּר בָּאֲוִיר שֶׁיּוֹצֵר דְּחִיפָה מֵהָאֲוִיר מִסָּבִיב',
    quizWrong: ['🧲 מַגְנֵט חָזָק שֶׁנִּמְצָא בְּתוֹךְ קוֹרוֹת הַשַּׁעַר', '🔋 סוֹלְלָה חַשְׁמָלִית שֶׁמְּחֻבֶּרֶת לַכַּדּוּר', '🧊 הַכַּדּוּר קוֹפֵא בָּאֲוִיר וּמְשַׁנֶּה צוּרָה'],
    quizHint: 'כשבועטים בצד הכדור הוא מסתובב מהר והאוויר מטה את המסלול שלו!'
  },
  {
    id: 'sci_gravity',
    cat: 'physics',
    icon: '🌍🍎',
    title: 'למה הכדור תמיד נופל חזרה לדשא? (כוח הכבידה)',
    engWord: 'Gravity',
    engHeb: 'כוח הכבידה (גרביטציה)',
    steps: [
      '1️⃣ השוער בועט כדור גבוה לשמיים 🦵⚽⬆️',
      '2️⃣ כדור הארץ מושך את הכדור אליו כמו מגנט ענק 🌍🧲',
      '3️⃣ הכדור מאט בשיא הגובה וחוזר לדשא! ⬇️🌱'
    ],
    explain: 'לכדור הארץ שלנו יש כוח משיכה בלתי נראה שנקרא "כוח הכבידה" (Gravity). הכוח הזה מושך כל דבר כלפי מטה אל הקרקע — אותנו, את הכדור במגרש, ואפילו את מי הים! בזכות כוח הכבידה אנחנו לא מרחפים לחלל כשקופצים!',
    experiment: '🧪 נסה בעצמך: קפוץ הכי גבוה שאתה יכול! מי החזיר אותך לרצפה? כוח הכבידה של כדור הארץ!',
    funFact: '🤯 הידעת? על הירח כוח הכבידה חלש פי 6 מבכדור הארץ! אם היית משחק כדורגל על הירח, כל קפיצה לנגיחה הייתה מגיעה לגובה של בניין!',
    quizQ: 'אֵיךְ נִקְרָא הַכֹּחַ שֶׁל כַּדּוּר הָאָרֶץ שֶׁמּוֹשֵׁךְ אֶת הַכַּדּוּר (וְאוֹתָנוּ) חֲזָרָה לַקַּרְקַע?',
    quizAns: '🌍 כֹּחַ הַכְּבִידָה (Gravity)',
    quizWrong: ['⚡ כֹּחַ הַחַשְׁמַל הַסּוֹלָרִי', '🌈 קֶשֶׁת בֶּעָנָן', '🔊 גַּלֵּי הַקּוֹל בָּאֲוִיר'],
    quizHint: 'זהו כוח המשיכה של כדור הארץ שנקרא באנגלית Gravity!'
  },
  {
    id: 'sci_airplane',
    cat: 'physics',
    icon: '✈️☁️',
    title: 'איך מטוס ענק וכבד ממריא ועף בשמיים?',
    engWord: 'Airplane & Lift',
    engHeb: 'מטוס וכוח העילוי',
    steps: [
      '1️⃣ המנועים דוחפים את המטוס קדימה במהירות אדירה 🚀',
      '2️⃣ הכנפיים המעוגלות חותכות את האוויר ✈️💨',
      '3️⃣ האוויר מתחת לכנף דוחף את המטוס למעלה! ⬆️☁️'
    ],
    explain: 'הכנפיים של המטוס בנויות בצורה מיוחדת (מעוגלת למעלה ושטוחה למטה). כשהמטוס מאיץ על המסלול, האוויר זורם מהר מעל הכנף ויוצר לחץ חזק מתחת לכנף שמרים את כל המטוס למעלה! לכוח שמרים אותו קוראים "כוח העילוי" (Lift).',
    experiment: '🧪 נסה בעצמך: החזק דף נייר קרוב לפה ונשוף חזק מעליו — תראה שהדף מתרומם למעלה במקום לרדת!',
    funFact: '🤯 הידעת? ציפורים דואות בשמיים בדיוק לפי אותו עיקרון של כנפי המטוס!',
    quizQ: 'אֵיזֶה חֵלֶק בַּמָּטוֹס בָּנוּי בְּצוּרָה מְיֻחֶדֶת שֶׁגּוֹרֶמֶת לָאֲוִיר לְהָרִים אֶת הַמָּטוֹס לַשָּׁמַיִם?',
    quizAns: '✈️ הַכְּנָפַיִם שֶׁל הַמָּטוֹס (שֶׁיּוֹצְרוֹת כֹּחַ עִילוּי)',
    quizWrong: ['🪑 הַכִּסְאוֹת שֶׁל הַנּוֹסְעִים בַּמָּטוֹס', '🪟 הַחַלּוֹנוֹת הַקְּטַנִּים בַּצדָדִים', '🧳 תָּא הַמִּזְוָדוֹת בַּבֶּטֶן'],
    quizHint: 'בדיוק כמו לציפורים, החלק שחותך את האוויר בצדדים מרים את המטוס!'
  },

  // --- CATEGORY 2: SPACE, EARTH & WEATHER (חלל, כדור הארץ ומזג אוויר) ---
  {
    id: 'sci_day_night',
    cat: 'space',
    icon: '🌞🌍🌙',
    title: 'איך נוצרים יום ולילה על כדור הארץ?',
    engWord: 'Day & Night',
    engHeb: 'יום ולילה',
    steps: [
      '1️⃣ השמש מאירה בחלל כמו פנס ענק ☀️',
      '2️⃣ כדור הארץ מסתובב סביב עצמו כמו סביבון 🌍🔄',
      '3️⃣ הצד שפונה לשמש נמצא ביום ☀️ והצד החשוך בלילה 🌙!'
    ],
    explain: 'השמש לא באמת "הולכת לישון" בלילה! כדור הארץ שלנו מסתובב סביב עצמו בלי הפסקה ומשלים סיבוב שלם כל 24 שעות (יממה). כשישראל פונה לכיוון השמש — יש לנו אור ויום. כשכדור הארץ מסתובב וישראל בצד השני — נהיה אצלנו חושך ולילה, ובאותו זמן באמריקה יש יום!',
    experiment: '🧪 נסה בעצמך: האר עם פנס של טלפון על כדורגל בחדר חשוך וסובב את הכדור לאט — תראה איך חצי כדור מואר (יום) וחצי מוצל (לילה)!',
    funFact: '🤯 הידעת? כדור הארץ גם מקיף את השמש במסלול ענק שלוקח בדיוק שנה שלמה (365 ימים)!',
    quizQ: 'מַדּוּעַ יֵשׁ לָנוּ אוֹר בַּיּוֹם וְחֹשֶׁךְ בַּלַּיְלָה?',
    quizAns: '🌍 כִּי כַּדּוּר הָאָרֶץ מִסְתּוֹבֵב סְבִיב עַצְמוֹ מוּל הַשֶּׁמֶשׁ כָּל 24 שָׁעוֹת',
    quizWrong: ['☀️ כִּי הַשֶּׁמֶשׁ נִכְבֵּית בַּלַּיְלָה כְּמוֹ מְנוֹרָה', '☁️ כִּי עֲנָנִים שְׁחוֹרִים מְכַסִּים אֶת כָּל הֶחָלָל', '🌙 כִּי הַיָּרֵחַ בּוֹלֵעַ אֶת הַשֶּׁמֶשׁ בָּעֶרֶב'],
    quizHint: 'זכרו את ניסוי הפנס והכדור המסתובב!'
  },
  {
    id: 'sci_rainbow',
    cat: 'space',
    icon: '🌈☀️🌧️',
    title: 'איך נוצרת קשת בענן אחרי הגשם?',
    engWord: 'Rainbow',
    engHeb: 'קשת בענן',
    steps: [
      '1️⃣ יורד גשם ובאותו זמן השמש זורחת 🌧️☀️',
      '2️⃣ קרן האור של השמש נכנסת לטיפות המים השקופות 💧',
      '3️⃣ הטיפה מפרקת את האור הלבן ל-7 צבעים מרהיבים! 🌈'
    ],
    explain: 'האור של השמש נראה לנו לבן או צהבהב, אבל האמת היא שהוא מורכב מכל צבעי הקשת יחד! כשיש בועות או טיפות גשם באוויר והשמש מאירה עליהן, כל טיפת מים פועלת כמו מנסרה של קסם שמפרידה את האור ל-7 צבעים: אדום, כתום, צהוב, ירוק, תכלת, כחול וסגול!',
    experiment: '🧪 נסה בעצמך: כדי לראות קשת בענן, עמוד כשגבך מופנה אל השמש והסתכל לכיוון שבו יורד הגשם (או השפרץ מים מצינור בגינה בשמש)!',
    funFact: '🤯 הידעת? קשת בענן היא בעצם עיגול שלם! מהקרקע אנחנו רואים רק חצי עיגול, אבל מטייסים במטוס אפשר לפעמים לראות קשת עגולה לגמרי!',
    quizQ: 'מָתַי נוֹצֶרֶת קֶשֶׁת בֶּעָנָן בַּשָּׁמַיִם?',
    quizAns: '🌈 כְּשֶׁאוֹר הַשֶּׁמֶשׁ עוֹבֵר דֶּרֶךְ טִיפּוֹת הַגֶּשֶׁם בָּאֲוִיר וּמִתְפָּרֵק לִצְבָעִים',
    quizWrong: ['🌙 רַק בְּאֶמְצַע הַלַּיְלָה כְּשֶׁיֵּשׁ יָרֵחַ מָלֵא', '❄️ כְּשֶׁאֵין שׁוּם עָנָן וְאֵין טִיפּוֹת מַיִם בָּאֲוִיר', '🎨 כְּשֶׁמָּטוֹס מְפַזֵּר צְבָעִים בַּשָּׁמַיִם'],
    quizHint: 'צריך שילוב של שמש ☀️ וטיפות מים 💧 באוויר!'
  },
  {
    id: 'sci_lightning_thunder',
    cat: 'space',
    icon: '⚡🌩️',
    title: 'איך נוצרים ברק ורעם, ולמה הברק נראה קודם?',
    engWord: 'Lightning & Thunder',
    engHeb: 'ברק ורעם',
    steps: [
      '1️⃣ טיפות קרח מתנגשות בתוך הענן ויוצרות חשמל ☁️⚡',
      '2️⃣ ניצוץ ענק של ברק מאיר את השמיים במהירות האור ⚡👀',
      '3️⃣ הברק מחמם את האוויר ויוצר בום קולי — הרעם! 💥👂'
    ],
    explain: 'בתוך ענני סערה גבוהים, גבישי קרח וטיפות מים מתנגשים זה בזה ויוצרים חשמל סטטי אדיר. כשהחשמל קופץ מהענן — זהו הברק! הברק מחמם את האוויר סביבו בשבריר שנייה, והאוויר מתרחב בפיצוץ קולי שנקרא רעם. בגלל שהאור נע הרבה יותר מהר מהקול, אנחנו תמיד רואים את הברק בעיניים לפני ששומעים את הרעם באוזניים!',
    experiment: '🧪 נסה בעצמך: בחורף, כשאתה רואה ברק, ספור שניות ("אחת, שתיים, שלוש...") עד שתשמע את הרעם. כל 3 שניות אומרות שהסערה במרחק קילומטר אחד ממך!',
    funFact: '🤯 הידעת? מהירות האור היא 300,000 קילומטר בשנייה — פי מיליון יותר מהיר ממהירות הקול!',
    quizQ: 'מַדּוּעַ אֲנַחְנוּ רוֹאִים אֶת הַבָּרָק בָּעֵינַיִם לִפְנֵי שֶׁאֲנַחְנוּ שׁוֹמְעִים אֶת הָרַעַם בָּאָזְנַיִם?',
    quizAns: '⚡ כִּי הָאוֹר נָע הַרְבֵּה יוֹתֵר מָהֵר מֵהַקּוֹל!',
    quizWrong: ['👂 כִּי הָאָזְנַיִם שֶׁלָּנוּ יְשֵׁנוֹת בַּחֹרֶף', '☁️ כִּי הָרַעַם נוֹצָר בְּעָנָן אַחֵר בְּמֶרְחָק רַב', '🌧️ כִּי הַגֶּשֶׁם עוֹצֵר אֶת הַבָּרָק'],
    quizHint: 'השוו בין מהירות האור (לעיניים) למהירות הקול (לאוזניים)!'
  },
  {
    id: 'sci_rocket',
    cat: 'space',
    icon: '🚀🌕',
    title: 'איך טיל חלל ממריא לירח ואיך אסטרונאוטים מרחפים?',
    engWord: 'Space Rocket',
    engHeb: 'טיל חלל',
    steps: [
      '1️⃣ מנועי הטיל פולטים אש וגזים בעוצמה כלפי מטה 🔥⬇️',
      '2️⃣ הדחף מרים את הטיל למעלה אל מחוץ לאטמוספירה 🚀⬆️',
      '3️⃣ בחלל האסטרונאוטים מרחפים בחוסר משקל! 🧑‍🚀✨'
    ],
    explain: 'בחלל אין אוויר, ולכן מטוס רגיל לא יכול לטוס שם. טיל חלל פועל לפי חוק הדחף: המנועים שלו דוחפים אש וגזים חזק מאוד כלפי מטה, ובתגובה הטיל נדחף בעוצמה אדירה כלפי מעלה (בדיוק כמו בלון שמנפחים ועוזבים אותו בחדר!).',
    experiment: '🧪 נסה בעצמך: נפח בלון (בלי לקשור אותו) ושחרר אותו — האוויר שיוצא אחורה דוחף את הבלון קדימה כמו טיל חלל!',
    funFact: '🤯 הידעת? בחלל אין אוויר ולכן אי אפשר לשמוע קולות בחוץ — האסטרונאוטים מדברים ביניהם במכשיר קשר בתוך הקסדה!',
    quizQ: 'אֵיךְ טִיל חָלָל מַצְלִיחַ לְהַמְרִיא לְמַעְלָה אֶל הֶחָלָל?',
    quizAns: '🚀 הַמְּנוֹעִים פּוֹלְטִים אֵשׁ וְגָזִים חָזָק כְּלַפֵּי מַטָּה, וְהַדַּחַף מֵרִים אֶת הַטִּיל לְמַעְלָה',
    quizWrong: ['🎈 קוֹשְׁרִים לַטִּיל הֲמוֹן בָּלוֹנֵי הֶלְיוּם צִבְעוֹנִיִּים', '🦅 צִיפּוֹרִים עֲנָקִיּוֹת מְרִימוֹת אוֹתוֹ עַל הַכְּנָפַיִם', '🧲 הַיָּרֵחַ מוֹשֵׁךְ אוֹתוֹ בְּמַגְנֵט חַשְׁמָלִי'],
    quizHint: 'בדיוק כמו בלון שמשחררים — האוויר יוצא למטה והבלון טס למעלה!'
  },

  // --- CATEGORY 3: NATURE, PLANTS & ANIMALS (טבע, צמחים ובעלי חיים) ---
  {
    id: 'sci_plants_sun',
    cat: 'nature',
    icon: '🌳☀️💧',
    title: 'איך עץ וצמחים אוכלים, שותים ומייצרים לנו חמצן?',
    engWord: 'Photosynthesis & Plants',
    engHeb: 'פוטוסינתזה וצמיחת העץ',
    steps: [
      '1️⃣ השורשים בקרקע שותים מים 💧🌱',
      '2️⃣ העלים הירוקים קולטים את אור השמש ☀️🍃',
      '3️⃣ העץ מייצר לעצמו מזון ומשחרר לנו חמצן לנשימה! 🌳💨'
    ],
    explain: 'עצים וצמחים לא הולכים לסופרמרקט! הם מכינים לעצמם את המזון בתוך העלים הירוקים שלהם: השורשים יונקים מים מהקרקע, והעלה הירוק קולט את אור השמש ואוויר. יחד הם הופכים אותם למזון מתוק שמצמיח את העץ, ועל הדרך משחררים לאוויר חמצן נקי שכולנו נושמים! (בקיץ בלי מים העלה מתייבש והופך לצהוב!).',
    experiment: '🧪 נסה בעצמך: שים גרגירי חומוס או שעועית על צמר גפן רטוב ליד החלון — תוך ימים ספורים תראה שורשים לבנים ועלה ירוק שפונה לכיוון האור!',
    funFact: '🤯 הידעת? הצבע הירוק בעלים נקרא "כלורופיל" — הוא כמו פאנל סולארי טבעי שקולט את אור השמש!',
    quizQ: 'מָה צָרִיךְ הָעֵץ כְּדֵי לְיַצֵּר לְעַצְמוֹ מָזוֹן בֶּעָלִים הַיְּרֻקִּים וְלֹא לְהִתְיַבֵּשׁ?',
    quizAns: '☀️💧 אוֹר מֵהַשֶּׁמֶשׁ, מַיִם מֵהַקַּרְקַע וַאֲוִיר',
    quizWrong: ['🍕 פִּיצָה, שׁוֹקוֹלָד וּמִיץ פֶּטֶל', '🌙 רַק חֹשֶׁךְ מֻחְלָט בְּלִי שֶׁמֶשׁ וּבְלִי מַיִם', '🧊 קֻבִּיּוֹת קֶרַח וּמֶלַח עַל הֶעָלִים'],
    quizHint: 'השורשים שותים מים מהקרקע והעלים הירוקים קולטים אור מהשמש!'
  },
  {
    id: 'sci_butterfly',
    cat: 'nature',
    icon: '🐛🦋',
    title: 'איך זחל קטן הופך לפרפר צבעוני מרהיב?',
    engWord: 'Butterfly Life Cycle',
    engHeb: 'גלגול הפרפר',
    steps: [
      '1️⃣ מביצה קטנטנה על עלה בוקע זחל רעב שזולל עלים 🥚➔🐛',
      '2️⃣ הזחל בונה לעצמו מעטפת שנקראת "גולם" ונח בתוכה 🐚',
      '3️⃣ הגולם נפתח ויוצא ממנו פרפר מרהיב עם כנפיים! 🦋✨'
    ],
    explain: 'הפרפר עובר את אחד הקסמים הכי מדהימים בטבע שנקרא "גלגול מלא": קודם הפרפרית מטילה ביצה קטנה על עלה. מהביצה בוקע זחל שאוכל המון עלים ירוקים וגדל. אחר כך הזחל עוטף את עצמו ב"גולם", ובתוך הגולם גופו משתנה לגמרי ומצמיח כנפיים צבעוניות — עד שהוא בוקע כפרפר!',
    experiment: '🧪 בגינה באביב: חפשו פרפרים סביב פרחים צבעוניים — הפרפרים שותים צוף מתוק מהפרחים בעזרת חדק ארוך שמתגלגל כמו קשית!',
    funFact: '🤯 הידעת? פרפרים טועמים את האוכל שלהם בעזרת... כפות הרגליים שלהם! כשהם נוחתים על עלה הם מיד מרגישים אם הוא מתוק!',
    quizQ: 'מַהוּ הַסֵּדֶר הַנָּכוֹן בַּהֲפִיכָה שֶׁל פַּרְפַּר בַּטֶּבַע?',
    quizAns: '🥚 בֵּיצָה ⬅️ 🐛 זַחַל ⬅️ 🐚 גֹּלֶם ⬅️ 🦋 פַּרְפַּר',
    quizWrong: ['🦋 פַּרְפַּר ⬅️ 🐛 זַחַל ⬅️ 🐟 דָּג ⬅️ 🐸 צְפַרְדֵּעַ', '🥚 בֵּיצָה ⬅️ 🐥 אֶפְרוֹחַ ⬅️ 🦋 פַּרְפַּר', '🐛 זַחַל ⬅️ 🐝 דְּבוֹרָה ⬅️ 🦋 פַּרְפַּר'],
    quizHint: 'הזחל בוקע מהביצה, נכנס לתוך גולם, ומהגולם יוצא פרפר!'
  },
  {
    id: 'sci_bees_honey',
    cat: 'nature',
    icon: '🐝🍯🌸',
    title: 'איך דבורים מכינות דבש מתוק מפרחים?',
    engWord: 'Bees & Honey',
    engHeb: 'דבורים ודבש',
    steps: [
      '1️⃣ הדבורה עפה מפרח לפרח ושותה צוף מתוק 🌸🐝',
      '2️⃣ בכוורת הדבורים מעבירות את הצוף לתאי השעווה המשושים 🍯',
      '3️⃣ הדבורים מנפנפות בכנפיים לייבוש המים — והצוף הופך לדבש! ✨'
    ],
    explain: 'הדבורים הן הפועלות החרוצות של הטבע! הן אוספות צוף מתוק מהפרחים, ובזמן שהן עוברות מפרח לפרח הן גם מעבירות אבקה שעוזרת לפרחים להפוך לפירות (כמו תפוחים ותותים!). בכוורת הן מאחסנות את הצוף בתאים משושים ומנפנפות בכנפיים שלהן כמו מאוורר עד שהצוף מסמיך והופך לדבש מתוק ובריא!',
    experiment: '🧪 הסתכלו על צורת חלת הדבש: כל התאים בנויים בצורת משושה (6 צלעות) כי זו הצורה ההנדסית הכי חזקה בטבע שחוסכת הכי הרבה מקום!',
    funFact: '🤯 הידעת? כשדבורה מוצאת שדה פרחים עשיר, היא חוזרת לכוורת ועושה "ריקוד דבורים" שמסביר לחברות שלה בדיוק לאיזה כיוון לעוף!',
    quizQ: 'מִמָּה מְכִינוֹת הַדְּבוֹרִים אֶת הַדְּבַשׁ הַמָּתוֹק בַּכַּוֶּרֶת?',
    quizAns: '🌸🐝 מִצּוּף מָתוֹק שֶׁהֵן אוֹסְפוֹת מֵהַפְּרָחִים',
    quizWrong: ['🥛 מֵחָלָב וְשׁוֹקוֹ חַם', '🌊 מִמֵּי הַיָּם הַמְּלוּחִים', '🍂 מֵעָלִים יְבֵשִׁים שֶׁנָּפְלוּ בַּסְּתָו'],
    quizHint: 'הדבורים עפות מפרח לפרח ואוספות ממנו נוזל מתוק שנקרא צוף!'
  },

  // --- CATEGORY 4: HUMAN BODY & BRAIN (גוף האדם והמוח) ---
  {
    id: 'sci_heart_lungs',
    cat: 'body',
    icon: '❤️🫁🏃‍♂️',
    title: 'למה הלב דופק מהר כשאנחנו רצים במגרש?',
    engWord: 'Heart & Lungs',
    engHeb: 'הלב והריאות',
    steps: [
      '1️⃣ הריאות נושמות אוויר ומכניסות חמצן לגוף 🫁💨',
      '2️⃣ הלב הוא משאבה חזקה שמזרימה דם עם חמצן לשרירים ❤️🩸',
      '3️⃣ בריצה השרירים צריכים יותר כוח — ולכן הלב פועם מהר יותר! 🏃‍♂️⚡'
    ],
    explain: 'הלב שלנו (בגודל של האגרוף שלך!) הוא משאבה מדהימה שלא נחה אפילו שנייה אחת. כשאנחנו נושמים, הריאות קולטות חמצן מהאוויר ומעבירות אותו לדם. הלב דוחף את הדם העשיר בחמצן לכל השרירים בגוף. כשעילי רץ מהר במגרש או ליה רוקדת, שרירי הרגליים צריכים המון אנרגיה וחמצן — ולכן הלב פועם מהר יותר ("בום-בום-בום") כדי לשלוח להם כוח!',
    experiment: '🧪 נסה בעצמך: הנח יד על החזה והרגש את הדופק שלך במנוחה. עכשיו קפוץ במקום 15 שניות ובדוק שוב — תרגיש איך הלב עובד מהר יותר!',
    funFact: '🤯 הידעת? הלב שלנו פועם בערך 100,000 פעמים בכל יום — גם כשאנחנו ישנים בלילה!',
    quizQ: 'מַדּוּעַ הַלֵּב שֶׁלָּנוּ פּוֹעֵם מָהֵר יוֹתֵר כְּשֶׁאֲנַחְנוּ רָצִים וּמְשַׂחֲקִים כַּדּוּרֶגֶל?',
    quizAns: '❤️ כְּדֵי לְהַזְרִים יוֹתֵר דָּם וְחַמְצָן לַשְּׁרִירִים שֶׁצְּרִיכִים כֹּחַ וְאֵנֶרְגִּיָּה',
    quizWrong: ['🎵 כִּי הַלֵּב מְנַגֵּן תֻּפִּים לְכָבוֹד הַשּׁוֹפֵט', '🥶 כִּי הַגּוּף הוֹפֵךְ לְקֶרַח בִּזְמַן רִיצָה', '🦶 כִּי הַכַּדּוּר קוֹפֵץ בְּתוֹךְ הַבֶּטֶן'],
    quizHint: 'הלב הוא משאבה ששולחת חמצן ואנרגיה לשרירים העובדים!'
  },
  {
    id: 'sci_brain_nerves',
    cat: 'body',
    icon: '🧠⚡🦵',
    title: 'איך המוח שולח פקודה לרגל לבעוט בכדור?',
    engWord: 'Brain & Nerves',
    engHeb: 'המוח והעצבים',
    steps: [
      '1️⃣ העיניים רואות את הכדור מתקרב ושולחות תמונה למוח 👀➔🧠',
      '2️⃣ המוח מחליט בשבריר שנייה: "תבעט לשער!" 🧠💡',
      '3️⃣ אות חשמלי טס דרך העצבים לשריר הרגל — ובום, גול! ⚡🦵⚽'
    ],
    explain: 'המוח שלנו הוא "מחשב-העל" והמפקד של הגוף! הוא יושב מוגן בתוך הגולגולת ומחובר לכל חלק בגוף באמצעות חוטים דקים שנקראים "עצבים". כשהעיניים רואות כדור מגיע, המוח מחשב מיד לאן לבעוט ושולח הודעה חשמלית מהירה דרך העצבים אל שרירי הרגל — הכל תוך פחות מעשירית שנייה!',
    experiment: '🧪 נסה בעצמך: בקש מאבא להחזיק סרגל באוויר ולשחרר אותו בהפתעה — כמה מהר העיניים והמוח שלך יפקדו על היד שלך לתפוס אותו?',
    funFact: '🤯 הידעת? ההודעות מהמוח לשרירים טסות במהירות של יותר מ-350 קילומטר בשעה — מהר יותר ממכונית מרוץ של פורמולה 1!',
    quizQ: 'מִי הוּא "הַמְּפַקֵּד" שֶׁל הַגּוּף שֶׁמְּקַבֵּל מֵידָע מֵהָעֵינַיִם וְשׁוֹלֵחַ פְּקֻדָּה לָרֶגֶל לִבְעֹט בַּכַּדּוּר?',
    quizAns: '🧠 הַמּוֹחַ (דֶּרֶךְ מַעֲרֶכֶת הָעֲצַבִּים)',
    quizWrong: ['🦷 הַשִּׁנַּיִם שֶׁבַּפֶּה', '💇‍♂️ הַשֵּׂעָר שֶׁעַל הָרֹאשׁ', '🦶 הַצִּפָּרְנַיִם שֶׁל הָאצְבָּעוֹת'],
    quizHint: 'זהו מחשב-העל שנמצא בראש שלנו!'
  },

  // --- CATEGORY 5: ELECTRICITY, MAGNETS & TECH (חשמל, מגנטים וטכנולוגיה) ---
  {
    id: 'sci_wireless_controller',
    cat: 'tech',
    icon: '🎮📡📺',
    title: 'איך שלט אלחוטי של פלייסטיישן מדבר עם הטלוויזיה בלי חוט?',
    engWord: 'Wireless Radio Waves',
    engHeb: 'גלי רדיו ובלוטות׳',
    steps: [
      '1️⃣ אתה לוחץ על כפתור עיגול ◯ בשלט כדי לבעוט 🎮',
      '2️⃣ השלט משדר גל רדיו בלתי נראה (בלוטות׳) באוויר 📡〰️',
      '3️⃣ האנטנה בפלייסטיישן קולטת את הגל והשחקן בועט מיד! 📺⚽'
    ],
    explain: 'איך השחקן בפיפא יודע לבעוט באותה אלפית שנייה שלחצת על השלט, אפילו שאין שום חוט ביניהם? בתוך השלט יש משדר זעיר ששולח "גלי רדיו" (Bluetooth) בלתי נראים שעפים באוויר במהירות האור! בתוך הקונסולה יש מקלט שקורא את הקוד של הכפתור שלחצת ומבצע את הפעולה על המסך!',
    experiment: '🧪 בדיוק באותה דרך עובדים גם ה-Wi-Fi בבית, השלט של המזגן והטלפון הנייד!',
    funFact: '🤯 הידעת? אות הבלוטות׳ מהשלט לקונסולה עובר את המרחק מהספה לטלוויזיה בפחות ממיליונית השנייה!',
    quizQ: 'אֵיךְ הַשַּׁלָּט הָאַלְחוּטִי שֶׁל הַפְּלֵייסְטֵיישֶׁן מַעֲבִיר אֶת הַלְּחִיצָה שֶׁלְּךָ לַמִּשְׂחָק בְּלִי חוּט?',
    quizAns: '📡 בְּעֶזְרַת גַּלֵּי רַדְיוֹ בִּלְתִּי נִרְאִים (בְּלוּטוֹת׳) שֶׁעוֹבְרִים בָּאֲוִיר',
    quizWrong: ['🕊️ יוֹנִים קְטַנּוֹת וּבִלְתִּי נִרְאוֹת עָפוֹת מֵהַשַּׁלָּט לַטֶּלֶוִיזְיָה', '🌬️ הַשַּׁלָּט עוֹשֶׂה רוּחַ חֲזָקָה שֶׁדּוֹחֶפֶת אֶת הַמָּסָךְ', '🔦 הַשַּׁלָּט יוֹרֶה קֶרֶן לֵייזֶר צְהֻבָּה לַמִּרְפֶּסֶת'],
    quizHint: 'אלו גלים אלחוטיים בלתי נראים שעוברים באוויר במהירות האור!'
  },
  {
    id: 'sci_magnets',
    cat: 'tech',
    icon: '🧲🔩',
    title: 'איך עובד מגנט ומתי שני מגנטים דוחים זה את זה?',
    engWord: 'Magnet & Poles',
    engHeb: 'מגנט וקטבים',
    steps: [
      '1️⃣ לכל מגנט יש שני צדדים (קטבים): צפון (N) ודרום (S) 🧲',
      '2️⃣ שני קטבים שונים (N ו-S) נמשכים ונצמדים חזק! 🔴⬅️➡️🔵',
      '3️⃣ שני קטבים זהים (N ו-N) דוחים ובורחים זה מזה! 🔴⬅️ ➡️🔴'
    ],
    explain: 'סביב כל מגנט יש "שדה מגנטי" בלתי נראה שמושך מתכות כמו ברזל ופלדה (אבל לא פלסטיק, עץ או זכוכית!). לכל מגנט יש שני קטבים: צפון ודרום. החוק המדעי המגניב של המגנטים הוא: הפכים נמשכים! אם תקרב צפון לדרום הם יקפצו ויידבקו זה לזה, אבל אם תקרב צפון לצפון — תרגיש כוח בלתי נראה שדוחף אותם החוצה!',
    experiment: '🧪 נסה בעצמך: קח מגנט מהמקרר ובדוק אילו דברים בבית נמשכים אליו (כפית מתכת? אטב נייר? קוביית פלסטיק?)!',
    funFact: '🤯 הידעת? ביפן ובסין יש רכבות סופר-מהירות שמרחפות באוויר מעל המסילה בעזרת דחייה של מגנטים חזקים, ונוסעות במהירות של 500 קמ"ש!',
    quizQ: 'מָה קוֹרֶה כְּשֶׁמְּקָרְבִים שְׁנֵי מַגְנֵטִים עִם אוֹתוֹ הַקֹּטֶב בדיוק (לְמָשָׁל צָפוֹן מוּל צָפוֹן)?',
    quizAns: '🧲 הֵם דּוֹחִים וּמַרְחִיקִים זֶה אֶת זֶה!',
    quizWrong: ['🔥 הֵם הוֹפְכִים לְאֵשׁ חַמָּה', '💧 הֵם נְמַסִּים וְהוֹפְכִים לְמַיִם', '🪵 הֵם הוֹפְכִים לְקֻבִּיּוֹת עֵץ'],
    quizHint: 'קטבים הפוכים נמשכים, אבל שני קטבים זהים... דוחפים זה את זה!'
  },
  {
    id: 'sci_volcano_colors',
    cat: 'nature',
    icon: '🌋🧪🎨',
    title: 'ניסויי מעבדה: הר געש מקציף, ערבוב צבעים ומה צף במים!',
    engWord: 'Science Experiments',
    engHeb: 'ניסויי מדע',
    steps: [
      '1️⃣ הר געש 🌋: אבקת סודה לשתייה + חומץ ➔ בועות גז מתפרצות!',
      '2️⃣ ערבוב צבעים 🎨: כחול + צהוב = ירוק | אדום + צהוב = כתום!',
      '3️⃣ צף או שוקע 🌊: עץ וספוג צפים במים, אבן ומטבע ברזל שוקעים!'
    ],
    explain: 'במעבדת המדע אנחנו מגלים איך חומרים מגיבים זה לזה! כשמערבבים סודה לשתייה עם חומץ (או מיץ לימון), נוצרת תגובה כימית שמשחררת המון בועות של גז (פחמן דו-חמצני) שמתפרצות כמו לבה של הר געש! וכשמערבבים צבעי יסוד (אדום, צהוב, כחול) מקבלים צבעים חדשים לגמרי!',
    experiment: '🧪 ניסוי הר געש בכיור עם אמא או אבא: שים כפית סודה לשתייה בכוס, הוסף טיפת סבון כלים וקצת חומץ — וצפה בהתפרצות הקצף!',
    funFact: '🤯 הידעת? הבועות בקולה ובסודה הן בדיוק אותו גז שנוצר בניסוי הר הגעש!',
    quizQ: 'אֵיזֶה צֶבַע חָדָשׁ מְקַבְּלִים כְּשֶׁמְּעַרְבְּבִים צֶבַע כָּחֹל 💙 עִם צֶבַע צָהֹב 💛?',
    quizAns: '💚 צֶבַע יָרֹק!',
    quizWrong: ['🖤 צֶבַע שָׁחֹר', '🤍 צֶבַע לָבָן', '🩷 צֶבַע וָרֹד'],
    quizHint: 'חשבו על השמש הצהובה 💛 והשמיים הכחולים 💙 שנותנים לדשא את צבעו!'
  },
  // --- ADDITIONAL DEEP SCIENCE & HOW THINGS WORK ARTICLES (הרחבה מלאה של אנציקלופדיית המדע!) ---
  {
    id: 'sci_car_engine_brakes',
    cat: 'physics',
    icon: '🚗⚙️🛑',
    title: 'איך מכונית נוסעת ואיך הבלמים עוצרים אותה?',
    engWord: 'Engine, Wheels & Friction',
    engHeb: 'מנוע, גלגלים וחיכוך',
    steps: [
      '1️⃣ המנוע (דלק או סוללה חשמלית) מסובב את הצירים והגלגלים ⚙️🔋',
      '2️⃣ הצמיגים אוחזים בכביש ודוחפים את המכונית קדימה 🛞🛣️',
      '3️⃣ בלחיצה על הברקס — רפידות לוחצות על הגלגל ויוצרות חיכוך שעוצר אותו! 🛑'
    ],
    explain: 'במכונית חשמלית סוללה ענקית מספקת חשמל למנוע שמסובב את הגלגלים בשקט, ובמכונית בנזין דלק נשרף בבוכנות קטנות שדוחפות את הגלגלים. כשרוצים לעצור ולוחצים על דוושת הבלם, כריות חזקות נצמדות לדיסק המתכת של הגלגל ויוצרות כוח שנקרא "חיכוך" (Friction) — שמאט את הגלגל עד לעצירה מוחלטת!',
    experiment: '🧪 נסה בעצמך: שפשף את שתי כפות הידיים שלך זו בזו מהר וחזק — מרגיש שהן מתחממות? זהו כוח החיכוך! בדיוק ככה הבלמים של המכונית מתחממים כשהם עוצרים אותה!',
    funFact: '🤯 הידעת? נעלי כדורגל עם פקקים (Studs) בנויות במיוחד כדי להגדיל את החיכוך עם הדשא הרטוב, כדי שהשחקנים לא יחליקו בסיבובים מהירים!',
    quizQ: 'אֵיךְ נִקְרָא הַכֹּחַ שֶׁעוֹזֵר לַבְּלָמִים לַעֲצֹר אֶת הַמְּכוֹנִית וּלְנַעֲלֵי הַפְּקָקִים לֶאֱחֹז בַּדֶּשֶׁא בְּלִי לְהַחְלִיק?',
    quizAns: '🛞 כֹּחַ הַחִיכּוּךְ (Friction)',
    quizWrong: ['🎈 כֹּחַ הַצִּיפָה שֶׁל הַבָּלוֹן', '🌈 שְׁבִירַת הָאוֹר בֶּעָנָן', '🧊 קְפִיאַת הַמַּיִם בַּחֹרֶף'],
    quizHint: 'זה הכוח שנוצר כשמשפשפים שתי כפות ידיים זו בזו!'
  },
  {
    id: 'sci_submarine_ships',
    cat: 'physics',
    icon: '🚢🤿🌊',
    title: 'איך אוניית ברזל ענקית צפה, ואיך צוללת יורדת מתחת למים?',
    engWord: 'Buoyancy & Submarine',
    engHeb: 'כוח הציפה וצוללת',
    steps: [
      '1️⃣ אונייה בנויה עם חלל ענק מלא באוויר קל בבטן שלה 🚢💨',
      '2️⃣ צוללת שרוצה לצלול מכניסה מים למכלים שלה ונהיית כבדה 🌊⬇️',
      '3️⃣ כדי לעלות חזרה — הצוללת דוחפת אוויר למכלים, מוציאה את המים וצפה! 🤿⬆️'
    ],
    explain: 'איך גוש ברזל קטן שוקע במים, אבל אוניית משא ענקית מברזל צפה? הסוד הוא הצורה והאוויר שבפנים! הבטן של האונייה חלולה ומלאה בהמון אוויר, ולכן המשקל הממוצע שלה קל יותר מהמים שהיא דוחפת (חוק ארכימדס). צוללת משתמשת בטריק חכם: יש לה מכלי מים מיוחדים — כשהם מתמלאים במים היא שוקעת למצולות, וכשהיא ממלאת אותם באוויר דחוס היא עולה לפני הים!',
    experiment: '🧪 נסה באמבטיה: בקבוק פלסטיק ריק וסגור תמיד צף על המים. אם תמלא אותו במים עד הסוף — הוא ישקע מיד לקרקעית, בדיוק כמו צוללת!',
    funFact: '🤯 הידעת? גם לדגים בים יש "שלפוחית שחייה" קטנה בבטן שהם ממלאים באוויר כדי לעלות או לרדת במים בלי להתאמץ!',
    quizQ: 'אֵיךְ צוֹלֶלֶת מַצְלִיחָה לָרֶדֶת לְמַטָּה לְעֹמֶק הַיָּם וְאָז לַעֲלוֹת חֲזָרָה לִפְנֵי הַמַּיִם?',
    quizAns: '🤿 הִיא מַכְנִיסָה מַיִם לַמְּכָלִים כְּדֵי לִשְׁקֹעַ, וּמְמַלֵּאת אוֹתָם בַּאֲוִיר כְּדֵי לָצוּף לְמַעְלָה!',
    quizWrong: ['🦅 הִיא פּוֹרֶשֶׂת כְּנָפַיִם שֶׁל צִיפּוֹר וְעָפָה בַּמַּיִם', '🧊 הִיא מַקְפִּיאָה אֶת כָּל הַיָּם סְבִיבָהּ', '🎈 הִיא קוֹשֶׁרֶת בָּלוֹנִים לַגַּג'],
    quizHint: 'הצוללת משנה את המשקל שלה בעזרת מים (לשקוע) ואוויר (לצוף)!'
  },
  {
    id: 'sci_solar_system',
    cat: 'space',
    icon: '☀️🪐🌍',
    title: 'איך בנויה מערכת השמש שלנו ומי הם 8 כוכבי הלכת?',
    engWord: 'The Solar System',
    engHeb: 'מערכת השמש',
    steps: [
      '1️⃣ במרכז נמצאת השמש הענקית והלוהטת שמחזיקה את כולם בכוח הכבידה ☀️',
      '2️⃣ 4 כוכבי לכת סלעיים קרובים: חמה, נוגה, כדור הארץ 🌍 ומאדים 🔴',
      '3️⃣ 4 כוכבי לכת ענקיים רחוקים: צדק, שבתאי (עם הטבעות! 🪐), אורנוס ונפטון!'
    ],
    explain: 'מערכת השמש שלנו היא משפחה אחת גדולה שבה 8 כוכבי לכת מקיפים את השמש במסלולים קבועים. כדור הארץ שלנו הוא כוכב הלכת השלישי מהשמש — בדיוק במרחק המושלם שבו לא חם מדי ולא קר מדי, ולכן יש אצלנו אוקיינוסים של מים וחיים! כוכב הלכת הגדול ביותר הוא צדק (Jupiter), והיפה ביותר הוא שבתאי (Saturn) שמוקף בטבעות מרהיבות של קרח ואבק חלל!',
    experiment: '🧪 הסתכלו לשמיים בערב בהיר: כוכבים רגילים מנצנצים, אבל כוכבי לכת (כמו נוגה או צדק) מאירים באור יציב וחזק בלי לנצנץ!',
    funFact: '🤯 הידעת? השמש שלנו כל כך עצומה, שאפשר להכניס לתוכה יותר ממיליון כדורי ארץ!',
    quizQ: 'אֵיזֶה כּוֹכַב לֶכֶת בְּמַעֲרֶכֶת הַשֶּׁמֶשׁ מְפֻרְסָם בַּטַּבָּעוֹת הָעֲנָקִיּוֹת וְהַיָּפוֹת שֶׁמַּקִּיפוֹת אוֹתוֹ?',
    quizAns: '🪐 שַׁבְּתַאי (Saturn)',
    quizWrong: ['🌍 כַּדּוּר הָאָרֶץ', '☀️ הַשֶּׁמֶשׁ', '🌕 הַיָּרֵחַ שֶׁלָּנוּ'],
    quizHint: 'זהו כוכב הלכת שמצויר תמיד עם טבעת גדולה סביבו — שבתאי!'
  },
  {
    id: 'sci_water_cycle',
    cat: 'space',
    icon: '🌊☀️☁️🌧️',
    title: 'מאיפה מגיע הגשם? (מחזור המים בטבע)',
    engWord: 'The Water Cycle',
    engHeb: 'מחזור המים בטבע',
    steps: [
      '1️⃣ השמש מחממת את מי הים, והמים מתאדים ועולים לשמיים כאדים 🌊☀️⬆️',
      '2️⃣ בגובה הקר האדים מתקררים והופכים לעננים של טיפות קטנטנות ☁️',
      '3️⃣ כשהטיפות בענן נהיות כבדות — הן יורדות כגשם שמשקה את הארץ! 🌧️🌱'
    ],
    explain: 'המים בטבע מטיילים במעגל קסום שלעולם לא נגמר! כשהשמש מאירה על הים והאגמים, חלק מהמים מתחמם והופך לאדי מים בלתי נראים שעולים למעלה לאוויר. גבוה בשמיים קר מאוד, ולכן האדים מתجمعים יחד ויוצרים עננים לבנים. כשמצטברות בענן המון טיפות מים והן נהיות כבדות מדי — יורד גשם (או שלג בחרמון!), והמים זורמים בנחלים חזרה אל הים!',
    experiment: '🧪 נסה לראות בבית: כשאמא או אבא מרתיחים מים בסיר ומכסים במכסה, עולים אדים חמים — ועל המכסה נוצרות טיפות מים שיורדות חזרה לסיר בדיוק כמו גשם!',
    funFact: '🤯 הידעת? המים שאנחנו שותים היום בכוס הם אותם מים ששתו הדינוזאורים לפני מיליוני שנים — כי המים בטבע ממוחזרים שוב ושוב!',
    quizQ: 'אֵיךְ נוֹצָרִים הָעֲנָנִים וְהַגֶּשֶׁם בְּ"מַחְזוֹר הַמַּיִם" בַּטֶּבַע?',
    quizAns: '🌊☁️ הַשֶּׁמֶשׁ מְאַדָּה מַיִם מֵהַיָּם שֶׁעוֹלִים לַשָּׁמַיִם, הוֹפְכִים לַעֲנָנִים וְיוֹרְדִים כְּגֶשֶׁם',
    quizWrong: ['🚒 מַטּוֹסֵי כִּיבּוּי מְמַלְּאִים אֶת הַשָּׁמַיִם בְּצִינוֹרוֹת כָּל בֹּקֶר', '🐋 לִוְיְתָנִים מַשְׁפְּרִיצִים מַיִם עַד לַחָלָל', '🧊 קַרְחוֹנִים נוֹפְלִים מֵהַיָּרֵחַ לְכַדּוּר הָאָרֶץ'],
    quizHint: 'השמש מחממת את מי הים, האדים עולים למעלה ויוצרים עננים!'
  },
  {
    id: 'sci_dinosaurs_fossils',
    cat: 'nature',
    icon: '🦖🦕🦴',
    title: 'איך אנחנו יודעים שהיו פעם דינוזאורים? (מאובנים ואסטרואיד)',
    engWord: 'Dinosaurs & Fossils',
    engHeb: 'דינוזאורים ומאובנים',
    steps: [
      '1️⃣ לפני מיליוני שנים שלטו בכדור הארץ דינוזאורים עצומים 🦕🦖',
      '2️⃣ אסטרואיד ענק מהחלל פגע בכדור הארץ ושינה את האקלים ☄️🌍',
      '3️⃣ העצמות שלהם הפכו לאבן באדמה ("מאובנים") ומדענים חופרים ומוצאים אותן! 🦴🔍'
    ],
    explain: 'אף בן אדם מעולם לא ראה דינוזאור חי, אז איך אנחנו יודעים איך נראה טי-רקס או טריצרטופס? בזכות "מאובנים" (Fossils)! כשדינוזאורים כוסו בחול ובבוץ לפני 65 מיליון שנה, העצמות, השיניים ואפילו טביעות הרגליים שלהם התקשו לאט-לאט והפכו לסלע. חוקרי מאובנים (פליאונטולוגים) חופרים באדמה עם מברשות עדינות, מרכיבים את השלדים כמו פאזל ענק ומגלים את סודות העבר!',
    experiment: '🧪 ניסוי מאובן בבית: הטבע צדף או צעצוע דינוזאור בתוך בצק משחק או פלסטלינה והוצא אותו — הסימן שנשאר בבצק הוא בדיוק כמו מאובן של טביעת רגל!',
    funFact: '🤯 הידעת? גם בישראל (באזור מכתש רמון ובית זית ליד ירושלים!) מצאו טביעות רגליים אמיתיות של דינוזאורים שמטביעות בסלע!',
    quizQ: 'אֵיךְ הַמַּדְּעָנִים יוֹדְעִים הַיּוֹם אֵיךְ נִרְאוּ הַדִּינוֹזָאוּרִים שֶׁחָיוּ לִפְנֵי מִילְיוֹנֵי שָׁנִים?',
    quizAns: '🦴🔍 בִּזְכוּת מְאֻבָּנִים (עֲצָמוֹת וּטְבִיעוֹת רֶגֶל שֶׁהָפְכוּ לְאֶבֶן בָּאֲדָמָה)',
    quizWrong: ['📱 כִּי צִלְּמוּ אוֹתָם בְּטֶלֶפוֹן וּבְמַצְלֵמוֹת וִידֵאוֹ', '🏝️ כִּי הֵם עֲדַיִן גָּרִים בְּגַן הַחַיּוֹת הָעִירוֹנִי', '📖 כִּי הַדִּינוֹזָאוּרִים כָּתְבוּ סְפָרִים בְּאַנְגְּלִית'],
    quizHint: 'העצמות וטביעות הרגליים שלהם השתמרו בתוך סלעים ונקראות מאובנים!'
  },
  {
    id: 'sci_chameleon_octopus',
    cat: 'nature',
    icon: '🦎🐙🌿',
    title: 'איך זיקית ותמנון מחליפים צבעים ונעלמים בשטח? (הסוואה)',
    engWord: 'Camouflage',
    engHeb: 'הסוואה בטבע',
    steps: [
      '1️⃣ בעל החיים רוצה להסתתר מטורפים (או לתקוף בהפתעה) 🦎👀',
      '2️⃣ בתוך העור שלו יש תאי צבע מיוחדים עם גבישים זעירים 🎨✨',
      '3️⃣ המוח מכווץ או מרחיב את התאים — והצבע משתנה תוך שניות! 🌿🪵'
    ],
    explain: 'בטבע, היכולת להתמזג עם הסביבה ולהיראות כמו ענף, עלה או סלע נקראת "הסוואה" (Camouflage). לתמנון בים ולזיקית על העץ יש בעור תאים מיוחדים שפועלים כמו מסך טלוויזיה חי: כשהם משנים את המרחק בין הגבישים הזעירים בעור שלהם, האור חוזר בצבע אחר (ירוק, חום, צהוב או אדום)! הזיקית מחליפה צבעים גם כדי להראות לחברות שלה איך היא מרגישה (כועסת, רגועה או שמחה)!',
    experiment: '🧪 חפשו בטבע: למה חגב בדשא הוא ירוק, שועל במדבר הוא בצבע חול, ודוב קוטב בשלג הוא לבן? כולם משתמשים בהסוואה!',
    funFact: '🤯 הידעת? לתמנון יש לא רק יכולת להחליף צבע בשבריר שנייה, אלא גם 3 לבבות ו-8 זרועות חכמות!',
    quizQ: 'אֵיךְ נִקְרֵאת הַיְּכֹלֶת שֶׁל חַיּוֹת (כְּמוֹ זִיקִית, תְּמָנוֹן וְחָגָב) לְהֵרָאוֹת בְּדִיּוּק בְּצֶבַע הַסְּבִיבָה כְּדֵי לְהִסְתַּתֵּר?',
    quizAns: '🦎 הַסְוָאָה (Camouflage)',
    quizWrong: ['🚀 הַמְרָאָה לֶחָלָל', '🧲 מַגְנֵטִיּוּת חַשְׁמָלִית', '❄️ תַּרְדֵּמַת חֹרֶף'],
    quizHint: 'גם חיילים בשטח משתמשים בצבעים כאלה כדי שלא יראו אותם!'
  },
  {
    id: 'sci_immune_system',
    cat: 'body',
    icon: '🛡️🦠💪',
    title: 'איך הגוף שלנו מנצח חיידקים ווירוסים? (מערכת החיסון)',
    engWord: 'Immune System & White Blood Cells',
    engHeb: 'מערכת החיסון ותאי דם לבנים',
    steps: [
      '1️⃣ חיידק או וירוס מנסה להיכנס לגוף שלנו 🦠',
      '2️⃣ "שוטרי הגוף" (תאי הדם הלבנים) מזהים את הפולש ומזעיקים עזרה 🚨🛡️',
      '3️⃣ הגוף מייצר "נוגדנים" חכמים שתופסים את הווירוס ומנצחים אותו! 💪🏆'
    ],
    explain: 'בתוך הדם שלנו יש שני סוגי תאים: תאי דם אדומים (שמובילים חמצן) ו"תאי דם לבנים" — שהם צבא השומרים האמיץ של מערכת החיסון שלנו! כשחיידק או וירוס נכנס לגוף, תאי הדם הלבנים מזהים אותו מיד, בולעים אותו ומייצרים נשק מיוחד שנקרא "נוגדנים". עוד דבר מדהים: אחרי שהגוף מנצח וירוס פעם אחת, תאי הזיכרון שלנו שומרים "תמונה" שלו כדי שאם יחזור שוב — יחסלו אותו מיד!',
    experiment: '🧪 איך עוזרים לצבא הגוף שלנו? שוטפים ידיים בסבון (הסבון מפרק את המעטפת של החיידקים!), אוכלים פירות וירקות וישנים טוב בלילה!',
    funFact: '🤯 הידעת? כשעולה לנו החום כשאנחנו חולים, זה בעצם הגוף שלנו שמחמם את השטח בכוונה כי חיידקים ווירוסים שונאים חום ומתקשים לפעול בו!',
    quizQ: 'מִי הֵם "הַשּׁוֹמְרִים וְהַחַיָּלִים" בַּדָּם שֶׁלָּנוּ שֶׁנִּלְחָמִים בְּחַיְדַּקִּים וּבווִירוּסִים וּמְגִנִּים עַל הַגּוּף?',
    quizAns: '🛡️ תָּאֵי הַדָּם הַלְּבָנִים (מַעֲרֶכֶת הַחִיסּוּן)',
    quizWrong: ['🦷 שִׁנֵּי הֶחָלָב שֶׁבַּפֶּה', '👟 הַגַּרְבַּיִם שֶׁאֲנַחְנוּ לוֹבְשִׁים', '💇‍♂️ הַשְּׂעָרוֹת שֶׁעַל הַגַּבּוֹת'],
    quizHint: 'הם נמצאים בדם שלנו ונקראים תאי דם לבנים — שומרי מערכת החיסון!'
  },
  {
    id: 'sci_digestion_energy',
    cat: 'body',
    icon: '🍎🥪⚡',
    title: 'איך האוכל שאנחנו אוכלים הופך לכוח ואנרגיה לרוץ ולגדול?',
    engWord: 'Digestive System & Energy',
    engHeb: 'מערכת העיכול ואנרגיה',
    steps: [
      '1️⃣ השיניים והרוק בפה טוחנים את התפוח והכריך לחתיכות קטנות 🦷🍎',
      '2️⃣ הקיבה מפרקת את האוכל לנוזל עשיר בוויטמינים ודלק לגוף 🧪',
      '3️⃣ הדם מוביל את האנרגיה לכל השרירים ולמוח שלנו! 🏃‍♂️⚡'
    ],
    explain: 'בדיוק כמו שמכונית צריכה דלק או חשמל כדי לנסוע, הגוף שלנו מפיק את ה"דלק" שלו מהמזון והמים שאנחנו אוכלים ושותים! המסע מתחיל בפה כשהשיניים לועסות את האוכל. משם האוכל יורד בצינור הוושט אל הקיבה, שמערבבת ומפרקת אותו לחומרים זעירים וטובים (חלבונים שבונים את השרירים, פחמימות שנותנות אנרגיה לרוץ, וויטמינים שמחזקים אותנו). הדם אוסף את הדלק הזה ומחלק אותו לכל תא בגוף!',
    experiment: '🧪 נסה בעצמך: לעס חתיכת לחם במשך 20 שניות בפה לפני הבליעה — תרגיש שהיא פתאום נהיית קצת מתוקה! זה בגלל שהרוק בפה כבר מתחיל לפרק את הלחם לסוכר שנותן אנרגיה!',
    funFact: '🤯 הידעת? אם היינו פורשים את כל הצינורות של מערכת העיכול בבטן שלנו בקו ישר, האורך שלהם היה כמעט 7 מטרים — כמו רוחב של שער כדורגל שלם!',
    quizQ: 'מָה הַתַּפְקִיד שֶׁל מַעֲרֶכֶת הָעִיכּוּל (הַפֶּה, הַקֵּיבָה וְהַמֵּעַיִם) בַּגּוּף שֶׁלָּנוּ?',
    quizAns: '🍎⚡ לְפָרֵק אֶת הַמָּזוֹן שֶׁאֲנַחְנוּ אוֹכְלִים וְלַהֲפֹךְ אוֹתוֹ לְאֵנֶרְגִּיָּה וְכֹחַ לַגּוּף!',
    quizWrong: ['👀 לִרְאוֹת צְבָעִים בַּחֹשֶׁךְ', '👂 לִשְׁמֹעַ מוּזִיקָה מֵרָחוֹק', '💭 לַחְלֹם חֲלוֹמוֹת בַּלַּיְלָה'],
    quizHint: 'היא הופכת את האוכל שאנחנו אוכלים לדלק ואנרגיה עבור השרירים והגוף!'
  },
  {
    id: 'sci_electric_circuit',
    cat: 'tech',
    icon: '💡🔋⚡',
    title: 'איך נדלק האור בחדר כשלוחצים על המתג בקיר? (מעגל חשמלי)',
    engWord: 'Electric Circuit & Switch',
    engHeb: 'מעגל חשמלי ומתג',
    steps: [
      '1️⃣ החשמל זורם בתוך חוטי נחושת כמו מים בצינור אך רק במעגל סגור 🔋🔄',
      '2️⃣ כשהמתג כבוי — יש רווח בחוט ("מעגל פתוח") והחשמל נעצר 🚫',
      '3️⃣ כשלוחצים על המתג — הגשר נסגר ("מעגל סגור") והמנורה נדלקת מיד! 💡✨'
    ],
    explain: 'חשמל מורכב מחלקיקים קטנטנים שנקראים "אלקטרונים" שזורמים בתוך חוטי מתכת (בדרך כלל נחושת). כדי שמנורה תידלק או מאוורר יסתובב, החשמל חייב מסלול שלם וסגור ללא שום נתק — לזה קוראים "מעגל חשמלי סגור". המתג שבקיר הוא פשוט גשר קטן: כשמדליקים את האור, הגשר יורד ומחבר את החוטים, והחשמל טס למנורה ומאיר את החדר! בגלל שפלסטיק וגומי לא מעבירים חשמל ("מבודדים"), עוטפים בהם את כל החוטים כדי שיהיה בטוח לגעת בהם!',
    experiment: '🧪 כלל בטיחות חשוב של מדענים: מים מוליכים חשמל! לכן לעולם לא נוגעים במתג חשמל או בשקע עם ידיים רטובות!',
    funFact: '🤯 הידעת? גם אנרגיה סולארית מדהימה: לוחות סולאריים על גגות קולטים את אור השמש והופכים אותו ישירות לחשמל נקי לבית!',
    quizQ: 'מָתַי מְנוֹרָה חַשְׁמָלִית נִדְלֶקֶת וּמְאִירָה?',
    quizAns: '💡 כְּשֶׁהַמֶּתֶג סוֹגֵר אֶת הַמַּעְגָּל הַחַשְׁמָלִי ("מַעְגָּל סָגוּר") וְהַחַשְׁמַל יָכוֹל לִזְרֹם!',
    quizWrong: ['✂️ כְּשֶׁהַחוּט מְנֻתָּק וּפָתוּחַ בָּאֶמְצַע', '🪵 כְּשֶׁמְּחַבְּרִים אוֹתָהּ לְמַקֵּל מֵעֵץ בְּלִי סוֹלְלָה', '🌙 רַק כְּשֶׁמוֹצִיאִים אֶת הַמְּנוֹרָה לַגִּינָה'],
    quizHint: 'חשמל זורם רק כשיש לו מסלול מחובר שלם — מעגל חשמלי סגור!'
  },
  {
    id: 'sci_internet_wifi',
    cat: 'tech',
    icon: '🌐📶💻',
    title: 'איך עובד האינטרנט ואיך סרטון או משחק מגיעים למסך שלנו?',
    engWord: 'Internet, Wi-Fi & Fiber Optics',
    engHeb: 'אינטרנט, וויי-פיי וסיבים אופטיים',
    steps: [
      '1️⃣ המידע מתפרק לחבילות דיגיטליות קטנות של מספרים (0 ו-1) 📦💻',
      '2️⃣ החבילות טסות במהירות האור בכבלים תת-ימיים של סיבים אופטיים בעולם 🌊⚡',
      '3️⃣ הראוטר בבית הופך אותן לגלי Wi-Fi באוויר ישר לטאבלט או לטלוויזיה! 📶📱'
    ],
    explain: 'כשאתה משחק באפליקציה הזו או צופה בסרטון, מאיפה הוא מגיע? האינטרנט הוא רשת ענקית שמחברת מיליוני מחשבים בכל העולם! מתחת לאוקיינוסים ולים התיכון פרוסים כבלים מיוחדים שנקראים "סיבים אופטיים" — חוטי זכוכית דקים שבהם מידע עובר באמצעות הבזקים של אור במהירות של 300,000 קילומטר בשנייה! המידע מגיע לנתב (הראוטר) שבבית שלכם, והראוטר משדר אותו באוויר בגלי Wi-Fi אל המחשב, הטלפון והפלייסטיישן!',
    experiment: '🧪 חפשו בבית את קופסת הראוטר (Router) עם הנורות המהבהבות — היא זו שמשדרת את ה-Wi-Fi לכל החדרים בבית!',
    funFact: '🤯 הידעת? יותר מ-95% מהאינטרנט בעולם עובר דרך כבלים שמונחים על קרקעית האוקיינוסים בין היבשות, ולפעמים אפילו כרישים סקרנים מנסים לתת בהם ביס!',
    quizQ: 'אֵיךְ מֵידָע שֶׁל אִינְטֶרְנֶט וּמִשְׂחָקִים עוֹבֵר בֵּין מְדִינוֹת וְיַבָּשׁוֹת בִּמְהִירוּת הָאוֹר?',
    quizAns: '🌐⚡ דֶּרֶךְ כְּבָלִים שֶׁל סִיבִים אוֹפְּטִיִּים בַּיָּם וְגַלֵּי Wi-Fi בָּאֲוִיר!',
    quizWrong: ['📬 דַּוָּרִים שׁוֹחִים בַּיָּם עִם מַעֲטָפוֹת מִנִּיָּר', '🎈 בָּלוֹנִים פּוֹרְחִים סוֹחֲבִים מַחְשְׁבִים בָּרוּחַ', '🚂 רַכֶּבֶת קִיטוֹר מוֹבִילָה אֶת הַסִּרְטוֹנִים בְּאַרְגָּזִים'],
    quizHint: 'המידע עובר בהבזקי אור בתוך סיבים אופטיים ובגלי Wi-Fi מהראוטר!'
  }
];

// ==================== ILLUSTRATED TALKING ENGLISH & SCIENCE DICTIONARY (מילון מדבר מאויר לעילי ולליה) ====================

const TALKING_DICTIONARY_CATEGORIES = [
  {
    id: 'dict_fifa',
    title: '🎮 פיפא וגיימינג (FC 27)',
    items: [
      { icon: '⚽', eng: 'Kick Off', heb: 'משחק מהיר / בעיטת פתיחה', sentEng: 'Press Kick Off to start the game!', sentHeb: 'לחץ על Kick Off כדי להתחיל את המשחק!' },
      { icon: '🎮', eng: 'Select Side', heb: 'בחירת צד לשלט (בית/חוץ)', sentEng: 'Move your controller to Select Side.', sentHeb: 'הזז את השלט שלך כדי לבחור צד.' },
      { icon: '👕', eng: 'Select Kit', heb: 'בחירת תלבושת (חולצות)', sentEng: 'Choose the yellow or white kit.', sentHeb: 'בחר את החולצה הצהובה או הלבנה.' },
      { icon: '▶️', eng: 'Play Match', heb: 'התחל משחק עכשיו', sentEng: 'Are you ready? Play Match!', sentHeb: 'אתה מוכן? התחל משחק!' },
      { icon: '⏸️', eng: 'Resume Match', heb: 'המשך במשחק (חזרה לדשא)', sentEng: 'Click Resume Match to keep playing.', sentHeb: 'לחץ על Resume Match כדי להמשיך לשחק.' },
      { icon: '🔄', eng: 'Substitution', heb: 'חילוף שחקנים', sentEng: 'Make a substitution when a player is tired.', sentHeb: 'עשה חילוף כששחקן מתעייף.' },
      { icon: '🎥', eng: 'Instant Replay', heb: 'הילוך חוזר של השער', sentEng: 'Watch the goal on Instant Replay!', sentHeb: 'צפה בשער בהילוך חוזר!' },
      { icon: '🏳️', eng: 'Forfeit Match', heb: 'פרישה מהמשחק (הפסד טכני!)', sentEng: 'Never click Forfeit Match by mistake!', sentHeb: 'לעולם אל תלחץ על Forfeit Match בטעות!' },
      { icon: '🔁', eng: 'Rematch', heb: 'משחק חוזר מיידי', sentEng: 'Let us play a rematch right now!', sentHeb: 'בוא נשחק משחק חוזר עכשיו!' },
      { icon: '🥅', eng: 'Penalty Shootout', heb: 'דו-קרב פנדלים', sentEng: 'We won the penalty shootout!', sentHeb: 'ניצחנו בדו-קרב הפנדלים!' },
      { icon: '🚩', eng: 'Offside', heb: 'נבדל (הדגל של הקוון למעלה)', sentEng: 'Offside! The flag is up!', sentHeb: 'נבדל! הדגל למעלה!' },
      { icon: '🏃‍♂️', eng: 'One on One', heb: 'אחד על אחד מול השוער', sentEng: 'He is through on goal, one on one!', sentHeb: 'הוא לבד מול השוער, אחד על אחד!' }
    ]
  },
  {
    id: 'dict_soccer',
    title: '⚽ כדורגל ואצטדיון',
    items: [
      { icon: '⚽', eng: 'Soccer Ball', heb: 'כדורגל', sentEng: 'Pass the ball to your friend!', sentHeb: 'מסור את הכדור לחבר שלך!' },
      { icon: '🥅', eng: 'Goal & Crossbar', heb: 'שער ומשקוף', sentEng: 'The ball hit the crossbar!', sentHeb: 'הכדור פגע במשקוף!' },
      { icon: '🧤', eng: 'Goalkeeper Save', heb: 'הצלה של השוער', sentEng: 'What a great save by the goalkeeper!', sentHeb: 'איזו הצלה נהדרת של השוער!' },
      { icon: '🏆', eng: 'Champions Trophy', heb: 'גביע האלופים', sentEng: 'Our team won the Champions Trophy!', sentHeb: 'הקבוצה שלנו זכתה בגביע האלופים!' },
      { icon: '🏟️', eng: 'Stadium', heb: 'אצטדיון כדורגל', sentEng: 'Teddy Stadium is full of fans.', sentHeb: 'אצטדיון טדי מלא באוהדים.' },
      { icon: '🎩', eng: 'Hat-trick', heb: 'שלושער (3 גולים במשחק)', sentEng: 'Ilay scored a hat-trick today!', sentHeb: 'עילי הבקיע שלושער היום!' },
      { icon: '🟨', eng: 'Yellow & Red Card', heb: 'כרטיס צהוב ואדום', sentEng: 'The referee showed a yellow card.', sentHeb: 'השופט הראה כרטיס צהוב.' },
      { icon: '📐', eng: 'Corner Kick', heb: 'כדור קרן', sentEng: 'Cross the ball from the corner kick.', sentHeb: 'הרם את הכדור מכדור הקרן.' }
    ]
  },
  {
    id: 'dict_science',
    title: '🔬 מדע, חלל וטבע',
    items: [
      { icon: '🌍', eng: 'Gravity', heb: 'כוח הכבידה', sentEng: 'Gravity pulls the ball back to Earth.', sentHeb: 'כוח הכבידה מושך את הכדור חזרה לכדור הארץ.' },
      { icon: '🌈', eng: 'Rainbow', heb: 'קשת בענן', sentEng: 'Sun and rain make a colorful rainbow!', sentHeb: 'שמש וגשם יוצרים קשת בענן צבעונית!' },
      { icon: '🚀', eng: 'Space Rocket', heb: 'טיל חלל', sentEng: 'The space rocket flies to the moon.', sentHeb: 'טיל החלל טס אל הירח.' },
      { icon: '☀️', eng: 'Sunlight', heb: 'אור השמש', sentEng: 'Green leaves need sunlight and water.', sentHeb: 'עלים ירוקים צריכים אור שמש ומים.' },
      { icon: '🧠', eng: 'Brain', heb: 'המוח שלנו', sentEng: 'Your brain sends fast signals to your legs.', sentHeb: 'המוח שלך שולח אותות מהירים לרגליים.' },
      { icon: '❤️', eng: 'Heart', heb: 'הלב הפועם', sentEng: 'Your heart beats faster when you run.', sentHeb: 'הלב שלך פועם מהר יותר כשאתה רץ.' },
      { icon: '🧲', eng: 'Magnet', heb: 'מגנט', sentEng: 'A magnet attracts iron and metal.', sentHeb: 'מגנט מושך אליו ברזל ומתכת.' },
      { icon: '🌋', eng: 'Volcano', heb: 'הר געש', sentEng: 'The volcano erupts with hot lava!', sentHeb: 'הר הגעש מתפרץ עם לבה חמה!' },
      { icon: '🦖', eng: 'Dinosaur Fossil', heb: 'מאובן של דינוזאור', sentEng: 'Scientists found a huge dinosaur fossil.', sentHeb: 'מדענים מצאו מאובן ענק של דינוזאור.' },
      { icon: '⚡', eng: 'Lightning & Thunder', heb: 'ברק ורעם', sentEng: 'We see lightning before we hear thunder.', sentHeb: 'אנחנו רואים את הברק לפני ששומעים את הרעם.' }
    ]
  },
  {
    id: 'dict_glam_stitch',
    title: '🦄 ליה, סטיץ׳, איפור וחיות',
    items: [
      { icon: '🦄', eng: 'Magic Unicorn', heb: 'חד-קרן קסום', sentEng: 'Lia loves the pink and gold unicorn!', sentHeb: 'ליה אוהבת את חד-הקרן הוורוד והמוזהב!' },
      { icon: '💄', eng: 'Pink Lipstick', heb: 'שפתון ורוד', sentEng: 'Put on some sparkly pink lipstick.', sentHeb: 'שימי שפתון ורוד נוצץ.' },
      { icon: '👑', eng: 'Gold Crown', heb: 'כתר זהב של נסיכה', sentEng: 'Princess Lia wears a gold crown.', sentHeb: 'הנסיכה ליה חובשת כתר זהב.' },
      { icon: '🦋', eng: 'Butterfly', heb: 'פרפר צבעוני', sentEng: 'The caterpillar turns into a butterfly!', sentHeb: 'הזחל הופך לפרפר צבעוני!' },
      { icon: '🐬', eng: 'Dolphin', heb: 'דולפין בים', sentEng: 'The happy dolphin jumps in the blue sea.', sentHeb: 'הדולפין השמח קופץ בים הכחול.' },
      { icon: '🐶', eng: 'Puppy Dog', heb: 'כלבלב חמוד', sentEng: 'The little puppy likes to play with a ball.', sentHeb: 'הכלבלב הקטן אוהב לשחק בכדור.' },
      { icon: '🍦', eng: 'Strawberry Ice Cream', heb: 'גלידת תות מתוקה', sentEng: 'I would like strawberry ice cream, please!', sentHeb: 'אני אשמח לגלידת תות, בבקשה!' },
      { icon: '👩‍🏫', eng: 'Kindergarten Teacher', heb: 'גננת בגן הילדים', sentEng: 'Good morning Teacher Lia!', sentHeb: 'בוקר טוב הגננת ליה!' }
    ]
  },
  {
    id: 'dict_phrases',
    title: '💬 משפטים שימושיים לשיחה באנגלית',
    items: [
      { icon: '☀️', eng: 'Good morning! How are you?', heb: 'בוקר טוב! מה שלומך?', sentEng: 'Good morning! I am great, thank you!', sentHeb: 'בוקר טוב! אני מצוין, תודה רבה!' },
      { icon: '🙋‍♂️', eng: 'My name is Ilay', heb: 'קוראים לי עילי', sentEng: 'Hello! My name is Ilay and this is my sister Lia.', sentHeb: 'שלום! קוראים לי עילי וזאת אחותי ליה.' },
      { icon: '🙏', eng: 'Thank you very much!', heb: 'תודה רבה מאוד!', sentEng: 'Thank you very much for helping me!', sentHeb: 'תודה רבה מאוד שעזרת לי!' },
      { icon: '🤝', eng: 'Can we play together?', heb: 'אפשר לשחק יחד?', sentEng: 'Let us play soccer together!', sentHeb: 'בואו נשחק כדורגל יחד!' },
      { icon: '🌟', eng: 'I can do it!', heb: 'אני יכול/ה להצליח!', sentEng: 'I practice every day and I can do it!', sentHeb: 'אני מתאמן כל יום ואני יכול להצליח!' },
      { icon: '❤️', eng: 'I love my family!', heb: 'אני אוהב/ת את המשפחה שלי!', sentEng: 'I love my mom, dad, brother and sister!', sentHeb: 'אני אוהב את אמא, אבא, אחי ואחותי!' }
    ]
  }
];

// ==================== NOAM INSTITUTE 2025 GIFTED CURRICULUM & SCAFFOLDED GENERATORS ====================

const GIFTED_VERBAL_ANALOGIES_BANK = [
  // Easy: Direct everyday connection (פעולות ואיברים מוכרים)
  { pair1: 'לָעוּף : נַחְלִיאֵלִי', rel: 'תנועה אופיינית של בעל חיים', ans: 'לָרוּץ : אַרְיֵה', wrong: ['לִשְׁאֹג : אַרְיֵה', 'לָצוּד : אַרְיֵה', 'לֶאֱכֹל : אַרְיֵה'], diff: 'easy', hint: 'הנחליאלי נע בעזרת תעופה (לעוף). כיצד נע האריה ממקום למקום? בעזרת ריצה (לרוץ)!' },
  { pair1: 'דָּג : סְנַפִּיר', rel: 'איבר תנועה', ans: 'צִפּוֹר : כָּנָף', wrong: ['צִפּוֹר : מַקּוֹר', 'צִפּוֹר : נוֹצָה', 'צִפּוֹר : קֵן'], diff: 'easy', hint: 'הסנפיר משמש את הדג לשחייה ותנועה במים, בדיוק כמו שהכנף משמשת את הציפור לעוף!' },
  { pair1: 'סַכִּין : לַחְתֹּךְ', rel: 'כלי ותפקידו', ans: 'מִסְפָּרַיִם : לִגְזֹר', wrong: ['מִסְפָּרַיִם : מַחְבֶּרֶת', 'דֶּבֶק : לִכְתֹּב', 'עִפָּרוֹן : לִמְחֹק'], diff: 'easy', hint: 'הסכין נועד לחתוך דברים, ומספריים נועדו לגזור דברים!' },
  { pair1: 'שֶׁמֶשׁ : יוֹם', rel: 'מופיע בזמן מסוים', ans: 'יָרֵחַ : לַיְלָה', wrong: ['עָנָן : גֶּשֶׁם', 'כּוֹכָב : בֹּקֶר', 'אֵשׁ : מַיִם'], diff: 'easy', hint: 'השמש מאירה בשמיים ביום, והירח מאיר בשמיים בלילה!' },

  // Medium: Category, tool, and craftsman (כמו עמוד 11 ב-PDF!)
  { pair1: 'אֲפֻדָּה : בֶּגֶד', rel: 'פריט והקבוצה/סוג שלו', ans: 'מַבְרֵג : כְּלִי עֲבוֹדָה', wrong: ['גּוּפִיָּה : קַיִץ', 'מִשְׁפָּחָה : בַּיִת', 'צֶמֶר : סְוֶדֶר'], diff: 'medium', hint: 'אפודה היא סוג של בגד, בדיוק כפי שמברג הוא סוג של כלי עבודה!' },
  { pair1: 'אוֹפֶה : לֶחֶם', rel: 'בעל מקצוע והתוצר שהוא מייצר', ans: 'נַגָּר : שֻׁלְחָן', wrong: ['רוֹפֵא : תְּרוּפָה', 'צַיָּר : מִכְחוֹל', 'שׁוֹעֵר : כַּדּוּר'], diff: 'medium', hint: 'האופה יוצר ומכין לחם, והנגר יוצר ובונה שולחן מעץ!' },
  { pair1: 'מוֹרֶה : בֵּית סֵפֶר', rel: 'בעל מקצוע ומקום עבודתו', ans: 'רוֹפֵא : בֵּית חוֹלִים', wrong: ['שַׂחְקָן : כַּדּוּר', 'טַיָּס : עֲנָנִים', 'טַבָּח : סַכִּין'], diff: 'medium', hint: 'המורה עובד בבית הספר, בדיוק כפי שהרופא עובד בבית החולים!' },
  { pair1: 'סֵפֶר : דַּפִּים', rel: 'שלם וחלקיו', ans: 'בַּיִת : חֲדָרִים', wrong: ['מִטָּה : חֲלוֹם', 'רְחוֹב : עִיר', 'מְכוֹנִית : כְּבִישׁ'], diff: 'medium', hint: 'הספר מורכב מהרבה דפים, והבית מורכב מהרבה חדרים!' },

  // Hard: Abstract relationships, degree of intensity & symbolic representation
  { pair1: 'קַר : קָפוּא', rel: 'עוצמה ודרגה גבוהה', ans: 'חַם : לוֹהֵט', wrong: ['אָדֹם : אֵשׁ', 'מָתוֹק : מַר', 'קָטָן : רָחָב'], diff: 'hard', hint: 'קפוא זו דרגה חזקה וקיצונית ביותר של קר, בדיוק כמו שלוהט זו דרגה קיצונית ביותר של חם!' },
  { pair1: 'מִשְׁקָפַיִם : רְאִיָּה', rel: 'אביזר עזר לחוש', ans: 'אָזְנִיּוֹת : שְׁמִיעָה', wrong: ['רַגְלַיִם : הֲלִיכָה', 'כּוֹבַע : שֵׂעָר', 'שָׁעוֹן : זְמַן'], diff: 'hard', hint: 'משקפיים מסייעים לחוש הראייה, ואוזניות/מכשיר שמיעה מסייעים לחוש השמיעה!' },
  { pair1: 'מָטוֹס : שָׁמַיִם', rel: 'כלי תחבורה ותוואי תנועה', ans: 'צַוֶּלֶת : מַעֲמַקֵּי הַיָּם', wrong: ['מְכוֹנִית : גַּלְגַּל', 'רַכֶּבֶת : תַּחֲנָה', 'אֳנִיָּה : נָמָל'], diff: 'hard', hint: 'המטוס נע במרחב השמיים, והצוללת נעה במעמקי הים!' },
  { pair1: 'שׁוֹפֵט : מַשְׁרוֹקִית', rel: 'בעל תפקיד וכלי הסמכות והניהול שלו', ans: 'קוֹסֵם : שַׁרְבִיט', wrong: ['חַיָּל : מַדִּים', 'מְנַהֵל : כִּסֵּא', 'שַׂחְקָן : נַעֲלַיִם'], diff: 'hard', hint: 'השופט מנהל את המשחק באמצעות המשרוקית, והקוסם עושה קסמים באמצעות השרביט!' },

  // Additional Authentic 2nd Grade Gifted Analogies (מכון סאלד, קרני ודגל):
  { pair1: 'שֶׁלֶג : חֹרֶף', rel: 'תופעת מזג אוויר והעונה שלה', ans: 'שָׁרָב : קַיִץ', wrong: ['גֶּשֶׁם : אָבִיב', 'עָנָן : סְתָו', 'רוּחַ : לַיְלָה'], diff: 'easy', hint: 'שלג יורד בעונת החורף, בדיוק כפי ששרב (חום כבד) מופיע בעונת הקיץ!' },
  { pair1: 'מַנְעוּל : מַפְתֵּחַ', rel: 'מתקן סגור והכלי שפותח אותו', ans: 'בַּקְבּוּק : פּוֹתְחָן', wrong: ['דֶּלֶת : יָדִית', 'חַלּוֹן : וִילוֹן', 'קִיר : תְּמוּנָה'], diff: 'easy', hint: 'מפתח משמש לפתיחת מנעול, בדיוק כמו שפותחן משמש לפתיחת בקבוק פקק!' },
  { pair1: 'אֶצְבַּע : כְּפָפָה', rel: 'איבר גוף והכיסוי המותאם לו', ans: 'כַּף רֶגֶל : גֶּרֶב', wrong: ['עַיִן : רְאִיָּה', 'רֹאשׁ : מַצְחִיָּה', 'צַוָּאר : חֻלְצָה'], diff: 'easy', hint: 'הכפפה עוטפת ומכסה את האצבעות, והגרב עוטף ומכסה את כף הרגל!' },
  { pair1: 'מִכְחוֹל : לִצְבֹּעַ', rel: 'כלי עבודה והפעולה שמבצעים בעזרתו', ans: 'עֵט : לִכְתֹּב', wrong: ['מַחְבֶּרֶת : לִלְמֹד', 'מַחַק : דַּף', 'צֶבַע : קִיר'], diff: 'medium', hint: 'במכחול משתמשים כדי לצבוע, ובעט משתמשים כדי לכתוב!' },
  { pair1: 'צַיָּר : תְּמוּנָה', rel: 'יוצר והיצירה שלו', ans: 'סוֹפֵר : סִפּוּר', wrong: ['נַגָּר : עֵץ', 'מְשׁוֹרֵר : עִפָּרוֹן', 'שַׂחְקָן : בָּמָה'], diff: 'medium', hint: 'הצייר יוצר תמונה, והסופר כותב ויוצר סיפור או ספר!' },
  { pair1: 'עֵץ : חֻרְשָׁה', rel: 'פריט בודד והקבוצה שהוא מרכיב', ans: 'שַׂחְקָן : קְבוּצָה', wrong: ['עָלֶה : עָנָף', 'פֶּרַח : שָׂדֶה', 'דֶּשֶׁא : אֲדָמָה'], diff: 'medium', hint: 'הרבה עצים יחד יוצרים חורשה, והרבה שחקנים יחד יוצרים קבוצה!' },
  { pair1: 'סִירָה : מָשׁוֹט', rel: 'כלי תחבורה ואמצעי ההנעה שלו', ans: 'אוֹפַנַּיִם : דַּוְשׁוֹת', wrong: ['רַכֶּבֶת : פַּסִּים', 'מְכוֹנִית : כְּבִישׁ', 'מָטוֹס : כְּנָפַיִם'], diff: 'medium', hint: 'הסירה נעה קדימה בעזרת משוטים, והאופניים נעים קדימה בעזרת דוושות (פדלים)!' },
  { pair1: 'מַצְפֵּן : כִּוּוּן', rel: 'מכשיר מדידה והמדד שהוא מראה', ans: 'מַדְחֹם : טֶמְפֶּרָטוּרָה', wrong: ['שָׁעוֹן : מְחוֹג', 'מַשְׁקָל : כָּבֵד', 'מַד מֶטֶר : קַו'], diff: 'hard', hint: 'המצפן מודד ומראה כיוון, ומדחום מודד ומראה טמפרטורה (חום)!' },
  { pair1: 'שֶׁקֶט : צְעָקָה', rel: 'ניגוד מוחלט בעוצמת קול', ans: 'לַחַשׁ : צְעָקָה', wrong: ['דִּבּוּר : קוֹל', 'מַנְגִּינָה : שִׁיר', 'רַעַשׁ : שָׁעוֹן'], diff: 'hard', hint: 'לחש (לחישה שקטה מאוד) הוא הניגוד של צעקה (קול רם מאוד)!' },
  { pair1: 'קְלִפָּה : תַּפּוּחַ', rel: 'מעטפת חיצונית המגנה על הפנים', ans: 'שִׁרְיוֹן : צָב', wrong: ['נוֹצָה : כָּנָף', 'פַּרְוָה : זָנָב', 'עוֹר : שֵׂעָר'], diff: 'hard', hint: 'הקליפה מגנה על הפרי מבחוץ, והשריון מגן על גופו של הצב מבחוץ!' }
];

const GIFTED_SENTENCE_COMPLETION_BANK = [
  // Easy: Clear cause & effect
  { q: 'לַמְרוֹת הַגֶּשֶׁם הַשּׁוֹטֵף שֶׁיָּרַד בַּחוּץ, הַיְּלָדִים ______ לְשַׂחֵק כַּדּוּרֶגֶל בַּמִּגְרָשׁ.', ans: 'הִמְשִׁיכוּ', wrong: ['הִפְסִיקוּ', 'נִבְהֲלוּ', 'שָׁכְחוּ'], diff: 'easy', hint: 'המילה "למרות" מסמנת ניגוד: הגשם לא עצר אותם, אלא הם המשיכו לשחק!' },
  { q: 'כְּדֵי שֶׁהַפֶּרַח בָּעֲצִיץ יִצְמַח וְיִפְרַח, יֵשׁ לְהַקְפִּיד ______ אוֹתוֹ בְּאֹפֶן קָבוּעַ.', ans: 'לְהַשְׁקוֹת', wrong: ['לִקְטֹף', 'לְהַחְבִּיא', 'לְיַבֵּשׁ'], diff: 'easy', hint: 'צמחים זקוקים למים באופן קבוע כדי לצמוח ולפרוח!' },
  { q: 'עִילַי הִתְכּוֹנֵן לַמִּבְחָן בְּמֶרֶץ רַב, וְלָכֵן הִצְלִיחַ לִפְתֹּר אֶת כָּל הַשְּׁאֵלוֹת ______.', ans: 'בְּקַלּוּת', wrong: ['בִּקְוֹשִׁי', 'בְּטָעוּת', 'לְאַט מְאֹד'], diff: 'easy', hint: 'מי שמתאמן ומתכונן היטב — מצליח לפתור בקלות ובביטחון!' },

  // Medium: Like pages 11-12 in PDF!
  { q: '______ אֶת מִטָּתִי לִפְנֵי שֶׁהָלַכְתִּי לְבֵית הַסֵּפֶר.', ans: 'הִצַּעְתִּי', wrong: ['הִלְבַּשְׁתִּי', 'יָשַׁנְתִּי', 'קַמְתִּי'], diff: 'medium', hint: 'בעברית תקנית אומרים: "להציע את המיטה" (לסדר את המצעים והכרית)!' },
  { q: 'לִיהִי ______ לַחֲלֹק עִם חֲבֶרְתָּהּ אֶת הַכָּרִיךְ שֶׁהֵבִיאָה מִבֵּיתָהּ, מִשּׁוּם שֶׁהָיְתָה רְעֵבָה מְאֹד וּלְחַבְרָתָהּ הָיָה כָּרִיךְ מִשֶּׁלָּהּ.', ans: 'סֵרְבָה', wrong: ['הִסְכִּימָה', 'קֵרְבָה', 'רָצְתָה'], diff: 'medium', hint: 'ההסבר במשפט מבהיר: ליהי הייתה מאוד רעבה ולחברה כבר היה כריך, ולכן ליהי סירבה לחלוק!' },
  { q: 'הַשּׁוֹפֵט שָׁרַק לְסִיּוּם הַמִּשְׂחָק לְאַחַר שֶׁהַשַּׂחְקָנִים ______ תִּשְׁעִים דַּקּוֹת שֶׁל מַאֲמָץ גָּדוֹל.', ans: 'הִשְׁלִימוּ', wrong: ['הִפְסִידוּ', 'הִתְחִילוּ', 'וִתְּרוּ'], diff: 'medium', hint: 'בסיום 90 הדקות, השחקנים השלימו את כל זמן המשחק!' },

  // Hard: Nuanced context and logic
  { q: 'אַף עַל פִּי שֶׁהַחִידָה הָיְתָה מֻרְכֶּבֶת, עִילַי לֹא אִבֵּד אֶת סַבְלָנוּתוֹ וְהִמְשִׁיךְ לְנַסּוֹת עַד שֶׁהִגִּיעַ לַפִּתְרוֹן ______.', ans: 'הַמְּדֻיָּק', wrong: ['הַמֻּטְעֶה', 'הַמְבֻלְבָּל', 'הַמְּהִיר מִדַּי'], diff: 'hard', hint: '"אף על פי" = למרות הקושי, עילי המשיך עד שהגיע לפתרון הנכון והמדויק!' },
  { q: 'הַשּׁוֹעֵר קוּרְטוּאָה זִנֵּק לַכַּדּוּר בִּזְרִיזוּת מַפְתִּיעָה וְהִצְלִיחַ ______ גּוֹל בָּטוּחַ בַּשְּׁנִיָּה הָאַחֲרוֹנָה.', ans: 'לִמְנֹעַ', wrong: ['לְהַבְקִיעַ', 'לְהַרְשׁוֹת', 'לִשְׁכֹּחַ'], diff: 'hard', hint: 'תפקידו של שוער כדורגל הוא למנוע שערים ולעצור את הכדור!' },

  // Additional Authentic 2nd Grade Gifted Sentence Completions:
  { q: 'הַסּוּפָה בַּחוּץ הָיְתָה עַזָּה מְאֹד, ______ הַדֶּלֶת שֶׁל הַבַּיִת נִשְׁאֲרָה נְעוּלָה וּבְטוּחָה.', ans: 'אוּלָם', wrong: ['לָכֵן', 'כִּי', 'מִפְּנֵי שֶׁ'], diff: 'easy', hint: '"אולם" (כמו "אבל") מציין ניגוד: בחוץ סערה, אבל הבית נשאר מוגן!' },
  { q: 'לַמְרוֹת שֶׁהַדֶּרֶךְ הָיְתָה אֲרֻכָּה וּמְעַיֶּפֶת, הַמְטַיְּלִים לֹא ______ וְהִגִּיעוּ עַד לְרֹאשׁ הָהָר.', ans: 'הִתְיָאֲשׁוּ', wrong: ['הִמְשִׁיכוּ', 'שָׂמְחוּ', 'הִסְכִּימוּ'], diff: 'easy', hint: 'מי שלא מוותר ומגיע עד הפסגה — הוא לא התייאש!' },
  { q: 'הַמּוֹרָה בַּכִּתָּה בִּקְּשָׁה מֵהַיְּלָדִים לִשְׁמֹר עַל ______ כְּדֵי שֶׁכֻּלָּם יוּכְלוּ לְהִתְרַכֵּז בַּמְּשִׂימָה.', ans: 'שֶׁקֶט', wrong: ['צְעָקוֹת', 'רַעַשׁ', 'מְהִירוּת'], diff: 'easy', hint: 'כדי להתרכז היטב בחשיבה זקוקים לשקט!' },
  { q: 'מִפְּנֵי שֶׁעִילַי קָרָא אֶת כָּל הַהוֹרָאוֹת מֵהַתְחָלָה וְעַד הַסּוֹף, הוּא פָּתַר אֶת הַחִידָה לְלֹא שׁוּם ______.', ans: 'טָעוּת', wrong: ['הַצְלָחָה', 'תְּשׂוּמַת לֵב', 'סַבְלָנוּת'], diff: 'medium', hint: 'מי שקורא את כל ההוראות בקפידה פותר ללא טעויות!' },
  { q: 'בִּמְקוֹם לִכְעֹס כַּאֲשֶׁר חֲבֵרוֹ שָׁבַר בְּטָעוּת אֶת הַצַּעֲצוּעַ, דָּנִיֵּאל גִּלָּה ______ וְסָלַח לוֹ.', ans: 'הֲבָנָה', wrong: ['קַנְאָה', 'בֶּהָלָה', 'אַכְזָבָה'], diff: 'medium', hint: 'כאשר מבינים שמשהו קרה בטעות וסולחים — מגלים הבנה ורוחב לב!' },
  { q: 'הַכַּלְבְלַב הַקָּטָן כִּשְׂכֵּשׂ בִּזְנָבוֹ בְּהִתְלַהֲבוּת מִשּׁוּם שֶׁהָיָה ______ לִרְאוֹת אֶת בְּנֵי הַמִּשְׁפָּחָה שָׁבִים הַבַּיְתָה.', ans: 'שָׂמֵחַ מְאֹד', wrong: ['עָצוּב', 'רָגוּז', 'מְבֻלְבָּל'], diff: 'medium', hint: 'כשכלב מכשכש בזנב בהתלהבות הוא שמח ומאושר!' },
  { q: 'כְּדֵי לִזְכּוֹת בִּמְקוֹם הָרִאשׁוֹן בַּגְּבִיעַ, עַל הַשַּׂחְקָנִים לְהַפְגִּין לֹא רַק כֹּשֶׁר גּוּפָנִי גָּבוֹהַּ, אֶלָּא גַּם ______ קְבוּצָתִי מְצֻיָּן.', ans: 'שִׁתּוּף פְּעֻלָּה', wrong: ['רִחוּק', 'וִתּוּר', 'עַקְשָׁנוּת'], diff: 'hard', hint: 'בכדורגל מנצחים ביחד כקבוצה בזכות שיתוף פעולה ומסירות הדדיות!' },
  { q: 'קַרְקָעִית הַיָּם בָּאֲזוֹר הַזֶּה עֲמֻקָּה מְאֹד, וּלְפִיכָךְ קַרְנֵי הַשֶּׁמֶשׁ ______ לְהַגִּיעַ אֵלֶיהָ.', ans: 'אֵינָן מַצְלִיחוֹת', wrong: ['מַהֲרוֹת', 'מַמְשִׁיכוֹת', 'אוֹהֲבוֹת'], diff: 'hard', hint: 'במעמקי הים החשוכים אור השמש אינו מצליח לחדור בגלל עומק המים!' }
];

const GIFTED_PICTURE_RIDDLES_BANK = [
  // Easy: Single substitution
  {
    stim: '☀️ + ☀️ = 12<br>🧲 + ☀️ = 10',
    target: '🧲',
    tts: 'שמש ועוד שמש שווה שתים עשרה. פרסה ועוד שמש שווה עשר. מה הערך של הפרסה?',
    ans: '4',
    wrong: ['3', '5', '6'],
    diff: 'easy',
    hint: 'שלב 1: שתי שמשות שוות 12, לכן שמש אחת = 6. שלב 2: פרסה + 6 = 10, לכן פרסה = 10 פחות 6 = 4!'
  },
  {
    stim: '⚽ + ⚽ = 16<br>👑 + ⚽ = 18',
    target: '👑',
    tts: 'כדור ועוד כדור שווה שש עשרה. כתר ועוד כדור שווה שמונה עשרה. מה הערך של הכתר?',
    ans: '10',
    wrong: ['8', '9', '12'],
    diff: 'easy',
    hint: 'כדור = 8 (כי 8+8=16). כתר ועוד 8 שווה 18, לכן כתר = 10!'
  },

  // Medium: Exact Noam 2025 PDF items (עמוד 4!)
  {
    stim: '☀️ + ☀️ = 10<br>🧲 + ☀️ = 13',
    target: '🧲',
    tts: 'שמש ועוד שמש שווה עשר. פרסה ועוד שמש שווה שלוש עשרה. איזה מספר מתאים לפרסה?',
    ans: '8',
    wrong: ['3', '5', '7'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה: ☀️ + ☀️ = 10 ➔ שמש אחת שווה 5! מציבים בשורה השנייה: 🧲 + 5 = 13 ➔ 🧲 = 13 − 5 = 8!'
  },
  {
    stim: '⚓ + ⭐ = 9<br>⚓ + ⭐ + 🔔 + ⚓ + ⭐ = 39',
    target: '🔔',
    tts: 'עוגן ועוד כוכב שווה תשע. עוגן ועוד כוכב ועוד פעמון ועוד עוגן ועוד כוכב שווה שלושים ותשע. מה הערך של הפעמון?',
    ans: '21',
    wrong: ['19', '16', '15'],
    diff: 'medium',
    hint: '💡 גאוני ופשוט: שימו לב ש-(⚓ + ⭐) מופיע פעמיים! 9 + 🔔 + 9 = 39 ➔ 18 + 🔔 = 39 ➔ 🔔 = 39 − 18 = 21!'
  },

  // Hard: Multi-digit symbol placement (עמוד 5 ב-PDF!)
  {
    stim: '☀️2 + 4☀️ = 64',
    target: '☀️',
    tts: 'שמש שתיים, ועוד ארבעים ושמש, שווה שישים וארבע. איזו ספרה מתאימה לסמל שמש?',
    ans: '2',
    wrong: ['1', '3', '4'],
    diff: 'hard',
    hint: '💡 בדיקת ספרת האחדות והעשרות: 2 + ☀️ נותן 4 בספרת האחדות, לכן ☀️ חייבת להיות 2! נבדוק: 22 + 42 = 64 בדיוק!'
  },
  {
    stim: '🦁 + 🦁 + 🦁 = 24<br>🦁 + 🏆 = 18<br>🏆 + ⚡ = 15',
    target: '⚡',
    tts: 'שלושה אריות שווים עשרים וארבע. אריה ועוד גביע שווה שמונה עשרה. גביע ועוד ברק שווה חמש עשרה. מה הערך של ברק?',
    ans: '5',
    wrong: ['4', '6', '8'],
    diff: 'hard',
    hint: 'אריה = 8 (24 לחלק ל-3). גביע = 18 פחות 8 = 10. ברק = 15 פחות 10 = 5!'
  }
];

const GIFTED_NUMBERS_SHAPES_BANK = [
  // Easy: Circle relations
  {
    title: 'מַעְגָּל קִשְׁרֵי כֶּפֶל',
    visual: 'מעגל א׳: [ 4 , 5 ➔ 20 ]<br>מעגל ב׳: [ ? , 6 ➔ 30 ]',
    tts: 'במעגל הראשון: ארבע וחמש נותנים עשרים. במעגל השני: סימן שאלה ושש נותנים שלושים. מה המספר החסר?',
    ans: '5',
    wrong: ['4', '6', '7'],
    diff: 'easy',
    hint: 'החוקיות היא כפל של שני המספרים הקטנים: 4 × 5 = 20. לכן ? × 6 = 30 ➔ ? = 5!'
  },

  // Medium: Noam PDF Page 13 Question 1
  {
    title: 'מַעְגָּל שְׁלוֹשׁ גְּזָרוֹת (מִבְחַן נוֹעַם)',
    visual: '<div style="font-size:1.15rem;font-weight:900;background:rgba(37,99,235,0.08);padding:10px;border-radius:12px;border:2px solid #3b82f6;">מעגל 1: למעלה 6 ו-18, למטה 3 (6 × 3 = 18)<br>מעגל 2: למעלה ? ו-12, למטה 4</div>',
    tts: 'במעגל הראשון למעלה שש ושמונה עשרה ולמטה שלוש. במעגל השני למעלה סימן שאלה ושתים עשרה ולמטה ארבע. איזה מספר יכול להחליף את סימן השאלה?',
    ans: '3',
    wrong: ['6', '8', '4'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה: 6 × 3 = 18 (או 18 לחלק ל-3 = 6). לכן במעגל השני: 12 לחלק ל-4 = 3!'
  },

  // Hard: Noam PDF Page 13 Question 2 (משולש חלוקה/פירמידה)
  {
    title: 'מְשֻׁלַּשׁ חֲלוּקָה (מִבְחַן נוֹעַם)',
    visual: '<div style="font-size:1.1rem;font-weight:900;background:rgba(16,185,129,0.08);padding:10px;border-radius:12px;border:2px solid #10b981;">קודקוד עליון: 14<br>שורה אמצעית: ? ו- 8<br>שורה תחתונה: 1 , 5 , 3</div>',
    tts: 'במשולש החלוקה: הקודקוד העליון הוא ארבע עשרה. בשורה האמצעית יש סימן שאלה ושמונה. בשורה התחתונה יש אחת, חמש, ושלוש. איזה מספר מחליף את סימן השאלה?',
    ans: '6',
    wrong: ['3', '5', '4'],
    diff: 'hard',
    hint: '💡 שיטת החשיבה: כל משבצת היא סכום שתי המשבצות שמתחתיה! בשורה התחתונה: 1 + 5 = 6 (המשבצת החסרה!), 5 + 3 = 8. ולמעלה: 6 + 8 = 14 בדיוק!'
  },
  {
    title: 'מַעְגָּל קִשְׁרֵי כֶּפֶל וְחִלּוּק (מִבְחַן נוֹעַם)',
    visual: '<div style="font-size:1.15rem;font-weight:900;background:rgba(59,130,246,0.08);padding:10px;border-radius:12px;border:2px solid #3b82f6;">מעגל 1: למעלה 4 ו-28, למטה 7 (4 × 7 = 28)<br>מעגל 2: למעלה 5 ו-45, למטה ?</div>',
    tts: 'במעגל הראשון למעלה ארבע ועשרים ושמונה, ולמטה שבע. במעגל השני למעלה חמש וארבעים וחמש, ולמטה סימן שאלה. איזה מספר מחליף את סימן השאלה?',
    ans: '9',
    wrong: ['7', '8', '6'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה: 4 × 7 = 28. לכן במעגל השני: 5 כפול מה שווה 45? 45 לחלק ל-5 שווה 9!'
  },
  {
    title: 'פִּירָמִידַת מִסְפָּרִים מֻרְכֶּבֶת (סָאלְד וְקַרְנִי)',
    visual: '<div style="font-size:1.1rem;font-weight:900;background:rgba(16,185,129,0.08);padding:10px;border-radius:12px;border:2px solid #10b981;">קודקוד עליון: 20<br>שורה אמצעית: ? ו- 11<br>שורה תחתונה: 4 , 5 , 6</div>',
    tts: 'בפירמידת המספרים: הקודקוד העליון הוא עשרים. שורה אמצעית: סימן שאלה ואחת עשרה. שורה תחתונה: ארבע, חמש ושש. איזה מספר מתאים לסימן השאלה?',
    ans: '9',
    wrong: ['8', '10', '7'],
    diff: 'hard',
    hint: '💡 שיטת הסכום: 4 + 5 = 9 (המשבצת החסרה!). 5 + 6 = 11. למעלה: 9 + 11 = 20 בדיוק!'
  },
  {
    title: 'מַאזְנַיִם מְאֻזָּנִים (חֲשִׁיבָה אַלְגֶבְרִית)',
    visual: '<div style="font-size:1.05rem;background:rgba(245,158,11,0.08);padding:10px;border-radius:12px;border:2px solid #f59e0b;">כף ימין: 2 משולשים + עיגול אחד (משקל כל עיגול = 2 ק״ג)<br>כף שמאל: 5 עיגולים זהים<br>המאזניים שווים ומאוזנים! מה המשקל של משולש אחד?</div>',
    tts: 'במאזניים מאוזנים: על כף ימין שני משולשים ועיגול אחד ששוקל שני קילוגרם. על כף שמאל חמישה עיגולים. מה המשקל של משולש אחד?',
    ans: '4 ק״ג',
    wrong: ['2 ק״ג', '6 ק״ג', '8 ק״ג'],
    diff: 'hard',
    hint: '💡 שלב אחר שלב: כף שמאל שוקלת 5 × 2 = 10 ק״ג. נוריד עיגול אחד משני הצדדים: 2 משולשים שווים 4 עיגולים = 8 ק״ג. לכן משולש אחד שוקל 8 ÷ 2 = 4 ק״ג!'
  }
];

const GIFTED_SHAPES_MATRIX_BANK = [
  // Easy: Size / Rotation analogy
  {
    title: 'אַנָלוֹגְיָה צוּרָנִית פְּשׁוּטָה',
    visual: 'עיגול לבן גדול ➔ עיגול שחור קטן<br>ריבוע לבן גדול ➔ ?',
    tts: 'עיגול לבן גדול הופך לעיגול שחור קטן. למה יהפוך ריבוע לבן גדול?',
    ans: '⬛ רִבּוּעַ שָׁחֹר קָטָן',
    wrong: ['⬜ רִבּוּעַ לָבָן קָטָן', '⬛ רִבּוּעַ שָׁחֹר גָּדוֹל', '⚪ עִגּוּל שָׁחֹר קָטָן'],
    diff: 'easy',
    hint: 'החוקיות הכפולה: הצבע משתנה מלבן לשחור, והגודל קטן מגדול לקטן!'
  },
  {
    title: 'סִדְרַת סִבּוּב חֵץ 90 מַעֲלוֹת (קַרְנִי)',
    visual: '⬆️ חץ למעלה ➔ ➡️ חץ ימינה ➔ ⬇️ חץ למטה ➔ ?',
    tts: 'חץ למעלה הופך לחץ ימינה, ואז לחץ למטה. מה החץ הבא בסדרה?',
    ans: '⬅️ חֵץ פּוֹנֶה שְׂמֹאלָה',
    wrong: ['⬆️ חֵץ פּוֹנֶה לְמַעְלָה', '↗️ חֵץ אֲלַכְסוֹנִי', '⬇️ חֵץ פּוֹנֶה לְמַטָּה'],
    diff: 'easy',
    hint: 'החץ מסתובב כל פעם רבע סיבוב (90 מעלות) בכיוון השעון: למעלה ➔ ימינה ➔ למטה ➔ שמאלה!'
  },
  {
    title: 'מִסְפַּר צְלָעוֹת עוֹלֶה בְּצוּרוֹת (סָאלְד)',
    visual: '🔺 משולש (3) ➔ 🔲 ריבוע (4) ➔ ⬟ מחומש (5) ➔ ?',
    tts: 'משולש בעל שלוש צלעות, ריבוע בעל ארבע צלעות, מחומש בעל חמש צלעות. מה הצורה הבאה?',
    ans: '⬡ מְשֻׁשֶּׁה (6 צְלָעוֹת)',
    wrong: ['⚪ עִגּוּל לְלֹא צְלָעוֹת', '⭐ כּוֹכָב', '➕ צְלָב'],
    diff: 'medium',
    hint: 'בכל שלב נוספת צלע אחת: 3 ➔ 4 ➔ 5 ➔ 6 צלעות (משושה)!'
  },

  // Medium: Noam PDF Page 14 (הסרת חלק מהצורה)
  {
    title: 'אַנָלוֹגְיַת הֶחְסֵר (מִבְחַן נוֹעַם עַמּוּד 14)',
    visual: '<div style="font-size:1.05rem;background:rgba(245,158,11,0.08);padding:10px;border-radius:12px;border:2px solid #f59e0b;">משבצת עליונה: עיגול שחור שהוצא ממנו משולש ➔ מוצג המשולש השחור שהוצא.<br>משבצת תחתונה: ריבוע שחור שהוצא ממנו חץ שפונה ימינה ➔ מה יוצג?</div>',
    tts: 'לצורות במשבצות העליונות קיימת חוקיות והתאמה. מה יתאים למשבצת התחתונה?',
    ans: '➡️ חֵץ שָׁחֹר פּוֹנֶה יָמִינָה',
    wrong: ['⬅️ חֵץ שָׁחֹר פּוֹנֶה שְׂמֹאלָה', '⬆️ חֵץ שָׁחֹר פּוֹנֶה לְמַעְלָה', '⬇️ חֵץ שָׁחֹר פּוֹנֶה לְמַטָּה'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה: הצורה בצד שמאל מייצגת בדיוק את החלק שהוצא מהצורה הימנית! החלק שהוצא מהריבוע הוא חץ הפונה ימינה (תשובה ג׳ במבחן)!'
  },

  // Hard: Noam PDF Page 15 (תנועת משבצת שחורה ברשת 3x3)
  {
    title: 'סִדְרַת מִשְׁבָּצוֹת 3x3 (מִבְחַן נוֹעַם עַמּוּד 15)',
    visual: '<div style="font-size:1.05rem;background:rgba(139,92,246,0.08);padding:10px;border-radius:12px;border:2px solid #8b5cf6;">רשת 3x3: הריבוע השחור נע שלב-אחר-שלב:<br>1. פינה ימנית תחתונה ➔ 2. אמצע תחתון ➔ 3. פינה שמאלית תחתונה ➔ 4. אמצע שמאלי ➔ מה הבא?</div>',
    tts: 'הריבוע השחור נע ברשת של שלוש על שלוש. איפה יופיע הריבוע השחור בתמונה הבאה?',
    ans: '↖️ פִּנָּה שְׂמָאלִית עֶלְיוֹנָה (תְּשׁוּבָה א׳)',
    wrong: ['↗️ פִּנָּה יְמָנִית עֶלְיוֹנָה', '⏹️ אֶמְצַע עֶלְיוֹן', '⏹️ מֶרְכַּז הָרֶשֶׁת'],
    diff: 'hard',
    hint: '💡 שיטת החשיבה: עקבו אחרי המסלול של הריבוע השחור — הוא מטייל צעד אחד צעד על מסגרת הרשת בכיוון השעון! אחרי האמצע השמאלי, השלב הבא הוא הפינה השמאלית העליונה (תשובה א׳)!'
  },
  {
    title: 'צוּרָה יוֹצֵאת דֹּפֶן (מִבְחַן סָאלְד וְנוֹעַם)',
    visual: 'איזו צורה אינה שייכת לקבוצה?<br>1. ⚪ עיגול &nbsp;&nbsp; 2. 🔺 משולש &nbsp;&nbsp; 3. 🔲 מרובע &nbsp;&nbsp; 4. ⬟ מחומש',
    tts: 'איזו צורה אינה שייכת לקבוצה? עיגול, משולש, מרובע או מחומש?',
    ans: '⚪ עִגּוּל (כִּי אֵין לוֹ צְלָעוֹת יְשָׁרוֹת וְקָדְקֳדִים)',
    wrong: ['🔺 מְשֻׁלָּשׁ', '🔲 מְרֻבָּע', '⬟ מְחֻמָּשׁ'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה: משולש, מרובע ומחומש הם מצולעים הבנויים מקטעים ישרים וקודקודים. לעיגול יש קו עגול רציף ללא אף צלע ישרה!'
  },

  // Hard: Noam PDF Page 16 (השלמת שטיח חסר)
  {
    title: 'הַשְׁלָמַת חֲתִיכָה חֲסֵרָה בַּשָּׁטִיחַ (מִבְחַן נוֹעַם עַמּוּד 16)',
    visual: '<div style="font-size:1.05rem;background:rgba(236,72,153,0.08);padding:10px;border-radius:12px;border:2px solid #ec4899;">שטיח מעוטר: דוגמת קשתות מעגליות וקווים אנכיים עם חור מרובע במרכז.<br>איזו חתיכה משלימה את המשך הקשתות והקווים במדויק?</div>',
    tts: 'לפניכם שטיח שחסרה בו חתיכה. מהי החתיכה החסרה?',
    ans: '🧩 חֲתִיכָה ד׳ (מַשְׁלִימָה אֶת הַקֶּשֶׁת וְהַקַּוִּים מִמַּטָּה לְמַעְלָה)',
    wrong: ['חֲתִיכָה א׳', 'חֲתִיכָה ב׳', 'חֲתִיכָה ג׳'],
    diff: 'hard',
    hint: '💡 שיטת החשיבה: מתבוננים בקצוות החור המרובע — בפינה השמאלית העליונה של החור חייבת להמשיך קשת מעגלית כלפי מטה, ובתחתית קווים ישרים. החתיכה היחידה שמתחברת מכל 4 הכיוונים היא ד׳!'
  }
];

const GIFTED_WORD_PROBLEMS_BANK = [
  // Easy: Fair share & remainders
  {
    q: 'דָּנִי וְאִיתַי אוֹסְפִים בְּיַחַד מַדְבֵּקוֹת סוּפֶּרְגוֹל. דָּנִי הֵבִיא 13 מַדְבֵּקוֹת וְאִיתַי הֵבִיא 15 מַדְבֵּקוֹת.<br>הֵם הֶחְלִיטוּ לְחַלֵּק בֵּינֵיהֶם אֶת הָאֹסֶף בְּאֹפֶן שָׁוֶה.<br>כַּמָּה מַדְבֵּקוֹת לָקַח כָּל אֶחָד מֵהֶם?',
    tts: 'דני ואיתי אוספים מדבקות. דני הביא שלוש עשרה ואיתי חמש עשרה. הם החליטו לחלק ביניהם שווה בשווה. כמה מדבקות לקח כל אחד?',
    ans: '14 מַדְבֵּקוֹת',
    wrong: ['28 מַדְבֵּקוֹת', '18 מַדְבֵּקוֹת', '9 מַדְבֵּקוֹת'],
    diff: 'easy',
    hint: '💡 שני שלבים קלים: 1. מחברים את הכל: 13 + 15 = 28 מדבקות. 2. מחלקים לשניים שווה בשווה: 28 לחלק ל-2 = 14 מדבקות לכל אחד!'
  },
  {
    q: 'בְּסַלַּט יְרָקוֹת יֵשׁ בְּסַךְ הַכֹּל 10 יְרָקוֹת.<br>מִתּוֹכָם 4 עַגְבָנִיּוֹת, 3 מְלָפְפוֹנִים וְכָל הַשְּׁאָר גְּזָרִים.<br>כַּמָּה גְּזָרִים יֵשׁ בַּסָּלָט?',
    tts: 'בסלט ירקות יש בסך הכל עשרה ירקות. מתוכם ארבע עגבניות, שלושה מלפפונים וכל השאר גזרים. כמה גזרים יש בסלט?',
    ans: '3 גְּזָרִים',
    wrong: ['4 גְּזָרִים', '7 גְּזָרִים', '10 גְּזָרִים'],
    diff: 'easy',
    hint: 'עגבניות ומלפפונים יחד: 4 + 3 = 7 ירקות. נשארו גזרים: 10 פחות 7 = 3 גזרים!'
  },
  {
    q: 'לְעִילַי הָיוּ 40 שְׁקָלִים.<br>הוּא קָנָה כַּדּוּר רֶגֶל שֶׁל בֵּיתָ״ר בְּ-25 שְׁקָלִים וּגְלִידָה לְלִיָּה בְּ-6 שְׁקָלִים.<br>כַּמָּה כֶּסֶף עוֹדֶף נִשְׁאַר לְעִילַי?',
    tts: 'לעילאי היו ארבעים שקלים. הוא קנה כדור בעשרים וחמש שקלים וגלידה בשש שקלים. כמה כסף עודף נשאר לו?',
    ans: '9 שְׁקָלִים',
    wrong: ['15 שְׁקָלִים', '11 שְׁקָלִים', '19 שְׁקָלִים'],
    diff: 'easy',
    hint: '💡 שלב 1: חיבור הקניות: 25 + 6 = 31 שקלים. שלב 2: עודף מתוך 40: 40 פחות 31 = 9 שקלים!'
  },

  // Medium: Multipliers & logic
  {
    q: 'אֵיתָן קוֹלֵעַ 2 סַלִּים בַּמִּשְׂחָק.<br>יוֹנָתָן קוֹלֵעַ מִסְפָּר כָּפוּל שֶׁל סַלִּים מֵאֲשֶׁר אֵיתָן, וְרָוִיתַל קוֹלַעַת פִּי 3 סַלִּים מִיּוֹנָתָן.<br>כַּמָּה סַלִּים קוֹלַעַת רָוִיתַל בַּמִּשְׂחָק?',
    tts: 'איתן קולע שני סלים. יונתן קולע מספר כפול של סלים מאיתן, ורוויתל קולעת פי שלוש סלים מיונתן. כמה סלים קולעת רוויתל?',
    ans: '12 סַלִּים',
    wrong: ['4 סַלִּים', '16 סַלִּים', '7 סַלִּים'],
    diff: 'medium',
    hint: '💡 שיטת החשיבה בשלבים: 1. איתן = 2 סלים. 2. יונתן קולע כפול (פי 2): 2 × 2 = 4 סלים. 3. רוויתל קולעת פי 3 מיונתן: 4 × 3 = 12 סלים!'
  },
  {
    q: 'בְּכָל 3 דַּקּוֹת שֶׁל אִמּוּן, עִילַי מַבְקִיעַ 2 שְׁעָרִים.<br>כַּמָּה שְׁעָרִים יַבְקִיעַ עִילַי בְּ-15 דַּקּוֹת אִמּוּן רְצוּפוֹת?',
    tts: 'בכל שלוש דקות אימון עילאי מבקיע שני שערים. כמה שערים יבקיע בחמש עשרה דקות?',
    ans: '10 שְׁעָרִים',
    wrong: ['6 שְׁעָרִים', '12 שְׁעָרִים', '8 שְׁעָרִים'],
    diff: 'medium',
    hint: '💡 שיטת היחס: 15 דקות זה פי 5 משלוש דקות (15 ÷ 3 = 5). אם הזמן גדל פי 5, גם מספר השערים גדל פי 5: 2 × 5 = 10 שערים!'
  },
  {
    q: 'הַיּוֹם עִילַי בֶּן 8 וַאֲחוֹתוֹ לִיָּה בַּת 5.<br>מָה יִהְיֶה הַהֶפְרֵשׁ בֵּין הַגִּילָאִים שֶׁלָּהֶם בְּעוֹד 10 שָׁנִים?',
    tts: 'היום עילאי בן שמונה ואחותו ליה בת חמש. מה יהיה ההפרש בין הגילאים שלהם בעוד עשר שנים?',
    ans: '3 שָׁנִים',
    wrong: ['13 שָׁנִים', '10 שָׁנִים', '8 שָׁנִים'],
    diff: 'medium',
    hint: '💡 מלכודת קלאסית במבחני מחוננים: ההפרש בין הגילאים של אחים לא משתנה לעולם! שניהם גדלים באותו קצב: 8 פחות 5 = 3 שנים, תמיד!'
  },

  // Hard: Rate, proportion and multi-step logic
  {
    q: 'בְּמֵרוֹץ מְכוֹנִיּוֹת: הַמְּכוֹנִית הַכְּחֻלָּה הִגִּיעָה לִפְנֵי הָאֲדֻמָּה, אַךְ אַחֲרֵי הַיְּרֻקָּה.<br>הַמְּכוֹנִית הַצְּהֻבָּה הִגִּיעָה אַחֲרוֹנָה מִכֻּלָּן.<br>אֵיזוֹ מְכוֹנִית זָכְתָה בַּמָּקוֹם הָרִאשׁוֹן?',
    tts: 'במרוץ מכוניות: המכונית הכחולה הגיעה לפני האדומה, אך אחרי הירוקה. המכונית הצהובה הגיעה אחרונה. איזו מכונית זכתה במקום הראשון?',
    ans: '🟢 הַמְּכוֹנִית הַיְּרֻקָּה',
    wrong: ['🔵 הַמְּכוֹנִית הַכְּחֻלָּה', '🔴 הַמְּכוֹנִית הָאֲדֻמָּה', '🟡 הַמְּכוֹנִית הַצְּהֻבָּה'],
    diff: 'hard',
    hint: '💡 סדר ההגעה מראשון לאחרון: הירוקה עקפה את הכחולה, הכחולה עקפה את האדומה, והצהובה אחרונה. לכן הירוקה ראשונה!'
  },
  {
    q: 'רוֹנִי קוֹפֶצֶת בְּדִלְגִּית.<br>בְּ-5 שְׁנִיּוֹת רוֹנִי קוֹפֶצֶת 8 פְּעָמִים.<br>כַּמָּה פְּעָמִים תִּקְפֹּץ רוֹנִי בְּ-10 שְׁנִיּוֹת?',
    tts: 'רוני קופצת בדלגית. בחמש שניות היא קופצת שמונה פעמים. כמה פעמים תקפוץ בעשר שניות?',
    ans: '16 פְּעָמִים',
    wrong: ['10 פְּעָמִים', '12 פְּעָמִים', '50 פְּעָמִים'],
    diff: 'hard',
    hint: '💡 שיטת היחס: 10 שניות זה פי 2 מחמש שניות! לכן אם הזמן הוכפל פי 2, גם מספר הקפיצות יוכפל פי 2: 8 × 2 = 16 פעמים!'
  },
  {
    q: 'בְּאִמּוּן בֵּיתָ"ר יְרוּשָׁלַיִם הָיוּ 24 כַּדּוּרִים עַל הַדֶּשֶׁא.<br>חֲצִי מֵהַכַּדּוּרִים צְהֻבִּים (12), רֶבַע לְבָנִים (6) וְכָל הַשְּׁאָר שְׁחוֹרִים.<br>כַּמָּה כַּדּוּרִים שְׁחוֹרִים יֵשׁ עַל הַדֶּשֶׁא?',
    tts: 'באימון ביתר היו עשרים וארבעה כדורים. חצי מהכדורים צהובים, רבע לבנים וכל השאר שחורים. כמה כדורים שחורים יש?',
    ans: '6 כַּדּוּרִים',
    wrong: ['4 כַּדּוּרִים', '8 כַּדּוּרִים', '12 כַּדּוּרִים'],
    diff: 'hard',
    hint: 'חצי מ-24 זה 12. רבע מ-24 זה 6. יחד צהובים ולבנים: 12 + 6 = 18. שחורים שנותרו: 24 פחות 18 = 6 כדורים!'
  }
];

const GIFTED_READING_COMP_BANK = [
  {
    q: 'מָה אֶפְשָׁר לִלְמֹד עַל נִזְקֵי חֹסֶר שֵׁנָה מִקֶּטַע הַקְּרִיאָה בַּמִּבְחָן (שׁוּרוֹת 4-8)?',
    tts: 'מה אפשר ללמוד על נזקי חוסר שינה מקטע הקריאה במבחן?',
    ans: 'אֵלּוּ נְזָקִים קוֹרִים כַּאֲשֶׁר אֵין יְשֵׁנִים מַסְפִּיק בַּלַּיְלָה (עַצְבָּנוּת וּמַעֲרֶכֶת חִסּוּן חַלָּשָׁה)',
    wrong: [
      'אֵלּוּ חֳמָרִים מֻפְרָשִׁים בַּגּוּף בִּזְמַן שֶׁיְּשֵׁנִים',
      'כֵּיצַד אֶפְשָׁר לְהַחְלִים בִּמְהִירוּת מִמַּחֲלוֹת',
      'כֵּיצַד הַמֵּידָע שֶׁקָּלַטְנוּ נִשְׁמָר בַּזִּכָּרוֹן'
    ],
    diff: 'medium',
    hint: 'בשורות 4-8 מתוארים הנזקים של חוסר שינה: עצבנות, עקשנות, היחלשות מערכת החיסון ופגיעה בריכוז!'
  },
  {
    q: 'אֵיזוֹ מִלָּה יְכוֹלָה לְהַחְלִיף בַּקֶּטַע אֶת הַמִּלָּה <strong>"שְׂלֵוָה"</strong> (שׁוּרָה 13: "יְצִירַת אֲוִירָה שְׂלֵוָה")?',
    tts: 'איזו מילה יכולה להחליף בקטע את המילה שלווה?',
    ans: 'רְגוּעָה',
    wrong: ['אֲדִישָׁה', 'מְעַיֶּפֶת', 'חֲשׁוּכָה'],
    diff: 'medium',
    hint: 'אווירה שלווה היא אווירה רגועה, שקטה ונעימה שמסייעת להירדם!'
  },
  {
    q: 'כְּדֵי לְהֵרָדֵם בְּקַלּוּת וְלִישֹׁן הֵיטֵב בַּלַּיְלָה, כְּדַאי לִילָדִים...',
    tts: 'כדי להירדם בקלות ולישון היטב בלילה, מה כדאי לעשות?',
    ans: 'לְהִשְׁתַּתֵּף בִּפְעִילוּת סְפּוֹרְטִיבִית (כְּמוֹ כַּדּוּרֶגֶל אוֹ רְכִיבָה) בְּמֶשֶׁךְ הַיּוֹם',
    wrong: [
      'לֶאֱכֹל שׁוֹקוֹלָד וְלִשְׁתּוֹת קוֹלָה לִפְנֵי הַשֵּׁנָה',
      'לִצְפּוֹת בְּסֶרֶט מַפְחִיד וּמְלַחֵץ בַּטֵּלֵוִיזְיָה',
      'לָלֶכֶת לִישֹׁן בְּכָל יוֹם בְּשָׁעָה אַחֶרֶת לְגַמְרֵי'
    ],
    diff: 'medium',
    hint: 'הקטע מסביר: פעילות ספורטיבית במשך היום מסייעת להירדמות מהירה, בעוד שוקולד וקולה מעוררים ומפריעים!'
  },
  {
    q: 'מַדּוּעַ דּוֹלְפִינִים וּלִוְיְתָנִים חַיָּבִים לַעֲלוֹת כָּל כַּמָּה דַּקּוֹת לִפְנֵי הַמַּיִם בָּאוֹקְיָנוֹס?',
    tts: 'מדוע דולפינים ולוויתנים חייבים לעלות כל כמה דקות לפני המים?',
    ans: 'מִשּׁוּם שֶׁהֵם יוֹנְקִים הַנּוֹשְׁמִים אֲוִיר בָּרֵאוֹת, וְאֵין לָהֶם זִימִים כְּמוֹ לְדָגִים',
    wrong: [
      'כְּדֵי לִרְאוֹת אֶת כּוֹכְבֵי הַשָּׁמַיִם בַּלַּיְלָה',
      'כִּי הַמַּיִם בָּאוֹקְיָנוֹס מְלוּחִים מִדַּי עֲבוּרָם',
      'כְּדֵי לְהִתְחַמֵּם מִקַּרְנֵי הַשֶּׁמֶשׁ בִּלְבַד'
    ],
    diff: 'hard',
    hint: '💡 עובדה מדעית מרתקת במבחני מחוננים: דולפינים ולווייתנים הם יונקים ימיים בעלי ריאות, וחייבים לנשום חמצן מהאוויר דרך פתח נשימה בקודקודם!'
  },
  {
    q: 'בַּיָּרֵחַ אֵין אֲטְמוֹסְפֵרָה, אֵין רוּחַ וְאֵין מַיִם. מָה קָרָה לְעִקְבוֹת רַגְלֵי הָאַסְטְרוֹנָאוּטִים שֶׁנָּחֲתוּ עָלָיו?',
    tts: 'בירח אין אטמוספרה, אין רוח ואין מים. מה קרה לעקבות רגלי האסטרונאוטים?',
    ans: 'הָעִקְבוֹת נִשְׁאֲרוּ שְׁלֵמוֹת וּמֻדְפָּסוֹת בָּאֲדָמָה בְּדִיּוּק כְּמוֹ שֶׁהָיוּ',
    wrong: [
      'הֵן נִמְחֲקוּ עַל יְדֵי גֶּשֶׁם חָזָק וְסוּפוֹת',
      'רוּחַ הַמִּדְבָּר כִּסְּתָה אוֹתָן מִיָּד בְּחוֹל',
      'חַיּוֹת הַיָּרֵחַ דָּרְכוּ עֲלֵיהֶן וְהֶעֱלִימוּ אוֹתָן'
    ],
    diff: 'hard',
    hint: '💡 הסקה לוגית מדעית: מכיוון שאין בירח רוח, גשם או נחלים, אין שום דבר שיזיז את גרגירי האבק — לכן העקבות נשמרות לנצח!'
  }
];

function genGiftedPictureRiddles(diff = 'medium') {
  const pool = GIFTED_PICTURE_RIDDLES_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_PICTURE_RIDDLES_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_PICTURE_RIDDLES_BANK).length - 1)];
  return {
    uniqueKey: `gifted_riddle_${item.target}_${item.ans}`,
    isMulti: false,
    instruction: `🧩 מִבְחַן מְחֻנָּנִים: אֵיזֶה מִסְפָּר מַתְאִים לַסֵּמֶל <strong>${item.target}</strong>?`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="background:linear-gradient(135deg,#eff6ff,#f8fafc);border:3px solid #3b82f6;border-radius:18px;padding:14px;text-align:center;">
        <div style="font-size:1.85rem;font-weight:900;color:#1e3a8a;line-height:1.6;margin-bottom:6px;">${item.stim}</div>
        <div style="font-size:1.2rem;font-weight:900;color:#2563eb;">מַהוּ הָעֵרֶךְ שֶׁל <strong>${item.target}</strong>?</div>
      </div>
    `,
    rtlStimulus: false,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedVerbalAnalogies(diff = 'medium') {
  const pool = GIFTED_VERBAL_ANALOGIES_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_VERBAL_ANALOGIES_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_VERBAL_ANALOGIES_BANK).length - 1)];
  return {
    uniqueKey: `gifted_analog_${item.pair1}`,
    isMulti: false,
    instruction: `🔄 מִבְחַן מְחֻנָּנִים • יַחֲסֵי מִלִּים (שָׁלָב ב׳): מִצְאוּ אֶת הַקֶּשֶׁר הַדּוֹמֶה:`,
    ttsText: `עילי, מצא את הזוג בעל הקשר הדומה ביותר לקשר בין: ${item.pair1}`,
    stimulusHtml: `
      <div style="background:linear-gradient(135deg,#fefce8,#fef9c3);border:3px solid #eab308;border-radius:18px;padding:14px;text-align:center;">
        <div style="font-size:1.95rem;font-weight:900;color:#854d0e;margin-bottom:6px;">${item.pair1}</div>
        <div style="font-size:1.05rem;font-weight:800;color:#713f12;">אֵיזֶה זוּג מִלִּים מְקַיֵּם אֶת אוֹתוֹ הַקֶּשֶׁר?</div>
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: `💡 הקשר בין המילים: ${item.rel}. ${item.hint}`
  };
}

function genGiftedSentenceCompletion(diff = 'medium') {
  const pool = GIFTED_SENTENCE_COMPLETION_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_SENTENCE_COMPLETION_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_SENTENCE_COMPLETION_BANK).length - 1)];
  return {
    uniqueKey: `gifted_sent_${item.ans}`,
    isMulti: false,
    instruction: `✏️ הַשְׁלָמַת מִשְׁפָּטִים בְּהֶקְשֵׁר לוֹגִי (שָׁלָב ב׳):`,
    ttsText: `השלימו את המשפט בצורה הטובה ביותר: ${item.q.replace(/<[^>]*>/g, '')}`,
    stimulusHtml: `
      <div style="background:#f8fafc;border:2px solid #64748b;border-radius:16px;padding:14px;text-align:right;direction:rtl;line-height:1.65;font-size:1.25rem;font-weight:800;color:#0f172a;">
        ${item.q}
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedWordProblems(diff = 'medium') {
  const pool = GIFTED_WORD_PROBLEMS_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_WORD_PROBLEMS_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_WORD_PROBLEMS_BANK).length - 1)];
  return {
    uniqueKey: `gifted_prob_${item.ans}`,
    isMulti: false,
    instruction: `🧮 בְּעָיָה מִלּוּלִית לִמְחֻנָּנִים (שָׁלָב א׳ + ב׳):`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="background:#f0fdf4;border:2px solid #22c55e;border-radius:16px;padding:14px;text-align:right;direction:rtl;line-height:1.65;font-size:1.25rem;font-weight:800;color:#14532d;">
        ${item.q}
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedNumbersShapes(diff = 'medium') {
  const pool = GIFTED_NUMBERS_SHAPES_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_NUMBERS_SHAPES_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_NUMBERS_SHAPES_BANK).length - 1)];
  return {
    uniqueKey: `gifted_numshapes_${item.ans}`,
    isMulti: false,
    instruction: `🔢 מִסְפָּרִים בְּצוּרוֹת וּפִירָמִידוֹת (שָׁלָב ב׳):`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="text-align:center;padding:10px;">
        <div style="font-size:1.15rem;font-weight:900;color:#1e3a8a;margin-bottom:8px;">${item.title}</div>
        <div>${item.visual}</div>
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedShapesMatrix(diff = 'medium') {
  const pool = GIFTED_SHAPES_MATRIX_BANK.filter(x => diff === 'easy' ? x.diff === 'easy' : diff === 'hard' ? x.diff === 'hard' : true);
  const item = (pool.length > 0 ? pool : GIFTED_SHAPES_MATRIX_BANK)[randInt(0, (pool.length > 0 ? pool : GIFTED_SHAPES_MATRIX_BANK).length - 1)];
  return {
    uniqueKey: `gifted_matrix_${item.ans}`,
    isMulti: false,
    instruction: `📐 חֲשִׁיבָה צוּרָנִית, מַטְרִיצוֹת וְהַשְׁלָמַת שָׁטִיחַ (שָׁלָב ב׳):`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="text-align:center;padding:10px;">
        <div style="font-size:1.15rem;font-weight:900;color:#6b21a8;margin-bottom:8px;">${item.title}</div>
        <div>${item.visual}</div>
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedReadingComp(diff = 'medium') {
  const item = GIFTED_READING_COMP_BANK[randInt(0, GIFTED_READING_COMP_BANK.length - 1)];
  return {
    uniqueKey: `gifted_read_${item.ans}`,
    isMulti: false,
    instruction: `📖 הֲבָנַת הַנִּקְרָא מְחֻנָּנִים (שָׁלָב א׳ - מִבְחַן שֵׁנָה וּבְרִיאוּת):`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="background:#fffbeb;border:2px solid #f59e0b;border-radius:16px;padding:14px;text-align:right;direction:rtl;line-height:1.6;font-size:1.25rem;font-weight:800;color:#78350f;">
        ${item.q}
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genGiftedStageA(diff = 'medium') {
  // Comprehensive Stage A mix: word problems, inequalities, missing ops, picture riddles, reading
  const pick = randInt(1, 4);
  if (pick === 1) return genGiftedPictureRiddles(diff);
  if (pick === 2) return genGiftedWordProblems(diff);
  if (pick === 3) return genInequalities(diff);
  return genGiftedReadingComp(diff);
}

function genGiftedStageB(diff = 'medium') {
  // Comprehensive Stage B mix: verbal analogies, sentence completion, shapes matrix, numbers in shapes
  const pick = randInt(1, 4);
  if (pick === 1) return genGiftedVerbalAnalogies(diff);
  if (pick === 2) return genGiftedSentenceCompletion(diff);
  if (pick === 3) return genGiftedShapesMatrix(diff);
  return genGiftedNumbersShapes(diff);
}

const LIA_SCIENCE_BANK = [
  {
    q: 'מָה מוֹפִיעַ בַּשָּׁמַיִם כְּשֶׁיֵּשׁ שֶׁמֶשׁ ☀️ וְגֶשֶׁם 🌧️ בְּיַחַד?',
    tts: 'ליה מתוקה, כשיש שמש וגשם בשמיים ביחד, מופיעה קשת בענן! לחצי על הקשת בענן!',
    stim: '☀️ + 🌧️ = 🌈',
    ans: '🌈 קֶשֶׁת בֶּעָנָן',
    wrong: ['🌙 יָרֵחַ בַּלַּיְלָה', '🛋️ סַפָּה בַּחֶדֶר'],
    hint: 'שמש וגשם יחד יוצרים קשת בענן צבעונית!'
  },
  {
    q: 'מָה מְקַבְּלִים כְּשֶׁמְּעַרְבְּבִים צֶבַע אָדֹם ❤️ עִם לָבָן 🤍?',
    tts: 'במעבדת הצבעים של ליה: כשמערבבים אדום עם לבן מקבלים צבע ורוד! לחצי על ורוד!',
    stim: '❤️ + 🤍 = 🩷',
    ans: '🩷 וָרֹד (Pink)',
    wrong: ['🖤 שָׁחֹר (Black)', '💚 יָרֹק (Green)'],
    hint: 'אדום עם לבן נותן את הצבע הוורוד האהוב של הנסיכות!'
  },
  {
    q: 'מָה מְקַבְּלִים כְּשֶׁמְּעַרְבְּבִים כָּחֹל 💙 עִם צָהֹב 💛?',
    tts: 'כשמערבבים כחול של סטיץ׳ עם צהוב של השמש מקבלים צבע ירוק! לחצי על ירוק!',
    stim: '💙 + 💛 = 💚',
    ans: '💚 יָרֹק (Green)',
    wrong: ['❤️ אָדֹם (Red)', '🤍 לָבָן (White)'],
    hint: 'כחול וצהוב יחד יוצרים את צבע הדשא והעלים — ירוק!'
  },
  {
    q: 'מָה מְקַבְּלִים כְּשֶׁמְּעַרְבְּבִים אָדֹם ❤️ עִם כָּחֹל 💙?',
    tts: 'כשמערבבים אדום עם כחול מקבלים צבע סגול! לחצי על סגול!',
    stim: '❤️ + 💙 = 💜',
    ans: '💜 סָגֹל (Purple)',
    wrong: ['💛 צָהֹב (Yellow)', '🤍 לָבָן (White)'],
    hint: 'אדום וכחול יוצרים צבע קסום של חד-קרן — סגול!'
  },
  {
    q: 'לְמָה הוֹפֵךְ הַזַּחַל הַקָּטָן 🐛 בַּטֶּבַע?',
    tts: 'הזחל הקטן נכנס לגולם והופך לפרפר צבעוני! לחצי על הפרפר!',
    stim: '🐛 ➔ 🐚 ➔ 🦋',
    ans: '🦋 פַּרְפַּר צִבְעוֹנִי',
    wrong: ['🐶 כֶּלֶב חָמוּד', '🚗 מְכוֹנִית'],
    hint: 'הזחל מצמיח כנפיים יפות והופך לפרפר!'
  },
  {
    q: 'מָה צָרִיךְ הַפֶּרַח 🌸 כְּדֵי לִצְמֹחַ וְלִגְדֹּל?',
    tts: 'כדי שהפרח יצמח בגינה הוא צריך אור שמש ומים! לחצי על שמש ומים!',
    stim: '🌱 + ☀️ + 💧 = 🌸',
    ans: '☀️💧 שֶׁמֶשׁ וּמַיִם',
    wrong: ['🍬 סֻכָּרִיּוֹת', '👟 נַעֲלַיִם'],
    hint: 'משקים את העציץ במים 💧 ושמים אותו באור השמש ☀️!'
  },
  {
    q: 'מִי צָף עַל פְּנֵי הַמַּיִם 🌊 בָּאַמְבַּטְיָה?',
    tts: 'מי צף על פני המים באמבטיה ולא שוקע? ברווז גומי צהוב! לחצי על הברווז!',
    stim: '🛁🌊 🦆',
    ans: '🦆 בַּרְוָז גּוּמִי',
    wrong: ['🪨 אֶבֶן כְּבֵדָה', '🔑 מַפְתֵּחַ מִבַּרְזֶל'],
    hint: 'ברווז גומי קל ומלא אוויר ולכן הוא צף על המים!'
  },
  {
    q: 'מָה מְכִינָה הַדְּבוֹרָה 🐝 מֵהַפְּרָחִים 🌸?',
    tts: 'הדבורה החרוצה אוספת צוף מהפרחים ומכינה דבש מתוק! לחצי על הדבש!',
    stim: '🐝 + 🌸 = 🍯',
    ans: '🍯 דְּבַשׁ מָתוֹק',
    wrong: ['🧀 גְּבִינָה', '👟 נַעֲלַיִם'],
    hint: 'הדבורים מכינות דבש מתוק בכוורת!'
  },
  {
    q: 'מָה קוֹרֶה לְקֻבִּיַּת קֶרַח 🧊 בַּשֶּׁמֶשׁ הַחַמָּה ☀️?',
    tts: 'כששמים קוביית קרח בשמש החמה, היא נמסה והופכת למים! לחצי על טיפת המים!',
    stim: '🧊 + ☀️ = 💧',
    ans: '💧 נְמַסָּה לְמַיִם',
    wrong: ['🪨 הוֹפֶכֶת לְאֶבֶן', '🎈 עָפָה כְּמוֹ בָּלוֹן'],
    hint: 'כשקרח מתחמם בשמש הוא נמס למים!'
  },
  {
    q: 'אֵיזֶה אֵיבָר פּוֹעֵם בֶּחָזֶה שֶׁלָּנוּ ("בּוּם-בּוּם")? ❤️',
    tts: 'איזה איבר פועם בחזה שלנו בום-בום? הלב שלנו! לחצי על הלב!',
    stim: '💓 "בּוּם - בּוּם" ❤️',
    ans: '❤️ הַלֵּב שֶׁלָּנוּ',
    wrong: ['👂 הָאֹזֶן שֶׁלָּנוּ', '🦶 הָרֶגֶל שֶׁלָּנוּ'],
    hint: 'אפשר להרגיש את הלב פועם כשמניחים יד על החזה!'
  }
];

function genScienceHowItWorks(diff = 'medium') {
  const pool = SCIENCE_DISCOVERY_CARDS.filter(c => c.cat === 'physics' || c.cat === 'body' || c.cat === 'tech');
  const card = (pool.length > 0 ? pool : SCIENCE_DISCOVERY_CARDS)[randInt(0, (pool.length > 0 ? pool : SCIENCE_DISCOVERY_CARDS).length - 1)];

  const stepsHtml = card.steps.map(s => `<div style="background:rgba(14,165,233,0.12);border:1px solid #38bdf8;border-radius:8px;padding:4px 8px;font-size:0.84rem;font-weight:700;color:#0369a1;margin-bottom:4px;">${s}</div>`).join('');

  return {
    uniqueKey: 'sci_how_' + card.id,
    isMulti: false,
    instruction: `🔬 מַעְבֶּדֶת הַמַּדָּע (${card.title}):`,
    ttsText: `שאלה במדע: ${card.quizQ}`,
    stimulusHtml: `
      <div style="text-align:center;margin-bottom:8px;">
        <div style="font-size:2.4rem;">${card.icon}</div>
        <div style="font-size:1.15rem;font-weight:900;color:#0f172a;margin:4px 0;">${card.quizQ}</div>
      </div>
      <div style="text-align:right;direction:rtl;">${stepsHtml}</div>
    `,
    rtlStimulus: true,
    options: shuffle([card.quizAns, ...card.quizWrong]),
    correctAnswers: [card.quizAns],
    hint: `${card.quizHint} (${card.funFact})`
  };
}

function genScienceNature(diff = 'medium') {
  const pool = SCIENCE_DISCOVERY_CARDS.filter(c => c.cat === 'space' || c.cat === 'nature');
  const card = (pool.length > 0 ? pool : SCIENCE_DISCOVERY_CARDS)[randInt(0, (pool.length > 0 ? pool : SCIENCE_DISCOVERY_CARDS).length - 1)];

  const stepsHtml = card.steps.map(s => `<div style="background:rgba(16,185,129,0.12);border:1px solid #34d399;border-radius:8px;padding:4px 8px;font-size:0.84rem;font-weight:700;color:#065f46;margin-bottom:4px;">${s}</div>`).join('');

  return {
    uniqueKey: 'sci_nat_' + card.id,
    isMulti: false,
    instruction: `🚀 מַדָּע הַטֶּבַע וְהֶחָלָל (${card.title}):`,
    ttsText: `שאלה במדע הטבע והחלל: ${card.quizQ}`,
    stimulusHtml: `
      <div style="text-align:center;margin-bottom:8px;">
        <div style="font-size:2.4rem;">${card.icon}</div>
        <div style="font-size:1.15rem;font-weight:900;color:#0f172a;margin:4px 0;">${card.quizQ}</div>
      </div>
      <div style="text-align:right;direction:rtl;">${stepsHtml}</div>
    `,
    rtlStimulus: true,
    options: shuffle([card.quizAns, ...card.quizWrong]),
    correctAnswers: [card.quizAns],
    hint: `${card.quizHint} (${card.funFact})`
  };
}

function genLiaScienceWonder(diff = 'medium') {
  const item = LIA_SCIENCE_BANK[randInt(0, LIA_SCIENCE_BANK.length - 1)];
  return {
    uniqueKey: 'lia_sci_' + item.stim,
    isLia: true,
    isMulti: false,
    autoSpeak: true,
    instruction: `🔬🌈 מַעְבֶּדֶת הַמַּדָּע שֶׁל לִיָּה וּסְטִיץ׳: ${item.q}`,
    ttsText: item.tts,
    stimulusHtml: `
      <div style="text-align:center;padding:8px;">
        <div style="font-size:2.6rem;font-weight:900;margin-bottom:6px;">${item.stim}</div>
        <div style="font-size:1.15rem;font-weight:800;color:#be185d;">${item.q}</div>
      </div>
    `,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function generateQuestionForTopic(topicId, diff = 'medium', customQuestions = []) {
  if (topicId === 'daily_mix') {
    // Focused primarily on Math & Hebrew as requested!
    const pool = [
      'math_inequalities', 'math_add_sub', 'math_missing', 'math_place_value',
      'math_mult_intro', 'math_word_problems', 'hebrew_opposites', 'hebrew_grammar', 'hebrew_reading'
    ];
    topicId = pool[randInt(0, pool.length - 1)];
  }

  if (topicId === 'lia_daily_mix') {
    const liaPool = [
      'lia_english_mix', 'lia_english_colors_glam', 'lia_english_stitch_animals', 'lia_english_numbers_food',
      'lia_english_magic_words', 'lia_english_home_toys', 'lia_heb_letters', 'lia_heb_rhymes', 'lia_math_counting', 'lia_logic_patterns'
    ];
    topicId = liaPool[randInt(0, liaPool.length - 1)];
  }

  if (topicId === 'custom_parents') {
    if (customQuestions && customQuestions.length > 0) {
      const cq = customQuestions[randInt(0, customQuestions.length - 1)];
      let opts = [];
      if (cq.wrong && cq.wrong.length > 0) {
        opts = shuffle([cq.correct, ...cq.wrong]);
      } else if (!isNaN(Number(cq.correct))) {
        opts = makeNumericOptions(Number(cq.correct), 4, 0);
      } else {
        opts = shuffle([cq.correct, 'תשובה א׳', 'תשובה ב׳', 'תשובה ג׳']);
      }
      return {
        topicId: 'custom_parents',
        isMulti: false,
        instruction: cq.instruction || 'בַּחֲרוּ אֶת הַתְּשׁוּבָה הַנְּכוֹנָה:',
        ttsText: `${cq.instruction}. ${cq.prompt}`,
        stimulusHtml: `<span>${cq.prompt}</span>`,
        rtlStimulus: true,
        options: opts,
        correctAnswers: [String(cq.correct)],
        hint: 'זוהי שאלה מיוחדת שאבא ואמא הכינו לך! קרא לאט ובזהירות.'
      };
    }
    topicId = 'math_inequalities';
  }

  let q;
  switch (topicId) {
    case 'math_inequalities': q = genInequalities(diff); break;
    case 'math_add_sub':      q = genAddSub(diff); break;
    case 'math_missing':      q = genMissingNumber(diff); break;
    case 'math_place_value':  q = genPlaceValue(diff); break;
    case 'math_mult_intro':   q = genMultIntro(diff); break;
    case 'math_word_problems':q = genWordProblems(diff); break;
    case 'hebrew_opposites':  q = genHebrewOpposites(); break;
    case 'hebrew_grammar':    q = genHebrewGrammar(); break;
    case 'hebrew_reading':    q = genHebrewReading(); break;
    case 'english_fc27':             q = genEnglishFC27(diff); break;
    case 'english_fc27_commentator': q = genEnglishFC27Commentator(diff); break;
    case 'english_abc':              q = genEnglishABC(); break;
    case 'english_words':     q = genEnglishWords(); break;
    case 'english_soccer':    q = genEnglishSoccer(); break;
    case 'english_starter':   q = genEnglishStarter(); break;
    case 'science_how_it_works':       q = genScienceHowItWorks(diff); break;
    case 'science_nature_experiments': q = genScienceNature(diff); break;
    case 'logic_series':      q = genLogicSeries(diff); break;
    // Gifted Academy Topics (Noam & Karni 2025):
    case 'gifted_stage_a':             q = genGiftedStageA(diff); break;
    case 'gifted_stage_b':             q = genGiftedStageB(diff); break;
    case 'gifted_picture_riddles':     q = genGiftedPictureRiddles(diff); break;
    case 'gifted_verbal_analogies':    q = genGiftedVerbalAnalogies(diff); break;
    case 'gifted_sentence_completion': q = genGiftedSentenceCompletion(diff); break;
    case 'gifted_word_problems':       q = genGiftedWordProblems(diff); break;
    case 'gifted_numbers_shapes':      q = genGiftedNumbersShapes(diff); break;
    case 'gifted_shapes_matrix':       q = genGiftedShapesMatrix(diff); break;
    case 'gifted_reading_comp':        q = genGiftedReadingComp(diff); break;
    // Lia's Kindergarten & English Topics:
    case 'lia_english_mix':            q = buildLiaEnglishQuestion(LIA_ALL_ENGLISH_WORDS, '🦄 מִיקְס אַנְגְּלִית עִם סְטִיץ׳ וְחַד-קֶרֶן', diff); break;
    case 'lia_english_colors_glam':    q = buildLiaEnglishQuestion(LIA_GLAM_WORDS, '💄 צְבָעִים, אִיפּוּר וּנְסִיכוֹת בְּאַנְגְּלִית', diff); break;
    case 'lia_english_stitch_animals': q = buildLiaEnglishQuestion(LIA_STITCH_ANIMALS, '💙 סְטִיץ׳, חַד-קֶרֶן וְחַיּוֹת בְּאַנְגְּלִית', diff); break;
    case 'lia_english_numbers_food':   q = buildLiaEnglishQuestion(LIA_NUMBERS_FOOD, '🍦 מִסְפָּרִים, פֵּירוֹת וּפִינוּקִים בְּאַנְגְּלִית', diff); break;
    case 'lia_english_magic_words':    q = buildLiaEnglishQuestion(LIA_MAGIC_WORDS, '🌈 מִילּוֹת קֶסֶם וּמִשְׁפָּחָה בְּאַנְגְּלִית', diff); break;
    case 'lia_english_home_toys':      q = buildLiaEnglishQuestion(LIA_TOYS_BODY_HOME, '🧸 צַעֲצוּעִים, הַגַּן וְהַגּוּף בְּאַנְגְּלִית', diff); break;
    case 'lia_heb_letters':            q = genLiaHebLetters(); break;
    case 'lia_heb_rhymes':             q = genLiaHebRhymes(); break;
    case 'lia_math_counting':          q = genLiaMathCounting(diff); break;
    case 'lia_logic_patterns':         q = genLiaLogicPatterns(); break;
    case 'lia_science_wonder':         q = genLiaScienceWonder(diff); break;
    default:                  q = genAddSub(diff); break;
  }
  q.topicId = topicId;
  q.levelStage = diff;
  return q;
}
