using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PermitRequestApp.Domain.CumulativeLeaveRequests;

namespace PermitRequestApp.Infrastructure.Configurations;

internal sealed class CumulativeLeaveRequestConfiguration : IEntityTypeConfiguration<CumulativeLeaveRequest>
{
    public void Configure(EntityTypeBuilder<CumulativeLeaveRequest> builder)
    {
        builder.ToTable("CumulativeLeaveRequests");
    }
}
