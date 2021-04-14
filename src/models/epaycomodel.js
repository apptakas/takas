const pool = require('../config/database');
let epaycoModel = {};

epaycoModel.Tokenizar = (epayco, iduser, credit_info) => {
    return new Promise(async (resolve, reject) => {

        let tokens = {};
        let result = await epayco.token.create(credit_info)
            .then(function (token) {
                console.log(token);
                tokens = token;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });
        // console.log("tokens");
        // console.log(tokens);
        if (pool) {
            pool.query(
                'UPDATE  users SET  idtokenepayco= ?,tokenepayco= ? WHERE id= ?', [
                tokens.id,
                tokens.object,
                iduser
            ], (err, result2) => {
                //console.log(err);
                // console.log(result);
                if (err) {
                    console.log(err);
                    resolve({
                        'error': err
                    })
                } else {
                    //console.log(result2);
                    resolve({
                        'result': tokens
                    })
                }
            })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }



        //return resultado;

    })
};

epaycoModel.crearclients = (epayco, iduser) => {
    return new Promise(async (resolve, reject) => {
        let Newcustomer = {};
        let UserData = await epaycoModel.FindCustomer(iduser);
        console.log("UserData");
        console.log(UserData);
        console.log("UserData");
        // var customer_info = {
        //     token_card: UserData.result.idtokenepayco,
        //     name: UserData.result.firstname,
        //     last_name: UserData.result.secondname,
        //     email: UserData.result.email,
        //     default: true,
        //     //Optional parameters: These parameters are important when validating the credit card transaction
        //     city: "Bogota",
        //     address: UserData.result.address:,
        //     phone: UserData.result.idtokenepayco,
        //     cell_phone: UserData.result.idtokenepayco,
        // }
        console.log("UserData.result.idtokenepayco");
        console.log(UserData.result.idtokenepayco);
        console.log("UserData.result.idtokenepayco");
        var customer_info = {
            token_card: UserData.result.idtokenepayco,
            name: "Joe",
            last_name: "Doe",
            email: "joe@payco.co",
            default: true,
            //Optional parameters: These parameters are important when validating the credit card transaction
            city: "Bogota",
            address: "Cr 4 # 55 36",
            phone: "3005234321",
            cell_phone: "3010000001"
        }
        let result = await epayco.customers.create(customer_info)
            .then(function (customer) {
                console.log(customer);
                Newcustomer = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });

        console.log("Newcustomer");
        console.log(Newcustomer);

        if (pool) {
            pool.query(
                'UPDATE  users SET  idclientepayco= ? WHERE id= ?', [
                Newcustomer.data.customerId,
                iduser
            ], (err, result2) => {
                //console.log(err);
                // console.log(result);
                if (err) {
                    console.log(err);
                    resolve({
                        'error': err
                    })
                } else {
                    //console.log(result2);
                    resolve({
                        'result': Newcustomer
                    })
                }
            })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }

        //return resultado;

    })
};

epaycoModel.FindCustomer = (iduser) => {
    return new Promise(async (resolve, reject) => {
        if (pool) {
            pool.query(
                'SELECT * FROM `users` WHERE id= ?', iduser,
                (err, result2) => {
                    //console.log(err);
                    // console.log(result);
                    if (err) {
                        console.log(err);
                        resolve({
                            'error': err
                        })
                    } else {
                        //console.log(result2);
                        resolve({
                            'result': result2[0]
                        })
                    }
                })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }
        //return resultado;     
    })
};

epaycoModel.recuperarclient = (epayco, iduser) => {
    return new Promise(async (resolve, reject) => {

        let recuperarclient = {};

        let UserData = await epaycoModel.FindCustomer(iduser);
        let result = await epayco.customers.get("PS9ZmikjhAj9rZiDE")
            .then(function (customer) {
                console.log(customer);
                recuperarclient = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });

        console.log("recuperarclient");
        console.log(recuperarclient);

        resolve({
            'result': recuperarclient,
        })

        //return resultado;

    })
};

epaycoModel.listclient = (epayco, iduser) => {
    return new Promise(async (resolve, reject) => {

        let listclient = {};

        let UserData = await epaycoModel.FindCustomer(iduser);
        let result = await epayco.customers.get("PS9ZmikjhAj9rZiDE")
            .then(function (customer) {
                console.log(customer);
                listclient = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });

        console.log("listclient");
        console.log(listclient);

        resolve({
            'result': listclient,
        })

        //return resultado;

    })
};

epaycoModel.updateclient = (epayco, iduser) => {
    return new Promise(async (resolve, reject) => {
        let Updatecustomer = {};
        let UserData = await epaycoModel.FindCustomer(iduser);

        console.log("UserData.result.idclientepayco");
        console.log(UserData.result.idclientepayco);
        console.log("UserData.result.idclientepayco");

        var update_customer_info = {
            name: UserData.result.firstname,
            last_name: UserData.result.firstsurname,
            // email: "joes@payco.co",
            // default: true,
            //Optional parameters: These parameters are important when validating the credit card transaction
            // city: "Bogota",
            // address: "Cr 4 # 55s 36",
            // phone: "3205234321",
            // cell_phone: "3010000001"
        }

        let result = await epayco.customers.update(UserData.result.idclientepayco, update_customer_info)
            .then(function (customer) {
                console.log(customer);
                Updatecustomer = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });

        console.log("Updatecustomer");
        console.log(Updatecustomer);

        resolve({
            'result': Updatecustomer,
        })

        //return resultado;
    })
};

epaycoModel.deletetoken = (epayco, iduser, delete_customer_info) => {
    return new Promise(async (resolve, reject) => {

        let tokens = {};
        let result = await epayco.customers.delete(delete_customer_info)
            .then(function (customer) {
                console.log(customer);
                tokens = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });
        console.log("tokens");
        console.log(tokens);
        console.log(tokens);

        if (pool) {
            pool.query(
                'UPDATE  users SET  idtokenepayco=NULL,tokenepayco= NULL WHERE id= ?', [
                iduser
            ], (err, result2) => {
                //console.log(err);
                // console.log(result);
                if (err) {
                    console.log(err);
                    resolve({
                        'error': err
                    })
                } else {
                    //console.log(result2);
                    resolve({
                        'result': tokens
                    })
                }
            })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }



        //return resultado;

    })
};

epaycoModel.addnewtoken = (epayco, iduser, customer_info) => {
    return new Promise(async (resolve, reject) => {

        let AddNewtoken = {};
        let UserData = await epaycoModel.FindCustomer(iduser);

        var addDefaultCard_customer = {
            franchise: customer_info.franchise,
            token: customer_info.token,
            mask: customer_info.mask,
            customer_id: UserData.result.idclientepayco
        }


        let result = await epayco.customers.addDefaultCard(addDefaultCard_customer)
            .then(function (customer) {
                console.log(customer);
                AddNewtoken = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });


        console.log("AddNewtoken");
        console.log(AddNewtoken);
        console.log(AddNewtoken);

        if (pool) {
            pool.query(
                'UPDATE  users SET  id=? WHERE id= ?', [
                iduser,
                iduser
            ], (err, result2) => {
                //console.log(err);
                // console.log(result);
                if (err) {
                    console.log(err);
                    resolve({
                        'error': err
                    })
                } else {
                    //console.log(result2);
                    resolve({
                        'result': AddNewtoken
                    })
                }
            })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }



        //return resultado;

    })
};

epaycoModel.addnewtokenclient = (epayco, iduser, token) => {
    return new Promise(async (resolve, reject) => {

        let AddNewtoken = {};
        let UserData = await epaycoModel.FindCustomer(iduser);

        var add_customer_info = {
            token_card: token,
            customer_id: UserData.result.idclientepayco
        }


        let result = await epayco.customers.addNewToken(add_customer_info)
            .then(function (customer) {
                console.log(customer);
                AddNewtoken = customer;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });


        console.log("AddNewtoken");
        console.log(AddNewtoken);
        console.log(AddNewtoken);

        if (pool) {
            pool.query(
                'UPDATE  users SET  id=? WHERE id= ?', [
                iduser,
                iduser
            ], (err, result2) => {
                //console.log(err);
                // console.log(result);
                if (err) {
                    console.log(err);
                    resolve({
                        'error': err
                    })
                } else {
                    //console.log(result2);
                    resolve({
                        'result': AddNewtoken
                    })
                }
            })
            // resolve({
            //     'result': tokens,
            // })
        } else {
            resolve({
                'error': "Error al conectar",
            })

        }



        //return resultado;

    })
};

epaycoModel.creatplans = (epayco, plan_info) => {
    return new Promise(async (resolve, reject) => {

        let createPlan = {};
        let result = await epayco.plans.create(plan_info)
            .then(function (plan) {
                console.log(plan);
                createPlan = plan;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });


        console.log("createPlan");
        console.log(createPlan);
        console.log(createPlan);
        resolve({
            'result': createPlan
        })




        //return resultado;

    })
};

epaycoModel.retieveplans = (epayco, id_plan) => {
    return new Promise(async (resolve, reject) => {

        let retievePlan = {};
        let result = await epayco.plans.get(id_plan)
            .then(function (plan) {
                console.log(plan);
                retievePlan=plan;
            })
            .catch(function (err) {
                console.log("err: " + err);
            });

        console.log("retievePlan");
        console.log(retievePlan);
        console.log(retievePlan);
        resolve({
            'result': retievePlan
        })
    })
};

epaycoModel.listplans = (epayco) => {
    return new Promise(async (resolve, reject) => {

        let ListPlan = {};
        let result = await epayco.plans.list()
        .then(function(plans) {
            console.log(plans);
            ListPlan=plans;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });

        console.log("ListPlan");
        console.log(ListPlan);
        console.log(ListPlan);
        resolve({
            'result': ListPlan
        })
    })
};

epaycoModel.removeplans = (epayco, id_plan) => {
    return new Promise(async (resolve, reject) => {

        let removePlans = {};
        let result = await epayco.plans.delete(id_plan)
        .then(function(plan) {
            console.log(plan);
            removePlans=plan;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });

        console.log("removePlans");
        console.log(removePlans);
        console.log(removePlans);
        resolve({
            'result': removePlans
        })
    })
};

epaycoModel.createsuscription = (epayco, subscription_info) => {
    return new Promise(async (resolve, reject) => {

        let createSuscription = {};
        let result = await epayco.subscriptions.create(subscription_info)
        .then(function(subscription) {
            console.log(subscription);
            createSuscription=subscription;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });


        console.log("createSuscription");
        console.log(createSuscription);
        console.log(createSuscription);
        resolve({
            'result': createSuscription
        })
        //return resultado;

    })
};

epaycoModel.retievesuscription = (epayco, id_suscription) => {
    return new Promise(async (resolve, reject) => {

        let retieveSubscription = {};
        let result = await epayco.subscriptions.get(id_suscription)
        .then(function(subscription) {
            console.log(subscription);
            retieveSubscription=subscription;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });;

        console.log("retieveSubscription");
        console.log(retieveSubscription);
        console.log(retieveSubscription);
        resolve({
            'result': retieveSubscription
        })
    })
};

epaycoModel.listsuscription = (epayco) => {
    return new Promise(async (resolve, reject) => {

        let ListSubscriptions = {};
        let result = await epayco.subscriptions.list()
        .then(function(subscriptions) {
            console.log(subscriptions);
            ListSubscriptions=subscriptions;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });

        console.log("ListSubscriptions");
        console.log(ListSubscriptions);
        console.log(ListSubscriptions);
        resolve({
            'result': ListSubscriptions
        })
    })
};


epaycoModel.removesuscription = (epayco, id_subscription) => {
    return new Promise(async (resolve, reject) => {

        let removeSuscription = {};
        let result = await epayco.subscriptions.cancel(id_subscription)
        .then(function(subscription) {
            console.log(subscription);
            removeSuscription=subscription;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });
        console.log("removeSuscription");
        console.log(removeSuscription);
        console.log(removeSuscription);
        resolve({
            'result': removeSuscription
        })
    })
};

epaycoModel.pay = (epayco, subscription_info) => {
    return new Promise(async (resolve, reject) => {

        let Pay = {};
        let result = await epayco.subscriptions.charge(subscription_info)
        .then(function(subscription) {
            console.log(subscription);
            Pay=subscription;
        })
        .catch(function(err) {
            console.log("err: " + err);
        });
        console.log("Pay");
        console.log(Pay);
        console.log("Pay");
        resolve({
            'result': Pay
        })
    })
};

module.exports = epaycoModel;