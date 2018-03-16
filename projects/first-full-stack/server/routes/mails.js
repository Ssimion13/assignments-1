const express = require('express');
const mailsRoutes = express.Router();
const Mails = require('../routes/mails');

mailsRoutes.get('/', (req, res) => {
    Mails.find((err, mails) => {
        if (err) return res.status(500).send(err);
        return res.send(mails);
    });
});

mailsRoutes.get('/:id', (req, res) => {
    Mails.findById(req.params.id, (err, mail) => {
        if (err) return res.status(500).send(err);
        return res.send(mail);
    });
});

mailsRoutes.post('/', (req, res) => {
    const newMail = new Mails(req.body);
    newMail.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newMail);
    });
});

mailsRoutes.delete('/', (req, res) => {
    Mails.findByIdAndRemove(req.params.id, (err, removedMail) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedMail);
    });
});

module.exports = mailsRoutes;
