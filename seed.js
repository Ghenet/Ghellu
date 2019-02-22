//Import all models here
const db = require('./models');
const express = require/('/models');

let questionList = [
    {
        description: "question 1",
        answer: {
            _id: 01,
            text: "default"
        } 
    },
    {
        description: "question 2",
        answer: {
            _id: 02,
            text: "default"},
    },
    {
        description: "question 3",
        answer: {
            _id: 03,
            text: "default"
        },
    },
    {
        description: "question 4",
        answer: {
            _id: 04,
            text: "default"
        },
    },
    {
        description: "question 5",
        answer: {
            _id: 05,
            text: "default"
        },
    },
    {
        description: "question 6",
        answer: {
            _id: 06,
            text: "default"
        },
    },
    {
        description: "question 7",
        answer: {
            _id: 07,
            text: "default"
        },
    },
    {
        description: "question 8",
        answer: {
            _id: 08,
            text: "default"
        },
    },
    {
        description: "question 9",
        answer: {
            _id: 09,
            text: "default"
        },
    },
    {
        description: "question 10",
        answer: {
            _id: 10,
            text: "default"},
    },
    {
        description: "question 11",
        answer: {
            _id: 11,
            text: "default"
        },
    },
    {
        description: "question 12",
        answer: {
            _id: 12,
            text: "default"
        },
    },
    {
        description: "question 13",
        answer: {
            _id: 13,
            text: "default"
        },
    },
    {
        description: "question 14",
        answer: {
            _id: 14,
            text: "default"
        },
    },
    {
        description: "question 15",
        answer: {
            _id: 15,
            text: "default"
        },
    }
]

//Making sure first dummy data works before creating additional ones
// let answerList = [{

// },
// ]

// let reviewsList = [{

// },
// ]

db.Question.deleteMany({}, function(err, books){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all Questions');
  
      // create new records based on the array books_list
      db.Question.create(questionList, function(err, questions){
        if (err) { return console.log('err', err); }
        console.log("created", question.length, "questions");
        process.exit();
      });
    }
  });
