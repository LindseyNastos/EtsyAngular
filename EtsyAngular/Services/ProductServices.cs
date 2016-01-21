using EtsyAngular.Models;
using GenRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EtsyAngular.Services
{
    public class ProductServices : EtsyAngular.Services.IProductServices
    {
        private IGenericRepository _repo;
        public ProductServices(IGenericRepository repo)
        {
            this._repo = repo;
        }
        public ICollection<Product> ListProducts() {
            return _repo.Query<Product>().ToList();
        }


    }
}