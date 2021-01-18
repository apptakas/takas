const pool = require('../config/database');
let InterestedModel = {};
const date = require('date-and-time');

InterestedModel.InterestedSubasTakas = (DataInterested,FlagInterested) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         let consulta="INSERT INTO interested SET status="+DataInterested.status+",idsubastakas="+DataInterested.idsubastakas+",iduser='"+DataInterested.iduser+"'";
         if(FlagInterested==false){
            consulta="UPDATE interested SET status="+DataInterested.status+" WHERE idsubastakas="+DataInterested.idsubastakas+" AND iduser='"+DataInterested.iduser+"'"
         }
         console.log(consulta);
         pool.query(
            consulta,
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