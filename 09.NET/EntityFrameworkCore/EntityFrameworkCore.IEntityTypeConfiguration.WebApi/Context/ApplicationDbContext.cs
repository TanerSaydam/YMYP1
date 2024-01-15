using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace EntityFrameworkCore.IEntityTypeConfiguration.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
        optionsBuilder
            //.UseLazyLoadingProxies()
            .UseSqlServer("Data Source=TANER\\SQLEXPRESS;Initial Catalog=IEntityTypeConfigurationDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False")
            .LogTo(Console.WriteLine, LogLevel.Information);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.ApplyConfiguration<Product>(new ProductConfiguration());
        //modelBuilder.ApplyConfiguration<Category>(new CategoryConfiguration());
        
        //modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());        
    }
}
