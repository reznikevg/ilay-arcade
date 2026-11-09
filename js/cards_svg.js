// ==================== SUPERGOL + WORLD-CLASS FUT CARDS, AVATAR SVGs & LIA COLORING/DRESS-UP ENGINE (v5.0) ====================

const FUT_CARD_META = {
  s1: {
    num: '#001', series: 'beitar', ovr: 96, pos: 'CREST', tier: 'beitar', club: 'סופרגול • בית"ר ירושלים',
    engName: 'BEITAR ROARING LION',
    storyHeb: 'סמל האריה השואג של בית"ר ירושלים משנת 1936 — גאוות הבירה בצהוב-שחור!',
    statLabels: [['ATK', 96], ['DEF', 95], ['SPD', 94], ['SKL', 96], ['PAS', 95], ['OVR', 96]]
  },
  s2: {
    num: '#002', series: 'real', ovr: 98, pos: 'CREST', tier: 'real', club: 'ליגת האלופות • ריאל מדריד',
    engName: 'ROYAL MADRID CROWN',
    storyHeb: 'הכתר המלכותי של ריאל מדריד — אלופת אירופה ומלכת ליגת האלופות!',
    statLabels: [['ATK', 98], ['DEF', 96], ['SPD', 97], ['SKL', 98], ['PAS', 98], ['OVR', 98]]
  },
  s3: {
    num: '#003', series: 'beitar', ovr: 95, pos: 'STAD', tier: 'beitar', club: 'סופרגול • אצטדיון טדי',
    engName: 'TEDDY STADIUM JERUSALEM',
    storyHeb: 'אצטדיון טדי בירושלים — 31,000 אוהדים שואגים בצהוב-שחור מתחת לזרקורים!',
    statLabels: [['ATM', 99], ['31K', 95], ['LED', 95], ['PIT', 96], ['ULT', 99], ['OVR', 95]]
  },
  s4: {
    num: '#004', series: 'real', ovr: 98, pos: 'STAD', tier: 'real', club: 'ליגת האלופות • ברנבאו',
    engName: 'SANTIAGO BERNABÉU 360°',
    storyHeb: 'הסנטיאגו ברנבאו החדש במדריד עם גג נפתח ומסך 360 מעלות מדהים!',
    statLabels: [['ATM', 99], ['85K', 99], ['360', 98], ['PIT', 98], ['UCL', 99], ['OVR', 98]]
  },
  s5: {
    num: '#005', series: 'real', ovr: 98, pos: 'ST', tier: 'toty', club: 'ריאל מדריד • #9',
    engName: 'KYLIAN MBAPPÉ #9',
    storyHeb: 'קיליאן אמבפה מספר 9 של ריאל מדריד — החלוץ המהיר בעולם עם ספרינט סילון!',
    statLabels: [['PAC', 99], ['SHO', 97], ['PAS', 91], ['DRI', 98], ['DEF', 49], ['PHY', 88]]
  },
  s6: {
    num: '#006', series: 'beitar', ovr: 95, pos: 'CAM', tier: 'beitar', club: 'סופרגול • קפטן בית"ר #7',
    engName: 'YARDEN SHUA #7',
    storyHeb: 'ירדן שועה מספר 7 של בית"ר ירושלים — מלך הבישולים והבעיטות החופשיות של ליגת העל!',
    statLabels: [['PAC', 92], ['SHO', 94], ['PAS', 98], ['DRI', 96], ['DEF', 62], ['PHY', 86]]
  },
  s7: {
    num: '#007', series: 'real', ovr: 97, pos: 'LW', tier: 'toty', club: 'ריאל מדריד • #7',
    engName: 'VINÍCIUS JR. #7',
    storyHeb: 'ויניסיוס ג׳וניור מספר 7 — אמן הכדרור הברזילאי שכובש בכל גמר ליגת האלופות!',
    statLabels: [['PAC', 99], ['SHO', 95], ['PAS', 92], ['DRI', 99], ['DEF', 45], ['PHY', 84]]
  },
  s8: {
    num: '#008', series: 'real', ovr: 97, pos: 'CAM', tier: 'toty', club: 'ריאל מדריד • #5',
    engName: 'JUDE BELLINGHAM #5',
    storyHeb: 'ג׳וד בלינגהאם מספר 5 — כוכב העל של מדריד עם חגיגת הידיים הפתוחות המפורסמת!',
    statLabels: [['PAC', 91], ['SHO', 96], ['PAS', 95], ['DRI', 96], ['DEF', 88], ['PHY', 95]]
  },
  s9: {
    num: '#009', series: 'beitar', ovr: 96, pos: 'CUP', tier: 'beitar', club: 'סופרגול • גביע המדינה',
    engName: 'BEITAR STATE CUP',
    storyHeb: 'גביע המדינה המוזהב של בית"ר ירושלים עטוף בסרטים צהובים-שחורים!',
    statLabels: [['GLD', 97], ['WIN', 96], ['ULT', 99], ['JER', 98], ['HIS', 95], ['OVR', 96]]
  },
  s10: {
    num: '#010', series: 'real', ovr: 99, pos: 'UCL', tier: 'ucl', club: 'UEFA CHAMPIONS LEAGUE #15',
    engName: 'LA DECIMOQUINTA 15',
    storyHeb: 'גביע ליגת האלופות ה-15 של ריאל מדריד — גביע הכסף הרשמי עם ה"אוזניים הגדולות"!',
    statLabels: [['UCL', 99], ['15X', 99], ['EUR', 99], ['FIN', 99], ['LEG', 99], ['OVR', 99]]
  },
  s11: {
    num: '#011', series: 'real', ovr: 96, pos: 'GK', tier: 'real', club: 'ריאל מדריד • שוער #1',
    engName: 'THIBAUT COURTOIS #1',
    storyHeb: 'טיבו קורטואה השוער הענק של ריאל מדריד — החומה שעוצרת כל כדור בחיבורים!',
    statLabels: [['DIV', 96], ['HAN', 97], ['KIC', 91], ['REF', 98], ['SPD', 68], ['POS', 97]]
  },
  s12: {
    num: '#012', series: 'beitar', ovr: 94, pos: 'FAN', tier: 'beitar', club: 'סופרגול • יציע מזרחי טדי',
    engName: 'BEITAR YELLOW-BLACK SCARF',
    storyHeb: 'הצעיף הצהוב-שחור האמיתי של אוהדי בית"ר ירושלים מונף בגאווה ביציעי טדי!',
    statLabels: [['💛', 99], ['🖤', 99], ['1936', 96], ['SONG', 98], ['TED', 97], ['OVR', 94]]
  },
  s13: {
    num: '#013', series: 'real', ovr: 95, pos: 'CM', tier: 'real', club: 'ריאל מדריד • #8',
    engName: 'FEDE VALVERDE #8',
    storyHeb: 'פדה ואלוורדה מספר 8 — בעיטת הטיל החזקה ביותר באירופה במהירות 128 קמ"ש!',
    statLabels: [['PAC', 95], ['SHO', 97], ['PAS', 93], ['DRI', 91], ['DEF', 92], ['PHY', 96]]
  },
  s14: {
    num: '#014', series: 'beitar', ovr: 96, pos: 'ICON', tier: 'beitar', club: 'סופרגול זהב • בית"ר',
    engName: 'GOLDEN MENORAH CREST',
    storyHeb: 'מנורת הזהב בעלת שבעת הקנים — הסמל ההיסטורי המפואר של בית"ר ירושלים!',
    statLabels: [['1936', 99], ['GLD', 98], ['JER', 99], ['PRD', 99], ['🦁', 97], ['OVR', 96]]
  },
  s15: {
    num: '#015', series: 'real', ovr: 96, pos: 'CM', tier: 'real', club: 'ריאל מדריד • #10',
    engName: 'LUKA MODRIĆ #10',
    storyHeb: 'לוקה מודריץ׳ הקוסם הקרואטי מספר 10 — זוכה כדור הזהב ואלוף המסירות החכמות!',
    statLabels: [['PAC', 86], ['SHO', 91], ['PAS', 99], ['DRI', 97], ['DEF', 85], ['PHY', 82]]
  },
  s16: {
    num: '#016', series: 'world', ovr: 99, pos: 'AWD', tier: 'toty', club: 'עולמי • שחקן השנה בעולם',
    engName: 'BALLON D\'OR TROPHY',
    storyHeb: 'גביע כדור הזהב היוקרתי בעולם — מוענק לשחקן הכדורגל הטוב ביותר על כדור הארץ!',
    statLabels: [['GLD', 99], ['STAR', 99], ['GOAT', 99], ['SKL', 99], ['WIN', 99], ['OVR', 99]]
  },
  s17: {
    num: '#017', series: 'world', ovr: 97, pos: 'BOOT', tier: 'toty', club: 'עולמי • מלך השערים',
    engName: 'EUROPEAN GOLDEN BOOT',
    storyHeb: 'נעל הזהב האירופית — הפרס הנוצץ לחלוץ שהבקיע הכי הרבה שערים בעונה!',
    statLabels: [['SHO', 99], ['FIN', 99], ['VOL', 97], ['PEN', 98], ['PWR', 98], ['OVR', 97]]
  },
  s18: {
    num: '#018', series: 'beitar', ovr: 94, pos: 'CAM', tier: 'beitar', club: 'סופרגול • בית"ר ירושלים #21',
    engName: 'ADI YONA #21 WONDERKID',
    storyHeb: 'עדי יונה מספר 21 של בית"ר ירושלים — הכישרון הצעיר שגדל בירושלים וכובש שערים מרהיבים!',
    statLabels: [['PAC', 91], ['SHO', 92], ['PAS', 94], ['DRI', 95], ['DEF', 70], ['PHY', 84]]
  },
  s19: {
    num: '#019', series: 'world', ovr: 99, pos: 'RW', tier: 'toty', club: 'אגדת על עולמית • #10',
    engName: 'LEO MESSI #10 GOAT',
    storyHeb: 'ליאו מסי מספר 10 — אלוף העולם עם ארגנטינה ושיאן הזכיות בכדור הזהב!',
    statLabels: [['PAC', 93], ['SHO', 98], ['PAS', 99], ['DRI', 99], ['DEF', 45], ['PHY', 85]]
  },
  s20: {
    num: '#020', series: 'world', ovr: 99, pos: 'TOTY', tier: 'toty', club: 'קפטן העל • בית"ר וריאל #10',
    engName: 'ILAY SUPERSTAR #10',
    storyHeb: 'קלף האגדה המוזהב של עילי מספר 10 — קפטן האלופים עם דירוג 99 מושלם בכל היכולות!',
    statLabels: [['PAC', 99], ['SHO', 99], ['PAS', 99], ['DRI', 99], ['DEF', 99], ['PHY', 99]]
  },
  s21: {
    num: '#021', series: 'world', ovr: 99, pos: 'ST', tier: 'ucl', club: 'אגדת ליגת האלופות • #7',
    engName: 'CRISTIANO RONALDO CR7',
    storyHeb: 'כריסטיאנו רונאלדו CR7 — מלך השערים של ליגת האלופות בכל הזמנים ושאגת ה-SIUUU!',
    statLabels: [['PAC', 95], ['SHO', 99], ['PAS', 90], ['DRI', 96], ['DEF', 50], ['PHY', 95]]
  },
  s22: {
    num: '#022', series: 'world', ovr: 96, pos: 'RW', tier: 'ucl', club: 'כוכב העתיד העולמי • #19',
    engName: 'LAMINE YAMAL #19',
    storyHeb: 'לאמין ימאל מספר 19 — ילד הפלא של הכדורגל העולמי ואלוף אירופה!',
    statLabels: [['PAC', 97], ['SHO', 92], ['PAS', 95], ['DRI', 98], ['DEF', 48], ['PHY', 79]]
  },
  s23: {
    num: '#023', series: 'world', ovr: 98, pos: 'ST', tier: 'ucl', club: 'מכונת השערים • #9',
    engName: 'ERLING HAALAND #9',
    storyHeb: 'ארלינג האלנד מספר 9 — חלוץ העוצמה הנורווגי שמבקיע שלושערים בליגת האלופות!',
    statLabels: [['PAC', 96], ['SHO', 99], ['PAS', 84], ['DRI', 90], ['DEF', 55], ['PHY', 99]]
  },
  s24: {
    num: '#024', series: 'beitar', ovr: 94, pos: 'GK', tier: 'beitar', club: 'סופרגול • שוער בית"ר #55',
    engName: 'MIGUEL SILVA #55',
    storyHeb: 'מיגל סילבה שוער בית"ר ירושלים — עוצר פנדלים אדיר ואהוב האוהדים בטדי!',
    statLabels: [['DIV', 95], ['HAN', 94], ['KIC', 90], ['REF', 96], ['SPD', 65], ['POS', 94]]
  }
};

function getCardCustomSVG(cardId) {
  switch (cardId) {
    // s1: Beitar Jerusalem Roaring Golden Lion Shield
    case 's1':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="bGold1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#facc15"/>
            <stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
        </defs>
        <path d="M60 8 L104 24 V58 C104 86 84 104 60 114 C36 104 16 86 16 58 V24 Z" fill="#090d16" stroke="url(#bGold1)" stroke-width="5"/>
        <path d="M32 21 H46 V104 L32 94 Z M74 21 H88 V94 L74 104 Z" fill="#facc15" opacity="0.22"/>
        <path d="M42 32 L48 22 L60 30 L72 22 L78 32 Z" fill="url(#bGold1)"/>
        <circle cx="60" cy="58" r="24" fill="url(#bGold1)"/>
        <path d="M44 50 Q60 36 76 50 Q84 62 72 76 Q60 84 48 76 Q36 62 44 50 Z" fill="#18181b"/>
        <circle cx="52" cy="54" r="3" fill="#facc15"/>
        <circle cx="68" cy="54" r="3" fill="#facc15"/>
        <path d="M55 62 L60 67 L65 62 Z" fill="#facc15"/>
        <path d="M50 70 Q60 76 70 70" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="28" y="88" width="64" height="14" rx="7" fill="url(#bGold1)"/>
        <text x="60" y="98" text-anchor="middle" font-size="8.5" font-weight="900" fill="#090d16">BEITAR 1936</text>
      </svg>`;

    // s2: Real Madrid Royal Crown & Crest
    case 's2':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="rGold2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="50%" stop-color="#facc15"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </linearGradient>
        </defs>
        <path d="M34 36 L28 18 L45 26 L60 12 L75 26 L92 18 L86 36 Z" fill="url(#rGold2)" stroke="#854d0e" stroke-width="2"/>
        <circle cx="60" cy="8" r="3.5" fill="#facc15"/>
        <circle cx="45" cy="21" r="2.5" fill="#ef4444"/>
        <circle cx="60" cy="19" r="3" fill="#2563eb"/>
        <circle cx="75" cy="21" r="2.5" fill="#ef4444"/>
        <rect x="34" y="35" width="52" height="6" rx="3" fill="#dc2626" stroke="#facc15" stroke-width="1.5"/>
        <circle cx="60" cy="72" r="34" fill="#ffffff" stroke="url(#rGold2)" stroke-width="6"/>
        <path d="M36 50 L88 90 L82 97 L30 57 Z" fill="#1d4ed8"/>
        <text x="60" y="81" text-anchor="middle" font-size="25" font-weight="900" fill="url(#rGold2)" stroke="#1e3a8a" stroke-width="1">MCF</text>
      </svg>`;

    // s3: Teddy Stadium Jerusalem Night Lights
    case 's3':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <rect x="10" y="14" width="100" height="92" rx="16" fill="#090d16" stroke="#facc15" stroke-width="3"/>
        <polygon points="20,20 55,65 15,65" fill="#fef08a" opacity="0.25"/>
        <polygon points="100,20 105,65 65,65" fill="#fef08a" opacity="0.25"/>
        <rect x="16" y="42" width="88" height="22" rx="4" fill="#18181b"/>
        <path d="M20 42 H30 V64 H20 Z M40 42 H50 V64 H40 Z M60 42 H70 V64 H60 Z M80 42 H90 V64 H80 Z" fill="#facc15"/>
        <polygon points="16,66 104,66 110,98 10,98" fill="#10b981" stroke="#fff" stroke-width="1.5"/>
        <ellipse cx="60" cy="82" rx="16" ry="7" fill="none" stroke="#fff" stroke-width="1.5"/>
        <text x="60" y="33" text-anchor="middle" font-size="9.5" font-weight="900" fill="#facc15">TEDDY STADIUM</text>
      </svg>`;

    // s4: New Santiago Bernabéu 360 Stadium
    case 's4':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="bernSilv" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f8fafc"/>
            <stop offset="50%" stop-color="#94a3b8"/>
            <stop offset="100%" stop-color="#334155"/>
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="48" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
        <path d="M16 58 Q60 32 104 58 L96 88 Q60 98 24 88 Z" fill="url(#bernSilv)" stroke="#e2e8f0" stroke-width="2"/>
        <path d="M22 66 H98 M24 74 H96 M26 82 H94" stroke="#1e293b" stroke-width="2"/>
        <ellipse cx="60" cy="56" rx="34" ry="10" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <ellipse cx="60" cy="58" rx="24" ry="6" fill="#10b981"/>
        <text x="60" y="29" text-anchor="middle" font-size="9" font-weight="900" fill="#fde047">BERNABÉU 360°</text>
      </svg>`;

    // s5: Kylian Mbappé #9 Real Madrid Kit + Lightning
    case 's5':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <polygon points="28,16 18,48 32,48 22,82 44,42 30,42" fill="#facc15"/>
        <polygon points="94,16 84,48 98,48 88,82 108,42 96,42" fill="#facc15"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#ffffff" stroke="#eab308" stroke-width="3"/>
        <path d="M50 20 Q60 28 70 20" fill="none" stroke="#1d4ed8" stroke-width="3"/>
        <text x="60" y="44" text-anchor="middle" font-size="9.5" font-weight="900" fill="#1e3a8a">MBAPPÉ</text>
        <text x="60" y="78" text-anchor="middle" font-size="34" font-weight="900" fill="#1e3a8a" stroke="#eab308" stroke-width="1">9</text>
      </svg>`;

    // s6: Yarden Shua #7 Beitar Jerusalem Striped Kit
    case 's6':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <clipPath id="kitClip6">
            <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z"/>
          </clipPath>
        </defs>
        <g clip-path="url(#kitClip6)">
          <rect x="20" y="18" width="80" height="82" fill="#facc15"/>
          <rect x="44" y="18" width="8" height="82" fill="#090d16"/>
          <rect x="60" y="18" width="8" height="82" fill="#090d16"/>
          <rect x="76" y="18" width="8" height="82" fill="#090d16"/>
        </g>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="none" stroke="#090d16" stroke-width="3"/>
        <rect x="46" y="34" width="28" height="12" rx="3" fill="#090d16"/>
        <text x="60" y="43" text-anchor="middle" font-size="8.5" font-weight="900" fill="#facc15">SHUA</text>
        <circle cx="60" cy="68" r="16" fill="#090d16" stroke="#facc15" stroke-width="2"/>
        <text x="60" y="76" text-anchor="middle" font-size="24" font-weight="900" fill="#facc15">7</text>
      </svg>`;

    // s7: Vinícius Jr #7 Real Madrid Kit
    case 's7':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#1e1b4b" stroke="#facc15" stroke-width="2.5"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#ffffff" stroke="#facc15" stroke-width="3"/>
        <text x="60" y="43" text-anchor="middle" font-size="9" font-weight="900" fill="#0f172a">VINI JR.</text>
        <text x="60" y="78" text-anchor="middle" font-size="34" font-weight="900" fill="#d97706">7</text>
        <polygon points="24,28 27,35 34,35 28,40 30,47 24,42 18,47 20,40 14,35 21,35" fill="#facc15"/>
        <polygon points="96,28 99,35 106,35 100,40 102,47 96,42 90,47 92,40 86,35 93,35" fill="#10b981"/>
      </svg>`;

    // s8: Jude Bellingham #5 Iconic Open-Arms Celebration
    case 's8':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
        <circle cx="60" cy="28" r="10" fill="#facc15"/>
        <path d="M12 40 L44 44 L44 96 H76 L76 44 L108 40 L106 50 L78 54 V96 H42 V54 L14 50 Z" fill="#ffffff" stroke="#eab308" stroke-width="2.5"/>
        <text x="60" y="54" text-anchor="middle" font-size="7.5" font-weight="900" fill="#1e3a8a">BELLINGHAM</text>
        <text x="60" y="82" text-anchor="middle" font-size="28" font-weight="900" fill="#eab308" stroke="#1e3a8a" stroke-width="1">5</text>
      </svg>`;

    // s9: Beitar Jerusalem State Cup with Yellow-Black Ribbons
    case 's9':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="cupGld9" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="50%" stop-color="#facc15"/>
            <stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
        </defs>
        <path d="M28 32 L14 70 L22 72 L34 36 Z" fill="#facc15" stroke="#090d16" stroke-width="1.5"/>
        <path d="M24 34 L10 64 L16 66 L28 36 Z" fill="#090d16"/>
        <path d="M92 32 L106 70 L98 72 L86 36 Z" fill="#facc15" stroke="#090d16" stroke-width="1.5"/>
        <path d="M96 34 L110 64 L104 66 L92 36 Z" fill="#090d16"/>
        <path d="M38 28 C20 28 20 56 42 58" fill="none" stroke="url(#cupGld9)" stroke-width="5"/>
        <path d="M82 28 C100 28 100 56 78 58" fill="none" stroke="url(#cupGld9)" stroke-width="5"/>
        <path d="M36 20 H84 L76 64 C74 74 66 78 60 78 C54 78 46 74 44 64 Z" fill="url(#cupGld9)" stroke="#78350f" stroke-width="2"/>
        <rect x="53" y="76" width="14" height="14" fill="url(#cupGld9)"/>
        <rect x="38" y="90" width="44" height="14" rx="4" fill="#090d16" stroke="#facc15" stroke-width="2"/>
        <text x="60" y="100" text-anchor="middle" font-size="8.5" font-weight="900" fill="#facc15">BEITAR CUP</text>
      </svg>`;

    // s10: AUTHENTIC UEFA CHAMPIONS LEAGUE "BIG EARS" SILVER TROPHY #15 (LA DECIMOQUINTA)
    case 's10':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="uclChrome" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#94a3b8"/>
            <stop offset="28%" stop-color="#ffffff"/>
            <stop offset="55%" stop-color="#cbd5e1"/>
            <stop offset="80%" stop-color="#f8fafc"/>
            <stop offset="100%" stop-color="#475569"/>
          </linearGradient>
          <linearGradient id="uclGold15" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#facc15"/>
            <stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
        </defs>
        <circle cx="60" cy="58" r="48" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
        <path d="M40 34 C14 10, 12 62, 43 62" fill="none" stroke="url(#uclChrome)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M80 34 C106 10, 108 62, 77 62" fill="none" stroke="url(#uclChrome)" stroke-width="6.5" stroke-linecap="round"/>
        <ellipse cx="60" cy="24" rx="22" ry="5" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <path d="M38 24 L43 70 C45 80, 75 80, 77 70 L82 24 Z" fill="url(#uclChrome)" stroke="#64748b" stroke-width="1.5"/>
        <path d="M52 76 L48 92 H72 L68 76 Z" fill="url(#uclChrome)" stroke="#475569" stroke-width="1.5"/>
        <ellipse cx="60" cy="94" rx="20" ry="5" fill="url(#uclChrome)" stroke="#334155" stroke-width="2"/>
        <text x="60" y="38" text-anchor="middle" font-size="6.5" font-weight="900" fill="#1e293b" letter-spacing="0.8">CHAMPIONS</text>
        <circle cx="60" cy="56" r="14" fill="url(#uclGold15)" stroke="#0f172a" stroke-width="2"/>
        <text x="60" y="62" text-anchor="middle" font-size="16" font-weight="900" fill="#0f172a">15</text>
        <rect x="24" y="99" width="72" height="13" rx="6" fill="url(#uclGold15)"/>
        <text x="60" y="108" text-anchor="middle" font-size="8" font-weight="900" fill="#0f172a">LA DECIMOQUINTA</text>
      </svg>`;

    // s11: Thibaut Courtois #1 Golden Goalkeeper Gloves & Net
    case 's11':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <rect x="14" y="18" width="92" height="76" rx="8" fill="#064e3b" stroke="#ffffff" stroke-width="4"/>
        <path d="M14 36 H106 M14 54 H106 M14 72 H106 M36 18 V94 M60 18 V94 M84 18 V94" stroke="#a7f3d0" stroke-width="1" opacity="0.45"/>
        <path d="M26 62 L22 36 Q26 28 32 36 L34 26 Q40 22 42 32 L46 26 Q52 24 50 36 L54 44 L48 68 Z" fill="#facc15" stroke="#090d16" stroke-width="2.5"/>
        <path d="M94 62 L98 36 Q94 28 88 36 L86 26 Q80 22 78 32 L74 26 Q68 24 70 36 L66 44 L72 68 Z" fill="#facc15" stroke="#090d16" stroke-width="2.5"/>
        <circle cx="60" cy="48" r="14" fill="#ffffff" stroke="#090d16" stroke-width="2.5"/>
        <polygon points="60,40 66,45 64,52 56,52 54,45" fill="#090d16"/>
        <rect x="28" y="88" width="64" height="14" rx="7" fill="#1d4ed8" stroke="#facc15" stroke-width="1.5"/>
        <text x="60" y="98" text-anchor="middle" font-size="8.5" font-weight="900" fill="#ffffff">COURTOIS #1</text>
      </svg>`;

    // s12: TRUE YELLOW-AND-BLACK STRIPED BEITAR JERUSALEM ULTRAS SCARF (ZERO RED/PINK!)
    case 's12':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="48" fill="#18181b" stroke="#facc15" stroke-width="2.5"/>
        <rect x="22" y="44" width="22" height="50" rx="3" fill="#facc15" stroke="#090d16" stroke-width="2"/>
        <rect x="22" y="54" width="22" height="10" fill="#090d16"/>
        <rect x="22" y="74" width="22" height="10" fill="#090d16"/>
        <path d="M24 94 V103 M28 94 V103 M33 94 V103 M38 94 V103 M42 94 V103" stroke="#facc15" stroke-width="2.2" stroke-linecap="round"/>
        <rect x="76" y="44" width="22" height="50" rx="3" fill="#facc15" stroke="#090d16" stroke-width="2"/>
        <rect x="76" y="54" width="22" height="10" fill="#090d16"/>
        <rect x="76" y="74" width="22" height="10" fill="#090d16"/>
        <path d="M78 94 V103 M82 94 V103 M87 94 V103 M92 94 V103 M96 94 V103" stroke="#facc15" stroke-width="2.2" stroke-linecap="round"/>
        <rect x="12" y="26" width="96" height="28" rx="6" fill="#090d16" stroke="#facc15" stroke-width="3"/>
        <rect x="15" y="29" width="12" height="22" fill="#facc15"/>
        <rect x="93" y="29" width="12" height="22" fill="#facc15"/>
        <text x="60" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#facc15" letter-spacing="0.8">💛🖤 BEITAR 🖤💛</text>
      </svg>`;

    // s13: Fede Valverde #8 Supersonic Cannon Shot
    case 's13':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
        <path d="M12 78 Q38 45 78 38 L66 64 Q40 72 12 78 Z" fill="#f97316"/>
        <path d="M22 72 Q46 50 78 38 L70 56 Z" fill="#facc15"/>
        <circle cx="80" cy="40" r="18" fill="#ffffff" stroke="#090d16" stroke-width="2.5"/>
        <polygon points="80,30 88,36 85,46 75,46 72,36" fill="#090d16"/>
        <rect x="22" y="86" width="76" height="15" rx="7" fill="#1d4ed8" stroke="#facc15" stroke-width="1.5"/>
        <text x="60" y="96" text-anchor="middle" font-size="8.5" font-weight="900" fill="#facc15">VALVERDE 128 KM/H</text>
      </svg>`;

    // s14: Golden 7-Branched Menorah of Beitar Jerusalem
    case 's14':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <polygon points="60,8 104,32 104,88 60,112 16,88 16,32" fill="#090d16" stroke="#facc15" stroke-width="4"/>
        <path d="M60 26 V86 M36 34 C36 62 84 62 84 34 M44 38 C44 56 76 56 76 38 M52 42 C52 50 68 50 68 42" fill="none" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>
        <rect x="44" y="84" width="32" height="7" rx="3" fill="#facc15"/>
        <circle cx="36" cy="28" r="3" fill="#fde047"/>
        <circle cx="44" cy="32" r="3" fill="#fde047"/>
        <circle cx="52" cy="36" r="3" fill="#fde047"/>
        <circle cx="60" cy="21" r="3.5" fill="#fde047"/>
        <circle cx="68" cy="36" r="3" fill="#fde047"/>
        <circle cx="76" cy="32" r="3" fill="#fde047"/>
        <circle cx="84" cy="28" r="3" fill="#fde047"/>
      </svg>`;

    // s15: Luka Modrić #10 Maestro
    case 's15':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#1e293b" stroke="#facc15" stroke-width="3"/>
        <path d="M40 26 L50 22 H70 L80 26 L94 42 L82 52 L76 42 V94 H44 V42 L38 52 L26 42 Z" fill="#ffffff" stroke="#eab308" stroke-width="3"/>
        <text x="60" y="43" text-anchor="middle" font-size="9" font-weight="900" fill="#1e3a8a">MODRIĆ</text>
        <text x="60" y="76" text-anchor="middle" font-size="30" font-weight="900" fill="#eab308" stroke="#1e3a8a" stroke-width="1">10</text>
      </svg>`;

    // s16: Ballon d'Or Golden Football Trophy
    case 's16':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <radialGradient id="ballonGold" cx="38%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="45%" stop-color="#facc15"/>
            <stop offset="85%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#78350f"/>
          </radialGradient>
        </defs>
        <polygon points="34,98 44,72 76,72 86,98" fill="#1e293b" stroke="#facc15" stroke-width="2"/>
        <polygon points="40,98 50,76 70,76 80,98" fill="#334155"/>
        <circle cx="60" cy="48" r="28" fill="url(#ballonGold)" stroke="#fef08a" stroke-width="2"/>
        <polygon points="60,33 70,40 66,52 54,52 50,40" fill="none" stroke="#78350f" stroke-width="2.2"/>
        <circle cx="60" cy="48" r="28" fill="none" stroke="#78350f" stroke-width="1.5" stroke-dasharray="8 5"/>
        <rect x="24" y="92" width="72" height="14" rx="6" fill="#facc15"/>
        <text x="60" y="102" text-anchor="middle" font-size="8.5" font-weight="900" fill="#090d16">BALLON D'OR</text>
      </svg>`;

    // s17: Golden Boot Trophy
    case 's17':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="bootGld" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="55%" stop-color="#facc15"/>
            <stop offset="100%" stop-color="#a16207"/>
          </linearGradient>
        </defs>
        <rect x="22" y="84" width="76" height="14" rx="5" fill="#090d16" stroke="#facc15" stroke-width="2"/>
        <path d="M30 30 L54 34 L62 56 L94 64 C100 66 100 76 92 76 H28 C24 76 24 62 26 52 Z" fill="url(#bootGld)" stroke="#78350f" stroke-width="2.5"/>
        <rect x="32" y="76" width="6" height="6" fill="#facc15"/>
        <rect x="44" y="76" width="6" height="6" fill="#facc15"/>
        <rect x="74" y="76" width="6" height="6" fill="#facc15"/>
        <rect x="86" y="76" width="6" height="6" fill="#facc15"/>
        <text x="60" y="94" text-anchor="middle" font-size="8.5" font-weight="900" fill="#facc15">GOLDEN BOOT</text>
      </svg>`;

    // s18: Adi Yona #21 Beitar Jerusalem Kit
    case 's18':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#090d16" stroke="#facc15" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#facc15" stroke="#090d16" stroke-width="3"/>
        <text x="60" y="42" text-anchor="middle" font-size="8.5" font-weight="900" fill="#090d16">ADI YONA</text>
        <text x="60" y="76" text-anchor="middle" font-size="28" font-weight="900" fill="#090d16">21</text>
      </svg>`;

    // s19: Leo Messi #10 Argentina World Cup Goat
    case 's19':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#0f172a" stroke="#facc15" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="3"/>
        <rect x="46" y="22" width="8" height="72" fill="#38bdf8"/>
        <rect x="66" y="22" width="8" height="72" fill="#38bdf8"/>
        <rect x="44" y="34" width="32" height="12" rx="3" fill="#0f172a"/>
        <text x="60" y="43" text-anchor="middle" font-size="9" font-weight="900" fill="#facc15">MESSI</text>
        <text x="60" y="76" text-anchor="middle" font-size="28" font-weight="900" fill="#facc15" stroke="#0f172a" stroke-width="1.2">10</text>
      </svg>`;

    // s20: ILAY #10 TOTY 99 SUPERSTAR CARD
    case 's20':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <defs>
          <linearGradient id="totyJersey" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1e3a8a"/>
            <stop offset="50%" stop-color="#090d16"/>
            <stop offset="100%" stop-color="#b45309"/>
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="48" fill="#090d16" stroke="#facc15" stroke-width="3.5"/>
        <path d="M44 22 L48 12 L60 19 L72 12 L76 22 Z" fill="#facc15"/>
        <path d="M38 26 L48 22 H72 L82 26 L96 42 L84 52 L78 42 V96 H42 V42 L36 52 L24 42 Z" fill="url(#totyJersey)" stroke="#facc15" stroke-width="3"/>
        <text x="60" y="43" text-anchor="middle" font-size="11" font-weight="900" fill="#facc15">עילי • ILAY</text>
        <text x="60" y="78" text-anchor="middle" font-size="32" font-weight="900" fill="#facc15">10</text>
      </svg>`;

    // s21: Cristiano Ronaldo CR7 #7 Legend
    case 's21':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#090d16" stroke="#facc15" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#dc2626" stroke="#16a34a" stroke-width="3"/>
        <text x="60" y="43" text-anchor="middle" font-size="9.5" font-weight="900" fill="#facc15">RONALDO</text>
        <text x="60" y="78" text-anchor="middle" font-size="32" font-weight="900" fill="#facc15">7</text>
      </svg>`;

    // s22: Lamine Yamal #19 Wonderkid
    case 's22':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#1e1b4b" stroke="#38bdf8" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#1d4ed8" stroke="#facc15" stroke-width="2.5"/>
        <rect x="52" y="22" width="16" height="72" fill="#dc2626"/>
        <text x="60" y="42" text-anchor="middle" font-size="8.5" font-weight="900" fill="#fde047">YAMAL</text>
        <text x="60" y="76" text-anchor="middle" font-size="28" font-weight="900" fill="#fde047">19</text>
      </svg>`;

    // s23: Erling Haaland #9 Cyborg Striker
    case 's23':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#38bdf8" stroke="#ffffff" stroke-width="3"/>
        <text x="60" y="42" text-anchor="middle" font-size="8.5" font-weight="900" fill="#0f172a">HAALAND</text>
        <text x="60" y="78" text-anchor="middle" font-size="32" font-weight="900" fill="#0f172a">9</text>
      </svg>`;

    // s24: Miguel Silva #55 Beitar Goalkeeper
    case 's24':
      return `
      <svg viewBox="0 0 120 120" class="fut-art-svg">
        <circle cx="60" cy="60" r="46" fill="#090d16" stroke="#10b981" stroke-width="3"/>
        <path d="M40 24 L50 20 H70 L80 24 L94 42 L82 52 L76 42 V96 H44 V42 L38 52 L26 42 Z" fill="#10b981" stroke="#facc15" stroke-width="2.5"/>
        <text x="60" y="42" text-anchor="middle" font-size="8.5" font-weight="900" fill="#090d16">M. SILVA</text>
        <text x="60" y="76" text-anchor="middle" font-size="28" font-weight="900" fill="#090d16">55</text>
      </svg>`;

    default:
      return getLiaCardCustomSVG(cardId);
  }
}

function getLiaCardCustomSVG(cardId) {
  const colors = {
    l1: ['#ec4899', '#8b5cf6', '🦄', 'UNICORN'],
    l2: ['#0284c7', '#1d4ed8', '💙', 'STITCH'],
    l3: ['#f472b6', '#db2777', '🩷', 'ANGEL'],
    l4: ['#db2777', '#9333ea', '💄', 'GLAM STUDIO'],
    l5: ['#8b5cf6', '#6d28d9', '👩‍🏫', 'TEACHER LIA'],
    l6: ['#facc15', '#eab308', '👑', 'PRINCESS'],
    l7: ['#ec4899', '#06b6d4', '💅', 'RAINBOW NAILS'],
    l8: ['#f472b6', '#a855f7', '🪞', 'MAGIC MIRROR'],
    l9: ['#fb7185', '#e11d48', '🌺', 'OHANA FLOWER'],
    l10: ['#38bdf8', '#ec4899', '🌈', 'RAINBOW'],
    l11: ['#f472b6', '#ec4899', '👗', 'ROYAL DRESS'],
    l12: ['#c084fc', '#9333ea', '🧚‍♀️', 'SPARKLE FAIRY'],
    l13: ['#fbbf24', '#d97706', '🧸', 'TEDDY BEAR'],
    l14: ['#a855f7', '#6366f1', '🦋', 'BUTTERFLY'],
    l15: ['#f472b6', '#38bdf8', '🍦', 'ICE CREAM'],
    l16: ['#ec4899', '#be185d', '🎀', 'PINK BOW'],
    l17: ['#0ea5e9', '#0369a1', '🏄‍♂️', 'SURF STITCH'],
    l18: ['#facc15', '#ca8a04', '⭐', 'GOLD STAR'],
    l19: ['#e879f9', '#c026d3', '👛', 'ROYAL BAG'],
    l20: ['#ec4899', '#facc15', '👑', 'SUPER LIA']
  };
  const [c1, c2, icon, label] = colors[cardId] || ['#ec4899', '#8b5cf6', '🦄', 'MAGIC'];
  return `
    <svg viewBox="0 0 120 120" class="fut-art-svg">
      <defs>
        <linearGradient id="liaGrad_${cardId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="56" r="42" fill="url(#liaGrad_${cardId})" stroke="#fef08a" stroke-width="3.5"/>
      <circle cx="60" cy="56" r="34" fill="rgba(255,255,255,0.2)"/>
      <text x="60" y="69" text-anchor="middle" font-size="40">${icon}</text>
      <rect x="20" y="92" width="80" height="15" rx="7.5" fill="#ffffff" stroke="${c1}" stroke-width="2"/>
      <text x="60" y="102" text-anchor="middle" font-size="8.5" font-weight="900" fill="${c2}">${label}</text>
    </svg>
  `;
}

// Render Header Avatar SVG so Ilay NEVER gets a pink scarf emoji or kindergarten medal in the header!
function getHeaderAvatarHTML(avatarVal, isLia = false) {
  if (isLia) {
    if (avatarVal && avatarVal.startsWith('l')) {
      return getCardCustomSVG(avatarVal);
    }
    return `<span style="font-size:1.45rem;">🦄</span>`;
  }
  // If avatarVal is a card ID (s1..s24), render its custom SVG!
  if (avatarVal && /^s\d+$/.test(avatarVal)) {
    return getCardCustomSVG(avatarVal);
  }
  // Map any old emoji to its proper SVG card ID!
  const emojiToCard = {
    '🦁': 's1', '👑': 's2', '🏟️': 's3', '✨': 's4', '⚡': 's5',
    '💛': 's6', '🕺': 's7', '🙌': 's8', '🏆': 's9', '🏅': 's10',
    '🧤': 's11', '🧣': 's12', '🚀': 's13', '🔥': 's14', '🎩': 's15',
    '⚽': 's16', '👟': 's17', '🛡️': 's18', '💎': 's19', '🦸‍♂️': 's20'
  };
  const mappedId = emojiToCard[avatarVal] || 's1';
  return getCardCustomSVG(mappedId);
}

// Render a full Supergol + UEFA Champions League / FUT Shield Card HTML
function renderFUTCardHTML(st, unlocked, isActiveAvatar = false) {
  const meta = FUT_CARD_META[st.id] || {
    num: '#' + st.id.toUpperCase(),
    series: 'lia',
    ovr: 97,
    pos: 'STAR',
    tier: st.id.startsWith('l') ? 'lia-holo' : 'toty',
    club: st.rarity,
    engName: st.name,
    storyHeb: `קלף אספנות מיוחד: ${st.name}!`,
    statLabels: [['✨', 99], ['💖', 99], ['🌈', 98], ['👑', 99], ['🦄', 99], ['⭐', 99]]
  };

  if (!unlocked) {
    return `
      <div class="fut-shield-card fut-locked fut-tier-${meta.tier}">
        <div class="fut-card-top">
          <div class="fut-ovr-col">
            <span class="fut-ovr">??</span>
            <span class="fut-pos">${meta.pos}</span>
          </div>
          <div class="fut-club-pill">${meta.num} • ${st.rarity}</div>
        </div>
        <div class="fut-art-wrap fut-art-mystery">
          <div class="fut-mystery-q">?</div>
        </div>
        <div class="fut-name-banner">קלף מסתורי ${meta.num} 🔒</div>
        <div class="fut-locked-sub">לחץ על "פתח חבילה" למעלה כדי לגלות!</div>
      </div>
    `;
  }

  const statsHTML = meta.statLabels.map(([lbl, val]) => `
    <div class="fut-stat-cell">
      <span class="fut-stat-val">${val}</span>
      <span class="fut-stat-lbl">${lbl}</span>
    </div>
  `).join('');

  return `
    <div class="fut-shield-card fut-unlocked fut-tier-${meta.tier} ${isActiveAvatar ? 'fut-equipped' : ''}">
      <div class="fut-holo-sheen"></div>
      ${isActiveAvatar ? `<div class="fut-equipped-tag">⭐ הסמל שלי</div>` : ''}
      <div class="fut-card-top">
        <div class="fut-ovr-col">
          <span class="fut-ovr">${meta.ovr}</span>
          <span class="fut-pos">${meta.pos}</span>
        </div>
        <div class="fut-club-pill">${meta.num} • ${meta.club}</div>
      </div>
      <div class="fut-art-wrap">
        ${getCardCustomSVG(st.id)}
      </div>
      <div class="fut-eng-sub">${meta.engName}</div>
      <div class="fut-name-banner">${st.name}</div>
      <div class="fut-stats-bar" dir="ltr">
        ${statsHTML}
      </div>
      <div class="fut-card-Inspect-hint">🔊 לחץ להגדלה ושמיעת סיפור הקלף</div>
    </div>
  `;
}

// Render Interactive DualSense / Xbox Controller SVG for #view-fc27
function renderInteractiveGamepadSVG(activeBtnIdx = 0) {
  return `
    <svg viewBox="0 0 500 220" style="width:100%;max-width:460px;display:block;margin:0 auto 10px;filter:drop-shadow(0 8px 18px rgba(0,255,135,0.22));">
      <defs>
        <linearGradient id="padBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#090d16"/>
        </linearGradient>
      </defs>
      <rect x="95" y="14" width="76" height="22" rx="8" fill="${activeBtnIdx === 6 ? '#00ff87' : '#334155'}" stroke="#a855f7" stroke-width="2" data-pad-btn="6" style="cursor:pointer;"/>
      <text x="133" y="29" text-anchor="middle" font-size="11" font-weight="900" fill="${activeBtnIdx === 6 ? '#090d16' : '#fff'}" pointer-events="none">L1 / LB</text>

      <rect x="329" y="14" width="76" height="22" rx="8" fill="${activeBtnIdx === 4 ? '#00ff87' : '#334155'}" stroke="#f97316" stroke-width="2" data-pad-btn="4" style="cursor:pointer;"/>
      <text x="367" y="29" text-anchor="middle" font-size="11" font-weight="900" fill="${activeBtnIdx === 4 ? '#090d16' : '#fff'}" pointer-events="none">R2 / RT ⚡</text>

      <path d="M110 40 H390 C435 40 460 85 445 155 C435 198 400 208 375 182 L335 142 H165 L125 182 C100 208 65 198 55 155 C40 85 65 40 110 40 Z" fill="url(#padBody)" stroke="#00ff87" stroke-width="3"/>

      <rect x="185" y="46" width="130" height="48" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="250" y="73" text-anchor="middle" font-size="11" font-weight="900" fill="#00ff87">EA SPORTS FC™ 27</text>

      <rect x="324" y="48" width="28" height="16" rx="6" fill="${activeBtnIdx === 7 ? '#00ff87' : '#475569'}" stroke="#e2e8f0" stroke-width="1.5" data-pad-btn="7" style="cursor:pointer;"/>
      <text x="338" y="59" text-anchor="middle" font-size="7" font-weight="900" fill="#fff" pointer-events="none">OPT</text>

      <g data-pad-btn="5" style="cursor:pointer;">
        <circle cx="195" cy="122" r="24" fill="${activeBtnIdx === 5 ? '#00ff87' : '#1e293b'}" stroke="#10b981" stroke-width="3"/>
        <text x="195" y="126" text-anchor="middle" font-size="11" font-weight="900" fill="${activeBtnIdx === 5 ? '#090d16' : '#a7f3d0'}" pointer-events="none">LS 🕹️</text>
      </g>

      <path d="M115 68 H135 V85 H152 V105 H135 V122 H115 V105 H98 V85 H115 Z" fill="#334155" stroke="#64748b" stroke-width="1.5"/>

      <g data-pad-btn="3" style="cursor:pointer;">
        <circle cx="380" cy="66" r="15" fill="${activeBtnIdx === 3 ? '#facc15' : '#1e293b'}" stroke="#facc15" stroke-width="2.5"/>
        <text x="380" y="71" text-anchor="middle" font-size="12" font-weight="900" fill="${activeBtnIdx === 3 ? '#090d16' : '#facc15'}" pointer-events="none">△/Y</text>
      </g>
      <g data-pad-btn="1" style="cursor:pointer;">
        <circle cx="412" cy="96" r="15" fill="${activeBtnIdx === 1 ? '#f43f5e' : '#1e293b'}" stroke="#f43f5e" stroke-width="2.5"/>
        <text x="412" y="101" text-anchor="middle" font-size="12" font-weight="900" fill="${activeBtnIdx === 1 ? '#fff' : '#f43f5e'}" pointer-events="none">◯/B</text>
      </g>
      <g data-pad-btn="0" style="cursor:pointer;">
        <circle cx="380" cy="126" r="15" fill="${activeBtnIdx === 0 ? '#38bdf8' : '#1e293b'}" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="380" y="131" text-anchor="middle" font-size="12" font-weight="900" fill="${activeBtnIdx === 0 ? '#090d16' : '#38bdf8'}" pointer-events="none">✕/A</text>
      </g>
      <g data-pad-btn="2" style="cursor:pointer;">
        <circle cx="348" cy="96" r="15" fill="${activeBtnIdx === 2 ? '#e879f9' : '#1e293b'}" stroke="#e879f9" stroke-width="2.5"/>
        <text x="348" y="101" text-anchor="middle" font-size="12" font-weight="900" fill="${activeBtnIdx === 2 ? '#090d16' : '#e879f9'}" pointer-events="none">▢/X</text>
      </g>
    </svg>
  `;
}

// ==================== LIA'S INTERACTIVE EDUCATIONAL COLORING STUDIO DATA & SVG ENGINE ====================

const LIA_COLORING_PALETTE = [
  { id: 'pink', hex: '#ec4899', heb: 'וָרֹד', eng: 'Pink' },
  { id: 'purple', hex: '#a855f7', heb: 'סָגֹל', eng: 'Purple' },
  { id: 'blue', hex: '#38bdf8', heb: 'כָּחֹל תְּכֵלֶת', eng: 'Blue' },
  { id: 'yellow', hex: '#facc15', heb: 'צָהֹב זָהָב', eng: 'Yellow' },
  { id: 'red', hex: '#ef4444', heb: 'אָדֹם', eng: 'Red' },
  { id: 'green', hex: '#10b981', heb: 'יָרֹק', eng: 'Green' },
  { id: 'orange', hex: '#f97316', heb: 'כָּתֹם', eng: 'Orange' },
  { id: 'turquoise', hex: '#14b8a6', heb: 'טורקיז', eng: 'Turquoise' }
];

const LIA_COLORING_PAGES = [
  {
    id: 'unicorn_rainbow',
    title: '🦄 חד-קרן הקשת בענן',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'קרן הקסם (מספר 1)', nameEng: 'Magic Horn', targetColor: 'yellow', path: '<polygon points="150,18 136,68 164,68" data-zone="z1"/><text x="150" y="56" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'הרעמה הקסומה (מספר 2)', nameEng: 'Unicorn Mane', targetColor: 'pink', path: '<path d="M118 65 Q85 85 95 135 Q120 120 128 95 Z" data-zone="z2"/><text x="108" y="102" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'הגוף של חד-הקרן (מספר 3)', nameEng: 'Unicorn Body', targetColor: 'purple', path: '<ellipse cx="165" cy="135" rx="52" ry="38" data-zone="z3"/><circle cx="145" cy="85" r="26" data-zone="z3"/><circle cx="138" cy="80" r="4" fill="#0f172a" pointer-events="none"/><text x="165" y="140" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'הזנב המנצנץ (מספר 4)', nameEng: 'Sparkle Tail', targetColor: 'blue', path: '<path d="M215 125 Q265 110 255 165 Q225 160 212 142 Z" data-zone="z4"/><text x="240" y="142" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' },
      { id: 'z5', num: 5, nameHeb: 'השמש הזורחת (מספר 5)', nameEng: 'Bright Sun', targetColor: 'orange', path: '<circle cx="52" cy="48" r="26" data-zone="z5"/><text x="52" y="53" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">5</text>' },
      { id: 'z6', num: 6, nameHeb: 'גבעת הדשא (מספר 6)', nameEng: 'Green Grass', targetColor: 'green', path: '<rect x="15" y="175" width="270" height="32" rx="14" data-zone="z6"/><text x="150" y="196" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">6</text>' }
    ]
  },
  {
    id: 'butterfly_garden',
    title: '🦋 פרפר הקסמים בגינה',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'הכנפיים העליונות (מספר 1)', nameEng: 'Top Wings', targetColor: 'pink', path: '<ellipse cx="95" cy="78" rx="48" ry="36" data-zone="z1"/><ellipse cx="205" cy="78" rx="48" ry="36" data-zone="z1"/><text x="95" y="83" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'הכנפיים התחתונות (מספר 2)', nameEng: 'Bottom Wings', targetColor: 'purple', path: '<ellipse cx="105" cy="142" rx="38" ry="28" data-zone="z2"/><ellipse cx="195" cy="142" rx="38" ry="28" data-zone="z2"/><text x="105" y="147" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'נקודות הזהב בכנפיים (מספר 3)', nameEng: 'Golden Dots', targetColor: 'yellow', path: '<circle cx="85" cy="75" r="14" data-zone="z3"/><circle cx="215" cy="75" r="14" data-zone="z3"/><text x="215" y="80" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'גוף הפרפר (מספר 4)', nameEng: 'Butterfly Body', targetColor: 'blue', path: '<rect x="140" y="48" width="20" height="115" rx="10" data-zone="z4"/><text x="150" y="110" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' },
      { id: 'z5', num: 5, nameHeb: 'פרח הגינה האדום (מספר 5)', nameEng: 'Red Flower', targetColor: 'red', path: '<circle cx="45" cy="182" r="20" data-zone="z5"/><circle cx="255" cy="182" r="20" data-zone="z5"/><text x="45" y="187" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">5</text>' }
    ]
  },
  {
    id: 'princess_castle',
    title: '🏰 ארמון הנסיכות של ליה',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'הגגות המשולשים של הארמון (מספר 1)', nameEng: 'Castle Roofs', targetColor: 'pink', path: '<polygon points="70,30 42,75 98,75" data-zone="z1"/><polygon points="150,15 118,65 182,65" data-zone="z1"/><polygon points="230,30 202,75 258,75" data-zone="z1"/><text x="150" y="54" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'קירות המגדלים (מספר 2)', nameEng: 'Castle Towers', targetColor: 'purple', path: '<rect x="50" y="75" width="40" height="110" data-zone="z2"/><rect x="210" y="75" width="40" height="110" data-zone="z2"/><text x="70" y="130" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'המבנה המרכזי של הארמון (מספר 3)', nameEng: 'Main Palace', targetColor: 'yellow', path: '<rect x="90" y="65" width="120" height="120" data-zone="z3"/><text x="150" y="105" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'שער הארמון המלכותי (מספר 4)', nameEng: 'Royal Gate', targetColor: 'blue', path: '<path d="M128 185 V135 A22 22 0 0 1 172 135 V185 Z" data-zone="z4"/><text x="150" y="165" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' },
      { id: 'z5', num: 5, nameHeb: 'הדשא המלכותי (מספר 5)', nameEng: 'Royal Lawn', targetColor: 'green', path: '<rect x="20" y="185" width="260" height="24" rx="10" data-zone="z5"/><text x="150" y="201" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">5</text>' }
    ]
  },
  {
    id: 'dream_icecream',
    title: '🍦 גלידת הקסמים המתוקה',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'הדובדבן המתוק למעלה (מספר 1)', nameEng: 'Red Cherry', targetColor: 'red', path: '<circle cx="150" cy="30" r="16" data-zone="z1"/><text x="150" y="35" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'כדור גלידת תות (מספר 2)', nameEng: 'Strawberry Scoop', targetColor: 'pink', path: '<ellipse cx="150" cy="66" rx="44" ry="24" data-zone="z2"/><text x="150" y="71" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'כדור גלידת אוכמניות (מספר 3)', nameEng: 'Blueberry Scoop', targetColor: 'blue', path: '<ellipse cx="150" cy="102" rx="52" ry="24" data-zone="z3"/><text x="150" y="107" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'גביע הוופל המשולש (מספר 4)', nameEng: 'Waffle Cone', targetColor: 'yellow', path: '<polygon points="104,118 196,118 150,204" data-zone="z4"/><text x="150" y="158" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' }
    ]
  },
  {
    id: 'stitch_aloha',
    title: '🌺 סטיץ׳ הקטן בהוואי',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'האוזניים של סטיץ׳ (מספר 1)', nameEng: 'Stitch Ears', targetColor: 'pink', path: '<path d="M70 70 Q30 50 45 100 Q65 95 75 80 Z" data-zone="z1"/><path d="M230 70 Q270 50 255 100 Q235 95 225 80 Z" data-zone="z1"/><text x="55" y="78" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'הפנים והגוף של סטיץ׳ (מספר 2)', nameEng: 'Stitch Body', targetColor: 'blue', path: '<ellipse cx="150" cy="95" rx="55" ry="45" data-zone="z2"/><circle cx="130" cy="90" r="12" fill="#0f172a" pointer-events="none"/><circle cx="170" cy="90" r="12" fill="#0f172a" pointer-events="none"/><ellipse cx="150" cy="104" rx="14" ry="9" fill="#1e1b4b" pointer-events="none"/><text x="150" y="72" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'פרח ההיביסקוס (מספר 3)', nameEng: 'Aloha Flower', targetColor: 'red', path: '<circle cx="95" cy="50" r="18" data-zone="z3"/><circle cx="95" cy="50" r="6" fill="#facc15" pointer-events="none"/><text x="95" y="55" text-anchor="middle" font-size="12" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'השמש הטרופית הזורחת (מספר 4)', nameEng: 'Golden Sun', targetColor: 'yellow', path: '<circle cx="240" cy="40" r="24" data-zone="z4"/><text x="240" y="45" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' },
      { id: 'z5', num: 5, nameHeb: 'חוף הים והחול הזהוב (מספר 5)', nameEng: 'Golden Beach', targetColor: 'orange', path: '<rect x="15" y="170" width="270" height="40" rx="12" data-zone="z5"/><text x="150" y="195" text-anchor="middle" font-size="14" font-weight="900" fill="#1e293b" pointer-events="none">5</text>' }
    ]
  },
  {
    id: 'magic_mermaid',
    title: '🧜‍♀️ בת הים הקסומה בים',
    zones: [
      { id: 'z1', num: 1, nameHeb: 'זנב הדג המנצנץ (מספר 1)', nameEng: 'Mermaid Tail', targetColor: 'purple', path: '<path d="M125 120 Q110 170 85 195 Q145 190 145 160 Q155 190 205 195 Q175 165 165 120 Z" data-zone="z1"/><text x="145" y="155" text-anchor="middle" font-size="15" font-weight="900" fill="#1e293b" pointer-events="none">1</text>' },
      { id: 'z2', num: 2, nameHeb: 'השיער הארוך של בת הים (מספר 2)', nameEng: 'Long Pink Hair', targetColor: 'pink', path: '<path d="M115 50 Q80 80 85 135 Q105 120 115 90 Z" data-zone="z2"/><path d="M175 50 Q210 80 205 135 Q185 120 175 90 Z" data-zone="z2"/><text x="100" y="95" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">2</text>' },
      { id: 'z3', num: 3, nameHeb: 'כוכב הים (מספר 3)', nameEng: 'Sea Star', targetColor: 'yellow', path: '<polygon points="50,45 56,62 74,62 59,73 65,90 50,79 35,90 41,73 26,62 44,62" data-zone="z3"/><text x="50" y="70" text-anchor="middle" font-size="11" font-weight="900" fill="#1e293b" pointer-events="none">3</text>' },
      { id: 'z4', num: 4, nameHeb: 'בועות המים בים (מספר 4)', nameEng: 'Ocean Bubbles', targetColor: 'blue', path: '<circle cx="220" cy="55" r="14" data-zone="z4"/><circle cx="235" cy="85" r="18" data-zone="z4"/><circle cx="245" cy="125" r="12" data-zone="z4"/><text x="235" y="90" text-anchor="middle" font-size="13" font-weight="900" fill="#1e293b" pointer-events="none">4</text>' }
    ]
  }
];

// ==================== LIA'S INTERACTIVE EDUCATIONAL DRESS-UP & FASHION STUDIO ====================

const LIA_DRESSUP_ITEMS = {
  hats: [
    { id: 'crown', nameHeb: 'כתר זהב מלכותי', nameEng: 'Golden Crown', season: 'party', color: '#facc15', icon: '👑' },
    { id: 'sunhat', nameHeb: 'כובע שמש לקיץ', nameEng: 'Summer Sun Hat', season: 'summer', color: '#fde047', icon: '👒' },
    { id: 'beanie', nameHeb: 'כובע צמר חם לחורף', nameEng: 'Warm Winter Hat', season: 'winter', color: '#38bdf8', icon: '🧶' },
    { id: 'bow', nameHeb: 'קשת סרט ורודה', nameEng: 'Pink Ribbon Bow', season: 'school', color: '#ec4899', icon: '🎀' }
  ],
  tops: [
    { id: 'ballgown', nameHeb: 'שמלת נשף ורודה', nameEng: 'Pink Princess Dress', season: 'party', color: '#ec4899', icon: '👗' },
    { id: 'tshirt', nameHeb: 'חולצת קיץ קצרה', nameEng: 'Summer T-Shirt', season: 'summer', color: '#fb7185', icon: '👚' },
    { id: 'coat', nameHeb: 'מעיל חורף חם וסגול', nameEng: 'Warm Winter Coat', season: 'winter', color: '#8b5cf6', icon: '🧥' },
    { id: 'kinder', nameHeb: 'חולצת גן חובה חגיגית', nameEng: 'Kindergarten Shirt', season: 'school', color: '#14b8a6', icon: '🎽' }
  ],
  shoes: [
    { id: 'slippers', nameHeb: 'נעלי נסיכה מנצנצות', nameEng: 'Sparkle Slippers', season: 'party', color: '#f472b6', icon: '👠' },
    { id: 'sandals', nameHeb: 'סנדלי קיץ לחוף הים', nameEng: 'Summer Sandals', season: 'summer', color: '#fbbf24', icon: '🩴' },
    { id: 'rainboots', nameHeb: 'מגפי גשם צהובים לשלוליות', nameEng: 'Yellow Rain Boots', season: 'winter', color: '#facc15', icon: '🥾' },
    { id: 'sneakers', nameHeb: 'נעלי ספורט נוחות לגן', nameEng: 'Sport Sneakers', season: 'school', color: '#38bdf8', icon: '👟' }
  ],
  accessories: [
    { id: 'wand', nameHeb: 'שרביט כוכב קסום', nameEng: 'Magic Star Wand', season: 'party', color: '#facc15', icon: '🪄' },
    { id: 'sunglasses', nameHeb: 'משקפי שמש לקיץ', nameEng: 'Sunglasses', season: 'summer', color: '#ec4899', icon: '🕶️' },
    { id: 'umbrella', nameHeb: 'מטרייה נגד גשם', nameEng: 'Rain Umbrella', season: 'winter', color: '#a855f7', icon: '☂️' },
    { id: 'backpack', nameHeb: 'תיק גן חובה של סטיץ׳', nameEng: 'School Backpack', season: 'school', color: '#0284c7', icon: '🎒' }
  ]
};

const LIA_DRESSUP_MISSIONS = [
  {
    title: '🌧️ משימה 1: יום גשום בחורף (מעיל או מטרייה!)',
    promptHeb: 'ליה מתוקה! בחוץ יורד גשם! בואי נלביש מעיל חם או מטרייה ומגפיים!',
    promptEng: 'Coat and Umbrella',
    season: 'winter',
    target: { hat: 'beanie', top: 'coat', shoe: 'rainboots', acc: 'umbrella' }
  },
  {
    title: '☀️ משימה 2: יום שמש בקיץ (כובע שמש או משקפיים!)',
    promptHeb: 'איזה יום שמש חם! בואי נלביש חולצת קיץ, כובע שמש או משקפי שמש!',
    promptEng: 'Sun Hat and Summer Shirt',
    season: 'summer',
    target: { hat: 'sunhat', top: 'tshirt', shoe: 'sandals', acc: 'sunglasses' }
  },
  {
    title: '👑 משימה 3: מסיבת נסיכות (כתר זהב ושמלה ורודה!)',
    promptHeb: 'הנסיכה ליה הולכת למסיבה! בואי נלביש לה כתר זהב ושמלה ורודה!',
    promptEng: 'Gold Crown and Pink Dress',
    season: 'party',
    target: { hat: 'crown', top: 'ballgown', shoe: 'slippers', acc: 'wand' }
  },
  {
    title: '🎒 משימה 4: הולכים לגן חובה (חולצה ותיק גן!)',
    promptHeb: 'בוקר טוב לגן חובה! בואי נלביש סרט ורוד, חולצת גן או תיק גן!',
    promptEng: 'Pink Bow and Bag',
    season: 'school',
    target: { hat: 'bow', top: 'kinder', shoe: 'sneakers', acc: 'backpack' }
  },
  {
    title: '⚽ משימה 5: הולכים לעודד במגרש כדורגל של עילי!',
    promptHeb: 'היום יש משחק כדורגל חשוב של עילי! בואי נלביש נעלי ספורט נוחות, כובע ותיק גב!',
    promptEng: 'Sport Sneakers and Backpack',
    season: 'school',
    target: { hat: 'sunhat', top: 'tshirt', shoe: 'sneakers', acc: 'backpack' }
  }
];

function renderDressUpCharacterSVG(state) {
  const hatObj = LIA_DRESSUP_ITEMS.hats.find(x => x.id === state.hat) || LIA_DRESSUP_ITEMS.hats[0];
  const topObj = LIA_DRESSUP_ITEMS.tops.find(x => x.id === state.top) || LIA_DRESSUP_ITEMS.tops[0];
  const shoeObj = LIA_DRESSUP_ITEMS.shoes.find(x => x.id === state.shoe) || LIA_DRESSUP_ITEMS.shoes[0];
  const accObj = LIA_DRESSUP_ITEMS.accessories.find(x => x.id === state.acc) || LIA_DRESSUP_ITEMS.accessories[0];

  const bgWeather = topObj.season === 'winter'
    ? `<rect width="260" height="280" rx="22" fill="#e0f2fe"/><text x="35" y="40" font-size="22">🌧️❄️</text><text x="200" y="40" font-size="22">🌧️</text>`
    : topObj.season === 'summer'
      ? `<rect width="260" height="280" rx="22" fill="#fef9c3"/><text x="35" y="42" font-size="26">☀️</text><text x="205" y="42" font-size="22">🏖️</text>`
      : `<rect width="260" height="280" rx="22" fill="#fdf2f8"/><text x="35" y="42" font-size="22">✨🌈</text><text x="205" y="42" font-size="22">💖</text>`;

  return `
    <svg viewBox="0 0 260 280" style="width:100%;max-width:260px;display:block;margin:0 auto;border:3px solid #f472b6;border-radius:22px;box-shadow:0 8px 22px rgba(236,72,153,0.2);">
      ${bgWeather}
      <!-- Ground Circle -->
      <ellipse cx="130" cy="252" rx="75" ry="14" fill="rgba(236,72,153,0.18)"/>

      <!-- Hair Back -->
      <ellipse cx="130" cy="82" rx="34" ry="36" fill="#78350f"/>

      <!-- Legs -->
      <rect x="110" y="185" width="12" height="52" rx="6" fill="#fed7aa"/>
      <rect x="138" y="185" width="12" height="52" rx="6" fill="#fed7aa"/>

      <!-- Arms -->
      <rect x="76" y="112" width="32" height="12" rx="6" fill="#fed7aa" transform="rotate(-18 90 115)"/>
      <rect x="152" y="112" width="32" height="12" rx="6" fill="#fed7aa" transform="rotate(18 170 115)"/>

      <!-- Outfit / Dress / Coat Layer -->
      ${state.top === 'ballgown'
        ? `<path d="M104 106 H156 L184 205 H76 Z" fill="${topObj.color}" stroke="#be185d" stroke-width="2.5"/>
           <circle cx="130" cy="130" r="6" fill="#fef08a"/>`
        : state.top === 'coat'
          ? `<path d="M96 104 H164 L170 192 H90 Z" fill="${topObj.color}" stroke="#4c1d95" stroke-width="2.5"/>
             <line x1="130" y1="104" x2="130" y2="192" stroke="#fef08a" stroke-width="3" stroke-dasharray="6 6"/>`
          : `<rect x="100" y="106" width="60" height="54" rx="10" fill="${topObj.color}" stroke="#0f172a" stroke-width="2"/>
             <path d="M98 156 H162 L170 194 H90 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>`
      }

      <!-- Head & Smiling Face -->
      <circle cx="130" cy="76" r="26" fill="#ffedd5" stroke="#fdba74" stroke-width="2"/>
      <circle cx="121" cy="73" r="3.2" fill="#1e293b"/>
      <circle cx="139" cy="73" r="3.2" fill="#1e293b"/>
      <ellipse cx="115" cy="80" rx="5" ry="2.5" fill="#f472b6" opacity="0.55"/>
      <ellipse cx="145" cy="80" rx="5" ry="2.5" fill="#f472b6" opacity="0.55"/>
      <path d="M122 84 Q130 92 138 84" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Hat / Crown Layer -->
      ${state.hat === 'crown'
        ? `<polygon points="106,54 112,32 130,44 148,32 154,54" fill="#facc15" stroke="#b45309" stroke-width="2"/>`
        : state.hat === 'sunhat'
          ? `<ellipse cx="130" cy="52" rx="42" ry="8" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
             <path d="M105 52 Q130 28 155 52 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>`
          : state.hat === 'beanie'
            ? `<path d="M102 58 Q130 26 158 58 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5"/>
               <circle cx="130" cy="30" r="8" fill="#ffffff"/>`
            : `<text x="130" y="52" text-anchor="middle" font-size="28">${hatObj.icon}</text>`
      }

      <!-- Shoes / Boots Layer -->
      <rect x="102" y="230" width="22" height="14" rx="6" fill="${shoeObj.color}" stroke="#0f172a" stroke-width="2"/>
      <rect x="136" y="230" width="22" height="14" rx="6" fill="${shoeObj.color}" stroke="#0f172a" stroke-width="2"/>

      <!-- Accessory Held in Hand -->
      <text x="195" y="135" text-anchor="middle" font-size="38">${accObj.icon}</text>
    </svg>
  `;
}
