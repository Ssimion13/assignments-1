const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8002;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/mails', require('./routes/mails'));
app.use('/contacts', require('./routes/contacts'));
app.use('/bandThings', require('./routes/bandThings'));
app.use('/shows', require('./routes/shows'));

mongoose.connect('mongoDB://localhost/band-site', (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
