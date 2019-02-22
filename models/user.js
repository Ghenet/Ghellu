<<<<<<< HEAD
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//    name: String,
//    email: String,
// });

// // create User db
// const User = mongoose.model('User', UserSchema );
// module.exports = User;  

=======

// create User db
const User = mongoose.model('User', UserSchema );
module.exports = User;  
//Model for user.js
>>>>>>> 9d01f15468c99abcc4088f0b0699b1b65c4515a2
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
>>>>>>> 9d01f15468c99abcc4088f0b0699b1b65c4515a2
