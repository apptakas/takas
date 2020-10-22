const pool = require('../config/database');
let masterstatus = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
masterstatus.listStatusProduct = (idfilter,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT s.id,s.name AS namestatus,s.filter,f.`name`AS namefilter FROM masterstatus AS s INNER JOIN masterfilterstatus AS f ON s.filter=f.id WHERE filter='+idfilter,
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

module.exports = masterstatus;