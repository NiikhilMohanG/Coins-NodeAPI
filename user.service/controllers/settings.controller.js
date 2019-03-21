//Include shared-utils to get the base controller functionalities
var base = require("coins-shared-utils");
var settingsService = require("../business/appconfig.business");

var app = base.CoinsApp;
var defer = require('q');
//Methods
app.get('/get/appsettings', function (req, res) {
    settingsService.GetAppConfig().then(function(result){
        res.send(result);
        //res.send("Completed");
    });
        
});

//Invoke server method to listen
base.InvokeServer(app);