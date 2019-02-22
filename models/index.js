const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Ghellu", {
    useNewUrlParser: true
});

module.exports = {
    Question: require("./question"),
    Review: require("./review"),
    Answer: require("./answer")
}
