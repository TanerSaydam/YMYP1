using Log.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Log.WebAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>().Property(p => p.Price).HasColumnType("money");
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        
        return base.SaveChangesAsync(cancellationToken);
    }
}
