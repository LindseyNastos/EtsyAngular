namespace EtsyAngular.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class two : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.CartItems", name: "ShoppingCart_Id", newName: "Cart_Id");
            RenameIndex(table: "dbo.CartItems", name: "IX_ShoppingCart_Id", newName: "IX_Cart_Id");
            AddColumn("dbo.Products", "Handmade", c => c.Boolean(nullable: false));
            AddColumn("dbo.Products", "ShipsFrom", c => c.String());
            AddColumn("dbo.AspNetUsers", "IsSeller", c => c.Boolean(nullable: false));
            AddColumn("dbo.CartItems", "Size", c => c.Int(nullable: false));
            AlterColumn("dbo.Products", "Size", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "Size", c => c.Int(nullable: false));
            DropColumn("dbo.CartItems", "Size");
            DropColumn("dbo.AspNetUsers", "IsSeller");
            DropColumn("dbo.Products", "ShipsFrom");
            DropColumn("dbo.Products", "Handmade");
            RenameIndex(table: "dbo.CartItems", name: "IX_Cart_Id", newName: "IX_ShoppingCart_Id");
            RenameColumn(table: "dbo.CartItems", name: "Cart_Id", newName: "ShoppingCart_Id");
        }
    }
}
