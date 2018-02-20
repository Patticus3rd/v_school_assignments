const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const demSchema = new Schema({
    articleTitle: {
        type: String,
        required: true
    },
    articleSource: {
        type: String,
        require: true
    } ,
    party: {
        type: String,
        require: true
    },
    comments: [String],
    upVotes:{
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0
    }
    
})

module.exports = mongoose.model('Democrat', demSchema)
