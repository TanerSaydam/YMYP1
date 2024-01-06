using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCore.Relational.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class CategoryTablosunaNoteAlaniEklendi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Note",
                table: "Categories");
        }
    }
}
