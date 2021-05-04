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



let SocketController = {};


//Verificar si sala existe para ingresar al la sala o creaños la sala
SocketController.CheckChatRoom = async (req) => {
    try {
        let match=false;
        let ChatroomData ={};
        console.log("req");
        console.log(req);
       // console.log(req.typeQuestion);
            // let statusOffer=23;//ODERTA CANCELADA
            // let TitleNoti="cancelado una oferta";
            // if(req.FlagStatusOffer==1){
            //     statusOffer=8;// OFERTA RECHAZADA
            //     let TitleNoti="Han rechazado una oferta";
            // }
            // if(req.FlagStatusOffer==2){
            //     statusOffer=7;// OFERTA ACEPTADA
            //     let TitleNoti="Han Aceptado una oferta";
            //     match=true;
            // }

            // ChatroomData = {
            //     id: req.SubastaID,
            //     idUser: req.idUser,
            //     status:statusOffer
            // };
       
       //console.log(ChatroomData);
       let response = {};
        //let response = await Offer.FindDatOffer(OfferData);
      // let response = await Offer.ChangeStatusOffer(OfferData,req.FlagStatusOffer);

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
                msg: 'Solicitud procesada exitosamente'
                //data: response
            }
        } else {

           console.log(response);
            data = {
                success: false,
                status: '500',
                msg: 'Error al intentar unirse a la sala'
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

      
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


module.exports = SocketController;