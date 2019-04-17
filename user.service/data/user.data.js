//Include shared-utils to get the base controller functionalities
const base = require("./base.data");
const pgClient = base.PGManager.Client;
pgClient.connect();
var result;

//User
var User = {
    //methods
    CreateUser: async function (user) {
        base.MongoClient.connect(err => {
            var query = { UserId: _userId };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("Users");
            collection.insert(params).then(success => {
                return true;
            });
        });
    },

    GetAllUsers: async function () {   
        return pgClient.query("SELECT * FROM public.\"Users\"").then(data => {
            //pgClient.end();
            return data.rows;
        }).catch(e => console.error(e.stack));
    },

    GetUserDetailsById: async function (_userId) {
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






module.exports.Data = result;
module.exports.User = User;