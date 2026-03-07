const mongoose = require('mongoose');
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    colors: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('City', citySchema)
