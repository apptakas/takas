const pool = require('../config/database');
let mastertypreferencesModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
mastertypreferencesModel.LisTypePreference = (callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT * FROM masterpreferences where status= 1',
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

module.exports = mastertypreferencesModel;