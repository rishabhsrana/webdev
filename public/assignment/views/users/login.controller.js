(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, $location, UserService) {
        $scope.$location = $location;

        /* declare event handler */
        $scope.login = login;

        /* implement event handler */
        function login() {
            UserService.findUserByCredentials($scope.userLogin.username, $scope.userLogin.password, function(newUser){
                if(user == null) {
                    alert("Incorrect Credentials");
                    return;
                }
                    $rootScope.user = newUser;
                    $location.path("/profile");
            });
        }
    }
})();