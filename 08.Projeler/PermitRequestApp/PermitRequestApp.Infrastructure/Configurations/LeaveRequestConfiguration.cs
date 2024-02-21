using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PermitRequestApp.Domain.LeaveRequests;

namespace PermitRequestApp.Infrastructure.Configurations;

internal sealed class LeaveRequestConfiguration : IEntityTypeConfiguration<LeaveRequest>
{
    public void Configure(EntityTypeBuilder<LeaveRequest> builder)
    {
        builder.ToTable("LeaveRequests");

        builder.HasOne(p => p.CreatedBy)
            .WithMany()
            .HasForeignKey(p => p.CreatedById)
            .OnDelete(DeleteBehavior.NoAction);

        builder.HasOne(p => p.LastModifiedBy)
           .WithMany()
           .HasForeignKey(p => p.LastModifiedById)
           .OnDelete(DeleteBehavior.NoAction);
    }
}
