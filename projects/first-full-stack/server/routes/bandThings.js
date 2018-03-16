const express = require('express');
const bandThingsRoutes = express.Router();
const BandThings = require('../models/bandThings');

bandThingsRoutes.get('/', (req, res) => {
    BandThings.find((err, bandThings) => {
        if (err) return res.status(500).send(err);
        return res.send(bandThings);
    });
});

bandThingsRoutes.get('/:id', (req, res) => {
    BandThings.findById(req.params.id, (err, bandThing) => {
        if (err) return res.status(500).send(err);
        return res.send(bandthing);
    });
});

bandThingsRoutes.put('/:id', (req, res) => {
    BandThings.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBandThing) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedBandThing);
    });
});

bandThingsRoutes.delete('/:id', (req, res) => {
    BandThings.findByIdAndRemove(req.params.id, (err, removedBandThing) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedBandThing);
    });
});

module.exports = bandThingsRoutes;
