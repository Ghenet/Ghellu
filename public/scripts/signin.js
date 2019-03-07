// //console.log('OKAY OKAY IM WORKING')

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const loginUser = require('./models/loginuser');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const passportLocalMongoose = require('passport-local-mongoose');

// mongoose.connect('mongodb://localhost:3000/Ghellu' , { useNewUrlParser: true } );
// const app = express();
// //app.set('view engine',ejs);

// app.use(require('express-session')({
// secret:"My dog is the cutest dog ever.",
// resave: false,
// saveUninitialized: false
// }));



// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(bodyParser.urlencoded({
//     extended: true,
// }));

// process.on('unhandledRejection', up => { throw up })

// app.use(express.static('public'));

// app.get('/',(req,res)=>{
//     res.render('home.ejs');
//    });
   
   
//    app.get('/',(req,res)=>{
//    res.render(views/landingpage.html);
//    });

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`Ghellu game listening at http://localhost:3000/`)
// });

