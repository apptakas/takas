module.exports = {
    // database:{
    //     host:'localhost',
    //     user:'root',
    //     password:'',
    //     database:'takas'
    // }

    database:{
        host     : process.env.RDS_HOSTNAME,
        user     : process.env.RDS_USERNAME,
        password : process.env.RDS_PASSWORD,
        database : process.env.RDS_DB_NAME,
        port     : process.env.RDS_PORT
    }

    
    // database:{
    //     // host:'takas.cq957db5krok.us-west-1.rds.amazonaws.com',
    //     host:'database-takas.cq957db5krok.us-west-1.rds.amazonaws.com',
    //     port: 3306,
    //     user:'root',
    //     password:'lpiP7kP36BrJK4m8',
    //     database:'takas'
    // }
    //lpiP7kP36BrJK4m7
}





// var config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//     config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
//   }

//   module.exports={
//       database:config
//   }