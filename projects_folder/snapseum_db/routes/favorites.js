const express = require('express');
const favRoutes = express.Router();
const fs = require('fs');

//MODEL
const snapCodes = require('../models/snapcodes.js');


favRoutes.get('/', (req, res) => {
    snapCodes.find({favorites: true}, (err, snap) => {
        if(err) res.status(500).send(err);
        return res.send(snap)
    })
})

favRoutes.delete('/:id', (req, res) => {
    let { id } = req.params;
    snapCodes.findByIdAndRemove(id, (err, removedFavorite) => {
        if(err) return res.status(500).send(err);
        return res.send(removedFavorite)
    })
})

module.exports = favRoutes;