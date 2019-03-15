//This module is defined as the base, that can be used while creating services

var base = {};

//Dependencies
var Express = require('express');
var Http = require('http');
var Cors = require('cors');

//Custom Dependencies
base.FileSys = require('./libs/file-reader.js');
base.Settings = require('./libs/appsettings.js');
base.MongoProvider = require('./libs/mongoprovider.js');

//Properties
base.CoinsApp = Express();

//enabling CORS
base.CoinsApp.use(Cors());


//exports keyword is used to ensure that the functionality defined here can be accessed by other files
module.exports = base;