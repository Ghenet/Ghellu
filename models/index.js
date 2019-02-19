const mongoose = require('mongoose');
mongoose.connect = ("mongodb://localhost/Ghellu");

module.exports.Question = require("./question");