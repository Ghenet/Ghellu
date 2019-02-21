const Quiz = (questions) => {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = () => {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = () => {
    return this.questions.length === this.questionIndex
}

Quiz.prototypeGuess = (answer) => {
this.questionIndex++;

if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
}
}

module.exports = Quiz_controller;