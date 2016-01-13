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
        public decimal CalculateTotal() {
            var sum = 0m;
            foreach (var item in Items) {
                sum += item.Price;
            }
            return sum;
        }
        public ShoppingCart()
        {
            this.SubTotal = this.CalculateTotal();
            this.FinalTotal = this.SubTotal * 0.08m;
        }
    }
}