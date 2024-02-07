using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Migrations
{
    /// <inheritdoc />
    public partial class TopicLessonTableEkleme : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Lessons",
                columns: table => new
                {
                    LessonId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LessonName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LessonType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LessonField = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lessons", x => x.LessonId);
                });

            migrationBuilder.CreateTable(
                name: "Topics",
                columns: table => new
                {
                    TopicId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TopicName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LessonId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Topics", x => x.TopicId);
                    table.ForeignKey(
                        name: "FK_Topics_Lessons_LessonId",
                        column: x => x.LessonId,
                        principalTable: "Lessons",
                        principalColumn: "LessonId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Description", "CategoryName" },
                values: new object[,]
                {
                    { new Guid("2225bf74-9d4a-4147-b7ca-f6f98e991cdf"), "Description 1", "Kategori 1" },
                    { new Guid("768ecb47-30aa-405d-88c6-f44700d8c2e6"), "Description 2", "Kategori 2" },
                    { new Guid("913d3414-da95-4267-9a26-d98400cdfbcf"), "Description 2", "Kategori 2" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Name", "Price" },
                values: new object[,]
                {
                    { new Guid("05214435-e400-4720-abeb-6691ec84e12a"), "Product2", 50m },
                    { new Guid("13e2ae91-1d21-4046-9363-32b4c9209a92"), "Product1", 1m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Topics_LessonId",
                table: "Topics",
                column: "LessonId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Topics");

            migrationBuilder.DropTable(
                name: "Lessons");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("2225bf74-9d4a-4147-b7ca-f6f98e991cdf"));

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("768ecb47-30aa-405d-88c6-f44700d8c2e6"));

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("913d3414-da95-4267-9a26-d98400cdfbcf"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("05214435-e400-4720-abeb-6691ec84e12a"));

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: new Guid("13e2ae91-1d21-4046-9363-32b4c9209a92"));

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
    }
}
