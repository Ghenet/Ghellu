
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

var allReviews = [];

$(document).ready(function () {

  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    success: handleSuccess,
    error: handleError
  });

  //Process to create new reviews
  $('#newReviewForm').on('submit', function (e) {
    e.preventDefault();

    let formData = $(this).serialize();

    $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: formData,
      success: newReviewSuccess,
      error: newReviewError
    });
  });

  $('#reviewTarget').on('click', '.deleteBtn', function () {
    console.log('Clicked delete button to', '/api/reviews/' + $(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/reviews/' + $(this).attr('data-id'),
      success: deleteReviewSuccess,
      error: deleteReviewError
    });
  });

});

// // helper function to render all posts to view
// // note: we empty and re-render the collection each time our post data changes
function render() {
  // empty existing posts from view
  $('#reviewTarget').empty();

  // pass `allReviews` into the template function
  var reviewsHtml = getAllReviewsHtml(allReviews);

  // append reviews to landingpage's html
  $('#reviewTarget').append(reviewsHtml);

  function getReviewsHtml(review) {
    return `<hr> <p><b>${review.description}</b> <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${review._id}>Delete</button></p>`;
  }

  function getAllReviewsHtml(reviews) {
    return reviews.map(review => getReviewsHtml(review)).join("");
  };
};

function handleSuccess(json) {
  for (i = 0; i < json.length; i++) {
    allReviews.push(json[i]);
  }
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#reviewTarget').text('Failed to load, is the server working?');
}

function newReviewSuccess(json) {
  $('#newReviewForm textarea').val('');
  console.log("testing")
  allReviews.push(json);
  render();
}

function newReviewError() {
  console.log(`error, this didn't work!!!`);
}

function deleteReviewSuccess(json) {
  var review = json;
  console.log(json);
  var reviewId = review._id;
  console.log('delete review', reviewId);
  // find the review with the correct ID and remove it from our allReviews array
  for (var index = 0; index < allReviews.length; index++) {
    if (allReviews[index]._id === reviewId) {
      allReviews.splice(index, 1);
      break; // we found our review - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}
  allQuestions = json;


// function handleError(e) {
//   console.log('uh oh');
//   $('#question').text('Failed to load, is the server working?');
//}

// function newQuestionSuccess(json) {
//   $('#newQuestionForm input').val('');
//   allQuestions.push(json);
//   render();
// }

// function newQuestionError() {
//   console.log( 'error!');
// }

 //function apiCall() {
  // Ajax request for data
  // USe the data to create a template:
  // template(data);
//}

// function template(json) {
//   return `
//     <div className="questionContainer">

//     </div>
//   `
// }

const wrapper = document.getElementById('wrapper'); 

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;

  } 
  console.dir(event.target.id);
})

function deleteReviewError() {
  console.log('deletereview error message!');
}
