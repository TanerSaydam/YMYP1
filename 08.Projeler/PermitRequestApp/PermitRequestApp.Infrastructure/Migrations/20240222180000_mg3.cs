using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PermitRequestApp.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class mg3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LeaveRequests_ADUsers_AssignedUserId",
                table: "LeaveRequests");

            migrationBuilder.AlterColumn<Guid>(
                name: "AssignedUserId",
                table: "LeaveRequests",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AddForeignKey(
                name: "FK_LeaveRequests_ADUsers_AssignedUserId",
                table: "LeaveRequests",
                column: "AssignedUserId",
                principalTable: "ADUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LeaveRequests_ADUsers_AssignedUserId",
                table: "LeaveRequests");

            migrationBuilder.AlterColumn<Guid>(
                name: "AssignedUserId",
                table: "LeaveRequests",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_LeaveRequests_ADUsers_AssignedUserId",
                table: "LeaveRequests",
                column: "AssignedUserId",
                principalTable: "ADUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
