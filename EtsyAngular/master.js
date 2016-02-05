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
            .when('/list', {
            templateUrl: "Angular/AJSViews/GETRIDOFTHISVIEW.html",
            controller: Etsy.ProductControllers.ProductListController,
            controllerAs: 'controller'
        })
            .when('/details/:id', {
            templateUrl: "Angular/AJSViews/User/Details.html",
            controller: Etsy.ProductControllers.ProductDetailsController,
            controllerAs: 'controller'
        })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    });
})(Etsy || (Etsy = {}));
/// <reference path="angular/etsyapp.ts" />
var Etsy;
(function (Etsy) {
    var MainController;
    (function (MainController) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        })();
        MainController.HomeController = HomeController;
    })(MainController = Etsy.MainController || (Etsy.MainController = {}));
})(Etsy || (Etsy = {}));
var Etsy;
(function (Etsy) {
    var ProductControllers;
    (function (ProductControllers) {
        var ProductDetailsController = (function () {
            function ProductDetailsController() {
            }
            return ProductDetailsController;
        })();
        ProductControllers.ProductDetailsController = ProductDetailsController;
        var ProductListController = (function () {
            function ProductListController(productService) {
                this.productService = productService;
                this.products = productService.listProducts();
            }
            return ProductListController;
        })();
        ProductControllers.ProductListController = ProductListController;
        var AddProductController = (function () {
            function AddProductController(productService, $location) {
                this.productService = productService;
                this.$location = $location;
            }
            AddProductController.prototype.addProduct = function () {
                var _this = this;
                this.productService.save(this.newProduct).then(function () {
                    return _this.$location.path('/');
                });
            };
            return AddProductController;
        })();
        ProductControllers.AddProductController = AddProductController;
        var EditProductController = (function () {
            function EditProductController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.productToEdit = productService.getProduct($routeParams['id']);
            }
            EditProductController.prototype.editProduct = function () {
                var _this = this;
                this.productService.save(this.productToEdit).then(function () {
                    return _this.$location.path('/');
                });
            };
            return EditProductController;
        })();
        ProductControllers.EditProductController = EditProductController;
        var DeleteProductController = (function () {
            function DeleteProductController(productService, $location, $routeParams) {
                this.productService = productService;
                this.$location = $location;
                this.productToDelete = productService.getProduct($routeParams['id']);
            }
            DeleteProductController.prototype.deleteProduct = function () {
                var _this = this;
                this.productService.deleteProduct(this.productToDelete.id).then(function () {
                    return _this.$location.path('/');
                });
            };
            return DeleteProductController;
        })();
        ProductControllers.DeleteProductController = DeleteProductController;
    })(ProductControllers = Etsy.ProductControllers || (Etsy.ProductControllers = {}));
})(Etsy || (Etsy = {}));
var Etsy;
(function (Etsy) {
    var ProductServices;
    (function (ProductServices) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.ProductService = $resource('/api/products/:id');
            }
            ProductService.prototype.listProducts = function () {
                return this.ProductService.query();
            };
            ProductService.prototype.save = function (product) {
                return this.ProductService.save(product).$promise;
            };
            ProductService.prototype.getProduct = function (id) {
                return this.ProductService.get({ id: id });
            };
            ProductService.prototype.deleteProduct = function (id) {
                return this.ProductService.delete({ id: id }).$promise;
            };
            return ProductService;
        })();
        ProductServices.ProductService = ProductService;
        angular.module('EtsyApp').service('productService', ProductService);
    })(ProductServices = Etsy.ProductServices || (Etsy.ProductServices = {}));
})(Etsy || (Etsy = {}));
//# sourceMappingURL=master.js.map