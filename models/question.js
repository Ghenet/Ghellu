const mongoose = require('mongoose');

<<<<<<< HEAD
=======
const Schema = mongoose.Schema;
const Answer = require('./answer');

>>>>>>> 99b2b989ae2b122b2419020caedc55c196206b7b
const QuestionSchema = new Schema({
    description: String,
    answer: Answer.schema
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;