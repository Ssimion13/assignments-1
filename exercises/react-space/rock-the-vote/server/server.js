const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/issues", require('./routes/issues'));

mongoose.connect('mongoDB://localhost/political-issues', (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
