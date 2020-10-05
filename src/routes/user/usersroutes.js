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
 *     {
    "success": true,
    "status": "200",
    "msg": "Usuario registrado con éxito"
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
    "status": "200",
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
    "status": "500",
    "msg": "Error al Autenticar"
}
 */
router.post('/autenticar', [
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists(),
    check('passwordUser', 'El passworduser el obligatorio').not().isEmpty().exists(),
    check('emailUser', 'El emailuser el obligatorio').isEmail().exists()
], async (req, res) => {


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
 *     {
    "{
    "success": true,
    "status": "200",
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
    "status": "500",
    "msg": "Error al Autenticar"
}
 */
router.post('/gautenticar', [
    check('idfirebaseUser', 'El idfirebase el obligatorio').not().isEmpty().exists(),
    check('emailUser', 'El emailuser el obligatorio').isEmail().exists()
], async (req, res) => {


    let response = await userController.GAutenticar(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})
/**
 * @api {post} /user/LisTypePublication 1 LisTypePublication
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
    "status": "200",
    "data": [
        {
            "id": 1,
            "name": "Takastear",
            "description": "Publicar Productos",
            "status": 1
        },
        {
            "id": 2,
            "name": "ServiTakastear",
            "description": "Publicar Servicios",
            "status": 1
        },
        {
            "id": 3,
            "name": "SubasTakear",
            "description": "Publicar Subastas",
            "status": 1
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
    "status": "500",
    "msg": "Error al Listar Categoría"
}
 */
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
    "status": "200",
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
                    "status": 1
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
                    "status": 1
                },
                {
                    "idsc": 3,
                    "name": "Vehículos",
                    "icon": "car",
                    "category": 4,
                    "status": 1
                },
                {
                    "idsc": 4,
                    "name": "Alimentos y Bebidas",
                    "icon": "eat",
                    "category": 4,
                    "status": 1
                },
                {
                    "idsc": 5,
                    "name": "Mascotas",
                    "icon": "dog",
                    "category": 4,
                    "status": 1
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
    "status": "500",
    "msg": "Error al Listar Categoría"
}
 */
router.get('/listcategory', rutasProtegidas, [
    check('typepublicCategory', 'Se requiere el tipo de publicación').not().isEmpty().exists()
], async (req, res) => {


    let response = await userController.ListCategory(req.body);

    if (response.status == 'ko') {
        return res.status(500).json({ error: 'Error' })
    }
    //console.log(response);
    return res.status(response.data.status).json(response.data)

})



module.exports = router;