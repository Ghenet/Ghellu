console.log("Sanity Check: JS is working!");
var $questionList;
var allQuestions = [];

Question = (text, choices, answer) => {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = (choice) => {
  return choice === this.answer;
}
//   allQuestions = json;
//   render()
// }

function handleError(e) {
  console.log('uh oh');
  $('#questionTarget').text('Failed to load, is the server working?');
}

function newQuestionSuccess(json) {
  $('#newQuestionForm input').val('');
  allQuestions.push(json);
  render();
}

function newQuestionError() {
  console.log( 'error!');
}

function apiCall() {
  // Ajax request for data
  // USe the data to create a template:
  // template(data);
}

function template(json) {
  return `
    <div className="questionContainer">
      
    </div>
  `
}