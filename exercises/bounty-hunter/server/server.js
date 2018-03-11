const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const uuid = require("uuid/v1");
const port = process.env.PORT || 7005;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/bounty", require('./routes/bounties'));

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
