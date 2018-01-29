const express = require('express');
const storeRoutes = express.Router();
const Store = require('../models/inventory');

storeRoutes.get('/', (req, res) => {
    Store.find((err, stores) => {
        if (err) return res.status(500).send(err);
        return res.send(stores)
    })
})
storeRoutes.post('/', (req, res) => {
    
})
storeRoutes.put('/', (req, res) => {

})
storeRoutes.get('/', (req, res) => {

})
storeRoutes.delete('/', (req, res) => {

})

module.exports = storeRoutes;