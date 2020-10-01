const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

})

router.get('/doc',(req,res)=>{
    res.render('index.html');
})

router.get('/test',(req,res)=>{
    console.log(req.body);
    res.send({'string':'Anailys','proyecto':'TAKAS','number':1,'boolean':true});
})

module.exports = router; 