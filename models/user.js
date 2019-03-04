const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const UserSchema = new Schema({
   username: String,
   password: String
});

//adding the methods that come with package to our schema
UserSchema.plugin(passportLocalMongoose);
// create User db
const User = mongoose.model('User', UserSchema );

module.exports = User;  
=======

//Creating User schema with 4 attributes and 1 referenced attribute (reference Review by objectId)
const User = new Schema({
    firstName: String,
    email: String,
    image: String,
    score: Number,
    userReview: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

//Creating User model from schema created above
const User = mongoose.model('User', UserSchema);

//Exporting User model to make it available to other models
module.exports = User;
>>>>>>> 37bf3ed74d2530c992d74a2b170da4926e929681
