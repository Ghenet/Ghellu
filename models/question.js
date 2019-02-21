const mongoose = require('mongoose');
Schema = mongoose.Schema;

Question = (text, choices, answer) => {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = (choice) => {
    return choice === this.answer;
}

module.exports = Question;