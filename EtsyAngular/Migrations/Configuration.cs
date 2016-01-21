namespace EtsyAngular.Migrations
{
    using EtsyAngular.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EtsyAngular.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EtsyAngular.Models.ApplicationDbContext context)
        {
            var products = new Product[] { 
                new Product {
                    Id = 1,
                    Name = "Beanie",
                    Description = @"A slouchy style, soft, chunky, warm and fashionable beanie hat with patterned coconut button, 
                                    created with a delectable 100% acrylic high-quality vegan yarn. Able to be worn with practically 
                                    any outfit you desire.",
                    ColorOptions = new List<string> {"Gray", "Navy", "Black"},
                    Price = 45.00m,
                    Size = "One size fits all",
                    Images = new List<string> {
                        "https://img0.etsystatic.com/101/0/7007629/il_570xN.847881282_2uwk.jpg",
                        "https://img0.etsystatic.com/020/0/7007629/il_570xN.517322854_8sxl.jpg",
                        "https://img0.etsystatic.com/025/0/7007629/il_570xN.517430440_5vnq.jpg"
                    },
                    Handmade = true,
                    Material = new List<string> {"Acrylic yarn"},
                    ShipsFrom = "Chile",
                    ShippingInfo = @"Shipping notice : We ship with registered Chilean Mail which means your package will be delivered 
                                    with a signature so someone needs to be at home. If you are not at home when the postman comes, you 
                                    will be left a notice indicating that you should pick your package up from your local post office."
                },
                new Product {
                    Id = 2,
                    Name = "Soprano Ukulele",
                    Description = "Fret No: 15, Specification: 21 inches, Product Dimensions: 54 x 18 x 6cm",
                    Price = 55.89m,
                    Color = "Brown",
                    NumAvailable = 1,
                    Images = new List<string> {
                        "https://img1.etsystatic.com/070/0/11514785/il_570xN.814906163_i0t1.jpg",
                        "https://img1.etsystatic.com/073/0/11514785/il_570xN.814906217_ofwr.jpg",
                        "https://img1.etsystatic.com/075/0/11514785/il_570xN.814906237_3sfw.jpg"
                    },
                    Handmade = true,
                    Material = new List<string> {"Sapele", "Rosewood"},
                    ShipsFrom = "Surabaya, Indonesia",
                    ShippingInfo = "Ready to ship in 1-2 business days. Buyer is responsible for return shipping costs."
                },
                new Product {
                    Id = 3,
                    Name = "Boho Bohemian Backless Lace Tulle Wedding Dress",
                    Description = @"Boho Bohemian Backless Lace Tulle Wedding Dress,Fairly Lace Tulle Beach Wedding Dress, Sexy Low 
                                Back Beach Wedding Dress Bridal Gown W570. It’s a designer collection! When you are see listing, that’s 
                                what you are ordering. All items here are designed and handmade by CliviaDeisigns’ Team. All items are 
                                exact as pictures shown. We can custom made the dress as per the specific measurements provided so that 
                                the dress fits you perfectly. We can custom made the dress in the color you like. We can change some 
                                details to the dress as per your ideas also. Our philosophy is individuality, comfort, high quality and 
                                competitive price. We only want to make dresses for wonderful girl or women prefer quality and exclusivity. 
                                Enjoy your shopping here.",
                    Price = 358.90m,
                    Color = "Ivory",
                    Images = new List<string> {
                        "https://img1.etsystatic.com/124/0/10945645/il_570xN.892308207_iwk0.jpg",
                        "https://img0.etsystatic.com/110/0/10945645/il_570xN.892549298_nqsw.jpg",
                        "https://img0.etsystatic.com/115/0/10945645/il_570xN.892547388_iku6.jpg",
                    },
                    Handmade = true,
                    Material = new List<string> {"soft illusion tulle", "cotton lace"},
                    ShipsFrom = "London, United Kingdom to select countries",
                    ShippingInfo = "Ready to ship in 7-8 weeks."
                }
            };

            context.Products.AddOrUpdate(p => p.Name, products);
        }
    }
}
