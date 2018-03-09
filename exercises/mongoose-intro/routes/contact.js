const express = require("express");
const contactRoutes = express.Router();
const Contact = require("../models/contact")

contactRoutes.get("/", (req, res) => {
const query = {};
    if (req.query.isGoodPerson) {
        query = req.query.isGoodPerson;
    }

    Contact.find(query, (err, contacts) => {
        if (err) return res.status(500).send(err);
        return res.send(contacts);
    });
});

contactRoutes.get("/:id", (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) return res.status(500).send(err);
        return res.send(contact);
    });
});

contactRoutes.post("/", (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newContact);
    });
});

contactRoutes.put("/:id", (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedContact) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedContact);
    })
})

contactRoutes.delete("/:id", (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, removedContact) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedContact);
    })
})

module.exports = contactRoutes;
