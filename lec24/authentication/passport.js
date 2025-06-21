const passport = require('passport');   
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


passport.use(new LocalStrategy(
    {
        usernameField:"name",
        passwordField:"password"
    },
    async (name, password, done) => {
        try {
            let user = await User.findOne({ name: name });
            console.log("checking",user)
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log("straregyFunction",user)   
            return done(null, user);

        } catch (error) {
            return done(error);
        }
    }
))

passport.serializeUser((user, done) => {
    console.log("serializeUser",user._id)
    done(null, user._id);
})


passport.deserializeUser(async function(id,done){
    
    try {
        let user = await User.findOne({_id:id});
        if(!user){
            return done(null,false)
        }
        console.log("deserializeUser",user)
        done(null,user)
        
    } catch (error) {

        done(err);
        
    }
})
