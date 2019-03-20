//Include shared-utils to get the base controller functionalities
var base = require("coins-shared-utils");
var settingsService = require("../business/appconfig.business");

var app = base.CoinsApp;

//Methods
app.get('/get/appsettings', function (req, res) {
    res.send(settingsService.GetAppConfig());    
});

//Invoke server method to listen
base.InvokeServer(app);