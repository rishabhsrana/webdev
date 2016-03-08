(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($rootScope, $scope, $location, UserService){
        $scope.register = register;
        function register(){
            var verifyPassword = $scope.userRegister.verifyPassword;
            var password = $scope.userRegister.password;
            if (password != verifyPassword) {
                alert("You seem to have entered the Wrong Password!");
                return;
            }
            $scope.userRegister["firstName"] = null;
            $scope.userRegister["lastName"] = null;
            $scope.userRegister["username"] = null;
            $scope.userRegister["roles"] = [];
            $scope.userRegister["email"] = null;
            UserService.createUser($scope.userRegister, function(newUser){
                $rootScope.user = newUser;
                $location.path("/profile");
            });
        }
    }
})();
