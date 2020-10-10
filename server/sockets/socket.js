const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    //Enviar informacion al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Recibir informacion del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        //callback();

        /* if (mensaje.usuario) {
            callback({
                respuesta: 'Se obtuvieron los datos exitosamente',
            });
        } else {
            callback({
                respuesta: 'NO se obtubieron los datos',
            });
        }; */
    });

});