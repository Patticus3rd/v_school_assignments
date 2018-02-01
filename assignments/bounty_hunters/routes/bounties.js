const express = require('express');
const bountyRoute = express.Router();
const cors = require('cors');

const bountyModel = require('../models/bounties.js');


bountyRoute.route('/')
    .get((req, res) => {
       bountyModel.find((err, foundBounty) => {
           if(err) return res.status(500).send(err);
           return res.send(foundBounty)
       })
    })
    .post((req, res) => {
        let newBounty = new bountyModel(req.body);
        newBounty.save((err, savedBounty) => {
            if(err) res.status(500).send(err);
            return res.send(savedBounty)
        })
    })

bountyRoute.route('/:id')
    .put(( req, res) => {
        let { id } = req.params;
        bountyModel.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedBounty) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedBounty)
        })
    })

    .delete((req, res) => {
        let { id } = req.params;
        bountyModel.findOneAndRemove(id, (err, removedBounty) => {
            if(err) return res.status(500).send(err);
            return res.send(removedBounty)
        })
    })
    



module.exports = bountyRoute;

