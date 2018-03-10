const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Product", productSchema);
