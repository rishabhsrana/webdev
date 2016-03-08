(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, $scope, $location, UserService){
        $scope.$location = $location;

        /* declaring event handler */
        $scope.update = update;

        /* implementing event handler */
        function update(){

            UserService.updateUser($rootScope.user._id, $scope.userProfile, function(newUser){
                $rootScope.user = newUser;
                alert("user profile has been updated");
            })
        }
    }
})();