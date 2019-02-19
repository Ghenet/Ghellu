const express = require('express'),
bodyParser = require('body-parser');

app.use(express.static('public'));

const app = express();
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
// 
//Data
// 
var question = [
    {
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

var answer =[
    {
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

app.listen(process.env.PORT || 3000, function () {
    console.log(' app listening at http://localhost:3000/');
  });