const pool = require('../config/database');
const ProductModel = require('../models/product.js');
const chatroomsModel = require('../models/chatrooms.js');
const sha1 = require('sha1');
const date = require('date-and-time');
let OffersModel = {};

//CERAR UNA OFERTA SOBRE UNA PUBLICACIÓN
OffersModel.NewOffer = (OfferData,IdOfferData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'INSERT INTO offers SET ?',[OfferData],
                (err, resut) => {
                    console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        if(IdOfferData.length!=0){
                            for(var atr2 in IdOfferData){  
                                pool.query(
                                    'INSERT INTO offersproductservices (idpublication,idoffers) value( ?, ?) ', [
                                        IdOfferData[atr2],
                                        resut.insertId
                                    ],
                                    (err, resut) => {
                                        //console.log(resut);
                                        if (err) {
                                            resolve({
                                                'error': err
                                            })
                                        } else {
                                            resolve({
                                                'result': resut
                                            })                                       
                                        }
                    
                                    }
                                )
                                
                            }
                        }
                       
                    }

                }
            )
            //return resultado;
        }
    })
};



//ListOfertas  - Obtenemos lista de ofertas sobre una publicación
OffersModel.ListOffer = (OfferData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let ListItemsOffer={};
            pool.query(
                'SELECT o.id,o.iduser,o.publication,o.idproduct,ip.url,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name AS namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE o.idproduct= ? AND o.publication= ?',[
                    OfferData.idproduct,
                OfferData.publication],
                async(err, result) => {
                    
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

        for (const element of result) {
            arr.push(await OffersModel.ListItemsOffers(element));
        }
        resolve(arr)
    }
    )

} 

OffersModel.ListItemsOffers = (element) => {
    return new Promise((resolve, reject) => {
        let SumItemsOffer=0;
        let DiferenciaOffer=0;
        let Afavor=false;
        let detalleProduct={};
        let img={};
        pool.query(
            'SELECT ops.idoffers,ops.idpublication AS idproduct,ip.url,ops.status,p.name,p.marketvalue,p.datecreated AS datepublication,p.iduser,p.subcategory,p.name,p.details,p.typemoney,p.typepublication,p.status  FROM `offersproductservices` AS ops INNER JOIN product AS p ON ops.idpublication=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE idoffers='+element.id,
            async(err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                 console.log(result2); 
                 console.log(result2.length);
                 let ListItemsOffers= []; 
                if(result2.length>0){
                    for(var atr2 in result2){
                    // "iduser": result2[0].iduser,
                            ListItemsOffers.push({
                                "idoffer": result2[atr2].id,
                                "idpublication": result2[atr2].idproduct,
                                "imgpublicacion": result2[atr2].url,
                                "nameproduct": result2[atr2].name,
                                "status": result2[atr2].status,
                                "img": result2[atr2].url,
                                "marketvalue": Number.parseFloat(result2[atr2].marketvalue).toFixed(4)
                            });
                            SumItemsOffer+=result2[atr2].marketvalue;
                        
                    }; 
                    if(SumItemsOffer>element.ValorPublication){
                         DiferenciaOffer= SumItemsOffer-element.ValorPublication;
                         Afavor=false;
                    }else{
                        DiferenciaOffer= element.ValorPublication-SumItemsOffer;
                        Afavor=true;
                    }
                    
                }; 
                console.log("result2");
                console.log(result2);

                //console.log(ListItemsOffers);
                detalleProduct = await ProductModel.armaresult(result2);  
                console.log("detalleProduct");
                console.log(detalleProduct);

                img=await chatroomsModel.ListImagesProduct(element.idproduct);
                resolve({                    
                    "idoffer": element.id,
                    "idproduct": element.idproduct,
                    "namepublication": element.namePublication,
                    "img":img.ImagesProduct,
                    "observation": element.observation,
                    "valorpublication": Number.parseFloat(element.ValorPublication).toFixed(4),
                    "sumitemsoffer":Number.parseFloat(SumItemsOffer).toFixed(4),
                    "differenceoffer":Number.parseFloat(DiferenciaOffer).toFixed(4),
                    "infavor":Afavor,
                    "itemsoffer": ListItemsOffers
                });
            }

            })
    })
}




//DETALLES DE LA OFERTA  - Obtenemos lista de detalles de una oferta sobre una publicación
OffersModel.DetailsOffer = (OfferData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            //let ListItemsOffer={};
            pool.query(
                'SELECT o.id,o.dateoffers,o.idproduct,o.idproduct,o.idauction,o.observation,o.publication,o.status,u.fullname AS nameoffer,p.marketvalue FROM offers AS o   INNER JOIN users AS u ON u.id=o.iduser   INNER JOIN product AS p ON p.`id`=o.idproduct  WHERE o.id= ? AND o.publication= ?',[
                    OfferData.id,
                OfferData.publication],
                async(err, result) => {
                    
                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result);
                        ListItemsOffer = await OffersModel.recorridOferta(result);
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
        let SumItemsOffer=0;
        let DiferenciaOffer=0;
        let Afavor=false;
        pool.query(
            'SELECT ops.idoffers,ops.idpublication,ops.status,p.marketvalue FROM `offersproductservices` AS ops  INNER JOIN product AS p ON ops.idpublication=p.id WHERE idoffers='+element.id,
            (err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                 console.log(result2); 
                 console.log(result2.length);
                 let ListItemsOffers= []; 
                if(result2.length>0){
                    for(var atr2 in result2){
                    // "iduser": result2[0].iduser,
                            ListItemsOffers.push({
                                "idoffer": result2[atr2].idoffer,
                                "idpublication": result2[atr2].idpublication,
                                "status": 1, //result2[atr2].status,
                                "marketvalue": Number.parseFloat(result2[atr2].marketvalue).toFixed(4)
                            });
                            SumItemsOffer+=result2[atr2].marketvalue;
                        
                    }; 
                    if(SumItemsOffer>element.marketvalue){
                         DiferenciaOffer= SumItemsOffer-element.marketvalue;
                         Afavor=false;
                    }else{
                        DiferenciaOffer= element.marketvalue-SumItemsOffer;
                        Afavor=true;
                    }
                    
                }; 

                //console.log(ListItemsOffers);
                resolve({                    
                    "idoffer": element.id,
                    "idproduct": element.idproduct,
                    "nameoffer": element.nameoffer,
                    "observation": element.observation,
                    "valorpublication": Number.parseFloat(element.marketvalue).toFixed(4),
                    "sumitemsoffer":Number.parseFloat(SumItemsOffer).toFixed(4),
                    "differenceoffer":Number.parseFloat(DiferenciaOffer).toFixed(4),
                    "infavor":Afavor,
                    "itemsoffer": ListItemsOffers
                });
            }

            })
    })
}




//ListOfertas  - Obtenemos lista de ofertas sobre una publicación
OffersModel.ListMyOffer = (OfferData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let ListItemsOffer={};
            pool.query(
                'SELECT o.id,o.iduser,o.publication,o.idproduct,o.idservice,o.idauction,o.observation,o.status,o.dateoffers,p.datepublication,p.marketvalue AS ValorPublication,p.name as namePublication FROM offers AS o INNER JOIN product AS p ON o.idproduct=p.id  WHERE o.iduser= ? AND o.publication= ? ',[
                    OfferData.iduser,
                OfferData.publication],
                async(err, result) => {
                    
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
OffersModel.ChangeStatusOffer = (OfferData,FlagStatusOffer,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let FindDatOffer={};
            pool.query(
                'UPDATE  offers SET  status= ? WHERE id= ?',[
                    OfferData.status,
                    OfferData.id
                ],
                async(err, result) => {
                   // console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else { 
                        if(FlagStatusOffer==2) {
                            //console.log("prueba");
                            FindDatOffer=await OffersModel.FindDatOffer(OfferData);
                            //console.log(FindDatOffer);
                            //console.log(FindDatOffer.error);
                            if(FindDatOffer.error){
                                resolve({
                                    'error': FindDatOffer.error
                                })
                            }

                        } 
                                             
                        resolve({
                            'result': result,
                            'sala':FindDatOffer.idSala
                        })                        
                    }

                }
            )
            //return resultado;
        }
    })
};



//CAMBIAR EL ESTADO DE UNA OFERTA- OFERTAS 
OffersModel.FindDatOffer = (OfferData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let DataSalas={};
            let IdSAla="";
            let now = new Date();
            let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
            pool.query(
                'SELECT o.iduser AS userOffer,p.iduser AS userPublication,p.id AS idPublication FROM offers AS o INNER JOIN offersproductservices AS ops ON o.id=ops.idoffers INNER JOIN product AS p ON o.idproduct=p.id WHERE o.id=? limit 1',[
                    OfferData.id
                ],
                async(err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else { 
                        IdSAla=sha1(result[0].userOffer+result[0].userPublication+result[0].idPublication+hoy);
                        // console.log("IdSAla");
                        // console.log(IdSAla);
                        // console.log(result[0].userOffer);
                        // console.log(result[0].userPublication);
                        DataSalas = await chatroomsModel.newChatRooms(IdSAla,result[0].userOffer,result[0].userPublication,result[0].idPublication,hoy,OfferData.id);                      
                        //console.log("DataSalas");
                        //console.log(DataSalas.error);
                        if (DataSalas.error) {
                            resolve({
                                'error': DataSalas.error
                            })
                        }
                        else{
                            resolve({
                                'result': result,
                                'idSala':IdSAla
                            }) 
                        }                       
                    }

                }
            )
            //return resultado;
        }
    })
};


module.exports = OffersModel;