//Include shared-utils to get the base controller functionalities
const shared = require("coins-shared-utils");

//Properties
var DataService = {};
DataService.MongoClient = shared.MongoProvider.Client;
DataService.Settings = shared.Settings;
DataService.PGManager = shared.PGManager;


module.exports = DataService;