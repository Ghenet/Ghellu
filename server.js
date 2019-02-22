//require express in our app
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');
const db = require('./models');

//mongoose.connect("mongodb://localhost:3000/Ghellu");

const app = express();

// serve static files in public
app.use(express.static('public'));

app.use(require('express-session')({
secret:"My dog is the best dog in the world",
resave:false,
saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('view engine','ejs');

///=========landing page route========


// ============================

// =======================================================
// AUTH ROUTES
// =======================================================


// app.get('/',isLoggedIn, (req ,res) => {
//     res.sendFile('/landingpage.html' , 
//     { root : __dirname});
//   });
  
  // sends user to the register forum
  app.get('/register', (req, res) => {
    res.sendFile('views/register.html', 
    {root: __dirname } );
  });
  
  
  //password is hashed for user protection 
  app.post('/register', (req, res) =>{
      req.body.username
      req.body.password
      // grabbing the user data and ONLY storing the username in the DB
      User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if (err) {
          console.log(err);
          return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){

          res.redirect("/");
        });
      });
  });
  // =======================================================
  // LOGIN ROUTES
  // =======================================================
  // render login form
  app.get('/login', (req, res) => {
    //res.send('YOu have logged in'); //checking if it's sending
    res.sendFile('views/login.html', {root: __dirname } );
  });

  // login logic: checking to see if the credentials match the db, if not user is sent back to the login page
  app.post('/login',passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/login'
  }) ,(req, res)=> {
    res.redirect('views/landingpage.html')
  });

  // app.post('/login' ,(req, res)=> {
  //     res.redirect('/')
  //   });
  
  // =======================================================
  // LOGOUT ROUTES
  // =======================================================
//   app.get('/logout', (req, res)=> {
//     req.logout();
//     res.redirect("/");
//   });
  
//   // function that checks to see if the user is logged in , if not. user is redirected to the home page
//   // this function will be used at each route to check for auth
//   function isLoggedIn(req,res,next){
//     if(req.isAuthenticated()){
//       return next();
//     }
//     res.redirect('/login');
//   }

process.on('unhandledRejection', up => { throw up })

// //Serve static files from public folder
app.use(express.static('public'));

// //Defining root route: localhost:3000/
app.get('/', (req, res) => {
    res.sendFile('views/register.html', {
        root: __dirname
    });
});

// trying signin route here////////////////////
// app.get('/',(req,res)=>{
//  res.render('home.ejs');
// });


app.get('/',(req,res)=>{
res.sendFile('views/landingpage.html',
{ root : __dirname});
});
//////////////////////////////////////
//Data

var question = [{
        title: "Who",
        _id: 1,
    },
    {
        title: "What",
        _id: 2,
    },
    {
        title: "when",
        _id: 3,
    },
];

var answer = [{
        title: "",
        _id: 1,
        value: "This is the answer",
        img: ""
    },
    {
        title: "",
        _id: 2,
        value: "This is the answer",
        img: ""
    },
    {
        title: "",
        _id: 3,
        value: "This is the answer",
        img: ""
    }
];


app.listen(process.env.PORT || 3000, () => {
    console.log(`Ghellu game listening at http://localhost:3000/`)
});

