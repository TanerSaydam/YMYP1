using EntityFrameworkCore.OnModelCreating.WebApi.Abstractions;

namespace EntityFrameworkCore.OnModelCreating.WebApi.Models;

public sealed class Product : Entity
{
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }
    
}
