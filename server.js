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