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
//# sourceMappingURL=ProductsController.js.map