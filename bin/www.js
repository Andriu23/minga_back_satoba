import app from '../app'  // importo la aplicacion de back configurada
import debug from 'debug' // importo el modulo para debuggear
import http from 'http'   // importo el modulo para crear servidores

const logger = debug('minga-back-satoba:server') // se configura el debuggeado
let port = normalizePort(process.env.PORT || '8080');
// defino un operador OR para normalizar el puerto porque cuando hostee deployee el servidor el hosting me va a asignar el
// puerto que tenga el libre para mi app
server.set('port', port);

let app = http.createServer(app);

function ready() {
  console.log('server ready on port '+port)
}

app.listen(
  port,
  ready 
);
app.on('error', onError);
app.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = app.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
