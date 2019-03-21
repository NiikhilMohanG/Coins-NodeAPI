//Include shared-utils to get the base controller functionalities
var Coins = require("coins-shared-utils");
var settingsService = require("../business/appconfig.business");

var router = Coins.Router;

//Methods
router.get('/appconfig', function (req, res) {
    res.send(settingsService.GetAppConfig());
});


module.exports = router;