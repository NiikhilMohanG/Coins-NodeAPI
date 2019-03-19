//Include shared-utils to get the base controller functionalities
var base = require("coins-shared-utils");
var app = base.CoinsApp;

//Methods

//Get the userdetails using id
//Uri Params{Id}
//Returns user details
app.get('/user/details', function (req, res) {
    //get method
    var userId = req.query.id;
    res.send(userId);
});

app.post('url', function (req, res) {
    //post method
});


//Create server
base.InvokeServer(app);