const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    userName: String,
    rating: Number,
});

const Review = mongoose.model("review", ReviewSchema);

module.exports = Review;
