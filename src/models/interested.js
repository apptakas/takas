const pool = require('../config/database');
let InterestedModel = {};
const date = require('date-and-time');

InterestedModel.InterestedSubasTakas = (DataInterested,FlagInterested) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let consulta="INSERT INTO interested SET ?";
         if(FlagInterested==false){
            consulta="UPDATE interested SET ? WHERE idsubastakas="+DataInterested.idsubastakas+" AND iduser="+DataInterested.idsubastakas
         }
         pool.query(
            consulta, DataInterested,
             (err, result) => {
                // console.log(err);
                // console.log(result);
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


module.exports = InterestedModel;