using EntityFrameworkCore.Transaction.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.Transaction.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {        
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<ShoppingCart> ShoppingCarts { get; set; }
    public DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .Property(p => p.Name)
            .HasColumnType("varchar(50)")
            .IsRequired();

        modelBuilder.Entity<Product>()
            .HasIndex(index => index.Name)
            .IsUnique();

        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("money")
            .IsRequired();

        modelBuilder.Entity<Order>()
            .Property(p => p.Price)
            .HasColumnType("money")
            .IsRequired();
    }
}