//models
const User = require('../models/users.js');
const MasterCategory = require('../models/mastercategory.js');
const MasterTypePublication = require('../models/mastertypepublication.js');
const MasterTypePreferences = require('../models/masterpreferences.js');
const MasterMoney = require('../models/mastermoney.js');
const MasterSubCategory = require('../models/mastersubcategory.js');
const Product = require('../models/product.js');
//const Domiciliary = require('../models/domiciliary.js');
//const TeamWork = require('../models/teamwork.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sha1 = require('sha1');
const { resolveInclude } = require('ejs');



let userController = {};

//newUser - REGISTRAR USUARIO
userController.newUser = async (req) => {
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
            tyc: req.tycUser
        };
        ///console.log(userData.password);
        let response = await User.createUser(userData);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

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
                msg: 'Usuario Registrado con éxito'
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
        let response = await User.loginUser(userData, 1);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

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
            email: req.emailUser,
            fullname: req.fullnameUser,
            tyc: req.tycUser,
            role: 2
        };
        //console.log(userData.password);
        let response = await User.GloginUser(userData, 1);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

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
                newUser: response.newUser,
                msg: 'Usuario Autenticado con éxito'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                newUser: response.newUser,
                msg: response.error
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
userController.LisTypePublication = async () => {
    //existe este usuario? 
    try {

        //console.log(userData.password);
        let response = await MasterTypePublication.LisTypePublication();

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Tipo de Publicación'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Tipo de Publicación'
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
        let response = await MasterCategory.ListCategory(userData);

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

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


///tokenpush
userController.Updatetokenpush = async (req) => {
    //console.log('response');
    try {
        const userData = {
            id: req.idfirebaseUser,
            tokenpush: req.tokenpushUser
        };


        let resp = await User.updatetokenpush(userData);
        console.log('resultado ', resp);
        let data = {};
        if (resp && resp.result) {
            data = {
                success: true,
                status: '200',
                msg: 'Token Push Actualizado'
            }

        } else {
            data = {
                success: false,
                status: '500',
                msgerr: resp.error.sqlMessage,
                codeerr: resp.error.code,
                noerr: resp.error.errno
            }

        }
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }



};

//Listar tipo de preferencias que puede tener una publicación según publicación 
userController.LisTypePreference = async () => {
    //existe este usuario? 
    try {

        //console.log(userData.password);
        let response = await MasterTypePreferences.LisTypePreference();

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Tipo de Preferencias'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Tipo de Prefencias'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//Listar tipo de Monedas 
userController.ListMoney = async () => {
    //existe este usuario? 
    try {

        //console.log(userData.password);
        let response = await MasterMoney.ListMoney();

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Tipo de Monedas'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Tipo de Monedas'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Listar SubCategorías 
userController.ListSubCategory = async () => {
    //existe este usuario? 
    try {

        //console.log(userData.password);
        let response = await MasterSubCategory.ListSubCategory();

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Subcategorías'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Subcategorías'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Nuevo Producto (TAKASTEAR)
userController.NewProduct = async (req) => {
    //existe este usuario? 
    try {
        let dt = new Date();//getMonth   getDate

        let hoy=(`${
            (dt.getFullYear()+1).toString().padStart(2, '0')}-${
            dt.getMonth().toString().padStart(2, '0')}-${
            dt.getDate().toString().padStart(4, '0')} ${
            dt.getHours().toString().padStart(2, '0')}:${
            dt.getMinutes().toString().padStart(2, '0')}:${
            dt.getSeconds().toString().padStart(2, '0')}`
        );
            const ProductData = {
                iduser: req.iduserProduct,
                datepublication: hoy,
                name: req.nameProduct,
                details: req.detailsProduct,
                typemoney: req.typemoneyProduct,
                marketvalue: req.marketvalueProduct,
                subcategory:req.subcategoryProduct,
                datecreated: hoy,
                typepublication:1,
                status:1
            };
            const topeimg=10;      
            const ImagesProduct = {};
            //console.log(req.ImagesProduct.length);
            if(req.ImagesProduct.length!=0){
                for(var atr1 in req.ImagesProduct){
                    ImagesProduct[atr1] = req.ImagesProduct[atr1];     
                };
            }

            const PreferecesProduct = {};
            console.log(req.PreferecesProduct.length);
            if(req.PreferecesProduct.length!=0){
                for(var atr2 in req.PreferecesProduct){
                    PreferecesProduct[atr2] = req.PreferecesProduct[atr2]; 
                };
            }
       
        let response ="";
        
        if(req.ImagesProduct.length<=topeimg){
             response = await Product.NewProduct(ProductData,PreferecesProduct,ImagesProduct);
        }else{
             response ={
                'error': "Ha superdo el límite de imagenes"
            };
        }
       // console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                msg: 'Producto registrado con éxito'
                //data: response
            }
        } else {

            //console.log(response);
            data = {
                success: false,
                status: '500',
                data: response.error,
                msg: 'Error al registrar producto'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//Listar Mis publicaciones  - TAKASTEAR 
userController.ListMisProductos = async (req) => {
    try {
        const UserData = {
            iduser: req.idfirebaseUser
        };
        const ProductData = {
            status: req.statusProduct
        };
        //console.log(userData.password);
        let response = await Product.ListMisProductos(UserData,ProductData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de mis productos'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar mis productos'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Listar las publicaciones  de otros usuarios- TAKASTEAR 
userController.ListProductos = async (req) => {
    try {
        const UserData = {
            iduser: req.idfirebaseUser
        };
        const ProductData = {
            status: req.statusProduct
        };
        //console.log(userData.password);
        let response = await Product.ListProductos(UserData,ProductData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de productos'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar productos'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//LISTAR PRODRUCTOS FILTRADOS POR SUBCATEGORÍA - TAKASTEAR 
userController.ListProductSubCategory = async (req) => {
    try {
        const ProductData = {
            subcategory: req.SubCategoriaProduct,
            status: req.statusProduct
        };
        //console.log(userData.password);
        let response = await Product.ListProductSubCategory(ProductData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de productos filtrados por subcategorías'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar productos filtrados por subcategorías'
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