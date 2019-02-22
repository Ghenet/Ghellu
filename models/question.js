const mongoose = require('mongoose');
Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    description: String
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;