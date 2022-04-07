var startButton = document.querySelector("#start");
var timerEl = document.querySelector(".timer");

startButton.addEventListener("click", function() {
  countdown();
  setQuestion();
});

var score = 0;

function setScore() {

};

function countdown() {
    var timeLeft = 60;
  
    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {

        timerEl.textContent = 'Time: ' + timeLeft;

        timeLeft--;
      } else if (timeLeft === 1) {

        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } else {

        timerEl.textContent = '';

        clearInterval(timeInterval);

        displayMessage();
      }
    }, 1000);
  };

  function setQuestion() {

  };
  