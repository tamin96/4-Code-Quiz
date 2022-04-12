var startButton = document.getElementById("start");
var timerEl = document.getElementById("time");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var choiceEl = document.getElementById("choices");

var i = 0
var correctAnswer = questions[i].answer 

function startQuiz() {
  console.log("Quiz started")
  countdown();
  getNextQuestion();
  setChoices();
}

function countdown() {
  var timeLeft = 60;
  
  var timeInterval = setInterval(function () {
    
    if (timeLeft > 1) {

        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 1) {

        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {

        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
}

function getNextQuestion() {
  startScreen.textContent = "";

  if (i < questions.length) {
    questionTitle.textContent = questions[i].title;
  }
}

function setChoices() {
  var choice1 = document.createElement("button");
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");

  choiceEl.appendChild(choice1);
  choiceEl.appendChild(choice2);
  choiceEl.appendChild(choice3);
  choiceEl.appendChild(choice4);

  choice1.textContent = questions[i].choices[1];
  choice2.textContent = questions[i].choices[2];
  choice3.textContent = questions[i].choices[3];
  choice4.textContent = questions[i].choices[4];

  choiceEl.addEventListener("click", function(e){
    var clickElement = e.target.textContent

    if (clickElement === correctAnswer){
      console.log("Correct answer")
      return
    } else console.log ("Wrong answer")


  });

}

startButton.addEventListener("click", startQuiz);