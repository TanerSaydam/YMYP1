using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCore.Relational.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class CategoryTablosundanNoteVeDescriptionAlanlariniKaldirdim : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "Note",
                table: "Categories");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
