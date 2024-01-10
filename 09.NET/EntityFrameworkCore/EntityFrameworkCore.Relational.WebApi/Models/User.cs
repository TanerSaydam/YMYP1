namespace EntityFrameworkCore.Relational.WebApi.Models;

public sealed class User
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    //public ICollection<Role>? Roles { get; set; }
}
