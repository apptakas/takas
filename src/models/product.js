const pool = require('../config/database');
const keywords = require('../models/keywords.js');
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
    console.log("KeyWordsProduct");
    console.log(KeyWordsProduct);
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

ProductModel.DeletePublication = (idfirebaseUser,idPublication) => {
    return new Promise((resolve, reject) => {
    if (pool) {
       // let armaresult={};
        pool.query(
            "UPDATE product SET status = 5 where id="+idPublication+" AND iduser='"+idfirebaseUser+"'",
            (err, result) => {
                console.log(result);                 
                
                if (err) {
                    resolve({
                        'error': err
                    })
                } else {  
                    //armaresult = await ProductModel.armaresult(result);  
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

//ListUsers  - obtenemos lista de usuarios segun el rol
ProductModel.NewProductCKW = (ProductData,PreferecesProduct,ImagesProduct,KeyWordsProduct) => {
    //let resultado = {};
    // console.log("KeyWordsProduct");
    // console.log(KeyWordsProduct);
    return new Promise((resolve, reject) => {
        if (pool) {
            let createdkeywords={};
            pool.query(
                'INSERT INTO product SET ?', ProductData,
                async(err, resut) => {
                    //console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        // console.log("resut reg product");
                        // console.log(resut.insertId);
                        createdkeywords = await keywords.newkeywords(KeyWordsProduct,ProductData.subcategory,resut.insertId);
                        //console.log(createdkeywords);
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


////ListUsers  - obtenemos lista de usuarios segun el rol
ProductModel.EditProductCKW = (ProductData,idproduct,PreferecesProduct,ImagesProduct,KeyWordsProduct) => {
    let createdkeywords = {};
    // console.log("KeyWordsProduct");
    // console.log(KeyWordsProduct);
    return new Promise((resolve, reject) => {
        if (pool) {
            let createdkeywords={};
            pool.query(
                'Update product SET ? where id='+idproduct, ProductData,
                async(err, resut) => {
                    //console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        // console.log("resut reg product");
                        // console.log(resut.insertId);
                        createdkeywords = await keywords.newkeywords(KeyWordsProduct,ProductData.subcategory,idproduct);
                        //console.log(createdkeywords);
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


//FindProductCKW  - Buscar productos
ProductModel.FindProductCKW = (idUserProduct,idProduct) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT * FROM product WHERE id=?', idProduct,
                (err, resut) => {
                    //console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({
                            'result': resut[0]
                        })  
                    }//fin if ImagesProduct.length!=0
                      

                }
            )
            //return resultado;
        }
    })
};



//LISTAR LOS PRODUCTOS PUBLICADOS POR UN USUARIO - TAKASTEAR 
ProductModel.ListMisProductos = (UserData,ProductData,estatus,callback) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let armaresult={};
            let consulta="";
            if(estatus==1){
                consulta="SELECT DISTINCT idproduct,datepublication,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,p.conditions,p.size,p.weight,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct  WHERE iduser='"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct ";
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
                "SELECT DISTINCT idproduct, datepublication ,DATE_FORMAT(datepublication, '%d/%m/%Y %H:%i:%s') AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,p.conditions,p.size,p.weight,status FROM product AS p INNER JOIN  imgproduct AS i ON p.id=idproduct WHERE iduser<>'"+UserData.iduser+"' AND status="+ProductData.status+" AND p.id=idproduct  LIMIT 50",
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
ProductModel.findProductos = (nameProduct,IdUserProduct) => {
    //let resultado = {};
    //console.log('SELECT * FROM  product AS p INNER JOIN imgproduct ON p.id=idproduct  WHERE iduser= "'+UserData.iduser+'" AND status='+ProductData.status);
    return new Promise((resolve, reject) => {
        if (pool) {

            let armaresult={};
            pool.query(
                "SELECT * FROM keywords AS k INNER JOIN keyword_product AS kp ON k.id=kp.idword INNER JOIN product AS p ON kp.idproduct=p.id INNER JOIN  imgproduct AS i ON p.id=i.idproduct WHERE (k.word LIKE '%Intel%' OR p.NAME LIKE '%"+nameProduct+"%')  AND STATUS=3 AND iduser<>'"+IdUserProduct+"' ORDER BY p.datepublication DESC",
                async(err, result) => {
                    //console.log(result);                  
                   
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {   
                        armaresult = await ProductModel.armaresult(result); 
                        //console.log("armaresult: "+armaresult); 
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
            let idproducs=0;
            //console.log(result);
            for (const element of result) {
                //console.log(element.idproduct+" - "+idproducs);
                if(element.idproduct!=idproducs){
                    //console.log("idproducs - "+element.idproduct);
                    idproducs=element.idproduct;
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

                    let FlagProduct=element.status;
                    let statusProduct=0; //Publicación activa
                    let Editable=true; //Publicación activa
                    if(FlagProduct==4){
                        statusProduct=1; // Publicación Takasteada
                    }
                    if(FlagProduct==5){
                        statusProduct=2;//Publicación Elimidada ó Deshabilitada
                    }
                    if(FlagProduct==26){
                        statusProduct=3;//Publicación Editada
                    
                    }

                    let rp = await ProductModel.FindProductCKW(element.iduser,element.idproduct);
                    //console.log(rp);
                    //console.log(horaServidor);
                    let datepublication = new Date(rp.result.datepublication);
                    //fecha de creación de producto
                    let fechacp = date.format(datepublication, 'YYYY-MM-DD HH:mm:ss');
                    //console.log(now);
                    let Diferenciafechas=date.subtract(now, datepublication).toMinutes();

                    if(Diferenciafechas>20){
                        Editable=false;
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
                        "conditions": element.conditions,
                        "size": element.size,
                        "weight": element.weight,
                        "status": statusProduct,
                        "editable": Editable,
                        "CantidadOfertas":CantidadOfertas.CantOfertas,
                        "ProductImages":img.ImagesProduct,
                        "Preferences":prefe.Preferences
                        
                    });
                   
                }
            }//fin for 
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
                "SELECT id as idproduct,datepublication ,datepublication AS datecreated,iduser,name,details,typemoney,marketvalue,subcategory,typepublication,conditions,size,weight,status FROM  product  WHERE id="+ProductData.id,
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

//ACTUALIZAMOS STATUS DE LA PUBLICACIÓN
ProductModel.UpdateStatusPublication = (idPubli) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            //let FindDatOffer={};
            let  consulta="UPDATE  product SET  status=4 WHERE id="+idPubli;
        
            pool.query(
                consulta,
                async(err, result) => {
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

//ACTUALIZAMOS STATUS DE LAS PUBLICACIONES DE UNA OFERTA
ProductModel.UpdateStatusPublicationOffer = (idOffer) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            //let FindDatOffer={};
            let  consulta="SELECT o.id, ops.idpublication FROM offers AS o  INNER JOIN offersproductservices AS ops ON o.id=ops.idoffers WHERE o.id="+idOffer;
        
            pool.query(
                consulta,
                async(err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {    
                        ///DETERMINAR DE QUE USUARIO ES LA ACCIÓN DEL MATCH 
                        let response=await ProductModel.RecorridoPublicationOffer(result);                     
                                             
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

//UPDATE ITEMS DE PUBLICACIONES QUE PERTENECEN A UNA OFERTA 
ProductModel.RecorridoPublicationOffer = async(element) => {

    if(element.length>0){
        // console.log(SumItemsOffer);
        for(var atr2 in element){
            // "iduser": element[0].iduser,
            let response=await ProductModel.UpdateStatusPublication(element[atr2].idpublication);               
            
        }; // fin for                    
    }; //fin if

};




module.exports = ProductModel;