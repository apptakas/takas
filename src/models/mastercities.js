const pool = require('../config/database');
let mastercities = {};

//ListUsers  - obtenemos lista de usuarios segun el rol
mastercities.ListCities = (citiesdata,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let Listcities={};
            pool.query(
                'SELECT u.id as iduser,c.name as city,idcity FROM users AS u INNER JOIN mastercities AS c ON u.idcity=c.id WHERE u.id="'+citiesdata.id+'"',
                async(err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        console.log("result");
                        console.log(result);
                        console.log("/////////////");
                        Listcities = await mastercities.recorridoCities(result);
                        resolve({
                            'result':Listcities
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};



mastercities.recorridoCities = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];

        for (const element of result) {
            arr.push(await mastercities.ListItemsCities(element));
        }
        resolve(arr)
    }
    )

} 

//ListUsers  - obtenemos lista de usuarios segun el rol
mastercities.ListItemsCities = (element) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
           // let Listcities={};
            pool.query(
                'SELECT * FROM mastercities',
                (err, result) => {
                    //console.log(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                       // console.log(result);
                        resolve({
                            'city':element.city,
                            'idcity':element.idcity,
                            'ListCities': result
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

module.exports = mastercities;