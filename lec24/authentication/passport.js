const passport = require('passport');   
const bcrypt = require('bcrypt');
require('dotenv/config')



const LocalStrategy = require('passport-local').Strategy;

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const User = require('../models/user');

console.log(process.env.REDIRECT_URI)
passport.use(new GoogleStrategy(
    {
        clientID:     process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback',
        // scope: ['profile'],
        // accessType: 'Offline',
        passReqToCallback   : true
    },
    (request, accessToken, refreshToken, profile, done) => {
        console.log("accesstoken",accessToken)
        console.log("refreshtoken",refreshToken)
        console.log("profile",profile)
        return done(null,profile)
    }
))



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
    console.log("serializeUser",user)
   done(null,user)
    
})


passport.deserializeUser(async function(user,done){
    
    try {
        if(!user){
            return done(null,false)
        }
        //console.log("deserializeUser",user)
        done(null,user)
        
    } catch (error) {

        done(err);
        
    }
})

module.exports =passport
