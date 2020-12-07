const pool = require('../config/database');
let MasterSubCategoryModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
MasterSubCategoryModel.ListSubCategory = (callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT idsc,name,icon,category,sc.status, c.namec, c.typepublication FROM `mastersubcategory` AS sc INNER JOIN mastercategory AS c ON sc.category=c.id WHERE sc.status=1',
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