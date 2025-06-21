const passport = require('passport');   
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local');

const User = require('../models/user');


passport.use(new LocalStrategy(
    async (name, password, done) => {
        try {
            let user = await User.findOne({ name: name });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }   
            return done(null, user);

        } catch (error) {
            return done(error);
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user._id);
})


passport.deserializeUser(async function(id,done){
    
    try {
        let user = await User.findOne({_id:id});
        if(!user){
            return done(null,false)
        }
        done(null,user)
        
    } catch (error) {

        done(err);
        
    }
})
