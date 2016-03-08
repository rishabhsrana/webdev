(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($rootScope, $scope, $location){
        $scope.$location = location;
        $scope.logout = logout;

        function logout(){
            $rootScope.user = null;
            $location.path('/home');
        }
    }

})();