//Include shared-utils to get the base controller functionalities
var shared = require("coins-shared-utils");

//Properties
var DataService = {};
DataService.MongoClient = shared.MongoProvider.Client;
DataService.Settings = shared.Settings;



module.exports = DataService;