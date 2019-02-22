// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//    name: String,
//    email: String,
// });

// // create User db
// const User = mongoose.model('User', UserSchema );
// module.exports = User;  

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: String,
   password: String
});

//adding the methods that come with package to our schema
UserSchema.plugin(passportLocalMongoose);
// create User db
const User = mongoose.model('User', UserSchema );
module.exports = User;  