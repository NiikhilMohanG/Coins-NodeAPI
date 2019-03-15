
//var base = require("../libs/shared.js");
var base = require("coin-shared-utils");

var app = base.CoinsApp;


//Methods
app.get('/', function (req, res) {
    var d = [];
    base.MongoProvider.Client.connect(err => {
        const collection = base.MongoProvider.Client.db(base.Settings.dbname).collection("Users");
        d = collection.find().toArray(function (err, result) {
            base.MongoProvider.Client.close();
            if (err) throw err;
            res.send(result);
        });        
    });
    //res.send(d);
});

app.post('/send', function (req, res) {
    debugger;
    res.send(req.Name);
});


//Create server
var server = app.listen(base.Settings.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});