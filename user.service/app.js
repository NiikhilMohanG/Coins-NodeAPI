
var Coins = require('coins-shared-utils');
var path = require('path');

var app = Coins.App;

//define routes
var userroutes = require('./controllers/user.controller');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set routes for the service
app.use('/user', userroutes);


Coins.GetHomePage(app,"User.Service");

Coins.Listen(app);