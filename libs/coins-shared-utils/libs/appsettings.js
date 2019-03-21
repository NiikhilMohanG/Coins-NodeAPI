
//Application settings
//Loads the settings on application start and share the settings information throughout the application.

const fs = require("./file-reader.js");
const settings = fs.ReadJsonSync("./resources/appsettings.json");

//export the settings to the application to use by other modules
module.exports = settings;