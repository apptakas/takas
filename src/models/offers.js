const pool = require('../config/database');
const ProductModel = require('../models/product.js');
const chatroomsModel = require('../models/chatrooms.js');
const notificationModel = require('../models/notifications.js');
const UsersModel = require('../models/users.js');
const sha1 = require('sha1');
const date = require('date-and-time');
let OffersModel = {};

//CERAR UNA OFERTA SOBRE UNA PUBLICACIÓN
OffersModel.NewOffer = (OfferData, IdOfferData, callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {

            pool.query(
                'INSERT INTO offers SET ?', [OfferData],
                async (err, result) => {
                    console.log(result);
                    //console.log(result.insertId);
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
                                    async (err, resut) => {
                                        //console.log(resut);
                                        if (err) {
                                            resolve({
                                                'error': err
                                            })
                                        } else {


                                            /////
                                            let respCrearPush = {};
                                            let idUserPublication = {};
                                            let ValorOferta = {};
                                            let idrelation = OfferData.idproduct;
                                            let idOferta = result.insertId;
                                            console.log(idOferta);
                                            let TypeNotification = 2;

                                            ValorOferta = await OffersModel.CalculoValorOferta(idOferta);
                                            idUserPublication = await UsersModel.DataUserPublication(idrelation);
                                            console.log(ValorOferta);
                                            let CalValorOferta = ValorOferta.result[0].cvalorOferta;
                                            let UserPublication = idUserPublication.result[0].UserPublication;
                                            let tokenpush = idUserPublication.result[0].tokenpush;
                                            let fullname = idUserPublication.result[0].NameUser;
                                            let nameProducto = idUserPublication.result[0].nameProducto;
                                            let marketvalue = idUserPublication.result[0].marketvalue;
                                            let titulo = "Haz recibido un takasteo potencial";
                                            let detalles = "¡En hora buena " + fullname + "! tú publicación  <<" + nameProducto + ">> tiene una oferta por valor comercial de " + CalValorOferta;
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
                                            }  ///s  





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
OffersModel.CalculoValorOferta = (idOferta, callback) => {
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

///////


//ListOfertas  - Obtenemos lista de ofertas sobre una publicación
OffersModel.ListOffer = (OfferData, status) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let ListItemsOffer = {};
            let consulta = "";
            if (status != null) {
                consulta = "SELECT  o.id,o.iduser,o.publication,o.idproduct,ip.url,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name AS namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE o.idproduct=" + OfferData.idproduct + " AND o.publication=" + OfferData.publication + " AND o.status=" + status;
            }
            else {
                consulta = "SELECT  o.id,o.iduser,o.publication,o.idproduct,ip.url,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name AS namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE o.idproduct=" + OfferData.idproduct + " AND o.publication=" + OfferData.publication;
            }
            pool.query(
                consulta,
                async (err, result) => {

                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result);
                        ListItemsOffer = await OffersModel.recorridOfertas(result);
                        resolve({
                            'result': ListItemsOffer
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};


OffersModel.recorridOfertas = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        let oferta = 0;
        for (const element of result) {
            if (oferta != element.id) {
                arr.push(await OffersModel.ListItemsOffers(element));
                oferta = element.id;
            }
        }
        resolve(arr)
    }
    )

}


OffersModel.ListItemsOffers = (element) => {
    return new Promise((resolve, reject) => {
        let SumItemsOffer = 0;
        let DiferenciaOffer = 0;
        let Afavor = false;
        let detalleProduct = {};
        let img = {};
        let sala = {};
        pool.query(
            'SELECT ops.idoffers,ops.idpublication AS idproduct,ip.url,ops.status,p.name,p.marketvalue,p.datecreated AS datepublication,p.iduser,p.subcategory,p.name,p.details,p.typemoney,p.typepublication,p.status  FROM `offersproductservices` AS ops INNER JOIN product AS p ON ops.idpublication=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE idoffers=' + element.id,
            async (err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else {
                    //  console.log(result2); 
                    //  console.log(result2.length);
                    let ListItemsOffers = [];
                    let idItems = 0;
                    //let SumItemsOffer=0;
                    if (result2.length > 0) {
                        // console.log(SumItemsOffer);
                        for (var atr2 in result2) {
                            // "iduser": result2[0].iduser,
                            let statuspo = 3;

                            if (result2[atr2].status == 23) {
                                statuspo = 0
                            }
                            if (result2[atr2].status == 8) {
                                statuspo = 1
                            }
                            if (result2[atr2].status == 7) {
                                statuspo = 2
                            }
                            if (result2[atr2].status == 6) {
                                statuspo = 3
                            }


                            if (idItems != result2[atr2].idproduct) {

                                idoffer = result2[atr2].id;
                               
                                    ListItemsOffers.push({
                                        "idoffer": result2[atr2].id,
                                        "idpublication": result2[atr2].idproduct,
                                        "imgpublicacion": result2[atr2].url,
                                        "nameproduct": result2[atr2].name,
                                        "status": statuspo,
                                        "img": result2[atr2].url,
                                        "marketvalue": Number.parseFloat(result2[atr2].marketvalue).toFixed(4)
                                    });

                                idItems = result2[atr2].idproduct;
                                SumItemsOffer = parseInt(SumItemsOffer) + parseInt(result2[atr2].marketvalue);
                                // console.log(SumItemsOffer);
                            }


                        }; // fin for

                        // duplicadOferta=result2[atr2].id;    
                        // console.log("element.id");                 
                        // console.log(element.id);                 
                        // console.log("result2[atr2].idoffers");                 
                        // console.log(result2[atr2].idoffers); 


                        if (SumItemsOffer > element.ValorPublication) {
                            DiferenciaOffer = SumItemsOffer - element.ValorPublication;
                            Afavor = false;
                        } else {
                            DiferenciaOffer = element.ValorPublication - SumItemsOffer;
                            Afavor = true;
                        }

                    };
                    // console.log("result2");
                    // console.log(result2);

                    //console.log(ListItemsOffers);
                    detalleProduct = await ProductModel.armaresult(result2);
                    // console.log("detalleProduct");
                    // console.log(detalleProduct);
                    //let  idSala=null;
                    img = await chatroomsModel.ListImagesProduct(element.idproduct);
                    sala = await chatroomsModel.idSala(element.id);
                    idSala = sala.idSala
                    //console.log(sala);
                    let statuso = 3;

                    if (element.status == 23) {
                        statuso = 0
                    }
                    if (element.status == 8) {
                        statuso = 1
                    }
                    if (element.status == 7) {
                        statuso = 2
                    }
                    if (element.status == 6) {
                        statuso = 3
                    }
                    if(element.publication==3){
                        resolve({
                            "idoffer": element.id,
                            "iduseroffer": element.iduser,
                            "statusoffer": statuso,
                            "idSala": idSala,
                            "idproduct": element.idproduct,
                            "namepublication": element.namePublication,
                            "img": img.ImagesProduct,
                            "observation": element.observation,
                            "valorpublication": Number.parseFloat(element.ValorPublication).toFixed(4),
                            "sumitemsoffer": Number.parseFloat(SumItemsOffer).toFixed(4),
                            "differenceoffer": Number.parseFloat(DiferenciaOffer).toFixed(4),
                            "montoffert":element.montoffert,
                            "infavor": Afavor,
                            "itemsoffer": ListItemsOffers
                        });
                }
                else{
                    resolve({
                        "idoffer": element.id,
                        "iduseroffer": element.iduser,
                        "statusoffer": statuso,
                        "idSala": idSala,
                        "idproduct": element.idproduct,
                        "namepublication": element.namePublication,
                        "img": img.ImagesProduct,
                        "observation": element.observation,
                        "valorpublication": Number.parseFloat(element.ValorPublication).toFixed(4),
                        "sumitemsoffer": Number.parseFloat(SumItemsOffer).toFixed(4),
                        "differenceoffer": Number.parseFloat(DiferenciaOffer).toFixed(4),
                        "infavor": Afavor,
                        "itemsoffer": ListItemsOffers
                    });
                }
                }

            })
    })
}




//DETALLES DE LA OFERTA  - Obtenemos lista de detalles de una oferta sobre una publicación
OffersModel.DetailsOffer = (OfferData, UserConsulta) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            //let ListItemsOffer={};
            pool.query(
                'SELECT o.id,o.iduser,o.dateoffers,o.montoffert,o.idproduct,p.name as namePublication,o.idauction,o.observation,o.publication,o.status,u.fullname AS nameoffer,p.marketvalue,p.marketvalue as ValorPublication FROM offers AS o   INNER JOIN users AS u ON u.id=o.iduser   INNER JOIN product AS p ON p.`id`=o.idproduct  WHERE o.id= ? AND o.publication= ?', [
                OfferData.id,
                OfferData.publication],
                async (err, result) => {

                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result);
                        ListItemsOffer = await OffersModel.recorridOfertas(result);
                        resolve({
                            'result': ListItemsOffer
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};


OffersModel.recorridOferta = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];

        for (const element of result) {
            arr.push(await OffersModel.ListItemsOffer(element));
        }
        resolve(arr)
    }
    )

}

OffersModel.ListItemsOffer = (element) => {
    return new Promise((resolve, reject) => {
        let SumItemsOffer = 0;
        let DiferenciaOffer = 0;
        let Afavor = false;
        pool.query(
            'SELECT ops.idoffers,ops.idpublication,p.name,ops.status,p.marketvalue FROM `offersproductservices` AS ops  INNER JOIN product AS p ON ops.idpublication=p.id WHERE idoffers=' + element.id,
            (err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else {
                    console.log(result2);
                    console.log(result2.length);
                    let ListItemsOffers = [];
                    if (result2.length > 0) {
                        for (var atr2 in result2) {
                            // "iduser": result2[0].iduser,
                            ListItemsOffers.push({
                                "idpublication": result2[atr2].idpublication,
                                "nameproduct": result2[atr2].name,
                                "nameproduct": result2[atr2].name,
                                "status": 1, //result2[atr2].status,
                                "marketvalue": Number.parseFloat(result2[atr2].marketvalue).toFixed(4)
                            });
                            SumItemsOffer += result2[atr2].marketvalue;

                        };
                        if (SumItemsOffer > element.marketvalue) {
                            DiferenciaOffer = SumItemsOffer - element.marketvalue;
                            Afavor = false;
                        } else {
                            DiferenciaOffer = element.marketvalue - SumItemsOffer;
                            Afavor = true;
                        }

                    };

                    //console.log(ListItemsOffers);
                    resolve({
                        "idoffer": element.id,
                        "statusoffer": element.status,
                        "idproduct": element.idproduct,
                        "namepublication": element.name,
                        "observation": element.observation,
                        "valorpublication": Number.parseFloat(element.marketvalue).toFixed(4),
                        "sumitemsoffer": Number.parseFloat(SumItemsOffer).toFixed(4),
                        "differenceoffer": Number.parseFloat(DiferenciaOffer).toFixed(4),
                        "infavor": Afavor,
                        "itemsoffer": ListItemsOffers
                    });
                }

            })
    })
}




//ListOfertas  - Obtenemos lista de ofertas sobre una publicación
OffersModel.ListMyOffer = (OfferData, status) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {

            let ListItemsOffer = {};
            let consulta = "";
            if (status != null) {
                consulta = "SELECT o.id,o.iduser,o.publication,o.idproduct,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name as namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id  WHERE o.iduser='" + OfferData.iduser + "' AND o.publication=" + OfferData.publication + " AND o.status=" + status;
            }
            else {
                consulta = "SELECT o.id,o.iduser,o.publication,o.idproduct,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name as namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id  WHERE o.iduser='" + OfferData.iduser + "' AND o.publication=" + OfferData.publication;

            }

            pool.query(consulta,
                async (err, result) => {

                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result);
                        ListItemsOffer = await OffersModel.recorridOfertas(result);
                        resolve({
                            'result': ListItemsOffer
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

//CAMBIAR EL ESTADO DE UNA OFERTA- OFERTAS 
OffersModel.ChangeStatusOffer = (OfferData, FlagStatusOffer, callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let FindDatOffer = {};
            let idUserPublication = {};
            let idUserOferta = {};
            let statusOffer = OfferData.status;
            let idOferta = OfferData.id;
            let idUser = OfferData.idUser;
            let respCrearPush = {};
            console.log(OfferData);
            pool.query(
                'UPDATE  offers SET  status= ? WHERE id= ?', [
                OfferData.status,
                OfferData.id
            ],
                async (err, result) => {
                    console.log(err);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {

                        //console.log("prueba");
                        /////**********creamos notificación y preparamos datos para notificación push************//////////////

                        //idUserPublication= await UsersModel.DataUserPublication(idrelation);
                        let TypeNotification = 2;

                        //TOMAMOS DATOS DE LA OFERTA
                        idUserOferta = await UsersModel.DataUserOferta(idOferta);
                        console.log(idUserOferta);
                        //CALCULAMOS VALOR DE LA OFERTA
                        ValorOferta = await OffersModel.CalculoValorOferta(idOferta);
                        //console.log(idUserOferta);
                        //console.log(ValorOferta);
                        //ID DE LA PUBLICACIÓN EN RELACIÓN 
                        let idrelation = idUserOferta.idproduct;
                        //console.log(idUserOferta.idproduct);
                        //DATOS DE LA PUBICACIÓN
                        idUserPublication = await UsersModel.DataUserPublication(idrelation);
                        //DATOS EN GENERAL PARA MENSAJES
                        //ARMAMOS EL MENSAJE
                        let CalValorOferta = ValorOferta.result[0].cvalorOferta;
                        //let UserPublication=idUserPublication.result[0].UserPublication;
                        let UserPublication = idUserOferta.result[0].UserOferta;
                        let tokenpush = idUserOferta.result[0].tokenpush;
                        let fullname = idUserOferta.result[0].NameUser;
                        let nameProducto = idUserPublication.result[0].nameProducto;
                        let marketvalue = idUserPublication.result[0].marketvalue;
                        let titulo = "";
                        let detalles = "";

                        if (FlagStatusOffer == 2) {

                            if (statusOffer == 7) {
                                titulo = "POSIBLE TAKASTEO!";
                                detalles = "¡Falta sólo un paso " + fullname + "! tú Oferta a la publicación <<" + nameProducto + ">> ha sido Aceptada, habilitamos un chat para que acuerden los últimos detalles antes del match";
                            }
                            respCrearPush = await notificationModel.cearnotificacion(TypeNotification, idrelation, UserPublication, titulo, detalles, idOferta);
                            //console.log(respCrearPush);
                            ///////////////////////////////////////////
                            FindDatOffer = await OffersModel.FindDatOffer(OfferData);

                            //console.log(FindDatOffer);
                            //console.log(FindDatOffer.error);
                            if (FindDatOffer.error) {
                                resolve({
                                    'error': FindDatOffer.error
                                })
                            }

                        } // if si es aceptada la oferta
                        //SI LA OFERTA ES RECHAZADA
                        if (FlagStatusOffer == 1) {

                            if (statusOffer == 8) {
                                titulo = "Oferta rechazada, sigue intentando y tendrás éxito!";
                                detalles = "¡No te preocupes " + fullname + "! tú Oferta a la publicación <<" + nameProducto + ">> ha sido rechazada, puedes intentar con otros productos de interés para el dueño de la publicación";
                            }
                            respCrearPush = await notificationModel.cearnotificacion(TypeNotification, idrelation, UserPublication, titulo, detalles, idOferta);

                        }

                        resolve({
                            'result': result,
                            'sala': FindDatOffer.idSala,
                            'idNotificacion': respCrearPush.insertId,
                            'TypeNotification': TypeNotification,
                            'UserPublication': UserPublication,
                            'idOferta': idOferta,
                            'idrelation': idrelation,
                            'tokenpush': tokenpush,
                            'titulo': titulo,
                            'detalles': detalles
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};



//CAMBIAR EL ESTADO DE UNA OFERTA- OFERTAS 
OffersModel.FindDatOffer = (OfferData, callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let DataSalas = {};
            let IdSAla = "";
            let now = new Date();
            let hoy = date.format(now, 'YYYY-MM-DD HH:mm:ss');
            pool.query(
                'SELECT o.iduser AS userOffer,p.iduser AS userPublication,p.id AS idPublication FROM offers AS o INNER JOIN offersproductservices AS ops ON o.id=ops.idoffers INNER JOIN product AS p ON o.idproduct=p.id WHERE o.id=? limit 1', [
                OfferData.id
            ],
                async (err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        IdSAla = sha1(result[0].userOffer + result[0].userPublication + result[0].idPublication + hoy);
                        console.log("IdSAla");
                        // console.log(IdSAla);
                        // console.log(result[0].userOffer);
                        // console.log(result[0].userPublication);
                        DataSalas = await chatroomsModel.newChatRooms(IdSAla, result[0].userOffer, result[0].userPublication, result[0].idPublication, hoy, OfferData.id, 24);
                        //console.log("DataSalas");
                        //console.log(DataSalas.error);
                        if (DataSalas.error) {
                            resolve({
                                'error': DataSalas.error
                            })
                        }
                        else {
                            resolve({
                                'result': result,
                                'idSala': IdSAla
                            })
                        }
                    }

                }
            )
            //return resultado;
        }
    })
};



//OBTENER CATIDAD  NOTIFICACIONES SEGÚN BANDERA 
notificationModel.cantnOfertasPublications = (idPublication) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT COUNT(*) AS CantOfertas FROM product AS p INNER JOIN offers AS o ON p.id=o.idproduct WHERE p.id=" + idPublication + " AND o.status<>23 AND o.status<>8",
            (err2, result2) => {

                //console.log(element.id);   
                //console.log(element.namec);   

                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'error': err2
                    })
                } else {
                    console.log(result2[0].CantOfertas);
                    // let CantOfertas=0;  
                    // if(result2[0]!=undefined){
                    //     if(result2[0].id){
                    //         CantOfertas=result2[0].CantOfertas;
                    //     }
                    // }
                    CantOfertas = result2[0].CantOfertas;
                    resolve({
                        'result': 'Ok',
                        'CantOfertas': CantOfertas
                    });
                }


            })
    })
}




module.exports = OffersModel;