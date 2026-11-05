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
    icon: '👨‍👩‍👦',
    title: 'המשימות של אבא ואמא',
    desc: 'תרגילים בחשבון ומילים להכתבה בשפה שהוספתם במיוחד לעילאי באזור ההורים!'
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
  const pick = randInt(1, 3);
  if (pick === 1) return genEnglishABC();
  if (pick === 2) return genEnglishWords();
  return genEnglishSoccer();
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

function generateQuestionForTopic(topicId, diff = 'medium', customQuestions = []) {
  if (topicId === 'daily_mix') {
    // Focused primarily on Math & Hebrew as requested!
    const pool = [
      'math_inequalities', 'math_add_sub', 'math_missing', 'math_place_value',
      'math_mult_intro', 'math_word_problems', 'hebrew_opposites', 'hebrew_grammar', 'hebrew_reading'
    ];
    topicId = pool[randInt(0, pool.length - 1)];
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
    case 'english_abc':       q = genEnglishABC(); break;
    case 'english_words':     q = genEnglishWords(); break;
    case 'english_soccer':    q = genEnglishSoccer(); break;
    case 'english_starter':   q = genEnglishStarter(); break;
    case 'logic_series':      q = genLogicSeries(diff); break;
    default:                  q = genAddSub(diff); break;
  }
  q.topicId = topicId;
  return q;
}
