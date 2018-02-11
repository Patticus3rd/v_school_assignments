const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSchema = new Schema({
    filterName: {
        type: String,
        required: true
    },
    filterArtist: {
        type: String,
        required: true
    },
    favorites: {
        type: Boolean,
        default: false
    },
    filterURL: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('snapCodes', codeSchema)