using Microsoft.EntityFrameworkCore;
using ODataExample2.MinimalAPI.Models;

namespace ODataExample2.MinimalAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Data Source=TANER\\SQLEXPRESS;Initial Catalog=ODataExampleDb;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False");
    }

    public DbSet<Personel> Personels { get; set; }
}
