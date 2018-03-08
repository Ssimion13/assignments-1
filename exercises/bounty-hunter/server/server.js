const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

app.use(bodyParser());

const bounties = [
    {
        firstName: "Joe",
        lastName: "Schmoe",
        living: true,
        bountyAmount: 3,
        type: "Sith",
        id: "b00a6bd0-2293-11e8-b01a-f921d2da7965"
    },
    {
        firstName: "Jane",
        lastName: "Schmoe",
        living: true,
        bountyAmount: 27,
        type: "Sith",
        id: "b00a92e0-2293-11e8-b01a-f921d2da7965"
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 26,
        type: "Jedi",
        id: "b00a92e1-2293-11e8-b01a-f921d2da7965"
    },
    {
        firstName: "Mike",
        lastName: "Schmidt",
        living: true,
        bountyAmount: 4,
        type: "Jedi",
        id: "b00a92e2-2293-11e8-b01a-f921d2da7965"
    }
]

app.get("/bounties", (req, res) => {
    if (req.query.id) {
        return res.send(bounties.filter(person => person.id === req.query.id));
    }
    if (req.query.firstName) {
        return res.send(bounties.filter(person => person.firstName === req.query.firstName));
    }
    if (req.query.lastName) {
        return res.send(bounties.filter(person => person.lastName === req.query.lastName));
    }
    if (req.query.living) {
        return res.send(bounties.filter(person => person.living === req.query.living));
    }
    if (req.query.type) {
        return res.send(bounties.filter(person => person.type === req.query.type));
    }
    return res.send(bounties);
})

app.post("/bounties", (req, res) => {
    req.body.id = uuid();
    bounties.push(req.body);
    return res.send(req.body);
})

app.put('/bounties/:id', (req, res) => {
    const found = bounties.find(person => person.id === req.params.id);
    for(let key in req.body){
        found[key] = req.body[key];
    }
    return res.send(found);
})

app.delete('/bounties/:id', (req, res) => {
    const found = bounties.find(person => person.id === req.params.id);
    bounties.splice(bounties.indexOf(found), 1);
    return res.send(bounties);
})

app.listen(3000, () => {
    console.log("the server is running on port 3000");
});
