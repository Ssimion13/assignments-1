const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issuesSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    vote: {
        up: {
            type: Number,
            default: 0
        },
        down: {
            type: Number,
            default: 0
        }
    },
    comments: [String]
});

module.exports = mongoose.model("Issues", issuesSchema);
