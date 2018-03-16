const express = require('express');
const showsRoutes = express.Router();
const Shows = require('../routes/shows');

showsRoutes.get('/', (req, res) => {
    Shows.find((err, shows) => {
        if (err) return res.status(500).send(err);
        return res.send(shows);
    });
});

showsRoutes.get('/:id', (req, res) => {
    Shows.findById(req.params.id, (err, show) => {
        if (err) return res.status(500).send(err);
        return res.send(show);
    });
});

showsRoutes.post('/', (req, res) => {
    const newShow = new Shows(req.body);
    newShow.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newShow);
    });
});

showsRoutes.put('/:id', (req, res) => {
    Shows.findByIdAndUpdate(req.params.is, req.body, {new: true}, (err, updatedShow) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedShow);
    });
});

showsRoutes.delete('/:id', (req, res) => {
    Shows.findByIdAndRemove(req.params.id, (err, removedShow) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedShow);
    });
});

module.exports = showsRoutes;
