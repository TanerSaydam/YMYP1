using EntityFrameworkCore.RepositoryPattern.WebApi.Context;
using EntityFrameworkCore.RepositoryPattern.WebApi.Models;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Repositories;

public sealed class OrderRepository : Repository<Order>
{
    public OrderRepository(ApplicationDbContext context) : base(context)
    {
    }
}
