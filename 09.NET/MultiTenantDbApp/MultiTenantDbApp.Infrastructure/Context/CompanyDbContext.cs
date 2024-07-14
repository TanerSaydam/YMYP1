using Microsoft.EntityFrameworkCore;
using MultiTenantDbApp.Domain.Company.Entities;

namespace MultiTenantDbApp.Infrastructure.Context;
public sealed class CompanyDbContext : DbContext, IDbContext
{
    public string ConnectionString { get; set; } = default!;

    public CompanyDbContext()
    {

    }
    public CompanyDbContext(string connectionString)
    {
        ConnectionString = connectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(ConnectionString);
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<ShoppingCart> ShoppingCarts { get; set; }
    public DbSet<Order> Orders { get; set; }
}

public static class Context
{
    public static CompanyDbContext CreateDbContextInstance()
    {
        string connectionString = ServiceTool.GetConnectionString();
        CompanyDbContext context = new(connectionString);
        return context;
    }
}

public interface IDbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<ShoppingCart> ShoppingCarts { get; set; }
    public DbSet<Order> Orders { get; set; }
}