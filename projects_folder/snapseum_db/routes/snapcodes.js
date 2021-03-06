const express = require('express');
const snapRoutes = express.Router();
const fs = require('fs');

//MODEL
const snapCodes = require('../models/snapcodes.js');



snapRoutes.get('/', (req, res) => {
    snapCodes.find((err, snap) => {
        if(err) res.status(500).send(err);
        return res.send(snap)
    })
})

snapRoutes.post('/', (req, res) => {
    const newSnap = new snapCodes(req.body);
    newSnap.save((err) => {
        if(err) {
            return res.send(newSnap);
        }
        res.json({ message: 'Snapcode Uploaded!'});
        })
})

snapRoutes.put('/:id', (req, res) =>{
        let { id } = req.params;
        snapCodes.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedCode) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedCode);
        })
    })

snapRoutes.get('/:id', (req, res) => {
    let { id } = req.params;
    snapCodes.findById(id, (err, singleCode) => {
        if(err) return res.status(500).send(err);
        return res.send(singleCode)
    })
})
snapRoutes.delete('/:id', (req, res) => {
    let { id } = req.params;
    snapCodes.findByIdAndRemove(id, (err, removedFilter) => {
        if(err) return res.status(500).send(err);
        return res.send(removedFilter)
    })
})



module.exports = snapRoutes;