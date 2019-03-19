//Include shared-utils to get the base controller functionalities
var base = require("coins-shared-utils");
var app = base.CoinsApp;

//Methods
app.get('/get/appsettings', function (req, res) {
    base.MongoProvider.Client.connect(err => {
        const collection = base.MongoProvider.Client.db(base.Settings.dbname).collection("Users");
        d = collection.find().toArray(function (err, result) {
            base.MongoProvider.Client.close();
            if (err) throw err;
            res.send(result);
        });
    });
});



//Invoke server method to listen
base.InvokeServer();