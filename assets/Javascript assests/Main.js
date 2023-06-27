/*This array quizData holds the quiz questions, answer options, and correct answers. 
Each question object contains a question property for the question text, a, b, c, 
and d properties for the answer options, and a correct property for the correct answer (identified by its corresponding letter).
*/
const quizData = [
  {
    question: "Who is the Absolute Champion in BJJ?",
    a: "Nicholas Meregali",
    b: "Gordon Ryan",
    c: "Bernardo Feria",
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
    question: "Who won ADCC 2022 in the heavyweight division?",
    a: "Nicholas Meregali",
    b: "Gordon Ryan",
    c: "Kaynan Duarte",
    d: "Craig Jones",
    correct: "b",
  },
  {
    question: "Who won the superfight in ADCC?",
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


/*These lines of code retrieve references to various HTML elements using their respective IDs. 
The quiz variable represents the container element for the quiz, 
answerEls is a collection of all elements with the class answer (presumably radio buttons for answer options), 
and questionEl, a_text, b_text, c_text, and d_text represent the elements that display the 
question and answer options. Finally, submitBtn represents the submit button element. */
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

/*These variables are used to keep track of the current question and the user's score. 
currentQuiz is initially set to 0, indicating that the first question should be displayed. 
score is initially set to 0, indicating that the user hasn't answered any questions correctly yet. */
let currentQuiz = 0;
let score = 0;

//This line calls the loadQuiz() function to initialize the quiz by displaying the first question.
loadQuiz();

// Function to load the quiz
function loadQuiz() 
{

  deselectAnswers(); // Clear any selected answers

  const currentQuizData = quizData[currentQuiz]; // Get the current quiz data

  questionEl.innerText = currentQuizData.question; // Display the question
  a_text.innerText = currentQuizData.a; // Display option A
  b_text.innerText = currentQuizData.b; // Display option B
  c_text.innerText = currentQuizData.c; // Display option C
  d_text.innerText = currentQuizData.d; // Display option D
}

// Function to deselect all answers
function deselectAnswers() 
{
  answerEls.forEach(answerEl => (answerEl.checked = false)); // Uncheck all answer options
}

// Function to get the selected answer
function getSelected() 
{

  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked)
    {

      answer = answerEl.id;

    }
  });

  return answer;
}

// Event listener for submit button
submitBtn.addEventListener('click', () => {

  const answer = getSelected(); // Get the selected answer

  if (answer)
  {

    if (answer === quizData[currentQuiz].correct)
    {
      score++; // Increase the score if the selected answer is correct

    }

    currentQuiz++; // Move to the next question

    if (currentQuiz < quizData.length) 
    {

      loadQuiz(); // Load the next question

    } 
    
    else 
    {
      // Display the final score and reload button
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
