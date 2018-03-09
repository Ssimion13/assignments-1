const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/contacts", require("./routes/contact"));

mongoose.connect("mongoDB://localhost/contact-list", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, () => {
    console.log(`Server is listneing on port ${port}`);
})
