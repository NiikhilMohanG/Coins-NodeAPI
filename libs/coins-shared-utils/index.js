/**
 * This module is defined as the base, that can be used while creating services
 */

var server; //server variable
var base = {};

//Dependencies
var Express = require('express');
var http = require('http');
var Cors = require('cors');

//Custom Dependencies
base.FileSys = require('./libs/file-reader.js');
base.Settings = require('./libs/appsettings.js');
base.MongoProvider = require('./libs/mongoprovider.js');

//Properties
base.App = Express();
base.Router = Express.Router();

//enabling CORS
base.App.use(Cors());

/**
 * Invoke the index page
 */
base.GetHomePage = function (_app, _pagetitle) {
  _app.get('/', function (req, res) { res.render('index', { title: _pagetitle }) });
};

base.Listen = function (_app) {
  /**
* Get port from environment and store in Express.
*/
  var port = normalizePort(process.env.PORT || base.Settings.port);
  _app.set('port', port);


  /**
   * Create HTTP server.
  */
  server = http.createServer(_app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

};

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
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

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {    
    return val; // named pipe
  }
  if (port >= 0) {    
    return port; // port number
  }
  return false;
}





//exports keyword is used to ensure that the functionality defined here can be accessed by other files
module.exports = base;