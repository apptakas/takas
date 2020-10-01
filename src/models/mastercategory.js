const pool = require('../config/database');




let mastercategoryModel = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
mastercategoryModel.ListCategory = (typePublication,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
    if (pool) {
        pool.query(
            'SELECT * FROM mastercategory where typepublication= ?',[typePublication], 
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
        //return resultado;
    }
})
};


module.exports = mastercategoryModel;