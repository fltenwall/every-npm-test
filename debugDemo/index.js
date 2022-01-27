import http from 'http';
import debug from 'debug';
import getPort from 'get-port';
const port = await getPort();

var name = 'My App';

debug('booting %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(port, function(){
  debug('listening');
});
