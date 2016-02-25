namespace Etsy.ProductControllers {

    export class ProductDetailsController { }

    export class ProductListController {
        public products = [];

        constructor(private productService: Etsy.ProductServices.ProductService) {
            this.productService.listProducts().then((results) => {
                this.products = results;
                console.log(this.products);
                debugger;
            });
        }
    }

    export class AddProductController {
        public newProduct;

        addProduct() {
            this.productService.save(this.newProduct).then(() =>
                this.$location.path('/')
            );
        }

        constructor(private productService: Etsy.ProductServices.ProductService, private $location: ng.ILocationService) { }
    }

    export class EditProductController {
        public productToEdit;

        editProduct() {
            this.productService.save(this.productToEdit).then(() =>
                this.$location.path('/')
            );
        }

        constructor(private productService: Etsy.ProductServices.ProductService, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            this.productToEdit = productService.getProduct($routeParams['id'])
        }
    } 

    export class DeleteProductController {
        public productToDelete;

        public deleteProduct() {
            this.productService.deleteProduct(this.productToDelete.id).then(() =>
                this.$location.path('/')
            );
        }

        constructor(private productService: Etsy.ProductServices.ProductService, private $location: ng.ILocationService, $routeParams: ng.route.IRouteParamsService) {
            this.productToDelete = productService.getProduct($routeParams['id']);
        }
    }

}