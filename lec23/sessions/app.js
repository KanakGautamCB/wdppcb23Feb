const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();  

app.set('view engine', 'hbs');  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {    
    res.render('index');
});

app.get('/register', (req, res) => {
    if(req.session.user) {
        return res.redirect('/profile');
    }
    res.render('register');
});


app.post('/register', (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.redirect('/register',{
            msg: 'Name and password are required'   
        });
    }

    // Store user in session
    req.session.user = { name, password };
    
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    if(req.session.user) {
        return res.redirect('/profile');
    }
    res.render('login');
});

app.post('/login', (req, res) => {  
    const { name, password } = req.body;
    if (!name || !password) {
        return res.redirect('/login',{
            msg: 'Name and password are required'   
        });
    }

    // Check user credentials
    // here we are just checking against the session data for simplicity use database in real applications  
    if (req.session.user && req.session.user.name === name && req.session.user.password === password) {
        return res.redirect('/profile');
    } else {
        return res.redirect('/login');
    }
});

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('profile', { name: req.session.user.name });
}); 

app.get('/logout', (req, res) => {
    if(!req.session.user) {
        return res.redirect('/login');
    }
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/profile');
        }
        res.redirect('/');
    });
});

app.listen(3000, () => {       
    console.log('Server is running on http://localhost:3000');
});




