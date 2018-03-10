const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    supplier: {
        type: String,
        required: true
    }
}

module.exports = mongoose.model("Product", productSchema);
