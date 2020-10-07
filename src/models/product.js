const pool = require('../config/database');
let ProductModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
ProductModel.NewProduct = (ProductData,PreferecesProduct,ImagesProduct,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'INSERT INTO product SET ?', ProductData,
                (err, resut) => {
                    //console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        if(ImagesProduct.length!=0){
                        for(var atr2 in ImagesProduct){  
                            pool.query(
                                'INSERT INTO imgproduct (url,idproduct) value( ?, ?) ', [
                                    ImagesProduct[atr2],
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
                            
                        }//fin for reforrido imagenes
                    }//fin if ImagesProduct.length!=0
                    if(PreferecesProduct.length!=0){
                        for(var atr3 in PreferecesProduct){  
                            pool.query(
                                'INSERT INTO preferences_product (preference,idproduct) value( ?, ?) ', [
                                    PreferecesProduct[atr3],
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
                            
                        }//fin for reforrido Preferencias
                    }//fin if PreferecesProduct.length!=0
                    }//

                }
            )
            //return resultado;
        }
    })
};


//LISTAR LOS PRODUCTOS PUBLICADOS POR UN USUARIO - TAKASTEAR 
ProductModel.ListMisProductos = (UserData,ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            let ProductPreferences1={};
            pool.query(
                "SELECT idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status, url  FROM  product AS p INNER JOIN imgproduct AS i ON p.id=idproduct WHERE iduser='"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct GROUP BY p.id",
                async(err, result) => {
                    //console.log(result);
                    ProductPreferences1 = await ProductModel.recorridoProductPreferences(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {  
                        
                        resolve({
                            'result': ProductPreferences1
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

//LISTAR LOS PRODUCTOS PUBLICADOS POR OTROS USUARIOS - TAKASTEAR 
ProductModel.ListProductos = (UserData,ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let ProductPreferences={};
            pool.query(
                "SELECT p.id,SUBSTRING_INDEX(GROUP_CONCAT(idproduct ORDER BY RAND()), ',', 1) AS idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status,i.id, url FROM  product AS p INNER JOIN imgproduct AS i ON p.id=idproduct WHERE iduser<>'"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct GROUP BY idproduct  LIMIT 50",
                async(err, result) => {
                    //console.log(result);
                    ProductPreferences = await ProductModel.recorridoProductPreferences(result);
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {     
                        resolve({
                            'result': ProductPreferences
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

ProductModel.recorridoProductPreferences = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];

        for (const element of result) {
            arr.push(await ProductModel.ListPrefrencesProduct(element));
        }
        resolve(arr)
    }
    )

} 

ProductModel.ListPrefrencesProduct = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT preference FROM `preferences_product` WHERE idproduct= ?', [element.idproduct],
            (err2, result2) => {
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);  
                console.log(result2); 
                console.log(result2.length);
                let preferences= []; 
                for(var atr2 in result2){
                preferences.push(result2[atr2].preference); 
                };  
                console.log(preferences);
                resolve({
                    "id": element.idproduct,
                    "idproduct": element.idproduct,
                    "datecreated": element.datecreated,
                    "iduser": element.iduser,
                    "name": element.name,
                    "details": element.details,
                    "typemoney": element.typemoney,
                    "marketvalue": element.marketvalue,
                    "typepublication": element.typepublication,
                    "status": element.status,
                    "url": element.url,
                    "Preferences": preferences,
                });
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}

//LISTAR PRODRUCTOS FILTRADOS POR SUBCATEGORÍA- TAKASTEAR 
ProductModel.ListProductSubCategory = (ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                "SELECT p.id,SUBSTRING_INDEX(GROUP_CONCAT(idproduct ORDER BY RAND()), ',', 1) AS idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status,i.id, url FROM  product AS p INNER JOIN imgproduct AS i ON p.id=idproduct WHERE subcategory='"+ProductData.subcategory+"' AND status="+ProductData.status+" AND p.id=idproduct GROUP BY idproduct  LIMIT 50",
                (err, result) => {
                    //console.log(result);
                   
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


//LISTAR DETALLE DE UN PRODRUCTO - TAKASTEAR 
ProductModel.DetailsProduct = (ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                "SELECT id,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,NAME AS nombre,details,typemoney,marketvalue,subcategory,typepublication,STATUS AS estado FROM  product  WHERE id="+ProductData.id,
                (err, result) => {
                    //console.log(result);
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {     
                        // resolve({
                        //     'result': result
                        // })
                        //Listar Imagenes
                        pool.query(
                            "SELECT url FROM  imgproduct WHERE idproduct="+ProductData.id,
                            (err, result2) => {
                                //console.log(result);
                               
                                if (err) {
                                    resolve({
                                        'error': err
                                    })
                                } else {   
                                    // const images = {}; 
                                    // console.log(result2.length);
                                    // if(result2.length!=0){
                                    //     for(var atr2 in result2){
                                    //         images[atr2] = result2[atr2]; 
                                    //     };
                                    // }
                                    
                                    resolve({
                                        'result': result,
                                        'images': result2
                                    })
                                }
            
                            }
                        )
                    }

                }
            )
            //return resultado;
        }
    })
};



module.exports = ProductModel;