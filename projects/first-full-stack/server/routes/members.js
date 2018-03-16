const express = require('express');
const membersRoutes = express.Router();
const Members = require('../routes/members');

membersRoutes.get('/', (req, res) => {
    Members.find((err, members) => {
        if (err) return res.status(500).send(err);
        return res.send(members);
    });
});

membersRoutes.get('/:id', (req, res) => {
    Members.findById(req.params.id, (err, member) => {
        if (err) return res.status(500).send(err);
        return res.send(member);
    });
});

membersRoutes.post('/', (req, res) => {
    const newMember = new Members(req.body);
    newMember.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newMember);
    });
});

membersRoutes.put('/:id', (req, res) => {
    Members.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMember) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedMember);
    });
});

membersRoutes.delete('/:id', (req, res) => {
    Members.findByIdAndRemove(req.params.id, (err, removedMember) => {
        if (err) return res.status(500).send(err);
        return res.send(removedMember);
    });
});

module.exports = membersRoutes;
