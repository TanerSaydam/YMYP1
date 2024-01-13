using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RickAndMorty.WebApi.Models;

namespace RickAndMorty.WebApi.Configurations;

public sealed class LocationConfiguration : IEntityTypeConfiguration<Location>
{
    public void Configure(EntityTypeBuilder<Location> builder)
    {
        builder.ToTable("Locations");

        builder
            .HasMany<Character>()
            .WithOne(p => p.Location)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
