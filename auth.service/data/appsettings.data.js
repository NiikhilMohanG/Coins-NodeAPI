//Include shared-utils to get the base controller functionalities
var base = require("./base.data");

var AppConfig = {

    //Methods
    GetAppConfig: async function () {
        base.MongoClient.connect(err => {
            var query = { Key: _key };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("AppResource");
            d = collection.find(query).toArray(function (err, result) {
                base.MongoProvider.Client.close();
                if (err) throw err;
                Configs = result;
            });
        });
    },

    GetAppConfigByKey: function (_key) {
        base.MongoClient.connect(err => {
            var query = { Key: _key };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("ApplicationConfiguration");
            d = collection.find(query).toArray(function (err, result) {
                base.MongoProvider.Client.close();
                if (err) throw err;
                Configs = result;
            });
        });
        
    }
};


module.exports = AppConfig;

