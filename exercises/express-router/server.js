const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Middleware #1
app.use((req, res, next) => {
    console.log("Hey, I'm a middleware!");
    next();
})

// Middleware #2
app.use((req, res, next) => {
    console.log("Hey, I'm a second middleware!");
    next();
})

//Routes
app.use("/movies", require('./routes/movies')); // check here if the res starts with /movies
app.use("/songs", require('./routes/songs')); // check here if the res starts with /songs


app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
