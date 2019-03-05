let current = 0;
let score = 0;

let container = document.getElementById("quizContainer");
let questions = document.getElementById("questions");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let totals = questions.length;
let nextButton = document.getElementById("nextButton");
let resultCont = document.getElementById("result");

const loadQuestion = questionIndex => {
  let q = questions(questionIndex);
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

const loadNextQuestion = () => {
  let selected = document.querySelectorAll("input[type=radio]:checked");
  if (!selected) {
    alert(
      "Given the nature of your response, we are disinclined to offer you passage to the next inquiry..."
    );
    return;
  }
  let answer = selected.value;
  if ((questions[current].answer = answer)) {
    score += 10;
  }
  selected.checked = false;
  current++;
  if (current == totals - 1) {
    nextButton.textContent = "Submit";
  }
  if (current == totals) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = score;
    return;
  }
  loadQuestion(current);
};

loadQuestion(current);
