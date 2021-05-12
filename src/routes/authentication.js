const express = require('express');
const router = express.Router();

const passport = require('passport');
const {isLoggedIn,isNotLoggedIn} = require('../lib/auth');

router.get('/signin',isNotLoggedIn,(req,res)=>{
    res.render('auth/signin');
})

router.post('/signin',isNotLoggedIn,(req,res,next)=>{
    passport.authenticate('local.signin',{
        successRedirect:'/dashboard',
        failureRedirect:'/signin',
        failureFlash:true
    })(req,res,next);
})

router.get('/dashboard',isLoggedIn,(req,res)=>{
    res.render('dashboard');
})

router.get('/logout',isLoggedIn,(req,res)=>{
    req.logOut();
    res.redirect('/signin');
})

module.exports = router;