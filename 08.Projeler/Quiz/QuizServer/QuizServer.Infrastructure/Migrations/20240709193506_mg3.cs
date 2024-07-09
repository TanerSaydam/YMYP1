using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuizServer.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class mg3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "QuizDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QuizId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "varchar(200)", nullable: false),
                    AnswerA = table.Column<string>(type: "varchar(100)", nullable: false),
                    AnswerB = table.Column<string>(type: "varchar(100)", nullable: false),
                    AnswerC = table.Column<string>(type: "varchar(100)", nullable: false),
                    AnswerD = table.Column<string>(type: "varchar(100)", nullable: false),
                    CorrectAnswer = table.Column<int>(type: "int", nullable: false),
                    TimeOut = table.Column<short>(type: "smallint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QuizDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_QuizDetails_Quizzes_QuizId",
                        column: x => x.QuizId,
                        principalTable: "Quizzes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_QuizDetails_QuizId",
                table: "QuizDetails",
                column: "QuizId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "QuizDetails");
        }
    }
}
