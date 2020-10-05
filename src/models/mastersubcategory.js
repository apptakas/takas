const pool = require('../config/database');
let MasterSubCategoryModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
MasterSubCategoryModel.ListSubCategory = (callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT id,NAME,icon,category,STATUS,c.`typepublication` FROM `mastersubcategory` INNER JOIN `mastercategory` AS c ON id=idsc WHERE STATUS=1',
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

module.exports = MasterSubCategoryModel;