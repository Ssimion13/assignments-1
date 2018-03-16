const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bandText = "Jack Darwin - an indie-rock, neo-folk band based in Nashville, TN"

const bandThingsSchema = new Schema({
    bandInfo: {
        type: String,
        required: true,
        default: bandText
    },
    video: String,
    repOne: {
        companyName: String,
        phone: String
    },
    repTwo: {
        companyName: String,
        phone: String
    }
});

module.exports = mongoose.model('bandThingsSchema', bandThingsSchema);
