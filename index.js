// Application Imports 
var _express = require('express');

// Application  Variables 
var _app = _express();
var _port = 9090;

// Application Default Endpoint
_app.get('/', function(request,response,next){
    response.send('Hello World from Docker!'); 
});

// Hello world with salute 
_app.get('/sayhello/:name', function(request,response,next){
    response.send(`Hello ${request.params.name} from Docker!`); 
});
_app.get('/saygoodbye/:name', function(request,response,next){
    response.send(`Goodbye ${request.params.name} from Docker!`); 
});

// Application Configuration
_app.listen(_port,function(){
    console.log(`Log - ${ new Date().toLocaleDateString() } - Server is Up and running on port: ${_port}`)
});
