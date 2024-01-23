using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using EntityFrameworkCore.RepositoryPattern.WebApi.Models;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public sealed class ShoppingCartRepository : Repository<ShoppingCart>
{
    public ShoppingCartRepository(ApplicationDbContext context) : base(context)
    {
    }
}
