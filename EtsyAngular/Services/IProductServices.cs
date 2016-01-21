using System;
namespace EtsyAngular.Services
{
    public interface IProductServices
    {
        System.Collections.Generic.ICollection<EtsyAngular.Models.Product> ListProducts();
    }
}
