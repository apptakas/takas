const pool = require('../config/database');
let kw = {};

//Newkeywords  - obtenemos lista de palabras claves 
kw.newkeywords = (KeyWordsProduct,subcategory,product) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let createdkeywordS={};
            let createdkeywordsP={};
            let existekeyword ={};

           for(var atr2 in KeyWordsProduct){             
               
                pool.query(
                    'INSERT INTO keywords (word) values (?)', KeyWordsProduct[atr2],
                    async(err, result) => {
                        //console.log(result);
                        if (err) {
                            //console.log(err);
                            if(err.errno==1062){
                                existekeyword = await kw.Findkeywords(KeyWordsProduct[atr2]);
                                //console.log(existekeyword);
                                if(existekeyword.exist==true){
                                    createdkeywordS = await kw.keywordS(existekeyword.result.id,subcategory);
                                    createdkeywordsP = await kw.keywordsP(existekeyword.result.id,product);
                                }
                            }
                            resolve({
                                'error': err
                            })
                        } else {
                            //console.log(result);
                            createdkeywordS = await kw.keywordS(result.insertId,subcategory);
                            createdkeywordsP = await kw.keywordsP(result.insertId,product);
                            resolve({
                                'result':result
                            })
                        }

                    }
                )

              
           }
        }
    })
};

//elazar palabras claves a Subcategorias
kw.keywordS = (idKeyWords,idsubcategory) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
           // let Listcities={};
           let existekeyword={};
                pool.query(
                    'INSERT INTO keyword_subcategory (keyword,subcategory) values (?,?)',
                    [
                        idKeyWords,
                        idsubcategory
                    ],
                    async(err, result) => {
                        //console.log(result);
                        if (err) {
                            //existekeyword = await kw.Findkeywords();
                            //console.log(err);
                            resolve({
                                'error': err
                            })
                        } else {
                            //console.log(result);
                            resolve({
                                'result':result
                            })
                        }

                    }
                )
                //return resultado;
           
        }
    })
};
//elazar palabras claves a productos
kw.keywordsP = (idKeyWords,idproduct) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
           // let Listcities={};
           console.log("idproduct");
           console.log(idproduct);
                pool.query(
                    'INSERT INTO keyword_product (idword,idproduct) values (?,?)',
                    [
                        idKeyWords,
                        idproduct
                    ],
                    (err, result) => {
                        //console.log(result);
                        if (err) {
                            resolve({
                                'error': err
                            })
                        } else {
                        //console.log(result);
                            resolve({
                                'result':result
                            })
                        }

                    }
                )
                //return resultado;
           
        }
    })
};

//Findkeywords  - Busqueda de palabras claves 
kw.Findkeywords = (kw) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
           // let Listcities={};
            pool.query(
                'SELECT * FROM keywords where word LIKE ?', kw ,
                (err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err,
                            'exist':false
                        })
                    } else {
                     //console.log(result);
                       resolve({
                        'result':result[0],
                        'exist':true
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};


//Listkeywords  - obtenemos lista de palabras claves 
kw.Listkeywords = (element) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
           // let Listcities={};
            pool.query(
                'SELECT * FROM keywords',
                (err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err,
                        })
                    } else {
                       // console.log(result);
                       resolve({
                        'result':result
                        
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

module.exports = kw;