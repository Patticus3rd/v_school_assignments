const express = require('express');
const database = require('./database.js');
let logger = require('./logger.js');

const app = express()
let port = 8000;

app.use(logger)

app.get("/", (req, res) => {
    res.send(database);
})

app.listen(port, () => {
    console.log("Listening on port" + port)
})