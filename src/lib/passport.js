const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../config/database');

passport.use('local.signin',new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback:true
},async (req,username,password,done)=>{
    const user1 = {
        username:req.body.username,
        password:req.body.password
    }
    const rows =await pool.query('CALL loginuser(?, ?)',[user1.username,user1.password]);
    if(rows[0].length>0){
        const user = rows[0][0];
        console.log(user);
        return done(null,user,req.flash('success','Bienvenid@ '+user.nameUser1+' '+user.lastNameUser1))
    }else{
        return done(null,false,req.flash('message','El usuario o la contraseña son incorrectas'))
    }
}));

 passport.serializeUser((user,done)=>{
        done(null, user.DocumentBumber);
 });

 passport.deserializeUser(async (DocumentBumber,done)=>{
    const rows = await pool.query('SELECT *,`nameRole`,`nameStatus` FROM `user` AS u JOIN `role` ON u.`Role_idRole`=`idRole` JOIN `status` ON u.`Status_idStatus`=`idStatus` WHERE `DocumentBumber`=?', [DocumentBumber]);
    done(null, rows[0]);
 });