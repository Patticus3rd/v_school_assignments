const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid')
const database = require('./database.js')

const app = express()
let port = 9090

app.use(bodyParser.json())

app.get("/books", (req, res) => {
    res.send(database);
})

app.post("/books", (req, res) => {
    let newBook = req.body;
    newBook._id = uuid();
    database.push(newBook);
    res.send({
        msg: "Book Has Been Added",
        data: newBook,
    })
})

app.get("/book/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundBooks;
    for(let i = 0; i < books.length; i++){
        if(books[i]._id === id){
            found = true;
            foundBooks = books[i]
            break;
        }
    }if(found){
        res.send({
            msg: `Item ${id} was found`,
            data: foundCoin
        })
    }
})

app.delete("/books/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    for ( let i = 0; i < books.length; i++){
        if (books[i]._id === id ) {
            books.splice(i, 1);
            found = true;
            break;
        }
        if (found) {
            res.send({
                msg: `Item ${id} was successfully removed`
            });
        } else {
            res.send({
                msg: `Item ${id} was not found!`
            })
        }
    }
});

app.put("/books/:id", (req, res) => {
    let { id } = req.params;
    let updatedBook = req.body;
    let found = false;
    for( let i = 0; i < books.length; i++){
        if (books[i]._id === id){
            if(books[i]._id === id){
                books[i] = Object.assign(books[i], updatedBook);
                updatedBook = books[i];
                found = true;
                break;
            }
        }
        if(found){
            res.send({
                msg: `Item ${id} has been updated`,
                data: updatedBook
            })
            }
            else{
                res.send({
                    msg: "Not found"
                })
        }
    }
})

app.listen(port, () => {
    console.log("Listening on port" + port)
})