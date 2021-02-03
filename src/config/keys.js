// module.exports = {
//     database:{
//         host:'localhost',
//         user:'root',
//         password:'',
//         database:'takas'
//     }


// }



// const createTcpPool = async config => {
//     // Extract host and port from socket address
//     const dbSocketAddr = process.env.DB_HOST.split(':');
  
//     // Establish a connection to the database
//     return await mysql.createPool({
//       user: process.env.DB_USER, // e.g. 'my-db-user'
//       password: process.env.DB_PASS, // e.g. 'my-db-password'
//       database: process.env.DB_NAME, // e.g. 'my-database'
//       host: dbSocketAddr[0], // e.g. '127.0.0.1'
//       port: dbSocketAddr[1], // e.g. '3306'
//       // ... Specify additional properties here.
//       ...config,
//     });
//   };


//const dbSocketAddr = process.env.DB_HOST.split(':');
const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";

var config = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
    // host: dbSocketAddr[0], // e.g. '127.0.0.1'
    // port: dbSocketAddr[1], // e.g. '3306'
}
//&& process.env.NODE_ENV === 'production'
if (process.env.CLOUD_SQL_CONNECTION_NAME ) {
    config.socketPath = `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`;
  }

  module.exports={
      database:config
  }