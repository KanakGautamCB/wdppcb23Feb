const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose')
const authRouter = require('./routes/user')

const app = express();
const port = 3000

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret:'yokey',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize())
app.use(passport.session())

require('./authentication/passport')

app.use('/',authRouter)

mongoose.connect('mongodb://localhost:27017/lec24')
    .then(()=>{
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err)=>{
        console.log(err);
    })

