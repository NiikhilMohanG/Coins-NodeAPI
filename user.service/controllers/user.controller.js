//Include shared-utils to get the base controller functionalities
const Coins = require("coins-shared-utils");
const business = require('../business/user.business');
var router = Coins.Router;


//Get the userdetails using id
//Uri Params{Id}
//Returns user details
router.get('/all', function (req, res) {
    business.GetAllUsers().then(users => res.send(users)).catch(e => {
        res.send(e);
    });

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