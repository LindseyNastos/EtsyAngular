using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EtsyAngular.Models
{
    public class ShoppingCart
    {
        public int Id { get; set; }
        public ICollection<CartItem> Items { get; set; }
        public decimal SubTotal { get; set; }
        public decimal FinalTotal { get; set; }
        public void CalculateTotal() {
            foreach (var item in Items) {
                this.FinalTotal += item.Price;
            }
        }
        public ShoppingCart()
        { 
            this.FinalTotal = this.SubTotal * 0.08m;
        }
    }
}