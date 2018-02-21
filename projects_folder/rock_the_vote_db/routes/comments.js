const express = require('express')
const commentsRouter = express.Router()
const bodyParser = require('body-parser')
const Comment = require('../models/comment')


commentsRouter
    .route("/:articleId")
    .get((req, res) => {
        Comment.find({
            articleId: req.params.articleId
        }, (err, foundComments) => {
            if (err) {
                console.error(err)
            } else {
                res.send(foundComments)
            }
        })
    })
commentsRouter
    .route("/")
    .post((req, res) => {
        let newComment = new Comment(req.body)
        newComment.save((err, savedComment) => {
            if (err) {
                console.error(err)
            } else {
                res.send(savedComment)
            }
        })
    });

module.exports = commentsRouter;