const express = require('express')
const app = express();
const mongoose = require('mongoose');
const foodRoutes = require('./routes/food');


mongoose.connect("mongodb://localhost:/food", (err) => {
    if(err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser)
app.use('food', foodRoutes);

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});
