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
                         'result': result,
                         'id':result.insertId
                         
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
                let dc = date.format(datecreated, 'YYYY-MM-DD');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'YYYY-MM-DD HH:mm');
                resolve({                    
                    "idTombotakas": element.id,
                    "statusTTK": statusTTK,
                    "nameTTK": element.name,
                    "datecreatedTTK": dc,
                    "detailseventTTK": element.detailsevent,
                    "detailsAwardttk": element.detailsaward,
                    "pinreferenceTTK": element.pinreference,
                    "datelotTTK": dl,
                    "moneyTTK": element.money,
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
                async(err, result) => {
                    //console.log(resut);
                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        // console.log("result");
                        // console.log(result);
                        let dp= await tombotakasModel.FindDetailspagoTombotakas(idTombotaka);
                        resolve({
                            'result': result,
                            'detailspayments':dp.detailspayments
                        })                                       
                    }

                }
            )
            
        }//fin for reforrido imagenes
                
            }//fin for           
        
 })
};

tombotakasModel.FindDetailspagoTombotakas = (idttk) => {
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
               'SELECT detailspayments FROM tombotakas WHERE id=? ', 
               [
                   idttk
               ],
                (err, result) => {
                    console.log(err);
                   // console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                       console.log("result");
                       console.log(result);
                        resolve({
                            'detailspayments': result[0].detailspayments
                        })
                    }
   
                }
            )
            //return resultado;
        }

    });
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

tombotakasModel.rTombotakas2 = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        let tombotakas=0;
        for (const element of result) {
            // if(tombotakas!=element.id){
                console.log("element.number "+element.number);
                arr.push(await tombotakasModel.LisTicketsReservados2(element));
                //tombotakas=element.id;
            // }
        }
        resolve(arr)
    }
    )

} 

tombotakasModel.LisTicketsReservados2 = (element) => {
    return new Promise((resolve, reject) => {
        
        let tickets=[];
        let numberticketsr=[];
        let img={};
        pool.query(
            'SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE t.id='+element.idTicket,
            async(err2, result2) => {
                if (err2) {
                    //console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                
                //console.log('SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE t.idtombotakas='+element.id);

                if(result2.length>0){
                   // console.log(SumItemsOffer);
                   // console.log(result2);
                    let statusticket=0;
                    for(var atr2 in result2){
                        if(result2[atr2].status==30){
                            statusticket=1
                        }
                        if(result2[atr2].status==31){
                            statusticket=2
                        }
                        if(result2[atr2].status==32){
                            statusticket=3
                        }
                        if(result2[atr2].status==33){
                            statusticket=4
                        }
                        numberticketsr.push(parseInt(result2[atr2].number));

                        tickets.push({
                            "idNUmbre":result2[atr2].id,
                            "Number":parseInt(result2[atr2].number),
                            "status":statusticket,
                            "NameUser":result2[atr2].fullname,
                            "phonenumber":result2[atr2].phonenumber,
                            "email":result2[atr2].email,
                            "img":result2[atr2].imgurl,
                        });                        
                    }; // fin for
                    
                }; 
                let statusTTK=0;
                        
                if(element.status==28){
                    statusTTK=1
                }

                let datecreated = new Date(element.datecreated);
                let dc = date.format(datecreated, 'YYYY-MM-DD');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'YYYY-MM-DD HH:mm');
                let now = new Date();
                let servidor2=date.format(now, 'YYYY-MM-DD HH:mm:ss');  

                let tiemporestante=date.subtract(now,datelot).toMinutes();

                console.log("element");
                //console.log(element);
                img=await tombotakasModel.ListImagesTombotakas(element);
               
                    resolve({                   
                        "idTombotakas": element.id,
                        "pinTombotakas":element.pinreference,
                        "timeremaining":tiemporestante,
                        "nameTombotakas": element.name,
                        "statusTTK": statusTTK,
                        "datecreatedTTK": dc,
                        "detailseventTTK": element.detailsevent,
                        "detailsAwardttk": element.detailsaward,
                        "pinreferenceTTK": element.pinreference,
                        "datelotTTK": dl,
                        "moneyTTK": element.money,
                        "priceTTK": Number.parseFloat(element.price).toFixed(4),
                        "resultTTK": element.result,
                        "imgTTK":img.ImagesTTK,
                        "numberticketsrs":numberticketsr,
                        "ticketsReservados":tickets
                    });
                
            }

        })
    })
}

tombotakasModel.LisTicketsReservados = (element) => {
    return new Promise((resolve, reject) => {
        
        let tickets=[];
        let numberticketsr=[];
        let img={};
        pool.query(
            'SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE idtombotakas='+element.id,
            async(err2, result2) => {
                if (err2) {
                    //console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                
                if(result2.length>0){
                   // console.log(SumItemsOffer);
                   // console.log(result2);
                    let statusticket=0;
                    for(var atr2 in result2){
                        if(result2[atr2].status==30){
                            statusticket=1
                        }
                        if(result2[atr2].status==31){
                            statusticket=2
                        }
                        if(result2[atr2].status==32){
                            statusticket=3
                        }
                        if(result2[atr2].status==33){
                            statusticket=4
                        }
                        numberticketsr.push(parseInt(result2[atr2].number));

                        tickets.push({
                            "idNUmbre":result2[atr2].id,
                            "Number":parseInt(result2[atr2].number),
                            "status":statusticket,
                            "NameUser":result2[atr2].fullname,
                            "phonenumber":result2[atr2].phonenumber,
                            "email":result2[atr2].email,
                            "img":result2[atr2].imgurl,
                        });                        
                    }; // fin for
                    
                }; 
                let statusTTK=0;
                        
                if(element.status==28){
                    statusTTK=1
                }

                let datecreated = new Date(element.datecreated);
                let dc = date.format(datecreated, 'YYYY-MM-DD');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'YYYY-MM-DD HH:mm');
                let now = new Date();
                let servidor2=date.format(now, 'YYYY-MM-DD HH:mm:ss');  

                let tiemporestante=date.subtract(now,datelot).toMinutes();

                console.log("element");
                //console.log(element);
                img=await tombotakasModel.ListImagesTombotakas(element);
                if(element.pertenece!=undefined){
                    console.log("pertenece");
                    resolve({                   
                        "idTombotakas": element.id,
                        "pinTombotakas":element.pinreference,
                        "timeremaining":tiemporestante,
                        "pertenece": element.pertenece,
                        "nameTombotakas": element.name,
                        "statusTTK": statusTTK,
                        "datecreatedTTK": dc,
                        "detailseventTTK": element.detailsevent,
                        "detailsAwardttk": element.detailsaward,
                        "pinreferenceTTK": element.pinreference,
                        "datelotTTK": dl,
                        "moneyTTK": element.money,
                        "priceTTK": Number.parseFloat(element.price).toFixed(4),
                        "resultTTK": element.result,
                        "imgTTK":img.ImagesTTK,
                        "numberticketsrs":numberticketsr,
                        "ticketsReservados":tickets
                    });
                }else{
                    resolve({                   
                        "idTombotakas": element.id,
                        "pinTombotakas":element.pinreference,
                        "timeremaining":tiemporestante,
                        "nameTombotakas": element.name,
                        "statusTTK": statusTTK,
                        "datecreatedTTK": dc,
                        "detailseventTTK": element.detailsevent,
                        "detailsAwardttk": element.detailsaward,
                        "pinreferenceTTK": element.pinreference,
                        "datelotTTK": dl,
                        "moneyTTK": element.money,
                        "priceTTK": Number.parseFloat(element.price).toFixed(4),
                        "resultTTK": element.result,
                        "imgTTK":img.ImagesTTK,
                        "numberticketsrs":numberticketsr,
                        "ticketsReservados":tickets
                    });
                }
            }

        })
    })
}


tombotakasModel.MyTickets = (idfirebaseUser,Status) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
         console.log(idfirebaseUser);
         let consulta='SELECT tk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.pinreference,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE tk.iduser="'+idfirebaseUser+'"  AND tk.status IN (30,31,32,33) ORDER BY tk.idtombotakas ASC'
         if(Status!=null){
            consulta= 'SELECT tk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.pinreference,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE tk.iduser="'+idfirebaseUser+'" AND tk.status='+Status+' ORDER BY tk.idtombotakas ASC';
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
                     console.log('result '+result);
                     ticketsReservados = await tombotakasModel.rTombotakas2(result);
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
         //SELECT ttk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE tk.iduser=? AND tk.status=30 ORDER BY tk.idtombotakas ASC
         pool.query(
            'SELECT ttk.id AS idTicket,tk.idtombotakas AS id,tk.iduser,tk.number,tk.dateapart,tk.datebuy,tk.status AS statusticket,ttk.datecreated,ttk.datelot,ttk.money,ttk.name,ttk.price,ttk.status  FROM tombotikets AS tk INNER JOIN tombotakas AS ttk ON tk.idtombotakas=ttk.id WHERE ttk.iduser=? AND tk.status=30 ORDER BY tk.idtombotakas ASC',  idfirebaseUser,
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


tombotakasModel.ProcessRequestsTickets = (idfirebaseUserTTK,idticket,statusTicket,idttk) => {
    return new Promise(async(resolve, reject) => {
     if (pool) {
         let Anfitrion= await tombotakasModel.VerificarAnfitrionTTK (idfirebaseUserTTK,idttk);
         
         if(Anfitrion.Anfitrion==true){        
         pool.query(
            'UPDATE tombotikets SET status=? WHERE id=? AND idtombotakas=? ', [
                statusTicket,
                idticket,
                idttk
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
        } //fin del if
        else{
            resolve({
                'error': 500,
                'msgErr': "Ustede no es el anfitrión de la tombola"
            })
        }
         //return resultado;
     }
 })
};



tombotakasModel.VerificarAnfitrionTTK = (idfirebaseUserTTK,idttk) => {
    return new Promise((resolve, reject) => {
    if (pool) {
        //let Puntuar={};
        //console.log("SELECT * FROM product where id="+idPublication);
        pool.query(
            'SELECT COUNT(*) as Anfitrion FROM tombotakas WHERE iduser=? AND id=? ', [
                idfirebaseUserTTK,
                idttk
            ],
            (err, result) => {
                              
                
                if (err) {
                    resolve({
                        'error': err
                    })
                } else {    
                    let A=false;
                    if(result[0].Anfitrion==1){
                        A=true;
                    }

                    resolve({
                        'Anfitrion': A
                    })
                }

            }
        )
        //return resultado;
    }
    })

}


tombotakasModel.DetailsTombotakas = (idfirebaseUser,idTTK) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
        // 'SELECT ttk.id,ttk.iduser,ttk.name,ttk.datecreated,ttk.detailsevent,ttk.detailsaward,ttk.pinreference,ttk.datelot,ttk.money,ttk.price,ttk.detailspayments,ttk.result,ttk.status,tk.id as idTicket,tk.status as statustk FROM tombotakas AS ttk INNER JOIN tombotikets AS tk ON ttk.id=tk.idtombotakas WHERE ttk.id=? AND tk.status IN (30,31) ',  idTTK,
         //
         pool.query(
            'SELECT * FROM tombotakas  WHERE id=? AND status IN[30,31]',  idTTK,
             async(err, result) => {
                 //console.log(err);
                // console.log(result);
                 if (err) {
                     resolve({
                         'error': err
                     })
                 } else {
                    let pertenece=false;
                    if(result[0].iduser==idfirebaseUser){
                        pertenece=true;
                    }
                    //result["pertenece"] = pertenece;
                     ticketsReservados = await tombotakasModel.LisTicketsDetalsTTK(result[0],idTTK,pertenece);              

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


// tombotakasModel.rDetailsTombotakas = (result,idTTK,pertenece) => {

//     return new Promise(async (resolve, reject) => {
//         let arr = [];
//         let tombotakas=0;
//         for (const element of result) {
//             // if(tombotakas!=element.id){
//                 console.log("element.number "+element.number);
//                 arr.push(await tombotakasModel.LisTicketsDetalsTTK(element,idTTK,pertenece));
//                 //tombotakas=element.id;
//             // }
//         }
//         resolve(arr)
//     }
//     )

// }

tombotakasModel.LisTicketsDetalsTTK = (element,idTTK,pertenece) => {
    return new Promise((resolve, reject) => {
        
        let tickets=[];
        let numberticketsr=[];
        let img={};
        //'SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE t.id='+element.idTicket,
        
        pool.query(
            'SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE t.idtombotakas='+element.id,
            async(err2, result2) => {
                if (err2) {
                    //console.log(err2);
                    resolve({
                        'error': err2
                    })
                } else { 
                
                //console.log('SELECT t.id, t.idtombotakas,t.number, t.status,u.imgurl, u.fullname, u.phonenumber,u.email,u.datecreated,u.datebirth  FROM `tombotikets` AS t INNER JOIN users AS u ON t.`iduser`=u.`id` WHERE t.idtombotakas='+element.id);

                if(result2.length>0){
                   // console.log(SumItemsOffer);
                   // console.log(result2);
                    let statusticket=0;
                    for(var atr2 in result2){
                        if(result2[atr2].status==30){
                            statusticket=1
                        }
                        if(result2[atr2].status==31){
                            statusticket=2
                        }
                        if(result2[atr2].status==32){
                            statusticket=3
                        }
                        if(result2[atr2].status==33){
                            statusticket=4
                        }
                        numberticketsr.push(parseInt(result2[atr2].number));

                        tickets.push({
                            "idNUmbre":result2[atr2].id,
                            "Number":parseInt(result2[atr2].number),
                            "status":statusticket,
                            "NameUser":result2[atr2].fullname,
                            "phonenumber":result2[atr2].phonenumber,
                            "email":result2[atr2].email,
                            "img":result2[atr2].imgurl,
                        });                        
                    }; // fin for
                    
                }; 
                let statusTTK=0;
                        
                if(element.status==28){
                    statusTTK=1
                }

                let datecreated = new Date(element.datecreated);
                let dc = date.format(datecreated, 'YYYY-MM-DD');
                let datelot = new Date(element.datelot);
                let dl = date.format(datelot, 'YYYY-MM-DD HH:mm');
                let now = new Date();
                let servidor2=date.format(now, 'YYYY-MM-DD HH:mm:ss');  

                let tiemporestante=date.subtract(now,datelot).toMinutes();

                console.log("element");
                //console.log(element);
                img=await tombotakasModel.ListImagesTombotakas(element);
               
                    resolve({                   
                        "idTombotakas": element.id,
                        "pinTombotakas":element.pinreference,
                        "pertenece":pertenece,
                        "timeremaining":tiemporestante,
                        "nameTombotakas": element.name,
                        "statusTTK": statusTTK,
                        "datecreatedTTK": dc,
                        "detailseventTTK": element.detailsevent,
                        "detailsAwardttk": element.detailsaward,
                        "pinreferenceTTK": element.pinreference,
                        "datelotTTK": dl,
                        "moneyTTK": element.money,
                        "priceTTK": Number.parseFloat(element.price).toFixed(4),
                        "resultTTK": element.result,
                        "imgTTK":img.ImagesTTK,
                        "numberticketsrs":numberticketsr,
                        "ticketsReservados":tickets
                    });
                
            }

        })
    })
}
//////////////////////
tombotakasModel.ListImagesTombotakas = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT  url FROM imgtombotakas WHERE idtombotakas=? ',[element.id],
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
                    let ImagesTTK= []; 
                    for(var atr2 in result2){
                    ImagesTTK.push(result2[atr2].url); 
                    };  
                    //console.log(element.idproduct);  
                   // console.log(ImagesTTK);
                    resolve({
                        
                        "ImagesTTK": ImagesTTK
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


tombotakasModel.ListPublications = (consulta) => {
    return new Promise((resolve, reject) => {
    if (pool) {
        //let Puntuar={};
        //console.log("SELECT * FROM product where id="+idPublication);
        pool.query(
            consulta,
            (err, result) => {
                console.log(result);                 
                
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

}


tombotakasModel.LisTombotakas = (status) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let ticketsReservados={};
         pool.query(
            'SELECT * FROM tombotakas WHERE status=?',  status,
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

//Obtener la cantidad de regisrados por rango de fecha
tombotakasModel.canTomboTakas = (inicio,fin) => {
    return new Promise((resolve, reject) => {
        if (pool)
            pool.query(
                "SELECT COUNT(id) AS CanTomboTakas FROM tombotakas WHERE status=1 AND datecreated  BETWEEN '"+inicio+"' AND '"+fin+"' GROUP BY id", 
                (err, result) => {
                    console.log(err);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({
                            'result': result[0]
                        })
                    }

                }
            )
    }
    )


};





module.exports = tombotakasModel;