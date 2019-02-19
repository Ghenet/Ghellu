const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    title: String,
    id: Number,
    value: String,
});

const Answer = mongoose.model("answer", AnswerSchema);

module.exports = Answer;