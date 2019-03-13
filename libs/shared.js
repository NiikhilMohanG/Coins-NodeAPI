//This module is defined as the base, that can be used while creating services
//exports keyword is used to ensure that the functionality defined here can be accessed by other files
var base = module.exports = {};

//Dependencies
var express = require('express');

//Custom Dependencies
var fs = require("../libs/file-reader.js");

//Properties
base.Express = express();
base.File = fs;
//Get application settings
base.Settings = fs.ReadJsonSync("../resources/appsettings.json");
