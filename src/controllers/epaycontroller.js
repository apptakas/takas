const date = require('date-and-time');
const EpaycoModel = require('../models/epaycomodel.js');
const epayco  =  require ( 'epayco-sdk-node' ) ( { 
    apiKey : '94af295e02ef44ee8463a3be8aa1310e' , 
    privateKey : '1652401125483315301f48380ab6d517' , 
    lang : 'ES' , 
    test : true 
} )

let EpayController = {};


EpayController.tokenizacion = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        let iduser= req.idUser
        let credit_info={
            "card[number]":req.CardNumber,
            "card[exp_year]":req.CardExpYear,
            "card[exp_month]":req.CardExpMonth,
            "card[cvc]":req.CardCVC,
        }        
        let response= await EpaycoModel.Tokenizar(epayco,iduser,credit_info);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: 'Tarjeta Tokenizada'
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar tokenizar'
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};



EpayController.crearclient = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        
        let iduser= req.idUser
        let response= await EpaycoModel.crearclients(epayco,iduser);
        console.log("response");
        console.log(response);
        console.log("response.result.status");
        console.log(response.result.status);

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: true,
                status: '200', 
               // token:epayco.token,      
                msg: 'Cliente Creado con Éxito.'
            }   



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar Crear al cliente. '+response.result.data.description
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.recuperarclient = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        
        let iduser= req.idUser
        let response= await EpaycoModel.recuperarclient(epayco,iduser);
        console.log("response");
        console.log(response);
        console.log("response.result.status");
        console.log(response.result.status);

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;
            data = {
                success: true,
                status: '200', 
                data:response.result.data,      
                msg: 'Cliente encontrado con éxito'
            }   
        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar buscars al cliente. '
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.listclient = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        
        let iduser= req.idUser
        let response= await EpaycoModel.listclient(epayco,iduser);
        console.log("response");
        console.log(response);
        console.log("response.result.status");
        console.log(response.result.status);

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;
            data = {
                success: true,
                status: '200', 
                data:response.result.data,      
                msg: 'Lista de clientes con éxito'
            }   
        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar listar  clientes. '
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.updateclient = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        
        let iduser= req.idUser
        let response= await EpaycoModel.updateclient(epayco,iduser);
        console.log("response");
        console.log(response);
        console.log("response.result.status");
        console.log(response.result.status);

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: true,
                status: '200', 
               // token:epayco.token,      
                msg: 'Cliente Actualizado con Éxito.'
            }   



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: 'Error al intentar acualizar al cliente. '
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


EpayController.deletetoken = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        let iduser= req.idUser
        let delete_customer_info={
            franchise : req.franchise,
            mask : req.mask,
            customer_id: req.customer_id
        }        
        let response= await EpaycoModel.deletetoken(epayco,iduser,delete_customer_info);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.addnewtoken = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        let iduser= req.idUser
        let customer_info={
            franchise : req.franchise,
            token : req.token,
            mask : req.mask,
            customer_id: req.customer_id
        }        
        let response= await EpaycoModel.addnewtoken(epayco,iduser,customer_info);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


EpayController.addnewtokenclient = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        let iduser= req.idUser
        let token= req.token
              
        let response= await EpaycoModel.addnewtokenclient(epayco,iduser,token);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};
//planes
EpayController.creatplans = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        var plan_info = {
            id_plan: req.id_plan,
            name: req.name,
            description: req.description,
            amount: req.amount,
            currency: req.currency,
            interval: req.interval,
            interval_count: req.interval_count,
            trial_days: req.trial_days
        }
              
        let response= await EpaycoModel.creatplans(epayco,plan_info);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: "El plan ha sido creado exitosamente"
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.retieveplans = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        
        let id_plan= req.id_plan;
        let response= await EpaycoModel.retieveplans(epayco,id_plan);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
                date: response.result.plan,
               // token:epayco.token,      
                msg: "El plan ha sido encontrado exitosamente"
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


EpayController.listplans = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        let response= await EpaycoModel.listplans(epayco);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
                date: response.result.data,
               // token:epayco.token,      
                msg: "Lista de plan exitosa"
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.removeplans = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        
        let id_plan= req.id_plan;
        let response= await EpaycoModel.removeplans(epayco,id_plan);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error: "Error al intentar remover plan"
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};
  //////////SUSCRIPCIONES////////////////
  EpayController.createsuscription = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        //console.log(req);
        var subscription_info = {
            id_plan: req.id_plan,
            customer: req.customer,
            token_card: req.token_card,
            doc_type: req.doc_type,
            doc_number: req.doc_number,
            parameter: req.parameter,
            url_confirmation: req.url_confirmation,
            method_confirmation: req.method_confirmation
        }

        let response= await EpaycoModel.createsuscription(epayco,subscription_info);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,   
               Inicio: response.result.current_period_start,
               Fin: response.result.current_period_end ,  
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


EpayController.retievesuscription = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        
        let id_suscription= req.id_suscription;
        let response= await EpaycoModel.retievesuscription(epayco,id_suscription);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
                data: response.result,
               // token:epayco.token,      
                msg: "Suscripción encontrada exitosamente"
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                msg: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.listsuscription = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        let response= await EpaycoModel.listsuscription(epayco);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
                date: response.result.data,
               // token:epayco.token,      
                msg: "Lista de Suscripciones exitosa"
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error:response.msg,
                //msg: response.result.message
                msg: "Error al intentar listar suscripciones"
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.removesuscription = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');

        let OfferData ={};
        
        let id_subscription= req.id_subscription;
        let response= await EpaycoModel.removesuscription(epayco,id_subscription);      

        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};

EpayController.pay = async (req) => {
    try {

        let dt = new Date();//getMonth   getDate

        let now = new Date();
        let hoy=date.format(now, 'YYYY-MM-DD HH:mm:ss');
        
        var subscription_info = {
            id_plan: req.id_plan,
            customer: req.customer,
            token_card: req.token_card,
            doc_type: req.doc_type,
            doc_number: req.doc_number,
            ip:req.ip 
        }

        let response= await EpaycoModel.pay(epayco,subscription_info);      
        
        let data = {};
        if (response.result.status) {
            let r = {};
           // r = response.Epayco;

            data = {
                success: response.result.status,
                status: '200', 
               // token:epayco.token,      
                msg: response.result.message
            }          



        } else {

            data = {
                success: false,
                status: '500',
                error: response.result.message
            }
        }
        //validar si esta llegado vacio
        return { status: 'ok', data: data };
    } catch (e) {
        console.log(e);
        return { status: 'ko' };
    }

};


module.exports = EpayController;