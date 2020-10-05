const pool = require('../config/database');
let ProductModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
ProductModel.NewProduct = (ProductData,ImagesProduct,callback) => {
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
                                        //console.log("////");
                                        //console.log(resut.insertId);
                                        resolve({
                                            'result': resut
                                        })
                                    }
                
                                }
                            )
                            
                        }
                    }//

                }
            )
            //return resultado;
        }
    })
};

module.exports = ProductModel;