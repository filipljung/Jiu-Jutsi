const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// startgame function 
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is founder of bjj fanatics?',
    answers: [
      { text: '10', correct: true },
      { text: '12', correct: false }
    ]
  },
  {
    question: 'Who is the IBBJF Absolute champion 2022?',
    answers: [
      { text: 'Nicholas Meregali', correct: true },
      { text: 'Marcus Almeida', correct: false },
      { text: 'Leandro Lo', correct: false },
      { text: 'Victor Hugo', correct: false }
    ]
  },
  {
    question: 'Who is ADCC heavyweight champion?',
    answers: [
      { text: 'Keynan Duarte', correct: false },
      { text: 'Fabricio Werdum', correct: false },
      { text: 'Roger Gracie', correct: false },
      { text: 'Gordon ryan', correct: true }
    ]
  },
  {
    question: 'Highest success rate submission in BJJ?',
    answers: [
      { text: 'Bow and Arrow', correct: true },
      { text: 'Rear naked choke', correct: false },
      { text: 'Triangle choke', correct: false },
      { text: 'Cross choke', correct: false },
    ]
  },
]