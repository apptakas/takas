const express = require('express');
const post    = require ('./post') ; 

//let Post = {}; 

const Post = express.Router(); 

notificacion=(async (token,titulo,detalle) =>{
    let args= {
        "to":token,
        "notification":{
            "title":"Test",
            "body":"mi descripcion"
        },
        "data":{
            "title":titulo,
            "body":detalle,
            "type":0,
            "status":0,
            "id":"hello",
            "click_action":"FLUTTER_NOTIFICATION_CLICK"
        }
    };
    console.log(args);
        let response = await post(args,"https://fcm.googleapis.com/fcm/send");
        console.log(response);
        return response;
}); 

module.exports = notificacion;
    