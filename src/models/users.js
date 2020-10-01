const pool = require('../config/database');
const { serializeUser } = require('passport');
const { database } = require('../config/keys');
const { Result } = require('express-validator');




let userModel = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
userModel.getUsersRole = (role,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
    if (pool) {
        pool.query(
            'SELECT * FROM users where role= ?',[role], 
            (err, resut) => {
               //console.log(resut);
                if (err) {
                    resolve({
                        'error': err
                    })
                } else {
                    resolve({
                        'result': resut
                    })
                }

            }
        )
        //return resultado;
    }
})
};

//List Usuario por id
userModel.getUser = (iduser) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
    if (pool) {
        pool.query(
            'SELECT * FROM users where ?', iduser,
            (err, resut) => {
               console.log(resut);
                if (err) {
                    resolve({
                        'error': err
                    })
                } else {
                    resolve({
                        'result': resut
                    })
                }

            }
        )
        //return resultado;
    }
})
};

//CreateUser
userModel.createUser = (userData, callback) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                'INSERT INTO users SET ?', userData,
                (err, resut) => {
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({
                            'result': resut
                        })
                    }

                }
            )
    }
    )


};

//LoginUser
userModel.loginUser = (userData, callback) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                'SELECT * FROM users where `id`=? AND `password`=? AND email=?', [
                    userData.id,                   
                    userData.password,
                    userData.email
                ],
                (err, resut) => {                    
                    if (resut && Object.entries(resut).length != 0)  {
                        resolve({
                            'result': resut
                        })
                    } else{
                        resolve({
                            'error': err
                        })
                    }

                }
            )
    }
    )


};

//GloginUser
userModel.GloginUser = (userData, callback) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                'SELECT * FROM users where `id`=? AND email=?', [
                    userData.id,       
                    userData.email
                ],
                (err, resut) => {                    
                    if (resut && Object.entries(resut).length != 0)  {
                        resolve({
                            'result': resut
                        })
                    } else{
                        resolve({
                            'error': err
                        })
                    }

                }
            )
    }
    )


};




module.exports = userModel;


