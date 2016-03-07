
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $location){
        $scope.$location = location;
        $scope.conditionAdmin = $scope.currentUser != null && $scope.currentUser.roles.indexOf('admin')>-1;
    }
})();