const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

//import Routes
const snapRoutes = require('./routes/snapcodes.js');


//define server port
const app = express();
const port = 9000;

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(logger())

//routes
app.use('/snapcodes', snapRoutes);

//connect mongoose
mongoose.connect('mongodb://localhost:27017'), (err) => {
    if(err) throw err;
    console.log('connected to mongodb')
}

//port call
app.listen(port, () => {
    console.log('Listening on port 9000')
})