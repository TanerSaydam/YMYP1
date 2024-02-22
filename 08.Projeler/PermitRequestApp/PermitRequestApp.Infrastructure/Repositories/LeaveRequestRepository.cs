using GenericRepository;
using PermitRequestApp.Domain.LeaveRequests;
using PermitRequestApp.Infrastructure.Context;

namespace PermitRequestApp.Infrastructure.Repositories;
internal sealed class LeaveRequestRepository : Repository<LeaveRequest, ApplicationDbContext>, ILeaveRequestRepository
{
    private readonly ApplicationDbContext _context;
    public LeaveRequestRepository(ApplicationDbContext context) : base(context)
    {
        _context = context;
    }

    public int FindLastFormNumber()
    {
        LeaveRequest? leaveRequest = _context.Set<LeaveRequest>().OrderByDescending(p=> p.FormNumber).FirstOrDefault();

        int lastNumber = 0;

        if (leaveRequest is not null) lastNumber = leaveRequest.FormNumber;

        return lastNumber;
    }
}
