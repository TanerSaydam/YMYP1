using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuizServer.Domain.Quizes;
using QuizServer.Domain.Shared;

namespace QuizServer.Infrastructure.Configurations;
internal sealed class QuizConfiguration : IEntityTypeConfiguration<Quiz>
{
    public void Configure(EntityTypeBuilder<Quiz> builder)
    {
        builder.Property(p => p.Id)
            .HasConversion(id => id.Value, value => new Id(value));

        builder.Property(p => p.Title)
            .HasConversion(title => title.Value, value => new Title(value))
            .HasColumnType("varchar(200)");

        builder.Property(p => p.RoomNumber)
            .HasConversion(roomNumber => roomNumber.Value, value => new RoomNumber(value))
            .HasMaxLength(6);
    }
}
