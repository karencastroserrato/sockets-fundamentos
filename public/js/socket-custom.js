var socket = io();

//Recibir informacion del servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})

//Enviar informacion a el servidor
socket.emit('enviarMensaje', {
        usuario: 'Karen',
        mensaje: 'Saludo'
    },
    function(resp) {
        console.log('Respuesta del servidor', resp);
    }
);