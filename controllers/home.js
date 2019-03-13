
var base = require("../libs/base.js");

var app = base.Express;

//app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.send("listening to port " + base.Settings.port);    
}).listen(base.Settings.port);