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
* @api {post} /epayco/deletetoken 6 deletetoken
* @apiName deletetoken - Eliminar  Token
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
* @apiParam {varchar} franchise required.
* @apiParam {varchars} mask required.
* @apiParam {varchar} customer_id required.
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
    "msg": "Token removido"
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
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists(),
    check('franchise', 'El franchise es obligatorio').not().isEmpty().exists(),
    check('mask', 'El mask es obligatorio').not().isEmpty().exists(),
    check('customer_id', 'El customer_id es obligatorio').not().isEmpty().exists()
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

/**
* @api {post} /epayco/addnewtoken 7 addnewtoken
* @apiName addnewtoken - Agregar nuevo token a tarjeta existente
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
* @apiParam {varchar} franchise required.
* @apiParam {varchar} token required.
* @apiParam {varchar} mask required.
* @apiParam {varchar} customer_id required.
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
    "msg": "Reassignment card by default successful"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Error reassigning default card"
}
**/
router.post('/addnewtoken', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists(),
    check('franchise', 'El franchise es obligatorio').not().isEmpty().exists(),
    check('token', 'El token es obligatorio').not().isEmpty().exists(),
    check('mask', 'El mask es obligatorio').not().isEmpty().exists(),
    check('customer_id', 'El customer_id es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.addnewtoken(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/addnewtokenclient 8 addnewtokenclient
* @apiName addnewtokenclient - Agregar nuevo token a Cliente existente
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
* @apiParam {varchar} token required.
* 
* @apiSuccess {boolean} success of the Offers.
* @apiSuccess {int} status 200 of the Offers.
* @apiSuccess {string} msg   of the Offers.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*   {
    "success": false,
    "status": "500",
    "msg": "El customer ya tiene el token asociado"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "El customer ya tiene el token asociado",
    "msg": "Token inexistente, o no perteneciente al comercio"
}
**/
router.post('/addnewtokenclient', rutasProtegidas, [
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists(),
    check('token', 'El token es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.addnewtokenclient(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

///////PLANES///////////
/**
* @api {post} /epayco/createplans 8 createplans
* @apiName createplans - Crear plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
* @apiParam {varchar} name required.
* @apiParam {varchar} description required.
* @apiParam {real} amount required.
* @apiParam {varchar} currency required.
* @apiParam {varchar} interval required.
* @apiParam {int} interval_count required.
* @apiParam {int} trial_days required.
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
    "msg": "El plan ha sido creado exitosamente"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Datos erroneos o plan ya existente"
}
**/
router.post('/createplans', rutasProtegidas, [
    check('id_plan', 'El id_plan es obligatorio').not().isEmpty().exists(),
    check('name', 'El name es obligatorio').not().isEmpty().exists(),
    check('description', 'El description es obligatorio').not().isEmpty().exists(),
    check('amount', 'El amount es obligatorio').not().isEmpty().exists(),
    check('currency', 'El currency es obligatorio').not().isEmpty().exists(),
    check('interval', 'El interval es obligatorio').not().isEmpty().exists(),
    check('interval_count', 'El interval_count es obligatorio').not().isEmpty().exists(),
    check('trial_days', 'El trial_days es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.creatplans(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/retieveplans 9 retieveplans
* @apiName retieveplans - Recuperar plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
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
    "date": {
        "_id": "pLexEx6S5TzcdqaYE",
        "id_plan": "coursereact2",
        "name": "Course react js2",
        "description": "Course react and redux2",
        "amount": 30000,
        "currency": "cop",
        "interval_count": 1,
        "interval": "month",
        "status": "active",
        "trialDays": 30,
        "created": "04/03/2021"
    },
    "msg": "El plan ha sido encontrado exitosamente"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Plan no encontrado"
}
**/
router.post('/retieveplans', rutasProtegidas, [
    check('id_plan', 'El id_plan es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.retieveplans(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/listplans 10 listplans
* @apiName listplans - Recuperar plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
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
    "date": [
        {
            "_id": "LXzSRvAByyzgTtbGu",
            "id_plan": "coursereact",
            "name": "Course react js",
            "description": "Course react and redux",
            "amount": 30000,
            "currency": "cop",
            "interval_count": 1,
            "interval": "month",
            "status": "active",
            "trialDays": 30,
            "created": "03/31/2021"
        },
        {
            "_id": "CRz48h9NwkperADd7",
            "id_plan": "coursereactsygw",
            "name": "Course react jssygw",
            "description": "Course react and redux asjdbasdbhad",
            "amount": 30000,
            "currency": "cop",
            "interval_count": 1,
            "interval": "month",
            "status": "active",
            "trialDays": 30,
            "created": "03/31/2021"
        },
        {
            "_id": "pLexEx6S5TzcdqaYE",
            "id_plan": "coursereact2",
            "name": "Course react js2",
            "description": "Course react and redux2",
            "amount": 30000,
            "currency": "cop",
            "interval_count": 1,
            "interval": "month",
            "status": "active",
            "trialDays": 30,
            "created": "04/03/2021"
        }
    ],
    "msg": "Lista de plan exitosa"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Lista de plan no encontrado"
}
**/
router.post('/listplans', rutasProtegidas, async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.listplans(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/removeplans 11 removeplans
* @apiName removeplans - Recuperar plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
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
    "msg": "Plan eliminado correctamente"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Error al intentar remover plan"
}
**/
router.post('/removeplans', rutasProtegidas, [
    check('id_plan', 'El id_plan es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.removeplans(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})
  //////////SUSCRIPCIONES////////////////
/**
* @api {post} /epayco/createsuscription 12 createsuscription
* @apiName createsuscription - Crear plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
* @apiParam {varchar} customer required.
* @apiParam {varchar} token_card required.
* @apiParam {varchar} doc_type required.
* @apiParam {varchar} doc_number required.
* @apiParam {varchar} url_confirmation required.
* @apiParam {varchar} method_confirmation required.
* @apiParam {varchar} parameter oprional.
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
    "Inicio": "03-04-2021",
    "Fin": "03-11-2023",
    "msg": "Suscripción creada"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Datos erroneos o Plan no existente"
}
**/
router.post('/createsuscription', rutasProtegidas, [
    check('id_plan', 'El id_plan es obligatorio').not().isEmpty().exists(),
    check('customer', 'El customer es obligatorio').not().isEmpty().exists(),
    check('token_card', 'El token_card es obligatorio').not().isEmpty().exists(),
    check('doc_type', 'El doc_type es obligatorio').not().isEmpty().exists(),
    check('doc_number', 'El doc_number es obligatorio').not().isEmpty().exists() ,
    check('url_confirmation', 'El url_confirmation es obligatorio').not().isEmpty().exists() ,
    check('method_confirmation', 'El method_confirmation es obligatorio').not().isEmpty().exists() 
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.createsuscription(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})


/**
* @api {post} /epayco/retievesuscription 13 retievesuscription
* @apiName retievesuscription - Recuperar plan
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_suscription required.
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
        "status": true,
        "created": "03-04-2021",
        "id": "fmAkAyDCCYmjepwcM",
        "success": true,
        "current_period_start": "03-04-2021",
        "current_period_end": "03-11-2023",
        "customer": "PS9ZmikjhAj9rZiDE",
        "plan": {
            "_id": "CRz48h9NwkperADd7",
            "idClient": "coursereactsygw",
            "name": "Course react jssygw",
            "description": "Course react and redux asjdbasdbhad",
            "amount": 30000,
            "currency": "cop",
            "interval": "month",
            "interval_count": 1,
            "status": "active",
            "trialDays": 30
        },
        "status_plan": "inactive",
        "type": "Find Subscription",
        "object": "subscription"
    },
    "msg": "Suscripción encontrada exitosamente"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Suscripción no encontrada"
}
**/
router.post('/retievesuscription', rutasProtegidas, [
    check('id_suscription', 'El id_suscription es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.retievesuscription(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})


/**
* @api {post} /epayco/listsuscription 14 listsuscription
* @apiName listsuscription - Listar Suscropciones
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
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
    "date": [
        {
            "_id": "fmAkAyDCCYmjepwcM",
            "idPlan": "coursereactsygw",
            "periodStart": "2021-04-03T17:06:15.325Z",
            "periodEnd": "03-11-2023",
            "nextVerificationDate": "03-11-2023",
            "status": "inactive",
            "first": false,
            "idCustomer": "PS9ZmikjhAj9rZiDE",
            "tokenCard": "9THkSZsHvBnpgQhoD",
            "ip": "192.168.0.3",
            "url_confirmation": "https://ejemplo.com/confirmacion",
            "method_confirmation": "POST",
            "paymentAttempts": [],
            "plan": {
                "idClient": "coursereactsygw",
                "name": "Course react jssygw",
                "description": "Course react and redux asjdbasdbhad",
                "amount": 30000,
                "currency": "cop",
                "interval": "month",
                "interval_count": 1,
                "status": "active",
                "trialDays": 30
            }
        }
    ],
    "msg": "Lista de Suscripciones exitosa"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "msg": "Error al intentar listar suscripciones"
}
**/
router.post('/listsuscription', rutasProtegidas, async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.listsuscription(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/removesuscription 11 removesuscription
* @apiName removesuscription - Rmover suscripción
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_suscription required.
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
    "msg": "La suscripción ha sido inactivada"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "error": "Suscripción no encontrada"
}
**/
router.post('/removesuscription', rutasProtegidas, [
    check('id_subscription', 'El id_subscription es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.removesuscription(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})

/**
* @api {post} /epayco/pay 12 pay
* @apiName pay - Pago
* @apiGroup Epayco
* 
* 
* @apiHeaderExample {varchar}Content-Type:
*                 "value": "application/json" 
* @apiHeaderExample {varchar} access-token:
*                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
*
*
* @apiParam {varchar} id_plan required.
* @apiParam {varchar} customer required.
* @apiParam {varchar} token_card required.
* @apiParam {varchar} doc_type required.
* @apiParam {int} doc_number required.
* @apiParam {varchar} ip required.
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
    "msg": "La suscripción ha sido inactivada"
}
*
* @apiError UserNotFound The id of the Offers was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
    "success": false,
    "status": "500",
    "error": "Cliente no encontrado",
    "error": "No se logró validar el medio de pago relacionado con el cobro de la suscripción."
}
**/
router.post('/pay', rutasProtegidas, [
    check('id_plan', 'El id_plan es obligatorio').not().isEmpty().exists(),
    check('customer', 'El customer es obligatorio').not().isEmpty().exists(),
    check('token_card', 'El token_card es obligatorio').not().isEmpty().exists(),
    check('doc_type', 'El doc_type es obligatorio').not().isEmpty().exists(),
    check('doc_number', 'El doc_number es obligatorio').not().isEmpty().exists(),
    check('ip', 'El ip es obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }
    let response = await epayController.pay(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);   


    return res.status(response.data.status).json(response.data)

})



module.exports = router;