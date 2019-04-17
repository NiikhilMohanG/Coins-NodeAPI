
var dataAppConfigService = require('../data/appsettings.data');


var AppConfig = {

    GetAppConfig: async function () {
         var t = dataAppConfigService.GetAppConfig();
         console.log(t);
         return t;
    }

};


module.exports = AppConfig;