const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const database = require('./database.js');

const app = express();
let port = 8080;

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send(database);
})

app.get("/bounties", (req, res) => {
    res.send(database)
})

app.post("/bounties", (req, res) => {
    let newBounty = req.body;
    newBounty._id = uuid();
    database.push(newBounty);
    res.send({
        msg: "Bounty Added",
        data: newBounty
    })
})

app.listen(port, () => {
    console.log("Listening on port" + port)
})

