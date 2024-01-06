using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCore.Relational.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class ProductTablosundaAdditionalProductIliskisiIcinDeleteBehaviorOzelligiDegistirildi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdditionalProducts_Products_ProductId",
                table: "AdditionalProducts");

            migrationBuilder.AddForeignKey(
                name: "FK_AdditionalProducts_Products_ProductId",
                table: "AdditionalProducts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AdditionalProducts_Products_ProductId",
                table: "AdditionalProducts");

            migrationBuilder.AddForeignKey(
                name: "FK_AdditionalProducts_Products_ProductId",
                table: "AdditionalProducts",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
