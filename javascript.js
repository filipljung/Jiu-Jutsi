const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = documentElemenetById('question-container')
const questionContainerElement = documentElemenetById ('question')
const answerButtonsElement = documentElemenetById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)  
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
}

function startGame () {
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
    questions.answer.fourEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct ) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    } )
}

function resetState() {
    clearStatusClass (document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(Button => {
       setStatusClass(button, button.dataset.correct) 
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')

    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove ('hide')

    }
}
    nextButton.classList.remove('hide')

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
 {
    question: 'who is president in united states?',
    answers: [
        { text: 'Joe biden' correct: true},
        { text: 'Donald Trump' correct: false}
    ]
   } , question: 'who is president in united states?',
   answers: [
       { text: 'Joe biden' correct: true},
       { text: 'Donald Trump' correct: false}
]
}