using EntityFrameworkCore.Relational.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.Relational.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{    
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<AdditionalProduct> AdditionalProducts { get; set; }
    public DbSet<Category> Categories { get; set; }
}
