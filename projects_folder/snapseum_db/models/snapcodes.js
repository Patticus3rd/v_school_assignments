const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSchema = new Schema({
    codeName: {
        type: String,
        required: true
    },
    codeArtist: {
        type: String,
        required: true
    },
    favorites: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('snapCodes', codeSchema)