const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: String,
    id: Number,

});

const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;