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
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND STATUS='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                "SELECT idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,NAME,details,typemoney,marketvalue,subcategory,typepublication,STATUS, url  FROM  product AS p INNER JOIN imgproduct AS i ON p.id=idproduct WHERE iduser='"+UserData.iduser+"' AND STATUS="+ProductData.status+" AND p.id=idproduct GROUP BY p.id",
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

//LISTAR LOS PRODUCTOS PUBLICADOS POR OTROS USUARIOS - TAKASTEAR 
ProductModel.ListProductos = (UserData,ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND STATUS='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                "SELECT p.id,SUBSTRING_INDEX(GROUP_CONCAT(idproduct ORDER BY RAND()), ',', 1) AS idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,NAME,details,typemoney,marketvalue,subcategory,typepublication,STATUS,i.id, url FROM  product AS p INNER JOIN imgproduct AS i ON p.id=idproduct WHERE iduser<>'"+UserData.iduser+"' AND STATUS="+ProductData.status+" AND p.id=idproduct GROUP BY idproduct  LIMIT 50",
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

module.exports = ProductModel;