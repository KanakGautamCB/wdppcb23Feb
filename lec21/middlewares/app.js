const express = require('express');
const app = express();

const port = 4000;

// generic middleware to log request details

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url} inside middleware 1'`);
    //next(); // Call the next middleware or route handler
    next(); // Call the next middleware or route handler
});

app.use((req,res,next) => {
    console.log(`${req.method} request for '${req.url} inside middleware 2'`);
    next(); // Call the next middleware or route handler
});

// path matching middleware
app.use('/hello/:id',(req, res, next) => {
    
    console.log('inside path matching middleware');
    //res.send(`Hello from the path matching middleware! ID: ${req.params.id}`);
    
    //next(); // Call the next middleware or route handler

    //res.send(`Hello from the path matching middleware! ID: ${req.params.id}`);
});



// exact path matching middleware
app.use('/hello/world', (req, res, next) => {
    console.log('inside exact path matching middleware');
    res.send('Hello from the exact path matching middleware!');
    //next()
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});