const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const demsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    party: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Dems', demsSchema);