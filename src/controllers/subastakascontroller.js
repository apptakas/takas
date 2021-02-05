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
const tombotakas = require('../models/tombotakas.js');
const PQRsModel = require('../models/pqrs.js');
const Interested = require('../models/interested.js');
const SubatakasModel= require('../models/subastakas.js');
//const Domiciliary = require('../models/domiciliary.js');
//const TeamWork = require('../models/teamwork.js');
const notifications = require('../lib/notifications.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const sha1 = require('sha1');
const securePin = require("secure-pin");
const date = require('date-and-time');
//var redis = require('redis');
const { resolveInclude } = require('ejs');
const { report } = require('../routes/index.js');



let SubastakasController = {};


//
//CREAR OFERTAS A UNA SUBASTA -  
SubastakasController.NewOffer = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        console.log(req.MontOffer);

        OfferData = {
            iduser: req.idFirebaseUser,
            idproduct: req.idSubastakas,
            observation: req.descriptionOffer,
            montoffert: req.MontOffer,
            dateoffers:hoy,
            publication:3,
            status:6,
        };
        

        const IdOfferData = {};
            //console.log(req.idsPublications.length);
            if(req.idsPublications.length!=0){
                for(var atr1 in req.idsPublications){
                    
                    IdOfferData[atr1] = req.idsPublications[atr1]; 
                    //IdOfferData[atr1] = req.IdOfferData[atr1]; 
                    
                };
            }

        //console.log(IdOfferData);
        //console.log(userData.password);
        let response={};
        if(req.idsPublications.length!=0){
            response = await SubatakasModel.NewOffer(OfferData,IdOfferData);
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
                idoferta:response.idOferta,
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
    //     let token=response.tokenpush;
    //     let titulo=response.titulo;
    //     let detalle=response.detalles;
    //    let datanoti={
    //     "title": response.titulo,
    //     "body": response.detalles,
    //     "idOffer":response.idOferta,
    //     "idNotification":response.idNotificacion,
    //     "idrelation":response.idrelation,
    //     "TypeNotification":response.TypeNotification,
    //     "UserPublication":response.UserPublication,
    //     "type": 0,
    //     "status": 0,
    //     "click_action": "FLUTTER_NOTIFICATION_CLICK"
    // };
        
     // notifications(token,titulo,detalle,datanoti);




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



//DETALLES DE LA OFERTA - GENERAL 
SubastakasController.DetailsOffer = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        let UserConsulta= req.idFirebaseUser;

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
        let response = await Offer.DetailsOffer(OfferData,UserConsulta);

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

//LISTAR OFERTAS - GENERAL 
SubastakasController.ListOffer = async (req) => {
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
SubastakasController.DetailsOffer = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        let UserConsulta= req.idFirebaseUser;

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
        let response = await Offer.DetailsOffer(OfferData,UserConsulta);

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
SubastakasController.CalDifference = async (req) => {
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
SubastakasController.ListMyOffer = async (req) => {
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
SubastakasController.ChangeStatusOfferSbtk = async (req) => {
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
       
        console.log("ChangeStatusOfferSbtk");
        console.log(OfferData);
        
        //let response = await SubatakasModel.FindDatOffer(OfferData);
       let response = await SubatakasModel.ChangeStatusOfferSbtk(OfferData,req.FlagStatusOffer);

       //console.log(response);
      // console.log(response.sala);

        let data = {};
        if (response && response.result) {
            let r = {};
            let sala='';
            r = response.result;
            if(response.sala){
                sala=response.sala;
                console.log("sala");
                console.log(sala);
            }
            data = {
                success: true,
                status: '200',
                match:match,
                sala:sala,
                msg: 'Cambio de estatus de una oferta de subastakas se pocesó exitosamente'
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
        
      //notifications(token,titulo,detalle,datanoti);
        /////////////////////

        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

//Listar los datos de la sala de chat segú status- TAKASTEAR 
SubastakasController.listChatRoomStatus = async (req) => {
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
SubastakasController.CloseChatRoom = async (req) => {
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
SubastakasController.MatchOfferChatRoom = async (req) => {
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
                idNotificacion:response.idNotificacion,
                idOferta:response.idOferta,
                TypeNotification:response.TypeNotification,
                UserPublication:response.UserPublication,
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
        let token=response.tokenPush;
        //console.log(token);
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
        
         console.log(datanoti);
      notifications(token,titulo,detalle,datanoti);
        /////////////////////


        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


//Listar los datos de la sala de chat- TAKASTEAR 
SubastakasController.listDataChatRoom = async (req) => {
    try {
        
            let idSala= req.idSalaChat;
            let idUser=req.idUser;
       
        console.log(idUser);
        console.log(idSala);
        let response = await ChatRooms.listDataChatRoom(idSala,idUser);

       //console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result[0];

            data = {
                success: true,
                status: '200',
                isUserPubli:response.isUserPubli,
                match:response.match,
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
SubastakasController.listNotifications = async (req) => {
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
SubastakasController.cantNotifications = async (req) => {
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
SubastakasController.cantnOfertasPublications = async (req) => {
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



// Eliminación lógica de una publicación
SubastakasController.DeletePublication = async (req) => {
    try {
        
          let idfirebaseUser= req.idfirebaseUser;
          let idPublication= req.idPublication;
       
        //console.log(userData.password);
        let response = await Product.DeletePublication(idfirebaseUser,idPublication);

       console.log(response);

        let data = {};
        if (response && response.result) {
            let r = {};
            r = response.result;


            data = {
                success: true,
                status: '200',                
                msg: 'publicación eliminada con éxito'
                //data: response
            }
        } else {

           // console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar eliminar una publicación'
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
SubastakasController.changeStatusNotifications = async (req) => {
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


//CAMBIAR EL ESTADO DE UNA OFERTA- OFFERS 
SubastakasController.ChangeStatusOffer = async (req) => {
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
       
        console.log(OfferData);
        
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
                // sala:sala,
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
        
     // notifications(token,titulo,detalle,datanoti);
        /////////////////////

        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

module.exports = SubastakasController;