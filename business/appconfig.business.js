
var dataAppConfigService = require('../data/appsettings.data');


var AppConfig = {

    GetAppConfig: function () {
        debugger;
         var t = dataAppConfigService.GetAppConfig();
         return t;
    }

};


module.exports = AppConfig;