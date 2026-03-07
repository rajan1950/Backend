const mongoosh = require('mongoose');
const Schema = mongoosh.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    age: {
        type: Number,
        required: true
    },
    colors: {
        type: [String],
        default: []
    },

})

module.exports = mongoosh.model('User', userSchema)