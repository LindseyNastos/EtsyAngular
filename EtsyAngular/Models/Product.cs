using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EtsyAngular.Models
{
    public class Product
    {
        public Product()
        {
            this.ColorOptions = new List<string>();
            this.Images = new List<string>();
            this.UsersFaves = new List<string>();
            this.Reviews = new List<Review>();
            this.Material = new List<string>();
        }
        public int Id { get; set; }
        public string SellerId { get; set; } 
        public ApplicationUser Seller { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public ICollection<string> Images { get; set; }
        public ICollection<string> ColorOptions { get; set; }
        public string Color { get; set; } 
        public ICollection<string> SizeOptions { get; set; }   
        public string Size { get; set; }
        public string Description { get; set; }
        public int NumAvailable { get; set; }
        public ICollection<string> UsersFaves { get; set; }
        public int NumFaves { get; set; }
        public int NumReviews { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public string ShippingInfo { get; set; }
        public bool Handmade { get; set; }
        public ICollection<string> Material { get; set; }
        public string ShipsFrom { get; set; }
    }
}