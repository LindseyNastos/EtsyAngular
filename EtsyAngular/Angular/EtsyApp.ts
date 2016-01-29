/// <reference path="../scripts/typings/angularjs/angular.d.ts" />


namespace Etsy {

    angular.module("EtsyApp", ['ngRoute', 'ngResource']).config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: "Angular/AJSViews/Home.html",
                controller: Etsy.MainController.HomeController,
                controllerAs: 'controller'
            })
            .when('/list', {
                templateUrl: "Angular/AJSViews/GETRIDOFTHISVIEW.html",
                controller: Etsy.ProductControllers.ProductListController,
                controllerAs: 'controller'
            })
            //.when('/list/:string', {
            //    templateUrl: "Angular/AJSViews/User/ListByCategory.html",
            //    controller: Etsy.ProductControllers.ProductListController,
            //    controllerAs: 'controller'
            //})
            .when('/details/:id', {
                templateUrl: "Angular/AJSViews/User/Details.html",
                controller: Etsy.ProductControllers.ProductDetailsController,
                controllerAs: 'controller'
            })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    });
}