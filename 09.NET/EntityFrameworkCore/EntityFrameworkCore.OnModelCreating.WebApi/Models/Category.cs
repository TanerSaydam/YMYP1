using EntityFrameworkCore.OnModelCreating.WebApi.Abstractions;

namespace EntityFrameworkCore.OnModelCreating.WebApi.Models;

public sealed class Category : Entity
{
    public string Name { get; set; } = string.Empty;
   // public List<Product>? Products { get; set; }
}
