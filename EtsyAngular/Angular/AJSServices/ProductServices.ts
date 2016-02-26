namespace Etsy.ProductServices {

    export class ProductService {
        private ProductService;

        public listProducts() {
            return this.ProductService.query().$promise;
        }

        public save(product) {
            return this.ProductService.save(product).$promise;
        }

        public getProduct(id) {
            return this.ProductService.get({ id: id });
        }

        public deleteProduct(id) {
            return this.ProductService.delete({ id: id }).$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.ProductService = $resource('/api/products/:id');
        }
    }
    angular.module('EtsyApp').service('productService', ProductService);
}