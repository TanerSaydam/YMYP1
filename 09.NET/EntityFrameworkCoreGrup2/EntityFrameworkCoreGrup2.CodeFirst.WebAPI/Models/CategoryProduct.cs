using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Models;

public sealed class CategoryProduct
{
    public Guid ProductId { get; set; }
    public Product? Product { get; set; }
    public Guid CategoryId { get; set; }
    public Category? Category { get; set; }
}
