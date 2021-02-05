const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const rutasProtegidas = require('../../lib/rutasprotegidas');
const notifications = require('../../lib/notifications.js');
const config = require('../../config/config');
const { check, validationResult } = require('express-validator');
const subastakasController = require('../../controllers/subastakascontroller');
const userController = require('../../controllers/userscontroller');
//app.express();

/**
 * @api {post} /subastakas/newoffer 8 newoffer
 * @apiName newoffer - Crear Oferta
 * @apiGroup Subastakas
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar} idFirebaseUser required.
 * @apiParam {int} idSubastakas required.
 * @apiParam {array}  idsPublications array Int required.
 * @apiParam {varchar} descriptionOffer optional.
 * @apiParam {real} MontOffer optional.
 * 
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Subastakas.
 * @apiSuccess {int} status 200 of the Subastakas.
 * @apiSuccess {string} msg   of the Subastakas.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *             {
    "success": true,
    "status": "200",
    "idoferta": 13,
    "msg": "Oferta creada exitosamente"
}
 *
 * @apiError UserNotFound The id of the Subastakas was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "success": false,
    "status":: "500",
    "error":response.msg,
    "msg": 'Error al intentar crear una Oferta'
}
 **/

//CREAR UNA OFERTA - PUBLICACIÓN
router.post('/newoffer', rutasProtegidas, [
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
    check('idSubastakas', 'El id de la subasta es obligatorio').not().isEmpty().exists(),
    check('idsPublications', 'El idsPublications es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }
        let response = await subastakasController.NewOffer(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);   


        return res.status(response.data.status).json(response.data)
    
    })

       /**
 * @api {post} /subastakas/detailsoffer 9 detailsoffer
 * @apiName detailsoffer - Detalles de la Oferta
 * @apiGroup Subastakas
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {varchar}  idFirebaseUser required.
 * @apiParam {int} typePublication required.
 * @apiParam {int}  idOferta required.
 * 
 * 
 * 
 * @apiSuccess {boolean} success of the Subastakas.
 * @apiSuccess {int} status 200 of the Subastakas.
 * @apiSuccess {string} msg   of the Subastakas.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "success": true,
    "status": "200",
    "data": {
        "idoffer": 16,
        "iduseroffer": "8e7PQpRV7ic4jcCuaMm5DDIIOOv2",
        "statusoffer": 3,
        "idSala": null,
        "idproduct": 59,
        "namepublication": "pueba laptop 60",
        "img": [
            "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-10-23%2014%3A38%3A52.408985.jpg?alt=media&token=391bfb84-ac9f-4353-9384-f57b5117bdbc"
        ],
        "observation": "Arbolito de navidad de 2 metros de altura, viene con bambalinas",
        "valorpublication": "1200000.0000",
        "sumitemsoffer": "300000.0000",
        "differenceoffer": "900000.0000",
        "montoffert": 99999.9999,
        "infavor": true,
        "itemsoffer": [
            {
                "idpublication": 5,
                "imgpublicacion": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-12-16%2014%3A44%3A07.558491.jpg?alt=media&token=fb665fb2-3da3-4c98-bf51-b791839fbc30",
                "nameproduct": "Arbolito de navidad",
                "status": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/takas-a720c.appspot.com/o/products%2F8e7PQpRV7ic4jcCuaMm5DDIIOOv2-2020-12-16%2014%3A44%3A07.558491.jpg?alt=media&token=fb665fb2-3da3-4c98-bf51-b791839fbc30",
                "marketvalue": "300000.0000"
            }
        ]
    },
    "msg": "Detalles de la oferta listado exitosamente"
}
 *
 * @apiError UserNotFound The id of the Subastakas was not found.
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
    check('idFirebaseUser', 'El idFirebaseUser es obligatorio').not().isEmpty().exists(),
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
 * @api {put} /subastakas/changestatusoffersbtk 10 changestatusoffersbtk
 * @apiName changestatusoffersbtk - Cambio de estado de una oferta
 * @apiGroup Subastakas
 * 
 * 
 * @apiHeaderExample {varchar}Content-Type:
 *                 "value": "application/json" 
 * @apiHeaderExample {varchar} access-token:
 *                 {"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ25vcmVFeHBpcmF0aW9uIjp0cnVlLCJpYXQiOjE2MDEwNDkzNjIsImV4cCI6MTYwMTEzNTc2Mn0.-UiJBviqct6ZD-IIa29VeKuaIfd783YXSrPIuveiSkY" }
 *
 *
 * @apiParam {int} idOffer required.
 * @apiParam {int} idUser required.
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
 *   {
    "success": true,
    "status": "200",
    "match": true,
    "sala": "21b2460885e910ed4322f944e810ca9fa35d3105",
    "msg": "Cambio de estatus de una oferta de subastakas se pocesó exitosamente"
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
router.put('/changestatusoffersbtk', rutasProtegidas, [
    check('idOffer', 'El idsPublications es obligatorio').not().isEmpty().exists(),
    check('idUser', 'El idUser es obligatorio').not().isEmpty().exists(),
    check('FlagStatusOffer', 'El FlagStatusOffer es obligatorio').not().isEmpty().exists()
    ],async (req, res) => {
    
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(422).json({ errores: error.array(), msg: 'Error' });
        }        
        let response = await subastakasController.ChangeStatusOfferSbtk(req.body);
    
        if (response.status == 'ko') {
            return res.status(500).json({ error: 'Error' })
        }
        //console.log(response);
        return res.status(response.data.status).json(response.data)
    
    })  

    module.exports = router;
