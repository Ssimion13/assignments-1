const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/products", require('./routes/inventory'));

mongoose.connect("mongoDB://localhost/products-list", err => {
    if (err) throw err;
    console.log("Connected to the database");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})
