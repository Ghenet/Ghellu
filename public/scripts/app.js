
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
const db = require('./models');
// const scrp = require('./public/scripts');
// generate a new express app and call it 'app'
const app = express();

// serve static files in public
app.use(express.static('public'));

app.use(require('express-session')({
secret:"Bella is the best dog in the world",
resave:false,
saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));




// ------------------------------------------------------

console.log("Sanity Check: JS is working!");
var $questionList;
var allQuestions = [];

$(document).ready(function(){

  $questionList = $('#questionTarget');
  $.ajax({
    method: 'GET',
    url: '/api/question',
    success: handleSuccess,
    error: handleError
  });
});

function getAllQuestionsHtml(question) {
  return question.map(getBookHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $questionList.empty();

  // pass `allQuestion` into the template function
  var questionHtml = getAllQuestionsHtml(allQuestions);

  // append html to the view
  $questionList.append(questionHtml);
};

function handleSuccess(json) {
  allQuestions = json;
  render();
}

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

