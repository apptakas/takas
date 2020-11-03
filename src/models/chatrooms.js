const pool = require('../config/database');
const ProductModel = require('../models/product.js');
const OffersModel = require('../models/offers.js');

const date = require('date-and-time');

let chatroomsModel = {};

//Crear una nueva Sala de chat
chatroomsModel.newChatRooms = (IdSAla,userOffer,userPublication,idPublication,hoy,OfferData,callback) => {
       return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'INSERT INTO chatrooms (id,iduserpublication,iduseroffer,idpubliction,idoffer,datecreated,status) values("'+IdSAla+'","'+userPublication+'","'+userOffer+'",'+idPublication+','+OfferData+',"'+hoy+'",24)',
                (err, result) => {
                    //console.log(err);
                   // console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({
                            'result': result
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};


//listDataChatRoom - Listar toda la información de la sala de chat
chatroomsModel.listDataChatRoom = (idSala,callback) => {
    return new Promise((resolve, reject) => {
     if (pool) {
        let armaresult={};
         pool.query(
             'SELECT cr.id AS idSala,cr.datecreated AS creacionSala,cr.idpubliction,p.name AS namePublication,p.marketvalue AS ValorPublication,cr.iduserpublication,u2.fullname AS nameUserPublication, u2.imgurl AS imgUserPublication ,cr.idoffer,cr.iduseroffer AS UserOferta,u.fullname AS nameUserOferta,u.imgurl AS imgUserOferta FROM chatrooms AS cr INNER JOIN users AS u ON cr.iduseroffer=u.id INNER JOIN users AS u2 ON cr.iduserpublication=u2.id INNER JOIN product AS p ON cr.idpubliction=p.id WHERE cr.id="'+idSala+'"',
             async(err, result) => {
                 //console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    armaresult = await chatroomsModel.armaresult(result);  
                     resolve({
                         'result': armaresult
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};

///
chatroomsModel.armaresult = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        try{
            let img={};
            let prefe={};
            //console.log(result);
            for (const element of result) {
                img=await chatroomsModel.ListItemsOffers(element.idpubliction,element.ValorPublication);
                prefe=await chatroomsModel.ListPrefrencesProduct(element.idpubliction);
                ItemOfer=await chatroomsModel.ListItemsOffers(element.idoffer,element.ValorPublication)
                let Precio=Number.parseFloat(element.ValorPublication).toFixed(4);

                let now = new Date();
                let servidor=date.format(now, 'DD/MM/YYYY');
                //let registro=element.registro;
                let registro = new Date(element.creacionSala);
                let regis = date.format(registro, 'DD/MM/YYYY');

                //console.log(now+" - "+registro);

                let comprobar_fecha=date.isSameDay(now, registro); 
                // console.log(comprobar_fecha+" - ");
                // console.log("//////");
                let nuevo=false;
                if (registro == servidor){
                    let nuevo=true;
                }else{
                    let nuevo=false;
                }
                arr.push({
                    "idSala":element.idSala,
                    "datecreated":regis,
                    "idPublicacion": element.idpubliction,                    
                    "namePublication": element.namePublication,
                    "ValorPublication": Number.parseFloat(element.ValorPublication).toFixed(4),
                    "Userpublication": element.iduserpublication,
                    "nameUserPublication": element.nameUserPublication,
                    "imgUserPublication": element.imgUserPublication,
                    "idoferta": element.idoffer,
                    "iduseroferta": element.iduseroffer,
                    "UserOferta": element.UserOferta,
                    "nameUserOferta": element.nameUserOferta,
                    "imgUserOferta": element.imgUserOferta,
                    "ProductImagesPublicacion":img.ImagesProduct,
                    "PreferencesPublicacion":prefe.Preferences,
                    "aFavor":ItemOfer.aFavor,
                    "Valorferta":Number.parseFloat(ItemOfer.Valorferta).toFixed(4),
                    "dieferencia": Number.parseFloat(ItemOfer.DiferenciaOffer).toFixed(4),
                    "ItemOfer":ItemOfer.itemsoffer                    
                });
                
            }
            resolve(arr)
        }
        catch(e){
            console.log(e);
        }
    }
    )

} 


chatroomsModel.ListImagesProduct = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT  url FROM imgproduct WHERE idproduct=? ',[element],
            (err2, result2) => {
                 
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'error': err2
                    })
                } else {     
                    //console.log(result2); 
                    // console.log(result2.length);
                    let ImagesProduct= []; 
                    for(var atr2 in result2){
                    ImagesProduct.push(result2[atr2].url); 
                    };  
                    //console.log(element.idproduct);  
                   // console.log(ImagesProduct);
                    resolve({
                        
                        "ImagesProduct": ImagesProduct
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}
////////
chatroomsModel.idSala = (element) => {
    return new Promise((resolve, reject) => {
        let idsala=null;
        pool.query(
            'SELECT  id FROM chatrooms WHERE idoffer=? ',[element],
            (err2, result2) => {
                 
               // console.log(result2);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'Error': err2
                    })
                } else {     
                    //console.log(result2); 
                    // console.log(result2.length);
                    // let ImagesProduct= []; 
                    // for(var atr2 in result2){
                    // ImagesProduct.push(result2[atr2].url); 
                    // };  
                    //console.log(element.idproduct);  
                   // console.log(ImagesProduct);
                   if(result2[0]!=undefined){
                    if(result2[0].id){
                        idsala=result2[0].id;
                       }
                   }
                   
                    resolve({
                        
                        "idSala": idsala
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}
////////

//listChatRoomStatus - Listar salas de chat según status
chatroomsModel.listChatRoomStatus = (statuSala,idUder) => {
    return new Promise((resolve, reject) => {
     if (pool) {
        let armaresult={};
         pool.query(
             'SELECT cr.id AS idSala,cr.datecreated AS creacionSala,cr.idpubliction,p.name AS namePublication,p.marketvalue AS valorComercial,cr.iduserpublication,u2.fullname AS nameUserPublication, u2.imgurl AS imgUserPublication ,cr.idoffer,cr.iduseroffer AS UserOferta,u.fullname AS nameUserOferta,u.imgurl AS imgUserOferta FROM chatrooms AS cr INNER JOIN users AS u ON cr.iduseroffer=u.id INNER JOIN users AS u2 ON cr.iduserpublication=u2.id INNER JOIN product AS p ON cr.idpubliction=p.id WHERE cr.status="'+statuSala+'" AND (cr.iduserpublication="'+idUder+'" OR cr.iduseroffer="'+idUder+'")',
             async(err, result) => {
                 //console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    armaresult = await chatroomsModel.armaresultStatus(result);  
                     resolve({
                         'result': armaresult
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};


///
chatroomsModel.armaresultStatus = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        try{
            let img={};
            let prefe={};
            //console.log(result);
            for (const element of result) {
                img=await chatroomsModel.ListImagesProduct(element.idpubliction);
                prefe=await chatroomsModel.ListPrefrencesProduct(element.idpubliction);
                //ItemOfer=await chatroomsModel.ListItemsOffers(element.idoffer)
                let Precio=Number.parseFloat(element.marketvalue).toFixed(4);

                let now = new Date();
                let servidor=date.format(now, 'DD/MM/YYYY');
                //let registro=element.registro;
                let registro = new Date(element.creacionSala);
                let regis = date.format(registro, 'DD/MM/YYYY');

                //console.log(now+" - "+registro);

                let comprobar_fecha=date.isSameDay(now, registro); 
                // console.log(comprobar_fecha+" - ");
                // console.log("//////");
                let nuevo=false;
                if (registro == servidor){
                    let nuevo=true;
                }else{
                    let nuevo=false;
                }
                arr.push({
                    "idSala":element.idSala,
                    "datecreated":regis,
                    "idPublicacion": element.idpubliction,                    
                    "namePublication": element.namePublication,
                    "valorComercial": Number.parseFloat(element.valorComercial).toFixed(4),
                    "Userpublication": element.iduserpublication,
                    "nameUserPublication": element.nameUserPublication,
                    "imgUserPublication": element.imgUserPublication,
                    "idoferta": element.idoffer,
                    "iduseroferta": element.iduseroffer,
                    "UserOferta": element.UserOferta,
                    "nameUserOferta": element.nameUserOferta,
                    "imgUserOferta": element.imgUserOferta,
                    "ProductImagesPublicacion":img.ImagesProduct,
                    "PreferencesPublicacion":prefe.Preferences
                    //"ItemOfer":ItemOfer
                    
                });
                
            }
            resolve(arr)
        }
        catch(e){
            console.log(e);
        }
    }
    )

} 

//////////////////


chatroomsModel.ListPrefrencesProduct = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT preference FROM `preferences_product` WHERE idproduct= ?', [element],
            (err2, result2) => {
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'error': err2
                    })
                } else {     
                    // console.log(result2); 
                    // console.log(result2.length);
                    let preferences= []; 
                    for(var atr2 in result2){
                    preferences.push(result2[atr2].preference);
                    };  
                    //console.log(preferences);
                    resolve({                        
                        "Preferences": preferences
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}



chatroomsModel.ListItemsOffers = (element,ValorPublication) => {
    return new Promise((resolve, reject) => {
        let SumItemsOffer=0;
        let DiferenciaOffer=0;
        let Afavor=false;
        let detalleProduct={};
        pool.query(
            'SELECT ops.idoffers,ops.idpublication AS idproduct,ip.url,ops.status,p.name,p.marketvalue,p.datecreated AS datepublication,p.iduser,p.subcategory,p.name,p.details,p.typemoney,p.typepublication,p.status  FROM `offersproductservices` AS ops INNER JOIN product AS p ON ops.idpublication=p.id INNER JOIN imgproduct AS ip ON p.id=ip.idproduct WHERE idoffers='+element,
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
                 let idItems=0;
                if(result2.length>0){
                    for(var atr2 in result2){
                    // "iduser": result2[0].iduser,
                        if(idItems!=result2[atr2].idproduct){
                            ListItemsOffers.push({
                                "idoffer": result2[atr2].id,
                                "idpublication": result2[atr2].idproduct,
                                "nameproduct": result2[atr2].name,
                                "status": result2[atr2].status,
                                "img": result2[atr2].url,
                                "marketvalue": Number.parseFloat(result2[atr2].marketvalue).toFixed(4)
                            });
                        
                            idItems=result2[atr2].idproduct; 
                            SumItemsOffer=parseInt(SumItemsOffer)+parseInt(result2[atr2].marketvalue);
                        }                        
                        
                    }; 
                    if(SumItemsOffer>ValorPublication){
                         DiferenciaOffer= SumItemsOffer-ValorPublication;
                         Afavor=false;
                    }else{
                        DiferenciaOffer= ValorPublication-SumItemsOffer;
                        Afavor=true;
                    }
                    
                }; 
                console.log("result2");
                console.log(result2);

                //console.log(ListItemsOffers);
                detalleProduct = await ProductModel.armaresult(result2);  
                console.log("detalleProduct");
                console.log(detalleProduct);
                resolve({ 
                    "aFavor":Afavor,
                    "Valorferta":SumItemsOffer,
                    "DiferenciaOffer":DiferenciaOffer,   
                    "itemsoffer": ListItemsOffers
                });
            }

            })
    })
}


//CAMBIAR EL ESTADO DE UNA OFERTA- OFERTAS 
chatroomsModel.CloseChatRoom = (ChatRoomData) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            //let FindDatOffer={};
            pool.query(
                'UPDATE  chatrooms SET  status= ? WHERE id= ?',[
                    ChatRoomData.status,
                    ChatRoomData.id
                ],
                async(err, result) => {
                   // console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {                         
                                             
                        resolve({
                            'result': result
                        })                        
                    }

                }
            )
            //return resultado;
        }
    })
};


module.exports = chatroomsModel;