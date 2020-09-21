const express = require('express');
//const config = require('src/config/config');
//config = require('./src/config/config');


const morgan = require('morgan');
 const path = require('path');

var ip = require('ip');
 console.log(ip.address());

//  const http = require('http');
//  const host = '127.0.0.1';

const port = 1111;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Primer servidor con Node.Js');
//   });



//initialization
const app = express();



///AUTENTICACION JWT

// //1
// app.set('llave', config.llave);
// // 2
// app.use(bodyParser.urlencoded({ extended: true }));
// // 3
// app.use(bodyParser.json());



//settings
 app.set('port', process.env.PORT || port);
 app.set('views',path.join(__dirname,'doc'));

 //interpreta html simples
 app.engine('html', require('ejs').renderFile);
 app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//routes 
 app.use(require('./src/routes'));
 //app.use(require('./routes/delivery/usersdomiciliaryroutes'));
 app.use('/admin',require('./src/routes/admin/adminroutes'));
 app.use('/user',require('./src/routes/user/usersroutes'));


//Public
app.use(express.static(path.join(__dirname,'doc')))


//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})
