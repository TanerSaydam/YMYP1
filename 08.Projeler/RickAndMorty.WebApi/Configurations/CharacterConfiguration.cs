using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RickAndMorty.WebApi.Models;

namespace RickAndMorty.WebApi.Configurations;

public sealed class CharacterConfiguration : IEntityTypeConfiguration<Character>
{
    public void Configure(EntityTypeBuilder<Character> builder)
    {
        builder.ToTable("Characters");

        builder
            .HasMany<EpisodeCharacter>()
            .WithOne(p => p.Character)
            .OnDelete(DeleteBehavior.NoAction);

        builder
            .HasOne(p => p.Location)
            .WithMany()
            .HasForeignKey(p => p.LocationId);

        builder
            .HasOne(p => p.Origin)
            .WithMany()
            .HasForeignKey(p => p.OriginId);

        builder
            .HasIndex(i => i.Url)
            .IsUnique();
    }
}
