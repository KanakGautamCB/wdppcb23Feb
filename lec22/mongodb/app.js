import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';
import main, {getDb} from './db/dbconfig.js' 
import 'dotenv/config'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('/author', authorRouter);
//app.use('/book', bookRouter);

const Port = 3000;
console.log(process.env.MONGODB_URI);
let db;

app.post('/add-book',(req,res)=>{
    
    let {name, year, authorName} = req.body;
    if(!name || !authorName) {
        return res.status(400).json({message: 'Name and author are required'});
    }   
    console.log(req.body);
    db.collection('books').insertOne({
        name,
        year,
        authorName: authorName
    })
    .then((result) => {
        console.log(result);    
        res.status(201).json({message: 'Book added successfully', book: result});
    }).catch((error) => {
        res.status(500).json({message: 'Error adding book', error: error.message});
    });


})


//mongoose.connect('mongodb://localhost:27017')
main()
.then(() => {
    db = getDb();
    app.listen(Port, () => {
        console.log(`Server is running on http://localhost:${Port}`);
    });
}).catch((error) => {   
    console.error( error);
})