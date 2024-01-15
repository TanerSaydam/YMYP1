using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EntityFrameworkCore.IEntityTypeConfiguration.WebApi.Models;

public sealed class Product
{
    public string Id { get; set; } = Ulid.NewUlid().ToString();
    public string Name { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }


    [ForeignKey("Category")]
    public string CategoryId { get; set; } = Ulid.NewUlid().ToString();    
    public Category? Category { get; set; }
}

public sealed class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.ToTable("Products");

        builder.Property(p => p.Id).HasColumnType("varchar(100)");
        builder.Property(p => p.CategoryId).HasColumnType("varchar(100)");

        builder.Property(p => p.Name).IsRequired().HasColumnType("varchar(100)");
        builder.HasIndex(x => x.Name).IsUnique();

        builder.HasOne(p=> p.Category)
            .WithMany(p=> p.Products)
            .HasForeignKey(p=> p.CategoryId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
