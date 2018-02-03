const express = require('express');
const repsRoutes = express.Router();
const random = require('mongoose-random');

const Reps = require('../models/reps');

repsRoutes.get('/', (req, res) => {
    Reps.find((err, rep) => {
        if (err) return res.status(500).send(err);
        return res.send(rep)
    })
})

// repsRoutes.get('/random', (req, res) => {
//     Reps.findRandom((err, rep) => {
//         console.log(rep)
//     })
// })


repsRoutes.post('/', (req, res) => {
    const newArticle = new Reps(req.body);
    newArticle.save((err) => {
        if(err) return res.status(500).send(err);
        return res.send(newArticle);
    })
})
repsRoutes.put('/:id', (req, res) => {
    Reps.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRep) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedRep);
    })
})
repsRoutes.delete('/:id', (req, res) => {
    Reps.findByIdAndRemove(req.params.id, (err, deletedRep) => {
        if(err) return res.status(500).send(err);
        return res.send(deletedRep)
    })
})


module.exports = repsRoutes;