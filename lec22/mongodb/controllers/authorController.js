import author from '../models/author.js';
import book from '../models/book.js';


async function addAuthor (req, res) {
    const {name, age,books} = req.body;

    if (!name) {
        return res.status(400).json({message: 'Name is required'});
    }

    try {

        let author = await author.findOne({name: name});
        if(! author) {
            author = await author.insertOne({
                name: name,
                age: age,
            }); 
        } 
        
        books = books.map((book)=>{
            return{
                ...book,
                author: author._id
            }
        })

        let booksData = await book.insertMany(books);
        let bookIds = booksData.map((book) => book._id);
        author.books = [...author.books, ...bookIds];

        author = await author.save();

        res.status(201).json({message: 'Author added successfully', author});

        
    } catch (error) {
        res.status(500).json({message: 'Error adding author', error: error.message});
    }
} 


async function getAuthors(req, res) {

    let {name} = req.query;

    if(!name){
        res.status(400).json({message: 'Name is required'});
    }
    try {
        let author = author.findOne({name: name}).populate('books');
        if (!author) {
            return res.status(404).json({message: 'Author not found'});
        }

        res.status(200).json({message: 'Author found', author});    
    } catch (error) {
        res.status(500).json({message: 'Error fetching author', error: error.message});
    }
}


export {addAuthor, getAuthors};