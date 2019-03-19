//Include shared-utils to get the base controller functionalities
var base = require("coins-shared-utils");
var app = base.CoinsApp;

//Methods
app.get('url', function (req, res) {
    //get method
});
app.post('url',function(req,res){
    //post method
});


//Invoke server method to listen
base.InvokeServer();




//Methods


app.post('/send', function (req, res) {
    debugger;
    res.send(req.Name);
});


//Create server
base.InvokeServer(app);