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


//Listar de características según integridad, tamaño y peso
masterstatus.CharacteristicPublication = (idfilter,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT s.id,s.name AS namestatus,s.filter,f.`name`AS namefilter FROM masterstatus AS s INNER JOIN masterfilterstatus AS f ON s.filter=f.id WHERE filter='+idfilter,
                (err, result) => {
                    //console.log(resut);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        let NoAplica= {
                            "id": 49,
                            "namestatus": "No Aplica ",
                            "filter": 0,
                            "namefilter": "No aplica"
                        }; 
                        let CaracteristicasP= []; 
                        for(var atr2 in result){
                            console.log(result);
                            CaracteristicasP.push(result[atr2]);
                        }; 

                        if(idfilter==6){
                        CaracteristicasP.push(NoAplica);
                        }
                        //result.NoAplica = "nuevoValor";
                     
                        resolve({
                            'result': CaracteristicasP
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

module.exports = masterstatus;