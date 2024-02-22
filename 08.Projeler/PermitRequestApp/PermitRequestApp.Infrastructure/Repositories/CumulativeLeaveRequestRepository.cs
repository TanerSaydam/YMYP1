using GenericRepository;
using PermitRequestApp.Domain.CumulativeLeaveRequests;
using PermitRequestApp.Infrastructure.Context;

namespace PermitRequestApp.Infrastructure.Repositories;
internal sealed class CumulativeLeaveRequestRepository : Repository<CumulativeLeaveRequest, ApplicationDbContext>, ICumulativeLeaveRequestRepository
{
    public CumulativeLeaveRequestRepository(ApplicationDbContext context) : base(context)
    {
    }
}
