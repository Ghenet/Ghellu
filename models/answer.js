const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    description: String
});

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;