
// Simple Mongolian Word Game
// - Pick category, difficulty (or random)
// - 20 questions per round
// - Each question shows Mongolian word + phonetic; pick 1 correct from 4 English options
// - Score counts first-try correct answers

const screens = {
  home: document.getElementById('screen-home'),
  difficulty: document.getElementById('screen-difficulty'),
  game: document.getElementById('screen-game'),
  result: document.getElementById('screen-result'),
};

function showScreen(name) {
  for (const key in screens) screens[key].classList.remove('active');
  screens[name].classList.add('active');
}

const statusCategory = document.getElementById('status-category');
const statusDifficulty = document.getElementById('status-difficulty');
const statusProgress = document.getElementById('status-progress');
const statusScore = document.getElementById('status-score');
const promptMn = document.getElementById('prompt-mn');
const promptPhon = document.getElementById('prompt-phonetic');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const finalScoreEl = document.getElementById('final-score');

let currentCategory = null;
let currentDifficulty = null; // 'simple' | 'medium' | 'hard' | 'random'
let questions = [];
let index = 0;
let score = 0;
let firstTry = true;
let lastSettings = { category: null, difficulty: null };

// util helpers
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sample(arr, n) {
  const a = arr.slice();
  shuffle(a);
  return a.slice(0, n);
}

function englishPoolForCategory(cat) {
  // Build an array of all English words in this category (all difficulties)
  const pool = [];
  for (const d of ['simple','medium','hard']) {
    (WORDS[cat][d] || []).forEach(x => pool.push(x[3]));
  }
  return pool;
}

function buildRound(cat, diff) {
  const enPool = englishPoolForCategory(cat);

  let source = [];
  if (diff === 'random') {
    // mix across difficulties
    const merged = []
      .concat(WORDS[cat].simple, WORDS[cat].medium, WORDS[cat].hard);
    source = sample(merged, 20);
  } else {
    source = sample(WORDS[cat][diff], 20);
  }

  return source.map(item => {
    const [mn, translit, phon, en] = item;
    const distractors = enPool.filter(e => e !== en);
    const opts = sample(distractors, 3).concat([en]);
    shuffle(opts);
    return { mn, translit, phon, en, options: opts };
  });
}

function startRound() {
  index = 0;
  score = 0;
  firstTry = true;
  questions = buildRound(currentCategory, currentDifficulty);
  statusCategory.textContent = labelForCategory(currentCategory);
  statusDifficulty.textContent = labelForDiff(currentDifficulty);
  statusProgress.textContent = "0/20";
  statusScore.textContent = "0";
  feedbackEl.textContent = "";
  nextQuestion();
  showScreen('game');
}

function nextQuestion() {
  if (index >= questions.length) return endRound();
  const q = questions[index];
  promptMn.textContent = q.mn;
  promptPhon.textContent = q.translit + " " + q.phon;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  firstTry = true;

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = "btn";
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(btn, q, opt);
    optionsEl.appendChild(btn);
  });

  statusProgress.textContent = `${index+1}/20`;
}

function handleAnswer(btn, q, chosen) {
  if (chosen === q.en) {
    btn.classList.add('correct');
    feedbackEl.textContent = "✔ Correct";
    feedbackEl.className = "feedback ok";
    if (firstTry) {
      score += 1;
      statusScore.textContent = String(score);
    }
    // disable buttons then move to next
    Array.from(optionsEl.children).forEach(b => b.disabled = true);
    setTimeout(() => {
      index += 1;
      nextQuestion();
    }, 500);
  } else {
    btn.disabled = true;
    btn.classList.add('wrong');
    feedbackEl.textContent = "✖ Try again";
    feedbackEl.className = "feedback no";
    firstTry = false;
  }
}

function endRound() {
  finalScoreEl.textContent = String(score);
  showScreen('result');
}

function labelForCategory(cat) {
  return {
    inside: "Inside Objects",
    outside: "Outside objects",
    shopping: "Shopping (Food items)",
    body: "Body parts"
  }[cat] || cat;
}

function labelForDiff(d) {
  return {
    simple: "Simple",
    medium: "Medium",
    hard: "Hard",
    random: "Random mix"
  }[d] || d;
}

// Event wiring
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    document.getElementById('chosen-category-label').textContent =
      labelForCategory(currentCategory) + " → choose difficulty";
    showScreen('difficulty');
  });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentDifficulty = btn.dataset.diff;
    lastSettings = { category: currentCategory, difficulty: currentDifficulty };
    startRound();
  });
});

document.getElementById('back-to-home-1').addEventListener('click', () => {
  showScreen('home');
});

document.getElementById('quit-to-difficulty').addEventListener('click', () => {
  showScreen('difficulty');
});

document.getElementById('play-again-same').addEventListener('click', () => {
  currentCategory = lastSettings.category;
  currentDifficulty = lastSettings.difficulty;
  startRound();
});

document.getElementById('choose-diff').addEventListener('click', () => {
  showScreen('difficulty');
});

document.getElementById('choose-category').addEventListener('click', () => {
  showScreen('home');
});

document.getElementById('go-home').addEventListener('click', () => {
  showScreen('home');
});

// Randomize default difficulty on refresh if user goes straight to category 
// (requirement: difficulty randomized each refresh possible)
(function setRandomDifficultyHint() {
  const diffs = ['simple','medium','hard'];
  const pick = diffs[Math.floor(Math.random()*diffs.length)];
  // not auto-starting, but when user chooses "Random mix" we mix; 
  // if needed, you can auto-pick by uncommenting next lines:
  // currentDifficulty = pick;
  // startRound();
})();
