// ==================== OTIYOT-STYLE LILY-PAD / ICEBERG NIQQUD ADVENTURE FOR LIA (AGE 5) ====================
// Inspired by "אותיות בדרך": 100% audio-guided, zero reading required to navigate,
// featuring Kamatz-Patach syllables, short 2-3 letter words (ים, גן, גם, דג), and hopping pond visuals!

const LIA_POND_ROUNDS = [
  // Kamatz-Patach Short Words (matching the screenshot: ים, גן, גם!)
  { word: 'גַּן', speak: 'גַּן! גַּן הַיְלָדִים', distractors: ['יָם', 'גַּם'], scene: 'pond' },
  { word: 'יָם', speak: 'יָם! שׂוֹחִים בַּיָּם', distractors: ['גַּן', 'דָּג'], scene: 'pond' },
  { word: 'גַּם', speak: 'גַּם! גַּם אֲנִי', distractors: ['יָם', 'שָׁם'], scene: 'pond' },
  { word: 'דָּג', speak: 'דָּג! דָּג בַּמַּיִם', distractors: ['רָץ', 'בָּא'], scene: 'pond' },
  { word: 'רָץ', speak: 'רָץ! הַכֶּלֶב רָץ', distractors: ['חַם', 'צַב'], scene: 'ice' },
  { word: 'חַם', speak: 'חַם! שֶׁמֶשׁ חַמָּה', distractors: ['קַר', 'גַּם'], scene: 'pond' },
  { word: 'קַר', speak: 'קַר! שֶׁלֶג קַר', distractors: ['חַם', 'יָם'], scene: 'ice' },
  { word: 'צַב', speak: 'צַב! צַב קָטָן', distractors: ['דָּג', 'גַּן'], scene: 'pond' },
  { word: 'שָׁם', speak: 'שָׁם! הַכַּדּוּר שָׁם', distractors: ['בָּא', 'גַּם'], scene: 'ice' },
  // Kamatz-Patach Syllables
  { word: 'בָּ', speak: 'בָּא! בֵּית עִם קָמָץ — בָּא', distractors: ['מָ', 'גָּ'], scene: 'pond' },
  { word: 'מָ', speak: 'מָה! מֵם עִם קָמָץ — מָה', distractors: ['לָ', 'שָׁ'], scene: 'ice' },
  { word: 'שָׁ', speak: 'שָׁה! שִׁין עִם קָמָץ — שָׁה', distractors: ['רָ', 'דָּ'], scene: 'pond' },
  { word: 'לָ', speak: 'לָה! לָמֶד עִם קָמָץ — לָה', distractors: ['נָ', 'בָּ'], scene: 'ice' },
  // Chirik Words
  { word: 'פִּיל', speak: 'פִּיל! פִּיל גָּדוֹל', distractors: ['שִׁיר', 'גִּיל'], scene: 'pond' },
  { word: 'שִׁיר', speak: 'שִׁיר! שָׁרִים שִׁיר', distractors: ['פִּיל', 'מִי'], scene: 'ice' },
  // More Fun Niqqud Words (Shuruk, Cholam, Segol, Kamatz)
  { word: 'תּוּת', speak: 'תּוּת! תּוּת אָדֹם וּמָתוֹק', distractors: ['סוּס', 'דוּב'], scene: 'pond' },
  { word: 'סוּס', speak: 'סוּס! סוּס דּוֹהֵר', distractors: ['תּוּת', 'כּוֹס'], scene: 'ice' },
  { word: 'דוּב', speak: 'דּוּב! דּוּב חָמוּד', distractors: ['לֵב', 'תּוּת'], scene: 'pond' },
  { word: 'לֵב', speak: 'לֵב! לֵב וָרֹד', distractors: ['עֵץ', 'אֵשׁ'], scene: 'pond' },
  { word: 'עֵץ', speak: 'עֵץ! עֵץ גָּבוֹהַּ', distractors: ['לֵב', 'כַּף'], scene: 'pond' },
  { word: 'כּוֹס', speak: 'כּוֹס! כּוֹס מַיִם', distractors: ['סוּס', 'דוּב'], scene: 'ice' },
  { word: 'בַּת', speak: 'בַּת! יַלְדָּה חֲמוּדָה', distractors: ['גַּן', 'כַּף'], scene: 'pond' },
  { word: 'כַּף', speak: 'כַּף! כַּף יָד', distractors: ['בַּת', 'יָם'], scene: 'ice' }
];

let liaPondSession = {
  rounds: [],
  idx: 0,
  hops: 0,
  answered: false
};

function startLiaOtiyotAdventure() {
  const picked = [...LIA_POND_ROUNDS].sort(() => Math.random() - 0.5).slice(0, 6);
  liaPondSession = {
    rounds: picked,
    idx: 0,
    hops: 0,
    answered: false
  };
  if (typeof switchView === 'function') switchView('lia-otiyot');
  renderLiaOtiyotRound();
}

function renderLiaOtiyotRound() {
  const r = liaPondSession.rounds[liaPondSession.idx];
  if (!r) {
    finishLiaOtiyot();
    return;
  }
  liaPondSession.answered = false;
  const stage = document.getElementById('lia-otiyot-stage');
  const fb = document.getElementById('lia-otiyot-fb');
  const nextBtn = document.getElementById('btn-lia-otiyot-next');
  const prog = document.getElementById('lia-otiyot-progress');
  const hopsEl = document.getElementById('lia-otiyot-hops');

  if (prog) prog.style.width = `${Math.max(12, Math.round((liaPondSession.idx / liaPondSession.rounds.length) * 100))}%`;
  if (hopsEl) hopsEl.textContent = `${liaPondSession.hops}/${liaPondSession.rounds.length}`;
  if (fb) { fb.className = 'feedback-banner hidden'; fb.textContent = ''; }
  if (nextBtn) nextBtn.classList.add('hidden');

  const opts = [r.word, ...r.distractors].sort(() => Math.random() - 0.5);
  const isIce = r.scene === 'ice';
  const bgStyle = isIce
    ? 'linear-gradient(180deg, #1e3a8a 0%, #38bdf8 70%, #bae6fd 100%)'
    : 'linear-gradient(180deg, #bae6fd 0%, #34d399 45%, #0ea5e9 100%)';

  if (stage) {
    stage.innerHTML = `
      <div style="background:${bgStyle};border-radius:20px;padding:18px 12px;text-align:center;position:relative;overflow:hidden;min-height:240px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:inset 0 0 24px rgba(0,0,0,0.12);">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0 8px;">
          <span style="font-size:2.4rem;" id="lia-pond-char">${isIce ? '🐧🦄' : '🐸👧'}</span>
          <span style="background:rgba(255,255,255,0.9);color:#0f172a;font-weight:900;padding:6px 14px;border-radius:99px;font-size:0.95rem;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            ${isIce ? '❄️ קִפְצִי עַל הַקַּרְחוֹן הַנָּכוֹן!' : '🌿 קִפְצִי עַל עֲלֵה הַמַּיִם הַנָּכוֹן!'}
          </span>
        </div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:24px 0 10px;">
          ${opts.map(w => `
            <button type="button" class="lia-pad-btn" data-word="${w}" style="background:${isIce ? 'linear-gradient(180deg,#ffffff,#e0f2fe)' : 'linear-gradient(180deg,#bef264,#4ade80)'};border:4px solid ${isIce ? '#7dd3fc' : '#15803d'};border-radius:50%;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;font-size:2.2rem;font-weight:900;color:#0f172a;cursor:pointer;box-shadow:0 8px 0 ${isIce ? '#0284c7' : '#166534'};transition:transform 0.15s ease;">
              ${w}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    stage.querySelectorAll('.lia-pad-btn').forEach(btn => {
      btn.addEventListener('click', () => handleLiaPadTap(btn, r));
    });
  }

  setTimeout(() => {
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.speak(`אֵיזוֹ מִילָה אַתְּ שׁוֹמַעַת לִיָּה? ${r.speak}`, 'he-IL', 0.85);
    }
  }, 240);
}

function handleLiaPadTap(btn, round) {
  if (liaPondSession.answered) return;
  const tapped = btn.dataset.word;
  const fb = document.getElementById('lia-otiyot-fb');
  const nextBtn = document.getElementById('btn-lia-otiyot-next');

  if (tapped === round.word) {
    liaPondSession.answered = true;
    liaPondSession.hops++;
    btn.style.transform = 'scale(1.12)';
    btn.style.boxShadow = '0 0 24px #facc15';
    btn.style.borderColor = '#facc15';

    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playMagicSparkle();
      setTimeout(() => arcadeAudio.speak(`מְצֻיָּן לִיָּה! זֶה ${round.word}!`, 'he-IL', 0.9), 200);
    }
    if (typeof confetti !== 'undefined') confetti.burst(80);
    if (typeof addActiveCoins === 'function') addActiveCoins(10);
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (typeof saveState === 'function') saveState();

    if (fb) {
      fb.className = 'feedback-banner success';
      fb.textContent = `🌟 קְפִיצָה מֻשְׁלֶמֶת לִיָּה! מָצָאת אֶת "${round.word}" (+10 🪙)`;
    }
    if (nextBtn) nextBtn.classList.remove('hidden');
  } else {
    // Gentle teaching: speak what she tapped so she learns the sound!
    btn.style.opacity = '0.45';
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playClick();
      arcadeAudio.speak(`זֶה ${tapped}. נְנַסֶּה שׁוּב: מִצְאִי אֶת ${round.word}`, 'he-IL', 0.86);
    }
    if (fb) {
      fb.className = 'feedback-banner warning';
      fb.textContent = `✨ זֶה "${tapped}" — בּוֹאִי נְחַפֵּשׂ אֶת "${round.word}"!`;
    }
  }
}

function finishLiaOtiyot() {
  if (typeof arcadeAudio !== 'undefined') arcadeAudio.playWhistleVictory();
  if (typeof confetti !== 'undefined') confetti.burst(120);
  if (typeof addActiveTrophies === 'function') addActiveTrophies(1);
  if (typeof saveState === 'function') saveState(true);
  if (typeof updateHeaderUI === 'function') updateHeaderUI();
  const stage = document.getElementById('lia-otiyot-stage');
  const fb = document.getElementById('lia-otiyot-fb');
  const nextBtn = document.getElementById('btn-lia-otiyot-next');
  if (stage) {
    stage.innerHTML = `
      <div style="padding:28px 14px;text-align:center;background:linear-gradient(135deg,#fef9c3,#dcfce7);border-radius:20px;border:3px solid #facc15;">
        <div style="font-size:3.2rem;margin-bottom:8px;">🐸🦄🏆</div>
        <div style="font-size:1.35rem;font-weight:900;color:#064e3b;margin-bottom:6px;">כָּל הַכָּבוֹד לִיָּה! חָצִית אֶת כָּל הָאֲגַם!</div>
        <div style="font-size:1rem;font-weight:800;color:#047857;margin-bottom:14px;">קִבַּלְתְּ גָּבִיעַ וּמַטְבְּעוֹת זָהָב!</div>
        <button type="button" class="btn-primary-large" onclick="startLiaOtiyotAdventure()" style="background:linear-gradient(135deg,#10b981,#059669);border:none;">לְשַׂחֵק שׁוּב! 🔄</button>
      </div>
    `;
  }
  if (fb) fb.classList.add('hidden');
  if (nextBtn) nextBtn.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const listenBtn = document.getElementById('btn-lia-otiyot-listen');
  const nextBtn = document.getElementById('btn-lia-otiyot-next');
  if (listenBtn) {
    listenBtn.addEventListener('click', () => {
      const r = liaPondSession.rounds[liaPondSession.idx];
      if (r && typeof arcadeAudio !== 'undefined') arcadeAudio.speak(`אֵיזוֹ מִילָה אַתְּ שׁוֹמַעַת? ${r.speak}`, 'he-IL', 0.85);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      liaPondSession.idx++;
      renderLiaOtiyotRound();
    });
  }
  renderLiaPetSanctuary();
});

// ==================== LIA VIRTUAL PET SANCTUARY (BUY PETS WITH COINS!) ====================
const LIA_PETS_CATALOG = [
  { id: 'pet_dog', icon: '🐶', name: 'גּוּר כְּלָבִים', cost: 0, sound: 'הַאוּ הַאוּ! אֲנִי אוֹהֵב אוֹתָךְ לִיָּה!' },
  { id: 'pet_cat', icon: '🐱', name: 'חֲתַלְתּוּל מָתוֹק', cost: 25, sound: 'מְיָאוּ! לִיָּה הִיא הַחֲבֵרָה הֲכִי טוֹבָה שֶׁלִּי!' },
  { id: 'pet_bunny', icon: '🐰', name: 'אַרְנָבוֹן קָפְצָן', cost: 40, sound: 'קְפִיץ קְפוֹץ! אֵיזוֹ חֲכָמָה אַתְּ לִיָּה!' },
  { id: 'pet_unicorn', icon: '🦄', name: 'סוּס חַד-קֶרֶן', cost: 60, sound: 'קֶסֶם שֶׁל נִיצוֹצוֹת! אַתְּ נְסִיכָה אֲמִתִּית!' },
  { id: 'pet_panda', icon: '🐼', name: 'פַּנְדָּה חַבְרוּתִית', cost: 80, sound: 'חִבּוּק עֲנָק שֶׁל פַּנְדָּה לְלִיָּה!' },
  { id: 'pet_parrot', icon: '🦜', name: 'תֻּכִּי מְדַבֵּר', cost: 100, sound: 'שָׁלוֹם לִיָּה! בּוֹאִי נְדַבֵּר אַנְגְּלִית!' }
];

function getLiaAdoptedPets() {
  if (typeof appState === 'undefined' || !appState.liaProfile) return ['pet_dog'];
  if (!Array.isArray(appState.liaProfile.adoptedPets)) appState.liaProfile.adoptedPets = ['pet_dog'];
  return appState.liaProfile.adoptedPets;
}

function renderLiaPetSanctuary() {
  const host = document.getElementById('lia-pet-sanctuary');
  if (!host) return;
  const adopted = getLiaAdoptedPets();
  const coins = (typeof getActiveCoins === 'function') ? getActiveCoins() : 0;

  host.innerHTML = `
    <div style="background:linear-gradient(135deg,#fff1f2,#fef3c7);border:2px solid #f472b6;border-radius:18px;padding:12px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:900;font-size:1rem;color:#9d174d;">🐾 חַיּוֹת הַמַּחְמָד שֶׁל לִיָּה (לַחֲצִי לְחִבּוּק!)</span>
        <span style="background:#facc15;color:#090d16;font-weight:900;padding:2px 8px;border-radius:99px;font-size:0.78rem;">🪙 ${coins}</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        ${LIA_PETS_CATALOG.map(pet => {
          const isOwned = adopted.includes(pet.id);
          return `
            <button type="button" onclick="adoptOrPlayLiaPet('${pet.id}')" style="background:${isOwned ? '#ffffff' : 'rgba(255,255,255,0.6)'};border:2px solid ${isOwned ? '#ec4899' : '#cbd5e1'};border-radius:14px;padding:8px 4px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:3px;">
              <span style="font-size:2.1rem;${isOwned ? '' : 'filter:grayscale(0.7);opacity:0.75;'}">${pet.icon}</span>
              <span style="font-size:0.76rem;font-weight:900;color:#0f172a;">${pet.name}</span>
              <span style="font-size:0.72rem;font-weight:800;color:${isOwned ? '#db2777' : '#64748b'};">${isOwned ? '💖 שֶׁלָּךְ!' : `🪙 ${pet.cost}`}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function adoptOrPlayLiaPet(petId) {
  const pet = LIA_PETS_CATALOG.find(p => p.id === petId);
  if (!pet) return;
  const adopted = getLiaAdoptedPets();
  if (adopted.includes(petId)) {
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playMagicSparkle();
      arcadeAudio.speak(pet.sound, 'he-IL', 0.9);
    }
    if (typeof confetti !== 'undefined') confetti.burst(40);
    return;
  }

  const coins = (typeof getActiveCoins === 'function') ? getActiveCoins() : 0;
  if (coins >= pet.cost) {
    if (typeof addActiveCoins === 'function') addActiveCoins(-pet.cost);
    adopted.push(petId);
    if (typeof saveState === 'function') saveState(true);
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playWhistleVictory();
      arcadeAudio.speak(`אֵיזֶה כֵּיף לִיָּה! אִמַּצְתְּ אֶת ${pet.name}! ${pet.sound}`, 'he-IL', 0.88);
    }
    if (typeof confetti !== 'undefined') confetti.burst(95);
    renderLiaPetSanctuary();
  } else {
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playClick();
      arcadeAudio.speak(`לְ-${pet.name} צָרִיךְ ${pet.cost} מַטְבְּעוֹת! שַׂחֲקִי עוֹד קְצָת וְתַאֲסְפִי!`, 'he-IL', 0.88);
    }
  }
}
