using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ITDeskServer.Migrations
{
    /// <inheritdoc />
    public partial class usertablosunagoogleproviderekledik : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GoogleProvideId",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GoogleProvideId",
                table: "Users");
        }
    }
}
