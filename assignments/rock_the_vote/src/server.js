const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const demsRouter = require('../routes/democrats');

const app = express();

app.use(bodyParser.json())
app.use('./dems', demsRouter)

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('Connected to Mongoose')
})

app.listen(3000, () => {
    console.log('Connected on port 8080')
})