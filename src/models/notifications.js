const pool = require('../config/database');

let notificationModel = {};


//CREAR NOTIFICACIÓN 
notificationModel.cearnotificacion = (TypeNotification,idrelation,UserPublication,titulo,detalles,idOferta) => {
    return new Promise((resolve, reject) => {

        //console.log("INSERT INTO notifications (typenotifications,title,details,iduser,idrelation,idevento,STATUS) VALUES ("+TypeNotification+",'"+titulo+"','"+detalles+"','"+UserPublication+"',"+idrelation+","+idOferta+",1)");
        pool.query(
            "INSERT INTO notifications (typenotifications,title,details,iduser,idrelation,idevento,STATUS) VALUES ("+TypeNotification+",'"+titulo+"','"+detalles+"','"+UserPublication+"',"+idrelation+","+idOferta+",1)",
            (err2, result2) => {
                 
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    console.log(err2);  
                    resolve({
                        'error': err2
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

                    resolve({                        
                        'result': result2
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}

//LISTAR  NOTIFICACIONES DETALLADAS 
notificationModel.listNotifications = (idUser) => {
    return new Promise((resolve, reject) => {
        let Resultadofin={};
        pool.query(
            "SELECT n.id AS idNotifications,DATE_FORMAT(n.datecreated, '%d/%m/%Y') AS dateNotifications,n.status AS statusNotifications,n.typenotifications, n.title,n.details,n.idevento,n.idrelation,p.name AS nameProducto,p.marketvalue AS ValueProducto FROM notifications AS n INNER JOIN product AS p ON n.idrelation=p.id WHERE n.iduser ='"+idUser+"' ORDER BY n.datecreated DESC",
           async (err2, result2) => {
                 
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'error': err2
                    })
                } else {     
                    console.log(result2); 
                    // console.log(result2.length);
                    // let ImagesProduct= []; 
                    // for(var atr2 in result2){
                    // ImagesProduct.push(result2[atr2].url); 
                    // };  
                    //console.log(element.idproduct);  
                   // console.log(ImagesProduct);
                   Resultadofin= await notificationModel.armaresultNotification(result2);
                    resolve({                        
                        'result': Resultadofin
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}


//OBTENER CATIDAD  NOTIFICACIONES SEGÚN BANDERA 
notificationModel.cantNotifications = (status,idUder) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT COUNT(*) AS CantNoti FROM notifications AS n INNER JOIN product AS p ON n.idrelation=p.id WHERE n.status="+status+" AND n.iduser='"+idUder+"' ORDER BY n.datecreated DESC",
            (err2, result2) => {
                 
                console.log(err2);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);
                if (err2) {
                    resolve({
                        'error': err2
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
                    resolve({                        
                        'result': result2
                    });
                }  
                
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}

notificationModel.armaresultNotification = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        
        
        try{
            let Precio=0;
            
            //console.log(result);
            for (const element of result) {
                 
                Precio=Number.parseFloat(element.ValueProducto).toFixed(4);
//SELECT n.id AS idNotifications,DATE_FORMAT(n.datecreated, '%d/%m/%Y') AS dateNotifications,n.status AS statusNotifications,n.typenotifications, n.title,n.details,n.idevento,n.idrelation,p.name AS nameProducto,p.marketvalue AS ValueProducto FROM notifications AS n INNER JOIN product AS p ON n.idrelation=p.id WHERE n.iduser ='"+idUser+"' ORDER BY n.datecreated DESC
                arr.push({
                            "idNotifications": element.idNotifications,
                            "dateNotifications":element.dateNotifications,                            
                            "statusNotifications":element.statusNotifications,
                            "typenotifications":element.typenotifications,
                            "title":element.title,
                            "details":element.details,
                            "idevento":element.idevento,
                            "idrelation":element.idrelation,
                            "nameProducto":element.nameProducto,
                            "valueProducto":Precio
                            
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



//CAMBIAR EL ESTADO DE UNA OFERTA- OFERTAS 
notificationModel.changeStatusNotifications = (NotificationsData) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let FindDatOffer={};
            pool.query(
                'UPDATE  notifications SET  status= ? WHERE id= ?',[
                    NotificationsData.status,
                    NotificationsData.id
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





module.exports = notificationModel;