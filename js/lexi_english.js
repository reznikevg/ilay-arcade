// ==================== LEXI-STYLE INTERACTIVE VISUAL ENGLISH ADVENTURE (ILAY & LIA) ====================
// Interactive SVG scenes where kids listen to spoken English commands, tap/circle objects in the room,
// practice prepositions (on/under/in/next to), colors, and build fearless speaking confidence!

const LEXI_SCENES = {
  bedroom: {
    id: 'bedroom',
    title: '🛏️ הַחֶדֶר הַקָּסוּם (Bedroom)',
    bg: 'linear-gradient(180deg, #ede9fe 0%, #fae8ff 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#f5f3ff;box-shadow:inset 0 0 20px rgba(139,92,246,0.12);user-select:none;">
        <!-- Wall & Floor -->
        <rect x="0" y="0" width="400" height="190" fill="#ede9fe"/>
        <rect x="0" y="190" width="400" height="70" fill="#fde68a"/>
        <ellipse cx="200" cy="222" rx="145" ry="22" fill="#f9a8d4" opacity="0.55"/>

        <!-- Window with Curtains -->
        <g class="lexi-obj" data-obj="window" style="cursor:pointer;">
          <rect x="235" y="25" width="115" height="90" rx="8" fill="#bae6fd" stroke="#fff" stroke-width="5"/>
          <line x1="292" y1="25" x2="292" y2="115" stroke="#fff" stroke-width="4"/>
          <line x1="235" y1="70" x2="350" y2="70" stroke="#fff" stroke-width="4"/>
          <path d="M230,22 Q255,65 232,118 L220,118 L220,22 Z" fill="#c084fc"/>
          <path d="M355,22 Q330,65 353,118 L365,118 L365,22 Z" fill="#c084fc"/>
        </g>

        <!-- Shelf with Books & Green Dinosaur -->
        <rect x="28" y="88" width="120" height="10" rx="4" fill="#d97706"/>
        <g class="lexi-obj" data-obj="books" style="cursor:pointer;">
          <rect x="38" y="42" width="14" height="46" rx="2" fill="#ef4444"/>
          <rect x="54" y="48" width="13" height="40" rx="2" fill="#3b82f6"/>
          <rect x="69" y="44" width="14" height="44" rx="2" fill="#facc15"/>
        </g>
        <g class="lexi-obj" data-obj="green_dino" style="cursor:pointer;">
          <text x="105" y="82" font-size="38" text-anchor="middle">🦖</text>
        </g>

        <!-- Rainbow Bed -->
        <g>
          <rect x="24" y="138" width="145" height="58" rx="12" fill="#fbbf24" stroke="#b45309" stroke-width="3"/>
          <rect x="24" y="118" width="18" height="82" rx="6" fill="#b45309"/>
          <rect x="155" y="134" width="16" height="66" rx="6" fill="#b45309"/>
          <rect x="44" y="130" width="42" height="18" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
          <path d="M42,148 L155,148 L155,178 L42,178 Z" fill="#a7f3d0"/>
          <path d="M42,162 L155,162 L155,178 L42,178 Z" fill="#f9a8d4"/>
        </g>

        <!-- Blue Ball ON the Bed -->
        <g class="lexi-obj" data-obj="blue_ball_bed" style="cursor:pointer;">
          <circle cx="118" cy="136" r="18" fill="#2563eb" stroke="#1e3a8a" stroke-width="2.5"/>
          <ellipse cx="112" cy="129" rx="6" ry="3.5" fill="#93c5fd" transform="rotate(-25 112 129)"/>
        </g>

        <!-- Teddy Bear on Floor -->
        <g class="lexi-obj" data-obj="teddy_bear" style="cursor:pointer;">
          <text x="72" y="228" font-size="44" text-anchor="middle">🧸</text>
        </g>

        <!-- Wooden Table -->
        <g>
          <rect x="225" y="160" width="140" height="14" rx="5" fill="#d97706" stroke="#92400e" stroke-width="2.5"/>
          <rect x="238" y="174" width="12" height="52" rx="3" fill="#b45309"/>
          <rect x="340" y="174" width="12" height="52" rx="3" fill="#b45309"/>
        </g>

        <!-- Red Ball ON the Table -->
        <g class="lexi-obj" data-obj="red_ball_on_table" style="cursor:pointer;">
          <circle cx="295" cy="144" r="17" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
          <ellipse cx="289" cy="138" rx="5.5" ry="3" fill="#fca5a5" transform="rotate(-25 289 138)"/>
        </g>

        <!-- Red Ball UNDER the Table -->
        <g class="lexi-obj" data-obj="red_ball_under_table" style="cursor:pointer;">
          <circle cx="295" cy="212" r="17" fill="#ef4444" stroke="#991b1b" stroke-width="2.5"/>
          <ellipse cx="289" cy="206" rx="5.5" ry="3" fill="#fca5a5" transform="rotate(-25 289 206)"/>
        </g>
      </svg>
    `
  },

  soccer_park: {
    id: 'soccer_park',
    title: '⚽ מִגְרַשׁ הָאַלּוּפִים (Soccer Park)',
    bg: 'linear-gradient(180deg, #bae6fd 0%, #dcfce7 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#e0f2fe;user-select:none;">
        <rect x="0" y="0" width="400" height="145" fill="#bae6fd"/>
        <rect x="0" y="145" width="400" height="115" fill="#22c55e"/>
        <line x1="0" y1="165" x2="400" y2="165" stroke="#ffffff" stroke-width="3" opacity="0.6"/>

        <!-- Sun -->
        <g class="lexi-obj" data-obj="sun" style="cursor:pointer;">
          <circle cx="54" cy="46" r="26" fill="#facc15" stroke="#eab308" stroke-width="3"/>
          <text x="54" y="55" font-size="30" text-anchor="middle">☀️</text>
        </g>

        <!-- Tree -->
        <g class="lexi-obj" data-obj="tree" style="cursor:pointer;">
          <rect x="335" y="105" width="18" height="55" fill="#92400e"/>
          <circle cx="344" cy="82" r="36" fill="#15803d"/>
          <circle cx="325" cy="95" r="24" fill="#16a34a"/>
          <circle cx="362" cy="95" r="24" fill="#16a34a"/>
        </g>

        <!-- Soccer Goal -->
        <g>
          <rect x="25" y="92" width="120" height="72" fill="rgba(255,255,255,0.22)" stroke="#ffffff" stroke-width="5"/>
          <line x1="55" y1="92" x2="55" y2="164" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <line x1="85" y1="92" x2="85" y2="164" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <line x1="115" y1="92" x2="115" y2="164" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <line x1="25" y1="128" x2="145" y2="128" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
        </g>

        <!-- Soccer Ball IN the Goal -->
        <g class="lexi-obj" data-obj="soccer_ball_goal" style="cursor:pointer;">
          <text x="85" y="152" font-size="34" text-anchor="middle">⚽</text>
        </g>

        <!-- Soccer Ball ON the Grass -->
        <g class="lexi-obj" data-obj="soccer_ball_grass" style="cursor:pointer;">
          <text x="200" y="228" font-size="38" text-anchor="middle">⚽</text>
        </g>

        <!-- Bench -->
        <g>
          <rect x="220" y="152" width="110" height="12" rx="4" fill="#b45309"/>
          <rect x="232" y="164" width="10" height="28" fill="#78350f"/>
          <rect x="308" y="164" width="10" height="28" fill="#78350f"/>
        </g>

        <!-- Gold Trophy ON the Bench -->
        <g class="lexi-obj" data-obj="gold_trophy" style="cursor:pointer;">
          <text x="275" y="148" font-size="38" text-anchor="middle">🏆</text>
        </g>

        <!-- Yellow Boots UNDER the Bench -->
        <g class="lexi-obj" data-obj="yellow_boots" style="cursor:pointer;">
          <text x="275" y="198" font-size="32" text-anchor="middle">👟</text>
        </g>

        <!-- Cute Dog -->
        <g class="lexi-obj" data-obj="dog" style="cursor:pointer;">
          <text x="95" y="226" font-size="42" text-anchor="middle">🐶</text>
        </g>
      </svg>
    `
  },

  picnic: {
    id: 'picnic',
    title: '🧺 פִּיקְנִיק בַּגִּנָּה (Garden Picnic)',
    bg: 'linear-gradient(180deg, #fef9c3 0%, #dcfce7 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#fefce8;user-select:none;">
        <rect x="0" y="0" width="400" height="125" fill="#bae6fd"/>
        <rect x="0" y="125" width="400" height="135" fill="#4ade80"/>
        <!-- Picnic Blanket -->
        <polygon points="85,155 315,155 355,240 45,240" fill="#fca5a5" stroke="#ef4444" stroke-width="3"/>
        <line x1="145" y1="155" x2="125" y2="240" stroke="#fff" stroke-width="4" opacity="0.55"/>
        <line x1="255" y1="155" x2="275" y2="240" stroke="#fff" stroke-width="4" opacity="0.55"/>

        <!-- Blue Butterfly -->
        <g class="lexi-obj" data-obj="blue_butterfly" style="cursor:pointer;">
          <text x="90" y="72" font-size="38" text-anchor="middle">🦋</text>
        </g>

        <!-- Pink Flower -->
        <g class="lexi-obj" data-obj="pink_flower" style="cursor:pointer;">
          <text x="54" y="145" font-size="38" text-anchor="middle">🌸</text>
        </g>

        <!-- Red Apple on Blanket -->
        <g class="lexi-obj" data-obj="red_apple" style="cursor:pointer;">
          <text x="145" y="198" font-size="38" text-anchor="middle">🍎</text>
        </g>

        <!-- Yellow Banana -->
        <g class="lexi-obj" data-obj="yellow_banana" style="cursor:pointer;">
          <text x="215" y="218" font-size="38" text-anchor="middle">🍌</text>
        </g>

        <!-- Pink Cupcake -->
        <g class="lexi-obj" data-obj="pink_cupcake" style="cursor:pointer;">
          <text x="265" y="188" font-size="38" text-anchor="middle">🧁</text>
        </g>

        <!-- Cute Cat -->
        <g class="lexi-obj" data-obj="cat" style="cursor:pointer;">
          <text x="342" y="155" font-size="42" text-anchor="middle">🐱</text>
        </g>
      </svg>
    `
  },

  magic_room: {
    id: 'magic_room',
    title: '🦄 חֶדֶר הַקְּסָמִים וְהַצַּעֲצוּעִים (Magic Room)',
    bg: 'linear-gradient(180deg, #fce7f3 0%, #ede9fe 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#fdf2f8;user-select:none;">
        <rect x="0" y="0" width="400" height="190" fill="#fce7f3"/>
        <rect x="0" y="190" width="400" height="70" fill="#fbcfe8"/>

        <!-- Yellow Star -->
        <g class="lexi-obj" data-obj="yellow_star" style="cursor:pointer;">
          <text x="70" y="65" font-size="42" text-anchor="middle">⭐</text>
        </g>

        <!-- Purple Balloon -->
        <g class="lexi-obj" data-obj="purple_balloon" style="cursor:pointer;">
          <text x="325" y="75" font-size="44" text-anchor="middle">🎈</text>
        </g>

        <!-- Unicorn -->
        <g class="lexi-obj" data-obj="unicorn" style="cursor:pointer;">
          <text x="125" y="178" font-size="56" text-anchor="middle">🦄</text>
        </g>

        <!-- Gold Crown -->
        <g class="lexi-obj" data-obj="gold_crown" style="cursor:pointer;">
          <text x="235" y="148" font-size="42" text-anchor="middle">👑</text>
        </g>

        <!-- Red Car -->
        <g class="lexi-obj" data-obj="red_car" style="cursor:pointer;">
          <text x="215" y="232" font-size="44" text-anchor="middle">🚗</text>
        </g>

        <!-- Blue Robot -->
        <g class="lexi-obj" data-obj="robot" style="cursor:pointer;">
          <text x="325" y="218" font-size="48" text-anchor="middle">🤖</text>
        </g>
      </svg>
    `
  },

  beach: {
    id: 'beach',
    title: '🏖️ חוֹף הַיָּם וְהַקַּיִץ (Sunny Beach)',
    bg: 'linear-gradient(180deg, #bae6fd 0%, #fef08a 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#e0f2fe;user-select:none;">
        <rect x="0" y="0" width="400" height="115" fill="#bae6fd"/>
        <rect x="0" y="115" width="400" height="65" fill="#38bdf8"/>
        <rect x="0" y="180" width="400" height="80" fill="#fde68a"/>
        <g class="lexi-obj" data-obj="blue_fish" style="cursor:pointer;">
          <text x="95" y="155" font-size="38" text-anchor="middle">🐠</text>
        </g>
        <g class="lexi-obj" data-obj="sun_umbrella" style="cursor:pointer;">
          <text x="290" y="168" font-size="52" text-anchor="middle">⛱️</text>
        </g>
        <g class="lexi-obj" data-obj="crab" style="cursor:pointer;">
          <text x="72" y="226" font-size="40" text-anchor="middle">🦀</text>
        </g>
        <g class="lexi-obj" data-obj="ice_cream" style="cursor:pointer;">
          <text x="190" y="224" font-size="42" text-anchor="middle">🍦</text>
        </g>
        <g class="lexi-obj" data-obj="beach_ball" style="cursor:pointer;">
          <text x="335" y="228" font-size="40" text-anchor="middle">🏐</text>
        </g>
      </svg>
    `
  },

  space: {
    id: 'space',
    title: '🚀 תַּחֲנַת הֶחָלָל וְהַכּוֹכָבִים (Space)',
    bg: 'linear-gradient(180deg, #0f172a 0%, #312e81 100%)',
    svg: `
      <svg viewBox="0 0 400 260" width="100%" style="border-radius:18px;background:#0f172a;user-select:none;">
        <circle cx="40" cy="40" r="2" fill="#fff"/>
        <circle cx="150" cy="30" r="2" fill="#fff"/>
        <circle cx="340" cy="50" r="2.5" fill="#fde047"/>
        <circle cx="280" cy="190" r="2" fill="#fff"/>
        <g class="lexi-obj" data-obj="moon" style="cursor:pointer;">
          <text x="65" y="75" font-size="44" text-anchor="middle">🌙</text>
        </g>
        <g class="lexi-obj" data-obj="saturn" style="cursor:pointer;">
          <text x="320" y="80" font-size="46" text-anchor="middle">🪐</text>
        </g>
        <g class="lexi-obj" data-obj="rocket" style="cursor:pointer;">
          <text x="195" y="135" font-size="54" text-anchor="middle">🚀</text>
        </g>
        <g class="lexi-obj" data-obj="astronaut" style="cursor:pointer;">
          <text x="95" y="210" font-size="46" text-anchor="middle">👩‍🚀</text>
        </g>
        <g class="lexi-obj" data-obj="earth" style="cursor:pointer;">
          <text x="305" y="215" font-size="48" text-anchor="middle">🌍</text>
        </g>
      </svg>
    `
  }
};

const LEXI_TASKS_LIA = [
  { scene: 'bedroom', target: 'red_ball_on_table', speakEn: 'Circle the red ball on the table!', speakSay: 'Red ball', hebPrompt: 'הַקִּיפִי אֶת הַכַּדּוּר הָאָדֹם עַל הַשֻּׁלְחָן! 🔴', nameEn: 'red ball' },
  { scene: 'bedroom', target: 'blue_ball_bed', speakEn: 'Tap the blue ball on the bed!', speakSay: 'Blue ball', hebPrompt: 'גְּעִי בַּכַּדּוּר הַכָּחֹל עַל הַמִּטָּה! 🔵', nameEn: 'blue ball' },
  { scene: 'bedroom', target: 'teddy_bear', speakEn: 'Touch the brown teddy bear!', speakSay: 'Teddy bear', hebPrompt: 'גְּעִי בַּדֻּבִּי הֶחָמוּד! 🧸', nameEn: 'teddy bear' },
  { scene: 'bedroom', target: 'green_dino', speakEn: 'Find the green dinosaur!', speakSay: 'Dinosaur', hebPrompt: 'מִצְאִי אֶת הַדִּינוֹזָאוּר הַיָּרֹק! 🦖', nameEn: 'green dinosaur' },
  { scene: 'picnic', target: 'red_apple', speakEn: 'Tap the red apple!', speakSay: 'Red apple', hebPrompt: 'גְּעִי בַּתַּפּוּחַ הָאָדֹם! 🍎', nameEn: 'red apple' },
  { scene: 'picnic', target: 'yellow_banana', speakEn: 'Circle the yellow banana!', speakSay: 'Yellow banana', hebPrompt: 'הַקִּיפִי אֶת הַבָּנָנָה הַצְּהֻבָּה! 🍌', nameEn: 'yellow banana' },
  { scene: 'picnic', target: 'pink_cupcake', speakEn: 'Touch the pink cupcake!', speakSay: 'Cupcake', hebPrompt: 'גְּעִי בַּקַּאפְּקֵייק הַטָּעִים! 🧁', nameEn: 'pink cupcake' },
  { scene: 'picnic', target: 'blue_butterfly', speakEn: 'Find the blue butterfly!', speakSay: 'Butterfly', hebPrompt: 'מִצְאִי אֶת הַפַּרְפַּר! 🦋', nameEn: 'butterfly' },
  { scene: 'magic_room', target: 'unicorn', speakEn: 'Touch the magic unicorn!', speakSay: 'Unicorn', hebPrompt: 'גְּעִי בְּחַד-הַקֶּרֶן הַקָּסוּם! 🦄', nameEn: 'unicorn' },
  { scene: 'magic_room', target: 'gold_crown', speakEn: 'Circle the golden crown!', speakSay: 'Gold crown', hebPrompt: 'הַקִּיפִי אֶת הַכֶּתֶר הַזָּהוּב! 👑', nameEn: 'crown' },
  { scene: 'magic_room', target: 'yellow_star', speakEn: 'Tap the yellow star!', speakSay: 'Star', hebPrompt: 'גְּעִי בַּכּוֹכָב הַצָּהֹב! ⭐', nameEn: 'star' },
  { scene: 'soccer_park', target: 'dog', speakEn: 'Touch the cute dog!', speakSay: 'Dog', hebPrompt: 'גְּעִי בַּכֶּלֶב הֶחָמוּד! 🐶', nameEn: 'dog' },
  { scene: 'beach', target: 'blue_fish', speakEn: 'Tap the fish in the water!', speakSay: 'Fish', hebPrompt: 'גְּעִי בַּדָּג שֶׁבַּמַּיִם! 🐠', nameEn: 'fish' },
  { scene: 'beach', target: 'ice_cream', speakEn: 'Touch the ice cream!', speakSay: 'Ice cream', hebPrompt: 'גְּעִי בַּגְּלִידָה הַטְּעִימָה! 🍦', nameEn: 'ice cream' },
  { scene: 'beach', target: 'crab', speakEn: 'Find the red crab on the sand!', speakSay: 'Red crab', hebPrompt: 'מִצְאִי אֶת הַסַּרְטָן הָאָדֹם! 🦀', nameEn: 'crab' },
  { scene: 'beach', target: 'beach_ball', speakEn: 'Circle the beach ball!', speakSay: 'Beach ball', hebPrompt: 'הַקִּיפִי אֶת כַּדּוּר הַיָּם! 🏐', nameEn: 'beach ball' },
  { scene: 'space', target: 'moon', speakEn: 'Tap the yellow moon!', speakSay: 'Moon', hebPrompt: 'גְּעִי בַּיָּרֵחַ הַצָּהֹב! 🌙', nameEn: 'moon' },
  { scene: 'space', target: 'rocket', speakEn: 'Touch the space rocket!', speakSay: 'Rocket', hebPrompt: 'גְּעִי בַּטִּיל הֶחָלָל! 🚀', nameEn: 'rocket' },
  { scene: 'space', target: 'earth', speakEn: 'Find planet Earth!', speakSay: 'Earth', hebPrompt: 'מִצְאִי אֶת כַּדּוּר הָאָרֶץ! 🌍', nameEn: 'Earth' },
  { scene: 'space', target: 'saturn', speakEn: 'Circle the planet with rings!', speakSay: 'Planet', hebPrompt: 'הַקִּיפִי אֶת כּוֹכַב הַלֶּכֶת עִם הַטַּבָּעוֹת! 🪐', nameEn: 'planet' }
];

const LEXI_TASKS_ILAY = [
  { scene: 'bedroom', target: 'red_ball_on_table', speakEn: 'Circle the red ball ON the table!', speakSay: 'The red ball is on the table', hebPrompt: 'הַקֵּף אֶת הַכַּדּוּר הָאָדֹם שֶׁעַל הַשֻּׁלְחָן! (ON)', nameEn: 'red ball on the table' },
  { scene: 'bedroom', target: 'red_ball_under_table', speakEn: 'Circle the red ball UNDER the table!', speakSay: 'The red ball is under the table', hebPrompt: 'הַקֵּף אֶת הַכַּדּוּר הָאָדֹם שֶׁמִּתַּחַת לַשֻּׁלְחָן! (UNDER)', nameEn: 'red ball under the table' },
  { scene: 'bedroom', target: 'blue_ball_bed', speakEn: 'Tap the blue ball ON the bed!', speakSay: 'Blue ball on the bed', hebPrompt: 'גַּע בַּכַּדּוּר הַכָּחֹל שֶׁעַל הַמִּטָּה!', nameEn: 'blue ball on the bed' },
  { scene: 'bedroom', target: 'green_dino', speakEn: 'Find the green dinosaur ON the shelf!', speakSay: 'Green dinosaur', hebPrompt: 'מְצָא אֶת הַדִּינוֹזָאוּר הַיָּרֹק עַל הַמַּדָּף!', nameEn: 'green dinosaur' },
  { scene: 'bedroom', target: 'books', speakEn: 'Tap the colorful books on the shelf!', speakSay: 'Books', hebPrompt: 'גַּע בַּסְּפָרִים שֶׁעַל הַמַּדָּף!', nameEn: 'books' },
  { scene: 'soccer_park', target: 'soccer_ball_goal', speakEn: 'Tap the soccer ball IN the goal!', speakSay: 'Ball in the goal', hebPrompt: 'גַּע בְּכַדּוּר הָרֶגֶל שֶׁבְּתוֹךְ הַשַּׁעַר! (IN)', nameEn: 'soccer ball in the goal' },
  { scene: 'soccer_park', target: 'soccer_ball_grass', speakEn: 'Tap the soccer ball ON the grass!', speakSay: 'Ball on the grass', hebPrompt: 'גַּע בְּכַדּוּר הָרֶגֶל שֶׁעַל הַדֶּשֶׁא!', nameEn: 'soccer ball on the grass' },
  { scene: 'soccer_park', target: 'gold_trophy', speakEn: 'Circle the golden trophy ON the bench!', speakSay: 'Golden trophy', hebPrompt: 'הַקֵּף אֶת הַגָּבִיעַ שֶׁעַל הַסַּפְסָל!', nameEn: 'golden trophy' },
  { scene: 'soccer_park', target: 'yellow_boots', speakEn: 'Find the boots UNDER the bench!', speakSay: 'Boots under the bench', hebPrompt: 'מְצָא אֶת הַנַּעֲלַיִם שֶׁמִּתַּחַת לַסַּפְסָל! (UNDER)', nameEn: 'boots under the bench' },
  { scene: 'picnic', target: 'pink_flower', speakEn: 'Touch the pink flower next to the blanket!', speakSay: 'Pink flower', hebPrompt: 'גַּע בַּפֶּרַח שֶׁלְּיַד הַשְּׂמִיכָה!', nameEn: 'pink flower' },
  { scene: 'magic_room', target: 'robot', speakEn: 'Tap the blue robot!', speakSay: 'Blue robot', hebPrompt: 'גַּע בָּרוֹבּוֹט הַכָּחֹל! 🤖', nameEn: 'robot' },
  { scene: 'magic_room', target: 'red_car', speakEn: 'Circle the red toy car!', speakSay: 'Red car', hebPrompt: 'הַקֵּף אֶת הַמְּכוֹנִית הָאֲדֻמָּה! 🚗', nameEn: 'red car' },
  { scene: 'beach', target: 'blue_fish', speakEn: 'Tap the fish swimming IN the sea!', speakSay: 'Fish in the sea', hebPrompt: 'גַּע בַּדָּג שֶׁשּׂוֹחֶה בְּתוֹךְ הַיָּם! (IN)', nameEn: 'fish in the sea' },
  { scene: 'beach', target: 'ice_cream', speakEn: 'Tap the ice cream BETWEEN the crab and the ball!', speakSay: 'Ice cream between', hebPrompt: 'גַּע בַּגְּלִידָה שֶׁבֵּין הַסַּרְטָן לַכַּדּוּר! (BETWEEN)', nameEn: 'ice cream' },
  { scene: 'beach', target: 'sun_umbrella', speakEn: 'Circle the big beach umbrella!', speakSay: 'Beach umbrella', hebPrompt: 'הַקֵּף אֶת הַשִּׁמְשִׁיָּה הַגְּדוֹלָה! ⛱️', nameEn: 'beach umbrella' },
  { scene: 'beach', target: 'crab', speakEn: 'Find the crab ON the sand!', speakSay: 'Crab on the sand', hebPrompt: 'מְצָא אֶת הַסַּרְטָן עַל הַחוֹל! 🦀', nameEn: 'crab on the sand' },
  { scene: 'space', target: 'rocket', speakEn: 'Tap the rocket flying IN space!', speakSay: 'Rocket in space', hebPrompt: 'גַּע בַּטִּיל שֶׁטָּס בֶּחָלָל! 🚀', nameEn: 'rocket' },
  { scene: 'space', target: 'astronaut', speakEn: 'Circle the astronaut next to planet Earth!', speakSay: 'Astronaut', hebPrompt: 'הַקֵּף אֶת הָאַסְטְרוֹנָאוּט לְיַד כַּדּוּר הָאָרֶץ! 👩‍🚀', nameEn: 'astronaut' },
  { scene: 'space', target: 'saturn', speakEn: 'Tap the planet ABOVE planet Earth!', speakSay: 'Planet above Earth', hebPrompt: 'גַּע בְּכוֹכַב הַלֶּכֶת שֶׁמֵּעַל כַּדּוּר הָאָרֶץ! (ABOVE)', nameEn: 'planet above Earth' },
  { scene: 'space', target: 'moon', speakEn: 'Find the moon at the top left!', speakSay: 'The moon', hebPrompt: 'מְצָא אֶת הַיָּרֵחַ בַּפִּנָּה הַשְּׂמָאלִית הָעֶלְיוֹנָה! 🌙', nameEn: 'moon' }
];

let lexiSession = {
  tasks: [],
  idx: 0,
  stars: 0,
  answered: false
};

function startLexiEnglishAdventure() {
  const lia = typeof isLiaActive === 'function' ? isLiaActive() : false;
  const bank = lia ? LEXI_TASKS_LIA : LEXI_TASKS_ILAY;
  const shuffled = [...bank].sort(() => Math.random() - 0.5).slice(0, 8);
  lexiSession = {
    tasks: shuffled,
    idx: 0,
    stars: 0,
    answered: false
  };
  if (typeof switchView === 'function') switchView('lexi-english');
  renderLexiRound();
}

function renderLexiRound() {
  const task = lexiSession.tasks[lexiSession.idx];
  if (!task) {
    finishLexiAdventure();
    return;
  }
  lexiSession.answered = false;
  const lia = typeof isLiaActive === 'function' ? isLiaActive() : false;
  const scene = LEXI_SCENES[task.scene];

  const pct = Math.round((lexiSession.idx / lexiSession.tasks.length) * 100);
  const progFill = document.getElementById('lexi-progress-fill');
  const starCount = document.getElementById('lexi-star-count');
  const avatarEl = document.getElementById('lexi-coach-avatar');
  const enBubble = document.getElementById('lexi-en-prompt');
  const hebBubble = document.getElementById('lexi-heb-sub');
  const stageEl = document.getElementById('lexi-scene-stage');
  const fbEl = document.getElementById('lexi-feedback');
  const nextBtn = document.getElementById('btn-lexi-next');
  const speakSayEl = document.getElementById('lexi-speak-phrase');

  if (progFill) progFill.style.width = `${Math.max(10, pct)}%`;
  if (starCount) starCount.textContent = lexiSession.stars;
  if (avatarEl) avatarEl.textContent = lia ? '🦄👩‍🏫' : '⚽👩‍🏫';
  if (enBubble) enBubble.textContent = task.speakEn;
  if (hebBubble) hebBubble.textContent = task.hebPrompt;
  if (speakSayEl) speakSayEl.textContent = `"${task.speakSay}"`;
  if (fbEl) {
    fbEl.className = 'feedback-banner hidden';
    fbEl.textContent = '';
  }
  if (nextBtn) nextBtn.classList.add('hidden');

  if (stageEl && scene) {
    stageEl.innerHTML = scene.svg;
    stageEl.querySelectorAll('.lexi-obj').forEach(objEl => {
      objEl.addEventListener('click', () => handleLexiObjectTap(objEl, task));
    });
  }

  // Auto-speak the English prompt!
  setTimeout(() => {
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.speak(task.speakEn, 'en-US', lia ? 0.78 : 0.85);
    }
  }, 250);
}

function handleLexiObjectTap(objEl, task) {
  if (lexiSession.answered) return;
  const tappedId = objEl.dataset.obj;
  const lia = typeof isLiaActive === 'function' ? isLiaActive() : false;
  const fbEl = document.getElementById('lexi-feedback');
  const nextBtn = document.getElementById('btn-lexi-next');

  if (tappedId === task.target) {
    lexiSession.answered = true;
    lexiSession.stars++;
    const starCount = document.getElementById('lexi-star-count');
    if (starCount) starCount.textContent = lexiSession.stars;

    // Draw animated glowing magic circle around the object inside SVG!
    const bbox = objEl.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    const r = Math.max(bbox.width, bbox.height) / 2 + 10;
    const svgRoot = objEl.closest('svg');
    if (svgRoot) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', r);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', '#10b981');
      circle.setAttribute('stroke-width', '5');
      circle.setAttribute('stroke-dasharray', '180');
      circle.setAttribute('stroke-dashoffset', '0');
      circle.style.filter = 'drop-shadow(0 0 8px rgba(16,185,129,0.9))';
      svgRoot.appendChild(circle);
    }

    if (typeof arcadeAudio !== 'undefined') {
      if (lia) arcadeAudio.playMagicSparkle();
      else arcadeAudio.playGoalSuccess();
      setTimeout(() => arcadeAudio.speak(`Awesome! ${task.nameEn}!`, 'en-US', 0.88), 220);
    }
    if (typeof confetti !== 'undefined') confetti.burst(75);
    if (typeof addActiveCoins === 'function') addActiveCoins(10);
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (typeof saveState === 'function') saveState();

    if (fbEl) {
      fbEl.className = 'feedback-banner success';
      fbEl.textContent = lia
        ? `🌟 כל הכבוד ליה! מצאת את ה-${task.nameEn}! (+10 🪙)`
        : `⚽ גול באנגלית! מצאת את ה-${task.nameEn}! (+10 🪙)`;
    }
    if (nextBtn) nextBtn.classList.remove('hidden');
  } else {
    // Gentle teaching feedback: tell them what they tapped in English!
    const friendlyLabel = tappedId.replace(/_/g, ' ');
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playClick();
      arcadeAudio.speak(`That is ${friendlyLabel}. Try again!`, 'en-US', 0.82);
    }
    if (fbEl) {
      fbEl.className = 'feedback-banner warning';
      fbEl.textContent = lia
        ? `✨ נסי שוב מתוקה! הקשיבי: ${task.hebPrompt}`
        : `💡 זה ${friendlyLabel} — נסה למצוא: ${task.hebPrompt}`;
    }
  }
}

function handleLexiSpeakPractice() {
  const task = lexiSession.tasks[lexiSession.idx];
  if (!task) return;
  const statusEl = document.getElementById('lexi-speak-status');
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRec) {
    // Fallback friendly encouragement on browsers without SpeechRecognition
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playMagicSparkle();
      arcadeAudio.speak(`Great job saying ${task.speakSay}!`, 'en-US', 0.88);
    }
    if (typeof addActiveCoins === 'function') addActiveCoins(5);
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (statusEl) statusEl.textContent = `🌟 איזה אומץ לדבר באנגלית! +5 🪙`;
    return;
  }

  try {
    const rec = new SpeechRec();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    if (statusEl) statusEl.textContent = '🎙️ מקשיב לך... אמור עכשיו באנגלית!';

    rec.onresult = (ev) => {
      const heard = ev.results[0][0].transcript || '';
      if (typeof arcadeAudio !== 'undefined') arcadeAudio.playMagicSparkle();
      if (typeof addActiveCoins === 'function') addActiveCoins(5);
      if (typeof updateHeaderUI === 'function') updateHeaderUI();
      if (statusEl) statusEl.textContent = `🎉 מדהים! שמעתי "${heard}" — כל הכבוד על הביטחון! +5 🪙`;
    };
    rec.onerror = () => {
      if (typeof arcadeAudio !== 'undefined') arcadeAudio.playMagicSparkle();
      if (typeof addActiveCoins === 'function') addActiveCoins(5);
      if (typeof updateHeaderUI === 'function') updateHeaderUI();
      if (statusEl) statusEl.textContent = `🌟 ניסיון מעולה באנגלית! +5 🪙`;
    };
    rec.start();
  } catch (e) {
    if (statusEl) statusEl.textContent = `🌟 כל הכבוד! המשך לדבר באנגלית!`;
  }
}

function finishLexiAdventure() {
  if (typeof arcadeAudio !== 'undefined') arcadeAudio.playWhistleVictory();
  if (typeof confetti !== 'undefined') confetti.burst(130);
  if (typeof addActiveTrophies === 'function') addActiveTrophies(1);
  if (typeof saveState === 'function') saveState(true);
  if (typeof updateHeaderUI === 'function') updateHeaderUI();
  const stageEl = document.getElementById('lexi-scene-stage');
  const fbEl = document.getElementById('lexi-feedback');
  const nextBtn = document.getElementById('btn-lexi-next');
  if (stageEl) {
    stageEl.innerHTML = `
      <div style="padding:26px 14px;text-align:center;background:linear-gradient(135deg,#fef9c3,#dcfce7);border-radius:18px;border:3px solid #facc15;">
        <div style="font-size:3.2rem;margin-bottom:8px;">🏆🌟🦄⚽</div>
        <div style="font-size:1.35rem;font-weight:900;color:#064e3b;margin-bottom:6px;">סִיַּמְתָּ אֶת הַרְפַּתְקַת הָאַנְגְּלִית!</div>
        <div style="font-size:1rem;font-weight:800;color:#047857;margin-bottom:14px;">אספת ${lexiSession.stars} כוכבים + גביע + מטבעות זהב!</div>
        <button type="button" class="btn-primary-large" onclick="startLexiEnglishAdventure()" style="background:linear-gradient(135deg,#10b981,#059669);border:none;">שחקו עוד סיבוב! 🔄</button>
      </div>
    `;
  }
  if (fbEl) fbEl.classList.add('hidden');
  if (nextBtn) nextBtn.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const listenBtn = document.getElementById('btn-lexi-listen');
  const slowBtn = document.getElementById('btn-lexi-slow');
  const nextBtn = document.getElementById('btn-lexi-next');
  const speakBtn = document.getElementById('btn-lexi-speak');

  if (listenBtn) {
    listenBtn.addEventListener('click', () => {
      const task = lexiSession.tasks[lexiSession.idx];
      if (task && typeof arcadeAudio !== 'undefined') arcadeAudio.speak(task.speakEn, 'en-US', 0.85);
    });
  }
  if (slowBtn) {
    slowBtn.addEventListener('click', () => {
      const task = lexiSession.tasks[lexiSession.idx];
      if (task && typeof arcadeAudio !== 'undefined') arcadeAudio.speak(task.speakEn, 'en-US', 0.65);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      lexiSession.idx++;
      renderLexiRound();
    });
  }
  if (speakBtn) {
    speakBtn.addEventListener('click', handleLexiSpeakPractice);
  }
});
