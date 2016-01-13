/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var Etsy;
(function (Etsy) {
    angular.module("EtsyApp", ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: "Angular/AJSViews/Home.html",
            controller: Etsy.MainController.HomeController,
            controllerAs: 'controller'
        })
            .when('/list/:string', {
            templateUrl: "Angular/AJSViews/User/ListByCategory.html",
            controller: Etsy.ProductControllers.ProductListController,
            controllerAs: 'controller'
        })
            .when('/details/:id', {
            templateUrl: "Angular/AJSViews/User/Details.html",
            controller: Etsy.ProductControllers.ProductDetailController,
            controllerAs: 'controller'
        })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    });
})(Etsy || (Etsy = {}));
//# sourceMappingURL=EtsyApp.js.map