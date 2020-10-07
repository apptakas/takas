const pool = require('../config/database');
let QuestionsModel = {};


//ListUsers  - obtenemos lista de usuarios segun el rol
QuestionsModel.NewQuestion = (QuestionData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            pool.query(
                'INSERT INTO questions SET ?',[QuestionData],
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


module.exports = QuestionsModel;