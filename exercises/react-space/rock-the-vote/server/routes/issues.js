const express = require('express');
const issueRoutes = express.Router();
const Issue = require('../models/issues');

issueRoutes.get('/', (req, res) => {
    Issue.find((err, issues) => {
        if (err) return res.status(500).send(err);
        return res.send(issues);
    });
});

issueRoutes.get('/:id', (req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) return res.status(500).send(err);
        return res.send(issue);
    });
});

issueRoutes.post('/', (req, res) => {
    const newIssue = new Issue(req.body);
    newIssue.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newIssue);
    });
});

issueRoutes.put('/:id', (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIssue) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedIssue)
        });
});

issueRoutes.delete('/:id', (req, res) => {
    Issue.findByIdAndRemove(req.params.id, (err, removedIssue) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedIssue);
    });
});

module.exports = issueRoutes;
