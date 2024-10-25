//server.js
//Buildin a server

//import express libary
const express = require('express');

//create an express called App
const app = express();

//Set variable port 3000
const port = 3000;
//prints out Welcome to Data Resprentation & Querting
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});


//Exercise 4: Route with URL Parameters

//Set up route for my first name page
app.get('/hello/:fname', (req, res) => {
    const fname = req.params.fname;
    res.send(`Hello ${fname}`);
});

//Exercise 5: Return JsonData

//set up movies page
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies:movies });
});

//Exercise 6: Serving Static HTML
//Serve the HTML file
const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Exercise 7: Handling GET 
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.use(express.static('public'));

//Exercise8
//Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//POST request handler
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});