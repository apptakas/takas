const axios = require('axios').default;


notificacion = (token, titulo, detalle,data) => {
    axios({
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        headers: { 'Authorization': 'key=AAAA2npQHu8:APA91bE-pCWAcEuJX3TyYQNVrFwYGGgozYE43nVAEXox914uJbggn_BpmbjyLUBpzPIpjJYN3CcLbpVktGwEGcVEVTSjaS0cWg-Pad2Xe3GfL0KHIGFFdhnUDnNSyTon4zeqY_9hrEhS' },
        data: {
            "to": token,
            "notification": {
                "title": titulo,
                "body": detalle
            },
            "data": data
        }
    }

    )
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
};


module.exports = notificacion;