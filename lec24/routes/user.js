const express = require('express');
const passport = require('passport');
const isLoggedIn = require('../middlewares/isLoggedIn')

const {postLogin, postRegister, getLogin, getRegister, getLogout, getProfile} = require('../controllers/user')

const router = express.Router();

// req -> req.user
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}), postLogin)

router.post('/register',postRegister)

router.get('/login',getLogin)

router.get('/register',getRegister)

router.get('/profile',getProfile)


router.get('/logout',)

module.exports= router;