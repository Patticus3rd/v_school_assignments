const express = require('express');
const foodRoutes = express.Router();
const Food = require('../models/food');

foodRoutes.get('/', (req, res) => {
    Food.find((err, foods ) => {
        if (err) return res.status(500).send(err);
        return res.send(foods);
    })
});

foodRoutes.post('/', (req, res) => {
    const newFood = new Food(req.body);
    newFood.save((err) => {
        if(err) return res.status(500).send(err);
        return res.send(newFood)
    })
});

foodRoutes.get('/:id', (req, res) => {
    Food.findById(req.params.id, (err, food) => {
        if (err) return res.status(500).send(err);
        return res.send(foods);
        //this will not return an array because it is a request for a single document
    })
});

foodRoutes.put('/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body, (err, updatedFood) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedFood)
    })
});

foodRoutes.delete('/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedFood)
    })
});



module.exports = foodRoutes;