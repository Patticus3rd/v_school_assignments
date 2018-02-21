const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const articleRoutes = require('./routes/articles')

//define server port
const app = express();
let port = 9000;

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/articles', articleRoutes);


//connect mongoose to db
mongoose.connect('mongodb://localhost:27017', (err) => {
    if(err) throw err;
    console.log('connected to mongodb')
})

app.listen(port, () => {
    console.log('Listening on port 9000')
})