var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:3000/");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Sanity Check: JS is working!");
var $questionList;
var allQuestions = [];

Question = (text, choices, answer) => {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
// trying something new
app.use('/', (req, res) => {
  res.sendFile(_dirname + "/index.html");
});
// 
Question.prototype.correctAnswer = (choice) => {
  return choice === this.answer;
}
  allQuestions = json;


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