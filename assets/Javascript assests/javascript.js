const quizData = [
  {
    question: "Who is Absolute Champion in BJJ?",
    a: "Nicholas Meregali",
    b: "Gordon Ryan",
    c: "Bernando Feria",
    d: "Kaynan Duarte",
    correct: "a",
  },
  {
    question: "What is the most used submission?",
    a: "Bow and Arrow",
    b: "Triangle",
    c: "Armbar",
    d: "Rear Naked Choke",
    correct: "d",
  },
  {
    question: "Who won ADCC 2022 in heavyweight?",
    a: "Nicholas Meregali",
    b: "Gordon Ryan",
    c: "Kaynan Duarte",
    d: "Craig Jones",
    correct: "b",
  },
  {
    question: "Who won superfight in ADCC?",
    a: "Gordon Ryan",
    b: "Andre Galvao",
    c: "Craig Jones",
    d: "Roger Gracie",
    correct: "a",
  },
  {
    question: "Who is the most famous trainer?",
    a: "Gordon Ryan",
    b: "Nicky Rodriguez",
    c: "John Danaher",
    d: "Roger Gracie",
    correct: "c",
  },
  {
    question: "Who is the youngest ADCC champion?",
    a: "Gordon Ryan",
    b: "Andre Galvao",
    c: "Tye Rutolo",
    d: "Kade Rutolo",
    correct: "a",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
