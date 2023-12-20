using FlightReservation.MVC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FlightReservation.MVC.Configurations;

public sealed class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("Users");

        builder.Property(p => p.FirstName).IsRequired().HasColumnType("varchar(50)");
        builder.Property(p => p.LastName).IsRequired().HasColumnType("varchar(50)");
        builder.Property(p => p.Email).IsRequired().HasColumnType("varchar(100)");
        builder.Property(p => p.Password).IsRequired().HasColumnType("varchar(15)");

        builder.HasIndex(x => x.Email).IsUnique();
    }
}
