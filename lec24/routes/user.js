const express = require('express');
const passport = require('passport');
const isLoggedIn = require('../middlewares/isLoggedIn')

const {postLogin, postRegister, getLogin, getRegister, getLogout, getProfile} = require('../controllers/user')

const router = express.Router();

// req -> req.user
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}), postLogin)

router.post('/login/google',passport.authenticate('google',{scope:['profile','email']}))

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login'}),
    (req,res)=>{
        console.log(req.user)
        res.render('profile',{username:req.user.displayName,email:req.user.email})
    })

router.post('/register',postRegister)

router.get('/login',getLogin)

router.get('/register',getRegister)

router.get('/profile',isLoggedIn,getProfile)


router.get('/logout',getLogout)

module.exports= router;