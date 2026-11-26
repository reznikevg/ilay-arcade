// ==================== ILAY'S INTERACTIVE TAP-ANY-WORD READING CHALLENGE ("אתגר הקריאה של עילי") ====================
// Short, vocalized, high-interest stories where Ilay can tap ANY individual word he gets stuck on to hear it!

const ILAY_SHORT_STORIES = [
  {
    id: 'story_beitar',
    title: '⚽ הַגּוֹל בַּדַּקָּה הָאַחֲרוֹנָה בְּטֶדִי',
    icon: '🦁',
    text: 'אִצְטַדְיוֹן טֶדִי הָיָה מָלֵא בְּאַלְפֵי אוֹהֲדִים שֶׁשָּׁרוּ בְּקוֹל רָם. הַשָּׁעוֹן הֶרְאָה שֶׁנּוֹתְרוּ רַק שְׁתֵּי דַּקּוֹת לְסִיּוּם הַמִּשְׂחָק וְהַתּוֹצָאָה הָיְתָה תֵּיקוּ. פִּתְאוֹם קִבֵּל עִילַי מְסִירָה מְדֻיֶּקֶת מֵחֲבֵרוֹ לַקְּבוּצָה, עָבַר שְׁנֵי מְגִנִּים בִּזְרִיזוּת וּבָעַט בְּעִיטָה חֲזָקָה יָשָׁר לַחִבּוּרִים!',
    questions: [
      {
        q: 'מַה הָיְתָה הַתּוֹצָאָה שְׁתֵּי דַּקּוֹת לִפְנֵי סִיּוּם הַמִּשְׂחָק?',
        ans: 'תֵּיקוּ (שִׁוְיוֹן)',
        wrong: ['הֶפְסֵד', 'נִצָּחוֹן גָּדוֹל', 'הַמִּשְׂחָק בֻּטַּל'],
        hint: 'כתוב בסיפור: "נותרו רק שתי דקות לסיום המשחק והתוצאה הייתה תיקו".'
      },
      {
        q: 'בְּאֵיזוֹ מִילָה מִשְׁתַּמֵּשׁ הַסִּפּוּר כְּדֵי לְתָאֵר שֶׁעִילַי עָבַר אֶת הַמְּגִנִּים?',
        ans: 'בִּזְרִיזוּת (בִּמְהִירוּת)',
        wrong: ['בְּעַצְלוּת', 'בְּלֹא רָצוֹן', 'בְּעֶצֶב'],
        hint: 'זריזות פירושה מהירות ותנועה חדה!'
      }
    ]
  },
  {
    id: 'story_mars',
    title: '🚀 הַחֲלָלִית שֶׁנָּחֲתָה עַל מַאְדִּים',
    icon: '🚀',
    text: 'כּוֹכַב הַלֶּכֶת מַאְדִּים נִקְרָא גַּם "הַכּוֹכָב הָאָדֹם" מִשּׁוּם שֶׁאֲדָמָתוֹ מְכֻסָּה בְּאָבָק אֲדַמְדַּם. רֹובּוֹט חָכָם שֶׁשָּׁלְחוּ הַמַּדְּעָנִים נוֹסֵעַ עַל פְּנֵי הַקַּרְקַע, מְצַלֵּם סְלָעִים וּמְחַפֵּשׂ סִימָנִים שֶׁל מַיִם עַתִּיקִים שֶׁהָיוּ שָׁם בֶּעָבָר.',
    questions: [
      {
        q: 'מַדּוּעַ מַאְדִּים נִקְרָא "הַכּוֹכָב הָאָדֹם"?',
        ans: 'כִּי אֲדָמָתוֹ מְכֻסָּה בְּאָבָק אֲדַמְדַּם',
        wrong: ['כִּי יֵשׁ בּוֹ הֲמוֹן פְּרָחִים אֲדֻמִּים', 'כִּי הוּא קָרוֹב מְאֹד לַיָּם', 'כִּי הַשֶּׁמֶשׁ צָבְעָה אוֹתוֹ'],
        hint: 'הסיבה כתובה מיד אחרי המילה "משום ש...": אדמתו מכוסה באבק אדמדם!'
      },
      {
        q: 'מָה תַּפְקִידוֹ שֶׁל הָרוֹבּוֹט שֶׁנִּשְׁלַח לְמַאְדִּים?',
        ans: 'לְצַלֵּם סְלָעִים וּלְחַפֵּשׂ סִימָנִים שֶׁל מַיִם עַתִּיקִים',
        wrong: ['לִבְנוֹת בָּתִּים לְאַסְטְרוֹנָאוּטִים', 'לִזְרֹעַ עֵצִים יְרֻקִּים', 'לְהָבִיא חֲלָלִיּוֹת חֲדָשׁוֹת'],
        hint: 'הרובוט נוסע על הקרקע, מצלם סלעים ומחפש סימני מים עתיקים!'
      }
    ]
  },
  {
    id: 'story_dolphins',
    title: '🐬 הַסּוֹד הֶחָכָם שֶׁל הַדּוֹלְפִינִים',
    icon: '🐬',
    text: 'הַדּוֹלְפִינִים חַיִּים בִּקְבוּצוֹת גְּדוֹלוֹת וּמִתְקַשְּׁרִים זֶה עִם זֶה בְּעֶזְרַת שְׁרִיקוֹת וּקְלִיקִים מְיֻחָדִים. כְּשֶׁדּוֹלְפִין אֶחָד מוֹצֵא לַהֲקַת דָּגִים, הוּא קוֹרֵא לַחֲבֵרָיו כְּדֵי שֶׁיַּקִּיפוּ אוֹתָהּ יַחַד וְיֹאכְלוּ בְּשֻׁתָּפוּת.',
    questions: [
      {
        q: 'כֵּיצַד מְדַבְּרִים הַדּוֹלְפִינִים בֵּינֵיהֶם בַּמַּיִם?',
        ans: 'בְּעֶזְרַת שְׁרִיקוֹת וּקְלִיקִים מְיֻחָדִים',
        wrong: ['בְּעֶזְרַת נְפָנוּף סְנַפִּירִים בִּלְבַד', 'בְּעֶזְרַת שִׁירִים בָּעִבְרִית', 'הֵם לֹא מְתַקְשְׁרִים בִּכְלָל'],
        hint: 'הסיפור מסביר שהם מתקשרים זה עם זה בעזרת שריקות וקליקים מיוחדים!'
      },
      {
        q: 'מָה מְלַמֶּדֶת הַתְנַהֲגוּת שֶׁל הַדּוֹלְפִינִים כְּשֶׁהֵם מוֹצְאִים דָּגִים?',
        ans: 'שֶׁהֵם עוֹבְדִים בְּשִׁתּוּף פְּעֻלָּה וְעוֹזְרִים זֶה לָזֶה',
        wrong: ['שֶׁכָּל דּוֹלְפִין דּוֹאֵג רַק לְעַצְמוֹ', 'שֶׁהֵם פּוֹחֲדִים מִדָּגִים', 'שֶׁהֵם יְשֵׁנִים כָּל הַיּוֹם'],
        hint: 'הדולפין קורא לחבריו כדי שיאכלו יחד בשותפות — זהו שיתוף פעולה!'
      }
    ]
  },
  {
    id: 'story_dino',
    title: '🦖 תַּעֲלוּמַת הַדִּינוֹזָאוּר בַּמּוּזֵאוֹן',
    icon: '🦖',
    text: 'דָּנִי וְעִילַי בִּקְּרוּ בְּמוּזֵאוֹן הַטֶּבַע וְרָאוּ שֶׁלֶד עֲנָקִי שֶׁל טִירָנוֹזָאוּרוּס רֶקְס. הַמַּדְרִיךְ הִסְבִּיר שֶׁהַחֲיָּה הַזֹּאת חָיְתָה לִפְנֵי מִילְיוֹנֵי שָׁנִים, וְשֶׁיְּכוֹלִים לִלְמֹד עַל גָּדְלָהּ מֵהַמְּאֻבָּנִים שֶׁנִּשְׁמְרוּ עָמֹק בְּתוֹךְ הַסְּלָעִים.',
    questions: [
      {
        q: 'כֵּיצַד יוֹדְעִים הַמַּדְּעָנִים עַל גֹּדֶל הַדִּינוֹזָאוּרִים אִם הֵם נִכְחֲדוּ מִזְּמַן?',
        ans: 'מִתּוֹךְ הַמְּאֻבָּנִים וְהַשְּׁלָדִים שֶׁנִּשְׁמְרוּ בַּסְּלָעִים',
        wrong: ['מִתְּמוּנוֹת שֶׁצִּלְּמוּ בְּטֵלֵפוֹן', 'מִסְּרָטִים בַּטֵּלֵוִיזְיָה', 'מִסִּפּוּרֵי הַסָּבְתוֹת'],
        hint: 'המדריך הסביר שניתן ללמוד על גודלה מהמאובנים שנשמרו עמוק בסלעים!'
      },
      {
        q: 'מָתַי חָיוּ הַדִּינוֹזָאוּרִים?',
        ans: 'לִפְנֵי מִילְיוֹנֵי שָׁנִים',
        wrong: ['לִפְנֵי שָׁנָה אַחַת', 'רַק בַּמֵּאָה הַשֶּׁעָבְרָה', 'הֵם חַיִּים בַּגַּן הַחַיּוֹת'],
        hint: 'כתוב בסיפור: "שהחיה הזאת חיתה לפני מיליוני שנים".'
      }
    ]
  }
];

let storySession = {
  story: null,
  qIdx: 0,
  answered: false
};

function startIlayStoryChallenge(storyIndex) {
  const idx = typeof storyIndex === 'number' ? storyIndex : Math.floor(Math.random() * ILAY_SHORT_STORIES.length);
  storySession = {
    story: ILAY_SHORT_STORIES[idx],
    qIdx: 0,
    answered: false
  };
  if (typeof switchView === 'function') switchView('ilay-stories');
  renderIlayStoryView();
}

function renderIlayStoryView() {
  const st = storySession.story;
  if (!st) return;
  storySession.answered = false;

  const titleEl = document.getElementById('story-title');
  const textEl = document.getElementById('story-text-box');
  const qBox = document.getElementById('story-question-box');
  const optsBox = document.getElementById('story-options-box');
  const fb = document.getElementById('story-feedback');
  const nextBtn = document.getElementById('btn-story-next');

  if (titleEl) titleEl.textContent = `${st.icon} ${st.title}`;
  if (textEl) {
    textEl.innerHTML = st.text;
    if (typeof enableTapAnyWordInStimulus === 'function') {
      enableTapAnyWordInStimulus(textEl);
    }
  }

  const qObj = st.questions[storySession.qIdx];
  if (!qObj) {
    if (qBox) qBox.innerHTML = `<div style="font-size:1.15rem;font-weight:900;color:#047857;">🏆 כל הכבוד עילי! סיימת את הסיפור בהצלחה! (+15 🪙)</div>`;
    if (optsBox) optsBox.innerHTML = `<button type="button" class="btn-primary-large" onclick="startIlayStoryChallenge()" style="width:100%;background:#3b82f6;border:none;">📖 קרא עוד סיפור חדש! ⬅️</button>`;
    if (fb) fb.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    return;
  }

  if (qBox) qBox.textContent = `שאלה ${storySession.qIdx + 1}/${st.questions.length}: ${qObj.q}`;
  if (fb) { fb.className = 'feedback-banner hidden'; fb.textContent = ''; }
  if (nextBtn) nextBtn.classList.add('hidden');

  if (optsBox) {
    const allOpts = [qObj.ans, ...qObj.wrong].sort(() => Math.random() - 0.5);
    optsBox.innerHTML = allOpts.map(opt => `
      <button type="button" class="option-row story-opt-btn" data-val="${opt}" style="width:100%;text-align:right;justify-content:space-between;">
        <span>${opt}</span>
        <span class="opt-indicator">•</span>
      </button>
    `).join('');

    optsBox.querySelectorAll('.story-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => handleStoryOptionClick(btn, qObj));
    });
  }
}

function handleStoryOptionClick(btn, qObj) {
  if (storySession.answered) return;
  const val = btn.dataset.val;
  const fb = document.getElementById('story-feedback');
  const nextBtn = document.getElementById('btn-story-next');

  if (val === qObj.ans) {
    storySession.answered = true;
    btn.classList.add('correct');
    if (typeof arcadeAudio !== 'undefined') arcadeAudio.playGoalSuccess();
    if (typeof confetti !== 'undefined') confetti.burst(80);
    if (typeof addActiveCoins === 'function') addActiveCoins(15);
    if (typeof updateHeaderUI === 'function') updateHeaderUI();
    if (typeof saveState === 'function') saveState();
    if (fb) {
      fb.className = 'feedback-banner success';
      fb.textContent = `🌟 תשובה מצוינת עילי! +15 🪙`;
    }
    if (nextBtn) nextBtn.classList.remove('hidden');
  } else {
    btn.classList.add('wrong');
    btn.style.opacity = '0.45';
    if (typeof arcadeAudio !== 'undefined') {
      arcadeAudio.playMiss();
      arcadeAudio.speak(`רמז: ${qObj.hint}`, 'he-IL', 0.88);
    }
    if (fb) {
      fb.className = 'feedback-banner warning';
      fb.textContent = `💡 רמז: ${qObj.hint}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const speakAllBtn = document.getElementById('btn-story-speak-all');
  const nextBtn = document.getElementById('btn-story-next');
  if (speakAllBtn) {
    speakAllBtn.addEventListener('click', () => {
      if (storySession.story && typeof arcadeAudio !== 'undefined') {
        arcadeAudio.speak(storySession.story.text, 'he-IL', 0.84);
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      storySession.qIdx++;
      renderIlayStoryView();
    });
  }
});
