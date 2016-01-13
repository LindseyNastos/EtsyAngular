using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EtsyAngular.Models
{
    public class Review
    {
        public int Id { get; set; }
        public ApplicationUser User { get; set; }
        public string Comment { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}