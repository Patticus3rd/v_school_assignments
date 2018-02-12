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

module.exports = favRoutes;