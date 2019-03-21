
var dataAppConfigService = require('../data/appsettings.data');


var AppConfig = {

    GetAppConfig: function () {
        return dataAppConfigService.GetAppConfig().then(function (result) {
            return result;
        });

    }

};


module.exports = AppConfig;