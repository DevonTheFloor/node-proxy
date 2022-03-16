
var http = require('http')
const app = require('./app')
const proxiedPort = 9000
// CReate the main server who serve the app 
const mainServer = http.createServer(app)
mainServer.listen(3000)
console.log('Main Server \n listen on port 3000')

// Create your target server who is proxied by the proxy

http.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.write('Request successfully proxied!' + '\n' + 'You are linked to the proxied server on port '+ proxiedPort);
res.end();
}).listen(proxiedPort);