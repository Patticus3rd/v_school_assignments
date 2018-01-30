const express = require('express');
const storeRoutes = express.Router();
const Inventory = require('../models/inventory');

storeRoutes.get('/', (req, res) => {
    Inventory.find((err, inv) => {
        if (err) return res.status(500).send(err);
        return res.send(inv)
    })
})
storeRoutes.post('/', (req, res) => {
    const newInventory = new Inventory(req.body);
    newInventory.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newInventory)
    })
})
storeRoutes.put('/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedInv) => {
        if(err) return res.status(500).send(err);
        return res.send(updatedInv);
    })
})
storeRoutes.get('/:id', (req, res) => {
    Inventory.findById(req.params.id, (err, inv) => {
        if( err ) return res.status(500).send(err);
        return res.send(inv)
    })
})
storeRoutes.delete('/:id', (req, res) => {
    Inventory.findByIdAndRemove(req.params.id, (err, deletedInv) => {
        if(err) return res.status(500).send(err);
        return res.send(deletedInv);
    })
})

module.exports = storeRoutes;