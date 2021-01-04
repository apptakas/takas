const express = require('express');
const bodyParser = require('body-parser');
// const session =require('express-session');
const morgan = require('morgan');
const path = require('path');
// const redis = require('redis');
//const SocketIO= require('socket.io');
// const RedisStore = require('connect-redis')(session);


// const methodOverride = require('method-override');

// const SocketIO= require('socket.io');





//
//const RedisClient = redis.createClient();

const socketio= require('socket.io');
const http=require('http');
// const realtime=require('./src/lib/socket');


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
const server = http.createServer(app);
const io = socketio(server);

//middlewares Sockets
// const sessionmiddlewares= session({
//     store:new RedisStore({}),
//     secret:"Secreto"
// });

// realtime(session,sessionmiddlewares);

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
app.use('/consola',express.static(path.join(__dirname,'src/public')));


// const http= require('http').Server(app);
// const io= require('socket.io')(http);

// io.on('connection', (socket) => {
//     console.log('Usuario Conectado');
// });


//starting the server
server.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})

// app.listen(app.get('port'),()=>{
//         console.log('Server on port', app.get('port'));
//     })


//webSokects


// const io = SocketIO(server);
// //webSokects
// io.on('connection', (socket) => {
//     console.log('Usuario Conectado',socket.id);
// });

//Escuchando el evento de conexión 
io.on('connection',function(socket){
    //obtenemos id
    console.log("Cliente: "+socket.id);
    //enviar numeros aleatorios cada 2 segundos al cliente
    setInterval(()=>{
        socket.emit('server/random', Math.random());
    },2000);

    //Recibiendo el número aleatorio del cliente
    socket.on('client/random',(num)=>{
        console.log(num);
    })
})


