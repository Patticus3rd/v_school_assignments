let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/myProject";

MongoClient.connect(url, (err, database) => {
    if(err) console.log(err);
    console.log("connected to db");
    //insert something into database before finding it
    //insert.Many means that we have to insert an array of things
    let db = database.db("myProject");
    let collection = db.collection("newCollection");
    collection.insertMany([ {a: 1}, {b: 2}, {c: 3} ], (err, result) => 
    {
        if(err)console.error(err)
        console.log(result)
    });
    //find a specific collection here
    collection.find({}, (err, result ) => {
        if(err) console.log(err);

    })
    database.close();
});