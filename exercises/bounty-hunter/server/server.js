const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

app.use(bodyParser());

app.use("/bounties", require('./routes/bounties'));

app.listen(5000, () => {
    console.log("the server is running on port 5000");
});
