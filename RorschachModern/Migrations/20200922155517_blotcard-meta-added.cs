using Microsoft.EntityFrameworkCore.Migrations;

namespace RorschachModern.Migrations
{
    public partial class blotcardmetaadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Text",
                table: "BlotCards");

            migrationBuilder.AddColumn<string>(
                name: "CardNumeral",
                table: "BlotCards",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CommonPerceptions",
                table: "BlotCards",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FamiliarName",
                table: "BlotCards",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CardNumeral",
                table: "BlotCards");

            migrationBuilder.DropColumn(
                name: "CommonPerceptions",
                table: "BlotCards");

            migrationBuilder.DropColumn(
                name: "FamiliarName",
                table: "BlotCards");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "BlotCards",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
