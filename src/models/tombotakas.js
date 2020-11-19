const pool = require('../config/database');
const ProductModel = require('../models/product.js');

const date = require('date-and-time');

let tombotakasModel = {};

//Crear una nueva Tombotakas
tombotakasModel.NewTomboTakas = (dataTTK,ImagesLot) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         pool.query(
            'INSERT INTO tombotakas SET ?', dataTTK,
             (err, result) => {
                // console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {

                    //REGISTRAR IMAGENES DE TOMBOTAKAS
                    if(ImagesLot.length!=0){
                        for(var atr2 in ImagesLot){  
                            pool.query(
                                'INSERT INTO imgtombotakas (url,idtombotakas) value( ?, ?) ', [
                                    ImagesLot[atr2],
                                    result.insertId
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
                            
                        }//fin for reforrido imagenes
                    }//fin if ImagesProduct.length!=0
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


tombotakasModel.PinExist = (pin) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         pool.query(
            'SELECT * FROM tombotakas WHERE pinreference=?', pin,
             (err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    
                     resolve({
                         'result': result.length
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};

tombotakasModel.MyTomboTakas = (idUser,Status) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let consulta ="";
         let ListItemsTomboTakas={};
         if(Status==null){
            consulta='SELECT * FROM tombotakas WHERE iduser="'+idUser+'"';
         }
         else{
            consulta='SELECT * FROM tombotakas WHERE iduser="'+idUser+'" AND status='+Status;
         }
         pool.query(
            consulta,
             async(err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    ListItemsTomboTakas = await tombotakasModel.recorridoTombotakas(result);
                     resolve({
                         'result': ListItemsTomboTakas
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};

tombotakasModel.recorridoTombotakas = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        let tombotakas=0;
        for (const element of result) {
            if(tombotakas!=element.id){
                arr.push(await tombotakasModel.ListimgTombotakas(element));
                tombotakas=element.id;
            }
        }
        resolve(arr)
    }
    )

} 

tombotakasModel.ListimgTombotakas = (element) => {
    return new Promise((resolve, reject) => {
        
        let img=[];
        pool.query(
            'SELECT *  FROM `imgtombotakas` WHERE idtombotakas='+element.id,
            async(err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                
                if(result2.length>0){
                   // console.log(SumItemsOffer);
                    for(var atr2 in result2){
                                img.push(
                                     result2[atr2].url                                    
                                );
                        
                    }; // fin for
                    
                }; 
                let statusTTK=0;
                        
                if(element.status==28){
                    statusTTK=1
                }

                let datecreated = new Date(element.datecreated);
                let dc = date.format(datecreated, 'DD/MM/YYYY');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'DD/MM/YYYY HH:mm');
                resolve({                    
                    "idTombotakas": element.id,
                    "statusTTK": statusTTK,
                    "datecreatedTTK": dc,
                    "detailseventTTK": element.detailsevent,
                    "pinreferenceTTK": element.pinreference,
                    "datelotTTK": dl,
                    "priceTTK": Number.parseFloat(element.price).toFixed(4),
                    "resultTTK": element.result,
                    "imgTTk":img
                });
            }

            })
    })
}



//Crear una nueva Tombotakas
tombotakasModel.comprarapartartickets = (idUser,idTombotaka,tickets,accionTTK,hoy) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let status=30;
         if(accionTTK==2){
            status=31;
         }
        for(var atr2 in tickets){  

            pool.query(
                'INSERT INTO tombotikets (iduser,idtombotakas,number,dateapart,status) value( ?, ?, ?, ?, ?) ', [
                    idUser,
                    idTombotaka,
                    tickets[atr2],
                    hoy,
                    status
                ],
                (err, resut) => {
                    //console.log(resut);
                    if (err) {
                        console.log(err);
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
            
        }//fin for reforrido imagenes
                
            }//fin for           
        
 })
};


tombotakasModel.TicketsDispo = (idttk,ticket) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         pool.query(
            'SELECT * FROM tombotikets WHERE idtombotakas=? AND number=?', 
            [
                idttk,
                ticket
            ],
             (err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    
                     resolve({
                         'result': result.length
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};


tombotakasModel.FindTomboTakasPin = (pinttk) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
         pool.query(
            'SELECT * FROM tombotakas WHERE pinreference=?',  pinttk,
             async(err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                     ticketsReservados = await tombotakasModel.rTombotakas(result);
                     resolve({
                         'result': ticketsReservados
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};


tombotakasModel.rTombotakas = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        let tombotakas=0;
        for (const element of result) {
            if(tombotakas!=element.id){
                arr.push(await tombotakasModel.LisTicketsReservados(element));
                tombotakas=element.id;
            }
        }
        resolve(arr)
    }
    )

} 

tombotakasModel.LisTicketsReservados = (element) => {
    return new Promise((resolve, reject) => {
        
        let tickets=[];
        pool.query(
            'SELECT t.id, t.idtombotakas,t.number, t.status, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE idtombotakas='+element.id,
            async(err2, result2) => {
                if (err2) {
                    console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                
                if(result2.length>0){
                   // console.log(SumItemsOffer);
                    console.log(result2);
                    let statusticket=0;
                    for(var atr2 in result2){
                        if(result2[atr2].status==30){
                            statusticket=1
                        }
                        if(result2[atr2].status==31){
                            statusticket=2
                        }
                        tickets.push({
                            "idNUmbre":result2[atr2].id,
                            "Number":parseInt(result2[atr2].number),
                            "status":statusticket,
                            "NameUser":result2[atr2].fullname,
                            "phonenumber":result2[atr2].phonenumber,
                            "email":result2[atr2].email,
                        });                        
                    }; // fin for
                    
                }; 
                let statusTTK=0;
                        
                if(element.status==28){
                    statusTTK=1
                }

                let datecreated = new Date(element.datecreated);
                let dc = date.format(datecreated, 'DD/MM/YYYY');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'DD/MM/YYYY HH:mm');
                resolve({                    
                    "idTombotakas": element.id,
                    "nameTombotakas": element.name,
                    "statusTTK": statusTTK,
                    "datecreatedTTK": dc,
                    "detailseventTTK": element.detailsevent,
                    "pinreferenceTTK": element.pinreference,
                    "datelotTTK": dl,
                    "moneyTTK": element.money,
                    "priceTTK": Number.parseFloat(element.price).toFixed(4),
                    "resultTTK": element.result,
                    "ticketsReservados":tickets
                });
            }

            })
    })
}


tombotakasModel.MyTickets = (idfirebaseUser,Status) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
         pool.query(
            'SELECT ttk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE tk.iduser=? ORDER BY tk.idtombotakas ASC',  idfirebaseUser,
             async(err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                     ticketsReservados = await tombotakasModel.rTombotakas(result);
                     resolve({
                         'result':ticketsReservados
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};


tombotakasModel.RequestsTickets = (idfirebaseUser) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
         pool.query(
            'SELECT ttk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE tk.iduser=? AND tk.status=30 ORDER BY tk.idtombotakas ASC',  idfirebaseUser,
             async(err, result) => {
                 console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                     ticketsReservados = await tombotakasModel.rTombotakas(result);
                     resolve({
                         'result': ticketsReservados
                     })
                 }

             }
         )
         //return resultado;
     }
 })
};


tombotakasModel.ProcessRequestsTickets = (idfirebaseUser,idticket,statusTicket) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         pool.query(
            'UPDATE tombotakas SET status=? WHERE id=?', [
                statusTicket,
                idticket
            ],
             (err, result) => {
                 console.log(err);
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




module.exports = tombotakasModel;