const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({
    name: {
        type: String,
        bio: String,
        required: true
    }
});

module.exports = mongoose.model('members', MembersSchema);
