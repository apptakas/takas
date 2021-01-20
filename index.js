const express = require('express');
const aws = require('aws-sdk');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const realtime = require("./src/socket/realtime");

//* Initialization
const port = 1111;
const app = express();
const server = http.createServer(app);

//* Socket
realtime(server);


//* Settings
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'doc'));

//* Interpreta html simples
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//* Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Routes 
app.use(require('./src/routes'));
////app.use(require('./routes/delivery/usersdomiciliaryroutes'));
app.use('/admin', require('./src/routes/admin/adminroutes'));
app.use('/user', require('./src/routes/user/usersroutes'));
////app.use('/subastakas',require('./src/routes/subastakas/subastakasroutes'));
app.use('/notifications', require('./src/routes/notifications/notificationsroutes'));


//* Publics Paths
app.use('/consola', express.static(path.join(__dirname, 'src/public')));
app.use(express.static(path.join(__dirname, 'doc')));


//* Starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})