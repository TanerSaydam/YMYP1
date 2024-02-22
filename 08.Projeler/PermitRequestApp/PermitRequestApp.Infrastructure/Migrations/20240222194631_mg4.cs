using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PermitRequestApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class mg4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "RequestUserId",
                table: "LeaveRequests",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_LeaveRequests_RequestUserId",
                table: "LeaveRequests",
                column: "RequestUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_LeaveRequests_ADUsers_RequestUserId",
                table: "LeaveRequests",
                column: "RequestUserId",
                principalTable: "ADUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LeaveRequests_ADUsers_RequestUserId",
                table: "LeaveRequests");

            migrationBuilder.DropIndex(
                name: "IX_LeaveRequests_RequestUserId",
                table: "LeaveRequests");

            migrationBuilder.DropColumn(
                name: "RequestUserId",
                table: "LeaveRequests");
        }
    }
}
