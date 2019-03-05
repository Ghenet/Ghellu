const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating User schema with 4 attributes and 1 referenced attribute (reference Review by objectId)
const User = new Schema({
  firstName: String,
  email: String,
  image: String,
  score: Number,
  userReview: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

//Creating User model from schema created above
const User = mongoose.model("User", UserSchema);

//Exporting User model to make it available to other models
module.exports = User;
