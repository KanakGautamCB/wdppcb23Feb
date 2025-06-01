const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies


app.use(express.urlencoded({ extended: true }));

const port = 4000;

//client-side rendering route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'The Matrix', year: 1999 },
    { id: 3, title: 'Interstellar', year: 2014 }
];

app.get('/movies', (req, res) => {

    res.json(movies);
});

//server-side rendering route
app.get('/site', (req, res) => {
    let html = '<h1>Movies List</h1><ul>';
    movies.forEach(movie => {
        html += `<li>${movie.title} (${movie.year})</li>`;
    });
    html += '</ul>';
    res.send(html);
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})