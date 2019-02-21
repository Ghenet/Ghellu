//Import all models here
const db = require('./models');


let questionList = [{
        description: "question 1"
    },
    {
        description: "question 2"
    },
    {
        description: "question 3"
    },
    {
        description: "question 4"
    },
    {
        description: "question 5"
    },
    {
        description: "question 6"
    },
    {
        description: "question 7"
    },
    {
        description: "question 8"
    },
    {
        description: "question 9"
    },
    {
        description: "question 10"
    },
    {
        description: "question 11"
    },
    {
        description: "question 12"
    },
    {
        description: "question 13"
    },
    {
        description: "question 14"
    },
    {
        description: "question 15"
    }
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

    db.Question.create(questionList, (err, questions) => {
        if (err) {
            console.log(`Data not added to database: ${err}`);
        }
        console.log(`Created ${questions.length} questions`);
        process.exit();
    });
});