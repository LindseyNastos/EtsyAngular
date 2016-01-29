using EtsyAngular.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EtsyAngular.API
{
    public class ProductsController : ApiController
    {
        private IProductServices _service;

        public ProductsController(IProductServices service)
        {
            this._service = service;
        }
        // GET: api/Products
        public IHttpActionResult Get()
        {
            var allProducts = _service.ListProducts();
            return Ok(allProducts);
        }

        // GET: api/Products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {  
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
