using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace eHospitalServer.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mg13 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_doctor_details_users_user_id",
                table: "doctor_details");

            migrationBuilder.DropIndex(
                name: "ix_doctor_details_user_id",
                table: "doctor_details");

            migrationBuilder.DropColumn(
                name: "user_id",
                table: "doctor_details");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "user_id",
                table: "doctor_details",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

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
    }
}
