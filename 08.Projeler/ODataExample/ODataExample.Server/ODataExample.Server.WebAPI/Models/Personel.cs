namespace ODataExample.Server.WebAPI.Models;

public sealed class Personel
{
    public int Id { get; set; }
    public string FirstName { get; set; } = default!;
    public string LastName { get; set; } = default!;
    public DateOnly DateOfBirth { get; set; }
}
