const express = require('express');
const ismsRouter = express.Router();
const ismModel = require('../models/isms.js');

ismsRouter.route('/')
    .post(( req, res) => {
        let newIsm = new ismModel(req.body);
        newIsm.save(req.body, (err, savedIsm) => {
            if(err) return res.status(500).send(err);
        return res.send(savedIsm)
        })
    })

    .get(( req, res ) => {
        ismModel.find(req.query, ( err, foundIsms) => {
            if(err) return res.status(500).send(err);
            return res.send(foundIsms)
        })
    })

    ismsRouter.route('/:id')
        .get((req, res) => {
            let { id } = req.params;
            ismModel.findOne({ _id: id}, (err, foundIsm) =>{
                if(err) return res.status(500).send(err);
                return res.send(foundIsm)
            })
        })
        .delete((req, res) => {
            let { id } = req.params;
            ismModel.findByIdAndRemove({ _id: id}, (err, removedIsm) => {
                if(err) return res.status(500).send(err);
                return res.send(removedIsm)
            })
        })

        .put((req, res) => {
            let { id } = req.params;
            ismModel.findByIdAndUpdate(id, req.body, (err, updatedIsm) => {
                if(err) return res.status(500).send(err);
                return res.send(updatedIsm)
            })
        })


module.exports = ismsRouter;