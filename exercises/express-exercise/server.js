const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

app.use(bodyParser.json()); // teaches this app how to use incoming json bodies

const sports = [
    {id: 1, name: "Tennis"},
    {id: 2, name: "Poker"},
    {id: 3, name: "Basketball"}
]

app.get("/sports", (req, res) => {
    res.send(sports);
})

app.post("/sports", (req, res) => {
    req.body.id = uuid(); //use uuid pkg to generate an id for this post
    sports.push(req.body);
    return res.send(req.body); //good to send the same object back, include return
})

app.put("/sports/:id", (req, res) => {

})

app.delete("/sports/:id", (req, res) => {
    
})

app.listen(3000);
