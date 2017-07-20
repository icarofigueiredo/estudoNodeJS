var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);    

app.set('io',io);	
io.on('connection', function(socket){
  console.log('Opa, usuário conectado!');
  socket.on('disconnect', function(){
    console.log('Usuário desconectado :(');
  });
});
var porta = process.env.PORT || 3000;
var server = http.listen(porta, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});