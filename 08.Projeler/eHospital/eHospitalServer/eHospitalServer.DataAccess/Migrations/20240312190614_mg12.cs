using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eHospitalServer.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mg12 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "ix_doctor_details_user_id",
                table: "doctor_details",
                column: "user_id");

            migrationBuilder.AddForeignKey(
                name: "fk_doctor_details_users_user_id",
                table: "doctor_details",
                column: "user_id",
                principalTable: "users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_doctor_details_users_user_id",
                table: "doctor_details");

            migrationBuilder.DropIndex(
                name: "ix_doctor_details_user_id",
                table: "doctor_details");
        }
    }
}
