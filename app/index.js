/**
 * 
 * 
 * 
 */

 const http = require('http');
 const url = require('url');

 //respond to requests with a string

 var server = http.createServer(function(req, res){
    
    //get URL and parse it
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.info('trimmed path: ' + trimmedPath);

    //get path from URL

    //send back a response

    res.end('Hello World');

    //then log what path the person was asking for


 })


 //start server, start listening on 3000

 server.listen('3000', function(){
     console.log('listening on port 3000');
 });