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
    title: 'אנגלית של FC 27 (עם צילומי מסך!)',
    desc: 'לומדים לקרוא את התפריטים, קלפי Ultimate Team, הכפתורים והמהלכים מתוך מסכי המשחק FC 27!'
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
  // ===== LIA ENGLISH (4 TOPICS) =====
  {
    id: 'lia_english_colors_glam',
    kid: 'lia',
    cat: 'english',
    tag: 'איפור ונסיכות 💄',
    icon: '💄',
    title: 'צבעים, איפור וכתרים באנגלית',
    desc: 'Pink, Purple, Blue, Gold, Crown, Lipstick, Dress, Mirror — לומדים אנגלית עם נצנצים ואיפור!'
  },
  {
    id: 'lia_english_stitch_animals',
    kid: 'lia',
    cat: 'english',
    tag: 'סטיץ׳ וחיות 💙',
    icon: '🦄',
    title: 'סטיץ׳, חד-קרן וחיות מתוקות באנגלית',
    desc: 'Unicorn, Stitch, Dog, Cat, Butterfly, Bunny, Ohana (משפחה) ורגשות באנגלית!'
  },
  {
    id: 'lia_english_numbers_food',
    kid: 'lia',
    cat: 'english',
    tag: 'מספרים וגלידות 🍦',
    icon: '🍦',
    title: 'מספרים (1-10) ופינוקים באנגלית',
    desc: 'סופרים באנגלית 1 עד 10 ומכירים מילים טעימות: Ice Cream, Cake, Apple, Banana!'
  },
  {
    id: 'lia_english_magic_words',
    kid: 'lia',
    cat: 'english',
    tag: 'מילות קסם 👋',
    icon: '🌈',
    title: 'מילות קסם וברכות באנגלית',
    desc: 'Hello, Good Morning, Thank You, Please, I Love You — מדברים אנגלית בגן ובבית!'
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

// ==================== EA SPORTS FC 27 VISUAL SCREENSHOTS & VOCABULARY ENGINE ====================

const FC27_VOCAB_BANK = [
  // --- SCREEN 1: MAIN MENU & KICK OFF ---
  {
    screen: 'main_menu',
    key: 'KICK OFF',
    eng: 'Kick Off',
    heb: '⚽ מִשְׂחַק יְדִידוּת מָהִיר (בְּעִיטַת פְּתִיחָה)',
    wrong: ['⚙️ הַגְדָּרוֹת הַמִּשְׂחָק', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎥 הִלּוּךְ חוֹזֵר'],
    hint: 'בתפריט הראשי של FC 27 לוחצים על KICK OFF כדי להתחיל מיד משחק כדורגל!'
  },
  {
    screen: 'main_menu',
    key: 'ULTIMATE TEAM',
    eng: 'Ultimate Team',
    heb: '🏆 קְבוּצַת הַחֲלוֹמוֹת (אִסּוּף קְלָפִים וְשַׂחְקָנִים)',
    wrong: ['🚩 נִבְדָּל בַּמִּגְרָשׁ', '🔄 חִלּוּף שַׂחְקָנִים', '🦵 תִּיקוּל גְּלִישָׁה (גְּלִיץ׳)'],
    hint: 'Ultimate Team (או FUT) הוא המצב שבו פותחים חבילות ובונים קבוצה מקלפי כוכבים!'
  },
  {
    screen: 'main_menu',
    key: 'CAREER MODE',
    eng: 'Career Mode',
    heb: '👔 מַצַּב קַרְיֵירָה (לִהְיוֹת מְאַמֵּן אוֹ שַׂחְקָן עוֹנָה שְׁלֵמָה)',
    wrong: ['🥅 דּוּ-קְרַב פֶּנְדָּלִים', '💨 רִיצָה מְהִירָה (סְפְּרִינְט)', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'ב-Career Mode מנהלים קריירה שלמה של שחקן או מאמן לאורך עונות!'
  },
  {
    screen: 'main_menu',
    key: 'PLAY MATCH',
    eng: 'Play Match',
    heb: '▶️ הַתְחֵל אֶת הַמִּשְׂחָק עַכְשָׁיו!',
    wrong: ['⏸️ עֲצֹר אֶת הַמִּשְׂחָק', '💰 שׁוּק הַהַעֲבָרוֹת', '🧪 כִּימְיָה בֵּין שַׂחְקָנִים'],
    hint: 'Play = שחק, Match = משחק. לוחצים על PLAY MATCH כדי לעלות לדשא!'
  },
  {
    screen: 'main_menu',
    key: 'SELECT SIDE',
    eng: 'Select Side',
    heb: '🎮 בְּחַר צַד (הֲזָזַת הַשַּׁלָּט לַקְּבוּצָה שֶׁלְּךָ)',
    wrong: ['🎁 פְּתַח חֲבִילַת קְלָפִים', '⏱️ תּוֹסֶפֶת זְמַן / הַאֲרָכָה', '🛡️ הֲגָנָה וַחֲטִיפָה'],
    hint: 'לפני המשחק מזיזים את השלט ב-SELECT SIDE כדי לבחור באיזו קבוצה משחקים (בית או חוץ)!'
  },
  {
    screen: 'main_menu',
    key: 'SETTINGS',
    eng: 'Settings',
    heb: '⚙️ הַגְדָּרוֹת (שַׁלָּט, רָמַת קֹשִׁי וּצְלִילִים)',
    wrong: ['⚽ בְּעִיטַת פְּתִיחָה', '🎯 עוצְמַת בְּעִיטָה לַשַּׁעַר', '🏃‍♂️ רִיצָה מְהִירָה'],
    hint: 'Settings הן הגדרות המשחק (עם סמל גלגל השיניים ⚙️)!'
  },

  // --- SCREEN 2: PAUSE MENU & MATCH MANAGEMENT ---
  {
    screen: 'pause_menu',
    key: 'RESUME MATCH',
    eng: 'Resume Match',
    heb: '▶️ הַמְשֵׁךְ בַּמִּשְׂחָק (חֲזָרָה לַמִּגְרָשׁ)',
    wrong: ['🏳️ פְּרֹשׁ מֵהַמִּשְׂחָק (הֶפְסֵד)', '🎥 הִלּוּךְ חוֹזֵר שֶׁל הַשַּׁעַר', '🎁 פְּתַח חֲבִילַת קְלָפִים'],
    hint: 'כשעוצרים את המשחק (Pause), הכפתור הראשון RESUME MATCH מחזיר אותך להמשיך לשחק!'
  },
  {
    screen: 'pause_menu',
    key: 'TEAM MANAGEMENT',
    eng: 'Team Management',
    heb: '📋 נִיהוּל קְבוּצָה (הֶרְכֵּב, מַעֲרָךְ וְחִלּוּפִים)',
    wrong: ['🛒 חֲנוּת הַחֲבִילוֹת', '🚩 שְׁרִיקָה לְנִבְדָּל', '⚡ מְהִירוּת רִיצָה שֶׁל שַׂחְקָן'],
    hint: 'נכנסים ל-Team Management כדי לעשות חילופים ולסדר את ההרכב של בית"ר או ריאל!'
  },
  {
    screen: 'pause_menu',
    key: 'SUBSTITUTION',
    eng: 'Substitution',
    heb: '🔄 חִלּוּף שַׂחְקָנִים (הַכְנָסַת שַׂחְקָן רַעֲנָן מֵהַסַּפְסָל)',
    wrong: ['🥅 בְּעִיטַת פֶּנְדֶּל', '👑 מַצַּב קַרְיֵירָה', '💰 קְנִיַּת שַׂחְקָן בַּשּׁוּק'],
    hint: 'כששחקן מתעייף, עושים Substitution — חילוף שחקנים!'
  },
  {
    screen: 'pause_menu',
    key: 'INSTANT REPLAY',
    eng: 'Instant Replay',
    heb: '🎥 הִלּוּךְ חוֹזֵר (לִרְאוֹת שׁוּב אֶת הַגּוֹל בְּהִלּוּךְ אִטִּי)',
    wrong: ['▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '📐 מַעֲרָךְ הַקְּבוּצָה (4-3-3)', '🛡️ צִיּוּן הֲגָנָה בַּקְּלָף'],
    hint: 'הבקעת שער מדהים ב-FC 27? לוחצים על Instant Replay כדי לראות הילוך חוזר!'
  },
  {
    screen: 'pause_menu',
    key: 'FORMATION',
    eng: 'Formation',
    heb: '📐 מַעֲרָךְ הַשַּׂחְקָנִים עַל הַמִּגְרָשׁ (לְמָשָׁל 4-3-3)',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '🎁 פְּתִיחַת חֲבִילַת זָהָב', '🚩 עֲבֵירַת נִבְדָּל'],
    hint: 'Formation הוא המבנה והמערך שבו השחקנים עומדים על הדשא (כמו 4-3-3 או 4-4-2)!'
  },
  {
    screen: 'pause_menu',
    key: 'FORFEIT MATCH',
    eng: 'Forfeit Match',
    heb: '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק (זְהִירוּת: זֶה הֶפְסֵד טֶכְנִי 3-0!)',
    wrong: ['▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '🔄 בַּצַּע חִלּוּף שַׂחְקָנִים', '🎥 צְפֵה בְּהִלּוּךְ חוֹזֵר'],
    hint: 'זהירות! ב-FC 27 הכפתור התחתון FORFEIT MATCH אומר לפרוש ולוותר על המשחק!'
  },

  // --- SCREEN 3: ULTIMATE TEAM PLAYER CARD & PACKS ---
  {
    screen: 'fut_card',
    key: 'PAC',
    eng: 'Pace (PAC)',
    heb: '⚡ מְהִירוּת רִיצָה (כַּמָּה מַהֵר הַשַּׂחְקָן דּוֹהֵר עַל הַדֶּשֶׁא)',
    wrong: ['🛡️ הֲגָנָה וַחֲטִיפַת כַּדּוּר', '🎯 דִּיּוּק בִּבְעִיטוֹת לַשַּׁעַר', '💪 כֹּחַ פִּיזִי'],
    hint: 'על הקלף של אמבפה כתוב 98 PAC — זה קיצור של Pace, כלומר מהירות אדירה!'
  },
  {
    screen: 'fut_card',
    key: 'SHO',
    eng: 'Shooting (SHO)',
    heb: '🎯 בְּעִיטָה לַשַּׁעַר (עוצְמָה וְדִיּוּק בְּהַבְקָעַת גּוֹלִים)',
    wrong: ['⚡ מְהִירוּת רִיצָה', '👟 מְסִירוֹת לַחֲבֵרִים', '🛡️ הֲגָנָה בָּרְחָבָה'],
    hint: 'SHO בקלף של FC 27 הוא קיצור של Shooting — יכולת הבעיטה לשער!'
  },
  {
    screen: 'fut_card',
    key: 'PAS',
    eng: 'Passing (PAS)',
    heb: '👟 מְסִירוֹת (דִּיּוּק בִּמְסִירוֹת וּבִישּׁוּלִים כְּמוֹ יַרְדֵּן שׁוּעָה)',
    wrong: ['💪 כֹּחַ פִּיזִי', '🎯 בְּעִיטָה לַשַּׁעַר', '🧤 שׁוֹעֵר בַּשַּׁעַר'],
    hint: 'PAS הוא קיצור של Passing — ציון המסירות של השחקן בקלף!'
  },
  {
    screen: 'fut_card',
    key: 'DRI',
    eng: 'Dribbling (DRI)',
    heb: '🕺 כִּדְרוּר וּשְׁלִיטָה בַּכַּדּוּר (לַעֲבֹר שַׂחְקָנִים בִּתְנוּעָה)',
    wrong: ['🛡️ הֲגָנָה וּבְלִימָה', '⏱️ הַאֲרָכָה בַּמִּשְׂחָק', '🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק'],
    hint: 'DRI הוא קיצור של Dribbling — דריבל ושליטה בכדור כמו ויניסיוס!'
  },
  {
    screen: 'fut_card',
    key: 'DEF',
    eng: 'Defending (DEF)',
    heb: '🛡️ הֲגָנָה (חֲטִיפַת כַּדּוּר וַעֲצִירַת הַתְקָפוֹת הַיָּרִיב)',
    wrong: ['⚡ מְהִירוּת רִיצָה', '🎯 בְּעִיטָה לַשַּׁעַר', '🎁 פְּתִיחַת חֲבִילָה'],
    hint: 'DEF הוא קיצור של Defending — ציון ההגנה של בלמים ומגנים!'
  },
  {
    screen: 'fut_card',
    key: 'PHY',
    eng: 'Physical (PHY)',
    heb: '💪 פִּיזִיּוּת וְכֹשֶׁר גּוּפָנִי (כֹּחַ בְּמַאֲבָק עַל הַכַּדּוּר)',
    wrong: ['👟 מְסִירוֹת קְצָרוֹת', '🎥 הִלּוּךְ חוֹזֵר', '🎮 בְּחִירַת שַׁלָּט'],
    hint: 'PHY הוא קיצור של Physical — כמה השחקן חזק פיזית ולא מתעייף!'
  },
  {
    screen: 'fut_card',
    key: 'OPEN PACK',
    eng: 'Open Pack',
    heb: '🎁 פְּתַח חֲבִילַת קְלָפִים חֲדָשָׁה!',
    wrong: ['💰 מְכֹר שַׂחְקָן', '▶️ הַמְשֵׁךְ בַּמִּשְׂחָק', '🚩 נִבְדָּל'],
    hint: 'בחנות של Ultimate Team לוחצים על OPEN PACK כדי לפתוח חבילת קלפים עם זיקוקים!'
  },
  {
    screen: 'fut_card',
    key: 'TRANSFER MARKET',
    eng: 'Transfer Market',
    heb: '💰 שׁוּק הַהַעֲבָרוֹת (קְנִיָּה וּמְכִירָה שֶׁל קְלָפֵי שַׂחְקָנִים בְּמַטְבְּעוֹת)',
    wrong: ['⚽ מִשְׂחַק יְדִידוּת', '🔄 חִלּוּף שַׂחְקָן', '⚙️ הַגְדָּרוֹת שַׁלָּט'],
    hint: 'ב-Transfer Market מחפשים וקונים קלפים חדשים לקבוצה שלך!'
  },
  {
    screen: 'fut_card',
    key: 'CHEMISTRY',
    eng: 'Chemistry',
    heb: '🧪 כִּימְיָה וְחִיבּוּר בֵּין שַׂחְקָנֵי הַהֶרְכֵּב (עַד 33/33)',
    wrong: ['🥅 בְּעִיטוֹת פֶּנְדָּלִים', '🎥 הִלּוּךְ חוֹזֵר', '🏳️ הֶפְסֵד טֶכְנִי'],
    hint: 'כששמים שחקנים מאותה ליגה או מדינה ב-FC 27, ה-Chemistry (כימיה) עולה והם משחקים טוב יותר!'
  },

  // --- SCREEN 4: ON THE PITCH & CONTROLLER HUD ---
  {
    screen: 'pitch_hud',
    key: 'SPRINT',
    eng: 'Sprint (R2)',
    heb: '🏃‍♂️💨 רִיצָה מְהִירָה (סְפְּרִינְט עִם כַּפְתּוֹר R2)',
    wrong: ['🦵 גְּלִיץ׳ / תִּיקוּל', '⏸️ עֲצִירַת הַמִּשְׂחָק', '🧤 הַצָּלַת שׁוֹעֵר'],
    hint: 'כשמחזיקים את כפתור Sprint (R2 בשלט), השחקן פורץ בריצה הכי מהירה שלו!'
  },
  {
    screen: 'pitch_hud',
    key: 'THROUGH BALL',
    eng: 'Through Ball (△)',
    heb: '📐⚽ מְסִירַת עֹמֶק חֲכָמָה לַשֶּׁטַח הַפָּנוּי (כַּפְתּוֹר מְשֻׁלָּשׁ △)',
    wrong: ['🚩 עֲבֵירַת נִבְדָּל', '🔄 חִלּוּף שַׂחְקָנִים', '🛒 חֲנוּת הַקְּלָפִים'],
    hint: 'לחיצה על משולש (△) ב-FC 27 שולחת Through Ball — מסירת עומק לשחקן שרץ קדימה!'
  },
  {
    screen: 'pitch_hud',
    key: 'SLIDE TACKLE',
    eng: 'Slide Tackle (▢)',
    heb: '🦵 גְּלִיץ׳ (תִּיקוּל גְּלִישָׁה עַל הַדֶּשֶׁא לַחֲטִיפַת הַכַּדּוּר)',
    wrong: ['🎯 בְּעִיטָה לַחִיבּוּרִים', '🎁 פְּתִיחַת חֲבִילָה', '👔 מַצַּב קַרְיֵירָה'],
    hint: 'Slide Tackle הוא גליץ׳ על הדשא כדי לחטוף את הכדור מהיריב!'
  },
  {
    screen: 'pitch_hud',
    key: 'OFFSIDE',
    eng: 'Offside',
    heb: '🚩 נִבְדָּל! (הַשַּׂחְקָן עָמַד מֵאֲחוֹרֵי קַו הַהֲגָנָה בִּזְמַן הַמְּסִירָה)',
    wrong: ['⚽ שַׁעַר נִצָּחוֹן!', '⏱️ תּוֹסֶפֶת זְמַן', '🏆 זְכִיָּה בַּגָּבִיעַ'],
    hint: 'כשהקוון מרים דגל ב-FC 27 וכתוב OFFSIDE — השריקה היא לנבדל!'
  },
  {
    screen: 'pitch_hud',
    key: 'EXTRA TIME',
    eng: 'Extra Time',
    heb: '⏱️ הַאֲרָכָה / תּוֹסֶפֶת זְמַן (כְּשֶׁיֵּשׁ תֵּיקוֹ בְּסִיּוּם 90 דַּקּוֹת)',
    wrong: ['🏳️ פְּרִישָׁה מֵהַמִּשְׂחָק', '📋 נִיהוּל הֶרְכֵּב', '💰 שׁוּק הַהַעֲבָרוֹת'],
    hint: 'אם המשחק נגמר בתיקו בגביע, עוברים ל-Extra Time — הארכה!'
  },
  {
    screen: 'pitch_hud',
    key: 'PENALTY SHOOTOUT',
    eng: 'Penalty Shootout',
    heb: '🥅 דּוּ-קְרַב בְּעִיטוֹת פֶּנְדָּלִים מַכְרִיעַ!',
    wrong: ['🏃‍♂️ רִיצָה מְהִירָה', '🧪 כִּימְיָה בַּהֶרְכֵּב', '⚙️ הַגְדָּרוֹת שֵׁמַע'],
    hint: 'Penalty Shootout הוא דו-קרב פנדלים מותח על הניצחון!'
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
          <div class="fc27-menu-tile ${hl('KICK OFF')}" data-fc27-key="KICK OFF" style="cursor:pointer;"><span>⚽ KICK OFF</span>${ptr('KICK OFF')}</div>
          <div class="fc27-menu-tile ${hl('ULTIMATE TEAM')}" data-fc27-key="ULTIMATE TEAM" style="cursor:pointer;"><span>🏆 ULTIMATE TEAM</span>${ptr('ULTIMATE TEAM')}</div>
          <div class="fc27-menu-tile ${hl('CAREER MODE')}" data-fc27-key="CAREER MODE" style="cursor:pointer;"><span>👔 CAREER MODE</span>${ptr('CAREER MODE')}</div>
          <div class="fc27-menu-tile ${hl('SETTINGS')}" data-fc27-key="SETTINGS" style="cursor:pointer;"><span>⚙️ SETTINGS</span>${ptr('SETTINGS')}</div>
        </div>
        <div class="fc27-preview-col">
          <div class="fc27-menu-tile ${hl('SELECT SIDE')}" data-fc27-key="SELECT SIDE" style="justify-content:center;margin-bottom:4px;cursor:pointer;">
            <span>🎮 SELECT SIDE</span>${ptr('SELECT SIDE')}
          </div>
          <div class="fc27-pitch-graphic">🦁 <strong>BTR</strong> ⚡ <strong>RMA</strong> 👑</div>
          <div class="fc27-menu-tile ${hl('PLAY MATCH')}" data-fc27-key="PLAY MATCH" style="justify-content:center;background:#059669;color:#fff;cursor:pointer;">
            <span>▶️ PLAY MATCH</span>${ptr('PLAY MATCH')}
          </div>
        </div>
      </div>
    `;
  } else if (item.screen === 'pause_menu') {
    bodyHtml = `
      <div class="fc27-split-screen">
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#00ff87;font-weight:900;margin-bottom:2px;">⏸️ PAUSE MENU — FC 27</div>
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
          <div class="fc27-scoreboard-mini">UCL FINAL • 90:00</div>
          <div class="fc27-pitch-graphic" style="padding:10px 4px;">
            🏃‍♂️💨 ⚽ 🥅🧤
          </div>
          <div class="fc27-menu-tile ${hl('OFFSIDE')}" data-fc27-key="OFFSIDE" style="margin-bottom:3px;cursor:pointer;"><span>🚩 OFFSIDE</span>${ptr('OFFSIDE')}</div>
          <div class="fc27-menu-tile ${hl('EXTRA TIME')}" data-fc27-key="EXTRA TIME" style="margin-bottom:3px;cursor:pointer;"><span>⏱️ EXTRA TIME</span>${ptr('EXTRA TIME')}</div>
          <div class="fc27-menu-tile ${hl('PENALTY SHOOTOUT')}" data-fc27-key="PENALTY SHOOTOUT" style="cursor:pointer;"><span>🥅 PENALTY SHOOTOUT</span>${ptr('PENALTY SHOOTOUT')}</div>
        </div>
        <div class="fc27-menu-col">
          <div style="font-size:0.68rem;color:#38bdf8;font-weight:900;margin-bottom:2px;">🎮 CONTROLLER ACTIONS</div>
          <div class="fc27-menu-tile ${hl('SPRINT')}" data-fc27-key="SPRINT" style="cursor:pointer;"><span><strong>R2</strong> SPRINT 🏃‍♂️</span>${ptr('SPRINT')}</div>
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
        <span>🔊 לחץ על "הקרא + אנגלית" לשמיעת המילה!</span>
      </div>
    </div>
  `;
}

function genEnglishFC27() {
  const item = FC27_VOCAB_BANK[randInt(0, FC27_VOCAB_BANK.length - 1)];
  const speechClean = item.eng.replace(/\([^)]*\)/g, '').trim();
  return {
    isEnglish: true,
    isMulti: false,
    instruction: `🎮 צִילוּם מָסָךְ מִתּוֹךְ <strong>FC 27</strong>: מָה אוֹמֵר הַכַּפְתּוֹר הַמְּסֻמָּן בְּיָרוֹק (<strong>${item.eng.toUpperCase()}</strong>)?`,
    ttsText: `עילי, הסתכל בצילום המסך של אף סי עשרים ושבע: מה הפירוש של`,
    englishSpeechWord: speechClean,
    stimulusHtml: renderFC27Screenshot(item),
    rtlStimulus: false,
    options: shuffle([item.heb, ...item.wrong]),
    correctAnswers: [item.heb],
    hint: item.hint
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

// ==================== LIA'S KINDERGARTEN & ENGLISH GENERATORS ====================

const LIA_GLAM_WORDS = [
  { eng: 'Pink', heb: '🩷 וָרוֹד (Pink)', emoji: '🩷💄', wrong: ['💙 כָּחוֹל (Blue)', '💛 צָהוֹב (Yellow)', '💚 יָרוֹק (Green)'], hint: 'Pink זה הצבע הוורוד של שפתון ונסיכות!' },
  { eng: 'Purple', heb: '💜 סָגוֹל (Purple)', emoji: '💜🦄', wrong: ['❤️ אָדוֹם (Red)', '🩷 וָרוֹד (Pink)', '🧡 כָּתוֹם (Orange)'], hint: 'Purple זה צבע סגול קסום של חד-קרן!' },
  { eng: 'Blue', heb: '💙 כָּחוֹל (Blue)', emoji: '💙🌺', wrong: ['🩷 וָרוֹד (Pink)', '💛 צָהוֹב (Yellow)', '💜 סָגוֹל (Purple)'], hint: 'Blue זה הצבע הכחול של סטיץ׳ החמוד!' },
  { eng: 'Red', heb: '❤️ אָדוֹם (Red)', emoji: '❤️🍓', wrong: ['💙 כָּחוֹל (Blue)', '💚 יָרוֹק (Green)', '🤍 לָבָן (White)'], hint: 'Red זה צבע אדום כמו לב ותות!' },
  { eng: 'Yellow', heb: '💛 צָהוֹב (Yellow)', emoji: '💛☀️', wrong: ['💜 סָגוֹל (Purple)', '💙 כָּחוֹל (Blue)', '🩷 וָרוֹד (Pink)'], hint: 'Yellow זה צהוב זורח כמו השמש!' },
  { eng: 'Gold', heb: '👑 זָהָב (Gold)', emoji: '👑✨', wrong: ['💙 כָּחוֹל (Blue)', '💚 יָרוֹק (Green)', '❤️ אָדוֹם (Red)'], hint: 'Gold זה צבע זהב נוצץ כמו כתר של מלכה!' },
  { eng: 'Crown', heb: '👑 כֶּתֶר (Crown)', emoji: '👑👸', wrong: ['👗 שִׂמְלָה (Dress)', '👠 נַעֲלַיִם (Shoes)', '👜 תִּיק (Bag)'], hint: 'Crown הוא כתר של נסיכה על הראש!' },
  { eng: 'Lipstick', heb: '💄 שְׂפָתוֹן / אֹדֶם (Lipstick)', emoji: '💄💋', wrong: ['👑 כֶּתֶר (Crown)', '🪞 מַרְאָה (Mirror)', '🎀 סֶרֶט (Bow)'], hint: 'Lipstick הוא שפתון ששמים על השפתיים כשמתאפרים!' },
  { eng: 'Dress', heb: '👗 שִׂמְלָה (Dress)', emoji: '👗✨', wrong: ['👑 כֶּתֶר (Crown)', '💄 שְׂפָתוֹן (Lipstick)', '💅 לָק (Nail Polish)'], hint: 'Dress היא שמלה חגיגית ומהממת!' },
  { eng: 'Mirror', heb: '🪞 מַרְאָה (Mirror)', emoji: '🪞✨', wrong: ['👑 כֶּתֶר (Crown)', '👗 שִׂמְלָה (Dress)', '🌈 קֶשֶׁת (Rainbow)'], hint: 'Mirror היא מראה שמסתכלים בה כשמתאפרים!' },
  { eng: 'Rainbow', heb: '🌈 קֶשֶׁת בֶּעָנָן (Rainbow)', emoji: '🌈🦄', wrong: ['☀️ שֶׁמֶשׁ (Sun)', '👑 כֶּתֶר (Crown)', '💄 שְׂפָתוֹן (Lipstick)'], hint: 'Rainbow היא קשת צבעונית בשמיים!' },
  { eng: 'Princess', heb: '👸 נְסִיכָה (Princess)', emoji: '👸👑', wrong: ['🐶 כֶּלֶב (Dog)', '🍎 תַּפּוּחַ (Apple)', '🚗 מְכוֹנִית (Car)'], hint: 'Princess באנגלית זו נסיכה!' }
];

const LIA_STITCH_ANIMALS = [
  { eng: 'Unicorn', heb: '🦄 חַד-קֶרֶן (Unicorn)', emoji: '🦄🌈', wrong: ['🐶 כֶּלֶב (Dog)', '🐱 חָתוּל (Cat)', '🐟 דָּג (Fish)'], hint: 'Unicorn הוא חד-קרן קסום עם קרן נוצצת!' },
  { eng: 'Dog', heb: '🐶 כֶּלֶב (Dog)', emoji: '🐶🦴', wrong: ['🐱 חָתוּל (Cat)', '🦋 פַּרְפַּר (Butterfly)', '🐰 אַרְנָב (Bunny)'], hint: 'Dog הוא כלב חמוד שעושה הב-הב!' },
  { eng: 'Cat', heb: '🐱 חָתוּל (Cat)', emoji: '🐱🐾', wrong: ['🐶 כֶּלֶב (Dog)', '🦄 חַד-קֶרֶן (Unicorn)', '🦁 אַרְיֵה (Lion)'], hint: 'Cat הוא חתול מתוק שעושה מיאו!' },
  { eng: 'Butterfly', heb: '🦋 פַּרְפַּר (Butterfly)', emoji: '🦋🌸', wrong: ['🐟 דָּג (Fish)', '🐶 כֶּלֶב (Dog)', '🐻 דֻּבִּי (Bear)'], hint: 'Butterfly הוא פרפר צבעוני שעף בין פרחים!' },
  { eng: 'Bunny', heb: '🐰 אַרְנָב (Bunny)', emoji: '🐰🥕', wrong: ['🐱 חָתוּל (Cat)', '🐟 דָּג (Fish)', '🦁 אַרְיֵה (Lion)'], hint: 'Bunny הוא ארנבון מתוק שאוהב גזר!' },
  { eng: 'Family', heb: '👨‍👩‍👧‍👦 מִשְׁפָּחָה (Family / Ohana)', emoji: '💙🌺👨‍👩‍👧‍👦', wrong: ['🍎 תַּפּוּחַ (Apple)', '👑 כֶּתֶר (Crown)', '🌈 קֶשֶׁת (Rainbow)'], hint: 'כמו שסטיץ׳ אומר: Ohana means Family — משפחה!' },
  { eng: 'Happy', heb: '😊 שְׂמֵחָה (Happy)', emoji: '😊🎉', wrong: ['😢 עֲצוּבָה (Sad)', '😴 עֲיֵפָה (Tired)', '😠 כּוֹעֶסֶת (Angry)'], hint: 'Happy זה שמחה ומחייכת!' },
  { eng: 'Star', heb: '⭐ כּוֹכָב (Star)', emoji: '⭐✨', wrong: ['🌸 פֶּרַח (Flower)', '🍎 תַּפּוּחַ (Apple)', '🐶 כֶּלֶב (Dog)'], hint: 'Star הוא כוכב מנצנץ בשמיים (ומדבקת כוכב של הגננת ליה)!' },
  { eng: 'Flower', heb: '🌸 פֶּרַח (Flower)', emoji: '🌸🌺', wrong: ['⭐ כּוֹכָב (Star)', '🐱 חָתוּל (Cat)', '👑 כֶּתֶר (Crown)'], hint: 'Flower הוא פרח ריחני וצבעוני!' },
  { eng: 'Heart', heb: '💖 לֵב (Heart)', emoji: '💖✨', wrong: ['⭐ כּוֹכָב (Star)', '🌈 קֶשֶׁת (Rainbow)', '☀️ שֶׁמֶשׁ (Sun)'], hint: 'Heart הוא לב של אהבה!' }
];

const LIA_NUMBERS_FOOD = [
  { eng: 'One', heb: '1️⃣ אַחַת (One)', emoji: '🦄 (1)', wrong: ['2️⃣ שְׁתַּיִם (Two)', '3️⃣ שָׁלוֹשׁ (Three)', '5️⃣ חָמֵשׁ (Five)'], hint: 'One זה המספר 1!' },
  { eng: 'Two', heb: '2️⃣ שְׁתַּיִם (Two)', emoji: '💄💄 (2)', wrong: ['1️⃣ אַחַת (One)', '4️⃣ אַרְבַּע (Four)', '6️⃣ שֵׁשׁ (Six)'], hint: 'Two זה המספר 2 (One, Two)!' },
  { eng: 'Three', heb: '3️⃣ שָׁלוֹשׁ (Three)', emoji: '👑👑👑 (3)', wrong: ['1️⃣ אַחַת (One)', '2️⃣ שְׁתַּיִם (Two)', '5️⃣ חָמֵשׁ (Five)'], hint: 'Three זה המספר 3 (One, Two, Three)!' },
  { eng: 'Four', heb: '4️⃣ אַרְבַּע (Four)', emoji: '🦋🦋🦋🦋 (4)', wrong: ['2️⃣ שְׁתַּיִם (Two)', '3️⃣ שָׁלוֹשׁ (Three)', '7️⃣ שֶׁבַע (Seven)'], hint: 'Four זה המספר 4!' },
  { eng: 'Five', heb: '5️⃣ חָמֵשׁ (Five)', emoji: '⭐⭐⭐⭐⭐ (5)', wrong: ['2️⃣ שְׁתַּיִם (Two)', '3️⃣ שָׁלוֹשׁ (Three)', '8️⃣ שְׁמוֹנֶה (Eight)'], hint: 'Five זה 5 אצבעות ביד (High Five ✋)!' },
  { eng: 'Ten', heb: '🔟 עֶשֶׂר (Ten)', emoji: '🙌 (10)', wrong: ['2️⃣ שְׁתַּיִם (Two)', '4️⃣ אַרְבַּע (Four)', '6️⃣ שֵׁשׁ (Six)'], hint: 'Ten זה 10 אצבעות בשתי הידיים!' },
  { eng: 'Ice Cream', heb: '🍦 גְּלִידָה (Ice Cream)', emoji: '🍦🍨', wrong: ['🍎 תַּפּוּחַ (Apple)', '🍕 פִּיצָה (Pizza)', '🥛 חָלָב (Milk)'], hint: 'Ice Cream היא גלידה מתוקה וצוננת!' },
  { eng: 'Cake', heb: '🎂 עוּגָה (Cake)', emoji: '🎂🍓', wrong: ['🍌 בָּנָנָה (Banana)', '💧 מַיִם (Water)', '🍎 תַּפּוּחַ (Apple)'], hint: 'Cake היא עוגת יום הולדת טעימה!' },
  { eng: 'Apple', heb: '🍎 תַּפּוּחַ (Apple)', emoji: '🍎✨', wrong: ['🍌 בָּנָנָה (Banana)', '🍦 גְּלִידָה (Ice Cream)', '🎂 עוּגָה (Cake)'], hint: 'Apple הוא תפוח עץ מתוק!' },
  { eng: 'Banana', heb: '🍌 בָּנָנָה (Banana)', emoji: '🍌💛', wrong: ['🍎 תַּפּוּחַ (Apple)', '🎂 עוּגָה (Cake)', '🍦 גְּלִידָה (Ice Cream)'], hint: 'Banana היא בננה צהובה!' }
];

const LIA_MAGIC_WORDS = [
  { eng: 'Hello', heb: '👋 שָׁלוֹם! (Hello)', emoji: '👋😊', wrong: ['🌙 לַיְלָה טוֹב (Good Night)', '🙏 תּוֹדָה (Thank You)', '❌ לֹא (No)'], hint: 'כשנפגשים בגן אומרים Hello — שלום!' },
  { eng: 'Good Morning', heb: '☀️ בּוֹקֶר טוֹב! (Good Morning)', emoji: '☀️🌈', wrong: ['🌙 לַיְלָה טוֹב (Good Night)', '👋 לְהִתְרָאוֹת (Goodbye)', '😢 עָצוּב (Sad)'], hint: 'בבוקר כשהשמש זורחת בגן אומרים Good Morning — בוקר טוב!' },
  { eng: 'Good Night', heb: '🌙 לַיְלָה טוֹב! (Good Night)', emoji: '🌙⭐', wrong: ['☀️ בּוֹקֶר טוֹב (Good Morning)', '🍦 גְּלִידָה (Ice Cream)', '🎂 עוּגָה (Cake)'], hint: 'לפני שהולכים לישון אומרים Good Night — לילה טוב!' },
  { eng: 'Thank You', heb: '🙏 תּוֹדָה רַבָּה! (Thank You)', emoji: '🙏💖', wrong: ['👋 שָׁלוֹם (Hello)', '🌙 לַיְלָה טוֹב (Good Night)', '❌ לֹא (No)'], hint: 'כשמקבלים מתנה או מחמאה אומרים Thank You — תודה!' },
  { eng: 'Please', heb: '🥰 בְּבַקָּשָׁה (Please)', emoji: '🥰✨', wrong: ['👋 לְהִתְרָאוֹת (Goodbye)', '🌙 לַיְלָה טוֹב (Good Night)', '🍎 תַּפּוּחַ (Apple)'], hint: 'מילת הקסם כשמבקשים משהו יפה היא Please — בבקשה!' },
  { eng: 'I Love You', heb: '💖 אֲנִי אוֹהֶבֶת אוֹתְךָ! (I Love You)', emoji: '💖🫂', wrong: ['☀️ בּוֹקֶר טוֹב (Good Morning)', '👋 לְהִתְרָאוֹת (Goodbye)', '🍦 גְּלִידָה (Ice Cream)'], hint: 'I Love You זה אני אוהבת אותך!' },
  { eng: 'Teacher', heb: '👩‍🏫 גַּנֶּנֶת / מוֹרָה (Teacher)', emoji: '👩‍🏫⭐', wrong: ['🐶 כֶּלֶב (Dog)', '🍦 גְּלִידָה (Ice Cream)', '🚗 מְכוֹנִית (Car)'], hint: 'Teacher היא גננת או מורה — בדיוק כמו הגננת ליה!' }
];

function buildLiaEnglishQuestion(bank, categoryTitle) {
  const item = bank[randInt(0, bank.length - 1)];
  return {
    isEnglish: true,
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    instruction: `${categoryTitle}: הַקְשִׁיבִי לַמִּילָה בְּאַנְגְּלִית וּבַחֲרִי אֶת הַתְּמוּנָה הַמַּתְאִימָה!`,
    ttsText: `ליה מתוקה, מה הפירוש של המילה:`,
    englishSpeechWord: item.eng,
    stimulusHtml: `<div style="font-size:3.2rem;line-height:1.2;margin-bottom:6px;">${item.emoji}</div><div style="font-size:2.1rem;font-weight:900;color:#db2777;letter-spacing:1px;">${item.eng.toUpperCase()}</div>`,
    rtlStimulus: false,
    options: shuffle([item.heb, ...item.wrong]),
    correctAnswers: [item.heb],
    hint: item.hint
  };
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
    { word: 'מַרְאָה', emoji: '🪞✨', letter: 'מ (מֵ"ם)', wrong: ['נ (נוּ"ן)', 'א (אָלֶ"ף)', 'ל (לָמֶ"ד)'], hint: 'מַרְאָה מתחילה בצליל מַ — האות מ׳!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
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
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>גָּדוֹל 🐘</strong>?', tts: 'מה ההפך מן המילה גדול?', emoji: '🐘 ↔️ 🐭', ans: '🐭 קָטָן', wrong: ['☀️ חַם', '😊 שָׂמֵחַ', '🏃 מָהִיר'], hint: 'הפיל הוא גדול, והעכבר הוא קטן!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>יוֹם ☀️</strong>?', tts: 'מה ההפך מן המילה יום?', emoji: '☀️ ↔️ 🌙', ans: '🌙 לַיְלָה', wrong: ['🌈 קֶשֶׁת', '🍦 גְּלִידָה', '👑 כֶּתֶר'], hint: 'ביום זורחת השמש, וההפך מיום הוא לילה!' },
    { type: 'opp', q: 'מָה הַהֵפֶךְ מִן הַמִּילָה <strong>חַם 🔥</strong> (כְּמוֹ מָרָק)?', tts: 'מה ההפך מן המילה חם?', emoji: '🔥 ↔️ 🍦', ans: '🍦 קַר', wrong: ['🎈 גָּבוֹהַּ', '🐢 אִטִּי', '🩷 וָרוֹד'], hint: 'ההפך מחם הוא קר (כמו גלידה קרה)!' }
  ];
  const item = items[randInt(0, items.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
    instruction: '🎵 חֲרוּזִים וַהֲפָכִים לְגַן חוֹבָה:',
    ttsText: `ליה מתוקה, ${item.tts}`,
    stimulusHtml: `<div style="font-size:2.8rem;margin-bottom:6px;">${item.emoji}</div><div style="font-size:1.5rem;font-weight:800;color:#1e293b;">${item.q}</div>`,
    rtlStimulus: true,
    options: shuffle([item.ans, ...item.wrong]),
    correctAnswers: [item.ans],
    hint: item.hint
  };
}

function genLiaMathCounting() {
  const mode = randInt(1, 2);
  const icons = [
    { icon: '🦄', name: 'חַדֵּי-קֶרֶן' },
    { icon: '💄', name: 'שְׂפָתוֹנִים' },
    { icon: '👑', name: 'כְּתָרִים' },
    { icon: '🌺', name: 'פְּרָחִים שֶׁל סְטִיץ׳' },
    { icon: '⭐', name: 'כּוֹכָבִים' },
    { icon: '🦋', name: 'פַּרְפָּרִים' }
  ];
  const picked = icons[randInt(0, icons.length - 1)];

  if (mode === 1) {
    const count = randInt(2, 9);
    const visual = Array(count).fill(picked.icon).join(' ');
    return {
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      instruction: `🦄 סְפִירָה לְגַן חוֹבָה: כַּמָּה ${picked.name} יֵשׁ בַּתְּמוּנָה?`,
      ttsText: `ליה, ספרי כמה ${picked.name} יש בתמונה?`,
      stimulusHtml: `<div style="font-size:2.6rem;letter-spacing:6px;line-height:1.4;">${visual}</div>`,
      rtlStimulus: false,
      options: makeNumericOptions(count, 4, 1),
      correctAnswers: [String(count)],
      hint: `בואי נספור יחד באצבע: יש כאן ${count} ${picked.name}!`
    };
  } else {
    const a = randInt(1, 4);
    const b = randInt(1, 4);
    const sum = a + b;
    const visA = Array(a).fill(picked.icon).join('');
    const visB = Array(b).fill(picked.icon).join('');
    return {
      isLia: true,
      autoSpeak: true,
      isMulti: false,
      instruction: `✨ חִיבּוּר בִּתְמוּנוֹת: כַּמָּה ${picked.name} יֵשׁ בְּיַחַד?`,
      ttsText: `לליה יש ${a} ${picked.name}, ועוד ${b} ${picked.name}. כמה יש ביחד?`,
      stimulusHtml: `<div style="font-size:2.3rem;font-weight:800;">${visA} <span style="color:#db2777;">+</span> ${visB} <span style="color:#db2777;">= ?</span></div>`,
      rtlStimulus: false,
      options: makeNumericOptions(sum, 4, 1),
      correctAnswers: [String(sum)],
      hint: `ספרי את כולם יחד: ${a} ועוד ${b} שווה ${sum}!`
    };
  }
}

function genLiaLogicPatterns() {
  const patterns = [
    { seq: '🦄 , 💙 , 🦄 , 💙 , 🦄 , ', ans: '💙 סְטִיץ׳ כָּחוֹל', wrong: ['🦄 חַד-קֶרֶן', '🍎 תַּפּוּחַ', '🚗 מְכוֹנִית'], tts: 'חד קרן, לב כחול, חד קרן, לב כחול, חד קרן. מי בא עכשיו בתור?', hint: 'הסדרה מתחלפת: חד-קרן ואז לב כחול של סטיץ׳!' },
    { seq: '💄 , 👑 , 💄 , 👑 , 💄 , ', ans: '👑 כֶּתֶר', wrong: ['💄 שְׂפָתוֹן', '🐶 כֶּלֶב', '🍌 בָּנָנָה'], tts: 'שפתון, כתר, שפתון, כתר, שפתון. מה בא עכשיו בתור?', hint: 'אחרי כל שפתון מגיע כתר נוצץ!' },
    { seq: '🌸 , 🌸 , 🦋 , 🌸 , 🌸 , ', ans: '🦋 פַּרְפַּר', wrong: ['🌸 פֶּרַח', '🍦 גְּלִידָה', '🐱 חָתוּל'], tts: 'שני פרחים ופרפר, שני פרחים ו... מה בא עכשיו?', hint: 'אחרי שני פרחים ורודים מגיע פרפר!' },
    { seq: '⭐ , 🌙 , ⭐ , 🌙 , ⭐ , ', ans: '🌙 יָרֵחַ', wrong: ['⭐ כּוֹכָב', '☀️ שֶׁמֶשׁ', '👗 שִׂמְלָה'], tts: 'כוכב, ירח, כוכב, ירח, כוכב. מי הבא בתור?', hint: 'אחרי הכוכב מגיע הירח!' }
  ];
  const item = patterns[randInt(0, patterns.length - 1)];
  return {
    isLia: true,
    autoSpeak: true,
    isMulti: false,
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
      'lia_english_colors_glam', 'lia_english_stitch_animals', 'lia_english_numbers_food',
      'lia_english_magic_words', 'lia_heb_letters', 'lia_heb_rhymes', 'lia_math_counting', 'lia_logic_patterns'
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
    case 'english_fc27':      q = genEnglishFC27(); break;
    case 'english_abc':       q = genEnglishABC(); break;
    case 'english_words':     q = genEnglishWords(); break;
    case 'english_soccer':    q = genEnglishSoccer(); break;
    case 'english_starter':   q = genEnglishStarter(); break;
    case 'logic_series':      q = genLogicSeries(diff); break;
    // Lia's Kindergarten & English Topics:
    case 'lia_english_colors_glam':    q = buildLiaEnglishQuestion(LIA_GLAM_WORDS, '💄 צְבָעִים וְאִיפּוּר בְּאַנְגְּלִית'); break;
    case 'lia_english_stitch_animals': q = buildLiaEnglishQuestion(LIA_STITCH_ANIMALS, '💙 סְטִיץ׳, חַד-קֶרֶן וְחַיּוֹת בְּאַנְגְּלִית'); break;
    case 'lia_english_numbers_food':   q = buildLiaEnglishQuestion(LIA_NUMBERS_FOOD, '🍦 מִסְפָּרִים וּפִינוּקִים בְּאַנְגְּלִית'); break;
    case 'lia_english_magic_words':    q = buildLiaEnglishQuestion(LIA_MAGIC_WORDS, '🌈 מִילּוֹת קֶסֶם בְּאַנְגְּלִית'); break;
    case 'lia_heb_letters':            q = genLiaHebLetters(); break;
    case 'lia_heb_rhymes':             q = genLiaHebRhymes(); break;
    case 'lia_math_counting':          q = genLiaMathCounting(); break;
    case 'lia_logic_patterns':         q = genLiaLogicPatterns(); break;
    default:                  q = genAddSub(diff); break;
  }
  q.topicId = topicId;
  return q;
}
