//Provides the required authorisation and authentication for the application

var Coins = require("coins-shared-utils");

var router = Coins.Router;

var deferred = require('q');

//register user
router.get('/register', function (request, response) {
    response.send("register method");
});

//login user
router.post('/login', function (request, response) {

});



module.exports = router;
