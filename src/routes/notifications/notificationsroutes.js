const express = require('express');
const router = express.Router();
const rutasProtegidas = require('../../lib/rutasprotegidas');
const notifications = require('../../lib/notifications.js');
const config = require('../../config/config');
const { check, validationResult } = require('express-validator');
const userController = require('../../controllers/userscontroller');



     /**
 * @api {post} /user/listnotifications 1 listnotifications
 * @apiName listnotifications - Listar los datos de la sala de chat por idSala
 * @apiGroup Notifications
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} status Optional.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Notifications.
 * @apiSuccess {int} status 200 of the Notifications.
 * @apiSuccess {string} msg   of the Notifications.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "success": true,
    "status": "200",
    "data": [
        {
            "idNotifications": 11,
            "dateNotifications": "31/10/2020",
            "statusNotifications": 1,
            "typenotifications": 2,
            "title": "Haz recibido un takasteo potencial",
            "details": "¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000",
            "idevento": 145,
            "idrelation": 3,
            "name": "Reloj Alarma",
            "nameProducto": 12000
        },
        {
            "idNotifications": 10,
            "dateNotifications": "31/10/2020"",
            "statusNotifications": 1,
            "typenotifications": 2,
            "title": "Haz recibido un takasteo potencial",
            "details": "¡En hora buena Anailys Rodríguez! tú publicación  <<Reloj Alarma>> tiene un takasteo potencial con un valor comercial de 130000",
            "idevento": 144,
            "idrelation": 3,
            "name": "Reloj Alarma",
            "nameProducto": 12000
        }
    ],
    "msg": "Lista detallada de notificaciones  con éxito"
}
 *
 * @apiError UserNotFound The id of the Notifications was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar notificaciones"
}
 **/

//LISTAR NOTIFICACIONES DETALLADAS
router.post('/listnotifications', rutasProtegidas,async (req, res) => {
        
    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    //let response = await userController.listNotifications(req.body);
    let response = await userController.listNotifications();

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})






module.exports = router;