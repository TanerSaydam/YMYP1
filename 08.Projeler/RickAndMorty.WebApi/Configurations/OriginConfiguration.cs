using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RickAndMorty.WebApi.Models;

namespace RickAndMorty.WebApi.Configurations;

public sealed class OriginConfiguration : IEntityTypeConfiguration<Origin>
{
    public void Configure(EntityTypeBuilder<Origin> builder)
    {
        builder.ToTable("Origins");

        builder
            .HasMany<Character>()
            .WithOne(p => p.Origin)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
