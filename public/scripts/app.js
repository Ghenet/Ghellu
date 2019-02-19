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

  // pass `allBooks` into the template function
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

