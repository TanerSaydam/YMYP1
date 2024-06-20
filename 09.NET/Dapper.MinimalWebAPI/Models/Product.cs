namespace Dapper.MinimalWebAPI.Models;

public sealed class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
}
