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
            'SELECT * FROM `questions` WHERE questions='+element.id+' AND isquestions=FALSE;',
            (err2, result2) => {
            //console.log(element.id);   
                //console.log(element.namec);   
                //console.log(result2[1].preference);  
                // console.log(result2); 
                // console.log(result2.length);
                let Answers= {}; 
                for(var atr2 in result2){
                    Answers[atr2]={
                        "idPregunta": result2[atr2].idPregunta,
                        "Respuesta": result2[atr2].description,
                        "publication": result2[atr2].publication,
                        "idproduct": result2[atr2].idproduct,
                        "idservice": result2[atr2].idservice,
                        "idauction": result2[atr2].idauction,
                        "datecreated": result2[atr2].datecreated,
                        "iduser": result2[atr2].iduser
                    }; 
                };  
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
                    "datecreated": element.typepublication,
                    "status": element.status,
                    "Answers": Answers,
                });
                //console.log(CatgySubCatg);
                //CatgySubCatg.Subcategory=result2;
                //console.log("//////SUBCATEGORÍA///////");
                // console.log(result2);

            })
    })
}


module.exports = QuestionsModel;