
var base = require("../libs/shared.js");

var app = base.CoinsApp;


//Methods
app.get('/', function(req, res) {
    res.send("listening to port " + base.Settings.port);
});

app.post('/send', function(req, res) {
    debugger;
    res.send(req.Name);
});


//Create server
var server = app.listen(base.Settings.port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});