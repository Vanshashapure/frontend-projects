const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "None of these"],
    answer: 0 
  },
  {
    question: "Which tag is used for links?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    question: "Which property makes text bold in CSS?",
    options: ["font-style", "text-weight", "font-weight", "bold"],
    answer: 2
  },
  {
    question: "What does JS stand for?",
    options: ["Java Style", "JavaScript", "Java System", "None"],
    answer: 1
  },
  {
    question: "Which method finds an element by ID?",
    options: ["getElement()", "querySelector()", "findById()", "getElementById()"],
    answer: 3
  }
]

   let currIdx = 0
   let score = 0
   let answered = false

   // lets start brother 

   function loadQuestion() {
    answered=false
   const current = questions[currIdx]

   //progress
   document.querySelector('#progress').textContent = `Question ${currIdx+1} of ${questions.length}`
   

   // ab tera bhai screen me question layaga

   document.querySelector('#question-text').textContent = current.question

   //ab options ke bare 
   const container =  document.querySelector('#options-container')
   container.innerHTML=''

   current.options.forEach(function(option , index) {
     const btn = document.createElement('button')
     btn.textContent=option
      btn.classList.add('option-btn')
    btn.addEventListener('click', function() {
      checkAnswer(index)
    })
    container.appendChild(btn)
   });

   // disable next button until answer selected
  document.querySelector('#next-btn').disabled = true
}

function checkAnswer(selectedindex) {
if(answered)
  return ;
answered=true;

const correct = questions[currIdx].answer
const options = document.querySelectorAll('.option-btn')

 options.forEach( function(btn, index){
if(index===correct) btn.classList.add('correct')
  else if (index === selectedindex) btn.classList.add('wrong')
    btn.disabled = true
})
if(selectedindex===correct) score++;
document.querySelector('#next-btn').disabled = false
}

// function for next question 
function nextQuestion(){
  currIdx++
  if(currIdx<questions.length){
    loadQuestion()
  }else {
    showResult()
  }
}

// ab bhai result ke upar bhi kaam ker lete hai

function showResult(){
  document.querySelector('#question-screen').classList.add('hidden')
    document.querySelector('#result-screen').classList.remove('hidden')
    document.querySelector('#score-text').textContent=`you scored ${score} out of ${questions.length}`

}

function restartQuiz(){
  currIdx=0;
  score=0
  document.querySelector('#question-screen').classList.remove('hidden')
      document.querySelector('#result-screen').classList.add('hidden')
      loadQuestion()

}
// event listeners
document.querySelector('#next-btn').addEventListener('click', nextQuestion)
document.querySelector('#restart-btn').addEventListener('click', restartQuiz)

// start the quiz
loadQuestion()