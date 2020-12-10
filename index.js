const express = require('express');
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
 //app.use('/subastakas',require('./src/routes/subastakas/subastakasroutes'));
 app.use('/notifications',require('./src/routes/notifications/notificationsroutes'));


////Public
app.use(express.static(path.join(__dirname,'doc')));
app.use('/admin',express.static(path.join(__dirname,'src/public')));


const http= require('http').Server(app);
const io= require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('Usuario Conectado');
});


//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})
