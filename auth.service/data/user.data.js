//Include shared-utils to get the base controller functionalities
var base = require("./base.data");

//User
var User = {
    UserDetail,
    //methods
    CreateUser: function (user) {
        base.MongoClient.connect(err => {
            var query = { UserId: _userId };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("Users");
            collection.insert(params).then(success =>{
                return true;
            });
        });
    },

    GetUserDetailsById: function (_userId) {
        base.MongoClient.connect(err => {
            var query = { UserId: _userId };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("Users");
            collection.find(query).toArray(function (err, result) {
                base.MongoProvider.Client.close();
                if (err) throw err;
                User.UserDetail = result;
            });
        });
    }








};







module.exports = User;