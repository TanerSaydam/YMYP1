using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NTierArchitecture.Entities.Models;

namespace NTierArchitecture.DataAccess.Context;
public sealed class ApplicationDbContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Student> Students { get; set; }
    public DbSet<ClassRoom> ClassRooms { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Student>().HasQueryFilter(filter => !filter.IsDeleted);
        modelBuilder.Entity<ClassRoom>().HasQueryFilter(filter => !filter.IsDeleted);

        modelBuilder.Ignore<IdentityUserLogin<Guid>>();
        modelBuilder.Ignore<IdentityUserRole<Guid>>();
        modelBuilder.Ignore<IdentityUserToken<Guid>>();
        modelBuilder.Ignore<IdentityUserClaim<Guid>>();
        modelBuilder.Ignore<IdentityRoleClaim<Guid>>();        
        modelBuilder.Ignore<IdentityRole<Guid>>();        
    }
}
