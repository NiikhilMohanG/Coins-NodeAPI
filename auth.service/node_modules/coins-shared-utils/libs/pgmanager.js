
const pg = require('pg');

const settings = require("./appsettings.js");
const uri = settings.pgconnecturl;
const client = new pg.Client(uri);


var PGManager = {
    Client: client
};

module.exports = PGManager;