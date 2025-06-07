import express from 'express';

import {addBook, getBook} from '../controllers/bookController.js';      


const router = express.Router();

router.post('/add-book', addBook);

//router.get('/get-books', );


router.get('/get-book', getBook);


export default router;