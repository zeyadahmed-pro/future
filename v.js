const DAYS = [
  { day: 1, title: 'The Beginning', text: 'A cinematic welcome dedicated to the woman who makes everything feel softer, warmer, and more beautiful just by being in my life.', highlight: 'This is my favorite kind of beginning: the one where my heart found you.' },
  { day: 2, title: 'My Everything', text: 'You are my peace, my joy, and the favorite person in every dream I keep alive. You make even ordinary days feel sacred.', highlight: 'Every part of my heart feels more complete with you in it.' },
  { day: 3, title: 'The Eyes I Hope to See', text: 'I imagine the day I can look into your eyes in person. Until then, every message and conversation lets me discover more of the warmth, kindness, and wonder in your heart.', highlight: 'I cannot wait for the day our first in-person hello becomes a memory we share.' },
  { day: 4, title: 'My Favorite Person', text: 'I love how your messages can make me smile in the middle of an ordinary day. Even through a screen, your humor and warmth have a way of making the distance feel smaller.', highlight: 'You are the person I want to keep choosing, in every season of life.' },
  { day: 5, title: 'My Safe Place', text: 'Our conversations have become a place where I can be honest, feel understood, and find comfort. Even from far away, your words soften my world.', highlight: 'The safest feeling is knowing I can talk to you and be myself.' },
  { day: 6, title: 'Your Smile', text: 'I imagine your smile whenever one of your messages makes me happy. I hope one day I get to see that smile in person and tell you how much it brightens my world.', highlight: 'Until that day, even the thought of your smile makes my heart feel lighter.' },
  { day: 7, title: 'One Week of Us', text: 'A week of us has felt like a thousand little miracles stitched together with love, tenderness, and the kind of happiness I never want to lose.', highlight: 'Every day with you is a gift I treasure deeply.' },
  { day: 8, title: 'My Favorite Notification', text: 'Even a simple message from you feels like a little spark of light in my day. Your words carry warmth that reaches my heart immediately.', highlight: 'You are the best part of my digital world and my real one.' },
  { day: 9, title: 'The Love Letter', text: 'Some words are too heavy with feeling to speak out loud, so I write them instead. My heart always knows how to say your name in the most beautiful ways.', highlight: 'My heart has always known how to love you fully.' },
  { day: 10, title: 'Ten Reasons I Love You', text: 'You are kind, beautiful, thoughtful, strong, funny, gentle, brilliant, warm, and so deeply loved. The reasons are endless because you are endless in all the best ways.', highlight: 'Every reason feels like a little prayer of gratitude for your existence.' },
  { day: 11, title: 'Our Little World', text: 'It feels like we have our own soft universe where nothing else matters except us, our laughter, our comfort, and the way love settles between us naturally.', highlight: 'A tiny world made of peace, joy, and the kind of connection I never want to lose.' },
  { day: 12, title: 'You Make Life Brighter', text: 'You bring warmth to every corner of my thoughts and make everything softer, kinder, and more beautiful. Life feels fuller when you are in it.', highlight: 'Life feels brighter whenever you are in it, and I never take that for granted.' },
  { day: 13, title: 'When We Finally Meet', text: 'I imagine the day we finally meet in person: the first hello, the nervous excitement, and the moment all our conversations become a memory we can share face to face.', highlight: 'Until then, every chat brings our hearts a little closer.' },
  { day: 14, title: 'Forever Isn’t Enough', text: 'No amount of time would ever be enough to tell you how deeply I adore you, how much I admire you, and how sincerely I want to keep choosing you forever.', highlight: 'I keep wishing for a lifetime and then a thousand more with you.' },
  { day: 15, title: 'Halfway to Thirty', text: 'We are already halfway through this beautiful chapter, and it feels so full of tenderness, laughter, and the kind of love that grows effortlessly.', highlight: 'Every day is making this story even more unforgettable.' },
  { day: 16, title: 'Our Playlist', text: 'The soundtrack of us is made of our conversations, your laughter, sweet messages, and the little moments that make me look forward to hearing from you again.', highlight: 'Every chat adds another lovely note to the song of us.' },
  { day: 17, title: 'Our Memory Box', text: 'I want to keep every little thing — the messages that made me smile, the conversations that lasted longer than expected, the jokes only we understand, and every thoughtful check-in.', highlight: 'Our story is growing one conversation and one cherished message at a time.' },
  { day: 18, title: 'My Favorite Human', text: 'You are the person who makes my heart feel at home and my soul feel seen. Every time we talk, I feel a little happier, calmer, and more like myself.', highlight: 'Your words and the way you understand me are a comfort I treasure.' },
  { day: 19, title: 'A Thousand Hugs', text: 'If I could send a thousand hugs through the screen, I would send them whenever you had a tiring day, until you felt surrounded by all the tenderness I wish I could give in person.', highlight: 'I am saving that first real hug for the day we finally meet.' },
  { day: 20, title: 'Our Future', text: 'I keep imagining a life where your dreams and mine meet in the softest place, where love is the foundation of everything and joy lives in the little things.', highlight: 'The future is beautiful when it includes you, and I can already feel it.' },
  { day: 21, title: 'Three Weeks of Us', text: 'This little journey keeps getting richer, warmer, and more unforgettable. Every day with you feels more meaningful than the last.', highlight: 'The love only becomes more beautiful with time.' },
  { day: 22, title: 'Vicky, My Future Wife', text: 'I already imagine the beautiful life we will build, and every dream feels brighter with your name in it. I can see our future growing softly and beautifully before me.', highlight: 'You are the future I want to wake up beside every day, smiling at your face and thanking God for you.' },
  { day: 23, title: 'Future Husband Application', text: 'I am applying for the role of the man who loves you well, protects your peace, cherishes your heart, and chooses you with tenderness every day.', highlight: 'I would gladly be the husband who makes your life feel safe, joyful, and deeply loved.' },
  { day: 24, title: 'Our Dream Date', text: 'I can imagine a beautiful night with you, lit by love and full of the kind of joy you deserve. A slow evening, warm laughter, and your hand in mine would be enough to make heaven feel close.', highlight: 'My favorite date is any evening spent making you smile.' },
  { day: 25, title: 'Our Dream Home', text: 'A home with you would feel like a thousand soft mornings and evenings full of warmth, laughter, and the comfort of being loved deeply. It would be a place where peace lives softly.', highlight: 'I see a life full of laughter, comfort, and our own little world, and it feels like home.' },
  { day: 26, title: 'My Promises', text: 'I promise to love you with patience, respect, honesty, and unwavering support. I want to be the kind of man who makes your heart feel secure and your spirit feel celebrated.', highlight: 'I want to be the steady heart you can always lean on, always trust, and always feel loved by.' },
  { day: 27, title: 'The Things I Never Say', text: 'Some of the strongest feelings are the ones I carry in silence and in my heart — the ones that are too sacred to speak plainly but too real to hide. I love you more than words can hold.', highlight: 'I love you more than time can measure and more than I can fully express.' },
  { day: 28, title: 'Our Next Chapter', text: 'This is only the beginning of the story I want to live with you — a story full of tenderness, adventure, laughter, and a love that grows deeper with each chapter.', highlight: 'Every new chapter feels brighter when it is written with you.' },
  { day: 29, title: 'Almost Forever', text: 'The closer we get to forever, the more beautiful it feels. Every step toward a future with you feels like a promise becoming real in the gentlest, sweetest way.', highlight: 'Every step forward feels like a prayer answered by love.' },
  { day: 30, title: 'You Are My Universe', text: 'You are the center of my joy, the calm in my storms, and the future I never stop choosing. My life feels richer, softer, and more beautiful because you are in it.', highlight: 'My heart belongs to you in every life and every season, and I will keep loving you with all that I am.' }
];

const STORAGE_KEY = 'love-universe-calendar';
const LETTERS = {
  1: 'To my everything, I do not think I have ever known love the way I feel it with you. You have become the soft place my heart returns to, the warm light in my thoughts, and the kind of person I admire in ways that go deeper than attraction. I love the way your presence changes the atmosphere around me. Even ordinary moments feel more meaningful when you are part of them. I want you to know that the way I love you is steady, sincere, and growing every day. You are not just someone I care about; you are someone I feel grateful to know, to cherish, and to keep choosing in every future I imagine.',
  2: 'To my beautiful girl, I think the world is a little brighter because you are in it. There is something quietly extraordinary about your presence — the way your kindness feels natural, the way your smile changes the mood of a room, and the way your heart seems to carry warmth without even trying. I admire the woman you are, not just the way you look, but the strength, gentleness, and depth that live in you. Every time I think about you, I feel a little more thankful that life gave me the chance to know you. You deserve to be loved patiently, sincerely, and beautifully, and that is exactly how I want to love you.',
  3: 'To the eyes I hope to see in person one day, I imagine they hold the same warmth and wonder I find in your words. We have not met face to face yet, but every conversation lets me discover more of the thoughtful, beautiful person behind them. I look forward to the moment I can say hello without a screen between us, and to all the memories we still have ahead of us. Until then, your messages already bring a kind of comfort and hope that makes my days feel softer.',
  4: 'To my favorite person, my favorite part of an ordinary day is often seeing a message from you and knowing we get to share another conversation. I love how easily we can make each other laugh, how your words lift my spirit, and how even a quick check-in can make the distance feel smaller. We have not made our first in-person memories yet, but the conversations we share already mean so much to me. I hope you know how much I enjoy talking with you, how comfortable you make me feel, and how excited I am for everything our story still has ahead.',
  5: 'To my future wife, I am not writing this as a promise that life will be perfect, but as a promise that I want to build something honest, warm, and lasting with you. I can imagine our future in gentle details — quiet mornings, shared laughter, the comfort of being known, and the way love can feel like a safe place to land. I believe in the kind of future where we grow together, respect each other deeply, and keep choosing softness even when life is complicated. I want to be the kind of man who helps you feel secure, cherished, and understood. That is the future I dream about, and I want it to include you.',
  6: 'For the days you need a smile, I hope this reaches you at a moment when your heart needs a little softness. Sometimes life feels heavy, and sometimes it is hard to remember that you are deeply loved even in the middle of ordinary stress. I want you to know that you matter, that your feelings matter, and that the world is better for having your warmth in it. If I could, I would do whatever I could to make your day lighter and your heart a little calmer. Until then, I hope this reminds you that someone loves you deeply and is grateful for the way you bring light to the people around you.',
  7: 'For the times I wish I could be there, I imagine the simple things we have not experienced yet — sitting beside you, hearing your voice in person, and sharing a quiet moment without a screen between us. We have not met face to face yet, but our conversations make me look forward to that day with a full heart. Until then, I want to keep showing up for you through thoughtful messages, patient listening, and the care I hope you can feel even from far away.',
  8: 'For the beautiful person you are, I want to remind you that I admire the way you carry yourself with grace, love, and quiet strength. The way you care for others, the way you make people feel welcomed, and the way you keep your soul gentle even in difficult moments — all of it is beautiful to me. I respect the person you are and the life you are building inside yourself. I hope you never forget how precious you are, how much you are worth, and how deeply you are loved. You are not just a beautiful person to me; you are a beautiful presence in my life and in the story I want to keep writing with you.',
  9: 'For the future I dream about, I carry this hope in a gentle way: that one day we will have the kind of life where ordinary moments feel like blessings. A future where we can laugh easily, talk honestly, and grow without losing the softness that brought us together. I imagine a life full of shared dreams, patient love, and the kind of companionship that turns even a quiet night into something meaningful. I do not need a perfect future to believe that ours could be beautiful. I just need us, and the love we are already learning to nurture in the present.',
  10: 'This is the letter I want you to keep — not because I am trying to say everything in one message, but because I want you to remember how deeply you are loved. You are a person who brings calm to my mind, joy to my heart, and purpose to my feelings. The way I love you is not shallow, and it is not temporary. It is sincere, patient, affectionate, and full of respect. I hope you keep this letter as a reminder that you are cherished in ways that go beyond words. I will keep loving you with the best parts of myself, and I hope that is something you always feel.'
};

const SWEET_MESSAGES = [
  'You are the softest place my heart knows how to rest.',
  'I love the way your presence makes everything feel calmer and kinder.',
  'You make even ordinary moments feel full of magic.',
  'I am grateful for the way you make my world feel warmer.',
  'Thinking about you makes my heart feel light and full.',
  'You are one of the greatest blessings I have ever known.',
  'Your smile carries a kind of peace I never knew I needed.',
  'I love the way you make life feel softer and more beautiful.',
  'Being near you makes my heart feel safe, happy, and at home.',
  'You are my favorite kind of comfort and my favorite kind of joy.',
  'There is something deeply beautiful about the way you love.',
  'You make even quiet moments feel like a gift.',
  'Your kindness is one of the things I admire most about you.',
  'I keep finding new reasons to love you in the smallest details.',
  'You are the kind of person who changes a room just by being in it.',
  'The way you care about people is one of your greatest treasures.',
  'I love how your presence makes me want to be gentler and better.',
  'You have a beautiful way of making the world feel less heavy.',
  'There is so much warmth in the way you love people.',
  'I hope you know how deeply you are treasured.',
  'You are the kind of beautiful that goes far beyond appearance.',
  'I love the way your heart feels generous and sincere.',
  'You make life feel more alive in the best possible way.',
  'Even your silence feels comforting to me.',
  'I love how naturally you make ordinary days feel special.',
  'You have the kind of soul that leaves a lasting warmth behind.',
  'You are one of the few people who make my heart feel at peace.',
  'I admire the way you carry yourself with grace.',
  'There is nothing I wish for more than seeing you happy.',
  'You are the kind of person I am truly lucky to know.',
  'I love the way you make me feel heard and seen.',
  'Your heart is one of the most beautiful things I have ever known.',
  'You make the world feel gentler just by existing in it.',
  'I hope you always remember how loved you are.',
  'Your smile is one of the most beautiful parts of my day.',
  'The way you love feels like a soft, golden light.',
  'I love how you make simple moments feel meaningful.',
  'You are my favorite person to think about when the day slows down.',
  'Your eyes hold a kind of warmth I cannot stop noticing.',
  'I keep falling for the way you make me feel calm.',
  'You are the reason I believe love can feel both gentle and powerful.',
  'I love the little things you do that say so much about your heart.',
  'You have a beautiful way of making people feel seen.',
  'I am grateful to know someone as amazing as you.',
  'Your presence makes my life feel richer, warmer, and brighter.',
  'I love the way you make ordinary conversations feel memorable.',
  'You are a lovely reminder that good things can feel quiet and deep.',
  'The best part of my day is the part where I think of you.',
  'Your kindness has a way of making everything feel more human.',
  'I want to keep learning your heart forever.',
  'You are one of the rare people who make the world feel softer.',
  'You deserve all the tenderness and admiration in the world.',
  'I love the way you make my heart feel safe enough to relax.',
  'Your laugh is one of my favorite sounds in life.',
  'You make love feel natural, beautiful, and easy to trust.',
  'I admire the reflection of love and grace I see in you.',
  'You are the kind of dream that feels both comforting and breathtaking.',
  'Even my hardest days feel easier when I think of you.',
  'Your heart is beautiful in a way that leaves a lasting impression.',
  'I love the gentleness of your spirit and the depth of your soul.',
  'You make the world feel less complicated simply by being in it.',
  'I am so lucky to have you in my life.',
  'I hope you know how deeply you are admired and appreciated.',
  'There is something so lovely about the way you make people feel welcome.',
  'Your love has a way of making everyday life feel more meaningful.',
  'I love you in the quiet moments, in the smiles, and in the stillness.',
  'You make time feel softer and my heart feel fuller.',
  'Every thought of you feels like a small, beautiful blessing.',
  'I hope you always remember how rare and beautiful you are.',
  'Your presence brings warmth to every place it touches.',
  'I love the way you make me want to be more patient, more kind, and more sincere.',
  'You are the kind of person who makes love feel like home.',
  'There is a grace in you that I admire more than I can say.',
  'I love how naturally you bring light into my life.',
  'You make beautiful things feel even more beautiful.',
  'I am always grateful for the comfort of knowing you.',
  'Your heart makes the world feel kinder and kinder.',
  'I love the way you make me feel like I can breathe easier.',
  'You are the calm in my chaos and the warmth in my quiet moments.',
  'I love the way you make my dreams feel easier to believe in.',
  'You have a beautiful way of making life feel full of gentle meaning.',
  'I admire the honesty and tenderness inside you.',
  'The way you love has shaped my heart in the best ways.',
  'You are the person I want beside me in every season of life.',
  'Every moment with you feels like a memory worth keeping.',
  'You make my life feel like it has more light in it.',
  'I still find myself amazed by how beautiful your heart is.',
  'You are my favorite chapter, my favorite reminder, and my favorite person.',
  'I love your softness, your strength, and the way you make life feel full of hope.',
  'The way you care makes me feel deeply lucky to know you.',
  'You are proof that love can be both gentle and powerful.',
  'I feel so grateful for the way you are in my life.',
  'You are the kind of love that makes everything feel worth cherishing.',
  'I hope you always keep that beautiful glow inside you.',
  'Even the simplest thought of you feels like a blessing.',
  'You are my sweetest reminder that life can be beautiful and tender at once.',
  'I love the way you make my heart feel at peace and full of joy at the same time.',
  'I keep choosing you in the small moments, and somehow those are the ones that mean the most.',
  'You are the kind of person who makes love feel gentle, steady, and deeply alive.'
];

const FUTURE_MESSAGES = {
  'dream-dates': 'I imagine us taking our time on dream dates — slow dinners, soft laughter, quiet glances, and the kind of conversation where the world feels less loud and more beautiful.',
  'little-adventures': 'I picture us taking little adventures, discovering places, and turning the smallest moments into stories we will treasure because we are sharing them together.',
  'ordinary-mornings': 'The future I dream about is not just big gestures — it is the comfort of ordinary mornings, the warmth of your smile, and the peace of waking up beside you.',
  'dream-home': 'I imagine a home full of gentle light, thoughtful touches, and a love that makes every room feel warmer and more alive because you are in it.',
  'celebrating-dreams': 'I want to celebrate your dreams as if they are my own, cheering you on and loving the life you are building with patience and happiness.',
  'future-memories': 'And I believe the best memories are still waiting for us — the ones we have not made yet, but the ones I hope will feel like home.'
};

const state = {
  mode: 'calendar',
  startDate: new Date(new Date().getFullYear(), 8, 24),
  completed: [],
  currentLetterIndex: 0,
  sweetMessageIndex: 0,
  futureDreamIndex: 0
};

const dayGrid = document.getElementById('dayGrid');
const selectedDayDetail = document.getElementById('selectedDayDetail');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const startDateInput = document.getElementById('startDateInput');
const letterModal = document.getElementById('letterModal');
const letterContent = document.getElementById('letterContent');
const sweetMessageText = document.getElementById('sweetMessageText');
const sweetMessageBtn = document.getElementById('sweetMessageBtn');
const prevLetterBtn = document.getElementById('prevLetterBtn');
const nextLetterBtn = document.getElementById('nextLetterBtn');
const reviewApplicationBtn = document.getElementById('reviewApplicationBtn');
const applicationCertificate = document.getElementById('applicationCertificate');
const futureDreamText = document.getElementById('futureDreamText');
const everythingLetterText = document.getElementById('everythingLetterText');
const everythingLetterBtn = document.getElementById('everythingLetterBtn');

function loadState() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  state.mode = saved.mode || 'calendar';
  const defaultStartDate = new Date(new Date().getFullYear(), 8, 24);
  const initialDate = typeof saved.startDate === 'string'
    ? parseDateInput(saved.startDate.slice(0, 10))
    : defaultStartDate;
  state.startDate = initialDate || defaultStartDate;
  state.completed = Array.isArray(saved.completed) ? saved.completed.filter((value) => Number.isInteger(value) && value >= 1 && value <= 30) : [];

  startDateInput.value = formatDateForInput(state.startDate);
  document.querySelector(`input[name="unlockMode"][value="${state.mode}"]`).checked = true;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    mode: state.mode,
    startDate: formatDateForInput(state.startDate),
    completed: state.completed
  }));
}

function formatDateForInput(date) {
  const tmp = new Date(date);
  const year = tmp.getFullYear();
  const month = String(tmp.getMonth() + 1).padStart(2, '0');
  const day = String(tmp.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDateInput(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    return null;
  }

  const [, year, month, day] = match.map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

function addDays(date, days) {
  const cloned = new Date(date);
  cloned.setDate(cloned.getDate() + days);
  return cloned;
}

function getUnlockedCount() {
  if (state.mode === 'instant') {
    return DAYS.length;
  }

  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const start = Date.UTC(state.startDate.getFullYear(), state.startDate.getMonth(), state.startDate.getDate());
  const diff = Math.floor((today - start) / 86400000);
  return Math.min(DAYS.length, Math.max(0, diff + 1));
}

function dayIsUnlocked(dayNumber) {
  if (state.mode === 'instant') {
    return true;
  }

  const unlockNumber = getUnlockedCount();
  return dayNumber <= unlockNumber;
}

function getUnlockDate(dayNumber) {
  const unlockDate = addDays(state.startDate, dayNumber - 1);
  return unlockDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderProgress() {
  const totalDays = DAYS.length;
  const completedCount = state.completed.length;
  const unlockedCount = getUnlockedCount();
  const percent = Math.min(100, (completedCount / totalDays) * 100);

  progressText.textContent = `${completedCount} / ${totalDays}`;
  progressFill.style.width = `${percent}%`;
  document.querySelectorAll('.progress-summary').forEach((node) => node.remove());

  const summary = document.createElement('div');
  summary.className = 'progress-summary';
  summary.innerHTML = `
    <span>Unlocked: ${unlockedCount} / ${totalDays}</span>
    <span>Completed: ${completedCount} / ${totalDays}</span>
  `;
  document.querySelector('.progress-panel').appendChild(summary);
}

function createDayCard(day) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'day-card glass-card';

  const unlocked = dayIsUnlocked(day.day);
  const complete = state.completed.includes(day.day);

  if (!unlocked) {
    button.classList.add('is-locked');
  }

  if (complete) {
    button.classList.add('is-complete');
  }

  button.innerHTML = `
    <div class="day-card-head">
      <span>Day ${day.day}</span>
      <span>${complete ? 'Done' : unlocked ? 'Open' : 'Locked'}</span>
    </div>
    <div class="day-card-name">${day.title}</div>
    <p>${day.highlight}</p>
    <small>${unlocked ? (complete ? 'Completed' : 'Available now') : `Unlocks ${getUnlockDate(day.day)}`}</small>
  `;

  button.addEventListener('click', () => {
    if (!dayIsUnlocked(day.day)) {
      return;
    }

    const currentIndex = state.completed.indexOf(day.day);
    if (currentIndex !== -1) {
      state.completed.splice(currentIndex, 1);
    } else {
      state.completed.push(day.day);
      state.completed.sort((a, b) => a - b);
    }

    saveState();
    renderCalendar();
  });

  return button;
}

function renderSelectedDay(dayNumber) {
  const selected = DAYS.find((item) => item.day === dayNumber) || DAYS[0];

  selectedDayDetail.innerHTML = `
    <div class="selected-day-header">
      <p class="eyebrow">Day ${selected.day}</p>
      <h3>${selected.title}</h3>
    </div>
    <p>${selected.text}</p>
    <p>${selected.highlight}</p>
    <p><strong>Status:</strong> ${state.completed.includes(selected.day) ? 'Completed' : (dayIsUnlocked(selected.day) ? 'Available' : `Locked until ${getUnlockDate(selected.day)}`)}</p>
  `;
}

function renderCalendar() {
  dayGrid.innerHTML = '';
  const unlockedCount = getUnlockedCount();

  DAYS.forEach((day) => {
    const card = createDayCard(day);
    card.addEventListener('mouseenter', () => {
      renderSelectedDay(day.day);
    });
    card.addEventListener('focus', () => {
      renderSelectedDay(day.day);
    });
    dayGrid.appendChild(card);
  });

  const firstAvailable = DAYS.find((day) => dayIsUnlocked(day.day)) || DAYS[0];
  renderSelectedDay(firstAvailable.day);

  renderProgress();
  document.querySelector('.progress-panel').setAttribute('data-unlocked', String(unlockedCount));
}

function openLetter(letterId) {
  const index = Number(letterId) - 1;
  state.currentLetterIndex = Math.max(0, Math.min(index, Object.keys(LETTERS).length - 1));
  const messages = Object.values(LETTERS);
  letterContent.textContent = messages[state.currentLetterIndex];
  letterModal.classList.add('open');
}

function cycleLetter(direction) {
  const total = Object.keys(LETTERS).length;
  state.currentLetterIndex = (state.currentLetterIndex + direction + total) % total;
  const messages = Object.values(LETTERS);
  letterContent.textContent = messages[state.currentLetterIndex];
}

function closeLetter() {
  letterModal.classList.remove('open');
}

function showSweetMessage() {
  if (!sweetMessageText) {
    return;
  }

  const total = SWEET_MESSAGES.length;
  const nextIndex = (state.sweetMessageIndex + 1) % total;
  state.sweetMessageIndex = nextIndex;
  sweetMessageText.textContent = SWEET_MESSAGES[nextIndex];
}

function setupLetterEvents() {
  document.querySelectorAll('.envelope-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.letter);
      state.currentLetterIndex = id - 1;
      openLetter(id);
    });
  });

  if (prevLetterBtn) {
    prevLetterBtn.addEventListener('click', () => cycleLetter(-1));
  }

  if (nextLetterBtn) {
    nextLetterBtn.addEventListener('click', () => cycleLetter(1));
  }

  if (sweetMessageBtn) {
    sweetMessageBtn.addEventListener('click', showSweetMessage);
  }

  if (document.querySelector('.close-letter')) {
    document.querySelector('.close-letter').addEventListener('click', closeLetter);
  }

  if (letterModal) {
    letterModal.addEventListener('click', (event) => {
      if (event.target === letterModal) {
        closeLetter();
      }
    });
  }

  if (reviewApplicationBtn) {
    reviewApplicationBtn.addEventListener('click', () => {
      if (applicationCertificate) {
        applicationCertificate.classList.remove('hidden');
        applicationCertificate.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}

function setupModeToggle() {
  document.querySelectorAll('input[name="unlockMode"]').forEach((input) => {
    input.addEventListener('change', (event) => {
      state.mode = event.target.value;
      saveState();
      renderCalendar();
    });
  });

  startDateInput.addEventListener('change', (event) => {
    const nextDate = parseDateInput(event.target.value);
    if (nextDate) {
      state.startDate = nextDate;
      saveState();
      renderCalendar();
    }
  });
}

function setupNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

function setupRevealOnScroll() {
  const observed = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  observed.forEach((element) => observer.observe(element));
}

function setupFutureReveal() {
  const revealButton = document.getElementById('futureRevealBtn');
  if (revealButton) {
    revealButton.addEventListener('click', () => {
      const target = document.getElementById('dream-future');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('flash-animate');
        setTimeout(() => target.classList.remove('flash-animate'), 1000);
      }
    });
  }
}

function setupFutureDreamCards() {
  document.querySelectorAll('.future-dream-card').forEach((card) => {
    card.addEventListener('click', () => {
      const selectedKey = card.dataset.future;
      if (!selectedKey || !FUTURE_MESSAGES[selectedKey]) {
        return;
      }

      state.futureDreamIndex = Object.keys(FUTURE_MESSAGES).indexOf(selectedKey);
      if (futureDreamText) {
        futureDreamText.textContent = FUTURE_MESSAGES[selectedKey];
      }
    });
  });

  if (everythingLetterBtn) {
    everythingLetterBtn.addEventListener('click', rotateEverythingLetter);
  }
}

function rotateFutureDream() {
  const keys = Object.keys(FUTURE_MESSAGES);
  state.futureDreamIndex = (state.futureDreamIndex + 1) % keys.length;
  const key = keys[state.futureDreamIndex];
  if (futureDreamText) {
    futureDreamText.textContent = FUTURE_MESSAGES[key];
  }
}

function rotateEverythingLetter() {
  const messages = [
    'You are the softest place my heart knows how to rest. The way you make my world feel kinder, gentler, and more beautiful is one of the greatest gifts I have ever known.',
    'You are not just someone I admire; you are someone I deeply respect, sincerely appreciate, and quietly dream of seeing in every future I imagine.',
    'My favorite thing about you is not only what you look like, but the way your heart feels warm, thoughtful, and full of kindness even in the smallest moments.',
    'I love the way your presence makes me calmer, happier, and more hopeful. That is the kind of love I want to keep building with you, gently and honestly.'
  ];

  if (!everythingLetterText) {
    return;
  }

  const current = everythingLetterText.textContent;
  const next = messages[(messages.indexOf(current) + 1) % messages.length];
  everythingLetterText.textContent = next;
}

function setupPromiseCards() {
  document.querySelectorAll('.promise-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
}

function setupApplicationCards() {
  const roleMessages = {
    respect: 'Respect is the foundation of love. I want to build a relationship where your voice, your feelings, and your whole self are always safe and honored.',
    honesty: 'Honesty means I choose clarity over confusion and trust over silence. I want to be the kind of partner who tells you the truth gently and keeps your trust protected.',
    kindness: 'Kindness is how love shows up in the little moments. I want to be patient, generous, and warm in ways that make your heart feel cared for.',
    support: 'Supporting you means I celebrate your dreams and stand beside you when life feels heavy. I want to help you grow, not hold you back.',
    humor: 'A good relationship is not just serious; it is also joyful. I want to make you laugh, lighten your day, and turn ordinary moments into memories.',
    patience: 'Patience is love in motion. I want to learn, grow, and keep choosing you with grace even when life is imperfect.'
  };

  document.querySelectorAll('.application-card').forEach((card) => {
    card.addEventListener('click', () => {
      const role = card.dataset.role;
      card.classList.toggle('active');
      if (applicationCertificate) {
        applicationCertificate.classList.remove('hidden');
        applicationCertificate.innerHTML = `
          <p class="eyebrow">Application status</p>
          <h3>Accepted with love and commitment</h3>
          <p>${roleMessages[role] || 'I am committed to being the kind of partner who keeps choosing love with patience, respect, and sincerity.'}</p>
        `;
      }
    });
  });
}

loadState();
setupLetterEvents();
setupModeToggle();
setupNav();
setupRevealOnScroll();
setupFutureReveal();
setupFutureDreamCards();
setupPromiseCards();
setupApplicationCards();
if (sweetMessageText) {
  sweetMessageText.textContent = SWEET_MESSAGES[0];
}
if (futureDreamText) {
  const firstDreamKey = Object.keys(FUTURE_MESSAGES)[0];
  futureDreamText.textContent = FUTURE_MESSAGES[firstDreamKey];
}
renderCalendar();
