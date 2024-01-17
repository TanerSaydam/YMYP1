using EntityFrameworkCore.RepositoryPattern.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.RepositoryPattern.WebApi.Context;

public sealed class ApplicationDbContext: DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {        
    }
    
    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }  
}
