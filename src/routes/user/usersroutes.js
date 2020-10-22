const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasprotegidas');
const config = require('../../config/config');
const { check, validationResult } = require('express-validator');
const userController = require('../../controllers/userscontroller');
//app.express();





router.get('/prueba', function (req, res) {
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
 * @apiParam {int} codCity  required. 
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
    check('codCity', 'El usuario debe elgir una ciudad por defecto ').not().isEmpty().exists(),
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
 *     {
    "success": true,
    "status": "200",
    "data": [
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
check('idfirebaseUser', 'El idfirebaseUser es obligatorio').not().isEmpty().exists(),
check('statusProduct', 'El statusProduct es obligatorio').not().isEmpty().exists()
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
 *      {
    "success": true,
    "status": "200",
    "data": [
        {
            "idproduct": 17,
            "datecreated": "06/09/2021 18:06:37",
            "iduser": "idfirebaseU4534dsaxgg",
            "nuevo": false,
            "subcategory": 1,
            "name": "Gorros para bebés",
            "details": "Gorros termicos 1",
            "typemoney": 1,
            "marketvalue": "10000.0000",
            "typepublication": 1,
            "status": 1,
            "ProductImages": [
                "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv21-2020-10-11%2014%3A34%3A34.853337.jpg?alt=media&token=d7008372-6929-4d5b-83cc-9fc344b97395",
                "https://n9.cl/2vy3",
                "https://n9.cl/xr43h",
                "https://n9.cl/9n16",
                "https://n9.cl/rbsa"
            ],
            "Preferences": [
                1,
                2
            ]
        }
    ],
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
    "msg": "Error al Listar detalles del producto"
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
 * @apiParam {varchar} detailsProduct  unique required.
 * @apiParam {smallint} typemoneyProduct   required.
 * @apiParam {decimal} marketvalueProduct  required .
 * @apiParam {int} subcategoryProduct  required .
 * @apiParam {array} PreferecesProduct  required array de enteros .
 * @apiParam {array} ImagesProduct  required arrays de varchar .
 * @apiParam {array} KeyWordsProduct  optional array de varchar .
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
 * @apiParam {varchar} descriptionOffer required.
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
    check('descriptionOffer', 'El descriptionOffer es obligatorio').not().isEmpty().exists(),
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
 *          {
    "success": true,
    "status": "200",
    "data": [
        {
            "idoffer": 2,
            "idproduct": 21,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "10000.0000",
            "sumitemsoffer": "0.0000",
            "differenceoffer": "0.0000",
            "infavor": false,
            "itemsoffer": []
        },
        {
            "idoffer": 3,
            "idproduct": 21,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "10000.0000",
            "sumitemsoffer": "20000.0000",
            "differenceoffer": "10000.0000",
            "infavor": false,
            "itemsoffer": [
                {
                    "idpublication": 17,
                    "nameproduct": "Gorros para bebés",
                    "status": 17,
                    "marketvalue": "10000.0000"
                },
                {
                    "idpublication": 15,
                    "nameproduct": "Gorros para bebés",
                    "status": 15,
                    "marketvalue": "10000.0000"
                }
            ]
        },
        {
            "idoffer": 4,
            "idproduct": 22,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "40000.0000",
            "sumitemsoffer": "20000.0000",
            "differenceoffer": "20000.0000",
            "infavor": true,
            "itemsoffer": [
                {
                    "idpublication": 17,
                    "nameproduct": "Gorros para bebés",
                    "status": 17,
                    "marketvalue": "10000.0000"
                },
                {
                    "idpublication": 15,
                    "nameproduct": "Gorros para bebés",
                    "status": 15,
                    "marketvalue": "10000.0000"
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
 *             {
    "success": true,
    "status": "200",
    "data": [
        {
            "idoffer": 4,
            "idproduct": 22,
            "nameoffer": "gusuario12",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "40000.0000",
            "sumitemsoffer": "20000.0000",
            "differenceoffer": "20000.0000",
            "infavor": true,
            "itemsoffer": [
                {
                    "idpublication": 17,
                    "status": 1,
                    "marketvalue": "10000.0000"
                },
                {
                    "idpublication": 15,
                    "status": 1,
                    "marketvalue": "10000.0000"
                }
            ]
        }
    ],
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
    check('typePublication', 'El idPublication es obligatorio').not().isEmpty().exists(),
    check('idPublication', 'El IdProduct es obligatorio').not().isEmpty().exists()
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
 *       {
    "success": true,
    "status": "200",
    "data": [
        {
            "idoffer": 2,
            "idproduct": 21,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "10000.0000",
            "sumitemsoffer": "0.0000",
            "differenceoffer": "0.0000",
            "infavor": false,
            "itemsoffer": []
        },
        {
            "idoffer": 3,
            "idproduct": 21,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "10000.0000",
            "sumitemsoffer": "20000.0000",
            "differenceoffer": "10000.0000",
            "infavor": false,
            "itemsoffer": [
                {
                    "idpublication": 17,
                    "nameproduct": "Gorros para bebés",
                    "status": 17,
                    "marketvalue": "10000.0000"
                },
                {
                    "idpublication": 15,
                    "nameproduct": "Gorros para bebés",
                    "status": 15,
                    "marketvalue": "10000.0000"
                }
            ]
        },
        {
            "idoffer": 4,
            "idproduct": 22,
             "namepublication": "Varidades",
            "observation": "Podemos hacer trato y la diferencia en efectivo",
            "valorpublication": "40000.0000",
            "sumitemsoffer": "20000.0000",
            "differenceoffer": "20000.0000",
            "infavor": true,
            "itemsoffer": [
                {
                    "idpublication": 17,
                    "nameproduct": "Gorros para bebés",
                    "status": 17,
                    "marketvalue": "10000.0000"
                },
                {
                    "idpublication": 15,
                    "nameproduct": "Gorros para bebés",
                    "status": 15,
                    "marketvalue": "10000.0000"
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




module.exports = router;