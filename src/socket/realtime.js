const StaticClass = require('./statics');
const statics = new StaticClass();

module.exports = function (server) {

    const io = require('socket.io')(server);

    io.on('connection', (socket) => {

        console.log(socket.id);
        socket.on('SubastakasRoom', function (code, data) { //? Siempre debe enviar roomID
            //TODO: Validar que el estatus de la sala sea Open. (ver si esta en el rango)
            var status = 1;
            switch (code) {
                case 100: //* Unirse a la sala
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String -> id de la sala
                     * @param uid String
                     * @param img String -> imagen de usuario
                     * @param name String -> nombre del usuario
                     */
                    //! Cambiar "socket.id" por "data.uid"

                    var aux = statics.addMemberToRoom(data.roomID, socket.id, socket, status);
                    if (aux) {//* ¿Se agregó? 
                        console.log(socket.id + ' se unió a la sala: ' + data.roomID);
                        var members = statics.getDataMembersRoom(data.roomID);
                        //TODO: Enviar los datos de esta sala al usuario (sin los miembros)

                    }
                    break;
                case 101: //* Crear Oferta
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String 
                     * @param uid String
                     * @param products Array<String> -> Solo los ids de los productos que están dentro de la oferta
                     * @param money Double -> Monto de dinero dentro de la oferta
                     */
                    var idOffert = roomID + socket.uid + Date.now().toString();
                    //! Cambiar "socket.id" por "data.uid"
                    if (statics.addOffertToRoom(data.roomID, idOffert, socket.id, data.products, data.money)) {//* ¿Se agregó? 
                        var offerts = statics.getDataOffertsRoom(data.roomID);
                        statics.broadcastRoom(data.roomID, 'SubastakasRoom', offerts);
                    }
                    break;
                case 102: //* Salir de la sala
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String 
                     * @param uid String
                     * 
                     */
                    //! Cambiar "socket.id" por "data.uid"
                    if (statics.deleteMemberToRoom(data.roomID, socket.id)) { //* ¿Se eliminó? 
                        var members = statics.getDataMembersRoom(data.roomID);
                        statics.broadcastRoom(data.roomID, 'SubastakasRoom',  members);
                    }
                    break;
                case 103: //* Seleccionar Mejor Oferta
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String 
                     * @param uid String
                     * @param idOffert String
                     */
                    //TODO: Validar que el usuario sea el dueño de la sala
                    if (statics.updateBestOffertToRoom(data.roomID, data.idOffert)) { //* ¿Se Actualizó? 
                        var bestOffert = statics.getDataBestOffertRoom(data.roomID);
                        statics.broadcastRoom(data.roomID, 'SubastakasRoom',  { bestOffert: bestOffert });
                    }
                    break;
                case 104: //* Subastakear (cerrrar sala por subastakeo)
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String 
                     * @param uid String
                     * 
                     */
                    //TODO: Validar que el usuario sea el dueño de la sala
                    if (statics.getDataStatusRoom(data.roomID) == 1) { //* ¿Esta abierta?
                        if (statics.updateStatusToRoom(data.roomID, 3)) { //* ¿Se Actualizó? 
                            var status = statics.getDataStatusRoom(data.roomID);
                            statics.broadcastRoom(data.roomID, 'SubastakasRoom', {code:400});
                            //TODO: Guardar en la base de dato y luego elimna
                            statics.deleteRoom(data.roomID);
                        }
                    }
                    break;
                case 105: //* Enviar todos los datos de la sala
                    /** 
                     * ? Datos que se reciben
                     * @param roomID String 
                     * @param uid String
                     * 
                     */
                    // var room = statics.getDataRoom(data.roomID);
                    // if (room != null) {
                    //     statics.broadcastRoom(data.roomID, 'SubastakasRoom', room);
                    // }
                    break;
                default:
                    console.log(`No define code: ${code}`);
                    break;
            }

        })
    })
}