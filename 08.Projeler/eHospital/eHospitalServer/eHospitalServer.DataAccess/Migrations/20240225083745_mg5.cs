using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eHospitalServer.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mg5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "total",
                table: "users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "total",
                table: "users",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
