const mongoose = require('mongoose');
mongoose.connect = ("mongodb://localhost/Ghellu");
const express = require('express');

module.exports.Quiz = require("./quiz_controller");
module.exports.Question = require('./question')