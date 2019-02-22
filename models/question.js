const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Answer = require('./answer');

const QuestionSchema = new Schema({
    description: String,
    answer: Answer.schema
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;