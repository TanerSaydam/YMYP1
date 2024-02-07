using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class seeddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Products");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "CategoryName" },
                values: new object[,]
                {
                    { new Guid("802ac204-5fbe-48dc-b5be-f40ee9a5ff81"), "Description 2", "Kategori 2" },
                    { new Guid("955ffcd3-2521-45c5-8fbb-aec1ba8bb581"), "Description 1", "Kategori 1" },
                    { new Guid("efc90faf-3124-40df-bd88-0f27f11548f4"), "Description 2", "Kategori 2" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Name", "Price" },
                values: new object[,]
                {
                    { new Guid("a805f5a5-153a-4741-b630-e96bace4484d"), "Product2", 50m },
                    { new Guid("f6e1e478-0f29-459d-8e42-39724e84fe4f"), "Product1", 1m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("802ac204-5fbe-48dc-b5be-f40ee9a5ff81"));

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("955ffcd3-2521-45c5-8fbb-aec1ba8bb581"));

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("efc90faf-3124-40df-bd88-0f27f11548f4"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("a805f5a5-153a-4741-b630-e96bace4484d"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("f6e1e478-0f29-459d-8e42-39724e84fe4f"));

            migrationBuilder.AddColumn<Guid>(
                name: "CategoryId",
                table: "Products",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }
    }
}
