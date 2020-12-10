const pool = require('../config/database');
let InterestedModel = {};
const date = require('date-and-time');

InterestedModel.InterestedSubasTakas = (DataInterested) => {
    return new Promise((resolve, reject) => {
     if (pool) {
         pool.query(
            'INSERT INTO interested SET ?', DataInterested,
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