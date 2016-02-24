/// <reference path="../scripts/typings/angularjs/angular.d.ts" />

namespace Etsy {

    angular.module("EtsyApp", ['ngResource', 'ui.router']).config(($stateProvider, $urlRouterProvider, $locationProvider: ng.ILocationProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "Angular/AJSViews/Home.html",
                controller: Etsy.MainController.HomeController,
                controllerAs: 'controller'
            })
            .state('list', {
                url: '/list',
                templateUrl: "Angular/AJSViews/GETRIDOFTHISVIEW.html",
                controller: Etsy.ProductControllers.ProductListController,
                controllerAs: 'controller'
            })
            //.state('list.category {
            //    url: '/:string',
            //    templateUrl: "Angular/AJSViews/User/ListByCategory.html",
            //    controller: Etsy.ProductControllers.ProductListController,
            //    controllerAs: 'controller'
            //})
            .state('details', {
                url: '/details/:id',
                templateUrl: "Angular/AJSViews/User/Details.html",
                controller: Etsy.ProductControllers.ProductDetailsController,
                controllerAs: 'controller'
            })

        $locationProvider.html5Mode(true);
    });
}