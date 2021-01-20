class Statics {
    //* Inicializacion de variables publicas y rivadas
    constructor() {
        //? El this identifica como variable pública
        this.roomsSubastakas = new Array();
        /**
         * Estructura = [
         *   <<roomID>>:{
         *      status: <<int>> //? Status de la sala (0:no ha iniciado, 1: Abierta, 2: cerrada por tiempo, 3: subastakeada)
         *      members:[
         *          {   
         *              idUser: <<Sring>>   //? El id del usuario
         *              name: <<String>>    //? El nombre del usuario
         *              img: <<String>>     //? La foto del usuario (URL)
         *              socket: <<Object>>, //? Aqui se guarda la variable socket
         *              status: <<int>>     //? estatus del usuario (0:activo, 1:inactivo, 2: fuera [No tiene socket])
         *              
         *          }
         *      ],
         *      offerts:[
         *          <<offertID>>:{
         *              products:[<<String>>...] //? Arreglo de IDs de los productos
         *              money: <<Double>>        //? Cantidad de dinero dentro de la oferta
         *              idUser: <<String>>       //? Usuario que ofertó
         *          }
         *      ],
         *      bestOffert:<<String>> //? ID la oferta
         *   }
         * ]
         */

        //? Si se desea inicializar como variable privada (solo se accede desde esta clase) utilizar <<var miVariable;>>
    }

    deleteRoom(roomID) {
        if (this.roomsSubastakas[roomID] != undefined) {
            this.roomsSubastakas[roomID].members.forEach(element => {
                element.socket.disconnect();//? Accede a cada socket y envia el mensaje.
                var index = this.roomsSubastakas[roomID].members.findIndex(item => item.idUser === element.idUser);
                if (index > -1) {
                    this.roomsSubastakas[roomID].members[index].status = 2;
                    this.roomsSubastakas[roomID].members[index].socket = undefined;
                }
            })
            delete this.roomsSubastakas[roomID];
        }
    }

    addMemberToRoom(roomID, uid, socket, name, img, status) {
        if (this.roomsSubastakas[roomID] == undefined) { //* Es el primer miembro, se crea la sala
            //TODO: Buscar en la base de datos el tiempo restante;
            //!cambiar por el tiempo restante de la base de datos
            var miliseconds = 3.6e+6; //? una hora;
            this.roomsSubastakas[roomID] = {
                status: status,
                members: [{
                    idUser: uid,
                    name: name,
                    img: img,
                    socket: socket,
                    status: 0
                }],
                offerts: [],
                bestOffert: null
            };

            //* Cerrar la sala cuando se acabe el tiempo
            setTimeout(() => { //? El setTimeout ejecuta la funcion luego de que se acabe el tiempo
                if (this.getDataStatusRoom(roomID) == 1) {
                    if (this.updateStatusToRoom(roomID, 2)) {
                        this.broadcastRoom(roomID, "SubastakasRoom", 103);
                        //TODO: Guardar en la base de dato y luego elimna
                        this.deleteRoom(roomID);
                    }
                }
            }, miliseconds)
            return true;
        } else {
            if (!this.roomsSubastakas[roomID].members.some(item => item.idUser === uid)) {
                this.roomsSubastakas[roomID].members.push({
                    idUser: uid,
                    name: name,
                    img: img,
                    socket: socket,
                    status: 0
                });
                return true;
            } else {
                var index = this.roomsSubastakas[data.roomID].members.findIndex(item => item.idUser === uid);
                if (index > -1) {
                    if (this.roomsSubastakas[roomID].members[index].status == 2 || this.roomsSubastakas[roomID].members[index].status == 1) {
                        this.roomsSubastakas[roomID].members[index].socket = socket;
                        this.roomsSubastakas[roomID].members[index].status = 0;
                    }
                }
            }

        }
        return false;
    }

    //* Crear nueva oferta
    addOffertToRoom(roomID, idOffert, uid, products, money) {
        if (this.roomsSubastakas[roomID] != undefined) {
            if (this.roomsSubastakas[roomID].offerts[idOffert] == undefined) {
                this.roomsSubastakas[roomID].offerts[idOffert] = {
                    idUser: uid,
                    products: products,
                    mney: money,
                }
                return true;
            }
        }
        return false;
    }

    //* Seleccionar mejor oferta
    updateBestOffertToRoom(roomID, idOffert) {
        if (this.roomsSubastakas[roomID] != undefined) {
            if (this.roomsSubastakas[roomID].bestOffert != idOffert && this.roomsSubastakas[roomID].offerts[idOffert] != undefined) {
                this.roomsSubastakas[roomID].idOffert = idOffert
                return true;
            }
        }
        return false;
    }

    //* Cambiar status de la sala
    updateStatusToRoom(roomID, status) {
        if (this.roomsSubastakas[roomID] != undefined) {
            if (this.roomsSubastakas[roomID].status != status) {
                this.roomsSubastakas[roomID].status = status
                return true;
            }
        }
        return false;
    }


    //* Obtener los datos de todos los miembros de una sala
    getDataRoom(roomID) {
        var data = null;
        if (this.roomsSubastakas[roomID] != undefined) {
            data = this.roomsSubastakas[roomID];
            //// for (let element of this.roomsSubastakas[roomID].members) {
            ////     data.push({ idUser: element.idUser })
            //// }
        }
        return data;
    }

    //* Obtener los datos de todos los miembros de una sala
    getDataMembersRoom(roomID) {
        var data = [];
        if (this.roomsSubastakas[roomID] != undefined) {
            data = this.roomsSubastakas[roomID].members;
            //// for (let element of this.roomsSubastakas[roomID].members) {
            ////     data.push({ idUser: element.idUser })
            //// }
        }
        return data;
    }

    //* Obtener la mejor oferta de una sala
    getDataBestOffertRoom(roomID) {
        var data = null;
        if (this.roomsSubastakas[roomID] != undefined) {
            data = this.roomsSubastakas[roomID].bestOffert;
        }
        return data;
    }

    //* Obtener el status de una sala
    getDataStatusRoom(roomID) {
        var data = null;
        if (this.roomsSubastakas[roomID] != undefined) {
            data = this.roomsSubastakas[roomID].status;
        }
        return data;
    }

    //* Obtener los datos de todos las ofertas de una sala
    getDataOffertsRooms(roomID) {
        var data = [];
        if (this.roomsSubastakas[roomID] != undefined) {
            data = this.roomsSubastakas[roomID].offerts;
        }
        return data;
    }

    //* Eliminar un usuario de la sala
    deleteMemberToRoom(roomID, uid) {
        if (this.roomsSubastakas[roomID] != undefined) {
            if (!this.roomsSubastakas[roomID].members.some(item => item.idUser === uid)) {
                var index = this.roomsSubastakas[roomID].members.findIndex(item => item.idUser === uid);
                if (index > -1) {
                    //* Cambiamos el estatus del usuario en la sala
                    this.roomsSubastakas[roomID].members[index].status = 2;
                    this.roomsSubastakas[roomID].members[index].socket = undefined;
                }
                // // if (index > -1) {
                // //     this.roomsSubastakas[roomID].members.splice(index, 1);
                // //     return true;
                // // }
            }
        }
        return false;
    }

    //* Enviar datos a un solo usuario de una sala
    sendToMember(roomID, uid, title, data) {
        if (this.roomsSubastakas[roomID] != undefined) {
            if (this.roomsSubastakas[roomID].members.some(item => item.idUser === uid)) {
                var member = this.roomsSubastakas[roomID].members.find(item => item.idUser === uid);
                if (member != undefined) {
                    if (member.socket != undefined) {
                        member.socket.emit(title, data)
                    }
                }
            }
        }
    }

    //* Enviar datos a todos los usuarios de una sala
    broadcastRoom(roomID, title, code, data) {
        if (this.roomsSubastakas[roomID] != undefined) {
            this.roomsSubastakas[roomID].members.forEach(element => {
                if (element.socket != undefined && element.status == 0) {
                    element.socket.emit(title, code, data);//? Accede a cada socket y envia el mensaje.
                }
            })
        }
    }
}

module.exports = Statics;