using GenericRepository;
using Microsoft.EntityFrameworkCore;
using PermitRequestApp.Domain.LeaveRequests;
using System.Reflection;

namespace PermitRequestApp.Infrastructure.Context;
internal class ApplicationDbContext : DbContext, Domain.Abstractions.IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entries = ChangeTracker.Entries<LeaveRequest>();

        foreach (var entry in entries)
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    entry.Entity.SetCreatedAt();
                    break;
                case EntityState.Modified:
                    entry.Entity.SetModifiedAt();
                    break;
            }
        }


        return base.SaveChangesAsync(cancellationToken);
    }
}
