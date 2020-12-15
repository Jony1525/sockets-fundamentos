var socket = io();

socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola'
}, function(respuesta) {
    console.log('Respuesta del servidor: ', respuesta);
});

socket.on('enviarMensaje', function( mensaje ) {
    console.log('Servidor: ', mensaje);
});