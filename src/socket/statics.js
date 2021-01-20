class Statics {
    //* Inicializacion de variables publicas y rivadas
    constructor() {
        //? El this identifica como variable pública
        this.rooms = new Array();
        /**
         * Estructura = [
         *   <<roomID>>:{
         *      members:[
         *          {
         *              socket: <<Object>>, //? Aqui se guarda la variable socket
         *              idUser: <<Sring>>   //? El id del usuario
         *          }
         *      ]
         *   }
         * ]
         */

        //? Si se desea inicializar como variable privada (solo se accede desde esta clase) utilizar <<var miVariable;>>
    }

    //* Obtener los datos de todos los miembros de una sala
    getDataMembersRooms(roomID) {
        var data = [];
        if (this.rooms[roomID] != undefined) {
            for (let element of this.rooms[roomID].members) {
                data.push({ idUser: element.idUser })
            }
        }
        return data;
    }

    //* Eliminar un usuario de la sala
    deleteMemberToRoom(roomID, uid) {
        if (this.rooms[roomID] != undefined) {
            if (!this.rooms[data.roomID].members.some(item => item.idUser === uid)) {
                var index = this.rooms[data.roomID].members.findIndex(item => item.idUser === uid);
                if (index > -1) {
                    this.rooms[data.roomID].members.splice(index, 1);
                    return true;
                }
            }
        }
        return false;
    }

    //* Enviar datos a un solo usuario de una sala
    sendToMember(roomID, uid, title, data) {
        if (this.rooms[roomID] != undefined) {
            if (this.rooms[data.roomID].members.some(item => item.idUser === uid)) {
                var member = this.rooms[data.roomID].members.find(item => item.idUser === uid);
                if (member != undefined) {
                    member.socket.emit(title, data)
                }
            }
        }
    }

    //* Enviar datos a todos los usuarios de una sala
    broadcastRoom(roomID, title, data) {
        if (this.rooms[roomID] != undefined) {
            this.rooms[roomID].members.forEach(element => {
                element.socket.emit(title, data);//? Accede a cada socket y envia el mensaje.
            })
        }
    }
}

module.exports = Statics;