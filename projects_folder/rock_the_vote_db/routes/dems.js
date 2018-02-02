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


module.exports = demsRoutes;