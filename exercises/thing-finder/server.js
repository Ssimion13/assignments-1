const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v1");

app.use(bodyParser());

const songs = [
    {
        id: "2f3b94e0-22e1-11e8-ad5d-ef1411e2307b",
        title: "The Gambler",
        genre: "country"
    },
    {
        id: "2f3b94e1-22e1-11e8-ad5d-ef1411e2307b",
        title: "Toxic",
        genre: "pop"
    },
    {
        id: "2f3b94e2-22e1-11e8-ad5d-ef1411e2307b",
        title: "Girls, Girls, Girls",
        genre: "rock"
    },
    {
        id: "2f3b94e3-22e1-11e8-ad5d-ef1411e2307b",
        title: "I Shot the Sheriff",
        genre: "reggae"
    }
]

app.get("/", (req, res) => {
    res.send(songs);
})

app.get("/songs", (req, res) => {
    if (req.query.genre) {
        return res.send(songs.filter(song => song.genre === req.query.genre));
    }
    if (req.query.title) {
        return res.send(songs.filter(song => song.title === req.query.title))
    }
    if (req.query.id) {
        return res.send(songs.filter(song => song.id === req.query.id))
    }
    return res.send(songs);
})

app.post("/songs", (req, res) => {
    req.body.id = uuid();
    songs.push(req.body);
    return res.send(req.body);
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
