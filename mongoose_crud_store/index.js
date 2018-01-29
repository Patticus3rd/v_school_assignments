const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:/store', (err) => {
    if(err) throw err;
    console.log('Connected to the Database')
});


app.listen(8080, () => {
    console.log('Server is running on port 8080')
})