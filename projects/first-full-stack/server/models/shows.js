const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showsSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('shows', showsSchema);
