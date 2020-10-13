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
//const Domiciliary = require('../models/domiciliary.js');
//const TeamWork = require('../models/teamwork.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sha1 = require('sha1');
const date = require('date-and-time');
//var redis = require('redis');
const { resolveInclude } = require('ejs');



let userController = {};

//newUser - REGISTRAR USUARIO
userController.newUser = async (req) => {
    //existe este usuario? 
    try {
        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        const userData = {
            id: req.idfirebaseUser,
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
                expiresIn: 60 * 60 * 24
            });
            // var refreshToken = randtoken.uid(256) ;
            // refreshTokens[refreshToken] = {token: 'JWT ' + token, refreshToken: refreshToken};

            // const token = jwt.sign(payload, config.llave, {
            //     expiresIn: 60 * 60 * 24
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
            id: req.IdProduct
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
                data: response.result,
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
            console.log(req.idsPublications.length);
            if(req.idsPublications.length!=0){
                for(var atr1 in req.idsPublications){
                    
                    IdOfferData[atr1] = req.idsPublications[atr1]; 
                    //IdOfferData[atr1] = req.IdOfferData[atr1]; 
                    
                };
            }

        console.log(IdOfferData);
        //console.log(userData.password);
        let response = await Offer.NewOffer(OfferData,IdOfferData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

            data = {
                success: true,
                status: '200',
                msg: 'Oferta creada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
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

        let OfferData ={};
       // console.log(req.typeQuestion);
        if(req.typePublication==1){
            OfferData = {
                idproduct: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==2){
            OfferData = {
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
        let response = await Offer.ListOffer(OfferData);

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

           console.log(response);
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
                id: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==2){
            OfferData = {
                id: req.idPublication,
                publication: req.typePublication
            };
        }if(req.typePublication==3){
            OfferData = {
                id: req.idPublication,
                publication: req.typePublication
            };
        }
        //console.log(userData.password);
        let response = await Offer.DetailsOffer(OfferData);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;

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



module.exports = userController;