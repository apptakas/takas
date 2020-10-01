const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasProtegidas');
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
    "msg": "Domiciliario registrado con éxito"
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
 * @apiParam {varchar}  idfirebase  required.
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
 * @api {post} /user/listcategory 1 listcategory
 * @apiName listcategory - Listar Categorias filtrado por tipo de publicación
 * @apiGroup Category
 * 
 *
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
            "name": "Bebés",
            "description": null,
            "typepublication": 1,
            "iconurl": "https://n9.cl/c1z78"
        },
        {
            "id": 2,
            "name": "Arte",
            "description": null,
            "typepublication": 1,
            "iconurl": "https://n9.cl/pbmd1"
        },
        {
            "id": 3,
            "name": "Música",
            "description": null,
            "typepublication": 1,
            "iconurl": "https://n9.cl/hgan"
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