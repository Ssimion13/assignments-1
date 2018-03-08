const express = require('express');
const movieRoutes = express.Router();

movieRoutes.get("/", (req, res) => {
    res.send({});
})

movieRoutes.get("/:id", (req, res) => {

})

movieRoutes.post("/", (req, res) => {

})

movieRoutes.put("/:id", (req, res) => {

})

movieRoutes.delete("/:id", (req, res) => {

})

module.exports = movieRoutes;
