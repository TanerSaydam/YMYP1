using EntityFrameworkCoreGrup2.eCommerce.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.eCommerce.WebAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }    

    public DbSet<Category> Categories { get; set; }
}
