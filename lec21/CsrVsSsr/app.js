const express = require('express');
const app = express();  

app.set('view engine', 'hbs'); // Set HBS as the templating engine

const port = 4000;
const title = 'Movie List';
const movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Matrix', year: 1999 },
    { id: 3, title: 'Interstellar', year: 2014 }
];

const phoneNo = '123-456-7890';
const email = 'example@email.com';

app.get('/', (req, res) => {
    res.render('index', { title, movies });
});

app.get('/contact', (req, res) => {
    res.render('contact', { phoneNo, email });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});