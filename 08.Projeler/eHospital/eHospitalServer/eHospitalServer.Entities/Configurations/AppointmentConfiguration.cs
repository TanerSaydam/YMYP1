using eHospitalServer.Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace eHospitalServer.Entities.Configurations;
internal sealed class AppointmentConfiguration : IEntityTypeConfiguration<Appointment>
{
    public void Configure(EntityTypeBuilder<Appointment> builder)
    {
        builder.Property(p => p.Price).HasColumnType("money");
        builder.HasQueryFilter(filter => (!filter.Doctor!.IsDeleted || !filter.Patient!.IsDeleted) && !filter.IsItFinished);
    }
}
