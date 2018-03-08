const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use("/movies", require('./routes.movies')); // check here if the res starts with /movies
app.use("/songs", require('./routes.songs')); // check here if the res starts with /songs


app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
