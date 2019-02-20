const mongoose = require('mongoose');
mongoose.connect = ("mongodb://localhost/Ghellu");
const express = require('express');

module.exports.Question = require("./question");