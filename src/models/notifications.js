const pool = require('../config/database');

let notificationModel = {};


//CREAR NOTIFICACIÓN 
notificationModel.cearnotificacion = (TypeNotification,idrelation) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "INSERT INTO notifications (typenotifications,tiltle,details,iduser,idrelation,STATUS) VALUES ("+TypeNotification+",'Haz recibido un Takasteo en potencia','La publicación de Gorros de bebes tiene un takasteo potencial, haz click para conocer los detalles','zSiRYTbNbpW5vOQ6K6XpxvpKu2v1',"+idrelation+",1)",
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


module.exports = notificationModel;