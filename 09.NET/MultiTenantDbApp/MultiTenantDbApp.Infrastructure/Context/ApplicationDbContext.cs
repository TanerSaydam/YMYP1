using Microsoft.EntityFrameworkCore;
using MultiTenantDbApp.Domain.Master.Entities;

namespace MultiTenantDbApp.Infrastructure.Context;
public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Company> Companies { get; set; }
}
