using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RickAndMorty.WebApi.Models;
using System.Reflection.Emit;

namespace RickAndMorty.WebApi.Configurations;

public sealed class EpisodeConfiguration : IEntityTypeConfiguration<Episode>
{
    public void Configure(EntityTypeBuilder<Episode> builder)
    {
        builder.ToTable("Episodes");

        builder
           .HasMany(p => p.EpisodeCharacters)
           .WithOne()
           .OnDelete(DeleteBehavior.NoAction);

        builder
            .HasIndex(i => new { i.EpisodeNumber })
            .IsUnique();
    }
}
