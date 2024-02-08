using EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkCoreGrup2.CodeFirst.WebAPI.Context;

public sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<CategoryProduct> CategoryProducts { get; set; }
    public DbSet<Topic> Topics { get; set; }
    public DbSet<Lesson> Lessons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Category>()
            .HasIndex(i => i.Name)
            .IsUnique();

        modelBuilder.Entity<Category>().ToTable("Categories");

        modelBuilder.Entity<Category>()
            .Property(p => p.Name)
            .HasColumnType("varchar(50)")
            .HasColumnName("CategoryName")
            .IsRequired();

        modelBuilder.Entity<Category>()
            .Property(p => p.Description)
            .HasColumnType("varchar(200)")
            .IsRequired(false);

        modelBuilder.Entity<Product>()
            .ToTable("Products");

        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("money");

        modelBuilder.Entity<CategoryProduct>()
            .HasKey(key => new { key.CategoryId, key.ProductId });

        Category category = new Category()
        {
            Name = "Kategori 1",
            Description = "Description 1"
        };

        List<Category> categories = new()
        {
            category,
            new Category()
            {
                Name = "Kategori 2",
                Description = "Description 2"
            },
            new Category()
            {
                Name = "Kategori 2",
                Description = "Description 2"
            }
        };

        modelBuilder.Entity<Category>()
            .HasData(categories);

        List<Product> products = new();
        Product product1 = new()
        {
            Name = "Product1",
            Price = 1m,
        };
        products.Add(product1);

        Product product2 = new();
        product2.Name = "Product2";
        product2.Price = 50m;        

        products.Add(product2);

        modelBuilder.Entity<Product>().HasData(products);
    }
}
