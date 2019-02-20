//Model for user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating User schema with 3 attributes and 1 embedded attribute (score)
const User = new Schema({
    name = String,
    email = String,
    image = String,
    score = number
});

//Creating User model from schema created above
const User = mongoose.model('User', UserSchema);

//Exporting User model to make it available to other models
module.exports = User;