using Microsoft.EntityFrameworkCore;
using ODataExample.Server.WebAPI.Models;

namespace ODataExample.Server.WebAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        HttpContextAccessor httpContextAccessor = new();
        var configuration = httpContextAccessor.HttpContext!.RequestServices.GetRequiredService<IConfiguration>();

        optionsBuilder.UseSqlServer(configuration.GetConnectionString("SqlServer"));
        optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);
    }

    public DbSet<Personel> Personels { get; set; }

}
