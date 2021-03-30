const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasprotegidas');
const notifications = require('../../lib/notifications.js');
const config = require('../../config/config');
const { check, validationResult } = require('express-validator');
const epayController = require('../../controllers/epaycontroller');


/**
* @api {post} /epayco/tokenizacion 1 tokenizacion
* @apiName tokenizacion - Tokenizar tarjeta
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* @apiParam {int} CardNumber required.
* @apiParam {int} CardExpYear required.
* @apiParam {int} CardExpMonth required.
* @apiParam {int} CardCVC required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
"success": true,
"status": "200",
"msg": "Tarjeta Tokenizada"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
"success": false,
"status": "500",
"msg": "Error al intentar tokenizar"
}
**/
router.post('/tokenizacion', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists(),
    check('CardNumber', 'El CardNumber es obligatorio').not().isEmpty().exists(),
    check('CardExpYear', 'El CardExpYear es obligatorio').not().isEmpty().exists(),
    check('CardExpMonth', 'El CardExpMonth es obligatorio').not().isEmpty().exists(),
    check('CardCVC', 'El CardCVC es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req.body);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.tokenizacion(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/crearclient 2 crearclient
* @apiName crearclient - Crear cliente en Epayco
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
"success": true,
"status": "200",
"msg": "Cliente Creado con Éxito."
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
"success": false,
"status": "500",
"msg": "Error al intentar Crear al cliente. El token no se puede asociar al cliente, verifique que: el token existe, el cliente no esté asociado y que el token no este asociado a otro cliente ."
}
**/
router.post('/crearclient', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.crearclient(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/recuperarclient 3 recuperarclient
* @apiName recuperarclient - buscar cliente en Epayco
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
    "success": true,
    "status": "200",
    "data": {
        "id_customer": "PS9ZmikjhAj9rZiDE",
        "name": "Joe",
        "email": "joe@payco.co",
        "phone": "3005234321",
        "address": "Cr 4 # 55 36",
        "created": "03/28/2021",
        "cards": [
            {
                "token": "**********GYmzXG",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/24/2021",
                "default": false
            },
            {
                "token": "**********rLwcZZ",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********ZRg8xt",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********EzGgxS",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********hPcrJ5",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********pXT4t2",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********bkWK9z",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********PWStny",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********682QuD",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********aRr5X8",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********eNbSST",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********oAFDTQ",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********4cqCvB",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********qMFr6j",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********rE3tBT",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/29/2021",
                "default": true
            }
        ]
    },
    "msg": "Cliente encontrado con éxito"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
        "success": false,
        "status": "500",
        "msg": "Error al intentar buscars al cliente."
        }
**/

router.post('/recuperarclient', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.recuperarclient(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/listclient 4 listclient
* @apiName listclient - Listar clientes creados en Epaycoq
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*  {
    "success": true,
    "status": "200",
    "data": {
        "id_customer": "PS9ZmikjhAj9rZiDE",
        "name": "Joe",
        "email": "joe@payco.co",
        "phone": "3005234321",
        "address": "Cr 4 # 55 36",
        "created": "03/28/2021",
        "cards": [
            {
                "token": "**********GYmzXG",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/24/2021",
                "default": false
            },
            {
                "token": "**********rLwcZZ",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********ZRg8xt",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********EzGgxS",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********hPcrJ5",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********pXT4t2",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********bkWK9z",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********PWStny",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********682QuD",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********aRr5X8",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********eNbSST",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/25/2021",
                "default": false
            },
            {
                "token": "**********oAFDTQ",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********4cqCvB",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********qMFr6j",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/26/2021",
                "default": false
            },
            {
                "token": "**********rE3tBT",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/29/2021",
                "default": false
            },
            {
                "token": "**********NPrJx3",
                "franchise": "VISA",
                "mask": "457562******0326",
                "created": "03/29/2021",
                "default": true
            }
        ]
    },
    "msg": "Lista de clientes con éxito"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
"success": false,
"status": "500",
"msg": "Error al intentar listar  clientes."
}
**/
router.post('/listclient', rutasProtegidas, async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.listclient(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/updateclient 5 updateclient
* @apiName updateclient - Actualizar  cliente en Epayco
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
    "success": true,
    "status": "200",
    "msg": "Cliente Actualizado con Éxito."
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
"success": false,
"status": "500",
"msg": "Error al intentar acualizar al cliente. 
}
**/
router.post('/updateclient', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.updateclient(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/deleteclient 6 deleteclient
* @apiName deleteclient - Delete  Token
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {int} idUser required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
    "success": true,
    "status": "200",
    "msg": "Cliente Actualizado con Éxito."
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Error eliminando el token"
}
**/
router.post('/deletetoken', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.deletetoken(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})


module.exports = router;