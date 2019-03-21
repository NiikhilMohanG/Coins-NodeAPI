//Include shared-utils to get the base controller functionalities
var Coins = require("coins-shared-utils");
var router = Coins.Router;

//Methods

//Get the userdetails using id
//Uri Params{Id}
//Returns user details
router.get('/details', function (req, res) {
    //get method
    var userId = req.query.id;
    res.send(userId);
});

router.post('url', function (req, res) {
    //post method
});

router.get('/init', function (req, res) {
    //get method
    var userId = req.query.id;
    res.send("user service initialised");
});

module.exports = router;