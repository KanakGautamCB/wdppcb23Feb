import book from '../models/book.js';
import author from '../models/author.js';


async function addBook(req, res) {  
    let {name,year,authorName} = req.body;

    if (!name || !authorName) {
        return res.status(400).json({message: 'Name and author are required'});
    }

    try {

        let authorData = await author.findOne({name: authorName});

        if(!authorData){
            authorData = await author.create({
                name: authorName,
            });
        }

        let bookData = book.insertOne({
            name,
            year,
            author: authorData._id
        });
        
        if(authorData.books){
            authorData.books = [...authorData.books, bookData._id];
        }else{
            authorData.books = [bookData._id];  
        }

        await authorData.save();

        res.status(201).json({message: 'Book added successfully', book: bookData});
        
    } catch (error) {
        res.status(500).json({message: 'Error adding book', error: error.message});
    }
}


async function getBook(req,res){
    let {name} = req.query;
    if(!name){
        return res.status(400).json({message: 'Name is required'});
    }

    try {
        let bookData = await book.findOne({name: name}).populate('author');
        res.status(200).json({message: 'Book found', book: bookData});  
    } catch (error) {
        res.status(500).json({message: 'Error fetching book', error: error.message});   
    }
}

export {addBook, getBook};
