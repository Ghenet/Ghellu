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

