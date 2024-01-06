using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EntityFrameworkCore.Auth.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class AppUserTableinaPhoneNumberAlaniEklendi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordSalt",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)")
                .Annotation("Relational:ColumnOrder", 5)
                .OldAnnotation("Relational:ColumnOrder", 4);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordHash",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)")
                .Annotation("Relational:ColumnOrder", 6)
                .OldAnnotation("Relational:ColumnOrder", 5);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Users",
                type: "varchar(20)",
                nullable: true)
                .Annotation("Relational:ColumnOrder", 4);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Users");

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordSalt",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)")
                .Annotation("Relational:ColumnOrder", 4)
                .OldAnnotation("Relational:ColumnOrder", 5);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PasswordHash",
                table: "Users",
                type: "varbinary(max)",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)")
                .Annotation("Relational:ColumnOrder", 5)
                .OldAnnotation("Relational:ColumnOrder", 6);
        }
    }
}
