using EntityFrameworkCoreGrup2.Linq.WebAPI.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.Linq.WebAPI.Context;

public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    //22:20 görüşelim
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }    
}


public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Author { get; set; }
}