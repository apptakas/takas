const pool = require('../config/database');
const date = require('date-and-time');
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

//ListQuestionAnswer  - Obtenemos lista de preguntas y respuestas por publicación
QuestionsModel.ListQuestionAnswer = (QuestionData,callback) => {
    //let resultado = {};
    return new Promise((resolve, reject) => {
        if (pool) {
            let QuestionsAnswer={};
            pool.query(
                'SELECT * FROM `questions` WHERE  ? AND isquestions=TRUE',[QuestionData],
                async(err, result) => {
                    //console.log(result);
                    QuestionsAnswer = await QuestionsModel.recorridoQuestionsAnswer(result);
                    if (err) {
                        resolve({
                            'error': err
                        })
                    } else {
                        resolve({
                            'result': QuestionsAnswer
                        })
                    }

                }
            )
            //return resultado;
        }
    })
};

QuestionsModel.recorridoQuestionsAnswer = (result) => {

    return new Promise(async (resolve, reject) => {
        let arr = [];

        for (const element of result) {
            arr.push(await QuestionsModel.ListQuestionsAnswer(element));
        }
        resolve(arr)
    }
    )

} 

QuestionsModel.ListQuestionsAnswer = (element) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM `questions` WHERE questions='+element.id+' AND isquestions=FALSE LIMIT 1',
            (err2, result2) => {
                if (err2) {
                    resolve({
                        'error': err
                    })
                } else { 
                 console.log(result2); 
                 console.log(result2.length);
                 let Answers= {}; 
                //for(var atr2 in result2){
                    if(result2.length>0){
                         Answers={
                            "idPregunta": result2[0].questions,
                            "Respuesta": result2[0].description,
                            "publication": result2[0].publication,
                            "idproduct": result2[0].idproduct,
                            "idservice": result2[0].idservice,
                            "idauction": result2[0].idauction,
                            "datecreated": date.format(result2[0].datecreated, 'DD/MM/YYYY HH:MM:SS'),
                            "iduser": result2[0].iduser,
                            "status":result2[0].status
                        };
                    }  
                //}; 
                console.log(Answers);
                resolve({                    
                    "idquiestions": element.id,
                    "questions": element.questions,
                    "iduser": element.iduser,
                    "Pregunta": element.description,
                    "isquestions": element.isquestions,
                    "publication": element.publication,
                    "idproduct": element.idproduct,
                    "idservice": element.publication,
                    "idauction": element.publication,
                    "datecreated": date.format(element.datecreated, 'DD/MM/YYYY HH:MM:SS'),
                    "typepublication": element.typepublication,
                    "status": element.status,
                    "Answers": Answers
                });
            }
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}


module.exports = QuestionsModel;