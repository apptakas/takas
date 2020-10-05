const pool = require('../config/database');
const { serializeUser } = require('passport');
const { database } = require('../config/keys');
const { Result } = require('express-validator');




let userModel = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
userModel.getUsersRole = (role, callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT * FROM users where role= ?', [role],
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
        if(userData.tyc==true){
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
        }else {
            resolve({
                'result': "Debe aceptar términos y condiciones"
            })
        }
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
                    if (resut && Object.entries(resut).length != 0) {
                        resolve({
                            'result': resut
                        })
                    } else {
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
        if (pool){

             //Verificar si un usuario existe

            pool.query(
                'SELECT * FROM users where `id`=? AND email=?', [
                userData.id,
                userData.email
            ],
                (err, resut) => {

                    //
                    if (resut && Object.entries(resut).length != 0) {
                        resolve({
                            'newUser':false,
                            'result': resut
                        })
                    } else {
                        
                        // resolve({
                        //     'error': err
                        // })
                        //Ragistrar nuevo usuario
                        if(userData.tyc==true){
                            //console.log(userData.tyc);
                        pool.query(
                            'INSERT INTO users SET ?', userData,
                            (err, resut) => {
            
                                //
                                if (err) {
                                    resolve({
                                        'newUser':true,
                                        'error': err
                                    })
                                } else {
                                    resolve({
                                        'newUser':true,
                                        'result': resut
                                    })
                                }
                            })
                        } //if para verificar si aceptó terminos y condiciones
                        else{
                            resolve({
                                'newUser':true,
                                'error': "Debe aceptar terminos y condiciones"
                            })
                        }
                    }

                }
            )
        }//fin if
    }
    )


};


//updatetokenpush
userModel.updatetokenpush = (userData, callback) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                'UPDATE `users` SET tokenpush= ? where id= ?', [
                    userData.tokenpush,
                    userData.id
                ],
                (err, resut) => {
                    console.log(err);
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




module.exports = userModel;


