using GenericRepository;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Newsletter.Domain.Entities;

namespace Newsletter.Infrastructure.Context;
internal sealed class ApplicationDbContext : IdentityDbContext<AppUser,IdentityRole<Guid>, Guid>, IUnitOfWork
{
    public ApplicationDbContext(DbContextOptions options): base(options)
    {
        
    }

    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Subscribe> Subscribes { get; set; }
}
