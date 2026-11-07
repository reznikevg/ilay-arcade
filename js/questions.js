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

// ==================== LIA'S KINDERGARTEN & ENGLISH CURRICULUM (AGE 5 - גן חובה) ====================
const LIA_TOPICS = [
  // ===== LIA ENGLISH (6 TOPICS - 150+ WORDS!) =====
  {
    id: 'lia_english_mix',
    kid: 'lia',
    cat: 'english',
    tag: '150+ מילים! 🌟',
    icon: '🦄',
    title: 'מיקס אנגלית ענק עם סטיץ׳ וחד-קרן',
    desc: 'מאגר ענק של מעל 150 מילים באנגלית: איפור, צבעים, חיות, אוכל, צעצועים, משפחה ומילות קסם!'
  },
  {
    id: 'lia_english_colors_glam',
    kid: 'lia',
    cat: 'english',
    tag: 'איפור ונסיכות 💄',
    icon: '💄',
    title: 'צבעים, איפור, בגדים ונסיכות באנגלית',
    desc: 'Pink, Purple, Gold, Lipstick, Crown, Dress, Shoes, Necklace, Ring, Perfume, Mirror ועוד 30 מילים!'
  },
  {
    id: 'lia_english_stitch_animals',
    kid: 'lia',
    cat: 'english',
    tag: 'סטיץ׳ וחיות 💙',
    icon: '🌺',
    title: 'סטיץ׳, חד-קרן, חיות וטבע באנגלית',
    desc: 'Unicorn, Dog, Cat, Butterfly, Bunny, Lion, Elephant, Dolphin, Koala, Monkey, Sun, Moon, Sea ועוד!'
  },
  {
    id: 'lia_english_numbers_food',
    kid: 'lia',
    cat: 'english',
    tag: 'מספרים וגלידות 🍦',
    icon: '🍦',
    title: 'מספרים (1-12), גלידות, פירות ואוכל באנגלית',
    desc: 'סופרים 1 עד 12 ולומדים 30 מאכלים: Ice Cream, Cake, Strawberry, Watermelon, Pizza, Chocolate!'
  },
  {
    id: 'lia_english_magic_words',
    kid: 'lia',
    cat: 'english',
    tag: 'מילות קסם ומשפחה 👋',
    icon: '🌈',
    title: 'מילות קסם, רגשות ומשפחה באנגלית',
    desc: 'Hello, Good Morning, Thank You, Please, Mommy, Daddy, Brother, Sister, Teacher, Happy, Excited!'
  },
  {
    id: 'lia_english_home_toys',
    kid: 'lia',
    cat: 'english',
    tag: 'צעצועים והגוף 🧸',
    icon: '🧸',
    title: 'צעצועים, הגן, הבית והגוף באנגלית',
    desc: 'Doll, Teddy Bear, Balloon, Dance, Sing, Eyes, Hands, Smile, Bed, Car, Airplane ועוד!'
  },

  // ===== LIA HEBREW & KINDERGARTEN READINESS (2 TOPICS) =====
  {
    id: 'lia_heb_letters',
    kid: 'lia',
    cat: 'hebrew',
    tag: 'מוכנות לגן חובה 🔤',
    icon: '🔤',
    title: 'אותיות וצליל פותח עם ליה וסטיץ׳',
    desc: 'באיזו אות מתחילה המילה ליה, סטיץ׳, חד-קרן, איפור וגננת? זיהוי אותיות וצלילים!'
  },
  {
    id: 'lia_heb_rhymes',
    kid: 'lia',
    cat: 'hebrew',
    tag: 'חרוזים והפכים 🎵',
    icon: '🎵',
    title: 'חרוזים מתוקים והפכים בתמונות',
    desc: 'מה מתחרז עם כתר? מה ההפך מגדול או שמח? משחקי שפה מהנים לגן חובה!'
  },

  // ===== LIA MATH & LOGIC (2 TOPICS) =====
  {
    id: 'lia_math_counting',
    kid: 'lia',
    cat: 'math',
    tag: 'חשבון לגן חובה 🦄',
    icon: '👑',
    title: 'ספירה, כמויות וחיבור בתמונות (1-10)',
    desc: 'סופרים חדי-קרן, שפתונים, פרחים וכתרים עד 10 ופותרים חידות כמות מצוירות!'
  },
  {
    id: 'lia_logic_patterns',
    kid: 'lia',
    cat: 'math',
    tag: 'חשיבה וצורות ✨',
    icon: '✨',
    title: 'סדרות קסם, צורות ויוצא דופן',
    desc: 'מי בא הבא בתור בסדרה של סטיץ׳ וחד-קרן? זיהוי צורות וצבעים לגן חובה!'
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
  { word: 'שָׂמֵחַ', ans: 'עַלִּיז', wrong: ['עָצוּב', 'כּוֹעֵס', 'עָיֵף'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'נָבוֹן', ans: 'חָכָם', wrong: ['גִּבּוֹר', 'גָּבוֹהַּ', 'שָׁקֵט'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'גִּבּוֹר', ans: 'אַמִּיץ', wrong: ['פַּחְדָן', 'חַלָּשׁ', 'אִטִּי'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' },
  { word: 'יָפֶה', ans: 'נָאֶה', wrong: ['מְלֻכְלָךְ', 'יָשָׁן', 'קָטָן'], type: 'מִלָּה נִרְדֶּפֶת (דּוֹמָה)' }
];

function genHebrewOpposites() {
  const item = HEBREW_OPPOSITES_BANK[randInt(0, HEBREW_OPPOSITES_BANK.length - 1)];
  return {
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
    q: 'קִרְאוּ אֶת הַקֶּטַע: <br>"עִילַי לָבַשׁ אֶת הַחֻלְצָה הַצְּהֻבָּה-שְׁחוֹרָה שֶׁל בֵּיתָ"ר יְרוּשָׁלַיִם וְיָצָא עִם אַבָּא לְאִצְטַדְיוֹן טֶדִי. בַּדַּקָּה הַ-90 עִילַי קָפַץ מִשִּׂמְחָה כִּי הַקְּבוּצָה הִבְקִיעָה שַׁעַר נִצָּחוֹן!"<br><strong>מַדּוּעַ קָפַץ עִילַי מִשִּׂמְחָה?</strong>',
    tts: 'עילי לבש את החולצה הצהובה שחורה של ביתר ירושלים ויצא עם אבא לאצטדיון טדי. בדקה ה-90 עילי קפץ משמחה כי הקבוצה הבקיעה שער ניצחון! מדוע קפץ עילי משמחה?',
    ans: 'כִּי הַקְּבוּצָה הִבְקִיעָה שַׁעַר נִצָּחוֹן',
    wrong: ['כִּי יָרַד גֶּשֶׁם בַּמִּגְרָשׁ', 'כִּי הַמִּשְׂחָק בֻּטַּל', 'כִּי הוּא שָׁכַח אֶת הַצָּעִיף'],
    hint: 'התשובה מופיעה במשפט האחרון בסיפור!'
  },
  {
    q: 'קִרְאוּ אֶת הַקֶּטַע: <br>"לְרֵיאָל מַדְרִיד יֵשׁ מַדִּים לְבָנִים וְסֵמֶל עִם כֶּתֶר מוּזָהָב. הָאִצְטַדְיוֹן הַבֵּיתִי שֶׁלָּהֶם נִמְצָא בָּעִיר מַדְרִיד שֶׁבִּסְפָרַד."<br><strong>אֵיפֹה נִמְצָא הָאִצְטַדְיוֹן שֶׁל רֵיאָל מַדְרִיד?</strong>',
    tts: 'לריאל מדריד יש מדים לבנים וסמל עם כתר מוזהב. האצטדיון הביתי שלהם נמצא בעיר מדריד שבספרד. איפה נמצא האצטדיון של ריאל מדריד?',
    ans: 'בָּעִיר מַדְרִיד שֶׁבִּסְפָרַד',
    wrong: ['בְּלוֹנְדּוֹן שֶׁבְּאַנְגְּלִיָּה', 'בְּרוֹמָא שֶׁבְּאִיטַלְיָה', 'בְּחֵיפָה'],
    hint: 'חפשו את שם המדינה בסיפור.'
  },
  {
    q: 'אֵיךְ כּוֹתְבִים <strong>לְלֹא שְׁגִיאוֹת כְּתִיב</strong> אֶת עִיר הַבִּירָה שֶׁלָּנוּ?',
    tts: 'איך כותבים ללא שגיאות כתיב את עיר הבירה שלנו, ירושלים?',
    ans: 'יְרוּשָׁלַיִם',
    wrong: ['יְרוֹשָׁלַעִים', 'יְרֻשָׁלַתִים', 'יְרוּשָׁלָם'],
    hint: 'בסוף המילה יש י׳ ו-ם סופית!'
  },
  {
    q: 'בַּחֲרוּ אֶת הַמִּלָּה שֶׁמַּשְׁלִימָה אֶת הַמִּשְׁפָּט בְּצוּרָה הֶגְיוֹנִית:<br>"לִפְנֵי הַמִּשְׂחָק הַשַּׂחְקָנִים עוֹשִׂים חִמּוּם ______ שֶׁלֹּא יִפָּצְעוּ."',
    tts: 'בחרו את המילה שמשלימה את המשפט: לפני המשחק השחקנים עושים חימום... שלא ייפצעו.',
    ans: 'כְּדֵי',
    wrong: ['אֲבָל', 'לַמְרוֹת', 'אִלּוּ'],
    hint: 'מהי המילה שמסבירה את המטרה של החימום?'
  }
];

function genHebrewReading() {
  const item = HEBREW_READING_BANK[randInt(0, HEBREW_READING_BANK.length - 1)];
  return {
    isMulti: false,
    instruction: 'הֲבָנַת הַנִּקְרָא וּכְתִיב נָכוֹן:',
    ttsText: item.tts,
    stimulusHtml: `<span>${item.q}</span>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

// ==================== COMPREHENSIVE ENGLISH ACADEMY (GRADE 2) ====================

const ENGLISH_ABC_MATCH = [
  { cap: 'A', low: 'a', wrong: ['e', 'o', 'd'] },
  { cap: 'B', low: 'b', wrong: ['d', 'p', 'q'] },
  { cap: 'C', low: 'c', wrong: ['s', 'o', 'e'] },
  { cap: 'D', low: 'd', wrong: ['b', 'p', 'q'] },
  { cap: 'E', low: 'e', wrong: ['a', 'c', 'o'] },
  { cap: 'F', low: 'f', wrong: ['t', 'j', 'l'] },
  { cap: 'G', low: 'g', wrong: ['q', 'j', 'y'] },
  { cap: 'H', low: 'h', wrong: ['n', 'b', 'k'] },
  { cap: 'M', low: 'm', wrong: ['w', 'n', 'u'] },
  { cap: 'N', low: 'n', wrong: ['m', 'u', 'h'] },
  { cap: 'R', low: 'r', wrong: ['p', 'n', 'v'] },
  { cap: 'S', low: 's', wrong: ['z', 'c', 'e'] },
  { cap: 'T', low: 't', wrong: ['f', 'l', 'i'] },
  { cap: 'Y', low: 'y', wrong: ['v', 'u', 'g'] }
];

const ENGLISH_PHONICS = [
  { word: 'Ball', hebrew: 'כַּדּוּר ⚽', letter: 'B', wrong: ['D', 'P', 'T'] },
  { word: 'Goal', hebrew: 'שַׁעַר 🥅', letter: 'G', wrong: ['C', 'J', 'K'] },
  { word: 'Lion', hebrew: 'אַרְיֵה 🦁', letter: 'L', wrong: ['R', 'M', 'N'] },
  { word: 'Sun', hebrew: 'שֶׁמֶשׁ ☀️', letter: 'S', wrong: ['C', 'Z', 'X'] },
  { word: 'Dog', hebrew: 'כֶּלֶב 🐶', letter: 'D', wrong: ['B', 'P', 'T'] },
  { word: 'Cat', hebrew: 'חָתוּל 🐱', letter: 'C', wrong: ['K', 'S', 'G'] },
  { word: 'King', hebrew: 'מֶלֶךְ 👑', letter: 'K', wrong: ['C', 'G', 'Q'] },
  { word: 'Apple', hebrew: 'תַּפּוּחַ 🍎', letter: 'A', wrong: ['E', 'O', 'I'] },
  { word: 'Fish', hebrew: 'דָּג 🐟', letter: 'F', wrong: ['V', 'P', 'T'] },
  { word: 'Run', hebrew: 'לָרוּץ 🏃', letter: 'R', wrong: ['P', 'B', 'W'] }
];

const ENGLISH_NUMBERS = [
  { num: 1, word: 'One', wrong: ['Two', 'Three', 'Four'] },
  { num: 2, word: 'Two', wrong: ['One', 'Three', 'Five'] },
  { num: 3, word: 'Three', wrong: ['Two', 'Four', 'Ten'] },
  { num: 4, word: 'Four', wrong: ['Five', 'Six', 'One'] },
  { num: 5, word: 'Five', wrong: ['Four', 'Six', 'Seven'] },
  { num: 6, word: 'Six', wrong: ['Seven', 'Five', 'Eight'] },
  { num: 7, word: 'Seven', wrong: ['Six', 'Eight', 'Nine'] },
  { num: 8, word: 'Eight', wrong: ['Seven', 'Nine', 'Ten'] },
  { num: 9, word: 'Nine', wrong: ['Eight', 'Ten', 'Six'] },
  { num: 10, word: 'Ten', wrong: ['Seven', 'Eight', 'Five'] },
  { num: 20, word: 'Twenty', wrong: ['Ten', 'Twelve', 'Two'] }
];

const ENGLISH_COLORS = [
  { color: 'Yellow', heb: 'צָהֹב 💛', note: 'הַצֶּבַע הָאֲהוּב שֶׁל בֵּיתָ"ר יְרוּשָׁלַיִם!', wrong: ['אָדֹם', 'כָּחֹל', 'יָרֹק'] },
  { color: 'White', heb: 'לָבָן 🤍', note: 'הַצֶּבַע הָאַגָּדִי שֶׁל רֵיאָל מַדְרִיד!', wrong: ['שָׁחוֹר', 'סָגֹל', 'כָּתֹם'] },
  { color: 'Black', heb: 'שָׁחוֹר 🖤', note: 'הַצֶּבַע שֶׁל בֵּיתָ"ר יַחַד עִם צָהֹב!', wrong: ['כָּחֹל', 'יָרֹק', 'אָדֹם'] },
  { color: 'Green', heb: 'יָרוֹק 🌱', note: 'הַצֶּבַע שֶׁל דֶּשֶׁא הַמִּגְרָשׁ!', wrong: ['צָהֹב', 'כָּחֹל', 'אָדֹם'] },
  { color: 'Blue', heb: 'כָּחֹל 💙', note: 'צֶבַע הַשָּׁמַיִם וְהַיָּם!', wrong: ['אָדֹם', 'יָרֹק', 'צָהֹב'] },
  { color: 'Red', heb: 'אָדֹם ❤️', note: 'הַצֶּבַע שֶׁל כַּרְטִיס אָדֹם!', wrong: ['כָּחֹל', 'צָהֹב', 'יָרֹק'] },
  { color: 'Orange', heb: 'כָּתֹם 🧡', note: 'הַצֶּבַע שֶׁל תַּפּוּז!', wrong: ['סָגֹל', 'יָרֹק', 'כָּחֹל'] }
];

const ENGLISH_SOCCER_WORDS = [
  { eng: 'Ball', heb: 'כַּדּוּר ⚽', wrong: ['Bag', 'Box', 'Book'] },
  { eng: 'Goal', heb: 'שַׁעַר 🥅', wrong: ['Gold', 'Game', 'Good'] },
  { eng: 'Champion', heb: 'אַלּוּף 🏆', wrong: ['Coach', 'Captain', 'Club'] },
  { eng: 'Team', heb: 'קְבוּצָה 👥', wrong: ['Time', 'Ticket', 'Train'] },
  { eng: 'Stadium', heb: 'אִצְטַדְיוֹן (כְּמוֹ טֶדִי אוֹ הַבֶּרְנַבֵּאוּ!) 🏟️', wrong: ['School', 'Street', 'Station'] },
  { eng: 'Shoes', heb: 'נַעֲלַיִם (נַעֲלֵי כַּדּוּרֶגֶל) 👟', wrong: ['Shirts', 'Socks', 'Shorts'] },
  { eng: 'Win', heb: 'לְנַצֵּחַ! 🥇', wrong: ['Walk', 'Wait', 'Water'] },
  { eng: 'Run', heb: 'לָרוּץ 🏃', wrong: ['Read', 'Rest', 'Ring'] },
  { eng: 'Kick', heb: 'לִבְעֹט בַּכַּדּוּר ⚽', wrong: ['Kiss', 'Keep', 'Know'] },
  { eng: 'Player', heb: 'שַׂחְקָן 🌟', wrong: ['Plane', 'Paper', 'Party'] },
  { eng: 'Fast', heb: 'מָהִיר (כְּמוֹ וִינִיסְיוּס!) ⚡', wrong: ['Fat', 'First', 'Full'] }
];

const ENGLISH_DAILY_WORDS = [
  { eng: 'Hello', heb: 'שָׁלוֹם 👋', wrong: ['Help', 'Home', 'Hand'] },
  { eng: 'Goodbye', heb: 'לְהִתְרָאוֹת! 👋', wrong: ['Good', 'Gold', 'Great'] },
  { eng: 'Thank you', heb: 'תּוֹדָה רַבָּה 🙏', wrong: ['Think', 'That', 'There'] },
  { eng: 'School', heb: 'בֵּית סֵפֶר 🏫', wrong: ['Street', 'Store', 'Star'] },
  { eng: 'Friend', heb: 'חָבֵר 👦', wrong: ['Family', 'Father', 'Food'] },
  { eng: 'Family', heb: 'מִשְׁפָּחָה 👨‍👩‍👦', wrong: ['Friend', 'Father', 'Future'] },
  { eng: 'Water', heb: 'מַיִם 💧', wrong: ['Winter', 'Winner', 'Window'] },
  { eng: 'Pizza', heb: 'פִּיצָה 🍕', wrong: ['Pasta', 'Pear', 'Paper'] },
  { eng: 'Lion', heb: 'אַרְיֵה (הַסֵּמֶל שֶׁל בֵּיתָ"ר!) 🦁', wrong: ['Line', 'Lemon', 'Light'] },
  { eng: 'Dog', heb: 'כֶּלֶב 🐶', wrong: ['Door', 'Duck', 'Doll'] },
  { eng: 'Cat', heb: 'חָתוּל 🐱', wrong: ['Car', 'Cup', 'Cap'] }
];

function genEnglishABC() {
  const isMatch = Math.random() > 0.45;
  if (isMatch) {
    const item = ENGLISH_ABC_MATCH[randInt(0, ENGLISH_ABC_MATCH.length - 1)];
    const isCapToLow = Math.random() > 0.5;
    if (isCapToLow) {
      return {
        isEnglish: true,
        isMulti: false,
        instruction: '🔤 הַתְאָמַת אוֹתִיּוֹת ABC: בַּחֲרוּ אֶת הָאוֹת הַקְּטַנָּה הַמַּתְאִימָה:',
        ttsText: `מהי האות הקטנה של האות ${item.cap}?`,
        englishSpeechWord: item.cap,
        stimulusHtml: `<div style="font-size:2.4rem;font-weight:800;color:#0a84ff;">${item.cap}</div><div style="font-size:1rem;color:#64748b;margin-top:4px;">איזו אות קטנה מתאימה לאות הזו?</div>`,
        rtlStimulus: false,
        options: shuffle([item.low, ...item.wrong]),
        correctAnswers: [item.low],
        hint: `האות ${item.cap} נכתבת בקטן כ-${item.low}!`
      };
    } else {
      return {
        isEnglish: true,
        isMulti: false,
        instruction: '🔤 הַתְאָמַת אוֹתִיּוֹת ABC: בַּחֲרוּ אֶת הָאוֹת הַגְּדוֹלָה הַמַּתְאִימָה:',
        ttsText: `מהי האות הגדולה של האות ${item.low}?`,
        englishSpeechWord: item.low,
        stimulusHtml: `<div style="font-size:2.4rem;font-weight:800;color:#0a84ff;">${item.low}</div><div style="font-size:1rem;color:#64748b;margin-top:4px;">איזו אות גדולה מתאימה לאות הזו?</div>`,
        rtlStimulus: false,
        options: shuffle([item.cap, ...item.wrong.map(w => w.toUpperCase())]),
        correctAnswers: [item.cap],
        hint: `האות הקטנה ${item.low} שייכת לאות הגדולה ${item.cap}!`
      };
    }
  } else {
    // Phonics beginning letter
    const p = ENGLISH_PHONICS[randInt(0, ENGLISH_PHONICS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🎵 צְלִיל פּוֹתֵחַ (Phonics): בְּאֵיזוֹ אוֹת מַתְחִילָה הַמִּלָּה?',
      ttsText: `באיזו אות מתחילה המילה ${p.word}?`,
      englishSpeechWord: p.word,
      stimulusHtml: `<div style="font-size:1.8rem;font-weight:800;color:#059669;">${p.word}</div><div style="font-size:1.05rem;color:#334155;margin-top:6px;">פירוש: <strong>${p.hebrew}</strong></div>`,
      rtlStimulus: false,
      options: shuffle([p.letter, ...p.wrong]),
      correctAnswers: [p.letter],
      hint: `המילה ${p.word} מתחילה באות ${p.letter}!`
    };
  }
}

function genEnglishWords() {
  const mode = randInt(1, 3);
  if (mode === 1) {
    // Numbers
    const numObj = ENGLISH_NUMBERS[randInt(0, ENGLISH_NUMBERS.length - 1)];
    const toEng = Math.random() > 0.5;
    if (toEng) {
      return {
        isEnglish: true,
        isMulti: false,
        instruction: '🔟 מִסְפָּרִים בְּאַנְגְּלִית: אֵיךְ אוֹמְרִים אֶת הַמִּסְפָּר בְּאַנְגְּלִית?',
        ttsText: `איך אומרים את המספר ${numObj.num} באנגלית?`,
        englishSpeechWord: numObj.word,
        stimulusHtml: `<div style="font-size:3rem;font-weight:800;color:#0a84ff;">${numObj.num}</div>`,
        rtlStimulus: false,
        options: shuffle([numObj.word, ...numObj.wrong]),
        correctAnswers: [numObj.word],
        hint: `ספרו באנגלית עד שמגיעים למספר ${numObj.num} (${numObj.word})!`
      };
    } else {
      return {
        isEnglish: true,
        isMulti: false,
        instruction: '🔟 מִסְפָּרִים בְּאַנְגְּלִית: אֵיזֶה מִסְפָּר זֶה?',
        ttsText: `איזה מספר הוא ${numObj.word}?`,
        englishSpeechWord: numObj.word,
        stimulusHtml: `<div style="font-size:2.2rem;font-weight:800;color:#0a84ff;">${numObj.word.toUpperCase()}</div>`,
        rtlStimulus: false,
        options: shuffle([String(numObj.num), ...numObj.wrong.map(w => {
          const found = ENGLISH_NUMBERS.find(n => n.word === w);
          return found ? String(found.num) : '0';
        })]),
        correctAnswers: [String(numObj.num)],
        hint: `${numObj.word} הוא המספר ${numObj.num}!`
      };
    }
  } else if (mode === 2) {
    // Colors
    const col = ENGLISH_COLORS[randInt(0, ENGLISH_COLORS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🎨 צְבָעִים בְּאַנְגְּלִית: מַהוּ הַצֶּבַע?',
      ttsText: `איזה צבע הוא ${col.color}?`,
      englishSpeechWord: col.color,
      stimulusHtml: `<div style="font-size:2.2rem;font-weight:800;color:#d97706;">${col.color.toUpperCase()}</div><div style="font-size:0.95rem;color:#64748b;margin-top:6px;">${col.note}</div>`,
      rtlStimulus: false,
      options: shuffle([col.heb, ...col.wrong]),
      correctAnswers: [col.heb],
      hint: `${col.color} פירושו ${col.heb}!`
    };
  } else {
    // Animals / daily
    const d = ENGLISH_DAILY_WORDS[randInt(0, ENGLISH_DAILY_WORDS.length - 1)];
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '🌍 מִילִים שֶׁל יוֹמְיוֹם וְחַיּוֹת בְּאַנְגְּלִית:',
      ttsText: `איך אומרים בעברית ${d.eng}?`,
      englishSpeechWord: d.eng,
      stimulusHtml: `<div style="font-size:2.2rem;font-weight:800;color:#7c3aed;">${d.eng}</div><div style="font-size:1rem;color:#475569;margin-top:6px;">מה הפירוש בעברית?</div>`,
      rtlStimulus: false,
      options: shuffle([d.heb, ...d.wrong.map(w => {
        const found = ENGLISH_DAILY_WORDS.find(x => x.eng === w);
        return found ? found.heb : 'מילה אחרת';
      })]),
      correctAnswers: [d.heb],
      hint: `${d.eng} פירושו ${d.heb}!`
    };
  }
}

function genEnglishSoccer() {
  const item = ENGLISH_SOCCER_WORDS[randInt(0, ENGLISH_SOCCER_WORDS.length - 1)];
  const toHeb = Math.random() > 0.4;
  if (toHeb) {
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '⚽ אַנְגְּלִית שֶׁל אַלּוּפֵי כַּדּוּרֶגֶל:',
      ttsText: `מה הפירוש של ${item.eng}?`,
      englishSpeechWord: item.eng,
      stimulusHtml: `<div style="font-size:2.4rem;font-weight:800;color:#0a84ff;">${item.eng.toUpperCase()}</div><div style="font-size:1rem;color:#475569;margin-top:6px;">מה הפירוש בעולם הכדורגל?</div>`,
      rtlStimulus: false,
      options: shuffle([item.heb, ...item.wrong.map(w => {
        const found = ENGLISH_SOCCER_WORDS.find(x => x.eng === w);
        return found ? found.heb : 'מילה אחרת';
      })]),
      correctAnswers: [item.heb],
      hint: `${item.eng} פירושו ${item.heb}!`
    };
  } else {
    return {
      isEnglish: true,
      isMulti: false,
      instruction: '⚽ אַנְגְּלִית שֶׁל אַלּוּפֵי כַּדּוּרֶגֶל: אֵיךְ אוֹמְרִים בְּאַנְגְּלִית?',
      ttsText: `איך אומרים ${item.heb} באנגלית?`,
      englishSpeechWord: item.eng,
      stimulusHtml: `<div style="font-size:2rem;font-weight:800;color:#059669;">${item.heb}</div>`,
      rtlStimulus: true,
      options: shuffle([item.eng, ...item.wrong]),
      correctAnswers: [item.eng],
      hint: `${item.heb} באנגלית זה ${item.eng}!`
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
  // Numbers 1-12
  { eng: 'One', heb: '1️⃣ אַחַת (One)', hebShort: 'אַחַת (1)', emoji: '🦄 (1)', hint: 'One זה המספר 1!' },
  { eng: 'Two', heb: '2️⃣ שְׁתַּיִם (Two)', hebShort: 'שְׁתַּיִם (2)', emoji: '💄💄 (2)', hint: 'Two זה המספר 2 (One, Two)!' },
  { eng: 'Three', heb: '3️⃣ שָׁלוֹשׁ (Three)', hebShort: 'שָׁלוֹשׁ (3)', emoji: '👑👑👑 (3)', hint: 'Three זה המספר 3 (One, Two, Three)!' },
  { eng: 'Four', heb: '4️⃣ אַרְבַּע (Four)', hebShort: 'אַרְבַּע (4)', emoji: '🦋🦋🦋🦋 (4)', hint: 'Four זה המספר 4!' },
  { eng: 'Five', heb: '5️⃣ חָמֵשׁ (Five)', hebShort: 'חָמֵשׁ (5)', emoji: '⭐⭐⭐⭐⭐ (5)', hint: 'Five זה 5 אצבעות ביד (High Five ✋)!' },
  { eng: 'Six', heb: '6️⃣ שֵׁשׁ (Six)', hebShort: 'שֵׁשׁ (6)', emoji: '🌸🌸🌸🌸🌸🌸 (6)', hint: 'Six זה המספר 6!' },
  { eng: 'Seven', heb: '7️⃣ שֶׁבַע (Seven)', hebShort: 'שֶׁבַע (7)', emoji: '🌈 (7)', hint: 'Seven זה המספר 7 (כמו 7 צבעים בקשת)!' },
  { eng: 'Eight', heb: '8️⃣ שְׁמוֹנֶה (Eight)', hebShort: 'שְׁמוֹנֶה (8)', emoji: '🐙 (8)', hint: 'Eight זה המספר 8!' },
  { eng: 'Nine', heb: '9️⃣ תֵּשַׁע (Nine)', hebShort: 'תֵּשַׁע (9)', emoji: '🎈 (9)', hint: 'Nine זה המספר 9!' },
  { eng: 'Ten', heb: '🔟 עֶשֶׂר (Ten)', hebShort: 'עֶשֶׂר (10)', emoji: '🙌 (10)', hint: 'Ten זה 10 אצבעות בשתי הידיים!' },
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

function buildLiaEnglishQuestion(bank, categoryTitle, diff = 'medium') {
  // Progressive difficulty for Lia:
  // If diff === 'hard' (questions 8-10 when on a streak!), 45% chance to ask a 2-word Champion English phrase!
  let activeBank = bank;
  if (diff === 'hard' && Math.random() < 0.45) {
    activeBank = LIA_ENGLISH_PHRASES;
    categoryTitle = '🌟 שְׁאֵלַת אַלּוּפִים (2 מִילִּים בְּאַנְגְּלִית!)';
  }

  const item = activeBank[randInt(0, activeBank.length - 1)];
  const otherPool = activeBank.filter(x => x.eng !== item.eng);
  const shuffledOthers = shuffle(otherPool);
  const distractors = shuffledOthers.slice(0, 3);

  // Easy mode: always English -> Hebrew with big emojis; Medium/Hard: mix of Eng->Heb and Heb->Eng!
  const mode = (diff === 'easy' || Math.random() < 0.65) ? 'eng_to_heb' : 'heb_to_eng';

  if (mode === 'eng_to_heb') {
    const opts = shuffle([item.heb, ...distractors.map(d => d.heb)]);
    return {
      isEnglish: true,
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      uniqueKey: `e2h_${item.eng}`,
      instruction: `${categoryTitle}: הַקְשִׁיבִי לַמִּילָה בְּאַנְגְּלִית וּבַחֲרִי אֶת הַפֵּירוּשׁ הַמַּתְאִים!`,
      ttsText: `ליה מתוקה, מה הפירוש של המילה:`,
      englishSpeechWord: item.eng,
      stimulusHtml: `<div style="font-size:3.3rem;line-height:1.2;margin-bottom:6px;">${item.emoji}</div><div style="font-size:2.1rem;font-weight:900;color:#db2777;letter-spacing:1px;">${item.eng.toUpperCase()}</div>`,
      rtlStimulus: false,
      options: opts,
      correctAnswers: [item.heb],
      hint: item.hint
    };
  } else {
    const hebLabel = item.hebShort || item.heb.replace(/\([^)]*\)/g, '').trim();
    const correctOpt = `${item.emoji.slice(0, 2)} ${item.eng}`;
    const wrongOpts = distractors.map(d => `${d.emoji.slice(0, 2)} ${d.eng}`);
    return {
      isEnglish: true,
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      uniqueKey: `h2e_${item.eng}`,
      instruction: `${categoryTitle}: אֵיךְ אוֹמְרִים <strong>${hebLabel}</strong> בְּאַנְגְּלִית? (לַחֲצִי עַל 🔊 כְּדֵי לִשְׁמֹעַ!)`,
      ttsText: `ליה אלופה, איך אומרים באנגלית ${hebLabel}? הקשיבי:`,
      englishSpeechWord: item.eng,
      stimulusHtml: `<div style="font-size:3.3rem;line-height:1.2;margin-bottom:6px;">${item.emoji}</div><div style="font-size:2rem;font-weight:900;color:#7c3aed;">${hebLabel}</div>`,
      rtlStimulus: true,
      options: shuffle([correctOpt, ...wrongOpts]),
      correctAnswers: [correctOpt],
      hint: item.hint
    };
  }
}

function genLiaHebLetters() {
  const items = [
    { word: 'לִיָּה', emoji: '👧👑', letter: 'ל (לָמֶ"ד)', wrong: ['ס (סָמֶ"ךְ)', 'ח (חֵי"ת)', 'ג (גִּימֶ"ל)'], hint: 'השם המתוק לִיָּה מתחיל באות ל׳!' },
    { word: 'סְטִיץ׳', emoji: '💙🌺', letter: 'ס (סָמֶ"ךְ)', wrong: ['ל (לָמֶ"ד)', 'א (אָלֶ"ף)', 'מ (מֵ"ם)'], hint: 'סְטִיץ׳ מתחיל בצליל סְ — האות ס׳!' },
    { word: 'חַד-קֶרֶן', emoji: '🦄🌈', letter: 'ח (חֵי"ת)', wrong: ['כ (כַּ"ף)', 'פ (פֵּ"א)', 'ש (שִׁי"ן)'], hint: 'חַד-קֶרֶן מתחיל בצליל חַ — האות ח׳!' },
    { word: 'אִיפּוּר', emoji: '💄🪞', letter: 'א (אָלֶ"ף)', wrong: ['ב (בֵּי"ת)', 'ג (גִּימֶ"ל)', 'ד (דָּלֶ"ת)'], hint: 'אִיפּוּר מתחיל באות הראשונה של האלף-בית: א׳!' },
    { word: 'גַּנֶּנֶת', emoji: '👩‍🏫🧸', letter: 'ג (גִּימֶ"ל)', wrong: ['ד (דָּלֶ"ת)', 'ל (לָמֶ"ד)', 'ש (שִׁי"ן)'], hint: 'גַּנֶּנֶת (וְגַם גַּן!) מתחילה באות ג׳!' },
    { word: 'כֶּתֶר', emoji: '👑✨', letter: 'כ (כַּ"ף)', wrong: ['ח (חֵי"ת)', 'ר (רֵי"שׁ)', 'ת (תָּ"ו)'], hint: 'כֶּתֶר של נסיכה מתחיל באות כ׳!' },
    { word: 'שְׂפָתוֹן', emoji: '💄💋', letter: 'ש (שִׁי"ן)', wrong: ['ס (סָמֶ"ךְ)', 'פ (פֵּ"א)', 'מ (מֵ"ם)'], hint: 'שְׂפָתוֹן מתחיל באות ש׳!' },
    { word: 'פַּרְפַּר', emoji: '🦋🌸', letter: 'פ (פֵּ"א)', wrong: ['ב (בֵּי"ת)', 'ח (חֵי"ת)', 'ל (לָמֶ"ד)'], hint: 'פַּרְפַּר מתחיל בצליל פַּ — האות פ׳!' },
    { word: 'דֻּבִּי', emoji: '🧸💛', letter: 'ד (דָּלֶ"ת)', wrong: ['ג (גִּימֶ"ל)', 'ב (בֵּי"ת)', 'ת (תָּ"ו)'], hint: 'דֻּבִּי מתחיל בצליל דּוּ — האות ד׳!' },
    { word: 'מַרְאָה', emoji: '🪞✨', letter: 'מ (מֵ"ם)', wrong: ['נ (נוּ"ן)', 'א (אָלֶ"ף)', 'ל (לָמֶ"ד)'], hint: 'מַרְאָה מתחילה בצליל מַ — האות מ׳!' },
    { word: 'נְסִיכָה', emoji: '👸👑', letter: 'נ (נוּ"ן)', wrong: ['מ (מֵ"ם)', 'ג (גִּימֶ"ל)', 'ר (רֵי"שׁ)'], hint: 'נְסִיכָה מתחילה בצליל נְ — האות נ׳!' },
    { word: 'בֻּבָּה', emoji: '🪆🎀', letter: 'ב (בֵּי"ת)', wrong: ['פ (פֵּ"א)', 'ד (דָּלֶ"ת)', 'כ (כַּ"ף)'], hint: 'בֻּבָּה מתחילה בצליל בּוּ — האות ב׳!' },
    { word: 'קֶשֶׁת', emoji: '🌈☁️', letter: 'ק (קוֹ"ף)', wrong: ['ר (רֵי"שׁ)', 'ש (שִׁי"ן)', 'ל (לָמֶ"ד)'], hint: 'קֶשֶׁת בענן מתחילה באות ק׳!' },
    { word: 'תּוּת', emoji: '🍓❤️', letter: 'ת (תָּ"ו)', wrong: ['ד (דָּלֶ"ת)', 'ב (בֵּי"ת)', 'ח (חֵי"ת)'], hint: 'תּוּת מתוק מתחיל באות האחרונה באלף-בית: ת׳!' },
    { word: 'רִיקוּד', emoji: '💃🎶', letter: 'ר (רֵי"שׁ)', wrong: ['ד (דָּלֶ"ת)', 'כ (כַּ"ף)', 'נ (נוּ"ן)'], hint: 'רִיקוּד מתחיל בצליל רִי — האות ר׳!' },
    { word: 'עוגָה', emoji: '🎂🍓', letter: 'ע (עַיִ"ן)', wrong: ['ח (חֵי"ת)', 'פ (פֵּ"א)', 'ס (סָמֶ"ךְ)'], hint: 'עוּגָה מתוקה מתחילה באות ע׳!' },
    { word: 'יַהֲלוֹם', emoji: '💎✨', letter: 'י (יוֹ"ד)', wrong: ['ו (וָ"ו)', 'ז (זַיִ"ן)', 'ל (לָמֶ"ד)'], hint: 'יַהֲלוֹם מנצנץ מתחיל באות הקטנה י׳!' },
    { word: 'זָהָב', emoji: '👑🌟', letter: 'ז (זַיִ"ן)', wrong: ['ד (דָּלֶ"ת)', 'ר (רֵי"שׁ)', 'ב (בֵּי"ת)'], hint: 'זָהָב מתחיל בצליל זָ — האות ז׳!' },
    { word: 'טַבַּעַת', emoji: '💍💎', letter: 'ט (טֵי"ת)', wrong: ['מ (מֵ"ם)', 'ש (שִׁי"ן)', 'ל (לָמֶ"ד)'], hint: 'טַבַּעַת מתחילה באות ט׳!' },
    { word: 'הַפְתָּעָה', emoji: '🎁🎉', letter: 'ה (הֵ"א)', wrong: ['ב (בֵּי"ת)', 'נ (נוּ"ן)', 'ק (קוֹ"ף)'], hint: 'הַפְתָּעָה מתחילה באות ה׳!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `heb_let_${item.word}`,
    instruction: '🔤 מוּכָנוּת לְגַן חוֹבָה: בְּאֵיזוֹ אוֹת מַתְחִילָה הַמִּילָה?',
    ttsText: `ליה אלופה, באיזו אות מתחילה המילה ${item.word}?`,
    stimulusHtml: `<div style="font-size:3.2rem;margin-bottom:6px;">${item.emoji}</div><div style="font-size:2.2rem;font-weight:900;color:#9333ea;">${item.word}</div>`,
    rtlStimulus: true,
    options: shuffle([item.letter, ...item.wrong]),
    correctAnswers: [item.letter],
    hint: item.hint
  };
}

function genLiaHebRhymes() {
  const items = [
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>גְּלִידָה 🍦</strong>?', tts: 'מה מתחרז עם המילה גלידה?', emoji: '🍦', ans: '🧩 חִידָה', wrong: ['👑 כֶּתֶר', '🐶 כֶּלֶב', '☀️ שֶׁמֶשׁ'], hint: 'גְּלִידָה — חִידָה! שתי המילים מסתיימות בצליל דָה!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>כּוֹכָב ⭐</strong>?', tts: 'מה מתחרז עם המילה כוכב?', emoji: '⭐', ans: '👑 זָהָב', wrong: ['🍎 תַּפּוּחַ', '👗 שִׂמְלָה', '🐱 חָתוּל'], hint: 'כּוֹכָב — זָהָב! צליל סיום דומה!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>שֶׁמֶשׁ ☀️</strong>?', tts: 'מה מתחרז עם המילה שמש?', emoji: '☀️', ans: '😊 נֶמֶשׁ', wrong: ['🌙 יָרֵחַ', '🦄 חַד-קֶרֶן', '💄 שְׂפָתוֹן'], hint: 'שֶׁמֶשׁ — נֶמֶשׁ! חרוז מושלם!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>דֹּב 🧸</strong>?', tts: 'מה מתחרז עם המילה דוב?', emoji: '🧸', ans: '💛 טוֹב', wrong: ['🌺 פֶּרַח', '🦋 פַּרְפַּר', '👠 נַעַל'], hint: 'דֹּב — טוֹב! כמו בוקר טוב דוב!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>בָּלוֹן 🎈</strong>?', tts: 'מה מתחרז עם המילה בלון?', emoji: '🎈', ans: '🪟 חַלּוֹן', wrong: ['🎂 עוּגָה', '🐰 אַרְנָב', '👑 כֶּתֶר'], hint: 'בָּלוֹן — חַלּוֹן! מסתיימים בצליל לוֹן!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>סִירָה ⛵</strong>?', tts: 'מה מתחרז עם המילה סירה?', emoji: '⛵', ans: '🎤 שִׁירָה', wrong: ['🐘 פִּיל', '🍌 בָּנָנָה', '🛏️ מִיטָּה'], hint: 'סִירָה — שִׁירָה! חרוז מתוק!' },
    { type: 'rhyme', q: 'מָה מִתְחָרֵז עִם הַמִּילָה <strong>פִּיל 🐘</strong>?', tts: 'מה מתחרז עם המילה פיל?', emoji: '🐘', ans: '🏰 מִגְדָּל רָגִיל / גִּיל', wrong: ['🍎 תַּפּוּחַ', '🦋 פַּרְפַּר', '👗 שִׂמְלָה'], hint: 'פִּיל — גִּיל! חרוז מצוין!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>גָּדוֹל 🐘</strong>?', tts: 'מה ההפך מן המילה גדול?', emoji: '🐘 ↔️ 🐭', ans: '🐭 קָטָן', wrong: ['☀️ חַם', '😊 שָׂמֵחַ', '🏃 מָהִיר'], hint: 'הפיל הוא גדול, והעכבר הוא קטן!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>יוֹם ☀️</strong>?', tts: 'מה ההפך מן המילה יום?', emoji: '☀️ ↔️ 🌙', ans: '🌙 לַיְלָה', wrong: ['🌈 קֶשֶׁת', '🍦 גְּלִידָה', '👑 כֶּתֶר'], hint: 'ביום זורחת השמש, וההפך מיום הוא לילה!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>חַם 🔥</strong> (כְּמוֹ מָרָק)?', tts: 'מה ההפך מן המילה חם?', emoji: '🔥 ↔️ 🍦', ans: '🍦 קַר', wrong: ['🎈 גָּבוֹהַּ', '🐢 אִטִּי', '🩷 וָרוֹד'], hint: 'ההפך מחם הוא קר (כמו גלידה קרה)!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>שָׂמֵחַ 😊</strong>?', tts: 'מה ההפך מן המילה שמח?', emoji: '😊 ↔️ 😢', ans: '😢 עָצוּב', wrong: ['🏃 מָהִיר', '🐘 גָּדוֹל', '🍬 מָתוֹק'], hint: 'ההפך משמח הוא עצוב!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>מָהִיר 🐆</strong>?', tts: 'מה ההפך מן המילה מהיר?', emoji: '🐆 ↔️ 🐢', ans: '🐢 אִטִּי (לְאַט)', wrong: ['☀️ חַם', '👑 זָהָב', '🎈 גָּבוֹהַּ'], hint: 'הצ׳יטה מהירה, והצב הוא איטי!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>לְמַעְלָה ⬆️</strong> (בַּשָּׁמַיִם)?', tts: 'מה ההפך מן המילה למעלה?', emoji: '⬆️ ↔️ ⬇️', ans: '⬇️ לְמַטָּה', wrong: ['🍦 קַר', '🐭 קָטָן', '🌙 לַיְלָה'], hint: 'ההפך מלמעלה הוא למטה!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `rhyme_${item.tts}`,
    instruction: '🎵 חֲרוּזִים וַהֲפָכִים לְגַן חוֹבָה:',
    ttsText: `ליה מתוקה, ${item.tts}`,
    stimulusHtml: `<div style="font-size:2.8rem;margin-bottom:6px;">${item.emoji}</div><div style="font-size:1.5rem;font-weight:800;color:#1e293b;">${item.q}</div>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genLiaMathCounting(diff = 'medium') {
  const icons = [
    { icon: '🦄', name: 'חַדֵּי-קֶרֶן' },
    { icon: '💄', name: 'שְׂפָתוֹנִים' },
    { icon: '👑', name: 'כְּתָרִים' },
    { icon: '🌺', name: 'פְּרָחִים שֶׁל סְטִיץ׳' },
    { icon: '⭐', name: 'כּוֹכָבִים' },
    { icon: '🦋', name: 'פַּרְפָּרִים' },
    { icon: '🍦', name: 'גְּלִידוֹת' },
    { icon: '🍓', name: 'תּוּתִים' },
    { icon: '🎈', name: 'בָּלוֹנִים' },
    { icon: '💎', name: 'יַהֲלוֹמִים' }
  ];
  const picked = icons[randInt(0, icons.length - 1)];

  if (diff === 'easy') {
    const count = randInt(1, 5);
    const visual = Array(count).fill(picked.icon).join(' ');
    return {
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      uniqueKey: `cnt_${picked.icon}_${count}`,
      instruction: `🌱 סְפִירָה קַלָּה (שָׁלָב 1): כַּמָּה ${picked.name} יֵשׁ בַּתְּמוּנָה?`,
      ttsText: `ליה מתוקה, ספרי כמה ${picked.name} יש בתמונה?`,
      stimulusHtml: `<div style="font-size:2.9rem;letter-spacing:8px;line-height:1.4;">${visual}</div>`,
      rtlStimulus: false,
      options: makeNumericOptions(count, 4, 1),
      correctAnswers: [String(count)],
      hint: `בואי נספור יחד באצבע: יש כאן ${count} ${picked.name}!`
    };
  } else if (diff === 'medium') {
    const subMode = randInt(1, 2);
    if (subMode === 1) {
      const count = randInt(5, 10);
      const visual = Array(count).fill(picked.icon).join(' ');
      return {
        isLia: true,
        autoSpeak: true,
        isMulti: false,
        uniqueKey: `cnt_${picked.icon}_${count}`,
        instruction: `🦄 סְפִירָה לְגַן חוֹבָה (שָׁלָב 2): כַּמָּה ${picked.name} יֵשׁ בַּתְּמוּנָה?`,
        ttsText: `ליה, ספרי כמה ${picked.name} יש בתמונה?`,
        stimulusHtml: `<div style="font-size:2.5rem;letter-spacing:6px;line-height:1.4;">${visual}</div>`,
        rtlStimulus: false,
        options: makeNumericOptions(count, 4, 1),
        correctAnswers: [String(count)],
        hint: `ספרי לאט באצבע: יש כאן ${count} ${picked.name}!`
      };
    } else {
      const a = randInt(1, 4);
      const b = randInt(1, 3);
      const sum = a + b;
      const visA = Array(a).fill(picked.icon).join('');
      const visB = Array(b).fill(picked.icon).join('');
      return {
        isLia: true,
        autoSpeak: true,
        isMulti: false,
        uniqueKey: `add_${picked.icon}_${a}_${b}`,
        instruction: `✨ חִיבּוּר בִּתְמוּנוֹת: כַּמָּה ${picked.name} יֵשׁ בְּיַחַד?`,
        ttsText: `לליה יש ${a} ${picked.name}, ועוד ${b} ${picked.name}. כמה יש ביחד?`,
        stimulusHtml: `<div style="font-size:2.3rem;font-weight:800;">${visA} <span style="color:#db2777;">+</span> ${visB} <span style="color:#db2777;">= ?</span></div>`,
        rtlStimulus: false,
        options: makeNumericOptions(sum, 4, 1),
        correctAnswers: [String(sum)],
        hint: `ספרי את כולם יחד: ${a} ועוד ${b} שווה ${sum}!`
      };
    }
  } else {
    // Hard (Champion stage for Lia!)
    const a = randInt(3, 6);
    const b = randInt(1, 2);
    const diffAns = a - b;
    const visRemain = Array(diffAns).fill(picked.icon).join(' ');
    return {
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      uniqueKey: `sub_${picked.icon}_${a}_${b}`,
      instruction: `🌟 חִידַת אַלּוּפִים לְלִיָּה: הָיוּ ${a} ${picked.name}, וְסְטִיץ׳ לָקַח ${b} — כַּמָּה נִשְׁאֲרוּ?`,
      ttsText: `היו לליה ${a} ${picked.name}, וסטיץ׳ לקח ${b}. כמה ${picked.name} נשארו עכשיו בתמונה?`,
      stimulusHtml: `<div style="font-size:2.6rem;letter-spacing:6px;">${visRemain}</div><div style="font-size:1.1rem;color:#db2777;font-weight:800;margin-top:4px;">(${a} פָּחוֹת ${b} = ?)</div>`,
      rtlStimulus: false,
      options: makeNumericOptions(diffAns, 4, 1),
      correctAnswers: [String(diffAns)],
      hint: `ספרי כמה ${picked.name} נשארו בתמונה: נשארו ${diffAns}!`
    };
  }
}

function genLiaLogicPatterns() {
  const patterns = [
    { seq: '🦄 , 💙 , 🦄 , 💙 , 🦄 , ', ans: '💙 סְטִיץ׳ כָּחוֹל', wrong: ['🦄 חַד-קֶרֶן', '🍎 תַּפּוּחַ', '🚗 מְכוֹנִית'], tts: 'חד קרן, לב כחול, חד קרן, לב כחול, חד קרן. מי בא עכשיו בתור?', hint: 'הסדרה מתחלפת: חד-קרן ואז לב כחול של סטיץ׳!' },
    { seq: '💄 , 👑 , 💄 , 👑 , 💄 , ', ans: '👑 כֶּתֶר', wrong: ['💄 שְׂפָתוֹן', '🐶 כֶּלֶב', '🍌 בָּנָנָה'], tts: 'שפתון, כתר, שפתון, כתר, שפתון. מה בא עכשיו בתור?', hint: 'אחרי כל שפתון מגיע כתר נוצץ!' },
    { seq: '🌸 , 🌸 , 🦋 , 🌸 , 🌸 , ', ans: '🦋 פַּרְפַּר', wrong: ['🌸 פֶּרַח', '🍦 גְּלִידָה', '🐱 חָתוּל'], tts: 'שני פרחים ופרפר, שני פרחים ו... מה בא עכשיו?', hint: 'אחרי שני פרחים ורודים מגיע פרפר!' },
    { seq: '⭐ , 🌙 , ⭐ , 🌙 , ⭐ , ', ans: '🌙 יָרֵחַ', wrong: ['⭐ כּוֹכָב', '☀️ שֶׁמֶשׁ', '👗 שִׂמְלָה'], tts: 'כוכב, ירח, כוכב, ירח, כוכב. מי הבא בתור?', hint: 'אחרי הכוכב מגיע הירח!' },
    { seq: '🍦 , 🍓 , 🍦 , 🍓 , 🍦 , ', ans: '🍓 תּוּת שָׂדֶה', wrong: ['🍦 גְּלִידָה', '🐸 צְפַרְדֵּעַ', '⚽ כַּדּוּר'], tts: 'גלידה, תות, גלידה, תות, גלידה. מה בא עכשיו?', hint: 'אחרי כל גלידה מגיע תות מתוק!' },
    { seq: '🩷 , 💜 , 🩷 , 💜 , 🩷 , ', ans: '💜 לֵב סָגוֹל', wrong: ['🩷 לֵב וָרוֹד', '💚 לֵב יָרוֹק', '🖤 לֵב שָׁחוֹר'], tts: 'לב ורוד, לב סגול, לב ורוד, לב סגול, לב ורוד. איזה לב בא עכשיו?', hint: 'הצבעים מתחלפים: ורוד ואז סגול!' },
    { seq: '🐶 , 🐱 , 🐶 , 🐱 , 🐶 , ', ans: '🐱 חָתוּל', wrong: ['🐶 כֶּלֶב', '🐘 פִּיל', '👑 כֶּתֶר'], tts: 'כלב, חתול, כלב, חתול, כלב. מי בא עכשיו?', hint: 'אחרי הכלב מגיע החתול!' },
    { seq: '☀️ , 🌈 , ☀️ , 🌈 , ☀️ , ', ans: '🌈 קֶשֶׁת בֶּעָנָן', wrong: ['☀️ שֶׁמֶשׁ', '🌧️ גֶּשֶׁם', '👠 נַעַל'], tts: 'שמש, קשת בענן, שמש, קשת בענן, שמש. מה בא עכשיו?', hint: 'אחרי השמש מופיעה הקשת בענן!' },
    { seq: '👗 , 👠 , 👗 , 👠 , 👗 , ', ans: '👠 נַעֲלַיִם', wrong: ['👗 שִׂמְלָה', '🍕 פִּיצָה', '🐢 צָב'], tts: 'שמלה, נעליים, שמלה, נעליים, שמלה. מה בא עכשיו?', hint: 'אחרי השמלה מגיעות הנעליים!' },
    { seq: '🍎 , 🍎 , 🍌 , 🍎 , 🍎 , ', ans: '🍌 בָּנָנָה', wrong: ['🍎 תַּפּוּחַ', '🍦 גְּלִידָה', '🐶 כֶּלֶב'], tts: 'שני תפוחים ובננה, שני תפוחים ו... מה בא עכשיו?', hint: 'אחרי שני תפוחים אדומים מגיעה בננה צהובה!' }
  ];
  const item = patterns[randInt(0, patterns.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    uniqueKey: `pat_${item.seq}`,
    instruction: '🌈 סִדְרוֹת קֶסֶם לְגַן חוֹבָה: מִי בָּא הַבָּא בַּתּוֹר?',
    ttsText: `ליה חכמה, השלימי את הסדרה: ${item.tts}`,
    stimulusHtml: `<div style="font-size:2.3rem;direction:ltr;">${item.seq}<span class="mystery-box">?</span></div>`,
    rtlStimulus: false,
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
    case 'logic_series':      q = genLogicSeries(diff); break;
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
    default:                  q = genAddSub(diff); break;
  }
  q.topicId = topicId;
  q.levelStage = diff;
  return q;
}
