using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCore.Relational.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class AdditionalProductTablosundaProductIdAlaniKeyYapildi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AdditionalProducts",
                table: "AdditionalProducts");

            migrationBuilder.DropIndex(
                name: "IX_AdditionalProducts_ProductId",
                table: "AdditionalProducts");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "AdditionalProducts");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdditionalProducts",
                table: "AdditionalProducts",
                column: "ProductId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_AdditionalProducts",
                table: "AdditionalProducts");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "AdditionalProducts",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdditionalProducts",
                table: "AdditionalProducts",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_AdditionalProducts_ProductId",
                table: "AdditionalProducts",
                column: "ProductId",
                unique: true);
        }
    }
}
