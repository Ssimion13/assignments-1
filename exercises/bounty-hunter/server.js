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
    res.send(bounties);
})

app.post("/bounties", (req, res) => {

})

app.listen(3000, () => {
    console.log("the server is running on port 3000");
});
