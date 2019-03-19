//Include shared-utils to get the base controller functionalities
var base = require("./base.data");

var AppConfig = {

    //Methods
    GetAppConfig: function () {
        debugger;
        return base.MongoClient.connect(con => {
            const collection = base.MongoClient.db(base.Settings.dbname).collection("ApplicationConfiguration");
            d = collection.find().toArray(function (err, result) {
                base.MongoClient.close();
                if (err) throw err;
                AppConfig.Configs = result;
            });
        });
    },

    GetAppConfigByKey: function (_key) {
        base.MongoClient.connect(err => {
            var query = { Key: _key };
            const collection = base.MongoProvider.Client.db(base.Settings.dbname).collection("ApplicationConfiguration");
            d = collection.find(query).toArray(function (err, result) {
                base.MongoProvider.Client.close();
                if (err) throw err;
                Configs = result;
            });
        });
    }
};


module.exports = AppConfig;

