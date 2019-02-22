//Import all models here
const db = require('./models');
const express = require/('./models');


let questionList = [{
        description: "question 1",
        answer: {
            description: 'answer'
        }
    }
    // {
    //     description: "question 2"
    // },
    // {
    //     description: "question 3"
    // },
    // {
    //     description: "question 4"
    // },
    // {
    //     description: "question 5"
    // },
    // {
    //     description: "question 6"
    // },
    // {
    //     description: "question 7"
    // },
    // {
    //     description: "question 8"
    // },
    // {
    //     description: "question 9"
    // },
    // {
    //     description: "question 10"
    // },
    // {
    //     description: "question 11"
    // },
    // {
    //     description: "question 12"
    // },
    // {
    //     description: "question 13"
    // },
    // {
    //     description: "question 14"
    // },
    // {
    //     description: "question 15"
    // }
]



//Making sure first dummy data works before creating additional ones
// let answerList = [{

// },
// ]

// let reviewsList = [{

// },
// ]

db.Question.deleteMany({}, (err, questions) => {
    if (err) {
        console.log(`Error occured in deleting all questions ${err}`);
    }

    console.log(`Removed all questions: ${questions.deletedCount} in total`);
    questionList.forEach(question => {
        db.Question.create(question, (err, questionObj) => {
            if (err) {
                return console.log(`Data not added to database: ${err}`);
            }
            console.log(questionObj);
            if (questionObj) {
                //1 way
                db.Answer.create(questionObj.answer, (err, answerObj) => {
                    if (err) {
                        return console.log(`Data not added to database: ${err}`);
                    }
                    console.log(`Created ${answerObj}`);
                })

                //another way
                // db.Answer.create(answer, (err, answerObj) => {
                //     if (err) {
                //         return console.log(`Data not added to database: ${err}`);
                //     }
                //     questionObj.answer = answerObj;
                //     questionObj.save((err, newQuestion) => {
                //         if (err) {
                //             return console.log(`Data not added to database: ${err}`);
                //         }
                //         console.log(`Created ${newQuestion} questions`);
                //     })
                // })
            }

            process.exit();
        });
    })

});
