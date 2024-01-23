using EntityFrameworkCore.RepositoryPattern.WebApi.Abstractions;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Models;

public sealed class ShoppingCart : Entity
{
    public int ProductId { get; set; }
    public Product? Product { get; set; }

    public int Quantity { get; set; }
}
