const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: String,
   password: String
});


UserSchema.plugin(passportLocalMongoose);
// create User db
const LoginUser = mongoose.model('LoginUser', UserSchema );
module.exports = LoginUser;  