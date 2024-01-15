using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EntityFrameworkCore.IEntityTypeConfiguration.WebApi.Models;

public sealed class Category
{    
    public string Id { get; set; } = Ulid.NewUlid().ToString();
    public string Name { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }    
    public ICollection<Product>? Products { get; set; }
}

public sealed class CategoryConfiguration : IEntityTypeConfiguration<Category>
{
    public void Configure(EntityTypeBuilder<Category> builder)
    {
        builder.ToTable("Categories");

        builder.Property(p => p.Id).HasColumnType("varchar(100)");        

        builder.Property(p => p.Name).IsRequired().HasColumnType("varchar(100)");
        builder.HasIndex(x => x.Name).IsUnique();

        builder.HasMany(p => p.Products)
            .WithOne(p => p.Category)
            .HasForeignKey(p => p.CategoryId)
            .OnDelete(DeleteBehavior.NoAction);

    }
}
