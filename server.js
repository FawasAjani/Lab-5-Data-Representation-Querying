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