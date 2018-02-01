const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const bountyRoute = require('./routes/bounties.js');

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/bounties', bountyRoute);

//connect mongoose to db
mongoose.connect('mongodb://localhost:27017', () => {
    console.log('connected to mongodb')
})


app.listen(port, () => {
    console.log("Listening on port" + port)
})

