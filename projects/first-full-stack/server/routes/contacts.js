const express = require('express');
const contactsRoutes = express.Router();
const Contacts = require('../models/contacts');

contactsRoutes.get('/', (req, res) => {
    Contacts.find((err, contacts) => {
        if (err) return res.status(500).send(err);
        return res.send(contacts);
    });
});

contactsRoutes.get('/:id', (req, res) => {
    Contacts.findById(req.params.id, (err, contact) => {
        if (err) return res.status(500).send(err);
        return res.send(contact);
    });
});

contactsRoutes.post('/', (req, res) => {
    const newContact = new Contacts(req.body);
    newContact.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newContact);
    });
});

contactsRoutes.delete('/:id', (req, res) => {
    Contacts.findByIdAndRemove(req.params.id, (err, removedContact) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedContact);
    });
});

module.exports = contactsRoutes;
