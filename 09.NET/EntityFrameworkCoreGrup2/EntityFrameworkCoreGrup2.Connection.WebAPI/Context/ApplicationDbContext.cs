using EntityFrameworkCoreGrup2.Connection.WebAPI.Utilities;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace EntityFrameworkCoreGrup2.Connection.WebAPI.Context;

public class ApplicationDbContext : DbContext
{
    //private readonly IConfiguration _configuration;
    //private readonly string? connectionString;
    //public ApplicationDbContext(IConfiguration configuration)
    //{
    //    _configuration = configuration;
    //    connectionString = _configuration.GetConnectionString("SqlServer");
    //}

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    optionsBuilder.UseSqlServer(connectionString);
    //   // optionsBuilder.UseNpgsql("");
    //}

    public ApplicationDbContext(DbContextOptions options): base(options)
    {
        
    }

    public DbSet<Personel> Personels { get; set; }
}

public class Personel
{
        
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}

public static class Constants
{    
    public static void Create()
    {
        IHttpContextAccessor httpContextAccessor = ServiceTool.ServiceProvider.GetService<IHttpContextAccessor>();



        var scoped = httpContextAccessor.HttpContext.RequestServices.CreateScope();

      

        IConfiguration configuration = ServiceTool.ServiceProvider.GetRequiredService<IConfiguration>();
        ApplicationDbContext context = ServiceTool.ServiceProvider.GetRequiredService<ApplicationDbContext>();

        string? connectionString = configuration.GetConnectionString("SqlServer");
        //Create işlemi
    }
}
