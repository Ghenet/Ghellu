const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Import all models here
const db = require('./models');
//config body parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//Serve static files from public folder
app.use(express.static('public'));

//Defining root route: localhost:3000/
app.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname
    });
});


//Data

let question = [{
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

let answer = [{
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

//Create CRUD endpoints

//Create reviews (post method)
//Update reviews(ge)




app.listen(process.env.PORT || 3000, () => {
    console.log(`Ghellu game listening at http://localhost:3000/`)
});