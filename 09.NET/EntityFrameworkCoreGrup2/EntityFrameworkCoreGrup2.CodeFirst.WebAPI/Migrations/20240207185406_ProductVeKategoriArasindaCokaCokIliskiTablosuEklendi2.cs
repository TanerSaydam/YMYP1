using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class ProductVeKategoriArasindaCokaCokIliskiTablosuEklendi2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_CategoryProducts_ProductId",
                table: "CategoryProducts",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryProducts_Categories_CategoryId",
                table: "CategoryProducts",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryProducts_Products_ProductId",
                table: "CategoryProducts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CategoryProducts_Categories_CategoryId",
                table: "CategoryProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryProducts_Products_ProductId",
                table: "CategoryProducts");

            migrationBuilder.DropIndex(
                name: "IX_CategoryProducts_ProductId",
                table: "CategoryProducts");
        }
    }
}
