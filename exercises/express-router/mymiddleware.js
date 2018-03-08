const express = require('express');
const myMiddleWare = express();

// Middleware #1
myMiddleWare.use((req, res, next) => {
    console.log("Hey, I'm a middleware!");
    req.
    next();
});

module.exports = myMiddleWare;
