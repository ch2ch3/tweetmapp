var express = require('express');
var server = express();
var globalEmitter = require('./src/globalEmitter.js');
var http = require('http').Server(server);
var io = require('socket.io').listen(http);
var tweetStream = require('./src/twit.js');
var streamProcess = require('./src/streamController.js').streamProcess;

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.render('index');
});

var connections = 0;

io.on('connection', function(socket) { 
  console.log("socket.io server created");
  if (connections === 0 ) { tweetStream.openStream(); }
  connections += 1;
  console.log('User connected');
  globalEmitter.on('tweet', function(object) {
    socketObject = streamProcess(object);
    socket.emit('object', socketObject);
  });

  socket.on('disconnect', function() {
    connections -= 1;
    console.log('User disconnected');
    if (connections === 0) { tweetStream.closeStream(); }
  });
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log("Listening on port " + port);
});