namespace EntityFrameworkCore.Relational.WebApi.Models;

public sealed class Role
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    //public ICollection<User>? Users { get; set; }
}
