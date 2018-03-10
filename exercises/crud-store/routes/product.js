const express = require('express');
const productRoutes = express.Router();
const Product = require("../models/product");

productRoutes.get("/", (req, res) => {
    Product.find((err, products) => {
        if (err) return res.status(500).send(err);
        return res.send(products);
    });
});

productRoutes.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return res.status(500).send(err);
        return res.send(product);
    });
});

productRoutes.post("/", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newProduct);
    });
});

productRoutes.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedProduct);
    });
});

productRoutes.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, removedProduct) => {
        if (err) return res.status(500).send(err);
        return res.status(202).send(removedProduct);
    })
})

module.exports = productRoutes;
