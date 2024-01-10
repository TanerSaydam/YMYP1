using EntityFrameworkCore.OnModelCreating.WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCore.OnModelCreating.WebApi.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .ToTable("Products");

        modelBuilder.Entity<Product>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<Product>()
            .Property(p=> p.Name)
            .IsRequired()
            .HasColumnType("varchar(200)");

        modelBuilder.Entity<Product>()
            .HasIndex(p => p.Name)
            .IsUnique(true);

        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .IsRequired()
            .HasColumnType("money");

        modelBuilder.Entity<Product>()
            .Property(p => p.CategoryId) //lambda expression
            .IsRequired();

        modelBuilder.Entity<Product>()
            .HasOne(p => p.Category)
            .WithMany()
            .HasForeignKey(p => p.CategoryId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Category>()
           .ToTable("Categories");

        modelBuilder.Entity<Category>()
            .Property(p => p.Name)
            .IsRequired()
            .HasColumnType("varchar(50)");

        modelBuilder.Entity<Category>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<Category>()
            .HasIndex(p => p.Name)
            .IsUnique(true);

        //modelBuilder.Entity<Category>()
        //    .HasMany(p => p.Products)
        //    .WithOne(p => p.Category)
        //    .HasForeignKey(p => p.CategoryId)
        //    .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<User>()
           .ToTable("Users");

        modelBuilder.Entity<User>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<User>()
            .HasIndex(p => p.Email)
            .IsUnique();

        modelBuilder.Entity<User>()
            .Property(p => p.FirstName)
            .IsRequired()
            .HasColumnType("varchar(100)");

        modelBuilder.Entity<User>()
           .Property(p => p.LastName)
           .IsRequired()
           .HasColumnType("varchar(100)");

        modelBuilder.Entity<User>()
           .Property(p => p.Email)
           .IsRequired()
           .HasColumnType("varchar(300)");

        modelBuilder.Entity<User>()
           .Property(p => p.Password)
           .IsRequired()
           .HasColumnType("varchar(10)");
    }
}
