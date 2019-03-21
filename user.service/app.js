
var Coins = require('coins-shared-utils');
var http = require('http');

var app = Coins.App;

//define routes
var userroutes = require('./controllers/user.controller');

//set routes for the service
app.use('/user', userroutes);


Coins.Listen(app);