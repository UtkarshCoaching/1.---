const questions = [
  {
    "question": "USB কি প্রকারের Storage Device?",
    "options": ["ইন্টারনাল", "সেকেন্ডারি", "টারশিয়ারী", "প্রাইমারী"],
    "answer": "সেকেন্ডারি",
    "explanation": "USB (Universal Serial Bus) ড্রাইভ হলো এক প্রকার সেকেন্ডারি স্টোরেজ ডিভাইস যা ডেটা স্থায়ীভাবে সংরক্ষণ করে এবং সহজে বহনযোগ্য।"
  },
  {
    "question": "কম্পিউটারে IC বলতে কি বোঝায়?",
    "options": ["Internal circuits", "Integrated circuits", "Integrated Current", "Integrated charge"],
    "answer": "Integrated circuits",
    "explanation": "IC হলো Integrated Circuit-এর সংক্ষিপ্ত রূপ, যা একটি ছোট সেমিকন্ডাক্টর চিপে তৈরি ইলেকট্রনিক সার্কিটের একটি সেট।"
  },
  {
    "question": "VIRUS-র পুরো কথা কি?",
    "options": ["Various Information Resources Under Stage", "Vital Information Resources Under Siege", "Various Information Resource Unlimited storage", "Vital Images Reviews Universal Studios"],
    "answer": "Vital Information Resources Under Siege",
    "explanation": "VIRUS এর পুরো কথা হলো Vital Information Resources Under Siege, যা এক প্রকার ম্যালিশিয়াস প্রোগ্রাম।"
  },
  {
    "question": "'Spam' কিসের সাথে সম্পর্কিত?",
    "options": ["কম্পিউটার", "সঙ্গীত", "শিল্পকলা", "গেমস"],
    "answer": "কম্পিউটার",
    "explanation": "স্প্যাম সাধারণত অবাঞ্ছিত ইমেইল বা মেসেজের সাথে সম্পর্কিত, যা কম্পিউটার ও ইন্টারনেটের মাধ্যমে ছড়ানো হয়।"
  },
  {
    "question": "Junk e-mail-এর অপর নাম কি?",
    "options": ["স্পুফ", "স্নিফার স্ক্রিপ্ট", "স্কুল", "স্প্যাম"],
    "answer": "স্প্যাম",
    "explanation": "জাঙ্ক ই-মেইল-এর অন্য নাম হলো স্প্যাম, যা ব্যবহারকারীর অনুমতি ছাড়াই পাঠানো হয়।"
  },
  {
    "question": "নিম্নলিখিত কোন অপারেটিং সিস্টেমটি বিশ্বের বেশির ভাগ সুপার কম্পিউটারে ব্যবহৃত হয়?",
    "options": ["Unix Os", "Linux Os", "Lisa OS", "Mac Os"],
    "answer": "Linux Os",
    "explanation": "Linux হলো একটি ওপেন-সোর্স অপারেটিং সিস্টেম, যা তার স্থায়িত্ব এবং নমনীয়তার কারণে বিশ্বের অধিকাংশ সুপার কম্পিউটারে ব্যবহৃত হয়।"
  },
  {
    "question": "নিম্নলিখিত কোন শব্দটি প্রসেসিং স্পিড-র তুলনা করার সময় ব্যবহার করা হয়?",
    "options": ["MPG", "CPS", "MIPS", "কোনোটাই নয়"],
    "answer": "MIPS",
    "explanation": "MIPS (Million Instructions Per Second) হলো কম্পিউটারের প্রসেসিং স্পিড পরিমাপের একটি একক, যা প্রতি সেকেন্ডে কত মিলিয়ন নির্দেশ কার্যকর করতে পারে তা বোঝায়।"
  },
  {
    "question": "কম্পিউটার ও কমিউনিকেশন টেকনোলজি আমাদের জীবনকে বিভিন্নভাবে প্রভাবিত করে, যার মধ্যে অন্তর্গত আছে এবং এর মাধ্যমে আমরা বিভিন্ন বিষয় শিখি ও শেখার পদ্ধতিকে নিজেদের মতো সাজিয়ে",
    "options": ["সামাজিক ক্ষেত্র", "প্রযুক্তিগত ক্ষেত্র", "শিক্ষাগত ক্ষেত্র", "ব্যক্তিগত ক্ষেত্র"],
    "answer": "শিক্ষাগত ক্ষেত্র",
    "explanation": "কম্পিউটার ও কমিউনিকেশন টেকনোলজি শিক্ষা ক্ষেত্রে গুরুত্বপূর্ণ প্রভাব ফেলে, যা শেখার পদ্ধতিকে উন্নত করে এবং নতুন বিষয় শেখার সুযোগ তৈরি করে।"
  },
  {
    "question": "দ্বিতীয় প্রজন্মের কম্পিউটার বহুল ব্যবহার দ্বারা চেনা যায়, তাদের",
    "options": ["মাইক্রোপ্রসেসর", "ইন্টিগ্রেটেড সার্কিট", "ভ্যাকুয়াম টিউব", "ট্রানজিস্টর"],
    "answer": "ট্রানজিস্টর",
    "explanation": "দ্বিতীয় প্রজন্মের কম্পিউটারগুলি ট্রানজিস্টর ব্যবহারের জন্য পরিচিত, যা প্রথম প্রজন্মের ভ্যাকুয়াম টিউবের চেয়ে ছোট, দ্রুত এবং বেশি নির্ভরযোগ্য ছিল।"
  },
  {
    "question": "যে কম্পিউটার পোর্টেবল ও খুব সহজে বহন করা যায়, তা হল-",
    "options": ["সুপার কম্পিউটার", "ল্যাপটপ", "সার্ভার", "মিনি কম্পিউটার"],
    "answer": "ল্যাপটপ",
    "explanation": "ল্যাপটপ হলো একটি পোর্টেবল কম্পিউটার যা সহজে বহন করা যায় এবং বিভিন্ন স্থানে ব্যবহার করা যায়।"
  },
  {
    "question": "সবথেকে শক্তিশালী কম্পিউটার হল-",
    "options": ["সুপার কম্পিউটার", "মাইক্রো কম্পিউটার", "মিনি কম্পিউটার", "কোনোটাই নয়"],
    "answer": "সুপার কম্পিউটার",
    "explanation": "সুপার কম্পিউটার হলো সবচেয়ে শক্তিশালী কম্পিউটার, যা জটিল গণনা এবং ডেটা প্রসেসিংয়ের জন্য ব্যবহৃত হয়।"
  },
  {
    "question": "ডিজিটাল ঘড়িতে কোন ধরনের কম্পিউটার পাওয়া যায়?",
    "options": ["মেইন ফ্রেম", "সুপার কম্পিউটার", "এমবেডেড কম্পিউটার", "নোটবুক কম্পিউটার"],
    "answer": "এমবেডেড কম্পিউটার",
    "explanation": "ডিজিটাল ঘড়িতে এমবেডেড কম্পিউটার ব্যবহার করা হয়, যা একটি নির্দিষ্ট কাজ সম্পাদনের জন্য ডিজাইন করা হয় এবং একটি বৃহত্তর সিস্টেমে একত্রিত থাকে।"
  },
  {
    "question": "নিম্নলিখিতদের মধ্যে সবথেকে ছোট কম্পিউটার কোনটি?",
    "options": ["নোটবুক", "ল্যাপটপ", "ডেস্কটপ", "ওয়ার্ক স্টেশন"],
    "answer": "নোটবুক",
    "explanation": "নোটবুক হলো একটি ছোট ও হালকা ল্যাপটপ, যা সহজে বহনযোগ্য।"
  },
  {
    "question": "কম্পিউটারে CD চালাতে গেলে, আমাদের কি প্রয়োজন হয়?",
    "options": ["FD ড্রাইভ", "CD ড্রাইভ", "Zip ড্রাইভ", "পেন ড্রাইভ"],
    "answer": "CD ড্রাইভ",
    "explanation": "কম্পিউটারে CD থেকে ডেটা পড়তে বা রাইট করতে একটি CD ড্রাইভের প্রয়োজন হয়।"
  },
  {
    "question": "একটি প্রসেসিং ডিভাইসের উদাহরণ হল-",
    "options": ["ম্যাগনেটিক ইঙ্ক রিডার", "ট্যাবলেট PC", "স্পেশাল ফাংশন কার্ড", "স্ক্যানার"],
    "answer": "ট্যাবলেট PC",
    "explanation": "একটি ট্যাবলেট PC হল একটি কম্পিউটার যা ডেটা প্রসেস করতে পারে, তাই এটি একটি প্রসেসিং ডিভাইসের উদাহরণ।"
  },
  {
    "question": "UNIX নামক অপারেটিং সিস্টেমটি সাধারণত কোথায় ব্যবহার করা হয়?",
    "options": ["ডেস্কটপ কম্পিউটার", "সুপার কম্পিউটার", "ওয়েব সার্ভার", "মেইনফ্রেম কম্পিউটার"],
    "answer": "ওয়েব সার্ভার",
    "explanation": "UNIX তার স্থিতিশীলতা, নিরাপত্তা এবং মাল্টি-ইউজার ক্ষমতার কারণে সাধারণত ওয়েব সার্ভার এবং অন্যান্য শক্তিশালী সিস্টেমগুলিতে ব্যবহৃত হয়।"
  },
  {
    "question": "কম্পিউটারের ভাষায় KB বলতে বোঝায়",
    "options": ["Key Block", "Kernel Boot", "Kilo Byte", "Kit Bit"],
    "answer": "Kilo Byte",
    "explanation": "কম্পিউটারের ডেটা পরিমাপের একক হলো বাইট, এবং KB মানে কিলোবাইট, যা 1024 বাইটের সমান।"
  },
  {
    "question": "কম্পিউটারে তথ্য কিরূপে সঞ্চিত থাকে?",
    "options": ["অ্যানালগ ডাটা", "ডিজিটাল ডাটা", "মডেম ডাটা", "ওয়াটস ডাটা"],
    "answer": "ডিজিটাল ডাটা",
    "explanation": "কম্পিউটারে সমস্ত তথ্য ডিজিটাল ফরম্যাটে (0 এবং 1 এর বাইনারি কোড) সঞ্চিত থাকে।"
  },
  {
    "question": "ডিজিটাল সিস্টেমে সবথেকে ছোটো একক হল-",
    "options": ["Byte", "Kilo byte", "Word", "Bit"],
    "answer": "Bit",
    "explanation": "Bit (Binary Digit) হল ডিজিটাল সিস্টেমে তথ্যের সবচেয়ে ছোট একক, যা 0 বা 1 দ্বারা প্রকাশ করা হয়।"
  },
  {
    "question": "স্টোরেজের সবচেয়ে বড় একক কি?",
    "options": ["GB", "KB", "MB", "TB"],
    "answer": "TB",
    "explanation": "স্টোরেজ ইউনিটের মধ্যে, TB (Terabyte) হল প্রদত্ত বিকল্পগুলির মধ্যে সবচেয়ে বড় একক (1 TB = 1024 GB)।"
  },
  {
    "question": "কম্পিউটার নাম্বার সিস্টেমের উপর ভিত্তি করে কাজ করে।",
    "options": ["বাইনরি", "অক্টাল", "ডেসিমাল", "হেক্সাডেসিমাল"],
    "answer": "বাইনরি",
    "explanation": "কম্পিউটার বাইনারি নাম্বার সিস্টেমের (0 এবং 1) উপর ভিত্তি করে কাজ করে, কারণ এর ইলেকট্রনিক সার্কিটগুলি শুধুমাত্র দুটি অবস্থা (অন/অফ) বুঝতে পারে।"
  },
  {
    "question": "_______ এর কাজ হল ক্রেতাদের চাহিদা বোঝা ও সেই অনুযায়ী সঠিক হার্ডওয়্যার ও সফটওয়্যার সম্পর্কে জানানো।",
    "options": ["কম্পিউটার সায়েন্টিস্ট", "কম্পিউটার সেলস রিপ্রেজেন্টেটিভ", "কম্পিউটার কনসালট্যান্ট", "কর্পোরেট ট্রেনার"],
    "answer": "কম্পিউটার কনসালট্যান্ট",
    "explanation": "একজন কম্পিউটার কনসালট্যান্টের প্রধান কাজ হলো ক্লায়েন্টদের প্রযুক্তিগত চাহিদা বোঝা এবং সেই অনুযায়ী হার্ডওয়্যার ও সফটওয়্যার সমাধান সম্পর্কে পরামর্শ দেওয়া।"
  },
  {
    "question": "কম্পিউটারে, NIC-র পুরো কথা কি?",
    "options": ["Network Interface Card", "Network Information Card", "New Interface Card", "New Information Card"],
    "answer": "Network Interface Card",
    "explanation": "NIC মানে Network Interface Card, যা একটি হার্ডওয়্যার কম্পোনেন্ট যা কম্পিউটারকে একটি নেটওয়ার্কের সাথে সংযোগ করতে সাহায্য করে।"
  },
  {
    "question": "নিম্নলিখিত কোন সুপার কম্পিউটারটি ভারতে তৈরী করা হয়েছে?",
    "options": ["Pixir", "Param Yuva 2", "Onshape", "Venngage"],
    "answer": "Param Yuva 2",
    "explanation": "Param Yuva 2 হল ভারতের তৈরি একটি সুপার কম্পিউটার, যা সেন্টার ফর ডেভেলপমেন্ট অফ অ্যাডভান্সড কম্পিউটিং (C-DAC) দ্বারা বিকশিত হয়েছে।"
  },
  {
    "question": "E-Mail-র ধারণা প্রথম কে আনেন?",
    "options": ["বিল গেটস", "আর্থার ক্লার্ক", "রে টমলিনসন", "সাবির ভাটিয়া"],
    "answer": "রে টমলিনসন",
    "explanation": "রে টমলিনসনকে প্রথম ই-মেইল পাঠানোর এবং '@' প্রতীকটি ই-মেইল ঠিকানায় ব্যবহার করার জন্য কৃতিত্ব দেওয়া হয়।"
  },
  {
    "question": "'WWW' সর্বপ্রথম কে তৈরী করেন?",
    "options": ["বর কোহেন", "টিম বার্নার লি", "রবার্ট মরিস জুনিয়র", "মাইকেল ডাসটাস"],
    "answer": "টিম বার্নার লি",
    "explanation": "টিম বার্নার লি হলেন ওয়ার্ল্ড ওয়াইড ওয়েব (WWW) এর প্রতিষ্ঠাতা।"
  },
  {
    "question": "কম্পিউটার ভাইরাস আসলে কি?",
    "options": ["একটি রাসায়নিক যা সিলিকনের ক্ষতি করে।", "একপ্রকারের জীবাণু যা বর্তনীগুলিকে নষ্ট করে দেয়", "এমন ডাটা যা কম্পিউটার কাজে লাগাতে পারে না", "এক বিশেষ ধরনের কম্পিউটার প্রোগ্রাম।"],
    "answer": "এক বিশেষ ধরনের কম্পিউটার প্রোগ্রাম।",
    "explanation": "কম্পিউটার ভাইরাস হলো একটি ক্ষতিকারক সফটওয়্যার প্রোগ্রাম যা কম্পিউটার সিস্টেমকে সংক্রমিত করে এবং ক্ষতি করে।"
  },
  {
    "question": "কম্পিউটারের জনক কাকে বলা হয়?",
    "options": ["চার্লস ব্যাবেজ", "স্টিফেন হকিংস", "গ্রেস", "জন লেনিন"],
    "answer": "চার্লস ব্যাবেজ",
    "explanation": "চার্লস ব্যাবেজকে তার Analytical Engine-এর ধারণার জন্য আধুনিক কম্পিউটারের জনক বলা হয়।"
  }
]

const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsAreaElement = document.querySelector('.options-area');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const submitButton = document.querySelector('.submit-button');
const clearResponseButton = document.querySelector('.clear-response-button');
const markForReviewButton = document.querySelector('.mark-for-review-button');
const resultAreaElement = document.querySelector('.result-area');
const scoreElement = document.getElementById('score');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const unattemptedCountElement = document.getElementById('unattempted-count');
const timeElement = document.getElementById('time');
const reviewContainer = document.getElementById('review-questions');
const questionGridContainer = document.querySelector('.question-grid');

// নতুন ফিল্টার বাটন
const showAllButton = document.getElementById('show-all');
const showCorrectButton = document.getElementById('show-correct');
const showWrongButton = document.getElementById('show-wrong');
const showUnattemptedButton = document.getElementById('show-unattempted');

// Introduction Screen Elements
const introductionScreen = document.querySelector('.introduction-screen');
const startTestButton = document.getElementById('start-test-button');
const testContent = document.querySelector('.test-content');


let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let markedForReview = new Array(questions.length).fill(false);
let timeLeft = 28 * 60; // 30 minutes in seconds
let timerInterval;
let totalScore = 0;
let questionStatus = new Array(questions.length).fill(null); // 'correct', 'wrong', 'unattempted'

// একটি অ্যারে শাফেল করার জন্য ইউটিলিটি ফাংশন (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showResult();
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `প্রশ্ন ${currentQuestionIndex + 1}`;

  questionTextElement.textContent = currentQuestion.question || '';

  const imageElement = document.getElementById('question-image');
  if (currentQuestion.image) {
    imageElement.src = currentQuestion.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  const shuffledOptions = [...currentQuestion.options];
  shuffleArray(shuffledOptions); // অপশনগুলো শাফেল করুন

  optionsAreaElement.innerHTML = '';
  shuffledOptions.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.addEventListener('click', (event) => selectAnswer(event, option));
    optionsAreaElement.appendChild(button);

    if (userAnswers[currentQuestionIndex] === option) {
      button.classList.add('selected');
    }
  });

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === questions.length - 1;

  if (markedForReview[currentQuestionIndex]) {
    markForReviewButton.classList.add('marked');
    markForReviewButton.textContent = 'পর্যালোচনা থেকে সরান';
  } else {
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
  }

  updateReviewButtons();
}

function selectAnswer(event, answer) {
  userAnswers[currentQuestionIndex] = answer;
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  event.target.classList.add('selected');
  updateReviewButtons();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function clearResponse() {
    userAnswers[currentQuestionIndex] = null;
    markedForReview[currentQuestionIndex] = false;
    loadQuestion();
}

function toggleMarkForReview() {
    markedForReview[currentQuestionIndex] = !markedForReview[currentQuestionIndex];
    // This logic ensures if a question is marked/unmarked, it automatically moves to the next,
    // or just reloads the current one if it's the last question.
    if (currentQuestionIndex < questions.length - 1) {
        nextQuestion();
    } else {
        loadQuestion(); // Reload to update button text/style
    }
}


function submitTest() {
  clearInterval(timerInterval);
  showResult();
}

function showResult() {
  introductionScreen.style.display = 'none'; // Intro screen hide
  testContent.style.display = 'none'; // Test content hide
  resultAreaElement.style.display = 'block'; // Result area show

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  totalScore = 0;

  questions.forEach((question, index) => {
    // সঠিক উত্তর খুঁজে বের করার জন্য `answer` প্রপার্টি ব্যবহার করুন
    const correctAnswerOption = question.options.find(opt => opt.startsWith(question.answer));

    if (userAnswers[index] === correctAnswerOption) {
      correctCount++;
      totalScore++;
      questionStatus[index] = 'correct'; // স্ট্যাটাস সংরক্ষণ করুন
    } else if (userAnswers[index] !== null) {
      wrongCount++;
      totalScore -= 0.33;
      questionStatus[index] = 'wrong'; // স্ট্যাটাস সংরক্ষণ করুন
    } else {
        unattemptedCount++;
        questionStatus[index] = 'unattempted'; // স্ট্যাটাস সংরক্ষণ করুন
    }
  });

  totalScore = Math.max(0, totalScore); // স্কোর 0 এর নিচে যাতে না যায়

  scoreElement.textContent = totalScore.toFixed(2);
  correctCountElement.textContent = correctCount;
  wrongCountElement.textContent = wrongCount;
  unattemptedCountElement.textContent = unattemptedCount;

  filterQuestions('all'); // প্রাথমিকভাবে সমস্ত প্রশ্ন প্রদর্শন করুন
}

function updateReviewButtons() {
    const currentReviewButtons = questionGridContainer.querySelectorAll('.grid-button');

    Array.from(currentReviewButtons).forEach((button, index) => {
        button.classList.remove('answered', 'unanswered', 'current-question', 'marked-for-review');

        if (index === currentQuestionIndex) {
            button.classList.add('current-question');
        }

        if (userAnswers[index] !== null) {
            button.classList.add('answered');
            if (markedForReview[index]) {
                button.classList.add('marked-for-review');
            }
        } else if (markedForReview[index]) {
            button.classList.add('marked-for-review');
        } else {
            button.classList.add('unanswered');
        }
    });
}

function filterQuestions(filterType) {
    reviewContainer.innerHTML = ''; // পূর্বের রিভিউ আইটেমগুলি মুছে ফেলুন

    // সমস্ত ফিল্টার বাটন থেকে active ক্লাস সরান
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // ক্লিক করা বাটনে active ক্লাস যোগ করুন
    document.getElementById(`show-${filterType}`).classList.add('active');


    questions.forEach((question, index) => {
        const status = questionStatus[index];

        let shouldDisplay = false;
        if (filterType === 'all') {
            shouldDisplay = true;
        } else if (filterType === 'correct' && status === 'correct') {
            shouldDisplay = true;
        } else if (filterType === 'wrong' && status === 'wrong') {
            shouldDisplay = true;
        } else if (filterType === 'unattempted' && status === 'unattempted') {
            shouldDisplay = true;
        }

        if (shouldDisplay) {
            const div = document.createElement('div');
            div.classList.add('review-item');
            div.style.width = '100%';
            let userAnswerText = userAnswers[index] || 'কোন উত্তর নেই';
            const correctAnswerText = question.options.find(opt => opt.startsWith(question.answer)) || 'N/A';

            let statusText = '';
            let userAnswerClass = '';

            if (userAnswers[index] === correctAnswerText) {
                userAnswerClass = 'correct-text';
                div.classList.add('correct-answer-review');
                statusText = ' (সঠিক উত্তর)';
            } else if (userAnswers[index] !== null) {
                userAnswerClass = 'wrong-text';
                div.classList.add('wrong-answer-review');
                statusText = ' (ভুল উত্তর)';
            } else if (markedForReview[index]) {
                div.classList.add('marked-for-review-review');
                statusText = ' (পর্যালোচনার জন্য চিহ্নিত - উত্তর দেওয়া হয়নি)';
            } else {
                div.classList.add('unanswered-review');
                statusText = ' (উত্তর দেওয়া হয়নি)';
            }

            if (userAnswers[index] !== null && markedForReview[index]) {
                // This condition for adding '*' is a bit tricky, if marked is cleared on clear response,
                // then * won't appear, which is correct.
                // Re-evaluate if you want a visual indicator for "attempted and marked for review" explicitly.
                // For now, I'll remove the '*' as it's typically for "unattempted and marked for review".
                // statusText += ' <span style="color: red;">*</span>';
            }

            const questionContent = question.question ? `<b>প্রশ্ন ${index + 1}: ${question.question}</b>` :
                                      question.image ? `<img src="${question.image}" alt="Question Image" class="review-question-image" style="max-width: 100px; max-height: 100px; display: block; margin-top: 5px;">` :
                                      `<b>প্রশ্ন ${index + 1}</b>`;


            div.innerHTML = `
              <p class="review-question">${questionContent}<span class="status-text">${statusText}</span></p>
              <p class="review-user-answer">Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span></p>
              <p class="review-correct-answer">Correct Answer: <span class="correct-text">${correctAnswerText}</span></p>
              ${question.explanation ? `<p class="review-explanation">ব্যাখ্যা: ${question.explanation}</p>` : ''}
            `;

            reviewContainer.appendChild(div);
        }
    });
}


// প্রাথমিক কল
document.addEventListener('DOMContentLoaded', () => {
    // Start Test button event listener
    startTestButton.addEventListener('click', () => {
        introductionScreen.style.display = 'none'; // Hide intro screen
        testContent.style.display = 'block'; // Show test content

        // প্রশ্ন গ্রিড বাটন তৈরি করুন - ONLY when test starts
        for (let i = 0; i < questions.length; i++) {
            const button = document.createElement('button');
            button.classList.add('grid-button');
            button.textContent = i + 1;
            button.addEventListener('click', () => {
                currentQuestionIndex = i;
                loadQuestion();
            });
            questionGridContainer.appendChild(button);
        }

        loadQuestion(); // প্রথম প্রশ্ন লোড করুন
        startTimer();   // টাইমার শুরু করুন
        updateReviewButtons(); // রিভিউ বাটনগুলো আপডেট করুন
    });

    // Event listeners for navigation and action buttons (always present)
    nextButton.addEventListener('click', nextQuestion);
    prevButton.addEventListener('click', prevQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    markForReviewButton.addEventListener('click', toggleMarkForReview);
    submitButton.addEventListener('click', submitTest);

    // ফিল্টার বাটনগুলির জন্য ইভেন্ট লিসেনার যোগ করুন
    showAllButton.addEventListener('click', () => filterQuestions('all'));
    showCorrectButton.addEventListener('click', () => filterQuestions('correct'));
    showWrongButton.addEventListener('click', () => filterQuestions('wrong'));
    showUnattemptedButton.addEventListener('click', () => filterQuestions('unattempted'));
});