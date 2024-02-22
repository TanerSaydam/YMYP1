using GenericRepository;

namespace PermitRequestApp.Domain.LeaveRequests;
public interface ILeaveRequestRepository : IRepository<LeaveRequest>
{
    int FindLastFormNumber();
}
