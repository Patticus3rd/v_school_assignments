const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    elementType: {
        type: String,
        required: true,
    },
    inAnime: {
        type: Boolean,
        default: false,
    },
    abilities: [String],
    generation:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Store', pokemonSchema)