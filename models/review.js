const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    description: String,
    rating: Number
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;