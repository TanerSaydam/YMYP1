using ITDeskServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ITDeskServer.Context;

public sealed class ApplicationDbContext :IdentityDbContext<AppUser,AppRole,Guid>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {        
    }

    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<TicketFile> TicketFiles { get; set; }
    public DbSet<TicketDetail> TicketDetails { get; set; }
    public DbSet<AppUserRole> AppUserRoles { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<AppUserRole>().HasKey(x=> new {x.RoleId, x.UserId});

        builder.Ignore<IdentityUserRole<Guid>>();
        builder.Ignore<IdentityRoleClaim<Guid>>();
        builder.Ignore<IdentityUserClaim<Guid>>();
        builder.Ignore<IdentityUserLogin<Guid>>();
        builder.Ignore<IdentityUserToken<Guid>>();        
    }
}

