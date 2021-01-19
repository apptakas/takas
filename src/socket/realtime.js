const StaticClass = require('./statics');
const statics = new StaticClass();

module.exports = function (server) {

    const io = require('socket.io')(server);

    io.on('connection', (socket) => {

        console.log(socket.id);
        socket.on('SubastakasRoom', function (code, data) {
            switch (code) {
                //TODO: Establecer cuales serán los códigos y la estructura del data de cada uno.
                case 100: //* Unirse a la sala
                    //TODO: Antes o despues se deberia guardar en la base de datos el miembro dentro de la sala.
                    console.log('uniendose a la sala: ' + data.roomID);
                    if (statics.rooms[data.roomID] == undefined) {
                        statics.rooms[data.roomID] = {
                            members: [{
                                socket: socket,
                                idUser: socket.id//! Cambiar por => data.uid
                            }]
                        };
                    } else {
                        if (!statics.rooms[data.roomID].members.some(item => item.idUser === socket.id)) {
                            statics.rooms[data.roomID].members.push({
                                socket: socket,
                                idUser: socket.id//! Cambiar por => data.uid
                            });
                        }
                    }
                    var members = statics.getDataMembersRooms(data.roomID);
                    statics.broadcastRoom(data.roomID, 'members', members);
                    break;
                default:
                    console.log(`No define code: ${code}`);
                    break;
            }

        })
    })
}