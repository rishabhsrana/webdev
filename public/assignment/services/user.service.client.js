(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService(){

/*        var api = {
            findUserByCredentials : findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser,
        };
        return api;*/

        /*Using extra input : E-mail since it's being used on Register Page */

        var users = [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		    , "email": ["alice@w.com"]  },
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		    , "email": ["bob@h.com"]    },
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		    , "email": ["charlie@b.com"]},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"], "email": ["dan@c.com"]    },
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		    , "email": ["ed@n.com"]     }
        ];

        function findUserByCredentials(username, password, callback){
            var user = null;
            for(var usr in users) {
                if(users[usr].username == username && users[usr].password == password) {
                    user = users[usr];
                    break;
                }
            }
            callback(user);
        }

        function findAllUsers(callback){
            callback(users);
        }

        function createUser(user, callback) {
            user["_id"] = (new Date).getTime();
            /*user._id = (new Date).getTime();*/
            users.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback){
            for( var usr in users) {
                if(users[usr].id == userId) {
                    break;
                }
            }
            users.splice(usr, 1);
            callback(users);
        }

        function updateUser(userId, user, callback){
            for( var usr in users) {
                if(users[usr]._id == userId) {
                    users[usr] = user;
                    break;
                }
            }
            callback(user);
        }

        return {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        }
    }
})();