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
                msg: 'Tarjeta Tokenizada'
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


module.exports = EpayController;