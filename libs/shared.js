//This module is defined as the base, that can be used while creating services

var base = {};

//Dependencies
var Express = require('express');
var Http = require('http');
var Cors = require('cors');

//Custom Dependencies
base.FileSys = require("../libs/file-reader.js");

//Properties
base.CoinsApp = Express();

//enabling CORS
base.CoinsApp.use(Cors());

//Get application settings
base.Settings = base.FileSys.ReadJsonSync("../resources/appsettings.json");


//exports keyword is used to ensure that the functionality defined here can be accessed by other files
module.exports = base;