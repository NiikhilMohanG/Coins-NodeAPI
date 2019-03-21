
var Coins = require('coins-shared-utils');

var app = Coins.App;

//Define routes
var auth = require('./controllers/auth.controller')
var settings = require('./controllers/settings.controller');

//Set routes
app.use('/auth', auth);
app.use('/settings', settings);

Coins.Listen(app);
