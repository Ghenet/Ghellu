const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require('./models');

//config body parser
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

//Serve static files from public folder

app.use(express.static('public'));

Defining root route: localhost:3000/
app.get('/', (req, res) => {
    res.sendFile('views/signin.html', {
        root: __dirname
    });
});

// trying signin route here////////////////////
// app.get('/',(req,res)=>{
//  res.render('home.ejs');
// });
// =======
// app.use(express.static("public"));



//////////////////////////////////////
//Data

let questions = [{
        _id: 1,
        description: "What is html"
    },
    {
        _id: 2,
        description: "What is css"
    },
    {
        _id: 3,
        description: "Why use cors"
    },
    {
        _id: 4,
        description: "What is mongoose"
    },
    {
        _id: 5,
        description: "Why use package.json"
    },
    {
        _id: 6,
        description: "What is css"
    },
    {
        _id: 7,
        description: "What is css"
    },
    {
        _id: 8,
        description: "What is css"
    },
    {
        _id: 9,
        description: "What is css"
    },
    {
        _id: 10,
        description: "What is css"
    },
    {
        _id: 11,
        description: "What is css"
    },
    {
        _id: 12,
        description: "What is css"
    },
    {
        _id: 13,
        description: "What is css"
    },
    {
        _id: 14,
        description: "What is css"
    },
    {
        _id: 15,
        description: "What is css"
    }
];

let reviews = [{
        _id: 1,
        description: "response 1"
    },
    {
        _id: 2,
        description: "text 2"
    },
    {
        _id: 3,
        description: "text4"
    },
    {
        _id: 4,
        description: "What is mongoose"
    },
    {
        _id: 5,
        description: "Why use package.json"
    },
    {
        _id: 6,
        description: "What is css"
    },
    {
        _id: 7,
        description: "What is css"
    },
    {
        _id: 8,
        description: "What is css"
    },
    {
        _id: 9,
        description: "What is css"
    },
    {
        _id: 10,
        description: "What is css"
    },
    {
        _id: 11,
        description: "What is css"
    },
    {
        _id: 12,
        description: "What is css"
    },
    {
        _id: 13,
        description: "What is css"
    },
    {
        _id: 14,
        description: "What is css"
    },
    {
        _id: 15,
        description: "What is css"
    }
];

//HTML Endpoints
//Defining root route: localhost:3000/
app.get("/", (req, res) => {
    res.sendFile("views/landingpage.html", {
        root: __dirname
    });
});

//Get all reviews
app.get("/api/reviews", (req, res) => {
    console.log(`reviews are displaying`);
    res.json(reviews);
});

//Get reviews by id
app.get("/api/reviews/:id", (req, res) => {
    const reviewId = parseInt(req.params.id);
    console.log(`review Id requested is ${reviewId}`);
    const foundReview = reviews.filter(review => {
        return review._id == reviewId;
    })[0];
    res.json(foundReview);
});


//Create new reviews
app.post("/api/reviews", (req, res) => {
    db.Review.create(req.body, (err, createdReview) => {
        if (err) {
            throw err
        }

        res.json(createdReview);
    })
});

//Update reviews
app.put("/api/reviews/:id", (req, res) => {
    const reviewId = req.params.id;
    const reviewToUpdate = reviews.filter(review => {
        return review._id === reviewId;
    });
    reviewToUpdate.description = req.body.description;
    res.json(reviewToUpdate);
});

//Delete reviews
app.delete('/api/reviews/:id', (req, res) => {
    const reviewId = req.params.id;
    const reviewToDelete = reviews.filter(review => {
        return review._id === reviewId;
    });
    reviews.splice(reviews.indexOf(reviewToDelete), 1);
    res.json(reviewToDelete);
})

//This is to get all questions within game
app.get("/api/questions", (req, res) => {
    db.Question.find({}, (err, foundQuestions) => {
        res.json(foundQuestions);
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Ghellu game listening at http://localhost:3000/`);
});