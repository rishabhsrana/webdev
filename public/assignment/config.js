(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/forms", {
                    templateUrl: "views/forms/forms.view.html",
                    controller: "FormsController"
                })
                .when("/fields", {
                    templateUrl: "views/forms/fields.view.html",
                    controller: "FormsController"
                })
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .otherwise({
                    redirectTo: "/"
                })
        });
})();