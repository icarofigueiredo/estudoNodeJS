var socket = io();
//var socket = new io.Socket('localhost',{'port':3000});
socket.connect();
console.log(socket);
socket.on('novaPromocao',function(data){
    alert("Livro em promocao "+data.livro.id);
});