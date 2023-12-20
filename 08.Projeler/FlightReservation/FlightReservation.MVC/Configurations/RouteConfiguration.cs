using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FlightReservation.MVC.Configurations;

public sealed class RouteConfiguration : IEntityTypeConfiguration<Route>
{
    public void Configure(EntityTypeBuilder<Route> builder)
    {
        builder.ToTable("Routes");

        builder.Property(p => p.Departure).IsRequired().HasColumnType("varchar(50)");
        builder.Property(p => p.Arrival).IsRequired().HasColumnType("varchar(50)");
        builder.Property(p => p.DepartureTime).IsRequired();

        builder.HasOne(p => p.Plane).WithMany().OnDelete(DeleteBehavior.NoAction);
    }
}
