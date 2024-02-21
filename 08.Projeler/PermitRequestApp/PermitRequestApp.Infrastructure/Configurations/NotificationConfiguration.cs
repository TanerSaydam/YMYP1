using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PermitRequestApp.Domain.Notifications;

namespace PermitRequestApp.Infrastructure.Configurations;

internal sealed class NotificationConfiguration : IEntityTypeConfiguration<Notification>
{
    public void Configure(EntityTypeBuilder<Notification> builder)
    {
        builder.ToTable("Notifications");

        builder
            .HasOne(p => p.CumulativeLeaveRequest)
            .WithMany()
            .HasForeignKey(p => p.CumulativeLeaveRequestId)
            .OnDelete(DeleteBehavior.NoAction);
    }
}
