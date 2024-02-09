using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NTierArchitecture.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class mg2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassRooms_ClassRooms_ClassRoomId",
                table: "ClassRooms");

            migrationBuilder.DropIndex(
                name: "IX_ClassRooms_ClassRoomId",
                table: "ClassRooms");

            migrationBuilder.DropColumn(
                name: "ClassRoomId",
                table: "ClassRooms");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ClassRoomId",
                table: "ClassRooms",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassRooms_ClassRoomId",
                table: "ClassRooms",
                column: "ClassRoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassRooms_ClassRooms_ClassRoomId",
                table: "ClassRooms",
                column: "ClassRoomId",
                principalTable: "ClassRooms",
                principalColumn: "Id");
        }
    }
}
