var currentQuestion = 0;
var score = 0;

var container = document.getElementById("quizContainer");
var questions = document.getElementById("questions");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var totQuestions = questions.length;
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

function loadQuestion(questionIndex) {
  var q = questions(questionIndex);
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  let selectedOption = document.querySelectorAll("input[type=radio]:checked");
  if (!selectedOption) {
    alert(
      "Given the nature of your response, we are disinclined to offer you passage to the next inquiry..."
    );
    return;
  }
  var answer = selectedOption.value;
  if ((questions[currentQuestion].answer = answer)) {
    score == 10;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Submit";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
    return;
  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
