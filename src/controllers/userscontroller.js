//models
const User = require('../models/users.js');
const MasterCategory = require('../models/mastercategory.js');
//const Domiciliary = require('../models/domiciliary.js');
//const TeamWork = require('../models/teamwork.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sha1    = require ( 'sha1' ) ; 



let userController = {}; 

//newUser - REGISTRAR USUARIO
userController.newUser= async (req) => {
    //existe este usuario? 
    try {
        const userData = {
            id: req.idfirebaseUser,
            fullname: req.fullnameUser,
            email: req.emailUser,
            phonenumber: req.phonenumberUser,
            imgurl: req.urlimgUser,
            role: 2,
            password: sha1(req.passwordUser),
            tyc:req.tycUser
        };
        ///console.log(userData.password);
        let response = await User.createUser(userData);

        let data = {};
        if (response && response.result) {
            data = {
                success: true,
                status: '200',
                msg: 'Domiciliario registrado con éxito'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msgerr: response.error.sqlMessage,
                codeerr: response.error.code,
                noerr: response.error.errno
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Login 
userController.Autenticar = async (req) => {
    //existe este usuario? 
    try {
        const userData = {
            id: req.idfirebaseUser,
            email: req.emailUser,
            password: sha1(req.passwordUser),
            role: 2
        };
        //console.log(userData.password);
        let response = await User.loginUser(userData,1);

        let data = {};
        if (response && response.result) {
            let r={};
            r=response.result;

            const payload = {
                ignoreExpiration: true
            };
            const token = jwt.sign(payload, config.llave, {
                expiresIn: 60 * 60 * 24
            });
            data = {
                success: true,
                status: '200',
                token: token,
                msg: 'Usuario Autenticado con éxito'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Autenticar'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Login Google
userController.GAutenticar = async (req) => {
    //existe este usuario? 
    try {
        const userData = {
            id: req.idfirebaseUser,
            email: req.emailUser
        };
        //console.log(userData.password);
        let response = await User.GloginUser(userData,1);

        let data = {};
        if (response && response.result) {
            let r={};
            r=response.result;

            const payload = {
                ignoreExpiration: true
            };
            const token = jwt.sign(payload, config.llave, {
                expiresIn: 60 * 60 * 24
            });
            data = {
                success: true,
                status: '200',
                token: token,
                msg: 'Usuario Autenticado con éxito'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Autenticar'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};



//Listar Categorías según publicación 
userController.ListCategory = async (req) => {
    //existe este usuario? 
    try {
        const userData = {
            typepublication: req.typepublicCategory
        };
        //console.log(userData.password);
        let response = await MasterCategory.ListCategory(userData,1);

        let data = {};
        if (response && response.result) {
            let r={};
            r=response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Categoría'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Caterías'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


module.exports = userController;