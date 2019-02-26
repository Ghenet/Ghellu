const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');

//config body parser
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

//Serve static files from public folder
app.use(express.static("public"));

//HTML Endpoints
//Defining root route: localhost:3000/
app.get("/", (req, res) => {
    res.sendFile("views/landingpage.html", {
        root: __dirname
    });
});

app.get("/dash", (req, res) => {
    res.sendFile("views/index.html", {
        root: __dirname
    });
});

//Get all reviews
app.get("/api/reviews", (req, res) => {
    console.log(`reviews are displaying`);
    db.Review.find({}, (err, foundReviews) => {
        if (err) {
            throw err
        }
        res.json(foundReviews);
    })
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
    db.Review.findOneAndDelete({
        _id: req.params.id
    }, (err, deletedId) => {
        if (err) {
            throw err;
        }

        res.json(deletedId);
    });
});


//This is to get all questions within game
app.get("/api/questions", (req, res) => {
    db.Question.find({}, (err, foundQuestions) => {
        res.json(foundQuestions);
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Ghellu game listening at http://localhost:3000/`);
});