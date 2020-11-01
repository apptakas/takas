const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasprotegidas');
const notifications = require('../../lib/notifications.js');
const config = require('../../config/config');
const { check, validationResult } = require('express-validator');
const userController = require('../../controllers/userscontroller');
//app.express();





router.get('/prueba', function (req, res) {
    //res.send('Inicio');
    let data={
        "title": "test",
        "body": "mi descripcion",
        "type": 0,
        "status": 0,
        "id": "hello",
        "click_action": "FLUTTER_NOTIFICATION_CLICK"
    };
    let token="efTmlTE3uzA:APA91bFSLY9NlzIS0xeRjx0OoCsJdH3NQGI7E-yrU6OAx2VRqQeDd2WZR9CEzWg_BPlGf1H_nIO15L-GYmqHs3l4tc_8wgJf1l3RBTj7BxppuBQr8EYz43O6W3IPFCcRT4rUbV50UwFJ";
    let titulo="Notificaciones Takas";
    let detalle="Pruebas con primeras Notificaciones Takas";
    notifications(token,titulo,detalle,data);
    
    res.send('Inicio');

});



/**
 * @api {post} /user/newUser  1 newUser
 * @apiName  newUser - Registro De Usuario
 * @apiGroup User
 * 
 *      
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * 
 *   
 * @apiParam {varchar} idfirebaseUser unique required.
 * @apiParam {int} codCity  optional. 
 * @apiParam {varchar} fullnameUser required.
 * @apiParam {varchar} phonenumberUser  unique required.
 * @apiParam {varchar} emailUser   required.
 * @apiParam {varchar} passwordUser  required .
 * @apiParam {varchar} tycUser  required .
 * @apiParam {varchar} urlimgUser  optional .
 * 
 *
 * @apiSuccess {boolean} success of the User.
 * @apiSuccess {int} status 200 of the User.
 * @apiSuccess {string} msg   of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "success": true,
    "status":: "200",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDE5MTYzMjUsImV4cCI6MTYwMjAwMjcyNX0.KBsaWobyOo2_NRmrbhFDisMfvvD9oddNFwfK0D6imC0",
    "msg": "Usuario Registrado con éxito"
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
                success: false,
                status: '500',
                msgerr: 'response.error.sqlMessage',
                codeerr: 'response.error.code',
                noerr: 'response.error.errno'
        }
 */
//Crear newUser- 
router.post('/newUser', [
    check('idfirebaseUser', 'El idfirebase es obligatorio').not().isEmpty().exists(),
    check('fullnameUser', 'El Nombre del usuario es obligatorio').not().isEmpty().exists(),
    check('phonenumberUser', 'El númeto telefónico es obligatorio').not().isEmpty().exists(),
    check('emailUser', 'El email no puede estra vacio y debe corresponder al formato').isEmail().exists(),
    check('passwordUser', ' La contraseña es obligatoria').not().isEmpty().exists(),
    check('tycUser', ' Es requerido aceptar términos y condisiones').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    let response = await userController.newUser(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    console.log(response);
    return res.status(response.data.status).json(response.data)

})


router.get('/datos', rutasProtegidas, (req, res) => {
    const datos = [
        { id: 1, nombre: "Asfo" },
        { id: 2, nombre: "Denisse" },
        { id: 3, nombre: "Carlos" }
    ];

    res.json(datos);
});

/**
 * @api {post} /user/autenticar 2 autenticar
 * @apiName autenticar - Login User
 * @apiGroup User
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * 
 *
 * @apiParam {varchar}  idfirebase  required.
 * @apiParam {varchar} passworduser  required.
 * @apiParam {varchar} emailuser  required.
 
 *
 * @apiSuccess {boolean} success of the User.
 * @apiSuccess {int} status 200 of the User.
 * @apiSuccess {string} msg   of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "{
    "success": true,
    "status":: "200",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwMDU0NDQsImV4cCI6MTYwMTA5MTg0NH0.lzwyWiplFVyIYIc_TVI_vAindzOXTFuuIE7oLdAvo2U",
    "msg": "Usuario Autenticado con éxito"
}
}
 *
 * @apiError UserNotFound The id of the Domiciliary was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Autenticar"
}
 */
router.post('/autenticar', [
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists(),
    check('passwordUser', 'El passworduser el obligatorio').not().isEmpty().exists(),
    check('emailUser', 'El emailuser el obligatorio').isEmail().exists()
], async (req, res) => {

    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.Autenticar(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})



/**
 * @api {post} /user/gautenticar 3 gautenticar
 * @apiName gautenticar - Login User
 * @apiGroup User
 * 
 *
* @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 *
 * 
 * 
 * @apiParam {varchar}  idfirebase  required.
 * @apiParam {varchar} emailuser  required.
 * @apiParam {varchar} fullnameUser  optional.
 * @apiParam {varchar} tycUser  optional.
 
 *
 * @apiSuccess {boolean} success of the User.
 * @apiSuccess {int} status 200 of the User.
 * @apiSuccess {string} msg   of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status":: "200",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDE5MjA0NTcsImV4cCI6MTYwMjAwNjg1N30.GNL6njKiUfPvUSKh4ba7QwokYcs2osMltd0zAJ3dkvU",
    "newUser": true,
    "msg": "Usuario Autenticado con éxito"
}
 *
 * @apiError UserNotFound The id of the Users was not found.
 *
 * @apiErrorExample Error-Response:
 * HTTP/1.1 500 Not Found
 *     {
    "success": false,
    "status":: "500",
    "newUser": true,
    "msg": "Debe aceptar terminos y condiciones"
}
 */
router.post('/gautenticar', [
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists(),
    check('emailUser', 'El emailuser el obligatorio').isEmail().exists()
], async (req, res) => {

    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.GAutenticar(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})


/**
 * @api {get} /user/LisTypePublication 1 LisTypePublication
 * @apiName LisTypePublication - Listar Categorias filtrado por tipo de publicación
 * @apiGroup TypePublication
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 *
 * @apiSuccess {boolean} success of the TypePublication.
 * @apiSuccess {int} status 200 of the TypePublication.
 * @apiSuccess {string} msg   of the TypePublication.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status":: "200",
    "data": [
        {
            "id": 1,
            "name": "Takastear",
            "description": "Publicar Productos",
            "status":: 1
        },
        {
            "id": 2,
            "name": "ServiTakastear",
            "description": "Publicar Servicios",
            "status":: 1
        },
        {
            "id": 3,
            "name": "SubasTakear",
            "description": "Publicar Subastas",
            "status":: 1
        }
    ],
    "msg": "Lista de Tipo de Publicación"
}
 *
 * @apiError UserNotFound The id of the Category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Categoría"
}
 */
//MASTER TYPE PUBLICATION
router.get('/listypepublication', rutasProtegidas, async (req, res) => {


    let response = await userController.LisTypePublication();

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {post} /user/listcategory 1 listcategory
 * @apiName listcategory - Listar Categorias filtrado por tipo de publicación
 * @apiGroup Category
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * @apiParam {smallint}  typepublicCategory  required. 
 *
 * @apiSuccess {boolean} success of the Category.
 * @apiSuccess {int} status 200 of the Category.
 * @apiSuccess {string} msg   of the Category.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status":: "200",
    "data": [
        {
            "id": 1,
            "namec": "Bebés",
            "iconc": "https://n9.cl/c1z78",
            "SubCategory": [
                {
                    "idsc": 1,
                    "name": "Ropa de bebes",
                    "icon": "",
                    "category": 1,
                    "status":: 1
                }
            ]
        },
        {
            "id": 2,
            "namec": "Arte",
            "iconc": "https://n9.cl/pbmd1",
            "SubCategory": []
        },
        {
            "id": 3,
            "namec": "Música",
            "iconc": "https://n9.cl/hgan",
            "SubCategory": []
        },
        {
            "id": 4,
            "namec": "indefinidas",
            "iconc": null,
            "SubCategory": [
                {
                    "idsc": 2,
                    "name": "Accesorios para Vehículos",
                    "icon": "wheel",
                    "category": 4,
                    "status":: 1
                },
                {
                    "idsc": 3,
                    "name": "Vehículos",
                    "icon": "car",
                    "category": 4,
                    "status":: 1
                },
                {
                    "idsc": 4,
                    "name": "Alimentos y Bebidas",
                    "icon": "eat",
                    "category": 4,
                    "status":: 1
                },
                {
                    "idsc": 5,
                    "name": "Mascotas",
                    "icon": "dog",
                    "category": 4,
                    "status":: 1
                }
            ]
        }
    ],
    "msg": "Lista de Categoría"
}
 *
 * @apiError UserNotFound The id of the Category was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Categoría"
}
 */
//MASTER CATEGORY
router.post('/listcategory', rutasProtegidas, [
    check('typepublicCategory', 'Se requiere el tipo de publicación').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.ListCategory(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {post} /user/listcities 1 listcities
 * @apiName listcities - Listar Ciudades
 * @apiGroup Cities
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * 
 * 
 * @apiParam {varchar}  idfirebaseUser  required. 
 *
 * @apiSuccess {boolean} success of the Cities.
 * @apiSuccess {int} status 200 of the Cities.
 * @apiSuccess {string} msg   of the Cities.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": [
        {
            "idfirebase": "idfirebaseUsers77wqedsaxgg",
            "city": "Bogotá DC",
            "idcity": 1,
            "ListCities": [
                {
                    "id": 1,
                    "name": "Bogotá DC",
                    "status": 1
                },
                {
                    "id": 2,
                    "name": "Medellín",
                    "status": 1
                },
                {
                    "id": 3,
                    "name": "Cali",
                    "status": 1
                },
                {
                    "id": 4,
                    "name": "Barranquilla",
                    "status": 1
                },
                {
                    "id": 5,
                    "name": "Cartagena",
                    "status": 1
                },
                {
                    "id": 6,
                    "name": "Bucaramanga",
                    "status": 1
                },
                {
                    "id": 7,
                    "name": "Manizales",
                    "status": 1
                },
                {
                    "id": 8,
                    "name": "Santa Marta",
                    "status": 1
                },
                {
                    "id": 9,
                    "name": "Pereira",
                    "status": 1
                },
                {
                    "id": 10,
                    "name": "Cúcuta",
                    "status": 1
                }
            ]
        }
    ],
    "msg": "Lista de Ciudades"
}
 *
 * @apiError UserNotFound The id of the Cities was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Categoría"
}
 */

//MASTER LIST CITIES
router.post('/listcities', rutasProtegidas,[
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    let response = await userController.ListCities(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {post} /user/liststatusproduct 1 liststatusproduct
 * @apiName liststatusproduct - Listar status ce características de Productos 
 * @apiGroup Status
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * @apiParam {smallint}  idfilter  required. 
 *
 * @apiSuccess {boolean} success of the Status.
 * @apiSuccess {int} status 200 of the Status.
 * @apiSuccess {string} msg   of the Status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": [
        {
            "id": 9,
            "namestatus": "Nuevo ",
            "filter": 4,
            "namefilter": "Estado Producto "
        },
        {
            "id": 10,
            "namestatus": "Usado (Como nuevo)",
            "filter": 4,
            "namefilter": "Estado Producto "
        },
        {
            "id": 11,
            "namestatus": "Usado (Buen estado)",
            "filter": 4,
            "namefilter": "Estado Producto "
        },
        {
            "id": 12,
            "namestatus": "Usado (Funcional)",
            "filter": 4,
            "namefilter": "Estado Producto "
        },
        {
            "id": 13,
            "namestatus": "Usado (con detalles)",
            "filter": 4,
            "namefilter": "Estado Producto "
        }
    ],
    "msg": "Lista de Tipo de Publicación"
}
 *
 * @apiError UserNotFound The id of the Status was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar status de productos según filtros"
}
 */
//MASTER STATUS DE PRODUCTOS 
router.post('/liststatusproduct', rutasProtegidas, [
    check('idfilter', 'Se requiere el idfilter de la publicación').not().isEmpty().exists()
], async (req, res) => {

    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.listStatusProduct(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})







/**
 * @api {put} /user/tokenpush 4 tokenpush
 * @apiName tokenpush - Registar o Actualizar TokenPushs
 * @apiGroup User
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * @apiParam {smallint}  idfirebaseUser  required. 
 * @apiParam {smallint}  tokenpushUser  required. 
 *
 * @apiSuccess {boolean} success of the User.
 * @apiSuccess {int} status 200 of the User.
 * @apiSuccess {string} msg   of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "status":: "200",
    "msg": "Token Push Actualizado"
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Categoría"
}
 */
///tokenpush
router.put('/tokenpush', rutasProtegidas, [
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists(),
    check('tokenpushUser', 'El tokenpush el obligatorio').not().isEmpty().exists()
], async (req, res) => {
    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.Updatetokenpush(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})


/**
 * @api {post} /user/userexist 5 userexist
 * @apiName userexist - Verficación si un usuario existe en la DB del Backend
 * @apiGroup User
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * @apiParam {smallint}  idfirebaseUser  required. 
 *
 * @apiSuccess {boolean} success of the User.
 * @apiSuccess {int} status 200 of the User.
 * @apiSuccess {string} msg   of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "status":: "200",
    "msg": "Token Push Actualizado"
}
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Categoría"
}
 */
///tokenpush
router.post('/userexist', rutasProtegidas, [
    check('idfirebaseUser', 'El idfirebaseUser el obligatorio').not().isEmpty().exists()
], async (req, res) => {
    const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.UserExist(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})



/**
 * @api {get} /user/listypepreferences 1 Listypepreferences
 * @apiName Listypepreferences - Listar Preferencias de negociación que puede tener una publicación
 * @apiGroup Preferences
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 *
 * 
 * @apiParam {smallint}  typePublicarion  optional. 
 * 
 * @apiSuccess {boolean} success of the Preferences.
 * @apiSuccess {int} status 200 of the Preferences.
 * @apiSuccess {string} msg   of the Preferences.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status":: "200",
    "data": [
        {
            "id": 1,
            "name": "Efectivo",
            "typepublication": null,
            "icon": "money",
            "status":: 1
        },
        {
            "id": 2,
            "name": "Takasteo",
            "typepublication": null,
            "icon": "takas",
            "status":: 1
        }
    ],
    "msg": "Lista de Tipo de Preferencias"
}
 *
 * @apiError UserNotFound The id of the Preferences was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar los tipos de preferencias"
}
 */
//MASTER PREFERENCES
router.get('/listypepreferences', rutasProtegidas, async (req, res) => {


    let response = await userController.LisTypePreference();

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})



/**
 * @api {get} /user/listcharacteristicpublication 2 listcharacteristicpublication
 * @apiName listcharacteristicpublication - Listar Caracter´sticas de una publicación según bandera
 * @apiGroup Status
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 *
 * 
 * @apiParam {smallint}  FlagCharacteristic  requeride  1=Nuevo o Usado 2=Tamaño 3=Peso. 
 * 
 * @apiSuccess {boolean} success of the Status.
 * @apiSuccess {int} status 200 of the Status.
 * @apiSuccess {string} msg   of the Status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": [
        {
            "id": 19,
            "namestatus": "Muy liviano (0-1kg)",
            "filter": 6,
            "namefilter": "Peso Producto"
        },
        {
            "id": 20,
            "namestatus": "Liviano (1-3kg)",
            "filter": 6,
            "namefilter": "Peso Producto"
        },
        {
            "id": 21,
            "namestatus": "Normal (3 a 7kg)",
            "filter": 6,
            "namefilter": "Peso Producto"
        },
        {
            "id": 22,
            "namestatus": "Pesado (7-15kg)",
            "filter": 6,
            "namefilter": "Peso Producto"
        }
    ],
    "msg": "Lista de Características para una publicación sengún bandera"
}
 *
 * @apiError UserNotFound The id of the Status was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar los tipos de preferencias"
}
 */
//MASTER CARACTERÍSTICAS DE PESOS DE UNA PUBLICACIÓN
router.post('/listcharacteristicpublication', rutasProtegidas, [
    check('FlagCharacteristic', 'El FlagCharacteristic es obligatorio').not().isEmpty().exists()
    ], async (req, res) => {


    let response = await userController.CharacteristicPublication(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {get} /user/listmoney 1 listmoney
 * @apiName listmoney - Listar tipos de monedas
 * 
 * @apiGroup Money
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                { "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 *
 * 
 * @apiSuccess {boolean} success of the Money.
 * @apiSuccess {int} status 200 of the Money.
 * @apiSuccess {string} msg   of the Money.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status":: "200",
    "data": [
        {
            "id": 2,
            "name": "Dólar Americano",
            "shortname": "USD",
            "status": 1
        },
        {
            "id": 3,
            "name": "Pesos Colombianos",
            "shortname": "COP",
            "status": 1
        }
    ],
    "msg": "Lista de Tipo de Monedas"
}
 *
 * @apiError UserNotFound The id of the Money was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar los tipos de Monedas"
}
 **/
//MASTERMONEY
router.get('/listmoney', rutasProtegidas, async (req, res) => {


    let response = await userController.ListMoney();

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {get} /user/listsubcategory 1 listsubcategory
 * @apiName listsubcategory - Listar Preferencias de negociación que puede tener una publicación
 * @apiGroup SubCategory
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * 
 * @apiSuccess {boolean} success of the SubCategory.
 * @apiSuccess {int} status 200 of the SubCategory.
 * @apiSuccess {string} msg   of the SubCategory.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status":: "200",
    "data": [
        {
            "id": 1,
            "name": "Ropa de bebes",
            "icon": "",
            "category": 1,
            "status":: 1,
            "typepublication": 1
        },
        {
            "id": 2,
            "name": "Accesorios para Vehículos",
            "icon": "wheel",
            "category": 4,
            "status":: 1,
            "typepublication": 1
        },
        {
            "id": 3,
            "name": "Vehículos",
            "icon": "car",
            "category": 4,
            "status":: 1,
            "typepublication": 1
        },
        {
            "id": 4,
            "name": "Alimentos y Bebidas",
            "icon": "eat",
            "category": 4,
            "status":: 1,
            "typepublication": 1
        }
    ],
    "msg": "Lista de Subcategorías"
}
 *
 * @apiError UserNotFound The id of the SubCategory was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Subcategorías"
}
 **/
//MASTER SUBCATEGORY
router.get('/listsubcategory', rutasProtegidas, async (req, res) => {


    let response = await userController.ListSubCategory();

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/// TAKASTEAR 


/**
 * @api {post} /user/newproduct  1 newproduct
 * @apiName  newproduct - Registro De Producto TAKASTEAR
 * @apiGroup Product
 * 
 *      
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * 
 * 
 * @apiParam {varchar} iduserProduct required.
 * @apiParam {varchar} nameProduct required.
 * @apiParam {varchar} detailsProduct  unique required.
 * @apiParam {smallint} typemoneyProduct   required.
 * @apiParam {decimal} marketvalueProduct  required .
 * @apiParam {int} subcategoryProduct  required .
 * @apiParam {array} PreferecesProduct  optional array de enteros .
 * @apiParam {array} ImagesProduct  optional arrays de varchar .
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status":: "200",
    "msg": "Producto registrado con éxito"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "data": "Ha superdo el límite de imagenes",
    "msg": "Error al registrar producto"
}
 *
 *
 **/

//Crear newproduct
router.post('/newproduct', rutasProtegidas,[
    check('iduserProduct', 'El idfirebase es obligatorio').not().isEmpty().exists(),
    check('nameProduct', 'El Nombre del producto es obligatorio').not().isEmpty().exists(),
    check('detailsProduct', 'El detalle del producto es obligatorio').not().isEmpty().exists(),
    check('typemoneyProduct', 'El tipo de moneda estar vacio ').not().isEmpty().exists(),
    check('marketvalueProduct', ' El precio es obligatoria').not().isEmpty().exists(),
    check('subcategoryProduct', ' la Contraseña es requerida').not().isEmpty().exists(),
    check('PreferecesProduct', ' Debes elegir al menos una preferencia de negocio').not().isEmpty().exists(),
    check('ImagesProduct', 'Debes cargar al menos 1 Foto').not().isEmpty().exists()
], async (req, res) => {

    /*,
    check('PreferecesProduct', ' Las Preferencias son requerido aceptar términos y condisiones').not().isEmpty().exists(),
    check('ImagesProduct', ' Es requerido aceptar términos y condisiones').not().isEmpty().exists() */
    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    let response = await userController.NewProduct(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    console.log(response);
    return res.status(response.data.status).json(response.data)

})





/**
 * @api {post} /user/listmisproductos 2 listmisproductos
 * @apiName listmisproductos - Listar Las plublicaciones de un usuario
 * @apiGroup Product
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idfirebaseUser required.
 * @apiParam {varchar} statusProduct optional.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "success": true,
    "status": "200",
    "data": [
        {
            "idproduct": 5,
            "datecreated": "23/10/2020",
            "iduser": "8e7PQpRV7ic4jcCuaMm5DDIIOOv2",
            "nuevo": false,
            "subcategory": 1,
            "name": "Camisas de Among Us",
            "details": "camisas muy creativas",
            "typemoney": 3,
            "marketvalue": "50000.0000",
            "typepublication": 1,
            "status": 1,
            "CantidadOfertas": 1,
            "ProductImages": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1"
            ],
            "Preferences": [
                1,
                2
            ]
        },
        {
            "idproduct": 6,
            "datecreated": "26/10/2020",
            "iduser": "8e7PQpRV7ic4jcCuaMm5DDIIOOv2",
            "nuevo": false,
            "subcategory": 1,
            "name": "Plancha para el pelo",
            "details": "maraca baby liz",
            "typemoney": 3,
            "marketvalue": "80000.0000",
            "typepublication": 1,
            "status": 1,
            "CantidadOfertas": 0,
            "ProductImages": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d"
            ],
            "Preferences": [
                2
            ]
        }
    ],
    "msg": "Lista de mis productos"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Mis Productos"
}
 **/
//LISTAR MIS PUBLICACIONES
router.post('/listmisproductos', rutasProtegidas, [
check('idfirebaseUser', 'El idfirebaseUser es obligatorio').not().isEmpty().exists()
],async (req, res) => {

        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }

    let response = await userController.ListMisProductos(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

/**
 * @api {post} /user/listproductos 3 listproductos
 * @apiName listproductos - Listar Los productos pubicados por otros usuarios
 * @apiGroup Product
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idfirebaseUser required.
 * @apiParam {varchar} statusProduct required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {{
    "success": true,
    "status": "200",
    "data": [
        {
            "idproduct": 1,
            "datecreated": "05/10/2020 13:46:27",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Mameluco para bebé",
            "details": "Producto disponible de 0 a 24 meses",
            "typemoney": 2,
            "marketvalue": 30000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 7,
            "datecreated": "05/10/2020 13:25:07",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "name": "Gorros para bebés",
            "nuevo": false,
            "subcategory": 1,
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 11,
            "datecreated": "06/09/2021 17:27:47",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        }
    ],
    "msg": "Lista de productos"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Productos"
}
 **/
//LISTAR MIS PUBLICACIONES
router.post('/listproductos', rutasProtegidas, [
    check('idfirebaseUser', 'El idfirebaseUser es obligatorio').not().isEmpty().exists(),
    check('statusProduct', 'El statusProduct es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
        
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
    
        let response = await userController.ListProductos(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })


    ///////
    
/**
 * @api {post} /user/findproductos 7 findproductos
 * @apiName findproductos - Buscar articulos por nombre
 * @apiGroup Product
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} nameProduct required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {{
    "success": true,
    "status": "200",
    "data": [
        {
            "idproduct": 1,
            "datecreated": "05/10/2020 13:46:27",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Mameluco para bebé",
            "details": "Producto disponible de 0 a 24 meses",
            "typemoney": 2,
            "marketvalue": 30000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 7,
            "datecreated": "05/10/2020 13:25:07",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "name": "Gorros para bebés",
            "nuevo": false,
            "subcategory": 1,
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 11,
            "datecreated": "06/09/2021 17:27:47",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        }
    ],
    "msg": "Busqueda de productos éxitosa"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Buscar Productos"
}
 **/
//BUSCAR PUBLICACUONES SEGÚN NOMBRE DEL ARTÍCULO
router.post('/findproductos', rutasProtegidas, [
    check('nameProduct', 'El nameProduct es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
        
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
    
        let response = await userController.findProductos(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })
    //////
    

/**
 * @api {post} /user/listproductsubcategory 4 listproductsubcategory
 * @apiName listproductsubcategory - Listar Los productos pubicados por otros usuarios
 * @apiGroup Product
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} SubCategoriaProduct required.
 * @apiParam {varchar} idFirebaseUser required.
 * @apiParam {varchar} statusProduct required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {
    "success": true,
    "status": "200",
    "data": [
        {
            "idproduct": 1,
            "datecreated": "05/10/2020 13:46:27",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Mameluco para bebé",
            "details": "Producto disponible de 0 a 24 meses",
            "typemoney": 2,
            "marketvalue": 30000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 7,
            "datecreated": "05/10/2020 13:25:07",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 11,
            "datecreated": "06/09/2021 17:27:47",
            "iduser": "idfirebaseUsers77wqedsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos y confortables",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": []
        },
        {
            "idproduct": 17,
            "datecreated": "06/09/2021 18:06:37",
            "iduser": "idfirebaseU4534dsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos 1",
            "typemoney": 1,
            "marketvalue": 10000,
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://n9.cl/vt0n"
            ],
            "Preferences": [
                1,
                2
            ]
        }
    ],
    "msg": "Lista de productos filtrados por subcategorías"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Productos filtrados por subcategoría"
}
 **/
//LISTAR PRODRUCTOS FILTRADOS POR SUBCATEGORÍA
router.post('/listproductsubcategory', rutasProtegidas, [
    check('SubCategoriaProduct', 'El SubCategoriaProduct es obligatorio').not().isEmpty().exists(),
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
    check('statusProduct', 'El statusProduct es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {

        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
    
        let response = await userController.ListProductSubCategory(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })    

/**
 * @api {post} /user/detailsproduct 5 detailsproduct
 * @apiName detailsproduct - Detalle del producto
 * @apiGroup Product
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} IdProduct required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
    "success": true,
    "status": "200",
    "data": {
        "idproduct": 1,
        "datecreated": "01/11/2020",
        "iduser": "EVln0Vj6DNOtTXQVS2fN9P68Gl13",
        "nuevo": false,
        "subcategory": 4,
        "name": "Estufa de 4 hornillas",
        "details": "Estufa de 4 hornillas color blanco ",
        "typemoney": 3,
        "marketvalue": "200000.0000",
        "typepublication": 1,
        "status": 1,
        "CantidadOfertas": 1,
        "ProductImages": [
            "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722",
            "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c"
        ],
        "Preferences": [
            1,
            2
        ]
    },
    "msg": "Listar detalles de un producto"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar obtener Cantidad de notificaciones según bandera"
}
 **/

//LISTAR DE DETALLES DEL PRODUCTO
router.post('/detailsproduct', rutasProtegidas, [
    check('IdProduct', 'El IdProduct es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.DetailsProduct(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })    


    /**
 * @api {post} /user/newproductkw  6 newproductkw
 * @apiName  newproductkw - Registro De Producto con keywords TAKASTEAR
 * @apiGroup Product
 * 
 *      
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * 
 * 
 * @apiParam {varchar} iduserProduct required.
 * @apiParam {varchar} nameProduct required.
 * @apiParam {boolean} NewProduct required.
 * @apiParam {varchar} detailsProduct  unique required.
 * @apiParam {smallint} typemoneyProduct   required.
 * @apiParam {decimal} marketvalueProduct  required .
 * @apiParam {int} subcategoryProduct  required .
 * @apiParam {array} PreferecesProduct  required array de enteros .
 * @apiParam {array} ImagesProduct  required arrays de varchar .
 * @apiParam {array} KeyWordsProduct  optional array de varchar .
 * @apiParam {int} SizePoduct  optional.
 * @apiParam {int} WeightProduct  optional.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status":: "200",
    "msg": "Producto registrado con éxito"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "data": "Ha superdo el límite de imagenes",
    "msg": "Error al registrar producto"
}
 *
 *
 **/

//Crear newproduct
router.post('/newproductkw', rutasProtegidas,[
    check('iduserProduct', 'El idfirebase es obligatorio').not().isEmpty().exists(),
    check('NewProduct', 'El NewProduct es obligatorio').not().isEmpty().exists(),
    check('nameProduct', 'El Nombre del producto es obligatorio').not().isEmpty().exists(),
    check('detailsProduct', 'El detalle del producto es obligatorio').not().isEmpty().exists(),
    check('typemoneyProduct', 'El tipo de moneda estar vacio ').not().isEmpty().exists(),
    check('marketvalueProduct', ' El precio es obligatoria').not().isEmpty().exists(),
    check('subcategoryProduct', ' la Contraseña es requerida').not().isEmpty().exists(),
    check('PreferecesProduct', ' Debes elegir al menos una preferencia de negocio').not().isEmpty().exists(),
    check('ImagesProduct', 'Debes cargar al menos 1 Foto').not().isEmpty().exists()
], async (req, res) => {

    /*,
    check('PreferecesProduct', ' Las Preferencias son requerido aceptar términos y condisiones').not().isEmpty().exists(),
    check('ImagesProduct', ' Es requerido aceptar términos y condisiones').not().isEmpty().exists() */
    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    let response = await userController.NewProductKW(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    console.log(response);
    return res.status(response.data.status).json(response.data)

})
/////
 /**
 * @api {post} /user/newproductckw  8 newproductckw
 * @apiName  newproductckw - Registro De Producto con Características
 * @apiGroup Product
 * 
 *      
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" 
 *
 * 
 * 
 * @apiParam {varchar} iduserProduct required.
 * @apiParam {varchar} nameProduct required.
 * @apiParam {boolean} NewProduct required.
 * @apiParam {varchar} detailsProduct  unique required.
 * @apiParam {smallint} typemoneyProduct   required.
 * @apiParam {decimal} marketvalueProduct  required .
 * @apiParam {int} subcategoryProduct  required .
 * @apiParam {array} PreferecesProduct  required array de enteros .
 * @apiParam {array} ImagesProduct  required arrays de varchar .
 * @apiParam {array} KeyWordsProduct  optional array de varchar .
 * @apiParam {int} UsePoduct  optional.
 * @apiParam {int} SizePoduct  optional.
 * @apiParam {int} WeightProduct  optional.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status":: "200",
    "msg": "Producto registrado con éxito"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "data": "Ha superdo el límite de imagenes",
    "msg": "Error al registrar producto"
}
 *
 *
 **/

//Crear newproduct
router.post('/newproductckw', rutasProtegidas,[
    check('iduserProduct', 'El iduserProduct es obligatorio').not().isEmpty().exists(),
    check('NewProduct', 'El Determinar si un producto es nuo o usado es obligatorio').not().isEmpty().exists(),
    check('nameProduct', 'El Nombre del producto es obligatorio').not().isEmpty().exists(),
    check('detailsProduct', 'El detalle del producto es obligatorio').not().isEmpty().exists(),
    check('typemoneyProduct', 'El tipo de moneda estar vacio ').not().isEmpty().exists(),
    check('marketvalueProduct', ' El precio es obligatoria').not().isEmpty().exists(),
    check('subcategoryProduct', ' la Contraseña es requerida').not().isEmpty().exists(),
    check('PreferecesProduct', ' Debes elegir al menos una preferencia de negocio').not().isEmpty().exists(),
    check('ImagesProduct', 'Debes cargar al menos 1 imagen del producto').not().isEmpty().exists()
], async (req, res) => {

    /*,
    check('PreferecesProduct', ' Las Preferencias son requerido aceptar términos y condisiones').not().isEmpty().exists(),
    check('ImagesProduct', ' Es requerido aceptar términos y condisiones').not().isEmpty().exists() */
    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    let response = await userController.NewProductKW(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    console.log(response);
    return res.status(response.data.status).json(response.data)

})
/////


/**
 * @api {post} /user/newquestion 1 newquestion
 * @apiName newquestion - Pregunta de un producto
 * @apiGroup Questions
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idFirebaseUser required.
 * @apiParam {int} idPublication required.
 * @apiParam {varchar} descriptionQuestion required.
 * @apiParam {int} typeQuestion required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {
    "success": true,
    "status": "200",
    "msg": "Pregunta creada con éxito"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar crear pregunta"
}
 **/

//CREAR UNA PREGUNTA - PUBLICACIÓN
router.post('/newquestion', rutasProtegidas, [
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
    check('idPublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('descriptionQuestion', 'El IdProduct es obligatorio').not().isEmpty().exists(),
    check('typeQuestion', 'El typeQuestion es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.NewQuestion(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 

/**
 * @api {post} /user/answerquestion 2 answerquestion
 * @apiName answerquestion - Respuesta del una pregunta de unproducto
 * @apiGroup Questions
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idQuestion required.
 * @apiParam {int} idPublication required.
 * @apiParam {varchar} descriptionAnswer required.
 * @apiParam {int} typeQuestion required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Product.
 * @apiSuccess {int} status 200 of the Product.
 * @apiSuccess {string} msg   of the Product.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {
    "success": true,
    "status": "200",
    "msg": "Respuesta creada exitosamente"
}
 *
 * @apiError UserNotFound The id of the Product was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar crear una Respuesta"
}
 **/

//CREAR UNA RESPUESTA A UNA PREGUNTA - PUBLICACIÓN
router.post('/answerquestion', rutasProtegidas, [
    check('idfirebaseUser', 'El idfirebaseUser es obligatorio').not().isEmpty().exists(),
    check('idQuestion', 'El idQuestion es obligatorio').not().isEmpty().exists(),
    check('idPublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('descriptionAnswer', 'El descriptionAnswer es obligatorio').not().isEmpty().exists(),
    check('typeQuestion', 'El IdProduct es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.AnswerQuestion(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })


    /**
 * @api {post} /user/listquestionanswer 3 listquestionanswer
 * @apiName listquestionanswer - Preguntas y Respuestaa de un producto
 * @apiGroup Questions
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idtypePublicationQA required.
 * @apiParam {int} idPublicationQA required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Questions.
 * @apiSuccess {int} status 200 of the Questions.
 * @apiSuccess {string} msg   of the Questions.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *           {
    "success": true,
    "status": "200",
    "data": [
        {
            "idquiestions": 1,
            "iduser": "idfirebaseUser2374687234t8t2348t8",
            "Pregunta": "Son modelos Unisex?",
            "isquestions": 1,
            "publication": 1,
            "idproduct": 7,
            "idservice": 1,
            "idauction": 1,
            "datecreated": "12/10/2020 16:10:00",
            "status": 1,
            "Answers": {
                "idPregunta": 1,
                "Respuesta": "Si Nuestra línea de bebé en su mayoría son Unisexs",
                "publication": 1,
                "idproduct": 7,
                "datecreated": "30/09/2020 13:09:00",
                "status": 1
            }
        },
        {
            "idquiestions": 2,
            "iduser": "idfirebaseUser2374687234t8t2348t8",
            "Pregunta": "Son modelos Unisex?",
            "isquestions": 1,
            "publication": 1,
            "idproduct": 7,
            "idservice": 1,
            "idauction": 1,
            "datecreated": "30/09/2020 13:09:00",
            "status": 1,
            "Answers": {
                "idPregunta": 2,
                "Respuesta": "Si Nuestra línea de bebé en su mayoría son Unisexs",
                "publication": 1,
                "idproduct": 7,
                "datecreated": "30/09/2020 13:09:00",
                "status": 1
            }
        }
    ],
    "msg": "Lista de preguntas y respuestas de un producto"
}
 *
 * @apiError UserNotFound The id of the Questions was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status": "500",
    "msg": "Error al intentar Listar de pregunta y respuestas de un producto"
}
 **/

//LISTAR PREGUNTAS Y RESPUESTAS DE UN PRODUCTO- PUBLICACIÓN
router.post('/listquestionanswer', rutasProtegidas, [
    check('idtypePublicationQA', 'El idtypePublicationQA es obligatorio').not().isEmpty().exists(),
    check('idPublicationQA', 'El idPublicationQA es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.ListQuestionAnswer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })

/**
 * @api {post} /user/newoffer 1 newoffer
 * @apiName newoffer - Crear Oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idFirebaseUser required.
 * @apiParam {int} typePublication required.
 * @apiParam {int} idPublication required.
 * @apiParam {varchar} descriptionOffer optional.
 * @apiParam {array}  idsPublications array Int required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {
    "success": true,
    "status": "200",
    "msg": "Oferta creada exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar crear Oferta"
}
 **/

//CREAR UNA OFERTA - PUBLICACIÓN
router.post('/newoffer', rutasProtegidas, [
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
    check('typePublication', 'El typePublication es obligatorio').not().isEmpty().exists(),
    check('idPublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('idsPublications', 'El idsPublications es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.NewOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);

        


        return res.status(response.data.status).json(response.data)
    
    }) 


    /**
 * @api {post} /user/listoffer 2listoffer
 * @apiName listoffer - Listar Oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * 
 * @apiParam {int} typePublication required.
 * @apiParam {int} Int idPublication required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": [
        {
            "idoffer": 7,
            "idSala": "949bdc81078b49cd604b6622ddd762054ca8963a",
            "idproduct": 1,
            "namepublication": "Estufa de 4 hornillas",
            "img": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722",
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c"
            ],
            "observation": "-",
            "valorpublication": "200000.0000",
            "sumitemsoffer": "130000.0000",
            "differenceoffer": "70000.0000",
            "infavor": true,
            "itemsoffer": [
                {
                    "idpublication": 5,
                    "imgpublicacion": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                    "nameproduct": "Camisas de Among Us",
                    "status": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                    "marketvalue": "50000.0000"
                },
                {
                    "idpublication": 6,
                    "imgpublicacion": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d",
                    "nameproduct": "Plancha para el pelo",
                    "status": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d",
                    "marketvalue": "80000.0000"
                }
            ]
        }
    ],
    "msg": "Listar Ofertas exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar listar Oferta"
}
 **/

//CREAR UNA OFERTA - PUBLICACIÓN
router.post('/listoffer', rutasProtegidas, [
    check('typePublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('idPublication', 'El idPublication es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.ListOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 


      /**
 * @api {post} /user/detailsoffer 3 detailsoffer
 * @apiName detailsoffer - Listar Oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * 
 * @apiParam {int} typePublication required.
 * @apiParam {int} Int idOferta required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": {
        "idoffer": 7,
        "idproduct": 1,
        "nameoffer": "Ana",
        "observation": "-",
        "valorpublication": "200000.0000",
        "sumitemsoffer": "130000.0000",
        "differenceoffer": "70000.0000",
        "infavor": true,
        "itemsoffer": [
            {
                "idpublication": 5,
                "status": 1,
                "marketvalue": "50000.0000"
            },
            {
                "idpublication": 6,
                "status": 1,
                "marketvalue": "80000.0000"
            }
        ]
    },
    "msg": "Detalles de la oferta listado exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar listar detalles de la oferta"
}
 **/

//DETALLE DE LA OFERTA - PUBLICACIÓN
router.post('/detailsoffer', rutasProtegidas, [
    check('typePublication', 'El typePublication es obligatorio').not().isEmpty().exists(),
    check('idOferta', 'El idOferta es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.DetailsOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 




          /**
 * @api {post} /user/caldifference 4 caldifference
 * @apiName caldifference - Listar Oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * 
 * @apiParam {int} Int idPublication required.
 * @apiParam {decimal} marketvalueP required.
 * @apiParam {json} Publications required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "success": true,
    "status": "200",
    "data": {
        "idPublication": 4,
        "marketvalueP": "50000.0000",
        "SumItemsOffer": "20000.0000",
        "differenceoffer": "30000.0000",
        "infavor": false
    },
    "msg": "Diferencia calculada exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Calcular diferencia"
}
 **/

//CARLCULAR DIFERENCIAS - OFFERS
router.post('/caldifference', rutasProtegidas, [
    check('idPublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('marketvalueP', 'El marketvalueP es obligatorio').not().isEmpty().exists(),
    check('Publications', 'El Publications es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.CalDifference(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 

  /**
 * @api {post} /user/listmyoffer 5 listmyoffer
 * @apiName listmyoffer - Listar MIs Oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} Int idFirebaseUser required.
 * @apiParam {int} typePublication required.
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "success": true,
    "status": "200",
    "data": [
        {
            "idoffer": 7,
            "idSala": "949bdc81078b49cd604b6622ddd762054ca8963a",
            "idproduct": 1,
            "namepublication": "Estufa de 4 hornillas",
            "img": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722",
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c"
            ],
            "observation": "-",
            "valorpublication": "200000.0000",
            "sumitemsoffer": "130000.0000",
            "differenceoffer": "70000.0000",
            "infavor": true,
            "itemsoffer": [
                {
                    "idpublication": 5,
                    "imgpublicacion": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                    "nameproduct": "Camisas de Among Us",
                    "status": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                    "marketvalue": "50000.0000"
                },
                {
                    "idpublication": 6,
                    "imgpublicacion": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d",
                    "nameproduct": "Plancha para el pelo",
                    "status": 1,
                    "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d",
                    "marketvalue": "80000.0000"
                }
            ]
        }
    ],
    "msg": "Lista de mis Ofertas exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar listar mis ofertas"
}
 **/

//CREAR UNA OFERTA - PUBLICACIÓN
router.post('/listmyoffer', rutasProtegidas, [
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
    check('typePublication', 'El idPublication es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await userController.ListMyOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 



    /**
 * @api {put} /user/changestatusoffer 6 changestatusoffer
 * @apiName changestatusoffer - Cambio de estado de una oferta
 * @apiGroup Offers
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idOffer required.
 * @apiParam {int} FlagStatusOffer required. CANCELAR = 0, RECHAZAR = 1, ACEPTAR = 2
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Offers.
 * @apiSuccess {int} status 200 of the Offers.
 * @apiSuccess {string} msg   of the Offers.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status": "200",
    "match": true,
    "sala": "6340c299f4d9eb3d797b6a54f779cf616d0b0cdb",
    "msg": "Cambio de estatus de una oferta ejecutdos exitosamente"
}
 *
 * @apiError UserNotFound The id of the Offers was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar cambiar el estatus de una Oferta"
}
 **/

//CAMBIO DE ESTATUS DE UNA PFERTA - OFFERS
router.put('/changestatusoffer', rutasProtegidas, [
    check('idOffer', 'El idsPublications es obligatorio').not().isEmpty().exists(),
    check('FlagStatusOffer', 'El FlagStatusOffer es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }        
        let response = await userController.ChangeStatusOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 

/**
 * @api {post} /user/listchatroomstatus 1 listchatroomstatus
 * @apiName listchatroomstatus - Listar los datos de la sala de chat según status
 * @apiGroup Chatrooms
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} statuSalaChat required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Chatrooms.
 * @apiSuccess {int} status 200 of the Chatrooms.
 * @apiSuccess {string} msg   of the Chatrooms.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": [
        {
            "idSala": "949bdc81078b49cd604b6622ddd762054ca8963a",
            "datecreated": "28/10/2020",
            "idPublicacion": 1,
            "namePublication": "Estufa de 4 hornillas",
            "valorComercial": 200000,
            "Userpublication": "8e7PQpRV7ic4jcCuaMm5DDIIOOv2",
            "nameUserPublication": "Ana",
            "imgUserPublication": "https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d",
            "idoferta": 7,
            "UserOferta": "EVln0Vj6DNOtTXQVS2fN9P68Gl13",
            "nameUserOferta": "ronny",
            "imgUserOferta": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499",
            "ProductImagesPublicacion": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722",
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c"
            ],
            "PreferencesPublicacion": [
                1,
                2
            ]
        }
    ],
    "msg": "Lista de salas de chat según status"
}
 *
 * @apiError UserNotFound The id of the Chatrooms was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Productos"
}
 **/
//LISTAR LOS DATOS DE LA SALA DE CHAT 
router.post('/listchatroomstatus', rutasProtegidas, [
    check('statuSalaChat', 'El statuSalaChat es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
        
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
    
        let response = await userController.listChatRoomStatus(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })


    /**
 * @api {post} /user/listdatachatroom 2 listdatachatroom
 * @apiName listdatachatroom - Listar los datos de la sala de chat por idSala
 * @apiGroup Chatrooms
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idSalaChat required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Chatrooms.
 * @apiSuccess {int} status 200 of the Chatrooms.
 * @apiSuccess {string} msg   of the Chatrooms.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "success": true,
    "status": "200",
    "data": [
        {
            "idSala": "949bdc81078b49cd604b6622ddd762054ca8963a",
            "datecreated": "28/10/2020",
            "idPublicacion": 1,
            "namePublication": "Estufa de 4 hornillas",
            "valorComercial": 200000,
            "Userpublication": "8e7PQpRV7ic4jcCuaMm5DDIIOOv2",
            "nameUserPublication": "Ana",
            "imgUserPublication": "https://scontent.fbog9-1.fna.fbcdn.net/v/t1.0-9/123087363_10224035495334302_417571382738385553_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VGrhqTFkWmwAX-Zxk-R&_nc_ht=scontent.fbog9-1.fna&oh=a65b30d",
            "idoferta": 7,
            "UserOferta": "EVln0Vj6DNOtTXQVS2fN9P68Gl13",
            "nameUserOferta": "ronny",
            "imgUserOferta": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/profile%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A30%3A07.496425.jpg?alt=media&token=62aeb4a7-a7fc-444d-9b3e-9550d216d499",
            "ProductImagesPublicacion": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A31%3A56.674044.jpg?alt=media&token=0665a846-5f05-4ebc-8a34-bad46b7d6722",
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2FEVln0Vj6DNOtTXQVS2fN9P68Gl13-2020-10-23%2014%3A32%3A00.684299.jpg?alt=media&token=0094b859-5e33-4329-9730-1a73ebd1341c"
            ],
            "PreferencesPublicacion": [
                1,
                2
            ],
            "ItemOfer": {
                "itemsoffer": [
                    {
                        "idpublication": 5,
                        "nameproduct": "Camisas de Among Us",
                        "status": 1,
                        "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc",
                        "marketvalue": "50000.0000"
                    },
                    {
                        "idpublication": 5,
                        "nameproduct": "Camisas de Among Us",
                        "status": 1,
                        "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A51.015093.jpg?alt=media&token=0a56f3d1-55f0-46ed-ab6c-2e91b83fd6c1",
                        "marketvalue": "50000.0000"
                    },
                    {
                        "idpublication": 6,
                        "nameproduct": "Plancha para el pelo",
                        "status": 1,
                        "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-26%2013%3A47%3A42.386738.jpg?alt=media&token=8184ec1a-b122-4076-a539-0890214e6b9d",
                        "marketvalue": "80000.0000"
                    }
                ]
            }
        }
    ],
    "msg": "Data completa de la sala de chat"
}
 *
 * @apiError UserNotFound The id of the Chatrooms was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al Listar Productos"
}
 **/
//LISTAR LOS DATOS DE LA SALA DE CHAT 
router.post('/listdatachatroom', rutasProtegidas, [
    check('idSalaChat', 'El idSalaChat es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
        
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
    
        let response = await userController.listDataChatRoom(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })

 /**
 * @api {put} /user/changestatusoffer 3 changestatusoffer
 * @apiName changestatusoffer - Cambio de estado de una oferta
 * @apiGroup Chatrooms
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idSala required.
 * @apiParam {int} FlagStatus required. CANCELAR = 0, ACTIVO = 1, TAKASTEADO = 2
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Chatrooms.
 * @apiSuccess {int} status 200 of the Chatrooms.
 * @apiSuccess {string} msg   of the Chatrooms.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status": "200",
    "takasteo": true,
    "msg": "Cambio de estatus de la sala de chat ejecutdos exitosamente"
}
 *
 * @apiError UserNotFound The id of the Chatrooms was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar cambiar el estatus de una Oferta"
}
 **/

//CAMBIO DE ESTATUS DE UNA SALA DE CHAT - TAKASTEAR
router.put('/changestatuschatroom', rutasProtegidas, [
    check('idSala', 'El idSala es obligatorio').not().isEmpty().exists(),
    check('FlagStatus', 'El FlagStatus es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }        
        let response = await userController.changeStatusChatRoom(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 


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


     /**
 * @api {post} /user/cantnotifications 2 cantnotifications
 * @apiName cantnotifications - Obtener la cantidad de notificaciones según bandera
 * @apiGroup Notifications
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} flagNotifications Optional Sin leer=1 y Vista = 0.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Notifications.
 * @apiSuccess {int} status 200 of the Notifications.
 * @apiSuccess {string} msg   of the Notifications.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "success": true,
    "status": "200",
    "data": {
        "CantNoti": 11
    },
    "msg": "Cantidad de notificaciones según bandera obtenida con éxito"
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

// Obtener la cantidad de notificaciones según bandera
router.post('/cantnotifications', [
    check('flagNotifications', 'El statusNotifications es obligatorio').not().isEmpty().exists()
    ], rutasProtegidas,async (req, res) => {
        
    const error = validationResult(req);

    if (error.array().length != 0) {
        return res.status(422).json({ errores: error.array(), msg: 'Error' });
    }

    //let response = await userController.listNotifications(req.body);
    let response = await userController.cantNotifications(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})

 /**
 * @api {put} /user/changestatusnotifications 3 changestatusnotifications
 * @apiName changestatusnotifications - Cambio de estado de una oferta
 * @apiGroup Notifications
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idNotifications required.
 * @apiParam {int} FlagStatus required. Sin leer = 1, vista = 0
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Chatrooms.
 * @apiSuccess {int} status 200 of the Chatrooms.
 * @apiSuccess {string} msg   of the Chatrooms.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status": "200",
    "msg": "Cambio de la notificación exitosamente"
}
 *
 * @apiError UserNotFound The id of the Chatrooms was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "msg": "Error al intentar cambiar el estatus de la notificación"
}
 **/

//CAMBIO DE ESTATUS DE UNA NOTIFICACIÓN
router.put('/changestatusnotifications', rutasProtegidas, [
    check('idNotifications', 'El idNotifications es obligatorio').not().isEmpty().exists(),
    check('FlagStatus', 'El FlagStatus es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }        
        let response = await userController.changeStatusNotifications(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    }) 






module.exports = router;