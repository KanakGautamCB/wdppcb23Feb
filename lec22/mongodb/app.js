import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import authorRouter from './routes/authorRouter.js';
import bookRouter from './routes/bookRouter.js';    

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/author', authorRouter);
app.use('/book', bookRouter);

const Port = 3000;


mongoose.connect('mongodb://localhost:27017')
.then(() => {
    app.listen(Port, () => {
        console.log(`Server is running on http://localhost:${Port}`);
    });
}).catch((error) => {   
    console.error( error);
})