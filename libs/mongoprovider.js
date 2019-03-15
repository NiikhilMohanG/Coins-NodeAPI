//MongoDB provider
//Initialises mongodb client and share the instance to all other modules in the application

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const Binary = require('mongodb').Binary;
const GridStore = require('mongodb').GridStore;
const Grid = require('mongodb').Grid;
const Code = require('mongodb').Code;
const BSON = require('mongodb').pure().BSON;
const fs = require("../libs/file-reader.js");

const settings = require("../libs/appsettings.js");
const uri = settings.dbconnection;
const client = new MongoClient(uri, { useNewUrlParser: true });

var MongoProvider = {
    Client: client
}

//exports the mongo client
module.exports = MongoProvider;
