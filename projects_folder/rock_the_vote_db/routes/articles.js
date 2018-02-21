const express = require('express');
const articleRoutes = express.Router();
const random = require('mongoose-random');

const Articles = require('../models/Articles');

articleRoutes.get('/', (req, res) => {
    Articles.find((err, rep) => {
        if (err) return res.status(500).send(err);
        return res.send(rep)
    })
})

articleRoutes.post('/', (req, res) => {
    const newArticle = new Articles(req.body);
    newArticle.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newArticle);
    })
})

articleRoutes.put('/:id', (req, res) => {
    Articles.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRep) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedRep);
    })
})
articleRoutes.delete('/:id', (req, res) => {
    Articles.findByIdAndRemove(req.params.id, (err, deletedRep) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedRep)
    })
})

articleRoutes.post('/:id/:comments', (req, res) => {
    Articles.findOne({_id: req.params.id})
    populate('Comments')
    exec(function (err, rep)  {
        if(err) return res.status(500).send(err);
        return res.send(rep)
    })
})


// articleRoutes.route("/:id/comments")
//     .post((req, res) => {
//         Articles.findOneAndUpdate({ _id: req.params.id }, { $set: { "comments": req.body.text } }, { new: true }, (err, updatedIssue) => {
//             console.log(updatedIssue);
//         })
//     })
// articleRoutes.route("/:id/comments/:commentId")
//     .put((req, res) => {
//         Articles.update({ _id: req.params.id, "comments._id": req.params.commentId }, { $set: req.body, new: true }, (err, updatedIssue) => {
//             if(err)return res.status(500).send(err);
//             console.log(updatedIssue);
//             return res.status(200).send(updatedIssue);
//         })
//     })



module.exports = articleRoutes;