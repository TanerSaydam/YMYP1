using DovizTakipServer.Domain.Entities;
using DovizTakipServer.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DovizTakipServer.Infrastructure.Configurations;
internal sealed class CurrencyConfiguration : IEntityTypeConfiguration<Currency>
{
    public void Configure(EntityTypeBuilder<Currency> builder)
    {
        builder.Property(p => p.Amount).HasColumnType("money");
        builder.Property(p => p.Type)
            .HasConversion(type => type.Value, value => CurrencyTypeEnum.FromValue(value));
    }
}
