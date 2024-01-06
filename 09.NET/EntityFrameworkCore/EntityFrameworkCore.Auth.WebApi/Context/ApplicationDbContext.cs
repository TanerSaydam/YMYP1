using EntityFrameworkCore.Auth.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.Auth.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options): base(options)
    {        
    }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }
}
