const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ArticleSchema = new Schema ({
    articleTitle: {
        type: String,
        required: true
    },
    articleSource: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Article", ArticleSchema)