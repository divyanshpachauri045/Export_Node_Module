var http = require('http');
var own = require('./myOwnModule');

http.createServer(function(req,res){

  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Current date is : "+own.myOwnModule());
  res.end();

}).listen(8080);