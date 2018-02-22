const express = require('express');
const demsRoutes = express.Router();

const Dems = require('../models/dems');

demsRoutes.get('/', (req, res) => {
    Dems.find((err, rep) => {
        if (err) return res.status(500).send(err);
        return res.send(rep)
    })
})

demsRoutes.post('/', (req, res) => {
    const newArticle = new Dems (req.body);
    newArticle.save((err) => {
        if(err) return res.status(500).send(err);
        return res.send(newArticle);
    })
})

demsRoutes.put('/:id', (req, res) => {
    Dems.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRep) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedRep);
    })
})
demsRoutes.delete('/:id', (req, res) => {
    Dems.findByIdAndRemove(req.params.id, (err, deletedRep) => {
        if(err) return res.status(500).send(err);
        return res.send(deletedRep)
    })
})
demsRoutes.route("/:id/comments")
    .post((req, res) => {
        Dems.findOneAndUpdate({ _id: req.params.id }, { $set: { "comments.": req.body.text } }, { new: true }, (err, updatedArticle) => {
            console.log(updatedArticle);
        })
    })


module.exports = demsRoutes;

// demsRoutes.post('/:id/:comments', (req, res) => {
//     Dems.findOne({_id: req.params.id})
//     populate('Comments')
//     exec(function (err, rep)  {
//         if(err) return res.status(500).send(err);
//         return res.send(rep)
//     })
// })



// demsRoutes.route("/:id/comments/:commentId")
//     .put((req, res) => {
//         Dems.update({ _id: req.params.id, "comments._id": req.params.commentId }, { $set: req.body, new: true }, (err, updatedIssue) => {
//             if(err)return res.status(500).send(err);
//             console.log(updatedIssue);
//             return res.status(200).send(updatedIssue);
//         })
//     })



// module.exports = demsRoutes;