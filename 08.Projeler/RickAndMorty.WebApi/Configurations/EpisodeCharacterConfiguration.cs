using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RickAndMorty.WebApi.Models;

namespace RickAndMorty.WebApi.Configurations;

public sealed class EpisodeCharacterConfiguration : IEntityTypeConfiguration<EpisodeCharacter>
{
    public void Configure(EntityTypeBuilder<EpisodeCharacter> builder)
    {
        builder.ToTable("EpisodeCharacters");

        builder
             .HasKey(x => new { x.EpisodeId, x.CharacterId });//Composite Key       

        builder
            .HasOne<Episode>()
            .WithMany(p => p.EpisodeCharacters)
            .HasForeignKey(p => p.EpisodeId);

        builder
            .HasOne(p => p.Character)
            .WithMany()
            .HasForeignKey(p => p.CharacterId);
    }
}
