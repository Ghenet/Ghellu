const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Ghellu", {
  useNewUrlParser: true
});

module.exports = {
  Review: require("./review")
};
