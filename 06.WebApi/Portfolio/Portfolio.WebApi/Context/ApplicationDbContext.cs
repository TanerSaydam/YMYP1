using Microsoft.EntityFrameworkCore;
using Portfolio.WebApi.Models;

namespace Portfolio.WebApi.Context;

public class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-3BJ5GK9\SQLEXPRESS;Initial Catalog=ExamplePortfolioDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
    }

    public DbSet<MyInformation> MyInformations { get; set; }
    public DbSet<MySkill> MySkills { get; set; }
}
