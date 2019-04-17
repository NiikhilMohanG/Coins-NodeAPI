
const Coins = require('coins-shared-utils');
const path = require('path');

const app = Coins.App;

//Define routes
const auth = require('./controllers/auth.controller')
const settings = require('./controllers/settings.controller');

//Set routes
app.use('/auth', auth);
app.use('/settings', settings);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


Coins.GetHomePage(app,"Auth.Service");

Coins.Listen(app);
