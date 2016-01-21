using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EtsyAngular.Models
{
    public class CartItem
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public int ShoppingCartId { get; set; }
        public ShoppingCart Cart { get; set; }
        public int Quantity { get; set; }
        //public enum Sizes { MTO, OSFA, XXS, XS, S, M, L, XL, XXL };
        public string Size { get; set; }
        public decimal Price { get; set; }
        public CartItem() 
        {
            this.Price = this.Product.Price * this.Quantity;
        }
    }
}



//static void CreateCartItem(CartItem item, int ShoppingCartId) {

//    var cart = _repo.Find<Shippingcart>(id).Include(if => iitems)List
    

//    var newItem = new CartItem() {
//        Quantity = item.Quantity,
//        Price = item.Price,
//};
//cart.items.Add<CartItem>(item)

//}