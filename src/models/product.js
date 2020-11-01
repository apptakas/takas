const pool = require('../config/database');
let ProductModel = {};
const date = require('date-and-time');


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

//ListUsers  - obtenemos lista de usuarios segun el rol
ProductModel.NewProductKW = (ProductData,PreferecesProduct,ImagesProduct,KeyWordsProduct,callback) => {
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
                    if(KeyWordsProduct.length!=0){
                        for(var atr3 in KeyWordsProduct){  

                            console.log(KeyWordsProduct[atr3]);
                            // pool.query(
                            //     'INSERT INTO  keywords_product (idwords,idproduct) value( ?, ?) ', [
                            //         KeyWordsProduct[atr3],
                            //         resut.insertId
                            //     ],
                            //     (err, resut) => {
                            //         //console.log(resut);
                            //         if (err) {
                            //             resolve({
                            //                 'error': err
                            //             })
                            //         } else {
                            //             resolve({
                            //                 'result': resut
                            //             })
                            //         }
                
                            //     }
                            // )
                            
                        }//fin for reforrido KeyWords
                    }//fin if KeyWords.length!=0

                    }//

                }
            )
            //return resultado;
        }
    })
};

ProductModel.ExistKeyWords = (KW,callback) => {

    if (pool) {
        let armaresult={};
        pool.query(
            "SELECT * keywords where word='"+KW+"'",
            (err, result) => {
               // console.log(err);                 
                
                if (err) {
                    resolve({
                        'error': err
                    })
                } else {  
                    //armaresult = await ProductModel.armaresult(result);  
                    resolve({
                        'result': armaresult
                    })
                }

            }
        )
        //return resultado;
    }

}

//LISTAR LOS PRODUCTOS PUBLICADOS POR UN USUARIO - TAKASTEAR 
ProductModel.ListMisProductos = (UserData,ProductData,estatus,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let armaresult={};
            let consulta="";
            if(estatus==1){
                consulta="SELECT DISTINCT idproduct,datepublication,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct  WHERE iduser='"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct ";
            }else{
                consulta="SELECT DISTINCT idproduct,datepublication,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct  WHERE iduser='"+UserData.iduser+"' AND p.id=idproduct ";
            }
            pool.query(consulta,
                async(err, result) => {
                   // console.log(err);                 
                    
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {  
                        armaresult = await ProductModel.armaresult(result);  
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

//LISTAR LOS PRODUCTOS PUBLICADOS POR OTROS USUARIOS - TAKASTEAR 
ProductModel.ListProductos = (UserData,ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let armaresult={};
            pool.query(
                "SELECT DISTINCT idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y') AS registro,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct WHERE iduser<>'"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct  LIMIT 50",
                async(err, result) => {
                    //console.log(result);                  
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {   
                        armaresult = await ProductModel.armaresult(result);  
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

////BURCAR PUBLICACUONES SEGÚN NOMBRE DEL ARTÍCULO
ProductModel.findProductos = (nameProduct) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let armaresult={};
            pool.query(
                "SELECT * FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct WHERE NAME LIKE '%"+nameProduct+"%' AND STATUS=1",
                async(err, result) => {
                    //console.log(result);                  
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {   
                        armaresult = await ProductModel.armaresult(result);  
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
ProductModel.armaresult = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];
        try{
            let img={};
            let prefe={};
            let CantidadOfertas=0;
            //console.log(result);
            for (const element of result) {
                img=await ProductModel.ListImagesProduct(element);
                prefe=await ProductModel.ListPrefrencesProduct(element);
                CantidadOfertas=await ProductModel.CantidadOfertas(element);
                let Precio=Number.parseFloat(element.marketvalue).toFixed(4);

                let now = new Date();
                let servidor=date.format(now, 'DD/MM/YYYY');
                //let registro=element.registro;
                let registro = new Date(element.datepublication);
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
                    "idproduct": element.idproduct,
                    "datecreated":regis,
                    "iduser": element.iduser,
                    "nuevo": comprobar_fecha,
                    "subcategory": element.subcategory,
                    "name": element.name,
                    "details": element.details,
                    "typemoney": element.typemoney,
                    "marketvalue": Precio,
                    "typepublication": element.typepublication,
                    "status": element.status,
                    "CantidadOfertas":CantidadOfertas.CantOfertas,
                    "ProductImages":img.ImagesProduct,
                    "Preferences":prefe.Preferences
                    
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


ProductModel.ListImagesProduct = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT  url FROM imgproduct WHERE idproduct=? ',[element.idproduct],
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


ProductModel.ListPrefrencesProduct = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT preference FROM `preferences_product` WHERE idproduct= ?', [element.idproduct],
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


ProductModel.CantidadOfertas = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT COUNT(*) AS cantofertas FROM offers WHERE idproduct=? ',[element.idproduct],
            (err2, result2) => {
                 
               
                if (err2) {
                    resolve({
                        'error': err2
                    })
                } else {     
                    // console.log(result2.length);
                   
                    //console.log(element.idproduct);  
                  // console.log(result2.cantofertas);
                    resolve({
                        
                        "CantOfertas": result2[0].cantofertas
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
//LISTAR PRODRUCTOS FILTRADOS POR SUBCATEGORÍA- TAKASTEAR 
ProductModel.ListProductSubCategory = (ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            let armaresult={};
            pool.query(
                "SELECT DISTINCT idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y') AS registro,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct WHERE subcategory='"+ProductData.subcategory+"' AND status="+ProductData.status+" AND p.id=idproduct AND iduser<>'"+ProductData.iduser+"' GROUP BY idproduct  LIMIT 50",
                async(err, result) => {
                    //console.log(result);
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {     
                        armaresult = await ProductModel.armaresult(result);  
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


//LISTAR DETALLE DE UN PRODRUCTO - TAKASTEAR 
ProductModel.DetailsProduct = (ProductData,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {
            let armaresult={};
            pool.query(
                "SELECT id as idproduct,DATE_FORMAT(datepublication, '%d/%m/%Y') AS registro,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,status FROM  product  WHERE id="+ProductData.id,
                async(err, result) => {
                    //console.log(result);
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {     
                        armaresult = await ProductModel.armaresult(result);  
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



module.exports = ProductModel;