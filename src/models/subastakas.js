const pool = require('../config/database');
const ProductModel = require('../models/product.js');
const chatroomsModel = require('../models/chatrooms.js');
const notificationModel = require('../models/notifications.js');
const UsersModel = require('../models/users.js');
const sha1 = require('sha1');
const date = require('date-and-time');
let subastakasModel = {};


//CERAR UNA OFERTA SOBRE UNA PUBLICACIÓN
subastakasModel.NewOffer = (OfferData, IdOfferData) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            // console.log(OfferData);
            // console.log(IdOfferData);
            pool.query(
                'INSERT INTO offers SET ?', [OfferData],
                async (err, result) => {
                     console.log(result);
                    console.log(result.insertId);
                    if (err) {
                        resolve({
                            'error': err,
                            'msg': "Error en la consulta"
                        })
                    } else {

                        if (IdOfferData.length != 0) {
                            for (var atr2 in IdOfferData) {
                                pool.query(
                                    'INSERT INTO offersproductservices (idpublication,idoffers) value( ?, ?) ', [
                                    IdOfferData[atr2],
                                    result.insertId
                                ],
                                    async (err, result2) => {
                                        //console.log(resut);
                                        if (err) {
                                            resolve({
                                                'error': err
                                            })
                                        } else {


                                            /////
                                            // console.log("result");
                                            // console.log(result);
                                            let respCrearPush = {};
                                            let idUserPublication = {};
                                            let ValorOferta = {};
                                            let idrelation = OfferData.idproduct;
                                            let idOferta = result.insertId;
                                            console.log(idOferta);
                                            let TypeNotification = 2;

                                            ValorOferta = await subastakasModel.CalculoValorOferta(idOferta);
                                            idUserPublication = await UsersModel.DataUserPublication(idrelation);
                                            console.log(idUserPublication);
                                            console.log(ValorOferta);
                                            let CalValorOferta = ValorOferta.result[0].cvalorOferta;
                                            let UserPublication = idUserPublication.result[0].UserPublication;
                                            let tokenpush = idUserPublication.result[0].tokenpush;
                                            let fullname = idUserPublication.result[0].NameUser;
                                            let nameProducto = idUserPublication.result[0].nameProducto;
                                            let marketvalue = idUserPublication.result[0].marketvalue;
                                            let titulo = "Haz recibido una  oferta potencial para subastakear";
                                            let detalles = "¡En hora buena " + fullname + "! tú Subastakas  <<" + nameProducto + ">> tiene una oferta por valor comercial de " + CalValorOferta;
                                            // console.log("idUserPublication.tokenpush");
                                            console.log(detalles);
                                            // //console.log(idUserPublication);
                                            // console.log("idUserPublication.tokenpush");

                                            respCrearPush = await notificationModel.cearnotificacion(TypeNotification, idrelation, UserPublication, titulo, detalles, idOferta);

                                            ////////

                                            if (respCrearPush.result) {
                                                //console.log(respCrearPush.result.insertId);

                                                resolve({
                                                    'result': result,
                                                    'idOferta': idOferta,
                                                    'idNotificacion': respCrearPush.result.insertId,
                                                    'idrelation': idrelation,
                                                    'TypeNotification': TypeNotification,
                                                    'UserPublication': UserPublication,
                                                    'tokenpush': tokenpush,
                                                    'titulo': titulo,
                                                    'detalles': detalles
                                                })
                                            } else {
                                                resolve({
                                                    'error': 'Error! al crear la notificación'
                                                })
                                            }  ///
                                            resolve({
                                                'result': result
                                            })

                                        }

                                    }
                                )

                            }//

                        }//



                    }

                }
            )
            //return resultado;
        }
    })
};

///CALCULAR EL VALOR DE LA OFERTA
subastakasModel.CalculoValorOferta = (idOferta, callback) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                'SELECT SUM(p.marketvalue) AS cvalorOferta FROM offers AS o INNER JOIN offersproductservices AS ops ON o.id=ops.idoffers INNER JOIN product AS p ON ops.idpublication=p.id WHERE o.id=' + idOferta + ' GROUP BY o.id',
                (err, result) => {
                    // console.log(err);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result);
                        resolve({
                            'result': result
                        })
                    }

                }
            )
    }
    )


};


module.exports = subastakasModel;