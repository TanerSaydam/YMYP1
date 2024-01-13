using Microsoft.EntityFrameworkCore;
using RickAndMorty.WebApi.Configurations;
using RickAndMorty.WebApi.Models;
using System.Reflection;

namespace RickAndMorty.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }   

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
