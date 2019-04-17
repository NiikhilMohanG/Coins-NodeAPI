
//var User = require("./../contracts/user");
const DataService = require("./../data/user.data");

var UserBusiness = {
    GetAllUsers: async function () {
        return await DataService.User.GetAllUsers();       
    }

};

module.exports = UserBusiness;