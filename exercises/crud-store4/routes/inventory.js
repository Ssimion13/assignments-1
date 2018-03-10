const express = require('express');
const productRoutes = express();
const Product = require("../models/product");

productRoutes.get('/', (req, res) => {
    Product.find((err, products) => {
        if (err) return res.status(500).send(err);
        return res.send()
    });
});

productRoutes.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(foundProduct);
    });
});

productRoutes.post('/', (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newProduct);
    })
});

productRoutes.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(updateProduct);
    })
});

productRoutes.delete('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, (err, deletedProduct) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedProduct);
    })
});

module.exports = productSchema;
