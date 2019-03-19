
var dataAppConfigService = require('../data/appsettings.data');


var AppConfig = {


    GetAppConfig: function () {
        return dataAppConfigService.GetAppConfig();
    }

};


module.exports = AppConfig;