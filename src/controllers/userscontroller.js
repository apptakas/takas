//models
const User = require('../models/users.js');
const MasterCategory = require('../models/mastercategory.js');
const MasterTypePublication = require('../models/mastertypepublication.js');
const MasterTypePreferences = require('../models/masterpreferences.js');
const MasterMoney = require('../models/mastermoney.js');
const MasterSubCategory = require('../models/mastersubcategory.js');
const Product = require('../models/product.js');
const Question = require('../models/questions.js');
const Offer = require('../models/offers.js');
const MasterCities = require('../models/mastercities.js');
const MasterStatus = require('../models/masterstatus.js');
const ChatRooms = require('../models/chatrooms.js');
const notificationModel = require('../models/notifications.js');
//const Domiciliary = require('../models/domiciliary.js');
//const TeamWork = require('../models/teamwork.js');
const notifications = require('../lib/notifications.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sha1 = require('sha1');
const date = require('date-and-time');
//var redis = require('redis');
const { resolveInclude } = require('ejs');
const { report } = require('../routes/index.js');



let userController = {};

//newUser - REGISTRAR USUARIO
userController.newUser = async (req) => {
    //existe este usuario? 
    try {
        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        const userData = {
            id: req.idfirebaseUser,
            idcity: req.codCity,
            fullname: req.fullnameUser,
            email: req.emailUser,
            phonenumber: req.phonenumberUser,
            imgurl: req.urlimgUser,
            role: 2,
            password: sha1(req.passwordUser),
            datecreated: hoy,
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

            var token = jwt.sign(payload, config.llave, {
                expiresIn: 60 * 60 * 720
            });
            // var refreshToken = randtoken.uid(256) ;
            // refreshTokens[refreshToken] = {token: 'JWT ' + token, refreshToken: refreshToken};

            // const token = jwt.sign(payload, config.llave, {
            //     expiresIn: 60 * 60 * 720
            // });
            data = {
                success: true,
                status: '200',
                token: token,
                //refreshTokens: refreshTokens,
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
                expiresIn: 60 * 60 * 720
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
            imgurl: req.imgUser,
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
                expiresIn: 60 * 60 * 720
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

///VERIFICAR SI UN USUARIO SE ENCUENTRA REGISTRADO EN LA BASE DE DATOS EL BACKEND
userController.UserExist = async (req) => {
    //console.log('response');
    try {
        const userData = {
            id: req.idfirebaseUser
        };


        let resp = await User.UserExist(userData);
        console.log('resultado ', resp);
        let data = {};
        if (resp && resp.UserExist) {
            data = {
                success: true,
                status: '200',
                UserExist:resp.UserExist,
                msg: 'El Usuario si existe'
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


//Listar tipo de preferencias que puede tener una publicación según publicación 
userController.CharacteristicPublication = async (req) => {
    //existe este usuario? 
    try {

        let filter=4;
        if(req.FlagCharacteristic==2){
            filter=5;
        }
        if(req.FlagCharacteristic==3){
            filter=6;
        }
        //console.log(userData.password);
        let response = await MasterStatus.CharacteristicPublication(filter);

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Características para una publicación sengún bandera'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Características para una publicación sengún bandera'
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

//Listar Ciudades
userController.ListCities = async (req) => {
    //existe este usuario? 
    try {
        const citiesdata = {
            id: req.idfirebaseUser,
            status:1
        };

        console.log(citiesdata.id);
        let response = await MasterCities.ListCities(citiesdata);

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de Ciudades'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar Ciudades'
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

            let now = new Date();
            let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
            console.log(now+" - "+hoy);
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


//Nuevo Producto (TAKASTEAR)
userController.NewProductKW = async (req) => {
    //existe este usuario? 
    try {

            let now = new Date();
            let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
            console.log(now+" - "+hoy);
            const ProductData = {
                iduser: req.iduserProduct,
                datepublication: hoy,
                new: req.NewProduct,
                size: req.SizePoduct,
                weight: req.WeightProduct,
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
            //console.log(req.PreferecesProduct.length);
            if(req.PreferecesProduct.length!=0){
                for(var atr2 in req.PreferecesProduct){
                    PreferecesProduct[atr2] = req.PreferecesProduct[atr2]; 
                };
            }

            const topeKW=10;      
            const KeyWordsProduct = {};
            //console.log(req.ImagesProduct.length);
            if(req.KeyWordsProduct.length!=0){
                for(var atr1 in req.KeyWordsProduct){
                    KeyWordsProduct[atr1] = req.KeyWordsProduct[atr1];     
                };
                console.log(KeyWordsProduct);
            }
            

        let response ="";
        
        if(req.ImagesProduct.length<=topeimg && req.KeyWordsProduct.length<=topeKW){
            //response = await Product.NewProductKW(ProductData,PreferecesProduct,ImagesProduct,KeyWordsProduct);
        }else{
             response ={
                'error': "Ha superdo el límite de imagenes o palabras claves"
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


//Nuevo Producto (TAKASTEAR)
userController.NewProductCKW = async (req) => {
    //existe este usuario? 
    try {

            let now = new Date();
            let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
           // console.log(now+" - "+hoy);
            let UsePoduct = null;
            if(req.UsePoduct!=null){               
                 UsePoduct= req.UsePoduct;  
                 console.log("UsePoduct");
                 console.log(UsePoduct);                
            }

            let SizePoduct = null;
            if(req.SizePoduct!=null){               
                SizePoduct= req.SizePoduct;  
                console.log("SizePoduct");
                console.log(SizePoduct);                
            }

            let WeightProduct = null;
            if(req.WeightProduct!=null){
                if(req.WeightProduct!=null){               
                    WeightProduct= req.WeightProduct;  
                    console.log("WeightProduct");
                    console.log(WeightProduct);                
                }
            }
            let ProductData = {
                iduser: req.iduserProduct,
                datepublication: hoy,
                new: req.NewProduct,
                condition:UsePoduct,
                size: SizePoduct,
                weight: WeightProduct,
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
            //console.log(req.PreferecesProduct.length);
            if(req.PreferecesProduct.length!=0){
                for(var atr2 in req.PreferecesProduct){
                    PreferecesProduct[atr2] = req.PreferecesProduct[atr2]; 
                };
            }

            const topeKW=10;      
            const KeyWordsProduct = {};
            let lengthkw=0;
            //console.log(req.ImagesProduct.length);
            if(req.KeyWordsProduct!=null){
                lengthkw=req.KeyWordsProduct.length;
                if(req.KeyWordsProduct.length!=0){
                    for(var atr1 in req.KeyWordsProduct){
                        KeyWordsProduct[atr1] = req.KeyWordsProduct[atr1];     
                    };
                    console.log(KeyWordsProduct);
                }
            }

            
            

        let response ="";
        
        if(req.ImagesProduct.length<=topeimg && lengthkw<=topeKW){
            //response = await Product.NewProductKW(ProductData,PreferecesProduct,ImagesProduct,KeyWordsProduct,UsePoduct,WeightProduct,SizePoduct);
            response = await Product.NewProductCKW(ProductData,PreferecesProduct,ImagesProduct);
        }else{
             response ={
                'error': "Ha superdo el límite de imagenes o palabras claves"
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


//Listar status de un producto
userController.listStatusProduct = async (req) => {
    //existe este usuario? 
    try {
        let idfilter=4;// ESTADO DEL PRODUCTO  NUEVO Ó USADO
        if(req.idfilter=1){
            idfilter=5;// TAMAÑO DEL PRODUCTO 
        }
        if(req.idfilter=2){
            idfilter=6; //PESO DEL PRODUCTO
        }
        //console.log(userData.password);
        let response = await MasterStatus.listStatusProduct(idfilter);

        console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de sataus de productos según filtro'
                //data: response
            }
        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar status de productos según filtros'
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
        let estatus=0;
        const UserData = {
            iduser: req.idfirebaseUser
        };
        const ProductData = {
            status: req.statusProduct
        };
        if(req.statusProduct){
            estatus=1;            
        }
        //console.log(userData.password);
        let response = await Product.ListMisProductos(UserData,ProductData,estatus);

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

       console.log(response);

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



////BUSCAR PUBLICACUONES SEGÚN NOMBRE DEL ARTÍCULO
userController.findProductos = async (req) => {
    try {
        
          let IdUserProduct=req.IdUserProduct;
          let nameProduct=req.nameProduct;
        //console.log(userData.password);
        let response = await Product.findProductos(nameProduct,IdUserProduct);

       console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Busqueda de productos éxitosa'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Buscar Productos'
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
            iduser: req.idFirebaseUser,
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


//LISTAR DETTALLES DE UN PRODUCTO - TAKASTEAR 
userController.DetailsProduct = async (req) => {
    try {
        const ProductData = {
            id: req.IdProduct,
            iduser: req.IdUserProduct
            
        };
        //console.log(userData.password);
        let response = await Product.DetailsProduct(ProductData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result[0],
                images: response.images,
                msg: 'Listar detalles de un producto'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar detalles de un producto'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//CREAR PREGUNTA A UNA PUBLICACIÓ - GENERAL 
userController.NewQuestion = async (req) => {
    try {


        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let QuestionData ={};
       // console.log(req.typeQuestion);
        if(req.typeQuestion==1){
            QuestionData = {
                iduser: req.idFirebaseUser,
                idproduct: req.idPublication,
                description: req.descriptionQuestion,
                datecreated:hoy,
                publication:1,
                status: 3,
                isquestions: true
            };
        }if(req.typeQuestion==2){
            QuestionData = {
                iduser: req.idFirebaseUser,
                idservice: req.idPublication,
                description: req.descriptionQuestion,
                datecreated:hoy,
                publication:2,
                status: 3,
                isquestions: true
            };
        }if(req.typeQuestion==3){
            QuestionData = {
                iduser: req.idFirebaseUser,
                idauction: req.idPublication,
                description: req.descriptionQuestion,
                datecreated:hoy,
                publication:3,
                status: 3,
                isquestions: true
            };
        }
        //console.log(userData.password);
        let response = await Question.NewQuestion(QuestionData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                msg: 'Pregunta creada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar crear una pregunta'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};



//CREAR RESPUESTA A UNA PUBLICACIÓ - GENERAL 
userController.AnswerQuestion = async (req) => {
    try {

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let QuestionData ={};
       // console.log(req.typeQuestion);
        if(req.typeQuestion==1){
            QuestionData = {
                questions: req.idQuestion,
                iduser: req.idfirebaseUser,
                idproduct: req.idPublication,
                description: req.descriptionAnswer,
                datecreated:hoy,
                publication:1,
                status: 1,
                isquestions: false
            };
        }if(req.typeQuestion==2){
            QuestionData = {
                questions: req.idQuestion,
                iduser: req.idfirebaseUser,
                idservice: req.idPublication,
                description: req.descriptionAnswer,
                datecreated:hoy,
                publication:2,
                status: 1,
                isquestions: false
            };
        }if(req.typeQuestion==3){
            QuestionData = {
                questions: req.idQuestion,
                iduser: req.idfirebaseUser,
                idauction: req.idPublication,
                description: req.descriptionAnswer,
                datecreated:hoy,
                publication:3,
                status: 1,
                isquestions: false
            };
        }
        //console.log(userData.password);
        let response = await Question.NewQuestion(QuestionData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                msg: 'Respuesta creada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar crear una Respuesta'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//LISTAR PREGUNTAS Y RESPUESTA DE UNA PUBLICACIÓN - GENERAL 
userController.ListQuestionAnswer = async (req) => {
    try {

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let QuestionData ={};
       // console.log(req.typeQuestion);
        if(req.idtypePublicationQA==1){
            QuestionData = {
                idproduct: req.idPublicationQA
            };
        }if(req.idtypePublicationQA==2){
            QuestionData = {
                idservice: req.idPublicationQA
            };
        }if(req.idtypePublicationQA==3){
            QuestionData = {
                idauction: req.idPublicationQA
            };
        }
        //console.log(userData.password);
        let response = await Question.ListQuestionAnswer(QuestionData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data:response.result,
                msg: 'Lista de preguntas y respuestas de un producto'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar Listar de preguntas y respuestas de un producto'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//
//CREAR OFERTAS A UNA PUBLICACIÓ - GENERAL 
userController.NewOffer = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
       // console.log(req.typeQuestion);
        if(req.typePublication==1){
            OfferData = {
                iduser: req.idFirebaseUser,
                idproduct: req.idPublication,
                observation: req.descriptionOffer,
                dateoffers:hoy,
                publication:1,
                status:3,
            };
        }if(req.typePublication==2){
            OfferData = {
                iduser: req.idFirebaseUser,
                idservice: req.idPublication,
                observation: req.descriptionOffer,
                dateoffers:hoy,
                publication:2,
                status:3,
            };
        }if(req.typePublication==3){
            OfferData = {
                iduser: req.idFirebaseUser,
                idauction: req.idPublication,
                observation: req.descriptionOffer,
                dateoffers:hoy,
                publication:3,
                status:3,
            };
        }

        const IdOfferData = {};
            //console.log(req.idsPublications.length);
            if(req.idsPublications.length!=0){
                for(var atr1 in req.idsPublications){
                    
                    IdOfferData[atr1] = req.idsPublications[atr1]; 
                    //IdOfferData[atr1] = req.IdOfferData[atr1]; 
                    
                };
            }

        console.log(IdOfferData);
        //console.log(userData.password);
        let response={};
        if(req.idsPublications.length!=0){
            response = await Offer.NewOffer(OfferData,IdOfferData);
        }
        else{
            response = resolve({
                'error': "Publicaciones vacias.",
                'msg':"Debe ofertar con al menos una publicación"
            })
        }

    //    console.log(response);
       console.log(response.OkPacket);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',                
                // idoferta:response.idOferta,
                // idnotification:response.idNotificacion,
                // Typenotification:response.TypeNotification,
                // titulo:response.titulo,
                // detalles:response.detalles,
                msg: 'Oferta creada exitosamente'
                //data: response
            }
            //Envío de notificaciones al dueño de la publicación a la que se le hizo la oferta
            /****NOTIFICACIÓN NUEVA OFERTA****/
            
            // 'idOferta':idOferta,
            //                                         'idNotificacion':respCrearPush.result.insertId,
            //                                         'idrelation':idrelation,
            //                                         'TypeNotification':TypeNotification,
            //                                         'tokenpush':tokenpush,
            //                                         'titulo':titulo,
            //                                         'detalles':detalles
        let token=response.tokenpush;
        let titulo=response.titulo;
        let detalle=response.detalles;
       //let descripción="Haz recibido una nueva oferta para la publicación de Gorrros de bebes.";
    //   console.log("response.tokenpush");
    //   console.log(response.tokenpush);
    //    console.log(response);
       let datanoti={
        "title": response.titulo,
        "body": response.detalles,
        "idOffer":response.idOferta,
        "idNotification":response.idNotificacion,
        "idrelation":response.idrelation,
        "TypeNotification":response.TypeNotification,
        "UserPublication":response.UserPublication,
        "type": 0,
        "status": 0,
        "click_action": "FLUTTER_NOTIFICATION_CLICK"
    };
        
      notifications(token,titulo,detalle,datanoti);




        } else {

           //console.log(response);
            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar crear una Oferta'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//LISTAR OFERTAS - GENERAL 
userController.ListOffer = async (req) => {
    try {
        let status=null;
        if(req.flagstatus!=null){
            if(req.flagstatus==0){
                status=23;  //  OFERTA CANCELADA
            }
            if(req.flagstatus==1){
                status=8;  //  OFERTA RECHAZADA
            }
            if(req.flagstatus==2){
                status=7;  //  OFERTA ACAPTADA
            }
            //status=req.flagstatus;
        }
        //console.log(status);
        let OfferData ={};
       // console.log(req.typeQuestion);
        if(req.typePublication==1){
            OfferData = {
                idproduct: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==2){
            OfferData = {
                iduser: req.idFirebaseUser,
                idproduct: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==3){
            OfferData = {
                idauction: req.idPublication,
                publication: req.typePublication
            };
        }
        //console.log(userData.password);
        let response = await Offer.ListOffer(OfferData,status);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Listar Ofertas exitosamente'
                //data: response
            }
        } else {

           //console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar listar ofertas'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//DETALLES DE LA OFERTA - GENERAL 
userController.DetailsOffer = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
       // console.log(req.typeQuestion);
        if(req.typePublication==1){
            OfferData = {
                id: req.idOferta,
                publication: req.typePublication
            };
        }if(req.typePublication==2){
            OfferData = {
                id: req.idOferta,
                publication: req.typePublication
            };
        }if(req.typePublication==3){
            OfferData = {
                id: req.idOferta,
                publication: req.typePublication
            };
        }
        //console.log(userData.password);
        let response = await Offer.DetailsOffer(OfferData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result[0];
            // console.log("response.result");
            // console.log(response.result[0]);
            // console.log("response.result");

            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Detalles de la oferta listado exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar listar detalles de la oferta'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};



//CALCULAR DIFERENCIAS- OFFERS 
userController.CalDifference = async (req) => {
    try {


        let OfferData ={};
       // console.log(req.typeQuestion);
            OfferData = {
                id: req.idPublication,
                marketvalueP: req.marketvalueP
            };
                console.log(req.Publications.length);

                //const IdOfferData = {};
                let SumItemsOffer= 0; 
                let Afavor=false;
                if(req.Publications.length!=0){
                    for(var atr1 in req.Publications){
                        
                        // IdOfferData={
                        //    "idPublication": req.Publications[atr1].idPublication,
                        //    "marketvalueO": req.Publications[atr1].marketvalueO,
                        // } 
                        //IdOfferData[atr1] = req.IdOfferData[atr1]; 
                        SumItemsOffer+=req.Publications[atr1].marketvalueO;
                        
                    };
                   
                }

                if(SumItemsOffer>OfferData.marketvalueP){
                    DiferenciaOffer= SumItemsOffer-OfferData.marketvalueP;
                    Afavor=true;
               }else{
                   DiferenciaOffer= OfferData.marketvalueP-SumItemsOffer;
                   Afavor=false;
               }

                // console.log("IdOfferData");
                // console.log(IdOfferData);
        
        //console.log(userData.password);
        //let response = await Offer.DetailsOffer(OfferData);
        let response ={
            "result":{
                "idPublication":OfferData.id,
                "marketvalueP":Number.parseFloat(OfferData.marketvalueP).toFixed(4),
                "SumItemsOffer":Number.parseFloat(SumItemsOffer).toFixed(4),
                "differenceoffer":Number.parseFloat(DiferenciaOffer).toFixed(4),
                "infavor":Afavor
            }
        };
       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Diferencia calculada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Calcular diferencia'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};





//LISTAR  MIS OFERTAS - GENERAL 
userController.ListMyOffer = async (req) => {
    try {

        let OfferData ={};

        let status=null;
        
        if(req.flagstatus!=null){
            if(req.flagstatus==0){
                status=23;  //  OFERTA CANCELADA
            }
            if(req.flagstatus==1){
                status=8;  //  OFERTA RECHAZADA
            }
            if(req.flagstatus==2){
                status=7;  //  OFERTA ACAPTADA
            }
            //status=req.flagstatus;
        }
       // console.log(req.typeQuestion);
        if(req.typePublication==1){
            OfferData = {
                iduser: req.idFirebaseUser,
                idproduct: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==2){
            OfferData = {
                iduser: req.idFirebaseUser,
                idproduct: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==3){
            OfferData = {
                iduser: req.idFirebaseUser,
                idauction: req.idPublication,
                publication: req.typePublication
            };
        }
        //console.log(userData.password);
        let response = await Offer.ListMyOffer(OfferData,status);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Lista de mis Ofertas exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar listar mis ofertas'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//
//CAMBIAR EL ESTADO DE UNA OFERTA- OFFERS 
userController.ChangeStatusOffer = async (req) => {
    try {
        let match=false;
        let OfferData ={};
       // console.log(req.typeQuestion);
            let statusOffer=23;//ODERTA CANCELADA
            let TitleNoti="cancelado una oferta";
            if(req.FlagStatusOffer==1){
                statusOffer=8;// OFERTA RECHAZADA
                let TitleNoti="Han rechazado una oferta";
            }
            if(req.FlagStatusOffer==2){
                statusOffer=7;// OFERTA ACEPTADA
                let TitleNoti="Han Aceptado una oferta";
                match=true;
                //let response2 =  Offer.FindDatOffer(OfferData);
                //console.log(response2);
            }

            OfferData = {
                id: req.idOffer,
                idUser: req.idUser,
                status:statusOffer
            };
       
        //console.log(OfferData);
        
        //let response = await Offer.FindDatOffer(OfferData);
       let response = await Offer.ChangeStatusOffer(OfferData,req.FlagStatusOffer);

       //console.log(response);
      // console.log(response.sala);

        let data = {};
        if (response && response.result) {
            let r = {};
            let sala='';
            r = response.result;
            if(response.sala){
                sala=response.sala;
            }
            data = {
                success: true,
                status: '200',
                match:match,
                sala:sala,
                msg: 'Cambio de estatus de una oferta ejecutdo exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar cambiar el estatus de una Oferta'
            }
        }

        //////////ENVIAMOS NOTIFICACIÓN////////////
        let token=response.tokenpush;
        let titulo=response.titulo;
        let detalle=response.detalles;
        let datanoti={
            "title": response.titulo,
            "body": response.detalles,
            "idOffer":response.idOferta,
            "idNotification":response.idNotificacion,
            "idrelation":response.idrelation,
            "TypeNotification":response.TypeNotification,
            "UserPublication":response.UserPublication,
            "type": 0,
            "status": 0,
            "click_action": "FLUTTER_NOTIFICATION_CLICK"
         };
        
      notifications(token,titulo,detalle,datanoti);
        /////////////////////

        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Listar los datos de la sala de chat segú status- TAKASTEAR 
userController.listChatRoomStatus = async (req) => {
    try {
        
            let statuSala= req.statuSalaChat;
            let idUder= req.idUder;
       
        //console.log(userData.password);
        let response = await ChatRooms.listChatRoomStatus(statuSala,idUder);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                data: response.result,
                msg: 'Lista de salas de chat según status'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar de  salas de Chat según status'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//
//CAMBIAR EL ESTADO DE UNA SALA DE CHAT- TAKASTEAR 
userController.CloseChatRoom = async (req) => {
    try {
        let takasteo=false;
        let OfferData ={};
       // console.log(req.typeQuestion);
            let status=25//SALA ACTIVA = 24 SALA CERRADA = 25
            
            ChatRoomData = {
                id: req.idSala,
                status:status
            };
       
        //console.log(OfferData);
        
        //let response = await Offer.FindDatOffer(OfferData);
       let response = await ChatRooms.CloseChatRoom(ChatRoomData);

       //console.log(response);
      // console.log(response.sala);

        let data = {};
        if (response && response.result) {
            let r = {};
            let sala='';
            r = response.result;
            if(response.sala){
                sala=response.sala;
            }
            data = {
                success: true,
                status: '200',
                takasteo:false,
                msg: 'sala de chat cerrada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar cerrar sala de chat'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


// TAKASTEAR : 
///DETERMINAR DE QUE USUARIO ES LA ACCIÓN DEL MATCH 
// VERIFICAR QUE LOS DOS USUARIOS ESTEN DE ACUERO
// CAMBIAR DE ESTATUS A LA SALA - CERRARLA
// CAMBIAR DE ESTATUS LA PUBLICACIÓN
//CAMBIAR DE ESTATUS LOS ITEMS DE LA OFERTA (LA PUBLICACIONES DE CONFORMAN LA OFERTA)
userController.MatchOfferChatRoom = async (req) => {
    try {
        let takasteo=false;
        let OfferData ={};
       // console.log(req.typeQuestion);
            let status=25//SALA ACTIVA = 24 SALA CERRADA = 25

            ChatRoomData = {
                id: req.idSala,
                idUser:req.idUser,
                status:status
            };
       
        //console.log(OfferData);

        //let response = await Offer.FindDatOffer(OfferData);
        let isUserPubli=false; //si es usasuario de la publicación
        let pertenece =false; 
        let confirMatch =false; 
        let MsgMatch="";
        let titulo2="";
        let UserNotification2="";
        let detalles2="";

        ///DETERMINAR DE QUE USUARIO ES LA ACCIÓN DEL MATCH 
        let response=await ChatRooms.MatchOfferChatRoom(ChatRoomData,isUserPubli,confirMatch,MsgMatch,titulo2,UserNotification2,detalles2);
        //console.log(quien.result);        

       //console.log(response);
      // console.log(response.sala);

        let data = {};
        if (response && response.result) {
            let r = {};
            let sala='';
            r = response.result;
            if(response.sala){
                sala=response.sala;
            }
            
            data = {
                success: true,
                status: '200',
                takasteo:response.confirMatch,
                msg: response.MsgMatch
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar hacer mach en la sala de chat'
            }
        }

        //////////ENVIAMOS NOTIFICACIÓN////////////
        let token=response.tokenpush;
        let titulo=response.titulo;
        let detalle=response.detalles;
        let datanoti={
            "title": response.titulo,
            "body": response.detalles,
            "idOffer":response.idOferta,
            "idNotification":response.idNotificacion,
            "idrelation":response.idrelation,
            "TypeNotification":response.TypeNotification,
            "UserPublication":response.UserPublication,
            "type": 0,
            "status": 0,
            "click_action": "FLUTTER_NOTIFICATION_CLICK"
         };
        
      //notifications(token,titulo,detalle,datanoti);
        /////////////////////


        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//Listar los datos de la sala de chat- TAKASTEAR 
userController.listDataChatRoom = async (req) => {
    try {
        
            let idSala= req.idSalaChat;
       
        //console.log(userData.password);
        let response = await ChatRooms.listDataChatRoom(idSala);

       console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result[0];

            data = {
                success: true,
                status: '200',
                data: response.result[0],
                msg: 'Data completa de la sala de chat'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar la data de la sala de Chat'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};



//Listar notificaciones detalladas
userController.listNotifications = async (req) => {
    try {
        
          let idUser= req.idUser;
       
        //console.log(userData.password);
        let response = await notificationModel.listNotifications(idUser);

       //console.log(response);

        let data = {};
        if (response) {
            let r = [];
            if(response.result!=undefined){
                r = response.result;
            }
            console.log(r);
            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Lista detallada de notificaciones  con éxito'
                //data: response
            }
            console.log(response);

        } else {

            console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al Listar notificaciones'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};
///cantNotifications



//Obtener la cantidad de notifaciación SEGÚN BANDERA
userController.cantNotifications = async (req) => {
    try {
        
          let status= req.flagNotifications;
          let idUder= req.idUder;
          status=1;
       
        //console.log(userData.password);
        let response = await notificationModel.cantNotifications(status,idUder);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result[0];

            data = {
                success: true,
                status: '200',
                data: r,
                msg: 'Cantidad de notificaciones según bandera obtenida con éxito'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar obtener Cantidad de notificaciones según bandera'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


// Obtener la cantidad de ofertas realizada a una publicación
userController.cantnOfertasPublications = async (req) => {
    try {
        
          let idPublication= req.idPublication;
       
        //console.log(userData.password);
        let response = await notificationModel.cantnOfertasPublications(idPublication);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;


            data = {
                success: true,
                status: '200',
                CantOfertas: response.CantOfertas,
                msg: 'Cantidad de Ofertas a una publicación obtenidas con éxito'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar obtener Cantidad de Ofertas a una publicación'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//CAMBIAR EL ESTADO DE UNA SALA DE CHAT- TAKASTEAR 
userController.changeStatusNotifications = async (req) => {
    try {
        let takasteo=false;
        let OfferData ={};
       // console.log(req.typeQuestion);
            let status=true;//ODERTA CANCELADA
            if(req.FlagStatus==0){
                status=false;// OFERTA ACTIVA
            }

            NotificationsData = {
                id: req.idNotifications,
                status:status
            };
       
        //console.log(OfferData);
        
        //let response = await Offer.FindDatOffer(OfferData);
       let response = await notificationModel.changeStatusNotifications(NotificationsData);

       //console.log(response);
      // console.log(response.sala);

        let data = {};
        if (response && response.result) {
            let r = {};
            let sala='';
            r = response.result;
            if(response.sala){
                sala=response.sala;
            }
            data = {
                success: true,
                status: '200',
                msg: 'Cambio de la notificación exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar cambiar el estatus de la notificación'
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