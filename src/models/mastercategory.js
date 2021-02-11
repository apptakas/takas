const pool = require('../config/database');




let mastercategoryModel = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
mastercategoryModel.ListCategory = (typePublication) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {

            let CatgySubCatg = {};
            //let Subcategory  ={};
            pool.query(
                'SELECT id,namec,iconc FROM mastercategory where typepublication= ? order by namec asc', [typePublication],
                async (err, result) => {
                    //console.log("/////////////");
                    //console.log(result.length);
                    CatgySubCatg = await mastercategoryModel.recorridoSubCategory(result);


                    //console.log(CatgySubCatg);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({

                            'result': CatgySubCatg
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

mastercategoryModel.recorridoSubCategory = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];

        for (const element of result) {
            arr.push(await mastercategoryModel.ListSubCategory(element));
        }
        resolve(arr)
    }
    )

}


mastercategoryModel.ListSubCategory = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM `mastersubcategory` WHERE category= ?', [element.id],
            (err2, result2) => {
                //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2);   
                resolve({
                    "id": element.id,
                    "namec": element.namec,
                    "iconc": element.iconc,
                    "SubCategory": result2,
                });
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}


module.exports = mastercategoryModel;