const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');

const app = express();
let port = 8080;
//if you want to use a middleware do .use
app.use(bodyParser.json())
//this converts data coming in as part of the req(request) and puts it on the object
//as a property called body

app.get("/", (req, res) => {
    res.send(database);
})

app.post("/", (req, res) => {
    database.push(req.body);
    res.send({
        msg: "Data added Succeessfully",
        data: req.body
    })
})

app.listen(port, () => {
    console.log("Listening on port" + port)
})