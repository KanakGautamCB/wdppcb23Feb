const express = require('express'); 
const app = express();
const path = require('path');   
const port = 3000;
const cookies  = require('cookies')

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).send('Name and password are required');
    }

    // Set cookie
    const cookiesInstance = new cookies(req, res);

    cookiesInstance.set('user', JSON.stringify({
        name,
        cnt:1,
        role: 'user' // Example role, can be 'admin', 'user', etc.
    })
    ,{
        maxAge: 24 * 60 * 60 * 1000
    });

    res.redirect('/home')
})

app.get('/home', (req, res) => {    
    const cookiesInstance = new cookies(req, res);

    if(!cookiesInstance.get('user')) {
        return res.redirect('/login');
    }
    const user = JSON.parse(cookiesInstance.get('user'));

    if (!user) {
        return res.redirect('/login');
    }

    // Increment the count
    // and update the cookie
    cookiesInstance.set('user', JSON.stringify({
        name: user.name,
        cnt:user.cnt + 1,
        role:user.role // Example role, can be 'admin', 'user', etc.
    })
    ,{
        maxAge: 24 * 60 * 60 * 1000
    });

    res.render('home', { name: user.name,  cnt: user.cnt+1 });
})

app.get('/admin', (req, res) => {
    const cookiesInstance = new cookies(req, res);
    if(!cookiesInstance.get('user')) {
        return res.redirect('/login');
    }
    const user = JSON.parse(cookiesInstance.get('user'));

    if (!user || user.role !== 'admin') {
        res.redirect('/login');
    }else{
        res.send('Welcome to the admin page');
    }
})

app.get('/logout', (req, res) => {
    const cookiesInstance = new cookies(req, res);
    if(!cookiesInstance.get('user')) {
        return res.redirect('/login');
    }   
    cookiesInstance.set('user', '', { maxAge: 0 }); // Clear the cookie
    res.redirect('/login');
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

