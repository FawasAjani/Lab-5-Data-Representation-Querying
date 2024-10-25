//Server.js
const express = require('express');
const app = express();
const port = 4000;
//url roots point
app.get('/', (req, res) => {
    res.send('Hello World');//Http Response
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');//Http Response
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});