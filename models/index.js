const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Ghellu", {
    useNewUrlParser: true
});

module.exports = {
    Question: require("./question"),
    Review: require("./review"),
    Answer: require("./answer")
}
<<<<<<< HEAD
=======

>>>>>>> 99b2b989ae2b122b2419020caedc55c196206b7b
