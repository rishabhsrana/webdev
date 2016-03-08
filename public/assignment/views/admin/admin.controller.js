(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope, UserService){

        $scope.sortUsers = "username";
        $scope.reverse = false;

        /*declare event handlers*/

        $scope.addUser = addUser;
        $scope.updateUser = updateUser;
        $scope.removeUser = removeUser;
        $scope.editUser = editUser;

        /*implement event handlers*/

        UserService.findAllUsers(function(users){
            $scope.users = users;
        })

        function addUser(newUser){
            newUser.username = null;
            newUser.password = null;
            newUser.roles = newUser.roles.split(" ");
            UserService.createUser(newUser, function(response){
                $scope.response = response;
                $scope.data = [];
            })
        }

        function updateUser(user){
            user.roles = user.roles.split(" ");
            UserService.updateUser(user._id, user, function(response){
                $scope.response = response;
                $scope.data = [];
            })
        }

        function removeUser(userId){
            UserService.deleteUserById(userId, function(response){
                $scope.response = response;
            })
        }

        function editUser(response){
            $scope.response = response;
        }
    }
})();