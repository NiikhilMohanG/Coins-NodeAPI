//This module provides the wrapper to perform file based activities

var fs = require('fs');

var fr = module.exports = {};

var content;

//Reads the Json synchronously
//Returns the json content as object
fr.ReadJsonSync = function (filePath, encoding = 'utf8') {
    return JSON.parse(fs.readFileSync(filePath, encoding));
};


//Reads the JSON asynchronously
//Returns the JSON content as object
fr.ReadJsonAsync = function (filePath, encoding = 'utf8') {
    fs.readFile(filePath, encoding, function (err, data) {
        if (err) throw err;
        content = JSON.parse(data);
    });
    return content;
};