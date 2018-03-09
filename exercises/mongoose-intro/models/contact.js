const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    coolness: {
        type: Number,
        min: [1, "must be at least 1"],
        max: [10, "must be no more than 10"]
    },
    isGoodPerson: Boolean,
    gender: String,
    favoriteFoods: [String],
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            minLength: 2,
            minLength: 2,
            enum: ["AL", "AK", "AR"]
        },
        zip: String
    }
});

module.exports = mongoose.model("Contact", contactSchema);
